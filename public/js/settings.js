const statusList = document.getElementById("statusList");
const form = document.getElementById("settingsForm");

renderDevices(statusList, DATA.devices);

// Simulated connection check (Step 3 will call /api/status on the server)
document.getElementById("refreshBtn").addEventListener("click", () => {
  renderDevices(statusList, DATA.devices.map(d => ({ name: d.name, status: "Checking…" })));
  setTimeout(() => renderDevices(statusList, DATA.devices), 1200);
});

// Fill form from settings
for (const [key, value] of Object.entries(DATA.settings)) {
  const input = form.elements[key];
  if (!input) continue;
  if (input.type === "checkbox") input.checked = value; else input.value = value;
}

form.addEventListener("submit", e => {
  e.preventDefault();
  DATA.settings.serverIp = form.serverIp.value;
  DATA.settings.deviceIp = form.deviceIp.value;
  DATA.settings.cameraUrl = form.cameraUrl.value;
  DATA.settings.unlockTime = +form.unlockTime.value;
  DATA.settings.alertDenied = form.alertDenied.checked;
  const msg = document.getElementById("saveMsg");
  msg.textContent = "✓ Saved (sample mode – stored on the server from Step 3)";
  setTimeout(() => msg.textContent = "", 3000);
});
