// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("account", {
  exitApp: () => ipcRenderer.send("exitApp"),
  login: (userId, token, user, email) =>
    ipcRenderer.send("login", userId, token, user, email),
  logout: () => ipcRenderer.send("logout"),
  getEmail: (email) => ipcRenderer.on("getEmail", email),
  getUserType: (userType) => ipcRenderer.on("getUserType", userType),
  getToken: (token) => ipcRenderer.on("getToken", token),
  getUserId: (userId) => ipcRenderer.on("getUserId", userId),
  getAuth: (auth) => ipcRenderer.on("getAuth", auth),
  copyCode: (code) => ipcRenderer.send("copyCode", code),
});




