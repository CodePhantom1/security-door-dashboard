// Step 6: replace the placeholder with the real stream, e.g. <img src="http://camera-ip/video">
// or an HLS/WebRTC player fed from the camera's RTSP stream via the Node.js server.
const feed = document.getElementById("mainFeed");
const snapList = document.getElementById("snapList");
let snaps = [];

document.getElementById("snapBtn").addEventListener("click", () => {
  feed.classList.remove("flash"); void feed.offsetWidth; feed.classList.add("flash");
  snaps.unshift(new Date().toLocaleString("en-GB"));
  snapList.innerHTML = snaps.map((s, i) =>
    `<li>📷 snapshot_${String(snaps.length - i).padStart(3, "0")}.jpg<br><span class="muted">${s}</span></li>`).join("");
});

document.getElementById("fullBtn").addEventListener("click", () => {
  if (feed.requestFullscreen) feed.requestFullscreen();
});
