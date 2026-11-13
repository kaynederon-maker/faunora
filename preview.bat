@echo off
rem Opens the Faunora site locally. The 3D characters are loaded with fetch(), which browsers block on
rem file:// pages, so the site needs this small local server (Python) instead of a double-click on index.html.
cd /d "%~dp0"
start "" http://127.0.0.1:8765/index.html
python -m http.server 8765 --bind 127.0.0.1
