import {
    // REQUEST_CONNECTION,
    SET_NETWORK_ID,
    SET_WALLET,
    SET_CURRENT_ACCOUNT,
    SET_LOGIN_STATUS
} from '../constants';


export const set_networkd_id = id => {
    return{
        type: SET_NETWORK_ID,
        payload: id
    };
}

export const set_wallet = value => {
    return{
        type: SET_WALLET,
        payload: value
    };
}

export const set_current_account = address => {
    return{
        type: SET_CURRENT_ACCOUNT,
        payload: address
    };
}

export const set_login_status = value => {
    return{
        type: SET_LOGIN_STATUS,
        payload: value
    };
}

export const request_connection = () => {

    return async (dispatch, getState) => {

        const ethereum = window.ethereum;

        const {web3} = getState().web3Reducer;

        


        try {
            await ethereum.request({ method: 'eth_requestAccounts' });
            dispatch( set_login_status(true) );
            dispatch( set_networkd_id( await web3.eth.getChainId() ) );
        } catch (e) {
            //throw e;
        }
    };
}

export const request_change_network = (networkId) => {
    return async (dispatch, getState) => {
        
        try {
            await window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: '0x'+networkId.toString(16) }], // chainId must be in hexadecimal numbers
            });

        } catch (e) {
            console.log("ERROR REQUESTING CHANGE NETWORK",e);
        }
    };
}
