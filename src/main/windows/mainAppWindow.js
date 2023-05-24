const { BrowserWindow, screen } = require("electron");
const path = require("path");
const windowStateKeeper = require('electron-window-state')

exports.createAppWindow = (isShow) => {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;

  let winState = windowStateKeeper({
    defaultWidth: width,
    defaultHeight: height,
  })
  const mainWindow = new BrowserWindow({
    width: winState.width,
    height: winState.height,
    x: winState.x,
    y: winState.y,
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
  winState.manage(mainWindow)
  return mainWindow;
};
