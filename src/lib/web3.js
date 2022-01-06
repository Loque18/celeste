import store from './store';
import {
    set_web3_instance,
    set_web3_read_instance
} from './store/actions/web3Actions';
import {
    set_wallet,
    set_login_status,
    set_address,
    set_chain_id
} from './store/actions/walletActions';

import Web3 from "web3/dist/web3.min";

// import WalletConnect from "@walletconnect/client";
// import QRCodeModal from "@walletconnect/qrcode-modal";

// Create a connector
// const connector = new WalletConnect({
//     bridge: "https://bridge.walletconnect.org", // Required
//     qrcodeModal: QRCodeModal,
// });

const initWeb3 = async () => {

    /* injected */
    if(typeof window !== 'undefined'){

        //1. get ethereum
        const ethereum = window.ethereum;

        //2. set wallet provider
        if(ethereum.isMetaMask)
            store.dispatch( set_wallet('isMetamask') );
        
        if(ethereum.isTrust)
            store.dispatch( set_wallet('isTrust') );

        //instance web3
        const web3 = await new Web3(ethereum);
        store.dispatch( set_web3_instance(web3) );


        //detect if wallet is connected to site
        const accArr = await web3.eth.getAccounts();
        if(accArr.length === 0) store.dispatch( set_login_status(false) );
        else{
             store.dispatch( set_login_status(true) );
             store.dispatch( set_address(accArr[0]) );
             store.dispatch( set_chain_id( await web3.eth.getChainId() ) );
        }

        //listen to eth change events
        ethereum.on('accountsChanged', accounts => {
            
            if(accounts.length > 0){
                store.dispatch( set_address(accounts[0]) );
            }
            else{
                store.dispatch( set_login_status(false) );
                store.dispatch( set_address(null) );

            }
        });

        // ethereum.on('connect', connectInfo => {

        //     // if(accounts[0] != null)
        //     //     store.dispatch( set_address(accounts[0]) );

        //     // store.dispatch( set_connection(true) );
        //     // console.log('cnx');
        // });

        // ethereum.on('disconnect', error => {
        //     // store.dispatch( set_address('') );
        //     // console.log(error);
        // });

        ethereum.on('chainChanged', async () => {
             // window.location.reload();
            store.dispatch( set_chain_id( await web3.eth.getChainId() ) );            
        });
    }

    /* connector */
    
}

const initStaticWeb3 = (rpcs) => {
    rpcs.forEach(rpc => {            
        const {chainId, url} = rpc;
        const web3 = new Web3(url);        
        store.dispatch( set_web3_read_instance(chainId, web3) );
    });
}


export {initWeb3, initStaticWeb3};