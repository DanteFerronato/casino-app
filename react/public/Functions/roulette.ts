const {ipcRenderer} = require('electron')

var state = "idle"
 
const roulette = document.getElementById("roulette-container")!
const ball = document.getElementById("roulette-ball")!
const ballMovement = document.getElementById("ball-movement")!
var outerRadius = roulette.clientWidth

function ballPositioning(angularTransform : string, radius : number) {
    let size = radius/Math.SQRT2
    ball.setAttribute("style", "left: "+outerRadius*(0.5-size/2)+"px;top: "+outerRadius*(0.5-size/2)+"px;width: "+size*100+"%;height: "+size*100+"%;animation: ball-movement 5s infinite ease-out")
    ballMovement.innerHTML = "@keyframes ball-movement{to {transform: "+angularTransform+"}}"
}

function rouletteSpin() {
    ballPositioning("rotate(28turn)", 6/7)
}

roulette.addEventListener("click", () => {rouletteSpin()})

export {}