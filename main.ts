// Modules to control application life and create native browser window
const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
/*const {
  addUser,
  dropUser,
  newPurchase,
  placeBet,
} = require("./database/index.ts")*/
const db = require("./database/index")

const headerHeight = 60
const tableWidth = 762
const tableHeight = 300

function createWindow() {
  let mainWindow;

  var { screen } = require('electron')
  var screenSize = screen.getPrimaryDisplay().size
  // Create the browser window.
  mainWindow = new BrowserWindow({
    fullscreen: false,
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

  // Load the react development server
  mainWindow.loadURL("http://localhost:3000/");

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Window functions
  ipcMain.on("minimise", () => {
    mainWindow.minimize()
  })

  ipcMain.on("maximise", () => {
    if (mainWindow.isMaximized()) {
      mainWindow.unmaximize()
      mainWindow.webContents.send("maximiseBtn")
    }
    else {
      mainWindow.maximize()
      mainWindow.webContents.send("unmaximiseBtn")
    }
  })

  ipcMain.on("close", () => {
    mainWindow.close()
  })

  mainWindow.on("resize", () => {
    console.log(mainWindow.getBounds().width, "", mainWindow.isMaximized())
  })

  mainWindow.on("blur", () => {
    mainWindow.webContents.send("blur")
  })

  mainWindow.on("focus", () => {
    mainWindow.webContents.send("focus")
  })

  // Database functions
  ipcMain.handle("add-user", async (e, ...args) => {
    return await db.placeBet(args) // Args: username, email, password
  })

  ipcMain.handle("drop-user", async (e, ...args) => {
    await db.closeBet(args) // Args: id
  })

  ipcMain.handle("new-purchase", async (e, ...args) => {
    return await db.placeBet(args) // Args: userId, amount
  })

  ipcMain.handle("place-bet", async (e, ...args) => {
    return await db.placeBet(args) // Args: username, amount, game, position
  })

  ipcMain.handle("update-bet-amount", async (e, ...args) => {
    await db.updateBetAmount(args) // Args: id, amount
  })

  ipcMain.handle("close-bet", async (e, ...args) => {
    await db.closeBet(args) // Args: id, winner
  })

  ipcMain.handle("add-user", async (e, ...args) => {
    console.log(args)
    await db.addUser(args[0], args[1], args[2],)
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


