"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.cardState = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _data = _interopRequireDefault(require("./data"));

var _noData = _interopRequireDefault(require("./no-data"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cardState = function cardState(_ref) {
  var image = _ref.image,
      subtitle = _ref.subtitle,
      title = _ref.title;

  if (image) {
    return 'data';
  }

  return 'no-data';
};

exports.cardState = cardState;

var Card = function Card(props) {
  switch (cardState(props)) {
    case 'data':
      return _react.default.createElement(_data.default, props);

    case 'no-data':
      return _react.default.createElement(_noData.default, props);

    default:
      console.warn('Card missing: props');
      return _react.default.createElement(_noData.default, props);
  }
};

Card.propTypes = {
  image: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.string]).isRequired,
  subtitle: _propTypes.default.string.isRequired,
  title: _propTypes.default.string.isRequired
};
var _default = Card;
exports.default = _default;