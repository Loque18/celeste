import React from 'react';
import PropTypes  from 'prop-types';

import { useCelesteDispatch, useCelesteSelector } from '../celeste-provider';
import { request_disconnection } from '../../store/actions/walletActions';

const DisconnectBtn = ({className, children, ...rest}) => {
        
    const dispatch = useCelesteDispatch();
    const wallet = useCelesteSelector(state => state.walletReducer);

    const onClick = () => {
        if(wallet.isLoggedIn)
            dispatch(request_disconnection());
    }   

    return(
        <div>
            <button className={className} onClick={onClick} {...rest}>
                {children || 'Disconnect wallet'}
            </button>
        </div>
    );

}

DisconnectBtn.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
}    

export default DisconnectBtn;