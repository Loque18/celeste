"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.set_wallet = exports.set_networkd_id = exports.set_login_status = exports.set_current_account = exports.request_connection = exports.request_change_network = void 0;

var _constants = require("../constants");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var set_networkd_id = function set_networkd_id(id) {
  return {
    type: _constants.SET_NETWORK_ID,
    payload: id
  };
};

exports.set_networkd_id = set_networkd_id;

var set_wallet = function set_wallet(value) {
  return {
    type: _constants.SET_WALLET,
    payload: value
  };
};

exports.set_wallet = set_wallet;

var set_current_account = function set_current_account(address) {
  return {
    type: _constants.SET_CURRENT_ACCOUNT,
    payload: address
  };
};

exports.set_current_account = set_current_account;

var set_login_status = function set_login_status(value) {
  return {
    type: _constants.SET_LOGIN_STATUS,
    payload: value
  };
};

exports.set_login_status = set_login_status;

var request_connection = function request_connection() {
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState) {
      var ethereum, web3;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              ethereum = window.ethereum;
              web3 = getState().web3Reducer.web3;
              _context.prev = 2;
              _context.next = 5;
              return ethereum.request({
                method: 'eth_requestAccounts'
              });

            case 5:
              dispatch(set_login_status(true));
              _context.t0 = dispatch;
              _context.t1 = set_networkd_id;
              _context.next = 10;
              return web3.eth.getChainId();

            case 10:
              _context.t2 = _context.sent;
              _context.t3 = (0, _context.t1)(_context.t2);
              (0, _context.t0)(_context.t3);
              _context.next = 17;
              break;

            case 15:
              _context.prev = 15;
              _context.t4 = _context["catch"](2);

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 15]]);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
};

exports.request_connection = request_connection;

var request_change_network = function request_change_network(networkId) {
  return /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch, getState) {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{
                  chainId: '0x' + networkId.toString(16)
                }] // chainId must be in hexadecimal numbers

              });

            case 3:
              _context2.next = 8;
              break;

            case 5:
              _context2.prev = 5;
              _context2.t0 = _context2["catch"](0);
              console.log("ERROR REQUESTING CHANGE NETWORK", _context2.t0);

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 5]]);
    }));

    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }();
};

exports.request_change_network = request_change_network;