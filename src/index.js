import React from 'react';
import ReactDOM from 'react-dom';

import MiniComp from './miniComp';

import VConsole from 'vconsole';
import {
    CelesteProvider,
    ConnectButton,
    ConnectedWrapper,
    NetworkWrapper,
    initCeleste
} from './lib/index';

import storageABI from './temp/storage.json';
import cfcABI from './temp/CFC.json';
import SwithNetworkButton from 'lib/components/switch-network-button';

import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";

const celesteOptions = {
    smartContracts: [
        {
            key: 'STORAGE_CONTRACT',
            abi: storageABI,
            address: '0x1C608BceAF2eF898e4532Fcc54f6e35E1D4A2D74',
            isMultichain: false
        }, {
            key: 'CFC_TOKEN',
            address:{
                '4': '0x9B7C5c2999cBB901c83c1312d1BF52389E388F8a',
                '97': '0x9B7C5c2999cBB901c83c1312d1BF52389E388F8a',
                '80001': '0x9B7C5c2999cBB901c83c1312d1BF52389E388F8a'
            },
            abi: cfcABI,
            isMultichain: true
        } 
        // }, {
        //     key: 'CFC_TOKEN',
        //     abi: cfcABI,
        //     address: '0x9B7C5c2999cBB901c83c1312d1BF52389E388F8a'
        // }
    ]
}

initCeleste(celesteOptions);


const vConsole = new VConsole();

window.addEventListener('keydown', e => {
    if (e.keyCode === 32) {
        vConsole.destroy();
    }
});

// Create a connector
const connector = new WalletConnect({
    bridge: "https://bridge.walletconnect.org", // Required
    qrcodeModal: QRCodeModal,
  });

ReactDOM.render(
  <React.StrictMode>
        <CelesteProvider>            
            <ConnectButton>Connect</ConnectButton>
            <ConnectedWrapper                 
                disconnectedComponent={<div>I'm not connected :(</div>}
            >
                I'm connected
                <NetworkWrapper
                    chainIds={[4, 97, 80001]}
                    info={<SwithNetworkButton networkId={4}>Switch to eth mainnet</SwithNetworkButton>}
                >
                    <div>Im in a testnet chain</div>
                </NetworkWrapper>
            </ConnectedWrapper>

            <MiniComp />


            
        </CelesteProvider>
  </React.StrictMode>  
  ,
  document.getElementById('root')
);