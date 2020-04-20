webpackHotUpdate("static/development/pages/dashboard.js",{

/***/ "./components/Categories/Menu.js":
/*!***************************************!*\
  !*** ./components/Categories/Menu.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../theme */ "./components/theme.js");
/* harmony import */ var _CategoryList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CategoryList */ "./components/Categories/CategoryList.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Header */ "./components/Categories/Header.js");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mobx-react-lite */ "./node_modules/mobx-react-lite/dist/index.module.js");
/* harmony import */ var _Charts_ReChart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Charts/ReChart */ "./components/Charts/ReChart.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










 // border: 1px solid ${props => props.theme.border};

var Sidebar = Object(mobx_react__WEBPACK_IMPORTED_MODULE_5__["inject"])("store")(Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_6__["observer"])(function (_ref) {
  var store = _ref.store;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      dropdown = _useState2[0],
      setDropdown = _useState2[1];

  var clicked = function clicked(value) {
    store.setSymbol(value);
  };

  var showDropdown = function showDropdown() {
    if (dropdown == false) {
      setDropdown(true);
    } else {
      setDropdown(false);
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
    theme: Object(_theme__WEBPACK_IMPORTED_MODULE_2__["default"])(false)
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LapperContainer, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Lapper4, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SetSymbol, {
    onClick: function onClick() {
      showDropdown();
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faCaretDown"],
    style: {
      transition: "none"
    }
  }), store.symbol), dropdown == true ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DropdownListContainer, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DropdownListItem, {
    value: "XBTUSD",
    onClick: function onClick() {
      return clicked("XBTUSD");
    }
  }, "XBTUSD"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DropdownListItem, {
    value: "XBTU20",
    onClick: function onClick() {
      return clicked("XBTU20");
    }
  }, "XBTU20"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DropdownListItem, {
    value: "XBTM20",
    onClick: function onClick() {
      return clicked("XBTM20");
    }
  }, "XBTM20")) : null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Lapper, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CategoryList__WEBPACK_IMPORTED_MODULE_3__["default"], null)), store.pnl >= 0 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Lapper2, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InnerLapper, null, store.pnl.toFixed(4) + "xbt")) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Lapper3, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InnerLapper, null, store.pnl.toFixed(4) + "xbt"))));
})); // {store.pnl >= 0 ? (
//   <Lapper2>
//     <InnerLapper>{store.pnl.toFixed(4) + "xbt"}</InnerLapper>
//   </Lapper2>
// ) : (
//   <Lapper3>
//     <InnerLapper>{store.pnl.toFixed(4) + "xbt"}</InnerLapper>
//   </Lapper3>
// )}

/* harmony default export */ __webpack_exports__["default"] = (Sidebar);
var LapperContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Menu__LapperContainer",
  componentId: "sc-1uueytc-0"
})(["display:flex;flex-direction:column;margin-left:24px;"]);
var Lapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].aside.withConfig({
  displayName: "Menu__Lapper",
  componentId: "sc-1uueytc-1"
})(["display:flex;flex-direction:column;flex-basis:240px;border-radius:2px;background-color:", ";background-color:#212529;margin-bottom:10px;@media (max-width:768px){display:none;}"], function (props) {
  return props.theme.foreground;
});
var InnerLapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Menu__InnerLapper",
  componentId: "sc-1uueytc-2"
})(["color:white;text-align:center;margin:auto;"]);
var Lapper2 = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].aside.withConfig({
  displayName: "Menu__Lapper2",
  componentId: "sc-1uueytc-3"
})(["border-radius:2px;background-color:", ";background-color:green;max-height:30px;@media (max-width:768px){display:none;}"], function (props) {
  return props.theme.foreground;
});
var Lapper3 = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].aside.withConfig({
  displayName: "Menu__Lapper3",
  componentId: "sc-1uueytc-4"
})(["border-radius:2px;background-color:", ";background-color:red;max-height:30px;@media (max-width:768px){display:none;}"], function (props) {
  return props.theme.foreground;
});
var Lapper4 = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].aside.withConfig({
  displayName: "Menu__Lapper4",
  componentId: "sc-1uueytc-5"
})(["display:flex;flex-direction:column;border-radius:2px;background-color:", ";background-color:#212529;margin-bottom:10px;@media (max-width:768px){display:none;}"], function (props) {
  return props.theme.foreground;
});
var SetSymbol = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Menu__SetSymbol",
  componentId: "sc-1uueytc-6"
})(["color:#fff;"]);
var DropdownContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Menu__DropdownContainer",
  componentId: "sc-1uueytc-7"
})(["height:100px;"]);
var DropdownListContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].ul.withConfig({
  displayName: "Menu__DropdownListContainer",
  componentId: "sc-1uueytc-8"
})([""]);
var DropdownListItem = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].li.withConfig({
  displayName: "Menu__DropdownListItem",
  componentId: "sc-1uueytc-9"
})(["color:#fff;"]);

/***/ })

})
//# sourceMappingURL=dashboard.js.0ffa57f37d187038b518.hot-update.js.map