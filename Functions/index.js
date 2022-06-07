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

maximiseBtnSvg = "<svg viewBox=\"0 0 5 5\" xmlns=\"http://www.w3.org/2000svg\">\r\n<path d=\"M1,1h3v3h-3v-3z\" stroke=\"#cb2\" stroke-width=\"1\" fill=\"none\">\r\n</svg>"

unmaximiseBtnSvg = "<svg viewBox=\"0 0 5 5\" xmlns=\"http://www.w3.org/2000svg\">\r\n<path d=\"M1.5,0.5v4m2,0v-4M0.5,1.5h4m0,2h-4\" stroke=\"#cb2\" stroke-width=\"1\" fill=\"none\">\r\n</svg>"

ipcRenderer.on("maximiseBtn", () => {
    windowBtn.innerHTML = maximiseBtnSvg
})

ipcRenderer.on("unmaximiseBtn", () => {
    windowBtn.innerHTML = unmaximiseBtnSvg
})

roulette = document.getElementById("roulette-container")

function rouletteSpin() {
    
}

roulette.addEventListener("click", rouletteSpin())