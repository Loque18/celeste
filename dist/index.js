"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "CelesteProvider", {
  enumerable: true,
  get: function () {
    return _celesteProvider.default;
  }
});
Object.defineProperty(exports, "ConnectButton", {
  enumerable: true,
  get: function () {
    return _connectButton.default;
  }
});

var _store = _interopRequireDefault(require("./store"));

var _web = require("./web3");

var _celesteProvider = _interopRequireDefault(require("./components/celeste-provider"));

var _connectButton = _interopRequireDefault(require("./components/connect-button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _web.initWeb3)(_store.default); // import react from 'react';
// import ReactDOM from 'react-dom';
// import Button from 'lib/components/button';
// ReactDOM.render(
//     <Button />,
//     document.getElementById('root')
// );