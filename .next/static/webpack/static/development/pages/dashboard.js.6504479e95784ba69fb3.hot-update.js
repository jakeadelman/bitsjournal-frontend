webpackHotUpdate("static/development/pages/dashboard.js",{

/***/ "./components/Menu/CategoryList.js":
/*!*****************************************!*\
  !*** ./components/Menu/CategoryList.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mobx-react-lite */ "./node_modules/mobx-react-lite/dist/index.module.js");
/* harmony import */ var _shared_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/helpers */ "./components/shared/helpers.js");
/* harmony import */ var _Datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Datepicker */ "./components/Menu/Datepicker.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var SidebarCategoryList = Object(mobx_react__WEBPACK_IMPORTED_MODULE_2__["inject"])("store")(Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__["observer"])(function (_ref) {
  var store = _ref.store;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      customClicked = _useState2[0],
      setCustomClicked = _useState2[1];

  function handleClick(value) {
    store.resetPnl();
    store.changeDate(value);
    console.log(store);
  } // useEffect(() => {
  //   console.log(customClicked);
  // }, []);


  function handleCustomClicked() {
    setCustomClicked(true);
    console.log(customClicked);
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CategoryList, null, store.date == "Today" ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ItemActive, {
    onClick: function onClick() {
      return handleClick("Today");
    }
  }, "Today") : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Item, {
    onClick: function onClick() {
      return handleClick("Today");
    }
  }, "Today"), store.date == "Yesterday" ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ItemActive, {
    onClick: function onClick() {
      return handleClick("Yesterday");
    }
  }, "Yesterday") : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Item, {
    onClick: function onClick() {
      return handleClick("Yesterday");
    }
  }, "Yesterday"), store.date == "This Week" ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ItemActive, {
    onClick: function onClick() {
      return handleClick("This Week");
    }
  }, "This Week") : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Item, {
    onClick: function onClick() {
      return handleClick("This Week");
    }
  }, "This Week"), store.date == "This Month" ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ItemActive, {
    onClick: function onClick() {
      return handleClick("This Month");
    }
  }, "This Month") : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Item, {
    onClick: function onClick() {
      return handleClick("This Month");
    }
  }, "This Month"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Item, {
    onClick: function onClick() {
      return handleCustomClicked();
    }
  }, "Custom"));
}));
/* harmony default export */ __webpack_exports__["default"] = (SidebarCategoryList);
var CategoryList = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].nav.withConfig({
  displayName: "CategoryList",
  componentId: "k2se5c-0"
})(["display:flex;flex-direction:column;"]);
var Item = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "CategoryList__Item",
  componentId: "k2se5c-1"
})(["padding:12px;font-size:15px;text-decoration:none;color:", ";color:white;::after{left:-1px;top:0;bottom:0;border-left:3px solid ", ";}&:hover{background-color:#fff;color:#212529;cursor:pointer;}"], function (props) {
  return props.theme.normalText;
}, function (props) {
  return props.theme.accent;
});
var ItemActive = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "CategoryList__ItemActive",
  componentId: "k2se5c-2"
})(["padding:12px;font-size:15px;font-weight:300;text-decoration:none;color:", ";color:white;::after{left:-1px;top:0;bottom:0;border-left:3px solid ", ";}background-color:#fff;color:#212529;cursor:pointer;"], function (props) {
  return props.theme.normalText;
}, function (props) {
  return props.theme.accent;
});

/***/ })

})
//# sourceMappingURL=dashboard.js.6504479e95784ba69fb3.hot-update.js.map