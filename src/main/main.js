const { app, BrowserWindow } = require("electron");
const path = require("path");
const windows = require("./windows/windows");

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require("electron-squirrel-startup")) {
  app.quit();
}

app.on("ready", windows.createWindow);
try {
  require("electron-reloader")(module);
} catch {}
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    windows.createWindow()
  }
});