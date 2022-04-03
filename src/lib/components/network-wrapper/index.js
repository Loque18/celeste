/* eslint-disable eqeqeq */
import React from "react";
import PropTypes from "prop-types";

import { useCelesteSelector } from "../celeste-provider";

const NetworkWrapper = ({ chainId, children, info }) => {
	const { walletReducer } = useCelesteSelector(state => state);

	return chainId == walletReducer.chainId ? children : <div>{info}</div>;
};

NetworkWrapper.propTypes = {
	children: PropTypes.node,
	chainId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	info: PropTypes.element,
};

export default NetworkWrapper;
