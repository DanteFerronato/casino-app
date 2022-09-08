import React, { useState } from 'react';
import style from "./style/title-bar.module.css"
const ipcRenderer = window.require("electron").ipcRenderer

export default function TitleBar() {
    const maximiseBtnSvg = <svg viewBox="0 0 5 5" xmlns="http://www.w3.org/2000/svg">
        <path d="M1,1 h3v3h-3v-3 z" stroke="#cb2" strokeWidth="1" fill="none" />
    </svg>
    const unmaximiseBtnSvg = <svg viewBox="0 0 5 5" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.5,0.5v4m2,0v-4M0.5,1.5h4m0,2h-4" stroke="#cb2" strokeWidth="1" fill="none" />
    </svg>
    const [windowBtnSvg, setWindowBtnSvg] = useState(maximiseBtnSvg)

    ipcRenderer.on("maximiseBtn", () => {
        setWindowBtnSvg(maximiseBtnSvg)
    })

    ipcRenderer.on("unmaximiseBtn", () => {
        setWindowBtnSvg(unmaximiseBtnSvg)
    })

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
                <li id={style["minimise-btn"]} onClick={e => ipcRenderer.send("minimise")}>
                    <svg viewBox="0 0 5 5" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.5,2.5 h4 z" stroke="#cb2" strokeWidth="1" />
                    </svg>
                </li>
                <li id={style["window-btn"]} onClick={e => ipcRenderer.send("maximise")}>
                    {windowBtnSvg}
                </li>
                <li id={style["close-btn"]} onClick={e => ipcRenderer.send("close")}>
                    <svg viewBox="0 0 5 5" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1,1 L4,4 M4,1 L1,4 z" stroke="#cb2" strokeWidth="1" />
                    </svg>
                </li>
            </ul>
        </header>
    )
}