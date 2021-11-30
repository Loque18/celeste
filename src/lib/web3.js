import store from './store';
import {set_web3_instance} from './store/actions/web3Actions';
import {
    set_wallet,
    set_login_status,
    set_current_account,
    set_networkd_id
} from './store/actions/walletActions';

import Web3 from 'web3';

const initWeb3 = async () => {

    if(typeof window.ethereum !== 'undefined'){

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


        //detect if metamask is connected to site
        const accArr = await web3.eth.getAccounts();
        if(accArr.length === 0) store.dispatch( set_login_status(false) );
        else{
             store.dispatch( set_login_status(true) );
             store.dispatch( set_current_account(accArr[0]) );
             store.dispatch( set_networkd_id( await web3.eth.getChainId() ) );
        }

        //listen to eth change events
        ethereum.on('accountsChanged', accounts => {

            console.log(accounts);
            
            if(accounts.length > 0){
                store.dispatch( set_current_account(accounts[0]) );
            }
            else{
                store.dispatch( set_login_status(false) );
                store.dispatch( set_current_account(null) );

            }
        });

        ethereum.on('connect', connectInfo => {

            // if(accounts[0] != null)
            //     store.dispatch( set_current_account(accounts[0]) );

            // store.dispatch( set_connection(true) );
            // console.log('cnx');
        });

        ethereum.on('disconnect', error => {
            // store.dispatch( set_current_account('') );
            // console.log(error);
        });

        ethereum.on('chainChanged', async chainId => {
             // window.location.reload();
            store.dispatch( set_networkd_id( await web3.eth.getChainId() ) );
        });


        return store;

    }
}


export {initWeb3};
