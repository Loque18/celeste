import React from 'react';
import PropTypes  from 'prop-types';
import { useCelesteDispatch, useCelesteSelector } from '../celeste-provider';
import {request_connection} from '../../store/actions/walletActions';

const getAddressReduced = (address) => `${address.slice(0, 6)}...${address.slice(-4)}`;

const ConnectBtn = props => {
        
    const dispatch = useCelesteDispatch();
    const wallet = useCelesteSelector(state => state.walletReducer);

    const onClick = e => {        
        if(!wallet.isLoggedIn)
            dispatch(request_connection());
    }   

    return(
        <div>
            <button className={props.className} onClick={onClick}>
                {wallet.isLoggedIn && wallet.currentAccount != null? getAddressReduced(wallet.currentAccount) : props.children || 'Connect'}
            </button>
        </div>
    );

}

ConnectBtn.propTypes = {
    className: PropTypes.string,
    callback: PropTypes.func
}    

export default ConnectBtn;