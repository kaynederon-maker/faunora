#!/bin/sh
# Bundle js/app.js (and three.js) into app.bundle.js and stamp a fresh cache-busting version into index.html.
set -e
cd "$(dirname "$0")"
npx --yes esbuild js/app.js --bundle --minify --format=iife --alias:three=./vendor/three.module.min.js --outfile=app.bundle.js
V=$(date +%s)
sed -i -E "s/(style\.css|stage\.css|app\.bundle\.js)\?v=[0-9]+/\1?v=$V/g" index.html
echo "built v=$V"
