"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initWeb3 = void 0;

var _web3Actions = require("./store/actions/web3Actions");

var _walletActions = require("./store/actions/walletActions");

var _web = _interopRequireDefault(require("web3"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const initWeb3 = async store => {
  if (typeof window.ethereum !== 'undefined') {
    const ethereum = window.ethereum;
    store.dispatch((0, _walletActions.set_metamask_installed)(true)); //instance web3

    const web3 = await new _web.default(ethereum);
    store.dispatch((0, _web3Actions.set_web3_instance)(web3)); //detect if metamask is connected to site

    const accArr = await web3.eth.getAccounts();
    if (accArr.length === 0) store.dispatch((0, _walletActions.set_connection)(false));else {
      store.dispatch((0, _walletActions.set_connection)(true));
      store.dispatch((0, _walletActions.set_current_account)(accArr[0]));
      store.dispatch((0, _walletActions.set_networkd_id)(await web3.eth.getChainId()));
    } //listen to eth change events

    ethereum.on('accountsChanged', accounts => {
      // console.log('accounts: ' + accounts);
      if (accounts.length > 0) {
        store.dispatch((0, _walletActions.set_current_account)(accounts[0]));
      } else {
        store.dispatch((0, _walletActions.set_connection)(false));
        store.dispatch((0, _walletActions.set_current_account)(''));
      }
    });
    ethereum.on('connect', connectInfo => {// if(accounts[0] != null)
      //     store.dispatch( set_current_account(accounts[0]) );
      // store.dispatch( set_connection(true) );
      // console.log('cnx');
    });
    ethereum.on('disconnect', error => {// store.dispatch( set_current_account('') );
      // console.log(error);
    });
    ethereum.on('chainChanged', async chainId => {
      // window.location.reload();
      store.dispatch((0, _walletActions.set_networkd_id)(await web3.eth.getChainId()));
    });
  }
};

exports.initWeb3 = initWeb3;