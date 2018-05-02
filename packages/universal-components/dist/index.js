"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactPrimitives = require("react-primitives");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Card = function Card(_ref) {
  var title = _ref.title,
      subtitle = _ref.subtitle,
      image = _ref.image;
  return _react.default.createElement(_reactPrimitives.View, {
    style: styles.container
  }, _react.default.createElement(_reactPrimitives.Image, {
    style: styles.image,
    source: image
  }), _react.default.createElement(_reactPrimitives.View, {
    style: styles.contentContainer
  }, _react.default.createElement(_reactPrimitives.Text, {
    style: styles.title
  }, title), _react.default.createElement(_reactPrimitives.Text, {
    style: styles.subtitle
  }, subtitle)));
};

Card.propTypes = {
  title: _propTypes.default.string.isRequired,
  subtitle: _propTypes.default.string.isRequired,
  image: _propTypes.default.oneOf([_propTypes.default.object, _propTypes.default.string]).isRequired
};
var _default = Card;
exports.default = _default;

var styles = _reactPrimitives.StyleSheet.create({
  container: {
    alignItems: 'stretch',
    backgroundColor: '#ffffff',
    borderColor: '#eee',
    borderRadius: 3,
    borderWidth: 1,
    flexDirection: 'row',
    height: 150,
    justifyContent: 'space-between',
    margin: 16,
    overflow: 'hidden',
    width: 475
  },
  contentContainer: {
    alignItems: 'stretch',
    flex: 1,
    padding: 16
  },
  image: {
    width: 150,
    height: 150
  },
  title: {
    marginBottom: 16
  },
  subtitle: {
    color: '#cccccc',
    fontSize: 12
  }
});