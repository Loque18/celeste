"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStore = exports.useSelector = exports.useDispatch = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _store = _interopRequireDefault(require("../../store"));

var _reactRedux = require("react-redux");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MyContext = /*#__PURE__*/_react.default.createContext(null); // Export your custom hooks if you wish to use them in other files.


var useStore = (0, _reactRedux.createStoreHook)(MyContext);
exports.useStore = useStore;
var useDispatch = (0, _reactRedux.createDispatchHook)(MyContext);
exports.useDispatch = useDispatch;
var useSelector = (0, _reactRedux.createSelectorHook)(MyContext);
exports.useSelector = useSelector;

var CelesteProvider = function CelesteProvider(props) {
  return /*#__PURE__*/_react.default.createElement(_reactRedux.Provider, {
    context: MyContext,
    store: _store.default
  }, props.children);
};

var _default = CelesteProvider;
exports.default = _default;