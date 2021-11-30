import React from 'react';
import ReactDOM from 'react-dom';

import MiniComp from './miniComp';

import VConsole from 'vconsole';
import {
    CelesteProvider,
    ConnectButton,
    ConnectedWrapper,
    initCeleste
} from './lib/index';

import storageABI from './temp/storage.json';

const celesteOptions = {
    smartContracts: [
        {
            key: 'STORAGE_CONTRACT',
            abi: storageABI,
            address: '0x1C608BceAF2eF898e4532Fcc54f6e35E1D4A2D74'
        }
    ]
}

initCeleste(celesteOptions);


const vConsole = new VConsole();

window.addEventListener('keydown', e => {
    if (e.keyCode === 32) {
        vConsole.destroy();
    }
});

ReactDOM.render(
  <React.StrictMode>
        <CelesteProvider>
            <ConnectButton />
            <ConnectedWrapper 
                connectedComponent={<div>Yooooooooo I'm connected :)</div>}
                disconnectedComponent={<div>I'm not connected :( </div>}
            />
            <MiniComp />
        </CelesteProvider>
  </React.StrictMode>  
  ,
  document.getElementById('root')
);