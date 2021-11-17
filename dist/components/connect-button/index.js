"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _celesteProvider = require("../celeste-provider");

var _walletActions = require("../../store/actions/walletActions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getAddressReduced = address => `${address.slice(0, 6)}...${address.slice(-4)}`;

const ConnectBtn = props => {
  // const {wallet} = props;
  //console.log(wallet);
  // const onClick = e => {
  //     if(wallet.isMetamaskInstalled && !wallet.isConnected)
  //         props.request_connection();
  // }
  const store = (0, _celesteProvider.useStore)();
  const dispatch = (0, _celesteProvider.useDispatch)();
  const wallet = (0, _celesteProvider.useSelector)(state => state.wallet);

  const onClick = e => {
    dispatch((0, _walletActions.request_connection)());
  };

  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("button", {
    className: props.className,
    onClick: onClick
  }, wallet.isConnected && wallet.currentAccount != null ? getAddressReduced(wallet.currentAccount) : 'Connect'));
};

var _default = ConnectBtn;
exports.default = _default;