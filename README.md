# VelvetSync 💜🔐

VelvetSync is a privacy-conscious, consent-first IoT control interface for remote intimacy devices. It allows partners to securely transmit control signals (like vibration strength) over encrypted HTTPS using AES-256 encryption and explicit user consent.

---

## 🔧 Features

- 🔐 AES-256 encrypted control signals
- ✅ Explicit consent logging before any control session
- 📱 React Native app interface
- 🌐 Node.js backend with HTTPS support
- 📄 Audit-ready `consent-log.txt` file
- 🔒 Local encryption keys (no cloud storage)
- 🛠 Extensible: Add QR pairing, WebSockets, or device APIs

---

## 📲 How It Works

1. **User A** (the device holder) opens the app and grants remote control to **User B** via the Consent screen.
2. Once consent is granted, **User B** can open the control panel and send encrypted vibration commands.
3. The backend receives the encrypted message, decrypts it securely, and passes the signal to the connected device.
4. All consent events are logged locally in `consent-log.txt`.

---

## 🧰 Setup Guide

### 🖥 Backend (Node.js + HTTPS)

```bash
cd backend
npm install
node index.js