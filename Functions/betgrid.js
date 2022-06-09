main_grid = Array()

betInput = document.getElementById("bet-input")
function getBetInput() {
    betInput = document.getElementById("bet-input")
    return betInput
}

chipIndicator = document.getElementById("bet-input")
function getChipIndicator() {
    chipIndicator = document.getElementById("chip-indicator")
    return chipIndicator
}

inputOpen = false

for (let i=1; i<26; i++) {
    main_grid.push(new Array())
    for (let j=1; j<8; j++){
        main_grid[i-1].push(document.getElementById("betgrid-"+i+"-"+j))
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

function betInterface(cell) {
    cell.addEventListener("mouseover", () => {
        cell.insertBefore(chipIndicator, null)
        getChipIndicator()
        chipIndicator.setAttribute("visibility", "visible")
        chipIndicator.setAttribute("style", "left: "+(cell.clientWidth-chipIndicator.clientWidth)/2+";top:"+cell.clientHeight-chipIndicator.clientHeight)/2
    })
    cell.addEventListener("click", () => {
        if (!inputOpen) {
            cell.insertBefore(betInput, null)
            getBetInput()
            console.log(betInput.getAttribute("visibility"),"",inputOpen)
            betInput.setAttribute("visibility", "visible")
        } else {
            cell.insertBefore(betInput, null)
            getBetInput()
            betInput.setAttribute("visibility", "hidden")
        }
        inputOpen = !inputOpen
    })
}

for (let i=0; i<25; i++) {
    for (let j=0; j<7; j++){
        let cell = main_grid[i][j]
        betInterface(cell)
    }
}
specialCells.forEach(cell => {
    betInterface(cell)
});