import React from "react";
import PropTypes from "prop-types";

import {
	Provider,
	createStoreHook,
	createDispatchHook,
	createSelectorHook,
} from "react-redux";

import store from "../../store";

const MyContext = React.createContext(null);

// Export your custom hooks if you wish to use them in other files.
export const useCelesteStore = createStoreHook(MyContext);
export const useCelesteDispatch = createDispatchHook(MyContext);
export const useCelesteSelector = createSelectorHook(MyContext);

const CelesteProvider = ({ children }) => {
	return (
		<Provider context={MyContext} store={store}>
			{children}
		</Provider>
	);
};

CelesteProvider.propTypes = {
	children: PropTypes.node,
};

export default CelesteProvider;
