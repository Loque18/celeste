"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "CelesteProvider", {
  enumerable: true,
  get: function get() {
    return _celesteProvider.default;
  }
});
Object.defineProperty(exports, "ConnectButton", {
  enumerable: true,
  get: function get() {
    return _connectButton.default;
  }
});
Object.defineProperty(exports, "ConnectedWrapper", {
  enumerable: true,
  get: function get() {
    return _connectedWrapper.default;
  }
});
Object.defineProperty(exports, "NetworkWrapper", {
  enumerable: true,
  get: function get() {
    return _networkWrapper.default;
  }
});
exports.initCeleste = void 0;
Object.defineProperty(exports, "useCelesteDispatch", {
  enumerable: true,
  get: function get() {
    return _celesteProvider.useCelesteDispatch;
  }
});
Object.defineProperty(exports, "useCelesteSelector", {
  enumerable: true,
  get: function get() {
    return _celesteProvider.useCelesteSelector;
  }
});
Object.defineProperty(exports, "useCelesteStore", {
  enumerable: true,
  get: function get() {
    return _celesteProvider.useCelesteStore;
  }
});

var _web3Actions = require("./store/actions/web3Actions");

var _web = require("./web3");

var _celesteProvider = _interopRequireWildcard(require("./components/celeste-provider"));

var _connectButton = _interopRequireDefault(require("./components/connect-button"));

var _connectedWrapper = _interopRequireDefault(require("./components/connected-wrapper"));

var _networkWrapper = _interopRequireDefault(require("./components/network-wrapper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var initCeleste = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(options) {
    var celesteStore, web3;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _web.initWeb3)();

          case 2:
            celesteStore = _context.sent;
            web3 = celesteStore.getState().web3Reducer.web3;

            if (options.smartContracts) {
              options.smartContracts.forEach(function (sc) {
                var contract = new web3.eth.Contract(sc.abi, sc.address);
                celesteStore.dispatch((0, _web3Actions.add_contract)(sc.key, contract));
              });
            }

            celesteStore.dispatch((0, _web3Actions.set_initialized)(true));

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function initCeleste(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.initCeleste = initCeleste;