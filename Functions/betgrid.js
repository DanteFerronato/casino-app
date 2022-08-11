mainGrid = Array()

betInput = {
    get get() {return document.getElementById("bet-input")}
}

chipIndicator = {
    get get() {return document.getElementById("chip-indicator")}
}

inputOpen = false

chipValues = [1, 2.5, 5, 10, 25, 100]
chipColours = ["#aaa", "#f9b", "#c22", "#22e", "#282", "#222"]

for (let i=1; i<26; i++) {
    mainGrid.push(new Array())
    for (let j=1; j<8; j++){
        mainGrid[i-1].push(document.getElementById("betgrid-"+i+"-"+j))
    }
}

specialCells = new Array (
    cell0 = document.getElementById("betgrid-0"),
    cell00 = document.getElementById("betgrid-00"),
    cell000 = document.getElementById("betgrid-0-00"),
    cellLow = document.getElementById("betgrid-low"),
    cellHigh = document.getElementById("betgrid-high"),
    cellEven = document.getElementById("betgrid-even"),
    cellOdd = document.getElementById("betgrid-odd"),
    cellRed = document.getElementById("betgrid-red"),
    cellBlack = document.getElementById("betgrid-black"),
    cellDz1 = document.getElementById("betgrid-dz-1"),
    cellDz2 = document.getElementById("betgrid-dz-2"),
    cellDz3 = document.getElementById("betgrid-dz-3"),
)

function moveAndCentre(cell, element) {
    e = element.get
    cell.insertBefore(e, null)
    e = element.get
    if (e.classList.contains("invisible")) e.classList.toggle("invisible")
    e.setAttribute("style", "left: "+(cell.clientWidth-e.clientWidth)/2+"px;top:"+(cell.clientHeight-e.clientHeight)/2+"px")
}

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
});