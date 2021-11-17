"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.set_web3_instance = exports.add_contract = void 0;

var _constants = require("../constants");

const set_web3_instance = web3Instance => {
  return {
    type: _constants.SET_WEB3_INSTANCE,
    payload: web3Instance
  };
};

exports.set_web3_instance = set_web3_instance;

const add_contract = (key, contractInstance) => {
  return {
    type: _constants.ADD_CONTRACT,
    payload: {
      key,
      contract: contractInstance
    }
  };
};

exports.add_contract = add_contract;