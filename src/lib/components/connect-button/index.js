import React from 'react';
import PropTypes  from 'prop-types';

import { useCelesteDispatch, useCelesteSelector } from '../celeste-provider';
import { request_connection } from '../../store/actions/walletActions';

const getAddressReduced = (address) => `${address.slice(0, 6)}...${address.slice(-4)}`;

const ConnectBtn = ({className, children, ...rest}) => {
        
    const dispatch = useCelesteDispatch();
    const wallet = useCelesteSelector(state => state.walletReducer);
    

    const onClick = () => {
        if(!wallet.isLoggedIn)
            dispatch(request_connection());
    }   

    return(        
        <button className={className} onClick={onClick} {...rest}>
            {wallet.isLoggedIn && wallet.address != null? getAddressReduced(wallet.address) : children || 'Connect'}
        </button>        
    );

}

ConnectBtn.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
}    

export default ConnectBtn;