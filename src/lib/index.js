/* *~~*~~*~~*~~*~~*~~*~~*~~*~~* internals *~~*~~*~~*~~*~~*~~*~~*~~*~~*~~* */ 
import {add_contract, set_initialized} from './store/actions/web3Actions';
import { initWeb3 } from './web3';

/* *~~*~~*~~*~~*~~*~~*~~*~~*~~* export *~~*~~*~~*~~*~~*~~*~~*~~*~~*~~* */ 
import CelesteProvider from './components/celeste-provider';
import ConnectButton from './components/connect-button';
import ConnectedWrapper from './components/connected-wrapper';
import NetworkWrapper from './components/network-wrapper';
import SwitchNetworkButton from './components/switch-network-button';
import {useCelesteStore, useCelesteDispatch, useCelesteSelector} from './components/celeste-provider';


const initCeleste = async (options) => {

    const celesteStore = await initWeb3();
    

    if(options.smartContracts) {
        
        options.smartContracts.forEach(sc => {

            const contract = new web3.eth.Contract(sc.abi, sc.address);
            celesteStore.dispatch( add_contract(sc.key, contract) );           
            
        });        
    }

    celesteStore.dispatch(set_initialized(true));

};

export { 
    initCeleste,
    CelesteProvider,
    ConnectButton,
    ConnectedWrapper,
    NetworkWrapper,
    SwitchNetworkButton,
    useCelesteStore,
    useCelesteDispatch,
    useCelesteSelector
 }; 