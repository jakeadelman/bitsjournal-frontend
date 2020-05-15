webpackHotUpdate("static/development/pages/dashboard.js",{

/***/ "./components/Menu/768px/Menu.js":
/*!***************************************!*\
  !*** ./components/Menu/768px/Menu.js ***!
  \***************************************/
/*! exports provided: SymbolChooser768, Pnl768, default, SetSymbol */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SymbolChooser768", function() { return SymbolChooser768; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pnl768", function() { return Pnl768; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetSymbol", function() { return SetSymbol; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../theme */ "./components/theme.js");
/* harmony import */ var _CategoryList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CategoryList */ "./components/Menu/CategoryList.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Header */ "./components/Menu/Header.js");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mobx-react-lite */ "./node_modules/mobx-react-lite/dist/index.module.js");
/* harmony import */ var _Dashboard_Tades_Trades__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Dashboard/Tades/Trades */ "./components/Dashboard/Tades/Trades.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _shared_helpers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/helpers */ "./components/shared/helpers.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }













var SymbolChooser768 = Object(mobx_react__WEBPACK_IMPORTED_MODULE_5__["inject"])("store")(Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_6__["observer"])(function (_ref) {
  var store = _ref.store;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      dropdown = _useState2[0],
      setDropdown = _useState2[1];

  var showDropdown = function showDropdown() {
    if (dropdown == false) {
      setDropdown(true);
    } else {
      setDropdown(false);
    }
  };

  var clicked = function clicked(value) {
    store.setSymbol(value);
    store.changeHasTempTags();
    setDropdown(false);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LapperChooser, {
    onClick: function onClick() {
      showDropdown();
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SetSymbol, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InnerSymbolChooser, null, store.symbol, dropdown == true ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faCaretUp"],
    style: {
      transition: "none",
      marginRight: "3px",
      marginLeft: "3px"
    }
  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faCaretDown"],
    style: {
      transition: "none",
      marginRight: "3px",
      marginLeft: "3px"
    }
  }))), dropdown == true ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DropdownListContainer, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DropdownListItem, {
    onClick: function onClick() {
      return clicked("XBTUSD");
    }
  }, "XBTUSD"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DropdownListItem, {
    onClick: function onClick() {
      return clicked("XBTU20");
    }
  }, "XBTU20"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DropdownListItem, {
    onClick: function onClick() {
      return clicked("XBTM20");
    }
  }, "XBTM20")) : null);
}));
var Pnl768 = Object(mobx_react__WEBPACK_IMPORTED_MODULE_5__["inject"])("store")(Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_6__["observer"])(function (_ref2) {
  var store = _ref2.store;

  if (store.pnl >= 0) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Lapper2, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InnerLapper, {
      style: {
        padding: "4px"
      }
    }, store.pnl.toFixed(4) + "xbt"));
  } else {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Lapper3, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InnerLapper, {
      style: {
        padding: "4px"
      }
    }, store.pnl.toFixed(4) + "xbt"));
  }
}));
var Sidebar = Object(mobx_react__WEBPACK_IMPORTED_MODULE_5__["inject"])("store")(Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_6__["observer"])(function (_ref3) {
  var store = _ref3.store;

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      dropdown = _useState4[0],
      setDropdown = _useState4[1];

  var clicked = function clicked(value) {
    store.setSymbol(value);
    store.changeHasTempTags();
    setDropdown(false);
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
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LapperContainer, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Lapper4, {
    onClick: function onClick() {
      showDropdown();
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SetSymbol, null, store.symbol, dropdown == true ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faCaretUp"],
    style: {
      transition: "none",
      marginRight: "4px",
      marginLeft: "3px"
    }
  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faCaretDown"],
    style: {
      transition: "none",
      marginRight: "4px",
      marginLeft: "3px"
    }
  })), dropdown == true ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DropdownListContainer, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DropdownListItem, {
    onClick: function onClick() {
      return clicked("XBTUSD");
    }
  }, "XBTUSD"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DropdownListItem, {
    onClick: function onClick() {
      return clicked("XBTU20");
    }
  }, "XBTU20"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DropdownListItem, {
    onClick: function onClick() {
      return clicked("XBTM20");
    }
  }, "XBTM20")) : null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Lapper, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CategoryList__WEBPACK_IMPORTED_MODULE_3__["default"], null)), store.pnl >= 0 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Lapper2, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InnerLapper, null, store.pnl.toFixed(4) + "xbt")) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Lapper3, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InnerLapper, null, store.pnl.toFixed(4) + "xbt"))));
}));
/* harmony default export */ __webpack_exports__["default"] = (Sidebar);
var LapperContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Menu__LapperContainer",
  componentId: "moll33-0"
})(["display:flex;flex-direction:column;margin-left:24px;"]);
var Lapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].aside.withConfig({
  displayName: "Menu__Lapper",
  componentId: "moll33-1"
})(["display:flex;flex-direction:column;flex-basis:240px;border-radius:2px;background-color:", ";background-color:#212529;margin-bottom:10px;@media (max-width:768px){display:none;}"], function (props) {
  return props.theme.foreground;
});
var InnerLapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Menu__InnerLapper",
  componentId: "moll33-2"
})(["color:white;text-align:center;margin:auto;"]);
var Lapper2 = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].aside.withConfig({
  displayName: "Menu__Lapper2",
  componentId: "moll33-3"
})(["border-radius:2px;background-color:", ";background-color:green;margin-left:0;margin-right:auto;margin-top:0;margin-bottom:0;width:100%;"], function (props) {
  return props.theme.foreground;
});
var LapperChooser = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].aside.withConfig({
  displayName: "Menu__LapperChooser",
  componentId: "moll33-4"
})(["border-radius:2px;background-color:", ";margin-left:0;margin-right:auto;margin-top:0;margin-bottom:0;width:100%;"], function (props) {
  return props.theme.foreground;
});
var Lapper3 = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].aside.withConfig({
  displayName: "Menu__Lapper3",
  componentId: "moll33-5"
})(["border-radius:2px;background-color:", ";background-color:red;margin-left:0;margin-right:auto;width:100%;"], function (props) {
  return props.theme.foreground;
});
var Lapper4 = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].aside.withConfig({
  displayName: "Menu__Lapper4",
  componentId: "moll33-6"
})(["display:flex;flex-direction:column;border-radius:2px;background-color:", ";background-color:#212529;margin-bottom:10px;@media (max-width:768px){display:none;}"], function (props) {
  return props.theme.foreground;
});
var SetSymbol = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Menu__SetSymbol",
  componentId: "moll33-7"
})(["font-weight:500;font-size:14px;", " color:#fff;background-color:#212527;height:100%;:hover{cursor:pointer;}"], _shared_helpers__WEBPACK_IMPORTED_MODULE_10__["wideFont"]);
var DropdownContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Menu__DropdownContainer",
  componentId: "moll33-8"
})(["height:100px;"]);
var DropdownListContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].ul.withConfig({
  displayName: "Menu__DropdownListContainer",
  componentId: "moll33-9"
})(["list-style-type:none;position:absolute;margin-left:-8px;border-radius:2px;background-color:#212527;"]);
var DropdownListItem = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].li.withConfig({
  displayName: "Menu__DropdownListItem",
  componentId: "moll33-10"
})(["text-align:center;font-weight:500;font-size:14px;color:#fff;background-color:#212529;padding:2px 15px;margin:4px 0;", ":hover{cursor:pointer;color:#000;background-color:#fff;}"], _shared_helpers__WEBPACK_IMPORTED_MODULE_10__["wideFont"]);

/***/ })

})
//# sourceMappingURL=dashboard.js.469e46a7b4de4620cc5e.hot-update.js.map