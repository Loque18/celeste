"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _constants = require("../constants");

const defaultState = {
  web3: {},
  initialized: false,
  contracts: []
};

const reducer = function () {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  let action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constants.SET_WEB3_INSTANCE:
      return { ...state,
        web3: action.payload,
        initialized: true
      };

    case _constants.ADD_CONTRACT:
      const contracts = { ...state
      }.contracts;
      contracts[action.payload.key] = action.payload.contract;
      return { ...state,
        contracts: contracts
      };

    default:
      return { ...state
      };
  }
};

var _default = reducer;
exports.default = _default;