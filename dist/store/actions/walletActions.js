"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.set_networkd_id = exports.set_metamask_installed = exports.set_current_account = exports.set_connection = exports.request_connection = exports.request_change_network = void 0;

var _constants = require("../constants");

const set_networkd_id = id => {
  return {
    type: _constants.SET_NETWORK_ID,
    payload: id
  };
};

exports.set_networkd_id = set_networkd_id;

const set_metamask_installed = value => {
  return {
    type: _constants.SET_METAMASK_INSTALLED,
    payload: value
  };
};

exports.set_metamask_installed = set_metamask_installed;

const set_current_account = address => {
  return {
    type: _constants.SET_CURRENT_ACCOUNT,
    payload: address
  };
};

exports.set_current_account = set_current_account;

const set_connection = value => {
  return {
    type: _constants.SET_CONNECTION,
    payload: value
  };
};

exports.set_connection = set_connection;

const request_connection = () => {
  return async (dispatch, getState) => {
    console.log('ok');
    const ethereum = window.ethereum;
    const {
      web3
    } = getState().web3;

    try {
      await ethereum.request({
        method: 'eth_requestAccounts'
      });
      dispatch(set_connection(true));
      dispatch(set_networkd_id(await web3.eth.getChainId()));
    } catch (e) {//throw e;
    }
  };
};

exports.request_connection = request_connection;

const request_change_network = networkId => {
  return async (dispatch, getState) => {
    const hex = networkId.toString(16);

    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{
          chainId: '0x' + networkId.toString(16)
        }] // chainId must be in hexadecimal numbers

      });
    } catch (e) {
      console.log("ERROR REQUESTING CHANGE NETWORK", e);
    }
  };
};

exports.request_change_network = request_change_network;