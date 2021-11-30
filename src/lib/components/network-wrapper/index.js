import React, {Fragment} from "react";
import PropTypes from "prop-types";

import { useCelesteSelector, useCelesteDispatch } from "../celeste-provider";

const NetworkWrapper = props => {

    const {walletReducer} = useCelesteSelector(state => state);
    
    return(
        <Fragment>
            {
                walletReducer.networkId === props.networkId ?
                    props.children
                :
                    <div>{props.info}</div>
            }            
        </Fragment>
    );
};

NetworkWrapper.propTypes = {
    networkId: PropTypes.number.isRequired,
    info: PropTypes.string
};

export default NetworkWrapper;