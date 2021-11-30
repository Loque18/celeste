import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import walletReducer from './reducers/walletReducer';
import web3Reducer  from './reducers/web3Reducer';

const reducer = combineReducers({
    web3Reducer,
    walletReducer
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;