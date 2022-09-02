import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Hub from './Hub';
import Login from './Login';
import Roulette from './Roulette';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Hub />} />
                <Route path="/login" element={<Login />} />
                <Route path="/roulette" element={<Roulette />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;