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
  console.log("NODE ENV isdevelopment");
  let uri;

  if (false) {} else {
    uri = "http://localhost:4000/graphql"; // Server URL (must be absolute)
  }

  console.log(uri); // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient

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


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVscGVycy9GdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2luaXQtYXBvbGxvLmpzIiwid2VicGFjazovLy8uL2xpYi93aXRoLWFwb2xsby1jbGllbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZXMvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXBvbGxvLWJvb3N0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaXNvbW9ycGhpYy11bmZldGNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9ieFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vYngtcGVyc2lzdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vYngtcmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWFwb2xsb1wiIl0sIm5hbWVzIjpbImZvcm1hdERhdGVNb250aE9ubHkiLCJkYXRlIiwibW9udGhOYW1lcyIsInV0Y0RhdGUiLCJ0aGVEYXRlIiwiRGF0ZSIsImRheSIsImdldERhdGUiLCJob3VycyIsImFkZFplcm9CZWZvcmUiLCJnZXRIb3VycyIsIm1pbnMiLCJnZXRNaW51dGVzIiwibW9udGhJbmRleCIsImdldE1vbnRoIiwieWVhciIsImdldEZ1bGxZZWFyIiwiZm9ybWF0RGF0ZVNob3J0IiwidG9TdHJpbmciLCJmb3JtYXREYXRlU2hvcnRXaXRoSG91ciIsIm4iLCJnZXRTdGF0ZURhdGUiLCJpbnB1dCIsImRhdGVzIiwiZW5kIiwibWFrZURhdGVIcnMiLCJzdGFydCIsImNvbnNvbGUiLCJsb2ciLCJtYWtlRGF0ZURheXMiLCJocnNCYWNrIiwiZHQiLCJ0b1VUQ1N0cmluZyIsInRvSVNPU3RyaW5nIiwic2V0SG91cnMiLCJudW0iLCJzZXREYXRlIiwiY2FsY0NvbW1pc3Npb24iLCJwcmljZSIsInNpZGUiLCJxdHkiLCJsZWF2ZXNRdHkiLCJvcmRlclR5cGUiLCJyZWFsUXR5IiwiY29tbWlzc2lvbiIsImluY2x1ZGVzIiwidG9GaXhlZCIsImFwb2xsb0NsaWVudCIsImdsb2JhbCIsImZldGNoIiwiY3JlYXRlIiwiaW5pdGlhbFN0YXRlIiwidXJpIiwiQXBvbGxvQ2xpZW50IiwiY29ubmVjdFRvRGV2VG9vbHMiLCJzc3JNb2RlIiwibGluayIsIkh0dHBMaW5rIiwiY3JlZGVudGlhbHMiLCJjYWNoZSIsIkluTWVtb3J5Q2FjaGUiLCJyZXN0b3JlIiwiaW5pdEFwb2xsbyIsIkFwcCIsIkFwb2xsbyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4Iiwicm91dGVyIiwiYXBwUHJvcHMiLCJhcG9sbG8iLCJnZXREYXRhRnJvbVRyZWUiLCJlcnJvciIsIkhlYWQiLCJyZXdpbmQiLCJhcG9sbG9TdGF0ZSIsImV4dHJhY3QiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwicmVuZGVyIiwiZGlzcGxheU5hbWUiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsImV4cG9ydHMiLCJfX2VzTW9kdWxlIiwiQ29udGFpbmVyIiwiY3JlYXRlVXJsIiwiZGVmYXVsdCIsIl9yZWFjdCIsIl91dGlscyIsIkFwcEluaXRpYWxQcm9wcyIsImFwcEdldEluaXRpYWxQcm9wcyIsIl9yZWYiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiY29tcG9uZW50RGlkQ2F0Y2giLCJfZXJyb3JJbmZvIiwiX19OX1NTRyIsIl9fTl9TU1AiLCJjcmVhdGVFbGVtZW50IiwiT2JqZWN0IiwiYXNzaWduIiwidXJsIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsIndhcm5Db250YWluZXIiLCJ3YXJuVXJsIiwiZXhlY09uY2UiLCJ3YXJuIiwicCIsImNoaWxkcmVuIiwicGF0aG5hbWUiLCJhc1BhdGgiLCJxdWVyeSIsImJhY2siLCJwdXNoIiwiYXMiLCJwdXNoVG8iLCJocmVmIiwicHVzaFJvdXRlIiwicHVzaFVybCIsInJlcGxhY2UiLCJyZXBsYWNlVG8iLCJyZXBsYWNlUm91dGUiLCJyZXBsYWNlVXJsIiwiTXlBcHAiLCJhcHBDb250ZXh0IiwibW9ieFN0b3JlIiwiaW5pdGlhbGl6ZVN0b3JlIiwiaW5pdGlhbE1vYnhTdGF0ZSIsImlzU2VydmVyIiwid2l0aEFwb2xsb0NsaWVudCIsInVzZVN0YXRpY1JlbmRlcmluZyIsIlN0b3JlIiwib2JzZXJ2YWJsZSIsInBlcnNpc3QiLCJhY3Rpb24iLCJuZXdEYXRlIiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsInBubCIsImhhc2giLCJnbG9iYWxIYXNoIiwidGltZSIsIm5vdGUiLCJ0ZW1wTm90ZXMiLCJ1bmRlZmluZWQiLCJuZXdOb3RlIiwiYWxyZWFkeVByZXNlbnROb3RlIiwiaSIsImxlbmd0aCIsInRhZyIsIm5ld1RhZyIsInRlbXBUYWdzIiwiY2hhbmdlSGFzVGVtcFRhZ3MiLCJoYXNUZW1wVGFncyIsIm5ld1N5bWJvbCIsInN5bWJvbCIsImRhdCIsInNpbmdsZVRyYWRlIiwic3RvcmUiLCJoeWRyYXRlIiwiU3RvcmVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsImluaXRpYWxEYXRhIiwidGhlbiJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFD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dmVsb3BtZW50L3BhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyIsIi8vIGV4cG9ydCBmdW5jdGlvbiBmb3JtYXREYXRlTW9udGhPbmx5KGRhdGUpIHtcbi8vICAgdmFyIG1vbnRoTmFtZXMgPSBbXG4vLyAgICAgXCJKYW5cIixcbi8vICAgICBcIkZlYlwiLFxuLy8gICAgIFwiTWFyXCIsXG4vLyAgICAgXCJBcHJcIixcbi8vICAgICBcIk1heVwiLFxuLy8gICAgIFwiSnVuXCIsXG4vLyAgICAgXCJKdWxcIixcbi8vICAgICBcIkF1Z1wiLFxuLy8gICAgIFwiU2VwdFwiLFxuLy8gICAgIFwiT2N0XCIsXG4vLyAgICAgXCJOb3ZcIixcbi8vICAgICBcIkRlY1wiLFxuLy8gICBdO1xuLy8gICBsZXQgdXRjRGF0ZSA9IGRhdGU7XG4vLyAgIGxldCB0aGVEYXRlID0gbmV3IERhdGUodXRjRGF0ZSk7XG5cbi8vICAgdmFyIGRheSA9IHRoZURhdGUuZ2V0RGF0ZSgpO1xuLy8gICB2YXIgaG91cnMgPSBhZGRaZXJvQmVmb3JlKHRoZURhdGUuZ2V0SG91cnMoKSk7XG4vLyAgIHZhciBtaW5zID0gYWRkWmVyb0JlZm9yZSh0aGVEYXRlLmdldE1pbnV0ZXMoKSk7XG4vLyAgIHZhciBtb250aEluZGV4ID0gYWRkWmVyb0JlZm9yZSh0aGVEYXRlLmdldE1vbnRoKCkpO1xuLy8gICB2YXIgeWVhciA9IGFkZFplcm9CZWZvcmUodGhlRGF0ZS5nZXRGdWxsWWVhcigpKTtcblxuLy8gICByZXR1cm4gKFxuLy8gICAgIGRheSArIFwiLVwiICsgbW9udGhJbmRleC50b1N0cmluZygpICsgXCItXCIgKyB5ZWFyICsgXCIgXCIgKyBob3VycyArIFwiOlwiICsgbWluc1xuLy8gICApO1xuLy8gfVxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdERhdGVNb250aE9ubHkoZGF0ZSkge1xuICB2YXIgbW9udGhOYW1lcyA9IFtcbiAgICBcIkphblwiLFxuICAgIFwiRmViXCIsXG4gICAgXCJNYXJcIixcbiAgICBcIkFwclwiLFxuICAgIFwiTWF5XCIsXG4gICAgXCJKdW5cIixcbiAgICBcIkp1bFwiLFxuICAgIFwiQXVnXCIsXG4gICAgXCJTZXB0XCIsXG4gICAgXCJPY3RcIixcbiAgICBcIk5vdlwiLFxuICAgIFwiRGVjXCIsXG4gIF07XG4gIGxldCB1dGNEYXRlID0gZGF0ZTtcbiAgbGV0IHRoZURhdGUgPSBuZXcgRGF0ZSh1dGNEYXRlKTtcblxuICB2YXIgZGF5ID0gdGhlRGF0ZS5nZXREYXRlKCk7XG4gIHZhciBob3VycyA9IGFkZFplcm9CZWZvcmUodGhlRGF0ZS5nZXRIb3VycygpKTtcbiAgdmFyIG1pbnMgPSBhZGRaZXJvQmVmb3JlKHRoZURhdGUuZ2V0TWludXRlcygpKTtcbiAgdmFyIG1vbnRoSW5kZXggPSB0aGVEYXRlLmdldE1vbnRoKCk7XG4gIC8vIHZhciBtb250aEluZGV4ID0gYWRkWmVyb0JlZm9yZSh0aGVEYXRlLmdldE1vbnRoKCkpO1xuICB2YXIgeWVhciA9IHRoZURhdGUuZ2V0RnVsbFllYXIoKTtcblxuICByZXR1cm4gZGF5ICsgXCIgXCIgKyBtb250aE5hbWVzW21vbnRoSW5kZXhdICsgXCIsIFwiICsgaG91cnMgKyBcIjpcIiArIG1pbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXREYXRlU2hvcnQoZGF0ZSkge1xuICBsZXQgdXRjRGF0ZSA9IGRhdGU7XG4gIGxldCB0aGVEYXRlID0gbmV3IERhdGUodXRjRGF0ZSk7XG5cbiAgdmFyIGRheSA9IGFkZFplcm9CZWZvcmUodGhlRGF0ZS5nZXREYXRlKCkpO1xuICB2YXIgaG91cnMgPSBhZGRaZXJvQmVmb3JlKHRoZURhdGUuZ2V0SG91cnMoKSk7XG4gIHZhciBtaW5zID0gYWRkWmVyb0JlZm9yZSh0aGVEYXRlLmdldE1pbnV0ZXMoKSk7XG4gIHZhciBtb250aEluZGV4ID0gYWRkWmVyb0JlZm9yZSh0aGVEYXRlLmdldE1vbnRoKCkpO1xuICB2YXIgeWVhciA9IHRoZURhdGUuZ2V0RnVsbFllYXIoKTtcblxuICByZXR1cm4gbW9udGhJbmRleC50b1N0cmluZygpICsgXCIvXCIgKyBkYXkudG9TdHJpbmcoKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXREYXRlU2hvcnRXaXRoSG91cihkYXRlKSB7XG4gIGxldCB1dGNEYXRlID0gZGF0ZTtcbiAgbGV0IHRoZURhdGUgPSBuZXcgRGF0ZSh1dGNEYXRlKTtcblxuICB2YXIgZGF5ID0gYWRkWmVyb0JlZm9yZSh0aGVEYXRlLmdldERhdGUoKSk7XG4gIHZhciBob3VycyA9IGFkZFplcm9CZWZvcmUodGhlRGF0ZS5nZXRIb3VycygpKTtcbiAgdmFyIG1pbnMgPSBhZGRaZXJvQmVmb3JlKHRoZURhdGUuZ2V0TWludXRlcygpKTtcbiAgdmFyIG1vbnRoSW5kZXggPSBhZGRaZXJvQmVmb3JlKHRoZURhdGUuZ2V0TW9udGgoKSk7XG4gIHZhciB5ZWFyID0gdGhlRGF0ZS5nZXRGdWxsWWVhcigpO1xuXG4gIHJldHVybiAoXG4gICAgbW9udGhJbmRleC50b1N0cmluZygpICtcbiAgICBcIi9cIiArXG4gICAgZGF5LnRvU3RyaW5nKCkgK1xuICAgIFwiIFwiICtcbiAgICBob3Vycy50b1N0cmluZygpICtcbiAgICBcIjpcIiArXG4gICAgbWlucy50b1N0cmluZygpXG4gICk7XG59XG5cbmZ1bmN0aW9uIGFkZFplcm9CZWZvcmUobikge1xuICByZXR1cm4gKG4gPCAxMCA/IFwiMFwiIDogXCJcIikgKyBuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RhdGVEYXRlKGlucHV0KSB7XG4gIGlmIChpbnB1dCA9PSBcIlRvZGF5XCIpIHtcbiAgICBsZXQgZGF0ZXMgPSB7fTtcbiAgICBkYXRlcy5lbmQgPSBtYWtlRGF0ZUhycygwKTtcbiAgICBkYXRlcy5zdGFydCA9IG1ha2VEYXRlSHJzKDI0KTtcbiAgICBjb25zb2xlLmxvZyhcImlzIHRvZGF5XCIpO1xuICAgIHJldHVybiBkYXRlcztcbiAgfVxuICBpZiAoaW5wdXQgPT0gXCJZZXN0ZXJkYXlcIikge1xuICAgIGxldCBkYXRlcyA9IHt9O1xuICAgIGRhdGVzLmVuZCA9IG1ha2VEYXRlSHJzKDEpO1xuICAgIGRhdGVzLnN0YXJ0ID0gbWFrZURhdGVEYXlzKDIpO1xuICAgIGNvbnNvbGUubG9nKFwiaXMgeWVzdGVyZGF5XCIpO1xuICAgIHJldHVybiBkYXRlcztcbiAgfVxuICBpZiAoaW5wdXQgPT0gXCJUaGlzIFdlZWtcIikge1xuICAgIGxldCBkYXRlcyA9IHt9O1xuICAgIGRhdGVzLmVuZCA9IG1ha2VEYXRlSHJzKDApO1xuICAgIGRhdGVzLnN0YXJ0ID0gbWFrZURhdGVEYXlzKDcpO1xuICAgIGNvbnNvbGUubG9nKFwiaXMgdGhpcyB3ZWVrXCIpO1xuICAgIHJldHVybiBkYXRlcztcbiAgfVxuICBpZiAoaW5wdXQgPT0gXCJUaGlzIE1vbnRoXCIpIHtcbiAgICBsZXQgZGF0ZXMgPSB7fTtcbiAgICBkYXRlcy5lbmQgPSBtYWtlRGF0ZUhycygwKTtcbiAgICBkYXRlcy5zdGFydCA9IG1ha2VEYXRlRGF5cygzMCk7XG4gICAgY29uc29sZS5sb2coXCJpcyB0aGlzIG1vbnRoXCIpO1xuICAgIHJldHVybiBkYXRlcztcbiAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VEYXRlSHJzKGhyc0JhY2spIHtcbiAgaWYgKGhyc0JhY2sgPT0gMCkge1xuICAgIGxldCBkdCA9IG5ldyBEYXRlKG5ldyBEYXRlKCkudG9VVENTdHJpbmcoKSk7XG4gICAgZHQgPSBkdC50b0lTT1N0cmluZygpO1xuICAgIHJldHVybiBkdDtcbiAgfSBlbHNlIHtcbiAgICBsZXQgZHQgPSBuZXcgRGF0ZShuZXcgRGF0ZSgpLnRvVVRDU3RyaW5nKCkpO1xuICAgIGR0LnNldEhvdXJzKGR0LmdldEhvdXJzKCkgLSBocnNCYWNrKTtcbiAgICBkdCA9IGR0LnRvSVNPU3RyaW5nKCk7XG4gICAgcmV0dXJuIGR0O1xuICB9XG59XG5leHBvcnQgZnVuY3Rpb24gbWFrZURhdGVEYXlzKG51bSkge1xuICBsZXQgZHQgPSBuZXcgRGF0ZShuZXcgRGF0ZSgpLnRvVVRDU3RyaW5nKCkpO1xuICBkdC5zZXREYXRlKGR0LmdldERhdGUoKSAtIG51bSk7XG4gIGR0ID0gZHQudG9JU09TdHJpbmcoKTtcbiAgY29uc29sZS5sb2coXCJnZXR0aW5nIGRheXMgYmFja1wiKTtcbiAgcmV0dXJuIGR0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsY0NvbW1pc3Npb24ocHJpY2UsIHNpZGUsIHF0eSwgbGVhdmVzUXR5LCBvcmRlclR5cGUpIHtcbiAgbGV0IHJlYWxRdHkgPSBxdHkgLSBsZWF2ZXNRdHk7XG4gIGxldCBjb21taXNzaW9uO1xuICBpZiAob3JkZXJUeXBlID09IFwiTWFya2V0XCIpIHtcbiAgICBjb21taXNzaW9uID0gKHJlYWxRdHkgKiAwLjAwNzUpIC8gcHJpY2U7XG4gICAgY29tbWlzc2lvbiA9IGNvbW1pc3Npb24gKiAtMTtcbiAgfVxuICBpZiAob3JkZXJUeXBlLmluY2x1ZGVzKFwiU3RvcFwiKSkge1xuICAgIGNvbW1pc3Npb24gPSAocmVhbFF0eSAqIDAuMDA3NSkgLyBwcmljZTtcbiAgICBjb21taXNzaW9uID0gY29tbWlzc2lvbiAqIC0xO1xuICB9XG4gIGlmIChvcmRlclR5cGUgPT0gXCJMaW1pdFwiKSB7XG4gICAgY29tbWlzc2lvbiA9IChyZWFsUXR5ICogMC4wMDI1KSAvIHByaWNlO1xuICB9XG4gIHJldHVybiBjb21taXNzaW9uLnRvRml4ZWQoNSk7XG59XG4iLCJpbXBvcnQgeyBBcG9sbG9DbGllbnQsIEluTWVtb3J5Q2FjaGUsIEh0dHBMaW5rIH0gZnJvbSBcImFwb2xsby1ib29zdFwiO1xuaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLXVuZmV0Y2hcIjtcblxubGV0IGFwb2xsb0NsaWVudCA9IG51bGw7XG5cbi8vIFBvbHlmaWxsIGZldGNoKCkgb24gdGhlIHNlcnZlciAodXNlZCBieSBhcG9sbG8tY2xpZW50KVxuaWYgKCFwcm9jZXNzLmJyb3dzZXIpIHtcbiAgZ2xvYmFsLmZldGNoID0gZmV0Y2g7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZShpbml0aWFsU3RhdGUpIHtcbiAgY29uc29sZS5sb2coXCJOT0RFIEVOViBpc1wiICsgcHJvY2Vzcy5lbnYuTk9ERV9FTlYpO1xuICBsZXQgdXJpO1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICB1cmkgPSBcImh0dHBzOi8vYml0c2pvdXJuYWwtYmFja2VuZC5jb21cIjtcbiAgfSBlbHNlIHtcbiAgICB1cmkgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9ncmFwaHFsXCI7IC8vIFNlcnZlciBVUkwgKG11c3QgYmUgYWJzb2x1dGUpXG4gIH1cbiAgY29uc29sZS5sb2codXJpKTtcblxuICAvLyBDaGVjayBvdXQgaHR0cHM6Ly9naXRodWIuY29tL3plaXQvbmV4dC5qcy9wdWxsLzQ2MTEgaWYgeW91IHdhbnQgdG8gdXNlIHRoZSBBV1NBcHBTeW5jQ2xpZW50XG4gIHJldHVybiBuZXcgQXBvbGxvQ2xpZW50KHtcbiAgICBjb25uZWN0VG9EZXZUb29sczogcHJvY2Vzcy5icm93c2VyLFxuICAgIHNzck1vZGU6ICFwcm9jZXNzLmJyb3dzZXIsIC8vIERpc2FibGVzIGZvcmNlRmV0Y2ggb24gdGhlIHNlcnZlciAoc28gcXVlcmllcyBhcmUgb25seSBydW4gb25jZSlcbiAgICBsaW5rOiBuZXcgSHR0cExpbmsoe1xuICAgICAgdXJpOiB1cmksXG4gICAgICBjcmVkZW50aWFsczogXCJpbmNsdWRlXCIsIC8vIEFkZGl0aW9uYWwgZmV0Y2goKSBvcHRpb25zIGxpa2UgYGNyZWRlbnRpYWxzYCBvciBgaGVhZGVyc2BcbiAgICB9KSxcbiAgICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoKS5yZXN0b3JlKGluaXRpYWxTdGF0ZSB8fCB7fSksXG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0QXBvbGxvKGluaXRpYWxTdGF0ZSkge1xuICAvLyBNYWtlIHN1cmUgdG8gY3JlYXRlIGEgbmV3IGNsaWVudCBmb3IgZXZlcnkgc2VydmVyLXNpZGUgcmVxdWVzdCBzbyB0aGF0IGRhdGFcbiAgLy8gaXNuJ3Qgc2hhcmVkIGJldHdlZW4gY29ubmVjdGlvbnMgKHdoaWNoIHdvdWxkIGJlIGJhZClcbiAgaWYgKCFwcm9jZXNzLmJyb3dzZXIpIHtcbiAgICByZXR1cm4gY3JlYXRlKGluaXRpYWxTdGF0ZSk7XG4gIH1cblxuICAvLyBSZXVzZSBjbGllbnQgb24gdGhlIGNsaWVudC1zaWRlXG4gIGlmICghYXBvbGxvQ2xpZW50KSB7XG4gICAgYXBvbGxvQ2xpZW50ID0gY3JlYXRlKGluaXRpYWxTdGF0ZSk7XG4gIH1cblxuICByZXR1cm4gYXBvbGxvQ2xpZW50O1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGluaXRBcG9sbG8gZnJvbSAnLi9pbml0LWFwb2xsbydcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IGdldERhdGFGcm9tVHJlZSB9IGZyb20gJ3JlYWN0LWFwb2xsbydcblxuZXhwb3J0IGRlZmF1bHQgQXBwID0+IHtcbiAgcmV0dXJuIGNsYXNzIEFwb2xsbyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIGRpc3BsYXlOYW1lID0gJ3dpdGhBcG9sbG8oQXBwKSdcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzIChjdHgpIHtcbiAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCByb3V0ZXIgfSA9IGN0eFxuXG4gICAgICBsZXQgYXBwUHJvcHMgPSB7fVxuICAgICAgaWYgKEFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgICAgYXBwUHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcbiAgICAgIH1cblxuICAgICAgLy8gUnVuIGFsbCBHcmFwaFFMIHF1ZXJpZXMgaW4gdGhlIGNvbXBvbmVudCB0cmVlXG4gICAgICAvLyBhbmQgZXh0cmFjdCB0aGUgcmVzdWx0aW5nIGRhdGFcbiAgICAgIGNvbnN0IGFwb2xsbyA9IGluaXRBcG9sbG8oKVxuICAgICAgaWYgKCFwcm9jZXNzLmJyb3dzZXIpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBSdW4gYWxsIEdyYXBoUUwgcXVlcmllc1xuICAgICAgICAgIGF3YWl0IGdldERhdGFGcm9tVHJlZShcbiAgICAgICAgICAgIDxBcHBcbiAgICAgICAgICAgICAgey4uLmFwcFByb3BzfVxuICAgICAgICAgICAgICBDb21wb25lbnQ9e0NvbXBvbmVudH1cbiAgICAgICAgICAgICAgcm91dGVyPXtyb3V0ZXJ9XG4gICAgICAgICAgICAgIGFwb2xsb0NsaWVudD17YXBvbGxvfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgLy8gUHJldmVudCBBcG9sbG8gQ2xpZW50IEdyYXBoUUwgZXJyb3JzIGZyb20gY3Jhc2hpbmcgU1NSLlxuICAgICAgICAgIC8vIEhhbmRsZSB0aGVtIGluIGNvbXBvbmVudHMgdmlhIHRoZSBkYXRhLmVycm9yIHByb3A6XG4gICAgICAgICAgLy8gaHR0cHM6Ly93d3cuYXBvbGxvZ3JhcGhxbC5jb20vZG9jcy9yZWFjdC9hcGkvcmVhY3QtYXBvbGxvLmh0bWwjZ3JhcGhxbC1xdWVyeS1kYXRhLWVycm9yXG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3Igd2hpbGUgcnVubmluZyBgZ2V0RGF0YUZyb21UcmVlYCcsIGVycm9yKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gZ2V0RGF0YUZyb21UcmVlIGRvZXMgbm90IGNhbGwgY29tcG9uZW50V2lsbFVubW91bnRcbiAgICAgICAgLy8gaGVhZCBzaWRlIGVmZmVjdCB0aGVyZWZvcmUgbmVlZCB0byBiZSBjbGVhcmVkIG1hbnVhbGx5XG4gICAgICAgIEhlYWQucmV3aW5kKClcbiAgICAgIH1cblxuICAgICAgLy8gRXh0cmFjdCBxdWVyeSBkYXRhIGZyb20gdGhlIEFwb2xsbyBzdG9yZVxuICAgICAgY29uc3QgYXBvbGxvU3RhdGUgPSBhcG9sbG8uY2FjaGUuZXh0cmFjdCgpXG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmFwcFByb3BzLFxuICAgICAgICBhcG9sbG9TdGF0ZVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgICAgc3VwZXIocHJvcHMpXG4gICAgICB0aGlzLmFwb2xsb0NsaWVudCA9IGluaXRBcG9sbG8ocHJvcHMuYXBvbGxvU3RhdGUpXG4gICAgfVxuXG4gICAgcmVuZGVyICgpIHtcbiAgICAgIHJldHVybiA8QXBwIHsuLi50aGlzLnByb3BzfSBhcG9sbG9DbGllbnQ9e3RoaXMuYXBvbGxvQ2xpZW50fSAvPlxuICAgIH1cbiAgfVxufVxuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9wYWdlcy9fYXBwJylcbiIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLkNvbnRhaW5lcj1Db250YWluZXI7ZXhwb3J0cy5jcmVhdGVVcmw9Y3JlYXRlVXJsO2V4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF91dGlscz1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzXCIpO2V4cG9ydHMuQXBwSW5pdGlhbFByb3BzPV91dGlscy5BcHBJbml0aWFsUHJvcHM7LyoqXG4gKiBgQXBwYCBjb21wb25lbnQgaXMgdXNlZCBmb3IgaW5pdGlhbGl6ZSBvZiBwYWdlcy4gSXQgYWxsb3dzIGZvciBvdmVyd3JpdGluZyBhbmQgZnVsbCBjb250cm9sIG9mIHRoZSBgcGFnZWAgaW5pdGlhbGl6YXRpb24uXG4gKiBUaGlzIGFsbG93cyBmb3Iga2VlcGluZyBzdGF0ZSBiZXR3ZWVuIG5hdmlnYXRpb24sIGN1c3RvbSBlcnJvciBoYW5kbGluZywgaW5qZWN0aW5nIGFkZGl0aW9uYWwgZGF0YS5cbiAqL2FzeW5jIGZ1bmN0aW9uIGFwcEdldEluaXRpYWxQcm9wcyhfcmVmKXt2YXJ7Q29tcG9uZW50LGN0eH09X3JlZjt2YXIgcGFnZVByb3BzPWF3YWl0KDAsX3V0aWxzLmxvYWRHZXRJbml0aWFsUHJvcHMpKENvbXBvbmVudCxjdHgpO3JldHVybntwYWdlUHJvcHN9O31jbGFzcyBBcHAgZXh0ZW5kcyBfcmVhY3QuZGVmYXVsdC5Db21wb25lbnR7Ly8gS2VwdCBoZXJlIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS5cbi8vIFdoZW4gc29tZW9uZSBlbmRlZCBBcHAgdGhleSBjb3VsZCBjYWxsIGBzdXBlci5jb21wb25lbnREaWRDYXRjaGAuXG4vLyBAZGVwcmVjYXRlZCBUaGlzIG1ldGhvZCBpcyBubyBsb25nZXIgbmVlZGVkLiBFcnJvcnMgYXJlIGNhdWdodCBhdCB0aGUgdG9wIGxldmVsXG5jb21wb25lbnREaWRDYXRjaChlcnJvcixfZXJyb3JJbmZvKXt0aHJvdyBlcnJvcjt9cmVuZGVyKCl7dmFye3JvdXRlcixDb21wb25lbnQscGFnZVByb3BzLF9fTl9TU0csX19OX1NTUH09dGhpcy5wcm9wcztyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb25lbnQsT2JqZWN0LmFzc2lnbih7fSxwYWdlUHJvcHMsLy8gd2UgZG9uJ3QgYWRkIHRoZSBsZWdhY3kgVVJMIHByb3AgaWYgaXQncyB1c2luZyBub24tbGVnYWN5XG4vLyBtZXRob2RzIGxpa2UgZ2V0U3RhdGljUHJvcHMgYW5kIGdldFNlcnZlclNpZGVQcm9wc1xuIShfX05fU1NHfHxfX05fU1NQKT97dXJsOmNyZWF0ZVVybChyb3V0ZXIpfTp7fSkpO319ZXhwb3J0cy5kZWZhdWx0PUFwcDtBcHAub3JpZ0dldEluaXRpYWxQcm9wcz1hcHBHZXRJbml0aWFsUHJvcHM7QXBwLmdldEluaXRpYWxQcm9wcz1hcHBHZXRJbml0aWFsUHJvcHM7dmFyIHdhcm5Db250YWluZXI7dmFyIHdhcm5Vcmw7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe3dhcm5Db250YWluZXI9KDAsX3V0aWxzLmV4ZWNPbmNlKSgoKT0+e2NvbnNvbGUud2FybihcIldhcm5pbmc6IHRoZSBgQ29udGFpbmVyYCBpbiBgX2FwcGAgaGFzIGJlZW4gZGVwcmVjYXRlZCBhbmQgc2hvdWxkIGJlIHJlbW92ZWQuIGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9hcHAtY29udGFpbmVyLWRlcHJlY2F0ZWRcIik7fSk7d2FyblVybD0oMCxfdXRpbHMuZXhlY09uY2UpKCgpPT57Y29uc29sZS5lcnJvcihcIldhcm5pbmc6IHRoZSAndXJsJyBwcm9wZXJ0eSBpcyBkZXByZWNhdGVkLiBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvdXJsLWRlcHJlY2F0ZWRcIik7fSk7fS8vIEBkZXByZWNhdGVkIG5vb3AgZm9yIG5vdyB1bnRpbCByZW1vdmFsXG5mdW5jdGlvbiBDb250YWluZXIocCl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpd2FybkNvbnRhaW5lcigpO3JldHVybiBwLmNoaWxkcmVuO31mdW5jdGlvbiBjcmVhdGVVcmwocm91dGVyKXsvLyBUaGlzIGlzIHRvIG1ha2Ugc3VyZSB3ZSBkb24ndCByZWZlcmVuY2VzIHRoZSByb3V0ZXIgb2JqZWN0IGF0IGNhbGwgdGltZVxudmFye3BhdGhuYW1lLGFzUGF0aCxxdWVyeX09cm91dGVyO3JldHVybntnZXQgcXVlcnkoKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl3YXJuVXJsKCk7cmV0dXJuIHF1ZXJ5O30sZ2V0IHBhdGhuYW1lKCl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpd2FyblVybCgpO3JldHVybiBwYXRobmFtZTt9LGdldCBhc1BhdGgoKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl3YXJuVXJsKCk7cmV0dXJuIGFzUGF0aDt9LGJhY2s6KCk9PntpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl3YXJuVXJsKCk7cm91dGVyLmJhY2soKTt9LHB1c2g6KHVybCxhcyk9PntpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl3YXJuVXJsKCk7cmV0dXJuIHJvdXRlci5wdXNoKHVybCxhcyk7fSxwdXNoVG86KGhyZWYsYXMpPT57aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpd2FyblVybCgpO3ZhciBwdXNoUm91dGU9YXM/aHJlZjonJzt2YXIgcHVzaFVybD1hc3x8aHJlZjtyZXR1cm4gcm91dGVyLnB1c2gocHVzaFJvdXRlLHB1c2hVcmwpO30scmVwbGFjZToodXJsLGFzKT0+e2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXdhcm5VcmwoKTtyZXR1cm4gcm91dGVyLnJlcGxhY2UodXJsLGFzKTt9LHJlcGxhY2VUbzooaHJlZixhcyk9PntpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl3YXJuVXJsKCk7dmFyIHJlcGxhY2VSb3V0ZT1hcz9ocmVmOicnO3ZhciByZXBsYWNlVXJsPWFzfHxocmVmO3JldHVybiByb3V0ZXIucmVwbGFjZShyZXBsYWNlUm91dGUscmVwbGFjZVVybCk7fX07fSIsImltcG9ydCBBcHAsIHsgQ29udGFpbmVyIH0gZnJvbSBcIm5leHQvYXBwXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgd2l0aEFwb2xsb0NsaWVudCBmcm9tIFwiLi4vbGliL3dpdGgtYXBvbGxvLWNsaWVudFwiO1xuaW1wb3J0IHsgQXBvbGxvUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtYXBvbGxvXCI7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJtb2J4LXJlYWN0XCI7XG5pbXBvcnQgeyBpbml0aWFsaXplU3RvcmUsIGh5ZHJhdGUgfSBmcm9tIFwiLi4vc3RvcmVzL3N0b3JlXCI7XG5cbmNsYXNzIE15QXBwIGV4dGVuZHMgQXBwIHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhhcHBDb250ZXh0KSB7XG4gICAgLy8gR2V0IG9yIENyZWF0ZSB0aGUgc3RvcmUgd2l0aCBgdW5kZWZpbmVkYCBhcyBpbml0aWFsU3RhdGVcbiAgICAvLyBUaGlzIGFsbG93cyB5b3UgdG8gc2V0IGEgY3VzdG9tIGRlZmF1bHQgaW5pdGlhbFN0YXRlXG4gICAgY29uc3QgbW9ieFN0b3JlID0gaW5pdGlhbGl6ZVN0b3JlKCk7XG5cbiAgICAvLyBQcm92aWRlIHRoZSBzdG9yZSB0byBnZXRJbml0aWFsUHJvcHMgb2YgcGFnZXNcbiAgICBhcHBDb250ZXh0LmN0eC5tb2J4U3RvcmUgPSBtb2J4U3RvcmU7XG4gICAgbGV0IGFwcFByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhhcHBDb250ZXh0KTtcblxuICAgIHJldHVybiB7XG4gICAgICAuLi5hcHBQcm9wcyxcbiAgICAgIGluaXRpYWxNb2J4U3RhdGU6IG1vYnhTdG9yZVxuICAgIH07XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBjb25zdCBpc1NlcnZlciA9ICFwcm9jZXNzLmJyb3dzZXI7XG4gICAgdGhpcy5tb2J4U3RvcmUgPSBpc1NlcnZlclxuICAgICAgPyBwcm9wcy5pbml0aWFsTW9ieFN0YXRlXG4gICAgICA6IGluaXRpYWxpemVTdG9yZShwcm9wcy5pbml0aWFsTW9ieFN0YXRlKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IENvbXBvbmVudCwgcGFnZVByb3BzLCBhcG9sbG9DbGllbnQgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxBcG9sbG9Qcm92aWRlciBjbGllbnQ9e2Fwb2xsb0NsaWVudH0+XG4gICAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXt0aGlzLm1vYnhTdG9yZX0+XG4gICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgPC9Qcm92aWRlcj5cbiAgICAgICAgPC9BcG9sbG9Qcm92aWRlcj5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aEFwb2xsb0NsaWVudChNeUFwcCk7XG4iLCJpbXBvcnQgeyBhY3Rpb24sIG9ic2VydmFibGUgfSBmcm9tIFwibW9ieFwiO1xuaW1wb3J0IHsgdXNlU3RhdGljUmVuZGVyaW5nLCBvYnNlcnZlciB9IGZyb20gXCJtb2J4LXJlYWN0XCI7XG5pbXBvcnQgeyBjcmVhdGUsIHBlcnNpc3QgfSBmcm9tIFwibW9ieC1wZXJzaXN0XCI7XG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBnZXRTdGF0ZURhdGUsXG4gIG1ha2VEYXRlSHJzLFxuICBtYWtlRGF0ZURheXMsXG59IGZyb20gXCIuLi9jb21wb25lbnRzL0hlbHBlcnMvRnVuY3Rpb25zXCI7XG5cbmNvbnN0IGlzU2VydmVyID0gIXByb2Nlc3MuYnJvd3NlcjtcbnVzZVN0YXRpY1JlbmRlcmluZyhpc1NlcnZlcik7XG5cbmV4cG9ydCBjbGFzcyBTdG9yZSB7XG4gIEBvYnNlcnZhYmxlIGxhc3RVcGRhdGUgPSAwO1xuICBAcGVyc2lzdCBAb2JzZXJ2YWJsZSBsaWdodCA9IHRydWU7XG4gIEBwZXJzaXN0IEBvYnNlcnZhYmxlIGlzQXV0aCA9IGZhbHNlO1xuICBAcGVyc2lzdCBAb2JzZXJ2YWJsZSBzdGFydERhdGUgPSBudWxsO1xuICBAcGVyc2lzdCBAb2JzZXJ2YWJsZSBlbmREYXRlID0gbnVsbDtcbiAgQHBlcnNpc3QgQG9ic2VydmFibGUgc3ltYm9sID0gXCJYQlRVU0RcIjtcblxuICBAcGVyc2lzdCBAb2JzZXJ2YWJsZSBkYXRlID0gXCJUb2RheVwiO1xuICBAb2JzZXJ2YWJsZSBwbmwgPSAwO1xuICBAb2JzZXJ2YWJsZSBnbG9iYWxIYXNoID0gW107XG4gIEBwZXJzaXN0IEBvYnNlcnZhYmxlIHRlbXBOb3RlcyA9IFtdO1xuICBAcGVyc2lzdCBAb2JzZXJ2YWJsZSB0ZW1wVGFncyA9IFtdO1xuICBAcGVyc2lzdCBAb2JzZXJ2YWJsZSBoYXNUZW1wVGFncyA9IGZhbHNlO1xuXG4gIEBwZXJzaXN0IEBvYnNlcnZhYmxlIHNpbmdsZVRyYWRlID0ge307XG4gIEBwZXJzaXN0IEBvYnNlcnZhYmxlIGhhc1NpbmdsZVRyYWRlID0gZmFsc2U7XG4gIEBwZXJzaXN0IEBvYnNlcnZhYmxlIGlzU2luZ2xlTm90ZXMgPSBmYWxzZTtcblxuICBAYWN0aW9uIGNoYW5nZURhdGUgPSAobmV3RGF0ZSkgPT4ge1xuICAgIGxldCBkYXRlcyA9IGdldFN0YXRlRGF0ZShuZXdEYXRlKTtcbiAgICB0aGlzLmRhdGUgPSBuZXdEYXRlO1xuICAgIHRoaXMuc3RhcnREYXRlID0gZGF0ZXMuc3RhcnQ7XG4gICAgdGhpcy5lbmREYXRlID0gZGF0ZXMuZW5kO1xuICB9O1xuXG4gIEBhY3Rpb24gYWRkUG5sID0gKHBubCkgPT4ge1xuICAgIHRoaXMucG5sICs9IHBubDtcbiAgfTtcblxuICBAYWN0aW9uIHJlc2V0UG5sID0gKCkgPT4ge1xuICAgIHRoaXMucG5sID0gMDtcbiAgfTtcblxuICBAYWN0aW9uIHB1c2hHbG9iYWxIYXNoID0gKGhhc2gpID0+IHtcbiAgICB0aGlzLmdsb2JhbEhhc2gucHVzaChoYXNoKTtcbiAgfTtcblxuICBAYWN0aW9uIGFkZFRlbXBOb3RlID0gKHRpbWUsIG5vdGUpID0+IHtcbiAgICBpZiAodGhpcy50ZW1wTm90ZXNbMF0gPT0gdW5kZWZpbmVkKSB7XG4gICAgICBsZXQgbmV3Tm90ZSA9IHt9O1xuICAgICAgbmV3Tm90ZVtcIm5vdGVcIl0gPSBub3RlO1xuICAgICAgbmV3Tm90ZVtcInRpbWVcIl0gPSB0aW1lO1xuICAgICAgdGhpcy50ZW1wTm90ZXMucHVzaChuZXdOb3RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGFscmVhZHlQcmVzZW50Tm90ZSA9IGZhbHNlO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRlbXBOb3Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodGhpcy50ZW1wTm90ZXNbaV0udGltZSA9PSB0aW1lKSB7XG4gICAgICAgICAgdGhpcy50ZW1wTm90ZXNbaV0ubm90ZSA9IG5vdGU7XG4gICAgICAgICAgYWxyZWFkeVByZXNlbnROb3RlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaSA9PSB0aGlzLnRlbXBOb3Rlcy5sZW5ndGggLSAxICYmIGFscmVhZHlQcmVzZW50Tm90ZSA9PSBmYWxzZSkge1xuICAgICAgICAgIGxldCBuZXdOb3RlID0ge307XG4gICAgICAgICAgbmV3Tm90ZVtcIm5vdGVcIl0gPSBub3RlO1xuICAgICAgICAgIG5ld05vdGVbXCJ0aW1lXCJdID0gdGltZTtcbiAgICAgICAgICB0aGlzLnRlbXBOb3Rlcy5wdXNoKG5ld05vdGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIEBhY3Rpb24gY2xlYXJUZW1wTm90ZXMgPSAoKSA9PiB7XG4gICAgdGhpcy50ZW1wTm90ZXMgPSBbXTtcbiAgfTtcblxuICBAYWN0aW9uIGFkZFRlbXBUYWcgPSAodGltZSwgdGFnKSA9PiB7XG4gICAgbGV0IG5ld1RhZyA9IHt9O1xuICAgIG5ld1RhZ1tcInRhZ1wiXSA9IHRhZztcbiAgICBuZXdUYWdbXCJ0aW1lXCJdID0gdGltZTtcbiAgICB0aGlzLnRlbXBUYWdzLnB1c2gobmV3VGFnKTtcbiAgICB0aGlzLmNoYW5nZUhhc1RlbXBUYWdzKCk7XG4gIH07XG5cbiAgQGFjdGlvbiBjbGVhclRlbXBUYWdzID0gKCkgPT4ge1xuICAgIHRoaXMudGVtcFRhZ3MgPSBbXTtcbiAgfTtcblxuICBAYWN0aW9uIGNoYW5nZUhhc1RlbXBUYWdzID0gKCkgPT4ge1xuICAgIHRoaXMuaGFzVGVtcFRhZ3MgPSB0cnVlO1xuICB9O1xuICBAYWN0aW9uIHJlc2V0SGFzVGVtcFRhZ3MgPSAoKSA9PiB7XG4gICAgdGhpcy5oYXNUZW1wVGFncyA9IGZhbHNlO1xuICB9O1xuICBAYWN0aW9uIHNldFN5bWJvbCA9IChuZXdTeW1ib2wpID0+IHtcbiAgICB0aGlzLnN5bWJvbCA9IG5ld1N5bWJvbDtcbiAgfTtcblxuICBAYWN0aW9uIHJlc2V0UG5sID0gKCkgPT4ge1xuICAgIHRoaXMucG5sID0gMDtcbiAgfTtcblxuICBAYWN0aW9uIHNldFNpbmdsZVRyYWRlID0gKGRhdCkgPT4ge1xuICAgIHRoaXMuc2luZ2xlVHJhZGUgPSBkYXQ7XG4gIH07XG59XG5cbmxldCBzdG9yZSA9IG51bGw7XG5leHBvcnQgY29uc3QgaHlkcmF0ZSA9IGNyZWF0ZSgpO1xuZXhwb3J0IGNvbnN0IFN0b3JlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQobmV3IFN0b3JlKCkpO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZVN0b3JlKGluaXRpYWxEYXRhKSB7XG4gIC8vIEFsd2F5cyBtYWtlIGEgbmV3IHN0b3JlIGlmIHNlcnZlciwgb3RoZXJ3aXNlIHN0YXRlIGlzIHNoYXJlZCBiZXR3ZWVuIHJlcXVlc3RzXG4gIGlmIChpc1NlcnZlcikge1xuICAgIHJldHVybiBuZXcgU3RvcmUoaXNTZXJ2ZXIsIGluaXRpYWxEYXRhKTtcbiAgfVxuICBpZiAoc3RvcmUgPT09IG51bGwpIHtcbiAgICBzdG9yZSA9IG5ldyBTdG9yZShpc1NlcnZlciwgaW5pdGlhbERhdGEpO1xuICB9XG5cbiAgaHlkcmF0ZShcInN0b3JlXCIsIHN0b3JlKS50aGVuKCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcInNvbWVTdG9yZSBoYXMgYmVlbiBoeWRyYXRlZFwiKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHN0b3JlO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLWJvb3N0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzb21vcnBoaWMtdW5mZXRjaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb2J4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vYngtcGVyc2lzdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb2J4LXJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1hcG9sbG9cIik7Il0sInNvdXJjZVJvb3QiOiIifQ==