import { isGenericTypeAnnotation } from '@babel/types';
import {useEffect, useState} from 'react';


let gameStats = {
    wins: 0,
    losses: 0,
    plays: 0,
    maxWinsInARow: 0,
    maxLossesInARow: 0,
    winsInARow: 0,
    lossesInARow: 0,
    lastTry: 'na',    
}

let frameCounter = 0;

const executeGame = () => {
    gameStats.plays++;
    const number = Math.random();

    if(number < 0.49){
        gameStats.wins++;
        gameStats.lastTry = 'win';

        // if(gameStats.winsInARow > gameStats.maxWinsInARow){
        //     gameStats.maxWinsInARow = gameStats.winsInARow;
        // }
        
    }        
    else {
        gameStats.losses++;
        gameStats.lastTry = 'loss';
    }

    if(gameStats.lastTry === 'win'){
        gameStats.lossesInARow = 0;
        gameStats.winsInARow++;

        if(gameStats.winsInARow > gameStats.maxWinsInARow)
            gameStats.maxWinsInARow = gameStats.winsInARow;
        
    }
    else if(gameStats.lastTry === 'loss'){
        gameStats.winsInARow = 0;
        gameStats.lossesInARow++;

        if(gameStats.lossesInARow > gameStats.maxLossesInARow)
            gameStats.maxLossesInARow = gameStats.lossesInARow;    
    }
}

setInterval(() => {

    frameCounter++;

   

    for (let i = 0; i < 1; i++)
        executeGame();    

    if(frameCounter % 60 == 0){
        console.log('-------------');
        console.log(gameStats);
    }

}, 1000 / 60);


const App = () => {

    const [wins, setWins] = useState(0);
    const [losses, setLosses] = useState(0);

    const [triesCount, setTriesCount] = useState(0);

    const [frameCounter, setFrameCounter] = useState(0);
    



    return(
        <div>
            <h1>Total plays: {triesCount}</h1>
            <h1>Wins: {wins}</h1>
            <h1>Losses: {losses}</h1>
        </div>
    );
}

export default App;