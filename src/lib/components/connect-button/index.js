/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import PropTypes from "prop-types";

import { useCelesteDispatch, useCelesteSelector } from "../celeste-provider";
import { request_connection } from "../../store/actions/walletActions";

const getAddressReduced = address =>
	`${address.slice(0, 6)}...${address.slice(-4)}`;

const ConnectBtn = ({ className, children, ...rest }) => {
	// redux
	const dispatch = useCelesteDispatch();
	const { walletReducer } = useCelesteSelector(state => state);

	const onClick = () => {
		if (!walletReducer.isLoggedIn) dispatch(request_connection());
	};

	return (
		<button className={className} onClick={onClick} {...rest} type="button">
			{walletReducer.isLoggedIn && walletReducer.address != null
				? getAddressReduced(walletReducer.address)
				: children || "Connect"}
		</button>
	);
};

ConnectBtn.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
};

export default ConnectBtn;
