import React, {Fragment} from "react";
import PropTypes from "prop-types";

import { useCelesteSelector, useCelesteDispatch } from "../celeste-provider";

const NetworkWrapper = props => {

    const {walletReducer} = useCelesteSelector(state => state);
    
    
    return(
        <Fragment>
            {
                props.chainIds.includes(walletReducer.networkId) ?
                    props.children
                :
                    <div>{props.info}</div>
            }            
        </Fragment>
    );
};

NetworkWrapper.propTypes = {
    chainIds: PropTypes.array.isRequired,
    info: PropTypes.element
};

export default NetworkWrapper;