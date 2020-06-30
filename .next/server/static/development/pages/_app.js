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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./components/Helpers/Functions.js":
/*!*****************************************!*\
  !*** ./components/Helpers/Functions.js ***!
  \*****************************************/
/*! exports provided: formatDateMonthOnly, formatDateShort, formatDateShortWithHour, getStateDate, makeDateHrs, makeDateDays, calcCommission */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDateMonthOnly", function() { return formatDateMonthOnly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDateShort", function() { return formatDateShort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDateShortWithHour", function() { return formatDateShortWithHour; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStateDate", function() { return getStateDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeDateHrs", function() { return makeDateHrs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeDateDays", function() { return makeDateDays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcCommission", function() { return calcCommission; });
// export function formatDateMonthOnly(date) {
//   var monthNames = [
//     "Jan",
//     "Feb",
//     "Mar",
//     "Apr",
//     "May",
//     "Jun",
//     "Jul",
//     "Aug",
//     "Sept",
//     "Oct",
//     "Nov",
//     "Dec",
//   ];
//   let utcDate = date;
//   let theDate = new Date(utcDate);
//   var day = theDate.getDate();
//   var hours = addZeroBefore(theDate.getHours());
//   var mins = addZeroBefore(theDate.getMinutes());
//   var monthIndex = addZeroBefore(theDate.getMonth());
//   var year = addZeroBefore(theDate.getFullYear());
//   return (
//     day + "-" + monthIndex.toString() + "-" + year + " " + hours + ":" + mins
//   );
// }
function formatDateMonthOnly(date) {
  var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
  let utcDate = date;
  let theDate = new Date(utcDate);
  var day = theDate.getDate();
  var hours = addZeroBefore(theDate.getHours());
  var mins = addZeroBefore(theDate.getMinutes());
  var monthIndex = theDate.getMonth(); // var monthIndex = addZeroBefore(theDate.getMonth());

  var year = theDate.getFullYear();
  return day + " " + monthNames[monthIndex] + ", " + hours + ":" + mins;
}
function formatDateShort(date) {
  let utcDate = date;
  let theDate = new Date(utcDate);
  var day = addZeroBefore(theDate.getDate());
  var hours = addZeroBefore(theDate.getHours());
  var mins = addZeroBefore(theDate.getMinutes());
  var monthIndex = addZeroBefore(theDate.getMonth());
  var year = theDate.getFullYear();
  return monthIndex.toString() + "/" + day.toString();
}
function formatDateShortWithHour(date) {
  let utcDate = date;
  let theDate = new Date(utcDate);
  var day = addZeroBefore(theDate.getDate());
  var hours = addZeroBefore(theDate.getHours());
  var mins = addZeroBefore(theDate.getMinutes());
  var monthIndex = addZeroBefore(theDate.getMonth());
  var year = theDate.getFullYear();
  return monthIndex.toString() + "/" + day.toString() + " " + hours.toString() + ":" + mins.toString();
}

function addZeroBefore(n) {
  return (n < 10 ? "0" : "") + n;
}

function getStateDate(input) {
  if (input == "Today") {
    let dates = {};
    dates.end = makeDateHrs(0);
    dates.start = makeDateHrs(24);
    console.log("is today");
    return dates;
  }

  if (input == "Yesterday") {
    let dates = {};
    dates.end = makeDateHrs(1);
    dates.start = makeDateDays(2);
    console.log("is yesterday");
    return dates;
  }

  if (input == "This Week") {
    let dates = {};
    dates.end = makeDateHrs(0);
    dates.start = makeDateDays(7);
    console.log("is this week");
    return dates;
  }

  if (input == "This Month") {
    let dates = {};
    dates.end = makeDateHrs(0);
    dates.start = makeDateDays(30);
    console.log("is this month");
    return dates;
  }
}
function makeDateHrs(hrsBack) {
  if (hrsBack == 0) {
    let dt = new Date(new Date().toUTCString());
    dt = dt.toISOString();
    return dt;
  } else {
    let dt = new Date(new Date().toUTCString());
    dt.setHours(dt.getHours() - hrsBack);
    dt = dt.toISOString();
    return dt;
  }
}
function makeDateDays(num) {
  let dt = new Date(new Date().toUTCString());
  dt.setDate(dt.getDate() - num);
  dt = dt.toISOString();
  console.log("getting days back");
  return dt;
}
function calcCommission(price, side, qty, leavesQty, orderType) {
  let realQty = qty - leavesQty;
  let commission;

  if (orderType == "Market") {
    commission = realQty * 0.0075 / price;
    commission = commission * -1;
  }

  if (orderType.includes("Stop")) {
    commission = realQty * 0.0075 / price;
    commission = commission * -1;
  }

  if (orderType == "Limit") {
    commission = realQty * 0.0025 / price;
  }

  return commission.toFixed(5);
}

/***/ }),

/***/ "./lib/init-apollo.js":
/*!****************************!*\
  !*** ./lib/init-apollo.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return initApollo; });
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-boost */ "apollo-boost");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_boost__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);


let apolloClient = null; // Polyfill fetch() on the server (used by apollo-client)

if (true) {
  global.fetch = isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default.a;
}

function create(initialState) {
  let uri;

  if (false) {} else {
    uri = "http://localhost:4000/graphql"; // Server URL (must be absolute)
  } // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient


  return new apollo_boost__WEBPACK_IMPORTED_MODULE_0__["ApolloClient"]({
    connectToDevTools: false,
    ssrMode: !false,
    // Disables forceFetch on the server (so queries are only run once)
    link: new apollo_boost__WEBPACK_IMPORTED_MODULE_0__["HttpLink"]({
      uri: uri,
      credentials: "include" // Additional fetch() options like `credentials` or `headers`

    }),
    cache: new apollo_boost__WEBPACK_IMPORTED_MODULE_0__["InMemoryCache"]().restore(initialState || {})
  });
}

function initApollo(initialState) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (true) {
    return create(initialState);
  } // Reuse client on the client-side


  if (!apolloClient) {
    apolloClient = create(initialState);
  }

  return apolloClient;
}

/***/ }),

/***/ "./lib/with-apollo-client.js":
/*!***********************************!*\
  !*** ./lib/with-apollo-client.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _init_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./init-apollo */ "./lib/init-apollo.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





/* harmony default export */ __webpack_exports__["default"] = (App => {
  var _class, _temp;

  return _temp = _class = class Apollo extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    static async getInitialProps(ctx) {
      const {
        Component,
        router
      } = ctx;
      let appProps = {};

      if (App.getInitialProps) {
        appProps = await App.getInitialProps(ctx);
      } // Run all GraphQL queries in the component tree
      // and extract the resulting data


      const apollo = Object(_init_apollo__WEBPACK_IMPORTED_MODULE_1__["default"])();

      if (true) {
        try {
          // Run all GraphQL queries
          await Object(react_apollo__WEBPACK_IMPORTED_MODULE_3__["getDataFromTree"])(__jsx(App, _extends({}, appProps, {
            Component: Component,
            router: router,
            apolloClient: apollo
          })));
        } catch (error) {
          // Prevent Apollo Client GraphQL errors from crashing SSR.
          // Handle them in components via the data.error prop:
          // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
          console.error('Error while running `getDataFromTree`', error);
        } // getDataFromTree does not call componentWillUnmount
        // head side effect therefore need to be cleared manually


        next_head__WEBPACK_IMPORTED_MODULE_2___default.a.rewind();
      } // Extract query data from the Apollo store


      const apolloState = apollo.cache.extract();
      return _objectSpread(_objectSpread({}, appProps), {}, {
        apolloState
      });
    }

    constructor(props) {
      super(props);
      this.apolloClient = Object(_init_apollo__WEBPACK_IMPORTED_MODULE_1__["default"])(props.apolloState);
    }

    render() {
      return __jsx(App, _extends({}, this.props, {
        apolloClient: this.apolloClient
      }));
    }

  }, _class.displayName = 'withApollo(App)', _temp;
});

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps(_ref) {
  var {
    Component,
    ctx
  } = _ref;
  var pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    var {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
var warnContainer;
var warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn("Warning: the `Container` in `_app` has been deprecated and should be removed. https://err.sh/zeit/next.js/app-container-deprecated");
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error("Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated");
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_with_apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/with-apollo-client */ "./lib/with-apollo-client.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mobx-react */ "mobx-react");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _stores_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../stores/store */ "./stores/store.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class MyApp extends next_app__WEBPACK_IMPORTED_MODULE_0___default.a {
  static async getInitialProps(appContext) {
    // Get or Create the store with `undefined` as initialState
    // This allows you to set a custom default initialState
    const mobxStore = Object(_stores_store__WEBPACK_IMPORTED_MODULE_5__["initializeStore"])(); // Provide the store to getInitialProps of pages

    appContext.ctx.mobxStore = mobxStore;
    let appProps = await next_app__WEBPACK_IMPORTED_MODULE_0___default.a.getInitialProps(appContext);
    return _objectSpread(_objectSpread({}, appProps), {}, {
      initialMobxState: mobxStore
    });
  }

  constructor(props) {
    super(props);
    const isServer = !false;
    this.mobxStore = isServer ? props.initialMobxState : Object(_stores_store__WEBPACK_IMPORTED_MODULE_5__["initializeStore"])(props.initialMobxState);
  }

  render() {
    const {
      Component,
      pageProps,
      apolloClient
    } = this.props;
    return __jsx(next_app__WEBPACK_IMPORTED_MODULE_0__["Container"], null, __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_3__["ApolloProvider"], {
      client: apolloClient
    }, __jsx(mobx_react__WEBPACK_IMPORTED_MODULE_4__["Provider"], {
      store: this.mobxStore
    }, __jsx(Component, pageProps))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_with_apollo_client__WEBPACK_IMPORTED_MODULE_2__["default"])(MyApp));

/***/ }),

/***/ "./stores/store.js":
/*!*************************!*\
  !*** ./stores/store.js ***!
  \*************************/
/*! exports provided: Store, hydrate, StoreContext, initializeStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return Store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydrate", function() { return hydrate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreContext", function() { return StoreContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeStore", function() { return initializeStore; });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "mobx");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react */ "mobx-react");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mobx_persist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-persist */ "mobx-persist");
/* harmony import */ var mobx_persist__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mobx_persist__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Helpers_Functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Helpers/Functions */ "./components/Helpers/Functions.js");
var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _temp;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }






const isServer = !false;
Object(mobx_react__WEBPACK_IMPORTED_MODULE_1__["useStaticRendering"])(isServer);
let Store = (_class = (_temp = class Store {
  constructor() {
    _initializerDefineProperty(this, "lastUpdate", _descriptor, this);

    _initializerDefineProperty(this, "light", _descriptor2, this);

    _initializerDefineProperty(this, "isAuth", _descriptor3, this);

    _initializerDefineProperty(this, "startDate", _descriptor4, this);

    _initializerDefineProperty(this, "endDate", _descriptor5, this);

    _initializerDefineProperty(this, "symbol", _descriptor6, this);

    _initializerDefineProperty(this, "date", _descriptor7, this);

    _initializerDefineProperty(this, "pnl", _descriptor8, this);

    _initializerDefineProperty(this, "globalHash", _descriptor9, this);

    _initializerDefineProperty(this, "tempNotes", _descriptor10, this);

    _initializerDefineProperty(this, "tempTags", _descriptor11, this);

    _initializerDefineProperty(this, "hasTempTags", _descriptor12, this);

    _initializerDefineProperty(this, "singleTrade", _descriptor13, this);

    _initializerDefineProperty(this, "hasSingleTrade", _descriptor14, this);

    _initializerDefineProperty(this, "isSingleNotes", _descriptor15, this);

    _initializerDefineProperty(this, "changeDate", _descriptor16, this);

    _initializerDefineProperty(this, "addPnl", _descriptor17, this);

    _initializerDefineProperty(this, "resetPnl", _descriptor18, this);

    _initializerDefineProperty(this, "pushGlobalHash", _descriptor19, this);

    _initializerDefineProperty(this, "addTempNote", _descriptor20, this);

    _initializerDefineProperty(this, "clearTempNotes", _descriptor21, this);

    _initializerDefineProperty(this, "addTempTag", _descriptor22, this);

    _initializerDefineProperty(this, "clearTempTags", _descriptor23, this);

    _initializerDefineProperty(this, "changeHasTempTags", _descriptor24, this);

    _initializerDefineProperty(this, "resetHasTempTags", _descriptor25, this);

    _initializerDefineProperty(this, "setSymbol", _descriptor26, this);

    _initializerDefineProperty(this, "resetPnl", _descriptor27, this);

    _initializerDefineProperty(this, "setSingleTrade", _descriptor28, this);
  }

}, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "lastUpdate", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 0;
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "light", [mobx_persist__WEBPACK_IMPORTED_MODULE_2__["persist"], mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return true;
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "isAuth", [mobx_persist__WEBPACK_IMPORTED_MODULE_2__["persist"], mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "startDate", [mobx_persist__WEBPACK_IMPORTED_MODULE_2__["persist"], mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return null;
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "endDate", [mobx_persist__WEBPACK_IMPORTED_MODULE_2__["persist"], mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return null;
  }
}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "symbol", [mobx_persist__WEBPACK_IMPORTED_MODULE_2__["persist"], mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return "XBTUSD";
  }
}), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "date", [mobx_persist__WEBPACK_IMPORTED_MODULE_2__["persist"], mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return "Today";
  }
}), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "pnl", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 0;
  }
}), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, "globalHash", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return [];
  }
}), _descriptor10 = _applyDecoratedDescriptor(_class.prototype, "tempNotes", [mobx_persist__WEBPACK_IMPORTED_MODULE_2__["persist"], mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return [];
  }
}), _descriptor11 = _applyDecoratedDescriptor(_class.prototype, "tempTags", [mobx_persist__WEBPACK_IMPORTED_MODULE_2__["persist"], mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return [];
  }
}), _descriptor12 = _applyDecoratedDescriptor(_class.prototype, "hasTempTags", [mobx_persist__WEBPACK_IMPORTED_MODULE_2__["persist"], mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), _descriptor13 = _applyDecoratedDescriptor(_class.prototype, "singleTrade", [mobx_persist__WEBPACK_IMPORTED_MODULE_2__["persist"], mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return {};
  }
}), _descriptor14 = _applyDecoratedDescriptor(_class.prototype, "hasSingleTrade", [mobx_persist__WEBPACK_IMPORTED_MODULE_2__["persist"], mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), _descriptor15 = _applyDecoratedDescriptor(_class.prototype, "isSingleNotes", [mobx_persist__WEBPACK_IMPORTED_MODULE_2__["persist"], mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), _descriptor16 = _applyDecoratedDescriptor(_class.prototype, "changeDate", [mobx__WEBPACK_IMPORTED_MODULE_0__["action"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return newDate => {
      let dates = Object(_components_Helpers_Functions__WEBPACK_IMPORTED_MODULE_4__["getStateDate"])(newDate);
      this.date = newDate;
      this.startDate = dates.start;
      this.endDate = dates.end;
    };
  }
}), _descriptor17 = _applyDecoratedDescriptor(_class.prototype, "addPnl", [mobx__WEBPACK_IMPORTED_MODULE_0__["action"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return pnl => {
      this.pnl += pnl;
    };
  }
}), _descriptor18 = _applyDecoratedDescriptor(_class.prototype, "resetPnl", [mobx__WEBPACK_IMPORTED_MODULE_0__["action"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return () => {
      this.pnl = 0;
    };
  }
}), _descriptor19 = _applyDecoratedDescriptor(_class.prototype, "pushGlobalHash", [mobx__WEBPACK_IMPORTED_MODULE_0__["action"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return hash => {
      this.globalHash.push(hash);
    };
  }
}), _descriptor20 = _applyDecoratedDescriptor(_class.prototype, "addTempNote", [mobx__WEBPACK_IMPORTED_MODULE_0__["action"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return (time, note) => {
      if (this.tempNotes[0] == undefined) {
        let newNote = {};
        newNote["note"] = note;
        newNote["time"] = time;
        this.tempNotes.push(newNote);
      } else {
        let alreadyPresentNote = false;

        for (let i = 0; i < this.tempNotes.length; i++) {
          if (this.tempNotes[i].time == time) {
            this.tempNotes[i].note = note;
            alreadyPresentNote = true;
          }

          if (i == this.tempNotes.length - 1 && alreadyPresentNote == false) {
            let newNote = {};
            newNote["note"] = note;
            newNote["time"] = time;
            this.tempNotes.push(newNote);
          }
        }
      }
    };
  }
}), _descriptor21 = _applyDecoratedDescriptor(_class.prototype, "clearTempNotes", [mobx__WEBPACK_IMPORTED_MODULE_0__["action"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return () => {
      this.tempNotes = [];
    };
  }
}), _descriptor22 = _applyDecoratedDescriptor(_class.prototype, "addTempTag", [mobx__WEBPACK_IMPORTED_MODULE_0__["action"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return (time, tag) => {
      let newTag = {};
      newTag["tag"] = tag;
      newTag["time"] = time;
      this.tempTags.push(newTag);
      this.changeHasTempTags();
    };
  }
}), _descriptor23 = _applyDecoratedDescriptor(_class.prototype, "clearTempTags", [mobx__WEBPACK_IMPORTED_MODULE_0__["action"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return () => {
      this.tempTags = [];
    };
  }
}), _descriptor24 = _applyDecoratedDescriptor(_class.prototype, "changeHasTempTags", [mobx__WEBPACK_IMPORTED_MODULE_0__["action"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return () => {
      this.hasTempTags = true;
    };
  }
}), _descriptor25 = _applyDecoratedDescriptor(_class.prototype, "resetHasTempTags", [mobx__WEBPACK_IMPORTED_MODULE_0__["action"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return () => {
      this.hasTempTags = false;
    };
  }
}), _descriptor26 = _applyDecoratedDescriptor(_class.prototype, "setSymbol", [mobx__WEBPACK_IMPORTED_MODULE_0__["action"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return newSymbol => {
      this.symbol = newSymbol;
    };
  }
}), _descriptor27 = _applyDecoratedDescriptor(_class.prototype, "resetPnl", [mobx__WEBPACK_IMPORTED_MODULE_0__["action"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return () => {
      this.pnl = 0;
    };
  }
}), _descriptor28 = _applyDecoratedDescriptor(_class.prototype, "setSingleTrade", [mobx__WEBPACK_IMPORTED_MODULE_0__["action"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return dat => {
      this.singleTrade = dat;
    };
  }
})), _class);
let store = null;
const hydrate = Object(mobx_persist__WEBPACK_IMPORTED_MODULE_2__["create"])();
const StoreContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["createContext"])(new Store());
function initializeStore(initialData) {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return new Store(isServer, initialData);
  }

  if (store === null) {
    store = new Store(isServer, initialData);
  }

  hydrate("store", store).then(() => {
    console.log("someStore has been hydrated");
  });
  return store;
}

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "apollo-boost":
/*!*******************************!*\
  !*** external "apollo-boost" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-boost");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "mobx":
/*!***********************!*\
  !*** external "mobx" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mobx");

/***/ }),

/***/ "mobx-persist":
/*!*******************************!*\
  !*** external "mobx-persist" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mobx-persist");

/***/ }),

/***/ "mobx-react":
/*!*****************************!*\
  !*** external "mobx-react" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mobx-react");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVscGVycy9GdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2luaXQtYXBvbGxvLmpzIiwid2VicGFjazovLy8uL2xpYi93aXRoLWFwb2xsby1jbGllbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvYXBwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZXMvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXBvbGxvLWJvb3N0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaXNvbW9ycGhpYy11bmZldGNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9ieFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vYngtcGVyc2lzdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vYngtcmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWFwb2xsb1wiIl0sIm5hbWVzIjpbImZvcm1hdERhdGVNb250aE9ubHkiLCJkYXRlIiwibW9udGhOYW1lcyIsInV0Y0RhdGUiLCJ0aGVEYXRlIiwiRGF0ZSIsImRheSIsImdldERhdGUiLCJob3VycyIsImFkZFplcm9CZWZvcmUiLCJnZXRIb3VycyIsIm1pbnMiLCJnZXRNaW51dGVzIiwibW9udGhJbmRleCIsImdldE1vbnRoIiwieWVhciIsImdldEZ1bGxZZWFyIiwiZm9ybWF0RGF0ZVNob3J0IiwidG9TdHJpbmciLCJmb3JtYXREYXRlU2hvcnRXaXRoSG91ciIsIm4iLCJnZXRTdGF0ZURhdGUiLCJpbnB1dCIsImRhdGVzIiwiZW5kIiwibWFrZURhdGVIcnMiLCJzdGFydCIsImNvbnNvbGUiLCJsb2ciLCJtYWtlRGF0ZURheXMiLCJocnNCYWNrIiwiZHQiLCJ0b1VUQ1N0cmluZyIsInRvSVNPU3RyaW5nIiwic2V0SG91cnMiLCJudW0iLCJzZXREYXRlIiwiY2FsY0NvbW1pc3Npb24iLCJwcmljZSIsInNpZGUiLCJxdHkiLCJsZWF2ZXNRdHkiLCJvcmRlclR5cGUiLCJyZWFsUXR5IiwiY29tbWlzc2lvbiIsImluY2x1ZGVzIiwidG9GaXhlZCIsImFwb2xsb0NsaWVudCIsImdsb2JhbCIsImZldGNoIiwiY3JlYXRlIiwiaW5pdGlhbFN0YXRlIiwidXJpIiwiQXBvbGxvQ2xpZW50IiwiY29ubmVjdFRvRGV2VG9vbHMiLCJzc3JNb2RlIiwibGluayIsIkh0dHBMaW5rIiwiY3JlZGVudGlhbHMiLCJjYWNoZSIsIkluTWVtb3J5Q2FjaGUiLCJyZXN0b3JlIiwiaW5pdEFwb2xsbyIsIkFwcCIsIkFwb2xsbyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4Iiwicm91dGVyIiwiYXBwUHJvcHMiLCJhcG9sbG8iLCJnZXREYXRhRnJvbVRyZWUiLCJlcnJvciIsIkhlYWQiLCJyZXdpbmQiLCJhcG9sbG9TdGF0ZSIsImV4dHJhY3QiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwicmVuZGVyIiwiZGlzcGxheU5hbWUiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsImV4cG9ydHMiLCJfX2VzTW9kdWxlIiwiQ29udGFpbmVyIiwiY3JlYXRlVXJsIiwiZGVmYXVsdCIsIl9yZWFjdCIsIl91dGlscyIsIkFwcEluaXRpYWxQcm9wcyIsImFwcEdldEluaXRpYWxQcm9wcyIsIl9yZWYiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiY29tcG9uZW50RGlkQ2F0Y2giLCJfZXJyb3JJbmZvIiwiX19OX1NTRyIsIl9fTl9TU1AiLCJjcmVhdGVFbGVtZW50IiwiT2JqZWN0IiwiYXNzaWduIiwidXJsIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsIndhcm5Db250YWluZXIiLCJ3YXJuVXJsIiwiZXhlY09uY2UiLCJ3YXJuIiwicCIsImNoaWxkcmVuIiwicGF0aG5hbWUiLCJhc1BhdGgiLCJxdWVyeSIsImJhY2siLCJwdXNoIiwiYXMiLCJwdXNoVG8iLCJocmVmIiwicHVzaFJvdXRlIiwicHVzaFVybCIsInJlcGxhY2UiLCJyZXBsYWNlVG8iLCJyZXBsYWNlUm91dGUiLCJyZXBsYWNlVXJsIiwiTXlBcHAiLCJhcHBDb250ZXh0IiwibW9ieFN0b3JlIiwiaW5pdGlhbGl6ZVN0b3JlIiwiaW5pdGlhbE1vYnhTdGF0ZSIsImlzU2VydmVyIiwid2l0aEFwb2xsb0NsaWVudCIsInVzZVN0YXRpY1JlbmRlcmluZyIsIlN0b3JlIiwib2JzZXJ2YWJsZSIsInBlcnNpc3QiLCJhY3Rpb24iLCJuZXdEYXRlIiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsInBubCIsImhhc2giLCJnbG9iYWxIYXNoIiwidGltZSIsIm5vdGUiLCJ0ZW1wTm90ZXMiLCJ1bmRlZmluZWQiLCJuZXdOb3RlIiwiYWxyZWFkeVByZXNlbnROb3RlIiwiaSIsImxlbmd0aCIsInRhZyIsIm5ld1RhZyIsInRlbXBUYWdzIiwiY2hhbmdlSGFzVGVtcFRhZ3MiLCJoYXNUZW1wVGFncyIsIm5ld1N5bWJvbCIsInN5bWJvbCIsImRhdCIsInNpbmdsZVRyYWRlIiwic3RvcmUiLCJoeWRyYXRlIiwiU3RvcmVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsImluaXRpYWxEYXRhIiwidGhlbiJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7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OlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiKTsiLCIvLyBleHBvcnQgZnVuY3Rpb24gZm9ybWF0RGF0ZU1vbnRoT25seShkYXRlKSB7XG4vLyAgIHZhciBtb250aE5hbWVzID0gW1xuLy8gICAgIFwiSmFuXCIsXG4vLyAgICAgXCJGZWJcIixcbi8vICAgICBcIk1hclwiLFxuLy8gICAgIFwiQXByXCIsXG4vLyAgICAgXCJNYXlcIixcbi8vICAgICBcIkp1blwiLFxuLy8gICAgIFwiSnVsXCIsXG4vLyAgICAgXCJBdWdcIixcbi8vICAgICBcIlNlcHRcIixcbi8vICAgICBcIk9jdFwiLFxuLy8gICAgIFwiTm92XCIsXG4vLyAgICAgXCJEZWNcIixcbi8vICAgXTtcbi8vICAgbGV0IHV0Y0RhdGUgPSBkYXRlO1xuLy8gICBsZXQgdGhlRGF0ZSA9IG5ldyBEYXRlKHV0Y0RhdGUpO1xuXG4vLyAgIHZhciBkYXkgPSB0aGVEYXRlLmdldERhdGUoKTtcbi8vICAgdmFyIGhvdXJzID0gYWRkWmVyb0JlZm9yZSh0aGVEYXRlLmdldEhvdXJzKCkpO1xuLy8gICB2YXIgbWlucyA9IGFkZFplcm9CZWZvcmUodGhlRGF0ZS5nZXRNaW51dGVzKCkpO1xuLy8gICB2YXIgbW9udGhJbmRleCA9IGFkZFplcm9CZWZvcmUodGhlRGF0ZS5nZXRNb250aCgpKTtcbi8vICAgdmFyIHllYXIgPSBhZGRaZXJvQmVmb3JlKHRoZURhdGUuZ2V0RnVsbFllYXIoKSk7XG5cbi8vICAgcmV0dXJuIChcbi8vICAgICBkYXkgKyBcIi1cIiArIG1vbnRoSW5kZXgudG9TdHJpbmcoKSArIFwiLVwiICsgeWVhciArIFwiIFwiICsgaG91cnMgKyBcIjpcIiArIG1pbnNcbi8vICAgKTtcbi8vIH1cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXREYXRlTW9udGhPbmx5KGRhdGUpIHtcbiAgdmFyIG1vbnRoTmFtZXMgPSBbXG4gICAgXCJKYW5cIixcbiAgICBcIkZlYlwiLFxuICAgIFwiTWFyXCIsXG4gICAgXCJBcHJcIixcbiAgICBcIk1heVwiLFxuICAgIFwiSnVuXCIsXG4gICAgXCJKdWxcIixcbiAgICBcIkF1Z1wiLFxuICAgIFwiU2VwdFwiLFxuICAgIFwiT2N0XCIsXG4gICAgXCJOb3ZcIixcbiAgICBcIkRlY1wiLFxuICBdO1xuICBsZXQgdXRjRGF0ZSA9IGRhdGU7XG4gIGxldCB0aGVEYXRlID0gbmV3IERhdGUodXRjRGF0ZSk7XG5cbiAgdmFyIGRheSA9IHRoZURhdGUuZ2V0RGF0ZSgpO1xuICB2YXIgaG91cnMgPSBhZGRaZXJvQmVmb3JlKHRoZURhdGUuZ2V0SG91cnMoKSk7XG4gIHZhciBtaW5zID0gYWRkWmVyb0JlZm9yZSh0aGVEYXRlLmdldE1pbnV0ZXMoKSk7XG4gIHZhciBtb250aEluZGV4ID0gdGhlRGF0ZS5nZXRNb250aCgpO1xuICAvLyB2YXIgbW9udGhJbmRleCA9IGFkZFplcm9CZWZvcmUodGhlRGF0ZS5nZXRNb250aCgpKTtcbiAgdmFyIHllYXIgPSB0aGVEYXRlLmdldEZ1bGxZZWFyKCk7XG5cbiAgcmV0dXJuIGRheSArIFwiIFwiICsgbW9udGhOYW1lc1ttb250aEluZGV4XSArIFwiLCBcIiArIGhvdXJzICsgXCI6XCIgKyBtaW5zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0RGF0ZVNob3J0KGRhdGUpIHtcbiAgbGV0IHV0Y0RhdGUgPSBkYXRlO1xuICBsZXQgdGhlRGF0ZSA9IG5ldyBEYXRlKHV0Y0RhdGUpO1xuXG4gIHZhciBkYXkgPSBhZGRaZXJvQmVmb3JlKHRoZURhdGUuZ2V0RGF0ZSgpKTtcbiAgdmFyIGhvdXJzID0gYWRkWmVyb0JlZm9yZSh0aGVEYXRlLmdldEhvdXJzKCkpO1xuICB2YXIgbWlucyA9IGFkZFplcm9CZWZvcmUodGhlRGF0ZS5nZXRNaW51dGVzKCkpO1xuICB2YXIgbW9udGhJbmRleCA9IGFkZFplcm9CZWZvcmUodGhlRGF0ZS5nZXRNb250aCgpKTtcbiAgdmFyIHllYXIgPSB0aGVEYXRlLmdldEZ1bGxZZWFyKCk7XG5cbiAgcmV0dXJuIG1vbnRoSW5kZXgudG9TdHJpbmcoKSArIFwiL1wiICsgZGF5LnRvU3RyaW5nKCk7XG59XG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0RGF0ZVNob3J0V2l0aEhvdXIoZGF0ZSkge1xuICBsZXQgdXRjRGF0ZSA9IGRhdGU7XG4gIGxldCB0aGVEYXRlID0gbmV3IERhdGUodXRjRGF0ZSk7XG5cbiAgdmFyIGRheSA9IGFkZFplcm9CZWZvcmUodGhlRGF0ZS5nZXREYXRlKCkpO1xuICB2YXIgaG91cnMgPSBhZGRaZXJvQmVmb3JlKHRoZURhdGUuZ2V0SG91cnMoKSk7XG4gIHZhciBtaW5zID0gYWRkWmVyb0JlZm9yZSh0aGVEYXRlLmdldE1pbnV0ZXMoKSk7XG4gIHZhciBtb250aEluZGV4ID0gYWRkWmVyb0JlZm9yZSh0aGVEYXRlLmdldE1vbnRoKCkpO1xuICB2YXIgeWVhciA9IHRoZURhdGUuZ2V0RnVsbFllYXIoKTtcblxuICByZXR1cm4gKFxuICAgIG1vbnRoSW5kZXgudG9TdHJpbmcoKSArXG4gICAgXCIvXCIgK1xuICAgIGRheS50b1N0cmluZygpICtcbiAgICBcIiBcIiArXG4gICAgaG91cnMudG9TdHJpbmcoKSArXG4gICAgXCI6XCIgK1xuICAgIG1pbnMudG9TdHJpbmcoKVxuICApO1xufVxuXG5mdW5jdGlvbiBhZGRaZXJvQmVmb3JlKG4pIHtcbiAgcmV0dXJuIChuIDwgMTAgPyBcIjBcIiA6IFwiXCIpICsgbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0YXRlRGF0ZShpbnB1dCkge1xuICBpZiAoaW5wdXQgPT0gXCJUb2RheVwiKSB7XG4gICAgbGV0IGRhdGVzID0ge307XG4gICAgZGF0ZXMuZW5kID0gbWFrZURhdGVIcnMoMCk7XG4gICAgZGF0ZXMuc3RhcnQgPSBtYWtlRGF0ZUhycygyNCk7XG4gICAgY29uc29sZS5sb2coXCJpcyB0b2RheVwiKTtcbiAgICByZXR1cm4gZGF0ZXM7XG4gIH1cbiAgaWYgKGlucHV0ID09IFwiWWVzdGVyZGF5XCIpIHtcbiAgICBsZXQgZGF0ZXMgPSB7fTtcbiAgICBkYXRlcy5lbmQgPSBtYWtlRGF0ZUhycygxKTtcbiAgICBkYXRlcy5zdGFydCA9IG1ha2VEYXRlRGF5cygyKTtcbiAgICBjb25zb2xlLmxvZyhcImlzIHllc3RlcmRheVwiKTtcbiAgICByZXR1cm4gZGF0ZXM7XG4gIH1cbiAgaWYgKGlucHV0ID09IFwiVGhpcyBXZWVrXCIpIHtcbiAgICBsZXQgZGF0ZXMgPSB7fTtcbiAgICBkYXRlcy5lbmQgPSBtYWtlRGF0ZUhycygwKTtcbiAgICBkYXRlcy5zdGFydCA9IG1ha2VEYXRlRGF5cyg3KTtcbiAgICBjb25zb2xlLmxvZyhcImlzIHRoaXMgd2Vla1wiKTtcbiAgICByZXR1cm4gZGF0ZXM7XG4gIH1cbiAgaWYgKGlucHV0ID09IFwiVGhpcyBNb250aFwiKSB7XG4gICAgbGV0IGRhdGVzID0ge307XG4gICAgZGF0ZXMuZW5kID0gbWFrZURhdGVIcnMoMCk7XG4gICAgZGF0ZXMuc3RhcnQgPSBtYWtlRGF0ZURheXMoMzApO1xuICAgIGNvbnNvbGUubG9nKFwiaXMgdGhpcyBtb250aFwiKTtcbiAgICByZXR1cm4gZGF0ZXM7XG4gIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBtYWtlRGF0ZUhycyhocnNCYWNrKSB7XG4gIGlmIChocnNCYWNrID09IDApIHtcbiAgICBsZXQgZHQgPSBuZXcgRGF0ZShuZXcgRGF0ZSgpLnRvVVRDU3RyaW5nKCkpO1xuICAgIGR0ID0gZHQudG9JU09TdHJpbmcoKTtcbiAgICByZXR1cm4gZHQ7XG4gIH0gZWxzZSB7XG4gICAgbGV0IGR0ID0gbmV3IERhdGUobmV3IERhdGUoKS50b1VUQ1N0cmluZygpKTtcbiAgICBkdC5zZXRIb3VycyhkdC5nZXRIb3VycygpIC0gaHJzQmFjayk7XG4gICAgZHQgPSBkdC50b0lTT1N0cmluZygpO1xuICAgIHJldHVybiBkdDtcbiAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VEYXRlRGF5cyhudW0pIHtcbiAgbGV0IGR0ID0gbmV3IERhdGUobmV3IERhdGUoKS50b1VUQ1N0cmluZygpKTtcbiAgZHQuc2V0RGF0ZShkdC5nZXREYXRlKCkgLSBudW0pO1xuICBkdCA9IGR0LnRvSVNPU3RyaW5nKCk7XG4gIGNvbnNvbGUubG9nKFwiZ2V0dGluZyBkYXlzIGJhY2tcIik7XG4gIHJldHVybiBkdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGNDb21taXNzaW9uKHByaWNlLCBzaWRlLCBxdHksIGxlYXZlc1F0eSwgb3JkZXJUeXBlKSB7XG4gIGxldCByZWFsUXR5ID0gcXR5IC0gbGVhdmVzUXR5O1xuICBsZXQgY29tbWlzc2lvbjtcbiAgaWYgKG9yZGVyVHlwZSA9PSBcIk1hcmtldFwiKSB7XG4gICAgY29tbWlzc2lvbiA9IChyZWFsUXR5ICogMC4wMDc1KSAvIHByaWNlO1xuICAgIGNvbW1pc3Npb24gPSBjb21taXNzaW9uICogLTE7XG4gIH1cbiAgaWYgKG9yZGVyVHlwZS5pbmNsdWRlcyhcIlN0b3BcIikpIHtcbiAgICBjb21taXNzaW9uID0gKHJlYWxRdHkgKiAwLjAwNzUpIC8gcHJpY2U7XG4gICAgY29tbWlzc2lvbiA9IGNvbW1pc3Npb24gKiAtMTtcbiAgfVxuICBpZiAob3JkZXJUeXBlID09IFwiTGltaXRcIikge1xuICAgIGNvbW1pc3Npb24gPSAocmVhbFF0eSAqIDAuMDAyNSkgLyBwcmljZTtcbiAgfVxuICByZXR1cm4gY29tbWlzc2lvbi50b0ZpeGVkKDUpO1xufVxuIiwiaW1wb3J0IHsgQXBvbGxvQ2xpZW50LCBJbk1lbW9yeUNhY2hlLCBIdHRwTGluayB9IGZyb20gXCJhcG9sbG8tYm9vc3RcIjtcbmltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy11bmZldGNoXCI7XG5cbmxldCBhcG9sbG9DbGllbnQgPSBudWxsO1xuXG4vLyBQb2x5ZmlsbCBmZXRjaCgpIG9uIHRoZSBzZXJ2ZXIgKHVzZWQgYnkgYXBvbGxvLWNsaWVudClcbmlmICghcHJvY2Vzcy5icm93c2VyKSB7XG4gIGdsb2JhbC5mZXRjaCA9IGZldGNoO1xufVxuXG5mdW5jdGlvbiBjcmVhdGUoaW5pdGlhbFN0YXRlKSB7XG4gIGxldCB1cmk7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIHVyaSA9IFwiaHR0cHM6Ly9iaXRzam91cm5hbC1iYWNrZW5kLmNvbVwiO1xuICB9IGVsc2Uge1xuICAgIHVyaSA9IFwiaHR0cDovL2xvY2FsaG9zdDo0MDAwL2dyYXBocWxcIjsgLy8gU2VydmVyIFVSTCAobXVzdCBiZSBhYnNvbHV0ZSlcbiAgfVxuXG4gIC8vIENoZWNrIG91dCBodHRwczovL2dpdGh1Yi5jb20vemVpdC9uZXh0LmpzL3B1bGwvNDYxMSBpZiB5b3Ugd2FudCB0byB1c2UgdGhlIEFXU0FwcFN5bmNDbGllbnRcbiAgcmV0dXJuIG5ldyBBcG9sbG9DbGllbnQoe1xuICAgIGNvbm5lY3RUb0RldlRvb2xzOiBwcm9jZXNzLmJyb3dzZXIsXG4gICAgc3NyTW9kZTogIXByb2Nlc3MuYnJvd3NlciwgLy8gRGlzYWJsZXMgZm9yY2VGZXRjaCBvbiB0aGUgc2VydmVyIChzbyBxdWVyaWVzIGFyZSBvbmx5IHJ1biBvbmNlKVxuICAgIGxpbms6IG5ldyBIdHRwTGluayh7XG4gICAgICB1cmk6IHVyaSxcbiAgICAgIGNyZWRlbnRpYWxzOiBcImluY2x1ZGVcIiwgLy8gQWRkaXRpb25hbCBmZXRjaCgpIG9wdGlvbnMgbGlrZSBgY3JlZGVudGlhbHNgIG9yIGBoZWFkZXJzYFxuICAgIH0pLFxuICAgIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSgpLnJlc3RvcmUoaW5pdGlhbFN0YXRlIHx8IHt9KSxcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRBcG9sbG8oaW5pdGlhbFN0YXRlKSB7XG4gIC8vIE1ha2Ugc3VyZSB0byBjcmVhdGUgYSBuZXcgY2xpZW50IGZvciBldmVyeSBzZXJ2ZXItc2lkZSByZXF1ZXN0IHNvIHRoYXQgZGF0YVxuICAvLyBpc24ndCBzaGFyZWQgYmV0d2VlbiBjb25uZWN0aW9ucyAod2hpY2ggd291bGQgYmUgYmFkKVxuICBpZiAoIXByb2Nlc3MuYnJvd3Nlcikge1xuICAgIHJldHVybiBjcmVhdGUoaW5pdGlhbFN0YXRlKTtcbiAgfVxuXG4gIC8vIFJldXNlIGNsaWVudCBvbiB0aGUgY2xpZW50LXNpZGVcbiAgaWYgKCFhcG9sbG9DbGllbnQpIHtcbiAgICBhcG9sbG9DbGllbnQgPSBjcmVhdGUoaW5pdGlhbFN0YXRlKTtcbiAgfVxuXG4gIHJldHVybiBhcG9sbG9DbGllbnQ7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgaW5pdEFwb2xsbyBmcm9tICcuL2luaXQtYXBvbGxvJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgZ2V0RGF0YUZyb21UcmVlIH0gZnJvbSAncmVhY3QtYXBvbGxvJ1xuXG5leHBvcnQgZGVmYXVsdCBBcHAgPT4ge1xuICByZXR1cm4gY2xhc3MgQXBvbGxvIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgZGlzcGxheU5hbWUgPSAnd2l0aEFwb2xsbyhBcHApJ1xuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMgKGN0eCkge1xuICAgICAgY29uc3QgeyBDb21wb25lbnQsIHJvdXRlciB9ID0gY3R4XG5cbiAgICAgIGxldCBhcHBQcm9wcyA9IHt9XG4gICAgICBpZiAoQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgICAgICBhcHBQcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuICAgICAgfVxuXG4gICAgICAvLyBSdW4gYWxsIEdyYXBoUUwgcXVlcmllcyBpbiB0aGUgY29tcG9uZW50IHRyZWVcbiAgICAgIC8vIGFuZCBleHRyYWN0IHRoZSByZXN1bHRpbmcgZGF0YVxuICAgICAgY29uc3QgYXBvbGxvID0gaW5pdEFwb2xsbygpXG4gICAgICBpZiAoIXByb2Nlc3MuYnJvd3Nlcikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFJ1biBhbGwgR3JhcGhRTCBxdWVyaWVzXG4gICAgICAgICAgYXdhaXQgZ2V0RGF0YUZyb21UcmVlKFxuICAgICAgICAgICAgPEFwcFxuICAgICAgICAgICAgICB7Li4uYXBwUHJvcHN9XG4gICAgICAgICAgICAgIENvbXBvbmVudD17Q29tcG9uZW50fVxuICAgICAgICAgICAgICByb3V0ZXI9e3JvdXRlcn1cbiAgICAgICAgICAgICAgYXBvbGxvQ2xpZW50PXthcG9sbG99XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIClcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAvLyBQcmV2ZW50IEFwb2xsbyBDbGllbnQgR3JhcGhRTCBlcnJvcnMgZnJvbSBjcmFzaGluZyBTU1IuXG4gICAgICAgICAgLy8gSGFuZGxlIHRoZW0gaW4gY29tcG9uZW50cyB2aWEgdGhlIGRhdGEuZXJyb3IgcHJvcDpcbiAgICAgICAgICAvLyBodHRwczovL3d3dy5hcG9sbG9ncmFwaHFsLmNvbS9kb2NzL3JlYWN0L2FwaS9yZWFjdC1hcG9sbG8uaHRtbCNncmFwaHFsLXF1ZXJ5LWRhdGEtZXJyb3JcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB3aGlsZSBydW5uaW5nIGBnZXREYXRhRnJvbVRyZWVgJywgZXJyb3IpXG4gICAgICAgIH1cblxuICAgICAgICAvLyBnZXREYXRhRnJvbVRyZWUgZG9lcyBub3QgY2FsbCBjb21wb25lbnRXaWxsVW5tb3VudFxuICAgICAgICAvLyBoZWFkIHNpZGUgZWZmZWN0IHRoZXJlZm9yZSBuZWVkIHRvIGJlIGNsZWFyZWQgbWFudWFsbHlcbiAgICAgICAgSGVhZC5yZXdpbmQoKVxuICAgICAgfVxuXG4gICAgICAvLyBFeHRyYWN0IHF1ZXJ5IGRhdGEgZnJvbSB0aGUgQXBvbGxvIHN0b3JlXG4gICAgICBjb25zdCBhcG9sbG9TdGF0ZSA9IGFwb2xsby5jYWNoZS5leHRyYWN0KClcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uYXBwUHJvcHMsXG4gICAgICAgIGFwb2xsb1N0YXRlXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgICBzdXBlcihwcm9wcylcbiAgICAgIHRoaXMuYXBvbGxvQ2xpZW50ID0gaW5pdEFwb2xsbyhwcm9wcy5hcG9sbG9TdGF0ZSlcbiAgICB9XG5cbiAgICByZW5kZXIgKCkge1xuICAgICAgcmV0dXJuIDxBcHAgey4uLnRoaXMucHJvcHN9IGFwb2xsb0NsaWVudD17dGhpcy5hcG9sbG9DbGllbnR9IC8+XG4gICAgfVxuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9wYWdlcy9fYXBwJylcbiIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLkNvbnRhaW5lcj1Db250YWluZXI7ZXhwb3J0cy5jcmVhdGVVcmw9Y3JlYXRlVXJsO2V4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF91dGlscz1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzXCIpO2V4cG9ydHMuQXBwSW5pdGlhbFByb3BzPV91dGlscy5BcHBJbml0aWFsUHJvcHM7LyoqXG4gKiBgQXBwYCBjb21wb25lbnQgaXMgdXNlZCBmb3IgaW5pdGlhbGl6ZSBvZiBwYWdlcy4gSXQgYWxsb3dzIGZvciBvdmVyd3JpdGluZyBhbmQgZnVsbCBjb250cm9sIG9mIHRoZSBgcGFnZWAgaW5pdGlhbGl6YXRpb24uXG4gKiBUaGlzIGFsbG93cyBmb3Iga2VlcGluZyBzdGF0ZSBiZXR3ZWVuIG5hdmlnYXRpb24sIGN1c3RvbSBlcnJvciBoYW5kbGluZywgaW5qZWN0aW5nIGFkZGl0aW9uYWwgZGF0YS5cbiAqL2FzeW5jIGZ1bmN0aW9uIGFwcEdldEluaXRpYWxQcm9wcyhfcmVmKXt2YXJ7Q29tcG9uZW50LGN0eH09X3JlZjt2YXIgcGFnZVByb3BzPWF3YWl0KDAsX3V0aWxzLmxvYWRHZXRJbml0aWFsUHJvcHMpKENvbXBvbmVudCxjdHgpO3JldHVybntwYWdlUHJvcHN9O31jbGFzcyBBcHAgZXh0ZW5kcyBfcmVhY3QuZGVmYXVsdC5Db21wb25lbnR7Ly8gS2VwdCBoZXJlIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS5cbi8vIFdoZW4gc29tZW9uZSBlbmRlZCBBcHAgdGhleSBjb3VsZCBjYWxsIGBzdXBlci5jb21wb25lbnREaWRDYXRjaGAuXG4vLyBAZGVwcmVjYXRlZCBUaGlzIG1ldGhvZCBpcyBubyBsb25nZXIgbmVlZGVkLiBFcnJvcnMgYXJlIGNhdWdodCBhdCB0aGUgdG9wIGxldmVsXG5jb21wb25lbnREaWRDYXRjaChlcnJvcixfZXJyb3JJbmZvKXt0aHJvdyBlcnJvcjt9cmVuZGVyKCl7dmFye3JvdXRlcixDb21wb25lbnQscGFnZVByb3BzLF9fTl9TU0csX19OX1NTUH09dGhpcy5wcm9wcztyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb25lbnQsT2JqZWN0LmFzc2lnbih7fSxwYWdlUHJvcHMsLy8gd2UgZG9uJ3QgYWRkIHRoZSBsZWdhY3kgVVJMIHByb3AgaWYgaXQncyB1c2luZyBub24tbGVnYWN5XG4vLyBtZXRob2RzIGxpa2UgZ2V0U3RhdGljUHJvcHMgYW5kIGdldFNlcnZlclNpZGVQcm9wc1xuIShfX05fU1NHfHxfX05fU1NQKT97dXJsOmNyZWF0ZVVybChyb3V0ZXIpfTp7fSkpO319ZXhwb3J0cy5kZWZhdWx0PUFwcDtBcHAub3JpZ0dldEluaXRpYWxQcm9wcz1hcHBHZXRJbml0aWFsUHJvcHM7QXBwLmdldEluaXRpYWxQcm9wcz1hcHBHZXRJbml0aWFsUHJvcHM7dmFyIHdhcm5Db250YWluZXI7dmFyIHdhcm5Vcmw7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe3dhcm5Db250YWluZXI9KDAsX3V0aWxzLmV4ZWNPbmNlKSgoKT0+e2NvbnNvbGUud2FybihcIldhcm5pbmc6IHRoZSBgQ29udGFpbmVyYCBpbiBgX2FwcGAgaGFzIGJlZW4gZGVwcmVjYXRlZCBhbmQgc2hvdWxkIGJlIHJlbW92ZWQuIGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9hcHAtY29udGFpbmVyLWRlcHJlY2F0ZWRcIik7fSk7d2FyblVybD0oMCxfdXRpbHMuZXhlY09uY2UpKCgpPT57Y29uc29sZS5lcnJvcihcIldhcm5pbmc6IHRoZSAndXJsJyBwcm9wZXJ0eSBpcyBkZXByZWNhdGVkLiBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvdXJsLWRlcHJlY2F0ZWRcIik7fSk7fS8vIEBkZXByZWNhdGVkIG5vb3AgZm9yIG5vdyB1bnRpbCByZW1vdmFsXG5mdW5jdGlvbiBDb250YWluZXIocCl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpd2FybkNvbnRhaW5lcigpO3JldHVybiBwLmNoaWxkcmVuO31mdW5jdGlvbiBjcmVhdGVVcmwocm91dGVyKXsvLyBUaGlzIGlzIHRvIG1ha2Ugc3VyZSB3ZSBkb24ndCByZWZlcmVuY2VzIHRoZSByb3V0ZXIgb2JqZWN0IGF0IGNhbGwgdGltZVxudmFye3BhdGhuYW1lLGFzUGF0aCxxdWVyeX09cm91dGVyO3JldHVybntnZXQgcXVlcnkoKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl3YXJuVXJsKCk7cmV0dXJuIHF1ZXJ5O30sZ2V0IHBhdGhuYW1lKCl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpd2FyblVybCgpO3JldHVybiBwYXRobmFtZTt9LGdldCBhc1BhdGgoKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl3YXJuVXJsKCk7cmV0dXJuIGFzUGF0aDt9LGJhY2s6KCk9PntpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl3YXJuVXJsKCk7cm91dGVyLmJhY2soKTt9LHB1c2g6KHVybCxhcyk9PntpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl3YXJuVXJsKCk7cmV0dXJuIHJvdXRlci5wdXNoKHVybCxhcyk7fSxwdXNoVG86KGhyZWYsYXMpPT57aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpd2FyblVybCgpO3ZhciBwdXNoUm91dGU9YXM/aHJlZjonJzt2YXIgcHVzaFVybD1hc3x8aHJlZjtyZXR1cm4gcm91dGVyLnB1c2gocHVzaFJvdXRlLHB1c2hVcmwpO30scmVwbGFjZToodXJsLGFzKT0+e2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXdhcm5VcmwoKTtyZXR1cm4gcm91dGVyLnJlcGxhY2UodXJsLGFzKTt9LHJlcGxhY2VUbzooaHJlZixhcyk9PntpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl3YXJuVXJsKCk7dmFyIHJlcGxhY2VSb3V0ZT1hcz9ocmVmOicnO3ZhciByZXBsYWNlVXJsPWFzfHxocmVmO3JldHVybiByb3V0ZXIucmVwbGFjZShyZXBsYWNlUm91dGUscmVwbGFjZVVybCk7fX07fSIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwiaW1wb3J0IEFwcCwgeyBDb250YWluZXIgfSBmcm9tIFwibmV4dC9hcHBcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB3aXRoQXBvbGxvQ2xpZW50IGZyb20gXCIuLi9saWIvd2l0aC1hcG9sbG8tY2xpZW50XCI7XG5pbXBvcnQgeyBBcG9sbG9Qcm92aWRlciB9IGZyb20gXCJyZWFjdC1hcG9sbG9cIjtcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcIm1vYngtcmVhY3RcIjtcbmltcG9ydCB7IGluaXRpYWxpemVTdG9yZSwgaHlkcmF0ZSB9IGZyb20gXCIuLi9zdG9yZXMvc3RvcmVcIjtcblxuY2xhc3MgTXlBcHAgZXh0ZW5kcyBBcHAge1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKGFwcENvbnRleHQpIHtcbiAgICAvLyBHZXQgb3IgQ3JlYXRlIHRoZSBzdG9yZSB3aXRoIGB1bmRlZmluZWRgIGFzIGluaXRpYWxTdGF0ZVxuICAgIC8vIFRoaXMgYWxsb3dzIHlvdSB0byBzZXQgYSBjdXN0b20gZGVmYXVsdCBpbml0aWFsU3RhdGVcbiAgICBjb25zdCBtb2J4U3RvcmUgPSBpbml0aWFsaXplU3RvcmUoKTtcblxuICAgIC8vIFByb3ZpZGUgdGhlIHN0b3JlIHRvIGdldEluaXRpYWxQcm9wcyBvZiBwYWdlc1xuICAgIGFwcENvbnRleHQuY3R4Lm1vYnhTdG9yZSA9IG1vYnhTdG9yZTtcbiAgICBsZXQgYXBwUHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGFwcENvbnRleHQpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmFwcFByb3BzLFxuICAgICAgaW5pdGlhbE1vYnhTdGF0ZTogbW9ieFN0b3JlXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGNvbnN0IGlzU2VydmVyID0gIXByb2Nlc3MuYnJvd3NlcjtcbiAgICB0aGlzLm1vYnhTdG9yZSA9IGlzU2VydmVyXG4gICAgICA/IHByb3BzLmluaXRpYWxNb2J4U3RhdGVcbiAgICAgIDogaW5pdGlhbGl6ZVN0b3JlKHByb3BzLmluaXRpYWxNb2J4U3RhdGUpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMsIGFwb2xsb0NsaWVudCB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPEFwb2xsb1Byb3ZpZGVyIGNsaWVudD17YXBvbGxvQ2xpZW50fT5cbiAgICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3RoaXMubW9ieFN0b3JlfT5cbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICA8L1Byb3ZpZGVyPlxuICAgICAgICA8L0Fwb2xsb1Byb3ZpZGVyPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoQXBvbGxvQ2xpZW50KE15QXBwKTtcbiIsImltcG9ydCB7IGFjdGlvbiwgb2JzZXJ2YWJsZSB9IGZyb20gXCJtb2J4XCI7XG5pbXBvcnQgeyB1c2VTdGF0aWNSZW5kZXJpbmcsIG9ic2VydmVyIH0gZnJvbSBcIm1vYngtcmVhY3RcIjtcbmltcG9ydCB7IGNyZWF0ZSwgcGVyc2lzdCB9IGZyb20gXCJtb2J4LXBlcnNpc3RcIjtcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIGdldFN0YXRlRGF0ZSxcbiAgbWFrZURhdGVIcnMsXG4gIG1ha2VEYXRlRGF5cyxcbn0gZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVscGVycy9GdW5jdGlvbnNcIjtcblxuY29uc3QgaXNTZXJ2ZXIgPSAhcHJvY2Vzcy5icm93c2VyO1xudXNlU3RhdGljUmVuZGVyaW5nKGlzU2VydmVyKTtcblxuZXhwb3J0IGNsYXNzIFN0b3JlIHtcbiAgQG9ic2VydmFibGUgbGFzdFVwZGF0ZSA9IDA7XG4gIEBwZXJzaXN0IEBvYnNlcnZhYmxlIGxpZ2h0ID0gdHJ1ZTtcbiAgQHBlcnNpc3QgQG9ic2VydmFibGUgaXNBdXRoID0gZmFsc2U7XG4gIEBwZXJzaXN0IEBvYnNlcnZhYmxlIHN0YXJ0RGF0ZSA9IG51bGw7XG4gIEBwZXJzaXN0IEBvYnNlcnZhYmxlIGVuZERhdGUgPSBudWxsO1xuICBAcGVyc2lzdCBAb2JzZXJ2YWJsZSBzeW1ib2wgPSBcIlhCVFVTRFwiO1xuXG4gIEBwZXJzaXN0IEBvYnNlcnZhYmxlIGRhdGUgPSBcIlRvZGF5XCI7XG4gIEBvYnNlcnZhYmxlIHBubCA9IDA7XG4gIEBvYnNlcnZhYmxlIGdsb2JhbEhhc2ggPSBbXTtcbiAgQHBlcnNpc3QgQG9ic2VydmFibGUgdGVtcE5vdGVzID0gW107XG4gIEBwZXJzaXN0IEBvYnNlcnZhYmxlIHRlbXBUYWdzID0gW107XG4gIEBwZXJzaXN0IEBvYnNlcnZhYmxlIGhhc1RlbXBUYWdzID0gZmFsc2U7XG5cbiAgQHBlcnNpc3QgQG9ic2VydmFibGUgc2luZ2xlVHJhZGUgPSB7fTtcbiAgQHBlcnNpc3QgQG9ic2VydmFibGUgaGFzU2luZ2xlVHJhZGUgPSBmYWxzZTtcbiAgQHBlcnNpc3QgQG9ic2VydmFibGUgaXNTaW5nbGVOb3RlcyA9IGZhbHNlO1xuXG4gIEBhY3Rpb24gY2hhbmdlRGF0ZSA9IChuZXdEYXRlKSA9PiB7XG4gICAgbGV0IGRhdGVzID0gZ2V0U3RhdGVEYXRlKG5ld0RhdGUpO1xuICAgIHRoaXMuZGF0ZSA9IG5ld0RhdGU7XG4gICAgdGhpcy5zdGFydERhdGUgPSBkYXRlcy5zdGFydDtcbiAgICB0aGlzLmVuZERhdGUgPSBkYXRlcy5lbmQ7XG4gIH07XG5cbiAgQGFjdGlvbiBhZGRQbmwgPSAocG5sKSA9PiB7XG4gICAgdGhpcy5wbmwgKz0gcG5sO1xuICB9O1xuXG4gIEBhY3Rpb24gcmVzZXRQbmwgPSAoKSA9PiB7XG4gICAgdGhpcy5wbmwgPSAwO1xuICB9O1xuXG4gIEBhY3Rpb24gcHVzaEdsb2JhbEhhc2ggPSAoaGFzaCkgPT4ge1xuICAgIHRoaXMuZ2xvYmFsSGFzaC5wdXNoKGhhc2gpO1xuICB9O1xuXG4gIEBhY3Rpb24gYWRkVGVtcE5vdGUgPSAodGltZSwgbm90ZSkgPT4ge1xuICAgIGlmICh0aGlzLnRlbXBOb3Rlc1swXSA9PSB1bmRlZmluZWQpIHtcbiAgICAgIGxldCBuZXdOb3RlID0ge307XG4gICAgICBuZXdOb3RlW1wibm90ZVwiXSA9IG5vdGU7XG4gICAgICBuZXdOb3RlW1widGltZVwiXSA9IHRpbWU7XG4gICAgICB0aGlzLnRlbXBOb3Rlcy5wdXNoKG5ld05vdGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgYWxyZWFkeVByZXNlbnROb3RlID0gZmFsc2U7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudGVtcE5vdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0aGlzLnRlbXBOb3Rlc1tpXS50aW1lID09IHRpbWUpIHtcbiAgICAgICAgICB0aGlzLnRlbXBOb3Rlc1tpXS5ub3RlID0gbm90ZTtcbiAgICAgICAgICBhbHJlYWR5UHJlc2VudE5vdGUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpID09IHRoaXMudGVtcE5vdGVzLmxlbmd0aCAtIDEgJiYgYWxyZWFkeVByZXNlbnROb3RlID09IGZhbHNlKSB7XG4gICAgICAgICAgbGV0IG5ld05vdGUgPSB7fTtcbiAgICAgICAgICBuZXdOb3RlW1wibm90ZVwiXSA9IG5vdGU7XG4gICAgICAgICAgbmV3Tm90ZVtcInRpbWVcIl0gPSB0aW1lO1xuICAgICAgICAgIHRoaXMudGVtcE5vdGVzLnB1c2gobmV3Tm90ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgQGFjdGlvbiBjbGVhclRlbXBOb3RlcyA9ICgpID0+IHtcbiAgICB0aGlzLnRlbXBOb3RlcyA9IFtdO1xuICB9O1xuXG4gIEBhY3Rpb24gYWRkVGVtcFRhZyA9ICh0aW1lLCB0YWcpID0+IHtcbiAgICBsZXQgbmV3VGFnID0ge307XG4gICAgbmV3VGFnW1widGFnXCJdID0gdGFnO1xuICAgIG5ld1RhZ1tcInRpbWVcIl0gPSB0aW1lO1xuICAgIHRoaXMudGVtcFRhZ3MucHVzaChuZXdUYWcpO1xuICAgIHRoaXMuY2hhbmdlSGFzVGVtcFRhZ3MoKTtcbiAgfTtcblxuICBAYWN0aW9uIGNsZWFyVGVtcFRhZ3MgPSAoKSA9PiB7XG4gICAgdGhpcy50ZW1wVGFncyA9IFtdO1xuICB9O1xuXG4gIEBhY3Rpb24gY2hhbmdlSGFzVGVtcFRhZ3MgPSAoKSA9PiB7XG4gICAgdGhpcy5oYXNUZW1wVGFncyA9IHRydWU7XG4gIH07XG4gIEBhY3Rpb24gcmVzZXRIYXNUZW1wVGFncyA9ICgpID0+IHtcbiAgICB0aGlzLmhhc1RlbXBUYWdzID0gZmFsc2U7XG4gIH07XG4gIEBhY3Rpb24gc2V0U3ltYm9sID0gKG5ld1N5bWJvbCkgPT4ge1xuICAgIHRoaXMuc3ltYm9sID0gbmV3U3ltYm9sO1xuICB9O1xuXG4gIEBhY3Rpb24gcmVzZXRQbmwgPSAoKSA9PiB7XG4gICAgdGhpcy5wbmwgPSAwO1xuICB9O1xuXG4gIEBhY3Rpb24gc2V0U2luZ2xlVHJhZGUgPSAoZGF0KSA9PiB7XG4gICAgdGhpcy5zaW5nbGVUcmFkZSA9IGRhdDtcbiAgfTtcbn1cblxubGV0IHN0b3JlID0gbnVsbDtcbmV4cG9ydCBjb25zdCBoeWRyYXRlID0gY3JlYXRlKCk7XG5leHBvcnQgY29uc3QgU3RvcmVDb250ZXh0ID0gY3JlYXRlQ29udGV4dChuZXcgU3RvcmUoKSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplU3RvcmUoaW5pdGlhbERhdGEpIHtcbiAgLy8gQWx3YXlzIG1ha2UgYSBuZXcgc3RvcmUgaWYgc2VydmVyLCBvdGhlcndpc2Ugc3RhdGUgaXMgc2hhcmVkIGJldHdlZW4gcmVxdWVzdHNcbiAgaWYgKGlzU2VydmVyKSB7XG4gICAgcmV0dXJuIG5ldyBTdG9yZShpc1NlcnZlciwgaW5pdGlhbERhdGEpO1xuICB9XG4gIGlmIChzdG9yZSA9PT0gbnVsbCkge1xuICAgIHN0b3JlID0gbmV3IFN0b3JlKGlzU2VydmVyLCBpbml0aWFsRGF0YSk7XG4gIH1cblxuICBoeWRyYXRlKFwic3RvcmVcIiwgc3RvcmUpLnRoZW4oKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwic29tZVN0b3JlIGhhcyBiZWVuIGh5ZHJhdGVkXCIpO1xuICB9KTtcblxuICByZXR1cm4gc3RvcmU7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhcG9sbG8tYm9vc3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaXNvbW9ycGhpYy11bmZldGNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vYnhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9ieC1wZXJzaXN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vYngtcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWFwb2xsb1wiKTsiXSwic291cmNlUm9vdCI6IiJ9