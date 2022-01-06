import React from "react";
import PropTypes from "prop-types";

import { useCelesteDispatch } from "../celeste-provider";
import {request_change_network} from '../../store/actions/walletActions';

const SwithNetworkButton = ({children, chainId, className, ...rest}) => {

    const dispatch = useCelesteDispatch();

    const onClick = () => {        
        dispatch(request_change_network(chainId));
    }
    
    return(
        <button className={className} onClick={onClick} {...rest}>
            {children}
        </button>
    );
};


SwithNetworkButton.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    chainId: PropTypes.number.isRequired    
};

export default SwithNetworkButton;