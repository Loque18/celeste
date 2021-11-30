import {
    SET_WEB3_INSTANCE,
    ADD_CONTRACT,
    SET_INITIALIZED
} from '../constants';

const defaultState = {
    web3: {},
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

        case ADD_CONTRACT:
            const contracts = {...state}.contracts;
            contracts[action.payload.key] = action.payload.contract;

            return{
                ...state,
                contracts: contracts
            };

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
