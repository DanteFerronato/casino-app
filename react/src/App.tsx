import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Hub from './Hub';
import Login from './Login';
import Register from './Register';
import Roulette from './Roulette';
import TitleBar from './TitleBar';

export default function App() {
    return (
        <div id="app">
            <TitleBar />
            <BrowserRouter>
                <Routes>
                    <Route path="/hub" element={<Hub />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/roulette" element={<Roulette />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}