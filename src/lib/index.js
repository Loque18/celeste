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
    
    const web3 = celesteStore.getState().web3Reducer.web3;

    if(options.smartContracts) {
        
        options.smartContracts.forEach(sc => {

            //make a contract instance
            if(!sc.isMultichain){
                const contract = new web3.eth.Contract(sc.abi, sc.address);
                celesteStore.dispatch( add_contract(sc.key, contract) );                
            }

            //for multichain contracts make a contract instance for each address
            else {
                const chainId = Object.keys(sc.address);
                
                Object.values(sc.address).forEach((address, i) => {
                    const contract = new web3.eth.Contract(sc.abi, address);
                    celesteStore.dispatch( add_contract( `${sc.key}_${chainId[i]}`  , contract) );
                });                
            }
        });        
    }

    celesteStore.dispatch(set_initialized(true));

    return celesteStore;
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