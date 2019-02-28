webpackHotUpdate("static/development/pages/register.js",{

/***/ "./components/Header/Dropdown.js":
/*!***************************************!*\
  !*** ./components/Header/Dropdown.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Dropdown; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _RegisterForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../RegisterForm */ "./components/RegisterForm.js");
/* harmony import */ var react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-fontawesome */ "./node_modules/react-fontawesome/lib/index.js");
/* harmony import */ var react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _shared_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/helpers */ "./components/shared/helpers.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/manx/projects/instagauge/frontend/components/Header/Dropdown.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }








var Dropdown =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Dropdown, _React$Component);

  function Dropdown(props) {
    var _this;

    _classCallCheck(this, Dropdown);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Dropdown).call(this, props));
    _this.state = {
      listOpen: false
    };
    _this.toggleList = _this.toggleList.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Dropdown, [{
    key: "handleClickOutside",
    value: function handleClickOutside() {
      this.setState({
        listOpen: false
      });
    }
  }, {
    key: "toggleList",
    value: function toggleList() {
      this.setState(function (prevState) {
        return {
          listOpen: !prevState.listOpen
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var list = this.props.list;
      var listOpen = this.state.listOpen;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          display: "flex"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledLink, {
        onClick: function onClick() {
          return _this2.toggleList();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "dd-header-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, "settings"), listOpen ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default.a, {
        name: "angle-up",
        size: "2x",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default.a, {
        name: "angle-down",
        size: "2x",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      })), listOpen && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DropdownDiv, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DropdownListItem, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, "account"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        prefetch: true,
        href: "/logout",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DropdownListItem, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, "logout"))));
    }
  }]);

  return Dropdown;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);


var DropdownListItem = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Dropdown__DropdownListItem",
  componentId: "a2l2xv-0"
})(["", " padding:16px;"], _shared_helpers__WEBPACK_IMPORTED_MODULE_4__["smallFont"]);
var DropdownDiv = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Dropdown__DropdownDiv",
  componentId: "a2l2xv-1"
})(["position:absolute;display:block;background-color:", ";margin-top:45px;"], function (props) {
  return props.theme.foreground;
});
var StyledLink = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Dropdown__StyledLink",
  componentId: "a2l2xv-2"
})(["margin:auto 10px;color:", ";position:relative;cursor:pointer;::after{content:\"\";position:absolute;left:0;right:0;bottom:0;opacity:0;border-bottom:1px solid ", ";}:hover{opacity:1;color:", ";}&.active::after{left:0;right:0;bottom:0;border-bottom:3px solid ", ";}font-weight:700;letter-spacing:0.05em;font-size:12px;text-transform:uppercase;"], function (props) {
  return props.theme.mutedText;
}, function (props) {
  return props.theme.accent;
}, function (props) {
  return props.theme.accent;
}, function (props) {
  return props.theme.accent;
});

/***/ })

})
//# sourceMappingURL=register.js.aff5726549cc23b95933.hot-update.js.map