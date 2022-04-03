// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import { useCelesteSelector } from "../celeste-provider";

const ConnectedWrapper = props => {
	const wallet = useCelesteSelector(state => state.walletReducer);

	return wallet.isLoggedIn ? props.children : props.disconnectedComponent;
};

ConnectedWrapper.propTypes = {
	children: PropTypes.node,
	disconnectedComponent: PropTypes.element.isRequired,
};

export default ConnectedWrapper;
