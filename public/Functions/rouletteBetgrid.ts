const mainGrid = Array()

const betInput = {
    get get() {return document.getElementById("bet-input")}
}

const chipIndicator = {
    get get() {return document.getElementById("chip-indicator")}
}

var inputOpen = false

const chipValues = [1, 2.5, 5, 10, 25, 100]
const chipColours = ["#aaa", "#f9b", "#c22", "#22e", "#282", "#222"]

for (let i=1; i<26; i++) {
    mainGrid.push(new Array())
    for (let j=1; j<8; j++){
        mainGrid[i-1].push(document.getElementById("betgrid-"+i+"-"+j))
    }
}

const specialCells = [
    document.getElementById("betgrid-0"),
    document.getElementById("betgrid-00"),
    document.getElementById("betgrid-0-00"),
    document.getElementById("betgrid-low"),
    document.getElementById("betgrid-high"),
    document.getElementById("betgrid-even"),
    document.getElementById("betgrid-odd"),
    document.getElementById("betgrid-red"),
    document.getElementById("betgrid-black"),
    document.getElementById("betgrid-dz-1"),
    document.getElementById("betgrid-dz-2"),
    document.getElementById("betgrid-dz-3"),
]
/*
function moveAndCentre(cell : HTMLElement, element : HTMLElement) {
    let e = element.get
    cell.insertBefore(e, null)
    e = element.get
    if (e.classList.contains("invisible")) e.classList.toggle("invisible")
    e.setAttribute("style", "left: "+(cell.clientWidth-e.clientWidth)/2+"px;top:"+(cell.clientHeight-e.clientHeight)/2+"px")
}
/*
function betInterface(cell) {
    cell.addEventListener("mouseover", () => {
        moveAndCentre(cell, chipIndicator)
    })
    cell.addEventListener("click", () => {
        console.log("click", cell)
        //if (!inputOpen) {
            moveAndCentre(cell, betInput)
        //}
        //inputOpen = !inputOpen
    })
}

for (let i=0; i<25; i++) {
    for (let j=0; j<7; j++){
        let cell = mainGrid[i][j]
        betInterface(cell)
    }
}
specialCells.forEach(cell => {
    betInterface(cell)
});*/