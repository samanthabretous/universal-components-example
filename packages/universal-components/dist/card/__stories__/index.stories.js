"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _index = _interopRequireDefault(require("../index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Card', module).add('Example', function () {
  return _react.default.createElement("div", {
    style: {
      padding: 16
    }
  }, _react.default.createElement(_index.default, {
    image: {
      uri: 'https://source.unsplash.com/random'
    },
    subtitle: "Rendered using react-primitives",
    title: "Example Card",
    style: {
      borderColor: '#eeeeee',
      borderWidth: 1
    }
  }));
});