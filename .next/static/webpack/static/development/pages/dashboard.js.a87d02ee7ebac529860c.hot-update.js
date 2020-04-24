webpackHotUpdate("static/development/pages/dashboard.js",{

/***/ "./components/Menu/768px/CategoryList.js":
/*!***********************************************!*\
  !*** ./components/Menu/768px/CategoryList.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mobx-react-lite */ "./node_modules/mobx-react-lite/dist/index.module.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var SidebarCategoryList = Object(mobx_react__WEBPACK_IMPORTED_MODULE_2__["inject"])("store")(Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__["observer"])(function (_ref) {
  var store = _ref.store;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      dropdown = _useState2[0],
      setDropdown = _useState2[1];

  function clicked(value) {
    store.resetPnl();
    store.changeDate(value);
    console.log(store);
  }

  function showDropdown() {
    if (dropdown == true) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Contain, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SetSymbol, {
    onClick: function onClick() {
      showDropdown();
    }
  }, dropdown == true ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faCaretUp"],
    style: {
      transition: "none",
      marginRight: "4px",
      marginLeft: "3px"
    }
  }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faCaretDown"],
    style: {
      transition: "none",
      marginRight: "4px",
      marginLeft: "3px"
    }
  }), store.date), dropdown == true ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DropdownListContainer, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DropdownListItem, {
    onClick: function onClick() {
      return clicked("Today");
    }
  }, "Today"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DropdownListItem, {
    onClick: function onClick() {
      return clicked("Yesterday");
    }
  }, "Yesterday"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DropdownListItem, {
    onClick: function onClick() {
      return clicked("This Week");
    }
  }, "This Week"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DropdownListItem, {
    onClick: function onClick() {
      return clicked("This Month");
    }
  }, "This Month")) : null);
}));
/* harmony default export */ __webpack_exports__["default"] = (SidebarCategoryList);
var Contain = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "CategoryList__Contain",
  componentId: "sc-1mkw8oa-0"
})([""]);
var CategoryList = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].nav.withConfig({
  displayName: "CategoryList",
  componentId: "sc-1mkw8oa-1"
})(["display:flex;flex-direction:column;"]);
var Item = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "CategoryList__Item",
  componentId: "sc-1mkw8oa-2"
})(["padding:12px;font-size:15px;text-decoration:none;color:", ";color:white;::after{left:-1px;top:0;bottom:0;border-left:3px solid ", ";}&:hover{background-color:#fff;color:#212529;cursor:pointer;}"], function (props) {
  return props.theme.normalText;
}, function (props) {
  return props.theme.accent;
});
var ItemActive = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "CategoryList__ItemActive",
  componentId: "sc-1mkw8oa-3"
})(["padding:12px;font-size:15px;text-decoration:none;color:", ";color:white;::after{left:-1px;top:0;bottom:0;border-left:3px solid ", ";}background-color:#fff;color:#212529;cursor:pointer;"], function (props) {
  return props.theme.normalText;
}, function (props) {
  return props.theme.accent;
});
var SetSymbol = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "CategoryList__SetSymbol",
  componentId: "sc-1mkw8oa-4"
})(["font-size:15px;color:#fff;:hover{cursor:pointer;}"]);
var DropdownContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "CategoryList__DropdownContainer",
  componentId: "sc-1mkw8oa-5"
})(["height:100px;"]);
var DropdownListContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].ul.withConfig({
  displayName: "CategoryList__DropdownListContainer",
  componentId: "sc-1mkw8oa-6"
})(["list-style-type:none;"]);
var DropdownListItem = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].li.withConfig({
  displayName: "CategoryList__DropdownListItem",
  componentId: "sc-1mkw8oa-7"
})(["text-align:center;font-size:15px;color:#fff;:hover{cursor:pointer;color:#000;background-color:#fff;}"]);

/***/ })

})
//# sourceMappingURL=dashboard.js.a87d02ee7ebac529860c.hot-update.js.map