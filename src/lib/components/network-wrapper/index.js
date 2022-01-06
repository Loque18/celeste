import React, {Fragment} from "react";
import PropTypes from "prop-types";

import { useCelesteSelector } from "../celeste-provider";

const NetworkWrapper = props => {

    const {walletReducer} = useCelesteSelector(state => state);    
    
    return(
        <Fragment>
            {
                props.chainIds.includes(walletReducer.chainId) ?
                    props.children
                :
                    <div>{props.info}</div>
            }            
        </Fragment>
    );
};

NetworkWrapper.propTypes = {
    children: PropTypes.node,
    chainIds: PropTypes.arrayOf(PropTypes.number).isRequired,    
    info: PropTypes.element
};

export default NetworkWrapper;