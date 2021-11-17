import React from 'react';
import {connect} from 'react-redux';
import { useStore, useDispatch, useSelector } from '../celeste-provider';
import {request_connection} from '../../store/actions/walletActions';

const getAddressReduced = (address) => `${address.slice(0, 6)}...${address.slice(-4)}`;

const ConnectBtn = props => {

    // const {wallet} = props;
    //console.log(wallet);

    // const onClick = e => {
    //     if(wallet.isMetamaskInstalled && !wallet.isConnected)
    //         props.request_connection();
    // }

    const store = useStore();
    const dispatch = useDispatch();
    const wallet = useSelector(state => state.wallet);

    const onClick = e => {
        dispatch(request_connection());
    }   

    return(
        <div>
            <button className={props.className} onClick={onClick}>
                {wallet.isConnected && wallet.currentAccount != null? getAddressReduced(wallet.currentAccount) : 'Connect'}                
            </button>
        </div>
    );

}


    

export default ConnectBtn;