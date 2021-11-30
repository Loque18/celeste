import {
    // REQUEST_CONNECTION,
    SET_WALLET,
    SET_NETWORK_ID,
    SET_CURRENT_ACCOUNT,
    SET_LOGIN_STATUS,
} from '../constants';

const defaultState = {
    walletProvider: null,
    currentAccount: null,
    networkId: null,
    isLoggedIn: false
};

const reducer = (state = defaultState, action) => {

    switch (action.type) {

        case SET_WALLET:
            return{
                ...state,
                walletProvider: action.payload
            };

        case SET_NETWORK_ID:
            return{
                ...state,
                networkId: action.payload
            };

        case SET_CURRENT_ACCOUNT:
            return{
                ...state,
                currentAccount: action.payload
            };

        case SET_LOGIN_STATUS:
            return{
                ...state,
                isLoggedIn: action.payload
            };

        default:
            return {...state};
    }

};

export default reducer;
