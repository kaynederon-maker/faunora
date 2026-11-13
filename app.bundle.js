(()=>{var ce=(i,e=document)=>e.querySelector(i),Dt=(i,e=document)=>[...e.querySelectorAll(i)],pn=matchMedia("(prefers-reduced-motion: reduce)").matches,tr=i=>"Rp "+i.toLocaleString("id-ID"),en={get(i,e){try{let t=localStorage.getItem(i);return t===null?e:JSON.parse(t)}catch{return e}},set(i,e){try{localStorage.setItem(i,JSON.stringify(e))}catch{}}},md;function ua(i){let e=ce("#toast");e.textContent=i,e.classList.add("show"),clearTimeout(md),md=setTimeout(()=>e.classList.remove("show"),3400)}var fn=[{id:"home",label:"Home",title:"The Faunora house",az:.7,fit:[23,17.5],accent:"#A9B79A"},{id:"consult",label:"Consult",title:"Consultation room",az:.62,fit:[9.6,6.4],accent:"#A9C4C4"},{id:"kitchen",label:"Catering",title:"The kitchen",az:.8,fit:[10.2,6.6],accent:"#D9C87F"},{id:"shop",label:"Shop",title:"The shop",az:.6,fit:[9.6,6.4],accent:"#E5C4B5"},{id:"reviews",label:"Reviews",title:"The lounge",az:.82,fit:[9.6,6.4],accent:"#B5C4A6"},{id:"story",label:"Story",title:"The study",az:.6,fit:[9.6,6.6],accent:"#DCC6A2"},{id:"team",label:"Team",title:"The rooftop",az:.8,fit:[9.4,6.2],accent:"#A9B79A"}],Sl={meals:"rgba(169,183,154,.28)",snacks:"rgba(205,187,116,.25)",toys:"rgba(229,196,181,.35)",fashion:"rgba(201,212,212,.4)"},gd=[["all","All"],["meals","Meals"],["snacks","Snacks"],["toys","Toys"],["fashion","Fashion"]],rs=[{id:"m1",cat:"meals",name:"Garden Lamb Bowl",desc:"Lamb, brown rice, pumpkin and peas. Cooked fresh, portioned per meal.",tags:["Dog","Adult"],price:68e3},{id:"m2",cat:"meals",name:"Ocean Tuna P\xE2t\xE9",desc:"Grain-free tuna and sardine p\xE2t\xE9 with taurine for indoor cats.",tags:["Cat","Grain-free"],price:32e3},{id:"m3",cat:"meals",name:"Slim & Sage Chicken",desc:"Lean chicken, zucchini and oats. Built for weight-management plans.",tags:["Dog","Low-fat"],price:72e3},{id:"m4",cat:"meals",name:"Senior Soft Salmon",desc:"Gently baked salmon with mashed sweet potato, soft on older teeth and kidneys.",tags:["Cat","Senior"],price:38e3},{id:"m5",cat:"meals",name:"Farmhouse Beef Stew",desc:"Slow-cooked beef with carrot, potato and green beans, with extra calcium for growing dogs.",tags:["Dog","Puppy"],price:74e3},{id:"m6",cat:"meals",name:"Chicken & Pumpkin Mousse",desc:"Silky chicken and pumpkin mousse, easy on small or sensitive tummies.",tags:["Cat","Kitten"],price:34e3},{id:"m7",cat:"meals",name:"Turkey Quinoa Bowl",desc:"Lean turkey, quinoa, spinach and sweet potato. One protein, gentle on digestion.",tags:["Dog","Sensitive"],price:76e3},{id:"m8",cat:"meals",name:"Mackerel Rice Congee",desc:"Soft rice congee with flaked mackerel: a high-moisture meal for cats who rarely drink.",tags:["Cat","Hydration"],price:36e3},{id:"s1",cat:"snacks",name:"Pumpkin Paw Biscuits",desc:"Oven-baked, three ingredients, no added salt or sugar.",tags:["Dog","Hypoallergenic"],price:45e3},{id:"s2",cat:"snacks",name:"Freeze-Dried Chicken Hearts",desc:"Single-ingredient training treats. One jar, many good boys.",tags:["Dog & Cat","Single protein"],price:59e3},{id:"s3",cat:"snacks",name:"Sweet Potato Chews",desc:"Slow-dried sweet potato slices. One ingredient and a long, quiet chew.",tags:["Dog","Vegan"],price:42e3},{id:"s4",cat:"snacks",name:"Salmon Skin Crisps",desc:"Air-dried salmon skin, rich in omega-3 for skin and coat.",tags:["Dog & Cat","Omega-3"],price:62e3},{id:"s5",cat:"snacks",name:"Catnip Tuna Bites",desc:"Crunchy baked tuna bites with a pinch of dried catnip.",tags:["Cat","Crunchy"],price:39e3},{id:"s6",cat:"snacks",name:"Coconut Yoghurt Drops",desc:"Freeze-dried yoghurt drops with live cultures, for after tummy trouble.",tags:["Dog","Probiotic"],price:48e3},{id:"t1",cat:"toys",name:"Linen Knot Rope",desc:"Undyed cotton-linen rope for tugging and teeth cleaning.",tags:["Dog"],price:55e3},{id:"t2",cat:"toys",name:"Felt Kitty Trio",desc:"Hand-stitched wool felt kitties in sage, blush and oat, lightly scented with catnip.",tags:["Cat"],price:49e3},{id:"t3",cat:"toys",name:"Wool Felt Balls",desc:"Five hand-felted wool balls in Faunora colours. Quiet on the floor at 3 am.",tags:["Cat"],price:39e3},{id:"t4",cat:"toys",name:"Canvas Pup Plush",desc:"A double-stitched cotton canvas pup, stuffed with recycled fibre. Built to be carried everywhere.",tags:["Dog"],price:59e3},{id:"t5",cat:"toys",name:"Feather Wand",desc:"Beech handle, jute cord and soft feathers for ten good minutes of hunting.",tags:["Cat"],price:45e3},{id:"t6",cat:"toys",name:"Snuffle Mat",desc:"Felt strips that hide a meal and turn dinner into a sniffing game.",tags:["Dog","Enrichment"],price:119e3},{id:"f1",cat:"fashion",name:"Sage Knit Sweater",desc:"Soft knit for air-conditioned rooms and rainy evenings. Sizes XS\u2013L.",tags:["Dog & Cat"],price:129e3},{id:"f2",cat:"fashion",name:"Canvas Bandana",desc:"Washed canvas in Faunora gold, with an adjustable tie.",tags:["Dog & Cat"],price:65e3},{id:"f3",cat:"fashion",name:"Linen Collar",desc:"Washed linen over strong webbing, with a brass buckle. Sizes XS\u2013L.",tags:["Dog & Cat"],price:79e3},{id:"f4",cat:"fashion",name:"Oat Raincoat",desc:"Lightweight, water-repellent and hooded, for sudden afternoon rain.",tags:["Dog"],price:149e3},{id:"f5",cat:"fashion",name:"Rope Leash",desc:"Hand-braided cotton rope in sage with a brass clasp. 1.5 m.",tags:["Dog"],price:99e3},{id:"f6",cat:"fashion",name:"Quilted Vest",desc:"Padded cotton vest for cool rooms and night walks. Sizes XS\u2013M.",tags:["Dog & Cat"],price:139e3}],ti=Object.fromEntries(rs.map(i=>[i.id,i])),nr=i=>`assets/img/${i.id}.webp`,ir="Faunora care desk",Ci={"drh. Bima Adiwangsa":{first:"Bima",role:"Feline diets & food allergies",photo:"assets/img/expert-bima.webp"},"drh. Laras Pertiwi, M.Sc":{first:"Laras",role:"Clinical pet nutrition",photo:"assets/img/expert-laras.webp"},"Nadia Halim, PgDip":{first:"Nadia",role:"Canine weight management",photo:"assets/img/expert-nadia.webp"},[ir]:{first:"the care desk",role:"Questions before you book",photo:"assets/logo/mark-160.png"}},vd={"Weight management":"Nadia Halim, PgDip","Food allergy / sensitive stomach":"drh. Bima Adiwangsa","Senior pet":"drh. Laras Pertiwi, M.Sc","Recovery after illness":"drh. Laras Pertiwi, M.Sc"},_d="drh. Laras Pertiwi, M.Sc";var Hp=2;var Uh=0,Lm=1,Oh=2;var ki=100,Dm=101,Nm=102;var Um=200,Om=201,km=202,Bm=203,lc=204,cc=205,Fm=206,zm=207,Hm=208,Vm=209,Gm=210,Wm=211,Xm=212,jm=213,qm=214,Ym=0,$m=1,Zm=2,Km=3,Jm=4,Qm=5,eg=6,tg=7;var Vp=7,yd="attached",ng="detached",Gp=300,Rr=301,Cr=302,hc=303,uc=304,ko=306,Bi=1e3,Fi=1001,ws=1002,Bt=1003,kh=1004;var Sr=1005;var qt=1006,ys=1007;var Vn=1008;var di=1009,Wp=1010,Xp=1011,Ts=1012,Bh=1013,zi=1014,yn=1015,Vs=1016,Fh=1017,zh=1018,Ir=1020,jp=35902,qp=1021,Yp=1022,xn=1023,$p=1024,Zp=1025,Es=1026,Pr=1027,Hh=1028,Vh=1029,Kp=1030,Gh=1031;var Wh=1033,Ya=33776,$a=33777,Za=33778,Ka=33779,dc=35840,pc=35841,fc=35842,mc=35843,gc=36196,vc=37492,_c=37496,yc=37808,xc=37809,bc=37810,Mc=37811,Sc=37812,wc=37813,Tc=37814,Ec=37815,Ac=37816,Rc=37817,Cc=37818,Ic=37819,Pc=37820,Lc=37821,Ja=36492,Dc=36494,Nc=36495,Jp=36283,Uc=36284,Oc=36285,kc=36286;var Lr=2300,Dr=2301,wl=2302,xd=2400,bd=2401,Md=2402;var Qp=0,Bo=1,Gs=2;var Mr="",ot="srgb",It="srgb-linear",Fo="linear",Ke="srgb";var rr=7680;var ig=512,rg=513,sg=514,ag=515,og=516,lg=517,cg=518,hg=519,Bc=35044;var Sd="300 es",Nr=2e3,Qa=2001,pi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let n=this._listeners[e];if(n!==void 0){let r=n.indexOf(t);r!==-1&&n.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let n=t.slice(0);for(let r=0,s=n.length;r<s;r++)n[r].call(this,e);e.target=null}}},Rt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wd=1234567,Tr=Math.PI/180,Ur=180/Math.PI;function nn(){let i=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,n=4294967295*Math.random()|0;return(Rt[255&i]+Rt[i>>8&255]+Rt[i>>16&255]+Rt[i>>24&255]+"-"+Rt[255&e]+Rt[e>>8&255]+"-"+Rt[e>>16&15|64]+Rt[e>>24&255]+"-"+Rt[63&t|128]+Rt[t>>8&255]+"-"+Rt[t>>16&255]+Rt[t>>24&255]+Rt[255&n]+Rt[n>>8&255]+Rt[n>>16&255]+Rt[n>>24&255]).toLowerCase()}function vt(i,e,t){return Math.max(e,Math.min(t,i))}function Fc(i,e){return(i%e+e)%e}function xs(i,e,t){return(1-t)*i+t*e}function _n(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ze(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(4294967295*i);case Uint16Array:return Math.round(65535*i);case Uint8Array:return Math.round(255*i);case Int32Array:return Math.round(2147483647*i);case Int16Array:return Math.round(32767*i);case Int8Array:return Math.round(127*i);default:throw new Error("Invalid component type.")}}var ef={DEG2RAD:Tr,RAD2DEG:Ur,generateUUID:nn,clamp:vt,euclideanModulo:Fc,mapLinear:function(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)},inverseLerp:function(i,e,t){return i!==e?(t-i)/(e-i):0},lerp:xs,damp:function(i,e,t,n){return xs(i,e,1-Math.exp(-t*n))},pingpong:function(i,e=1){return e-Math.abs(Fc(i,2*e)-e)},smoothstep:function(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e))*i*(3-2*i)},smootherstep:function(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e))*i*i*(i*(6*i-15)+10)},randInt:function(i,e){return i+Math.floor(Math.random()*(e-i+1))},randFloat:function(i,e){return i+Math.random()*(e-i)},randFloatSpread:function(i){return i*(.5-Math.random())},seededRandom:function(i){i!==void 0&&(wd=i);let e=wd+=1831565813;return e=Math.imul(e^e>>>15,1|e),e^=e+Math.imul(e^e>>>7,61|e),((e^e>>>14)>>>0)/4294967296},degToRad:function(i){return i*Tr},radToDeg:function(i){return i*Ur},isPowerOfTwo:function(i){return!(i&i-1)&&i!==0},ceilPowerOfTwo:function(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))},floorPowerOfTwo:function(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))},setQuaternionFromProperEuler:function(i,e,t,n,r){let s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),h=a((e+n)/2),u=s((e-n)/2),d=a((e-n)/2),p=s((n-e)/2),m=a((n-e)/2);switch(r){case"XYX":i.set(o*h,l*u,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*m,l*p,o*c);break;case"YXY":i.set(l*p,o*h,l*m,o*c);break;case"ZYZ":i.set(l*m,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}},normalize:Ze,denormalize:_n},ae=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},De=class i{constructor(e,t,n,r,s,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c)}set(e,t,n,r,s,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],m=n[8],_=r[0],f=r[3],g=r[6],v=r[1],y=r[4],b=r[7],R=r[2],E=r[5],I=r[8];return s[0]=a*_+o*v+l*R,s[3]=a*f+o*y+l*E,s[6]=a*g+o*b+l*I,s[1]=c*_+h*v+u*R,s[4]=c*f+h*y+u*E,s[7]=c*g+h*b+u*I,s[2]=d*_+p*v+m*R,s[5]=d*f+p*y+m*E,s[8]=d*g+p*b+m*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*s*h+n*o*l+r*s*c-r*a*l}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*s,p=c*s-a*l,m=t*u+n*d+r*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/m;return e[0]=u*_,e[1]=(r*c-h*n)*_,e[2]=(o*n-r*a)*_,e[3]=d*_,e[4]=(h*t-r*l)*_,e[5]=(r*s-o*t)*_,e[6]=p*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Tl.makeScale(e,t)),this}rotate(e){return this.premultiply(Tl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Tl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Tl=new De;function tf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function As(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ug(){let i=As("canvas");return i.style.display="block",i}var Td={};function _s(i){i in Td||(Td[i]=!0,console.warn(i))}var Ge={enabled:!0,workingColorSpace:It,spaces:{},convert:function(i,e,t){return this.enabled!==!1&&e!==t&&e&&t&&(this.spaces[e].transfer===Ke&&(i.r=Gn(i.r),i.g=Gn(i.g),i.b=Gn(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Ke&&(i.r=Er(i.r),i.g=Er(i.g),i.b=Er(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Mr?Fo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Gn(i){return i<.04045?.0773993808*i:Math.pow(.9478672986*i+.0521327014,2.4)}function Er(i){return i<.0031308?12.92*i:1.055*Math.pow(i,.41666)-.055}var Ed=[.64,.33,.3,.6,.15,.06],Ad=[.2126,.7152,.0722],Rd=[.3127,.329],Cd=new De().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Id=new De().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715),sr;Ge.define({[It]:{primaries:Ed,whitePoint:Rd,transfer:Fo,toXYZ:Cd,fromXYZ:Id,luminanceCoefficients:Ad,workingColorSpaceConfig:{unpackColorSpace:ot},outputColorSpaceConfig:{drawingBufferColorSpace:ot}},[ot]:{primaries:Ed,whitePoint:Rd,transfer:Ke,toXYZ:Cd,fromXYZ:Id,luminanceCoefficients:Ad,outputColorSpaceConfig:{drawingBufferColorSpace:ot}}});var zc=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{sr===void 0&&(sr=As("canvas")),sr.width=e.width,sr.height=e.height;let n=sr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=sr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=As("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=255*Gn(s[a]/255);return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(255*Gn(t[n]/255)):t[n]=Gn(t[n]);return{data:t,width:e.width,height:e.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},dg=0,eo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dg++}),this.uuid=nn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(El(r[a].image)):s.push(El(r[a]))}else s=El(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function El(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?zc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var pg=0,Mt=class i extends pi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=1001,r=1001,s=1006,a=1008,o=1023,l=1009,c=i.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pg++}),this.uuid=nn(),this.name="",this.source=new eo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ae(0,0),this.repeat=new ae(1,1),this.center=new ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new De,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Bi:e.x=e.x-Math.floor(e.x);break;case Fi:e.x=e.x<0?0:1;break;case ws:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case Bi:e.y=e.y-Math.floor(e.y);break;case Fi:e.y=e.y<0?0:1;break;case ws:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Mt.DEFAULT_IMAGE=null,Mt.DEFAULT_MAPPING=Gp,Mt.DEFAULT_ANISOTROPY=1;var $e=class i{constructor(e=0,t=0,n=0,r=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],m=l[9],_=l[2],f=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(m-f)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(m+f)<.1&&Math.abs(c+p+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(c+1)/2,b=(p+1)/2,R=(g+1)/2,E=(h+d)/4,I=(u+_)/4,D=(m+f)/4;return y>b&&y>R?y<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(y),r=E/n,s=I/n):b>R?b<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),n=E/r,s=D/r):R<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),n=I/s,r=D/s),this.set(n,r,s,t),this}let v=Math.sqrt((f-m)*(f-m)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(f-m)/v,this.y=(u-_)/v,this.z=(d-h)/v,this.w=Math.acos((c+p+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Hc=class extends pi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new $e(0,0,e,t),this.scissorTest=!1,this.viewport=new $e(0,0,e,t);let r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let s=new Mt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new eo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Wn=class extends Hc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},to=class extends Mt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Vc=class extends Mt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Yt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],h=n[r+2],u=n[r+3],d=s[a+0],p=s[a+1],m=s[a+2],_=s[a+3];if(o===0)return e[t+0]=l,e[t+1]=c,e[t+2]=h,void(e[t+3]=u);if(o===1)return e[t+0]=d,e[t+1]=p,e[t+2]=m,void(e[t+3]=_);if(u!==_||l!==d||c!==p||h!==m){let f=1-o,g=l*d+c*p+h*m+u*_,v=g>=0?1:-1,y=1-g*g;if(y>Number.EPSILON){let R=Math.sqrt(y),E=Math.atan2(R,g*v);f=Math.sin(f*E)/R,o=Math.sin(o*E)/R}let b=o*v;if(l=l*f+d*b,c=c*f+p*b,h=h*f+m*b,u=u*f+_*b,f===1-o){let R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,s,a){let o=n[r],l=n[r+1],c=n[r+2],h=n[r+3],u=s[a],d=s[a+1],p=s[a+2],m=s[a+3];return e[t]=o*m+h*u+l*p-c*d,e[t+1]=l*m+h*d+c*u-o*p,e[t+2]=c*m+h*p+o*d-l*u,e[t+3]=h*m-o*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(r/2),u=o(s/2),d=l(n/2),p=l(r/2),m=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*p*m,this._y=c*p*u-d*h*m,this._z=c*h*m+d*p*u,this._w=c*h*u-d*p*m;break;case"YXZ":this._x=d*h*u+c*p*m,this._y=c*p*u-d*h*m,this._z=c*h*m-d*p*u,this._w=c*h*u+d*p*m;break;case"ZXY":this._x=d*h*u-c*p*m,this._y=c*p*u+d*h*m,this._z=c*h*m+d*p*u,this._w=c*h*u-d*p*m;break;case"ZYX":this._x=d*h*u-c*p*m,this._y=c*p*u+d*h*m,this._z=c*h*m-d*p*u,this._w=c*h*u+d*p*m;break;case"YZX":this._x=d*h*u+c*p*m,this._y=c*p*u+d*h*m,this._z=c*h*m-d*p*u,this._w=c*h*u-d*p*m;break;case"XZY":this._x=d*h*u-c*p*m,this._y=c*p*u-d*h*m,this._z=c*h*m+d*p*u,this._w=c*h*u+d*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-r*o,this._w=a*h-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,s=this._z,a=this._w,o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=r*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},w=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Pd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Pd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*n),h=2*(o*t-s*r),u=2*(s*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-s*u,this.z=r+l*u+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Al.copy(this).projectOnVector(e),this.sub(Al)}reflect(e){return this.sub(Al.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=2*Math.random()-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Al=new w,Pd=new Yt,Ft=class{constructor(e=new w(1/0,1/0,1/0),t=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,mn):mn.fromBufferAttribute(s,a),mn.applyMatrix4(e.matrixWorld),this.expandByPoint(mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),da.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),da.copy(n.boundingBox)),da.applyMatrix4(e.matrixWorld),this.union(da)}let r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,mn),mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ss),pa.subVectors(this.max,ss),ar.subVectors(e.a,ss),or.subVectors(e.b,ss),lr.subVectors(e.c,ss),ni.subVectors(or,ar),ii.subVectors(lr,or),Ii.subVectors(ar,lr);let t=[0,-ni.z,ni.y,0,-ii.z,ii.y,0,-Ii.z,Ii.y,ni.z,0,-ni.x,ii.z,0,-ii.x,Ii.z,0,-Ii.x,-ni.y,ni.x,0,-ii.y,ii.x,0,-Ii.y,Ii.x,0];return!!Rl(t,ar,or,lr,pa)&&(t=[1,0,0,0,1,0,0,0,1],!!Rl(t,ar,or,lr,pa)&&(fa.crossVectors(ni,ii),t=[fa.x,fa.y,fa.z],Rl(t,ar,or,lr,pa)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(mn).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Nn)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Nn=[new w,new w,new w,new w,new w,new w,new w,new w],mn=new w,da=new Ft,ar=new w,or=new w,lr=new w,ni=new w,ii=new w,Ii=new w,ss=new w,pa=new w,fa=new w,Pi=new w;function Rl(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Pi.fromArray(i,s);let o=r.x*Math.abs(Pi.x)+r.y*Math.abs(Pi.y)+r.z*Math.abs(Pi.z),l=e.dot(Pi),c=t.dot(Pi),h=n.dot(Pi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var fg=new Ft,as=new w,Cl=new w,zt=class{constructor(e=new w,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):fg.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;as.subVectors(e,this.center);let t=as.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=.5*(n-this.radius);this.center.addScaledVector(as,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Cl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(as.copy(e.center).add(Cl)),this.expandByPoint(as.copy(e.center).sub(Cl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Un=new w,Il=new w,ma=new w,ri=new w,Pl=new w,ga=new w,Ll=new w,Or=class{constructor(e=new w,t=new w(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Un)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Un.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Un.copy(this.origin).addScaledVector(this.direction,t),Un.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Il.copy(e).add(t).multiplyScalar(.5),ma.copy(t).sub(e).normalize(),ri.copy(this.origin).sub(Il);let s=.5*e.distanceTo(t),a=-this.direction.dot(ma),o=ri.dot(this.direction),l=-ri.dot(ma),c=ri.lengthSq(),h=Math.abs(1-a*a),u,d,p,m;if(h>0)if(u=a*l-o,d=a*o-l,m=s*h,u>=0)if(d>=-m)if(d<=m){let _=1/h;u*=_,d*=_,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Il).addScaledVector(ma,d),p}intersectSphere(e,t){Un.subVectors(e.center,this.origin);let n=Un.dot(this.direction),r=Un.dot(Un)-n*n,s=e.radius*e.radius;if(r>s)return null;let a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||s>r?null:((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>r?null:((o>n||n!=n)&&(n=o),(l<r||r!=r)&&(r=l),r<0?null:this.at(n>=0?n:r,t)))}intersectsBox(e){return this.intersectBox(e,Un)!==null}intersectTriangle(e,t,n,r,s){Pl.subVectors(t,e),ga.subVectors(n,e),Ll.crossVectors(Pl,ga);let a,o=this.direction.dot(Ll);if(o>0){if(r)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}ri.subVectors(this.origin,e);let l=a*this.direction.dot(ga.crossVectors(ri,ga));if(l<0)return null;let c=a*this.direction.dot(Pl.cross(ri));if(c<0||l+c>o)return null;let h=-a*ri.dot(Ll);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ee=class i{constructor(e,t,n,r,s,a,o,l,c,h,u,d,p,m,_,f){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c,h,u,d,p,m,_,f)}set(e,t,n,r,s,a,o,l,c,h,u,d,p,m,_,f){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=s,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=d,g[3]=p,g[7]=m,g[11]=_,g[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/cr.setFromMatrixColumn(e,0).length(),s=1/cr.setFromMatrixColumn(e,1).length(),a=1/cr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let d=a*h,p=a*u,m=o*h,_=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+m*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=m+p*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,p=l*u,m=c*h,_=c*u;t[0]=d+_*o,t[4]=m*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-m,t[6]=_+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,p=l*u,m=c*h,_=c*u;t[0]=d-_*o,t[4]=-a*u,t[8]=m+p*o,t[1]=p+m*o,t[5]=a*h,t[9]=_-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,p=a*u,m=o*h,_=o*u;t[0]=l*h,t[4]=m*c-p,t[8]=d*c+_,t[1]=l*u,t[5]=_*c+d,t[9]=p*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,p=a*c,m=o*l,_=o*c;t[0]=l*h,t[4]=_-d*u,t[8]=m*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+m,t[10]=d-_*u}else if(e.order==="XZY"){let d=a*l,p=a*c,m=o*l,_=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+_,t[5]=a*h,t[9]=p*u-m,t[2]=m*u-p,t[6]=o*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(mg,e,gg)}lookAt(e,t,n){let r=this.elements;return Xt.subVectors(e,t),Xt.lengthSq()===0&&(Xt.z=1),Xt.normalize(),si.crossVectors(n,Xt),si.lengthSq()===0&&(Math.abs(n.z)===1?Xt.x+=1e-4:Xt.z+=1e-4,Xt.normalize(),si.crossVectors(n,Xt)),si.normalize(),va.crossVectors(Xt,si),r[0]=si.x,r[4]=va.x,r[8]=Xt.x,r[1]=si.y,r[5]=va.y,r[9]=Xt.y,r[2]=si.z,r[6]=va.z,r[10]=Xt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],m=n[2],_=n[6],f=n[10],g=n[14],v=n[3],y=n[7],b=n[11],R=n[15],E=r[0],I=r[4],D=r[8],O=r[12],H=r[1],W=r[5],V=r[9],q=r[13],z=r[2],Y=r[6],$=r[10],ne=r[14],ee=r[3],ge=r[7],Me=r[11],te=r[15];return s[0]=a*E+o*H+l*z+c*ee,s[4]=a*I+o*W+l*Y+c*ge,s[8]=a*D+o*V+l*$+c*Me,s[12]=a*O+o*q+l*ne+c*te,s[1]=h*E+u*H+d*z+p*ee,s[5]=h*I+u*W+d*Y+p*ge,s[9]=h*D+u*V+d*$+p*Me,s[13]=h*O+u*q+d*ne+p*te,s[2]=m*E+_*H+f*z+g*ee,s[6]=m*I+_*W+f*Y+g*ge,s[10]=m*D+_*V+f*$+g*Me,s[14]=m*O+_*q+f*ne+g*te,s[3]=v*E+y*H+b*z+R*ee,s[7]=v*I+y*W+b*Y+R*ge,s[11]=v*D+y*V+b*$+R*Me,s[15]=v*O+y*q+b*ne+R*te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14];return e[3]*(+s*l*u-r*c*u-s*o*d+n*c*d+r*o*p-n*l*p)+e[7]*(+t*l*p-t*c*d+s*a*d-r*a*p+r*c*h-s*l*h)+e[11]*(+t*c*u-t*o*p-s*a*u+n*a*p+s*o*h-n*c*h)+e[15]*(-r*o*h-t*l*u+t*o*d+r*a*u-n*a*d+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],m=e[12],_=e[13],f=e[14],g=e[15],v=u*f*c-_*d*c+_*l*p-o*f*p-u*l*g+o*d*g,y=m*d*c-h*f*c-m*l*p+a*f*p+h*l*g-a*d*g,b=h*_*c-m*u*c+m*o*p-a*_*p-h*o*g+a*u*g,R=m*u*l-h*_*l-m*o*d+a*_*d+h*o*f-a*u*f,E=t*v+n*y+r*b+s*R;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/E;return e[0]=v*I,e[1]=(_*d*s-u*f*s-_*r*p+n*f*p+u*r*g-n*d*g)*I,e[2]=(o*f*s-_*l*s+_*r*c-n*f*c-o*r*g+n*l*g)*I,e[3]=(u*l*s-o*d*s-u*r*c+n*d*c+o*r*p-n*l*p)*I,e[4]=y*I,e[5]=(h*f*s-m*d*s+m*r*p-t*f*p-h*r*g+t*d*g)*I,e[6]=(m*l*s-a*f*s-m*r*c+t*f*c+a*r*g-t*l*g)*I,e[7]=(a*d*s-h*l*s+h*r*c-t*d*c-a*r*p+t*l*p)*I,e[8]=b*I,e[9]=(m*u*s-h*_*s-m*n*p+t*_*p+h*n*g-t*u*g)*I,e[10]=(a*_*s-m*o*s+m*n*c-t*_*c-a*n*g+t*o*g)*I,e[11]=(h*o*s-a*u*s-h*n*c+t*u*c+a*n*p-t*o*p)*I,e[12]=R*I,e[13]=(h*_*r-m*u*r+m*n*d-t*_*d-h*n*f+t*u*f)*I,e[14]=(m*o*r-a*_*r-m*n*l+t*_*l+a*n*f-t*o*f)*I,e[15]=(a*u*r-h*o*r+h*n*l-t*u*l-a*n*d+t*o*d)*I,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+n,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,u=o+o,d=s*c,p=s*h,m=s*u,_=a*h,f=a*u,g=o*u,v=l*c,y=l*h,b=l*u,R=n.x,E=n.y,I=n.z;return r[0]=(1-(_+g))*R,r[1]=(p+b)*R,r[2]=(m-y)*R,r[3]=0,r[4]=(p-b)*E,r[5]=(1-(d+g))*E,r[6]=(f+v)*E,r[7]=0,r[8]=(m+y)*I,r[9]=(f-v)*I,r[10]=(1-(d+_))*I,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,s=cr.set(r[0],r[1],r[2]).length(),a=cr.set(r[4],r[5],r[6]).length(),o=cr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],gn.copy(this);let l=1/s,c=1/a,h=1/o;return gn.elements[0]*=l,gn.elements[1]*=l,gn.elements[2]*=l,gn.elements[4]*=c,gn.elements[5]*=c,gn.elements[6]*=c,gn.elements[8]*=h,gn.elements[9]*=h,gn.elements[10]*=h,t.setFromRotationMatrix(gn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=2e3){let l=this.elements,c=2*s/(t-e),h=2*s/(n-r),u=(t+e)/(t-e),d=(n+r)/(n-r),p,m;if(o===Nr)p=-(a+s)/(a-s),m=-2*a*s/(a-s);else{if(o!==Qa)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);p=-a/(a-s),m=-a*s/(a-s)}return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=2e3){let l=this.elements,c=1/(t-e),h=1/(n-r),u=1/(a-s),d=(t+e)*c,p=(n+r)*h,m,_;if(o===Nr)m=(a+s)*u,_=-2*u;else{if(o!==Qa)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);m=s*u,_=-1*u}return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},cr=new w,gn=new Ee,mg=new w(0,0,0),gg=new w(1,1,1),si=new w,va=new w,Xt=new w,Ld=new Ee,Dd=new Yt,En=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],u=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(vt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-vt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ld.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ld,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Dd.setFromEuler(this),this.setFromQuaternion(Dd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};En.DEFAULT_ORDER="XYZ";var no=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return!!(this.mask&e.mask)}isEnabled(e){return!!(this.mask&1<<e)}},vg=0,Nd=new w,hr=new Yt,On=new Ee,_a=new w,os=new w,_g=new w,yg=new Yt,Ud=new w(1,0,0),Od=new w(0,1,0),kd=new w(0,0,1),Bd={type:"added"},xg={type:"removed"},ur={type:"childadded",child:null},Dl={type:"childremoved",child:null},lt=class i extends pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vg++}),this.uuid=nn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new w,t=new En,n=new Yt,r=new w(1,1,1);t._onChange((function(){n.setFromEuler(t,!1)})),n._onChange((function(){t.setFromQuaternion(n,void 0,!1)})),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ee},normalMatrix:{value:new De}}),this.matrix=new Ee,this.matrixWorld=new Ee,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new no,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return hr.setFromAxisAngle(e,t),this.quaternion.multiply(hr),this}rotateOnWorldAxis(e,t){return hr.setFromAxisAngle(e,t),this.quaternion.premultiply(hr),this}rotateX(e){return this.rotateOnAxis(Ud,e)}rotateY(e){return this.rotateOnAxis(Od,e)}rotateZ(e){return this.rotateOnAxis(kd,e)}translateOnAxis(e,t){return Nd.copy(e).applyQuaternion(this.quaternion),this.position.add(Nd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ud,e)}translateY(e){return this.translateOnAxis(Od,e)}translateZ(e){return this.translateOnAxis(kd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(On.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?_a.copy(e):_a.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?On.lookAt(os,_a,this.up):On.lookAt(_a,os,this.up),this.quaternion.setFromRotationMatrix(On),r&&(On.extractRotation(r.matrixWorld),hr.setFromRotationMatrix(On),this.quaternion.premultiply(hr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Bd),ur.child=e,this.dispatchEvent(ur),ur.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(xg),Dl.child=e,this.dispatchEvent(Dl),Dl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),On.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),On.multiply(e.parent.matrixWorld)),e.applyMatrix4(On),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Bd),ur.child=e,this.dispatchEvent(ur),ur.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,e,_g),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,yg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let r={};function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map((o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()}))),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()})),this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),m.length>0&&(n.nodes=m)}return n.object=r,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}};lt.DEFAULT_UP=new w(0,1,0),lt.DEFAULT_MATRIX_AUTO_UPDATE=!0,lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var vn=new w,kn=new w,Nl=new w,Bn=new w,dr=new w,pr=new w,Fd=new w,Ul=new w,Ol=new w,kl=new w,Bl=new $e,Fl=new $e,zl=new $e,Hn=class i{constructor(e=new w,t=new w,n=new w){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),vn.subVectors(e,t),r.cross(vn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){vn.subVectors(r,t),kn.subVectors(n,t),Nl.subVectors(e,t);let a=vn.dot(vn),o=vn.dot(kn),l=vn.dot(Nl),c=kn.dot(kn),h=kn.dot(Nl),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;let d=1/u,p=(c*l-o*h)*d,m=(a*h-o*l)*d;return s.set(1-p-m,m,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Bn)!==null&&Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,Bn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Bn.x),l.addScaledVector(a,Bn.y),l.addScaledVector(o,Bn.z),l)}static getInterpolatedAttribute(e,t,n,r,s,a){return Bl.setScalar(0),Fl.setScalar(0),zl.setScalar(0),Bl.fromBufferAttribute(e,t),Fl.fromBufferAttribute(e,n),zl.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Bl,s.x),a.addScaledVector(Fl,s.y),a.addScaledVector(zl,s.z),a}static isFrontFacing(e,t,n,r){return vn.subVectors(n,t),kn.subVectors(e,t),vn.cross(kn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vn.subVectors(this.c,this.b),kn.subVectors(this.a,this.b),.5*vn.cross(kn).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,a,o;dr.subVectors(r,n),pr.subVectors(s,n),Ul.subVectors(e,n);let l=dr.dot(Ul),c=pr.dot(Ul);if(l<=0&&c<=0)return t.copy(n);Ol.subVectors(e,r);let h=dr.dot(Ol),u=pr.dot(Ol);if(h>=0&&u<=h)return t.copy(r);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(dr,a);kl.subVectors(e,s);let p=dr.dot(kl),m=pr.dot(kl);if(m>=0&&p<=m)return t.copy(s);let _=p*c-l*m;if(_<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(n).addScaledVector(pr,o);let f=h*m-p*u;if(f<=0&&u-h>=0&&p-m>=0)return Fd.subVectors(s,r),o=(u-h)/(u-h+(p-m)),t.copy(r).addScaledVector(Fd,o);let g=1/(f+_+d);return a=_*g,o=d*g,t.copy(n).addScaledVector(dr,a).addScaledVector(pr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},nf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ai={h:0,s:0,l:0},ya={h:0,s:0,l:0};function Hl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+6*(e-i)*t:t<.5?e:t<2/3?i+6*(e-i)*(2/3-t):i}var Te=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,Ge.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Ge.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ge.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Ge.workingColorSpace){if(e=Fc(e,1),t=vt(t,0,1),n=vt(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Hl(a,s,e+1/3),this.g=Hl(a,s,e),this.b=Hl(a,s,e-1/3)}return Ge.toWorkingColorSpace(this,r),this}setStyle(e,t=ot){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ot){let n=nf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gn(e.r),this.g=Gn(e.g),this.b=Gn(e.b),this}copyLinearToSRGB(e){return this.r=Er(e.r),this.g=Er(e.g),this.b=Er(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ot){return Ge.fromWorkingColorSpace(Ct.copy(this),e),65536*Math.round(vt(255*Ct.r,0,255))+256*Math.round(vt(255*Ct.g,0,255))+Math.round(vt(255*Ct.b,0,255))}getHexString(e=ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ge.workingColorSpace){Ge.fromWorkingColorSpace(Ct.copy(this),t);let n=Ct.r,r=Ct.g,s=Ct.b,a=Math.max(n,r,s),o=Math.min(n,r,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-n)/u+2;break;case s:l=(n-r)/u+4}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ge.workingColorSpace){return Ge.fromWorkingColorSpace(Ct.copy(this),t),e.r=Ct.r,e.g=Ct.g,e.b=Ct.b,e}getStyle(e=ot){Ge.fromWorkingColorSpace(Ct.copy(this),e);let t=Ct.r,n=Ct.g,r=Ct.b;return e!==ot?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*n)},${Math.round(255*r)})`}offsetHSL(e,t,n){return this.getHSL(ai),this.setHSL(ai.h+e,ai.s+t,ai.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ai),e.getHSL(ya);let n=xs(ai.h,ya.h,t),r=xs(ai.s,ya.s,t),s=xs(ai.l,ya.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ct=new Te;Te.NAMES=nf;var bg=0,Ot=class extends pi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bg++}),this.uuid=nn(),this.name="",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=lc,this.blendDst=cc,this.blendEquation=ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Te(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rr,this.stencilZFail=rr,this.stencilZPass=rr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r!==void 0?r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n:console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};function r(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==lc&&(n.blendSrc=this.blendSrc),this.blendDst!==cc&&(n.blendDst=this.blendDst),this.blendEquation!==ki&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==rr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==rr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData),t){let s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},An=class extends Ot{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},O_=Mg();function Mg(){let i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[256|l]=32768,r[l]=24,r[256|l]=24):c<-14?(n[l]=1024>>-c-14,n[256|l]=1024>>-c-14|32768,r[l]=-c-1,r[256|l]=-c-1):c<=15?(n[l]=c+15<<10,n[256|l]=c+15<<10|32768,r[l]=13,r[256|l]=13):c<128?(n[l]=31744,n[256|l]=64512,r[l]=24,r[256|l]=24):(n[l]=31744,n[256|l]=64512,r[l]=13,r[256|l]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(8388608&c);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:r,mantissaTable:s,exponentTable:a,offsetTable:o}}var ft=new w,xa=new ae,mt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Bc,this.updateRanges=[],this.gpuType=yn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)xa.fromBufferAttribute(this,t),xa.applyMatrix3(e),this.setXY(t,xa.x,xa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix3(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix4(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyNormalMatrix(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.transformDirection(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=_n(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ze(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=_n(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=_n(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=_n(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=_n(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array),r=Ze(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array),r=Ze(r,this.array),s=Ze(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Bc&&(e.usage=this.usage),e}};var io=class extends mt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ro=class extends mt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ce=class extends mt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Sg=0,tn=new Ee,Vl=new lt,fr=new w,jt=new Ft,ls=new Ft,bt=new w,et=class i extends pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sg++}),this.uuid=nn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(tf(e)?ro:io)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new De().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return tn.makeRotationFromQuaternion(e),this.applyMatrix4(tn),this}rotateX(e){return tn.makeRotationX(e),this.applyMatrix4(tn),this}rotateY(e){return tn.makeRotationY(e),this.applyMatrix4(tn),this}rotateZ(e){return tn.makeRotationZ(e),this.applyMatrix4(tn),this}translate(e,t,n){return tn.makeTranslation(e,t,n),this.applyMatrix4(tn),this}scale(e,t,n){return tn.makeScale(e,t,n),this.applyMatrix4(tn),this}lookAt(e){return Vl.lookAt(e),Vl.updateMatrix(),this.applyMatrix4(Vl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fr).negate(),this.translate(fr.x,fr.y,fr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,s=e.length;r<s;r++){let a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ce(n,3))}else{for(let n=0,r=t.count;n<r;n++){let s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ft);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),void this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];jt.setFromBufferAttribute(s),this.morphTargetsRelative?(bt.addVectors(this.boundingBox.min,jt.min),this.boundingBox.expandByPoint(bt),bt.addVectors(this.boundingBox.max,jt.max),this.boundingBox.expandByPoint(bt)):(this.boundingBox.expandByPoint(jt.min),this.boundingBox.expandByPoint(jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),void this.boundingSphere.set(new w,1/0);if(e){let n=this.boundingSphere.center;if(jt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];ls.setFromBufferAttribute(o),this.morphTargetsRelative?(bt.addVectors(jt.min,ls.min),jt.expandByPoint(bt),bt.addVectors(jt.max,ls.max),jt.expandByPoint(bt)):(jt.expandByPoint(ls.min),jt.expandByPoint(ls.max))}jt.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)bt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(bt));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)bt.fromBufferAttribute(o,c),l&&(fr.fromBufferAttribute(e,c),bt.add(fr)),r=Math.max(r,n.distanceToSquared(bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mt(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<n.count;D++)o[D]=new w,l[D]=new w;let c=new w,h=new w,u=new w,d=new ae,p=new ae,m=new ae,_=new w,f=new w;function g(D,O,H){c.fromBufferAttribute(n,D),h.fromBufferAttribute(n,O),u.fromBufferAttribute(n,H),d.fromBufferAttribute(s,D),p.fromBufferAttribute(s,O),m.fromBufferAttribute(s,H),h.sub(c),u.sub(c),p.sub(d),m.sub(d);let W=1/(p.x*m.y-m.x*p.y);isFinite(W)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(u,-p.y).multiplyScalar(W),f.copy(u).multiplyScalar(p.x).addScaledVector(h,-m.x).multiplyScalar(W),o[D].add(_),o[O].add(_),o[H].add(_),l[D].add(f),l[O].add(f),l[H].add(f))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let D=0,O=v.length;D<O;++D){let H=v[D],W=H.start;for(let V=W,q=W+H.count;V<q;V+=3)g(e.getX(V+0),e.getX(V+1),e.getX(V+2))}let y=new w,b=new w,R=new w,E=new w;function I(D){R.fromBufferAttribute(r,D),E.copy(R);let O=o[D];y.copy(O),y.sub(R.multiplyScalar(R.dot(O))).normalize(),b.crossVectors(E,O);let H=b.dot(l[D])<0?-1:1;a.setXYZW(D,y.x,y.y,y.z,H)}for(let D=0,O=v.length;D<O;++D){let H=v[D],W=H.start;for(let V=W,q=W+H.count;V<q;V+=3)I(e.getX(V+0)),I(e.getX(V+1)),I(e.getX(V+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new mt(new Float32Array(3*t.count),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let r=new w,s=new w,a=new w,o=new w,l=new w,c=new w,h=new w,u=new w;if(e)for(let d=0,p=e.count;d<p;d+=3){let m=e.getX(d+0),_=e.getX(d+1),f=e.getX(d+2);r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,f),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,f),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)bt.fromBufferAttribute(e,t),bt.normalize(),e.setXYZ(t,bt.x,bt.y,bt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),p=0,m=0;for(let _=0,f=l.length;_<f;_++){p=o.isInterleavedBufferAttribute?l[_]*o.data.stride+o.offset:l[_]*h;for(let g=0;g<h;g++)d[m++]=c[p++]}return new mt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let o in r){let l=e(r[o],n);t.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){let d=e(c[h],n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let r=e.attributes;for(let c in r){let h=r[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],u=s[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},zd=new Ee,Li=new Or,ba=new zt,Hd=new w,Ma=new w,Sa=new w,wa=new w,Gl=new w,Ta=new w,Vd=new w,Ea=new w,Qe=class extends lt{constructor(e=new et,t=new An){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=n.length;r<s;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(s&&o){Ta.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],u=s[l];h!==0&&(Gl.fromBufferAttribute(u,e),a?Ta.addScaledVector(Gl,h):Ta.addScaledVector(Gl.sub(t),h))}t.add(Ta)}return t}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;if(r!==void 0){if(n.boundingSphere===null&&n.computeBoundingSphere(),ba.copy(n.boundingSphere),ba.applyMatrix4(s),Li.copy(e.ray).recast(e.near),ba.containsPoint(Li.origin)===!1&&(Li.intersectSphere(ba,Hd)===null||Li.origin.distanceToSquared(Hd)>(e.far-e.near)**2))return;zd.copy(s).invert(),Li.copy(e.ray).applyMatrix4(zd),n.boundingBox!==null&&Li.intersectsBox(n.boundingBox)===!1||this._computeIntersections(e,t,Li)}}_computeIntersections(e,t,n){let r,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,_=d.length;m<_;m++){let f=d[m],g=a[f.materialIndex];for(let v=Math.max(f.start,p.start),y=Math.min(o.count,Math.min(f.start+f.count,p.start+p.count));v<y;v+=3)r=Aa(this,g,e,n,c,h,u,o.getX(v),o.getX(v+1),o.getX(v+2)),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=f.materialIndex,t.push(r))}else for(let m=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);m<_;m+=3)r=Aa(this,a,e,n,c,h,u,o.getX(m),o.getX(m+1),o.getX(m+2)),r&&(r.faceIndex=Math.floor(m/3),t.push(r));else if(l!==void 0)if(Array.isArray(a))for(let m=0,_=d.length;m<_;m++){let f=d[m],g=a[f.materialIndex];for(let v=Math.max(f.start,p.start),y=Math.min(l.count,Math.min(f.start+f.count,p.start+p.count));v<y;v+=3)r=Aa(this,g,e,n,c,h,u,v,v+1,v+2),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=f.materialIndex,t.push(r))}else for(let m=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);m<_;m+=3)r=Aa(this,a,e,n,c,h,u,m,m+1,m+2),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}};function Aa(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,Ma),i.getVertexPosition(l,Sa),i.getVertexPosition(c,wa);let h=(function(u,d,p,m,_,f,g,v){let y;if(y=d.side===1?m.intersectTriangle(g,f,_,!0,v):m.intersectTriangle(_,f,g,d.side===0,v),y===null)return null;Ea.copy(v),Ea.applyMatrix4(u.matrixWorld);let b=p.ray.origin.distanceTo(Ea);return b<p.near||b>p.far?null:{distance:b,point:Ea.clone(),object:u}})(i,e,t,n,Ma,Sa,wa,Vd);if(h){let u=new w;Hn.getBarycoord(Vd,Ma,Sa,wa,u),r&&(h.uv=Hn.getInterpolatedAttribute(r,o,l,c,u,new ae)),s&&(h.uv1=Hn.getInterpolatedAttribute(s,o,l,c,u,new ae)),a&&(h.normal=Hn.getInterpolatedAttribute(a,o,l,c,u,new w),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new w,materialIndex:0};Hn.getNormal(Ma,Sa,wa,d.normal),h.face=d,h.barycoord=u}return h}var fi=class i extends et{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};let o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,p=0;function m(_,f,g,v,y,b,R,E,I,D,O){let H=b/I,W=R/D,V=b/2,q=R/2,z=E/2,Y=I+1,$=D+1,ne=0,ee=0,ge=new w;for(let Me=0;Me<$;Me++){let te=Me*W-q;for(let oe=0;oe<Y;oe++){let me=oe*H-V;ge[_]=me*v,ge[f]=te*y,ge[g]=z,c.push(ge.x,ge.y,ge.z),ge[_]=0,ge[f]=0,ge[g]=E>0?1:-1,h.push(ge.x,ge.y,ge.z),u.push(oe/I),u.push(1-Me/D),ne+=1}}for(let Me=0;Me<D;Me++)for(let te=0;te<I;te++){let oe=d+te+Y*Me,me=d+te+Y*(Me+1),ve=d+(te+1)+Y*(Me+1),ue=d+(te+1)+Y*Me;l.push(oe,me,ue),l.push(me,ve,ue),ee+=6}o.addGroup(p,ee,O),p+=ee,d+=ne}m("z","y","x",-1,-1,n,t,e,a,s,0),m("z","y","x",1,-1,n,t,-e,a,s,1),m("x","z","y",1,1,e,n,t,r,a,2),m("x","z","y",1,-1,e,n,-t,r,a,3),m("x","y","z",1,-1,e,t,n,r,s,4),m("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Ce(c,3)),this.setAttribute("normal",new Ce(h,3)),this.setAttribute("uv",new Ce(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function kr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Ut(i){let e={};for(let t=0;t<i.length;t++){let n=kr(i[t]);for(let r in n)e[r]=n[r]}return e}function rf(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ge.workingColorSpace}var wg={clone:kr,merge:Ut},Rn=class extends Ot{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=kr(e.uniforms),this.uniformsGroups=(function(t){let n=[];for(let r=0;r<t.length;r++)n.push(t[r].clone());return n})(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Rs=class extends lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ee,this.projectionMatrix=new Ee,this.projectionMatrixInverse=new Ee,this.coordinateSystem=Nr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},oi=new w,Gd=new ae,Wd=new ae,Et=class extends Rs{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*Ur*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*Tr*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*Ur*Math.atan(Math.tan(.5*Tr*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(oi.x,oi.y).multiplyScalar(-e/oi.z),oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(oi.x,oi.y).multiplyScalar(-e/oi.z)}getViewSize(e,t){return this.getViewBounds(e,Gd,Wd),t.subVectors(Wd,Gd)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*Tr*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},mr=-90,Gc=class extends lt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Et(mr,1,e,t);r.layers=this.layers,this.add(r);let s=new Et(mr,1,e,t);s.layers=this.layers,this.add(s);let a=new Et(mr,1,e,t);a.layers=this.layers,this.add(a);let o=new Et(mr,1,e,t);o.layers=this.layers,this.add(o);let l=new Et(mr,1,e,t);l.layers=this.layers,this.add(l);let c=new Et(mr,1,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(let c of t)this.remove(c);if(e===Nr)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else{if(e!==Qa)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1)}for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},so=class extends Mt{constructor(e,t,n,r,s,a,o,l,c,h){super(e=e!==void 0?e:[],t=t!==void 0?t:Rr,n,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Wc=class extends Wn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new so(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:qt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new fi(5,5,5),s=new Rn({name:"CubemapFromEquirect",uniforms:kr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});s.uniforms.tEquirect.value=t;let a=new Qe(r,s),o=t.minFilter;return t.minFilter===Vn&&(t.minFilter=qt),new Gc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}},Wl=new w,Tg=new w,Eg=new De,zn=class{constructor(e=new w(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Wl.subVectors(n,t).cross(Tg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Wl),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Eg.getNormalMatrix(e),r=this.coplanarPoint(Wl).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Di=new zt,Ra=new w,Br=class{constructor(e=new zn,t=new zn,n=new zn,r=new zn,s=new zn,a=new zn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2e3){let n=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],h=r[5],u=r[6],d=r[7],p=r[8],m=r[9],_=r[10],f=r[11],g=r[12],v=r[13],y=r[14],b=r[15];if(n[0].setComponents(l-s,d-c,f-p,b-g).normalize(),n[1].setComponents(l+s,d+c,f+p,b+g).normalize(),n[2].setComponents(l+a,d+h,f+m,b+v).normalize(),n[3].setComponents(l-a,d-h,f-m,b-v).normalize(),n[4].setComponents(l-o,d-u,f-_,b-y).normalize(),t===Nr)n[5].setComponents(l+o,d+u,f+_,b+y).normalize();else{if(t!==Qa)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);n[5].setComponents(o,u,_,y).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Di.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Di.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Di)}intersectsSprite(e){return Di.center.set(0,0,0),Di.radius=.7071067811865476,Di.applyMatrix4(e.matrixWorld),this.intersectsSphere(Di)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Ra.x=r.normal.x>0?e.max.x:e.min.x,Ra.y=r.normal.y>0?e.max.y:e.min.y,Ra.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ra)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function sf(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Ag(i){let e=new WeakMap;return{get:function(t){return t.isInterleavedBufferAttribute&&(t=t.data),e.get(t)},remove:function(t){t.isInterleavedBufferAttribute&&(t=t.data);let n=e.get(t);n&&(i.deleteBuffer(n.buffer),e.delete(t))},update:function(t,n){if(t.isInterleavedBufferAttribute&&(t=t.data),t.isGLBufferAttribute){let s=e.get(t);return void((!s||s.version<t.version)&&e.set(t,{buffer:t.buffer,type:t.type,bytesPerElement:t.elementSize,version:t.version}))}let r=e.get(t);if(r===void 0)e.set(t,(function(s,a){let o=s.array,l=s.usage,c=o.byteLength,h=i.createBuffer(),u;if(i.bindBuffer(a,h),i.bufferData(a,o,l),s.onUploadCallback(),o instanceof Float32Array)u=i.FLOAT;else if(o instanceof Uint16Array)u=s.isFloat16BufferAttribute?i.HALF_FLOAT:i.UNSIGNED_SHORT;else if(o instanceof Int16Array)u=i.SHORT;else if(o instanceof Uint32Array)u=i.UNSIGNED_INT;else if(o instanceof Int32Array)u=i.INT;else if(o instanceof Int8Array)u=i.BYTE;else if(o instanceof Uint8Array)u=i.UNSIGNED_BYTE;else{if(!(o instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);u=i.UNSIGNED_BYTE}return{buffer:h,type:u,bytesPerElement:o.BYTES_PER_ELEMENT,version:s.version,size:c}})(t,n));else if(r.version<t.version){if(r.size!==t.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(s,a,o){let l=a.array,c=a.updateRanges;if(i.bindBuffer(o,s),c.length===0)i.bufferSubData(o,0,l);else{c.sort(((u,d)=>u.start-d.start));let h=0;for(let u=1;u<c.length;u++){let d=c[h],p=c[u];p.start<=d.start+d.count+1?d.count=Math.max(d.count,p.start+p.count-d.start):(++h,c[h]=p)}c.length=h+1;for(let u=0,d=c.length;u<d;u++){let p=c[u];i.bufferSubData(o,p.start*l.BYTES_PER_ELEMENT,l,p.start,p.count)}a.clearUpdateRanges()}a.onUploadCallback()})(r.buffer,t,n),r.version=t.version}}}}var Hi=class i extends et{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,h=l+1,u=e/o,d=t/l,p=[],m=[],_=[],f=[];for(let g=0;g<h;g++){let v=g*d-a;for(let y=0;y<c;y++){let b=y*u-s;m.push(b,-v,0),_.push(0,0,1),f.push(y/o),f.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<o;v++){let y=v+c*g,b=v+c*(g+1),R=v+1+c*(g+1),E=v+1+c*g;p.push(y,b,E),p.push(b,R,E)}this.setIndex(p),this.setAttribute("position",new Ce(m,3)),this.setAttribute("normal",new Ce(_,3)),this.setAttribute("uv",new Ce(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Oe={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},he={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new De}},envmap:{envMap:{value:null},envMapRotation:{value:new De},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new De}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new De}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new De},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new De},normalScale:{value:new ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new De},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new De}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new De}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new De}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0},uvTransform:{value:new De}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}}},Tn={basic:{uniforms:Ut([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Ut([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Te(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Ut([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Ut([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Ut([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Te(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Ut([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Ut([he.points,he.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Ut([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Ut([he.common,he.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Ut([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Ut([he.sprite,he.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new De},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new De}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:Ut([he.common,he.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:Ut([he.lights,he.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};Tn.physical={uniforms:Ut([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new De},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new De},clearcoatNormalScale:{value:new ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new De},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new De},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new De},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new De},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new De},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new De},transmissionSamplerSize:{value:new ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new De},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new De},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new De},anisotropyVector:{value:new ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new De}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};var Ca={r:0,b:0,g:0},Ni=new En,Rg=new Ee;function Cg(i,e,t,n,r,s,a){let o=new Te(0),l,c,h=s===!0?0:1,u=null,d=0,p=null;function m(f){let g=f.isScene===!0?f.background:null;return g&&g.isTexture&&(g=(f.backgroundBlurriness>0?t:e).get(g)),g}function _(f,g){f.getRGB(Ca,rf(i)),n.buffers.color.setClear(Ca.r,Ca.g,Ca.b,g,a)}return{getClearColor:function(){return o},setClearColor:function(f,g=1){o.set(f),h=g,_(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(f){h=f,_(o,h)},render:function(f){let g=!1,v=m(f);v===null?_(o,h):v&&v.isColor&&(_(v,1),g=!0);let y=i.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,a):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||g)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))},addToRenderList:function(f,g){let v=m(g);v&&(v.isCubeTexture||v.mapping===ko)?(c===void 0&&(c=new Qe(new fi(1,1,1),new Rn({name:"BackgroundCubeMaterial",uniforms:kr(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(y,b,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),Ni.copy(g.backgroundRotation),Ni.x*=-1,Ni.y*=-1,Ni.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ni.y*=-1,Ni.z*=-1),c.material.uniforms.envMap.value=v,c.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Rg.makeRotationFromEuler(Ni)),c.material.toneMapped=Ge.getTransfer(v.colorSpace)!==Ke,u===v&&d===v.version&&p===i.toneMapping||(c.material.needsUpdate=!0,u=v,d=v.version,p=i.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Qe(new Hi(2,2),new Rn({name:"BackgroundMaterial",uniforms:kr(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,l.material.toneMapped=Ge.getTransfer(v.colorSpace)!==Ke,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),u===v&&d===v.version&&p===i.toneMapping||(l.material.needsUpdate=!0,u=v,d=v.version,p=i.toneMapping),l.layers.enableAll(),f.unshift(l,l.geometry,l.material,0,0,null))}}}function Ig(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=c(null),s=r,a=!1;function o(g){return i.bindVertexArray(g)}function l(g){return i.deleteVertexArray(g)}function c(g){let v=[],y=[],b=[];for(let R=0;R<t;R++)v[R]=0,y[R]=0,b[R]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:v,enabledAttributes:y,attributeDivisors:b,object:g,attributes:{},index:null}}function h(){let g=s.newAttributes;for(let v=0,y=g.length;v<y;v++)g[v]=0}function u(g){d(g,0)}function d(g,v){let y=s.newAttributes,b=s.enabledAttributes,R=s.attributeDivisors;y[g]=1,b[g]===0&&(i.enableVertexAttribArray(g),b[g]=1),R[g]!==v&&(i.vertexAttribDivisor(g,v),R[g]=v)}function p(){let g=s.newAttributes,v=s.enabledAttributes;for(let y=0,b=v.length;y<b;y++)v[y]!==g[y]&&(i.disableVertexAttribArray(y),v[y]=0)}function m(g,v,y,b,R,E,I){I===!0?i.vertexAttribIPointer(g,v,y,R,E):i.vertexAttribPointer(g,v,y,b,R,E)}function _(){f(),a=!0,s!==r&&(s=r,o(s.object))}function f(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:function(g,v,y,b,R){let E=!1,I=(function(D,O,H){let W=H.wireframe===!0,V=n[D.id];V===void 0&&(V={},n[D.id]=V);let q=V[O.id];q===void 0&&(q={},V[O.id]=q);let z=q[W];return z===void 0&&(z=c(i.createVertexArray()),q[W]=z),z})(b,y,v);s!==I&&(s=I,o(s.object)),E=(function(D,O,H,W){let V=s.attributes,q=O.attributes,z=0,Y=H.getAttributes();for(let $ in Y)if(Y[$].location>=0){let ne=V[$],ee=q[$];if(ee===void 0&&($==="instanceMatrix"&&D.instanceMatrix&&(ee=D.instanceMatrix),$==="instanceColor"&&D.instanceColor&&(ee=D.instanceColor)),ne===void 0||ne.attribute!==ee||ee&&ne.data!==ee.data)return!0;z++}return s.attributesNum!==z||s.index!==W})(g,b,y,R),E&&(function(D,O,H,W){let V={},q=O.attributes,z=0,Y=H.getAttributes();for(let $ in Y)if(Y[$].location>=0){let ne=q[$];ne===void 0&&($==="instanceMatrix"&&D.instanceMatrix&&(ne=D.instanceMatrix),$==="instanceColor"&&D.instanceColor&&(ne=D.instanceColor));let ee={};ee.attribute=ne,ne&&ne.data&&(ee.data=ne.data),V[$]=ee,z++}s.attributes=V,s.attributesNum=z,s.index=W})(g,b,y,R),R!==null&&e.update(R,i.ELEMENT_ARRAY_BUFFER),(E||a)&&(a=!1,(function(D,O,H,W){h();let V=W.attributes,q=H.getAttributes(),z=O.defaultAttributeValues;for(let Y in q){let $=q[Y];if($.location>=0){let ne=V[Y];if(ne===void 0&&(Y==="instanceMatrix"&&D.instanceMatrix&&(ne=D.instanceMatrix),Y==="instanceColor"&&D.instanceColor&&(ne=D.instanceColor)),ne!==void 0){let ee=ne.normalized,ge=ne.itemSize,Me=e.get(ne);if(Me===void 0)continue;let te=Me.buffer,oe=Me.type,me=Me.bytesPerElement,ve=oe===i.INT||oe===i.UNSIGNED_INT||ne.gpuType===Bh;if(ne.isInterleavedBufferAttribute){let ue=ne.data,A=ue.stride,T=ne.offset;if(ue.isInstancedInterleavedBuffer){for(let U=0;U<$.locationSize;U++)d($.location+U,ue.meshPerAttribute);D.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let U=0;U<$.locationSize;U++)u($.location+U);i.bindBuffer(i.ARRAY_BUFFER,te);for(let U=0;U<$.locationSize;U++)m($.location+U,ge/$.locationSize,oe,ee,A*me,(T+ge/$.locationSize*U)*me,ve)}else{if(ne.isInstancedBufferAttribute){for(let ue=0;ue<$.locationSize;ue++)d($.location+ue,ne.meshPerAttribute);D.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let ue=0;ue<$.locationSize;ue++)u($.location+ue);i.bindBuffer(i.ARRAY_BUFFER,te);for(let ue=0;ue<$.locationSize;ue++)m($.location+ue,ge/$.locationSize,oe,ee,ge*me,ge/$.locationSize*ue*me,ve)}}else if(z!==void 0){let ee=z[Y];if(ee!==void 0)switch(ee.length){case 2:i.vertexAttrib2fv($.location,ee);break;case 3:i.vertexAttrib3fv($.location,ee);break;case 4:i.vertexAttrib4fv($.location,ee);break;default:i.vertexAttrib1fv($.location,ee)}}}}p()})(g,v,y,b),R!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(R).buffer))},reset:_,resetDefaultState:f,dispose:function(){_();for(let g in n){let v=n[g];for(let y in v){let b=v[y];for(let R in b)l(b[R].object),delete b[R];delete v[y]}delete n[g]}},releaseStatesOfGeometry:function(g){if(n[g.id]===void 0)return;let v=n[g.id];for(let y in v){let b=v[y];for(let R in b)l(b[R].object),delete b[R];delete v[y]}delete n[g.id]},releaseStatesOfProgram:function(g){for(let v in n){let y=n[v];if(y[g.id]===void 0)continue;let b=y[g.id];for(let R in b)l(b[R].object),delete b[R];delete y[g.id]}},initAttributes:h,enableAttribute:u,disableUnusedAttributes:p}}function Pg(i,e,t){let n;function r(s,a,o){o!==0&&(i.drawArraysInstanced(n,s,a,o),t.update(a,n,o))}this.setMode=function(s){n=s},this.render=function(s,a){i.drawArrays(n,s,a),t.update(a,n,1)},this.renderInstances=r,this.renderMultiDraw=function(s,a,o){if(o===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,s,0,a,0,o);let l=0;for(let c=0;c<o;c++)l+=a[c];t.update(l,n,1)},this.renderMultiDrawInstances=function(s,a,o,l){if(o===0)return;let c=e.get("WEBGL_multi_draw");if(c===null)for(let h=0;h<s.length;h++)r(s[h],a[h],l[h]);else{c.multiDrawArraysInstancedWEBGL(n,s,0,a,0,l,0,o);let h=0;for(let u=0;u<o;u++)h+=a[u]*l[u];t.update(h,n,1)}}}function Lg(i,e,t,n){let r;function s(d){if(d==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";d="mediump"}return d==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=t.precision!==void 0?t.precision:"highp",o=s(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);let l=t.logarithmicDepthBuffer===!0,c=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),u=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS);return{isWebGL2:!0,getMaxAnisotropy:function(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let d=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(d.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r},getMaxPrecision:s,textureFormatReadable:function(d){return d===xn||n.convert(d)===i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT)},textureTypeReadable:function(d){let p=d===Vs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(d!==di&&n.convert(d)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&d!==yn&&!p)},precision:a,logarithmicDepthBuffer:l,reverseDepthBuffer:c,maxTextures:h,maxVertexTextures:u,maxTextureSize:i.getParameter(i.MAX_TEXTURE_SIZE),maxCubemapSize:i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),maxAttributes:i.getParameter(i.MAX_VERTEX_ATTRIBS),maxVertexUniforms:i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),maxVaryings:i.getParameter(i.MAX_VARYING_VECTORS),maxFragmentUniforms:i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),vertexTextures:u>0,maxSamples:i.getParameter(i.MAX_SAMPLES)}}function Dg(i){let e=this,t=null,n=0,r=!1,s=!1,a=new zn,o=new De,l={value:null,needsUpdate:!1};function c(h,u,d,p){let m=h!==null?h.length:0,_=null;if(m!==0){if(_=l.value,p!==!0||_===null){let f=d+4*m,g=u.matrixWorldInverse;o.getNormalMatrix(g),(_===null||_.length<f)&&(_=new Float32Array(f));for(let v=0,y=d;v!==m;++v,y+=4)a.copy(h[v]).applyMatrix4(g,o),a.normal.toArray(_,y),_[y+3]=a.constant}l.value=_,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,_}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let d=h.length!==0||u||n!==0||r;return r=u,n=h.length,d},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){t=c(h,u,0)},this.setState=function(h,u,d){let p=h.clippingPlanes,m=h.clipIntersection,_=h.clipShadows,f=i.get(h);if(!r||p===null||p.length===0||s&&!_)s?c(null):(function(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0})();else{let g=s?0:n,v=4*g,y=f.clippingState||null;l.value=y,y=c(p,u,v,d);for(let b=0;b!==v;++b)y[b]=t[b];f.clippingState=y,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=g}}}function Ng(i){let e=new WeakMap;function t(r,s){return s===hc?r.mapping=Rr:s===uc&&(r.mapping=Cr),r}function n(r){let s=r.target;s.removeEventListener("dispose",n);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(r){if(r&&r.isTexture){let s=r.mapping;if(s===hc||s===uc){if(e.has(r))return t(e.get(r).texture,r.mapping);{let a=r.image;if(a&&a.height>0){let o=new Wc(a.height);return o.fromEquirectangularTexture(i,r),e.set(r,o),r.addEventListener("dispose",n),t(o.texture,r.mapping)}return null}}}return r},dispose:function(){e=new WeakMap}}}var mi=class extends Rs{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Xd=[.125,.215,.35,.446,.526,.582],cs=20,Xl=new mi,jd=new Te,jl=null,ql=0,Yl=0,$l=!1,Oi=(1+Math.sqrt(5))/2,gr=1/Oi,qd=[new w(-Oi,gr,0),new w(Oi,gr,0),new w(-gr,0,Oi),new w(gr,0,Oi),new w(0,Oi,-gr),new w(0,Oi,gr),new w(-1,1,-1),new w(1,1,-1),new w(-1,1,1),new w(1,1,1)],ao=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){jl=this._renderer.getRenderTarget(),ql=this._renderer.getActiveCubeFace(),Yl=this._renderer.getActiveMipmapLevel(),$l=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$d(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(jl,ql,Yl),this._renderer.xr.enabled=$l,e.scissorTest=!1,Ia(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Rr||e.mapping===Cr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),jl=this._renderer.getRenderTarget(),ql=this._renderer.getActiveCubeFace(),Yl=this._renderer.getActiveMipmapLevel(),$l=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:qt,minFilter:qt,generateMipmaps:!1,type:Vs,format:xn,colorSpace:It,depthBuffer:!1},r=Yd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yd(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=(function(a){let o=[],l=[],c=[],h=a,u=a-4+1+Xd.length;for(let d=0;d<u;d++){let p=Math.pow(2,h);l.push(p);let m=1/p;d>a-4?m=Xd[d-a+4-1]:d===0&&(m=0),c.push(m);let _=1/(p-2),f=-_,g=1+_,v=[f,f,g,f,g,g,f,f,g,g,f,g],y=6,b=6,R=3,E=2,I=1,D=new Float32Array(R*b*y),O=new Float32Array(E*b*y),H=new Float32Array(I*b*y);for(let V=0;V<y;V++){let q=V%3*2/3-1,z=V>2?0:-1,Y=[q,z,0,q+2/3,z,0,q+2/3,z+1,0,q,z,0,q+2/3,z+1,0,q,z+1,0];D.set(Y,R*b*V),O.set(v,E*b*V);let $=[V,V,V,V,V,V];H.set($,I*b*V)}let W=new et;W.setAttribute("position",new mt(D,R)),W.setAttribute("uv",new mt(O,E)),W.setAttribute("faceIndex",new mt(H,I)),o.push(W),h>4&&h--}return{lodPlanes:o,sizeLods:l,sigmas:c}})(s)),this._blurMaterial=(function(a,o,l){let c=new Float32Array(cs),h=new w(0,1,0);return new Rn({name:"SphericalGaussianBlur",defines:{n:cs,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/l,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:c},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:Xh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})})(s,e,t)}return r}_compileMaterial(e){let t=new Qe(this._lodPlanes[0],e);this._renderer.compile(t,Xl)}_sceneToCubeUV(e,t,n,r){let s=new Et(90,1,t,n),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,h=l.toneMapping;l.getClearColor(jd),l.toneMapping=0,l.autoClear=!1;let u=new An({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),d=new Qe(new fi,u),p=!1,m=e.background;m?m.isColor&&(u.color.copy(m),e.background=null,p=!0):(u.color.copy(jd),p=!0);for(let _=0;_<6;_++){let f=_%3;f===0?(s.up.set(0,a[_],0),s.lookAt(o[_],0,0)):f===1?(s.up.set(0,0,a[_]),s.lookAt(0,o[_],0)):(s.up.set(0,a[_],0),s.lookAt(0,0,o[_]));let g=this._cubeSize;Ia(r,f*g,_>2?g:0,g,g),l.setRenderTarget(r),p&&l.render(d,s),l.render(e,s)}d.geometry.dispose(),d.material.dispose(),l.toneMapping=h,l.autoClear=c,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===Rr||e.mapping===Cr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$d());let s=r?this._cubemapMaterial:this._equirectMaterial,a=new Qe(this._lodPlanes[0],s);s.uniforms.envMap.value=e;let o=this._cubeSize;Ia(t,0,0,3*o,2*o),n.setRenderTarget(t),n.render(a,Xl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=qd[(r-s-1)%qd.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,r,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=new Qe(this._lodPlanes[r],c),u=c.uniforms,d=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*d):2*Math.PI/39,m=s/p,_=isFinite(s)?1+Math.floor(3*m):cs;_>cs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to 20`);let f=[],g=0;for(let b=0;b<cs;++b){let R=b/m,E=Math.exp(-R*R/2);f.push(E),b===0?g+=E:b<_&&(g+=2*E)}for(let b=0;b<f.length;b++)f[b]=f[b]/g;u.envMap.value=e.texture,u.samples.value=_,u.weights.value=f,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:v}=this;u.dTheta.value=p,u.mipInt.value=v-n;let y=this._sizeLods[r];Ia(t,3*y*(r>v-4?r-v+4:0),4*(this._cubeSize-y),3*y,2*y),l.setRenderTarget(t),l.render(h,Xl)}};function Yd(i,e,t){let n=new Wn(i,e,t);return n.texture.mapping=ko,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ia(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function $d(){return new Rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Zd(){return new Rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Xh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Ug(i){let e=new WeakMap,t=null;function n(r){let s=r.target;s.removeEventListener("dispose",n);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(r){if(r&&r.isTexture){let s=r.mapping,a=s===hc||s===uc,o=s===Rr||s===Cr;if(a||o){let l=e.get(r),c=l!==void 0?l.texture.pmremVersion:0;if(r.isRenderTargetTexture&&r.pmremVersion!==c)return t===null&&(t=new ao(i)),l=a?t.fromEquirectangular(r,l):t.fromCubemap(r,l),l.texture.pmremVersion=r.pmremVersion,e.set(r,l),l.texture;if(l!==void 0)return l.texture;{let h=r.image;return a&&h&&h.height>0||o&&h&&(function(u){let d=0,p=6;for(let m=0;m<p;m++)u[m]!==void 0&&d++;return d===p})(h)?(t===null&&(t=new ao(i)),l=a?t.fromEquirectangular(r):t.fromCubemap(r),l.texture.pmremVersion=r.pmremVersion,e.set(r,l),r.addEventListener("dispose",n),l.texture):null}}}return r},dispose:function(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}}}function Og(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&_s("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function kg(i,e,t,n){let r={},s=new WeakMap;function a(l){let c=l.target;c.index!==null&&e.remove(c.index);for(let u in c.attributes)e.remove(c.attributes[u]);for(let u in c.morphAttributes){let d=c.morphAttributes[u];for(let p=0,m=d.length;p<m;p++)e.remove(d[p])}c.removeEventListener("dispose",a),delete r[c.id];let h=s.get(c);h&&(e.remove(h),s.delete(c)),n.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,t.memory.geometries--}function o(l){let c=[],h=l.index,u=l.attributes.position,d=0;if(h!==null){let _=h.array;d=h.version;for(let f=0,g=_.length;f<g;f+=3){let v=_[f+0],y=_[f+1],b=_[f+2];c.push(v,y,y,b,b,v)}}else{if(u===void 0)return;{let _=u.array;d=u.version;for(let f=0,g=_.length/3-1;f<g;f+=3){let v=f+0,y=f+1,b=f+2;c.push(v,y,y,b,b,v)}}}let p=new(tf(c)?ro:io)(c,1);p.version=d;let m=s.get(l);m&&e.remove(m),s.set(l,p)}return{get:function(l,c){return r[c.id]===!0||(c.addEventListener("dispose",a),r[c.id]=!0,t.memory.geometries++),c},update:function(l){let c=l.attributes;for(let u in c)e.update(c[u],i.ARRAY_BUFFER);let h=l.morphAttributes;for(let u in h){let d=h[u];for(let p=0,m=d.length;p<m;p++)e.update(d[p],i.ARRAY_BUFFER)}},getWireframeAttribute:function(l){let c=s.get(l);if(c){let h=l.index;h!==null&&c.version<h.version&&o(l)}else o(l);return s.get(l)}}}function Bg(i,e,t){let n,r,s;function a(o,l,c){c!==0&&(i.drawElementsInstanced(n,l,r,o*s,c),t.update(l,n,c))}this.setMode=function(o){n=o},this.setIndex=function(o){r=o.type,s=o.bytesPerElement},this.render=function(o,l){i.drawElements(n,l,r,o*s),t.update(l,n,1)},this.renderInstances=a,this.renderMultiDraw=function(o,l,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,l,0,r,o,0,c);let h=0;for(let u=0;u<c;u++)h+=l[u];t.update(h,n,1)},this.renderMultiDrawInstances=function(o,l,c,h){if(c===0)return;let u=e.get("WEBGL_multi_draw");if(u===null)for(let d=0;d<o.length;d++)a(o[d]/s,l[d],h[d]);else{u.multiDrawElementsInstancedWEBGL(n,l,0,r,o,0,h,0,c);let d=0;for(let p=0;p<c;p++)d+=l[p]*h[p];t.update(d,n,1)}}}function Fg(i){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,n,r){switch(e.calls++,n){case i.TRIANGLES:e.triangles+=r*(t/3);break;case i.LINES:e.lines+=r*(t/2);break;case i.LINE_STRIP:e.lines+=r*(t-1);break;case i.LINE_LOOP:e.lines+=r*t;break;case i.POINTS:e.points+=r*t;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",n)}}}}function zg(i,e,t){let n=new WeakMap,r=new $e;return{update:function(s,a,o){let l=s.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=c!==void 0?c.length:0,u=n.get(a);if(u===void 0||u.count!==h){let D=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",D)};u!==void 0&&u.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,_=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],g=a.morphAttributes.color||[],v=0;d===!0&&(v=1),p===!0&&(v=2),m===!0&&(v=3);let y=a.attributes.position.count*v,b=1;y>e.maxTextureSize&&(b=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let R=new Float32Array(y*b*4*h),E=new to(R,y,b,h);E.type=yn,E.needsUpdate=!0;let I=4*v;for(let O=0;O<h;O++){let H=_[O],W=f[O],V=g[O],q=y*b*4*O;for(let z=0;z<H.count;z++){let Y=z*I;d===!0&&(r.fromBufferAttribute(H,z),R[q+Y+0]=r.x,R[q+Y+1]=r.y,R[q+Y+2]=r.z,R[q+Y+3]=0),p===!0&&(r.fromBufferAttribute(W,z),R[q+Y+4]=r.x,R[q+Y+5]=r.y,R[q+Y+6]=r.z,R[q+Y+7]=0),m===!0&&(r.fromBufferAttribute(V,z),R[q+Y+8]=r.x,R[q+Y+9]=r.y,R[q+Y+10]=r.z,R[q+Y+11]=V.itemSize===4?r.w:1)}}u={count:h,texture:E,size:new ae(y,b)},n.set(a,u),a.addEventListener("dispose",D)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)o.getUniforms().setValue(i,"morphTexture",s.morphTexture,t);else{let d=0;for(let m=0;m<l.length;m++)d+=l[m];let p=a.morphTargetsRelative?1:1-d;o.getUniforms().setValue(i,"morphTargetBaseInfluence",p),o.getUniforms().setValue(i,"morphTargetInfluences",l)}o.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),o.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}}}function Hg(i,e,t,n){let r=new WeakMap;function s(a){let o=a.target;o.removeEventListener("dispose",s),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:function(a){let o=n.render.frame,l=a.geometry,c=e.get(a,l);if(r.get(c)!==o&&(e.update(c),r.set(c,o)),a.isInstancedMesh&&(a.hasEventListener("dispose",s)===!1&&a.addEventListener("dispose",s),r.get(a)!==o&&(t.update(a.instanceMatrix,i.ARRAY_BUFFER),a.instanceColor!==null&&t.update(a.instanceColor,i.ARRAY_BUFFER),r.set(a,o))),a.isSkinnedMesh){let h=a.skeleton;r.get(h)!==o&&(h.update(),r.set(h,o))}return c},dispose:function(){r=new WeakMap}}}var oo=class extends Mt{constructor(e,t,n,r,s,a,o,l,c,h=1026){if(h!==Es&&h!==Pr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Es&&(n=zi),n===void 0&&h===Pr&&(n=Ir),super(null,r,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Bt,this.minFilter=l!==void 0?l:Bt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},af=new Mt,Kd=new oo(1,1),of=new to,lf=new Vc,cf=new so,Jd=[],Qd=[],ep=new Float32Array(16),tp=new Float32Array(9),np=new Float32Array(4);function Wr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=Jd[r];if(s===void 0&&(s=new Float32Array(r),Jd[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function _t(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function yt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function zo(i,e){let t=Qd[e];t===void 0&&(t=new Int32Array(e),Qd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Vg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Gg(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;i.uniform2fv(this.addr,e),yt(t,e)}}function Wg(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(_t(t,e))return;i.uniform3fv(this.addr,e),yt(t,e)}}function Xg(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;i.uniform4fv(this.addr,e),yt(t,e)}}function jg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),yt(t,e)}else{if(_t(t,n))return;np.set(n),i.uniformMatrix2fv(this.addr,!1,np),yt(t,n)}}function qg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),yt(t,e)}else{if(_t(t,n))return;tp.set(n),i.uniformMatrix3fv(this.addr,!1,tp),yt(t,n)}}function Yg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),yt(t,e)}else{if(_t(t,n))return;ep.set(n),i.uniformMatrix4fv(this.addr,!1,ep),yt(t,n)}}function $g(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Zg(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;i.uniform2iv(this.addr,e),yt(t,e)}}function Kg(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;i.uniform3iv(this.addr,e),yt(t,e)}}function Jg(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;i.uniform4iv(this.addr,e),yt(t,e)}}function Qg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function e0(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;i.uniform2uiv(this.addr,e),yt(t,e)}}function t0(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;i.uniform3uiv(this.addr,e),yt(t,e)}}function n0(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;i.uniform4uiv(this.addr,e),yt(t,e)}}function i0(i,e,t){let n=this.cache,r=t.allocateTextureUnit(),s;n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),this.type===i.SAMPLER_2D_SHADOW?(Kd.compareFunction=515,s=Kd):s=af,t.setTexture2D(e||s,r)}function r0(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||lf,r)}function s0(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||cf,r)}function a0(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||of,r)}function o0(i,e){i.uniform1fv(this.addr,e)}function l0(i,e){let t=Wr(e,this.size,2);i.uniform2fv(this.addr,t)}function c0(i,e){let t=Wr(e,this.size,3);i.uniform3fv(this.addr,t)}function h0(i,e){let t=Wr(e,this.size,4);i.uniform4fv(this.addr,t)}function u0(i,e){let t=Wr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function d0(i,e){let t=Wr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function p0(i,e){let t=Wr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function f0(i,e){i.uniform1iv(this.addr,e)}function m0(i,e){i.uniform2iv(this.addr,e)}function g0(i,e){i.uniform3iv(this.addr,e)}function v0(i,e){i.uniform4iv(this.addr,e)}function _0(i,e){i.uniform1uiv(this.addr,e)}function y0(i,e){i.uniform2uiv(this.addr,e)}function x0(i,e){i.uniform3uiv(this.addr,e)}function b0(i,e){i.uniform4uiv(this.addr,e)}function M0(i,e,t){let n=this.cache,r=e.length,s=zo(t,r);_t(n,s)||(i.uniform1iv(this.addr,s),yt(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||af,s[a])}function S0(i,e,t){let n=this.cache,r=e.length,s=zo(t,r);_t(n,s)||(i.uniform1iv(this.addr,s),yt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||lf,s[a])}function w0(i,e,t){let n=this.cache,r=e.length,s=zo(t,r);_t(n,s)||(i.uniform1iv(this.addr,s),yt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||cf,s[a])}function T0(i,e,t){let n=this.cache,r=e.length,s=zo(t,r);_t(n,s)||(i.uniform1iv(this.addr,s),yt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||of,s[a])}var Xc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=(function(r){switch(r){case 5126:return Vg;case 35664:return Gg;case 35665:return Wg;case 35666:return Xg;case 35674:return jg;case 35675:return qg;case 35676:return Yg;case 5124:case 35670:return $g;case 35667:case 35671:return Zg;case 35668:case 35672:return Kg;case 35669:case 35673:return Jg;case 5125:return Qg;case 36294:return e0;case 36295:return t0;case 36296:return n0;case 35678:case 36198:case 36298:case 36306:case 35682:return i0;case 35679:case 36299:case 36307:return r0;case 35680:case 36300:case 36308:case 36293:return s0;case 36289:case 36303:case 36311:case 36292:return a0}})(t.type)}},jc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=(function(r){switch(r){case 5126:return o0;case 35664:return l0;case 35665:return c0;case 35666:return h0;case 35674:return u0;case 35675:return d0;case 35676:return p0;case 5124:case 35670:return f0;case 35667:case 35671:return m0;case 35668:case 35672:return g0;case 35669:case 35673:return v0;case 5125:return _0;case 36294:return y0;case 36295:return x0;case 36296:return b0;case 35678:case 36198:case 36298:case 36306:case 35682:return M0;case 35679:case 36299:case 36307:return S0;case 35680:case 36300:case 36308:case 36293:return w0;case 36289:case 36303:case 36311:case 36292:return T0}})(t.type)}},qc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let o=r[s];o.setValue(e,t[o.id],n)}}},Zl=/(\w+)(\])?(\[|\.)?/g;function ip(i,e){i.seq.push(e),i.map[e.id]=e}function E0(i,e,t){let n=i.name,r=n.length;for(Zl.lastIndex=0;;){let s=Zl.exec(n),a=Zl.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o|=0),c===void 0||c==="["&&a+2===r){ip(t,c===void 0?new Xc(o,i,e):new jc(o,i,e));break}{let h=t.map[o];h===void 0&&(h=new qc(o),ip(t,h)),t=h}}}var Ar=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let s=e.getActiveUniform(t,r);E0(s,e.getUniformLocation(t,s.name),this)}}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let a=e[r];a.id in t&&n.push(a)}return n}};function rp(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var A0=0,sp=new De;function ap(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+(function(o,l){let c=o.split(`
`),h=[],u=Math.max(l-6,0),d=Math.min(l+6,c.length);for(let p=u;p<d;p++){let m=p+1;h.push(`${m===l?">":" "} ${m}: ${c[p]}`)}return h.join(`
`)})(i.getShaderSource(e),a)}return r}function R0(i,e){let t=(function(n){Ge._getMatrix(sp,Ge.workingColorSpace,n);let r=`mat3( ${sp.elements.map((s=>s.toFixed(4)))} )`;switch(Ge.getTransfer(n)){case Fo:return[r,"LinearTransferOETF"];case Ke:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[r,"LinearTransferOETF"]}})(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function C0(i,e){let t;switch(e){case 1:t="Linear";break;case 2:t="Reinhard";break;case 3:t="Cineon";break;case 4:t="ACESFilmic";break;case 6:t="AgX";break;case 7:t="Neutral";break;case 5:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Pa=new w;function I0(){return Ge.getLuminanceCoefficients(Pa),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${Pa.x.toFixed(4)}, ${Pa.y.toFixed(4)}, ${Pa.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hs(i){return i!==""}function op(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function lp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var P0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yc(i){return i.replace(P0,D0)}var L0=new Map;function D0(i,e){let t=Oe[e];if(t===void 0){let n=L0.get(e);if(n===void 0)throw new Error("Can not resolve #include <"+e+">");t=Oe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n)}return Yc(t)}var N0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cp(i){return i.replace(N0,U0)}function U0(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function hp(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function O0(i,e,t,n){let r=i.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=(function(W){let V="SHADOWMAP_TYPE_BASIC";return W.shadowMapType===1?V="SHADOWMAP_TYPE_PCF":W.shadowMapType===2?V="SHADOWMAP_TYPE_PCF_SOFT":W.shadowMapType===3&&(V="SHADOWMAP_TYPE_VSM"),V})(t),c=(function(W){let V="ENVMAP_TYPE_CUBE";if(W.envMap)switch(W.envMapMode){case Rr:case Cr:V="ENVMAP_TYPE_CUBE";break;case ko:V="ENVMAP_TYPE_CUBE_UV"}return V})(t),h=(function(W){let V="ENVMAP_MODE_REFLECTION";return W.envMap&&W.envMapMode===Cr&&(V="ENVMAP_MODE_REFRACTION"),V})(t),u=(function(W){let V="ENVMAP_BLENDING_NONE";if(W.envMap)switch(W.combine){case 0:V="ENVMAP_BLENDING_MULTIPLY";break;case 1:V="ENVMAP_BLENDING_MIX";break;case 2:V="ENVMAP_BLENDING_ADD"}return V})(t),d=(function(W){let V=W.envMapCubeUVHeight;if(V===null)return null;let q=Math.log2(V)-2,z=1/V;return{texelWidth:1/(3*Math.max(Math.pow(2,q),112)),texelHeight:z,maxMip:q}})(t),p=(function(W){return[W.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",W.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hs).join(`
`)})(t),m=(function(W){let V=[];for(let q in W){let z=W[q];z!==!1&&V.push("#define "+q+" "+z)}return V.join(`
`)})(s),_=r.createProgram(),f,g,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(hs).join(`
`),f.length>0&&(f+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(hs).join(`
`),g.length>0&&(g+=`
`)):(f=[hp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hs).join(`
`),g=[hp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==0?"#define TONE_MAPPING":"",t.toneMapping!==0?Oe.tonemapping_pars_fragment:"",t.toneMapping!==0?C0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,R0("linearToOutputTexel",t.outputColorSpace),I0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(hs).join(`
`)),a=Yc(a),a=op(a,t),a=lp(a,t),o=Yc(o),o=op(o,t),o=lp(o,t),a=cp(a),o=cp(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,f=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,g=["#define varying in",t.glslVersion===Sd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Sd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let y=v+f+a,b=v+g+o,R=rp(r,r.VERTEX_SHADER,y),E=rp(r,r.FRAGMENT_SHADER,b);function I(W){if(i.debug.checkShaderErrors){let V=r.getProgramInfoLog(_).trim(),q=r.getShaderInfoLog(R).trim(),z=r.getShaderInfoLog(E).trim(),Y=!0,$=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,R,E);else{let ne=ap(r,R,"vertex"),ee=ap(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+W.name+`
Material Type: `+W.type+`

Program Info Log: `+V+`
`+ne+`
`+ee)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):q!==""&&z!==""||($=!1);$&&(W.diagnostics={runnable:Y,programLog:V,vertexShader:{log:q,prefix:f},fragmentShader:{log:z,prefix:g}})}r.deleteShader(R),r.deleteShader(E),D=new Ar(r,_),O=(function(V,q){let z={},Y=V.getProgramParameter(q,V.ACTIVE_ATTRIBUTES);for(let $=0;$<Y;$++){let ne=V.getActiveAttrib(q,$),ee=ne.name,ge=1;ne.type===V.FLOAT_MAT2&&(ge=2),ne.type===V.FLOAT_MAT3&&(ge=3),ne.type===V.FLOAT_MAT4&&(ge=4),z[ee]={type:ne.type,location:V.getAttribLocation(q,ee),locationSize:ge}}return z})(r,_)}let D,O;r.attachShader(_,R),r.attachShader(_,E),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_),this.getUniforms=function(){return D===void 0&&I(this),D},this.getAttributes=function(){return O===void 0&&I(this),O};let H=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return H===!1&&(H=r.getProgramParameter(_,37297)),H},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=A0++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=E,this}var k0=0,$c=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Zc(e),t.set(e,n)),n}},Zc=class{constructor(e){this.id=k0++,this.code=e,this.usedTimes=0}};function B0(i,e,t,n,r,s,a){let o=new no,l=new $c,c=new Set,h=[],u=r.logarithmicDepthBuffer,d=r.vertexTextures,p=r.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(f){return c.add(f),f===0?"uv":`uv${f}`}return{getParameters:function(f,g,v,y,b){let R=y.fog,E=b.geometry,I=f.isMeshStandardMaterial?y.environment:null,D=(f.isMeshStandardMaterial?t:e).get(f.envMap||I),O=D&&D.mapping===ko?D.image.height:null,H=m[f.type];f.precision!==null&&(p=r.getMaxPrecision(f.precision),p!==f.precision&&console.warn("THREE.WebGLProgram.getParameters:",f.precision,"not supported, using",p,"instead."));let W=E.morphAttributes.position||E.morphAttributes.normal||E.morphAttributes.color,V=W!==void 0?W.length:0,q,z,Y,$,ne=0;if(E.morphAttributes.position!==void 0&&(ne=1),E.morphAttributes.normal!==void 0&&(ne=2),E.morphAttributes.color!==void 0&&(ne=3),H){let ts=Tn[H];q=ts.vertexShader,z=ts.fragmentShader}else q=f.vertexShader,z=f.fragmentShader,l.update(f),Y=l.getVertexShaderID(f),$=l.getFragmentShaderID(f);let ee=i.getRenderTarget(),ge=i.state.buffers.depth.getReversed(),Me=b.isInstancedMesh===!0,te=b.isBatchedMesh===!0,oe=!!f.map,me=!!f.matcap,ve=!!D,ue=!!f.aoMap,A=!!f.lightMap,T=!!f.bumpMap,U=!!f.normalMap,N=!!f.displacementMap,C=!!f.emissiveMap,L=!!f.metalnessMap,M=!!f.roughnessMap,P=f.anisotropy>0,B=f.clearcoat>0,Q=f.dispersion>0,k=f.iridescence>0,K=f.sheen>0,Z=f.transmission>0,ie=P&&!!f.anisotropyMap,pe=B&&!!f.clearcoatMap,de=B&&!!f.clearcoatNormalMap,Se=B&&!!f.clearcoatRoughnessMap,Ie=k&&!!f.iridescenceMap,je=k&&!!f.iridescenceThicknessMap,Be=K&&!!f.sheenColorMap,we=K&&!!f.sheenRoughnessMap,Ye=!!f.specularMap,tt=!!f.specularColorMap,ct=!!f.specularIntensityMap,_e=Z&&!!f.transmissionMap,He=Z&&!!f.thicknessMap,Je=!!f.gradientMap,Qi=!!f.alphaMap,la=f.alphaTest>0,cn=!!f.alphaHash,Sn=!!f.extensions,Ti=0;f.toneMapped&&(ee!==null&&ee.isXRRenderTarget!==!0||(Ti=i.toneMapping));let F={shaderID:H,shaderType:f.type,shaderName:f.name,vertexShader:q,fragmentShader:z,defines:f.defines,customVertexShaderID:Y,customFragmentShaderID:$,isRawShaderMaterial:f.isRawShaderMaterial===!0,glslVersion:f.glslVersion,precision:p,batching:te,batchingColor:te&&b._colorsTexture!==null,instancing:Me,instancingColor:Me&&b.instanceColor!==null,instancingMorph:Me&&b.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ee===null?i.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:It,alphaToCoverage:!!f.alphaToCoverage,map:oe,matcap:me,envMap:ve,envMapMode:ve&&D.mapping,envMapCubeUVHeight:O,aoMap:ue,lightMap:A,bumpMap:T,normalMap:U,displacementMap:d&&N,emissiveMap:C,normalMapObjectSpace:U&&f.normalMapType===1,normalMapTangentSpace:U&&f.normalMapType===0,metalnessMap:L,roughnessMap:M,anisotropy:P,anisotropyMap:ie,clearcoat:B,clearcoatMap:pe,clearcoatNormalMap:de,clearcoatRoughnessMap:Se,dispersion:Q,iridescence:k,iridescenceMap:Ie,iridescenceThicknessMap:je,sheen:K,sheenColorMap:Be,sheenRoughnessMap:we,specularMap:Ye,specularColorMap:tt,specularIntensityMap:ct,transmission:Z,transmissionMap:_e,thicknessMap:He,gradientMap:Je,opaque:f.transparent===!1&&f.blending===1&&f.alphaToCoverage===!1,alphaMap:Qi,alphaTest:la,alphaHash:cn,combine:f.combine,mapUv:oe&&_(f.map.channel),aoMapUv:ue&&_(f.aoMap.channel),lightMapUv:A&&_(f.lightMap.channel),bumpMapUv:T&&_(f.bumpMap.channel),normalMapUv:U&&_(f.normalMap.channel),displacementMapUv:N&&_(f.displacementMap.channel),emissiveMapUv:C&&_(f.emissiveMap.channel),metalnessMapUv:L&&_(f.metalnessMap.channel),roughnessMapUv:M&&_(f.roughnessMap.channel),anisotropyMapUv:ie&&_(f.anisotropyMap.channel),clearcoatMapUv:pe&&_(f.clearcoatMap.channel),clearcoatNormalMapUv:de&&_(f.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&_(f.clearcoatRoughnessMap.channel),iridescenceMapUv:Ie&&_(f.iridescenceMap.channel),iridescenceThicknessMapUv:je&&_(f.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&_(f.sheenColorMap.channel),sheenRoughnessMapUv:we&&_(f.sheenRoughnessMap.channel),specularMapUv:Ye&&_(f.specularMap.channel),specularColorMapUv:tt&&_(f.specularColorMap.channel),specularIntensityMapUv:ct&&_(f.specularIntensityMap.channel),transmissionMapUv:_e&&_(f.transmissionMap.channel),thicknessMapUv:He&&_(f.thicknessMap.channel),alphaMapUv:Qi&&_(f.alphaMap.channel),vertexTangents:!!E.attributes.tangent&&(U||P),vertexColors:f.vertexColors,vertexAlphas:f.vertexColors===!0&&!!E.attributes.color&&E.attributes.color.itemSize===4,pointsUvs:b.isPoints===!0&&!!E.attributes.uv&&(oe||Qi),fog:!!R,useFog:f.fog===!0,fogExp2:!!R&&R.isFogExp2,flatShading:f.flatShading===!0,sizeAttenuation:f.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:ge,skinning:b.isSkinnedMesh===!0,morphTargets:E.morphAttributes.position!==void 0,morphNormals:E.morphAttributes.normal!==void 0,morphColors:E.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:ne,numDirLights:g.directional.length,numPointLights:g.point.length,numSpotLights:g.spot.length,numSpotLightMaps:g.spotLightMap.length,numRectAreaLights:g.rectArea.length,numHemiLights:g.hemi.length,numDirLightShadows:g.directionalShadowMap.length,numPointLightShadows:g.pointShadowMap.length,numSpotLightShadows:g.spotShadowMap.length,numSpotLightShadowsWithMaps:g.numSpotLightShadowsWithMaps,numLightProbes:g.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:f.dithering,shadowMapEnabled:i.shadowMap.enabled&&v.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ti,decodeVideoTexture:oe&&f.map.isVideoTexture===!0&&Ge.getTransfer(f.map.colorSpace)===Ke,decodeVideoTextureEmissive:C&&f.emissiveMap.isVideoTexture===!0&&Ge.getTransfer(f.emissiveMap.colorSpace)===Ke,premultipliedAlpha:f.premultipliedAlpha,doubleSided:f.side===2,flipSided:f.side===1,useDepthPacking:f.depthPacking>=0,depthPacking:f.depthPacking||0,index0AttributeName:f.index0AttributeName,extensionClipCullDistance:Sn&&f.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Sn&&f.extensions.multiDraw===!0||te)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:f.customProgramCacheKey()};return F.vertexUv1s=c.has(1),F.vertexUv2s=c.has(2),F.vertexUv3s=c.has(3),c.clear(),F},getProgramCacheKey:function(f){let g=[];if(f.shaderID?g.push(f.shaderID):(g.push(f.customVertexShaderID),g.push(f.customFragmentShaderID)),f.defines!==void 0)for(let v in f.defines)g.push(v),g.push(f.defines[v]);return f.isRawShaderMaterial===!1&&((function(v,y){v.push(y.precision),v.push(y.outputColorSpace),v.push(y.envMapMode),v.push(y.envMapCubeUVHeight),v.push(y.mapUv),v.push(y.alphaMapUv),v.push(y.lightMapUv),v.push(y.aoMapUv),v.push(y.bumpMapUv),v.push(y.normalMapUv),v.push(y.displacementMapUv),v.push(y.emissiveMapUv),v.push(y.metalnessMapUv),v.push(y.roughnessMapUv),v.push(y.anisotropyMapUv),v.push(y.clearcoatMapUv),v.push(y.clearcoatNormalMapUv),v.push(y.clearcoatRoughnessMapUv),v.push(y.iridescenceMapUv),v.push(y.iridescenceThicknessMapUv),v.push(y.sheenColorMapUv),v.push(y.sheenRoughnessMapUv),v.push(y.specularMapUv),v.push(y.specularColorMapUv),v.push(y.specularIntensityMapUv),v.push(y.transmissionMapUv),v.push(y.thicknessMapUv),v.push(y.combine),v.push(y.fogExp2),v.push(y.sizeAttenuation),v.push(y.morphTargetsCount),v.push(y.morphAttributeCount),v.push(y.numDirLights),v.push(y.numPointLights),v.push(y.numSpotLights),v.push(y.numSpotLightMaps),v.push(y.numHemiLights),v.push(y.numRectAreaLights),v.push(y.numDirLightShadows),v.push(y.numPointLightShadows),v.push(y.numSpotLightShadows),v.push(y.numSpotLightShadowsWithMaps),v.push(y.numLightProbes),v.push(y.shadowMapType),v.push(y.toneMapping),v.push(y.numClippingPlanes),v.push(y.numClipIntersection),v.push(y.depthPacking)})(g,f),(function(v,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),v.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),v.push(o.mask)})(g,f),g.push(i.outputColorSpace)),g.push(f.customProgramCacheKey),g.join()},getUniforms:function(f){let g=m[f.type],v;if(g){let y=Tn[g];v=wg.clone(y.uniforms)}else v=f.uniforms;return v},acquireProgram:function(f,g){let v;for(let y=0,b=h.length;y<b;y++){let R=h[y];if(R.cacheKey===g){v=R,++v.usedTimes;break}}return v===void 0&&(v=new O0(i,g,f,s),h.push(v)),v},releaseProgram:function(f){if(--f.usedTimes==0){let g=h.indexOf(f);h[g]=h[h.length-1],h.pop(),f.destroy()}},releaseShaderCache:function(f){l.remove(f)},programs:h,dispose:function(){l.dispose()}}}function F0(){let i=new WeakMap;return{has:function(e){return i.has(e)},get:function(e){let t=i.get(e);return t===void 0&&(t={},i.set(e,t)),t},remove:function(e){i.delete(e)},update:function(e,t,n){i.get(e)[t]=n},dispose:function(){i=new WeakMap}}}function z0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function up(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function dp(){let i=[],e=0,t=[],n=[],r=[];function s(a,o,l,c,h,u){let d=i[e];return d===void 0?(d={id:a.id,object:a,geometry:o,material:l,groupOrder:c,renderOrder:a.renderOrder,z:h,group:u},i[e]=d):(d.id=a.id,d.object=a,d.geometry=o,d.material=l,d.groupOrder=c,d.renderOrder=a.renderOrder,d.z=h,d.group=u),e++,d}return{opaque:t,transmissive:n,transparent:r,init:function(){e=0,t.length=0,n.length=0,r.length=0},push:function(a,o,l,c,h,u){let d=s(a,o,l,c,h,u);l.transmission>0?n.push(d):l.transparent===!0?r.push(d):t.push(d)},unshift:function(a,o,l,c,h,u){let d=s(a,o,l,c,h,u);l.transmission>0?n.unshift(d):l.transparent===!0?r.unshift(d):t.unshift(d)},finish:function(){for(let a=e,o=i.length;a<o;a++){let l=i[a];if(l.id===null)break;l.id=null,l.object=null,l.geometry=null,l.material=null,l.group=null}},sort:function(a,o){t.length>1&&t.sort(a||z0),n.length>1&&n.sort(o||up),r.length>1&&r.sort(o||up)}}}function H0(){let i=new WeakMap;return{get:function(e,t){let n=i.get(e),r;return n===void 0?(r=new dp,i.set(e,[r])):t>=n.length?(r=new dp,n.push(r)):r=n[t],r},dispose:function(){i=new WeakMap}}}function V0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new w,color:new Te};break;case"SpotLight":t={position:new w,direction:new w,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new w,color:new Te,distance:0,decay:0};break;case"HemisphereLight":t={direction:new w,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":t={color:new Te,position:new w,halfWidth:new w,halfHeight:new w}}return i[e.id]=t,t}}}var G0=0;function W0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function X0(i){let e=new V0,t=(function(){let o={};return{get:function(l){if(o[l.id]!==void 0)return o[l.id];let c;switch(l.type){case"DirectionalLight":case"SpotLight":c={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"PointLight":c={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae,shadowCameraNear:1,shadowCameraFar:1e3}}return o[l.id]=c,c}}})(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)n.probe.push(new w);let r=new w,s=new Ee,a=new Ee;return{setup:function(o){let l=0,c=0,h=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let u=0,d=0,p=0,m=0,_=0,f=0,g=0,v=0,y=0,b=0,R=0;o.sort(W0);for(let I=0,D=o.length;I<D;I++){let O=o[I],H=O.color,W=O.intensity,V=O.distance,q=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)l+=H.r*W,c+=H.g*W,h+=H.b*W;else if(O.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(O.sh.coefficients[z],W);R++}else if(O.isDirectionalLight){let z=e.get(O);if(z.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let Y=O.shadow,$=t.get(O);$.shadowIntensity=Y.intensity,$.shadowBias=Y.bias,$.shadowNormalBias=Y.normalBias,$.shadowRadius=Y.radius,$.shadowMapSize=Y.mapSize,n.directionalShadow[u]=$,n.directionalShadowMap[u]=q,n.directionalShadowMatrix[u]=O.shadow.matrix,f++}n.directional[u]=z,u++}else if(O.isSpotLight){let z=e.get(O);z.position.setFromMatrixPosition(O.matrixWorld),z.color.copy(H).multiplyScalar(W),z.distance=V,z.coneCos=Math.cos(O.angle),z.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),z.decay=O.decay,n.spot[p]=z;let Y=O.shadow;if(O.map&&(n.spotLightMap[y]=O.map,y++,Y.updateMatrices(O),O.castShadow&&b++),n.spotLightMatrix[p]=Y.matrix,O.castShadow){let $=t.get(O);$.shadowIntensity=Y.intensity,$.shadowBias=Y.bias,$.shadowNormalBias=Y.normalBias,$.shadowRadius=Y.radius,$.shadowMapSize=Y.mapSize,n.spotShadow[p]=$,n.spotShadowMap[p]=q,v++}p++}else if(O.isRectAreaLight){let z=e.get(O);z.color.copy(H).multiplyScalar(W),z.halfWidth.set(.5*O.width,0,0),z.halfHeight.set(0,.5*O.height,0),n.rectArea[m]=z,m++}else if(O.isPointLight){let z=e.get(O);if(z.color.copy(O.color).multiplyScalar(O.intensity),z.distance=O.distance,z.decay=O.decay,O.castShadow){let Y=O.shadow,$=t.get(O);$.shadowIntensity=Y.intensity,$.shadowBias=Y.bias,$.shadowNormalBias=Y.normalBias,$.shadowRadius=Y.radius,$.shadowMapSize=Y.mapSize,$.shadowCameraNear=Y.camera.near,$.shadowCameraFar=Y.camera.far,n.pointShadow[d]=$,n.pointShadowMap[d]=q,n.pointShadowMatrix[d]=O.shadow.matrix,g++}n.point[d]=z,d++}else if(O.isHemisphereLight){let z=e.get(O);z.skyColor.copy(O.color).multiplyScalar(W),z.groundColor.copy(O.groundColor).multiplyScalar(W),n.hemi[_]=z,_++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=he.LTC_FLOAT_1,n.rectAreaLTC2=he.LTC_FLOAT_2):(n.rectAreaLTC1=he.LTC_HALF_1,n.rectAreaLTC2=he.LTC_HALF_2)),n.ambient[0]=l,n.ambient[1]=c,n.ambient[2]=h;let E=n.hash;E.directionalLength===u&&E.pointLength===d&&E.spotLength===p&&E.rectAreaLength===m&&E.hemiLength===_&&E.numDirectionalShadows===f&&E.numPointShadows===g&&E.numSpotShadows===v&&E.numSpotMaps===y&&E.numLightProbes===R||(n.directional.length=u,n.spot.length=p,n.rectArea.length=m,n.point.length=d,n.hemi.length=_,n.directionalShadow.length=f,n.directionalShadowMap.length=f,n.pointShadow.length=g,n.pointShadowMap.length=g,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=f,n.pointShadowMatrix.length=g,n.spotLightMatrix.length=v+y-b,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=R,E.directionalLength=u,E.pointLength=d,E.spotLength=p,E.rectAreaLength=m,E.hemiLength=_,E.numDirectionalShadows=f,E.numPointShadows=g,E.numSpotShadows=v,E.numSpotMaps=y,E.numLightProbes=R,n.version=G0++)},setupView:function(o,l){let c=0,h=0,u=0,d=0,p=0,m=l.matrixWorldInverse;for(let _=0,f=o.length;_<f;_++){let g=o[_];if(g.isDirectionalLight){let v=n.directional[c];v.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),c++}else if(g.isSpotLight){let v=n.spot[u];v.position.setFromMatrixPosition(g.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),u++}else if(g.isRectAreaLight){let v=n.rectArea[d];v.position.setFromMatrixPosition(g.matrixWorld),v.position.applyMatrix4(m),a.identity(),s.copy(g.matrixWorld),s.premultiply(m),a.extractRotation(s),v.halfWidth.set(.5*g.width,0,0),v.halfHeight.set(0,.5*g.height,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),d++}else if(g.isPointLight){let v=n.point[h];v.position.setFromMatrixPosition(g.matrixWorld),v.position.applyMatrix4(m),h++}else if(g.isHemisphereLight){let v=n.hemi[p];v.direction.setFromMatrixPosition(g.matrixWorld),v.direction.transformDirection(m),p++}}},state:n}}function pp(i){let e=new X0(i),t=[],n=[],r={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:function(s){r.camera=s,t.length=0,n.length=0},state:r,setupLights:function(){e.setup(t)},setupLightsView:function(s){e.setupView(t,s)},pushLight:function(s){t.push(s)},pushShadow:function(s){n.push(s)}}}function j0(i){let e=new WeakMap;return{get:function(t,n=0){let r=e.get(t),s;return r===void 0?(s=new pp(i),e.set(t,[s])):n>=r.length?(s=new pp(i),r.push(s)):s=r[n],s},dispose:function(){e=new WeakMap}}}var Kc=class extends Ot{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Jc=class extends Ot{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function q0(i,e,t){let n=new Br,r=new ae,s=new ae,a=new $e,o=new Kc({depthPacking:3201}),l=new Jc,c={},h=t.maxTextureSize,u={[Uh]:1,[Lm]:0,[Oh]:2},d=new Rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ae},radius:{value:4}},vertexShader:`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragmentShader:`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let m=new et;m.setAttribute("position",new mt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Qe(m,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let g=this.type;function v(E,I){let D=e.update(_);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Wn(r.x,r.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(I,null,D,d,_,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(I,null,D,p,_,null)}function y(E,I,D,O){let H=null,W=D.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(W!==void 0)H=W;else if(H=D.isPointLight===!0?l:o,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){let V=H.uuid,q=I.uuid,z=c[V];z===void 0&&(z={},c[V]=z);let Y=z[q];Y===void 0&&(Y=H.clone(),z[q]=Y,I.addEventListener("dispose",R)),H=Y}return H.visible=I.visible,H.wireframe=I.wireframe,H.side=O===3?I.shadowSide!==null?I.shadowSide:I.side:I.shadowSide!==null?I.shadowSide:u[I.side],H.alphaMap=I.alphaMap,H.alphaTest=I.alphaTest,H.map=I.map,H.clipShadows=I.clipShadows,H.clippingPlanes=I.clippingPlanes,H.clipIntersection=I.clipIntersection,H.displacementMap=I.displacementMap,H.displacementScale=I.displacementScale,H.displacementBias=I.displacementBias,H.wireframeLinewidth=I.wireframeLinewidth,H.linewidth=I.linewidth,D.isPointLight===!0&&H.isMeshDistanceMaterial===!0&&(i.properties.get(H).light=D),H}function b(E,I,D,O,H){if(E.visible===!1)return;if(E.layers.test(I.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&H===3)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,E.matrixWorld);let V=e.update(E),q=E.material;if(Array.isArray(q)){let z=V.groups;for(let Y=0,$=z.length;Y<$;Y++){let ne=z[Y],ee=q[ne.materialIndex];if(ee&&ee.visible){let ge=y(E,ee,O,H);E.onBeforeShadow(i,E,I,D,V,ge,ne),i.renderBufferDirect(D,null,V,ge,E,ne),E.onAfterShadow(i,E,I,D,V,ge,ne)}}}else if(q.visible){let z=y(E,q,O,H);E.onBeforeShadow(i,E,I,D,V,z,null),i.renderBufferDirect(D,null,V,z,E,null),E.onAfterShadow(i,E,I,D,V,z,null)}}let W=E.children;for(let V=0,q=W.length;V<q;V++)b(W[V],I,D,O,H)}function R(E){E.target.removeEventListener("dispose",R);for(let I in c){let D=c[I],O=E.target.uuid;O in D&&(D[O].dispose(),delete D[O])}}this.render=function(E,I,D){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||E.length===0)return;let O=i.getRenderTarget(),H=i.getActiveCubeFace(),W=i.getActiveMipmapLevel(),V=i.state;V.setBlending(0),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let q=g!==3&&this.type===3,z=g===3&&this.type!==3;for(let Y=0,$=E.length;Y<$;Y++){let ne=E[Y],ee=ne.shadow;if(ee===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(ee.autoUpdate===!1&&ee.needsUpdate===!1)continue;r.copy(ee.mapSize);let ge=ee.getFrameExtents();if(r.multiply(ge),s.copy(ee.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/ge.x),r.x=s.x*ge.x,ee.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/ge.y),r.y=s.y*ge.y,ee.mapSize.y=s.y)),ee.map===null||q===!0||z===!0){let te=this.type!==3?{minFilter:Bt,magFilter:Bt}:{};ee.map!==null&&ee.map.dispose(),ee.map=new Wn(r.x,r.y,te),ee.map.texture.name=ne.name+".shadowMap",ee.camera.updateProjectionMatrix()}i.setRenderTarget(ee.map),i.clear();let Me=ee.getViewportCount();for(let te=0;te<Me;te++){let oe=ee.getViewport(te);a.set(s.x*oe.x,s.y*oe.y,s.x*oe.z,s.y*oe.w),V.viewport(a),ee.updateMatrices(ne,te),n=ee.getFrustum(),b(I,D,ee.camera,ne,this.type)}ee.isPointLightShadow!==!0&&this.type===3&&v(ee,D),ee.needsUpdate=!1}g=this.type,f.needsUpdate=!1,i.setRenderTarget(O,H,W)}}var Y0={[Ym]:1,[Zm]:6,[Jm]:7,[Km]:5,[$m]:0,[eg]:2,[tg]:4,[Qm]:3};function $0(i,e){let t=new function(){let M=!1,P=new $e,B=null,Q=new $e(0,0,0,0);return{setMask:function(k){B===k||M||(i.colorMask(k,k,k,k),B=k)},setLocked:function(k){M=k},setClear:function(k,K,Z,ie,pe){pe===!0&&(k*=ie,K*=ie,Z*=ie),P.set(k,K,Z,ie),Q.equals(P)===!1&&(i.clearColor(k,K,Z,ie),Q.copy(P))},reset:function(){M=!1,B=null,Q.set(-1,0,0,0)}}},n=new function(){let M=!1,P=!1,B=null,Q=null,k=null;return{setReversed:function(K){if(P!==K){let Z=e.get("EXT_clip_control");P?Z.clipControlEXT(Z.LOWER_LEFT_EXT,Z.ZERO_TO_ONE_EXT):Z.clipControlEXT(Z.LOWER_LEFT_EXT,Z.NEGATIVE_ONE_TO_ONE_EXT);let ie=k;k=null,this.setClear(ie)}P=K},getReversed:function(){return P},setTest:function(K){K?ve(i.DEPTH_TEST):ue(i.DEPTH_TEST)},setMask:function(K){B===K||M||(i.depthMask(K),B=K)},setFunc:function(K){if(P&&(K=Y0[K]),Q!==K){switch(K){case 0:i.depthFunc(i.NEVER);break;case 1:i.depthFunc(i.ALWAYS);break;case 2:i.depthFunc(i.LESS);break;case 3:default:i.depthFunc(i.LEQUAL);break;case 4:i.depthFunc(i.EQUAL);break;case 5:i.depthFunc(i.GEQUAL);break;case 6:i.depthFunc(i.GREATER);break;case 7:i.depthFunc(i.NOTEQUAL)}Q=K}},setLocked:function(K){M=K},setClear:function(K){k!==K&&(P&&(K=1-K),i.clearDepth(K),k=K)},reset:function(){M=!1,B=null,Q=null,k=null,P=!1}}},r=new function(){let M=!1,P=null,B=null,Q=null,k=null,K=null,Z=null,ie=null,pe=null;return{setTest:function(de){M||(de?ve(i.STENCIL_TEST):ue(i.STENCIL_TEST))},setMask:function(de){P===de||M||(i.stencilMask(de),P=de)},setFunc:function(de,Se,Ie){B===de&&Q===Se&&k===Ie||(i.stencilFunc(de,Se,Ie),B=de,Q=Se,k=Ie)},setOp:function(de,Se,Ie){K===de&&Z===Se&&ie===Ie||(i.stencilOp(de,Se,Ie),K=de,Z=Se,ie=Ie)},setLocked:function(de){M=de},setClear:function(de){pe!==de&&(i.clearStencil(de),pe=de)},reset:function(){M=!1,P=null,B=null,Q=null,k=null,K=null,Z=null,ie=null,pe=null}}},s=new WeakMap,a=new WeakMap,o={},l={},c=new WeakMap,h=[],u=null,d=!1,p=null,m=null,_=null,f=null,g=null,v=null,y=null,b=new Te(0,0,0),R=0,E=!1,I=null,D=null,O=null,H=null,W=null,V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,z=0,Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(Y)[1]),q=z>=1):Y.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),q=z>=2);let $=null,ne={},ee=i.getParameter(i.SCISSOR_BOX),ge=i.getParameter(i.VIEWPORT),Me=new $e().fromArray(ee),te=new $e().fromArray(ge);function oe(M,P,B,Q){let k=new Uint8Array(4),K=i.createTexture();i.bindTexture(M,K),i.texParameteri(M,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(M,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Z=0;Z<B;Z++)M===i.TEXTURE_3D||M===i.TEXTURE_2D_ARRAY?i.texImage3D(P,0,i.RGBA,1,1,Q,0,i.RGBA,i.UNSIGNED_BYTE,k):i.texImage2D(P+Z,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,k);return K}let me={};function ve(M){o[M]!==!0&&(i.enable(M),o[M]=!0)}function ue(M){o[M]!==!1&&(i.disable(M),o[M]=!1)}me[i.TEXTURE_2D]=oe(i.TEXTURE_2D,i.TEXTURE_2D,1),me[i.TEXTURE_CUBE_MAP]=oe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),me[i.TEXTURE_2D_ARRAY]=oe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),me[i.TEXTURE_3D]=oe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),t.setClear(0,0,0,1),n.setClear(1),r.setClear(0),ve(i.DEPTH_TEST),n.setFunc(3),N(!1),C(1),ve(i.CULL_FACE),U(0);let A={[ki]:i.FUNC_ADD,[Dm]:i.FUNC_SUBTRACT,[Nm]:i.FUNC_REVERSE_SUBTRACT};A[103]=i.MIN,A[104]=i.MAX;let T={[Um]:i.ZERO,[Om]:i.ONE,[km]:i.SRC_COLOR,[lc]:i.SRC_ALPHA,[Gm]:i.SRC_ALPHA_SATURATE,[Hm]:i.DST_COLOR,[Fm]:i.DST_ALPHA,[Bm]:i.ONE_MINUS_SRC_COLOR,[cc]:i.ONE_MINUS_SRC_ALPHA,[Vm]:i.ONE_MINUS_DST_COLOR,[zm]:i.ONE_MINUS_DST_ALPHA,[Wm]:i.CONSTANT_COLOR,[Xm]:i.ONE_MINUS_CONSTANT_COLOR,[jm]:i.CONSTANT_ALPHA,[qm]:i.ONE_MINUS_CONSTANT_ALPHA};function U(M,P,B,Q,k,K,Z,ie,pe,de){if(M!==0){if(d===!1&&(ve(i.BLEND),d=!0),M===5)k=k||P,K=K||B,Z=Z||Q,P===m&&k===g||(i.blendEquationSeparate(A[P],A[k]),m=P,g=k),B===_&&Q===f&&K===v&&Z===y||(i.blendFuncSeparate(T[B],T[Q],T[K],T[Z]),_=B,f=Q,v=K,y=Z),ie.equals(b)!==!1&&pe===R||(i.blendColor(ie.r,ie.g,ie.b,pe),b.copy(ie),R=pe),p=M,E=!1;else if(M!==p||de!==E){if(m===ki&&g===ki||(i.blendEquation(i.FUNC_ADD),m=ki,g=ki),de)switch(M){case 1:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFunc(i.ONE,i.ONE);break;case 3:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case 4:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",M)}else switch(M){case 1:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case 3:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case 4:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",M)}_=null,f=null,v=null,y=null,b.set(0,0,0),R=0,p=M,E=de}}else d===!0&&(ue(i.BLEND),d=!1)}function N(M){I!==M&&(M?i.frontFace(i.CW):i.frontFace(i.CCW),I=M)}function C(M){M!==0?(ve(i.CULL_FACE),M!==D&&(M===1?i.cullFace(i.BACK):M===2?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ue(i.CULL_FACE),D=M}function L(M,P,B){M?(ve(i.POLYGON_OFFSET_FILL),H===P&&W===B||(i.polygonOffset(P,B),H=P,W=B)):ue(i.POLYGON_OFFSET_FILL)}return{buffers:{color:t,depth:n,stencil:r},enable:ve,disable:ue,bindFramebuffer:function(M,P){return l[M]!==P&&(i.bindFramebuffer(M,P),l[M]=P,M===i.DRAW_FRAMEBUFFER&&(l[i.FRAMEBUFFER]=P),M===i.FRAMEBUFFER&&(l[i.DRAW_FRAMEBUFFER]=P),!0)},drawBuffers:function(M,P){let B=h,Q=!1;if(M){B=c.get(P),B===void 0&&(B=[],c.set(P,B));let k=M.textures;if(B.length!==k.length||B[0]!==i.COLOR_ATTACHMENT0){for(let K=0,Z=k.length;K<Z;K++)B[K]=i.COLOR_ATTACHMENT0+K;B.length=k.length,Q=!0}}else B[0]!==i.BACK&&(B[0]=i.BACK,Q=!0);Q&&i.drawBuffers(B)},useProgram:function(M){return u!==M&&(i.useProgram(M),u=M,!0)},setBlending:U,setMaterial:function(M,P){M.side===2?ue(i.CULL_FACE):ve(i.CULL_FACE);let B=M.side===1;P&&(B=!B),N(B),M.blending===1&&M.transparent===!1?U(0):U(M.blending,M.blendEquation,M.blendSrc,M.blendDst,M.blendEquationAlpha,M.blendSrcAlpha,M.blendDstAlpha,M.blendColor,M.blendAlpha,M.premultipliedAlpha),n.setFunc(M.depthFunc),n.setTest(M.depthTest),n.setMask(M.depthWrite),t.setMask(M.colorWrite);let Q=M.stencilWrite;r.setTest(Q),Q&&(r.setMask(M.stencilWriteMask),r.setFunc(M.stencilFunc,M.stencilRef,M.stencilFuncMask),r.setOp(M.stencilFail,M.stencilZFail,M.stencilZPass)),L(M.polygonOffset,M.polygonOffsetFactor,M.polygonOffsetUnits),M.alphaToCoverage===!0?ve(i.SAMPLE_ALPHA_TO_COVERAGE):ue(i.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:N,setCullFace:C,setLineWidth:function(M){M!==O&&(q&&i.lineWidth(M),O=M)},setPolygonOffset:L,setScissorTest:function(M){M?ve(i.SCISSOR_TEST):ue(i.SCISSOR_TEST)},activeTexture:function(M){M===void 0&&(M=i.TEXTURE0+V-1),$!==M&&(i.activeTexture(M),$=M)},bindTexture:function(M,P,B){B===void 0&&(B=$===null?i.TEXTURE0+V-1:$);let Q=ne[B];Q===void 0&&(Q={type:void 0,texture:void 0},ne[B]=Q),Q.type===M&&Q.texture===P||($!==B&&(i.activeTexture(B),$=B),i.bindTexture(M,P||me[M]),Q.type=M,Q.texture=P)},unbindTexture:function(){let M=ne[$];M!==void 0&&M.type!==void 0&&(i.bindTexture(M.type,null),M.type=void 0,M.texture=void 0)},compressedTexImage2D:function(){try{i.compressedTexImage2D.apply(i,arguments)}catch(M){console.error("THREE.WebGLState:",M)}},compressedTexImage3D:function(){try{i.compressedTexImage3D.apply(i,arguments)}catch(M){console.error("THREE.WebGLState:",M)}},texImage2D:function(){try{i.texImage2D.apply(i,arguments)}catch(M){console.error("THREE.WebGLState:",M)}},texImage3D:function(){try{i.texImage3D.apply(i,arguments)}catch(M){console.error("THREE.WebGLState:",M)}},updateUBOMapping:function(M,P){let B=a.get(P);B===void 0&&(B=new WeakMap,a.set(P,B));let Q=B.get(M);Q===void 0&&(Q=i.getUniformBlockIndex(P,M.name),B.set(M,Q))},uniformBlockBinding:function(M,P){let B=a.get(P).get(M);s.get(P)!==B&&(i.uniformBlockBinding(P,B,M.__bindingPointIndex),s.set(P,B))},texStorage2D:function(){try{i.texStorage2D.apply(i,arguments)}catch(M){console.error("THREE.WebGLState:",M)}},texStorage3D:function(){try{i.texStorage3D.apply(i,arguments)}catch(M){console.error("THREE.WebGLState:",M)}},texSubImage2D:function(){try{i.texSubImage2D.apply(i,arguments)}catch(M){console.error("THREE.WebGLState:",M)}},texSubImage3D:function(){try{i.texSubImage3D.apply(i,arguments)}catch(M){console.error("THREE.WebGLState:",M)}},compressedTexSubImage2D:function(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(M){console.error("THREE.WebGLState:",M)}},compressedTexSubImage3D:function(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(M){console.error("THREE.WebGLState:",M)}},scissor:function(M){Me.equals(M)===!1&&(i.scissor(M.x,M.y,M.z,M.w),Me.copy(M))},viewport:function(M){te.equals(M)===!1&&(i.viewport(M.x,M.y,M.z,M.w),te.copy(M))},reset:function(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),n.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),o={},$=null,ne={},l={},c=new WeakMap,h=[],u=null,d=!1,p=null,m=null,_=null,f=null,g=null,v=null,y=null,b=new Te(0,0,0),R=0,E=!1,I=null,D=null,O=null,H=null,W=null,Me.set(0,0,i.canvas.width,i.canvas.height),te.set(0,0,i.canvas.width,i.canvas.height),t.reset(),n.reset(),r.reset()}}}function fp(i,e,t,n){let r=(function(s){switch(s){case di:case Wp:return{byteLength:1,components:1};case Ts:case Xp:case Vs:return{byteLength:2,components:1};case Fh:case zh:return{byteLength:2,components:4};case zi:case Bh:case yn:return{byteLength:4,components:1};case jp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)})(n);switch(t){case qp:case $p:return i*e;case Zp:return i*e*2;case Hh:case Vh:return i*e/r.components*r.byteLength;case Kp:case Gh:return i*e*2/r.components*r.byteLength;case Yp:return i*e*3/r.components*r.byteLength;case xn:case Wh:return i*e*4/r.components*r.byteLength;case Ya:case $a:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Za:case Ka:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case pc:case mc:return Math.max(i,16)*Math.max(e,8)/4;case dc:case fc:return Math.max(i,8)*Math.max(e,8)/2;case gc:case vc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case _c:case yc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case xc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case bc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Mc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Sc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case wc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Tc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ec:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ac:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Rc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Cc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ic:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Pc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Lc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ja:case Dc:case Nc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Jp:case Uc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Oc:case kc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Z0(i,e,t,n,r,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),c=new ae,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(A,T){return p?new OffscreenCanvas(A,T):As("canvas")}function _(A,T,U){let N=1,C=ue(A);if((C.width>U||C.height>U)&&(N=U/Math.max(C.width,C.height)),N<1){if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let L=Math.floor(N*C.width),M=Math.floor(N*C.height);u===void 0&&(u=m(L,M));let P=T?m(L,M):u;return P.width=L,P.height=M,P.getContext("2d").drawImage(A,0,0,L,M),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+L+"x"+M+")."),P}return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),A}return A}function f(A){return A.generateMipmaps}function g(A){i.generateMipmap(A)}function v(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(A,T,U,N,C=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let L=T;if(T===i.RED&&(U===i.FLOAT&&(L=i.R32F),U===i.HALF_FLOAT&&(L=i.R16F),U===i.UNSIGNED_BYTE&&(L=i.R8)),T===i.RED_INTEGER&&(U===i.UNSIGNED_BYTE&&(L=i.R8UI),U===i.UNSIGNED_SHORT&&(L=i.R16UI),U===i.UNSIGNED_INT&&(L=i.R32UI),U===i.BYTE&&(L=i.R8I),U===i.SHORT&&(L=i.R16I),U===i.INT&&(L=i.R32I)),T===i.RG&&(U===i.FLOAT&&(L=i.RG32F),U===i.HALF_FLOAT&&(L=i.RG16F),U===i.UNSIGNED_BYTE&&(L=i.RG8)),T===i.RG_INTEGER&&(U===i.UNSIGNED_BYTE&&(L=i.RG8UI),U===i.UNSIGNED_SHORT&&(L=i.RG16UI),U===i.UNSIGNED_INT&&(L=i.RG32UI),U===i.BYTE&&(L=i.RG8I),U===i.SHORT&&(L=i.RG16I),U===i.INT&&(L=i.RG32I)),T===i.RGB_INTEGER&&(U===i.UNSIGNED_BYTE&&(L=i.RGB8UI),U===i.UNSIGNED_SHORT&&(L=i.RGB16UI),U===i.UNSIGNED_INT&&(L=i.RGB32UI),U===i.BYTE&&(L=i.RGB8I),U===i.SHORT&&(L=i.RGB16I),U===i.INT&&(L=i.RGB32I)),T===i.RGBA_INTEGER&&(U===i.UNSIGNED_BYTE&&(L=i.RGBA8UI),U===i.UNSIGNED_SHORT&&(L=i.RGBA16UI),U===i.UNSIGNED_INT&&(L=i.RGBA32UI),U===i.BYTE&&(L=i.RGBA8I),U===i.SHORT&&(L=i.RGBA16I),U===i.INT&&(L=i.RGBA32I)),T===i.RGB&&U===i.UNSIGNED_INT_5_9_9_9_REV&&(L=i.RGB9_E5),T===i.RGBA){let M=C?Fo:Ge.getTransfer(N);U===i.FLOAT&&(L=i.RGBA32F),U===i.HALF_FLOAT&&(L=i.RGBA16F),U===i.UNSIGNED_BYTE&&(L=M===Ke?i.SRGB8_ALPHA8:i.RGBA8),U===i.UNSIGNED_SHORT_4_4_4_4&&(L=i.RGBA4),U===i.UNSIGNED_SHORT_5_5_5_1&&(L=i.RGB5_A1)}return L!==i.R16F&&L!==i.R32F&&L!==i.RG16F&&L!==i.RG32F&&L!==i.RGBA16F&&L!==i.RGBA32F||e.get("EXT_color_buffer_float"),L}function b(A,T){let U;return A?T===null||T===zi||T===Ir?U=i.DEPTH24_STENCIL8:T===yn?U=i.DEPTH32F_STENCIL8:T===Ts&&(U=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===zi||T===Ir?U=i.DEPTH_COMPONENT24:T===yn?U=i.DEPTH_COMPONENT32F:T===Ts&&(U=i.DEPTH_COMPONENT16),U}function R(A,T){return f(A)===!0||A.isFramebufferTexture&&A.minFilter!==Bt&&A.minFilter!==qt?Math.log2(Math.max(T.width,T.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?T.mipmaps.length:1}function E(A){let T=A.target;T.removeEventListener("dispose",E),(function(U){let N=n.get(U);if(N.__webglInit===void 0)return;let C=U.source,L=d.get(C);if(L){let M=L[N.__cacheKey];M.usedTimes--,M.usedTimes===0&&D(U),Object.keys(L).length===0&&d.delete(C)}n.remove(U)})(T),T.isVideoTexture&&h.delete(T)}function I(A){let T=A.target;T.removeEventListener("dispose",I),(function(U){let N=n.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),n.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let L=0;L<6;L++){if(Array.isArray(N.__webglFramebuffer[L]))for(let M=0;M<N.__webglFramebuffer[L].length;M++)i.deleteFramebuffer(N.__webglFramebuffer[L][M]);else i.deleteFramebuffer(N.__webglFramebuffer[L]);N.__webglDepthbuffer&&i.deleteRenderbuffer(N.__webglDepthbuffer[L])}else{if(Array.isArray(N.__webglFramebuffer))for(let L=0;L<N.__webglFramebuffer.length;L++)i.deleteFramebuffer(N.__webglFramebuffer[L]);else i.deleteFramebuffer(N.__webglFramebuffer);if(N.__webglDepthbuffer&&i.deleteRenderbuffer(N.__webglDepthbuffer),N.__webglMultisampledFramebuffer&&i.deleteFramebuffer(N.__webglMultisampledFramebuffer),N.__webglColorRenderbuffer)for(let L=0;L<N.__webglColorRenderbuffer.length;L++)N.__webglColorRenderbuffer[L]&&i.deleteRenderbuffer(N.__webglColorRenderbuffer[L]);N.__webglDepthRenderbuffer&&i.deleteRenderbuffer(N.__webglDepthRenderbuffer)}let C=U.textures;for(let L=0,M=C.length;L<M;L++){let P=n.get(C[L]);P.__webglTexture&&(i.deleteTexture(P.__webglTexture),a.memory.textures--),n.remove(C[L])}n.remove(U)})(T)}function D(A){let T=n.get(A);i.deleteTexture(T.__webglTexture);let U=A.source;delete d.get(U)[T.__cacheKey],a.memory.textures--}let O=0;function H(A,T){let U=n.get(A);if(A.isVideoTexture&&(function(N){let C=a.render.frame;h.get(N)!==C&&(h.set(N,C),N.update())})(A),A.isRenderTargetTexture===!1&&A.version>0&&U.__version!==A.version){let N=A.image;if(N===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if(N.complete!==!1)return void $(U,A,T);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}t.bindTexture(i.TEXTURE_2D,U.__webglTexture,i.TEXTURE0+T)}let W={[Bi]:i.REPEAT,[Fi]:i.CLAMP_TO_EDGE,[ws]:i.MIRRORED_REPEAT},V={[Bt]:i.NEAREST,[kh]:i.NEAREST_MIPMAP_NEAREST,[Sr]:i.NEAREST_MIPMAP_LINEAR,[qt]:i.LINEAR,[ys]:i.LINEAR_MIPMAP_NEAREST,[Vn]:i.LINEAR_MIPMAP_LINEAR},q={[ig]:i.NEVER,[hg]:i.ALWAYS,[rg]:i.LESS,[ag]:i.LEQUAL,[sg]:i.EQUAL,[cg]:i.GEQUAL,[og]:i.GREATER,[lg]:i.NOTEQUAL};function z(A,T){if(T.type!==yn||e.has("OES_texture_float_linear")!==!1||T.magFilter!==qt&&T.magFilter!==ys&&T.magFilter!==Sr&&T.magFilter!==Vn&&T.minFilter!==qt&&T.minFilter!==ys&&T.minFilter!==Sr&&T.minFilter!==Vn||console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,W[T.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,W[T.wrapT]),A!==i.TEXTURE_3D&&A!==i.TEXTURE_2D_ARRAY||i.texParameteri(A,i.TEXTURE_WRAP_R,W[T.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,V[T.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,V[T.minFilter]),T.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,q[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Bt||T.minFilter!==Sr&&T.minFilter!==Vn||T.type===yn&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){let U=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function Y(A,T){let U=!1;A.__webglInit===void 0&&(A.__webglInit=!0,T.addEventListener("dispose",E));let N=T.source,C=d.get(N);C===void 0&&(C={},d.set(N,C));let L=(function(M){let P=[];return P.push(M.wrapS),P.push(M.wrapT),P.push(M.wrapR||0),P.push(M.magFilter),P.push(M.minFilter),P.push(M.anisotropy),P.push(M.internalFormat),P.push(M.format),P.push(M.type),P.push(M.generateMipmaps),P.push(M.premultiplyAlpha),P.push(M.flipY),P.push(M.unpackAlignment),P.push(M.colorSpace),P.join()})(T);if(L!==A.__cacheKey){C[L]===void 0&&(C[L]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,U=!0),C[L].usedTimes++;let M=C[A.__cacheKey];M!==void 0&&(C[A.__cacheKey].usedTimes--,M.usedTimes===0&&D(T)),A.__cacheKey=L,A.__webglTexture=C[L].texture}return U}function $(A,T,U){let N=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(N=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(N=i.TEXTURE_3D);let C=Y(A,T),L=T.source;t.bindTexture(N,A.__webglTexture,i.TEXTURE0+U);let M=n.get(L);if(L.version!==M.__version||C===!0){t.activeTexture(i.TEXTURE0+U);let P=Ge.getPrimaries(Ge.workingColorSpace),B=T.colorSpace===Mr?null:Ge.getPrimaries(T.colorSpace),Q=T.colorSpace===Mr||P===B?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let k=_(T.image,!1,r.maxTextureSize);k=ve(T,k);let K=s.convert(T.format,T.colorSpace),Z=s.convert(T.type),ie,pe=y(T.internalFormat,K,Z,T.colorSpace,T.isVideoTexture);z(N,T);let de=T.mipmaps,Se=T.isVideoTexture!==!0,Ie=M.__version===void 0||C===!0,je=L.dataReady,Be=R(T,k);if(T.isDepthTexture)pe=b(T.format===Pr,T.type),Ie&&(Se?t.texStorage2D(i.TEXTURE_2D,1,pe,k.width,k.height):t.texImage2D(i.TEXTURE_2D,0,pe,k.width,k.height,0,K,Z,null));else if(T.isDataTexture)if(de.length>0){Se&&Ie&&t.texStorage2D(i.TEXTURE_2D,Be,pe,de[0].width,de[0].height);for(let we=0,Ye=de.length;we<Ye;we++)ie=de[we],Se?je&&t.texSubImage2D(i.TEXTURE_2D,we,0,0,ie.width,ie.height,K,Z,ie.data):t.texImage2D(i.TEXTURE_2D,we,pe,ie.width,ie.height,0,K,Z,ie.data);T.generateMipmaps=!1}else Se?(Ie&&t.texStorage2D(i.TEXTURE_2D,Be,pe,k.width,k.height),je&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,k.width,k.height,K,Z,k.data)):t.texImage2D(i.TEXTURE_2D,0,pe,k.width,k.height,0,K,Z,k.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Se&&Ie&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Be,pe,de[0].width,de[0].height,k.depth);for(let we=0,Ye=de.length;we<Ye;we++)if(ie=de[we],T.format!==xn)if(K!==null)if(Se){if(je)if(T.layerUpdates.size>0){let tt=fp(ie.width,ie.height,T.format,T.type);for(let ct of T.layerUpdates){let _e=ie.data.subarray(ct*tt/ie.data.BYTES_PER_ELEMENT,(ct+1)*tt/ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,we,0,0,ct,ie.width,ie.height,1,K,_e)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,we,0,0,0,ie.width,ie.height,k.depth,K,ie.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,we,pe,ie.width,ie.height,k.depth,0,ie.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Se?je&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,we,0,0,0,ie.width,ie.height,k.depth,K,Z,ie.data):t.texImage3D(i.TEXTURE_2D_ARRAY,we,pe,ie.width,ie.height,k.depth,0,K,Z,ie.data)}else{Se&&Ie&&t.texStorage2D(i.TEXTURE_2D,Be,pe,de[0].width,de[0].height);for(let we=0,Ye=de.length;we<Ye;we++)ie=de[we],T.format!==xn?K!==null?Se?je&&t.compressedTexSubImage2D(i.TEXTURE_2D,we,0,0,ie.width,ie.height,K,ie.data):t.compressedTexImage2D(i.TEXTURE_2D,we,pe,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Se?je&&t.texSubImage2D(i.TEXTURE_2D,we,0,0,ie.width,ie.height,K,Z,ie.data):t.texImage2D(i.TEXTURE_2D,we,pe,ie.width,ie.height,0,K,Z,ie.data)}else if(T.isDataArrayTexture)if(Se){if(Ie&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Be,pe,k.width,k.height,k.depth),je)if(T.layerUpdates.size>0){let we=fp(k.width,k.height,T.format,T.type);for(let Ye of T.layerUpdates){let tt=k.data.subarray(Ye*we/k.data.BYTES_PER_ELEMENT,(Ye+1)*we/k.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ye,k.width,k.height,1,K,Z,tt)}T.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,k.width,k.height,k.depth,K,Z,k.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,pe,k.width,k.height,k.depth,0,K,Z,k.data);else if(T.isData3DTexture)Se?(Ie&&t.texStorage3D(i.TEXTURE_3D,Be,pe,k.width,k.height,k.depth),je&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,k.width,k.height,k.depth,K,Z,k.data)):t.texImage3D(i.TEXTURE_3D,0,pe,k.width,k.height,k.depth,0,K,Z,k.data);else if(T.isFramebufferTexture){if(Ie)if(Se)t.texStorage2D(i.TEXTURE_2D,Be,pe,k.width,k.height);else{let we=k.width,Ye=k.height;for(let tt=0;tt<Be;tt++)t.texImage2D(i.TEXTURE_2D,tt,pe,we,Ye,0,K,Z,null),we>>=1,Ye>>=1}}else if(de.length>0){if(Se&&Ie){let we=ue(de[0]);t.texStorage2D(i.TEXTURE_2D,Be,pe,we.width,we.height)}for(let we=0,Ye=de.length;we<Ye;we++)ie=de[we],Se?je&&t.texSubImage2D(i.TEXTURE_2D,we,0,0,K,Z,ie):t.texImage2D(i.TEXTURE_2D,we,pe,K,Z,ie);T.generateMipmaps=!1}else if(Se){if(Ie){let we=ue(k);t.texStorage2D(i.TEXTURE_2D,Be,pe,we.width,we.height)}je&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,K,Z,k)}else t.texImage2D(i.TEXTURE_2D,0,pe,K,Z,k);f(T)&&g(N),M.__version=L.version,T.onUpdate&&T.onUpdate(T)}A.__version=T.version}function ne(A,T,U,N,C,L){let M=s.convert(U.format,U.colorSpace),P=s.convert(U.type),B=y(U.internalFormat,M,P,U.colorSpace),Q=n.get(T),k=n.get(U);if(k.__renderTarget=T,!Q.__hasExternalTextures){let K=Math.max(1,T.width>>L),Z=Math.max(1,T.height>>L);C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY?t.texImage3D(C,L,B,K,Z,T.depth,0,M,P,null):t.texImage2D(C,L,B,K,Z,0,M,P,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),me(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,N,C,k.__webglTexture,0,oe(T)):(C===i.TEXTURE_2D||C>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&C<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,N,C,k.__webglTexture,L),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ee(A,T,U){if(i.bindRenderbuffer(i.RENDERBUFFER,A),T.depthBuffer){let N=T.depthTexture,C=N&&N.isDepthTexture?N.type:null,L=b(T.stencilBuffer,C),M=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,P=oe(T);me(T)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,P,L,T.width,T.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,P,L,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,L,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,M,i.RENDERBUFFER,A)}else{let N=T.textures;for(let C=0;C<N.length;C++){let L=N[C],M=s.convert(L.format,L.colorSpace),P=s.convert(L.type),B=y(L.internalFormat,M,P,L.colorSpace),Q=oe(T);U&&me(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Q,B,T.width,T.height):me(T)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Q,B,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,B,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ge(A){let T=n.get(A),U=A.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==A.depthTexture){let N=A.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),N){let C=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,N.removeEventListener("dispose",C)};N.addEventListener("dispose",C),T.__depthDisposeCallback=C}T.__boundDepthTexture=N}if(A.depthTexture&&!T.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");(function(N,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,N),!C.depthTexture||!C.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let L=n.get(C.depthTexture);L.__renderTarget=C,L.__webglTexture&&C.depthTexture.image.width===C.width&&C.depthTexture.image.height===C.height||(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),H(C.depthTexture,0);let M=L.__webglTexture,P=oe(C);if(C.depthTexture.format===Es)me(C)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,M,0,P):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,M,0);else{if(C.depthTexture.format!==Pr)throw new Error("Unknown depthTexture format");me(C)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,M,0,P):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,M,0)}})(T.__webglFramebuffer,A)}else if(U){T.__webglDepthbuffer=[];for(let N=0;N<6;N++)if(t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[N]),T.__webglDepthbuffer[N]===void 0)T.__webglDepthbuffer[N]=i.createRenderbuffer(),ee(T.__webglDepthbuffer[N],A,!1);else{let C=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,L=T.__webglDepthbuffer[N];i.bindRenderbuffer(i.RENDERBUFFER,L),i.framebufferRenderbuffer(i.FRAMEBUFFER,C,i.RENDERBUFFER,L)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),ee(T.__webglDepthbuffer,A,!1);else{let N=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,C=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,C),i.framebufferRenderbuffer(i.FRAMEBUFFER,N,i.RENDERBUFFER,C)}t.bindFramebuffer(i.FRAMEBUFFER,null)}let Me=[],te=[];function oe(A){return Math.min(r.maxSamples,A.samples)}function me(A){let T=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function ve(A,T){let U=A.colorSpace,N=A.format,C=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||U!==It&&U!==Mr&&(Ge.getTransfer(U)===Ke?N===xn&&C===di||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),T}function ue(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=function(){let A=O;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),O+=1,A},this.resetTextureUnits=function(){O=0},this.setTexture2D=H,this.setTexture2DArray=function(A,T){let U=n.get(A);A.version>0&&U.__version!==A.version?$(U,A,T):t.bindTexture(i.TEXTURE_2D_ARRAY,U.__webglTexture,i.TEXTURE0+T)},this.setTexture3D=function(A,T){let U=n.get(A);A.version>0&&U.__version!==A.version?$(U,A,T):t.bindTexture(i.TEXTURE_3D,U.__webglTexture,i.TEXTURE0+T)},this.setTextureCube=function(A,T){let U=n.get(A);A.version>0&&U.__version!==A.version?(function(N,C,L){if(C.image.length!==6)return;let M=Y(N,C),P=C.source;t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+L);let B=n.get(P);if(P.version!==B.__version||M===!0){t.activeTexture(i.TEXTURE0+L);let Q=Ge.getPrimaries(Ge.workingColorSpace),k=C.colorSpace===Mr?null:Ge.getPrimaries(C.colorSpace),K=C.colorSpace===Mr||Q===k?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,C.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,C.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);let Z=C.isCompressedTexture||C.image[0].isCompressedTexture,ie=C.image[0]&&C.image[0].isDataTexture,pe=[];for(let _e=0;_e<6;_e++)pe[_e]=Z||ie?ie?C.image[_e].image:C.image[_e]:_(C.image[_e],!0,r.maxCubemapSize),pe[_e]=ve(C,pe[_e]);let de=pe[0],Se=s.convert(C.format,C.colorSpace),Ie=s.convert(C.type),je=y(C.internalFormat,Se,Ie,C.colorSpace),Be=C.isVideoTexture!==!0,we=B.__version===void 0||M===!0,Ye=P.dataReady,tt,ct=R(C,de);if(z(i.TEXTURE_CUBE_MAP,C),Z){Be&&we&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ct,je,de.width,de.height);for(let _e=0;_e<6;_e++){tt=pe[_e].mipmaps;for(let He=0;He<tt.length;He++){let Je=tt[He];C.format!==xn?Se!==null?Be?Ye&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,He,0,0,Je.width,Je.height,Se,Je.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,He,je,Je.width,Je.height,0,Je.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?Ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,He,0,0,Je.width,Je.height,Se,Ie,Je.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,He,je,Je.width,Je.height,0,Se,Ie,Je.data)}}}else{if(tt=C.mipmaps,Be&&we){tt.length>0&&ct++;let _e=ue(pe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ct,je,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(ie){Be?Ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,pe[_e].width,pe[_e].height,Se,Ie,pe[_e].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,je,pe[_e].width,pe[_e].height,0,Se,Ie,pe[_e].data);for(let He=0;He<tt.length;He++){let Je=tt[He].image[_e].image;Be?Ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,He+1,0,0,Je.width,Je.height,Se,Ie,Je.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,He+1,je,Je.width,Je.height,0,Se,Ie,Je.data)}}else{Be?Ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Se,Ie,pe[_e]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,je,Se,Ie,pe[_e]);for(let He=0;He<tt.length;He++){let Je=tt[He];Be?Ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,He+1,0,0,Se,Ie,Je.image[_e]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,He+1,je,Se,Ie,Je.image[_e])}}}f(C)&&g(i.TEXTURE_CUBE_MAP),B.__version=P.version,C.onUpdate&&C.onUpdate(C)}N.__version=C.version})(U,A,T):t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+T)},this.rebindTextures=function(A,T,U){let N=n.get(A);T!==void 0&&ne(N.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),U!==void 0&&ge(A)},this.setupRenderTarget=function(A){let T=A.texture,U=n.get(A),N=n.get(T);A.addEventListener("dispose",I);let C=A.textures,L=A.isWebGLCubeRenderTarget===!0,M=C.length>1;if(M||(N.__webglTexture===void 0&&(N.__webglTexture=i.createTexture()),N.__version=T.version,a.memory.textures++),L){U.__webglFramebuffer=[];for(let P=0;P<6;P++)if(T.mipmaps&&T.mipmaps.length>0){U.__webglFramebuffer[P]=[];for(let B=0;B<T.mipmaps.length;B++)U.__webglFramebuffer[P][B]=i.createFramebuffer()}else U.__webglFramebuffer[P]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){U.__webglFramebuffer=[];for(let P=0;P<T.mipmaps.length;P++)U.__webglFramebuffer[P]=i.createFramebuffer()}else U.__webglFramebuffer=i.createFramebuffer();if(M)for(let P=0,B=C.length;P<B;P++){let Q=n.get(C[P]);Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&me(A)===!1){U.__webglMultisampledFramebuffer=i.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let P=0;P<C.length;P++){let B=C[P];U.__webglColorRenderbuffer[P]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,U.__webglColorRenderbuffer[P]);let Q=s.convert(B.format,B.colorSpace),k=s.convert(B.type),K=y(B.internalFormat,Q,k,B.colorSpace,A.isXRRenderTarget===!0),Z=oe(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Z,K,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+P,i.RENDERBUFFER,U.__webglColorRenderbuffer[P])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(U.__webglDepthRenderbuffer=i.createRenderbuffer(),ee(U.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(L){t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture),z(i.TEXTURE_CUBE_MAP,T);for(let P=0;P<6;P++)if(T.mipmaps&&T.mipmaps.length>0)for(let B=0;B<T.mipmaps.length;B++)ne(U.__webglFramebuffer[P][B],A,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+P,B);else ne(U.__webglFramebuffer[P],A,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+P,0);f(T)&&g(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(M){for(let P=0,B=C.length;P<B;P++){let Q=C[P],k=n.get(Q);t.bindTexture(i.TEXTURE_2D,k.__webglTexture),z(i.TEXTURE_2D,Q),ne(U.__webglFramebuffer,A,Q,i.COLOR_ATTACHMENT0+P,i.TEXTURE_2D,0),f(Q)&&g(i.TEXTURE_2D)}t.unbindTexture()}else{let P=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(P=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(P,N.__webglTexture),z(P,T),T.mipmaps&&T.mipmaps.length>0)for(let B=0;B<T.mipmaps.length;B++)ne(U.__webglFramebuffer[B],A,T,i.COLOR_ATTACHMENT0,P,B);else ne(U.__webglFramebuffer,A,T,i.COLOR_ATTACHMENT0,P,0);f(T)&&g(P),t.unbindTexture()}A.depthBuffer&&ge(A)},this.updateRenderTargetMipmap=function(A){let T=A.textures;for(let U=0,N=T.length;U<N;U++){let C=T[U];if(f(C)){let L=v(A),M=n.get(C).__webglTexture;t.bindTexture(L,M),g(L),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(A){if(A.samples>0){if(me(A)===!1){let T=A.textures,U=A.width,N=A.height,C=i.COLOR_BUFFER_BIT,L=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,M=n.get(A),P=T.length>1;if(P)for(let B=0;B<T.length;B++)t.bindFramebuffer(i.FRAMEBUFFER,M.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+B,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+B,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,M.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,M.__webglFramebuffer);for(let B=0;B<T.length;B++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(C|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(C|=i.STENCIL_BUFFER_BIT)),P){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,M.__webglColorRenderbuffer[B]);let Q=n.get(T[B]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Q,0)}i.blitFramebuffer(0,0,U,N,0,0,U,N,C,i.NEAREST),l===!0&&(Me.length=0,te.length=0,Me.push(i.COLOR_ATTACHMENT0+B),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Me.push(L),te.push(L),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,te)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Me))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),P)for(let B=0;B<T.length;B++){t.bindFramebuffer(i.FRAMEBUFFER,M.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+B,i.RENDERBUFFER,M.__webglColorRenderbuffer[B]);let Q=n.get(T[B]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+B,i.TEXTURE_2D,Q,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,M.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let T=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}},this.setupDepthRenderbuffer=ge,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=me}function K0(i,e){return{convert:function(t,n=""){let r,s=Ge.getTransfer(n);if(t===di)return i.UNSIGNED_BYTE;if(t===Fh)return i.UNSIGNED_SHORT_4_4_4_4;if(t===zh)return i.UNSIGNED_SHORT_5_5_5_1;if(t===jp)return i.UNSIGNED_INT_5_9_9_9_REV;if(t===Wp)return i.BYTE;if(t===Xp)return i.SHORT;if(t===Ts)return i.UNSIGNED_SHORT;if(t===Bh)return i.INT;if(t===zi)return i.UNSIGNED_INT;if(t===yn)return i.FLOAT;if(t===Vs)return i.HALF_FLOAT;if(t===qp)return i.ALPHA;if(t===Yp)return i.RGB;if(t===xn)return i.RGBA;if(t===$p)return i.LUMINANCE;if(t===Zp)return i.LUMINANCE_ALPHA;if(t===Es)return i.DEPTH_COMPONENT;if(t===Pr)return i.DEPTH_STENCIL;if(t===Hh)return i.RED;if(t===Vh)return i.RED_INTEGER;if(t===Kp)return i.RG;if(t===Gh)return i.RG_INTEGER;if(t===Wh)return i.RGBA_INTEGER;if(t===Ya||t===$a||t===Za||t===Ka)if(s===Ke){if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r===null)return null;if(t===Ya)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(t===$a)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(t===Za)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(t===Ka)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(r=e.get("WEBGL_compressed_texture_s3tc"),r===null)return null;if(t===Ya)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(t===$a)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(t===Za)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(t===Ka)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(t===dc||t===pc||t===fc||t===mc){if(r=e.get("WEBGL_compressed_texture_pvrtc"),r===null)return null;if(t===dc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(t===pc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(t===fc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(t===mc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(t===gc||t===vc||t===_c){if(r=e.get("WEBGL_compressed_texture_etc"),r===null)return null;if(t===gc||t===vc)return s===Ke?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(t===_c)return s===Ke?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}if(t===yc||t===xc||t===bc||t===Mc||t===Sc||t===wc||t===Tc||t===Ec||t===Ac||t===Rc||t===Cc||t===Ic||t===Pc||t===Lc){if(r=e.get("WEBGL_compressed_texture_astc"),r===null)return null;if(t===yc)return s===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(t===xc)return s===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(t===bc)return s===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(t===Mc)return s===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(t===Sc)return s===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(t===wc)return s===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(t===Tc)return s===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(t===Ec)return s===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(t===Ac)return s===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(t===Rc)return s===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(t===Cc)return s===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(t===Ic)return s===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(t===Pc)return s===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(t===Lc)return s===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}if(t===Ja||t===Dc||t===Nc){if(r=e.get("EXT_texture_compression_bptc"),r===null)return null;if(t===Ja)return s===Ke?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(t===Dc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(t===Nc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(t===Jp||t===Uc||t===Oc||t===kc){if(r=e.get("EXT_texture_compression_rgtc"),r===null)return null;if(t===Ja)return r.COMPRESSED_RED_RGTC1_EXT;if(t===Uc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(t===Oc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(t===kc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return t===Ir?i.UNSIGNED_INT_24_8:i[t]!==void 0?i[t]:null}}}var Qc=class extends Et{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},kt=class extends lt{constructor(){super(),this.isGroup=!0,this.type="Group"}},J0={type:"move"},bs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new kt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new kt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new kt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let _ of e.hand.values()){let f=t.getJointPose(_,n),g=this._getHandJoint(c,_);f!==null&&(g.matrix.fromArray(f.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=f.radius),g.visible=f!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,m=.005;c.inputState.pinching&&d>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(J0)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new kt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},eh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let r=new Mt;e.properties.get(r).__webglTexture=t.texture,t.depthNear==n.depthNear&&t.depthFar==n.depthFar||(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Rn({vertexShader:`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fragmentShader:`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Qe(new Hi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},th=class extends pi{constructor(e,t){super();let n=this,r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,m=null,_=new eh,f=t.getContextAttributes(),g=null,v=null,y=[],b=[],R=new ae,E=null,I=new Et;I.viewport=new $e;let D=new Et;D.viewport=new $e;let O=[I,D],H=new Qc,W=null,V=null;function q(te){let oe=b.indexOf(te.inputSource);if(oe===-1)return;let me=y[oe];me!==void 0&&(me.update(te.inputSource,te.frame,c||a),me.dispatchEvent({type:te.type,data:te.inputSource}))}function z(){r.removeEventListener("select",q),r.removeEventListener("selectstart",q),r.removeEventListener("selectend",q),r.removeEventListener("squeeze",q),r.removeEventListener("squeezestart",q),r.removeEventListener("squeezeend",q),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",Y);for(let te=0;te<y.length;te++){let oe=b[te];oe!==null&&(b[te]=null,y[te].disconnect(oe))}W=null,V=null,_.reset(),e.setRenderTarget(g),p=null,d=null,u=null,r=null,v=null,Me.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}function Y(te){for(let oe=0;oe<te.removed.length;oe++){let me=te.removed[oe],ve=b.indexOf(me);ve>=0&&(b[ve]=null,y[ve].disconnect(me))}for(let oe=0;oe<te.added.length;oe++){let me=te.added[oe],ve=b.indexOf(me);if(ve===-1){for(let A=0;A<y.length;A++){if(A>=b.length){b.push(me),ve=A;break}if(b[A]===null){b[A]=me,ve=A;break}}if(ve===-1)break}let ue=y[ve];ue&&ue.connect(me)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let oe=y[te];return oe===void 0&&(oe=new bs,y[te]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(te){let oe=y[te];return oe===void 0&&(oe=new bs,y[te]=oe),oe.getGripSpace()},this.getHand=function(te){let oe=y[te];return oe===void 0&&(oe=new bs,y[te]=oe),oe.getHandSpace()},this.setFramebufferScaleFactor=function(te){s=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){o=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(te){if(r=te,r!==null){if(g=e.getRenderTarget(),r.addEventListener("select",q),r.addEventListener("selectstart",q),r.addEventListener("selectend",q),r.addEventListener("squeeze",q),r.addEventListener("squeezestart",q),r.addEventListener("squeezeend",q),r.addEventListener("end",z),r.addEventListener("inputsourceschange",Y),f.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(R),r.renderState.layers===void 0){let oe={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,oe),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new Wn(p.framebufferWidth,p.framebufferHeight,{format:xn,type:di,colorSpace:e.outputColorSpace,stencilBuffer:f.stencil})}else{let oe=null,me=null,ve=null;f.depth&&(ve=f.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=f.stencil?Pr:Es,me=f.stencil?Ir:zi);let ue={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:s};u=new XRWebGLBinding(r,t),d=u.createProjectionLayer(ue),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new Wn(d.textureWidth,d.textureHeight,{format:xn,type:di,depthTexture:new oo(d.textureWidth,d.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:f.stencil,colorSpace:e.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Me.setContext(r),Me.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};let $=new w,ne=new w;function ee(te,oe){oe===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(oe.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(r===null)return;let oe=te.near,me=te.far;_.texture!==null&&(_.depthNear>0&&(oe=_.depthNear),_.depthFar>0&&(me=_.depthFar)),H.near=D.near=I.near=oe,H.far=D.far=I.far=me,W===H.near&&V===H.far||(r.updateRenderState({depthNear:H.near,depthFar:H.far}),W=H.near,V=H.far),I.layers.mask=2|te.layers.mask,D.layers.mask=4|te.layers.mask,H.layers.mask=I.layers.mask|D.layers.mask;let ve=te.parent,ue=H.cameras;ee(H,ve);for(let A=0;A<ue.length;A++)ee(ue[A],ve);ue.length===2?(function(A,T,U){$.setFromMatrixPosition(T.matrixWorld),ne.setFromMatrixPosition(U.matrixWorld);let N=$.distanceTo(ne),C=T.projectionMatrix.elements,L=U.projectionMatrix.elements,M=C[14]/(C[10]-1),P=C[14]/(C[10]+1),B=(C[9]+1)/C[5],Q=(C[9]-1)/C[5],k=(C[8]-1)/C[0],K=(L[8]+1)/L[0],Z=M*k,ie=M*K,pe=N/(-k+K),de=pe*-k;if(T.matrixWorld.decompose(A.position,A.quaternion,A.scale),A.translateX(de),A.translateZ(pe),A.matrixWorld.compose(A.position,A.quaternion,A.scale),A.matrixWorldInverse.copy(A.matrixWorld).invert(),C[10]===-1)A.projectionMatrix.copy(T.projectionMatrix),A.projectionMatrixInverse.copy(T.projectionMatrixInverse);else{let Se=M+pe,Ie=P+pe,je=Z-de,Be=ie+(N-de),we=B*P/Ie*Se,Ye=Q*P/Ie*Se;A.projectionMatrix.makePerspective(je,Be,we,Ye,Se,Ie),A.projectionMatrixInverse.copy(A.projectionMatrix).invert()}})(H,I,D):H.projectionMatrix.copy(I.projectionMatrix),(function(A,T,U){U===null?A.matrix.copy(T.matrixWorld):(A.matrix.copy(U.matrixWorld),A.matrix.invert(),A.matrix.multiply(T.matrixWorld)),A.matrix.decompose(A.position,A.quaternion,A.scale),A.updateMatrixWorld(!0),A.projectionMatrix.copy(T.projectionMatrix),A.projectionMatrixInverse.copy(T.projectionMatrixInverse),A.isPerspectiveCamera&&(A.fov=2*Ur*Math.atan(1/A.projectionMatrix.elements[5]),A.zoom=1)})(te,H,ve)},this.getCamera=function(){return H},this.getFoveation=function(){if(d!==null||p!==null)return l},this.setFoveation=function(te){l=te,d!==null&&(d.fixedFoveation=te),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=te)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(H)};let ge=null,Me=new sf;Me.setAnimationLoop((function(te,oe){if(h=oe.getViewerPose(c||a),m=oe,h!==null){let me=h.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let ve=!1;me.length!==H.cameras.length&&(H.cameras.length=0,ve=!0);for(let A=0;A<me.length;A++){let T=me[A],U=null;if(p!==null)U=p.getViewport(T);else{let C=u.getViewSubImage(d,T);U=C.viewport,A===0&&(e.setRenderTargetTextures(v,C.colorTexture,d.ignoreDepthValues?void 0:C.depthStencilTexture),e.setRenderTarget(v))}let N=O[A];N===void 0&&(N=new Et,N.layers.enable(A),N.viewport=new $e,O[A]=N),N.matrix.fromArray(T.transform.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale),N.projectionMatrix.fromArray(T.projectionMatrix),N.projectionMatrixInverse.copy(N.projectionMatrix).invert(),N.viewport.set(U.x,U.y,U.width,U.height),A===0&&(H.matrix.copy(N.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),ve===!0&&H.cameras.push(N)}let ue=r.enabledFeatures;if(ue&&ue.includes("depth-sensing")){let A=u.getDepthInformation(me[0]);A&&A.isValid&&A.texture&&_.init(e,A,r.renderState)}}for(let me=0;me<y.length;me++){let ve=b[me],ue=y[me];ve!==null&&ue!==void 0&&ue.update(ve,oe,c||a)}ge&&ge(te,oe),oe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:oe}),m=null})),this.setAnimationLoop=function(te){ge=te},this.dispose=function(){}}},Ui=new En,Q0=new Ee;function ev(i,e){function t(r,s){r.matrixAutoUpdate===!0&&r.updateMatrix(),s.value.copy(r.matrix)}function n(r,s){r.opacity.value=s.opacity,s.color&&r.diffuse.value.copy(s.color),s.emissive&&r.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(r.map.value=s.map,t(s.map,r.mapTransform)),s.alphaMap&&(r.alphaMap.value=s.alphaMap,t(s.alphaMap,r.alphaMapTransform)),s.bumpMap&&(r.bumpMap.value=s.bumpMap,t(s.bumpMap,r.bumpMapTransform),r.bumpScale.value=s.bumpScale,s.side===1&&(r.bumpScale.value*=-1)),s.normalMap&&(r.normalMap.value=s.normalMap,t(s.normalMap,r.normalMapTransform),r.normalScale.value.copy(s.normalScale),s.side===1&&r.normalScale.value.negate()),s.displacementMap&&(r.displacementMap.value=s.displacementMap,t(s.displacementMap,r.displacementMapTransform),r.displacementScale.value=s.displacementScale,r.displacementBias.value=s.displacementBias),s.emissiveMap&&(r.emissiveMap.value=s.emissiveMap,t(s.emissiveMap,r.emissiveMapTransform)),s.specularMap&&(r.specularMap.value=s.specularMap,t(s.specularMap,r.specularMapTransform)),s.alphaTest>0&&(r.alphaTest.value=s.alphaTest);let a=e.get(s),o=a.envMap,l=a.envMapRotation;o&&(r.envMap.value=o,Ui.copy(l),Ui.x*=-1,Ui.y*=-1,Ui.z*=-1,o.isCubeTexture&&o.isRenderTargetTexture===!1&&(Ui.y*=-1,Ui.z*=-1),r.envMapRotation.value.setFromMatrix4(Q0.makeRotationFromEuler(Ui)),r.flipEnvMap.value=o.isCubeTexture&&o.isRenderTargetTexture===!1?-1:1,r.reflectivity.value=s.reflectivity,r.ior.value=s.ior,r.refractionRatio.value=s.refractionRatio),s.lightMap&&(r.lightMap.value=s.lightMap,r.lightMapIntensity.value=s.lightMapIntensity,t(s.lightMap,r.lightMapTransform)),s.aoMap&&(r.aoMap.value=s.aoMap,r.aoMapIntensity.value=s.aoMapIntensity,t(s.aoMap,r.aoMapTransform))}return{refreshFogUniforms:function(r,s){s.color.getRGB(r.fogColor.value,rf(i)),s.isFog?(r.fogNear.value=s.near,r.fogFar.value=s.far):s.isFogExp2&&(r.fogDensity.value=s.density)},refreshMaterialUniforms:function(r,s,a,o,l){s.isMeshBasicMaterial||s.isMeshLambertMaterial?n(r,s):s.isMeshToonMaterial?(n(r,s),(function(c,h){h.gradientMap&&(c.gradientMap.value=h.gradientMap)})(r,s)):s.isMeshPhongMaterial?(n(r,s),(function(c,h){c.specular.value.copy(h.specular),c.shininess.value=Math.max(h.shininess,1e-4)})(r,s)):s.isMeshStandardMaterial?(n(r,s),(function(c,h){c.metalness.value=h.metalness,h.metalnessMap&&(c.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,c.metalnessMapTransform)),c.roughness.value=h.roughness,h.roughnessMap&&(c.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,c.roughnessMapTransform)),h.envMap&&(c.envMapIntensity.value=h.envMapIntensity)})(r,s),s.isMeshPhysicalMaterial&&(function(c,h,u){c.ior.value=h.ior,h.sheen>0&&(c.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),c.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(c.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,c.sheenColorMapTransform)),h.sheenRoughnessMap&&(c.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,c.sheenRoughnessMapTransform))),h.clearcoat>0&&(c.clearcoat.value=h.clearcoat,c.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(c.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,c.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(c.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===1&&c.clearcoatNormalScale.value.negate())),h.dispersion>0&&(c.dispersion.value=h.dispersion),h.iridescence>0&&(c.iridescence.value=h.iridescence,c.iridescenceIOR.value=h.iridescenceIOR,c.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],c.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(c.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,c.iridescenceMapTransform)),h.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),h.transmission>0&&(c.transmission.value=h.transmission,c.transmissionSamplerMap.value=u.texture,c.transmissionSamplerSize.value.set(u.width,u.height),h.transmissionMap&&(c.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,c.transmissionMapTransform)),c.thickness.value=h.thickness,h.thicknessMap&&(c.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=h.attenuationDistance,c.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(c.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(c.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=h.specularIntensity,c.specularColor.value.copy(h.specularColor),h.specularColorMap&&(c.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,c.specularColorMapTransform)),h.specularIntensityMap&&(c.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,c.specularIntensityMapTransform))})(r,s,l)):s.isMeshMatcapMaterial?(n(r,s),(function(c,h){h.matcap&&(c.matcap.value=h.matcap)})(r,s)):s.isMeshDepthMaterial?n(r,s):s.isMeshDistanceMaterial?(n(r,s),(function(c,h){let u=e.get(h).light;c.referencePosition.value.setFromMatrixPosition(u.matrixWorld),c.nearDistance.value=u.shadow.camera.near,c.farDistance.value=u.shadow.camera.far})(r,s)):s.isMeshNormalMaterial?n(r,s):s.isLineBasicMaterial?((function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform))})(r,s),s.isLineDashedMaterial&&(function(c,h){c.dashSize.value=h.dashSize,c.totalSize.value=h.dashSize+h.gapSize,c.scale.value=h.scale})(r,s)):s.isPointsMaterial?(function(c,h,u,d){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.size.value=h.size*u,c.scale.value=.5*d,h.map&&(c.map.value=h.map,t(h.map,c.uvTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)})(r,s,a,o):s.isSpriteMaterial?(function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.rotation.value=h.rotation,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)})(r,s):s.isShadowMaterial?(r.color.value.copy(s.color),r.opacity.value=s.opacity):s.isShaderMaterial&&(s.uniformsNeedUpdate=!1)}}}function tv(i,e,t,n){let r={},s={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(u,d,p,m){let _=u.value,f=d+"_"+p;if(m[f]===void 0)return m[f]=typeof _=="number"||typeof _=="boolean"?_:_.clone(),!0;{let g=m[f];if(typeof _=="number"||typeof _=="boolean"){if(g!==_)return m[f]=_,!0}else if(g.equals(_)===!1)return g.copy(_),!0}return!1}function c(u){let d={boundary:0,storage:0};return typeof u=="number"||typeof u=="boolean"?(d.boundary=4,d.storage=4):u.isVector2?(d.boundary=8,d.storage=8):u.isVector3||u.isColor?(d.boundary=16,d.storage=12):u.isVector4?(d.boundary=16,d.storage=16):u.isMatrix3?(d.boundary=48,d.storage=48):u.isMatrix4?(d.boundary=64,d.storage=64):u.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",u),d}function h(u){let d=u.target;d.removeEventListener("dispose",h);let p=a.indexOf(d.__bindingPointIndex);a.splice(p,1),i.deleteBuffer(r[d.id]),delete r[d.id],delete s[d.id]}return{bind:function(u,d){let p=d.program;n.uniformBlockBinding(u,p)},update:function(u,d){let p=r[u.id];p===void 0&&((function(f){let g=f.uniforms,v=0,y=16;for(let R=0,E=g.length;R<E;R++){let I=Array.isArray(g[R])?g[R]:[g[R]];for(let D=0,O=I.length;D<O;D++){let H=I[D],W=Array.isArray(H.value)?H.value:[H.value];for(let V=0,q=W.length;V<q;V++){let z=c(W[V]),Y=v%y,$=Y%z.boundary,ne=Y+$;v+=$,ne!==0&&y-ne<z.storage&&(v+=y-ne),H.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=v,v+=z.storage}}}let b=v%y;b>0&&(v+=y-b),f.__size=v,f.__cache={}})(u),p=(function(f){let g=(function(){for(let R=0;R<o;R++)if(a.indexOf(R)===-1)return a.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0})();f.__bindingPointIndex=g;let v=i.createBuffer(),y=f.__size,b=f.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,y,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,g,v),v})(u),r[u.id]=p,u.addEventListener("dispose",h));let m=d.program;n.updateUBOMapping(u,m);let _=e.render.frame;s[u.id]!==_&&((function(f){let g=r[f.id],v=f.uniforms,y=f.__cache;i.bindBuffer(i.UNIFORM_BUFFER,g);for(let b=0,R=v.length;b<R;b++){let E=Array.isArray(v[b])?v[b]:[v[b]];for(let I=0,D=E.length;I<D;I++){let O=E[I];if(l(O,b,I,y)===!0){let H=O.__offset,W=Array.isArray(O.value)?O.value:[O.value],V=0;for(let q=0;q<W.length;q++){let z=W[q],Y=c(z);typeof z=="number"||typeof z=="boolean"?(O.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,H+V,O.__data)):z.isMatrix3?(O.__data[0]=z.elements[0],O.__data[1]=z.elements[1],O.__data[2]=z.elements[2],O.__data[3]=0,O.__data[4]=z.elements[3],O.__data[5]=z.elements[4],O.__data[6]=z.elements[5],O.__data[7]=0,O.__data[8]=z.elements[6],O.__data[9]=z.elements[7],O.__data[10]=z.elements[8],O.__data[11]=0):(z.toArray(O.__data,V),V+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,O.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)})(u),s[u.id]=_)},dispose:function(){for(let u in r)i.deleteBuffer(r[u]);a=[],r={},s={}}}}var lo=class{constructor(e={}){let{canvas:t=ug(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e,p;if(this.isWebGLRenderer=!0,n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let m=new Uint32Array(4),_=new Int32Array(4),f=null,g=null,v=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ot,this.toneMapping=0,this.toneMappingExposure=1;let b=this,R=!1,E=0,I=0,D=null,O=-1,H=null,W=new $e,V=new $e,q=null,z=new Te(0),Y=0,$=t.width,ne=t.height,ee=1,ge=null,Me=null,te=new $e(0,0,$,ne),oe=new $e(0,0,$,ne),me=!1,ve=new Br,ue=!1,A=!1,T=new Ee,U=new Ee,N=new w,C=new $e,L={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},M=!1;function P(){return D===null?ee:1}let B,Q,k,K,Z,ie,pe,de,Se,Ie,je,Be,we,Ye,tt,ct,_e,He,Je,Qi,la,cn,Sn,Ti,F=n;function ts(S,G){return t.getContext(S,G)}try{let S={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",Qu,!1),t.addEventListener("webglcontextrestored",ed,!1),t.addEventListener("webglcontextcreationerror",td,!1),F===null){let G="webgl2";if(F=ts(G,S),F===null)throw ts(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}function Ju(){B=new Og(F),B.init(),cn=new K0(F,B),Q=new Lg(F,B,e,cn),k=new $0(F,B),Q.reverseDepthBuffer&&d&&k.buffers.depth.setReversed(!0),K=new Fg(F),Z=new F0,ie=new Z0(F,B,k,Z,Q,cn,K),pe=new Ng(b),de=new Ug(b),Se=new Ag(F),Sn=new Ig(F,Se),Ie=new kg(F,Se,K,Sn),je=new Hg(F,Ie,Se,K),Je=new zg(F,Q,ie),ct=new Dg(Z),Be=new B0(b,pe,de,B,Q,Sn,ct),we=new ev(b,Z),Ye=new H0,tt=new j0(B),He=new Cg(b,pe,de,k,je,p,l),_e=new q0(b,je,Q),Ti=new tv(F,K,Q,k),Qi=new Pg(F,B,K),la=new Bg(F,B,K),K.programs=Be.programs,b.capabilities=Q,b.extensions=B,b.properties=Z,b.renderLists=Ye,b.shadowMap=_e,b.state=k,b.info=K}Ju();let xt=new th(b,F);function Qu(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function ed(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let S=K.autoReset,G=_e.enabled,j=_e.autoUpdate,J=_e.needsUpdate,X=_e.type;Ju(),K.autoReset=S,_e.enabled=G,_e.autoUpdate=j,_e.needsUpdate=J,_e.type=X}function td(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function nd(S){let G=S.target;G.removeEventListener("dispose",nd),(function(j){(function(J){let X=Z.get(J).programs;X!==void 0&&(X.forEach((function(le){Be.releaseProgram(le)})),J.isShaderMaterial&&Be.releaseShaderCache(J))})(j),Z.remove(j)})(G)}function id(S,G,j){S.transparent===!0&&S.side===2&&S.forceSinglePass===!1?(S.side=1,S.needsUpdate=!0,ha(S,G,j),S.side=0,S.needsUpdate=!0,ha(S,G,j),S.side=2):ha(S,G,j)}this.xr=xt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let S=B.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=B.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(S){S!==void 0&&(ee=S,this.setSize($,ne,!1))},this.getSize=function(S){return S.set($,ne)},this.setSize=function(S,G,j=!0){xt.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):($=S,ne=G,t.width=Math.floor(S*ee),t.height=Math.floor(G*ee),j===!0&&(t.style.width=S+"px",t.style.height=G+"px"),this.setViewport(0,0,S,G))},this.getDrawingBufferSize=function(S){return S.set($*ee,ne*ee).floor()},this.setDrawingBufferSize=function(S,G,j){$=S,ne=G,ee=j,t.width=Math.floor(S*j),t.height=Math.floor(G*j),this.setViewport(0,0,S,G)},this.getCurrentViewport=function(S){return S.copy(W)},this.getViewport=function(S){return S.copy(te)},this.setViewport=function(S,G,j,J){S.isVector4?te.set(S.x,S.y,S.z,S.w):te.set(S,G,j,J),k.viewport(W.copy(te).multiplyScalar(ee).round())},this.getScissor=function(S){return S.copy(oe)},this.setScissor=function(S,G,j,J){S.isVector4?oe.set(S.x,S.y,S.z,S.w):oe.set(S,G,j,J),k.scissor(V.copy(oe).multiplyScalar(ee).round())},this.getScissorTest=function(){return me},this.setScissorTest=function(S){k.setScissorTest(me=S)},this.setOpaqueSort=function(S){ge=S},this.setTransparentSort=function(S){Me=S},this.getClearColor=function(S){return S.copy(He.getClearColor())},this.setClearColor=function(){He.setClearColor.apply(He,arguments)},this.getClearAlpha=function(){return He.getClearAlpha()},this.setClearAlpha=function(){He.setClearAlpha.apply(He,arguments)},this.clear=function(S=!0,G=!0,j=!0){let J=0;if(S){let X=!1;if(D!==null){let le=D.texture.format;X=le===Wh||le===Gh||le===Vh}if(X){let le=D.texture.type,fe=le===di||le===zi||le===Ts||le===Ir||le===Fh||le===zh,xe=He.getClearColor(),Ae=He.getClearAlpha(),Le=xe.r,Ue=xe.g,Re=xe.b;fe?(m[0]=Le,m[1]=Ue,m[2]=Re,m[3]=Ae,F.clearBufferuiv(F.COLOR,0,m)):(_[0]=Le,_[1]=Ue,_[2]=Re,_[3]=Ae,F.clearBufferiv(F.COLOR,0,_))}else J|=F.COLOR_BUFFER_BIT}G&&(J|=F.DEPTH_BUFFER_BIT),j&&(J|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Qu,!1),t.removeEventListener("webglcontextrestored",ed,!1),t.removeEventListener("webglcontextcreationerror",td,!1),Ye.dispose(),tt.dispose(),Z.dispose(),pe.dispose(),de.dispose(),je.dispose(),Sn.dispose(),Ti.dispose(),Be.dispose(),xt.dispose(),xt.removeEventListener("sessionstart",rd),xt.removeEventListener("sessionend",sd),Ei.stop()},this.renderBufferDirect=function(S,G,j,J,X,le){G===null&&(G=L);let fe=X.isMesh&&X.matrixWorld.determinant()<0,xe=(function(We,Lt,Tt,ke,Pe){Lt.isScene!==!0&&(Lt=L),ie.resetTextureUnits();let hn=Lt.fog,vl=ke.isMeshStandardMaterial?Lt.environment:null,ns=D===null?b.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:It,er=(ke.isMeshStandardMaterial?de:pe).get(ke.envMap||vl),_l=ke.vertexColors===!0&&!!Tt.attributes.color&&Tt.attributes.color.itemSize===4,yl=!!Tt.attributes.tangent&&(!!ke.normalMap||ke.anisotropy>0),xl=!!Tt.morphAttributes.position,Qn=!!Tt.morphAttributes.normal,Cm=!!Tt.morphAttributes.color,ud=0;ke.toneMapped&&(D!==null&&D.isXRRenderTarget!==!0||(ud=b.toneMapping));let dd=Tt.morphAttributes.position||Tt.morphAttributes.normal||Tt.morphAttributes.color,Im=dd!==void 0?dd.length:0,Ve=Z.get(ke),Pm=g.state.lights;if(ue===!0&&(A===!0||We!==H)){let Qt=We===H&&ke.id===O;ct.setState(ke,We,Qt)}let un=!1;ke.version===Ve.__version?Ve.needsLights&&Ve.lightsStateVersion!==Pm.state.version||Ve.outputColorSpace!==ns||Pe.isBatchedMesh&&Ve.batching===!1?un=!0:Pe.isBatchedMesh||Ve.batching!==!0?Pe.isBatchedMesh&&Ve.batchingColor===!0&&Pe.colorTexture===null||Pe.isBatchedMesh&&Ve.batchingColor===!1&&Pe.colorTexture!==null||Pe.isInstancedMesh&&Ve.instancing===!1?un=!0:Pe.isInstancedMesh||Ve.instancing!==!0?Pe.isSkinnedMesh&&Ve.skinning===!1?un=!0:Pe.isSkinnedMesh||Ve.skinning!==!0?Pe.isInstancedMesh&&Ve.instancingColor===!0&&Pe.instanceColor===null||Pe.isInstancedMesh&&Ve.instancingColor===!1&&Pe.instanceColor!==null||Pe.isInstancedMesh&&Ve.instancingMorph===!0&&Pe.morphTexture===null||Pe.isInstancedMesh&&Ve.instancingMorph===!1&&Pe.morphTexture!==null||Ve.envMap!==er||ke.fog===!0&&Ve.fog!==hn?un=!0:Ve.numClippingPlanes===void 0||Ve.numClippingPlanes===ct.numPlanes&&Ve.numIntersection===ct.numIntersection?(Ve.vertexAlphas!==_l||Ve.vertexTangents!==yl||Ve.morphTargets!==xl||Ve.morphNormals!==Qn||Ve.morphColors!==Cm||Ve.toneMapping!==ud||Ve.morphTargetsCount!==Im)&&(un=!0):un=!0:un=!0:un=!0:un=!0:(un=!0,Ve.__version=ke.version);let Ai=Ve.currentProgram;un===!0&&(Ai=ha(ke,Lt,Pe));let pd=!1,is=!1,bl=!1,pt=Ai.getUniforms(),ei=Ve.uniforms;if(k.useProgram(Ai.program)&&(pd=!0,is=!0,bl=!0),ke.id!==O&&(O=ke.id,is=!0),pd||H!==We){k.buffers.depth.getReversed()?(T.copy(We.projectionMatrix),(function(Ri){let at=Ri.elements;at[2]=.5*at[2]+.5*at[3],at[6]=.5*at[6]+.5*at[7],at[10]=.5*at[10]+.5*at[11],at[14]=.5*at[14]+.5*at[15]})(T),(function(Ri){let at=Ri.elements;at[11]===-1?(at[10]=-at[10]-1,at[14]=-at[14]):(at[10]=-at[10],at[14]=1-at[14])})(T),pt.setValue(F,"projectionMatrix",T)):pt.setValue(F,"projectionMatrix",We.projectionMatrix),pt.setValue(F,"viewMatrix",We.matrixWorldInverse);let Qt=pt.map.cameraPosition;Qt!==void 0&&Qt.setValue(F,N.setFromMatrixPosition(We.matrixWorld)),Q.logarithmicDepthBuffer&&pt.setValue(F,"logDepthBufFC",2/(Math.log(We.far+1)/Math.LN2)),(ke.isMeshPhongMaterial||ke.isMeshToonMaterial||ke.isMeshLambertMaterial||ke.isMeshBasicMaterial||ke.isMeshStandardMaterial||ke.isShaderMaterial)&&pt.setValue(F,"isOrthographic",We.isOrthographicCamera===!0),H!==We&&(H=We,is=!0,bl=!0)}if(Pe.isSkinnedMesh){pt.setOptional(F,Pe,"bindMatrix"),pt.setOptional(F,Pe,"bindMatrixInverse");let Qt=Pe.skeleton;Qt&&(Qt.boneTexture===null&&Qt.computeBoneTexture(),pt.setValue(F,"boneTexture",Qt.boneTexture,ie))}Pe.isBatchedMesh&&(pt.setOptional(F,Pe,"batchingTexture"),pt.setValue(F,"batchingTexture",Pe._matricesTexture,ie),pt.setOptional(F,Pe,"batchingIdTexture"),pt.setValue(F,"batchingIdTexture",Pe._indirectTexture,ie),pt.setOptional(F,Pe,"batchingColorTexture"),Pe._colorsTexture!==null&&pt.setValue(F,"batchingColorTexture",Pe._colorsTexture,ie));let Ml=Tt.morphAttributes;Ml.position===void 0&&Ml.normal===void 0&&Ml.color===void 0||Je.update(Pe,Tt,Ai),(is||Ve.receiveShadow!==Pe.receiveShadow)&&(Ve.receiveShadow=Pe.receiveShadow,pt.setValue(F,"receiveShadow",Pe.receiveShadow)),ke.isMeshGouraudMaterial&&ke.envMap!==null&&(ei.envMap.value=er,ei.flipEnvMap.value=er.isCubeTexture&&er.isRenderTargetTexture===!1?-1:1),ke.isMeshStandardMaterial&&ke.envMap===null&&Lt.environment!==null&&(ei.envMapIntensity.value=Lt.environmentIntensity),is&&(pt.setValue(F,"toneMappingExposure",b.toneMappingExposure),Ve.needsLights&&(dn=bl,(wn=ei).ambientLightColor.needsUpdate=dn,wn.lightProbe.needsUpdate=dn,wn.directionalLights.needsUpdate=dn,wn.directionalLightShadows.needsUpdate=dn,wn.pointLights.needsUpdate=dn,wn.pointLightShadows.needsUpdate=dn,wn.spotLights.needsUpdate=dn,wn.spotLightShadows.needsUpdate=dn,wn.rectAreaLights.needsUpdate=dn,wn.hemisphereLights.needsUpdate=dn),hn&&ke.fog===!0&&we.refreshFogUniforms(ei,hn),we.refreshMaterialUniforms(ei,ke,ee,ne,g.state.transmissionRenderTarget[We.id]),Ar.upload(F,cd(Ve),ei,ie));var wn,dn;if(ke.isShaderMaterial&&ke.uniformsNeedUpdate===!0&&(Ar.upload(F,cd(Ve),ei,ie),ke.uniformsNeedUpdate=!1),ke.isSpriteMaterial&&pt.setValue(F,"center",Pe.center),pt.setValue(F,"modelViewMatrix",Pe.modelViewMatrix),pt.setValue(F,"normalMatrix",Pe.normalMatrix),pt.setValue(F,"modelMatrix",Pe.matrixWorld),ke.isShaderMaterial||ke.isRawShaderMaterial){let Qt=ke.uniformsGroups;for(let Ri=0,at=Qt.length;Ri<at;Ri++){let fd=Qt[Ri];Ti.update(fd,Ai),Ti.bind(fd,Ai)}}return Ai})(S,G,j,J,X);k.setMaterial(J,fe);let Ae=j.index,Le=1;if(J.wireframe===!0){if(Ae=Ie.getWireframeAttribute(j),Ae===void 0)return;Le=2}let Ue=j.drawRange,Re=j.attributes.position,Fe=Ue.start*Le,ut=(Ue.start+Ue.count)*Le;le!==null&&(Fe=Math.max(Fe,le.start*Le),ut=Math.min(ut,(le.start+le.count)*Le)),Ae!==null?(Fe=Math.max(Fe,0),ut=Math.min(ut,Ae.count)):Re!=null&&(Fe=Math.max(Fe,0),ut=Math.min(ut,Re.count));let nt=ut-Fe;if(nt<0||nt===1/0)return;let gt;Sn.setup(X,J,xe,j,Ae);let rt=Qi;if(Ae!==null&&(gt=Se.get(Ae),rt=la,rt.setIndex(gt)),X.isMesh)J.wireframe===!0?(k.setLineWidth(J.wireframeLinewidth*P()),rt.setMode(F.LINES)):rt.setMode(F.TRIANGLES);else if(X.isLine){let We=J.linewidth;We===void 0&&(We=1),k.setLineWidth(We*P()),X.isLineSegments?rt.setMode(F.LINES):X.isLineLoop?rt.setMode(F.LINE_LOOP):rt.setMode(F.LINE_STRIP)}else X.isPoints?rt.setMode(F.POINTS):X.isSprite&&rt.setMode(F.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)rt.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(B.get("WEBGL_multi_draw"))rt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let We=X._multiDrawStarts,Lt=X._multiDrawCounts,Tt=X._multiDrawCount,ke=Ae?Se.get(Ae).bytesPerElement:1,Pe=Z.get(J).currentProgram.getUniforms();for(let hn=0;hn<Tt;hn++)Pe.setValue(F,"_gl_DrawID",hn),rt.render(We[hn]/ke,Lt[hn])}else if(X.isInstancedMesh)rt.renderInstances(Fe,nt,X.count);else if(j.isInstancedBufferGeometry){let We=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Lt=Math.min(j.instanceCount,We);rt.renderInstances(Fe,nt,Lt)}else rt.render(Fe,nt)},this.compile=function(S,G,j=null){j===null&&(j=S),g=tt.get(j),g.init(G),y.push(g),j.traverseVisible((function(X){X.isLight&&X.layers.test(G.layers)&&(g.pushLight(X),X.castShadow&&g.pushShadow(X))})),S!==j&&S.traverseVisible((function(X){X.isLight&&X.layers.test(G.layers)&&(g.pushLight(X),X.castShadow&&g.pushShadow(X))})),g.setupLights();let J=new Set;return S.traverse((function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let le=X.material;if(le)if(Array.isArray(le))for(let fe=0;fe<le.length;fe++){let xe=le[fe];id(xe,j,X),J.add(xe)}else id(le,j,X),J.add(le)})),y.pop(),g=null,J},this.compileAsync=function(S,G,j=null){let J=this.compile(S,G,j);return new Promise((X=>{function le(){J.forEach((function(fe){Z.get(fe).currentProgram.isReady()&&J.delete(fe)})),J.size!==0?setTimeout(le,10):X(S)}B.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)}))};let ml=null;function rd(){Ei.stop()}function sd(){Ei.start()}let Ei=new sf;function gl(S,G,j,J){if(S.visible===!1)return;if(S.layers.test(G.layers)){if(S.isGroup)j=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(G);else if(S.isLight)g.pushLight(S),S.castShadow&&g.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||ve.intersectsSprite(S)){J&&C.setFromMatrixPosition(S.matrixWorld).applyMatrix4(U);let le=je.update(S),fe=S.material;fe.visible&&f.push(S,le,fe,j,C.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||ve.intersectsObject(S))){let le=je.update(S),fe=S.material;if(J&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),C.copy(S.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),C.copy(le.boundingSphere.center)),C.applyMatrix4(S.matrixWorld).applyMatrix4(U)),Array.isArray(fe)){let xe=le.groups;for(let Ae=0,Le=xe.length;Ae<Le;Ae++){let Ue=xe[Ae],Re=fe[Ue.materialIndex];Re&&Re.visible&&f.push(S,le,Re,j,C.z,Ue)}}else fe.visible&&f.push(S,le,fe,j,C.z,null)}}let X=S.children;for(let le=0,fe=X.length;le<fe;le++)gl(X[le],G,j,J)}function ad(S,G,j,J){let X=S.opaque,le=S.transmissive,fe=S.transparent;g.setupLightsView(j),ue===!0&&ct.setGlobalState(b.clippingPlanes,j),J&&k.viewport(W.copy(J)),X.length>0&&ca(X,G,j),le.length>0&&ca(le,G,j),fe.length>0&&ca(fe,G,j),k.buffers.depth.setTest(!0),k.buffers.depth.setMask(!0),k.buffers.color.setMask(!0),k.setPolygonOffset(!1)}function od(S,G,j,J){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[J.id]===void 0&&(g.state.transmissionRenderTarget[J.id]=new Wn(1,1,{generateMipmaps:!0,type:B.has("EXT_color_buffer_half_float")||B.has("EXT_color_buffer_float")?Vs:di,minFilter:Vn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ge.workingColorSpace}));let X=g.state.transmissionRenderTarget[J.id],le=J.viewport||W;X.setSize(le.z,le.w);let fe=b.getRenderTarget();b.setRenderTarget(X),b.getClearColor(z),Y=b.getClearAlpha(),Y<1&&b.setClearColor(16777215,.5),b.clear(),M&&He.render(j);let xe=b.toneMapping;b.toneMapping=0;let Ae=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),g.setupLightsView(J),ue===!0&&ct.setGlobalState(b.clippingPlanes,J),ca(S,j,J),ie.updateMultisampleRenderTarget(X),ie.updateRenderTargetMipmap(X),B.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let Ue=0,Re=G.length;Ue<Re;Ue++){let Fe=G[Ue],ut=Fe.object,nt=Fe.geometry,gt=Fe.material,rt=Fe.group;if(gt.side===2&&ut.layers.test(J.layers)){let We=gt.side;gt.side=1,gt.needsUpdate=!0,ld(ut,j,J,nt,gt,rt),gt.side=We,gt.needsUpdate=!0,Le=!0}}Le===!0&&(ie.updateMultisampleRenderTarget(X),ie.updateRenderTargetMipmap(X))}b.setRenderTarget(fe),b.setClearColor(z,Y),Ae!==void 0&&(J.viewport=Ae),b.toneMapping=xe}function ca(S,G,j){let J=G.isScene===!0?G.overrideMaterial:null;for(let X=0,le=S.length;X<le;X++){let fe=S[X],xe=fe.object,Ae=fe.geometry,Le=J===null?fe.material:J,Ue=fe.group;xe.layers.test(j.layers)&&ld(xe,G,j,Ae,Le,Ue)}}function ld(S,G,j,J,X,le){S.onBeforeRender(b,G,j,J,X,le),S.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),X.onBeforeRender(b,G,j,J,S,le),X.transparent===!0&&X.side===2&&X.forceSinglePass===!1?(X.side=1,X.needsUpdate=!0,b.renderBufferDirect(j,G,J,X,S,le),X.side=0,X.needsUpdate=!0,b.renderBufferDirect(j,G,J,X,S,le),X.side=2):b.renderBufferDirect(j,G,J,X,S,le),S.onAfterRender(b,G,j,J,X,le)}function ha(S,G,j){G.isScene!==!0&&(G=L);let J=Z.get(S),X=g.state.lights,le=g.state.shadowsArray,fe=X.state.version,xe=Be.getParameters(S,X.state,le,G,j),Ae=Be.getProgramCacheKey(xe),Le=J.programs;J.environment=S.isMeshStandardMaterial?G.environment:null,J.fog=G.fog,J.envMap=(S.isMeshStandardMaterial?de:pe).get(S.envMap||J.environment),J.envMapRotation=J.environment!==null&&S.envMap===null?G.environmentRotation:S.envMapRotation,Le===void 0&&(S.addEventListener("dispose",nd),Le=new Map,J.programs=Le);let Ue=Le.get(Ae);if(Ue!==void 0){if(J.currentProgram===Ue&&J.lightsStateVersion===fe)return hd(S,xe),Ue}else xe.uniforms=Be.getUniforms(S),S.onBeforeCompile(xe,b),Ue=Be.acquireProgram(xe,Ae),Le.set(Ae,Ue),J.uniforms=xe.uniforms;let Re=J.uniforms;return(S.isShaderMaterial||S.isRawShaderMaterial)&&S.clipping!==!0||(Re.clippingPlanes=ct.uniform),hd(S,xe),J.needsLights=(function(Fe){return Fe.isMeshLambertMaterial||Fe.isMeshToonMaterial||Fe.isMeshPhongMaterial||Fe.isMeshStandardMaterial||Fe.isShadowMaterial||Fe.isShaderMaterial&&Fe.lights===!0})(S),J.lightsStateVersion=fe,J.needsLights&&(Re.ambientLightColor.value=X.state.ambient,Re.lightProbe.value=X.state.probe,Re.directionalLights.value=X.state.directional,Re.directionalLightShadows.value=X.state.directionalShadow,Re.spotLights.value=X.state.spot,Re.spotLightShadows.value=X.state.spotShadow,Re.rectAreaLights.value=X.state.rectArea,Re.ltc_1.value=X.state.rectAreaLTC1,Re.ltc_2.value=X.state.rectAreaLTC2,Re.pointLights.value=X.state.point,Re.pointLightShadows.value=X.state.pointShadow,Re.hemisphereLights.value=X.state.hemi,Re.directionalShadowMap.value=X.state.directionalShadowMap,Re.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Re.spotShadowMap.value=X.state.spotShadowMap,Re.spotLightMatrix.value=X.state.spotLightMatrix,Re.spotLightMap.value=X.state.spotLightMap,Re.pointShadowMap.value=X.state.pointShadowMap,Re.pointShadowMatrix.value=X.state.pointShadowMatrix),J.currentProgram=Ue,J.uniformsList=null,Ue}function cd(S){if(S.uniformsList===null){let G=S.currentProgram.getUniforms();S.uniformsList=Ar.seqWithValue(G.seq,S.uniforms)}return S.uniformsList}function hd(S,G){let j=Z.get(S);j.outputColorSpace=G.outputColorSpace,j.batching=G.batching,j.batchingColor=G.batchingColor,j.instancing=G.instancing,j.instancingColor=G.instancingColor,j.instancingMorph=G.instancingMorph,j.skinning=G.skinning,j.morphTargets=G.morphTargets,j.morphNormals=G.morphNormals,j.morphColors=G.morphColors,j.morphTargetsCount=G.morphTargetsCount,j.numClippingPlanes=G.numClippingPlanes,j.numIntersection=G.numClipIntersection,j.vertexAlphas=G.vertexAlphas,j.vertexTangents=G.vertexTangents,j.toneMapping=G.toneMapping}Ei.setAnimationLoop((function(S){ml&&ml(S)})),typeof self<"u"&&Ei.setContext(self),this.setAnimationLoop=function(S){ml=S,xt.setAnimationLoop(S),S===null?Ei.stop():Ei.start()},xt.addEventListener("sessionstart",rd),xt.addEventListener("sessionend",sd),this.render=function(S,G){if(G!==void 0&&G.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(R===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),xt.enabled===!0&&xt.isPresenting===!0&&(xt.cameraAutoUpdate===!0&&xt.updateCamera(G),G=xt.getCamera()),S.isScene===!0&&S.onBeforeRender(b,S,G,D),g=tt.get(S,y.length),g.init(G),y.push(g),U.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),ve.setFromProjectionMatrix(U),A=this.localClippingEnabled,ue=ct.init(this.clippingPlanes,A),f=Ye.get(S,v.length),f.init(),v.push(f),xt.enabled===!0&&xt.isPresenting===!0){let le=b.xr.getDepthSensingMesh();le!==null&&gl(le,G,-1/0,b.sortObjects)}gl(S,G,0,b.sortObjects),f.finish(),b.sortObjects===!0&&f.sort(ge,Me),M=xt.enabled===!1||xt.isPresenting===!1||xt.hasDepthSensing()===!1,M&&He.addToRenderList(f,S),this.info.render.frame++,ue===!0&&ct.beginShadows();let j=g.state.shadowsArray;_e.render(j,S,G),ue===!0&&ct.endShadows(),this.info.autoReset===!0&&this.info.reset();let J=f.opaque,X=f.transmissive;if(g.setupLights(),G.isArrayCamera){let le=G.cameras;if(X.length>0)for(let fe=0,xe=le.length;fe<xe;fe++)od(J,X,S,le[fe]);M&&He.render(S);for(let fe=0,xe=le.length;fe<xe;fe++){let Ae=le[fe];ad(f,S,Ae,Ae.viewport)}}else X.length>0&&od(J,X,S,G),M&&He.render(S),ad(f,S,G);D!==null&&(ie.updateMultisampleRenderTarget(D),ie.updateRenderTargetMipmap(D)),S.isScene===!0&&S.onAfterRender(b,S,G),Sn.resetDefaultState(),O=-1,H=null,y.pop(),y.length>0?(g=y[y.length-1],ue===!0&&ct.setGlobalState(b.clippingPlanes,g.state.camera)):g=null,v.pop(),f=v.length>0?v[v.length-1]:null},this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(S,G,j){Z.get(S.texture).__webglTexture=G,Z.get(S.depthTexture).__webglTexture=j;let J=Z.get(S);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=j===void 0,J.__autoAllocateDepthBuffer||B.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,G){let j=Z.get(S);j.__webglFramebuffer=G,j.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(S,G=0,j=0){D=S,E=G,I=j;let J=!0,X=null,le=!1,fe=!1;if(S){let xe=Z.get(S);if(xe.__useDefaultFramebuffer!==void 0)k.bindFramebuffer(F.FRAMEBUFFER,null),J=!1;else if(xe.__webglFramebuffer===void 0)ie.setupRenderTarget(S);else if(xe.__hasExternalTextures)ie.rebindTextures(S,Z.get(S.texture).__webglTexture,Z.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Ue=S.depthTexture;if(xe.__boundDepthTexture!==Ue){if(Ue!==null&&Z.has(Ue)&&(S.width!==Ue.image.width||S.height!==Ue.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ie.setupDepthRenderbuffer(S)}}let Ae=S.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(fe=!0);let Le=Z.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(X=Array.isArray(Le[G])?Le[G][j]:Le[G],le=!0):X=S.samples>0&&ie.useMultisampledRTT(S)===!1?Z.get(S).__webglMultisampledFramebuffer:Array.isArray(Le)?Le[j]:Le,W.copy(S.viewport),V.copy(S.scissor),q=S.scissorTest}else W.copy(te).multiplyScalar(ee).floor(),V.copy(oe).multiplyScalar(ee).floor(),q=me;if(k.bindFramebuffer(F.FRAMEBUFFER,X)&&J&&k.drawBuffers(S,X),k.viewport(W),k.scissor(V),k.setScissorTest(q),le){let xe=Z.get(S.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+G,xe.__webglTexture,j)}else if(fe){let xe=Z.get(S.texture),Ae=G||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,xe.__webglTexture,j||0,Ae)}O=-1},this.readRenderTargetPixels=function(S,G,j,J,X,le,fe){if(!S||!S.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=Z.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&fe!==void 0&&(xe=xe[fe]),xe){k.bindFramebuffer(F.FRAMEBUFFER,xe);try{let Ae=S.texture,Le=Ae.format,Ue=Ae.type;if(!Q.textureFormatReadable(Le))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");if(!Q.textureTypeReadable(Ue))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");G>=0&&G<=S.width-J&&j>=0&&j<=S.height-X&&F.readPixels(G,j,J,X,cn.convert(Le),cn.convert(Ue),le)}finally{let Ae=D!==null?Z.get(D).__webglFramebuffer:null;k.bindFramebuffer(F.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(S,G,j,J,X,le,fe){if(!S||!S.isWebGLRenderTarget)throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=Z.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&fe!==void 0&&(xe=xe[fe]),xe){let Ae=S.texture,Le=Ae.format,Ue=Ae.type;if(!Q.textureFormatReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Q.textureTypeReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(G>=0&&G<=S.width-J&&j>=0&&j<=S.height-X){k.bindFramebuffer(F.FRAMEBUFFER,xe);let Re=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Re),F.bufferData(F.PIXEL_PACK_BUFFER,le.byteLength,F.STREAM_READ),F.readPixels(G,j,J,X,cn.convert(Le),cn.convert(Ue),0);let Fe=D!==null?Z.get(D).__webglFramebuffer:null;k.bindFramebuffer(F.FRAMEBUFFER,Fe);let ut=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await(function(nt,gt,rt){return new Promise((function(We,Lt){setTimeout((function Tt(){switch(nt.clientWaitSync(gt,nt.SYNC_FLUSH_COMMANDS_BIT,0)){case nt.WAIT_FAILED:Lt();break;case nt.TIMEOUT_EXPIRED:setTimeout(Tt,rt);break;default:We()}}),rt)}))})(F,ut,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Re),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,le),F.deleteBuffer(Re),F.deleteSync(ut),le}throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,G=null,j=0){S.isTexture!==!0&&(_s("WebGLRenderer: copyFramebufferToTexture function signature has changed."),G=arguments[0]||null,S=arguments[1]);let J=Math.pow(2,-j),X=Math.floor(S.image.width*J),le=Math.floor(S.image.height*J),fe=G!==null?G.x:0,xe=G!==null?G.y:0;ie.setTexture2D(S,0),F.copyTexSubImage2D(F.TEXTURE_2D,j,0,0,fe,xe,X,le),k.unbindTexture()},this.copyTextureToTexture=function(S,G,j=null,J=null,X=0){let le,fe,xe,Ae,Le,Ue,Re,Fe,ut;S.isTexture!==!0&&(_s("WebGLRenderer: copyTextureToTexture function signature has changed."),J=arguments[0]||null,S=arguments[1],G=arguments[2],X=arguments[3]||0,j=null);let nt=S.isCompressedTexture?S.mipmaps[X]:S.image;j!==null?(le=j.max.x-j.min.x,fe=j.max.y-j.min.y,xe=j.isBox3?j.max.z-j.min.z:1,Ae=j.min.x,Le=j.min.y,Ue=j.isBox3?j.min.z:0):(le=nt.width,fe=nt.height,xe=nt.depth||1,Ae=0,Le=0,Ue=0),J!==null?(Re=J.x,Fe=J.y,ut=J.z):(Re=0,Fe=0,ut=0);let gt=cn.convert(G.format),rt=cn.convert(G.type),We;G.isData3DTexture?(ie.setTexture3D(G,0),We=F.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(ie.setTexture2DArray(G,0),We=F.TEXTURE_2D_ARRAY):(ie.setTexture2D(G,0),We=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,G.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,G.unpackAlignment);let Lt=F.getParameter(F.UNPACK_ROW_LENGTH),Tt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),ke=F.getParameter(F.UNPACK_SKIP_PIXELS),Pe=F.getParameter(F.UNPACK_SKIP_ROWS),hn=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,nt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,nt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Ae),F.pixelStorei(F.UNPACK_SKIP_ROWS,Le),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ue);let vl=S.isDataArrayTexture||S.isData3DTexture,ns=G.isDataArrayTexture||G.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){let er=Z.get(S),_l=Z.get(G),yl=Z.get(er.__renderTarget),xl=Z.get(_l.__renderTarget);k.bindFramebuffer(F.READ_FRAMEBUFFER,yl.__webglFramebuffer),k.bindFramebuffer(F.DRAW_FRAMEBUFFER,xl.__webglFramebuffer);for(let Qn=0;Qn<xe;Qn++)vl&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Z.get(S).__webglTexture,X,Ue+Qn),S.isDepthTexture?(ns&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Z.get(G).__webglTexture,X,ut+Qn),F.blitFramebuffer(Ae,Le,le,fe,Re,Fe,le,fe,F.DEPTH_BUFFER_BIT,F.NEAREST)):ns?F.copyTexSubImage3D(We,X,Re,Fe,ut+Qn,Ae,Le,le,fe):F.copyTexSubImage2D(We,X,Re,Fe,ut+Qn,Ae,Le,le,fe);k.bindFramebuffer(F.READ_FRAMEBUFFER,null),k.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else ns?S.isDataTexture||S.isData3DTexture?F.texSubImage3D(We,X,Re,Fe,ut,le,fe,xe,gt,rt,nt.data):G.isCompressedArrayTexture?F.compressedTexSubImage3D(We,X,Re,Fe,ut,le,fe,xe,gt,nt.data):F.texSubImage3D(We,X,Re,Fe,ut,le,fe,xe,gt,rt,nt):S.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,X,Re,Fe,le,fe,gt,rt,nt.data):S.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,X,Re,Fe,nt.width,nt.height,gt,nt.data):F.texSubImage2D(F.TEXTURE_2D,X,Re,Fe,le,fe,gt,rt,nt);F.pixelStorei(F.UNPACK_ROW_LENGTH,Lt),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Tt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,ke),F.pixelStorei(F.UNPACK_SKIP_ROWS,Pe),F.pixelStorei(F.UNPACK_SKIP_IMAGES,hn),X===0&&G.generateMipmaps&&F.generateMipmap(We),k.unbindTexture()},this.copyTextureToTexture3D=function(S,G,j=null,J=null,X=0){return S.isTexture!==!0&&(_s("WebGLRenderer: copyTextureToTexture3D function signature has changed."),j=arguments[0]||null,J=arguments[1]||null,S=arguments[2],G=arguments[3],X=arguments[4]||0),_s('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,G,j,J,X)},this.initRenderTarget=function(S){Z.get(S).__webglFramebuffer===void 0&&ie.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?ie.setTextureCube(S,0):S.isData3DTexture?ie.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?ie.setTexture2DArray(S,0):ie.setTexture2D(S,0),k.unbindTexture()},this.resetState=function(){E=0,I=0,D=null,k.reset(),Sn.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Nr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=Ge._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ge._getUnpackColorSpace()}};var co=class extends lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new En,this.environmentIntensity=1,this.environmentRotation=new En,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Fr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Bc,this.updateRanges=[],this.version=0,this.uuid=nn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=nn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=nn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Nt=new w,Vi=class i{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=_n(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ze(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=_n(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=_n(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=_n(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=_n(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array),r=Ze(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array),r=Ze(r,this.array),s=Ze(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new mt(new this.array.constructor(t),this.itemSize,this.normalized)}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Cs=class extends Ot{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},vr,us=new w,_r=new w,yr=new w,xr=new ae,ds=new ae,hf=new Ee,La=new w,ps=new w,Da=new w,mp=new ae,Kl=new ae,gp=new ae,ho=class extends lt{constructor(e=new Cs){if(super(),this.isSprite=!0,this.type="Sprite",vr===void 0){vr=new et;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Fr(t,5);vr.setIndex([0,1,2,0,2,3]),vr.setAttribute("position",new Vi(n,3,0,!1)),vr.setAttribute("uv",new Vi(n,2,3,!1))}this.geometry=vr,this.material=e,this.center=new ae(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),_r.setFromMatrixScale(this.matrixWorld),hf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),yr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&_r.multiplyScalar(-yr.z);let n=this.material.rotation,r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));let a=this.center;Na(La.set(-.5,-.5,0),yr,a,_r,r,s),Na(ps.set(.5,-.5,0),yr,a,_r,r,s),Na(Da.set(.5,.5,0),yr,a,_r,r,s),mp.set(0,0),Kl.set(1,0),gp.set(1,1);let o=e.ray.intersectTriangle(La,ps,Da,!1,us);if(o===null&&(Na(ps.set(-.5,.5,0),yr,a,_r,r,s),Kl.set(0,1),o=e.ray.intersectTriangle(La,Da,ps,!1,us),o===null))return;let l=e.ray.origin.distanceTo(us);l<e.near||l>e.far||t.push({distance:l,point:us.clone(),uv:Hn.getInterpolation(us,La,ps,Da,mp,Kl,gp,new ae),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Na(i,e,t,n,r,s){xr.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(ds.x=s*xr.x-r*xr.y,ds.y=r*xr.x+s*xr.y):ds.copy(xr),i.copy(e),i.x+=ds.x,i.y+=ds.y,i.applyMatrix4(hf)}var k_=new w,B_=new w;var vp=new w,_p=new $e,yp=new $e,nv=new w,xp=new Ee,Ua=new w,Jl=new zt,bp=new Ee,Ql=new Or,uo=class extends Qe{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=yd,this.bindMatrix=new Ee,this.bindMatrixInverse=new Ee,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ft),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ua),this.boundingBox.expandByPoint(Ua)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new zt),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ua),this.boundingSphere.expandByPoint(Ua)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Jl.copy(this.boundingSphere),Jl.applyMatrix4(r),e.ray.intersectsSphere(Jl)!==!1&&(bp.copy(r).invert(),Ql.copy(e.ray).applyMatrix4(bp),this.boundingBox!==null&&Ql.intersectsBox(this.boundingBox)===!1||this._computeIntersections(e,t,Ql)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new $e,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===yd?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===ng?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,r=this.geometry;_p.fromBufferAttribute(r.attributes.skinIndex,e),yp.fromBufferAttribute(r.attributes.skinWeight,e),vp.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){let a=yp.getComponent(s);if(a!==0){let o=_p.getComponent(s);xp.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(nv.copy(vp).applyMatrix4(xp),a)}}return t.applyMatrix4(this.bindMatrixInverse)}},Is=class extends lt{constructor(){super(),this.isBone=!0,this.type="Bone"}},po=class extends Mt{constructor(e=null,t=1,n=1,r,s,a,o,l,c=1003,h=1003,u,d){super(null,a,o,l,c,h,r,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Mp=new Ee,iv=new Ee,fo=class i{constructor(e=[],t=[]){this.uuid=nn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(16*e.length),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new Ee)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ee;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,a=e.length;s<a;s++){let o=e[s]?e[s].matrixWorld:iv;Mp.multiplyMatrices(o,t[s]),Mp.toArray(n,16*s)}r!==null&&(r.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(4*this.bones.length);e=4*Math.ceil(e/4),e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new po(t,e,e,xn,yn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){let s=e.bones[n],a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new Is),this.bones.push(a),this.boneInverses.push(new Ee().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let r=0,s=t.length;r<s;r++){let a=t[r];e.bones.push(a.uuid);let o=n[r];e.boneInverses.push(o.toArray())}return e}},Gi=class extends mt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},br=new Ee,Sp=new Ee,Oa=[],wp=new Ft,rv=new Ee,fs=new Qe,ms=new zt,mo=class extends Qe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Gi(new Float32Array(16*n),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,rv)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ft),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,br),wp.copy(e.boundingBox).applyMatrix4(br),this.boundingBox.union(wp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new zt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,br),ms.copy(e.boundingSphere).applyMatrix4(br),this.boundingSphere.union(ms)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,3*e)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,16*e)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=e*(n.length+1)+1;for(let a=0;a<n.length;a++)n[a]=r[s+a]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(fs.geometry=this.geometry,fs.material=this.material,fs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ms.copy(this.boundingSphere),ms.applyMatrix4(n),e.ray.intersectsSphere(ms)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,br),Sp.multiplyMatrices(n,br),fs.matrixWorld=Sp,fs.raycast(e,Oa);for(let a=0,o=Oa.length;a<o;a++){let l=Oa[a];l.instanceId=s,l.object=this,t.push(l)}Oa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Gi(new Float32Array(3*this.instanceMatrix.count).fill(1),3)),t.toArray(this.instanceColor.array,3*e)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,16*e)}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new po(new Float32Array(r*this.count),r,this.count,Hh,yn));let s=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=r*e;s[l]=o,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var nh=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n,r){let s=this.pool,a=this.list;this.index>=s.length&&s.push({start:-1,count:-1,z:-1,index:-1});let o=s[this.index];a.push(o),this.index++,o.start=e,o.count=t,o.z=n,o.index=r}reset(){this.list.length=0,this.index=0}},F_=new Ee,z_=new Te(1,1,1),H_=new Br,V_=new Ft,G_=new zt,W_=new w,X_=new w,j_=new w,q_=new nh,Y_=new Qe;var Ps=class extends Ot{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Te(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},go=new w,vo=new w,Tp=new Ee,gs=new Or,ka=new zt,ec=new w,Ep=new w,zr=class extends lt{constructor(e=new et,t=new Ps){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)go.fromBufferAttribute(t,r-1),vo.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=go.distanceTo(vo);e.setAttribute("lineDistance",new Ce(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ka.copy(n.boundingSphere),ka.applyMatrix4(r),ka.radius+=s,e.ray.intersectsSphere(ka)===!1)return;Tp.copy(r).invert(),gs.copy(e.ray).applyMatrix4(Tp);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let d=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let m=d,_=p-1;m<_;m+=c){let f=h.getX(m),g=h.getX(m+1),v=Ba(this,e,gs,l,f,g);v&&t.push(v)}if(this.isLineLoop){let m=h.getX(p-1),_=h.getX(d),f=Ba(this,e,gs,l,m,_);f&&t.push(f)}}else{let d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let m=d,_=p-1;m<_;m+=c){let f=Ba(this,e,gs,l,m,m+1);f&&t.push(f)}if(this.isLineLoop){let m=Ba(this,e,gs,l,p-1,d);m&&t.push(m)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=n.length;r<s;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ba(i,e,t,n,r,s){let a=i.geometry.attributes.position;if(go.fromBufferAttribute(a,r),vo.fromBufferAttribute(a,s),t.distanceSqToSegment(go,vo,ec,Ep)>n)return;ec.applyMatrix4(i.matrixWorld);let o=e.ray.origin.distanceTo(ec);return o<e.near||o>e.far?void 0:{distance:o,point:Ep.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}var Ap=new w,Rp=new w,_o=class extends zr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Ap.fromBufferAttribute(t,r),Rp.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Ap.distanceTo(Rp);e.setAttribute("lineDistance",new Ce(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},yo=class extends zr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Ls=class extends Ot{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Cp=new Ee,ih=new Or,Fa=new zt,za=new w,xo=class extends lt{constructor(e=new et,t=new Ls){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fa.copy(n.boundingSphere),Fa.applyMatrix4(r),Fa.radius+=s,e.ray.intersectsSphere(Fa)===!1)return;Cp.copy(r).invert(),ih.copy(e.ray).applyMatrix4(Cp);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null)for(let u=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);u<d;u++){let p=c.getX(u);za.fromBufferAttribute(h,p),Ip(za,p,l,r,e,t,this)}else for(let u=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);u<d;u++)za.fromBufferAttribute(h,u),Ip(za,u,l,r,e,t,this)}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=n.length;r<s;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ip(i,e,t,n,r,s,a){let o=ih.distanceSqToPoint(i);if(o<t){let l=new w;ih.closestPointToPoint(i,l),l.applyMatrix4(n);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var bo=class extends Mt{constructor(e,t,n,r,s,a,o,l,c){super(e,t,n,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},sn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),r=0,s=n.length,a;a=t||e*n[s-1];let o,l=0,c=s-1;for(;l<=c;)if(r=Math.floor(l+(c-l)/2),o=n[r]-a,o<0)l=r+1;else{if(!(o>0)){c=r;break}c=r-1}if(r=c,n[r]===a)return r/(s-1);let h=n[r];return(r+(a-h)/(n[r+1]-h))/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let a=this.getPoint(r),o=this.getPoint(s),l=t||(a.isVector2?new ae:new w);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new w,r=[],s=[],a=[],o=new w,l=new Ee;for(let p=0;p<=e;p++){let m=p/e;r[p]=this.getTangentAt(m,new w)}s[0]=new w,a[0]=new w;let c=Number.MAX_VALUE,h=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(r[p-1],r[p]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(vt(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,m))}a[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(vt(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let m=1;m<=e;m++)s[m].applyMatrix4(l.makeRotationAxis(r[m],p*m)),a[m].crossVectors(r[m],s[m])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ds=class extends sn{constructor(e=0,t=0,n=1,r=1,s=0,a=2*Math.PI,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ae){let n=t,r=2*Math.PI,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(s=a?0:r),this.aClockwise!==!0||a||(s===r?s=-r:s-=r);let o=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},rh=class extends Ds{constructor(e,t,n,r,s,a){super(e,t,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function jh(){let i=0,e=0,t=0,n=0;function r(s,a,o,l){i=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,u){let d=(a-s)/c-(o-s)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,p*=h,r(a,o,d,p)},calc:function(s){let a=s*s;return i+e*s+t*a+n*(a*s)}}}var Ha=new w,tc=new jh,nc=new jh,ic=new jh,sh=class extends sn{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new w){let n=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e,o,l,c=Math.floor(a),h=a-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/s)+1)*s:h===0&&c===s-1&&(c=s-2,h=1),this.closed||c>0?o=r[(c-1)%s]:(Ha.subVectors(r[0],r[1]).add(r[0]),o=Ha);let u=r[c%s],d=r[(c+1)%s];if(this.closed||c+2<s?l=r[(c+2)%s]:(Ha.subVectors(r[s-1],r[s-2]).add(r[s-1]),l=Ha),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,m=Math.pow(o.distanceToSquared(u),p),_=Math.pow(u.distanceToSquared(d),p),f=Math.pow(d.distanceToSquared(l),p);_<1e-4&&(_=1),m<1e-4&&(m=_),f<1e-4&&(f=_),tc.initNonuniformCatmullRom(o.x,u.x,d.x,l.x,m,_,f),nc.initNonuniformCatmullRom(o.y,u.y,d.y,l.y,m,_,f),ic.initNonuniformCatmullRom(o.z,u.z,d.z,l.z,m,_,f)}else this.curveType==="catmullrom"&&(tc.initCatmullRom(o.x,u.x,d.x,l.x,this.tension),nc.initCatmullRom(o.y,u.y,d.y,l.y,this.tension),ic.initCatmullRom(o.z,u.z,d.z,l.z,this.tension));return n.set(tc.calc(h),nc.calc(h),ic.calc(h)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new w().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Pp(i,e,t,n,r){let s=.5*(n-e),a=.5*(r-t),o=i*i;return(2*t-2*n+s+a)*(i*o)+(-3*t+3*n-2*s-a)*o+s*i+t}function Ms(i,e,t,n){return(function(r,s){let a=1-r;return a*a*s})(i,e)+(function(r,s){return 2*(1-r)*r*s})(i,t)+(function(r,s){return r*r*s})(i,n)}function Ss(i,e,t,n,r){return(function(s,a){let o=1-s;return o*o*o*a})(i,e)+(function(s,a){let o=1-s;return 3*o*o*s*a})(i,t)+(function(s,a){return 3*(1-s)*s*s*a})(i,n)+(function(s,a){return s*s*s*a})(i,r)}var Mo=class extends sn{constructor(e=new ae,t=new ae,n=new ae,r=new ae){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new ae){let n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Ss(e,r.x,s.x,a.x,o.x),Ss(e,r.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ah=class extends sn{constructor(e=new w,t=new w,n=new w,r=new w){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new w){let n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Ss(e,r.x,s.x,a.x,o.x),Ss(e,r.y,s.y,a.y,o.y),Ss(e,r.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},So=class extends sn{constructor(e=new ae,t=new ae){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ae){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ae){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},oh=class extends sn{constructor(e=new w,t=new w){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new w){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new w){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},wo=class extends sn{constructor(e=new ae,t=new ae,n=new ae){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ae){let n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(Ms(e,r.x,s.x,a.x),Ms(e,r.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},To=class extends sn{constructor(e=new w,t=new w,n=new w){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new w){let n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(Ms(e,r.x,s.x,a.x),Ms(e,r.y,s.y,a.y),Ms(e,r.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Eo=class extends sn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ae){let n=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],h=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(Pp(o,l.x,c.x,h.x,u.x),Pp(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new ae().fromArray(r))}return this}},Ao=Object.freeze({__proto__:null,ArcCurve:rh,CatmullRomCurve3:sh,CubicBezierCurve:Mo,CubicBezierCurve3:ah,EllipseCurve:Ds,LineCurve:So,LineCurve3:oh,QuadraticBezierCurve:wo,QuadraticBezierCurve3:To,SplineCurve:Eo}),lh=class extends sn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ao[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=n){let a=r[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,s=this.curves;r<s.length;r++){let a=s[r],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(new Ao[r.type]().fromJSON(r))}return this}},Ns=class extends lh{constructor(e){super(),this.type="Path",this.currentPoint=new ae,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new So(this.currentPoint.clone(),new ae(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let s=new wo(this.currentPoint.clone(),new ae(e,t),new ae(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,a){let o=new Mo(this.currentPoint.clone(),new ae(e,t),new ae(n,r),new ae(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Eo(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,r,s,a),this}absarc(e,t,n,r,s,a){return this.absellipse(e,t,n,n,r,s,a),this}ellipse(e,t,n,r,s,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,r,s,a,o,l),this}absellipse(e,t,n,r,s,a,o,l){let c=new Ds(e,t,n,r,s,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ro=class i extends et{constructor(e=[new ae(0,-.5),new ae(.5,0),new ae(0,.5)],t=12,n=0,r=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=vt(r,0,2*Math.PI);let s=[],a=[],o=[],l=[],c=[],h=1/t,u=new w,d=new ae,p=new w,m=new w,_=new w,f=0,g=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:f=e[v+1].x-e[v].x,g=e[v+1].y-e[v].y,p.x=1*g,p.y=-f,p.z=0*g,_.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:f=e[v+1].x-e[v].x,g=e[v+1].y-e[v].y,p.x=1*g,p.y=-f,p.z=0*g,m.copy(p),p.x+=_.x,p.y+=_.y,p.z+=_.z,p.normalize(),l.push(p.x,p.y,p.z),_.copy(m)}for(let v=0;v<=t;v++){let y=n+v*h*r,b=Math.sin(y),R=Math.cos(y);for(let E=0;E<=e.length-1;E++){u.x=e[E].x*b,u.y=e[E].y,u.z=e[E].x*R,a.push(u.x,u.y,u.z),d.x=v/t,d.y=E/(e.length-1),o.push(d.x,d.y);let I=l[3*E+0]*b,D=l[3*E+1],O=l[3*E+0]*R;c.push(I,D,O)}}for(let v=0;v<t;v++)for(let y=0;y<e.length-1;y++){let b=y+v*e.length,R=b,E=b+e.length,I=b+e.length+1,D=b+1;s.push(R,E,D),s.push(I,D,E)}this.setIndex(s),this.setAttribute("position",new Ce(a,3)),this.setAttribute("uv",new Ce(o,2)),this.setAttribute("normal",new Ce(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},ch=class i extends Ro{constructor(e=1,t=1,n=4,r=8){let s=new Ns;s.absarc(0,-t/2,e,1.5*Math.PI,0),s.absarc(0,t/2,e,0,.5*Math.PI),super(s.getPoints(n),r),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:r}}static fromJSON(e){return new i(e.radius,e.length,e.capSegments,e.radialSegments)}},hh=class i extends et{constructor(e=1,t=32,n=0,r=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let s=[],a=[],o=[],l=[],c=new w,h=new ae;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let p=n+u/t*r;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Ce(a,3)),this.setAttribute("normal",new Ce(o,3)),this.setAttribute("uv",new Ce(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},gi=class i extends et{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,l=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let c=this;r=Math.floor(r),s=Math.floor(s);let h=[],u=[],d=[],p=[],m=0,_=[],f=n/2,g=0;function v(y){let b=m,R=new ae,E=new w,I=0,D=y===!0?e:t,O=y===!0?1:-1;for(let W=1;W<=r;W++)u.push(0,f*O,0),d.push(0,O,0),p.push(.5,.5),m++;let H=m;for(let W=0;W<=r;W++){let V=W/r*l+o,q=Math.cos(V),z=Math.sin(V);E.x=D*z,E.y=f*O,E.z=D*q,u.push(E.x,E.y,E.z),d.push(0,O,0),R.x=.5*q+.5,R.y=.5*z*O+.5,p.push(R.x,R.y),m++}for(let W=0;W<r;W++){let V=b+W,q=H+W;y===!0?h.push(q,q+1,V):h.push(q+1,q,V),I+=3}c.addGroup(g,I,y===!0?1:2),g+=I}(function(){let y=new w,b=new w,R=0,E=(t-e)/n;for(let I=0;I<=s;I++){let D=[],O=I/s,H=O*(t-e)+e;for(let W=0;W<=r;W++){let V=W/r,q=V*l+o,z=Math.sin(q),Y=Math.cos(q);b.x=H*z,b.y=-O*n+f,b.z=H*Y,u.push(b.x,b.y,b.z),y.set(z,E,Y).normalize(),d.push(y.x,y.y,y.z),p.push(V,1-O),D.push(m++)}_.push(D)}for(let I=0;I<r;I++)for(let D=0;D<s;D++){let O=_[D][I],H=_[D+1][I],W=_[D+1][I+1],V=_[D][I+1];(e>0||D!==0)&&(h.push(O,H,V),R+=3),(t>0||D!==s-1)&&(h.push(H,W,V),R+=3)}c.addGroup(g,R,0),g+=R})(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Ce(u,3)),this.setAttribute("normal",new Ce(d,3)),this.setAttribute("uv",new Ce(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},uh=class i extends gi{constructor(e=1,t=1,n=32,r=1,s=!1,a=0,o=2*Math.PI){super(0,e,t,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Wi=class i extends et{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};let s=[],a=[];function o(d,p,m,_){let f=_+1,g=[];for(let v=0;v<=f;v++){g[v]=[];let y=d.clone().lerp(m,v/f),b=p.clone().lerp(m,v/f),R=f-v;for(let E=0;E<=R;E++)g[v][E]=E===0&&v===f?y:y.clone().lerp(b,E/R)}for(let v=0;v<f;v++)for(let y=0;y<2*(f-v)-1;y++){let b=Math.floor(y/2);y%2==0?(l(g[v][b+1]),l(g[v+1][b]),l(g[v][b])):(l(g[v][b+1]),l(g[v+1][b+1]),l(g[v+1][b]))}}function l(d){s.push(d.x,d.y,d.z)}function c(d,p){let m=3*d;p.x=e[m+0],p.y=e[m+1],p.z=e[m+2]}function h(d,p,m,_){_<0&&d.x===1&&(a[p]=d.x-1),m.x===0&&m.z===0&&(a[p]=_/2/Math.PI+.5)}function u(d){return Math.atan2(d.z,-d.x)}(function(d){let p=new w,m=new w,_=new w;for(let f=0;f<t.length;f+=3)c(t[f+0],p),c(t[f+1],m),c(t[f+2],_),o(p,m,_,d)})(r),(function(d){let p=new w;for(let m=0;m<s.length;m+=3)p.x=s[m+0],p.y=s[m+1],p.z=s[m+2],p.normalize().multiplyScalar(d),s[m+0]=p.x,s[m+1]=p.y,s[m+2]=p.z})(n),(function(){let d=new w;for(let m=0;m<s.length;m+=3){d.x=s[m+0],d.y=s[m+1],d.z=s[m+2];let _=u(d)/2/Math.PI+.5,f=(p=d,Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))/Math.PI+.5);a.push(_,1-f)}var p;(function(){let m=new w,_=new w,f=new w,g=new w,v=new ae,y=new ae,b=new ae;for(let R=0,E=0;R<s.length;R+=9,E+=6){m.set(s[R+0],s[R+1],s[R+2]),_.set(s[R+3],s[R+4],s[R+5]),f.set(s[R+6],s[R+7],s[R+8]),v.set(a[E+0],a[E+1]),y.set(a[E+2],a[E+3]),b.set(a[E+4],a[E+5]),g.copy(m).add(_).add(f).divideScalar(3);let I=u(g);h(v,E+0,m,I),h(y,E+2,_,I),h(b,E+4,f,I)}})(),(function(){for(let m=0;m<a.length;m+=6){let _=a[m+0],f=a[m+2],g=a[m+4],v=Math.max(_,f,g),y=Math.min(_,f,g);v>.9&&y<.1&&(_<.2&&(a[m+0]+=1),f<.2&&(a[m+2]+=1),g<.2&&(a[m+4]+=1))}})()})(),this.setAttribute("position",new Ce(s,3)),this.setAttribute("normal",new Ce(s.slice(),3)),this.setAttribute("uv",new Ce(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}},dh=class i extends Wi{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=1/n;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Va=new w,Ga=new w,rc=new w,Wa=new Hn,ph=class extends et{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let r=Math.pow(10,4),s=Math.cos(Tr*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},p=[];for(let m=0;m<l;m+=3){a?(c[0]=a.getX(m),c[1]=a.getX(m+1),c[2]=a.getX(m+2)):(c[0]=m,c[1]=m+1,c[2]=m+2);let{a:_,b:f,c:g}=Wa;if(_.fromBufferAttribute(o,c[0]),f.fromBufferAttribute(o,c[1]),g.fromBufferAttribute(o,c[2]),Wa.getNormal(rc),u[0]=`${Math.round(_.x*r)},${Math.round(_.y*r)},${Math.round(_.z*r)}`,u[1]=`${Math.round(f.x*r)},${Math.round(f.y*r)},${Math.round(f.z*r)}`,u[2]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,u[0]!==u[1]&&u[1]!==u[2]&&u[2]!==u[0])for(let v=0;v<3;v++){let y=(v+1)%3,b=u[v],R=u[y],E=Wa[h[v]],I=Wa[h[y]],D=`${b}_${R}`,O=`${R}_${b}`;O in d&&d[O]?(rc.dot(d[O].normal)<=s&&(p.push(E.x,E.y,E.z),p.push(I.x,I.y,I.z)),d[O]=null):D in d||(d[D]={index0:c[v],index1:c[y],normal:rc.clone()})}}for(let m in d)if(d[m]){let{index0:_,index1:f}=d[m];Va.fromBufferAttribute(o,_),Ga.fromBufferAttribute(o,f),p.push(Va.x,Va.y,Va.z),p.push(Ga.x,Ga.y,Ga.z)}this.setAttribute("position",new Ce(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Co=class extends Ns{constructor(e){super(e),this.uuid=nn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(new Ns().fromJSON(r))}return this}},sv=function(i,e,t=2){let n=e&&e.length,r=n?e[0]*t:i.length,s=Lp(i,0,r,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,l,c,h,u,d,p;if(n&&(s=(function(m,_,f,g){let v=[],y,b,R,E,I;for(y=0,b=_.length;y<b;y++)R=_[y]*g,E=y<b-1?_[y+1]*g:m.length,I=Lp(m,R,E,g,!1),I===I.next&&(I.steiner=!0),v.push(pv(I));for(v.sort(hv),y=0;y<v.length;y++)f=uv(v[y],f);return f})(i,e,s,t)),i.length>80*t){o=c=i[0],l=h=i[1];for(let m=t;m<r;m+=t)u=i[m],d=i[m+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);p=Math.max(c-o,h-l),p=p!==0?32767/p:0}return Us(s,a,t,o,l,p,0),a};function Lp(i,e,t,n,r){let s,a;if(r===(function(o,l,c,h){let u=0;for(let d=l,p=c-h;d<c;d+=h)u+=(o[p]-o[d])*(o[d+1]+o[p+1]),p=d;return u})(i,e,t,n)>0)for(s=e;s<t;s+=n)a=Dp(s,i[s],i[s+1],a);else for(s=t-n;s>=e;s-=n)a=Dp(s,i[s],i[s+1],a);return a&&Ho(a,a.next)&&(ks(a),a=a.next),a}function Xi(i,e){if(!i)return i;e||(e=i);let t,n=i;do if(t=!1,n.steiner||!Ho(n,n.next)&&ht(n.prev,n,n.next)!==0)n=n.next;else{if(ks(n),n=e=n.prev,n===n.next)break;t=!0}while(t||n!==e);return e}function Us(i,e,t,n,r,s,a){if(!i)return;!a&&s&&(function(h,u,d,p){let m=h;do m.z===0&&(m.z=fh(m.x,m.y,u,d,p)),m.prevZ=m.prev,m.nextZ=m.next,m=m.next;while(m!==h);m.prevZ.nextZ=null,m.prevZ=null,(function(_){let f,g,v,y,b,R,E,I,D=1;do{for(g=_,_=null,b=null,R=0;g;){for(R++,v=g,E=0,f=0;f<D&&(E++,v=v.nextZ,v);f++);for(I=D;E>0||I>0&&v;)E!==0&&(I===0||!v||g.z<=v.z)?(y=g,g=g.nextZ,E--):(y=v,v=v.nextZ,I--),b?b.nextZ=y:_=y,y.prevZ=b,b=y;g=v}b.nextZ=null,D*=2}while(R>1)})(m)})(i,n,r,s);let o,l,c=i;for(;i.prev!==i.next;)if(o=i.prev,l=i.next,s?ov(i,n,r,s):av(i))e.push(o.i/t|0),e.push(i.i/t|0),e.push(l.i/t|0),ks(i),i=l.next,c=l.next;else if((i=l)===c){a?a===1?Us(i=lv(Xi(i),e,t),e,t,n,r,s,2):a===2&&cv(i,e,t,n,r,s):Us(Xi(i),e,t,n,r,s,1);break}}function av(i){let e=i.prev,t=i,n=i.next;if(ht(e,t,n)>=0)return!1;let r=e.x,s=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=r<s?r<a?r:a:s<a?s:a,u=o<l?o<c?o:c:l<c?l:c,d=r>s?r>a?r:a:s>a?s:a,p=o>l?o>c?o:c:l>c?l:c,m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=p&&wr(r,o,s,l,a,c,m.x,m.y)&&ht(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function ov(i,e,t,n){let r=i.prev,s=i,a=i.next;if(ht(r,s,a)>=0)return!1;let o=r.x,l=s.x,c=a.x,h=r.y,u=s.y,d=a.y,p=o<l?o<c?o:c:l<c?l:c,m=h<u?h<d?h:d:u<d?u:d,_=o>l?o>c?o:c:l>c?l:c,f=h>u?h>d?h:d:u>d?u:d,g=fh(p,m,e,t,n),v=fh(_,f,e,t,n),y=i.prevZ,b=i.nextZ;for(;y&&y.z>=g&&b&&b.z<=v;){if(y.x>=p&&y.x<=_&&y.y>=m&&y.y<=f&&y!==r&&y!==a&&wr(o,h,l,u,c,d,y.x,y.y)&&ht(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=_&&b.y>=m&&b.y<=f&&b!==r&&b!==a&&wr(o,h,l,u,c,d,b.x,b.y)&&ht(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=g;){if(y.x>=p&&y.x<=_&&y.y>=m&&y.y<=f&&y!==r&&y!==a&&wr(o,h,l,u,c,d,y.x,y.y)&&ht(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=_&&b.y>=m&&b.y<=f&&b!==r&&b!==a&&wr(o,h,l,u,c,d,b.x,b.y)&&ht(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function lv(i,e,t){let n=i;do{let r=n.prev,s=n.next.next;!Ho(r,s)&&uf(r,n,n.next,s)&&Os(r,s)&&Os(s,r)&&(e.push(r.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),ks(n),ks(n.next),n=i=s),n=n.next}while(n!==i);return Xi(n)}function cv(i,e,t,n,r,s){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&fv(a,o)){let l=df(a,o);return a=Xi(a,a.next),l=Xi(l,l.next),Us(a,e,t,n,r,s,0),void Us(l,e,t,n,r,s,0)}o=o.next}a=a.next}while(a!==i)}function hv(i,e){return i.x-e.x}function uv(i,e){let t=(function(r,s){let a,o=s,l=-1/0,c=r.x,h=r.y;do{if(h<=o.y&&h>=o.next.y&&o.next.y!==o.y){let f=o.x+(h-o.y)*(o.next.x-o.x)/(o.next.y-o.y);if(f<=c&&f>l&&(l=f,a=o.x<o.next.x?o:o.next,f===c))return a}o=o.next}while(o!==s);if(!a)return null;let u=a,d=a.x,p=a.y,m,_=1/0;o=a;do c>=o.x&&o.x>=d&&c!==o.x&&wr(h<p?c:l,h,d,p,h<p?l:c,h,o.x,o.y)&&(m=Math.abs(h-o.y)/(c-o.x),Os(o,r)&&(m<_||m===_&&(o.x>a.x||o.x===a.x&&dv(a,o)))&&(a=o,_=m)),o=o.next;while(o!==u);return a})(i,e);if(!t)return e;let n=df(t,i);return Xi(n,n.next),Xi(t,t.next)}function dv(i,e){return ht(i.prev,i,e.prev)<0&&ht(e.next,i,i.next)<0}function fh(i,e,t,n,r){return(i=1431655765&((i=858993459&((i=252645135&((i=16711935&((i=(i-t)*r|0)|i<<8))|i<<4))|i<<2))|i<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-n)*r|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function pv(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function wr(i,e,t,n,r,s,a,o){return(r-a)*(e-o)>=(i-a)*(s-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(r-a)*(n-o)}function fv(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!(function(t,n){let r=t;do{if(r.i!==t.i&&r.next.i!==t.i&&r.i!==n.i&&r.next.i!==n.i&&uf(r,r.next,t,n))return!0;r=r.next}while(r!==t);return!1})(i,e)&&(Os(i,e)&&Os(e,i)&&(function(t,n){let r=t,s=!1,a=(t.x+n.x)/2,o=(t.y+n.y)/2;do r.y>o!=r.next.y>o&&r.next.y!==r.y&&a<(r.next.x-r.x)*(o-r.y)/(r.next.y-r.y)+r.x&&(s=!s),r=r.next;while(r!==t);return s})(i,e)&&(ht(i.prev,i,e.prev)||ht(i,e.prev,e))||Ho(i,e)&&ht(i.prev,i,i.next)>0&&ht(e.prev,e,e.next)>0)}function ht(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Ho(i,e){return i.x===e.x&&i.y===e.y}function uf(i,e,t,n){let r=ja(ht(i,e,t)),s=ja(ht(i,e,n)),a=ja(ht(t,n,i)),o=ja(ht(t,n,e));return r!==s&&a!==o||!(r!==0||!Xa(i,t,e))||!(s!==0||!Xa(i,n,e))||!(a!==0||!Xa(t,i,n))||!(o!==0||!Xa(t,e,n))}function Xa(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function ja(i){return i>0?1:i<0?-1:0}function Os(i,e){return ht(i.prev,i,i.next)<0?ht(i,e,i.next)>=0&&ht(i,i.prev,e)>=0:ht(i,e,i.prev)<0||ht(i,i.next,e)<0}function df(i,e){let t=new mh(i.i,i.x,i.y),n=new mh(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Dp(i,e,t,n){let r=new mh(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function ks(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function mh(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}var ui=class i{static area(e){let t=e.length,n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return .5*n}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],r=[],s=[];Np(e),Up(n,e);let a=e.length;t.forEach(Np);for(let l=0;l<t.length;l++)r.push(a),a+=t[l].length,Up(n,t[l]);let o=sv(n,r);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}};function Np(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Up(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var gh=class i extends et{constructor(e=new Co([new ae(.5,.5),new ae(-.5,.5),new ae(-.5,-.5),new ae(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],s=[];for(let o=0,l=e.length;o<l;o++)a(e[o]);function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled===void 0||t.bevelEnabled,p=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:p-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,f=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:mv,y,b,R,E,I,D=!1;g&&(y=g.getSpacedPoints(h),D=!0,d=!1,b=g.computeFrenetFrames(h,!1),R=new w,E=new w,I=new w),d||(f=0,p=0,m=0,_=0);let O=o.extractPoints(c),H=O.shape,W=O.holes;if(!ui.isClockWise(H)){H=H.reverse();for(let N=0,C=W.length;N<C;N++){let L=W[N];ui.isClockWise(L)&&(W[N]=L.reverse())}}let V=ui.triangulateShape(H,W),q=H;for(let N=0,C=W.length;N<C;N++){let L=W[N];H=H.concat(L)}function z(N,C,L){return C||console.error("THREE.ExtrudeGeometry: vec does not exist"),N.clone().addScaledVector(C,L)}let Y=H.length,$=V.length;function ne(N,C,L){let M,P,B,Q=N.x-C.x,k=N.y-C.y,K=L.x-N.x,Z=L.y-N.y,ie=Q*Q+k*k,pe=Q*Z-k*K;if(Math.abs(pe)>Number.EPSILON){let de=Math.sqrt(ie),Se=Math.sqrt(K*K+Z*Z),Ie=C.x-k/de,je=C.y+Q/de,Be=((L.x-Z/Se-Ie)*Z-(L.y+K/Se-je)*K)/(Q*Z-k*K);M=Ie+Q*Be-N.x,P=je+k*Be-N.y;let we=M*M+P*P;if(we<=2)return new ae(M,P);B=Math.sqrt(we/2)}else{let de=!1;Q>Number.EPSILON?K>Number.EPSILON&&(de=!0):Q<-Number.EPSILON?K<-Number.EPSILON&&(de=!0):Math.sign(k)===Math.sign(Z)&&(de=!0),de?(M=-k,P=Q,B=Math.sqrt(ie)):(M=Q,P=k,B=Math.sqrt(ie/2))}return new ae(M/B,P/B)}let ee=[];for(let N=0,C=q.length,L=C-1,M=N+1;N<C;N++,L++,M++)L===C&&(L=0),M===C&&(M=0),ee[N]=ne(q[N],q[L],q[M]);let ge=[],Me,te=ee.concat();for(let N=0,C=W.length;N<C;N++){let L=W[N];Me=[];for(let M=0,P=L.length,B=P-1,Q=M+1;M<P;M++,B++,Q++)B===P&&(B=0),Q===P&&(Q=0),Me[M]=ne(L[M],L[B],L[Q]);ge.push(Me),te=te.concat(Me)}for(let N=0;N<f;N++){let C=N/f,L=p*Math.cos(C*Math.PI/2),M=m*Math.sin(C*Math.PI/2)+_;for(let P=0,B=q.length;P<B;P++){let Q=z(q[P],ee[P],M);ve(Q.x,Q.y,-L)}for(let P=0,B=W.length;P<B;P++){let Q=W[P];Me=ge[P];for(let k=0,K=Q.length;k<K;k++){let Z=z(Q[k],Me[k],M);ve(Z.x,Z.y,-L)}}}let oe=m+_;for(let N=0;N<Y;N++){let C=d?z(H[N],te[N],oe):H[N];D?(E.copy(b.normals[0]).multiplyScalar(C.x),R.copy(b.binormals[0]).multiplyScalar(C.y),I.copy(y[0]).add(E).add(R),ve(I.x,I.y,I.z)):ve(C.x,C.y,0)}for(let N=1;N<=h;N++)for(let C=0;C<Y;C++){let L=d?z(H[C],te[C],oe):H[C];D?(E.copy(b.normals[N]).multiplyScalar(L.x),R.copy(b.binormals[N]).multiplyScalar(L.y),I.copy(y[N]).add(E).add(R),ve(I.x,I.y,I.z)):ve(L.x,L.y,u/h*N)}for(let N=f-1;N>=0;N--){let C=N/f,L=p*Math.cos(C*Math.PI/2),M=m*Math.sin(C*Math.PI/2)+_;for(let P=0,B=q.length;P<B;P++){let Q=z(q[P],ee[P],M);ve(Q.x,Q.y,u+L)}for(let P=0,B=W.length;P<B;P++){let Q=W[P];Me=ge[P];for(let k=0,K=Q.length;k<K;k++){let Z=z(Q[k],Me[k],M);D?ve(Z.x,Z.y+y[h-1].y,y[h-1].x+L):ve(Z.x,Z.y,u+L)}}}function me(N,C){let L=N.length;for(;--L>=0;){let M=L,P=L-1;P<0&&(P=N.length-1);for(let B=0,Q=h+2*f;B<Q;B++){let k=Y*B,K=Y*(B+1);A(C+M+k,C+P+k,C+P+K,C+M+K)}}}function ve(N,C,L){l.push(N),l.push(C),l.push(L)}function ue(N,C,L){T(N),T(C),T(L);let M=r.length/3,P=v.generateTopUV(n,r,M-3,M-2,M-1);U(P[0]),U(P[1]),U(P[2])}function A(N,C,L,M){T(N),T(C),T(M),T(C),T(L),T(M);let P=r.length/3,B=v.generateSideWallUV(n,r,P-6,P-3,P-2,P-1);U(B[0]),U(B[1]),U(B[3]),U(B[1]),U(B[2]),U(B[3])}function T(N){r.push(l[3*N+0]),r.push(l[3*N+1]),r.push(l[3*N+2])}function U(N){s.push(N.x),s.push(N.y)}(function(){let N=r.length/3;if(d){let C=0,L=Y*C;for(let M=0;M<$;M++){let P=V[M];ue(P[2]+L,P[1]+L,P[0]+L)}C=h+2*f,L=Y*C;for(let M=0;M<$;M++){let P=V[M];ue(P[0]+L,P[1]+L,P[2]+L)}}else{for(let C=0;C<$;C++){let L=V[C];ue(L[2],L[1],L[0])}for(let C=0;C<$;C++){let L=V[C];ue(L[0]+Y*h,L[1]+Y*h,L[2]+Y*h)}}n.addGroup(N,r.length/3-N,0)})(),(function(){let N=r.length/3,C=0;me(q,C),C+=q.length;for(let L=0,M=W.length;L<M;L++){let P=W[L];me(P,C),C+=P.length}n.addGroup(N,r.length/3-N,1)})()}this.setAttribute("position",new Ce(r,3)),this.setAttribute("uv",new Ce(s,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,n,r){if(r.shapes=[],Array.isArray(t))for(let s=0,a=t.length;s<a;s++){let o=t[s];r.shapes.push(o.uuid)}else r.shapes.push(t.uuid);return r.options=Object.assign({},n),n.extrudePath!==void 0&&(r.options.extrudePath=n.extrudePath.toJSON()),r})(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let n=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=t[e.shapes[s]];n.push(o)}let r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Ao[r.type]().fromJSON(r)),new i(n,e.options)}},mv={generateTopUV:function(i,e,t,n,r){let s=e[3*t],a=e[3*t+1],o=e[3*n],l=e[3*n+1],c=e[3*r],h=e[3*r+1];return[new ae(s,a),new ae(o,l),new ae(c,h)]},generateSideWallUV:function(i,e,t,n,r,s){let a=e[3*t],o=e[3*t+1],l=e[3*t+2],c=e[3*n],h=e[3*n+1],u=e[3*n+2],d=e[3*r],p=e[3*r+1],m=e[3*r+2],_=e[3*s],f=e[3*s+1],g=e[3*s+2];return Math.abs(o-h)<Math.abs(a-c)?[new ae(a,1-l),new ae(c,1-u),new ae(d,1-m),new ae(_,1-g)]:[new ae(o,1-l),new ae(h,1-u),new ae(p,1-m),new ae(f,1-g)]}},vh=class i extends Wi{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2;super([-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},_h=class i extends Wi{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},yh=class i extends et{constructor(e=.5,t=1,n=32,r=1,s=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:a},n=Math.max(3,n);let o=[],l=[],c=[],h=[],u=e,d=(t-e)/(r=Math.max(1,r)),p=new w,m=new ae;for(let _=0;_<=r;_++){for(let f=0;f<=n;f++){let g=s+f/n*a;p.x=u*Math.cos(g),p.y=u*Math.sin(g),l.push(p.x,p.y,p.z),c.push(0,0,1),m.x=(p.x/t+1)/2,m.y=(p.y/t+1)/2,h.push(m.x,m.y)}u+=d}for(let _=0;_<r;_++){let f=_*(n+1);for(let g=0;g<n;g++){let v=g+f,y=v,b=v+n+1,R=v+n+2,E=v+1;o.push(y,b,E),o.push(b,R,E)}}this.setIndex(o),this.setAttribute("position",new Ce(l,3)),this.setAttribute("normal",new Ce(c,3)),this.setAttribute("uv",new Ce(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},xh=class i extends et{constructor(e=new Co([new ae(0,.5),new ae(-.5,-.5),new ae(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],r=[],s=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;function c(h){let u=r.length/3,d=h.extractPoints(t),p=d.shape,m=d.holes;ui.isClockWise(p)===!1&&(p=p.reverse());for(let f=0,g=m.length;f<g;f++){let v=m[f];ui.isClockWise(v)===!0&&(m[f]=v.reverse())}let _=ui.triangulateShape(p,m);for(let f=0,g=m.length;f<g;f++){let v=m[f];p=p.concat(v)}for(let f=0,g=p.length;f<g;f++){let v=p[f];r.push(v.x,v.y,0),s.push(0,0,1),a.push(v.x,v.y)}for(let f=0,g=_.length;f<g;f++){let v=_[f],y=v[0]+u,b=v[1]+u,R=v[2]+u;n.push(y,b,R),l+=3}}this.setIndex(n),this.setAttribute("position",new Ce(r,3)),this.setAttribute("normal",new Ce(s,3)),this.setAttribute("uv",new Ce(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,n){if(n.shapes=[],Array.isArray(t))for(let r=0,s=t.length;r<s;r++){let a=t[r];n.shapes.push(a.uuid)}else n.shapes.push(t.uuid);return n})(this.parameters.shapes,e)}static fromJSON(e,t){let n=[];for(let r=0,s=e.shapes.length;r<s;r++){let a=t[e.shapes[r]];n.push(a)}return new i(n,e.curveSegments)}},Bs=class i extends et{constructor(e=1,t=32,n=16,r=0,s=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new w,d=new w,p=[],m=[],_=[],f=[];for(let g=0;g<=n;g++){let v=[],y=g/n,b=0;g===0&&a===0?b=.5/t:g===n&&l===Math.PI&&(b=-.5/t);for(let R=0;R<=t;R++){let E=R/t;u.x=-e*Math.cos(r+E*s)*Math.sin(a+y*o),u.y=e*Math.cos(a+y*o),u.z=e*Math.sin(r+E*s)*Math.sin(a+y*o),m.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),f.push(E+b,1-y),v.push(c++)}h.push(v)}for(let g=0;g<n;g++)for(let v=0;v<t;v++){let y=h[g][v+1],b=h[g][v],R=h[g+1][v],E=h[g+1][v+1];(g!==0||a>0)&&p.push(y,b,E),(g!==n-1||l<Math.PI)&&p.push(b,R,E)}this.setIndex(p),this.setAttribute("position",new Ce(m,3)),this.setAttribute("normal",new Ce(_,3)),this.setAttribute("uv",new Ce(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},bh=class i extends Wi{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Fs=class i extends et{constructor(e=1,t=.4,n=12,r=48,s=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);let a=[],o=[],l=[],c=[],h=new w,u=new w,d=new w;for(let p=0;p<=n;p++)for(let m=0;m<=r;m++){let _=m/r*s,f=p/n*Math.PI*2;u.x=(e+t*Math.cos(f))*Math.cos(_),u.y=(e+t*Math.cos(f))*Math.sin(_),u.z=t*Math.sin(f),o.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(m/r),c.push(p/n)}for(let p=1;p<=n;p++)for(let m=1;m<=r;m++){let _=(r+1)*p+m-1,f=(r+1)*(p-1)+m-1,g=(r+1)*(p-1)+m,v=(r+1)*p+m;a.push(_,f,v),a.push(f,g,v)}this.setIndex(a),this.setAttribute("position",new Ce(o,3)),this.setAttribute("normal",new Ce(l,3)),this.setAttribute("uv",new Ce(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},Mh=class i extends et{constructor(e=1,t=.4,n=64,r=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:r,p:s,q:a},n=Math.floor(n),r=Math.floor(r);let o=[],l=[],c=[],h=[],u=new w,d=new w,p=new w,m=new w,_=new w,f=new w,g=new w;for(let y=0;y<=n;++y){let b=y/n*s*Math.PI*2;v(b,s,a,e,p),v(b+.01,s,a,e,m),f.subVectors(m,p),g.addVectors(m,p),_.crossVectors(f,g),g.crossVectors(_,f),_.normalize(),g.normalize();for(let R=0;R<=r;++R){let E=R/r*Math.PI*2,I=-t*Math.cos(E),D=t*Math.sin(E);u.x=p.x+(I*g.x+D*_.x),u.y=p.y+(I*g.y+D*_.y),u.z=p.z+(I*g.z+D*_.z),l.push(u.x,u.y,u.z),d.subVectors(u,p).normalize(),c.push(d.x,d.y,d.z),h.push(y/n),h.push(R/r)}}for(let y=1;y<=n;y++)for(let b=1;b<=r;b++){let R=(r+1)*(y-1)+(b-1),E=(r+1)*y+(b-1),I=(r+1)*y+b,D=(r+1)*(y-1)+b;o.push(R,E,D),o.push(E,I,D)}function v(y,b,R,E,I){let D=Math.cos(y),O=Math.sin(y),H=R/b*y,W=Math.cos(H);I.x=E*(2+W)*.5*D,I.y=E*(2+W)*O*.5,I.z=E*Math.sin(H)*.5}this.setIndex(o),this.setAttribute("position",new Ce(l,3)),this.setAttribute("normal",new Ce(c,3)),this.setAttribute("uv",new Ce(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},Sh=class i extends et{constructor(e=new To(new w(-1,-1,0),new w(-1,1,0),new w(1,1,0)),t=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:s};let a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new w,l=new w,c=new ae,h=new w,u=[],d=[],p=[],m=[];function _(f){h=e.getPointAt(f/t,h);let g=a.normals[f],v=a.binormals[f];for(let y=0;y<=r;y++){let b=y/r*Math.PI*2,R=Math.sin(b),E=-Math.cos(b);l.x=E*g.x+R*v.x,l.y=E*g.y+R*v.y,l.z=E*g.z+R*v.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}(function(){for(let f=0;f<t;f++)_(f);_(s===!1?t:0),(function(){for(let f=0;f<=t;f++)for(let g=0;g<=r;g++)c.x=f/t,c.y=g/r,p.push(c.x,c.y)})(),(function(){for(let f=1;f<=t;f++)for(let g=1;g<=r;g++){let v=(r+1)*(f-1)+(g-1),y=(r+1)*f+(g-1),b=(r+1)*f+g,R=(r+1)*(f-1)+g;m.push(v,y,R),m.push(y,b,R)}})()})(),this.setIndex(m),this.setAttribute("position",new Ce(u,3)),this.setAttribute("normal",new Ce(d,3)),this.setAttribute("uv",new Ce(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Ao[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},wh=class extends et{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],n=new Set,r=new w,s=new w;if(e.index!==null){let a=e.attributes.position,o=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],d=u.start;for(let p=d,m=d+u.count;p<m;p+=3)for(let _=0;_<3;_++){let f=o.getX(p+_),g=o.getX(p+(_+1)%3);r.fromBufferAttribute(a,f),s.fromBufferAttribute(a,g),Op(r,s,n)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{let a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,u=3*o+(c+1)%3;r.fromBufferAttribute(a,h),s.fromBufferAttribute(a,u),Op(r,s,n)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Ce(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Op(i,e,t){let n=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(n)!==!0&&t.has(r)!==!0&&(t.add(n),t.add(r),!0)}var $_=Object.freeze({__proto__:null,BoxGeometry:fi,CapsuleGeometry:ch,CircleGeometry:hh,ConeGeometry:uh,CylinderGeometry:gi,DodecahedronGeometry:dh,EdgesGeometry:ph,ExtrudeGeometry:gh,IcosahedronGeometry:vh,LatheGeometry:Ro,OctahedronGeometry:_h,PlaneGeometry:Hi,PolyhedronGeometry:Wi,RingGeometry:yh,ShapeGeometry:xh,SphereGeometry:Bs,TetrahedronGeometry:bh,TorusGeometry:Fs,TorusKnotGeometry:Mh,TubeGeometry:Sh,WireframeGeometry:wh}),Io=class extends Ot{static get type(){return"ShadowMaterial"}constructor(e){super(),this.isShadowMaterial=!0,this.color=new Te(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};var Cn=class extends Ot{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},$t=class extends Cn{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ae(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return vt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Te(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Te(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Te(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function qa(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function gv(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function vv(i){let e=i.length,t=new Array(e);for(let n=0;n!==e;++n)t[n]=n;return t.sort((function(n,r){return i[n]-i[r]})),t}function kp(i,e,t){let n=i.length,r=new i.constructor(n);for(let s=0,a=0;a!==n;++s){let o=t[s]*e;for(let l=0;l!==e;++l)r[a++]=i[o+l]}return r}function pf(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=i[r++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=i[r++];while(s!==void 0)}var vi=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];t:{e:{let a;n:{i:if(!(e<r)){for(let o=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=r,r=t[++n],e<r)break e}a=t.length;break n}if(e>=s)break t;{let o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break e}a=n,n=0}}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Th=class extends vi{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:xd,endingEnd:xd}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,a=e+1,o=r[s],l=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case bd:s=e,o=2*t-n;break;case Md:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case bd:a=e,l=2*n-t;break;case Md:a=1,l=n+r[1]-r[0];break;default:a=e-1,l=t}let c=.5*(n-t),h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,m=(n-t)/(r-t),_=m*m,f=_*m,g=-d*f+2*d*_-d*m,v=(1+d)*f+(-1.5-2*d)*_+(-.5+d)*m+1,y=(-1-p)*f+(1.5+p)*_+.5*m,b=p*f-p*_;for(let R=0;R!==o;++R)s[R]=g*a[h+R]+v*a[c+R]+y*a[l+R]+b*a[u+R];return s}},Eh=class extends vi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(r-t),u=1-h;for(let d=0;d!==o;++d)s[d]=a[c+d]*u+a[l+d]*h;return s}},Ah=class extends vi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},rn=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=qa(t,this.TimeBufferType),this.values=qa(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:qa(e.times,Array),values:qa(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ah(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Eh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Th(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Lr:t=this.InterpolantFactoryMethodDiscrete;break;case Dr:t=this.InterpolantFactoryMethodLinear;break;case wl:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(n);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Lr;case this.InterpolantFactoryMethodLinear:return Dr;case this.InterpolantFactoryMethodSmooth:return wl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,s=0,a=r-1;for(;s!==r&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(r!==void 0&&gv(r))for(let o=0,l=r.length;o!==l;++o){let c=r[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===wl,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=e[o];if(c!==e[o+1]&&(o!==1||c!==e[0]))if(r)l=!0;else{let h=o*n,u=h-n,d=h+n;for(let p=0;p!==n;++p){let m=t[h+p];if(m!==t[u+p]||m!==t[d+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*n,u=a*n;for(let d=0;d!==n;++d)t[u+d]=t[h+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=new this.constructor(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}};rn.prototype.TimeBufferType=Float32Array,rn.prototype.ValueBufferType=Float32Array,rn.prototype.DefaultInterpolation=Dr;var li=class extends rn{constructor(e,t,n){super(e,t,n)}};li.prototype.ValueTypeName="bool",li.prototype.ValueBufferType=Array,li.prototype.DefaultInterpolation=Lr,li.prototype.InterpolantFactoryMethodLinear=void 0,li.prototype.InterpolantFactoryMethodSmooth=void 0;var Po=class extends rn{};Po.prototype.ValueTypeName="color";var Xn=class extends rn{};Xn.prototype.ValueTypeName="number";var Rh=class extends vi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(r-t),c=e*o;for(let h=c+o;c!==h;c+=4)Yt.slerpFlat(s,0,a,c-o,a,c,l);return s}},jn=class extends rn{InterpolantFactoryMethodLinear(e){return new Rh(this.times,this.values,this.getValueSize(),e)}};jn.prototype.ValueTypeName="quaternion",jn.prototype.InterpolantFactoryMethodSmooth=void 0;var ci=class extends rn{constructor(e,t,n){super(e,t,n)}};ci.prototype.ValueTypeName="string",ci.prototype.ValueBufferType=Array,ci.prototype.DefaultInterpolation=Lr,ci.prototype.InterpolantFactoryMethodLinear=void 0,ci.prototype.InterpolantFactoryMethodSmooth=void 0;var qn=class extends rn{};qn.prototype.ValueTypeName="vector";var Lo=class{constructor(e="",t=-1,n=[],r=2500){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=nn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,r=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(_v(n[a]).scale(r));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){let t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=n.length;s!==a;++s)t.push(rn.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){let s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);let h=vv(l);l=kp(l,1,h),c=kp(c,1,h),r||l[0]!==0||(l.push(s),c.push(c[0])),a.push(new Xn(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let r={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],h=c.name.match(s);if(h&&h.length>1){let u=h[1],d=r[u];d||(r[u]=d=[]),d.push(c)}}let a=[];for(let o in r)a.push(this.CreateFromMorphTargetSequence(o,r[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(h,u,d,p,m){if(d.length!==0){let _=[],f=[];pf(d,_,f,p),_.length!==0&&m.push(new h(u,_,f))}},r=[],s=e.name||"default",a=e.fps||30,o=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let h=0;h<c.length;h++){let u=c[h].keys;if(u&&u.length!==0)if(u[0].morphTargets){let d={},p;for(p=0;p<u.length;p++)if(u[p].morphTargets)for(let m=0;m<u[p].morphTargets.length;m++)d[u[p].morphTargets[m]]=-1;for(let m in d){let _=[],f=[];for(let g=0;g!==u[p].morphTargets.length;++g){let v=u[p];_.push(v.time),f.push(v.morphTarget===m?1:0)}r.push(new Xn(".morphTargetInfluence["+m+"]",_,f))}l=d.length*a}else{let d=".bones["+t[h].name+"]";n(qn,d+".position",u,"pos",r),n(jn,d+".quaternion",u,"rot",r),n(qn,d+".scale",u,"scl",r)}}return r.length===0?null:new this(s,l,r,o)}resetDuration(){let e=0;for(let t=0,n=this.tracks.length;t!==n;++t){let r=this.tracks[t];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function _v(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=(function(t){switch(t.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Xn;case"vector":case"vector2":case"vector3":case"vector4":return qn;case"color":return Po;case"quaternion":return jn;case"bool":case"boolean":return li;case"string":return ci}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+t)})(i.type);if(i.times===void 0){let t=[],n=[];pf(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var hi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Ch=class{constructor(e,t,n){let r=this,s,a=!1,o=0,l=0,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){l++,a===!1&&r.onStart!==void 0&&r.onStart(h,o,l),a=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,l),o===l&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return s?s(h):h},this.setURLModifier=function(h){return s=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],m=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return m}return null}}},yv=new Ch,Yn=class{constructor(e){this.manager=e!==void 0?e:yv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise((function(r,s){n.load(e,r,t,s)}))}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Yn.DEFAULT_MATERIAL_NAME="__DEFAULT";var Fn={},Ih=class extends Error{constructor(e,t){super(e),this.response=t}},zs=class extends Yn{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=hi.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout((()=>{t&&t(s),this.manager.itemEnd(e)}),0),s;if(Fn[e]!==void 0)return void Fn[e].push({onLoad:t,onProgress:n,onError:r});Fn[e]=[],Fn[e].push({onLoad:t,onProgress:n,onError:r});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then((c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Fn[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=d?parseInt(d):0,m=p!==0,_=0,f=new ReadableStream({start(g){(function v(){u.read().then((({done:y,value:b})=>{if(y)g.close();else{_+=b.byteLength;let R=new ProgressEvent("progress",{lengthComputable:m,loaded:_,total:p});for(let E=0,I=h.length;E<I;E++){let D=h[E];D.onProgress&&D.onProgress(R)}g.enqueue(b),v()}}),(y=>{g.error(y)}))})()}});return new Response(f)}throw new Ih(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)})).then((c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then((h=>new DOMParser().parseFromString(h,o)));case"json":return c.json();default:if(o===void 0)return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(o),u=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(u);return c.arrayBuffer().then((p=>d.decode(p)))}}})).then((c=>{hi.add(e,c);let h=Fn[e];delete Fn[e];for(let u=0,d=h.length;u<d;u++){let p=h[u];p.onLoad&&p.onLoad(c)}})).catch((c=>{let h=Fn[e];if(h===void 0)throw this.manager.itemError(e),c;delete Fn[e];for(let u=0,d=h.length;u<d;u++){let p=h[u];p.onError&&p.onError(c)}this.manager.itemError(e)})).finally((()=>{this.manager.itemEnd(e)})),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Ph=class extends Yn{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=hi.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout((function(){t&&t(a),s.manager.itemEnd(e)}),0),a;let o=As("img");function l(){h(),hi.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(u){h(),r&&r(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}};var Hr=class extends Yn{constructor(e){super(e)}load(e,t,n,r){let s=new Mt,a=new Ph(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,(function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)}),n,r),s}},Vr=class extends lt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Do=class extends Vr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(lt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Te(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},sc=new Ee,Bp=new w,Fp=new w,Hs=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ae(512,512),this.map=null,this.mapPass=null,this.matrix=new Ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Br,this._frameExtents=new ae(1,1),this._viewportCount=1,this._viewports=[new $e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Bp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Bp),Fp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Fp),t.updateMatrixWorld(),sc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(sc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Lh=class extends Hs{constructor(){super(new Et(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=2*Ur*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;n===t.fov&&r===t.aspect&&s===t.far||(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},No=class extends Vr{constructor(e,t,n=0,r=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(lt.DEFAULT_UP),this.updateMatrix(),this.target=new lt,this.distance=n,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new Lh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},zp=new Ee,vs=new w,ac=new w,Dh=class extends Hs{constructor(){super(new Et(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ae(4,2),this._viewportCount=6,this._viewports=[new $e(2,1,1,1),new $e(0,1,1,1),new $e(3,1,1,1),new $e(1,1,1,1),new $e(3,0,1,1),new $e(1,0,1,1)],this._cubeDirections=[new w(1,0,0),new w(-1,0,0),new w(0,0,1),new w(0,0,-1),new w(0,1,0),new w(0,-1,0)],this._cubeUps=[new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,0,1),new w(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),vs.setFromMatrixPosition(e.matrixWorld),n.position.copy(vs),ac.copy(n.position),ac.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ac),n.updateMatrixWorld(),r.makeTranslation(-vs.x,-vs.y,-vs.z),zp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zp)}},Uo=class extends Vr{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Dh}get power(){return 4*this.intensity*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Nh=class extends Hs{constructor(){super(new mi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Gr=class extends Vr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(lt.DEFAULT_UP),this.updateMatrix(),this.target=new lt,this.shadow=new Nh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var _i=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,r=e.length;n<r;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Oo=class extends Yn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=hi.get(e);if(a!==void 0)return s.manager.itemStart(e),a.then?void a.then((c=>{t&&t(c),s.manager.itemEnd(e)})).catch((c=>{r&&r(c)})):(setTimeout((function(){t&&t(a),s.manager.itemEnd(e)}),0),a);let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let l=fetch(e,o).then((function(c){return c.blob()})).then((function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))})).then((function(c){return hi.add(e,c),t&&t(c),s.manager.itemEnd(e),c})).catch((function(c){r&&r(c),hi.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)}));hi.add(e,l),s.manager.itemStart(e)}};var Z_=new Ee,K_=new Ee,J_=new Ee;var Q_=new w,ey=new Yt,ty=new w,ny=new w;var iy=new w,ry=new Yt,sy=new w,ay=new w;var qh="\\[\\]\\.:\\/",xv=new RegExp("["+qh+"]","g"),oc="[^"+qh+"]",bv="[^"+qh.replace("\\.","")+"]",Mv=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",oc)+/(WCOD+)?/.source.replace("WCOD",bv)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",oc)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",oc)+"$"),Sv=["material","materials","bones","map"],it=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(xv,"")}static parseTrackName(e){let t=Mv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);Sv.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[n]===void 0)return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[n]}if(c!==void 0){if(e[c]===void 0)return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[c]}}let a=e[r];if(a===void 0){let c=t.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e)}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};it.Composite=class{constructor(i,e,t){let n=t||it.parseTrackName(e);this._targetGroup=i,this._bindings=i.subscribe_(e,n)}getValue(i,e){this.bind();let t=this._targetGroup.nCachedObjects_,n=this._bindings[t];n!==void 0&&n.getValue(i,e)}setValue(i,e){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=t.length;n!==r;++n)t[n].setValue(i,e)}bind(){let i=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=i.length;e!==t;++e)i[e].bind()}unbind(){let i=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=i.length;e!==t;++e)i[e].unbind()}},it.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},it.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},it.prototype.GetterByBindingType=[it.prototype._getValue_direct,it.prototype._getValue_array,it.prototype._getValue_arrayElement,it.prototype._getValue_toArray],it.prototype.SetterByBindingTypeAndVersioning=[[it.prototype._setValue_direct,it.prototype._setValue_direct_setNeedsUpdate,it.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[it.prototype._setValue_array,it.prototype._setValue_array_setNeedsUpdate,it.prototype._setValue_array_setMatrixWorldNeedsUpdate],[it.prototype._setValue_arrayElement,it.prototype._setValue_arrayElement_setNeedsUpdate,it.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[it.prototype._setValue_fromArray,it.prototype._setValue_fromArray_setNeedsUpdate,it.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var oy=new Float32Array(1);var ly=new Ee;var cy=new ae;var hy=new w,uy=new w;var dy=new w;var py=new w,fy=new Ee,my=new Ee;var gy=new w,vy=new Te,_y=new Te;var yy=new w,xy=new w,by=new w;var My=new w,Sy=new Rs;var wy=new Ft;var Ty=new w;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var Ws=new w;function an(i,e,t,n,r,s){let a=2*Math.PI*r/4,o=Math.max(s-2*r,0),l=Math.PI/4;Ws.copy(e),Ws[n]=0,Ws.normalize();let c=.5*a/(a+o),h=1-Ws.angleTo(i)/l;return Math.sign(Ws[t])===1?h*c:o/(a+o)+c+c*(1-h)}var Go=class extends fi{constructor(e=1,t=1,n=1,r=2,s=.1){if(r=r*2+1,s=Math.min(e/2,t/2,n/2,s),super(1,1,1,r,r,r),r===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let o=new w,l=new w,c=new w(e,t,n).divideScalar(2).subScalar(s),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,p=h.length/6,m=new w,_=.5/r;for(let f=0,g=0;f<h.length;f+=3,g+=2)switch(o.fromArray(h,f),l.copy(o),l.x-=Math.sign(l.x)*_,l.y-=Math.sign(l.y)*_,l.z-=Math.sign(l.z)*_,l.normalize(),h[f+0]=c.x*Math.sign(o.x)+l.x*s,h[f+1]=c.y*Math.sign(o.y)+l.y*s,h[f+2]=c.z*Math.sign(o.z)+l.z*s,u[f+0]=l.x,u[f+1]=l.y,u[f+2]=l.z,Math.floor(f/p)){case 0:m.set(1,0,0),d[g+0]=an(m,l,"z","y",s,n),d[g+1]=1-an(m,l,"y","z",s,t);break;case 1:m.set(-1,0,0),d[g+0]=1-an(m,l,"z","y",s,n),d[g+1]=1-an(m,l,"y","z",s,t);break;case 2:m.set(0,1,0),d[g+0]=1-an(m,l,"x","z",s,e),d[g+1]=an(m,l,"z","x",s,n);break;case 3:m.set(0,-1,0),d[g+0]=1-an(m,l,"x","z",s,e),d[g+1]=1-an(m,l,"z","x",s,n);break;case 4:m.set(0,0,1),d[g+0]=1-an(m,l,"x","y",s,e),d[g+1]=1-an(m,l,"y","x",s,t);break;case 5:m.set(0,0,-1),d[g+0]=an(m,l,"x","y",s,e),d[g+1]=1-an(m,l,"y","x",s,t);break}}};function mf(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},a={},o=i[0].morphTargetsRelative,l=new et,c=0;for(let h=0;h<i.length;++h){let u=i[h],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;s[p]===void 0&&(s[p]=[]),s[p].push(u.attributes[p]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!r.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[p]===void 0&&(a[p]=[]),a[p].push(u.morphAttributes[p])}if(e){let p;if(t)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(t){let h=0,u=[];for(let d=0;d<i.length;++d){let p=i[d].index;for(let m=0;m<p.count;++m)u.push(p.getX(m)+h);h+=i[d].attributes.position.count}l.setIndex(u)}for(let h in s){let u=ff(s[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let p=[];for(let _=0;_<a[h].length;++_)p.push(a[h][_][d]);let m=ff(p);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}return l}function ff(i){let e,t,n,r=-1,s=0;for(let c=0;c<i.length;++c){let h=i[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=h.gpuType),r!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*t}let a=new e(s),o=new mt(a,t,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let u=l/t;for(let d=0,p=h.count;d<p;d++)for(let m=0;m<t;m++){let _=h.getComponent(d,m);o.setComponent(d+u,m,_)}}else a.set(h.array,l);l+=h.count*t}return r!==void 0&&(o.gpuType=r),o}function Yh(i,e){if(e===Qp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Gs||e===Bo){let t=i.getIndex();if(t===null){let a=[],o=i.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,r=[];if(e===Gs)for(let a=1;a<=n;a++)r.push(t.getX(0)),r.push(t.getX(a)),r.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(r.push(t.getX(a)),r.push(t.getX(a+1)),r.push(t.getX(a+2))):(r.push(t.getX(a+2)),r.push(t.getX(a+1)),r.push(t.getX(a)));r.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let s=i.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var x={paper:15855072,cream:16249574,slab:15590866,white:16579316,ink:5196611,inkSoft:8222828,line:12170147,sage:11122586,sageDeep:7308134,sageLight:13621442,leaf:9413506,gold:13482868,goldLight:15721918,mist:13227220,mistLight:14476515,teal:7247510,blush:15058101,blushLight:15785168,oat:14997695,wood:14468770,woodDark:12098678,terracotta:13933178,carrot:14916178,pumpkin:14853719,tomato:14250076,salmon:15706508,skin:15452584,skinDeep:13212278,hair:4864816,steel:13225160},$h=new Map,Zh=new Map;function bn(i,e={}){if(i&&i.isMaterial)return i;let t=[i,e.rough,e.metal,e.glow,e.opacity].join("|");return $h.has(t)||$h.set(t,new Cn({color:i,roughness:e.rough??.86,metalness:e.metal??0,emissive:e.glow?i:0,emissiveIntensity:e.glow??0,transparent:e.opacity!==void 0,opacity:e.opacity??1})),$h.get(t)}function Wo(i,e){return Zh.has(i)||Zh.set(i,e()),Zh.get(i)}function Xo(i,e,t){let[n=0,r=0,s=0]=t.at||[];return i.position.set(n,r+(t.center?0:e/2),s),i.rotation.set(i.rotation.x+(t.rx||0),t.ry||0,i.rotation.z+(t.rz||0)),t.scale&&i.scale.set(...t.scale),i.castShadow=t.cast!==!1,i.receiveShadow=t.receive!==!1,t.in&&t.in.add(i),i}function re(i,e,t,n,r={}){let s=Math.min(r.r??.06,Math.min(i,e,t)/2-.001),a=Wo(`b${i},${e},${t},${s}`,()=>new Go(i,e,t,2,s));return Xo(new Qe(a,bn(n,r)),e,r)}function ye(i,e,t,n={}){let r=n.rt??i,s=n.seg??24,a=Wo(`c${i},${r},${e},${s}`,()=>new gi(r,i,e,s));return Xo(new Qe(a,bn(t,n)),e,n)}function Ne(i,e,t={}){let n=Wo(`s${i}`,()=>new Bs(i,20,14));return Xo(new Qe(n,bn(e,t)),2*i*(t.scale?t.scale[1]:1),t)}function Xs(i,e,t,n={}){let r=Wo(`t${i},${e}`,()=>new Fs(i,e,10,28)),s=new Qe(r,bn(t,n));return n.upright||(s.rotation.x=Math.PI/2),Xo(s,n.upright?2*(i+e):2*e,n)}function be(i=[0,0,0],e=[],t={}){let n=new kt;return n.position.set(...i),e.forEach(r=>r&&n.add(r)),t.ry&&(n.rotation.y=t.ry),t.rx&&(n.rotation.x=t.rx),t.rz&&(n.rotation.z=t.rz),t.s&&n.scale.setScalar(t.s),t.live&&(n.userData.live=!0),t.in&&t.in.add(n),n}function gf(i){i.updateMatrixWorld(!0);let e=new Map,t=[];(function n(r,s){if(s=s||r.userData.live,r.isMesh&&!s&&!r.material.map){let a=`${r.material.uuid}|${r.castShadow}|${r.receiveShadow}`;e.has(a)||e.set(a,{mesh:r,parts:[]});let o=r.geometry.index?r.geometry.toNonIndexed():r.geometry.clone();o.deleteAttribute("uv"),o.applyMatrix4(r.matrixWorld),e.get(a).parts.push(o),t.push(r)}r.children.forEach(a=>n(a,s))})(i,!1),t.forEach(n=>n.parent.remove(n));for(let{mesh:n,parts:r}of e.values()){let s=new Qe(mf(r),n.material);s.castShadow=n.castShadow,s.receiveShadow=n.receiveShadow,i.add(s),r.forEach(a=>a.dispose())}return i}var $n=Math.PI,yi=[];function xi(i={}){let{pot:e=x.white,leaf:t=x.leaf,h:n=.9,kind:r="bush"}=i,s=be();if(ye(.15,.28,e,{rt:.2,in:s}),ye(.18,.02,x.woodDark,{at:[0,.27,0],in:s,cast:!1}),r==="tall"){ye(.02,n-.3,x.woodDark,{at:[0,.28,0],in:s,seg:8});for(let a=0;a<6;a++){let o=a*2.3,l=.45+a/6*(n-.45);Ne(.13,a%2?t:x.sage,{at:[Math.cos(o)*.14,l,Math.sin(o)*.14],scale:[1.1,.5,.75],ry:-o,rz:.5,in:s})}}else for(let[a,o,l,c]of[[0,.3,0,.22],[.14,.42,.05,.16],[-.13,.44,-.04,.17],[.02,.56,-.08,.15],[-.03,.5,.13,.13]])Ne(c,a>0?t:x.sage,{at:[a,o*(n/.9),l],in:s});return s}function jo(i=3.2,e={}){let t=be();ye(.13,i*.5,x.woodDark,{rt:.09,in:t});let n=i*.42,r=i/3.2;for(let[s,a,o,l,c]of[[0,0,0,.85,x.sage],[.5,.4,.2,.6,x.leaf],[-.45,.5,-.2,.62,x.sageLight],[.05,.95,-.05,.6,e.top??x.sage],[-.2,.2,.5,.5,x.leaf]])Ne(l*r,c,{at:[s*r,n+a*r,o*r],in:t});return t}function bi(i=.4,e=x.sage){let t=be();return Ne(i,e,{at:[0,-i*.3,0],in:t}),Ne(i*.7,x.leaf,{at:[i*.7,-i*.25,i*.15],in:t}),Ne(i*.6,x.sageLight,{at:[-i*.65,-i*.2,-i*.1],in:t}),t}function vf(i=1){let e=be([0,0,0],[],{s:i,live:!0}),t=bn(x.white,{glow:.22,rough:1});for(let[n,r,s,a]of[[0,0,0,.9],[.95,-.1,.1,.65],[-.9,-.12,-.05,.6],[.35,.4,-.2,.62],[-.4,.3,.25,.55],[1.5,-.25,0,.36]])Ne(a,t,{at:[n,r,s],in:e,cast:!1,receive:!1});return e}function _f(i=1.6,e=.7,t=.75,n=x.wood,r=x.white){let s=be();re(i,.07,e,n,{at:[0,t-.07,0],r:.03,in:s});for(let a of[-1,1])re(.07,t-.07,e-.1,r,{at:[a*(i/2-.1),0,0],r:.03,in:s});return s}function js(i=x.sage,e=x.wood){let t=be();re(.44,.08,.44,i,{at:[0,.42,0],r:.04,in:t}),re(.44,.46,.07,i,{at:[0,.5,-.2],r:.035,in:t});for(let n of[-.17,.17])for(let r of[-.17,.17])ye(.025,.42,e,{at:[n,0,r],in:t,seg:8});return t}function yf(i=2,e=x.sage,t=[x.cream,x.gold]){let n=be();re(i,.3,.85,e,{at:[0,.1,0],r:.1,in:n}),re(i,.55,.24,e,{at:[0,.3,-.33],r:.1,in:n});for(let a of[-1,1]){re(.22,.5,.85,e,{at:[a*(i/2-.11),.1,0],r:.1,in:n});for(let o of[-.32,.32])ye(.035,.1,x.woodDark,{at:[a*(i/2-.15),0,o],in:n,seg:8})}let r=Math.max(2,Math.round((i-.44)/.75)),s=(i-.48)/r;for(let a=0;a<r;a++)re(s-.03,.12,.6,e,{at:[-i/2+.24+s*(a+.5),.38,.08],r:.05,in:n});return t.forEach((a,o)=>re(.36,.34,.12,a,{at:[(o?1:-1)*(i/2-.45),.5,-.12],r:.06,rx:-.25,ry:(o?-1:1)*.2,in:n})),n}function Kh(i=.45,e=.42,t=x.wood,n=x.white){let r=be();return ye(i,.05,t,{at:[0,e-.05,0],in:r,seg:32}),ye(.05,e-.05,n,{in:r}),ye(i*.5,.03,n,{in:r}),r}function qs(i=1.6,e=2,t=.34,n=4,r=x.white,s=x.oat){let a=be();re(i,e,.04,s,{at:[0,0,-t/2+.02],r:.02,in:a});for(let o of[-1,1])re(.05,e,t,r,{at:[o*(i/2-.025),0,0],r:.02,in:a});for(let o=0;o<=n;o++)re(i,.05,t,r,{at:[0,o*(e-.05)/n,0],r:.02,in:a});return a.userData.rowY=o=>o*(e-.05)/n+.05,a}function xf(i=1.2,e=x.wood){let t=be();re(i,.05,.26,e,{r:.02,in:t});for(let n of[-1,1])re(.04,.14,.2,e,{at:[n*(i/2-.15),-.14,-.02],r:.015,in:t});return t}function qo(i=2,e=.65,t=.9,n=x.white,r=x.wood,s=x.gold){let a=be();re(i,t-.06,e,n,{r:.04,in:a}),re(i+.04,.07,e+.04,r,{at:[0,t-.07,0],r:.03,in:a});let o=Math.max(1,Math.round(i/.6));for(let l=0;l<o;l++){let c=-i/2+i/o*(l+.5);re(.16,.025,.03,s,{at:[c,t*.66,e/2+.012],r:.01,in:a,metal:.3,rough:.5}),l&&re(.012,t-.2,.01,x.line,{at:[c-i/o/2,.07,e/2+.002],r:.004,in:a,cast:!1})}return a}function bf(i=x.mist){let e=be();re(.78,1.95,.7,i,{r:.08,in:e}),re(.74,.015,.01,x.line,{at:[0,1.25,.352],r:.004,in:e,cast:!1});for(let t of[.85,1.4])re(.03,.3,.035,x.white,{at:[-.28,t,.365],r:.012,in:e});return e}function Jh(i=x.mistLight){let e=be();re(.38,.025,.26,x.steel,{r:.01,in:e,metal:.3,rough:.5});let t=be([0,.02,-.13],[],{rx:-.22,in:e});return re(.38,.26,.02,x.steel,{r:.01,in:t,metal:.3,rough:.5}),re(.33,.2,.006,i,{at:[0,.03,.012],r:.002,in:t,glow:.55,cast:!1}),e}function Yo(i=x.goldLight){let e=be();return ye(.15,.03,x.inkSoft,{in:e}),ye(.015,1.45,x.inkSoft,{in:e,seg:8}),ye(.22,.26,i,{rt:.13,at:[0,1.4,0],in:e,glow:.5,cast:!1}),e}function Ys(i=.7,e=x.goldLight){let t=be();return ye(.008,i,x.inkSoft,{at:[0,-i,0],in:t,seg:6,cast:!1}),ye(.2,.18,e,{rt:.06,at:[0,-i-.18,0],in:t,glow:.55,cast:!1}),t}function ji(i=2,e=1.4,t=x.cream,n=!1){return n?ye(i/2,.025,t,{seg:40,cast:!1}):re(i,.025,e,t,{r:.012,cast:!1})}function $o(i=.5,e=.6,t=x.sageLight,n=x.wood,r){let s=be();return re(i,e,.04,n,{center:!0,r:.015,in:s}),re(i-.08,e-.08,.045,t,{center:!0,r:.008,in:s,cast:!1}),r&&Ne(Math.min(i,e)*.2,r,{center:!0,at:[0,-e*.04,.015],scale:[1,1,.25],in:s,cast:!1}),s}function Mf(i=.7,e=15134448){let t=be();return ye(i+.07,.07,x.white,{rx:$n/2,center:!0,seg:40,in:t}),ye(i,.075,e,{rx:$n/2,center:!0,seg:40,in:t,glow:.6,cast:!1}),re(.035,i*2,.085,x.white,{center:!0,r:.01,in:t,cast:!1}),re(i*2,.035,.085,x.white,{center:!0,r:.01,in:t,cast:!1}),t}function Sf(i=1.2,e=1.3,t=15134448){let n=be();return re(i+.12,e+.12,.07,x.white,{center:!0,r:.03,in:n}),re(i,e,.075,t,{center:!0,r:.02,in:n,glow:.6,cast:!1}),re(.035,e,.085,x.white,{center:!0,r:.01,in:n,cast:!1}),re(i+.2,.05,.16,x.white,{center:!0,at:[0,-e/2-.06,.05],r:.02,in:n}),n}function Zt(i=.14,e=x.sage,t){let n=be();return ye(i*.6,i*.62,e,{rt:i,in:n}),t&&ye(i*.86,.02,t,{at:[0,i*.56,0],in:n,cast:!1}),n}function Ht(i=.08,e=.2,t=x.gold,n=x.woodDark){let r=be();return ye(i,e,15660014,{in:r,opacity:.42,rough:.15}),ye(i*.84,e*.62,t,{at:[0,.012,0],in:r,cast:!1}),ye(i*.92,.035,n,{at:[0,e,0],in:r}),r}function In(i=5,e=[x.sage,x.blush,x.gold,x.mist,x.cream,x.teal]){let t=be(),n=0;for(let r=0;r<i;r++){let s=.04+r*7%3*.012,a=.2+r*5%4*.022;re(s,a,.16,e[r%e.length],{at:[n+s/2,0,0],r:.008,in:t}),n+=s+.004}return t.userData.width=n,t}function Xr(i=.5,e=[x.carrot,x.leaf,x.tomato,x.pumpkin]){let t=be();return re(i,.26,i*.72,x.wood,{r:.03,in:t}),re(i-.06,.02,i*.72-.06,x.woodDark,{at:[0,.245,0],r:.008,in:t,cast:!1}),e.forEach((n,r)=>Ne(.075+r%2*.015,n,{at:[(-.3+r%3*.3)*i,.22,(r%2-.5)*.3*i],in:t})),t}function wf(i={}){let e=be(),t={metal:.35,rough:.45};ye(.18,.2,x.steel,{in:e,...t}),ye(.19,.025,x.steel,{at:[0,.2,0],in:e,...t}),Ne(.03,x.ink,{at:[0,.22,0],in:e});for(let n of[-1,1])re(.08,.025,.05,x.ink,{at:[n*.21,.13,0],r:.01,in:e});if(i.steam!==!1){let n=be([0,.3,0],[],{live:!0,in:e}),r=bn(x.white,{opacity:.55,rough:1}),s=[0,1,2].map(a=>Ne(.07,r,{in:n,cast:!1,receive:!1,center:!0,at:[(a-1)*.07,0,0]}));yi.push(a=>s.forEach((o,l)=>{let c=(a*.35+l/3)%1;o.position.y=c*.8,o.position.x=(l-1)*.07+Math.sin(c*6+l)*.05,o.scale.setScalar(Math.max(.01,.5+c*.9-Math.max(0,c-.75)*5.5))}))}return e}function Tf(i=x.sage){let e=be();for(let t of[-.5,.5])Xs(.17,.065,x.ink,{upright:!0,at:[t,0,0],in:e}),ye(.09,.08,x.steel,{rx:$n/2,center:!0,at:[t,.235,0],in:e});return re(.7,.09,.3,i,{at:[0,.2,0],r:.04,in:e}),re(.56,.32,.32,i,{at:[-.34,.24,0],r:.1,in:e}),re(.46,.09,.28,x.ink,{at:[-.26,.56,0],r:.04,in:e}),re(.12,.7,.26,i,{at:[.42,.2,0],r:.05,rz:-.22,in:e}),re(.06,.05,.56,x.ink,{at:[.34,.92,0],r:.02,in:e}),Ne(.06,x.goldLight,{at:[.52,.66,0],in:e,glow:.8}),re(.48,.44,.46,x.cream,{at:[-.52,.66,0],r:.05,in:e}),re(.5,.07,.48,i,{at:[-.52,1.07,0],r:.03,in:e}),Ne(.09,x.gold,{center:!0,at:[-.52,.88,.235],scale:[1,1,.15],in:e,cast:!1}),e}function Ef(i=3,e=2.4){let t=be();for(let n=0;n<i;n++){let r=(n-(i-1)/2)*.62;re(e,.16,.44,12755580,{at:[0,0,r],r:.07,in:t});let s=Math.floor(e/.34);for(let a=0;a<s;a++){let o=-e/2+.24+a*((e-.48)/(s-1));n%3===0?(ye(.045,.06,x.carrot,{at:[o,.13,r],in:t,seg:10}),Ne(.09,x.leaf,{at:[o,.17,r],scale:[.8,1.5,.8],in:t})):n%3===1?(Ne(.12,x.sageLight,{at:[o,.1,r],scale:[1,.75,1],in:t}),Ne(.075,x.sage,{at:[o,.17,r],in:t})):(Ne(.11,x.pumpkin,{at:[o,.12,r],scale:[1,.78,1],in:t}),ye(.012,.05,x.leaf,{at:[o,.28,r],in:t,seg:6}))}}return t}function Af(i=x.oat){let e=be();return re(.6,.07,.6,i,{r:.03,in:e}),ye(.06,.8,x.wood,{at:[-.14,.07,-.1],in:e}),re(.5,.06,.5,i,{at:[-.1,.87,-.06],r:.03,in:e}),ye(.06,.55,x.wood,{at:[.08,.93,-.12],in:e}),re(.42,.06,.42,i,{at:[.1,1.48,-.1],r:.03,in:e}),ye(.004,.24,x.inkSoft,{at:[.12,.63,.14],in:e,seg:5,cast:!1}),Ne(.045,x.blush,{at:[.12,.56,.14],in:e}),e}function Rf(i=.42,e=x.blush,t=x.cream){let n=be();return Xs(i-.09,.1,e,{in:n}),ye(i-.1,.09,t,{in:n}),n}function Cf(i=.3,e=x.woodDark){let t=be();ye(i,.05,e,{rx:$n/2,center:!0,seg:36,in:t}),ye(i-.035,.055,x.white,{rx:$n/2,center:!0,seg:36,in:t,cast:!1});let n=(r,s,a)=>{let o=be([0,0,.032],[],{rz:-a,in:t});re(s,r,.012,x.ink,{r:.004,in:o,cast:!1})};return n(i*.5,.028,-.03*$n),n(i*.74,.02,-$n/6),Ne(.022,x.gold,{center:!0,at:[0,0,.04],in:t,cast:!1}),t}function If(i=4,e=3,t=[x.gold,x.blush,x.sageLight,x.mist]){let n=be();for(let r=0;r<e;r++)for(let s=0;s<i;s++)(r*5+s*3)%7!==0&&re(.15,.15,.012,t[(r*3+s)%t.length],{center:!0,at:[s*.2,-r*.2,0],r:.004,rz:((r+s)%3-1)*.06,in:n,cast:!1});return n}function Qh(i=1.4,e=x.wood){let t=be();re(i,.07,.4,e,{at:[0,.4,0],r:.03,in:t});for(let n of[-1,1])re(.07,.4,.36,x.white,{at:[n*(i/2-.16),0,0],r:.03,in:t});return t}function eu(i=1.4,e=x.white,t=[x.blush,x.gold]){let n=be();re(i,.36,.42,e,{r:.05,in:n});let r=Math.round(i/.36);for(let s=0;s<r;s++){let a=-i/2+i/r*(s+.5);Ne(.2,s%2?x.sage:x.leaf,{at:[a,.24,0],in:n}),Ne(.045,t[s%t.length],{at:[a+.06,.6,.08],in:n}),Ne(.04,t[(s+1)%t.length],{at:[a-.09,.56,-.04],in:n})}return n}function $s(i=.22,e=[x.blush,x.sage,x.gold,x.mist]){let t=be();return ye(i*.8,i*1.1,14270356,{rt:i,in:t}),Xs(i,.02,x.woodDark,{at:[0,i*1.08,0],in:t}),e.forEach((n,r)=>Ne(.085,n,{at:[Math.cos(r*1.7)*i*.45,i*.95+r%2*.05,Math.sin(r*1.7)*i*.45],in:t})),t}function Zs(i=x.cream,e=x.gold){let t=be();return re(.3,.36,.14,i,{r:.02,in:t}),Xs(.07,.01,x.woodDark,{upright:!0,at:[0,.3,0],in:t,cast:!1}),Ne(.06,e,{center:!0,at:[0,.18,.07],scale:[1,1,.15],in:t,cast:!1}),t}function Pf(i=[x.sage,x.oat,x.mist,x.blush,x.gold]){let e=be();for(let t of[-1,1])ye(.025,1.5,x.wood,{at:[t*.7,0,0],in:e,seg:8}),re(.08,.04,.5,x.wood,{at:[t*.7,0,0],r:.015,in:e});return ye(.02,1.44,x.woodDark,{rz:$n/2,center:!0,at:[0,1.46,0],in:e,seg:8}),i.forEach((t,n)=>{let r=-.52+n*(1.04/(i.length-1));re(.05,.34,.34,t,{at:[r,1.02,0],r:.02,in:e}),re(.05,.12,.5,t,{at:[r,1.25,0],r:.02,in:e}),ye(.006,.09,x.inkSoft,{at:[r,1.36,0],in:e,seg:5,cast:!1})}),e}function Lf(i,e,t=9,n=.35){let r=be(),s=bn(x.goldLight,{glow:1.1});yi.push(a=>{s.emissiveIntensity=.95+Math.sin(a*2.2)*.45});for(let a=0;a<=t;a++){let o=a/t;Ne(.05,s,{center:!0,cast:!1,in:r,at:[i[0]+(e[0]-i[0])*o,i[1]+(e[1]-i[1])*o-Math.sin(o*$n)*n,i[2]+(e[2]-i[2])*o]})}return r}var Zo=class extends Yn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new ou(t)}),this.register(function(t){return new lu(t)}),this.register(function(t){return new vu(t)}),this.register(function(t){return new _u(t)}),this.register(function(t){return new yu(t)}),this.register(function(t){return new hu(t)}),this.register(function(t){return new uu(t)}),this.register(function(t){return new du(t)}),this.register(function(t){return new pu(t)}),this.register(function(t){return new au(t)}),this.register(function(t){return new fu(t)}),this.register(function(t){return new cu(t)}),this.register(function(t){return new gu(t)}),this.register(function(t){return new mu(t)}),this.register(function(t){return new ru(t)}),this.register(function(t){return new xu(t)}),this.register(function(t){return new bu(t)})}load(e,t,n,r){let s=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=_i.extractUrlBase(e);a=_i.resolveURL(c,this.path)}else a=_i.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){r?r(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new zs(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,a,function(h){t(h),s.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let s,a={},o={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===kf){try{a[ze.KHR_BINARY_GLTF]=new Mu(e)}catch(u){r&&r(u);return}s=JSON.parse(a[ze.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Cu(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){let u=s.extensionsUsed[h],d=s.extensionsRequired||[];switch(u){case ze.KHR_MATERIALS_UNLIT:a[u]=new su;break;case ze.KHR_DRACO_MESH_COMPRESSION:a[u]=new Su(s,this.dracoLoader);break;case ze.KHR_TEXTURE_TRANSFORM:a[u]=new wu;break;case ze.KHR_MESH_QUANTIZATION:a[u]=new Tu;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,r)}parseAsync(e,t){let n=this;return new Promise(function(r,s){n.parse(e,t,r,s)})}};function Tv(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}var ze={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},ru=class{constructor(e){this.parser=e,this.name=ze.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){let s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,r=t.cache.get(n);if(r)return r;let s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e],c,h=new Te(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],It);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Gr(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Uo(h),c.distance=u;break;case"spot":c=new No(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Zn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(c),t.cache.add(n,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},su=class{constructor(){this.name=ze.KHR_MATERIALS_UNLIT}getMaterialType(){return An}extendParams(e,t,n){let r=[];e.color=new Te(1,1,1),e.opacity=1;let s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],It),e.opacity=a[3]}s.baseColorTexture!==void 0&&r.push(n.assignTexture(e,"map",s.baseColorTexture,ot))}return Promise.all(r)}},au=class{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}},ou=class{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$t}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=[],a=r.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ae(o,o)}return Promise.all(s)}},lu=class{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$t}extendMaterialParams(e,t){let r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=r.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}},cu=class{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$t}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=[],a=r.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}},hu=class{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$t}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=[];t.sheenColor=new Te(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=r.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],It)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,ot)),a.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}},uu=class{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$t}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=[],a=r.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(s)}},du=class{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$t}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=[],a=r.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Te().setRGB(o[0],o[1],o[2],It),Promise.all(s)}},pu=class{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$t}extendMaterialParams(e,t){let r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}},fu=class{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$t}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=[],a=r.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new Te().setRGB(o[0],o[1],o[2],It),a.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,ot)),Promise.all(s)}},mu=class{constructor(e){this.parser=e,this.name=ze.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$t}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=[],a=r.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(s)}},gu=class{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$t}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=[],a=r.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(s)}},vu=class{constructor(e){this.parser=e,this.name=ze.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;let s=r.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}},_u=class{constructor(e){this.parser=e,this.name=ze.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;let a=s.extensions[t],o=r.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},yu=class{constructor(e){this.parser=e,this.name=ze.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;let a=s.extensions[t],o=r.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},xu=class{constructor(e){this.name=ze.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let r=n.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){let l=r.byteOffset||0,c=r.byteLength||0,h=r.count,u=r.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,r.mode,r.filter).then(function(p){return p.buffer}):a.ready.then(function(){let p=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(p),h,u,d,r.mode,r.filter),p})})}else return null}},bu=class{constructor(e){this.name=ze.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let r=t.meshes[n.mesh];for(let c of r.primitives)if(c.mode!==on.TRIANGLES&&c.mode!==on.TRIANGLE_STRIP&&c.mode!==on.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,p=[];for(let m of u){let _=new Ee,f=new w,g=new Yt,v=new w(1,1,1),y=new mo(m.geometry,m.material,d);for(let b=0;b<d;b++)l.TRANSLATION&&f.fromBufferAttribute(l.TRANSLATION,b),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,b),l.SCALE&&v.fromBufferAttribute(l.SCALE,b),y.setMatrixAt(b,_.compose(f,g,v));for(let b in l)if(b==="_COLOR_0"){let R=l[b];y.instanceColor=new Gi(R.array,R.itemSize,R.normalized)}else b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"&&m.geometry.setAttribute(b,l[b]);lt.prototype.copy.call(y,m),this.parser.assignFinalMaterial(y),p.push(y)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}},kf="glTF",Ks=12,Df={JSON:1313821514,BIN:5130562},Mu=class{constructor(e){this.name=ze.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Ks),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==kf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let r=this.header.length-Ks,s=new DataView(e,Ks),a=0;for(;a<r;){let o=s.getUint32(a,!0);a+=4;let l=s.getUint32(a,!0);if(a+=4,l===Df.JSON){let c=new Uint8Array(e,Ks+a,o);this.content=n.decode(c)}else if(l===Df.BIN){let c=Ks+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Su=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ze.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let h in a){let u=Au[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=Au[h]||h.toLowerCase();if(a[h]!==void 0){let d=n.accessors[e.attributes[h]],p=jr[d.componentType];c[u]=p.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u,d){r.decodeDracoFile(h,function(p){for(let m in p.attributes){let _=p.attributes[m],f=l[m];f!==void 0&&(_.normalized=f)}u(p)},o,c,It,d)})})}},wu=class{constructor(){this.name=ze.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Tu=class{constructor(){this.name=ze.KHR_MESH_QUANTIZATION}},Ko=class extends vi{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let a=0;a!==r;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=r-t,u=(n-t)/h,d=u*u,p=d*u,m=e*c,_=m-c,f=-2*p+3*d,g=p-d,v=1-f,y=g-d+u;for(let b=0;b!==o;b++){let R=a[_+b+o],E=a[_+b+l]*h,I=a[m+b+o],D=a[m+b]*h;s[b]=v*R+y*E+f*I+g*D}return s}},Ev=new Yt,Eu=class extends Ko{interpolate_(e,t,n,r){let s=super.interpolate_(e,t,n,r);return Ev.fromArray(s).normalize().toArray(s),s}},on={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},jr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Nf={9728:Bt,9729:qt,9984:kh,9985:ys,9986:Sr,9987:Vn},Uf={33071:Fi,33648:ws,10497:Bi},tu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Au={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Mi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Av={CUBICSPLINE:void 0,LINEAR:Dr,STEP:Lr},nu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Rv(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Cn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Uh})),i.DefaultMaterial}function qi(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Zn(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Cv(i,e,t){let n=!1,r=!1,s=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(r=!0),u.COLOR_0!==void 0&&(s=!0),n&&r&&s)break}if(!n&&!r&&!s)return Promise.resolve(i);let a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;a.push(d)}if(r){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;o.push(d)}if(s){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],d=c[2];return n&&(i.morphAttributes.position=h),r&&(i.morphAttributes.normal=u),s&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function Iv(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,r=t.length;n<r;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Pv(i){let e,t=i.extensions&&i.extensions[ze.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+iu(t.attributes):e=i.indices+":"+iu(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,r=i.targets.length;n<r;n++)e+=":"+iu(i.targets[n]);return e}function iu(i){let e="",t=Object.keys(i).sort();for(let n=0,r=t.length;n<r;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Ru(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Lv(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var Dv=new Ee,Cu=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Tv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=-1,s=!1,a=-1;if(typeof navigator<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);r=n&&l?parseInt(l[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&r<17||s&&a<98?this.textureLoader=new Hr(this.options.manager):this.textureLoader=new Oo(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new zs(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][r.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:r.asset,parser:n,userData:{}};return qi(s,o,r),Zn(o,r),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){let a=t[r].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let r=0,s=e.length;r<s;r++){let a=e[r];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let r=n.clone(),s=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,h]of a.children.entries())s(h,o.children[c])};return s(n,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let r=e(t[n]);if(r)return r}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let r=0;r<t.length;r++){let s=e(t[r]);s&&n.push(s)}return n}getDependency(e,t){let n=e+":"+t,r=this.cache.get(n);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ze.KHR_BINARY_GLTF].body);let r=this.options;return new Promise(function(s,a){n.load(_i.resolveURL(t.uri,r.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let r=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+r)})}loadAccessor(e){let t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){let a=tu[r.type],o=jr[r.componentType],l=r.normalized===!0,c=new o(r.count*a);return Promise.resolve(new mt(c,a,l))}let s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(a){let o=a[0],l=tu[r.type],c=jr[r.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=r.byteOffset||0,p=r.bufferView!==void 0?n.bufferViews[r.bufferView].byteStride:void 0,m=r.normalized===!0,_,f;if(p&&p!==u){let g=Math.floor(d/p),v="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+g+":"+r.count,y=t.cache.get(v);y||(_=new c(o,g*p,r.count*p/h),y=new Fr(_,p/h),t.cache.add(v,y)),f=new Vi(y,l,d%p/h,m)}else o===null?_=new c(r.count*l):_=new c(o,d,r.count*l),f=new mt(_,l,m);if(r.sparse!==void 0){let g=tu.SCALAR,v=jr[r.sparse.indices.componentType],y=r.sparse.indices.byteOffset||0,b=r.sparse.values.byteOffset||0,R=new v(a[1],y,r.sparse.count*g),E=new c(a[2],b,r.sparse.count*l);o!==null&&(f=new mt(f.array.slice(),f.itemSize,f.normalized)),f.normalized=!1;for(let I=0,D=R.length;I<D;I++){let O=R[I];if(f.setX(O,E[I*l]),l>=2&&f.setY(O,E[I*l+1]),l>=3&&f.setZ(O,E[I*l+2]),l>=4&&f.setW(O,E[I*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}f.normalized=m}return f})}loadTexture(e){let t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){let r=this,s=this.json,a=s.textures[e],o=s.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(s.samplers||{})[a.sampler]||{};return h.magFilter=Nf[d.magFilter]||qt,h.minFilter=Nf[d.minFilter]||Vn,h.wrapS=Uf[d.wrapS]||Bi,h.wrapT=Uf[d.wrapT]||Bi,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Bt&&h.minFilter!==qt,r.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=r.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(u){c=!0;let d=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(d,p){let m=d;t.isImageBitmapLoader===!0&&(m=function(_){let f=new Mt(_);f.needsUpdate=!0,d(f)}),t.load(_i.resolveURL(u,s.path),m,void 0,p)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),Zn(u,a),u.userData.mimeType=a.mimeType||Lv(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,r){let s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[ze.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[ze.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=s.associations.get(a);a=s.extensions[ze.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,l)}}return r!==void 0&&(a.colorSpace=r),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Ls,Ot.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Ps,Ot.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(r||s||a){let o="ClonedMaterial:"+n.uuid+":";r&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),s&&(l.vertexColors=!0),a&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Cn}loadMaterial(e){let t=this,n=this.json,r=this.extensions,s=n.materials[e],a,o={},l=s.extensions||{},c=[];if(l[ze.KHR_MATERIALS_UNLIT]){let u=r[ze.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,s,t))}else{let u=s.pbrMetallicRoughness||{};if(o.color=new Te(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],It),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,ot)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=Oh);let h=s.alphaMode||nu.OPAQUE;if(h===nu.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===nu.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==An&&(c.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new ae(1,1),s.normalTexture.scale!==void 0)){let u=s.normalTexture.scale;o.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&a!==An&&(c.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==An){let u=s.emissiveFactor;o.emissive=new Te().setRGB(u[0],u[1],u[2],It)}return s.emissiveTexture!==void 0&&a!==An&&c.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,ot)),Promise.all(c).then(function(){let u=new a(o);return s.name&&(u.name=s.name),Zn(u,s),t.associations.set(u,{materials:e}),s.extensions&&qi(r,u,s),u})}createUniqueName(e){let t=it.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,r=this.primitiveCache;function s(o){return n[ze.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Of(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],h=Pv(c),u=r[h];if(u)a.push(u.promise);else{let d;c.extensions&&c.extensions[ze.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=Of(new et,c,t),r[h]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,r=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let h=a[l].material===void 0?Rv(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let p=0,m=h.length;p<m;p++){let _=h[p],f=a[p],g,v=c[p];if(f.mode===on.TRIANGLES||f.mode===on.TRIANGLE_STRIP||f.mode===on.TRIANGLE_FAN||f.mode===void 0)g=s.isSkinnedMesh===!0?new uo(_,v):new Qe(_,v),g.isSkinnedMesh===!0&&g.normalizeSkinWeights(),f.mode===on.TRIANGLE_STRIP?g.geometry=Yh(g.geometry,Bo):f.mode===on.TRIANGLE_FAN&&(g.geometry=Yh(g.geometry,Gs));else if(f.mode===on.LINES)g=new _o(_,v);else if(f.mode===on.LINE_STRIP)g=new zr(_,v);else if(f.mode===on.LINE_LOOP)g=new yo(_,v);else if(f.mode===on.POINTS)g=new xo(_,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+f.mode);Object.keys(g.geometry.morphAttributes).length>0&&Iv(g,s),g.name=t.createUniqueName(s.name||"mesh_"+e),Zn(g,s),f.extensions&&qi(r,g,f),t.assignFinalMaterial(g),u.push(g)}for(let p=0,m=u.length;p<m;p++)t.associations.set(u[p],{meshes:e,primitives:p});if(u.length===1)return s.extensions&&qi(r,u[0],s),u[0];let d=new kt;s.extensions&&qi(r,d,s),t.associations.set(d,{meshes:e});for(let p=0,m=u.length;p<m;p++)d.add(u[p]);return d})}loadCamera(e){let t,n=this.json.cameras[e],r=n[n.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Et(ef.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type==="orthographic"&&(t=new mi(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Zn(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let r=0,s=t.joints.length;r<s;r++)n.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(r){let s=r.pop(),a=r,o=[],l=[];for(let c=0,h=a.length;c<h;c++){let u=a[c];if(u){o.push(u);let d=new Ee;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new fo(o,l)})}loadAnimation(e){let t=this.json,n=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,d=r.channels.length;u<d;u++){let p=r.channels[u],m=r.samplers[p.sampler],_=p.target,f=_.node,g=r.parameters!==void 0?r.parameters[m.input]:m.input,v=r.parameters!==void 0?r.parameters[m.output]:m.output;_.node!==void 0&&(a.push(this.getDependency("node",f)),o.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",v)),c.push(m),h.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let d=u[0],p=u[1],m=u[2],_=u[3],f=u[4],g=[];for(let v=0,y=d.length;v<y;v++){let b=d[v],R=p[v],E=m[v],I=_[v],D=f[v];if(b===void 0)continue;b.updateMatrix&&b.updateMatrix();let O=n._createAnimationTracks(b,R,E,I,D);if(O)for(let H=0;H<O.length;H++)g.push(O[H])}return new Lo(s,void 0,g)})}createNodeMesh(e){let t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency("mesh",r.mesh).then(function(s){let a=n._getNodeRef(n.meshCache,r.mesh,s);return r.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=r.weights.length;l<c;l++)o.morphTargetInfluences[l]=r.weights[l]}),a})}loadNode(e){let t=this.json,n=this,r=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=r.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));let l=r.skin===void 0?Promise.resolve(null):n.getDependency("skin",r.skin);return Promise.all([s,Promise.all(a),l]).then(function(c){let h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(d,Dv)});for(let p=0,m=u.length;p<m;p++)h.add(u[p]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let s=t.nodes[e],a=s.name?r.createUniqueName(s.name):"",o=[],l=r._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),s.camera!==void 0&&o.push(r.getDependency("camera",s.camera).then(function(c){return r._getNodeRef(r.cameraCache,s.camera,c)})),r._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(s.isBone===!0?h=new Is:c.length>1?h=new kt:c.length===1?h=c[0]:h=new lt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(s.name&&(h.userData.name=s.name,h.name=a),Zn(h,s),s.extensions&&qi(n,h,s),s.matrix!==void 0){let u=new Ee;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);return r.associations.has(h)||r.associations.set(h,{}),r.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],r=this,s=new kt;n.name&&(s.name=r.createUniqueName(n.name)),Zn(s,n),n.extensions&&qi(t,s,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(r.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++)s.add(l[h]);let c=h=>{let u=new Map;for(let[d,p]of r.associations)(d instanceof Ot||d instanceof Mt)&&u.set(d,p);return h.traverse(d=>{let p=r.associations.get(d);p!=null&&u.set(d,p)}),u};return r.associations=c(s),s})}_createAnimationTracks(e,t,n,r,s){let a=[],o=e.name?e.name:e.uuid,l=[];Mi[s.path]===Mi.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(o);let c;switch(Mi[s.path]){case Mi.weights:c=Xn;break;case Mi.rotation:c=jn;break;case Mi.position:case Mi.scale:c=qn;break;default:n.itemSize===1?c=Xn:c=qn;break}let h=r.interpolation!==void 0?Av[r.interpolation]:Dr,u=this._getArrayFromAccessor(n);for(let d=0,p=l.length;d<p;d++){let m=new c(l[d]+"."+Mi[s.path],t.array,u,h);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),a.push(m)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Ru(t.constructor),r=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)r[s]=t[s]*n;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let r=this instanceof jn?Eu:Ko;return new r(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Nv(i,e,t){let n=e.attributes,r=new Ft;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(r.set(new w(l[0],l[1],l[2]),new w(c[0],c[1],c[2])),o.normalized){let h=Ru(jr[o.componentType]);r.min.multiplyScalar(h),r.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=e.targets;if(s!==void 0){let o=new w,l=new w;for(let c=0,h=s.length;c<h;c++){let u=s[c];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],p=d.min,m=d.max;if(p!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(m[2]))),d.normalized){let _=Ru(jr[d.componentType]);l.multiplyScalar(_)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(o)}i.boundingBox=r;let a=new zt;r.getCenter(a.center),a.radius=r.min.distanceTo(r.max)/2,i.boundingSphere=a}function Of(i,e,t){let n=e.attributes,r=[];function s(a,o){return t.getDependency("accessor",a).then(function(l){i.setAttribute(o,l)})}for(let a in n){let o=Au[a]||a.toLowerCase();o in i.attributes||r.push(s(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});r.push(a)}return Ge.workingColorSpace!==It&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ge.workingColorSpace}" not supported.`),Zn(i,e),Nv(i,e,t),Promise.all(r).then(function(){return e.targets!==void 0?Cv(i,e.targets,t):i})}var Uv=.13,Iu=null,Ff=0;async function zf(i){let e=await new Zo().loadAsync(i);return Iu=new Map(e.scene.children.map(t=>[t.name,t])),e.scene.traverse(t=>{t.isMesh&&(t.castShadow=!0,t.receiveShadow=!t.name.includes("eyes"))}),Iu}function Hf(i){let e=Iu?.get(i);if(!e)return null;let t=e.clone(!0),n={root:t};return t.traverse(r=>{let s=r.name.split("__")[1];s&&(n[s.replace(/_\d+$/,"")]=r)}),n}var dt=(i,e,t=0)=>Math.sin(i*e+t);function Yi(i,e,t,n){let r=(i+n)%e;return r<t?Math.sin(r/t*Math.PI):0}var Bf={dog:(i,e,t,n)=>{i.rotation[n.low?"y":"z"]=dt(e,n.calm?2.2:9,t)*(n.calm?.18:.5)},cat:(i,e,t)=>{i.rotation.y=dt(e,1.4,t)*.22,i.rotation.x=dt(e,.9,t)*.06},pig:(i,e,t)=>{i.rotation.z=dt(e,11,t)*.3*Yi(e,3.2,1.2,t)},deer:(i,e,t)=>{i.rotation.y=Yi(e,4.5,.5,t)*dt(e,26)*.5}},Ov={type:(i,e,t)=>{i.armL.rotation.x=dt(e,15,t)*.05,i.armR.rotation.x=dt(e,13,t+2)*.05},stir:(i,e,t)=>{i.armR.rotation.y=dt(e,3.4,t)*.22,i.armR.rotation.x=Math.cos(e*3.4+t)*.14,i.armL.rotation.x=dt(e,1.1,t)*.05},wave:(i,e,t)=>{i.armR.rotation.z=dt(e,7,t)*.28*(.35+Yi(e,5,2.4,t))},dig:(i,e,t)=>{let n=dt(e,2.2,t)*.22;i.armL.rotation.x=n,i.armR.rotation.x=n},rest:(i,e,t)=>{i.armL.rotation.x=dt(e,.9,t)*.03,i.armR.rotation.x=dt(e,.8,t+1)*.03}};function Vf(i,e,t){let n=Ff+=2.399,{root:r,body:s,head:a,eyes:o,tail:l,earL:c,earR:h}=i,u=e.kind||"person",d=e.look??(u==="person"?.22:.3),p=r.position.clone(),m=r.rotation.y,_=3.2+n%2.5;t.push(f=>{if(s&&(s.scale.y=1+dt(f,e.calm?1.1:1.9,n)*.012),o&&(o.scale.y=e.calm?.14:(f+n)%_<Uv?.12:1),a&&(u==="chicken"?a.rotation.x=Math.pow(Math.max(0,dt(f,2.6,n)),8)*1.1:(a.rotation.y=(dt(f,.45,n)+dt(f,.19,n*2)*.5)*d,a.rotation.x=dt(f,.6,n+1)*.05+(e.nod?Yi(f,6,1.2,n)*.18:0),a.rotation.z=u==="person"?0:Yi(f,7.5,1.6,n)*.26)),l&&Bf[u]&&Bf[u](l,f,n,e),c&&h){let g=u==="dog"?dt(f,2.1,n)*.06:Yi(f,5.3,.35,n)*.5;c.rotation.z=-g,h.rotation.z=g*(u==="dog"?1:.4)}if(i.armL&&i.armR&&Ov[e.arms||"rest"](i,f,n),e.path){let[g,v]=e.path,y=e.lap||9,b=(f+n)%y/y,R=b<.5,E=R?b*2:2-b*2,I=E*E*(3-2*E);r.position.x=g[0]+(v[0]-g[0])*I,r.position.z=g[1]+(v[1]-g[1])*I,r.position.y=p.y+Math.abs(dt(f,9,n))*.035*Math.sin(E*Math.PI);let D=Math.atan2(v[0]-g[0],v[1]-g[1]);r.rotation.y=R?D:D+Math.PI}else e.hop&&(r.position.y=p.y+Math.abs(dt(f,7,n))*.09*Yi(f,e.hop,1.3,n),r.rotation.y=m+dt(f,.7,n)*.05)})}function Gf(i,e="#6F8366"){let n=document.createElement("canvas");n.width=n.height=128;let r=n.getContext("2d");r.fillStyle="rgba(252, 250, 244, 0.95)",r.beginPath(),r.arc(128/2,128/2,128*.44,0,Math.PI*2),r.fill(),r.fillStyle=e,r.font=`${128*.52}px Georgia, serif`,r.textAlign="center",r.textBaseline="middle",r.fillText(i,128/2,128*.54);let s=new bo(n);s.colorSpace=ot;let a=new ho(new Cs({map:s,transparent:!0,depthWrite:!1}));return a.userData.live=!0,a}function Wf(i,e,t,{every:n=6,size:r=.34}={}){let s=Ff+=2.399;t.push(a=>{let o=(a+s)%n/2.2,l=o<1;i.visible=l,l&&(i.position.set(e[0]+Math.sin(o*5)*.04,e[1]+o*.35,e[2]),i.scale.setScalar(r*Math.min(1,o*6)*(1-Math.max(0,o-.75)*2)),i.material.opacity=Math.min(1,(1-o)*3))})}var St=Math.PI,Kt=6,Pt=4,Lu=4.1,Pu=.3,Js=.8,Xf=.3,Pn=i=>Xf+i*Lu,Si=i=>-i*Js,qe=-Pt/2+.2,Du=-Kt/2+.2,Ln=qe+.03,Qs=Lu-Pu,Qo={home:[0,5.6,-.6],consult:[-3,Pn(1)+1.25,Si(1)],kitchen:[3,Pn(0)+1.25,Si(0)],shop:[-3,Pn(0)+1.25,Si(0)],reviews:[3,Pn(1)+1.25,Si(1)],story:[-3,Pn(2)+1.25,Si(2)],team:[3,Pn(2)+1.1,Si(2)]};function se(i,e,t=[0,0,0],n=0,r=1){return e.position.set(e.position.x+t[0],e.position.y+t[1],e.position.z+t[2]),n&&(e.rotation.y=n),r!==1&&e.scale.multiplyScalar(r),i.add(e),e}var $i=1.2,Jo=-.1,jf=[];function st(i,e,t,n=0,r=1,s={}){let a=be(t,[],{ry:n,s:r,live:!0,in:i});return jf.push({g:a,model:e,act:s}),a}function kv(i){for(let{g:e,model:t,act:n}of jf){let r=Hf(t);if(r&&(e.add(r.root),!n.still&&(Vf(r,n,i),n.emote))){let s=Gf(...n.emote);e.add(s),Wf(s,[0,n.emoteY??1.15,0],i,{every:n.emoteEvery??6,size:.36/e.scale.x})}}}function Yr(i,e,t,n,r,s={}){let a=be([e?Kt/2:-Kt/2,Pn(t),Si(t)],[],{in:i}),o=s.wallH??Qs-.02;return re(Kt-.02,.04,Pt-.02,n,{at:[0,-.04,0],r:.015,in:a,cast:!1}),s.walls===!1||(re(Kt,o,.2,r,{at:[0,0,-Pt/2+.1],r:.03,in:a}),re(Kt-.4,.1,.03,x.white,{at:[.1,0,qe+.012],r:.01,in:a,cast:!1}),s.left?re(.2,o,Pt,r,{at:[-Kt/2+.1,0,0],r:.03,in:a}):re(.2,o,1.3,r,{at:[-Kt/2,0,-Pt/2+.65],r:.03,in:a}),s.cap&&(re(Kt+.08,.1,.3,x.white,{at:[0,o,-Pt/2+.1],r:.04,in:a,cast:!1}),s.left&&re(.3,.1,Pt+.08,x.white,{at:[-Kt/2+.1,o,0],r:.04,in:a,cast:!1}))),a}function Vt(i,e,t){t.forEach(([n,r,s=1])=>se(i,r,[n,i.userData.rowY(e),0],0,s))}var qr=i=>re(.3,.1,.24,i,{r:.04}),Mn=(i,e=.28)=>re(.2,e,.12,i,{r:.04});function Bv(i){let e=Yr(i,0,0,15717060,16247264,{left:!0}),t=se(e,qs(2.3,1.9,.36,4),[-1.45,0,qe+.19]);Vt(t,0,[[-.8,Mn(x.sage,.34)],[-.52,Mn(x.oat,.34)],[-.2,Mn(x.sage,.34)],[.25,$s(.16)],[.75,Mn(x.gold,.3)]]),Vt(t,1,[[-.85,Zt(.13,x.sage,x.pumpkin)],[-.5,Zt(.13,x.cream,x.salmon)],[-.15,Zt(.13,x.mist,x.leaf)],[.3,Ht(.085,.24,x.gold)],[.56,Ht(.085,.24,x.carrot)],[.84,Ht(.085,.24,x.leaf)]]),Vt(t,2,[[-.8,Ht(.09,.26,x.woodDark)],[-.52,Ht(.09,.26,x.blush)],[-.1,Mn(x.mist)],[.14,Mn(x.blush)],[.38,Mn(x.cream)],[.8,Zt(.14,x.gold,x.tomato)]]),Vt(t,3,[[-.7,Ne(.1,x.blush)],[-.42,Ne(.1,x.sage)],[-.14,Ne(.1,x.gold)],[.4,Mn(x.teal,.24)],[.66,Mn(x.sage,.24)]]);let n=se(e,qs(1.5,1.9,.36,4),[.75,0,qe+.19]);Vt(n,0,[[-.35,qr(x.sage)],[.35,qr(x.oat)]]),se(n,qr(x.mist),[-.35,n.userData.rowY(0)+.1,0]),Vt(n,1,[[-.35,qr(x.blush)],[.35,qr(x.gold)]]),se(n,qr(x.cream),[.35,n.userData.rowY(1)+.1,0]),Vt(n,2,[[-.4,Zs(x.cream,x.gold)],[.05,Zs(x.sage,x.cream)],[.45,Ne(.11,x.mist)]]),Vt(n,3,[[-.3,$s(.17,[x.cream,x.gold,x.blush])],[.35,Mn(x.gold)]]),se(e,Pf(),[Du+.45,0,.55],St/2),se(e,ji(2.1,0,x.cream,!0),[-.5,0,.75]),se(e,qo(1.7,.62,.95,x.white,x.wood),[1.75,0,.75]),se(e,be([1.35,.95,.75],[re(.34,.2,.28,x.cream,{r:.04}),re(.26,.16,.02,x.mistLight,{at:[0,.2,-.08],rx:-.3,glow:.5})])),se(e,Zs(x.cream,x.sage),[2.05,.95,.72],-.2),se(e,Ht(.09,.22,x.gold),[2.42,.95,.85]),st(e,"shopkeeper",[1.75,0,.12],.15,$i,{arms:"wave",emote:["\u2665","#C98B7A"],emoteY:1.5,emoteEvery:9}),se(e,$s(.26),[-1.3,0,1.3]),st(e,"dog_white_sit",[.2,0,1.25],.9,.78,{kind:"dog",low:!0}),se(e,Zs(x.sage,x.cream),[.95,0,1.55],.4),se(e,xi({kind:"tall",h:1.5,pot:x.white}),[2.6,0,qe+.3]),se(e,Ys(.9),[-.3,Qs,-.7]),se(e,Ys(.9),[2.2,Qs,-.7])}function Fv(i){let e=Yr(i,1,0,15457442,16249048),t={metal:.4,rough:.4};se(e,qo(3.7,.65,.9,x.white,x.wood),[-.75,0,qe+.34]);for(let[r,s]of[[-2.2,-.12],[-1.75,-.12],[-2.2,.16],[-1.75,.16]])ye(.12,.014,x.ink,{at:[r,.9,qe+.34+s],in:e,cast:!1});se(e,wf(),[-2.2,.91,qe+.22]),se(e,be([-1.75,.91,qe+.5],[ye(.16,.05,x.ink),re(.26,.03,.05,x.woodDark,{at:[.3,.02,0],r:.01})])),re(.7,.03,.42,x.steel,{at:[-.5,.895,qe+.34],r:.012,in:e,cast:!1,...t}),ye(.02,.26,x.steel,{at:[-.5,.9,qe+.12],in:e,seg:8,...t}),re(.04,.03,.16,x.steel,{at:[-.5,1.14,qe+.2],r:.012,in:e,...t}),se(e,Ht(.08,.2,x.gold),[.3,.9,qe+.3]),se(e,Ht(.08,.26,x.leaf),[.52,.9,qe+.26]),se(e,Ht(.08,.16,x.carrot),[.75,.9,qe+.34]);let n=se(e,xf(2.4),[-1.2,1.5,qe+.13]);[[-.95,Zt(.12,x.sage)],[-.65,Zt(.12,x.cream)],[-.35,Zt(.12,x.mist)],[.1,Ht(.07,.2,x.woodDark)],[.32,Ht(.07,.2,x.blush)],[.75,xi({h:.5,pot:x.terracotta}),.6]].forEach(([r,s,a=1])=>se(n,s,[r,.05,0],0,a)),se(e,bf(),[2.3,0,qe+.36]),se(e,qo(2,.8,.9,x.sage,x.wood,x.cream),[0,0,.75]),re(.5,.03,.34,x.woodDark,{at:[-.6,.9,.72],r:.012,in:e}),ye(.035,.26,x.carrot,{rt:.012,at:[-.66,.955,.7],rz:St/2,ry:.4,center:!0,in:e,seg:10}),ye(.035,.24,x.carrot,{rt:.012,at:[-.52,.955,.8],rz:St/2,ry:-.2,center:!0,in:e,seg:10}),Ne(.07,x.leaf,{at:[-.84,.92,.66],in:e}),[[-.05,x.pumpkin],[.28,x.salmon],[.61,x.leaf]].forEach(([r,s])=>se(e,Zt(.14,x.cream,s),[r,.9,.95])),se(e,be([.6,.9,.55],[re(.3,.05,.24,x.white,{r:.02}),ye(.11,.015,x.steel,{at:[0,.05,0],...t}),Ne(.08,x.tomato,{at:[0,.06,0]})])),st(e,"cook",[-.15,0,.12],0,$i,{arms:"stir",emote:["\u266A","#6F8366"],emoteY:1.75,emoteEvery:7}),se(e,Xr(.55),[-2.3,0,1.25],.2),se(e,Xr(.5,[x.leaf,x.sageLight,x.leaf,x.carrot]),[-2.25,.27,1.2],-.15),se(e,Xr(.5,[x.pumpkin,x.pumpkin,x.tomato]),[-1.6,0,1.5],-.3),se(e,ji(1.5,.8,x.cream),[1.75,0,1.3],-.3),st(e,"dog_gold_sit",[1.9,0,1.2],-.9,.82,{kind:"dog",low:!0,look:.15}),se(e,Zt(.14,x.sage,x.pumpkin),[1.45,0,1.5]),se(e,Ys(.9),[-1.3,Qs,-.6]),se(e,Ys(.9),[1.2,Qs,-.6])}function zv(i){let e=Yr(i,0,1,13031126,15134444,{left:!0});se(e,ji(3.2,2.2,x.white),[.4,0,.5]),se(e,Mf(.62),[-1.35,1.15,Ln]),[x.gold,x.sage,x.teal].forEach((r,s)=>se(e,$o(.42,.52,x.cream,x.wood,r),[.75+s*.55,1.42,Ln])),se(e,_f(1.8,.78,.76),[1.3,0,-.35]),se(e,js(x.teal),[1.3,0,-1.05]),st(e,"nutritionist",[1.3,Jo,-1.02],0,$i,{arms:"type",nod:!0}),se(e,Jh(),[1.05,.76,-.38],.25),se(e,be([1.85,.76,-.3],[re(.3,.02,.4,x.white,{r:.008}),re(.22,.008,.02,x.line,{at:[0,.02,.1],cast:!1}),re(.22,.008,.02,x.line,{at:[0,.02,.02],cast:!1})])),se(e,Zt(.1,x.sage,x.pumpkin),[.62,.76,-.12]),se(e,js(x.sageLight),[.7,0,.75],St+.3),se(e,js(x.sageLight),[1.75,0,.8],St-.2),st(e,"client",[1.75,Jo,.83],St-.2,$i,{nod:!0});let t=se(e,be([0,0,0],[re(1.4,.09,.75,x.mist,{at:[0,.78,0],r:.04}),re(1.25,.72,.6,x.white,{at:[0,.06,0],r:.05}),re(1.3,.06,.66,x.white,{r:.02})]),[-1.3,0,.35]);st(t,"cat_orange_sit",[.1,.87,0],.7,.9,{kind:"cat"}),se(e,be([0,0,0],[re(.9,.08,.6,x.white,{r:.03}),re(.3,.14,.04,x.mist,{at:[0,.08,-.34],rx:-.3,r:.015,glow:.3})]),[-.5,0,1.45],.3),st(e,"dog_white_stand",[-.5,.08,1.45],1.1,.68,{kind:"dog"});let n=se(e,qs(1.3,1.1,.34,2,x.white,x.mist),[Du+.19,0,-.9],St/2);Vt(n,0,[[-.5,In(6)],[.2,Ht(.08,.2,x.gold)]]),Vt(n,1,[[-.5,In(4,[x.teal,x.cream,x.sage,x.gold])],[.1,In(3,[x.blush,x.mist,x.sage])]]),se(n,xi({h:.6,pot:x.terracotta}),[.35,1.1,0],0,.7),se(e,xi({kind:"tall",h:1.5}),[2.6,0,qe+.3]),se(e,Yo(),[.1,0,qe+.3])}function Hv(i){let e=Yr(i,1,1,12438446,15265244);se(e,ji(2.6,0,x.cream,!0),[-.5,0,.55]),se(e,yf(2.4,x.blush,[x.cream,x.sage]),[-.6,0,qe+.5]),st(e,"cat_grey_loaf",[-1.25,.5,qe+.62],.4,.95,{kind:"cat",emote:["\u2665","#C98B7A"],emoteY:.6,emoteEvery:11}),st(e,"guest",[-.1,Jo,qe+.62],.15,$i,{look:.3}),se(e,Kh(.5,.4),[-.5,0,.7]),se(e,be([-.62,.4,.62],[ye(.05,.09,x.white),ye(.04,.005,x.woodDark,{at:[0,.085,0],cast:!1})])),se(e,In(3,[x.sage,x.gold,x.cream]),[-.5,.4,.86],St/2+.3);let t=[x.cream,x.goldLight,x.cream,x.blushLight],n=[x.gold,x.sage,x.blush,x.gold];t.forEach((s,a)=>se(e,$o(.44,.54,s,x.wood,n[a]),[-1.5+a*.55,1.5,Ln])),se(e,Sf(1.1,1.2),[1.55,1.25,Ln]),se(e,Yo(),[-2.3,0,qe+.3]),se(e,Rf(.5,x.gold),[1.5,0,1.15]),st(e,"dog_gold_lie",[1.5,.08,1.1],.9,.85,{kind:"dog",low:!0,calm:!0,look:.04,emote:["z","#7D786C"],emoteY:.6,emoteEvery:4}),st(e,"cat_black_stand",[-2,0,1.6],0,.95,{kind:"cat",path:[[-2.2,1.62],[.7,1.68]],lap:13});let r=se(e,Af(),[2.45,0,qe+.45]);st(r,"cat_orange_sit",[-.1,.93,-.04],.7,.85,{kind:"cat"}),se(e,xi({h:1,pot:x.terracotta}),[.85,0,qe+.32]),se(e,$s(.2,[x.blush,x.cream,x.sage]),[-2.3,0,1.2]),Ne(.09,x.gold,{at:[.3,0,1.6],in:e}),Ne(.07,x.blush,{at:[-1.5,0,1.6],in:e})}function Vv(i){let e=Yr(i,0,2,14930607,16051160,{left:!0,wallH:2.7,cap:!0}),t=.45,n=.35;se(e,ji(3,0,x.cream,!0),[t,0,n]),se(e,Kh(.95,.74,x.wood,x.white),[t,0,n]),[x.mistLight,x.goldLight,x.sageLight,x.blushLight].forEach((a,o)=>{let l=St/4+o*(St/2),c=Math.sin(l),h=Math.cos(l);se(e,js(x.white),[t+c*1.25,0,n+h*1.25],l+St),st(e,`student_${"abcd"[o]}`,[t+c*1.22,Jo,n+h*1.22],l+St,$i,{arms:"type",look:.28,nod:o%2===0}),se(e,Jh(a),[t+c*.55,.74,n+h*.55],l+St)}),se(e,be([t,.74,n],[ye(.05,.09,x.white),Ne(.045,x.white,{at:[.2,0,.1]}),Ne(.04,x.white,{at:[-.14,0,.16]})])),se(e,be([0,0,0],[re(2,1.15,.05,x.wood,{center:!0,r:.02}),re(1.9,1.05,.055,x.white,{center:!0,r:.01,cast:!1})]),[.5,1.55,Ln]),se(e,If(5,3),[-.15,1.85,Ln+.035]),re(.5,.012,.01,x.tomato,{center:!0,at:[1.05,1.7,Ln+.035],rz:.12,in:e,cast:!1}),re(.42,.012,.01,x.ink,{center:!0,at:[1.05,1.45,Ln+.035],in:e,cast:!1}),se(e,Cf(.34),[2.25,1.75,Ln]),se(e,$o(.5,.4,x.sageLight,x.wood,x.gold),[-1.45,1.75,Ln]);let s=se(e,qs(1.5,2,.34,4,x.white,x.oat),[Du+.19,0,-.5],St/2);Vt(s,0,[[-.6,In(7)],[.25,Mn(x.sage,.3)]]),Vt(s,1,[[-.6,In(5,[x.gold,x.cream,x.teal,x.blush])],[.2,In(4)]]),Vt(s,2,[[-.55,Ht(.08,.2,x.gold)],[-.2,In(6,[x.mist,x.sage,x.cream])]]),Vt(s,3,[[-.5,xi({h:.5,pot:x.terracotta}),.6],[.1,In(4,[x.blush,x.gold])]]),se(e,be([-1.9,0,1.35],[ye(.16,.34,x.white,{rt:.2}),Ne(.06,x.white,{at:[.02,.3,0]}),Ne(.055,x.white,{at:[.3,0,.12]}),Ne(.05,x.white,{at:[.42,0,-.1]})])),se(e,xi({kind:"tall",h:1.6}),[2.55,0,qe+.3]),se(e,Yo(),[-2.2,0,qe+.3]),st(e,"cat_grey_loaf",[2.2,0,1.4],-.6,.95,{kind:"cat"})}function Gv(i){let e=Yr(i,1,2,14864302,x.cream,{walls:!1});for(let n=0;n<9;n++)re(.012,.01,Pt-.1,x.woodDark,{at:[-Kt/2+.6+n*.6,0,0],in:e,cast:!1});re(Kt,.9,.2,x.cream,{at:[0,0,-Pt/2+.1],r:.05,in:e}),re(Kt+.06,.08,.3,x.white,{at:[0,.9,-Pt/2+.1],r:.035,in:e,cast:!1}),st(e,"sign_faunora",[-1.05,.98,-Pt/2+.12],.3,1.2,{still:!0}),se(e,eu(2.2),[-1.7,0,qe+.26]),se(e,eu(1.5,x.white,[x.gold,x.blush]),[.5,0,qe+.26]),se(e,Qh(1.3),[2.45,0,-.5],-St/2+.2),se(e,ji(4.6,1.7,x.cream),[-.3,0,.85]);for(let n of[-2.8,1.2])ye(.03,2.2,x.wood,{at:[n,0,qe+.6],in:e,seg:8});se(e,Lf([-2.8,2.2,qe+.6],[1.2,2.2,qe+.6],10,.4));let t=.62;st(e,"pig",[-2,0,.8],t,1.3,{kind:"pig",hop:6.2}),st(e,"dog_gold_stand",[-.75,0,.9],t,1.15,{kind:"dog",hop:4.6}),st(e,"cat_grey_sit",[.4,0,.95],t,1.45,{kind:"cat"}),st(e,"deer",[1.45,0,.75],t,1.1,{kind:"deer",hop:8.3}),se(e,Zt(.16,x.sage,x.pumpkin),[-1.35,0,1.55]),se(e,Zt(.14,x.gold,x.salmon),[.95,0,1.6])}function Wv(i){re(12.7,Xf,Pt+.9,x.slab,{at:[0,0,.2],r:.1,in:i});for(let e of[-3,3])re(2.2,.15,.6,x.slab,{at:[e,0,Pt/2+.75],r:.06,in:i,cast:!1});for(let e of[1,2])re(12.5,Pu,Pt+.35,x.slab,{at:[0,Pn(e)-Pu-.02,Si(e)+.1],r:.12,in:i});re(12.2,Pn(1)-.02,Js*2,x.cream,{at:[0,0,-Pt/2-Js],r:.1,in:i}),re(12.2,Lu,Js,x.cream,{at:[0,Pn(1)-.02,-Pt/2-Js*1.5],r:.1,in:i})}function Xv(i){re(5.4,.22,7.2,x.sageLight,{at:[9.3,0,.2],r:.1,in:i,cast:!1}),se(i,Ef(3,2.8),[9.4,.22,-1.3]),se(i,jo(3.6),[10.9,.22,-2.6]),se(i,bi(.42),[7.4,.22+.12,-2.7]),se(i,Xr(.55),[7.55,.22,.2],.3),se(i,Xr(.5,[x.leaf,x.sageLight,x.carrot]),[8.25,.22,.55],-.2),st(i,"farmer",[8.5,.22,-.5],.9,$i,{arms:"dig"}),st(i,"dog_brown_stand",[7.3,.22,1.5],0,.8,{kind:"dog",path:[[7.3,1.45],[11.3,1.55]],lap:11});for(let[t,n,r]of[[10.7,.45,.4],[11.35,-.05,-.9],[10.15,.85,1.6]])st(i,"chicken",[t,.22,n],r,1.15,{kind:"chicken"});se(i,Tf(),[9.6,.22,2.45],-.45),se(i,bi(.36,x.leaf),[11.4,.22+.1,1.2]);for(let[t,n]of[[7.2,2.6],[7.9,3.2],[8.5,3.7]])ye(.3,.04,x.slab,{at:[t,.22,n],in:i,cast:!1});re(4.2,.16,6.2,x.sageLight,{at:[-8.7,0,0],r:.08,in:i,cast:!1}),se(i,jo(4.2,{top:x.sageLight}),[-9.4,.16,-1.8]),se(i,jo(2.6),[-7.6,.16,-2.6]),se(i,bi(.5),[-9.9,.3,.9]),se(i,bi(.34,x.leaf),[-7.3,.26,2.2]),se(i,Qh(1.3),[-8.6,.16,1.2],.6),st(i,"cat_orange_loaf",[-8.6,.63,1.2],.6,.95,{kind:"cat"});for(let[t,n]of[[-3,3.5],[-2.2,4.1],[-1.2,4.5],[3,3.5],[3.9,4]])ye(.32,.04,x.slab,{at:[t,0,n],in:i,cast:!1});se(i,bi(.38),[-.3,.12,2.75]),se(i,bi(.3,x.leaf),[.5,.1,2.85]),se(i,bi(.34),[6,.1,2.8])}function jv(i,e){let t=be([-6.2,0,3.1],[],{ry:.62,live:!0,in:i});ye(.05,1.5,x.wood,{in:t,seg:10}),ye(.2,.05,x.white,{in:t});let n=new Hr().load(e);n.colorSpace=ot;let r=new Cn({map:n,roughness:.9}),s=new Qe(new gi(.62,.62,.08,48),[bn(x.white),r,bn(x.white)]);n.center.set(.5,.5),n.rotation=St/2,s.rotation.x=St/2,s.position.set(0,1.9,0),s.castShadow=!0,t.add(s),ye(.66,.06,x.gold,{rx:St/2,center:!0,at:[0,1.9,-.02],in:t,seg:48})}function qv(i){let e=be([0,0,0],[],{live:!0,in:i});Ne(1.5,x.cream,{center:!0,scale:[1,1.12,1],in:e,cast:!1});for(let[t,n,r]of[[.55,1.36,x.sage],[0,1.515,x.gold],[-.55,1.36,x.sage]])ye(n,.26,r,{center:!0,at:[0,t,0],in:e,cast:!1,seg:32});ye(.5,.5,x.cream,{rt:.95,center:!0,at:[0,-1.5,0],in:e,cast:!1});for(let[t,n]of[[-.3,-.3],[.3,-.3],[-.3,.3],[.3,.3]])ye(.012,.9,x.woodDark,{at:[t,-2.6,n],in:e,seg:5,cast:!1});re(.75,.45,.75,x.wood,{at:[0,-3,0],r:.08,in:e,cast:!1}),re(.8,.07,.8,x.woodDark,{at:[0,-2.6,0],r:.03,in:e,cast:!1}),st(e,"cat_orange_sit",[0,-2.72,.05],.4,1,{kind:"cat"}),yi.push(t=>{e.position.set(15.5+Math.sin(t*.11)*1.6,13.2+Math.sin(t*.35)*.5,-7),e.rotation.z=Math.sin(t*.5)*.03})}function Yv(i){[[x.blush,9.6,-1],[x.goldLight,10.4,-.2],[x.white,8.9,.4]].forEach(([e,t,n],r)=>{let s=be([t,1,n],[],{live:!0,in:i}),a=[-1,1].map(o=>{let l=be([0,0,0],[],{in:s});return re(.11,.008,.1,e,{at:[o*.058,0,0],r:.003,in:l,cast:!1}),l});yi.push(o=>{let l=o*(.5+r*.13)+r*2.1;s.position.set(t+Math.sin(l)*.9,.9+Math.sin(l*2.3)*.25+r*.15,n+Math.sin(l*1.7)*.7),s.rotation.y=l;let c=Math.sin(o*16+r)*.9;a[0].rotation.z=-c,a[1].rotation.z=c})})}function $v(i){[[-11,11.5,-5,1.1],[9.5,14.5,-6,1.3],[14,7.5,-1,.8],[-14.5,5.5,2,.9],[1.5,16.5,-5,.9],[-5,15,-7,.7]].forEach(([t,n,r,s],a)=>{let o=se(i,vf(s),[t,n,r]);yi.push(l=>{o.position.x=t+Math.sin(l*.07+a*2.1)*1.4,o.position.y=n+Math.sin(l*.23+a)*.18})})}function qf({logoUrl:i,castUrl:e}){let t=new kt;Wv(t),Bv(t),Fv(t),zv(t),Hv(t),Vv(t),Gv(t),Xv(t),Yv(t),$v(t),qv(t),gf(t),jv(t,i);let n=zf(e).then(()=>kv(yi));return{root:t,tickers:yi,ready:n}}var Zv=24*Math.PI/180,Kv=90,Jv=3,Yf={az:.06,el:.025};function $f(i,{logoUrl:e,castUrl:t,reduceMotion:n=!1,onFrame:r}={}){let s;try{s=new lo({canvas:i,antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch{return null}s.setPixelRatio(Math.min(devicePixelRatio||1,innerWidth<900?1.5:2)),s.outputColorSpace=ot,s.toneMapping=Vp,s.toneMappingExposure=1.02,s.shadowMap.enabled=!0,s.shadowMap.type=Hp;let a=new co;a.add(new Do(16776178,14208955,1.5));let o=new Gr(16774111,2.1);o.position.set(9,20,30),o.target.position.set(0,4,0),o.castShadow=!0;let l=Math.min(innerWidth,innerHeight)<600;o.shadow.mapSize.setScalar(l?1024:2048),Object.assign(o.shadow.camera,{left:-20,right:20,top:16,bottom:-16,near:1,far:90}),o.shadow.bias=-4e-4,o.shadow.normalBias=.03,o.shadow.radius=5,a.add(o,o.target);let c=qf({logoUrl:e,castUrl:t});a.add(c.root);let h=new Qe(new Hi(120,120),new Io({opacity:.09}));h.rotation.x=-Math.PI/2,h.position.y=.002,h.receiveShadow=!0,a.add(h);let u=new mi(-1,1,1,-1,.1,400),d={x:0,y:5,z:0,az:.7,size:30,offX:0,offY:0},p={...d},m={x:0,y:0,sx:0,sy:0},_=1,f=1,g=!1;function v(){_=i.clientWidth||innerWidth,f=i.clientHeight||innerHeight,s.setSize(_,f,!1)}function y({target:z,az:Y,fit:$,rect:ne},ee=!1){let[ge,Me,te]=z,oe=Math.max($[1]/ne.h,$[0]/ne.w)*f;Object.assign(p,{x:ge,y:Me,z:te,az:Y,size:oe,offX:(ne.x+ne.w/2-_/2)*oe/f,offY:(ne.y+ne.h/2-f/2)*oe/f}),(ee||!g)&&Object.assign(d,p)}let b=new w,R=new w,E=new w,I=new w;function D(){let z=d.az+m.sx*Yf.az,Y=Zv-m.sy*Yf.el;b.set(Math.sin(z)*Math.cos(Y),Math.sin(Y),Math.cos(z)*Math.cos(Y)),R.set(Math.cos(z),0,-Math.sin(z)),E.crossVectors(b,R),I.set(d.x,d.y,d.z).addScaledVector(R,-d.offX).addScaledVector(E,d.offY),u.position.copy(I).addScaledVector(b,Kv),u.lookAt(I);let $=d.size/2,ne=$*_/f;Object.assign(u,{left:-ne,right:ne,top:$,bottom:-$}),u.updateProjectionMatrix(),u.updateMatrixWorld()}let O=new w;function H(z){return O.set(...z).project(u),{x:(O.x+1)/2*_,y:(1-O.y)/2*f}}let W=0,V=0;function q(z){V=requestAnimationFrame(q);let Y=z/1e3,$=Math.min(.1,Y-W||.016);W=Y;let ne=n?1:1-Math.exp(-$*Jv);for(let ee in p)d[ee]+=(p[ee]-d[ee])*ne;m.sx+=(m.x-m.sx)*Math.min(1,$*4),m.sy+=(m.y-m.sy)*Math.min(1,$*4),n||c.tickers.forEach(ee=>ee(Y)),D(),s.render(a,u),r?.()}return addEventListener("resize",v),n||addEventListener("pointermove",z=>{z.pointerType!=="touch"&&(m.x=z.clientX/innerWidth*2-1,m.y=z.clientY/innerHeight*2-1)},{passive:!0}),v(),{view:y,project:H,resize:v,ready:c.ready,start(){g||(g=!0,Object.assign(d,p),V=requestAnimationFrame(q))},stop(){cancelAnimationFrame(V),g=!1},get size(){return{width:_,height:f}},stats:()=>s.info.render,debug:()=>({cur:{...d},goal:{...p},width:_,height:f})}}var Kf=ce("#grid"),$r=ce("#bagBtn"),el=ce("#bagCount"),Nu=ce("#drawer"),ea=ce("#scrim"),Jt=en.get("faunora-bag",{});Object.keys(Jt).forEach(i=>{(!ti[i]||!(Jt[i]>0))&&delete Jt[i]});function Qv(){ce("#tabs").innerHTML=gd.map(([i,e],t)=>{let n=i==="all"?rs.length:rs.filter(r=>r.cat===i).length;return`<button role="tab" aria-selected="${t===0}" data-cat="${i}">${e}<span>${n}</span></button>`}).join("")}function Zf(i){Kf.innerHTML=rs.filter(e=>i==="all"||e.cat===i).map((e,t)=>`
    <article class="card" style="--d:${Math.min(t,12)*.04}s">
      <div class="art" style="--tint:${Sl[e.cat]}"><img src="${nr(e)}" alt="${e.name}" width="640" height="640" loading="lazy"></div>
      <div class="tags">${e.tags.map(n=>`<span class="tag">${n}</span>`).join("")}</div>
      <h3>${e.name}</h3>
      <p>${e.desc}</p>
      <div class="buy"><span class="price">${tr(e.price)}</span><button class="add" data-id="${e.id}">Add to bag</button></div>
    </article>`).join("")}function Uu(){let i=Object.keys(Jt),e=i.reduce((t,n)=>t+Jt[n],0);el.textContent=e,el.classList.toggle("has",e>0),ce("#bagEmpty").hidden=e>0,ce("#checkout").disabled=e===0,ce("#bagTotal").textContent=tr(i.reduce((t,n)=>t+ti[n].price*Jt[n],0)),ce("#bagList").innerHTML=i.map(t=>{let n=ti[t];return`<li>
      <div class="thumb" style="--tint:${Sl[n.cat]}"><img src="${nr(n)}" alt="" width="64" height="64"></div>
      <div><h3>${n.name}</h3><span class="sub">${tr(n.price)}</span></div>
      <div class="qty"><button data-dec="${t}" aria-label="Remove one ${n.name}">\u2212</button><span>${Jt[t]}</span><button data-inc="${t}" aria-label="Add one ${n.name}">+</button></div>
    </li>`}).join(""),en.set("faunora-bag",Jt)}function e_(i,e){if(pn||!i)return Promise.resolve();let t=i.getBoundingClientRect(),n=$r.getBoundingClientRect(),r=Math.min(t.width,140),s=document.createElement("div");s.className="flyer",s.innerHTML=`<img src="${nr(e)}" alt="">`,Object.assign(s.style,{width:r+"px",height:r+"px",left:t.left+(t.width-r)/2+"px",top:t.top+(t.height-r)/2+"px"}),document.body.append(s);let a=n.left+n.width/2-(t.left+t.width/2),o=n.top+n.height/2-(t.top+t.height/2),l=s.animate([{transform:"translate(0,0) scale(1) rotate(0)",opacity:1},{transform:`translate(${a*.35}px, ${o*.35-90}px) scale(.7) rotate(-10deg)`,opacity:1,offset:.4},{transform:`translate(${a}px, ${o}px) scale(.12) rotate(8deg)`,opacity:.4}],{duration:950,easing:"cubic-bezier(.45,0,.2,1)"});return Promise.race([l.finished,new Promise(c=>setTimeout(c,1100))]).then(()=>s.remove())}async function Ou(i,e){let t=ti[i];t&&(await e_(e,t),Jt={...Jt,[i]:(Jt[i]||0)+1},Uu(),$r.classList.remove("bump"),el.classList.remove("pop"),$r.offsetWidth,$r.classList.add("bump"),el.classList.add("pop"))}var tl=()=>Nu.classList.contains("open");function ta(i){Nu.classList.toggle("open",i),Nu.setAttribute("aria-hidden",String(!i)),i?(ea.hidden=!1,requestAnimationFrame(()=>ea.classList.add("open")),ce("#closeBag").focus()):(ea.classList.remove("open"),setTimeout(()=>{ea.hidden=!0},500),$r.focus())}function Jf(){Qv(),Zf("all"),Uu(),ce("#tabs").addEventListener("click",i=>{let e=i.target.closest("button");e&&(Dt("#tabs button").forEach(t=>t.setAttribute("aria-selected",String(t===e))),Zf(e.dataset.cat))}),Kf.addEventListener("click",i=>{let e=i.target.closest(".add");e&&(e.classList.add("done"),e.textContent="Added \u2713",setTimeout(()=>{e.classList.remove("done"),e.textContent="Add to bag"},1600),Ou(e.dataset.id,e.closest(".card").querySelector(".art")))}),ce("#bagList").addEventListener("click",i=>{let{inc:e,dec:t}=i.target.dataset;if(!e&&!t)return;let n={...Jt};e&&(n[e]+=1),t&&--n[t]<=0&&delete n[t],Jt=n,Uu()}),$r.addEventListener("click",()=>ta(!0)),ce("#closeBag").addEventListener("click",()=>ta(!1)),ea.addEventListener("click",()=>ta(!1)),ce("#checkout").addEventListener("click",()=>ua("Prototype: checkout and delivery scheduling arrive in the next build."))}var Qf=[.3,90],t_={Dog:{young:2.5,adult:1.6,senior:1.4,loss:1},Cat:{young:2.5,adult:1.2,senior:1.1,loss:.8}},n_=[{keys:["chocolate","cokelat","coklat","cocoa"],name:"chocolate",verdict:"toxic",note:"It contains theobromine, which dogs and cats cannot break down; dark chocolate is the most dangerous."},{keys:["grape","raisin","anggur","kismis"],name:"grapes and raisins",verdict:"toxic",note:"Even a few can cause sudden kidney failure."},{keys:["onion","bawang","garlic","leek","chive"],name:"onion and garlic",verdict:"toxic",note:"They damage red blood cells, cooked or raw, and the effect builds up over days."},{keys:["xylitol","sugar-free","sugar free","permen karet","chewing gum"],name:"xylitol (sugar-free sweetener)",verdict:"toxic",note:"It drops blood sugar within minutes and can damage the liver."},{keys:["macadamia"],name:"macadamia nuts",verdict:"toxic",note:"They cause weakness, tremors and vomiting in dogs."},{keys:["alcohol","alkohol","beer","wine"," bir "],name:"alcohol",verdict:"toxic",note:"Pets are far more sensitive to it than people."},{keys:["coffee","kopi","caffeine","kafein"," tea "," teh "],name:"coffee and tea",verdict:"toxic",note:"Caffeine over-stimulates the heart and nervous system."},{keys:["cooked bone","chicken bone","tulang"],name:"cooked bones",verdict:"toxic",note:"They splinter and can pierce the gut or block it."},{keys:["avocado","alpukat"],name:"avocado",verdict:"caution",note:"The flesh is fatty and can upset the stomach, and the pit is a choking risk. Best skipped."},{keys:["milk","susu","cheese","keju","yoghurt","yogurt","dairy","ice cream","es krim"],name:"dairy",verdict:"caution",note:"Most adult dogs and cats are lactose intolerant. A teaspoon of plain yoghurt is usually fine; a bowl of milk often means diarrhoea."},{keys:["tuna"],name:"tuna",verdict:"caution",note:"Fine as an occasional meal in water, not brine. Every day it is too high in mercury and too low in other nutrients, especially for cats."},{keys:["liver","hati ayam","hati sapi"],name:"liver",verdict:"caution",note:"Very nutritious but rich in vitamin A: keep it under 5% of the diet."},{keys:["raw egg","telur mentah"],name:"raw egg",verdict:"caution",note:"Cook it instead: raw egg carries salmonella and blocks biotin absorption."},{keys:["bread","roti","noodle"," mie "],name:"bread and noodles",verdict:"caution",note:"Not harmful plain, but mostly empty calories and often salty."},{keys:["peanut butter","selai kacang"],name:"peanut butter",verdict:"caution",note:"Only a xylitol-free one, and only a lick: it is calorie-dense."},{keys:["durian"],name:"durian",verdict:"caution",note:"A small piece of flesh is not toxic, but it is very sugary and the seeds are dangerous if swallowed."},{keys:["egg","telur"],name:"cooked egg",verdict:"safe",note:"boiled or scrambled without oil or salt"},{keys:["rice","nasi"],name:"plain rice",verdict:"safe",note:"cooked soft, as a small part of the meal"},{keys:["carrot","wortel"],name:"carrot",verdict:"safe",note:"raw as a crunchy chew or steamed"},{keys:["pumpkin","labu"],name:"pumpkin",verdict:"safe",note:"steamed and plain; a spoonful also helps firm up loose stools"},{keys:["sweet potato"," ubi "],name:"sweet potato",verdict:"safe",note:"cooked and plain"},{keys:["banana","pisang"],name:"banana",verdict:"safe",note:"a few slices; it is sugary"},{keys:["apple","apel"],name:"apple",verdict:"safe",note:"sliced, with the seeds and core removed"},{keys:["watermelon","semangka"],name:"watermelon",verdict:"safe",note:"seedless and without the rind"},{keys:["papaya","pepaya","mango","mangga"],name:"papaya and mango",verdict:"safe",note:"peeled, with no seed or pit, in small pieces"},{keys:["chicken","ayam"],name:"cooked chicken",verdict:"safe",note:"boneless, skinless and unseasoned"},{keys:["salmon","fish","ikan"],name:"cooked fish",verdict:"safe",note:"fully cooked and deboned"},{keys:["tofu","tahu","tempe"],name:"tofu and tempeh",verdict:"safe",note:"plain and steamed, as an occasional extra rather than the main protein"},{keys:["broccoli","brokoli","spinach","bayam","green bean","buncis"],name:"green vegetables",verdict:"safe",note:"steamed and chopped small"}],na=(i,e=5)=>Math.round(i/e)*e,nl=i=>parseFloat(i.replace(",","."));function im({kg:i,species:e="Dog",stage:t="adult",goal:n}){let r=70*Math.pow(i,.75),s=t_[e][n==="loss"?"loss":t];return{rer:Math.round(r),factor:s,kcal:na(r*s)}}function i_(i,e){let t=i.toLowerCase(),n={},r=t.match(/(\d+(?:[.,]\d+)?)\s*(kg|kgs|kilo|kilos|kilogram|kilograms)\b/),s=t.match(/(\d+(?:[.,]\d+)?)\s*(lb|lbs|pound|pounds)\b/),a=e.pending==="weight"&&t.match(/^\D*(\d+(?:[.,]\d+)?)\D*$/),o=r?nl(r[1]):s?nl(s[1])*.4536:a?nl(a[1]):null;o!==null&&o>=Qf[0]&&o<=Qf[1]&&(n.kg=Math.round(o*10)/10),/\b(dog|dogs|doggo|puppy|puppies|anjing)\b/.test(t)?n.species="Dog":/\b(cat|cats|kitten|kittens|kitty|kucing)\b/.test(t)&&(n.species="Cat");let l=t.match(/(\d+(?:[.,]\d+)?)\s*(years?|yrs?|yo|y\/o|tahun|thn)\b/),c=t.match(/(\d+)\s*(months?|mos?|bulan|bln)\b/),h=n.species||e.species;if(c&&!l)n.stage=Number(c[1])<12?"young":"adult";else if(l){let u=nl(l[1]);n.stage=u<1?"young":u>=(h==="Cat"?11:8)?"senior":"adult"}else/\b(puppy|kitten|anak anjing|anak kucing)\b/.test(t)?n.stage="young":/\b(senior|elderly|old dog|old cat|getting old|sudah tua)\b/.test(t)&&(n.stage="senior");return n}function r_(i){let e=` ${i.toLowerCase().replace(/[?!.,]/g," ")} `;return n_.find(t=>t.keys.some(n=>e.includes(n)))}function Gt(i,e){let t=i.species!=="Cat",n={weight:t?"m3":"m2",senior:t?"m7":"m4",young:t?"m5":"m6",sensitive:t?"m7":"m6",allergy:t?"s1":"m2",hydration:t?"m5":"m8",treats:t?"s1":"s5",skin:"s4",gut:t?"s6":"m6",picky:"s2",bored:t?"t6":"t5",general:t?"m1":"m2"};return n[e]||n.general}function rm(i){let{pet:e,kg:t,species:n}=i,r=i.lastTopic==="weight"||/weight/i.test(i.concern)?"loss":void 0,{rer:s,kcal:a}=im({kg:t,species:n,stage:i.stage||"adult",goal:r}),o=na(a/1.3,10),l=i.stage==="young"?3:2,c=r?"a gentle weight-loss target":i.stage==="young"?"a growing youngster":i.stage==="senior"?"a senior":"a neutered adult";return{topic:r?"weight":"portion",text:`For ${e} at ${t} kg, resting energy is about ${s} kcal a day. For ${c} that works out to roughly ${a} kcal a day.

In Faunora fresh meals (about ${1.3} kcal per gram) that is around ${o} g a day, split into ${l} meals of ${na(o/l,5)} g. Treats can use up to ${na(a*.1)} kcal of that.

This is a starting point: we weigh ${e} every two weeks and adjust by 10% at a time.`,chips:["Which meal do you suggest?","How many treats is that?","How do I switch foods?"],product:Gt(i,r?"weight":i.stage==="senior"?"senior":i.stage==="young"?"young":"general")}}var s_=i=>({topic:"portion",pending:"weight",text:`Happy to work that out. How much does ${i.pet} weigh, in kg? A rough number is fine, or weigh yourself holding ${i.pet} and subtract.`,chips:["About 5 kg","About 12 kg","About 25 kg"]}),em=i=>/\b(can|could|may|boleh|bisa|apakah|aman|safe|okay|ok to|allowed)\b/i.test(i)||i.includes("?")&&/\b(eat|makan|give|kasih|feed)\b/i.test(i),a_=[{id:"emergency",re:/\b(seizure|kejang|collaps\w*|pingsan|can'?t breathe|cannot breathe|sesak|not breathing|blood in (the |his |her )?(vomit|stool|urine|poop)|muntah darah|berdarah|bloat|swollen belly|poison\w*|keracunan|unconscious|won'?t wake|hit by|tertabrak)\b/i,reply:i=>({text:`This cannot wait for a diet plan. Please take ${i.pet} to your nearest vet or 24-hour clinic now, and call ahead so they are ready.

If ${i.pet} may have eaten something toxic, bring the packaging and note the time. I will be here afterwards to help with feeding during recovery.`,chips:["Where is a 24-hour vet?","What can I feed after?"]})},{id:"ate-toxic",test:(i,e,t)=>!!t&&t.verdict==="toxic"&&/\b(ate|eaten|swallow\w*|memakan|termakan|licked|stole|got into)\b/i.test(i)&&!em(i),reply:(i,e)=>({text:`${e.name[0].toUpperCase()}${e.name.slice(1)} is toxic for pets. ${e.note}

Please call your vet now and tell them roughly how much ${i.pet} ate, when, and ${i.pet}'s weight. Do not try to make ${i.pet} vomit unless the vet tells you to.`,chips:["What signs should I watch for?","Where is a 24-hour vet?"]})},{id:"food-check",test:(i,e,t)=>!!t&&em(i),reply:(i,e)=>e.verdict==="toxic"?{text:`No, please keep ${e.name} away from ${i.pet}. ${e.note}

If ${i.pet} has already eaten some, call your vet right away and tell them how much and when.`,chips:["What treats are safe?","Which fruits are okay?"]}:e.verdict==="caution"?{text:`Only with care. ${e.note}`,chips:["What treats are safe?","How many treats a day?"]}:{topic:"treats",text:`Yes, ${e.name} is fine for ${i.pet}: ${e.note}. Introduce it in a small amount first and keep extras under ${.1*100}% of the day's calories.`,chips:["How many treats a day?","How much should I feed?"]}},{id:"signs",re:/\b(signs?|symptoms?|gejala|watch for|look out for)\b/i,reply:i=>({text:`Call the vet straight away if ${i.pet} shows any of these: repeated vomiting, tremors or wobbling, very pale or yellow gums, a racing heart, heavy drooling, a hard swollen belly, or unusual sleepiness. Some poisons, grapes for example, show nothing for a day while the damage is being done, so do not wait for signs if you know ${i.pet} ate something toxic.`,chips:["Where is a 24-hour vet?"]})},{id:"vet",re:/\b(24.?hour|emergency vet|nearest vet|closest vet|klinik|clinic|dokter hewan|animal hospital)\b/i,reply:()=>({text:'I cannot see your location in this prototype. Search "dokter hewan 24 jam" with your area in Google Maps and phone before you leave, because not every clinic has a vet on site overnight. Keep that number saved in your phone for next time.',chips:["What signs should I watch for?"]})},{id:"recovery",re:/\b(after (surgery|the surgery|illness|being sick|the vet|treatment)|recover\w*|pemulihan|feed after|habis sakit|post.?op)\b/i,reply:i=>({topic:"sensitive",text:`After an illness or surgery, follow the vet's instructions first. In general: small bland meals four times a day (boiled chicken with soft rice, or plain pumpkin), a third of the usual amount on day one, building back over three to four days. Appetite returning is the best sign.

For longer recoveries I write a plan with extra protein and calories together with your vet.`,chips:["How do I switch foods?","Which meal do you suggest?"],product:Gt(i,"sensitive")})},{id:"price",re:/\b(price|prices|harga|cost|costs|biaya|how much (is|are|does|for)|berapa harga|bayar|rupiah|subscription|langganan|discount|diskon|promo|monthly care|single session)\b/i,reply:()=>({text:`A single session is Rp 149.000: a 30-minute video call and a written diet plan. Monthly Care is Rp 399.000 and adds two follow-ups plus 10% off every meal plan.

Meals start at Rp 32.000 a pack for cats and Rp 68.000 for dogs. Most owners on Monthly Care find the meal discount covers the difference.`,chips:["Where do you deliver?","Which meal do you suggest?"]})},{id:"portion",re:/\b(how much|how many (grams?|cups?)|portions?|porsi|calories?|kalori|kcal|grams?|berapa (banyak|gram)|takaran|amount)\b/i,reply:i=>i.kg?rm(i):s_(i)},{id:"frequency",re:/\b(how often|how many times|times a day|kali sehari|berapa kali|meal times?|feeding schedule|jadwal makan|once a day|twice a day|free.?feed\w*)\b/i,reply:i=>({topic:"portion",text:`${i.stage==="young"?`While ${i.pet} is still growing, three to four small meals a day work best`:`Two meals a day, about 10 to 12 hours apart, suit most adult ${i.species==="Cat"?"cats":"dogs"}`}. Fixed meal times beat a bowl left out all day: you notice appetite changes sooner and weight is easier to control.${i.species==="Cat"?" Cats often do well with a small third meal late in the evening.":""}`,chips:["How much should I feed?","My pet begs between meals"]})},{id:"begging",re:/\b(begs?|begging|minta makan|always hungry|hungry all|lapar terus|still hungry|steals? food)\b/i,reply:i=>({topic:"weight",text:`Begging is usually habit, not hunger. What helps: split the same daily amount into three meals, add volume with steamed green beans or pumpkin, feed from a snuffle mat or slow bowl so the meal lasts, and ask everyone at home to stop table scraps for two weeks. If ${i.pet} is truly ravenous and losing weight, that needs a vet check for worms, diabetes or thyroid trouble.`,chips:["How much should I feed?","What treats are safe?"],product:Gt(i,"bored")})},{id:"weight",re:/\b(overweight|obes\w*|gemuk|gendut|fat|chubby|lose weight|weight loss|slim down|kurus|underweight|too thin|gain weight|berat badan)\b/i,reply:i=>/\b(kurus|underweight|too thin|gain weight)\b/i.test(i.lastText)?{topic:"general",text:"For a pet that needs to gain, we raise calories by 10 to 20% with an extra small meal rather than bigger ones, and choose denser food. First rule out worms, dental pain and thyroid or kidney trouble with your vet, because thinness is often a symptom.",chips:["How much should I feed?","Which meal do you suggest?"]}:{topic:"weight",pending:i.kg?void 0:"weight",product:Gt(i,"weight"),text:`Slow is safe: aim for ${i.pet} to lose 1 to 2% of body weight a week${i.species==="Cat"?", and never crash-diet a cat, because it can cause liver disease":""}. Three things do most of the work:

1. Weigh the food on a kitchen scale instead of using a scoop.
2. Count every treat inside the daily calories.
3. Add low-calorie volume such as steamed green beans or pumpkin.

${i.kg?`At ${i.kg} kg I can give you a calorie target now.`:`Tell me ${i.pet}'s weight and I will work out a calorie target.`}`,chips:i.kg?["How much should I feed?","Which meal do you suggest?"]:["About 5 kg","About 12 kg","About 25 kg"]}},{id:"timeline",re:/\b(how long (until|till|before|will it take)|when will (it|he|she)|improv\w*|kapan sembuh|berapa lama)\b/i,reply:i=>({text:`It depends on what we are fixing. Stomach upsets usually settle within one to two weeks of a diet change. Skin and coat need six to eight weeks, because that is how long skin takes to renew. Weight changes safely at 1 to 2% a week. If ${i.pet} is no better by then, we change the plan rather than wait.`,chips:["How do I switch foods?","Which meal do you suggest?"]})},{id:"allergy",re:/\b(allerg\w*|alergi|itch\w*|gatal|scratch\w*|garuk|rash|ruam|hot ?spots?|ear infections?|paw licking|licking (his|her|its) paws|hives)\b/i,reply:i=>({topic:"allergy",text:`Itchy skin, ear trouble and paw licking are the classic signs of a food reaction, though fleas and dust mites look the same, so ask your vet to rule those out.

The reliable test is an elimination diet: one new protein and one carbohydrate that ${i.pet} has never eaten, nothing else, for 8 weeks. No table scraps and no flavoured chews, or the trial has to start again. Beef, chicken and dairy are the most common culprits.

Until our session, keep a daily note of food, treats and itch level from 1 to 10.`,chips:["Which meal do you suggest?","What treats are safe?","How long until it improves?"],product:Gt(i,"allergy")})},{id:"stomach",re:/\b(diarr?hoea|diarr?hea|diare|mencret|vomit\w*|muntah|throw(ing|s)? up|upset stomach|sensitive stomach|loose stools?|soft stools?|gas|kembung|constipat\w*|sembelit)\b/i,reply:i=>({topic:"sensitive",text:`For a mild upset in an otherwise bright adult pet: skip rich treats, offer small bland meals (boiled chicken and soft rice, or plain pumpkin) for 2 to 3 days, and keep fresh water available. Then move back to the normal food over 3 days.

See a vet the same day if there is blood, repeated vomiting, a swollen belly, no water staying down, or if ${i.pet} is very young, a senior, or seems weak. Diarrhoea for more than 48 hours also needs a check.`,chips:["How do I switch foods?","Which meal do you suggest?","Can my pet eat pumpkin?"],product:Gt(i,"sensitive")})},{id:"picky",re:/\b(picky|fussy|pilih.?pilih|won'?t eat|not eating|refus\w*|gak mau makan|tidak mau makan|susah makan|skip(s|ping)? meals?|no appetite|lost (his |her |its )?appetite|bored of (his|her|the) food)\b/i,reply:i=>({topic:"picky",text:`First the safety check: ${i.species==="Cat"?"a cat that eats nothing for 24 hours needs a vet, because fasting can damage a cat's liver":"a dog that refuses all food for 48 hours, or seems unwell, needs a vet"}.

If ${i.pet} is simply choosy: serve the meal slightly warm, put it down for 20 minutes and then take it away until the next meal, and stop treats between meals for a week. Fresh food usually wins picky eaters over, and a crumbled single-ingredient topper helps.`,chips:["Which meal do you suggest?","How do I switch foods?"],product:Gt(i,"picky")})},{id:"treats",re:/\b(treats?|snacks?|camilan|cemilan|biscuits?|biskuit|rewards?|chews?)\b/i,reply:i=>{let e=i.kg?` For ${i.pet} that is about ${na(im({kg:i.kg,species:i.species,stage:i.stage||"adult"}).kcal*.1)} kcal a day.`:"";return{topic:"treats",text:`Treats should stay under ${.1*100}% of daily calories, with the main meals reduced to match.${e}

Good choices are single-ingredient ones: dried meat, a slice of carrot or apple, a spoon of plain pumpkin. Avoid anything with added sugar, salt, onion powder or xylitol. For training, break treats into pea-sized pieces: the reward is the moment, not the size.`,chips:["Which fruits are okay?","Can my pet eat cheese?","How much should I feed?"],product:Gt(i,"treats")}}},{id:"fruits",re:/\b(fruits?|buah|vegetables?|sayur|sayuran|veg|veggies)\b/i,reply:i=>({topic:"treats",text:`Safe in small pieces: apple without seeds, banana, seedless watermelon, papaya, mango without the pit, carrot, pumpkin, green beans and steamed broccoli.

Never: grapes, raisins, onion, garlic, and anything with a pit or seeds left in. Fruit is sugary, so it counts as a treat for ${i.pet}.`,chips:["How many treats a day?","Can my pet eat avocado?"]})},{id:"switch",re:/\b(switch\w*|transition\w*|change (his |her |the |their |my )?(food|diet)|ganti makanan|new food|pindah makanan|introduc\w*)\b/i,reply:i=>({topic:"switch",text:`Change over 7 days so ${i.pet}'s gut bacteria can keep up:

Days 1-2: 25% new, 75% old
Days 3-4: half and half
Days 5-6: 75% new, 25% old
Day 7: all new

Slightly soft stools on days 3 to 5 are normal. If they turn watery, go back one step for two more days. Sensitive pets and seniors do better with a 10 to 14 day switch.`,chips:["Which meal do you suggest?","How much should I feed?"]})},{id:"water",re:/\b(water|minum|drink\w*|hydrat\w*|dehydrat\w*|urinary|kencing|pee|struvite|crystals?|kidneys?|ginjal|renal)\b/i,reply:i=>({topic:"hydration",text:`${i.species==="Cat"?"Cats evolved to get water from food, so many live slightly dehydrated on dry kibble. That matters for kidneys and bladder crystals.":"A healthy dog needs roughly 50 ml of water per kg a day, more in the heat."}

Wet or fresh food is the easiest fix, since it is about 70% water. Also try several wide bowls away from the food, a fountain, or a spoon of unsalted broth in the water.

If ${i.pet} has diagnosed kidney or urinary disease, the diet needs controlled phosphorus and protein, which I plan from your vet's blood results rather than from a chat.`,chips:["Which meal do you suggest?","How much should I feed?"],product:Gt(i,"hydration")})},{id:"senior",re:/\b(senior|old(er)? (dog|cat|pet)|aging|ageing|sudah tua|arthritis|joints?|sendi|stiff)\b/i,reply:i=>({topic:"senior",text:`Older pets need fewer calories but more high-quality protein, to keep muscle while staying lean. Softer textures help worn teeth, omega-3 from fish helps stiff joints, and two or three smaller meals are easier to digest.

A yearly blood test tells us whether kidneys and liver need a gentler recipe. Bring the latest results to our session if you have them.`,chips:["Which meal do you suggest?","How much should I feed?","Do supplements help?"],product:Gt(i,"senior")})},{id:"young",re:/\b(puppy|puppies|kittens?|anak anjing|anak kucing|growing|wean\w*|sapih)\b/i,reply:i=>({topic:"young",text:`Growing pets need about twice the calories per kg of an adult, in three to four meals a day, with calcium and phosphorus in the right ratio. That ratio is why home recipes meant for adults are risky for youngsters${i.species==="Dog"?", especially large-breed puppies":""}.

Weigh ${i.pet} weekly: steady gain along the growth curve matters more than a round belly.`,chips:["How much should I feed?","How often should I feed?"],product:Gt(i,"young")})},{id:"raw",re:/\b(raw (food|diet|meat|feeding)|barf|daging mentah|mentah)\b/i,reply:i=>({text:`I do not recommend raw feeding at home. Raw meat regularly carries salmonella, listeria and E. coli, which reach your family through the bowl, the floor and ${i.pet}'s kisses, and raw diets are often short of calcium.

Gently cooked food keeps almost all the benefit without the risk, which is why our kitchen steams and slow-cooks.`,chips:["How is your food cooked?","Which meal do you suggest?"]})},{id:"supplements",re:/\b(supplements?|suplemen|vitamins?|probiotics?|probiotik|omega|fish oil|minyak ikan|glucosamine|calcium|kalsium)\b/i,reply:i=>({topic:/probiot/i.test(i.lastText)?"gut":"skin",text:`A complete, balanced diet needs no multivitamin, and doubling up can overdose vitamins A and D. Two extras are well supported: omega-3 fish oil for skin, coat and joints, and a probiotic during or after tummy trouble or antibiotics.

Tell me what ${i.pet} currently takes and I will check it against the plan.`,chips:["My pet has itchy skin","Which meal do you suggest?"],product:Gt(i,/probiot/i.test(i.lastText)?"gut":"skin")})},{id:"teeth",re:/\b(teeth|tooth|dental|gigi|bad breath|bau mulut|tartar|plaque|karang gigi)\b/i,reply:i=>({text:`Brushing is the only thing proven to work well: a soft brush and pet toothpaste (never human paste), three times a week or more. Chews and a rope toy help a little between brushings.

Bad breath with red gums or drooling means ${i.pet} needs a dental check, because sore teeth are a common hidden reason for eating less.`,chips:["My pet is not eating","What treats are safe?"],product:i.species==="Cat"?void 0:"t1"})},{id:"bored",re:/\b(bored|bosan|destructive|chew(s|ing)? everything|hyper|enrichment|toys?|mainan)\b/i,reply:i=>({topic:"bored",text:`Feeding can be the day's best game. Scatter part of the meal in a snuffle mat or hide it around the room: ten minutes of sniffing tires ${i.pet} about as much as a walk, and slower eating is easier on the stomach.`,chips:["How much should I feed?","What treats are safe?"],product:Gt(i,"bored")})},{id:"recommend",re:/\b(which (meal|food|product|one)|recommend\w*|suggest\w*|rekomendasi|saran|what should i (buy|get|order)|best (meal|food)|cocok)\b/i,reply:i=>{let e=/weight/i.test(i.concern)?"weight":/allerg|stomach/i.test(i.concern)?"sensitive":/senior/i.test(i.concern)?"senior":null,t=i.lastTopic&&!["portion","switch"].includes(i.lastTopic)&&i.lastTopic||e||i.stage||"general";return{text:`From what you have told me about ${i.pet}, this is where I would start. In the session I will confirm the portion and check the ingredients against ${i.pet}'s history.`,product:Gt(i,t),chips:["How much should I feed?","How do I switch foods?"]}}},{id:"kitchen",re:/\b(how is (it|your food|the food) (cooked|made)|ingredients?|bahan|preservativ\w*|pengawet|where (do|does) .* come from|sourc\w*|sumber|farm\w*|organic|human.?grade|kitchen|dapur)\b/i,reply:()=>({text:`Everything is cooked in our own kitchen in small batches: slow-cooked or gently steamed, with no preservatives, colouring or fillers. Vegetables come from Lembang, free-range chicken from Bogor and fish from the morning catch at Muara Angke, usually within a day of harvest.

Each pack is weighed to your pet's calorie target and labelled with their name.`,chips:["How long does it keep?","Where do you deliver?"]})},{id:"storage",re:/\b(keep|store|storage|simpan|fridge|kulkas|freez\w*|beku|shelf life|expir\w*|kadaluarsa|basi|how long does it last|tahan berapa)\b/i,reply:()=>({text:"Meals arrive chilled at 4 \xB0C. Keep them in the fridge and use within 4 days, or freeze on arrival for up to a month and thaw overnight in the fridge. Warm a portion to room temperature in a bowl of warm water, not the microwave, and throw away anything left in the bowl after 30 minutes.",chips:["Where do you deliver?","How do I switch foods?"]})},{id:"delivery",re:/\b(deliver\w*|kirim|pengiriman|antar|ongkir|shipping|jabodetabek|jakarta|bogor|depok|tangerang|bekasi|arrive|sampai)\b/i,reply:()=>({text:"We deliver across Jabodetabek once a week, in insulated boxes, in the morning window you choose. Food is cooked the day before, so it reaches you within about 24 hours of leaving the stove. Outside Jabodetabek we cannot yet keep the cold chain, so we do not ship there.",chips:["How long does it keep?","What does it cost?"]})},{id:"session",re:/\b(what happens|how does (it|the session|this) work|what do i need|prepare|persiapan|what should i bring)\b/i,reply:i=>({text:`The session is a 30-minute video call. We go through ${i.pet}'s weight, age, activity, current food and any health history, then you receive a written plan within a day: daily calories, portions in grams, foods to avoid and a switch-over schedule.

It helps to have a recent weight, photos of the current food label, and any vet results from the last year.`,chips:["What does it cost?","How much should I feed?"]})},{id:"book",re:/\b(book\w*|reschedul\w*|appointment|janji|jadwal|session|sesi|consult\w*|konsultasi|cancel|batal)\b/i,reply:i=>({action:i.booked?void 0:"book",text:i.booked?'Your session is already in my calendar. To change the date, use "Book another session" in the consultation room and I will see the new time.':"You can book in the consultation room: pick a date, tell us your pet's name and main concern, and a nutritionist is assigned straight away.",chips:["What does it cost?","What happens in a session?"]})},{id:"call",re:/\b(call|phone|telepon|telpon|video|voice|talk to (you|someone|a human)|speak)\b/i,reply:i=>i.booked?{action:"call",text:"Of course. Tap the phone icon at the top of this chat and we can talk it through."}:{action:"book",text:`Calls open once you have a session booked, so your nutritionist has ${i.pet==="your pet"?"your pet's":`${i.pet}'s`} details in front of them.`,chips:["What does it cost?"]}},{id:"identity",re:/\b(are you (a |an )?(bot|robot|real|human|ai|person)|who are you|siapa (kamu|anda)|chatgpt|artificial)\b/i,reply:i=>({text:`Honest answer: in this prototype my replies are simulated from a nutrition knowledge base, so treat them as general guidance. In the real service you would be talking to ${i.personaName}, and nothing replaces an examination by your own vet.`,chips:["How much should I feed?","What treats are safe?"]})},{id:"thanks",re:/\b(thanks?|thank you|thx|terima kasih|makasih|trims|appreciate)\b/i,reply:i=>({text:`You are very welcome. Give ${i.pet} a scratch behind the ears from me.`,chips:["How much should I feed?","What treats are safe?"]})},{id:"bye",re:/\b(bye|goodbye|see you|sampai jumpa|dadah|good ?night|selamat malam)\b/i,reply:i=>({text:`Take care, and message me any time ${i.pet} has you wondering about something.`})},{id:"hello",re:/^\s*(hi|hello|hey|halo|hai|hallo|pagi|siang|sore|malam|good (morning|afternoon|evening)|selamat (pagi|siang|sore))\b/i,reply:i=>({text:`Hello! What would you like to know about ${i.pet}'s food today?`,chips:["How much should I feed?","What treats are safe?","My pet has itchy skin"]})}],tm=[i=>`I want to get this right for ${i.pet}. Could you tell me a bit more: is this about what to feed, how much, or a health worry?`,i=>`Noted for ${i.pet}'s file. To give you something useful now, tell me ${i.pet}'s weight and age and what they eat today.`,i=>`That one is better answered with ${i.pet} in front of me, so I have added it to our session notes. Meanwhile, I can help with portions, treats, safe foods or switching diets.`],nm=["How much should I feed?","What treats are safe?","How do I switch foods?"],o_=/\b(aku|saya|gimana|bagaimana|berapa|boleh|apakah|kucing|anjing|nggak|tidak|bisa|kenapa|makan|dong|sih|tolong)\b/i,l_=i=>i==="young"?"a young":i==="senior"?"a senior":"an adult";function sm(i={}){let e={pet:i.pet||"your pet",species:i.species||"Dog",concern:i.concern||"",personaName:i.personaName||"your Faunora nutritionist",booked:!!i.booked,kg:null,stage:null,lastTopic:null,pending:null,lastText:"",fallbacks:0,toldLanguage:!1};function t(n){let r=String(n||"").trim().slice(0,500);e.lastText=r;let s=i_(r,e);Object.assign(e,s);let a=r_(r),o=a_.find(u=>u.test?u.test(r,e,a):u.re.test(r)),l,c;s.kg&&(e.pending==="weight"||!o)?(l=rm(e),c="portion"):o?(l=o.reply(e,a),c=o.id):s.species||s.stage?(c="facts",l={text:`Thanks, noted: ${e.pet} is ${l_(e.stage)} ${e.species.toLowerCase()}. ${e.kg?"Ask me about portions whenever you like.":`If you tell me ${e.pet}'s weight I can work out daily portions.`}`,chips:nm}):(c="fallback",l={text:tm[e.fallbacks++%tm.length](e),chips:nm}),e.pending=l.pending||null,l.topic&&(e.lastTopic=l.topic);let h=l.text;return!e.toldLanguage&&o_.test(r)&&(e.toldLanguage=!0,h+=`

(Saya mengerti Bahasa Indonesia, tetapi untuk sementara saya menjawab dalam bahasa Inggris.)`),{text:h,chips:l.chips||[],product:l.product,action:l.action,intent:c}}return{reply:t,state:e}}var c_=500,h_=80,ku={base:700,perChar:9,max:2400},u_=3200,d_=["How much should I feed?","What treats are safe?","My pet has itchy skin","What does it cost?"],Bu=ce("#care"),Zi=ce("#chat"),Wt=ce("#call"),Zr=ce("#chatBtn"),Kr=ce("#chatLog"),p_=ce("#chatForm"),Fu=ce("#chatMessage"),sl=ce("#quick"),At=ce("#bookForm"),hm={openSheet(){}},Xe=en.get("faunora-booking",null);Xe&&(!Object.hasOwn(Ci,Xe.expert)||Xe.expert===ir)&&(Xe=null);var zu,ju=()=>Xe?Xe.expert:ir,al=()=>`faunora-chat-${ju()}`;function f_(i,e){return Object.hasOwn(Ci,i)&&i!==ir?i:vd[e]||_d}function m_(i){let e=new Date(i+"T00:00:00");return isNaN(e)?i:e.toLocaleDateString("en-GB",{weekday:"short",day:"numeric",month:"short"})}function ol(i,e){let t=Ci[e];Dt("[data-care-name]",i).forEach(n=>{n.textContent=e}),Dt("[data-care-first]",i).forEach(n=>{n.textContent=t.first}),Dt("[data-care-role]",i).forEach(n=>{n.textContent=t.role}),Dt("[data-care-photo]",i).forEach(n=>{n.src=t.photo,n.alt=e===ir?"":`Portrait of ${e}`})}function ll(i=al()){let e=en.get(i,[]);return Array.isArray(e)?e.filter(t=>t&&typeof t.text=="string"):[]}var Hu=(i,e=al())=>en.set(e,i.slice(-h_));function g_(){return Xe?`Hi! I'm ${Ci[Xe.expert].first}, ${Xe.pet}'s nutritionist. Thanks for booking. Tell me a little about ${Xe.pet}'s current food and routine, and ask me anything before our session.`:"Hi! This is the Faunora care desk. Ask me anything about feeding your dog or cat: portions, safe foods, treats or switching diets. When you are ready, I can help you book a session with a nutritionist."}function Vu(){zu=sm(Xe?{pet:Xe.pet,species:Xe.species,concern:Xe.concern,personaName:Xe.expert,booked:!0}:{personaName:"a Faunora nutritionist"});let i=ll();i.length||Hu([{from:"them",at:Date.now(),text:g_()}]),i.filter(e=>e.from==="me").forEach(e=>zu.reply(e.text))}function Gu(){At.hidden=!!Xe,Bu.hidden=!Xe,ol(Zr,ju()),Zr.setAttribute("aria-label",Xe?`Chat with ${Ci[Xe.expert].first}`:"Chat with the Faunora care desk"),Zr.classList.toggle("has-expert",!!Xe),ce("#chatCall").hidden=!Xe,Xe&&(ol(Bu,Xe.expert),ce("#careMeta").textContent=`${Xe.pet} \xB7 ${Xe.species} \xB7 ${Xe.concern} \xB7 ${m_(Xe.date)}`)}function am(){clearTimeout(Wu),ce("#typing").hidden=!0,Zi.hidden||Ki(!1),Xe=null,en.set("faunora-booking",null),Vu(),Gu()}function v_(i){let e=ti[i],t=document.createElement("div");t.className="msg-product",t.innerHTML=`<img src="${nr(e)}" alt="" width="56" height="56"><div><strong>${e.name}</strong><span>${tr(e.price)}</span></div>`;let n=document.createElement("button");return n.type="button",n.textContent="Add to bag",n.addEventListener("click",()=>{n.textContent="Added \u2713",n.disabled=!0,Ou(i,t.querySelector("img"))}),t.append(n),t}function um(i){let e=document.createElement("li");e.className=`msg ${i.from==="me"?"me":"them"}`;let t=document.createElement("p");if(t.textContent=i.text,e.append(t),i.product&&ti[i.product]&&e.append(v_(i.product)),i.action==="book"){let r=document.createElement("button");r.type="button",r.className="msg-action",r.textContent="Open the booking form \u2192",r.addEventListener("click",()=>{Ki(!1),hm.openSheet("consult")}),e.append(r)}let n=document.createElement("time");return n.textContent=new Date(i.at).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),e.append(n),e}function dm(i){sl.replaceChildren(...i.map(e=>{let t=document.createElement("button");return t.type="button",t.textContent=e,t}))}function __(){Kr.replaceChildren(...ll().map(um)),Kr.scrollTop=Kr.scrollHeight}function om(i){Kr.append(um(i)),Kr.scrollTop=Kr.scrollHeight}var ia=null,qu=()=>!Zi.hidden;function Ki(i){if(Zi.hidden=!i,Zr.classList.toggle("is-open",i),requestAnimationFrame(()=>Zi.classList.toggle("open",i)),i){ia=document.activeElement,ol(Zi,ju()),ce("#chatStatus").textContent=Xe?"Online \xB7 usually replies in minutes":"Online \xB7 ask before you book",__(),sl.children.length||dm(d_),Fu.focus({preventScroll:!0});return}(ia&&ia.isConnected&&ia!==document.body?ia:Zr).focus({preventScroll:!0})}var Wu;function lm(i){let e=String(i).trim().slice(0,c_);if(!e)return;let t=al(),n={from:"me",text:e,at:Date.now()};Hu([...ll(t),n],t),om(n);let r=zu.reply(e),s=ce("#typing");s.hidden=!1,clearTimeout(Wu);let a=pn?0:Math.min(ku.max,ku.base+r.text.length*ku.perChar);Wu=setTimeout(()=>{s.hidden=!0;let o={from:"them",text:r.text,at:Date.now(),product:r.product,action:r.action};Hu([...ll(t),o],t),!(t!==al()||Zi.hidden)&&(om(o),dm(r.chips))},a)}var pm,fm,ra=null,il=null,Xu=ce("#callStatus"),rl=ce("#callTime"),mm=i=>`${String(Math.floor(i/60)).padStart(2,"0")}:${String(i%60).padStart(2,"0")}`;function cm(){!Xe||!Wt.hidden||(ol(Wt,Xe.expert),Wt.hidden=!1,Wt.classList.remove("connected","ended"),requestAnimationFrame(()=>Wt.classList.add("open")),Dt(".call-toggle",Wt).forEach(i=>i.setAttribute("aria-pressed","false")),Xu.textContent="Calling\u2026",rl.textContent="",il=document.activeElement,ce("#endCall").focus(),fm=setTimeout(()=>{Wt.classList.add("connected"),ra=Date.now(),Xu.textContent="Connected",rl.textContent="\xB7 00:00",pm=setInterval(()=>{rl.textContent=`\xB7 ${mm(Math.floor((Date.now()-ra)/1e3))}`},1e3)},u_))}var cl=()=>!Wt.hidden;function Yu(){if(Wt.hidden||Wt.classList.contains("ended"))return;clearTimeout(fm),clearInterval(pm);let i=ra?mm(Math.floor((Date.now()-ra)/1e3)):null;ra=null,Wt.classList.add("ended"),Xu.textContent=i?"Call ended":"Call cancelled",rl.textContent=i?`\xB7 ${i}`:"",setTimeout(()=>{Wt.classList.remove("open"),setTimeout(()=>{Wt.hidden=!0,il&&il.isConnected&&il.focus()},400)},1100)}function gm(i){hm=i,At.date.min=new Date().toISOString().slice(0,10),Dt("[data-expert]").forEach(e=>e.addEventListener("click",()=>{Xe&&am(),ce("#expertSel").value=e.dataset.expert,At.scrollIntoView({behavior:pn?"auto":"smooth",block:"center"}),At.classList.remove("flash"),At.offsetWidth,At.classList.add("flash"),setTimeout(()=>At.pet.focus({preventScroll:!0}),600)})),At.addEventListener("submit",e=>{e.preventDefault();let t=At.pet.value.trim();if(!t)return At.pet.focus();Xe={pet:t.slice(0,40),species:At.species.value,date:At.date.value,concern:At.concern.value,expert:f_(At.expert.value,At.concern.value)},en.set("faunora-booking",Xe),At.reset(),sl.replaceChildren(),Vu(),Gu(),Bu.scrollIntoView({behavior:pn?"auto":"smooth",block:"center"}),ua(`You're booked with ${Ci[Xe.expert].first}. You can message or call anytime.`)}),ce("#newBooking").addEventListener("click",()=>{am(),At.pet.focus()}),p_.addEventListener("submit",e=>{e.preventDefault(),lm(Fu.value),Fu.value=""}),sl.addEventListener("click",e=>{e.target.closest("button")&&lm(e.target.closest("button").textContent)}),ce("#openChat").addEventListener("click",()=>Ki(!0)),Zr.addEventListener("click",()=>Ki(Zi.hidden)),ce("#closeChat").addEventListener("click",()=>Ki(!1)),Dt(".call-toggle",Wt).forEach(e=>e.addEventListener("click",()=>{e.setAttribute("aria-pressed",String(e.getAttribute("aria-pressed")!=="true"))})),ce("#startCall").addEventListener("click",cm),ce("#chatCall").addEventListener("click",cm),ce("#endCall").addEventListener("click",Yu),Vu(),Gu()}var y_=40,x_=900,b_=48,xm=900,M_=520,S_=.8,vm=["dogs","cats","picky eaters","seniors","sensitive tummies"],w_=document.documentElement,dl=fn.map(i=>ce(`#${i.id}`)),T_=ce("#hotspots"),wt=0,Dn=!1,ln=null,Kn=null,bm=[];function Mm(){let i=innerWidth,e=innerHeight,t=i>=xm;if(ln&&t){let s=ce(`#sheet-${ln}`).offsetWidth;if(i-s>300)return{x:0,y:90,w:i-s,h:e-180}}let n=e<M_;if(Dn)return n?{x:i*.1,y:50,w:i*.8,h:e-60}:{x:i*.04,y:60,w:i*.92,h:e-150};if(wt===0)return n?{x:i*.46,y:30,w:i*.54,h:e*1.05}:t?{x:0,y:e*.45,w:i,h:e*.7}:{x:0,y:e*.44,w:i,h:e*.52};if(n){let s=ce(".card-in",dl[wt]).getBoundingClientRect().right+12;return{x:s,y:60,w:i-s-8,h:e-70}}if(!t)return{x:8,y:76,w:i-16,h:e*.4};let r=ce(".card-in",dl[wt]).getBoundingClientRect().right+24;return{x:r,y:96,w:i-r-32,h:e-200}}function es(i=!1){if(!Kn)return;let e=Dn||wt===0,t=fn[e?0:wt],n=innerWidth<xm,r=e?n&&!Dn?[15,15.5]:t.fit:t.fit.map(s=>s*(n?S_:1));Kn.view({target:Qo[t.id],az:t.az,fit:r,rect:Mm()},i)}function Jn(i,{instant:e=!1,keepHash:t=!1}={}){wt=Math.max(0,Math.min(fn.length-1,i)),Dn=!1;let n=fn[wt];dl.forEach((r,s)=>{r.classList.toggle("active",s===wt),r.inert=s!==wt}),Dt("#links [data-go]").forEach(r=>r.toggleAttribute("aria-current",r.dataset.go===n.id)),w_.style.setProperty("--accent",n.accent),document.body.dataset.stop=n.id,document.body.classList.remove("overview"),ce("#overviewBtn").setAttribute("aria-pressed","false"),wt>0&&document.body.classList.add("moved"),ce("#stopCount").textContent=`${String(wt+1).padStart(2,"0")} / ${String(fn.length).padStart(2,"0")}`,ce("#prevBtn").disabled=wt===0,ce("#nextBtn").disabled=wt===fn.length-1,t||history.replaceState(null,"",`#${n.id}`),es(e)}var oa=i=>Jn(wt+i),Qr=i=>fn.findIndex(e=>e.id===i);function $u(i){Dn=i,document.body.classList.toggle("overview",i),ce("#overviewBtn").setAttribute("aria-pressed",String(i)),dl[wt].inert=i,es()}var hl=null;function Zu(i){if(ln===i)return;ln&&aa(!1),(Qr(i)!==wt||Dn)&&Jn(Qr(i));let e=ce(`#sheet-${i}`);hl=document.activeElement,ln=i,e.hidden=!1,ce("#veil").hidden=!1,document.body.classList.add("sheet-open"),requestAnimationFrame(()=>{e.classList.add("open"),ce("#veil").classList.add("open")}),ce(".sheet-body",e).scrollTop=0,ce("[data-close]",e).focus({preventScroll:!0}),es()}function aa(i=!0){if(!ln)return;let e=ce(`#sheet-${ln}`);ln=null,e.classList.remove("open"),ce("#veil").classList.remove("open"),document.body.classList.remove("sheet-open"),setTimeout(()=>{e.classList.contains("open")||(e.hidden=!0),ln||(ce("#veil").hidden=!0)},600),i&&hl&&hl.isConnected&&hl.focus({preventScroll:!0}),es()}function E_(){bm=fn.slice(1).map(i=>{let e=document.createElement("button");return e.type="button",e.className="hotspot",e.dataset.id=i.id,e.innerHTML=`<i></i><span>${i.title}</span>`,e.setAttribute("aria-label",`Go to ${i.title}`),e.addEventListener("click",()=>Jn(Qr(i.id))),T_.append(e),e})}function A_(){let i=Dn?null:fn[wt].id;for(let e of bm){let t=Kn.project(Qo[e.dataset.id]);e.style.transform=`translate(${t.x.toFixed(1)}px, ${t.y.toFixed(1)}px)`,e.classList.toggle("here",e.dataset.id===i)}}var Sm=i=>!!i.closest?.(".sheet, .chat, .drawer, .call, #links.open"),wm=()=>ln||qu()||tl()||cl(),sa=0,_m=0,ym;addEventListener("wheel",i=>{Sm(i.target)||ln||cl()||tl()||(clearTimeout(ym),ym=setTimeout(()=>{sa=0},180),!(performance.now()<_m)&&(sa+=i.deltaY,!(Math.abs(sa)<y_)&&(_m=performance.now()+x_,Dn?$u(!1):oa(Math.sign(sa)),sa=0)))},{passive:!0});var ul=null;addEventListener("touchstart",i=>{ul=Sm(i.target)||wm()?null:i.touches[0].clientY},{passive:!0});addEventListener("touchend",i=>{if(ul===null)return;let e=ul-i.changedTouches[0].clientY;ul=null,Math.abs(e)>=b_&&oa(Math.sign(e))},{passive:!0});addEventListener("keydown",i=>{if(i.key==="Escape"){cl()?Yu():qu()?Ki(!1):tl()?ta(!1):ln?aa():Dn&&$u(!1),pl(!1);return}if(wm()||i.target.closest("input, select, textarea"))return;let e={ArrowDown:1,ArrowRight:1,PageDown:1,ArrowUp:-1,ArrowLeft:-1,PageUp:-1}[i.key];e?(i.preventDefault(),oa(e)):i.key==="Home"?Jn(0):i.key==="End"&&Jn(fn.length-1)});document.addEventListener("click",i=>{let e=i.target.closest("[data-go]"),t=i.target.closest("[data-open]");e?(i.preventDefault(),aa(!1),pl(!1),Jn(Qr(e.dataset.go))):t?(pl(!1),Zu(t.dataset.open)):i.target.closest("[data-close]")&&aa()});ce("#veil").addEventListener("click",()=>aa());ce("#prevBtn").addEventListener("click",()=>oa(-1));ce("#nextBtn").addEventListener("click",()=>oa(1));ce("#overviewBtn").addEventListener("click",()=>$u(!Dn));addEventListener("hashchange",()=>{let i=Qr(location.hash.slice(1));i>=0&&i!==wt&&Jn(i,{keepHash:!0})});addEventListener("resize",()=>es(!0));var Tm=ce("#links"),Em=ce("#menuBtn");function pl(i){Tm.classList.toggle("open",i),Em.setAttribute("aria-expanded",String(i))}Em.addEventListener("click",()=>pl(!Tm.classList.contains("open")));var wi=ce("#bgm"),Ji=ce("#soundBtn");wi.volume=.35;var Jr=en.get("faunora-muted",!1);function fl(){let i=!wi.paused;Ji.classList.toggle("is-off",!i),Ji.setAttribute("aria-pressed",String(i)),Ji.setAttribute("aria-label",i?"Mute background music":"Play background music"),i&&Ji.classList.remove("hint")}async function Ku(){try{await wi.play()}catch{Jr||Ji.classList.add("hint")}fl()}Ji.addEventListener("click",()=>{Jr=!wi.paused,en.set("faunora-muted",Jr),Jr?wi.pause():Ku(),fl()});function Am(i){Ji.contains(i.target)||(["pointerdown","keydown"].forEach(e=>removeEventListener(e,Am)),!Jr&&wi.paused&&Ku())}["pointerdown","keydown"].forEach(i=>addEventListener(i,Am));wi.addEventListener("play",fl);wi.addEventListener("pause",fl);Jr||Ku();function R_(){let i=ce("#typed"),e="Nourish what ",t="you love.";i.innerHTML="<span></span><br><em></em>";let[n,,r]=i.childNodes;if(pn){n.textContent=e,r.textContent=t;return}let s=0,a=setInterval(()=>{s+=1,n.textContent=e.slice(0,s),r.textContent=t.slice(0,Math.max(0,s-e.length)),s>=e.length+t.length&&(clearInterval(a),i.parentElement.classList.add("typed-done"))},70)}function C_(){let i=ce("#swap");if(pn)return;let e=0;setInterval(()=>{i.classList.add("out"),setTimeout(()=>{e=(e+1)%vm.length,i.textContent=vm[e],i.classList.remove("out")},350)},2600)}function I_(){let i=ce("#process"),e=Dt(".step",i),t=i.closest(".sheet-body"),n=()=>{let r=i.getBoundingClientRect(),s=innerHeight*.9,a=innerHeight*.5,o=pn?1:Math.min(1,Math.max(0,(s-r.top)/(s-a+r.height*.6)));i.style.setProperty("--p",o.toFixed(3)),e.forEach((l,c)=>l.classList.toggle("lit",o>0&&o>=c/(e.length-1)-.001))};t.addEventListener("scroll",()=>requestAnimationFrame(n),{passive:!0}),addEventListener("resize",n),n()}function P_(){let i=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&(t.target.classList.add("in"),i.unobserve(t.target))})},{threshold:.12});Dt(".reveal").forEach(e=>i.observe(e))}Dt("[data-sketch]").forEach(i=>{let e=i.dataset.sketch;i.innerHTML=`<use href="#${e}" filter="url(#pencil)"/><use href="#${e}" filter="url(#pencil2)" opacity=".35"/>`});Jf();gm({openSheet:Zu});I_();P_();E_();Kn=$f(ce("#world"),{logoUrl:"assets/logo/mark-256.png",castUrl:"assets/models/cast.glb",reduceMotion:pn,onFrame:A_});Kn||document.body.classList.add("no-webgl");window.faunora={go:Jn,openSheet:Zu,world:Kn,stageRect:Mm};var Rm=Math.max(0,Qr(location.hash.slice(1)));Jn(Rm,{instant:!0,keepHash:!0});Kn?.start();var L_=9e3,D_=Promise.all([document.fonts.ready,Kn?Kn.ready.catch(()=>{}):null]);Promise.race([D_,new Promise(i=>setTimeout(i,L_))]).then(()=>{es(!0),document.body.classList.add("ready"),Rm===0?R_():(ce("#typed").innerHTML="Nourish what <br><em>you love.</em>",ce("#typed").parentElement.classList.add("typed-done")),C_()});})();
/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
