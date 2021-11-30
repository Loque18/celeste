"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initWeb3 = void 0;

var _web3Actions = require("./store/actions/web3Actions");

var _walletActions = require("./store/actions/walletActions");

var _web = _interopRequireDefault(require("web3"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var initWeb3 = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(store) {
    var ethereum, web3, accArr;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!(typeof window.ethereum !== 'undefined')) {
              _context2.next = 27;
              break;
            }

            ethereum = window.ethereum;
            store.dispatch((0, _walletActions.set_metamask_installed)(true)); //instance web3

            _context2.next = 5;
            return new _web.default(ethereum);

          case 5:
            web3 = _context2.sent;
            store.dispatch((0, _web3Actions.set_web3_instance)(web3)); //detect if metamask is connected to site

            _context2.next = 9;
            return web3.eth.getAccounts();

          case 9:
            accArr = _context2.sent;

            if (!(accArr.length === 0)) {
              _context2.next = 14;
              break;
            }

            store.dispatch((0, _walletActions.set_connection)(false));
            _context2.next = 23;
            break;

          case 14:
            store.dispatch((0, _walletActions.set_connection)(true));
            store.dispatch((0, _walletActions.set_current_account)(accArr[0]));
            _context2.t0 = store;
            _context2.t1 = _walletActions.set_networkd_id;
            _context2.next = 20;
            return web3.eth.getChainId();

          case 20:
            _context2.t2 = _context2.sent;
            _context2.t3 = (0, _context2.t1)(_context2.t2);

            _context2.t0.dispatch.call(_context2.t0, _context2.t3);

          case 23:
            //listen to eth change events
            ethereum.on('accountsChanged', function (accounts) {
              // console.log('accounts: ' + accounts);
              if (accounts.length > 0) {
                store.dispatch((0, _walletActions.set_current_account)(accounts[0]));
              } else {
                store.dispatch((0, _walletActions.set_connection)(false));
                store.dispatch((0, _walletActions.set_current_account)(''));
              }
            });
            ethereum.on('connect', function (connectInfo) {// if(accounts[0] != null)
              //     store.dispatch( set_current_account(accounts[0]) );
              // store.dispatch( set_connection(true) );
              // console.log('cnx');
            });
            ethereum.on('disconnect', function (error) {// store.dispatch( set_current_account('') );
              // console.log(error);
            });
            ethereum.on('chainChanged', /*#__PURE__*/function () {
              var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(chainId) {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.t0 = store;
                        _context.t1 = _walletActions.set_networkd_id;
                        _context.next = 4;
                        return web3.eth.getChainId();

                      case 4:
                        _context.t2 = _context.sent;
                        _context.t3 = (0, _context.t1)(_context.t2);

                        _context.t0.dispatch.call(_context.t0, _context.t3);

                      case 7:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function (_x2) {
                return _ref2.apply(this, arguments);
              };
            }());

          case 27:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function initWeb3(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.initWeb3 = initWeb3;