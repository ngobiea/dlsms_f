const { app, ipcMain } = require("electron");
const accountWindow = require("./accountWindow");
const mainAppWindow = require("./mainAppWindow");
const manageCookies = require("./cookies");
const BrowserHistory = require("node-browser-history");

exports.createWindow = async () => {
  BrowserHistory.getAllHistory(60).then((history) => {
    // console.log(history);
  });
  const { setCookies, removeCookies, isSetCookie, getCookie, getCookies } =
    manageCookies.manageCookies();
  let mainWindow;
  let accWindow;
  if ((await isSetCookie("userToken")) && (await isSetCookie("userId"))) {
    mainWindow = mainAppWindow.createAppWindow(false);
    mainWindow.on("ready-to-show", async () => {
      try {
        const cookies = await getCookies();
        const auth = {}
        cookies.forEach((cookie) => {
          if (cookie["name"] === "userType") {
            auth["userType"] = cookie["value"]
          }
          if (cookie["name"] === "userToken") {
            auth["userToken"] = cookie["value"]
          }
          if (cookie["name"] === "userId") {
            auth["userId"] = cookie["value"]
          }
        });
          mainWindow.show();
          mainWindow.webContents.send("getAuth", auth);
      } catch (error) {
        console.log(error);
      }
    });
  } else {
    accWindow = accountWindow.createAccountWindow(false);
    accWindow.on("ready-to-show", async () => {
      const cookies = await getCookies();
      cookies.forEach((cookie) => {
        if (cookie["name"] === "userType") {
          accWindow.webContents.send("getUserType", cookie["value"]);
        }
        if (cookie["name"] === "email") {
          accWindow.webContents.send("getEmail", cookie["value"]);
        }
      });
      accWindow.show();

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
    mainWindow = mainAppWindow.createAppWindow(false);
    mainWindow.on("ready-to-show", async () => {
      try {
         const cookies = await getCookies();
         const auth = {};
         cookies.forEach((cookie) => {
           if (cookie["name"] === "userType") {
             auth["userType"] = cookie["value"];
           }
           if (cookie["name"] === "userToken") {
             auth["userToken"] = cookie["value"];
           }
           if (cookie["name"] === "userId") {
             auth["userId"] = cookie["value"];
           }
         });
         mainWindow.webContents.send("getAuth", auth);
        
         mainWindow.show();
      } catch (error) {
        console.log(error);
      }
    });
  });
  ipcMain.on("logout", async (e) => {
    removeCookies("https://dlsms.com", "userToken");
    removeCookies("https://dlsms.com", "userId");

    mainWindow.close();
    mainWindow === null;
    accWindow = accountWindow.createAccountWindow(false);
    accWindow.on("ready-to-show", async () => {
      const cookies = await getCookies();
       cookies.forEach((cookie) => {
         if (cookie["name"] === "userType") {
          
           accWindow.webContents.send("getUserType", cookie["value"]);
         }
         if (cookie["name"] === "email") {
           accWindow.webContents.send("getEmail", cookie["value"]);
         }
       });
       accWindow.show();
    });
  });
};
