import React from 'react';
import Login from './Login';
import Roulette from './Roulette';

var window = "roulette"

function App() {
    let body = <></>
    switch (window) {
        case "login": body = <Login />
            break;
        
        case "roulette": body = <Roulette />
            break;
    
        default:
            break;
    }

    return body
}

export default App;