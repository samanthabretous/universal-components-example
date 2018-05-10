"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactPrimitives = require("@kkemple/react-primitives");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var Card = function Card(_ref) {
  var image = _ref.image,
      title = _ref.title,
      subtitle = _ref.subtitle,
      style = _ref.style;
  return _react.default.createElement(_reactPrimitives.View, {
    style: [styles.container, style]
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
  image: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.string]).isRequired,
  subtitle: _propTypes.default.string.isRequired,
  title: _propTypes.default.string.isRequired
};
var _default = Card;
exports.default = _default;

var styles = _reactPrimitives.StyleSheet.create({
  container: {
    alignItems: 'stretch',
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    height: 450,
    justifyContent: 'space-between',
    maxWidth: '100%',
    overflow: 'hidden',
    width: 300
  },
  contentContainer: {
    alignItems: 'stretch',
    flex: 1,
    padding: 16
  },
  image: {
    width: '100%',
    position: 'absolute',
    height: '100%',
    top: 0,
    left: 0
  },
  subtitle: {
    color: '#ffffff',
    fontSize: 12
  },
  title: {
    color: '#ffffff',
    fontSize: 24,
    marginBottom: 8
  }
});