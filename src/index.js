// import React from 'react';
// import ReactDOM from 'react-dom';

// import MiniComp from './miniComp';

// import VConsole from 'vconsole';
// import {
//     CelesteProvider,
//     ConnectButton,
//     ConnectedWrapper,
//     NetworkWrapper,
//     initCeleste
// } from './lib/index';

// import storageABI from './temp/storage.json';
// import cfcABI from './temp/CFC.json';
// import SwithNetworkButton from 'lib/components/switch-network-button';

// import WalletConnect from "@walletconnect/client";
// import QRCodeModal from "@walletconnect/qrcode-modal";

// const celesteOptions = {
//     smartContracts: [
//         {
//             key: 'STORAGE_CONTRACT',
//             abi: storageABI,
//             address: '0x1C608BceAF2eF898e4532Fcc54f6e35E1D4A2D74',
//             isMultichain: false
//         },
//         {
//             key: 'TEST_MULTICHAIN',
//             abi: storageABI,
//             address: {
//                 '97': '0x17411cE9FCCBd7ca389B7a6831A6617178458567',
//                 '4': '0xCaD61486b21C026cbEBedBDa2aE42d728dA94405',
//                 '80001': '0xFc12f7A2fAd7Ccd518b75C4Bf544c6b0c8dD9606'
//             },
//             isMultichain: true
//         }
//         // }, {
//         //     key: 'CFC_TOKEN',
//         //     abi: cfcABI,
//         //     address: '0x9B7C5c2999cBB901c83c1312d1BF52389E388F8a'
//         // }
//     ]
// }

// initCeleste(celesteOptions);


// const vConsole = new VConsole();

// window.addEventListener('keydown', e => {
//     if (e.keyCode === 32) {
//         vConsole.destroy();
//     }
// });

// // Create a connector
// const connector = new WalletConnect({
//     bridge: "https://bridge.walletconnect.org", // Required
//     qrcodeModal: QRCodeModal,
//   });

// ReactDOM.render(
//   <React.StrictMode>
//         <CelesteProvider>            
//             <ConnectButton>Connect</ConnectButton>
//             <ConnectedWrapper                 
//                 disconnectedComponent={<div>I'm not connected :(</div>}
//             >
//                 I'm connected
//                 <NetworkWrapper
//                     networkId={1}
//                     info={<SwithNetworkButton networkId={1}>Switch to eth mainnet</SwithNetworkButton>}
//                 >
//                     <div>Im in the coorect chain</div>
//                 </NetworkWrapper>
//             </ConnectedWrapper>

//             <MiniComp />


            
//         </CelesteProvider>
//   </React.StrictMode>  
//   ,
//   document.getElementById('root')
// );