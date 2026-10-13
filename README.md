# Security Door Lock System – Step 1 (Frontend)

Static HTML/CSS/JavaScript dashboard using sample data. No install needed.

## Run
- Easiest: open `public/index.html` in a browser.
- Or serve it (recommended, same as it will run on the Dell):
  `cd public && python3 -m http.server 8080` then visit http://localhost:8080
  (other devices on the Wi-Fi: http://<dell-ip>:8080)

## Pages
| Page | File | Features |
|------|------|----------|
| Dashboard | index.html | user/entry counts, door status + simulated unlock, recent access, CCTV preview, device status |
| Users | users.html | search, add user, enable/disable |
| Access Logs | logs.html | search, filter by method/result, export CSV |
| CCTV | camera.html | live-feed placeholder with timestamp, snapshots, fullscreen |
| Settings | settings.html | device status check, server/device/camera config |

## Where the data lives
All sample data is in `public/js/data.js`. Changes (new users, settings) last until page reload.
In Step 3, the arrays in `data.js` get replaced by `fetch("/api/users")`, `fetch("/api/access-logs")`, etc.
