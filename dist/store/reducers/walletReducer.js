"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _constants = require("../constants");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultState = {
  walletProvider: null,
  currentAccount: null,
  networkId: null,
  isLoggedIn: false
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constants.SET_WALLET:
      return _objectSpread(_objectSpread({}, state), {}, {
        walletProvider: action.payload
      });

    case _constants.SET_NETWORK_ID:
      return _objectSpread(_objectSpread({}, state), {}, {
        networkId: action.payload
      });

    case _constants.SET_CURRENT_ACCOUNT:
      return _objectSpread(_objectSpread({}, state), {}, {
        currentAccount: action.payload
      });

    case _constants.SET_LOGIN_STATUS:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoggedIn: action.payload
      });

    default:
      return _objectSpread({}, state);
  }
};

var _default = reducer;
exports.default = _default;