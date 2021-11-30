import {
    SET_WEB3_INSTANCE,
    ADD_CONTRACT,
    SET_INITIALIZED
} from '../constants';

export const set_web3_instance = web3Instance => {
    return{
        type: SET_WEB3_INSTANCE,
        payload: web3Instance
    };
}

export const add_contract = (key, contractInstance) => {
    return{
        type: ADD_CONTRACT,
        payload: {
            key,
            contract: contractInstance
        }
    };
}

export const set_initialized = value => {
    return{
        type: SET_INITIALIZED,
        payload: value
    };
}
