import React from 'react';

function Head(args: {window: string}) {
    let extraHead = <></>
    switch (args.window) {
        case "login":
            extraHead = <>
                <link rel="stylesheet" type="text/css" href="waves.css" />
                <link rel="stylesheet" type="text/css" href="login.css" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;800&display=swap" rel="stylesheet" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </>
            break;
        case "roulette":
            extraHead = <>
                <link rel="stylesheet" href="roulette.css" />
                <link rel="stylesheet" href="roulette-layout.css" />
                <script defer src="Functions/roulette.ts" />
                <script defer src="Functions/rouletteBetgrid.ts" />
                <link href="node_modules/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossOrigin="anonymous" />
                <style id="ball-movement" />
            </>
            break;
    
        default:
            break;
    }

    return (
        <head>
            <meta charSet="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        </head>
    )
}

export default Head;