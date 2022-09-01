// Modules to control application life and create native browser window
const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
//const db = require("./DB")

const startWindow = process.env.START?.trim()

console.log("ENV:", startWindow);

const headerHeight = 60
const tableWidth = 762
const tableHeight = 300
const aspectRatioH = tableWidth / (tableHeight + headerHeight)
const aspectRatioV = tableHeight / (tableWidth + headerHeight)
var aspectRatio = aspectRatioH

require("./database");

require('electron-reload')(__dirname, {
  electron: path.join(__dirname, 'node_modules', '.bin', 'electron'),
  hardResetMethod: 'exit'
});

function createWindow() {
  let mainWindow;

  if (startWindow == "LOGIN") {
    // Create the browser window.
    mainWindow = new BrowserWindow({
      frame: false,
      transparent: true,
      fullscreenable: true,
      resizable: false,
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
        devTools: true,
        //preload: path.join(__dirname, 'preload.js')
      }
    })

    // and load the index.html of the app.
    mainWindow.loadFile('login.html')
  } else if (startWindow == "ROULETTE") {
    var { screen } = require('electron')
    var screenSize = screen.getPrimaryDisplay().size
    // Create the browser window.
    mainWindow = new BrowserWindow({
      width: Math.round(tableWidth * 1.4),
      height: Math.round(tableHeight * 1.4 + headerHeight),
      minWidth: Math.ceil(tableHeight * 0.5 + headerHeight),
      minHeight: Math.ceil(tableWidth * 0.5),
      maxWidth: screenSize.width,
      maxHeight: screenSize.height,
      frame: false,
      transparent: true,
      fullscreenable: true,
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
        devTools: true,
        //preload: path.join(__dirname, 'preload.js')
      }
    })

    // and load the index.html of the app.
    mainWindow.loadFile('index.html')
  }

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  ipcMain.on("minimise", () => {
    mainWindow.minimize()
  })

  function maximiseBtn() {
    if (mainWindow.isMaximized()) {
      mainWindow.unmaximize()
      mainWindow.webContents.send("maximiseBtn")
      if (startWindow == "ROULETTE" && (mainWindow.getBounds().width > screenSize.width - 10)) {
        aspectRatio = screenSize.width / screenSize.height
      }
    }
    else {
      mainWindow.maximize()
      mainWindow.webContents.send("unmaximiseBtn")
    }
  }

  ipcMain.on("maximise", () => {
    maximiseBtn()
  })

  ipcMain.on("close", () => {
    mainWindow.close()
  })

  mainWindow.on("resize", () => {
    console.log(mainWindow.getBounds().width, "", mainWindow.isMaximized())
    if (!mainWindow.isMaximized()) {
      if (startWindow == "ROULETTE" && (mainWindow.getBounds().width < aspectRatioV * screenSize.height)) {
        mainWindow.y = 0
        aspectRatio = aspectRatioV
      } else {
        aspectRatio = aspectRatioH
      }
      if (startWindow == "ROULETTE") mainWindow.setAspectRatio(aspectRatio)
    }
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.


