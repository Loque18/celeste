"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _constants = require("../constants");

const defaultState = {
  isMetamaskInstalled: false,
  currentAccount: '',
  networkId: null,
  isConnected: false
};

const reducer = function () {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  let action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constants.SET_METAMASK_INSTALLED:
      return { ...state,
        isMetamaskInstalled: action.payload
      };

    case _constants.SET_NETWORK_ID:
      return { ...state,
        networkId: action.payload
      };

    case _constants.SET_CURRENT_ACCOUNT:
      return { ...state,
        currentAccount: action.payload
      };

    case _constants.SET_CONNECTION:
      return { ...state,
        isConnected: action.payload
      };

    default:
      return { ...state
      };
  }
};

var _default = reducer;
exports.default = _default;