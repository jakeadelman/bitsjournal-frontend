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



/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", null, children);
});

/***/ }),

/***/ "./components/Form2/FormWrapper.js":
/*!*****************************************!*\
  !*** ./components/Form2/FormWrapper.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var FormWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "FormWrapper",
  componentId: "sc-1970mg2-0"
})(["position:relative;overflow:hidden;margin:0 auto;border:1px solid ", ";border-radius:2px;width:375px;padding:24px;background-color:", ";@media (max-width:768px){padding:16px;}@media (max-width:", "){border-radius:0;border-left:none;border-right:none;}"], function (props) {
  return props.theme.border;
}, function (props) {
  return props.theme.foreground;
}, function (props) {
  return props.wide ? "600px" : "375px";
});
/* harmony default export */ __webpack_exports__["default"] = (FormWrapper); // max-width: ${props => (props.wide ? "600px" : "375px")};

/***/ }),

/***/ "./components/Form2/Input.js":
/*!***********************************!*\
  !*** ./components/Form2/Input.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
 // import { transition } from '../helpers';

var Input = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.input.withConfig({
  displayName: "Input",
  componentId: "sc-9ditcq-0"
})(["--border:", ";--shadow:", ";display:block;", ";border-radius:3px;width:100%;padding:8px;background-color:", ";font-size:15px;color:", ";appearance:none;outline:none;resize:vertical;:hover,:focus{border:1px solid var(--border);}:focus{box-shadow:0 0 0 2px var(--shadow);}"], function (props) {
  return props.error ? props.theme.error : props.theme.accent;
}, function (props) {
  return props.error ? props.theme.error + "4d" : props.theme.accent + "4d";
}, function (props) {
  return props.error ? "\n    border: 1px solid var(--border)\n    " : "\n    border: 1px solid ".concat(props.theme.border, "\n  ");
}, function (props) {
  return props.theme.inputBackground;
}, function (props) {
  return props.theme.normalText;
});
/* harmony default export */ __webpack_exports__["default"] = (Input);

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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../theme */ "./components/theme.js");
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Logo */ "./components/Header/Logo.js");
/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header.scss */ "./components/Header/header.scss");
/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_header_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shared_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/helpers */ "./components/shared/helpers.js");


 // import Dropdown from "./Dropdown";
// import Head from "Header/Head";








var Cookie = __webpack_require__(/*! js-cookie */ "js-cookie");

var Header = function Header(_ref) {
  var router = _ref.router;
  var cook = Cookie.get("isAuth");
  console.log(cook);
  console.log(router.pathname);
  var authOrNo = cook === "true";

  if (!authOrNo) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
      theme: Object(_theme__WEBPACK_IMPORTED_MODULE_4__["default"])(false)
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapper, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Logo__WEBPACK_IMPORTED_MODULE_5__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      prefetch: true,
      href: "/login"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledLink, {
      className: router.pathname === "/login" ? "is-active" : ""
    }, "login")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      prefetch: true,
      href: "/register"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledLink, {
      className: router.pathname === "/register" ? "is-active" : ""
    }, "register"))));
  } else {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
      theme: Object(_theme__WEBPACK_IMPORTED_MODULE_4__["default"])(false)
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapper, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Logo__WEBPACK_IMPORTED_MODULE_5__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      prefetch: true,
      href: "/settings"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledLink, {
      className: router.pathname === "/settings" ? "is-active" : ""
    }, "settings")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      prefetch: true,
      href: "/logout"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledLink, null, "logout"))));
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Header));
var StyledLink = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "Header__StyledLink",
  componentId: "sc-19c2vr5-0"
})(["", ";", ";", ";margin:0;color:", ";position:relative;cursor:pointer;::after{", ";content:\"\";position:absolute;left:0;right:0;bottom:0;opacity:0;border-bottom:1px solid ", ";}:hover{opacity:1;color:", ";}:hover::after{opacity:1;border-bottom:1px solid ", ";}&.active::after{left:0;right:0;bottom:0;border-bottom:3px solid ", ";}font-weight:700;letter-spacing:0.05em;font-size:12px;text-transform:uppercase;"], _shared_helpers__WEBPACK_IMPORTED_MODULE_7__["headerItem"], _shared_helpers__WEBPACK_IMPORTED_MODULE_7__["wideFont"], _shared_helpers__WEBPACK_IMPORTED_MODULE_7__["link"], function (props) {
  return props.theme.mutedText;
}, Object(_shared_helpers__WEBPACK_IMPORTED_MODULE_7__["transition"])("opacity", "border-bottom-width"), function (props) {
  return props.theme.accent;
}, function (props) {
  return props.theme.accent;
}, function (props) {
  return props.theme.accent;
}, function (props) {
  return props.theme.accent;
});
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.header.withConfig({
  displayName: "Header__Wrapper",
  componentId: "sc-19c2vr5-1"
})(["position:sticky;z-index:10;top:0;display:flex;align-items:stretch;margin-bottom:24px;border-bottom:2px solid #eee;height:68px;padding:0 10vw;background-color:", ";user-select:none;@media (max-width:425px){margin-bottom:16px;height:40px;}@media (max-width:768px){padding:0;}"], function (props) {
  return props.theme.foreground;
}); // const Wrapper = styled.header`
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../theme */ "./components/theme.js");
/* harmony import */ var _shared_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/helpers */ "./components/shared/helpers.js");
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Logo */ "./components/Header/Logo.js");









var Cookie = __webpack_require__(/*! js-cookie */ "js-cookie");

var Header2 = function Header2(_ref) {
  var pathname = _ref.router.pathname;
  var cook = Cookie.get("isAuth");

  if (!cook) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
      theme: Object(_theme__WEBPACK_IMPORTED_MODULE_4__["default"])(false)
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapper, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Logo__WEBPACK_IMPORTED_MODULE_6__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      prefetch: true,
      href: "/login"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledLink, {
      className: pathname === "/login" ? "is-active" : ""
    }, "login")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      prefetch: true,
      href: "/register"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledLink, {
      className: pathname === "/register" ? "is-active" : ""
    }, "register"))));
  } else {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
      theme: Object(_theme__WEBPACK_IMPORTED_MODULE_4__["default"])(false)
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapper, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Logo__WEBPACK_IMPORTED_MODULE_6__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      prefetch: true,
      href: "/dashboard"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledLink, {
      className: pathname === "/register" ? "is-active" : ""
    }, "dashboard"))));
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Header2));
var StyledLink = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "HomeHeader__StyledLink",
  componentId: "tls1pp-0"
})(["", ";", ";", ";margin:0;color:", ";position:relative;cursor:pointer;::after{", ";content:\"\";position:absolute;left:0;right:0;bottom:0;opacity:0;border-bottom:1px solid ", ";}:hover{opacity:1;color:", ";}:hover::after{opacity:1;border-bottom:1px solid ", ";}&.active::after{left:0;right:0;bottom:0;border-bottom:3px solid ", ";}font-weight:700;letter-spacing:0.05em;font-size:12px;text-transform:uppercase;"], _shared_helpers__WEBPACK_IMPORTED_MODULE_5__["headerItem"], _shared_helpers__WEBPACK_IMPORTED_MODULE_5__["wideFont"], _shared_helpers__WEBPACK_IMPORTED_MODULE_5__["link"], function (props) {
  return props.theme.mutedText;
}, Object(_shared_helpers__WEBPACK_IMPORTED_MODULE_5__["transition"])("opacity", "border-bottom-width"), function (props) {
  return props.theme.accent;
}, function (props) {
  return props.theme.accent;
}, function (props) {
  return props.theme.accent;
}, function (props) {
  return props.theme.accent;
});
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.header.withConfig({
  displayName: "HomeHeader__Wrapper",
  componentId: "tls1pp-1"
})(["position:sticky;z-index:10;top:0;display:flex;align-items:stretch;margin-bottom:0px;box-shadow:0 4px 12px ", ";border-bottom:1px solid ", ";height:48px;padding:0 10vw;background-color:", ";user-select:none;@media (max-width:425px){margin-bottom:0px;height:40px;}@media (max-width:768px){padding:0;margin-bottom:0px;}"], function (props) {
  return props.theme.shadow;
}, function (props) {
  return props.theme.border;
}, function (props) {
  return props.theme.foreground;
});

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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/helpers */ "./components/shared/helpers.js");





var bitcoinLogo = function bitcoinLogo(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", props, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("linearGradient", {
    id: "a",
    x1: "0%",
    y1: "0%",
    x2: "0%",
    y2: "100%"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
    offset: "0%",
    stopColor: "#f9aa4b"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
    offset: "100%",
    stopColor: "#f7931a"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M63.036 39.741c-4.274 17.143-21.637 27.576-38.782 23.301C7.116 58.768-3.317 41.404.959 24.262 5.23 7.117 22.594-3.317 39.734.957c17.144 4.274 27.576 21.64 23.302 38.784z",
    fill: "url(#a)",
    transform: "scale(.01563)"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M.72.429C.73.362.68.326.61.303l.023-.09L.578.198.556.287a2.295 2.295 0 0 0-.044-.01l.022-.09L.48.175l-.022.09A1.835 1.835 0 0 1 .422.256L.346.236l-.014.06.04.01c.022.005.026.02.025.031L.371.44c.002 0 .004 0 .006.002L.371.44.335.584C.333.591.325.601.31.597L.27.587.243.65l.072.018.039.01L.33.769l.055.014.022-.09.044.011-.022.09.054.013.023-.09c.094.017.164.01.194-.075C.725.574.699.535.65.51.685.501.712.477.72.43zM.595.605C.578.673.463.635.426.627l.03-.121c.037.01.157.027.139.099zM.612.428C.596.49.501.458.47.45L.497.34c.031.008.131.022.115.087z",
    fill: "#fff"
  }));
};

bitcoinLogo.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "512",
  height: "512",
  viewBox: "0 0 1 1",
  preserveAspectRatio: "xMidYMid"
};

var HeaderLogo = function HeaderLogo() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Logo, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    prefetch: true,
    href: "/"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/bitcoin-logo.svg",
    style: {
      margin: "auto",
      maxWidth: "28px"
    }
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    prefetch: true,
    href: "/"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    style: {
      marginLeft: "-2px"
    }
  }, "its Journal")));
};

/* harmony default export */ __webpack_exports__["default"] = (HeaderLogo);
var Logo = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Logo",
  componentId: "sc-195qc4m-0"
})(["", " margin-right:auto;font-size:21px;font-weight:500;color:", ";text-decoration:none;@media (max-width:425px){padding:0 8px 0 16px;font-size:19px;}"], _shared_helpers__WEBPACK_IMPORTED_MODULE_3__["headerItem"], function (props) {
  return props.theme.normalText;
}); // display: flex;
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

/***/ "./components/HomepageSvg.js":
/*!***********************************!*\
  !*** ./components/HomepageSvg.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HomepageSvg; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-pose */ "react-pose");
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_pose__WEBPACK_IMPORTED_MODULE_1__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Box = react_pose__WEBPACK_IMPORTED_MODULE_1___default.a.div({
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  }
});

var HomepageSvg =
/*#__PURE__*/
function (_React$Component) {
  _inherits(HomepageSvg, _React$Component);

  function HomepageSvg(props) {
    var _this;

    _classCallCheck(this, HomepageSvg);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(HomepageSvg).call(this, props));
    _this.state = {
      visible: true
    };
    return _this;
  }

  _createClass(HomepageSvg, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      setInterval(function () {
        _this2.setState({
          visible: !_this2.state.visible
        });
      }, 4000);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Box, {
        pose: this.state.visible ? "visible" : "hidden"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        version: "1.1",
        style: {
          height: "100%",
          width: "100%"
        },
        viewBox: "0 0 600 600"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M394.668,0H32.001c-17.673,0-32,14.327-32,32v256c0,17.673,14.327,32,32,32h138.667v-21.333H32.001 c-5.891,0-10.667-4.776-10.667-10.667V32c0-5.891,4.776-10.667,10.667-10.667h362.667c5.891,0,10.667,4.776,10.667,10.667v192 h21.333V32C426.668,14.327,412.341,0,394.668,0z"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
        x: "128.001",
        y: "309.333",
        width: "21.333",
        height: "64"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M74.668,256c-5.891,0-10.667-4.776-10.667-10.667V224H42.668v21.333c0,17.673,14.327,32,32,32h21.333V256H74.668z"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
        x: "42.668",
        y: "181.333",
        width: "21.333",
        height: "21.333"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M389.836,225.941c-21.736-21.74-51.219-33.953-81.961-33.952c-64.006,0.003-115.891,51.892-115.889,115.898 c0.003,64.006,51.892,115.891,115.898,115.889c30.732-0.001,60.204-12.208,81.937-33.937 C435.084,344.584,435.091,271.205,389.836,225.941z M307.82,402.453c-52.224-0.018-94.546-42.368-94.528-94.592 c0.018-52.224,42.368-94.546,94.592-94.528c25.101-0.068,49.184,9.92,66.869,27.733c17.718,17.738,27.667,41.787,27.659,66.859 C402.394,360.149,360.044,402.471,307.82,402.453z"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M508.876,464l-66.955-66.933c-2-2-4.713-3.125-7.541-3.125c-2.829,0.001-5.541,1.125-7.541,3.125l-29.76,29.76 c-4.164,4.165-4.164,10.917,0,15.083l66.955,66.965c2,2.001,4.713,3.125,7.541,3.125v0c2.833-0.009,5.547-1.145,7.541-3.157 l29.76-29.76C513.04,474.917,513.04,468.165,508.876,464z M471.574,486.251l-51.872-51.883l14.677-14.677l51.872,51.883 L471.574,486.251z"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
        x: "390.231",
        y: "374.581",
        transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -166.0486 400.894)",
        width: "21.333",
        height: "52.608"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M309.334,234.667V256c29.441,0.035,53.298,23.893,53.333,53.333h21.333C383.954,268.116,350.552,234.714,309.334,234.667z "
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
        x: "106.668",
        y: "362.667",
        width: "85.333",
        height: "21.333"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M160.001,42.667c-17.673,0-32,14.327-32,32c0,17.673,14.327,32,32,32s32-14.327,32-32 C192.001,56.994,177.674,42.667,160.001,42.667z M160.001,85.333c-5.891,0-10.667-4.776-10.667-10.667 c0-5.891,4.776-10.667,10.667-10.667s10.667,4.776,10.667,10.667C170.668,80.558,165.892,85.333,160.001,85.333z"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M234.668,117.333c-17.673,0-32,14.327-32,32c0,17.673,14.327,32,32,32c17.673,0,32-14.327,32-32 C266.668,131.66,252.341,117.333,234.668,117.333z M234.668,160c-5.891,0-10.667-4.776-10.667-10.667 c0-5.891,4.776-10.667,10.667-10.667c5.891,0,10.667,4.776,10.667,10.667C245.334,155.224,240.559,160,234.668,160z"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
        x: "84.956",
        y: "101.336",
        transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -43.269 119.5445)",
        width: "75.424",
        height: "21.333"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
        x: "186.623",
        y: "74.317",
        transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -21.4319 172.3178)",
        width: "21.333",
        height: "75.424"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M309.334,42.667c-17.673,0-32,14.327-32,32c0,17.673,14.327,32,32,32c17.673,0,32-14.327,32-32 C341.335,56.994,327.008,42.667,309.334,42.667z M309.334,85.333c-5.891,0-10.667-4.776-10.667-10.667 c0-5.891,4.776-10.667,10.667-10.667c5.891,0,10.667,4.776,10.667,10.667C320.001,80.558,315.225,85.333,309.334,85.333z"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
        x: "234.285",
        y: "101.373",
        transform: "matrix(0.7071 -0.7071 0.7071 0.7071 0.4421 225.1463)",
        width: "75.424",
        height: "21.333"
      })))));
    }
  }]);

  return HomepageSvg;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./components/LoginForm2.js":
/*!**********************************!*\
  !*** ./components/LoginForm2.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Form2_FormWrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Form2/FormWrapper */ "./components/Form2/FormWrapper.js");
/* harmony import */ var _Form2_Input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Form2/Input */ "./components/Form2/Input.js");
/* harmony import */ var _form_Label__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./form/Label */ "./components/form/Label.js");
/* harmony import */ var _shared_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/Button */ "./components/shared/Button.js");


function _templateObject() {
  var data = _taggedTemplateLiteral(["\n        mutation login($email: String!, $password: String!) {\n          login(email: $email, password: $password)\n        }\n      "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






 // import { observer } from "mobx-react-lite";
// import { UserStoreContext } from "../stores/UserStore.ts";







var Cookie = __webpack_require__(/*! js-cookie */ "js-cookie");

var LoginForm = function LoginForm() {
  // const userStore = useContext(UserStoreContext);
  function handleSubmit(_x, _x2) {
    return _handleSubmit.apply(this, arguments);
  }

  function _handleSubmit() {
    _handleSubmit = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event, client) {
      var form, formData, email, password, res, r, isTrue;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();
              form = event.target;
              formData = new window.FormData(form);
              email = formData.get("email");
              password = formData.get("password");
              console.log(email, password);
              form.reset();
              res = client.mutate({
                mutation: graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject()),
                variables: {
                  email: email,
                  password: password
                }
              }); //check if login credentials are correct

              _context.next = 10;
              return res;

            case 10:
              r = _context.sent;
              r = r.data.login;
              console.log(r);
              isTrue = r == "true";

              if (!(isTrue == true)) {
                _context.next = 19;
                break;
              }

              Cookie.set("isAuth", "true"); // userStore.isAuth = true;

              next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/dashboard");
              _context.next = 21;
              break;

            case 19:
              setWrongCredentials(true);
              return _context.abrupt("return");

            case 21:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _handleSubmit.apply(this, arguments);
  }

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      wrongCredentials = _useState2[0],
      setWrongCredentials = _useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["ApolloConsumer"], null, function (client) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Form2_FormWrapper__WEBPACK_IMPORTED_MODULE_8__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledForm, {
      onSubmit: function onSubmit(event) {
        return handleSubmit(event, client);
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(InputWrapper, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_form_Label__WEBPACK_IMPORTED_MODULE_10__["default"], null, "email"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Form2_Input__WEBPACK_IMPORTED_MODULE_9__["default"], {
      placeholder: "",
      name: "email",
      type: "text",
      required: true
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(InputWrapper, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_form_Label__WEBPACK_IMPORTED_MODULE_10__["default"], null, "password"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Form2_Input__WEBPACK_IMPORTED_MODULE_9__["default"], {
      placeholder: "",
      name: "password",
      type: "text",
      required: true
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        display: "flex",
        width: "100%"
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SubmitButton, {
      type: "submit"
    }, "Submit")), wrongCredentials == true ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "login-alert"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Alert"], {
      color: "secondary",
      isOpen: wrongCredentials == true ? true : false
    }, "Wrong login credentials")) : null));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (LoginForm);
var StyledForm = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.form.withConfig({
  displayName: "LoginForm2__StyledForm",
  componentId: "sc-1mwh11w-0"
})(["display:flex;flex-direction:column;align-items:flex-start;", ";"], function (props) {
  return props.loading && "filter: grayscale(0.5) blur(5px) opacity(0.6); pointer-events: none";
});
var SubmitButton = styled_components__WEBPACK_IMPORTED_MODULE_7___default()(_shared_Button__WEBPACK_IMPORTED_MODULE_11__["default"]).withConfig({
  displayName: "LoginForm2__SubmitButton",
  componentId: "sc-1mwh11w-1"
})(["align-self:flex-end;margin-right:0px;margin-left:auto;"]);
var InputWrapper = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.div.withConfig({
  displayName: "LoginForm2__InputWrapper",
  componentId: "sc-1mwh11w-2"
})(["position:relative;margin-bottom:24px;width:100%;"]);

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


var Label = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.label.withConfig({
  displayName: "Label",
  componentId: "sc-1n443xe-0"
})(["", ";display:block;margin-bottom:8px;color:", ";"], _shared_helpers__WEBPACK_IMPORTED_MODULE_1__["smallFont"], function (props) {
  return props.theme.mutedText;
});
/* harmony default export */ __webpack_exports__["default"] = (Label);

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


var Button = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "Button",
  componentId: "sc-1yqwkyz-0"
})(["", ";", ";border:none;border-radius:3px;padding:8px 24px;background-color:", ";cursor:pointer;color:#ffffff;outline:none;:hover{filter:brightness(110%);}:active{filter:brightness(90%);}:focus{box-shadow:0 0 0 2px ", ";}"], Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["transition"])("filter", "box-shadow"), _helpers__WEBPACK_IMPORTED_MODULE_1__["wideFont"], function (props) {
  return props.theme.accent;
}, function (props) {
  return props.theme.accent + "4d";
});
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

var smallFont = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["font-size:12px;font-weight:600;text-transform:uppercase;"]);
var wideFont = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["", ";font-weight:700;letter-spacing:0.05em;"], smallFont);
var fadeKeyframes = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["from{opacity:0;}to{opacity:1;}"]);
var fade = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["animation:", " 0.25s;"], fadeKeyframes);
var transition = function transition(props) {
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["transition:all ", " ease;"], props.slow ? "0.3s" : "0.15s");
};
var headerItem = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["display:flex;align-items:center;flex-shrink:0;padding:0 16px;@media (max-width:425px){padding:0 8px;}"]);
var link = function link(props) {
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["", ";text-underline-position:under;text-decoration:none;color:", ";:hover{", ";color:", ";}"], transition, function (props) {
    return props.theme.normalText;
  }, props.underline && "text-decoration: underline", function (props) {
    return props.theme.accent;
  });
};
var overflow = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"]);

/***/ }),

/***/ "./components/theme.js":
/*!*****************************!*\
  !*** ./components/theme.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var constants = {
  error: "#f5222d",
  vote: "#b6b6b6",
  upvote: "#f9920b",
  downvote: "#2e70ff"
};

var dark = _objectSpread({}, constants, {
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

var light = _objectSpread({}, constants, {
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

var theme = function theme(isDark) {
  return isDark ? dark : light;
};

/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
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
/* harmony import */ var _components_HomepageSvg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/HomepageSvg */ "./components/HomepageSvg.js");
/* harmony import */ var _components_shared_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/shared/helpers */ "./components/shared/helpers.js");
/* harmony import */ var react_typist__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-typist */ "react-typist");
/* harmony import */ var react_typist__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_typist__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_typist_loop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-typist-loop */ "react-typist-loop");
/* harmony import */ var react_typist_loop__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_typist_loop__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login */ "./pages/login.js");






 // import Typing from "react-typing-animation";







var Cookie = __webpack_require__(/*! js-cookie */ "js-cookie");

var cursor = {
  blink: true
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  // componentDidMount() {
  var cook = Cookie.get("isAuth");

  if (!!cook) {
    next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push("/dashboard");
  } else {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_login__WEBPACK_IMPORTED_MODULE_11__["default"], null);
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
var OuterWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "pages__OuterWrapper",
  componentId: "teytsb-0"
})(["background-color:", ";height:100%;margin-bottom:0;padding-bottom:0;"], function (props) {
  return props.theme.foreground;
});
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "pages__Wrapper",
  componentId: "teytsb-1"
})(["display:flex;margin:0 10vw;height:auto;background-color:", ";@media (max-width:1024px){margin:0 5vw;}@media (max-width:768px){margin:0;}"], function (props) {
  return props.theme.foreground;
});
var SignUpButton = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.button.withConfig({
  displayName: "pages__SignUpButton",
  componentId: "teytsb-2"
})(["", " padding:8px 20px;border-radius:2px;background:#1890ff;color:#ffffff;font-size:20px;"], _components_shared_helpers__WEBPACK_IMPORTED_MODULE_6__["smallFont"]);
var TxtDiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "pages__TxtDiv",
  componentId: "teytsb-3"
})(["", " max-width:240px;font-size:15px;text-align:center;margin:auto;display:flex;flex-direction:row;"], _components_shared_helpers__WEBPACK_IMPORTED_MODULE_6__["wideFont"]);
var TxtDivBlack = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "pages__TxtDivBlack",
  componentId: "teytsb-4"
})(["", " max-width:450px;font-size:15px;color:#ffffff;text-align:center;margin:auto;margin-bottom:25px;"], _components_shared_helpers__WEBPACK_IMPORTED_MODULE_6__["wideFont"]);
var TxtDivBlack2 = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "pages__TxtDivBlack2",
  componentId: "teytsb-5"
})(["", " max-width:550px;font-size:15px;color:#ffffff;text-align:center;margin:auto;margin-top:25px;"], _components_shared_helpers__WEBPACK_IMPORTED_MODULE_6__["wideFont"]);
var RowOne = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "pages__RowOne",
  componentId: "teytsb-6"
})(["height:auto;width:100%;display:flex;flex-direction:column;margin-top:100px;background-color:", ";"], function (props) {
  return props.theme.foreground;
});
var InnerRowContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "pages__InnerRowContainer",
  componentId: "teytsb-7"
})(["width:100%;margin-top:20px;margin-bottom:20px;"]);
var InnerRowContainerBlack = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
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
/* harmony import */ var _components_LoginForm2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/LoginForm2 */ "./components/LoginForm2.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_shared_helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/shared/helpers */ "./components/shared/helpers.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);











var Cookie = __webpack_require__(/*! js-cookie */ "js-cookie");

function LoginPage() {
  var cook = Cookie.get("isAuth") === "true";
  console.log(cook);

  if (!!cook) {
    next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push("/dashboard");
  } else {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_App__WEBPACK_IMPORTED_MODULE_1__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_4__["ThemeProvider"], {
      theme: Object(_components_theme__WEBPACK_IMPORTED_MODULE_5__["default"])(false)
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapper, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeaderLogoDiv, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header_Logo__WEBPACK_IMPORTED_MODULE_3__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_LoginForm2__WEBPACK_IMPORTED_MODULE_6__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Annotation1, null, "BitsJournal is an automated trade journal for Bitmex.", " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
      href: "/register"
    }, "Register"), " for our free beta or view demos on YouTube."))));
  }
}
var HeaderLogoDiv = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "login__HeaderLogoDiv",
  componentId: "ljat1g-0"
})(["margin:15px auto;margin-top:20vh;"]);
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "login__Wrapper",
  componentId: "ljat1g-1"
})(["display:flex;flex-direction:column;align-items:flex-start;margin:0 10vw;@media (max-width:1024px){margin:0 5vw;}@media (max-width:768px){display:block;margin:0;}"]);
var Annotation1 = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "login__Annotation1",
  componentId: "ljat1g-2"
})(["margin:11px auto;", ";display:block;margin-bottom:8px;font-weight:500;text-transform:none;max-width:18vw;text-align:center;color:", ";"], _components_shared_helpers__WEBPACK_IMPORTED_MODULE_8__["smallFont"], function (props) {
  return props.theme.mutedText;
});

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

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

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

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

/***/ "react-pose":
/*!*****************************!*\
  !*** external "react-pose" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-pose");

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

/***/ })

/******/ });
//# sourceMappingURL=index.js.map