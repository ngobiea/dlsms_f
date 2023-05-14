const { BrowserWindow } = require("electron");
const path = require("path");
exports.createAccountWindow = (isShow) => {
  const accountWindow = new BrowserWindow({
    width: 700,
    height: 750,
    frame: false,
    webPreferences: {
      preload: path.join(__dirname, "../../preload/preload.js"),
    },
    backgroundColor: "#759278",
    resizable: false,
    title: "account",
    show: isShow,
  });
  accountWindow.loadFile(path.join(__dirname, "../../public/account.html"));
  return accountWindow;
};
