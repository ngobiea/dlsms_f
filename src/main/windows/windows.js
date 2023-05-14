const { app, ipcMain } = require("electron");
const accountWindow = require("./accountWindow");
const mainAppWindow = require("./mainAppWindow");
const manageCookies = require("./cookies");
const axios = require("axios");
const BrowserHistory = require("node-browser-history");

exports.createWindow = async () => {
  BrowserHistory.getAllHistory(60).then((history) => {
    // console.log(history);
  });
  const { setCookies, removeCookies, isSetCookie, getCookie } =
    manageCookies.manageCookies();

  let mainWindow;
  let accWindow;
  if ((await isSetCookie("userToken")) && (await isSetCookie("userId"))) {
    mainWindow = mainAppWindow.createAppWindow(true);
    mainWindow.on("ready-to-show", async () => {
      try {
        const userType = await getCookie("userType");
        const token = await getCookie("userToken");
        const userId = await getCookie("userId");

        mainWindow.webContents.send("getUserType", userType[0].value);
        mainWindow.webContents.send("getToken", token[0].value);
        mainWindow.webContents.send("getUserId", userId[0].value);
      } catch (error) {
        console.log(error);
      }
    });
  } else {
    accWindow = accountWindow.createAccountWindow();
    accWindow.on("ready-to-show", async () => {
      const email = await getCookie("email");
      accWindow.webContents.send("getEmail", email[0].value);
    });

    mainWindow = mainAppWindow.createAppWindow(false);
  }

  ipcMain.on("exitApp", (e) => {
    app.quit();
  });

  ipcMain.on("login", (e, userId, token, user, email) => {
    setCookies(userId);
    setCookies(token);
    setCookies(user);
    setCookies(email);

    accWindow.close();
    accWindow === null;
    mainWindow = mainAppWindow.createAppWindow(true);
    mainWindow.on("ready-to-show", async () => {
      try {
        const userType = await getCookie("userType");
        const token = await getCookie("userToken");
        const userId = await getCookie("userId");
        mainWindow.webContents.send("getUserType", userType[0].value);
        mainWindow.webContents.send("getToken", token[0].value);
        mainWindow.webContents.send("getUserId", userId[0].value);
      } catch (error) {
        console.log(error);
      }
    });
  });
  ipcMain.on("logout", async (e) => {
    removeCookies("https://dlsms.com", "userToken");
    removeCookies("https://dlsms.com", "userType");

    mainWindow.close();
    mainWindow === null;
    accWindow = accountWindow.createAccountWindow();
    accWindow.on("ready-to-show", async () => {
      const userType = await getCookie("userType");
      const email = await getCookie("email");

      accWindow.webContents.send("getEmail", email[0].value);
      accWindow.webContents.send("getUserType", userType[0].value);
    });
  });
};
