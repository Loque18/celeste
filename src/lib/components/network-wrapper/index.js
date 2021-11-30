import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {request_change_network} from '../../store/actions/walletActions';
import { useCelesteSelector, useCelesteDispatch } from "../celeste-provider";

const NetworkWrapper = props => {

    const {wallet} = useCelesteSelector(state => state);
    const dispatch = useCelesteDispatch();

    const onSwitchNetwork = () => {
        dispatch(request_change_network(props.network));
    }

    
    return(
        <Fragment>
            {
                wallet.networkId === props.network ?
                    props.children
                :
                    <div>{props.info || <button onClick={onSwitchNetwork}>Switch Network</button>}</div>
            }            
        </Fragment>
    );
};

NetworkWrapper.propTypes = {
    network: PropTypes.number.isRequired,
    info: PropTypes.string
};

export default NetworkWrapper;