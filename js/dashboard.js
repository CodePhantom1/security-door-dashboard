const todayLogs = DATA.logs.filter(l => l.date === today);

document.getElementById("userCount").textContent =
  DATA.users.filter(u => u.status === "Active").length;
document.getElementById("entryCount").textContent =
  todayLogs.filter(l => l.result === "Granted").length;
document.getElementById("deniedCount").textContent =
  todayLogs.filter(l => l.result === "Denied").length + " denied today";

function displayAccessLogs() {
  const table = document.getElementById("accessTable");
  table.innerHTML = "";
  DATA.logs.slice(0, 6).forEach(log => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${escapeHtml(log.user)}</td>
      <td>${log.method}</td>
      <td>${log.date === today ? log.time : log.date.slice(5) + " " + log.time}</td>
      <td>${badge(log.result)}</td>`;
    table.appendChild(row);
  });
}
displayAccessLogs();
renderDevices(document.getElementById("deviceList"), DATA.devices);

// Simulated door unlock (Step 5 will send this to the real lock)
const doorStatus = document.getElementById("doorStatus");
const doorBtn = document.getElementById("doorBtn");
doorBtn.addEventListener("click", () => {
  let secs = DATA.settings.unlockTime;
  doorStatus.textContent = "UNLOCKED";
  doorStatus.className = "unlocked";
  doorBtn.disabled = true;
  const timer = setInterval(() => {
    secs--;
    doorBtn.textContent = `Locking in ${secs}s`;
    if (secs <= 0) {
      clearInterval(timer);
      doorStatus.textContent = "LOCKED";
      doorStatus.className = "locked";
      doorBtn.disabled = false;
      doorBtn.textContent = `Unlock (${DATA.settings.unlockTime} s)`;
    }
  }, 1000);
  doorBtn.textContent = `Locking in ${secs}s`;
});
doorBtn.textContent = `Unlock (${DATA.settings.unlockTime} s)`;
