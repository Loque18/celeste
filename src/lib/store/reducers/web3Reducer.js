import {
    SET_WEB3_INSTANCE,
    SET_WEB3_READ_INSTANCE,
    ADD_CONTRACT,
    SET_INITIALIZED
} from '../constants';

const defaultState = {
    web3: {},
    web3read: {},
    initialized: false,
    contracts: []
};

const reducer = (state = defaultState, action) => {

    switch (action.type) {

        case SET_WEB3_INSTANCE:
            return{
                ...state,
                web3: action.payload
            };

        case SET_WEB3_READ_INSTANCE:            
            return{
                ...state,
                web3read: {
                    [action.payload.chainId]: action.payload.web3instance
                }
            }

        case ADD_CONTRACT:{
            const contracts = {...state}.contracts;
            contracts[action.payload.key] = action.payload.contract;

            return{
                ...state,
                contracts: contracts
            };
        }

        case SET_INITIALIZED: 
            return {
                ...state,
                initialized: action.payload
            };

        default:
            return {...state};

    }

};

export default reducer;
