
import React from 'react';
import TitleBar from './TitleBar';
import style from "./style/roulette.module.css"

function Roulette() {
    return (
        <div id={style["wrapper"]}>
            <TitleBar />
            <section className={"mt-4"}>
                <div id={style["main"]}>
                    <img src="res/MesaCasino.png" alt="Casino table background" />
                    <div id={style["roulette-container"]}>
                        <div>
                            <img src="res/lowerBorder.svg" id={style["lower-border"]} className={"img-fluid"} />
                            <img src="res/americanRoulette.svg" id={style["wheel"]} className={"img-fluid"+style["roulette-spinning"]} />
                            <RouletteBall />
                            <img src="res/upperBorder.svg" id={style["upper-border"]} className={"img-fluid"} />
                            <img src="res/handle.svg" id={style["handle"]} className={"img-fluid "+style["roulette-spinning"]} />
                        </div>
                    </div>
                    <Layout />
                    <div id={style["bet-input"]}>
                        <svg viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="7" cy="7" r="5.5" stroke="none" fill="#ddd"/>
                            <circle cx="7" cy="7" r="2" stroke="gold" fill="none"/>
                            <circle cx="7" cy="7" r="5" stroke="gold" stroke-width="1" stroke-dasharray="3 2" fill="none"/>
                        </svg>
                        <input type="number" min="0" max="999" />
                    </div>
                    <div id={style["chip-indicator"]}>
                        <svg viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="7" cy="7" r="5" stroke="white" stroke-width="1" stroke-dasharray="3 1" fill="none"/>
                        </svg>
                    </div>
                </div>
            </section>
        </div>
    )
}

function RouletteBall() {
    return (
        <div id={style["roulette-ball"]}>
            <svg viewBox="0 0 2 2" xmlns="http://www.w3.org/2000/svg" width="50px" height="50px">
                <circle cx="1" cy="1" r="1" stroke="none" fill="white" />
            </svg>
        </div>
    )
}

function Layout() {
    let carpetNums : Array<JSX.Element> = []
    let betgridNums : Array<JSX.Element> = []
    for (let i = 1; i <= 36; i++) {
        carpetNums.push(<LayoutCell n={i} name={null} />)
        betgridNums.push(<BetgridCell type={'single'} n={[i]} name={null} />)
        if (i%3 != 0) {
            betgridNums.push(<BetgridCell type={'double'} n={[i, i+1]} name={null} />)
            if (i<34) betgridNums.push(<BetgridCell type={'quad'} n={[i, i+1, i+3, i+4]} name={null} />)
        }
        if (i<34) betgridNums.push(<BetgridCell type={'double'} n={[i, i+3]} name={null} />)
    }

    return (
        <div id={style["layout-container"]}>
            <div id={style["layout"]}>
                {carpetNums}
                <div id={style["carpet-zero"]}>
                    <div id={style["carpet-0"]}><p>0</p></div>
                    <div id={style["carpet-00"]}><p>00</p></div>
                </div>
                <div id={style["carpet-low"]}><p>Manque</p></div>
                <div id={style["carpet-high"]}><p>Passe</p></div>
                <div id={style["carpet-even"]}><p>Pair</p></div>
                <div id={style["carpet-odd"]}><p>Impair</p></div>
                <div id={style["carpet-red"]}><p>Rouge</p></div>
                <div id={style["carpet-black"]}><p>Noir</p></div>
                <div id={style["carpet-dz-1"]}><p>P</p></div>
                <div id={style["carpet-dz-2"]}><p>M</p></div>
                <div id={style["carpet-dz-3"]}><p>D</p></div>
            </div>
            <div id={style["bet-layout"]}>
                {betgridNums}
                <div id={style["betgrid-0"]}></div>
                <div id={style["betgrid-00"]}></div>
                <div id={style["betgrid-0-00"]}></div>
                <div id={style["betgrid-low"]}></div>
                <div id={style["betgrid-high"]}></div>
                <div id={style["betgrid-even"]}></div>
                <div id={style["betgrid-odd"]}></div>
                <div id={style["betgrid-red"]}></div>
                <div id={style["betgrid-black"]}></div>
                <div id={style["betgrid-dz-1"]}></div>
                <div id={style["betgrid-dz-2"]}></div>
                <div id={style["betgrid-dz-3"]}></div>
            </div>
        </div>
    )
}

function numberPosition(n : number, ) {
    return {
        column: Math.floor((n-1)/3)+2,
        row: (n-1)%3
    }
}
const french = false
const americanNums = ["0","28","9","26","30","11","7","20","32","17","5","22","34","15","3","24","36","13","1","00","27","10","25","29","12","8","19","31","18","6","21","33","16","4","23","35","14","2"]
const frenchNums = ["0","32","15","19","4","21","2","25","17","34","6","27","13","36","11","30","8","23","10","5","24","16","33","1","20","14","31","9","22","18","29","7","28","12","35","3","26"]
function LayoutCell (params : {
    n : number | null,
    name : string | null,
}) {
    let special = typeof(params.n) == null
    let n = special? 0 : params.n!
    let name = special? params.name! : n!+""
    let pos = numberPosition(n)
    let rouletteOrderN = french? frenchNums.indexOf(n+"") : americanNums.indexOf(n+"")
    let black = (rouletteOrderN % 2 == 1) != french
    
    return (
        <div className={style[special? "green-cell":black? "black-cell":"scarlet-cell"]} id={"carpet-"+name} style={!special? {"gridArea" : 3-pos.row + " / " + pos.column}:{}}><p>{n}</p></div>
    )
}

function BetgridCell(params : {
    type : string, // One of either single, double, quad or special
    n : Array<number> | null,
    name : string | null,
}) {
    let single = params.type == "single"
    let double = params.type == "double"
    let special = params.type == "special"
    let column : number
    let row : number

    if (!special) {
        let n = params.n!
        let pos = params.n!.map(i => numberPosition(i))
        column = double?
            (n[1]-n[0]==1)? pos[0].column*2+1 : pos[0].column*2+2
            :single? pos[0].column*2+1 : pos[0].column*2+2
        row = double?
            (n[1]-n[0]==1)? pos[0].column*2+2 : pos[0].column*2+1
            :single? pos[0].row*2+2 : pos[0].column*2+2
    }
    let name = special? params.name! : params.type+"-"+params.n?.join("-")

    return (
        <div id={"betgrid-"+name} style={!special? {"gridArea" : 7-row! + " / " + column!}:{}} />
    )
}

export default Roulette;