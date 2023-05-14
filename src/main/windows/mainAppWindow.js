const { BrowserWindow, screen } = require("electron");
const path = require("path");

exports.createAppWindow = (isShow) => {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;
  const mainWindow = new BrowserWindow({
    width: width,
    height: height,
    webPreferences: {
      preload: path.join(__dirname, "../../preload/preload.js"),
    },
    autoHideMenuBar: true,
    titleBarStyle: "hidden",
    titleBarOverlay: {
      color: "#064f32",
      symbolColor: "white",
      height: 40,
    },
    title: "main",
    show: isShow,
  });
  mainWindow.loadFile(path.join(__dirname, "../../public/index.html"));
  return mainWindow;
};
