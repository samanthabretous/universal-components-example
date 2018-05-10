"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _primitives = _interopRequireDefault(require("styled-components/primitives"));

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  background-color: #ffffff;\n  height: 450px;\n  overflow: hidden;\n  position: relative;\n  width: 150px;\n"]),
    _templateObject2 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  width: 100%;\n  position: absolute;\n  height: 100%;\n  top: 0;\n  left: 0;\n"]),
    _templateObject3 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  align-items: stretch;\n  flex: 1;\n  padding: 16px;\n"]),
    _templateObject4 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  color: #ffffff;\n  font-size: 24px;\n  margin-bottom: 8px;\n"]),
    _templateObject5 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  color: #ffffff;\n  font-size: 16px;\n"]);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _primitives.default.View(_templateObject);

var Image = _primitives.default.Image(_templateObject2);

var ContentContainer = _primitives.default.View(_templateObject3);

var Title = _primitives.default.Text(_templateObject4);

var SubTitle = _primitives.default.Text(_templateObject5);

var Card = function Card(_ref) {
  var title = _ref.title,
      subtitle = _ref.subtitle,
      image = _ref.image,
      style = _ref.style;
  return _react.default.createElement(Container, {
    style: style
  }, _react.default.createElement(Image, {
    source: image
  }), _react.default.createElement(ContentContainer, null, _react.default.createElement(Title, null, title), _react.default.createElement(SubTitle, null, subtitle)));
};

Card.propTypes = {
  image: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.string]).isRequired,
  subtitle: _propTypes.default.string.isRequired,
  title: _propTypes.default.string.isRequired
};
var _default = Card;
exports.default = _default;