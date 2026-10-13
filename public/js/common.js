// Shared helpers used by every page
function tickClock() {
  const now = new Date();
  const txt = now.toLocaleDateString("en-GB") + " " + now.toLocaleTimeString("en-GB");
  const c = document.getElementById("clock");
  if (c) c.textContent = txt;
  document.querySelectorAll(".cam-time").forEach(el => el.textContent = txt);
}
tickClock();
setInterval(tickClock, 1000);

function badge(text) {
  return `<span class="badge ${text.toLowerCase()}">${text}</span>`;
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

function statusClass(status) {
  if (status === "Online") return "ok";
  if (status === "Offline") return "bad";
  return "warn";
}

function renderDevices(listEl, devices) {
  listEl.innerHTML = devices.map(d =>
    `<li><span>${escapeHtml(d.name)}</span><span class="dot ${statusClass(d.status)}">● ${escapeHtml(d.status)}</span></li>`
  ).join("");
}
