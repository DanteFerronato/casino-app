const {ipcRenderer} = require('electron')

minimiseBtn = document.getElementById("minimise-btn")
windowBtn = document.getElementById("window-btn")
closeBtn = document.getElementById("close-btn")

minimiseBtn.addEventListener("click", () => {
    ipcRenderer.send("minimise")
})

windowBtn.addEventListener("click", () => {
    ipcRenderer.send("maximise")
})

closeBtn.addEventListener("click", () => {
    ipcRenderer.send("close")
})