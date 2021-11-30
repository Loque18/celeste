import React, {Fragment} from "react";
import PropTypes from "prop-types";

import { useCelesteDispatch } from "../celeste-provider";
import {request_change_network} from '../../store/actions/walletActions';

const SwithNetworkButton = props => {

    const dispatch = useCelesteDispatch();

    const onClick = () => {        
        dispatch(request_change_network(props.networkId));
    }
    
    return(
        <button className={props.className} onClick={onClick}>
            Switch
        </button>
    );
};


SwithNetworkButton.propTypes = {
    networkId: PropTypes.number.isRequired    
};

export default SwithNetworkButton;