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
  }

  function handleCustomClicked() {
    setCustomClicked(true);
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CategoryList, null, store.date == "Today" && customClicked == false ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ItemActive, {
    onClick: function onClick() {
      return handleClick("Today");
    }
  }, "Today") : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Item, {
    onClick: function onClick() {
      return handleClick("Today");
    }
  }, "Today"), store.date == "Yesterday" && customClicked == false ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ItemActive, {
    onClick: function onClick() {
      return handleClick("Yesterday");
    }
  }, "Yesterday") : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Item, {
    onClick: function onClick() {
      return handleClick("Yesterday");
    }
  }, "Yesterday"), store.date == "This Week" && customClicked == false ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ItemActive, {
    onClick: function onClick() {
      return handleClick("This Week");
    }
  }, "This Week") : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Item, {
    onClick: function onClick() {
      return handleClick("This Week");
    }
  }, "This Week"), store.date == "This Month" && customClicked == false ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ItemActive, {
    onClick: function onClick() {
      return handleClick("This Month");
    }
  }, "This Month") : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Item, {
    onClick: function onClick() {
      return handleClick("This Month");
    }
  }, "This Month"), customClicked == true ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ItemActive, {
    onClick: function onClick() {
      return handleCustomClicked();
    }
  }, "Custom") : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Item, {
    onClick: function onClick() {
      return handleCustomClicked();
    }
  }, "Custom")), customClicked ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Popup, null) : null);
}));

var Popup = function Popup() {
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      entered = _useState4[0],
      setEntered = _useState4[1];

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PopupTop, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PopContain, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Row1, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PopLabel, null, "start:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Datepicker__WEBPACK_IMPORTED_MODULE_5__["default"], {
    start: true,
    set: entered
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Row1, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PopLabel, null, "end:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Datepicker__WEBPACK_IMPORTED_MODULE_5__["default"], {
    start: false,
    set: entered
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PopEnter, {
    onClick: function onClick() {
      return setEntered(true);
    }
  }, "Set Date")));
};

/* harmony default export */ __webpack_exports__["default"] = (SidebarCategoryList);
var Row1 = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "CategoryList__Row1",
  componentId: "k2se5c-0"
})(["margin-bottom:5px;"]);
var PopContain = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "CategoryList__PopContain",
  componentId: "k2se5c-1"
})(["margin:5px;"]);
var PopLabel = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "CategoryList__PopLabel",
  componentId: "k2se5c-2"
})(["color:#fff;"]);
var PopEnter = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button.withConfig({
  displayName: "CategoryList__PopEnter",
  componentId: "k2se5c-3"
})(["margin-top:5px;background:#fff;padding:5px;border-radius:2px;"]);
var PopupTop = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "CategoryList__PopupTop",
  componentId: "k2se5c-4"
})(["position:absolute;background:#000;z-index:1;margin:5px;padding:2px;border-radius:2px;"]);
var PopupItem = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "CategoryList__PopupItem",
  componentId: "k2se5c-5"
})(["position:relative;display:inline-block;cursor:pointer;"]);
var CategoryList = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].nav.withConfig({
  displayName: "CategoryList",
  componentId: "k2se5c-6"
})(["display:flex;flex-direction:column;"]);
var Item = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "CategoryList__Item",
  componentId: "k2se5c-7"
})(["padding:12px;font-size:15px;text-decoration:none;color:", ";color:white;::after{left:-1px;top:0;bottom:0;border-left:3px solid ", ";}&:hover{background-color:#fff;color:#212529;cursor:pointer;}"], function (props) {
  return props.theme.normalText;
}, function (props) {
  return props.theme.accent;
});
var ItemActive = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "CategoryList__ItemActive",
  componentId: "k2se5c-8"
})(["padding:12px;font-size:15px;font-weight:300;text-decoration:none;color:", ";color:white;::after{left:-1px;top:0;bottom:0;border-left:3px solid ", ";}background-color:#fff;color:#212529;cursor:pointer;"], function (props) {
  return props.theme.normalText;
}, function (props) {
  return props.theme.accent;
});

/***/ })

})
//# sourceMappingURL=dashboard.js.f75aa258f46d7c361e84.hot-update.js.map