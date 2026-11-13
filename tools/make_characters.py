"""Sculpt the Faunora cast (pets and people) in Blender and export them as one GLB.

    blender -b --factory-startup -P tools/make_characters.py

Each character is fused from metaballs, so limbs melt into bodies like modelling clay instead of looking like
stacked primitives. Colour is painted per vertex from the nearest shape (plus extra "paint" blobs for bellies,
cheeks and stripes), and soft ambient occlusion is baked into those colours. Heads, tails, ears, arms and eyes are
separate nodes with their pivots at the joint, so the site can animate them (js/scene/cast.js).

Coordinates below are the site's: x right, y up, z toward the viewer, in metres, feet on y = 0.
"""
import math
from pathlib import Path

import bmesh
import bpy
from mathutils import Euler, Matrix, Vector
from mathutils.bvhtree import BVHTree

OUT = Path(__file__).resolve().parents[1] / "assets" / "models" / "cast.glb"
FIELD = 0.575            # a metaball's visible radius is this fraction of its element radius (threshold 0.6)
RESOLUTION = 0.02        # metaball grid, metres
AO_DISTANCE = 0.2
AO_STRENGTH = 0.5
TO_BLENDER = Matrix(((1, 0, 0), (0, 0, -1), (0, 1, 0)))   # site axes -> Blender (z up, -y forward)

INK, WHITE, BLUSH, PINK = 0x3F3B34, 0xFCFAF4, 0xE9A99A, 0xE8A7A0
CREAM, SAGE, SAGE_DEEP, GOLD, MIST, TEAL, OAT = 0xF4ECDC, 0xA9B79A, 0x6F8366, 0xCDBB74, 0xC9D4D4, 0x6E9696, 0xE4D8BF
SKIN, SKIN_TAN, SKIN_DEEP = 0xF0CFAF, 0xDDB189, 0xC4936C


def V(*p):
    return Vector(p[0] if len(p) == 1 else p)


def B(p):
    return TO_BLENDER @ V(p)


def linear(hex_color):
    def channel(c):
        c /= 255
        return c / 12.92 if c <= 0.04045 else ((c + 0.055) / 1.055) ** 2.4
    return Vector((channel(hex_color >> 16 & 255), channel(hex_color >> 8 & 255), channel(hex_color & 255)))


def site_rotation(rot):
    """Euler angles about the site's axes -> rotation matrix in Blender's axes."""
    return TO_BLENDER @ Euler(rot, 'XYZ').to_matrix() @ TO_BLENDER.inverted()


class Part:
    """One animated node: fused shapes (`ball`, `egg`, `tube`), colour-only `paint`, and unfused `solid` detail."""

    def __init__(self, pivot, parent, tris, gloss):
        self.pivot, self.parent, self.tris, self.gloss = V(pivot), parent, tris, gloss
        self.groups, self.layer, self.paints = {'main': []}, 'main', []   # each group is fused on its own
        self.verts, self.faces, self.colors = [], [], []      # solids, already in Blender space

    def g(self, name):
        """Start (or return to) a separately fused layer, e.g. hair over a head: its edge stays crisp."""
        self.layer = name
        self.groups.setdefault(name, [])
        return self

    # -- fused shapes: each entry is (distance function, colour, metaball spec)
    def ball(self, c, r, color):
        c = B(c)
        self.groups[self.layer].append((lambda p: (p - c).length / r, linear(color), ('BALL', c, r, None, None)))
        return self

    def egg(self, c, radii, color, rot=(0, 0, 0)):
        c, m = B(c), site_rotation(rot)
        sizes = Vector((radii[0], radii[2], radii[1]))          # site y/z swap along with the axes
        inv = m.inverted()
        def dist(p):
            q = inv @ (p - c)
            return math.sqrt((q.x / sizes.x) ** 2 + (q.y / sizes.y) ** 2 + (q.z / sizes.z) ** 2)
        self.groups[self.layer].append((dist, linear(color), ('ELLIPSOID', c, max(sizes), sizes / max(sizes), m.to_quaternion())))
        return self

    def tube(self, a, b, r, color):
        a, b = B(a), B(b)
        axis = b - a
        length = axis.length
        def dist(p):
            t = max(0.0, min(1.0, (p - a).dot(axis) / (length * length)))
            return (p - (a + axis * t)).length / r
        quat = Vector((1, 0, 0)).rotation_difference(axis.normalized())
        self.groups[self.layer].append((dist, linear(color), ('CAPSULE', (a + b) / 2, r, length / 2, quat)))
        return self

    def paint(self, c, radii, color, strength=1.0):
        c = B(c)
        radii = (radii,) * 3 if isinstance(radii, (int, float)) else radii
        sizes = Vector((radii[0], radii[2], radii[1]))
        self.paints.append((c, sizes, linear(color), strength))
        return self

    # -- unfused detail
    def _add(self, bm, color):
        base = len(self.verts)
        self.verts += [v.co.copy() for v in bm.verts]
        self.faces += [[base + v.index for v in f.verts] for f in bm.faces]
        self.colors += [linear(color)] * len(bm.verts)
        bm.free()
        return self

    def sphere(self, c, r, color, squash=(1, 1, 1), rot=(0, 0, 0)):
        bm = bmesh.new()
        scale = Matrix.Diagonal((squash[0], squash[2], squash[1])).to_4x4()
        bmesh.ops.create_uvsphere(bm, u_segments=14, v_segments=10, radius=r,
                                  matrix=Matrix.Translation(B(c)) @ site_rotation(rot).to_4x4() @ scale)
        return self._add(bm, color)

    def cone(self, base, r, h, direction, color, r_top=0.0, segments=14):
        """Cone or cylinder from `base` along `direction` (site axes)."""
        bm = bmesh.new()
        axis = (TO_BLENDER @ V(direction)).normalized()
        turn = Vector((0, 0, 1)).rotation_difference(axis).to_matrix().to_4x4()
        bmesh.ops.create_cone(bm, cap_ends=True, segments=segments, radius1=r, radius2=r_top, depth=h,
                              matrix=Matrix.Translation(B(base) + axis * h / 2) @ turn)
        return self._add(bm, color)

    def ring(self, c, R, r, normal, color, start=0.0, sweep=math.tau, segments=22):
        """Torus (or an arc of one) around `c`, lying in the plane perpendicular to `normal`."""
        bm = bmesh.new()
        turn = Vector((0, 0, 1)).rotation_difference((TO_BLENDER @ V(normal)).normalized()).to_matrix()
        full = abs(sweep - math.tau) < 1e-6
        rings = []
        for i in range(segments if full else segments + 1):
            a = start + sweep * i / segments
            centre, out = Vector((math.cos(a) * R, math.sin(a) * R, 0)), Vector((math.cos(a), math.sin(a), 0))
            rings.append([bm.verts.new(B(c) + turn @ (centre + out * math.cos(t) * r + Vector((0, 0, math.sin(t) * r))))
                          for t in (j * math.tau / 8 for j in range(8))])
        for i in range(len(rings) if full else len(rings) - 1):
            a, b = rings[i], rings[(i + 1) % len(rings)]
            for j in range(8):
                bm.faces.new((a[j], b[j], b[(j + 1) % 8], a[(j + 1) % 8]))
        bm.verts.index_update()
        bm.faces.index_update()
        return self._add(bm, color)


class Character:
    def __init__(self, name):
        self.name, self.parts = name, {}

    def part(self, key, pivot=(0, 0, 0), parent=None, tris=2400, gloss=False):
        self.parts[key] = Part(pivot, parent, tris, gloss)
        return self.parts[key]

    def eyes(self, centre, dx, dy, dz, r, parent='head'):
        """Glossy eyes with a catch-light, as their own node so they can blink."""
        e = self.part('eyes', pivot=V(centre) + V(0, dy, 0), parent=parent, gloss=True)
        for s in (-1, 1):
            p = V(centre) + V(s * dx, dy, dz)
            e.sphere(p, r, INK, squash=(1, 1.12, 0.7))
            e.sphere(p + V(r * 0.3, r * 0.42, r * 0.56), r * 0.3, WHITE)
        return e


# ---------- Mesh building ----------
def fuse(shapes, name):
    """Metaball surface of the given shapes, as (verts, faces) in Blender space."""
    mb = bpy.data.metaballs.new(name)            # unique names: metaballs sharing a base name fuse together
    mb.resolution, mb.threshold = RESOLUTION, 0.6
    for _, _, (kind, c, r, size, quat) in shapes:
        el = mb.elements.new(type=kind)
        el.co, el.radius = c, r / FIELD
        if kind == 'ELLIPSOID':
            el.size_x, el.size_y, el.size_z = size
            el.rotation = quat
        elif kind == 'CAPSULE':
            el.size_x, el.rotation = size, quat
    ob = bpy.data.objects.new(name, mb)
    bpy.context.scene.collection.objects.link(ob)
    graph = bpy.context.evaluated_depsgraph_get()
    graph.update()
    raw = bpy.data.objects.new(name + "_raw", bpy.data.meshes.new_from_object(ob.evaluated_get(graph)))
    bpy.data.objects.remove(ob)
    bpy.data.metaballs.remove(mb)
    return raw


def decimate(raw, tris):
    bpy.context.scene.collection.objects.link(raw)
    current = sum(len(p.vertices) - 2 for p in raw.data.polygons)
    if current > tris:
        raw.modifiers.new("decimate", 'DECIMATE').ratio = tris / current
    graph = bpy.context.evaluated_depsgraph_get()
    graph.update()
    mesh = bpy.data.meshes.new_from_object(raw.evaluated_get(graph))
    verts = [v.co.copy() for v in mesh.vertices]
    faces = [list(p.vertices) for p in mesh.polygons]
    bpy.data.meshes.remove(mesh)
    bpy.data.objects.remove(raw)
    return verts, faces


def shade(point, shapes, paints):
    """Colour of a fused vertex: the nearest shape wins, with a soft seam; then paint blobs on top."""
    total, colour = 0.0, Vector((0, 0, 0))
    for dist, c, _ in shapes:
        w = 1.0 / (dist(point) ** 32 + 1e-6)
        total += w
        colour += c * w
    colour /= total
    for c, sizes, pc, strength in paints:
        q = point - c
        d = math.sqrt((q.x / sizes.x) ** 2 + (q.y / sizes.y) ** 2 + (q.z / sizes.z) ** 2)
        t = max(0.0, min(1.0, (1.0 - d) / 0.22)) * strength
        colour = colour.lerp(pc, t * t * (3 - 2 * t))
    return colour


def hemisphere(n, count=18):
    """Evenly spread directions around normal `n` (a fixed spiral, so bakes are repeatable)."""
    tangent = n.orthogonal().normalized()
    bitangent = n.cross(tangent)
    for i in range(count):
        z = (i + 0.5) / count
        r, a = math.sqrt(1 - z * z), i * 2.39996
        yield tangent * (math.cos(a) * r) + bitangent * (math.sin(a) * r) + n * z


def build(char, materials):
    root = bpy.data.objects.new(char.name, None)
    bpy.context.scene.collection.objects.link(root)
    built = {}
    for key, part in char.parts.items():
        verts, faces, colors = [], [], []
        count = sum(len(shapes) for shapes in part.groups.values()) or 1
        for layer, shapes in part.groups.items():
            if not shapes:
                continue
            budget = max(300, int(part.tris * len(shapes) / count))
            gv, gf = decimate(fuse(shapes, f"mb_{char.name}_{key}_{layer}"), budget)
            start = len(verts)
            verts += gv
            faces += [[start + i for i in f] for f in gf]
            colors += [shade(v, shapes, part.paints) for v in gv]
        base = len(verts)
        verts += part.verts
        faces += [[base + i for i in f] for f in part.faces]
        colors += part.colors
        mesh = bpy.data.meshes.new(f"{char.name}_{key}")
        mesh.from_pydata([v - B(part.pivot) for v in verts], [], faces)
        mesh.polygons.foreach_set("use_smooth", [True] * len(mesh.polygons))
        mesh.update()
        ob = bpy.data.objects.new(f"{char.name}__{key}", mesh)
        ob.data.materials.append(materials['gloss' if part.gloss else 'clay'])
        bpy.context.scene.collection.objects.link(ob)
        built[key] = (ob, part, verts, faces, colors)

    for key, (ob, part, *_ ) in built.items():
        parent = built[part.parent][0] if part.parent else root
        ob.parent = parent
        ob.location = B(part.pivot) - (B(char.parts[part.parent].pivot) if part.parent else Vector((0, 0, 0)))

    # Ambient occlusion over the whole figure in its rest pose, multiplied into the vertex colours.
    all_verts, all_faces = [], []
    for ob, part, verts, faces, colors in built.values():
        base = len(all_verts)
        all_verts += verts
        all_faces += [[base + i for i in f] for f in faces]
    tree = BVHTree.FromPolygons(all_verts, all_faces)
    for ob, part, verts, faces, colors in built.values():
        mesh = ob.data
        layer = mesh.color_attributes.new(name="Color", type='FLOAT_COLOR', domain='POINT')
        for i, v in enumerate(mesh.vertices):
            n, origin = v.normal, verts[i] + v.normal * 0.006
            hits = sum(1 for d in hemisphere(n) if tree.ray_cast(origin, d, AO_DISTANCE)[0] is not None)
            ground = max(0.0, 1 - verts[i].z / 0.12) * 0.25 * max(0.0, -n.z)      # contact shadow under the feet
            k = 1 - AO_STRENGTH * (hits / 18) ** 0.85 - ground
            c = colors[i] * (1.0 if part.gloss else k)
            layer.data[i].color = (c.x, c.y, c.z, 1.0)
    return root


def make_materials():
    out = {}
    for name, rough in (('clay', 0.82), ('gloss', 0.18)):
        m = bpy.data.materials.new(name)
        m.use_nodes = True
        bsdf = m.node_tree.nodes["Principled BSDF"]
        bsdf.inputs["Roughness"].default_value = rough
        attr = m.node_tree.nodes.new("ShaderNodeVertexColor")
        attr.layer_name = "Color"
        m.node_tree.links.new(attr.outputs["Color"], bsdf.inputs["Base Color"])
        out[name] = m
    return out


# ---------- The cast ----------
def dog(name, pose='stand', coat=0xDDB77C, ear=0xB98A52, pale=0xF6E9D2, wear=None, fluffy=False, tongue=True):
    c = Character(name)
    b = c.part('body', tris=2000)
    fur, coat = coat, (SAGE if wear == 'sweater' else coat)   # `coat` dresses the torso; legs, head and tail stay `fur`
    if pose == 'stand':
        b.egg((0, .37, 0), (.2, .19, .3), coat).ball((0, .4, .17), .2, coat).ball((0, .38, -.2), .19, coat)
        for s in (-1, 1):
            b.tube((s * .11, .3, .2), (s * .11, .08, .2), .062, fur).egg((s * .11, .048, .235), (.072, .05, .1), pale)
            b.tube((s * .12, .3, -.22), (s * .12, .08, -.22), .066, fur).egg((s * .12, .048, -.185), (.072, .05, .1), pale)
        b.tube((0, .47, .2), (0, .6, .3), .13, fur).paint((0, .27, .1), (.17, .13, .24), pale, 0 if wear == 'sweater' else .9)
        neck, tail_at, tail_tip = V(0, .6, .3), V(0, .48, -.3), V(0, .7, -.43)
    elif pose == 'sit':
        b.egg((0, .3, -.04), (.2, .27, .2), coat, rot=(-.22, 0, 0)).ball((0, .43, .05), .17, coat)
        for s in (-1, 1):
            b.egg((s * .15, .12, -.08), (.11, .13, .17), coat).egg((s * .17, .042, .1), (.062, .044, .1), pale)
            b.tube((s * .09, .4, .15), (s * .09, .08, .19), .058, fur).egg((s * .09, .044, .225), (.066, .046, .09), pale)
        b.tube((0, .5, .06), (0, .62, .1), .12, fur).paint((0, .32, .15), (.14, .2, .12), pale, 0 if wear == 'sweater' else .9)
        neck, tail_at, tail_tip = V(0, .62, .1), V(0, .09, -.24), V(.17, .07, -.42)
    else:   # lying down, chin on paws
        b.egg((0, .17, -.02), (.22, .17, .32), coat).ball((0, .2, .2), .17, coat)
        for s in (-1, 1):
            b.tube((s * .12, .062, .26), (s * .12, .062, .48), .058, coat).egg((s * .12, .052, .51), (.066, .05, .08), pale)
            b.egg((s * .2, .1, -.2), (.1, .1, .17), coat).egg((s * .25, .045, -.08), (.06, .045, .1), pale)
        neck, tail_at, tail_tip = V(0, .2, .36), V(0, .14, -.32), V(.2, .07, -.47)

    hc = neck + (V(0, .07, .11) if pose == 'lie' else V(0, .13, .06))
    h = c.part('head', pivot=neck, tris=1900)
    h.ball(hc, .2, fur).egg(hc + V(0, -.06, .17), (.115, .085, .125), pale)
    for s in (-1, 1):
        h.egg(hc + V(s * .1, -.07, .09), (.1, .088, .1), fur)
    if fluffy:
        h.ball(hc + V(0, .15, .04), .11, fur).ball(hc + V(.1, .1, .06), .08, fur).ball(hc + V(-.1, .1, .06), .08, fur)
    h.sphere(hc + V(0, -.015, .29), .044, INK, squash=(1.15, .85, .8))
    if tongue:
        h.sphere(hc + V(0, -.125, .225), .04, PINK, squash=(.85, .35, 1.2), rot=(.5, 0, 0))
    c.eyes(hc, .086, .05, .168, .034)
    for s, key in ((-1, 'earL'), (1, 'earR')):
        c.part(key, pivot=hc + V(s * .15, .13, -.02), parent='head', tris=500) \
            .egg(hc + V(s * .205, -.015, -.02), (.056, .15, .09), ear, rot=(0, 0, s * .22))
    t = c.part('tail', pivot=tail_at, parent='body', tris=500)
    t.tube(tail_at, tail_tip, .046, fur).ball(tail_tip, .058, pale if fluffy else fur)

    collar = neck + (V(0, .0, -.03) if pose != 'lie' else V(0, .0, -.06))
    tilt = (0, .35, 1) if pose == 'lie' else (0, 1, -.55)
    if wear == 'bandana':
        b.ring(collar, .135, .028, tilt, GOLD)
        b.sphere(collar + V(0, -.1, .1), .1, GOLD, squash=(1.05, 1.0, .32), rot=(-.5, 0, 0))
    elif wear == 'sweater':
        b.ring(collar, .14, .04, tilt, SAGE)
    elif wear:
        b.ring(collar, .135, .024, tilt, wear).sphere(collar + V(0, -.09, .1), .032, GOLD)
    return c


def cat(name, pose='sit', coat=0xC9CDC9, pale=WHITE, stripe=None, collar=None, glasses=False):
    c = Character(name)
    b = c.part('body', tris=1700)
    if pose == 'sit':
        b.egg((0, .2, -.02), (.14, .2, .15), coat).paint((0, .22, .11), (.09, .15, .08), pale, .95)
        for s in (-1, 1):
            b.egg((s * .11, .09, -.04), (.08, .09, .12), coat)
            b.tube((s * .06, .26, .1), (s * .06, .06, .12), .04, coat).egg((s * .06, .034, .14), (.046, .034, .06), pale)
        neck, tail = V(0, .38, .03), [V(.05, .05, -.15), V(.2, .05, -.18), V(.25, .06, -.02), V(.2, .07, .12)]
    elif pose == 'stand':
        b.egg((0, .25, 0), (.12, .12, .22), coat).paint((0, .19, .04), (.09, .07, .18), pale, .9)
        for s in (-1, 1):
            for z in (-.14, .14):
                b.tube((s * .07, .2, z), (s * .07, .055, z), .038, coat).egg((s * .07, .032, z + .02), (.044, .032, .058), pale)
        neck, tail = V(0, .33, .19), [V(0, .3, -.21), V(0, .46, -.3), V(0, .6, -.27), V(0, .68, -.2)]
    else:   # loaf
        b.egg((0, .13, 0), (.16, .13, .22), coat).paint((0, .1, .2), (.1, .09, .08), pale, .9)
        for s in (-1, 1):
            b.egg((s * .07, .035, .2), (.05, .035, .06), pale)
        neck, tail = V(0, .2, .17), [V(.06, .05, -.2), V(.2, .05, -.16), V(.24, .05, 0)]

    hc = neck + V(0, .11, .04)
    h = c.part('head', pivot=neck, tris=1700)
    h.ball(hc, .15, coat).egg(hc + V(0, -.05, .11), (.062, .046, .055), pale).paint(hc + V(0, -.07, .1), (.09, .07, .08), pale, .9)
    for s in (-1, 1):
        h.egg(hc + V(s * .085, -.05, .055), (.08, .066, .08), coat)
        h.cone(hc + V(s * .09, .085, -.01), .062, .13, (s * .28, 1, 0), coat, segments=10)
        h.cone(hc + V(s * .09, .09, .012), .04, .09, (s * .28, 1, .05), BLUSH, segments=8)
    h.sphere(hc + V(0, -.028, .168), .017, PINK, squash=(1.2, .8, .8))
    if stripe:
        for i in range(3):
            h.paint(hc + V((i - 1) * .055, .13, .03), (.018, .05, .07), stripe, .9)
            b.paint((0, b_top(pose), -.1 + i * .1), (.17, .06, .028), stripe, .85)
    if glasses:
        for s in (-1, 1):
            h.ring(hc + V(s * .066, .022, .152), .047, .007, (0, 0, 1), INK)
        h.cone(hc + V(-.02, .022, .152), .006, .04, (1, 0, 0), INK, r_top=.006, segments=6)
    c.eyes(hc, .066, .02, .124, .029)
    t = c.part('tail', pivot=tail[0], parent='body', tris=600)
    for a, z in zip(tail, tail[1:]):
        t.tube(a, z, .03, coat)
    t.ball(tail[-1], .034, pale if stripe is None else stripe)
    if collar:
        b.ring(neck + V(0, -.02, 0), .1, .016, (0, 1, -.2), collar).sphere(neck + V(0, -.06, .1), .024, GOLD)
    return c


def b_top(pose):
    return {'sit': .38, 'stand': .36, 'loaf': .25}[pose]


def pig(name, coat=0xEFC3BA, deep=0xDD9F97):
    c = Character(name)
    b = c.part('body', tris=2000)
    b.egg((0, .31, 0), (.27, .25, .34), coat).paint((0, .16, .05), (.2, .12, .26), 0xF6D9D0, .8)
    for s in (-1, 1):
        for z in (-.18, .18):
            b.tube((s * .14, .22, z), (s * .14, .075, z), .066, coat).egg((s * .14, .04, z + .01), (.066, .042, .075), deep)
    neck = V(0, .36, .27)
    hc = neck + V(0, .07, .1)
    h = c.part('head', pivot=neck, tris=1900)
    h.ball(hc, .22, coat).egg(hc + V(0, -.04, .16), (.12, .1, .1), coat)
    for s in (-1, 1):
        h.paint(hc + V(s * .14, -.07, .13), .06, BLUSH, .7)
    h.cone(hc + V(0, -.04, .2), .092, .07, (0, 0, 1), deep, r_top=.084, segments=18)
    for s in (-1, 1):
        h.sphere(hc + V(s * .032, -.04, .27), .017, 0x9C5F5A, squash=(.8, 1.2, .5))
    c.eyes(hc, .095, .055, .175, .032)
    for s, key in ((-1, 'earL'), (1, 'earR')):
        c.part(key, pivot=hc + V(s * .13, .17, .0), parent='head', tris=400) \
            .egg(hc + V(s * .17, .19, .05), (.08, .1, .035), deep, rot=(.75, 0, s * -.5))
    t = c.part('tail', pivot=V(0, .44, -.33), parent='body', tris=300)
    t.ring(V(0, .47, -.37), .045, .017, (1, 0, .3), deep).ring(V(.03, .5, -.4), .035, .015, (1, 0, -.4), deep, sweep=4.2)
    # CEO's bow tie
    for s in (-1, 1):
        b.cone(neck + V(s * .1, -.08, .2), .055, .1, (-s, 0, 0), INK, segments=10)
    b.sphere(neck + V(0, -.08, .21), .03, INK)
    return c


def deer(name, coat=0xCFA57A, pale=0xF6EAD6, antler=0xA98A66):
    c = Character(name)
    b = c.part('body', tris=2000)
    b.egg((0, .63, 0), (.16, .16, .3), coat).ball((0, .66, .17), .16, coat).paint((0, .52, .05), (.12, .09, .26), pale, .9)
    for s in (-1, 1):
        for z in (-.2, .2):
            b.tube((s * .09, .55, z), (s * .09, .09, z), .04, coat).egg((s * .09, .04, z + .01), (.046, .042, .056), 0x5B4636)
    for x, z in ((-.07, -.12), (.06, .0), (-.02, .13), (.08, -.22), (-.09, .05)):
        b.paint((x, .77 - abs(x) * .3, z), .028, pale, 1)
    b.tube((0, .72, .22), (0, 1.0, .34), .085, coat).paint((0, .8, .32), (.06, .16, .05), pale, .85)
    neck = V(0, 1.0, .34)
    hc = neck + V(0, .09, .04)
    h = c.part('head', pivot=neck, tris=1700)
    h.ball(hc, .135, coat).egg(hc + V(0, -.03, .13), (.078, .07, .11), pale)
    for s in (-1, 1):
        h.paint(hc + V(s * .09, -.05, .09), .04, BLUSH, .6)
    h.sphere(hc + V(0, .0, .235), .03, INK, squash=(1.1, .85, .8))
    for s in (-1, 1):   # antlers: a main beam and two tines
        root = hc + V(s * .06, .1, -.02)
        h.cone(root, .016, .26, (s * .3, 1, -.1), antler, r_top=.011, segments=8)
        h.cone(root + V(s * .045, .14, -.014), .012, .12, (s * 1, .7, .2), antler, r_top=.007, segments=8)
        h.cone(root + V(s * .07, .22, -.024), .011, .1, (-s * .5, 1, 0), antler, r_top=.006, segments=8)
    # CMO's flower crown
    for i, col in enumerate((BLUSH, WHITE, GOLD, BLUSH, WHITE, GOLD, BLUSH)):
        a = -1.2 + i * .4
        h.sphere(hc + V(math.sin(a) * .12, .115, math.cos(a) * .1 + .0), .028, col)
        h.sphere(hc + V(math.sin(a + .2) * .125, .1, math.cos(a + .2) * .105), .02, SAGE_DEEP)
    c.eyes(hc, .078, .02, .105, .028)
    for s, key in ((-1, 'earL'), (1, 'earR')):
        e = c.part(key, pivot=hc + V(s * .1, .06, -.03), parent='head', tris=400)
        e.egg(hc + V(s * .2, .09, -.03), (.11, .05, .03), coat, rot=(0, .3 * s, s * .35)).paint(hc + V(s * .2, .09, .0), (.07, .03, .03), BLUSH, .8)
    c.part('tail', pivot=V(0, .7, -.3), parent='body', tris=300).ball((0, .72, -.34), .06, pale)
    return c


def chicken(name, coat=0xFBF4E6):
    c = Character(name)
    b = c.part('body', tris=1600)
    b.egg((0, .2, 0), (.12, .13, .16), coat).egg((0, .3, -.15), (.05, .1, .06), coat, rot=(-.5, 0, 0))
    for s in (-1, 1):
        b.paint((s * .11, .2, -.02), (.05, .08, .11), 0xEADFC8, .9)
        b.cone((s * .05, 0, .0), .012, .09, (0, 1, 0), 0xE2A657, r_top=.012, segments=6)
        b.sphere((s * .05, .01, .025), .03, 0xE2A657, squash=(1, .3, 1.3))
    b.tube((0, .28, .08), (0, .38, .12), .06, coat)
    neck = V(0, .3, .08)
    hc = V(0, .42, .13)
    h = c.part('head', pivot=neck, tris=900)
    h.ball(hc, .075, coat)
    h.cone(hc + V(0, -.005, .06), .028, .06, (0, -.15, 1), 0xE2A657, segments=8)
    for i in range(3):
        h.sphere(hc + V(0, .075 - i * .004, .03 - i * .034), .026, 0xD9705C)
    h.sphere(hc + V(0, -.065, .055), .022, 0xD9705C, squash=(.8, 1.3, .8))
    c.eyes(hc, .058, .012, .04, .015)
    return c


def person(name, seated=False, coat=WHITE, pants=0x7D786C, skin=SKIN, hair=0x4A3B30, style='short', arms='down',
           shoes=0x5B5750, apron=None, hat=None, glasses=False, scope=False, hijab=None, headphones=False, scarf=None):
    """A chibi figure about 1.3 m tall (the site scales it up). Clothes, hair and skin are separate clay layers."""
    c = Character(name)
    b = c.part('body', tris=2400)
    b.g('legs')
    for s in (-1, 1):
        if seated:
            b.tube((s * .09, .5, .0), (s * .09, .5, .3), .08, pants).tube((s * .09, .48, .32), (s * .09, .11, .32), .068, pants)
        else:
            b.tube((s * .09, .4, 0), (s * .09, .11, 0), .075, pants)
    b.g('shoes')
    for s in (-1, 1):
        b.egg((s * .09, .05, .36 if seated else .036), (.076, .05, .12), shoes)
    ty = .5 if seated else .37
    b.g('torso').egg((0, ty + .22, 0), (.19, .25, .15), coat).ball((0, ty + .35, 0), .17, coat)
    b.g('skin').tube((0, ty + .44, 0), (0, ty + .56, 0), .07, skin)
    if apron:
        b.g('apron').egg((0, ty + .2, .07), (.165, .25, .12), apron)
        b.ring((0, ty + .27, .01), .188, .016, (0, 1, 0), apron).ring((0, ty + .43, .04), .1, .013, (0, 1, -.7), apron)
        b.sphere((0, ty + .2, .192), .05, WHITE, squash=(1.3, 1, .25))        # pocket
    else:
        for i in range(2):   # buttons
            b.sphere((0, ty + .3 - i * .1, .148 + i * .012), .016, 0xCDBB74 if coat == WHITE else WHITE, squash=(1, 1, .5))
    if scarf:
        b.ring((0, ty + .47, .0), .1, .04, (0, 1, -.15), scarf).sphere((.07, ty + .37, .13), .05, scarf, squash=(.8, 1.4, .5))
    if scope:
        b.ring((0, ty + .43, .03), .115, .012, (0, 1, -.55), INK).sphere((.04, ty + .21, .158), .03, 0xC9CCC8, squash=(1, 1, .5))

    neck = V(0, ty + .52, 0)
    hc = neck + V(0, .2, .01)
    h = c.part('head', pivot=neck, tris=2600)
    h.g('skin').ball(hc, .21, skin).egg(hc + V(0, -.03, .08), (.17, .175, .13), skin).ball(hc + V(0, -.045, .212), .026, skin)
    for s in (-1, 1):
        h.ball(hc + V(s * .205, -.02, 0), .045, skin).paint(hc + V(s * .125, -.09, .17), .05, BLUSH, .8)
    h.g('hair')
    if hijab:
        h.egg(hc + V(0, .035, -.045), (.252, .25, .24), hijab).egg(hc + V(0, -.23, -.02), (.2, .11, .18), hijab)
        h.egg(hc + V(0, .19, .1), (.2, .075, .12), hijab, rot=(.45, 0, 0))
        for s in (-1, 1):
            h.egg(hc + V(s * .19, -.04, .03), (.07, .2, .14), hijab)
    else:
        h.egg(hc + V(0, .09, -.05), (.238, .185, .24), hair)                       # crown and back
        h.egg(hc + V(.03, .185, .1), (.19, .07, .13), hair, rot=(.42, 0, -.12))    # swept fringe
        if style == 'bun':
            h.ball(hc + V(0, .26, -.09), .095, hair)
        elif style == 'bob':
            for s in (-1, 1):
                h.egg(hc + V(s * .19, -.07, -.03), (.075, .18, .15), hair)
        elif style == 'pony':
            h.tube(hc + V(0, .12, -.2), hc + V(0, -.14, -.3), .06, hair).ball(hc + V(0, -.16, -.3), .075, hair)
        elif style == 'curly':
            for a in range(8):
                h.ball(hc + V(math.sin(a * .8 - 2.8) * .2, .15 + (a % 2) * .05, math.cos(a * .8 - 2.8) * .12 - .04), .085, hair)
    face = .236   # how far in front of the head centre the features sit
    h.ring(hc + V(0, -.085, face - .012), .042, .009, (0, .25, 1), 0x7A4A3E, start=math.pi * 1.15, sweep=math.pi * .7, segments=10)   # smile
    brow = 0x4A3B30 if hijab else hair
    for s in (-1, 1):
        h.ring(hc + V(s * .082, .0, face - .012), .05, .0085, (s * .25, .2, 1), brow, start=math.pi * .32, sweep=math.pi * .36, segments=6)
    if glasses:
        for s in (-1, 1):
            h.ring(hc + V(s * .082, -.02, face + .012), .054, .008, (s * .25, 0, 1), INK)
        h.cone(hc + V(-.03, -.02, face + .028), .006, .06, (1, 0, 0), INK, r_top=.006, segments=6)
    if hat == 'toque':
        h.cone(hc + V(0, .2, -.02), .16, .12, (0, 1, 0), WHITE, r_top=.17, segments=20).sphere(hc + V(0, .36, -.02), .21, WHITE, squash=(1, .6, 1))
    elif hat == 'straw':
        h.cone(hc + V(0, .2, -.01), .36, .028, (0, 1, 0), 0xE2CC9A, r_top=.35, segments=24)
        h.sphere(hc + V(0, .22, -.01), .21, 0xE2CC9A, squash=(1, .68, 1)).ring(hc + V(0, .245, -.01), .2, .018, (0, 1, 0), SAGE_DEEP)
    if headphones:
        h.ring(hc + V(0, .03, -.02), .262, .018, (0, 0, 1), INK, start=.2, sweep=math.pi - .4, segments=14)
        for s in (-1, 1):
            h.cone(hc + V(s * .215, -.02, -.02), .075, .06, (s, 0, 0), SAGE, r_top=.062, segments=14)
    c.eyes(hc, .082, -.022, face - .014, .034)

    hands = {'down': V(.26, ty + .1, .03), 'desk': V(.15, ty + .3, .3), 'reach': V(.17, ty + .42, .3), 'wave': V(.4, ty + .7, .06)}
    for s, key in ((-1, 'armL'), (1, 'armR')):
        pose = arms if isinstance(arms, str) else arms[0 if s < 0 else 1]
        hand = V(hands[pose].x * s, hands[pose].y, hands[pose].z)
        shoulder = V(s * .2, ty + .4, 0)
        a = c.part(key, pivot=shoulder, parent='body', tris=800)
        a.g('sleeve').tube(shoulder, shoulder.lerp(hand, .86), .06, coat)
        a.g('hand').ball(hand, .06, skin)
    return c

CAST = [
    lambda: dog('dog_gold_stand', 'stand', wear='bandana'),
    lambda: dog('dog_gold_sit', 'sit', wear=TEAL),
    lambda: dog('dog_gold_lie', 'lie', wear=TEAL, tongue=False),
    lambda: dog('dog_white_sit', 'sit', coat=0xF8F1E4, ear=0xE6D5BA, pale=0xFFFBF2, wear='sweater', fluffy=True),
    lambda: dog('dog_white_stand', 'stand', coat=0xF8F1E4, ear=0xE6D5BA, pale=0xFFFBF2, wear=BLUSH, fluffy=True),
    lambda: dog('dog_brown_stand', 'stand', coat=0xB98A5E, ear=0x8A6444, pale=0xF1DFC4, wear=SAGE),
    lambda: cat('cat_orange_sit', 'sit', coat=0xE8B987, stripe=0xD49A60, collar=TEAL),
    lambda: cat('cat_orange_loaf', 'loaf', coat=0xE8B987, stripe=0xD49A60),
    lambda: cat('cat_grey_loaf', 'loaf', coat=0xA9AFAD, stripe=0x868C8A),
    lambda: cat('cat_grey_sit', 'sit', coat=0xC9CDC9, stripe=0xA4AAA8, glasses=True, collar=GOLD),
    lambda: cat('cat_black_stand', 'stand', coat=0x5B5750, pale=WHITE, collar=BLUSH),
    lambda: pig('pig'),
    lambda: deer('deer'),
    lambda: chicken('chicken'),
    lambda: person('nutritionist', seated=True, coat=WHITE, hijab=SAGE, arms='desk', scope=True, skin=SKIN_TAN),
    lambda: person('client', seated=True, coat=BLUSH, pants=OAT, hair=0x6B4A36, style='bob', arms='down', scarf=CREAM),
    lambda: person('cook', coat=WHITE, apron=SAGE, hair=0x3E332B, hat='toque', arms='reach', skin=SKIN_TAN),
    lambda: person('shopkeeper', coat=CREAM, apron=SAGE_DEEP, hair=0x6B4A36, style='bun', arms=('down', 'wave')),
    lambda: person('farmer', coat=OAT, pants=0x6F8366, hair=0x3E332B, hat='straw', arms='reach', skin=SKIN_DEEP, scarf=0xD9705C),
    lambda: person('guest', seated=True, coat=OAT, pants=TEAL, hair=0x2F2823, style='curly', arms='down', skin=SKIN_DEEP),
    lambda: person('student_a', seated=True, coat=SAGE, hair=0x2F2823, arms='desk', glasses=True),
    lambda: person('student_b', seated=True, coat=BLUSH, pants=TEAL, hair=0x5B4636, style='pony', arms='desk'),
    lambda: person('student_c', seated=True, coat=MIST, hair=0x3E332B, arms='desk', headphones=True, skin=SKIN_TAN),
    lambda: person('student_d', seated=True, coat=GOLD, pants=OAT, hair=0x2F2823, style='bun', arms='desk', skin=SKIN_DEEP),
]


def lettering(name, text, color, materials, height=1.0, depth=0.06):
    """The wordmark as chunky 3D letters, upright and facing the viewer, standing on y = 0."""
    curve = bpy.data.curves.new(name + "_curve", 'FONT')
    curve.body, curve.size, curve.align_x = text, height, 'CENTER'
    curve.space_character = 1.12          # room for the bevel between the italic letters
    curve.extrude, curve.bevel_depth, curve.bevel_resolution, curve.resolution_u = depth, 0.018, 1, 3
    font = Path(__file__).parent / "fonts" / "CormorantGaramond-Italic.ttf"
    if font.exists():
        curve.font = bpy.data.fonts.load(str(font))
    ob = bpy.data.objects.new(name + "_text", curve)
    bpy.context.scene.collection.objects.link(ob)
    graph = bpy.context.evaluated_depsgraph_get()
    graph.update()
    mesh = bpy.data.meshes.new_from_object(ob.evaluated_get(graph))
    bpy.data.objects.remove(ob)
    mesh.transform(Matrix.Rotation(math.pi / 2, 4, 'X'))          # lying flat -> standing, facing -y (the viewer)
    low = min(v.co.z for v in mesh.vertices)
    mesh.transform(Matrix.Translation((0, 0, -low)))
    layer = mesh.color_attributes.new(name="Color", type='FLOAT_COLOR', domain='POINT')
    c = linear(color)
    for item in layer.data:
        item.color = (c.x, c.y, c.z, 1.0)
    mesh.materials.append(materials['clay'])
    root = bpy.data.objects.new(name, mesh)
    bpy.context.scene.collection.objects.link(root)
    return root


def main():
    bpy.ops.wm.read_factory_settings(use_empty=True)
    materials = make_materials()
    for i, make in enumerate(CAST):
        root = build(make(), materials)
        print(f"built {root.name} ({i + 1}/{len(CAST)})", flush=True)
    lettering('sign_faunora', 'Faunora', SAGE_DEEP, materials)
    OUT.parent.mkdir(parents=True, exist_ok=True)
    bpy.ops.export_scene.gltf(filepath=str(OUT), export_format='GLB', export_yup=True, export_apply=False,
                              export_vertex_color='MATERIAL', export_all_vertex_colors=False,
                              export_animations=False, export_cameras=False, export_lights=False)
    print(f"wrote {OUT} ({OUT.stat().st_size // 1024} KB)")


if __name__ == "__main__":
    main()
