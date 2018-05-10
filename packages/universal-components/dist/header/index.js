"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactPrimitives = require("@kkemple/react-primitives");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(_ref) {
  var title = _ref.title,
      subtitle = _ref.subtitle,
      style = _ref.style;
  return _react.default.createElement(_reactPrimitives.View, {
    style: [styles.container, style]
  }, _react.default.createElement(_reactPrimitives.Text, {
    style: styles.title
  }, title), _react.default.createElement(_reactPrimitives.Text, {
    style: styles.subtitle
  }, subtitle));
};

Header.propTypes = {
  subtitle: _propTypes.default.string.isRequired,
  title: _propTypes.default.string.isRequired
};
var _default = Header;
exports.default = _default;

var styles = _reactPrimitives.StyleSheet.create({
  container: {
    alignItems: 'stretch',
    backgroundColor: '#ffffff',
    justifyContent: 'space-between',
    maxWidth: '100%',
    overflow: 'hidden',
    padding: 16
  },
  contentContainer: {
    alignItems: 'stretch',
    flex: 1,
    padding: 16
  },
  image: {
    height: 150,
    width: 150
  },
  subtitle: {
    color: '#cccccc',
    fontSize: 24
  },
  title: {
    color: '#000000',
    fontSize: 54,
    fontWeight: 'bold',
    marginBottom: 16
  }
});