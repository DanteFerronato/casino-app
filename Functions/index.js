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

const roulette = document.getElementById("roulette-container")
const ball = document.getElementById("roulette-ball")
const ballMovement = document.getElementById("ball-movement")
var outerRadius = roulette.clientWidth

function ballPositioning(angularTransform, radius) {
    let size = radius/Math.SQRT2
    ball.setAttribute("style", "left: "+outerRadius*(0.5-size/2)+"px;top: "+outerRadius*(0.5-size/2)+"px;width: "+size*100+"%;height: "+size*100+"%;animation: ball-movement 5s infinite ease-out")
    ballMovement.innerHTML = "@keyframes ball-movement{to {transform: "+angularTransform+"}}"
}

function rouletteSpin() {
    ballPositioning("rotate(28turn)", 6/7)
}

roulette.addEventListener("click", rouletteSpin())