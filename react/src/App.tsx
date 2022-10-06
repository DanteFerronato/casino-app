import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Hub from './Hub';
import Login from './Login';
import Register from './Register';
import Roulette from './Roulette';
import TitleBar from './TitleBar';
const ipcRenderer = window.require("electron").ipcRenderer

export default function App() {
    const [blur, setBlur] = useState(false)
    ipcRenderer.on("blur", () => {setBlur(true)})
    ipcRenderer.on("focus", () => {setBlur(false)})

    return (
        <div id="app" style={{"opacity": blur? "50%" : "100%"}}>
            <TitleBar />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Hub />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/roulette" element={<Roulette />} />
                </Routes>
            </BrowserRouter>
            {blur? <div id="blur-shade" />: <></>}
        </div>
    )
}