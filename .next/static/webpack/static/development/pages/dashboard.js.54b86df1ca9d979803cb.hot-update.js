webpackHotUpdate("static/development/pages/dashboard.js",{

/***/ "./components/Header/DashboardHeader.js":
/*!**********************************************!*\
  !*** ./components/Header/DashboardHeader.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../theme */ "./components/theme.js");
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Logo */ "./components/Header/Logo.js");
/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header.scss */ "./components/Header/header.scss");
/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_header_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Menu_Datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Menu/Datepicker */ "./components/Menu/Datepicker.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.esm.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _shared_helpers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/helpers */ "./components/shared/helpers.js");



function _templateObject() {
  var data = _taggedTemplateLiteral(["\n        mutation logout {\n          logout\n        }\n      "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }














var Cookie = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");

var Header = function Header(_ref) {
  var router = _ref.router;

  function logout(_x) {
    return _logout.apply(this, arguments);
  }

  function _logout() {
    _logout = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(client) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              Cookie.remove("isAuth");
              Cookie.remove("qid");
              window.localStorage.removeItem("store");
              _context.next = 5;
              return client.mutate({
                mutation: graphql_tag__WEBPACK_IMPORTED_MODULE_10___default()(_templateObject())
              });

            case 5:
              next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push("/");

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _logout.apply(this, arguments);
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_4__["ThemeProvider"], {
    theme: Object(_theme__WEBPACK_IMPORTED_MODULE_5__["default"])(false)
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Wrapper, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Logo__WEBPACK_IMPORTED_MODULE_6__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DatePickersWrap, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DatePickerWrap, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Menu_Datepicker__WEBPACK_IMPORTED_MODULE_8__["default"], {
    set: true,
    start: true
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      color: "white",
      margin: "auto 0px"
    }
  }, "-"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DatePickerWrap, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Menu_Datepicker__WEBPACK_IMPORTED_MODULE_8__["default"], {
    set: true,
    start: false
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LinksWrap, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    prefetch: true,
    href: "/settings"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledLink, {
    className: router.pathname === "/settings" ? "is-active" : ""
  }, "settings")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_9__["ApolloConsumer"], null, function (client) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledLink, {
      onClick: function onClick() {
        return logout(client);
      }
    }, "logout");
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(Header));
var LogoWrap = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "DashboardHeader__LogoWrap",
  componentId: "sc-1szqfd9-0"
})([""]);
var TempDiv = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "DashboardHeader__TempDiv",
  componentId: "sc-1szqfd9-1"
})(["margin:auto;"]);
var LinksWrap = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "DashboardHeader__LinksWrap",
  componentId: "sc-1szqfd9-2"
})(["margin-right:0;margin-left:auto;display:flex;flex-direction:row;"]);
var DatePickersWrap = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "DashboardHeader__DatePickersWrap",
  componentId: "sc-1szqfd9-3"
})(["margin-left:20px;margin-right:auto;display:flex;flex-direction:row;"]);
var DatePickerWrap = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "DashboardHeader__DatePickerWrap",
  componentId: "sc-1szqfd9-4"
})(["margin:auto 10px;"]);
var StyledLink = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "DashboardHeader__StyledLink",
  componentId: "sc-1szqfd9-5"
})(["", ";", ";margin:0;color:", ";color:#fff;text-transform:capitalize;position:relative;cursor:pointer;::after{", ";content:\"\";position:absolute;left:0;right:0;bottom:0;opacity:0;border-bottom:1px solid ", ";}:hover{opacity:1;color:", ";}:hover::after{opacity:1;border-bottom:1px solid ", ";}&.active::after{left:0;right:0;bottom:0;border-bottom:3px solid ", ";}font-weight:700;letter-spacing:0.05em;font-size:14px;margin-left:auto;"], _shared_helpers__WEBPACK_IMPORTED_MODULE_11__["headerItem"], _shared_helpers__WEBPACK_IMPORTED_MODULE_11__["link"], function (props) {
  return props.theme.mutedText;
}, Object(_shared_helpers__WEBPACK_IMPORTED_MODULE_11__["transition"])("opacity", "border-bottom-width"), function (props) {
  return props.theme.accent;
}, function (props) {
  return props.theme.accent;
}, function (props) {
  return props.theme.accent;
}, function (props) {
  return props.theme.accent;
});
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].header.withConfig({
  displayName: "DashboardHeader__Wrapper",
  componentId: "sc-1szqfd9-6"
})(["position:sticky;z-index:10;top:0;display:flex;align-items:stretch;border-bottom:2px solid #eee;height:55px;padding:0 0vw;font-weight:700;background-color:", ";user-select:none;background-color:#212527;@media (max-width:425px){margin-bottom:16px;height:40px;}@media (max-width:768px){padding:0;}"], function (props) {
  return props.theme.foreground;
});

/***/ })

})
//# sourceMappingURL=dashboard.js.54b86df1ca9d979803cb.hot-update.js.map