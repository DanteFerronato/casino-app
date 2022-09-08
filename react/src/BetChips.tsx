import React, { useState } from 'react';
import style from "./style/chips.module.css"

export function BetInput(params : {
    location : string[],
}) {
    return (
        <div className={style["chip"]} id={style["bet-input"]} style={{"left": params.location[0], "top": params.location[1]}}>
            <svg viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                <circle cx="7" cy="7" r="5.5" stroke="none" fill="#ddd"/>
                {/* <circle cx="7" cy="7" r="2" stroke="gold" fill="none"/> */}
                <circle cx="7" cy="7" r="5" stroke="gold" strokeWidth="1" strokeDasharray="3 2" fill="none"/>
            </svg>
            <input type="number" min="0" max="999" />
        </div>
    )
}

export function ChipIndicator(params : {
    location : string[],
}) {
    return (
        <div className={style["chip"]} id={style["chip-indicator"]} style={{"left": params.location[0], "top": params.location[1]}}>
            <svg viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                <circle cx="7" cy="7" r="5" stroke="white" strokeWidth="1" strokeDasharray="3 1" fill="none"/>
            </svg>
        </div>
    )
}

export function BetParticle(params : {
    location : string[],
    multiplier : number,
}) {
    return (
        <p className={style["bet-particle"]} style={{"left": params.location[0], "top": params.location[1]}}>{"x"+params.multiplier}</p>
    )
}