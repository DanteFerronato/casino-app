import React from 'react';
import style from "./style/title-bar.module.css"

function TitleBar() {
    return (
        <header>
            <div id={style["balance-container"]}>
                <svg viewBox="0 0 5 5" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.25,0 A1.25,2.5 -30,0,1 2.75,5 A1.25,2.5 -35,0,1 1.25,0 z" fill="#cb2" />
                </svg>
                <h2 id={style["balance"]}>$0</h2>
                <a href="#">Deposit</a>
            </div>
            <ul id={style["window-controls"]}>
                <li id={style["minimise-btn"]}>
                    <svg viewBox="0 0 5 5" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.5,2.5 h4 z" stroke="#cb2" stroke-width="1" />
                    </svg>
                </li>
                <li id={style["window-btn"]}>
                    <svg viewBox="0 0 5 5" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1,1 h3v3h-3v-3 z" stroke="#cb2" stroke-width="1" fill="none" />
                    </svg>
                </li>
                <li id={style["close-btn"]}>
                    <svg viewBox="0 0 5 5" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1,1 L4,4 M4,1 L1,4 z" stroke="#cb2" stroke-width="1" />
                    </svg>
                </li>
            </ul>
        </header>
    )
}

export default TitleBar