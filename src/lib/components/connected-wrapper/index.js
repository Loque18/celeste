import React, {Fragment} from "react";
import PropTypes from "prop-types";
import { useCelesteSelector } from '../celeste-provider';

const ConnectedWrapper = props => {

    const wallet = useCelesteSelector(state => state.walletReducer);
    
    return(
        <Fragment>
            {
                wallet.isLoggedIn ?
                    props.children
                :
                    props.disconnectedComponent
            }            
        </Fragment>
    );
}

ConnectedWrapper.propTypes = {    
    disconnectedComponent: PropTypes.element.isRequired    
};

export default ConnectedWrapper;