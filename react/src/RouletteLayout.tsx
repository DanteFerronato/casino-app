import { Paper } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { JsxElement } from 'typescript';
import { BetInput, BetParticle, ChipIndicator } from './BetChips';
import style from "./style/roulette.module.css"

export default function Layout(params : {
    betsClosed : boolean,
    handleBetsClosed : () => void,
}) {
    const [inputLocation, setInputLocation] = useState(["0", "0"])
    const [indicatorLocation, setIndicatorLocation] = useState(["0", "0"])
    const [betParticleM, setParticleM] = useState(1)
    
    const handleRelocate = (position : string[], id : string) => {
        switch (id) {
            case "bet-input": setInputLocation(position)
                break;
            case "chip-indicator": setIndicatorLocation(position)
                break;
            // case "bet-particle": setParticleLocation(position)
                // break;
        }
    }

    let carpetNums : JSX.Element[] = []
    let betgridNums : JSX.Element[] = []
    for (let i = 1; i <= 36; i++) {
        carpetNums.push(<LayoutCell n={i} name={null} />)
        betgridNums.push(<BetgridCell
            type={'single'} n={[i]} name={null}
            inputRelocate={handleRelocate} />)
        if (i%3 != 0) {
            betgridNums.push(<BetgridCell
                type={'double'} n={[i, i + 1]} name={null}
                inputRelocate={handleRelocate} />)
            if (i<34) betgridNums.push(<BetgridCell
                type={'quad'} n={[i, i+1, i+3, i+4]} name={null}
                inputRelocate={handleRelocate} />)
        }
        if (i<34) betgridNums.push(<BetgridCell
            type={'double'} n={[i, i+3]} name={null}
            inputRelocate={handleRelocate} />)
    }

    useEffect (() => {
        params.handleBetsClosed()
    }, [params.betsClosed]
    )
    
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
            <BetInput location={inputLocation} betsClosed={params.betsClosed} />
            <ChipIndicator location={indicatorLocation} />
            <BetParticle location={inputLocation} multiplier={betParticleM} betsClosed={params.betsClosed} />
        </div>
    )
}

const numberPosition = (n : number, ) => {
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
    const special = typeof(params.n) == null
    const n = special? 0 : params.n!
    const name = special? params.name! : n!+""
    const pos = numberPosition(n)
    const rouletteOrderN = french? frenchNums.indexOf(n+"") : americanNums.indexOf(n+"")
    const black = (rouletteOrderN % 2 == 1) != french
    
    return (
        <div className={style[special? "green-cell":black? "black-cell":"scarlet-cell"]} id={"carpet-"+name} style={!special? {"gridArea" : 3-pos.row + " / " + pos.column}:{}}><p>{n}</p></div>
    )
}

function BetgridCell(params : {
    type : string, // One of either single, double, quad or special
    n : number[] | null,
    name : string | null,
    inputRelocate : (position : string[], id : string) => void,
}) {
    const single = params.type == "single"
    const double = params.type == "double"
    const special = params.type == "special"
    let column : number
    let row : number

    if (!special) {
        let n = params.n!
        let pos = params.n!.map(i => numberPosition(i))
        column = double?
            (n[1]-n[0]==1)? pos[0].column*2-1 : pos[0].column*2
            :single? pos[0].column*2-1 : pos[0].column*2
        row = double?
            (n[1]-n[0]==1)? pos[0].row*2+2 : pos[0].row*2+1
            :single? pos[0].row*2+1 : pos[0].row*2+2
    }
    const name = special? params.name! : params.type+"-"+params.n?.join("-")

    return (
        <div id={"betgrid-"+name} style={{
            "gridArea" : !special? 7-row! + " / " + column! : "none",
            "visibility" : "visible"
        }}
        onClick={e=>{
            console.log("click ", name, column, row)
            params.inputRelocate(centreredPosition(column, row), "bet-input")
        }} onMouseOver={e=>{
            params.inputRelocate(centreredPosition(column, row), "chip-indicator")
        }} />
    )
}

const gridToPosition = (columns : number[], rows : number[]) => {
    let listCummulate = (list : number[]) => {
        let sum = 0
        let sumList = [sum]
        for (const e in list) {
            if (Object.prototype.hasOwnProperty.call(list, e)) {
                sum += list[e]
                sumList.push(sum)
            };
        }
        let newList = sumList.map(e => {
            return 100*e/sum+"%"
        });
        return newList
    }
    return [listCummulate(columns), listCummulate(rows)]
}
const arrayConcatMultiplication = (array : Array<any>, multiplier : number) => {
    let product : Array<any> = []
    for (let i = 0; i < multiplier; i++) {
        product = product.concat(array)
    }
    return product
}
const positions = gridToPosition(
    [.8].concat(arrayConcatMultiplication([.4, .6], 12)).concat([.4, .8]),
    arrayConcatMultiplication([.4, .6], 3).concat([.4, .8, 1])
)
const centreredPosition = (column : number, row : number) => {
    let left = (Number.parseFloat(positions[0][column-2].replace("%", "")) + Number.parseFloat(positions[0][column-1].replace("%","")))/2 + "%"
    let top = (Number.parseFloat(positions[1][5-row].replace("%", "")) + Number.parseFloat(positions[1][6-row].replace("%", "")))/2 + "%"
    return [left, top]
}

var inputOpen = false

const chipValues = [1, 2.5, 5, 10, 25, 100]
const chipColours = ["#aaa", "#f9b", "#c22", "#22e", "#282", "#222"]