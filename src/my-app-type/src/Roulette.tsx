
import React from 'react';
import TitleBar from './TitleBar';
import Layout from './RouletteLayout';
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

export default Roulette;