import React from 'react';
import Head from './head';
import Login from './login';
import Roulette from './roulette';

var window = "login"

function App() {
    let body
    switch (window) {
        case "login": body = Login()
            break;
        
        case "roulette": body = Roulette()
            break;
    
        default:
            break;
    }

    return (
        <>
            <head>{Head({window: window})}</head>
            <body>{body}</body>
        </>
    )
}

export default App;