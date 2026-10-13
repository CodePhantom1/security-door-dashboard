const logTable = document.getElementById("logTable");
const logSearch = document.getElementById("logSearch");
const methodFilter = document.getElementById("methodFilter");
const resultFilter = document.getElementById("resultFilter");

function filteredLogs() {
  const q = logSearch.value.trim().toLowerCase();
  return DATA.logs.filter(l =>
    l.user.toLowerCase().includes(q) &&
    (!methodFilter.value || l.method === methodFilter.value) &&
    (!resultFilter.value || l.result === resultFilter.value));
}

function displayLogs() {
  const logs = filteredLogs();
  logTable.innerHTML = logs.map(l => `
    <tr>
      <td>${l.date.split("-").reverse().join("/")}</td>
      <td>${l.time}</td>
      <td>${escapeHtml(l.user)}</td>
      <td>${l.method}</td>
      <td>${badge(l.result)}</td>
    </tr>`).join("") || `<tr><td colspan="5" class="muted">No matching records.</td></tr>`;

  const denied = logs.filter(l => l.result === "Denied").length;
  document.getElementById("logSummary").textContent =
    `${logs.length} records · ${logs.length - denied} granted · ${denied} denied`;
}

[logSearch, methodFilter, resultFilter].forEach(el => el.addEventListener("input", displayLogs));

document.getElementById("exportBtn").addEventListener("click", () => {
  const rows = [["Date", "Time", "User", "Method", "Result"],
    ...filteredLogs().map(l => [l.date, l.time, l.user, l.method, l.result])];
  const csv = rows.map(r => r.join(",")).join("\n");
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([csv], { type: "text/csv" }));
  a.download = `access-logs-${today}.csv`;
  a.click();
});

displayLogs();
