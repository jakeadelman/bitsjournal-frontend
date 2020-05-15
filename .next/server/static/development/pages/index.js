module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./components/App.js":
/*!***************************!*\
  !*** ./components/App.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (({
  children
}) => __jsx("main", null, children));

/***/ }),

/***/ "./components/Header/Header.js":
/*!*************************************!*\
  !*** ./components/Header/Header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../theme */ "./components/theme.js");
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Logo */ "./components/Header/Logo.js");
/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header.scss */ "./components/Header/header.scss");
/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_header_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Menu_Datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Menu/Datepicker */ "./components/Menu/Datepicker.js");
/* harmony import */ var _shared_helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/helpers */ "./components/shared/helpers.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










const Cookie = __webpack_require__(/*! js-cookie */ "js-cookie");

const Header = ({
  router
}) => {
  const cook = Cookie.get("isAuth");
  console.log(cook);
  console.log(router.pathname);
  let authOrNo = cook === "true";

  if (!authOrNo) {
    return __jsx(styled_components__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
      theme: Object(_theme__WEBPACK_IMPORTED_MODULE_4__["default"])(false)
    }, __jsx(Wrapper, null, __jsx(_Logo__WEBPACK_IMPORTED_MODULE_5__["default"], null), __jsx(DatePickersWrap, null, __jsx(DatePickerWrap, null, __jsx(_Menu_Datepicker__WEBPACK_IMPORTED_MODULE_7__["default"], null)), __jsx(DatePickerWrap, null, __jsx(_Menu_Datepicker__WEBPACK_IMPORTED_MODULE_7__["default"], null))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      prefetch: true,
      href: "/login"
    }, __jsx(StyledLink, {
      className: router.pathname === "/login" ? "is-active" : ""
    }, "login")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      prefetch: true,
      href: "/register"
    }, __jsx(StyledLink, {
      className: router.pathname === "/register" ? "is-active" : ""
    }, "register"))));
  } else {
    return __jsx(styled_components__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
      theme: Object(_theme__WEBPACK_IMPORTED_MODULE_4__["default"])(false)
    }, __jsx(Wrapper, null, __jsx(_Logo__WEBPACK_IMPORTED_MODULE_5__["default"], null), __jsx(DatePickersWrap, null, __jsx(DatePickerWrap, null, __jsx(_Menu_Datepicker__WEBPACK_IMPORTED_MODULE_7__["default"], null)), __jsx(DatePickerWrap, null, __jsx(_Menu_Datepicker__WEBPACK_IMPORTED_MODULE_7__["default"], null))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      prefetch: true,
      href: "/settings"
    }, __jsx(StyledLink, {
      className: router.pathname === "/settings" ? "is-active" : ""
    }, "settings")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      prefetch: true,
      href: "/logout"
    }, __jsx(StyledLink, null, "logout"))));
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Header));
const LogoWrap = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "Header__LogoWrap",
  componentId: "sc-19c2vr5-0"
})([""]);
const TempDiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "Header__TempDiv",
  componentId: "sc-19c2vr5-1"
})(["margin:auto;"]);
const LinksWrap = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "Header__LinksWrap",
  componentId: "sc-19c2vr5-2"
})(["margin-right:0;margin-left:auto;"]);
const DatePickersWrap = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "Header__DatePickersWrap",
  componentId: "sc-19c2vr5-3"
})(["margin-left:0;margin-right:auto;display:flex;flex-direction:row;"]);
const DatePickerWrap = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "Header__DatePickerWrap",
  componentId: "sc-19c2vr5-4"
})(["margin:auto;"]);
const StyledLink = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "Header__StyledLink",
  componentId: "sc-19c2vr5-5"
})(["", ";", ";margin:0;color:", ";color:#fff;text-transform:capitalize;position:relative;cursor:pointer;"], _shared_helpers__WEBPACK_IMPORTED_MODULE_8__["headerItem"], _shared_helpers__WEBPACK_IMPORTED_MODULE_8__["link"], props => props.theme.mutedText);
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.header.withConfig({
  displayName: "Header__Wrapper",
  componentId: "sc-19c2vr5-6"
})(["position:sticky;z-index:10;top:0;display:flex;align-items:stretch;border-bottom:2px solid #eee;height:55px;padding:0 0vw;font-weight:700;background-color:", ";user-select:none;background-color:#212527;@media (max-width:425px){margin-bottom:16px;height:40px;}@media (max-width:768px){padding:0;}"], props => props.theme.foreground);
const StyledLinkFirst = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "Header__StyledLinkFirst",
  componentId: "sc-19c2vr5-7"
})(["", ";", ";margin:0;color:", ";color:#fff;text-transform:capitalize;position:relative;cursor:pointer;::after{", ";content:\"\";position:absolute;left:0;right:0;bottom:0;opacity:0;border-bottom:1px solid ", ";}:hover{opacity:1;color:", ";}:hover::after{opacity:1;border-bottom:1px solid ", ";}&.active::after{left:0;right:0;bottom:0;border-bottom:3px solid ", ";}font-weight:700;letter-spacing:0.05em;font-size:14px;margin-left:auto;"], _shared_helpers__WEBPACK_IMPORTED_MODULE_8__["headerItem"], _shared_helpers__WEBPACK_IMPORTED_MODULE_8__["link"], props => props.theme.mutedText, Object(_shared_helpers__WEBPACK_IMPORTED_MODULE_8__["transition"])("opacity", "border-bottom-width"), props => props.theme.accent, props => props.theme.accent, props => props.theme.accent, props => props.theme.accent); // background-color: #23282d;
// const Wrapper = styled.header`
//   position: sticky;
//   z-index: 10;
//   top: 0;
//   display: flex;
//   align-items: stretch;
//   margin-bottom: 24px;
//   box-shadow: 0 4px 12px ${props => props.theme.shadow};
//   border-bottom: 1px solid ${props => props.theme.border};
//   height: 48px;
//   padding: 0 10vw;
//   background-color: ${props => props.theme.foreground};
//   user-select: none;
//   @media (max-width: 425px) {
//     margin-bottom: 16px;
//     height: 40px;
//   }
//   @media (max-width: 768px) {
//     padding: 0;
//   }
// `;

/***/ }),

/***/ "./components/Header/HomeHeader.js":
/*!*****************************************!*\
  !*** ./components/Header/HomeHeader.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../theme */ "./components/theme.js");
/* harmony import */ var _shared_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/helpers */ "./components/shared/helpers.js");
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Logo */ "./components/Header/Logo.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const Cookie = __webpack_require__(/*! js-cookie */ "js-cookie");

const Header2 = ({
  router: {
    pathname
  }
}) => {
  let cook = Cookie.get("isAuth");

  if (!cook) {
    return __jsx(styled_components__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
      theme: Object(_theme__WEBPACK_IMPORTED_MODULE_4__["default"])(false)
    }, __jsx(Wrapper, null, __jsx(_Logo__WEBPACK_IMPORTED_MODULE_6__["default"], null), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      prefetch: true,
      href: "/login"
    }, __jsx(StyledLink, {
      className: pathname === "/login" ? "is-active" : ""
    }, "login")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      prefetch: true,
      href: "/register"
    }, __jsx(StyledLink, {
      className: pathname === "/register" ? "is-active" : ""
    }, "register"))));
  } else {
    return __jsx(styled_components__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
      theme: Object(_theme__WEBPACK_IMPORTED_MODULE_4__["default"])(false)
    }, __jsx(Wrapper, null, __jsx(_Logo__WEBPACK_IMPORTED_MODULE_6__["default"], null), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      prefetch: true,
      href: "/dashboard"
    }, __jsx(StyledLink, {
      className: pathname === "/register" ? "is-active" : ""
    }, "dashboard"))));
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Header2));
const StyledLink = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "HomeHeader__StyledLink",
  componentId: "tls1pp-0"
})(["", ";", ";", ";margin:0;color:", ";position:relative;cursor:pointer;::after{", ";content:\"\";position:absolute;left:0;right:0;bottom:0;opacity:0;border-bottom:1px solid ", ";}:hover{opacity:1;color:", ";}:hover::after{opacity:1;border-bottom:1px solid ", ";}&.active::after{left:0;right:0;bottom:0;border-bottom:3px solid ", ";}font-weight:700;letter-spacing:0.05em;font-size:12px;text-transform:uppercase;"], _shared_helpers__WEBPACK_IMPORTED_MODULE_5__["headerItem"], _shared_helpers__WEBPACK_IMPORTED_MODULE_5__["wideFont"], _shared_helpers__WEBPACK_IMPORTED_MODULE_5__["link"], props => props.theme.mutedText, Object(_shared_helpers__WEBPACK_IMPORTED_MODULE_5__["transition"])("opacity", "border-bottom-width"), props => props.theme.accent, props => props.theme.accent, props => props.theme.accent, props => props.theme.accent);
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.header.withConfig({
  displayName: "HomeHeader__Wrapper",
  componentId: "tls1pp-1"
})(["position:sticky;z-index:10;top:0;display:flex;align-items:stretch;margin-bottom:0px;box-shadow:0 4px 12px ", ";border-bottom:1px solid ", ";height:48px;padding:0 10vw;background-color:", ";user-select:none;@media (max-width:425px){margin-bottom:0px;height:40px;}@media (max-width:768px){padding:0;margin-bottom:0px;}"], props => props.theme.shadow, props => props.theme.border, props => props.theme.foreground);

/***/ }),

/***/ "./components/Header/Logo.js":
/*!***********************************!*\
  !*** ./components/Header/Logo.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/helpers */ "./components/shared/helpers.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const HeaderLogo = () => __jsx(Logo, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  prefetch: true,
  href: "/"
}, __jsx("span", null, "\u20BFitsjournal")));

/* harmony default export */ __webpack_exports__["default"] = (HeaderLogo);
const Logo = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Logo",
  componentId: "sc-195qc4m-0"
})(["", " margin-right:0;font-size:26px;font-weight:500;color:", ";text-decoration:none;color:#fff;@media (max-width:425px){padding:0 8px 0 16px;font-size:19px;}"], _shared_helpers__WEBPACK_IMPORTED_MODULE_3__["headerItem"], props => props.theme.normalText); // display: flex;
// align-items: center;
// flex-shrink: 0;
// padding: 0 16px;
// @media (max-width: 425px) {
//   padding: 0 8px;
// }

/***/ }),

/***/ "./components/Header/header.scss":
/*!***************************************!*\
  !*** ./components/Header/header.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Menu/Datepicker.js":
/*!***************************************!*\
  !*** ./components/Menu/Datepicker.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Example; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-datepicker */ "react-datepicker");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react */ "mobx-react");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-datepicker/dist/react-datepicker.css */ "./node_modules/react-datepicker/dist/react-datepicker.css");
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _datepicker_additional_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./datepicker-additional.css */ "./components/Menu/datepicker-additional.css");
/* harmony import */ var _datepicker_additional_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_datepicker_additional_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mobx */ "mobx");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_5__);
var _dec, _class, _temp;

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






let Example = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_2__["inject"])(["store"]), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_2__["observer"])(_class = (_temp = class Example extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    this.handleChange = date => {
      this.setState({
        date: date
      });
      console.log(date, "THIS IS DATE");
    };

    this.state = {
      date: new Date()
    };
  }

  componentWillMount() {}

  componentDidMount() {
    this.dateReaction = Object(mobx__WEBPACK_IMPORTED_MODULE_5__["reaction"])(() => this.props.store.startDate, (notifications, reaction) => {
      if (this.props.store.startDate !== null) {
        if (this.props.start == true) {
          this.setState({
            date: new Date(this.props.store.startDate)
          });
        } else {
          this.setState({
            date: new Date(this.props.store.endDate)
          });
        }
      }
    });
  }

  componentDidUpdate(prevProps) {
    console.log("just updated");

    if (this.props.set == true) {
      console.log("not equal");

      if (this.props.start == true) {
        console.log("was true");
        let firstDate = this.state.date.toISOString();
        let multiDate = firstDate.split("T");
        this.props.store.startDate = multiDate[0] + "T00:00:00.000Z";
        this.props.store.date = "Custom";
      }

      if (this.props.start == false) {
        console.log("was false");
        let firstDate = this.state.date.toISOString();
        let multiDate = firstDate.split("T");
        this.props.store.endDate = multiDate[0] + "T24:00:00.000Z";
        console.log(this.props.store.endDate);
        this.props.store.date = "Custom";
      }
    }
  }

  render() {
    return __jsx(react_datepicker__WEBPACK_IMPORTED_MODULE_1___default.a, {
      selected: this.state.date,
      onChange: this.handleChange
    });
  }

}, _temp)) || _class) || _class);


/***/ }),

/***/ "./components/Menu/datepicker-additional.css":
/*!***************************************************!*\
  !*** ./components/Menu/datepicker-additional.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/form/FormWrapper.js":
/*!****************************************!*\
  !*** ./components/form/FormWrapper.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const FormWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "FormWrapper",
  componentId: "sc-15qkhyq-0"
})(["position:relative;overflow:hidden;margin:0 auto;border:1px solid ", ";border-radius:2px;width:375px;padding:24px;background-color:", ";@media (max-width:768px){padding:16px;}@media (max-width:", "){border-radius:0;border-left:none;border-right:none;}"], props => props.theme.border, props => props.theme.foreground, props => props.wide ? "600px" : "375px");
/* harmony default export */ __webpack_exports__["default"] = (FormWrapper); // max-width: ${props => (props.wide ? "600px" : "375px")};

/***/ }),

/***/ "./components/form/Input.js":
/*!**********************************!*\
  !*** ./components/form/Input.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
 // import { transition } from '../helpers';
// ${transition};

const Input = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.input.withConfig({
  displayName: "Input",
  componentId: "sc-1gcscia-0"
})(["--border:", ";--shadow:", ";display:block;", ";border-radius:3px;width:100%;padding:8px;background-color:", ";font-size:15px;color:", ";appearance:none;outline:none;resize:vertical;:hover,:focus{border:1px solid var(--border);}:focus{box-shadow:0 0 0 2px var(--shadow);}"], props => props.error ? props.theme.error : props.theme.accent, props => props.error ? props.theme.error + "4d" : props.theme.accent + "4d", props => props.error ? `
    border: 1px solid var(--border)
    ` : `
    border: 1px solid ${props.theme.border}
  `, props => props.theme.inputBackground, props => props.theme.normalText);
/* harmony default export */ __webpack_exports__["default"] = (Input);

/***/ }),

/***/ "./components/form/Label.js":
/*!**********************************!*\
  !*** ./components/form/Label.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/helpers */ "./components/shared/helpers.js");


const Label = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.label.withConfig({
  displayName: "Label",
  componentId: "sc-1n443xe-0"
})(["", ";display:block;margin-bottom:8px;color:", ";"], _shared_helpers__WEBPACK_IMPORTED_MODULE_1__["smallFont"], props => props.theme.mutedText);
/* harmony default export */ __webpack_exports__["default"] = (Label);

/***/ }),

/***/ "./components/form/LoginForm.js":
/*!**************************************!*\
  !*** ./components/form/LoginForm.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _FormWrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FormWrapper */ "./components/form/FormWrapper.js");
/* harmony import */ var _form_Input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../form/Input */ "./components/form/Input.js");
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Label */ "./components/form/Label.js");
/* harmony import */ var _shared_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/Button */ "./components/shared/Button.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





 // import { observer } from "mobx-react-lite";
// import { UserStoreContext } from "../stores/UserStore.ts";







const Cookie = __webpack_require__(/*! js-cookie */ "js-cookie");

const LoginForm = () => {
  // const userStore = useContext(UserStoreContext);
  async function handleSubmit(event, client) {
    event.preventDefault();
    const form = event.target;
    const formData = new window.FormData(form);
    const email = formData.get("email");
    const password = formData.get("password");
    form.reset();
    let res = client.mutate({
      mutation: graphql_tag__WEBPACK_IMPORTED_MODULE_2___default.a`
        mutation login($email: String!, $password: String!) {
          login(email: $email, password: $password)
        }
      `,
      variables: {
        email,
        password
      }
    });
    console.log("LOGGING IN");
    let r = await res;
    console.log(res);
    r = r.data.login; //check if login credentials are correct

    let isTrue = r == "true";

    if (isTrue == true) {
      Cookie.set("isAuth", "true"); // userStore.isAuth = true;

      next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push("/dashboard");
    } else {
      setWrongCredentials(true);
      return;
    }
  }

  const {
    0: wrongCredentials,
    1: setWrongCredentials
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  return __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_1__["ApolloConsumer"], null, client => __jsx(_FormWrapper__WEBPACK_IMPORTED_MODULE_7__["default"], null, __jsx(StyledForm, {
    onSubmit: event => handleSubmit(event, client)
  }, __jsx(InputWrapper, null, __jsx(_Label__WEBPACK_IMPORTED_MODULE_9__["default"], null, "email"), __jsx(_form_Input__WEBPACK_IMPORTED_MODULE_8__["default"], {
    placeholder: "",
    name: "email",
    type: "text",
    required: true
  })), __jsx(InputWrapper, null, __jsx(_Label__WEBPACK_IMPORTED_MODULE_9__["default"], null, "password"), __jsx(_form_Input__WEBPACK_IMPORTED_MODULE_8__["default"], {
    placeholder: "",
    name: "password",
    type: "text",
    required: true
  })), __jsx("div", {
    style: {
      display: "flex",
      width: "100%"
    }
  }, __jsx(SubmitButton, {
    type: "submit"
  }, "Submit")), wrongCredentials == true ? __jsx("div", {
    className: "login-alert"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Alert"], {
    color: "secondary",
    isOpen: wrongCredentials == true ? true : false
  }, "Wrong login credentials")) : null)));
};

/* harmony default export */ __webpack_exports__["default"] = (LoginForm);
const StyledForm = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.form.withConfig({
  displayName: "LoginForm__StyledForm",
  componentId: "zc9mcq-0"
})(["display:flex;flex-direction:column;align-items:flex-start;", ";"], props => props.loading && "filter: grayscale(0.5) blur(5px) opacity(0.6); pointer-events: none");
const SubmitButton = styled_components__WEBPACK_IMPORTED_MODULE_6___default()(_shared_Button__WEBPACK_IMPORTED_MODULE_10__["default"]).withConfig({
  displayName: "LoginForm__SubmitButton",
  componentId: "zc9mcq-1"
})(["align-self:flex-end;margin-right:0px;margin-left:auto;"]);
const InputWrapper = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.div.withConfig({
  displayName: "LoginForm__InputWrapper",
  componentId: "zc9mcq-2"
})(["position:relative;margin-bottom:24px;width:100%;"]);

/***/ }),

/***/ "./components/shared/Button.js":
/*!*************************************!*\
  !*** ./components/shared/Button.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ "./components/shared/helpers.js");


const Button = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "Button",
  componentId: "sc-1yqwkyz-0"
})(["", ";", ";border:none;border-radius:3px;padding:8px 24px;background-color:", ";cursor:pointer;color:#ffffff;outline:none;:hover{filter:brightness(110%);}:active{filter:brightness(90%);}:focus{box-shadow:0 0 0 2px ", ";}"], Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["transition"])("filter", "box-shadow"), _helpers__WEBPACK_IMPORTED_MODULE_1__["wideFont"], props => props.theme.accent, props => props.theme.accent + "4d");
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./components/shared/helpers.js":
/*!**************************************!*\
  !*** ./components/shared/helpers.js ***!
  \**************************************/
/*! exports provided: smallFont, wideFont, fade, transition, headerItem, link, overflow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "smallFont", function() { return smallFont; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wideFont", function() { return wideFont; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fade", function() { return fade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transition", function() { return transition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headerItem", function() { return headerItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "link", function() { return link; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "overflow", function() { return overflow; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const smallFont = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["font-size:12px;font-weight:600;text-transform:uppercase;"]);
const wideFont = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["", ";font-weight:700;letter-spacing:0.05em;"], smallFont);
const fadeKeyframes = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["from{opacity:0;}to{opacity:1;}"]);
const fade = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["animation:", " 0.25s;"], fadeKeyframes);
const transition = props => Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["transition:all ", " ease;"], props.slow ? "0.3s" : "0.15s");
const headerItem = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["display:flex;align-items:center;flex-shrink:0;padding:0 16px;@media (max-width:425px){padding:0 8px;}"]);
const link = props => Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["", ";text-underline-position:under;text-decoration:none;color:", ";:hover{", ";color:", ";}"], transition, props => props.theme.normalText, props.underline && "text-decoration: underline", props => props.theme.accent);
const overflow = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"]);

/***/ }),

/***/ "./components/theme.js":
/*!*****************************!*\
  !*** ./components/theme.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const constants = {
  error: "#f5222d",
  vote: "#b6b6b6",
  upvote: "#f9920b",
  downvote: "#2e70ff"
};

const dark = _objectSpread(_objectSpread({}, constants), {}, {
  normalText: "#ffffff",
  mutedText: "#b0b8bf",
  border: "#333333",
  accent: "#33a0ff",
  pageBackground: "#1b1b1b",
  voteButtonHover: "#383838",
  foreground: "#262626",
  activeBackground: "#333333",
  inputBackground: "#333333",
  shadow: "rgba(0, 0, 0, 0.4)"
});

const light = _objectSpread(_objectSpread({}, constants), {}, {
  normalText: "#454f5b",
  mutedText: "#818e99",
  border: "#ebedf0",
  accent: "#1890ff",
  pageBackground: "#f4f6f8",
  voteButtonHover: "#f2f2f2",
  foreground: "#ffffff",
  activeBackground: "#fafafa",
  inputBackground: "#fcfcfc",
  shadow: "rgba(0, 0, 0, 0.05)"
});

const theme = isDark => isDark ? dark : light;

/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _router2 = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = /*#__PURE__*/_react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

exports.addBasePath = addBasePath;

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

exports.delBasePath = delBasePath;

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      pathname: addBasePath( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${delBasePath(pathname)}.json`),
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = escapeRegex(normalizedRoute.replace(/\/$/, '') || '/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  let namedParameterizedRoute; // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    namedParameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
      const isCatchAll = /^(\\\.){3}/.test($1);
      const key = $1 // Un-escape key
      .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '');
      return isCatchAll ? `/(?<${escapeRegex(key)}>.+?)` : `/(?<${escapeRegex(key)}>[^/]+?)`;
    });
  }

  return Object.assign({
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  }, namedParameterizedRoute ? {
    namedRegex: `^${namedParameterizedRoute}(?:/)?$`
  } : {});
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-datepicker/dist/react-datepicker.css":
/*!*****************************************************************!*\
  !*** ./node_modules/react-datepicker/dist/react-datepicker.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/App */ "./components/App.js");
/* harmony import */ var _components_Header_HomeHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header/HomeHeader */ "./components/Header/HomeHeader.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/theme */ "./components/theme.js");
/* harmony import */ var _components_shared_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/shared/helpers */ "./components/shared/helpers.js");
/* harmony import */ var react_typist__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-typist */ "react-typist");
/* harmony import */ var react_typist__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_typist__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_typist_loop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-typist-loop */ "react-typist-loop");
/* harmony import */ var react_typist_loop__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_typist_loop__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login */ "./pages/login.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




 // import Typing from "react-typing-animation";







const Cookie = __webpack_require__(/*! js-cookie */ "js-cookie");

let cursor = {
  blink: true
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  // componentDidMount() {
  const cook = Cookie.get("isAuth");

  if (!!cook) {
    next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push("/dashboard");
  } else {
    return __jsx(_login__WEBPACK_IMPORTED_MODULE_10__["default"], null);
  } // }
  // render() {
  // return (
  //   <App>
  //     <Header style={{ margin: "0" }} />
  //     <ThemeProvider theme={theme(false)}>
  //       <OuterWrapper style={{ margin: "0" }}>
  //         <Wrapper>
  //           <RowOne>
  //             <InnerRowContainer>
  //               <div
  //                 style={{ width: "200px", height: "auto", margin: "auto" }}
  //               >
  //                 <img
  //                   src="/static/ai2.svg"
  //                   style={{ margin: "auto", maxWidth: "200px" }}
  //                 />
  //               </div>
  //             </InnerRowContainer>
  //             <InnerRowContainer>
  //               <TxtDiv>
  //                 <TypistLoop interval={500}>
  //                   {["log", "improve", "systematize"].map(text => (
  //                     <Typist key={text} stdTypingDelay={35} cursor={cursor}>
  //                       <span>{text}</span>
  //                       <Typist.Backspace count={text.length} delay={2200} />
  //                     </Typist>
  //                   ))}
  //                 </TypistLoop>
  //                 <div style={{ marginLeft: "1px" }}>your trading</div>
  //               </TxtDiv>
  //             </InnerRowContainer>
  //             <InnerRowContainerBlack>
  //               <TxtDivBlack2 className="hello">
  //                 <Link href="/signup">
  //                   <SignUpButton>
  //                     start automatically logging your trades
  //                   </SignUpButton>
  //                 </Link>
  //               </TxtDivBlack2>
  //             </InnerRowContainerBlack>
  //           </RowOne>
  //         </Wrapper>
  //       </OuterWrapper>
  //     </ThemeProvider>
  //   </App>
  // );
  // }

});
const OuterWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "pages__OuterWrapper",
  componentId: "teytsb-0"
})(["background-color:", ";height:100%;margin-bottom:0;padding-bottom:0;"], props => props.theme.foreground);
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "pages__Wrapper",
  componentId: "teytsb-1"
})(["display:flex;margin:0 10vw;height:auto;background-color:", ";@media (max-width:1024px){margin:0 5vw;}@media (max-width:768px){margin:0;}"], props => props.theme.foreground);
const SignUpButton = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.button.withConfig({
  displayName: "pages__SignUpButton",
  componentId: "teytsb-2"
})(["", " padding:8px 20px;border-radius:2px;background:#1890ff;color:#ffffff;font-size:20px;"], _components_shared_helpers__WEBPACK_IMPORTED_MODULE_5__["smallFont"]);
const TxtDiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "pages__TxtDiv",
  componentId: "teytsb-3"
})(["", " max-width:240px;font-size:15px;text-align:center;margin:auto;display:flex;flex-direction:row;"], _components_shared_helpers__WEBPACK_IMPORTED_MODULE_5__["wideFont"]);
const TxtDivBlack = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "pages__TxtDivBlack",
  componentId: "teytsb-4"
})(["", " max-width:450px;font-size:15px;color:#ffffff;text-align:center;margin:auto;margin-bottom:25px;"], _components_shared_helpers__WEBPACK_IMPORTED_MODULE_5__["wideFont"]);
const TxtDivBlack2 = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "pages__TxtDivBlack2",
  componentId: "teytsb-5"
})(["", " max-width:550px;font-size:15px;color:#ffffff;text-align:center;margin:auto;margin-top:25px;"], _components_shared_helpers__WEBPACK_IMPORTED_MODULE_5__["wideFont"]);
const RowOne = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "pages__RowOne",
  componentId: "teytsb-6"
})(["height:auto;width:100%;display:flex;flex-direction:column;margin-top:100px;background-color:", ";"], props => props.theme.foreground);
const InnerRowContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "pages__InnerRowContainer",
  componentId: "teytsb-7"
})(["width:100%;margin-top:20px;margin-bottom:20px;"]);
const InnerRowContainerBlack = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "pages__InnerRowContainerBlack",
  componentId: "teytsb-8"
})(["width:100%;min-height:280px;margin-top:100px;margin-bottom:60px;background:#ffffff;border-radius:2px;display:flex;flex-direction:column;@media (max-width:1024px){margin-bottom:60px;}@media (max-width:768px){margin-bottom:0;}"]);

/***/ }),

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: default, HeaderLogoDiv, Annotation1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoginPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderLogoDiv", function() { return HeaderLogoDiv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Annotation1", function() { return Annotation1; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/App */ "./components/App.js");
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header/Header */ "./components/Header/Header.js");
/* harmony import */ var _components_Header_Logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header/Logo */ "./components/Header/Logo.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/theme */ "./components/theme.js");
/* harmony import */ var _components_form_LoginForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/form/LoginForm */ "./components/form/LoginForm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_shared_helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/shared/helpers */ "./components/shared/helpers.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










let Cookie = __webpack_require__(/*! js-cookie */ "js-cookie");

function LoginPage() {
  let cook = Cookie.get("isAuth") === "true";
  console.log(cook);

  if (!!cook) {
    next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push("/dashboard");
  } else {
    return __jsx(_components_App__WEBPACK_IMPORTED_MODULE_1__["default"], null, __jsx(styled_components__WEBPACK_IMPORTED_MODULE_4__["ThemeProvider"], {
      theme: Object(_components_theme__WEBPACK_IMPORTED_MODULE_5__["default"])(false)
    }, __jsx(Wrapper, null, __jsx(HeaderLogoDiv, null, __jsx(_components_Header_Logo__WEBPACK_IMPORTED_MODULE_3__["default"], null)), __jsx(_components_form_LoginForm__WEBPACK_IMPORTED_MODULE_6__["default"], null), __jsx(Annotation1, null, "BitsJournal is an automated trade journal for Bitmex.", " ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
      href: "/register"
    }, "Register"), " for our free beta or view demos on YouTube."))));
  }
}
const HeaderLogoDiv = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "login__HeaderLogoDiv",
  componentId: "ljat1g-0"
})(["margin:15px auto;margin-top:20vh;"]);
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "login__Wrapper",
  componentId: "ljat1g-1"
})(["display:flex;flex-direction:column;align-items:flex-start;margin:0 10vw;@media (max-width:1024px){margin:0 5vw;}@media (max-width:768px){display:block;margin:0;}"]);
const Annotation1 = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "login__Annotation1",
  componentId: "ljat1g-2"
})(["margin:11px auto;", ";display:block;margin-bottom:8px;font-weight:500;text-transform:none;max-width:18vw;text-align:center;color:", ";"], _components_shared_helpers__WEBPACK_IMPORTED_MODULE_8__["smallFont"], props => props.theme.mutedText);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/manx/projects-2/bitsjournal/frontend/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "mobx":
/*!***********************!*\
  !*** external "mobx" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mobx");

/***/ }),

/***/ "mobx-react":
/*!*****************************!*\
  !*** external "mobx-react" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mobx-react");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-apollo":
/*!*******************************!*\
  !*** external "react-apollo" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "react-datepicker":
/*!***********************************!*\
  !*** external "react-datepicker" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-datepicker");

/***/ }),

/***/ "react-typist":
/*!*******************************!*\
  !*** external "react-typist" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-typist");

/***/ }),

/***/ "react-typist-loop":
/*!************************************!*\
  !*** external "react-typist-loop" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-typist-loop");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIvSG9tZUhlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci9Mb2dvLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTWVudS9EYXRlcGlja2VyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZm9ybS9Gb3JtV3JhcHBlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zvcm0vSW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9mb3JtL0xhYmVsLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZm9ybS9Mb2dpbkZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zaGFyZWQvQnV0dG9uLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc2hhcmVkL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90aGVtZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvd2l0aC1yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvbWl0dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9yZWFjdC1pcy9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2xvZ2luLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImdyYXBocWwtdGFnXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianMtY29va2llXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9ieFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vYngtcmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzLWV4YWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1hcG9sbG9cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1kYXRlcGlja2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtdHlwaXN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtdHlwaXN0LWxvb3BcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdHN0cmFwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1cmxcIiJdLCJuYW1lcyI6WyJjaGlsZHJlbiIsIkNvb2tpZSIsInJlcXVpcmUiLCJIZWFkZXIiLCJyb3V0ZXIiLCJjb29rIiwiZ2V0IiwiY29uc29sZSIsImxvZyIsInBhdGhuYW1lIiwiYXV0aE9yTm8iLCJ0aGVtZSIsIndpdGhSb3V0ZXIiLCJMb2dvV3JhcCIsInN0eWxlZCIsImRpdiIsIlRlbXBEaXYiLCJMaW5rc1dyYXAiLCJEYXRlUGlja2Vyc1dyYXAiLCJEYXRlUGlja2VyV3JhcCIsIlN0eWxlZExpbmsiLCJoZWFkZXJJdGVtIiwibGluayIsInByb3BzIiwibXV0ZWRUZXh0IiwiV3JhcHBlciIsImhlYWRlciIsImZvcmVncm91bmQiLCJTdHlsZWRMaW5rRmlyc3QiLCJ0cmFuc2l0aW9uIiwiYWNjZW50IiwiSGVhZGVyMiIsIndpZGVGb250Iiwic2hhZG93IiwiYm9yZGVyIiwiSGVhZGVyTG9nbyIsIkxvZ28iLCJub3JtYWxUZXh0IiwiRXhhbXBsZSIsImluamVjdCIsIm9ic2VydmVyIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsImhhbmRsZUNoYW5nZSIsImRhdGUiLCJzZXRTdGF0ZSIsInN0YXRlIiwiRGF0ZSIsImNvbXBvbmVudFdpbGxNb3VudCIsImNvbXBvbmVudERpZE1vdW50IiwiZGF0ZVJlYWN0aW9uIiwicmVhY3Rpb24iLCJzdG9yZSIsInN0YXJ0RGF0ZSIsIm5vdGlmaWNhdGlvbnMiLCJzdGFydCIsImVuZERhdGUiLCJjb21wb25lbnREaWRVcGRhdGUiLCJwcmV2UHJvcHMiLCJzZXQiLCJmaXJzdERhdGUiLCJ0b0lTT1N0cmluZyIsIm11bHRpRGF0ZSIsInNwbGl0IiwicmVuZGVyIiwiRm9ybVdyYXBwZXIiLCJ3aWRlIiwiSW5wdXQiLCJpbnB1dCIsImVycm9yIiwiaW5wdXRCYWNrZ3JvdW5kIiwiTGFiZWwiLCJsYWJlbCIsInNtYWxsRm9udCIsIkxvZ2luRm9ybSIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwiY2xpZW50IiwicHJldmVudERlZmF1bHQiLCJmb3JtIiwidGFyZ2V0IiwiZm9ybURhdGEiLCJ3aW5kb3ciLCJGb3JtRGF0YSIsImVtYWlsIiwicGFzc3dvcmQiLCJyZXNldCIsInJlcyIsIm11dGF0ZSIsIm11dGF0aW9uIiwiZ3FsIiwidmFyaWFibGVzIiwiciIsImRhdGEiLCJsb2dpbiIsImlzVHJ1ZSIsIlJvdXRlciIsInB1c2giLCJzZXRXcm9uZ0NyZWRlbnRpYWxzIiwid3JvbmdDcmVkZW50aWFscyIsInVzZVN0YXRlIiwiZGlzcGxheSIsIndpZHRoIiwiU3R5bGVkRm9ybSIsImxvYWRpbmciLCJTdWJtaXRCdXR0b24iLCJCdXR0b24iLCJJbnB1dFdyYXBwZXIiLCJidXR0b24iLCJjc3MiLCJmYWRlS2V5ZnJhbWVzIiwia2V5ZnJhbWVzIiwiZmFkZSIsInNsb3ciLCJ1bmRlcmxpbmUiLCJvdmVyZmxvdyIsImNvbnN0YW50cyIsInZvdGUiLCJ1cHZvdGUiLCJkb3dudm90ZSIsImRhcmsiLCJwYWdlQmFja2dyb3VuZCIsInZvdGVCdXR0b25Ib3ZlciIsImFjdGl2ZUJhY2tncm91bmQiLCJsaWdodCIsImlzRGFyayIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsImV4cG9ydHMiLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsIl9yZWFjdCIsIl91cmwiLCJfdXRpbHMiLCJfcm91dGVyIiwiX3JvdXRlcjIiLCJpc0xvY2FsIiwiaHJlZiIsInVybCIsInBhcnNlIiwib3JpZ2luIiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJob3N0IiwicHJvdG9jb2wiLCJtZW1vaXplZEZvcm1hdFVybCIsImZvcm1hdEZ1bmMiLCJsYXN0SHJlZiIsImxhc3RBcyIsImxhc3RSZXN1bHQiLCJhcyIsInJlc3VsdCIsImZvcm1hdFVybCIsImZvcm1hdFdpdGhWYWxpZGF0aW9uIiwibGlzdGVuZXJzIiwiTWFwIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJwcmVmZXRjaGVkIiwiZ2V0T2JzZXJ2ZXIiLCJ1bmRlZmluZWQiLCJlbnRyaWVzIiwiZm9yRWFjaCIsImVudHJ5IiwiaGFzIiwiY2IiLCJpc0ludGVyc2VjdGluZyIsImludGVyc2VjdGlvblJhdGlvIiwidW5vYnNlcnZlIiwiZGVsZXRlIiwicm9vdE1hcmdpbiIsImxpc3RlblRvSW50ZXJzZWN0aW9ucyIsImVsIiwib2JzZXJ2ZSIsImVyciIsIkxpbmsiLCJwIiwiY2xlYW5VcExpc3RlbmVycyIsImZvcm1hdFVybHMiLCJhc0hyZWYiLCJhZGRCYXNlUGF0aCIsImxpbmtDbGlja2VkIiwiZSIsIm5vZGVOYW1lIiwiY3VycmVudFRhcmdldCIsIm1ldGFLZXkiLCJjdHJsS2V5Iiwic2hpZnRLZXkiLCJuYXRpdmVFdmVudCIsIndoaWNoIiwibG9jYXRpb24iLCJyZXNvbHZlIiwic2Nyb2xsIiwiaW5kZXhPZiIsInJlcGxhY2UiLCJzaGFsbG93IiwidGhlbiIsInN1Y2Nlc3MiLCJzY3JvbGxUbyIsImRvY3VtZW50IiwiYm9keSIsImZvY3VzIiwicHJlZmV0Y2giLCJ3YXJuIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJnZXRQYXRocyIsInBhcnNlZEhyZWYiLCJwYXJzZWRBcyIsInJlc29sdmVkSHJlZiIsImhhbmRsZVJlZiIsInJlZiIsInRhZ05hbWUiLCJpc1ByZWZldGNoZWQiLCJqb2luIiwib3B0aW9ucyIsInBhdGhzIiwiY2F0Y2giLCJjcmVhdGVFbGVtZW50IiwiY2hpbGQiLCJDaGlsZHJlbiIsIm9ubHkiLCJjdXJyZW50Iiwib25Nb3VzZUVudGVyIiwicHJpb3JpdHkiLCJvbkNsaWNrIiwiZGVmYXVsdFByZXZlbnRlZCIsInBhc3NIcmVmIiwidHlwZSIsInByb2Nlc3MiLCJjbG9uZUVsZW1lbnQiLCJleGVjT25jZSIsIlByb3BUeXBlcyIsImV4YWN0IiwicHJvcFR5cGVzIiwib25lT2ZUeXBlIiwic3RyaW5nIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsImJvb2wiLCJlbGVtZW50IiwicHJvcE5hbWUiLCJ2YWx1ZSIsIl9kZWZhdWx0IiwidXNlUm91dGVyIiwibWFrZVB1YmxpY1JvdXRlckluc3RhbmNlIiwiY3JlYXRlUm91dGVyIiwiTmV4dFJvdXRlciIsIl9yb3V0ZXJDb250ZXh0IiwiX3dpdGhSb3V0ZXIiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJldmVudHMiLCJmaWVsZCIsImdldFJvdXRlciIsImFyZ3VtZW50cyIsIm9uIiwiZXZlbnRGaWVsZCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic3Vic3RyaW5nIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsIkVycm9yIiwidXNlQ29udGV4dCIsIlJvdXRlckNvbnRleHQiLCJfbGVuIiwibGVuZ3RoIiwiYXJncyIsIkFycmF5IiwiX2tleSIsImluc3RhbmNlIiwicHJvcGVydHkiLCJhc3NpZ24iLCJDb21wb3NlZENvbXBvbmVudCIsIldpdGhSb3V0ZXJXcmFwcGVyIiwiZ2V0SW5pdGlhbFByb3BzIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsIm5hbWUiLCJkaXNwbGF5TmFtZSIsIm1pdHQiLCJhbGwiLCJjcmVhdGUiLCJoYW5kbGVyIiwib2ZmIiwic3BsaWNlIiwiZW1pdCIsImV2dHMiLCJzbGljZSIsIm1hcCIsIl9faW1wb3J0RGVmYXVsdCIsIm1vZCIsInVybF8xIiwibWl0dF8xIiwidXRpbHNfMSIsImlzX2R5bmFtaWNfMSIsInJvdXRlX21hdGNoZXJfMSIsInJvdXRlX3JlZ2V4XzEiLCJiYXNlUGF0aCIsInBhdGgiLCJkZWxCYXNlUGF0aCIsInN1YnN0ciIsInRvUm91dGUiLCJwcmVwYXJlUm91dGUiLCJmZXRjaE5leHREYXRhIiwicXVlcnkiLCJpc1NlcnZlclJlbmRlciIsImF0dGVtcHRzIiwiZ2V0UmVzcG9uc2UiLCJmZXRjaCIsIl9fTkVYVF9EQVRBX18iLCJidWlsZElkIiwiY3JlZGVudGlhbHMiLCJvayIsInN0YXR1cyIsImpzb24iLCJjb2RlIiwiaW5pdGlhbFByb3BzIiwicGFnZUxvYWRlciIsIkFwcCIsIndyYXBBcHAiLCJzdWJzY3JpcHRpb24iLCJpc0ZhbGxiYWNrIiwic2RjIiwib25Qb3BTdGF0ZSIsImNoYW5nZVN0YXRlIiwiZ2V0VVJMIiwiaXNTc3IiLCJhc1BhdGgiLCJfYnBzIiwiX2dldFN0YXRpY0RhdGEiLCJQcm9taXNlIiwiX2dldFNlcnZlckRhdGEiLCJyb3V0ZSIsImNvbXBvbmVudHMiLCJfX05fU1NHIiwiX19OX1NTUCIsImlzRHluYW1pY1JvdXRlIiwiYXV0b0V4cG9ydCIsInN1YiIsImNsYyIsIl93cmFwQXBwIiwiX3Jld3JpdGVVcmxGb3JOZXh0RXhwb3J0IiwidXBkYXRlIiwibmV3RGF0YSIsIm5vdGlmeSIsInJlbG9hZCIsImJhY2siLCJoaXN0b3J5IiwiY2hhbmdlIiwibWV0aG9kIiwiX2FzIiwicmVqZWN0IiwiX2giLCJTVCIsInBlcmZvcm1hbmNlIiwibWFyayIsImFib3J0Q29tcG9uZW50TG9hZCIsIm9ubHlBSGFzaENoYW5nZSIsInNjcm9sbFRvSGFzaCIsInVybElzTmV3IiwiYXNQYXRobmFtZSIsInJvdXRlUmVnZXgiLCJnZXRSb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsImdldFJvdXRlTWF0Y2hlciIsIm1pc3NpbmdQYXJhbXMiLCJrZXlzIiwiZ3JvdXBzIiwiZmlsdGVyIiwicGFyYW0iLCJnZXRSb3V0ZUluZm8iLCJyb3V0ZUluZm8iLCJjYW5jZWxsZWQiLCJhcHBDb21wIiwibmV4dCIsImlzUHJlcmVuZGVyZWQiLCJjYWNoZWRSb3V0ZUluZm8iLCJoYW5kbGVFcnJvciIsImxvYWRFcnJvckZhaWwiLCJmZXRjaENvbXBvbmVudCIsInBhZ2UiLCJnaXBFcnIiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJfZ2V0RGF0YSIsImJlZm9yZVBvcFN0YXRlIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsIm5ld1VybE5vSGFzaCIsIm5ld0hhc2giLCJoYXNoIiwiaWRFbCIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsSW50b1ZpZXciLCJuYW1lRWwiLCJnZXRFbGVtZW50c0J5TmFtZSIsInByZWZldGNoRGF0YSIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsImxvYWRQYWdlIiwiZm4iLCJjdHgiLCJBcHBUcmVlIiwibG9hZEdldEluaXRpYWxQcm9wcyIsIlRFU1RfUk9VVEUiLCJ0ZXN0IiwicmUiLCJleGVjIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiXyIsInBhcmFtcyIsInNsdWdOYW1lIiwiZyIsIm0iLCJwb3MiLCJyZXBlYXQiLCJlc2NhcGVSZWdleCIsInN0ciIsIm5vcm1hbGl6ZWRSb3V0ZSIsImVzY2FwZWRSb3V0ZSIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCIkMSIsImlzQ2F0Y2hBbGwiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImtleSIsIlJlZ0V4cCIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwiaG9zdG5hbWUiLCJwb3J0IiwiZ2V0RGlzcGxheU5hbWUiLCJpc1Jlc1NlbnQiLCJmaW5pc2hlZCIsImhlYWRlcnNTZW50IiwiX2EiLCJwcm90b3R5cGUiLCJwYWdlUHJvcHMiLCJ1cmxPYmplY3RLZXlzIiwiZm9ybWF0IiwiU1AiLCJtZWFzdXJlIiwiY3Vyc29yIiwiYmxpbmsiLCJPdXRlcldyYXBwZXIiLCJTaWduVXBCdXR0b24iLCJUeHREaXYiLCJUeHREaXZCbGFjayIsIlR4dERpdkJsYWNrMiIsIlJvd09uZSIsIklubmVyUm93Q29udGFpbmVyIiwiSW5uZXJSb3dDb250YWluZXJCbGFjayIsIkxvZ2luUGFnZSIsIkhlYWRlckxvZ29EaXYiLCJBbm5vdGF0aW9uMSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7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LENBQVksWUFBWjtBQUNELEdBRkQsTUFFTztBQUNMLFdBQ0UsTUFBQyx1REFBRCxRQUNFLE1BQUMsK0RBQUQ7QUFBZSxXQUFLLEVBQUV2RixpRUFBSyxDQUFDLEtBQUQ7QUFBM0IsT0FDRSxNQUFDLE9BQUQsUUFDRSxNQUFDLGFBQUQsUUFDRSxNQUFDLCtEQUFELE9BREYsQ0FERixFQUlFLE1BQUMsa0VBQUQsT0FKRixFQUtFLE1BQUMsV0FBRCxpRUFDd0QsR0FEeEQsRUFFRSxNQUFDLGdEQUFEO0FBQU0sVUFBSSxFQUFDO0FBQVgsa0JBRkYsaURBTEYsQ0FERixDQURGLENBREY7QUFpQkQ7QUFDRjtBQUNNLE1BQU1nYyxhQUFhLEdBQUc3Yix3REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHlDQUFuQjtBQUtQLE1BQU1VLE9BQU8sR0FBR1gsd0RBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx5S0FBYjtBQWVPLE1BQU02YixXQUFXLEdBQUc5Yix3REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLCtJQUVwQjJELG9FQUZvQixFQVVabkQsS0FBRCxJQUFXQSxLQUFLLENBQUNaLEtBQU4sQ0FBWWEsU0FWVixDQUFqQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pEUCx3Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxnQyIsImZpbGUiOiJzdGF0aWMvZGV2ZWxvcG1lbnQvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7IiwiaW1wb3J0IFwiYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCAoeyBjaGlsZHJlbiB9KSA9PiA8bWFpbj57Y2hpbGRyZW59PC9tYWluPjtcbiIsImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBzdHlsZWQsIHsgVGhlbWVQcm92aWRlciB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHRoZW1lIGZyb20gXCIuLi90aGVtZVwiO1xuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkZXJMb2dvIGZyb20gXCIuL0xvZ29cIjtcbmltcG9ydCBcIi4vaGVhZGVyLnNjc3NcIjtcbmltcG9ydCBEYXRlUGlja2VyIGZyb20gXCIuLi9NZW51L0RhdGVwaWNrZXJcIjtcblxuaW1wb3J0IHsgaGVhZGVySXRlbSwgd2lkZUZvbnQsIGxpbmssIHRyYW5zaXRpb24gfSBmcm9tIFwiLi4vc2hhcmVkL2hlbHBlcnNcIjtcbmNvbnN0IENvb2tpZSA9IHJlcXVpcmUoXCJqcy1jb29raWVcIik7XG5cbmNvbnN0IEhlYWRlciA9ICh7IHJvdXRlciB9KSA9PiB7XG4gIGNvbnN0IGNvb2sgPSBDb29raWUuZ2V0KFwiaXNBdXRoXCIpO1xuICBjb25zb2xlLmxvZyhjb29rKTtcbiAgY29uc29sZS5sb2cocm91dGVyLnBhdGhuYW1lKTtcblxuICBsZXQgYXV0aE9yTm8gPSBjb29rID09PSBcInRydWVcIjtcblxuICBpZiAoIWF1dGhPck5vKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZShmYWxzZSl9PlxuICAgICAgICA8V3JhcHBlcj5cbiAgICAgICAgICA8SGVhZGVyTG9nbyAvPlxuICAgICAgICAgIDxEYXRlUGlja2Vyc1dyYXA+XG4gICAgICAgICAgICA8RGF0ZVBpY2tlcldyYXA+XG4gICAgICAgICAgICAgIDxEYXRlUGlja2VyIC8+XG4gICAgICAgICAgICA8L0RhdGVQaWNrZXJXcmFwPlxuICAgICAgICAgICAgPERhdGVQaWNrZXJXcmFwPlxuICAgICAgICAgICAgICA8RGF0ZVBpY2tlciAvPlxuICAgICAgICAgICAgPC9EYXRlUGlja2VyV3JhcD5cbiAgICAgICAgICA8L0RhdGVQaWNrZXJzV3JhcD5cblxuICAgICAgICAgIDxMaW5rIHByZWZldGNoIGhyZWY9XCIvbG9naW5cIj5cbiAgICAgICAgICAgIDxTdHlsZWRMaW5rXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09PSBcIi9sb2dpblwiID8gXCJpcy1hY3RpdmVcIiA6IFwiXCJ9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIGxvZ2luXG4gICAgICAgICAgICA8L1N0eWxlZExpbms+XG4gICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgPExpbmsgcHJlZmV0Y2ggaHJlZj1cIi9yZWdpc3RlclwiPlxuICAgICAgICAgICAgPFN0eWxlZExpbmtcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtyb3V0ZXIucGF0aG5hbWUgPT09IFwiL3JlZ2lzdGVyXCIgPyBcImlzLWFjdGl2ZVwiIDogXCJcIn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgcmVnaXN0ZXJcbiAgICAgICAgICAgIDwvU3R5bGVkTGluaz5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvV3JhcHBlcj5cbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICApO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAoXG4gICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWUoZmFsc2UpfT5cbiAgICAgICAgPFdyYXBwZXI+XG4gICAgICAgICAgPEhlYWRlckxvZ28gLz5cbiAgICAgICAgICA8RGF0ZVBpY2tlcnNXcmFwPlxuICAgICAgICAgICAgPERhdGVQaWNrZXJXcmFwPlxuICAgICAgICAgICAgICA8RGF0ZVBpY2tlciAvPlxuICAgICAgICAgICAgPC9EYXRlUGlja2VyV3JhcD5cbiAgICAgICAgICAgIDxEYXRlUGlja2VyV3JhcD5cbiAgICAgICAgICAgICAgPERhdGVQaWNrZXIgLz5cbiAgICAgICAgICAgIDwvRGF0ZVBpY2tlcldyYXA+XG4gICAgICAgICAgPC9EYXRlUGlja2Vyc1dyYXA+XG5cbiAgICAgICAgICA8TGluayBwcmVmZXRjaCBocmVmPVwiL3NldHRpbmdzXCI+XG4gICAgICAgICAgICA8U3R5bGVkTGlua1xuICAgICAgICAgICAgICBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PT0gXCIvc2V0dGluZ3NcIiA/IFwiaXMtYWN0aXZlXCIgOiBcIlwifVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBzZXR0aW5nc1xuICAgICAgICAgICAgPC9TdHlsZWRMaW5rPlxuICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgIDxMaW5rIHByZWZldGNoIGhyZWY9XCIvbG9nb3V0XCI+XG4gICAgICAgICAgICA8U3R5bGVkTGluaz5sb2dvdXQ8L1N0eWxlZExpbms+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L1dyYXBwZXI+XG4gICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihIZWFkZXIpO1xuXG5jb25zdCBMb2dvV3JhcCA9IHN0eWxlZC5kaXZgYDtcblxuY29uc3QgVGVtcERpdiA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbjogYXV0bztcbmA7XG5cbmNvbnN0IExpbmtzV3JhcCA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi1yaWdodDogMDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG5gO1xuXG5jb25zdCBEYXRlUGlja2Vyc1dyYXAgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tbGVmdDogMDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuYDtcbmNvbnN0IERhdGVQaWNrZXJXcmFwID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luOiBhdXRvO1xuYDtcblxuY29uc3QgU3R5bGVkTGluayA9IHN0eWxlZC5kaXZgXG4gICR7aGVhZGVySXRlbX07XG4gICR7bGlua307XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5tdXRlZFRleHR9O1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG5cbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5gO1xuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmhlYWRlcmBcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgei1pbmRleDogMTA7XG4gIHRvcDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG5cbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlZWU7XG4gIGhlaWdodDogNTVweDtcbiAgcGFkZGluZzogMCAwdnc7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5mb3JlZ3JvdW5kfTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTI1Mjc7XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDQyNXB4KSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gIH1cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuYDtcblxuY29uc3QgU3R5bGVkTGlua0ZpcnN0ID0gc3R5bGVkLmRpdmBcbiAgJHtoZWFkZXJJdGVtfTtcbiAgJHtsaW5rfTtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLm11dGVkVGV4dH07XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcblxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICA6OmFmdGVyIHtcbiAgICAke3RyYW5zaXRpb24oXCJvcGFjaXR5XCIsIFwiYm9yZGVyLWJvdHRvbS13aWR0aFwiKX07XG5cbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYWNjZW50fTtcbiAgfVxuXG4gIDpob3ZlciB7XG4gICAgb3BhY2l0eTogMTtcbiAgICBjb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmFjY2VudH07XG4gIH1cbiAgOmhvdmVyOjphZnRlciB7XG4gICAgb3BhY2l0eTogMTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmFjY2VudH07XG4gIH1cblxuICAmLmFjdGl2ZTo6YWZ0ZXIge1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYWNjZW50fTtcbiAgfVxuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuYDtcblxuLy8gYmFja2dyb3VuZC1jb2xvcjogIzIzMjgyZDtcblxuLy8gY29uc3QgV3JhcHBlciA9IHN0eWxlZC5oZWFkZXJgXG4vLyAgIHBvc2l0aW9uOiBzdGlja3k7XG4vLyAgIHotaW5kZXg6IDEwO1xuLy8gICB0b3A6IDA7XG4vLyAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuLy8gICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuLy8gICBib3gtc2hhZG93OiAwIDRweCAxMnB4ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2hhZG93fTtcbi8vICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYm9yZGVyfTtcbi8vICAgaGVpZ2h0OiA0OHB4O1xuLy8gICBwYWRkaW5nOiAwIDEwdnc7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZm9yZWdyb3VuZH07XG4vLyAgIHVzZXItc2VsZWN0OiBub25lO1xuLy8gICBAbWVkaWEgKG1heC13aWR0aDogNDI1cHgpIHtcbi8vICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuLy8gICAgIGhlaWdodDogNDBweDtcbi8vICAgfVxuLy8gICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbi8vICAgICBwYWRkaW5nOiAwO1xuLy8gICB9XG4vLyBgO1xuIiwiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHN0eWxlZCwgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4uL3RoZW1lXCI7XG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgaGVhZGVySXRlbSwgd2lkZUZvbnQsIGxpbmssIHRyYW5zaXRpb24gfSBmcm9tIFwiLi4vc2hhcmVkL2hlbHBlcnNcIjtcbmltcG9ydCBIZWFkZXJMb2dvIGZyb20gXCIuL0xvZ29cIjtcblxuY29uc3QgQ29va2llID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTtcblxuY29uc3QgSGVhZGVyMiA9ICh7IHJvdXRlcjogeyBwYXRobmFtZSB9IH0pID0+IHtcbiAgbGV0IGNvb2sgPSBDb29raWUuZ2V0KFwiaXNBdXRoXCIpO1xuICBpZiAoIWNvb2spIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lKGZhbHNlKX0+XG4gICAgICAgIDxXcmFwcGVyPlxuICAgICAgICAgIDxIZWFkZXJMb2dvIC8+XG5cbiAgICAgICAgICA8TGluayBwcmVmZXRjaCBocmVmPVwiL2xvZ2luXCI+XG4gICAgICAgICAgICA8U3R5bGVkTGluayBjbGFzc05hbWU9e3BhdGhuYW1lID09PSBcIi9sb2dpblwiID8gXCJpcy1hY3RpdmVcIiA6IFwiXCJ9PlxuICAgICAgICAgICAgICBsb2dpblxuICAgICAgICAgICAgPC9TdHlsZWRMaW5rPlxuICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgIDxMaW5rIHByZWZldGNoIGhyZWY9XCIvcmVnaXN0ZXJcIj5cbiAgICAgICAgICAgIDxTdHlsZWRMaW5rIGNsYXNzTmFtZT17cGF0aG5hbWUgPT09IFwiL3JlZ2lzdGVyXCIgPyBcImlzLWFjdGl2ZVwiIDogXCJcIn0+XG4gICAgICAgICAgICAgIHJlZ2lzdGVyXG4gICAgICAgICAgICA8L1N0eWxlZExpbms+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L1dyYXBwZXI+XG4gICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lKGZhbHNlKX0+XG4gICAgICAgIDxXcmFwcGVyPlxuICAgICAgICAgIDxIZWFkZXJMb2dvIC8+XG5cbiAgICAgICAgICA8TGluayBwcmVmZXRjaCBocmVmPVwiL2Rhc2hib2FyZFwiPlxuICAgICAgICAgICAgPFN0eWxlZExpbmsgY2xhc3NOYW1lPXtwYXRobmFtZSA9PT0gXCIvcmVnaXN0ZXJcIiA/IFwiaXMtYWN0aXZlXCIgOiBcIlwifT5cbiAgICAgICAgICAgICAgZGFzaGJvYXJkXG4gICAgICAgICAgICA8L1N0eWxlZExpbms+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L1dyYXBwZXI+XG4gICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihIZWFkZXIyKTtcblxuY29uc3QgU3R5bGVkTGluayA9IHN0eWxlZC5kaXZgXG4gICR7aGVhZGVySXRlbX07XG4gICR7d2lkZUZvbnR9O1xuICAke2xpbmt9O1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLm11dGVkVGV4dH07XG5cbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgOjphZnRlciB7XG4gICAgJHt0cmFuc2l0aW9uKFwib3BhY2l0eVwiLCBcImJvcmRlci1ib3R0b20td2lkdGhcIil9O1xuXG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgb3BhY2l0eTogMDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5hY2NlbnR9O1xuICB9XG5cbiAgOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmFjY2VudH07XG4gIH1cbiAgOmhvdmVyOjphZnRlciB7XG4gICAgb3BhY2l0eTogMTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5hY2NlbnR9O1xuICB9XG5cbiAgJi5hY3RpdmU6OmFmdGVyIHtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5hY2NlbnR9O1xuICB9XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbmA7XG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuaGVhZGVyYFxuICBwb3NpdGlvbjogc3RpY2t5O1xuICB6LWluZGV4OiAxMDtcbiAgdG9wOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBib3gtc2hhZG93OiAwIDRweCAxMnB4ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2hhZG93fTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYm9yZGVyfTtcbiAgaGVpZ2h0OiA0OHB4O1xuICBwYWRkaW5nOiAwIDEwdnc7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZm9yZWdyb3VuZH07XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBAbWVkaWEgKG1heC13aWR0aDogNDI1cHgpIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICB9XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICB9XG5gO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IGhlYWRlckl0ZW0sIHdpZGVGb250IH0gZnJvbSBcIi4uL3NoYXJlZC9oZWxwZXJzXCI7XG5cbmNvbnN0IEhlYWRlckxvZ28gPSAoKSA9PiAoXG4gIDxMb2dvPlxuICAgIDxMaW5rIHByZWZldGNoIGhyZWY9XCIvXCI+XG4gICAgICA8c3Bhbj7igr9pdHNqb3VybmFsPC9zcGFuPlxuICAgIDwvTGluaz5cbiAgPC9Mb2dvPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyTG9nbztcblxuY29uc3QgTG9nbyA9IHN0eWxlZC5kaXZgXG4gICR7aGVhZGVySXRlbX1cblxuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5ub3JtYWxUZXh0fTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogI2ZmZjtcblxuICBAbWVkaWEgKG1heC13aWR0aDogNDI1cHgpIHtcbiAgICBwYWRkaW5nOiAwIDhweCAwIDE2cHg7XG4gICAgZm9udC1zaXplOiAxOXB4O1xuICB9XG5gO1xuXG4vLyBkaXNwbGF5OiBmbGV4O1xuLy8gYWxpZ24taXRlbXM6IGNlbnRlcjtcbi8vIGZsZXgtc2hyaW5rOiAwO1xuLy8gcGFkZGluZzogMCAxNnB4O1xuLy8gQG1lZGlhIChtYXgtd2lkdGg6IDQyNXB4KSB7XG4vLyAgIHBhZGRpbmc6IDAgOHB4O1xuLy8gfVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IERhdGVQaWNrZXIgZnJvbSBcInJlYWN0LWRhdGVwaWNrZXJcIjtcbmltcG9ydCB7IGluamVjdCwgb2JzZXJ2ZXIgfSBmcm9tIFwibW9ieC1yZWFjdFwiO1xuXG5pbXBvcnQgXCJyZWFjdC1kYXRlcGlja2VyL2Rpc3QvcmVhY3QtZGF0ZXBpY2tlci5jc3NcIjtcbmltcG9ydCBcIi4vZGF0ZXBpY2tlci1hZGRpdGlvbmFsLmNzc1wiO1xuaW1wb3J0IHsgcmVhY3Rpb24gfSBmcm9tIFwibW9ieFwiO1xuXG5AaW5qZWN0KFtcInN0b3JlXCJdKVxuQG9ic2VydmVyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeGFtcGxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGRhdGU6IG5ldyBEYXRlKCksXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHt9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5kYXRlUmVhY3Rpb24gPSByZWFjdGlvbihcbiAgICAgICgpID0+IHRoaXMucHJvcHMuc3RvcmUuc3RhcnREYXRlLFxuICAgICAgKG5vdGlmaWNhdGlvbnMsIHJlYWN0aW9uKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLnN0b3JlLnN0YXJ0RGF0ZSAhPT0gbnVsbCkge1xuICAgICAgICAgIGlmICh0aGlzLnByb3BzLnN0YXJ0ID09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRlOiBuZXcgRGF0ZSh0aGlzLnByb3BzLnN0b3JlLnN0YXJ0RGF0ZSkgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRlOiBuZXcgRGF0ZSh0aGlzLnByb3BzLnN0b3JlLmVuZERhdGUpIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UgPSAoZGF0ZSkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRlOiBkYXRlIH0pO1xuICAgIGNvbnNvbGUubG9nKGRhdGUsIFwiVEhJUyBJUyBEQVRFXCIpO1xuICB9O1xuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICBjb25zb2xlLmxvZyhcImp1c3QgdXBkYXRlZFwiKTtcbiAgICBpZiAodGhpcy5wcm9wcy5zZXQgPT0gdHJ1ZSkge1xuICAgICAgY29uc29sZS5sb2coXCJub3QgZXF1YWxcIik7XG4gICAgICBpZiAodGhpcy5wcm9wcy5zdGFydCA9PSB0cnVlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwid2FzIHRydWVcIik7XG4gICAgICAgIGxldCBmaXJzdERhdGUgPSB0aGlzLnN0YXRlLmRhdGUudG9JU09TdHJpbmcoKTtcbiAgICAgICAgbGV0IG11bHRpRGF0ZSA9IGZpcnN0RGF0ZS5zcGxpdChcIlRcIik7XG4gICAgICAgIHRoaXMucHJvcHMuc3RvcmUuc3RhcnREYXRlID0gbXVsdGlEYXRlWzBdICsgXCJUMDA6MDA6MDAuMDAwWlwiO1xuICAgICAgICB0aGlzLnByb3BzLnN0b3JlLmRhdGUgPSBcIkN1c3RvbVwiO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMucHJvcHMuc3RhcnQgPT0gZmFsc2UpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJ3YXMgZmFsc2VcIik7XG4gICAgICAgIGxldCBmaXJzdERhdGUgPSB0aGlzLnN0YXRlLmRhdGUudG9JU09TdHJpbmcoKTtcbiAgICAgICAgbGV0IG11bHRpRGF0ZSA9IGZpcnN0RGF0ZS5zcGxpdChcIlRcIik7XG4gICAgICAgIHRoaXMucHJvcHMuc3RvcmUuZW5kRGF0ZSA9IG11bHRpRGF0ZVswXSArIFwiVDI0OjAwOjAwLjAwMFpcIjtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wcm9wcy5zdG9yZS5lbmREYXRlKTtcbiAgICAgICAgdGhpcy5wcm9wcy5zdG9yZS5kYXRlID0gXCJDdXN0b21cIjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxEYXRlUGlja2VyIHNlbGVjdGVkPXt0aGlzLnN0YXRlLmRhdGV9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gLz5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5jb25zdCBGb3JtV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJvcmRlcjogMXB4IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYm9yZGVyfTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICB3aWR0aDogMzc1cHg7XG4gIHBhZGRpbmc6IDI0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZm9yZWdyb3VuZH07XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgcGFkZGluZzogMTZweDtcbiAgfVxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAke3Byb3BzID0+IChwcm9wcy53aWRlID8gXCI2MDBweFwiIDogXCIzNzVweFwiKX0pIHtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgRm9ybVdyYXBwZXI7XG5cbi8vIG1heC13aWR0aDogJHtwcm9wcyA9PiAocHJvcHMud2lkZSA/IFwiNjAwcHhcIiA6IFwiMzc1cHhcIil9O1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbi8vIGltcG9ydCB7IHRyYW5zaXRpb24gfSBmcm9tICcuLi9oZWxwZXJzJztcblxuLy8gJHt0cmFuc2l0aW9ufTtcbmNvbnN0IElucHV0ID0gc3R5bGVkLmlucHV0YFxuICAtLWJvcmRlcjogJHsocHJvcHMpID0+XG4gICAgcHJvcHMuZXJyb3IgPyBwcm9wcy50aGVtZS5lcnJvciA6IHByb3BzLnRoZW1lLmFjY2VudH07XG4gIC0tc2hhZG93OiAkeyhwcm9wcykgPT5cbiAgICBwcm9wcy5lcnJvciA/IHByb3BzLnRoZW1lLmVycm9yICsgXCI0ZFwiIDogcHJvcHMudGhlbWUuYWNjZW50ICsgXCI0ZFwifTtcblxuICBkaXNwbGF5OiBibG9jaztcbiAgJHsocHJvcHMpID0+XG4gICAgcHJvcHMuZXJyb3JcbiAgICAgID8gYFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcilcbiAgICBgXG4gICAgICA6IGBcbiAgICBib3JkZXI6IDFweCBzb2xpZCAke3Byb3BzLnRoZW1lLmJvcmRlcn1cbiAgYH07XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmlucHV0QmFja2dyb3VuZH07XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5ub3JtYWxUZXh0fTtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcblxuICA6aG92ZXIsXG4gIDpmb2N1cyB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgfVxuXG4gIDpmb2N1cyB7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMnB4IHZhcigtLXNoYWRvdyk7XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IElucHV0O1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IHNtYWxsRm9udCB9IGZyb20gXCIuLi9zaGFyZWQvaGVscGVyc1wiO1xuXG5jb25zdCBMYWJlbCA9IHN0eWxlZC5sYWJlbGBcbiAgJHtzbWFsbEZvbnR9O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5tdXRlZFRleHR9O1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgTGFiZWw7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEFwb2xsb0NvbnN1bWVyIH0gZnJvbSBcInJlYWN0LWFwb2xsb1wiO1xuaW1wb3J0IGdxbCBmcm9tIFwiZ3JhcGhxbC10YWdcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBBbGVydCB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XG5pbXBvcnQgXCJib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIjtcbi8vIGltcG9ydCB7IG9ic2VydmVyIH0gZnJvbSBcIm1vYngtcmVhY3QtbGl0ZVwiO1xuLy8gaW1wb3J0IHsgVXNlclN0b3JlQ29udGV4dCB9IGZyb20gXCIuLi9zdG9yZXMvVXNlclN0b3JlLnRzXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IEZvcm1XcmFwcGVyIGZyb20gXCIuL0Zvcm1XcmFwcGVyXCI7XG5pbXBvcnQgSW5wdXQgZnJvbSBcIi4uL2Zvcm0vSW5wdXRcIjtcbmltcG9ydCBMYWJlbCBmcm9tIFwiLi9MYWJlbFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vc2hhcmVkL0J1dHRvblwiO1xuY29uc3QgQ29va2llID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTtcblxuY29uc3QgTG9naW5Gb3JtID0gKCkgPT4ge1xuICAvLyBjb25zdCB1c2VyU3RvcmUgPSB1c2VDb250ZXh0KFVzZXJTdG9yZUNvbnRleHQpO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChldmVudCwgY2xpZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBmb3JtID0gZXZlbnQudGFyZ2V0O1xuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IHdpbmRvdy5Gb3JtRGF0YShmb3JtKTtcbiAgICBjb25zdCBlbWFpbCA9IGZvcm1EYXRhLmdldChcImVtYWlsXCIpO1xuICAgIGNvbnN0IHBhc3N3b3JkID0gZm9ybURhdGEuZ2V0KFwicGFzc3dvcmRcIik7XG4gICAgZm9ybS5yZXNldCgpO1xuXG4gICAgbGV0IHJlcyA9IGNsaWVudC5tdXRhdGUoe1xuICAgICAgbXV0YXRpb246IGdxbGBcbiAgICAgICAgbXV0YXRpb24gbG9naW4oJGVtYWlsOiBTdHJpbmchLCAkcGFzc3dvcmQ6IFN0cmluZyEpIHtcbiAgICAgICAgICBsb2dpbihlbWFpbDogJGVtYWlsLCBwYXNzd29yZDogJHBhc3N3b3JkKVxuICAgICAgICB9XG4gICAgICBgLFxuICAgICAgdmFyaWFibGVzOiB7IGVtYWlsLCBwYXNzd29yZCB9LFxuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKFwiTE9HR0lORyBJTlwiKTtcblxuICAgIGxldCByID0gYXdhaXQgcmVzO1xuICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgciA9IHIuZGF0YS5sb2dpbjtcbiAgICAvL2NoZWNrIGlmIGxvZ2luIGNyZWRlbnRpYWxzIGFyZSBjb3JyZWN0XG4gICAgbGV0IGlzVHJ1ZSA9IHIgPT0gXCJ0cnVlXCI7XG4gICAgaWYgKGlzVHJ1ZSA9PSB0cnVlKSB7XG4gICAgICBDb29raWUuc2V0KFwiaXNBdXRoXCIsIFwidHJ1ZVwiKTtcblxuICAgICAgLy8gdXNlclN0b3JlLmlzQXV0aCA9IHRydWU7XG4gICAgICBSb3V0ZXIucHVzaChcIi9kYXNoYm9hcmRcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFdyb25nQ3JlZGVudGlhbHModHJ1ZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgY29uc3QgW3dyb25nQ3JlZGVudGlhbHMsIHNldFdyb25nQ3JlZGVudGlhbHNdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHJldHVybiAoXG4gICAgPEFwb2xsb0NvbnN1bWVyPlxuICAgICAgeyhjbGllbnQpID0+IChcbiAgICAgICAgPEZvcm1XcmFwcGVyPlxuICAgICAgICAgIDxTdHlsZWRGb3JtIG9uU3VibWl0PXsoZXZlbnQpID0+IGhhbmRsZVN1Ym1pdChldmVudCwgY2xpZW50KX0+XG4gICAgICAgICAgICA8SW5wdXRXcmFwcGVyPlxuICAgICAgICAgICAgICA8TGFiZWw+ZW1haWw8L0xhYmVsPlxuICAgICAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJcIiBuYW1lPVwiZW1haWxcIiB0eXBlPVwidGV4dFwiIHJlcXVpcmVkIC8+XG4gICAgICAgICAgICA8L0lucHV0V3JhcHBlcj5cbiAgICAgICAgICAgIDxJbnB1dFdyYXBwZXI+XG4gICAgICAgICAgICAgIDxMYWJlbD5wYXNzd29yZDwvTGFiZWw+XG4gICAgICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIlwiIG5hbWU9XCJwYXNzd29yZFwiIHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWQgLz5cbiAgICAgICAgICAgIDwvSW5wdXRXcmFwcGVyPlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgd2lkdGg6IFwiMTAwJVwiIH19PlxuICAgICAgICAgICAgICA8U3VibWl0QnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L1N1Ym1pdEJ1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge3dyb25nQ3JlZGVudGlhbHMgPT0gdHJ1ZSA/IChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbi1hbGVydFwiPlxuICAgICAgICAgICAgICAgIDxBbGVydFxuICAgICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgaXNPcGVuPXt3cm9uZ0NyZWRlbnRpYWxzID09IHRydWUgPyB0cnVlIDogZmFsc2V9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgV3JvbmcgbG9naW4gY3JlZGVudGlhbHNcbiAgICAgICAgICAgICAgICA8L0FsZXJ0PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgIDwvU3R5bGVkRm9ybT5cbiAgICAgICAgPC9Gb3JtV3JhcHBlcj5cbiAgICAgICl9XG4gICAgPC9BcG9sbG9Db25zdW1lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luRm9ybTtcblxuY29uc3QgU3R5bGVkRm9ybSA9IHN0eWxlZC5mb3JtYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgJHsocHJvcHMpID0+XG4gICAgcHJvcHMubG9hZGluZyAmJlxuICAgIFwiZmlsdGVyOiBncmF5c2NhbGUoMC41KSBibHVyKDVweCkgb3BhY2l0eSgwLjYpOyBwb2ludGVyLWV2ZW50czogbm9uZVwifTtcbmA7XG5cbmNvbnN0IFN1Ym1pdEJ1dHRvbiA9IHN0eWxlZChCdXR0b24pYFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuYDtcblxuY29uc3QgSW5wdXRXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICB3aWR0aDogMTAwJTtcbmA7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgdHJhbnNpdGlvbiwgd2lkZUZvbnQgfSBmcm9tIFwiLi9oZWxwZXJzXCI7XG5cbmNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gICR7dHJhbnNpdGlvbihcImZpbHRlclwiLCBcImJveC1zaGFkb3dcIil9O1xuICAke3dpZGVGb250fTtcblxuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgcGFkZGluZzogOHB4IDI0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYWNjZW50fTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgb3V0bGluZTogbm9uZTtcblxuICA6aG92ZXIge1xuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxMTAlKTtcbiAgfVxuXG4gIDphY3RpdmUge1xuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg5MCUpO1xuICB9XG5cbiAgOmZvY3VzIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAycHggJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5hY2NlbnQgKyBcIjRkXCJ9O1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XG4iLCJpbXBvcnQgeyBjc3MsIGtleWZyYW1lcyB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5leHBvcnQgY29uc3Qgc21hbGxGb250ID0gY3NzYFxuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5gO1xuXG5leHBvcnQgY29uc3Qgd2lkZUZvbnQgPSBjc3NgXG4gICR7c21hbGxGb250fTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcbmA7XG5cbmNvbnN0IGZhZGVLZXlmcmFtZXMgPSBrZXlmcmFtZXNgXG4gIGZyb20geyBvcGFjaXR5OiAwOyB9XG4gIHRvIHsgb3BhY2l0eTogMTsgfVxuYDtcblxuZXhwb3J0IGNvbnN0IGZhZGUgPSBjc3NgXG4gIGFuaW1hdGlvbjogJHtmYWRlS2V5ZnJhbWVzfSAwLjI1cztcbmA7XG5cbmV4cG9ydCBjb25zdCB0cmFuc2l0aW9uID0gcHJvcHMgPT4gY3NzYFxuICB0cmFuc2l0aW9uOiBhbGwgJHtwcm9wcy5zbG93ID8gXCIwLjNzXCIgOiBcIjAuMTVzXCJ9IGVhc2U7XG5gO1xuXG5leHBvcnQgY29uc3QgaGVhZGVySXRlbSA9IGNzc2BcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1zaHJpbms6IDA7XG4gIHBhZGRpbmc6IDAgMTZweDtcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDQyNXB4KSB7XG4gICAgcGFkZGluZzogMCA4cHg7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBsaW5rID0gcHJvcHMgPT4gY3NzYFxuICAke3RyYW5zaXRpb259O1xuICB0ZXh0LXVuZGVybGluZS1wb3NpdGlvbjogdW5kZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubm9ybWFsVGV4dH07XG4gIDpob3ZlciB7XG4gICAgJHtwcm9wcy51bmRlcmxpbmUgJiYgXCJ0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZVwifTtcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5hY2NlbnR9O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3Qgb3ZlcmZsb3cgPSBjc3NgXG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuYDtcbiIsImNvbnN0IGNvbnN0YW50cyA9IHtcbiAgZXJyb3I6IFwiI2Y1MjIyZFwiLFxuICB2b3RlOiBcIiNiNmI2YjZcIixcbiAgdXB2b3RlOiBcIiNmOTkyMGJcIixcbiAgZG93bnZvdGU6IFwiIzJlNzBmZlwiXG59O1xuXG5jb25zdCBkYXJrID0ge1xuICAuLi5jb25zdGFudHMsXG4gIG5vcm1hbFRleHQ6IFwiI2ZmZmZmZlwiLFxuICBtdXRlZFRleHQ6IFwiI2IwYjhiZlwiLFxuICBib3JkZXI6IFwiIzMzMzMzM1wiLFxuICBhY2NlbnQ6IFwiIzMzYTBmZlwiLFxuICBwYWdlQmFja2dyb3VuZDogXCIjMWIxYjFiXCIsXG4gIHZvdGVCdXR0b25Ib3ZlcjogXCIjMzgzODM4XCIsXG4gIGZvcmVncm91bmQ6IFwiIzI2MjYyNlwiLFxuICBhY3RpdmVCYWNrZ3JvdW5kOiBcIiMzMzMzMzNcIixcbiAgaW5wdXRCYWNrZ3JvdW5kOiBcIiMzMzMzMzNcIixcbiAgc2hhZG93OiBcInJnYmEoMCwgMCwgMCwgMC40KVwiXG59O1xuXG5jb25zdCBsaWdodCA9IHtcbiAgLi4uY29uc3RhbnRzLFxuICBub3JtYWxUZXh0OiBcIiM0NTRmNWJcIixcbiAgbXV0ZWRUZXh0OiBcIiM4MThlOTlcIixcbiAgYm9yZGVyOiBcIiNlYmVkZjBcIixcbiAgYWNjZW50OiBcIiMxODkwZmZcIixcbiAgcGFnZUJhY2tncm91bmQ6IFwiI2Y0ZjZmOFwiLFxuICB2b3RlQnV0dG9uSG92ZXI6IFwiI2YyZjJmMlwiLFxuICBmb3JlZ3JvdW5kOiBcIiNmZmZmZmZcIixcbiAgYWN0aXZlQmFja2dyb3VuZDogXCIjZmFmYWZhXCIsXG4gIGlucHV0QmFja2dyb3VuZDogXCIjZmNmY2ZjXCIsXG4gIHNoYWRvdzogXCJyZ2JhKDAsIDAsIDAsIDAuMDUpXCJcbn07XG5cbmNvbnN0IHRoZW1lID0gaXNEYXJrID0+IChpc0RhcmsgPyBkYXJrIDogbGlnaHQpO1xuXG5leHBvcnQgZGVmYXVsdCB0aGVtZTtcbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTt2YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3VybD1yZXF1aXJlKFwidXJsXCIpO3ZhciBfdXRpbHM9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi91dGlsc1wiKTt2YXIgX3JvdXRlcj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3JvdXRlclwiKSk7dmFyIF9yb3V0ZXIyPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlclwiKTtmdW5jdGlvbiBpc0xvY2FsKGhyZWYpe3ZhciB1cmw9KDAsX3VybC5wYXJzZSkoaHJlZixmYWxzZSx0cnVlKTt2YXIgb3JpZ2luPSgwLF91cmwucGFyc2UpKCgwLF91dGlscy5nZXRMb2NhdGlvbk9yaWdpbikoKSxmYWxzZSx0cnVlKTtyZXR1cm4hdXJsLmhvc3R8fHVybC5wcm90b2NvbD09PW9yaWdpbi5wcm90b2NvbCYmdXJsLmhvc3Q9PT1vcmlnaW4uaG9zdDt9ZnVuY3Rpb24gbWVtb2l6ZWRGb3JtYXRVcmwoZm9ybWF0RnVuYyl7dmFyIGxhc3RIcmVmPW51bGw7dmFyIGxhc3RBcz1udWxsO3ZhciBsYXN0UmVzdWx0PW51bGw7cmV0dXJuKGhyZWYsYXMpPT57aWYobGFzdFJlc3VsdCYmaHJlZj09PWxhc3RIcmVmJiZhcz09PWxhc3RBcyl7cmV0dXJuIGxhc3RSZXN1bHQ7fXZhciByZXN1bHQ9Zm9ybWF0RnVuYyhocmVmLGFzKTtsYXN0SHJlZj1ocmVmO2xhc3RBcz1hcztsYXN0UmVzdWx0PXJlc3VsdDtyZXR1cm4gcmVzdWx0O307fWZ1bmN0aW9uIGZvcm1hdFVybCh1cmwpe3JldHVybiB1cmwmJnR5cGVvZiB1cmw9PT0nb2JqZWN0Jz8oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHVybCk6dXJsO312YXIgb2JzZXJ2ZXI7dmFyIGxpc3RlbmVycz1uZXcgTWFwKCk7dmFyIEludGVyc2VjdGlvbk9ic2VydmVyPXR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJz93aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXI6bnVsbDt2YXIgcHJlZmV0Y2hlZD17fTtmdW5jdGlvbiBnZXRPYnNlcnZlcigpey8vIFJldHVybiBzaGFyZWQgaW5zdGFuY2Ugb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgYWxyZWFkeSBjcmVhdGVkXG5pZihvYnNlcnZlcil7cmV0dXJuIG9ic2VydmVyO30vLyBPbmx5IGNyZWF0ZSBzaGFyZWQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgc3VwcG9ydGVkIGluIGJyb3dzZXJcbmlmKCFJbnRlcnNlY3Rpb25PYnNlcnZlcil7cmV0dXJuIHVuZGVmaW5lZDt9cmV0dXJuIG9ic2VydmVyPW5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzPT57ZW50cmllcy5mb3JFYWNoKGVudHJ5PT57aWYoIWxpc3RlbmVycy5oYXMoZW50cnkudGFyZ2V0KSl7cmV0dXJuO312YXIgY2I9bGlzdGVuZXJzLmdldChlbnRyeS50YXJnZXQpO2lmKGVudHJ5LmlzSW50ZXJzZWN0aW5nfHxlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbz4wKXtvYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KTtsaXN0ZW5lcnMuZGVsZXRlKGVudHJ5LnRhcmdldCk7Y2IoKTt9fSk7fSx7cm9vdE1hcmdpbjonMjAwcHgnfSk7fXZhciBsaXN0ZW5Ub0ludGVyc2VjdGlvbnM9KGVsLGNiKT0+e3ZhciBvYnNlcnZlcj1nZXRPYnNlcnZlcigpO2lmKCFvYnNlcnZlcil7cmV0dXJuKCk9Pnt9O31vYnNlcnZlci5vYnNlcnZlKGVsKTtsaXN0ZW5lcnMuc2V0KGVsLGNiKTtyZXR1cm4oKT0+e3RyeXtvYnNlcnZlci51bm9ic2VydmUoZWwpO31jYXRjaChlcnIpe2NvbnNvbGUuZXJyb3IoZXJyKTt9bGlzdGVuZXJzLmRlbGV0ZShlbCk7fTt9O2NsYXNzIExpbmsgZXh0ZW5kcyBfcmVhY3QuQ29tcG9uZW50e2NvbnN0cnVjdG9yKHByb3BzKXtzdXBlcihwcm9wcyk7dGhpcy5wPXZvaWQgMDt0aGlzLmNsZWFuVXBMaXN0ZW5lcnM9KCk9Pnt9O3RoaXMuZm9ybWF0VXJscz1tZW1vaXplZEZvcm1hdFVybCgoaHJlZixhc0hyZWYpPT57cmV0dXJue2hyZWY6KDAsX3JvdXRlcjIuYWRkQmFzZVBhdGgpKGZvcm1hdFVybChocmVmKSksYXM6YXNIcmVmPygwLF9yb3V0ZXIyLmFkZEJhc2VQYXRoKShmb3JtYXRVcmwoYXNIcmVmKSk6YXNIcmVmfTt9KTt0aGlzLmxpbmtDbGlja2VkPWU9Pnt2YXJ7bm9kZU5hbWUsdGFyZ2V0fT1lLmN1cnJlbnRUYXJnZXQ7aWYobm9kZU5hbWU9PT0nQScmJih0YXJnZXQmJnRhcmdldCE9PSdfc2VsZid8fGUubWV0YUtleXx8ZS5jdHJsS2V5fHxlLnNoaWZ0S2V5fHxlLm5hdGl2ZUV2ZW50JiZlLm5hdGl2ZUV2ZW50LndoaWNoPT09Mikpey8vIGlnbm9yZSBjbGljayBmb3IgbmV3IHRhYiAvIG5ldyB3aW5kb3cgYmVoYXZpb3JcbnJldHVybjt9dmFye2hyZWYsYXN9PXRoaXMuZm9ybWF0VXJscyh0aGlzLnByb3BzLmhyZWYsdGhpcy5wcm9wcy5hcyk7aWYoIWlzTG9jYWwoaHJlZikpey8vIGlnbm9yZSBjbGljayBpZiBpdCdzIG91dHNpZGUgb3VyIHNjb3BlIChlLmcuIGh0dHBzOi8vZ29vZ2xlLmNvbSlcbnJldHVybjt9dmFye3BhdGhuYW1lfT13aW5kb3cubG9jYXRpb247aHJlZj0oMCxfdXJsLnJlc29sdmUpKHBhdGhuYW1lLGhyZWYpO2FzPWFzPygwLF91cmwucmVzb2x2ZSkocGF0aG5hbWUsYXMpOmhyZWY7ZS5wcmV2ZW50RGVmYXVsdCgpOy8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xudmFye3Njcm9sbH09dGhpcy5wcm9wcztpZihzY3JvbGw9PW51bGwpe3Njcm9sbD1hcy5pbmRleE9mKCcjJyk8MDt9Ly8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG5fcm91dGVyLmRlZmF1bHRbdGhpcy5wcm9wcy5yZXBsYWNlPydyZXBsYWNlJzoncHVzaCddKGhyZWYsYXMse3NoYWxsb3c6dGhpcy5wcm9wcy5zaGFsbG93fSkudGhlbihzdWNjZXNzPT57aWYoIXN1Y2Nlc3MpcmV0dXJuO2lmKHNjcm9sbCl7d2luZG93LnNjcm9sbFRvKDAsMCk7ZG9jdW1lbnQuYm9keS5mb2N1cygpO319KTt9O2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtpZihwcm9wcy5wcmVmZXRjaCl7Y29uc29sZS53YXJuKCdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnKTt9fXRoaXMucD1wcm9wcy5wcmVmZXRjaCE9PWZhbHNlO31jb21wb25lbnRXaWxsVW5tb3VudCgpe3RoaXMuY2xlYW5VcExpc3RlbmVycygpO31nZXRQYXRocygpe3ZhcntwYXRobmFtZX09d2luZG93LmxvY2F0aW9uO3ZhcntocmVmOnBhcnNlZEhyZWYsYXM6cGFyc2VkQXN9PXRoaXMuZm9ybWF0VXJscyh0aGlzLnByb3BzLmhyZWYsdGhpcy5wcm9wcy5hcyk7dmFyIHJlc29sdmVkSHJlZj0oMCxfdXJsLnJlc29sdmUpKHBhdGhuYW1lLHBhcnNlZEhyZWYpO3JldHVybltyZXNvbHZlZEhyZWYscGFyc2VkQXM/KDAsX3VybC5yZXNvbHZlKShwYXRobmFtZSxwYXJzZWRBcyk6cmVzb2x2ZWRIcmVmXTt9aGFuZGxlUmVmKHJlZil7aWYodGhpcy5wJiZJbnRlcnNlY3Rpb25PYnNlcnZlciYmcmVmJiZyZWYudGFnTmFtZSl7dGhpcy5jbGVhblVwTGlzdGVuZXJzKCk7dmFyIGlzUHJlZmV0Y2hlZD1wcmVmZXRjaGVkW3RoaXMuZ2V0UGF0aHMoKS5qb2luKC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4nJScpXTtpZighaXNQcmVmZXRjaGVkKXt0aGlzLmNsZWFuVXBMaXN0ZW5lcnM9bGlzdGVuVG9JbnRlcnNlY3Rpb25zKHJlZiwoKT0+e3RoaXMucHJlZmV0Y2goKTt9KTt9fX0vLyBUaGUgZnVuY3Rpb24gaXMgbWVtb2l6ZWQgc28gdGhhdCBubyBleHRyYSBsaWZlY3ljbGVzIGFyZSBuZWVkZWRcbi8vIGFzIHBlciBodHRwczovL3JlYWN0anMub3JnL2Jsb2cvMjAxOC8wNi8wNy95b3UtcHJvYmFibHktZG9udC1uZWVkLWRlcml2ZWQtc3RhdGUuaHRtbFxucHJlZmV0Y2gob3B0aW9ucyl7aWYoIXRoaXMucHx8dHlwZW9mIHdpbmRvdz09PSd1bmRlZmluZWQnKXJldHVybjsvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG52YXIgcGF0aHM9dGhpcy5nZXRQYXRocygpOy8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbi8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG5fcm91dGVyLmRlZmF1bHQucHJlZmV0Y2gocGF0aHNbLyogaHJlZiAqLzBdLHBhdGhzWy8qIGFzUGF0aCAqLzFdLG9wdGlvbnMpLmNhdGNoKGVycj0+e2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXsvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG50aHJvdyBlcnI7fX0pO3ByZWZldGNoZWRbcGF0aHMuam9pbigvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuJyUnKV09dHJ1ZTt9cmVuZGVyKCl7dmFye2NoaWxkcmVufT10aGlzLnByb3BzO3ZhcntocmVmLGFzfT10aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLHRoaXMucHJvcHMuYXMpOy8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuaWYodHlwZW9mIGNoaWxkcmVuPT09J3N0cmluZycpe2NoaWxkcmVuPS8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYVwiLG51bGwsY2hpbGRyZW4pO30vLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbnZhciBjaGlsZD1fcmVhY3QuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7dmFyIHByb3BzPXtyZWY6ZWw9Pnt0aGlzLmhhbmRsZVJlZihlbCk7aWYoY2hpbGQmJnR5cGVvZiBjaGlsZD09PSdvYmplY3QnJiZjaGlsZC5yZWYpe2lmKHR5cGVvZiBjaGlsZC5yZWY9PT0nZnVuY3Rpb24nKWNoaWxkLnJlZihlbCk7ZWxzZSBpZih0eXBlb2YgY2hpbGQucmVmPT09J29iamVjdCcpe2NoaWxkLnJlZi5jdXJyZW50PWVsO319fSxvbk1vdXNlRW50ZXI6ZT0+e2lmKGNoaWxkLnByb3BzJiZ0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyPT09J2Z1bmN0aW9uJyl7Y2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpO310aGlzLnByZWZldGNoKHtwcmlvcml0eTp0cnVlfSk7fSxvbkNsaWNrOmU9PntpZihjaGlsZC5wcm9wcyYmdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2s9PT0nZnVuY3Rpb24nKXtjaGlsZC5wcm9wcy5vbkNsaWNrKGUpO31pZighZS5kZWZhdWx0UHJldmVudGVkKXt0aGlzLmxpbmtDbGlja2VkKGUpO319fTsvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbi8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuaWYodGhpcy5wcm9wcy5wYXNzSHJlZnx8Y2hpbGQudHlwZT09PSdhJyYmISgnaHJlZidpbiBjaGlsZC5wcm9wcykpe3Byb3BzLmhyZWY9YXN8fGhyZWY7fS8vIEFkZCB0aGUgZW5kaW5nIHNsYXNoIHRvIHRoZSBwYXRocy4gU28sIHdlIGNhbiBzZXJ2ZSB0aGVcbi8vIFwiPHBhZ2U+L2luZGV4Lmh0bWxcIiBkaXJlY3RseS5cbmlmKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpe3ZhciByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydD1yZXF1aXJlKCcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKS5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydDtpZihwcm9wcy5ocmVmJiZ0eXBlb2YgX19ORVhUX0RBVEFfXyE9PSd1bmRlZmluZWQnJiZfX05FWFRfREFUQV9fLm5leHRFeHBvcnQpe3Byb3BzLmhyZWY9cmV3cml0ZVVybEZvck5leHRFeHBvcnQocHJvcHMuaHJlZik7fX1yZXR1cm4gX3JlYWN0LmRlZmF1bHQuY2xvbmVFbGVtZW50KGNoaWxkLHByb3BzKTt9fWlmKHByb2Nlc3MuZW52Lk5PREVfRU5WPT09J2RldmVsb3BtZW50Jyl7dmFyIHdhcm49KDAsX3V0aWxzLmV4ZWNPbmNlKShjb25zb2xlLmVycm9yKTsvLyBUaGlzIG1vZHVsZSBnZXRzIHJlbW92ZWQgYnkgd2VicGFjay5JZ25vcmVQbHVnaW5cbnZhciBQcm9wVHlwZXM9cmVxdWlyZSgncHJvcC10eXBlcycpO3ZhciBleGFjdD1yZXF1aXJlKCdwcm9wLXR5cGVzLWV4YWN0Jyk7Ly8gQHRzLWlnbm9yZSB0aGUgcHJvcGVydHkgaXMgc3VwcG9ydGVkLCB3aGVuIGRlY2xhcmluZyBpdCBvbiB0aGUgY2xhc3MgaXQgb3V0cHV0cyBhbiBleHRyYSBiaXQgb2YgY29kZSB3aGljaCBpcyBub3QgbmVlZGVkLlxuTGluay5wcm9wVHlwZXM9ZXhhY3Qoe2hyZWY6UHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZyxQcm9wVHlwZXMub2JqZWN0XSkuaXNSZXF1aXJlZCxhczpQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLFByb3BUeXBlcy5vYmplY3RdKSxwcmVmZXRjaDpQcm9wVHlwZXMuYm9vbCxyZXBsYWNlOlByb3BUeXBlcy5ib29sLHNoYWxsb3c6UHJvcFR5cGVzLmJvb2wscGFzc0hyZWY6UHJvcFR5cGVzLmJvb2wsc2Nyb2xsOlByb3BUeXBlcy5ib29sLGNoaWxkcmVuOlByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5lbGVtZW50LChwcm9wcyxwcm9wTmFtZSk9Pnt2YXIgdmFsdWU9cHJvcHNbcHJvcE5hbWVdO2lmKHR5cGVvZiB2YWx1ZT09PSdzdHJpbmcnKXt3YXJuKFwiV2FybmluZzogWW91J3JlIHVzaW5nIGEgc3RyaW5nIGRpcmVjdGx5IGluc2lkZSA8TGluaz4uIFRoaXMgdXNhZ2UgaGFzIGJlZW4gZGVwcmVjYXRlZC4gUGxlYXNlIGFkZCBhbiA8YT4gdGFnIGFzIGNoaWxkIG9mIDxMaW5rPlwiKTt9cmV0dXJuIG51bGw7fV0pLmlzUmVxdWlyZWR9KTt9dmFyIF9kZWZhdWx0PUxpbms7ZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnVzZVJvdXRlcj11c2VSb3V0ZXI7ZXhwb3J0cy5tYWtlUHVibGljUm91dGVySW5zdGFuY2U9bWFrZVB1YmxpY1JvdXRlckluc3RhbmNlO2V4cG9ydHMuY3JlYXRlUm91dGVyPWV4cG9ydHMud2l0aFJvdXRlcj1leHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfcm91dGVyMj1faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXJcIikpO2V4cG9ydHMuUm91dGVyPV9yb3V0ZXIyLmRlZmF1bHQ7ZXhwb3J0cy5OZXh0Um91dGVyPV9yb3V0ZXIyLk5leHRSb3V0ZXI7dmFyIF9yb3V0ZXJDb250ZXh0PXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHRcIik7dmFyIF93aXRoUm91dGVyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vd2l0aC1yb3V0ZXJcIikpO2V4cG9ydHMud2l0aFJvdXRlcj1fd2l0aFJvdXRlci5kZWZhdWx0Oy8qIGdsb2JhbCB3aW5kb3cgKi92YXIgc2luZ2xldG9uUm91dGVyPXtyb3V0ZXI6bnVsbCwvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxucmVhZHlDYWxsYmFja3M6W10scmVhZHkoY2Ipe2lmKHRoaXMucm91dGVyKXJldHVybiBjYigpO2lmKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJyl7dGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKTt9fX07Ly8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxudmFyIHVybFByb3BlcnR5RmllbGRzPVsncGF0aG5hbWUnLCdyb3V0ZScsJ3F1ZXJ5JywnYXNQYXRoJywnY29tcG9uZW50cycsJ2lzRmFsbGJhY2snLCdiYXNlUGF0aCddO3ZhciByb3V0ZXJFdmVudHM9Wydyb3V0ZUNoYW5nZVN0YXJ0JywnYmVmb3JlSGlzdG9yeUNoYW5nZScsJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCdyb3V0ZUNoYW5nZUVycm9yJywnaGFzaENoYW5nZVN0YXJ0JywnaGFzaENoYW5nZUNvbXBsZXRlJ107dmFyIGNvcmVNZXRob2RGaWVsZHM9WydwdXNoJywncmVwbGFjZScsJ3JlbG9hZCcsJ2JhY2snLCdwcmVmZXRjaCcsJ2JlZm9yZVBvcFN0YXRlJ107Ly8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwnZXZlbnRzJyx7Z2V0KCl7cmV0dXJuIF9yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzO319KTt1cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKGZpZWxkPT57Ly8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbi8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4vLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlcixmaWVsZCx7Z2V0KCl7dmFyIHJvdXRlcj1nZXRSb3V0ZXIoKTtyZXR1cm4gcm91dGVyW2ZpZWxkXTt9fSk7fSk7Y29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKGZpZWxkPT57Ly8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbjtzaW5nbGV0b25Sb3V0ZXJbZmllbGRdPWZ1bmN0aW9uKCl7dmFyIHJvdXRlcj1nZXRSb3V0ZXIoKTtyZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmd1bWVudHMpO307fSk7cm91dGVyRXZlbnRzLmZvckVhY2goZXZlbnQ9PntzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCk9Pntfcm91dGVyMi5kZWZhdWx0LmV2ZW50cy5vbihldmVudCxmdW5jdGlvbigpe3ZhciBldmVudEZpZWxkPVwib25cIitldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKStldmVudC5zdWJzdHJpbmcoMSk7dmFyIF9zaW5nbGV0b25Sb3V0ZXI9c2luZ2xldG9uUm91dGVyO2lmKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pe3RyeXtfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3VtZW50cyk7fWNhdGNoKGVycil7Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbmNvbnNvbGUuZXJyb3IoXCJFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogXCIrZXZlbnRGaWVsZCk7Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbmNvbnNvbGUuZXJyb3IoZXJyLm1lc3NhZ2UrXCJcXG5cIitlcnIuc3RhY2spO319fSk7fSk7fSk7ZnVuY3Rpb24gZ2V0Um91dGVyKCl7aWYoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpe3ZhciBtZXNzYWdlPSdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJysnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nO3Rocm93IG5ldyBFcnJvcihtZXNzYWdlKTt9cmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7fS8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxudmFyIF9kZWZhdWx0PXNpbmdsZXRvblJvdXRlcjsvLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0O2Z1bmN0aW9uIHVzZVJvdXRlcigpe3JldHVybiBfcmVhY3QuZGVmYXVsdC51c2VDb250ZXh0KF9yb3V0ZXJDb250ZXh0LlJvdXRlckNvbnRleHQpO30vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxudmFyIGNyZWF0ZVJvdXRlcj1mdW5jdGlvbiBjcmVhdGVSb3V0ZXIoKXtmb3IodmFyIF9sZW49YXJndW1lbnRzLmxlbmd0aCxhcmdzPW5ldyBBcnJheShfbGVuKSxfa2V5PTA7X2tleTxfbGVuO19rZXkrKyl7YXJnc1tfa2V5XT1hcmd1bWVudHNbX2tleV07fXNpbmdsZXRvblJvdXRlci5yb3V0ZXI9bmV3IF9yb3V0ZXIyLmRlZmF1bHQoLi4uYXJncyk7c2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goY2I9PmNiKCkpO3NpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcz1bXTtyZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjt9Oy8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydHMuY3JlYXRlUm91dGVyPWNyZWF0ZVJvdXRlcjtmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyKXt2YXIgX3JvdXRlcj1yb3V0ZXI7dmFyIGluc3RhbmNlPXt9O2Zvcih2YXIgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpe2lmKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XT09PSdvYmplY3QnKXtpbnN0YW5jZVtwcm9wZXJ0eV09T2JqZWN0LmFzc2lnbih7fSxfcm91dGVyW3Byb3BlcnR5XSk7Ly8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbmNvbnRpbnVlO31pbnN0YW5jZVtwcm9wZXJ0eV09X3JvdXRlcltwcm9wZXJ0eV07fS8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbmluc3RhbmNlLmV2ZW50cz1fcm91dGVyMi5kZWZhdWx0LmV2ZW50cztjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goZmllbGQ9PntpbnN0YW5jZVtmaWVsZF09ZnVuY3Rpb24oKXtyZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJndW1lbnRzKTt9O30pO3JldHVybiBpbnN0YW5jZTt9IiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD13aXRoUm91dGVyO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfcm91dGVyPXJlcXVpcmUoXCIuL3JvdXRlclwiKTtmdW5jdGlvbiB3aXRoUm91dGVyKENvbXBvc2VkQ29tcG9uZW50KXtmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wcyl7cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9zZWRDb21wb25lbnQsT2JqZWN0LmFzc2lnbih7cm91dGVyOigwLF9yb3V0ZXIudXNlUm91dGVyKSgpfSxwcm9wcykpO31XaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHM9Q29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuO1dpdGhSb3V0ZXJXcmFwcGVyLm9yaWdHZXRJbml0aWFsUHJvcHM9Q29tcG9zZWRDb21wb25lbnQub3JpZ0dldEluaXRpYWxQcm9wcztpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7dmFyIG5hbWU9Q29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWV8fENvbXBvc2VkQ29tcG9uZW50Lm5hbWV8fCdVbmtub3duJztXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZT1cIndpdGhSb3V0ZXIoXCIrbmFtZStcIilcIjt9cmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyO30iLCJcInVzZSBzdHJpY3RcIjtcbi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gbWl0dCgpIHtcbiAgICBjb25zdCBhbGwgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHJldHVybiB7XG4gICAgICAgIG9uKHR5cGUsIGhhbmRsZXIpIHtcbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIChhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKTtcbiAgICAgICAgfSxcbiAgICAgICAgb2ZmKHR5cGUsIGhhbmRsZXIpIHtcbiAgICAgICAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYml0d2lzZVxuICAgICAgICAgICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlbWl0KHR5cGUsIC4uLmV2dHMpIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIChhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyKSA9PiB7XG4gICAgICAgICAgICAgICAgaGFuZGxlciguLi5ldnRzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgIH07XG59XG5leHBvcnRzLmRlZmF1bHQgPSBtaXR0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB1cmxfMSA9IHJlcXVpcmUoXCJ1cmxcIik7XG5jb25zdCBtaXR0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL21pdHRcIikpO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmNvbnN0IGlzX2R5bmFtaWNfMSA9IHJlcXVpcmUoXCIuL3V0aWxzL2lzLWR5bmFtaWNcIik7XG5jb25zdCByb3V0ZV9tYXRjaGVyXzEgPSByZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1tYXRjaGVyXCIpO1xuY29uc3Qgcm91dGVfcmVnZXhfMSA9IHJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLXJlZ2V4XCIpO1xuY29uc3QgYmFzZVBhdGggPSBwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIHx8ICcnO1xuZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aCkge1xuICAgIHJldHVybiBwYXRoLmluZGV4T2YoYmFzZVBhdGgpICE9PSAwID8gYmFzZVBhdGggKyBwYXRoIDogcGF0aDtcbn1cbmV4cG9ydHMuYWRkQmFzZVBhdGggPSBhZGRCYXNlUGF0aDtcbmZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aC5pbmRleE9mKGJhc2VQYXRoKSA9PT0gMFxuICAgICAgICA/IHBhdGguc3Vic3RyKGJhc2VQYXRoLmxlbmd0aCkgfHwgJy8nXG4gICAgICAgIDogcGF0aDtcbn1cbmV4cG9ydHMuZGVsQmFzZVBhdGggPSBkZWxCYXNlUGF0aDtcbmZ1bmN0aW9uIHRvUm91dGUocGF0aCkge1xuICAgIHJldHVybiBwYXRoLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nO1xufVxuY29uc3QgcHJlcGFyZVJvdXRlID0gKHBhdGgpID0+IHRvUm91dGUoIXBhdGggfHwgcGF0aCA9PT0gJy8nID8gJy9pbmRleCcgOiBwYXRoKTtcbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEocGF0aG5hbWUsIHF1ZXJ5LCBpc1NlcnZlclJlbmRlciwgY2IpIHtcbiAgICBsZXQgYXR0ZW1wdHMgPSBpc1NlcnZlclJlbmRlciA/IDMgOiAxO1xuICAgIGZ1bmN0aW9uIGdldFJlc3BvbnNlKCkge1xuICAgICAgICByZXR1cm4gZmV0Y2godXRpbHNfMS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICBwYXRobmFtZTogYWRkQmFzZVBhdGgoXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlIF9fTkVYVF9EQVRBX19cbiAgICAgICAgICAgIGAvX25leHQvZGF0YS8ke19fTkVYVF9EQVRBX18uYnVpbGRJZH0ke2RlbEJhc2VQYXRoKHBhdGhuYW1lKX0uanNvbmApLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgIH0pLCB7XG4gICAgICAgICAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAgICAgICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAgICAgICAgIC8vID4gb3B0aW9uLlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgICAgICAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgICAgICAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgICB9KS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgICAgIGlmICgtLWF0dGVtcHRzID4gMCAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ2V0UmVzcG9uc2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGdldFJlc3BvbnNlKClcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIHJldHVybiBjYiA/IGNiKGRhdGEpIDogZGF0YTtcbiAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAgICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAgICAgLy8gbG9vcC5cbiAgICAgICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgICAgICAgO1xuICAgICAgICAgICAgZXJyLmNvZGUgPSAnUEFHRV9MT0FEX0VSUk9SJztcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBlcnI7XG4gICAgfSk7XG59XG5jbGFzcyBSb3V0ZXIge1xuICAgIGNvbnN0cnVjdG9yKHBhdGhuYW1lLCBxdWVyeSwgYXMsIHsgaW5pdGlhbFByb3BzLCBwYWdlTG9hZGVyLCBBcHAsIHdyYXBBcHAsIENvbXBvbmVudCwgZXJyLCBzdWJzY3JpcHRpb24sIGlzRmFsbGJhY2ssIH0pIHtcbiAgICAgICAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgICAgICAgdGhpcy5zZGMgPSB7fTtcbiAgICAgICAgdGhpcy5vblBvcFN0YXRlID0gKGUpID0+IHtcbiAgICAgICAgICAgIGlmICghZS5zdGF0ZSkge1xuICAgICAgICAgICAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgICAgICAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgICAgICAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAgICAgICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgICAgICAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgICAgICAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgICAgICAgICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpcztcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCB1dGlsc18xLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLCB1dGlsc18xLmdldFVSTCgpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAgICAgICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgICAgICAgICAgaWYgKGUuc3RhdGUgJiZcbiAgICAgICAgICAgICAgICB0aGlzLmlzU3NyICYmXG4gICAgICAgICAgICAgICAgZS5zdGF0ZS5hcyA9PT0gdGhpcy5hc1BhdGggJiZcbiAgICAgICAgICAgICAgICB1cmxfMS5wYXJzZShlLnN0YXRlLnVybCkucGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgICAgICAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgICAgICAgICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKGUuc3RhdGUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zIH0gPSBlLnN0YXRlO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHVybCA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGFzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ2Bwb3BzdGF0ZWAgZXZlbnQgdHJpZ2dlcmVkIGJ1dCBgZXZlbnQuc3RhdGVgIGRpZCBub3QgaGF2ZSBgdXJsYCBvciBgYXNgIGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9wb3BzdGF0ZS1zdGF0ZS1lbXB0eScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucmVwbGFjZSh1cmwsIGFzLCBvcHRpb25zKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fZ2V0U3RhdGljRGF0YSA9IChhc1BhdGgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhdGhuYW1lID0gcHJlcGFyZVJvdXRlKHVybF8xLnBhcnNlKGFzUGF0aCkucGF0aG5hbWUpO1xuICAgICAgICAgICAgcmV0dXJuIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgdGhpcy5zZGNbcGF0aG5hbWVdXG4gICAgICAgICAgICAgICAgPyBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbcGF0aG5hbWVdKVxuICAgICAgICAgICAgICAgIDogZmV0Y2hOZXh0RGF0YShwYXRobmFtZSwgbnVsbCwgdGhpcy5pc1NzciwgZGF0YSA9PiAodGhpcy5zZGNbcGF0aG5hbWVdID0gZGF0YSkpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9nZXRTZXJ2ZXJEYXRhID0gKGFzUGF0aCkgPT4ge1xuICAgICAgICAgICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB1cmxfMS5wYXJzZShhc1BhdGgsIHRydWUpO1xuICAgICAgICAgICAgcGF0aG5hbWUgPSBwcmVwYXJlUm91dGUocGF0aG5hbWUpO1xuICAgICAgICAgICAgcmV0dXJuIGZldGNoTmV4dERhdGEocGF0aG5hbWUsIHF1ZXJ5LCB0aGlzLmlzU3NyKTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgICAgIHRoaXMucm91dGUgPSB0b1JvdXRlKHBhdGhuYW1lKTtcbiAgICAgICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IHt9O1xuICAgICAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICAgICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICAgICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0geyBDb21wb25lbnQ6IEFwcCB9O1xuICAgICAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgICAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgICAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHM7XG4gICAgICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXI7XG4gICAgICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZTtcbiAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICAgICAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgICAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgICAgICB0aGlzLmFzUGF0aCA9XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICAgICAgICBpc19keW5hbWljXzEuaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXM7XG4gICAgICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aDtcbiAgICAgICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb247XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHA7XG4gICAgICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAgICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICAgICAgdGhpcy5pc1NzciA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2s7XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgICAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICAgICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgICAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCB1dGlsc18xLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLCBhcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIEBkZXByZWNhdGVkIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IGV2ZW4gdGhvdWdoIGl0J3MgYSBwcml2YXRlIG1ldGhvZC5cbiAgICBzdGF0aWMgX3Jld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHVybCkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAgICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydDtcbiAgICAgICAgICAgIHJldHVybiByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCh1cmwpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHVybDtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cGRhdGUocm91dGUsIG1vZCkge1xuICAgICAgICBjb25zdCBDb21wb25lbnQgPSBtb2QuZGVmYXVsdCB8fCBtb2Q7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdO1xuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IHVwZGF0ZSB1bmF2YWlsYWJsZSByb3V0ZTogJHtyb3V0ZX1gKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuZXdEYXRhID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBkYXRhKSwgeyBDb21wb25lbnQsIF9fTl9TU0c6IG1vZC5fX05fU1NHLCBfX05fU1NQOiBtb2QuX19OX1NTUCB9KTtcbiAgICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IG5ld0RhdGE7XG4gICAgICAgIC8vIHBhZ2VzL19hcHAuanMgdXBkYXRlZFxuICAgICAgICBpZiAocm91dGUgPT09ICcvX2FwcCcpIHtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJvdXRlID09PSB0aGlzLnJvdXRlKSB7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeShuZXdEYXRhKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZWxvYWQoKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAgICovXG4gICAgYmFjaygpIHtcbiAgICAgICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgICAqL1xuICAgIHB1c2godXJsLCBhcyA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAgICovXG4gICAgcmVwbGFjZSh1cmwsIGFzID0gdXJsLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgY2hhbmdlKG1ldGhvZCwgX3VybCwgX2FzLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMuX2gpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzU3NyID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgICAgICAgICBpZiAodXRpbHNfMS5TVCkge1xuICAgICAgICAgICAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgICAgICAgICAgIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gICAgICAgICAgICBsZXQgdXJsID0gdHlwZW9mIF91cmwgPT09ICdvYmplY3QnID8gdXRpbHNfMS5mb3JtYXRXaXRoVmFsaWRhdGlvbihfdXJsKSA6IF91cmw7XG4gICAgICAgICAgICBsZXQgYXMgPSB0eXBlb2YgX2FzID09PSAnb2JqZWN0JyA/IHV0aWxzXzEuZm9ybWF0V2l0aFZhbGlkYXRpb24oX2FzKSA6IF9hcztcbiAgICAgICAgICAgIHVybCA9IGFkZEJhc2VQYXRoKHVybCk7XG4gICAgICAgICAgICBhcyA9IGFkZEJhc2VQYXRoKGFzKTtcbiAgICAgICAgICAgIC8vIEFkZCB0aGUgZW5kaW5nIHNsYXNoIHRvIHRoZSBwYXRocy4gU28sIHdlIGNhbiBzZXJ2ZSB0aGVcbiAgICAgICAgICAgIC8vIFwiPHBhZ2U+L2luZGV4Lmh0bWxcIiBkaXJlY3RseSBmb3IgdGhlIFNTUiBwYWdlLlxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4vcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgICAgICAgICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydDtcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICAgICAgICAgICAgaWYgKF9fTkVYVF9EQVRBX18ubmV4dEV4cG9ydCkge1xuICAgICAgICAgICAgICAgICAgICBhcyA9IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KGFzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZChhcyk7XG4gICAgICAgICAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgICAgICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuICAgICAgICAgICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgICAgICAgICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgICAgICAgICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoYXMpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hc1BhdGggPSBhcztcbiAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxUb0hhc2goYXMpO1xuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnksIHByb3RvY29sIH0gPSB1cmxfMS5wYXJzZSh1cmwsIHRydWUpO1xuICAgICAgICAgICAgaWYgKCFwYXRobmFtZSB8fCBwcm90b2NvbCkge1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBocmVmIHBhc3NlZCB0byByb3V0ZXI6ICR7dXJsfSBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvaW52YWxpZC1ocmVmLXBhc3NlZGApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgICAgICAgICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgICAgICAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgICAgICAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgICAgICAgICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgICAgICAgICAgaWYgKCF0aGlzLnVybElzTmV3KGFzKSkge1xuICAgICAgICAgICAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgcm91dGUgPSB0b1JvdXRlKHBhdGhuYW1lKTtcbiAgICAgICAgICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zO1xuICAgICAgICAgICAgaWYgKGlzX2R5bmFtaWNfMS5pc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lOiBhc1BhdGhuYW1lIH0gPSB1cmxfMS5wYXJzZShhcyk7XG4gICAgICAgICAgICAgICAgY29uc3Qgcm91dGVSZWdleCA9IHJvdXRlX3JlZ2V4XzEuZ2V0Um91dGVSZWdleChyb3V0ZSk7XG4gICAgICAgICAgICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IHJvdXRlX21hdGNoZXJfMS5nZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKHBhcmFtID0+ICFxdWVyeVtwYXJhbV0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGAgZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChuZXcgRXJyb3IoYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2luY29tcGF0aWJsZS1ocmVmLWFzYCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcyk7XG4gICAgICAgICAgICAvLyBJZiBzaGFsbG93IGlzIHRydWUgYW5kIHRoZSByb3V0ZSBleGlzdHMgaW4gdGhlIHJvdXRlciBjYWNoZSB3ZSByZXVzZSB0aGUgcHJldmlvdXMgcmVzdWx0XG4gICAgICAgICAgICB0aGlzLmdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgc2hhbGxvdykudGhlbihyb3V0ZUluZm8gPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgZXJyb3IgfSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IgJiYgZXJyb3IuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhcHBDb21wID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudDtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIXJvdXRlSW5mby5Db21wb25lbnQuZ2V0SW5pdGlhbFByb3BzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVJbmZvKTtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGFzKTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgIH0sIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCB1dGlsc18xLmdldFVSTCgpICE9PSBhcykge1xuICAgICAgICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXSh7XG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGFzLFxuICAgICAgICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgICB9LCBcbiAgICAgICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICAgICAnJywgYXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgc2hhbGxvdyA9IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV07XG4gICAgICAgIC8vIElmIHRoZXJlIGlzIGEgc2hhbGxvdyByb3V0ZSB0cmFuc2l0aW9uIHBvc3NpYmxlXG4gICAgICAgIC8vIElmIHRoZSByb3V0ZSBpcyBhbHJlYWR5IHJlbmRlcmVkIG9uIHRoZSBzY3JlZW4uXG4gICAgICAgIGlmIChzaGFsbG93ICYmIGNhY2hlZFJvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShjYWNoZWRSb3V0ZUluZm8pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGhhbmRsZUVycm9yID0gKGVyciwgbG9hZEVycm9yRmFpbCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIuY29kZSA9PT0gJ1BBR0VfTE9BRF9FUlJPUicgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgICAgICAgICAgICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgICAgICAgICAgICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgICAgICAgICAgICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcbiAgICAgICAgICAgICAgICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXM7XG4gICAgICAgICAgICAgICAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgICAgICAgICAgICAgICAvLyBTbywgd2UgbmVlZCB0byBtYXJrIGl0IGFzIGEgY2FuY2VsbGVkIGVycm9yIGFuZCBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgICAgICAgICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBUT0RPOiBmaXggdGhlIGNvbnRyb2wgZmxvdyBoZXJlXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHsgZXJyb3I6IGVyciB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBUT0RPOiBmaXggdGhlIGNvbnRyb2wgZmxvdyBoZXJlXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHsgZXJyb3I6IGVyciB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLmZldGNoQ29tcG9uZW50KCcvX2Vycm9yJylcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBwYWdlOiBDb21wb25lbnQgfSA9IHJlcztcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm91dGVJbmZvID0geyBDb21wb25lbnQsIGVyciB9O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS50aGVuKHByb3BzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8uZXJyb3IgPSBlcnI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyb3V0ZUluZm8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgZ2lwRXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5lcnJvciA9IGVycjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJvdXRlSW5mbyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBoYW5kbGVFcnJvcihlcnIsIHRydWUpKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGlmIChjYWNoZWRSb3V0ZUluZm8pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShjYWNoZWRSb3V0ZUluZm8pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbihyZXMgPT4gcmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgICAgfSksIHJlamVjdCk7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigocm91dGVJbmZvKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcbiAgICAgICAgICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZ2V0RGF0YSgoKSA9PiBfX05fU1NHXG4gICAgICAgICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGFzKVxuICAgICAgICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgICAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoYXMpXG4gICAgICAgICAgICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBcbiAgICAgICAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgICAgICAgIH0pKS50aGVuKHByb3BzID0+IHtcbiAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wcztcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgICAgIHJldHVybiByb3V0ZUluZm87XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChoYW5kbGVFcnJvcik7XG4gICAgfVxuICAgIHNldChyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgZGF0YSkge1xuICAgICAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yb3V0ZSA9IHJvdXRlO1xuICAgICAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWU7XG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgICAgICAgdGhpcy5hc1BhdGggPSBhcztcbiAgICAgICAgdGhpcy5ub3RpZnkoZGF0YSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICAgKi9cbiAgICBiZWZvcmVQb3BTdGF0ZShjYikge1xuICAgICAgICB0aGlzLl9icHMgPSBjYjtcbiAgICB9XG4gICAgb25seUFIYXNoQ2hhbmdlKGFzKSB7XG4gICAgICAgIGlmICghdGhpcy5hc1BhdGgpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKTtcbiAgICAgICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpO1xuICAgICAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICAgICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAgICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAgICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICAgICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2g7XG4gICAgfVxuICAgIHNjcm9sbFRvSGFzaChhcykge1xuICAgICAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJyk7XG4gICAgICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgICAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgICAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaCk7XG4gICAgICAgIGlmIChpZEVsKSB7XG4gICAgICAgICAgICBpZEVsLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgICAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXTtcbiAgICAgICAgaWYgKG5hbWVFbCkge1xuICAgICAgICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXJsSXNOZXcoYXNQYXRoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICAgKi9cbiAgICBwcmVmZXRjaCh1cmwsIGFzUGF0aCA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lLCBwcm90b2NvbCB9ID0gdXJsXzEucGFyc2UodXJsKTtcbiAgICAgICAgICAgIGlmICghcGF0aG5hbWUgfHwgcHJvdG9jb2wpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gcm91dGVyOiAke3VybH0gaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2ludmFsaWQtaHJlZi1wYXNzZWRgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByb3V0ZSA9IGRlbEJhc2VQYXRoKHRvUm91dGUocGF0aG5hbWUpKTtcbiAgICAgICAgICAgIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXIucHJlZmV0Y2hEYXRhKHVybCwgZGVsQmFzZVBhdGgoYXNQYXRoKSksXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgICAgICAgICAgXSkudGhlbigoKSA9PiByZXNvbHZlKCksIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZSkge1xuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgICByb3V0ZSA9IGRlbEJhc2VQYXRoKHJvdXRlKTtcbiAgICAgICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKTtcbiAgICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImApO1xuICAgICAgICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdDtcbiAgICB9XG4gICAgX2dldERhdGEoZm4pIHtcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNsYyA9IGNhbmNlbDtcbiAgICAgICAgcmV0dXJuIGZuKCkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpO1xuICAgICAgICAgICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwgY3R4KSB7XG4gICAgICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXTtcbiAgICAgICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwKTtcbiAgICAgICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlO1xuICAgICAgICByZXR1cm4gdXRpbHNfMS5sb2FkR2V0SW5pdGlhbFByb3BzKEFwcCwge1xuICAgICAgICAgICAgQXBwVHJlZSxcbiAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgICAgICAgIGN0eCxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFib3J0Q29tcG9uZW50TG9hZChhcykge1xuICAgICAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgICAgICAgIGNvbnN0IGUgPSBuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpO1xuICAgICAgICAgICAgZS5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZSwgYXMpO1xuICAgICAgICAgICAgdGhpcy5jbGMoKTtcbiAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBub3RpZnkoZGF0YSkge1xuICAgICAgICB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50KTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBSb3V0ZXI7XG5Sb3V0ZXIuZXZlbnRzID0gbWl0dF8xLmRlZmF1bHQoKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvO1xuZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGUpIHtcbiAgICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKTtcbn1cbmV4cG9ydHMuaXNEeW5hbWljUm91dGUgPSBpc0R5bmFtaWNSb3V0ZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpIHtcbiAgICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXg7XG4gICAgcmV0dXJuIChwYXRobmFtZSkgPT4ge1xuICAgICAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSk7XG4gICAgICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbSkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChfKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKCdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJyk7XG4gICAgICAgICAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCc7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBwYXJhbXMgPSB7fTtcbiAgICAgICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV07XG4gICAgICAgICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc107XG4gICAgICAgICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgICAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoZW50cnkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICAgICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBkZWNvZGUobSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcGFyYW1zO1xuICAgIH07XG59XG5leHBvcnRzLmdldFJvdXRlTWF0Y2hlciA9IGdldFJvdXRlTWF0Y2hlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJyk7XG59XG5mdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KG5vcm1hbGl6ZWRSb3V0ZSkge1xuICAgIC8vIEVzY2FwZSBhbGwgY2hhcmFjdGVycyB0aGF0IGNvdWxkIGJlIGNvbnNpZGVyZWQgUmVnRXhcbiAgICBjb25zdCBlc2NhcGVkUm91dGUgPSBlc2NhcGVSZWdleChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpO1xuICAgIGNvbnN0IGdyb3VwcyA9IHt9O1xuICAgIGxldCBncm91cEluZGV4ID0gMTtcbiAgICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBlc2NhcGVkUm91dGUucmVwbGFjZSgvXFwvXFxcXFxcWyhbXi9dKz8pXFxcXFxcXSg/PVxcL3wkKS9nLCAoXywgJDEpID0+IHtcbiAgICAgICAgY29uc3QgaXNDYXRjaEFsbCA9IC9eKFxcXFxcXC4pezN9Ly50ZXN0KCQxKTtcbiAgICAgICAgZ3JvdXBzWyQxXG4gICAgICAgICAgICAvLyBVbi1lc2NhcGUga2V5XG4gICAgICAgICAgICAucmVwbGFjZSgvXFxcXChbfFxcXFx7fSgpW1xcXV4kKyo/Li1dKS9nLCAnJDEnKVxuICAgICAgICAgICAgLnJlcGxhY2UoL15cXC57M30vLCAnJylcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgICBdID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0OiBpc0NhdGNoQWxsIH07XG4gICAgICAgIHJldHVybiBpc0NhdGNoQWxsID8gJy8oLis/KScgOiAnLyhbXi9dKz8pJztcbiAgICB9KTtcbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGU7XG4gICAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gICAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBlc2NhcGVkUm91dGUucmVwbGFjZSgvXFwvXFxcXFxcWyhbXi9dKz8pXFxcXFxcXSg/PVxcL3wkKS9nLCAoXywgJDEpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlzQ2F0Y2hBbGwgPSAvXihcXFxcXFwuKXszfS8udGVzdCgkMSk7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSAkMVxuICAgICAgICAgICAgICAgIC8vIFVuLWVzY2FwZSBrZXlcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFxcXChbfFxcXFx7fSgpW1xcXV4kKyo/Li1dKS9nLCAnJDEnKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9eXFwuezN9LywgJycpO1xuICAgICAgICAgICAgcmV0dXJuIGlzQ2F0Y2hBbGxcbiAgICAgICAgICAgICAgICA/IGAvKD88JHtlc2NhcGVSZWdleChrZXkpfT4uKz8pYFxuICAgICAgICAgICAgICAgIDogYC8oPzwke2VzY2FwZVJlZ2V4KGtleSl9PlteL10rPylgO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oeyByZTogbmV3IFJlZ0V4cCgnXicgKyBwYXJhbWV0ZXJpemVkUm91dGUgKyAnKD86Lyk/JCcsICdpJyksIGdyb3VwcyB9LCAobmFtZWRQYXJhbWV0ZXJpemVkUm91dGVcbiAgICAgICAgPyB7XG4gICAgICAgICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgICAgIH1cbiAgICAgICAgOiB7fSkpO1xufVxuZXhwb3J0cy5nZXRSb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdXJsXzEgPSByZXF1aXJlKFwidXJsXCIpO1xuLyoqXG4gKiBVdGlsc1xuICovXG5mdW5jdGlvbiBleGVjT25jZShmbikge1xuICAgIGxldCB1c2VkID0gZmFsc2U7XG4gICAgbGV0IHJlc3VsdDtcbiAgICByZXR1cm4gKCguLi5hcmdzKSA9PiB7XG4gICAgICAgIGlmICghdXNlZCkge1xuICAgICAgICAgICAgdXNlZCA9IHRydWU7XG4gICAgICAgICAgICByZXN1bHQgPSBmbiguLi5hcmdzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pO1xufVxuZXhwb3J0cy5leGVjT25jZSA9IGV4ZWNPbmNlO1xuZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gICAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvbjtcbiAgICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gO1xufVxuZXhwb3J0cy5nZXRMb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luO1xuZnVuY3Rpb24gZ2V0VVJMKCkge1xuICAgIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uO1xuICAgIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKCk7XG4gICAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpO1xufVxuZXhwb3J0cy5nZXRVUkwgPSBnZXRVUkw7XG5mdW5jdGlvbiBnZXREaXNwbGF5TmFtZShDb21wb25lbnQpIHtcbiAgICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICAgICAgPyBDb21wb25lbnRcbiAgICAgICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nO1xufVxuZXhwb3J0cy5nZXREaXNwbGF5TmFtZSA9IGdldERpc3BsYXlOYW1lO1xuZnVuY3Rpb24gaXNSZXNTZW50KHJlcykge1xuICAgIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50O1xufVxuZXhwb3J0cy5pc1Jlc1NlbnQgPSBpc1Jlc1NlbnQ7XG5hc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzKEFwcCwgY3R4KSB7XG4gICAgdmFyIF9hO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmICgoX2EgPSBBcHAucHJvdG90eXBlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShBcHApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKTtcbiAgICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gICAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eCk7XG4gICAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgICAgICByZXR1cm4gcHJvcHM7XG4gICAgfVxuICAgIGlmICghcHJvcHMpIHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoQXBwKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYCR7Z2V0RGlzcGxheU5hbWUoQXBwKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHByb3BzO1xufVxuZXhwb3J0cy5sb2FkR2V0SW5pdGlhbFByb3BzID0gbG9hZEdldEluaXRpYWxQcm9wcztcbmV4cG9ydHMudXJsT2JqZWN0S2V5cyA9IFtcbiAgICAnYXV0aCcsXG4gICAgJ2hhc2gnLFxuICAgICdob3N0JyxcbiAgICAnaG9zdG5hbWUnLFxuICAgICdocmVmJyxcbiAgICAncGF0aCcsXG4gICAgJ3BhdGhuYW1lJyxcbiAgICAncG9ydCcsXG4gICAgJ3Byb3RvY29sJyxcbiAgICAncXVlcnknLFxuICAgICdzZWFyY2gnLFxuICAgICdzbGFzaGVzJyxcbl07XG5mdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmwsIG9wdGlvbnMpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGV4cG9ydHMudXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdXJsXzEuZm9ybWF0KHVybCwgb3B0aW9ucyk7XG59XG5leHBvcnRzLmZvcm1hdFdpdGhWYWxpZGF0aW9uID0gZm9ybWF0V2l0aFZhbGlkYXRpb247XG5leHBvcnRzLlNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJztcbmV4cG9ydHMuU1QgPSBleHBvcnRzLlNQICYmXG4gICAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJztcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTYuMTMuMVxuICogcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cblxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcbi8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cbnZhciBoYXNTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3I7XG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIDogMHhlYWM3O1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucG9ydGFsJykgOiAweGVhY2E7XG52YXIgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZyYWdtZW50JykgOiAweGVhY2I7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN0cmljdF9tb2RlJykgOiAweGVhY2M7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb2ZpbGVyJykgOiAweGVhZDI7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb3ZpZGVyJykgOiAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29udGV4dCcpIDogMHhlYWNlOyAvLyBUT0RPOiBXZSBkb24ndCB1c2UgQXN5bmNNb2RlIG9yIENvbmN1cnJlbnRNb2RlIGFueW1vcmUuIFRoZXkgd2VyZSB0ZW1wb3Jhcnlcbi8vICh1bnN0YWJsZSkgQVBJcyB0aGF0IGhhdmUgYmVlbiByZW1vdmVkLiBDYW4gd2UgcmVtb3ZlIHRoZSBzeW1ib2xzP1xuXG52YXIgUkVBQ1RfQVNZTkNfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuYXN5bmNfbW9kZScpIDogMHhlYWNmO1xudmFyIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29uY3VycmVudF9tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZvcndhcmRfcmVmJykgOiAweGVhZDA7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlJykgOiAweGVhZDE7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpIDogMHhlYWQ4O1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0Lm1lbW8nKSA6IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5sYXp5JykgOiAweGVhZDQ7XG52YXIgUkVBQ1RfQkxPQ0tfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmJsb2NrJykgOiAweGVhZDk7XG52YXIgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZ1bmRhbWVudGFsJykgOiAweGVhZDU7XG52YXIgUkVBQ1RfUkVTUE9OREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5yZXNwb25kZXInKSA6IDB4ZWFkNjtcbnZhciBSRUFDVF9TQ09QRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc2NvcGUnKSA6IDB4ZWFkNztcblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyB8fCAvLyBOb3RlOiBpdHMgdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgaWYgaXQncyBhIHBvbHlmaWxsLlxuICB0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUkVTUE9OREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfU0NPUEVfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9CTE9DS19UWVBFKTtcbn1cblxuZnVuY3Rpb24gdHlwZU9mKG9iamVjdCkge1xuICBpZiAodHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsKSB7XG4gICAgdmFyICQkdHlwZW9mID0gb2JqZWN0LiQkdHlwZW9mO1xuXG4gICAgc3dpdGNoICgkJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9FTEVNRU5UX1RZUEU6XG4gICAgICAgIHZhciB0eXBlID0gb2JqZWN0LnR5cGU7XG5cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgY2FzZSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICAgICAgICByZXR1cm4gdHlwZTtcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB2YXIgJCR0eXBlb2ZUeXBlID0gdHlwZSAmJiB0eXBlLiQkdHlwZW9mO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKCQkdHlwZW9mVHlwZSkge1xuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2ZUeXBlO1xuXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59IC8vIEFzeW5jTW9kZSBpcyBkZXByZWNhdGVkIGFsb25nIHdpdGggaXNBc3luY01vZGVcblxudmFyIEFzeW5jTW9kZSA9IFJFQUNUX0FTWU5DX01PREVfVFlQRTtcbnZhciBDb25jdXJyZW50TW9kZSA9IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xudmFyIENvbnRleHRDb25zdW1lciA9IFJFQUNUX0NPTlRFWFRfVFlQRTtcbnZhciBDb250ZXh0UHJvdmlkZXIgPSBSRUFDVF9QUk9WSURFUl9UWVBFO1xudmFyIEVsZW1lbnQgPSBSRUFDVF9FTEVNRU5UX1RZUEU7XG52YXIgRm9yd2FyZFJlZiA9IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG52YXIgRnJhZ21lbnQgPSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xudmFyIExhenkgPSBSRUFDVF9MQVpZX1RZUEU7XG52YXIgTWVtbyA9IFJFQUNUX01FTU9fVFlQRTtcbnZhciBQb3J0YWwgPSBSRUFDVF9QT1JUQUxfVFlQRTtcbnZhciBQcm9maWxlciA9IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG52YXIgU3RyaWN0TW9kZSA9IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG52YXIgU3VzcGVuc2UgPSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xudmFyIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gZmFsc2U7IC8vIEFzeW5jTW9kZSBzaG91bGQgYmUgZGVwcmVjYXRlZFxuXG5mdW5jdGlvbiBpc0FzeW5jTW9kZShvYmplY3QpIHtcbiAge1xuICAgIGlmICghaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUpIHtcbiAgICAgIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gdHJ1ZTsgLy8gVXNpbmcgY29uc29sZVsnd2FybiddIHRvIGV2YWRlIEJhYmVsIGFuZCBFU0xpbnRcblxuICAgICAgY29uc29sZVsnd2FybiddKCdUaGUgUmVhY3RJcy5pc0FzeW5jTW9kZSgpIGFsaWFzIGhhcyBiZWVuIGRlcHJlY2F0ZWQsICcgKyAnYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBSZWFjdCAxNysuIFVwZGF0ZSB5b3VyIGNvZGUgdG8gdXNlICcgKyAnUmVhY3RJcy5pc0NvbmN1cnJlbnRNb2RlKCkgaW5zdGVhZC4gSXQgaGFzIHRoZSBleGFjdCBzYW1lIEFQSS4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHx8IHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0Q29uc3VtZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0UHJvdmlkZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRWxlbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRm9yd2FyZFJlZihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xufVxuZnVuY3Rpb24gaXNGcmFnbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNMYXp5KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0xBWllfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTWVtbyhvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9NRU1PX1RZUEU7XG59XG5mdW5jdGlvbiBpc1BvcnRhbChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QT1JUQUxfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUHJvZmlsZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3RyaWN0TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdXNwZW5zZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xufVxuXG5leHBvcnRzLkFzeW5jTW9kZSA9IEFzeW5jTW9kZTtcbmV4cG9ydHMuQ29uY3VycmVudE1vZGUgPSBDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuQ29udGV4dENvbnN1bWVyID0gQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5Db250ZXh0UHJvdmlkZXIgPSBDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLkVsZW1lbnQgPSBFbGVtZW50O1xuZXhwb3J0cy5Gb3J3YXJkUmVmID0gRm9yd2FyZFJlZjtcbmV4cG9ydHMuRnJhZ21lbnQgPSBGcmFnbWVudDtcbmV4cG9ydHMuTGF6eSA9IExhenk7XG5leHBvcnRzLk1lbW8gPSBNZW1vO1xuZXhwb3J0cy5Qb3J0YWwgPSBQb3J0YWw7XG5leHBvcnRzLlByb2ZpbGVyID0gUHJvZmlsZXI7XG5leHBvcnRzLlN0cmljdE1vZGUgPSBTdHJpY3RNb2RlO1xuZXhwb3J0cy5TdXNwZW5zZSA9IFN1c3BlbnNlO1xuZXhwb3J0cy5pc0FzeW5jTW9kZSA9IGlzQXN5bmNNb2RlO1xuZXhwb3J0cy5pc0NvbmN1cnJlbnRNb2RlID0gaXNDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuaXNDb250ZXh0Q29uc3VtZXIgPSBpc0NvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuaXNDb250ZXh0UHJvdmlkZXIgPSBpc0NvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuaXNFbGVtZW50ID0gaXNFbGVtZW50O1xuZXhwb3J0cy5pc0ZvcndhcmRSZWYgPSBpc0ZvcndhcmRSZWY7XG5leHBvcnRzLmlzRnJhZ21lbnQgPSBpc0ZyYWdtZW50O1xuZXhwb3J0cy5pc0xhenkgPSBpc0xhenk7XG5leHBvcnRzLmlzTWVtbyA9IGlzTWVtbztcbmV4cG9ydHMuaXNQb3J0YWwgPSBpc1BvcnRhbDtcbmV4cG9ydHMuaXNQcm9maWxlciA9IGlzUHJvZmlsZXI7XG5leHBvcnRzLmlzU3RyaWN0TW9kZSA9IGlzU3RyaWN0TW9kZTtcbmV4cG9ydHMuaXNTdXNwZW5zZSA9IGlzU3VzcGVuc2U7XG5leHBvcnRzLmlzVmFsaWRFbGVtZW50VHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZTtcbmV4cG9ydHMudHlwZU9mID0gdHlwZU9mO1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCJpbXBvcnQgQXBwIGZyb20gXCIuLi9jb21wb25lbnRzL0FwcFwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXIvSG9tZUhlYWRlclwiO1xuaW1wb3J0IHN0eWxlZCwgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4uL2NvbXBvbmVudHMvdGhlbWVcIjtcbmltcG9ydCB7IHNtYWxsRm9udCwgd2lkZUZvbnQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9zaGFyZWQvaGVscGVyc1wiO1xuLy8gaW1wb3J0IFR5cGluZyBmcm9tIFwicmVhY3QtdHlwaW5nLWFuaW1hdGlvblwiO1xuaW1wb3J0IFR5cGlzdCBmcm9tIFwicmVhY3QtdHlwaXN0XCI7XG5pbXBvcnQgVHlwaXN0TG9vcCBmcm9tIFwicmVhY3QtdHlwaXN0LWxvb3BcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgTG9naW5QYWdlIGZyb20gXCIuL2xvZ2luXCI7XG5jb25zdCBDb29raWUgPSByZXF1aXJlKFwianMtY29va2llXCIpO1xuXG5sZXQgY3Vyc29yID0ge1xuICBibGluazogdHJ1ZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgLy8gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gIGNvbnN0IGNvb2sgPSBDb29raWUuZ2V0KFwiaXNBdXRoXCIpO1xuICBpZiAoISFjb29rKSB7XG4gICAgUm91dGVyLnB1c2goXCIvZGFzaGJvYXJkXCIpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiA8TG9naW5QYWdlIC8+O1xuICB9XG4gIC8vIH1cbiAgLy8gcmVuZGVyKCkge1xuICAvLyByZXR1cm4gKFxuICAvLyAgIDxBcHA+XG4gIC8vICAgICA8SGVhZGVyIHN0eWxlPXt7IG1hcmdpbjogXCIwXCIgfX0gLz5cbiAgLy8gICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZShmYWxzZSl9PlxuICAvLyAgICAgICA8T3V0ZXJXcmFwcGVyIHN0eWxlPXt7IG1hcmdpbjogXCIwXCIgfX0+XG4gIC8vICAgICAgICAgPFdyYXBwZXI+XG4gIC8vICAgICAgICAgICA8Um93T25lPlxuICAvLyAgICAgICAgICAgICA8SW5uZXJSb3dDb250YWluZXI+XG4gIC8vICAgICAgICAgICAgICAgPGRpdlxuICAvLyAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMjAwcHhcIiwgaGVpZ2h0OiBcImF1dG9cIiwgbWFyZ2luOiBcImF1dG9cIiB9fVxuICAvLyAgICAgICAgICAgICAgID5cbiAgLy8gICAgICAgICAgICAgICAgIDxpbWdcbiAgLy8gICAgICAgICAgICAgICAgICAgc3JjPVwiL3N0YXRpYy9haTIuc3ZnXCJcbiAgLy8gICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiBcImF1dG9cIiwgbWF4V2lkdGg6IFwiMjAwcHhcIiB9fVxuICAvLyAgICAgICAgICAgICAgICAgLz5cbiAgLy8gICAgICAgICAgICAgICA8L2Rpdj5cbiAgLy8gICAgICAgICAgICAgPC9Jbm5lclJvd0NvbnRhaW5lcj5cbiAgLy8gICAgICAgICAgICAgPElubmVyUm93Q29udGFpbmVyPlxuICAvLyAgICAgICAgICAgICAgIDxUeHREaXY+XG4gIC8vICAgICAgICAgICAgICAgICA8VHlwaXN0TG9vcCBpbnRlcnZhbD17NTAwfT5cbiAgLy8gICAgICAgICAgICAgICAgICAge1tcImxvZ1wiLCBcImltcHJvdmVcIiwgXCJzeXN0ZW1hdGl6ZVwiXS5tYXAodGV4dCA9PiAoXG4gIC8vICAgICAgICAgICAgICAgICAgICAgPFR5cGlzdCBrZXk9e3RleHR9IHN0ZFR5cGluZ0RlbGF5PXszNX0gY3Vyc29yPXtjdXJzb3J9PlxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3RleHR9PC9zcGFuPlxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgPFR5cGlzdC5CYWNrc3BhY2UgY291bnQ9e3RleHQubGVuZ3RofSBkZWxheT17MjIwMH0gLz5cbiAgLy8gICAgICAgICAgICAgICAgICAgICA8L1R5cGlzdD5cbiAgLy8gICAgICAgICAgICAgICAgICAgKSl9XG4gIC8vICAgICAgICAgICAgICAgICA8L1R5cGlzdExvb3A+XG4gIC8vICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiMXB4XCIgfX0+eW91ciB0cmFkaW5nPC9kaXY+XG4gIC8vICAgICAgICAgICAgICAgPC9UeHREaXY+XG4gIC8vICAgICAgICAgICAgIDwvSW5uZXJSb3dDb250YWluZXI+XG4gIC8vICAgICAgICAgICAgIDxJbm5lclJvd0NvbnRhaW5lckJsYWNrPlxuICAvLyAgICAgICAgICAgICAgIDxUeHREaXZCbGFjazIgY2xhc3NOYW1lPVwiaGVsbG9cIj5cbiAgLy8gICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2lnbnVwXCI+XG4gIC8vICAgICAgICAgICAgICAgICAgIDxTaWduVXBCdXR0b24+XG4gIC8vICAgICAgICAgICAgICAgICAgICAgc3RhcnQgYXV0b21hdGljYWxseSBsb2dnaW5nIHlvdXIgdHJhZGVzXG4gIC8vICAgICAgICAgICAgICAgICAgIDwvU2lnblVwQnV0dG9uPlxuICAvLyAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAvLyAgICAgICAgICAgICAgIDwvVHh0RGl2QmxhY2syPlxuICAvLyAgICAgICAgICAgICA8L0lubmVyUm93Q29udGFpbmVyQmxhY2s+XG4gIC8vICAgICAgICAgICA8L1Jvd09uZT5cbiAgLy8gICAgICAgICA8L1dyYXBwZXI+XG4gIC8vICAgICAgIDwvT3V0ZXJXcmFwcGVyPlxuICAvLyAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAvLyAgIDwvQXBwPlxuICAvLyApO1xuICAvLyB9XG59XG5cbmNvbnN0IE91dGVyV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5mb3JlZ3JvdW5kfTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbmA7XG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAwIDEwdnc7XG4gIGhlaWdodDogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmZvcmVncm91bmR9O1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICBtYXJnaW46IDAgNXZ3O1xuICB9XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIG1hcmdpbjogMDtcbiAgfVxuYDtcblxuY29uc3QgU2lnblVwQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgJHtzbWFsbEZvbnR9XG4gIHBhZGRpbmc6IDhweCAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJhY2tncm91bmQ6ICMxODkwZmY7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDIwcHg7XG5gO1xuXG5jb25zdCBUeHREaXYgPSBzdHlsZWQuZGl2YFxuICAke3dpZGVGb250fVxuICBtYXgtd2lkdGg6IDI0MHB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuYDtcbmNvbnN0IFR4dERpdkJsYWNrID0gc3R5bGVkLmRpdmBcbiAgJHt3aWRlRm9udH1cbiAgbWF4LXdpZHRoOiA0NTBweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG5gO1xuY29uc3QgVHh0RGl2QmxhY2syID0gc3R5bGVkLmRpdmBcbiAgJHt3aWRlRm9udH1cbiAgbWF4LXdpZHRoOiA1NTBweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi10b3A6IDI1cHg7XG5gO1xuXG5jb25zdCBSb3dPbmUgPSBzdHlsZWQuZGl2YFxuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmZvcmVncm91bmR9O1xuYDtcblxuY29uc3QgSW5uZXJSb3dDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbmA7XG5jb25zdCBJbm5lclJvd0NvbnRhaW5lckJsYWNrID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDI4MHB4O1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgbWFyZ2luLWJvdHRvbTogNjBweDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcblxuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xuICB9XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cbmA7XG4iLCJpbXBvcnQgQXBwIGZyb20gXCIuLi9jb21wb25lbnRzL0FwcFwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyXCI7XG5pbXBvcnQgSGVhZGVyTG9nbyBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXIvTG9nb1wiO1xuaW1wb3J0IHN0eWxlZCwgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4uL2NvbXBvbmVudHMvdGhlbWVcIjtcbmltcG9ydCBMb2dpbkZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZm9ybS9Mb2dpbkZvcm1cIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBzbWFsbEZvbnQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9zaGFyZWQvaGVscGVyc1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5sZXQgQ29va2llID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW5QYWdlKCkge1xuICBsZXQgY29vayA9IENvb2tpZS5nZXQoXCJpc0F1dGhcIikgPT09IFwidHJ1ZVwiO1xuICBjb25zb2xlLmxvZyhjb29rKTtcbiAgaWYgKCEhY29vaykge1xuICAgIFJvdXRlci5wdXNoKFwiL2Rhc2hib2FyZFwiKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEFwcD5cbiAgICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lKGZhbHNlKX0+XG4gICAgICAgICAgPFdyYXBwZXI+XG4gICAgICAgICAgICA8SGVhZGVyTG9nb0Rpdj5cbiAgICAgICAgICAgICAgPEhlYWRlckxvZ28gLz5cbiAgICAgICAgICAgIDwvSGVhZGVyTG9nb0Rpdj5cbiAgICAgICAgICAgIDxMb2dpbkZvcm0gLz5cbiAgICAgICAgICAgIDxBbm5vdGF0aW9uMT5cbiAgICAgICAgICAgICAgQml0c0pvdXJuYWwgaXMgYW4gYXV0b21hdGVkIHRyYWRlIGpvdXJuYWwgZm9yIEJpdG1leC57XCIgXCJ9XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcmVnaXN0ZXJcIj5SZWdpc3RlcjwvTGluaz4gZm9yIG91ciBmcmVlIGJldGEgb3Igdmlld1xuICAgICAgICAgICAgICBkZW1vcyBvbiBZb3VUdWJlLlxuICAgICAgICAgICAgPC9Bbm5vdGF0aW9uMT5cbiAgICAgICAgICA8L1dyYXBwZXI+XG4gICAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICAgIDwvQXBwPlxuICAgICk7XG4gIH1cbn1cbmV4cG9ydCBjb25zdCBIZWFkZXJMb2dvRGl2ID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luOiAxNXB4IGF1dG87XG4gIG1hcmdpbi10b3A6IDIwdmg7XG5gO1xuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcblxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgbWFyZ2luOiAwIDEwdnc7XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAgIG1hcmdpbjogMCA1dnc7XG4gIH1cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAwO1xuICB9XG5gO1xuZXhwb3J0IGNvbnN0IEFubm90YXRpb24xID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luOiAxMXB4IGF1dG87XG4gICR7c21hbGxGb250fTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIG1heC13aWR0aDogMTh2dztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIGNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUubXV0ZWRUZXh0fTtcbmA7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLXRhZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcy1jb29raWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9ieFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb2J4LXJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlcy1leGFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1hcG9sbG9cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZGF0ZXBpY2tlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10eXBpc3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtdHlwaXN0LWxvb3BcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RzdHJhcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1cmxcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==