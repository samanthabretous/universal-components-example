"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonInfo = require("@storybook/addon-info");

var _index = _interopRequireDefault(require("../index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Header', module).add('example', (0, _addonInfo.withInfo)({
  inline: true
})(function () {
  return _react.default.createElement("div", {
    style: {
      padding: 16
    }
  }, _react.default.createElement(_index.default, {
    subtitle: "It's great to see all of you",
    title: "Hello, React Europe",
    style: {
      borderColor: '#eeeeee',
      borderWidth: 1
    }
  }));
}));