"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _celesteProvider = require("../celeste-provider");

var _walletActions = require("../../store/actions/walletActions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getAddressReduced = function getAddressReduced(address) {
  return "".concat(address.slice(0, 6), "...").concat(address.slice(-4));
};

var ConnectBtn = function ConnectBtn(props) {
  var dispatch = (0, _celesteProvider.useDispatch)();
  var wallet = (0, _celesteProvider.useSelector)(function (state) {
    return state.wallet;
  });

  var onClick = function onClick(e) {
    if (wallet.isMetamaskInstalled && !wallet.isConnected) dispatch((0, _walletActions.request_connection)());
  };

  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("button", {
    className: props.className,
    onClick: onClick
  }, wallet.isConnected && wallet.currentAccount != null ? getAddressReduced(wallet.currentAccount) : 'Connect'));
};

ConnectBtn.propTypes = {
  className: _propTypes.default.string
};
var _default = ConnectBtn;
exports.default = _default;