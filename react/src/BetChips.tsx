import React, { useEffect, useState } from 'react';
import style from "./style/chips.module.css"

export function BetInput(params : {
    location : string[],
    betsClosed : boolean,
    updateBetAmount : (amount : number) => void,
    closeBet : (winner : string | null) => void,
}) {
    const [disabled, setDisabled] = useState(false)
    useEffect(()=>{
        if (params.betsClosed) setDisabled(true)
        else setDisabled(false)
    }, [params.betsClosed])
    
    const [bet, setBet] = useState(1)
    const betSnapPos = [0, 1, 2, 5, 10, 20, 50, 100, 200, 500]
    const betSnap = (delta : boolean /* Whether to snap to a higher (true) or lower (false) bet */) => {
        let betSnapOrder = 1
        for (let i = 0; i < betSnapPos.length; i++) if (bet >= betSnapPos[i]) betSnapOrder = i
        console.log(bet, delta, betSnapOrder)
        let newBet = delta?
            (betSnapPos[betSnapOrder]!=500)? betSnapPos[betSnapOrder+1] : bet :
            (bet>betSnapPos[betSnapOrder])? betSnapPos[betSnapOrder] : betSnapPos[betSnapOrder-1]
        if (newBet > 9999) newBet = 9999
        let balanceChange = newBet - bet
        setBet(newBet)
    }
    useEffect(()=>{
        params.updateBetAmount(bet)
        if (bet == 0) params.closeBet(null)
    }, [bet])

    return (
        <div className={[style["chip"], style["bet-input"]].join(" ")} style={{
            "left": params.location[0],
            "top": params.location[1],
        }}>
            <svg viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                <circle cx="7" cy="7" r="5.5" stroke="none" fill="#ddd" />
                {/* <circle cx="7" cy="7" r="2" stroke="gold" fill="none" /> */}
                <circle cx="7" cy="7" r="5" stroke="gold" strokeWidth="1" strokeDasharray="3 2" fill="none" />
            </svg>
            <p>{bet}</p>
            <button className={style["decrease-bet"]} onClick={()=>{betSnap(false)}} />
            <button className={style["increase-bet"]} onClick={()=>{betSnap(true)}} />
        </div>
    )
}

export function ChipIndicator(params : {
    location : string[],
}) {
    return (
        <div className={style["chip"]} id={style["chip-indicator"]} style={{"left": params.location[0], "top": params.location[1]}}>
            <svg viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                <circle cx="7" cy="7" r="5" stroke="white" strokeWidth="1" strokeDasharray="3 1" fill="none" />
            </svg>
        </div>
    )
}

export function BetParticle(params : {
    location : string[],
    multiplier : number,
    betsClosed : boolean,
}) {
    // const ref = useRef<HTMLElement>().current
    useEffect (() => {
        // ref!.classList.toggle(style[".bet-particle-animate"])
    }, [params.betsClosed]
    )

    return (
        <p className={style["bet-particle"]} style={{"left": params.location[0], "top": params.location[1]}}>{"x"+params.multiplier}</p>
    )
}

const chipValues = [1, 2, 5, 10, 25, 100, 500, 2000, 9999]
const chipColours = ["#aaa", "#f9b", "#c22", "#22e", "#282", "#222", "#526", "#af7", "#5c8"]