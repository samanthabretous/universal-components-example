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

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } _setPrototypeOf(subClass.prototype, superClass && superClass.prototype); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.getPrototypeOf || function _getPrototypeOf(o) { return o.__proto__; }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Card =
/*#__PURE__*/
function (_Component) {
  function Card() {
    var _getPrototypeOf2;

    var _temp, _this;

    _classCallCheck(this, Card);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Card)).call.apply(_getPrototypeOf2, [this].concat(args))), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      animatedValue: new _reactPrimitives.Animated.Value(0)
    }), "componentWillMount", function () {
      _this.colorAnimation = _this.state.animatedValue.interpolate({
        inputRange: [0, 0.7],
        outputRange: ['#000000', '#111111'],
        extrapolate: 'clamp'
      });
      _this.opacityAnimation = _this.state.animatedValue.interpolate({
        inputRange: [0.3, 0.8],
        outputRange: [0, 1],
        extrapolate: 'clamp'
      });
    }), "animateIn", function () {
      _reactPrimitives.Animated.timing(_this.state.animatedValue, {
        toValue: 1,
        duration: 750
      }).start();
    }), "render", function () {
      return _react.default.createElement(_reactPrimitives.View, {
        style: [styles.container, _this.props.style]
      }, _react.default.createElement(_reactPrimitives.Animated.View, {
        style: [styles.image, {
          backgroundColor: _this.colorAnimation
        }]
      }), _react.default.createElement(_reactPrimitives.Animated.Image, {
        style: [styles.image, {
          opacity: _this.opacityAnimation
        }],
        onLoadEnd: function onLoadEnd() {
          return _this.animateIn();
        },
        source: _this.props.image
      }), _react.default.createElement(_reactPrimitives.View, {
        style: styles.contentContainer
      }, _react.default.createElement(_reactPrimitives.Text, {
        style: styles.title
      }, _this.props.title), _react.default.createElement(_reactPrimitives.Text, {
        style: styles.subtitle
      }, _this.props.subtitle)));
    }), _temp));
  }

  _inherits(Card, _Component);

  return Card;
}(_react.Component);

_defineProperty(Card, "propTypes", {
  image: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.string]).isRequired,
  subtitle: _propTypes.default.string.isRequired,
  title: _propTypes.default.string.isRequired
});

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