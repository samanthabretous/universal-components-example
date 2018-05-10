"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactPrimitives = require("@kkemple/react-primitives");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Card = function Card(_ref) {
  var title = _ref.title,
      subtitle = _ref.subtitle,
      image = _ref.image,
      style = _ref.style;
  return _react.default.createElement(_reactPrimitives.View, {
    style: [styles.container, style]
  }, _react.default.createElement(_reactPrimitives.View, {
    style: styles.image
  }), _react.default.createElement(_reactPrimitives.View, {
    style: styles.contentContainer
  }, _react.default.createElement(_reactPrimitives.View, {
    style: styles.title
  }), _react.default.createElement(_reactPrimitives.View, {
    style: styles.subtitle
  })));
};

var _default = Card;
exports.default = _default;

var styles = _reactPrimitives.StyleSheet.create({
  container: {
    alignItems: 'stretch',
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    height: 150,
    justifyContent: 'space-between',
    maxWidth: '100%',
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
    height: 150,
    backgroundColor: '#142F3E'
  },
  subtitle: {
    backgroundColor: '#142F3E',
    height: 12,
    width: 150
  },
  title: {
    backgroundColor: '#142F3E',
    marginBottom: 16,
    height: 24,
    width: 200
  }
});