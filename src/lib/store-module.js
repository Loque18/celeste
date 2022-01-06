/* *~~*~~*~~*~~*~~*~~*~~*~~*~~* internals *~~*~~*~~*~~*~~*~~*~~*~~*~~*~~* */ 
import {add_contract, set_initialized} from './store/actions/web3Actions';
import { initWeb3, initStaticWeb3 } from './web3';
import store from './store';

const initCeleste = async (options) => {

    await initWeb3();

    if(options.rpcs){
        initStaticWeb3(options.rpcs);
    }

    const celesteStore = store;    
    const web3 = celesteStore.getState().web3Reducer.web3;

    const web3s = celesteStore.getState().web3Reducer.web3read;
    
    

    if(options.smartContracts) {
        
        options.smartContracts.forEach(sc => {

            //make a contract instance
            if(!sc.isMultichain){

                //instantiate smart contract for web3
                const contract = new web3.eth.Contract(sc.abi, sc.address);
                celesteStore.dispatch( add_contract(sc.key, contract) );   
                
                //instantiate smart contract for each web3 read                
                Object.keys(web3s).forEach(key => {
                    const _web3 = web3s[key];
                    const contract = new _web3.eth.Contract(sc.abi, sc.address);
                    celesteStore.dispatch( add_contract(`${sc.key}_READ`, contract) );
                });
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

};

export { 
    initCeleste,
    store
    // CelesteProvider,
    // ConnectButton,
    // ConnectedWrapper,
    // NetworkWrapper,
    // SwitchNetworkButton,
    // useCelesteStore,
    // useCelesteDispatch,
    // useCelesteSelector
 };