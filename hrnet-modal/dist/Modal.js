"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const Modal = props => {
  return /*#__PURE__*/_react.default.createElement(ModalBackground, {
    isOpen: props.isOpen,
    onClick: props.onClickOutside ? props.onClickOutside : props.onConfirm
  }, /*#__PURE__*/_react.default.createElement(ModalContainer, {
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/_react.default.createElement(CloseButton, {
    onClick: props.onConfirm
  }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faCheck
  })), /*#__PURE__*/_react.default.createElement(ModalMessage, null, " ", props.message ? props.message : "Whatever you did, it is confirmed", " ")));
};

Modal.propTypes = {
  isOpen: _propTypes.default.bool.isRequired,
  onConfirm: _propTypes.default.func.isRequired,
  message: _propTypes.default.string,
  onClickOutside: _propTypes.default.func
};
var _default = Modal;
exports.default = _default;

const ModalBackground = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    position: fixed;\n    top:0;\n    left:0;\n    cursor: default;\n    width:100vw;\n    height:100vh;\n    background-color: rgba(250,250,250, 0.5);\n    display: ", ";\n    justify-content: center;\n    align-items: center;\n    transition: background-color 0.5s;\n\n    :hover {\n        background-color: rgba(216,252,250,0.8);\n    }\n"])), props => props.isOpen ? "flex" : "none");

const ModalContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    width: fit-content;\n    height: 60px;\n    border-radius: 5px;\n    background-color: white;\n    padding:0;\n    cursor: default;\n    display: flex;\n    align-items: center;\n    border: 1px solid rgba(0,0,0,0.2);\n    box-shadow: 5px 5px 30px -6px rgba(0,0,0,0.2);\n"])));

const CloseButton = _styledComponents.default.button(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    height: 100%;\n    width: 60px;\n    cursor: pointer;\n    border-radius: 4px 0 0 4px;\n    background-color: #32D7F0;\n    color: white;\n    border: 0;\n    font-size: 30px;\n"])));

const ModalMessage = _styledComponents.default.span(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    color: \"#32D7F0\";\n    margin-left: 20px;\n    margin-right: 20px;\n"])));