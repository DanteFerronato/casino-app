import React from 'react';
import TitleBar from './TitleBar';
import Layout from './RouletteLayout';
import style from "./style/roulette.module.css"

function Roulette() {
    return (
        <div id={style["wrapper"]}>
            <TitleBar />
            <section>
                <div id={style["main"]}>
                    <img src="img/rouletteCarpet.png" alt="Green roulette table background" />
                    <div id={style["roulette-container"]}>
                        <div>
                            <img src="img/rouletteLowerBorder.svg" id={style["lower-border"]} />
                            <img src="img/rouletteAmerican.svg" id={style["wheel"]} className={style["roulette-spinning"]} />
                            <RouletteBall />
                            <img src="img/rouletteUpperBorder.svg" id={style["upper-border"]} />
                            <img src="img/rouletteHandle.svg" id={style["handle"]} className={style["roulette-spinning"]} />
                        </div>
                    </div>
                    <Layout />
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