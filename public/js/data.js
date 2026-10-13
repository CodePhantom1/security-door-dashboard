// Sample data for Step 1. In Step 3 this is replaced by fetch("/api/...") calls to Node.js.
const today = new Date().toISOString().slice(0, 10);

const DATA = {
  users: [
    { id: "001", name: "Ahmed",   role: "Admin",   method: "Fingerprint", enrolled: "2026-09-01", status: "Active" },
    { id: "002", name: "John",    role: "Staff",   method: "Fingerprint", enrolled: "2026-09-02", status: "Active" },
    { id: "003", name: "Sarah",   role: "Staff",   method: "Face",        enrolled: "2026-09-03", status: "Active" },
    { id: "004", name: "Mai",     role: "Student", method: "Fingerprint", enrolled: "2026-09-05", status: "Active" },
    { id: "005", name: "Omar",    role: "Student", method: "Palm",        enrolled: "2026-09-08", status: "Active" },
    { id: "006", name: "Lina",    role: "Staff",   method: "Password",    enrolled: "2026-09-10", status: "Disabled" },
    { id: "007", name: "David",   role: "Visitor", method: "Face",        enrolled: "2026-09-15", status: "Active" }
  ],
  logs: [
    { date: today, time: "09:47", user: "Sarah",   method: "Face",        result: "Granted" },
    { date: today, time: "09:21", user: "Mai",     method: "Fingerprint", result: "Granted" },
    { date: today, time: "09:03", user: "Unknown", method: "Fingerprint", result: "Denied" },
    { date: today, time: "08:42", user: "John",    method: "Fingerprint", result: "Granted" },
    { date: today, time: "08:31", user: "Ahmed",   method: "Fingerprint", result: "Granted" },
    { date: "2026-09-21", time: "17:12", user: "Omar",    method: "Palm",        result: "Granted" },
    { date: "2026-09-21", time: "16:55", user: "Lina",    method: "Password",    result: "Denied" },
    { date: "2026-09-21", time: "13:08", user: "David",   method: "Face",        result: "Granted" },
    { date: "2026-09-21", time: "08:29", user: "Ahmed",   method: "Fingerprint", result: "Granted" },
    { date: "2026-09-20", time: "18:44", user: "Unknown", method: "Face",        result: "Denied" }
  ],
  devices: [
    { name: "Dell OptiPlex server",  status: "Online" },
    { name: "Comet FZ05 fingerprint device", status: "Online" },
    { name: "CCTV camera",           status: "Online" },
    { name: "Wi-Fi router",          status: "Online" },
    { name: "Database",              status: "Not connected (Step 4)" }
  ],
  settings: {
    serverIp: "192.168.1.10", deviceIp: "192.168.1.20",
    cameraUrl: "rtsp://192.168.1.30:554/stream1", unlockTime: 5, alertDenied: true
  }
};
