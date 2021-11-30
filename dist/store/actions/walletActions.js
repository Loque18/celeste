"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.set_networkd_id = exports.set_metamask_installed = exports.set_current_account = exports.set_connection = exports.request_connection = exports.request_change_network = void 0;

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

var set_metamask_installed = function set_metamask_installed(value) {
  return {
    type: _constants.SET_METAMASK_INSTALLED,
    payload: value
  };
};

exports.set_metamask_installed = set_metamask_installed;

var set_current_account = function set_current_account(address) {
  return {
    type: _constants.SET_CURRENT_ACCOUNT,
    payload: address
  };
};

exports.set_current_account = set_current_account;

var set_connection = function set_connection(value) {
  return {
    type: _constants.SET_CONNECTION,
    payload: value
  };
};

exports.set_connection = set_connection;

var request_connection = function request_connection() {
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState) {
      var ethereum, web3;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log('ok');
              ethereum = window.ethereum;
              web3 = getState().web3.web3;
              _context.prev = 3;
              _context.next = 6;
              return ethereum.request({
                method: 'eth_requestAccounts'
              });

            case 6:
              dispatch(set_connection(true));
              _context.t0 = dispatch;
              _context.t1 = set_networkd_id;
              _context.next = 11;
              return web3.eth.getChainId();

            case 11:
              _context.t2 = _context.sent;
              _context.t3 = (0, _context.t1)(_context.t2);
              (0, _context.t0)(_context.t3);
              _context.next = 18;
              break;

            case 16:
              _context.prev = 16;
              _context.t4 = _context["catch"](3);

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[3, 16]]);
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
      var hex;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              hex = networkId.toString(16);
              _context2.prev = 1;
              _context2.next = 4;
              return window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{
                  chainId: '0x' + networkId.toString(16)
                }] // chainId must be in hexadecimal numbers

              });

            case 4:
              _context2.next = 9;
              break;

            case 6:
              _context2.prev = 6;
              _context2.t0 = _context2["catch"](1);
              console.log("ERROR REQUESTING CHANGE NETWORK", _context2.t0);

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 6]]);
    }));

    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }();
};

exports.request_change_network = request_change_network;