const userTable = document.getElementById("userTable");
const search = document.getElementById("userSearch");
const dialog = document.getElementById("userDialog");
const form = document.getElementById("userForm");

function displayUsers() {
  const q = search.value.trim().toLowerCase();
  const list = DATA.users.filter(u =>
    u.name.toLowerCase().includes(q) || u.id.includes(q));

  userTable.innerHTML = list.map(u => `
    <tr>
      <td>${u.id}</td>
      <td>${escapeHtml(u.name)}</td>
      <td>${u.role}</td>
      <td>${u.method}</td>
      <td>${u.enrolled}</td>
      <td>${badge(u.status)}</td>
      <td><button class="link-btn" data-id="${u.id}">${u.status === "Active" ? "Disable" : "Enable"}</button></td>
    </tr>`).join("") || `<tr><td colspan="7" class="muted">No users found.</td></tr>`;
}

userTable.addEventListener("click", e => {
  const id = e.target.dataset.id;
  if (!id) return;
  const user = DATA.users.find(u => u.id === id);
  user.status = user.status === "Active" ? "Disabled" : "Active";
  displayUsers();
});

search.addEventListener("input", displayUsers);
document.getElementById("addUserBtn").addEventListener("click", () => dialog.showModal());
document.getElementById("cancelUser").addEventListener("click", () => dialog.close());

form.addEventListener("submit", () => {
  const f = new FormData(form);
  const nextId = String(Math.max(...DATA.users.map(u => +u.id)) + 1).padStart(3, "0");
  DATA.users.push({
    id: nextId, name: f.get("name").trim(), role: f.get("role"), method: f.get("method"),
    enrolled: today, status: "Active"
  });
  form.reset();
  displayUsers();
});

displayUsers();
