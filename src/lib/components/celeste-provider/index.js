import React from 'react';
import PropTypes from 'prop-types';

import store from '../../store';
import {
  Provider,
  createStoreHook,
  createDispatchHook,
  createSelectorHook
} from 'react-redux';

const MyContext = React.createContext(null);

// Export your custom hooks if you wish to use them in other files.
export const useCelesteStore = createStoreHook(MyContext);
export const useCelesteDispatch = createDispatchHook(MyContext);
export const useCelesteSelector = createSelectorHook(MyContext);

const CelesteProvider= props => {    
    return (
        <Provider context={MyContext} store={store}>
            {props.children}
        </Provider>
    );
}

CelesteProvider.propTypes = {
    children: PropTypes.node
}

export default CelesteProvider;