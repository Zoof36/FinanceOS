# QTVIS Business OS — GitHub Pages Deployment Guide
# =====================================================
# Files in this folder:
#   index.html    ← the full app
#   sw.js         ← service worker (offline support)
#   manifest.json ← PWA install config
#   icon.svg      ← app icon
#   README.md     ← this file

## STEP 1 — Create a GitHub account (if you don't have one)
Go to https://github.com and sign up. Free account is fine.

## STEP 2 — Create a new repository
1. Click the green "New" button (or go to https://github.com/new)
2. Repository name: qtvis-business-os  (or any name you like)
3. Set it to PRIVATE (only you can see it)
4. Click "Create repository"

## STEP 3 — Upload the files
1. Click "uploading an existing file" or drag and drop
2. Upload ALL four files: index.html, sw.js, manifest.json, icon.svg
3. Click "Commit changes"

## STEP 4 — Enable GitHub Pages
1. Go to Settings → Pages (left sidebar)
2. Under "Source" → select "Deploy from a branch"
3. Branch: main  /  Folder: / (root)
4. Click Save
5. Wait 1–2 minutes — GitHub will show your live URL

## STEP 5 — Your app URL will be:
https://YOUR-USERNAME.github.io/qtvis-business-os/

## STEP 6 — Install as an app
DESKTOP (Chrome or Edge):
  - Open the URL in Chrome
  - Look for the install icon (⊕) in the address bar
  - Click it → "Install"
  - The app now lives on your desktop / taskbar like any other app

PHONE/TABLET (Android Chrome):
  - Open the URL
  - Tap the 3-dot menu → "Add to Home Screen"
  - The app icon appears on your home screen

IPHONE/IPAD (Safari):
  - Open the URL in Safari
  - Tap the share button (square with arrow) → "Add to Home Screen"

## IMPORTANT — YOUR DATA
- Data is stored in IndexedDB on YOUR DEVICE
- It does NOT go to GitHub — GitHub only hosts the app code
- Use the "Backup / Restore" button in the sidebar to download a JSON backup
- Keep this backup safe — if you clear browser data, your data is lost

## UPDATING THE APP
If KRP Solutions sends you an updated version:
1. Go to your GitHub repo
2. Click on index.html → edit (pencil icon) → paste new code → commit
   OR drag and drop the new files to replace them
3. The app auto-updates next time you open it (service worker handles this)

## CUSTOM DOMAIN (optional)
If you want to use a domain like app.qtvisapartments.co.za:
1. Go to repo Settings → Pages
2. Enter your custom domain
3. Set up a CNAME record with your domain registrar pointing to:
   YOUR-USERNAME.github.io
