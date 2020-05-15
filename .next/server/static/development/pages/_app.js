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
  // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
  return new apollo_boost__WEBPACK_IMPORTED_MODULE_0__["ApolloClient"]({
    connectToDevTools: false,
    ssrMode: !false,
    // Disables forceFetch on the server (so queries are only run once)
    link: new apollo_boost__WEBPACK_IMPORTED_MODULE_0__["HttpLink"]({
      uri: "http://localhost:4000/graphql",
      // Server URL (must be absolute)
      // uri: "https://bitsjournal-backend.com",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVscGVycy9GdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2luaXQtYXBvbGxvLmpzIiwid2VicGFjazovLy8uL2xpYi93aXRoLWFwb2xsby1jbGllbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZXMvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXBvbGxvLWJvb3N0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaXNvbW9ycGhpYy11bmZldGNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9ieFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vYngtcGVyc2lzdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vYngtcmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWFwb2xsb1wiIl0sIm5hbWVzIjpbImZvcm1hdERhdGVNb250aE9ubHkiLCJkYXRlIiwibW9udGhOYW1lcyIsInV0Y0RhdGUiLCJ0aGVEYXRlIiwiRGF0ZSIsImRheSIsImdldERhdGUiLCJob3VycyIsImFkZFplcm9CZWZvcmUiLCJnZXRIb3VycyIsIm1pbnMiLCJnZXRNaW51dGVzIiwibW9udGhJbmRleCIsImdldE1vbnRoIiwieWVhciIsImdldEZ1bGxZZWFyIiwiZm9ybWF0RGF0ZVNob3J0IiwidG9TdHJpbmciLCJmb3JtYXREYXRlU2hvcnRXaXRoSG91ciIsIm4iLCJnZXRTdGF0ZURhdGUiLCJpbnB1dCIsImRhdGVzIiwiZW5kIiwibWFrZURhdGVIcnMiLCJzdGFydCIsImNvbnNvbGUiLCJsb2ciLCJtYWtlRGF0ZURheXMiLCJocnNCYWNrIiwiZHQiLCJ0b1VUQ1N0cmluZyIsInRvSVNPU3RyaW5nIiwic2V0SG91cnMiLCJudW0iLCJzZXREYXRlIiwiY2FsY0NvbW1pc3Npb24iLCJwcmljZSIsInNpZGUiLCJxdHkiLCJsZWF2ZXNRdHkiLCJvcmRlclR5cGUiLCJyZWFsUXR5IiwiY29tbWlzc2lvbiIsImluY2x1ZGVzIiwidG9GaXhlZCIsImFwb2xsb0NsaWVudCIsImdsb2JhbCIsImZldGNoIiwiY3JlYXRlIiwiaW5pdGlhbFN0YXRlIiwiQXBvbGxvQ2xpZW50IiwiY29ubmVjdFRvRGV2VG9vbHMiLCJzc3JNb2RlIiwibGluayIsIkh0dHBMaW5rIiwidXJpIiwiY3JlZGVudGlhbHMiLCJjYWNoZSIsIkluTWVtb3J5Q2FjaGUiLCJyZXN0b3JlIiwiaW5pdEFwb2xsbyIsIkFwcCIsIkFwb2xsbyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4Iiwicm91dGVyIiwiYXBwUHJvcHMiLCJhcG9sbG8iLCJnZXREYXRhRnJvbVRyZWUiLCJlcnJvciIsIkhlYWQiLCJyZXdpbmQiLCJhcG9sbG9TdGF0ZSIsImV4dHJhY3QiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwicmVuZGVyIiwiZGlzcGxheU5hbWUiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsImV4cG9ydHMiLCJfX2VzTW9kdWxlIiwiQ29udGFpbmVyIiwiY3JlYXRlVXJsIiwiZGVmYXVsdCIsIl9yZWFjdCIsIl91dGlscyIsIkFwcEluaXRpYWxQcm9wcyIsImFwcEdldEluaXRpYWxQcm9wcyIsIl9yZWYiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiY29tcG9uZW50RGlkQ2F0Y2giLCJfZXJyb3JJbmZvIiwiX19OX1NTRyIsIl9fTl9TU1AiLCJjcmVhdGVFbGVtZW50IiwiT2JqZWN0IiwiYXNzaWduIiwidXJsIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsIndhcm5Db250YWluZXIiLCJ3YXJuVXJsIiwiZXhlY09uY2UiLCJ3YXJuIiwicCIsImNoaWxkcmVuIiwicGF0aG5hbWUiLCJhc1BhdGgiLCJxdWVyeSIsImJhY2siLCJwdXNoIiwiYXMiLCJwdXNoVG8iLCJocmVmIiwicHVzaFJvdXRlIiwicHVzaFVybCIsInJlcGxhY2UiLCJyZXBsYWNlVG8iLCJyZXBsYWNlUm91dGUiLCJyZXBsYWNlVXJsIiwiTXlBcHAiLCJhcHBDb250ZXh0IiwibW9ieFN0b3JlIiwiaW5pdGlhbGl6ZVN0b3JlIiwiaW5pdGlhbE1vYnhTdGF0ZSIsImlzU2VydmVyIiwid2l0aEFwb2xsb0NsaWVudCIsInVzZVN0YXRpY1JlbmRlcmluZyIsIlN0b3JlIiwib2JzZXJ2YWJsZSIsInBlcnNpc3QiLCJhY3Rpb24iLCJuZXdEYXRlIiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsInBubCIsImhhc2giLCJnbG9iYWxIYXNoIiwidGltZSIsIm5vdGUiLCJ0ZW1wTm90ZXMiLCJ1bmRlZmluZWQiLCJuZXdOb3RlIiwiYWxyZWFkeVByZXNlbnROb3RlIiwiaSIsImxlbmd0aCIsInRhZyIsIm5ld1RhZyIsInRlbXBUYWdzIiwiY2hhbmdlSGFzVGVtcFRhZ3MiLCJoYXNUZW1wVGFncyIsIm5ld1N5bWJvbCIsInN5bWJvbCIsImRhdCIsInNpbmdsZVRyYWRlIiwic3RvcmUiLCJoeWRyYXRlIiwiU3RvcmVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsImluaXRpYWxEYXRhIiwidGhlbiJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDeEZBLCtEOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLFNBQVNBLG1CQUFULENBQTZCQyxJQUE3QixFQUFtQztBQUN4QyxNQUFJQyxVQUFVLEdBQUcsQ0FDZixLQURlLEVBRWYsS0FGZSxFQUdmLEtBSGUsRUFJZixLQUplLEVBS2YsS0FMZSxFQU1mLEtBTmUsRUFPZixLQVBlLEVBUWYsS0FSZSxFQVNmLE1BVGUsRUFVZixLQVZlLEVBV2YsS0FYZSxFQVlmLEtBWmUsQ0FBakI7QUFjQSxNQUFJQyxPQUFPLEdBQUdGLElBQWQ7QUFDQSxNQUFJRyxPQUFPLEdBQUcsSUFBSUMsSUFBSixDQUFTRixPQUFULENBQWQ7QUFFQSxNQUFJRyxHQUFHLEdBQUdGLE9BQU8sQ0FBQ0csT0FBUixFQUFWO0FBQ0EsTUFBSUMsS0FBSyxHQUFHQyxhQUFhLENBQUNMLE9BQU8sQ0FBQ00sUUFBUixFQUFELENBQXpCO0FBQ0EsTUFBSUMsSUFBSSxHQUFHRixhQUFhLENBQUNMLE9BQU8sQ0FBQ1EsVUFBUixFQUFELENBQXhCO0FBQ0EsTUFBSUMsVUFBVSxHQUFHVCxPQUFPLENBQUNVLFFBQVIsRUFBakIsQ0FyQndDLENBc0J4Qzs7QUFDQSxNQUFJQyxJQUFJLEdBQUdYLE9BQU8sQ0FBQ1ksV0FBUixFQUFYO0FBRUEsU0FBT1YsR0FBRyxHQUFHLEdBQU4sR0FBWUosVUFBVSxDQUFDVyxVQUFELENBQXRCLEdBQXFDLElBQXJDLEdBQTRDTCxLQUE1QyxHQUFvRCxHQUFwRCxHQUEwREcsSUFBakU7QUFDRDtBQUVNLFNBQVNNLGVBQVQsQ0FBeUJoQixJQUF6QixFQUErQjtBQUNwQyxNQUFJRSxPQUFPLEdBQUdGLElBQWQ7QUFDQSxNQUFJRyxPQUFPLEdBQUcsSUFBSUMsSUFBSixDQUFTRixPQUFULENBQWQ7QUFFQSxNQUFJRyxHQUFHLEdBQUdHLGFBQWEsQ0FBQ0wsT0FBTyxDQUFDRyxPQUFSLEVBQUQsQ0FBdkI7QUFDQSxNQUFJQyxLQUFLLEdBQUdDLGFBQWEsQ0FBQ0wsT0FBTyxDQUFDTSxRQUFSLEVBQUQsQ0FBekI7QUFDQSxNQUFJQyxJQUFJLEdBQUdGLGFBQWEsQ0FBQ0wsT0FBTyxDQUFDUSxVQUFSLEVBQUQsQ0FBeEI7QUFDQSxNQUFJQyxVQUFVLEdBQUdKLGFBQWEsQ0FBQ0wsT0FBTyxDQUFDVSxRQUFSLEVBQUQsQ0FBOUI7QUFDQSxNQUFJQyxJQUFJLEdBQUdYLE9BQU8sQ0FBQ1ksV0FBUixFQUFYO0FBRUEsU0FBT0gsVUFBVSxDQUFDSyxRQUFYLEtBQXdCLEdBQXhCLEdBQThCWixHQUFHLENBQUNZLFFBQUosRUFBckM7QUFDRDtBQUNNLFNBQVNDLHVCQUFULENBQWlDbEIsSUFBakMsRUFBdUM7QUFDNUMsTUFBSUUsT0FBTyxHQUFHRixJQUFkO0FBQ0EsTUFBSUcsT0FBTyxHQUFHLElBQUlDLElBQUosQ0FBU0YsT0FBVCxDQUFkO0FBRUEsTUFBSUcsR0FBRyxHQUFHRyxhQUFhLENBQUNMLE9BQU8sQ0FBQ0csT0FBUixFQUFELENBQXZCO0FBQ0EsTUFBSUMsS0FBSyxHQUFHQyxhQUFhLENBQUNMLE9BQU8sQ0FBQ00sUUFBUixFQUFELENBQXpCO0FBQ0EsTUFBSUMsSUFBSSxHQUFHRixhQUFhLENBQUNMLE9BQU8sQ0FBQ1EsVUFBUixFQUFELENBQXhCO0FBQ0EsTUFBSUMsVUFBVSxHQUFHSixhQUFhLENBQUNMLE9BQU8sQ0FBQ1UsUUFBUixFQUFELENBQTlCO0FBQ0EsTUFBSUMsSUFBSSxHQUFHWCxPQUFPLENBQUNZLFdBQVIsRUFBWDtBQUVBLFNBQ0VILFVBQVUsQ0FBQ0ssUUFBWCxLQUNBLEdBREEsR0FFQVosR0FBRyxDQUFDWSxRQUFKLEVBRkEsR0FHQSxHQUhBLEdBSUFWLEtBQUssQ0FBQ1UsUUFBTixFQUpBLEdBS0EsR0FMQSxHQU1BUCxJQUFJLENBQUNPLFFBQUwsRUFQRjtBQVNEOztBQUVELFNBQVNULGFBQVQsQ0FBdUJXLENBQXZCLEVBQTBCO0FBQ3hCLFNBQU8sQ0FBQ0EsQ0FBQyxHQUFHLEVBQUosR0FBUyxHQUFULEdBQWUsRUFBaEIsSUFBc0JBLENBQTdCO0FBQ0Q7O0FBRU0sU0FBU0MsWUFBVCxDQUFzQkMsS0FBdEIsRUFBNkI7QUFDbEMsTUFBSUEsS0FBSyxJQUFJLE9BQWIsRUFBc0I7QUFDcEIsUUFBSUMsS0FBSyxHQUFHLEVBQVo7QUFDQUEsU0FBSyxDQUFDQyxHQUFOLEdBQVlDLFdBQVcsQ0FBQyxDQUFELENBQXZCO0FBQ0FGLFNBQUssQ0FBQ0csS0FBTixHQUFjRCxXQUFXLENBQUMsRUFBRCxDQUF6QjtBQUNBRSxXQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFaO0FBQ0EsV0FBT0wsS0FBUDtBQUNEOztBQUNELE1BQUlELEtBQUssSUFBSSxXQUFiLEVBQTBCO0FBQ3hCLFFBQUlDLEtBQUssR0FBRyxFQUFaO0FBQ0FBLFNBQUssQ0FBQ0MsR0FBTixHQUFZQyxXQUFXLENBQUMsQ0FBRCxDQUF2QjtBQUNBRixTQUFLLENBQUNHLEtBQU4sR0FBY0csWUFBWSxDQUFDLENBQUQsQ0FBMUI7QUFDQUYsV0FBTyxDQUFDQyxHQUFSLENBQVksY0FBWjtBQUNBLFdBQU9MLEtBQVA7QUFDRDs7QUFDRCxNQUFJRCxLQUFLLElBQUksV0FBYixFQUEwQjtBQUN4QixRQUFJQyxLQUFLLEdBQUcsRUFBWjtBQUNBQSxTQUFLLENBQUNDLEdBQU4sR0FBWUMsV0FBVyxDQUFDLENBQUQsQ0FBdkI7QUFDQUYsU0FBSyxDQUFDRyxLQUFOLEdBQWNHLFlBQVksQ0FBQyxDQUFELENBQTFCO0FBQ0FGLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVo7QUFDQSxXQUFPTCxLQUFQO0FBQ0Q7O0FBQ0QsTUFBSUQsS0FBSyxJQUFJLFlBQWIsRUFBMkI7QUFDekIsUUFBSUMsS0FBSyxHQUFHLEVBQVo7QUFDQUEsU0FBSyxDQUFDQyxHQUFOLEdBQVlDLFdBQVcsQ0FBQyxDQUFELENBQXZCO0FBQ0FGLFNBQUssQ0FBQ0csS0FBTixHQUFjRyxZQUFZLENBQUMsRUFBRCxDQUExQjtBQUNBRixXQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFaO0FBQ0EsV0FBT0wsS0FBUDtBQUNEO0FBQ0Y7QUFDTSxTQUFTRSxXQUFULENBQXFCSyxPQUFyQixFQUE4QjtBQUNuQyxNQUFJQSxPQUFPLElBQUksQ0FBZixFQUFrQjtBQUNoQixRQUFJQyxFQUFFLEdBQUcsSUFBSTFCLElBQUosQ0FBUyxJQUFJQSxJQUFKLEdBQVcyQixXQUFYLEVBQVQsQ0FBVDtBQUNBRCxNQUFFLEdBQUdBLEVBQUUsQ0FBQ0UsV0FBSCxFQUFMO0FBQ0EsV0FBT0YsRUFBUDtBQUNELEdBSkQsTUFJTztBQUNMLFFBQUlBLEVBQUUsR0FBRyxJQUFJMUIsSUFBSixDQUFTLElBQUlBLElBQUosR0FBVzJCLFdBQVgsRUFBVCxDQUFUO0FBQ0FELE1BQUUsQ0FBQ0csUUFBSCxDQUFZSCxFQUFFLENBQUNyQixRQUFILEtBQWdCb0IsT0FBNUI7QUFDQUMsTUFBRSxHQUFHQSxFQUFFLENBQUNFLFdBQUgsRUFBTDtBQUNBLFdBQU9GLEVBQVA7QUFDRDtBQUNGO0FBQ00sU0FBU0YsWUFBVCxDQUFzQk0sR0FBdEIsRUFBMkI7QUFDaEMsTUFBSUosRUFBRSxHQUFHLElBQUkxQixJQUFKLENBQVMsSUFBSUEsSUFBSixHQUFXMkIsV0FBWCxFQUFULENBQVQ7QUFDQUQsSUFBRSxDQUFDSyxPQUFILENBQVdMLEVBQUUsQ0FBQ3hCLE9BQUgsS0FBZTRCLEdBQTFCO0FBQ0FKLElBQUUsR0FBR0EsRUFBRSxDQUFDRSxXQUFILEVBQUw7QUFDQU4sU0FBTyxDQUFDQyxHQUFSLENBQVksbUJBQVo7QUFDQSxTQUFPRyxFQUFQO0FBQ0Q7QUFFTSxTQUFTTSxjQUFULENBQXdCQyxLQUF4QixFQUErQkMsSUFBL0IsRUFBcUNDLEdBQXJDLEVBQTBDQyxTQUExQyxFQUFxREMsU0FBckQsRUFBZ0U7QUFDckUsTUFBSUMsT0FBTyxHQUFHSCxHQUFHLEdBQUdDLFNBQXBCO0FBQ0EsTUFBSUcsVUFBSjs7QUFDQSxNQUFJRixTQUFTLElBQUksUUFBakIsRUFBMkI7QUFDekJFLGNBQVUsR0FBSUQsT0FBTyxHQUFHLE1BQVgsR0FBcUJMLEtBQWxDO0FBQ0FNLGNBQVUsR0FBR0EsVUFBVSxHQUFHLENBQUMsQ0FBM0I7QUFDRDs7QUFDRCxNQUFJRixTQUFTLENBQUNHLFFBQVYsQ0FBbUIsTUFBbkIsQ0FBSixFQUFnQztBQUM5QkQsY0FBVSxHQUFJRCxPQUFPLEdBQUcsTUFBWCxHQUFxQkwsS0FBbEM7QUFDQU0sY0FBVSxHQUFHQSxVQUFVLEdBQUcsQ0FBQyxDQUEzQjtBQUNEOztBQUNELE1BQUlGLFNBQVMsSUFBSSxPQUFqQixFQUEwQjtBQUN4QkUsY0FBVSxHQUFJRCxPQUFPLEdBQUcsTUFBWCxHQUFxQkwsS0FBbEM7QUFDRDs7QUFDRCxTQUFPTSxVQUFVLENBQUNFLE9BQVgsQ0FBbUIsQ0FBbkIsQ0FBUDtBQUNELEM7Ozs7Ozs7Ozs7OztBQzlKRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUEsSUFBSUMsWUFBWSxHQUFHLElBQW5CLEMsQ0FFQTs7QUFDQSxJQUFJLElBQUosRUFBc0I7QUFDcEJDLFFBQU0sQ0FBQ0MsS0FBUCxHQUFlQSx5REFBZjtBQUNEOztBQUVELFNBQVNDLE1BQVQsQ0FBZ0JDLFlBQWhCLEVBQThCO0FBQzVCO0FBQ0EsU0FBTyxJQUFJQyx5REFBSixDQUFpQjtBQUN0QkMscUJBQWlCLE9BREs7QUFFdEJDLFdBQU8sRUFBRSxNQUZhO0FBRUs7QUFDM0JDLFFBQUksRUFBRSxJQUFJQyxxREFBSixDQUFhO0FBQ2pCQyxTQUFHLEVBQUUsK0JBRFk7QUFDcUI7QUFDdEM7QUFDQUMsaUJBQVcsRUFBRSxTQUhJLENBR087O0FBSFAsS0FBYixDQUhnQjtBQVF0QkMsU0FBSyxFQUFFLElBQUlDLDBEQUFKLEdBQW9CQyxPQUFwQixDQUE0QlYsWUFBWSxJQUFJLEVBQTVDO0FBUmUsR0FBakIsQ0FBUDtBQVVEOztBQUVjLFNBQVNXLFVBQVQsQ0FBb0JYLFlBQXBCLEVBQWtDO0FBQy9DO0FBQ0E7QUFDQSxNQUFJLElBQUosRUFBc0I7QUFDcEIsV0FBT0QsTUFBTSxDQUFDQyxZQUFELENBQWI7QUFDRCxHQUw4QyxDQU8vQzs7O0FBQ0EsTUFBSSxDQUFDSixZQUFMLEVBQW1CO0FBQ2pCQSxnQkFBWSxHQUFHRyxNQUFNLENBQUNDLFlBQUQsQ0FBckI7QUFDRDs7QUFFRCxTQUFPSixZQUFQO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckNEO0FBQ0E7QUFDQTtBQUNBO0FBRWVnQixrRUFBRyxJQUFJO0FBQUE7O0FBQ3BCLDBCQUFPLE1BQU1DLE1BQU4sU0FBcUJDLDRDQUFLLENBQUNDLFNBQTNCLENBQXFDO0FBRTFDLGlCQUFhQyxlQUFiLENBQThCQyxHQUE5QixFQUFtQztBQUNqQyxZQUFNO0FBQUVGLGlCQUFGO0FBQWFHO0FBQWIsVUFBd0JELEdBQTlCO0FBRUEsVUFBSUUsUUFBUSxHQUFHLEVBQWY7O0FBQ0EsVUFBSVAsR0FBRyxDQUFDSSxlQUFSLEVBQXlCO0FBQ3ZCRyxnQkFBUSxHQUFHLE1BQU1QLEdBQUcsQ0FBQ0ksZUFBSixDQUFvQkMsR0FBcEIsQ0FBakI7QUFDRCxPQU5nQyxDQVFqQztBQUNBOzs7QUFDQSxZQUFNRyxNQUFNLEdBQUdULDREQUFVLEVBQXpCOztBQUNBLFVBQUksSUFBSixFQUFzQjtBQUNwQixZQUFJO0FBQ0Y7QUFDQSxnQkFBTVUsb0VBQWUsQ0FDbkIsTUFBQyxHQUFELGVBQ01GLFFBRE47QUFFRSxxQkFBUyxFQUFFSixTQUZiO0FBR0Usa0JBQU0sRUFBRUcsTUFIVjtBQUlFLHdCQUFZLEVBQUVFO0FBSmhCLGFBRG1CLENBQXJCO0FBUUQsU0FWRCxDQVVFLE9BQU9FLEtBQVAsRUFBYztBQUNkO0FBQ0E7QUFDQTtBQUNBOUMsaUJBQU8sQ0FBQzhDLEtBQVIsQ0FBYyx1Q0FBZCxFQUF1REEsS0FBdkQ7QUFDRCxTQWhCbUIsQ0FrQnBCO0FBQ0E7OztBQUNBQyx3REFBSSxDQUFDQyxNQUFMO0FBQ0QsT0FoQ2dDLENBa0NqQzs7O0FBQ0EsWUFBTUMsV0FBVyxHQUFHTCxNQUFNLENBQUNaLEtBQVAsQ0FBYWtCLE9BQWIsRUFBcEI7QUFFQSw2Q0FDS1AsUUFETDtBQUVFTTtBQUZGO0FBSUQ7O0FBRURFLGVBQVcsQ0FBRUMsS0FBRixFQUFTO0FBQ2xCLFlBQU1BLEtBQU47QUFDQSxXQUFLaEMsWUFBTCxHQUFvQmUsNERBQVUsQ0FBQ2lCLEtBQUssQ0FBQ0gsV0FBUCxDQUE5QjtBQUNEOztBQUVESSxVQUFNLEdBQUk7QUFDUixhQUFPLE1BQUMsR0FBRCxlQUFTLEtBQUtELEtBQWQ7QUFBcUIsb0JBQVksRUFBRSxLQUFLaEM7QUFBeEMsU0FBUDtBQUNEOztBQXBEeUMsR0FBNUMsU0FDU2tDLFdBRFQsR0FDdUIsaUJBRHZCO0FBc0RELENBdkRELEU7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3Qzs7Ozs7Ozs7Ozs7QUNOQSxpQkFBaUIsbUJBQU8sQ0FBQyxpRUFBbUI7Ozs7Ozs7Ozs7Ozs7QUNBL0I7O0FBQUEsSUFBSUMsc0JBQXNCLEdBQUNDLG1CQUFPLENBQUMsb0hBQUQsQ0FBbEM7O0FBQW1GQyxPQUFPLENBQUNDLFVBQVIsR0FBbUIsSUFBbkI7QUFBd0JELE9BQU8sQ0FBQ0UsU0FBUixHQUFrQkEsU0FBbEI7QUFBNEJGLE9BQU8sQ0FBQ0csU0FBUixHQUFrQkEsU0FBbEI7QUFBNEJILE9BQU8sQ0FBQ0ksT0FBUixHQUFnQixLQUFLLENBQXJCOztBQUF1QixJQUFJQyxNQUFNLEdBQUNQLHNCQUFzQixDQUFDQyxtQkFBTyxDQUFDLG9CQUFELENBQVIsQ0FBakM7O0FBQW9ELElBQUlPLE1BQU0sR0FBQ1AsbUJBQU8sQ0FBQywwREFBRCxDQUFsQjs7QUFBK0NDLE9BQU8sQ0FBQ08sZUFBUixHQUF3QkQsTUFBTSxDQUFDQyxlQUEvQjtBQUErQzs7Ozs7QUFHdFYsZUFBZUMsa0JBQWYsQ0FBa0NDLElBQWxDLEVBQXVDO0FBQUMsTUFBRztBQUFDM0IsYUFBRDtBQUFXRTtBQUFYLE1BQWdCeUIsSUFBbkI7QUFBd0IsTUFBSUMsU0FBUyxHQUFDLE1BQUssQ0FBQyxHQUFFSixNQUFNLENBQUNLLG1CQUFWLEVBQStCN0IsU0FBL0IsRUFBeUNFLEdBQXpDLENBQW5CO0FBQWlFLFNBQU07QUFBQzBCO0FBQUQsR0FBTjtBQUFtQjs7QUFBQSxNQUFNL0IsR0FBTixTQUFrQjBCLE1BQU0sQ0FBQ0QsT0FBUCxDQUFldEIsU0FBakMsQ0FBMEM7QUFBQztBQUNsTTtBQUNBO0FBQ0E4QixtQkFBaUIsQ0FBQ3ZCLEtBQUQsRUFBT3dCLFVBQVAsRUFBa0I7QUFBQyxVQUFNeEIsS0FBTjtBQUFhOztBQUFBTyxRQUFNLEdBQUU7QUFBQyxRQUFHO0FBQUNYLFlBQUQ7QUFBUUgsZUFBUjtBQUFrQjRCLGVBQWxCO0FBQTRCSSxhQUE1QjtBQUFvQ0M7QUFBcEMsUUFBNkMsS0FBS3BCLEtBQXJEO0FBQTJELFdBQU0sYUFBYVUsTUFBTSxDQUFDRCxPQUFQLENBQWVZLGFBQWYsQ0FBNkJsQyxTQUE3QixFQUF1Q21DLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLEVBQWQsRUFBaUJSLFNBQWpCLEVBQTJCO0FBQzFNO0FBQ0EsTUFBRUksT0FBTyxJQUFFQyxPQUFYLElBQW9CO0FBQUNJLFNBQUcsRUFBQ2hCLFNBQVMsQ0FBQ2xCLE1BQUQ7QUFBZCxLQUFwQixHQUE0QyxFQUZtSSxDQUF2QyxDQUFuQjtBQUVuRTs7QUFMK0k7O0FBSzlJZSxPQUFPLENBQUNJLE9BQVIsR0FBZ0J6QixHQUFoQjtBQUFvQkEsR0FBRyxDQUFDeUMsbUJBQUosR0FBd0JaLGtCQUF4QjtBQUEyQzdCLEdBQUcsQ0FBQ0ksZUFBSixHQUFvQnlCLGtCQUFwQjtBQUF1QyxJQUFJYSxhQUFKO0FBQWtCLElBQUlDLE9BQUo7O0FBQVksVUFBdUM7QUFBQ0QsZUFBYSxHQUFDLENBQUMsR0FBRWYsTUFBTSxDQUFDaUIsUUFBVixFQUFvQixNQUFJO0FBQUNoRixXQUFPLENBQUNpRixJQUFSLENBQWEsb0lBQWI7QUFBb0osR0FBN0ssQ0FBZDtBQUE2TEYsU0FBTyxHQUFDLENBQUMsR0FBRWhCLE1BQU0sQ0FBQ2lCLFFBQVYsRUFBb0IsTUFBSTtBQUFDaEYsV0FBTyxDQUFDOEMsS0FBUixDQUFjLHVGQUFkO0FBQXdHLEdBQWpJLENBQVI7QUFBNEksQyxDQUFBOzs7QUFDeGlCLFNBQVNhLFNBQVQsQ0FBbUJ1QixDQUFuQixFQUFxQjtBQUFDLFlBQXVDSixhQUFhO0FBQUcsU0FBT0ksQ0FBQyxDQUFDQyxRQUFUO0FBQW1COztBQUFBLFNBQVN2QixTQUFULENBQW1CbEIsTUFBbkIsRUFBMEI7QUFBQztBQUMzSCxNQUFHO0FBQUMwQyxZQUFEO0FBQVVDLFVBQVY7QUFBaUJDO0FBQWpCLE1BQXdCNUMsTUFBM0I7QUFBa0MsU0FBTTtBQUFDLFFBQUk0QyxLQUFKLEdBQVc7QUFBQyxnQkFBdUNQLE9BQU87QUFBRyxhQUFPTyxLQUFQO0FBQWMsS0FBNUU7O0FBQTZFLFFBQUlGLFFBQUosR0FBYztBQUFDLGdCQUF1Q0wsT0FBTztBQUFHLGFBQU9LLFFBQVA7QUFBaUIsS0FBOUo7O0FBQStKLFFBQUlDLE1BQUosR0FBWTtBQUFDLGdCQUF1Q04sT0FBTztBQUFHLGFBQU9NLE1BQVA7QUFBZSxLQUE1Tzs7QUFBNk9FLFFBQUksRUFBQyxNQUFJO0FBQUMsZ0JBQXVDUixPQUFPO0FBQUdyQyxZQUFNLENBQUM2QyxJQUFQO0FBQWUsS0FBdlQ7QUFBd1RDLFFBQUksRUFBQyxDQUFDWixHQUFELEVBQUthLEVBQUwsS0FBVTtBQUFDLGdCQUF1Q1YsT0FBTztBQUFHLGFBQU9yQyxNQUFNLENBQUM4QyxJQUFQLENBQVlaLEdBQVosRUFBZ0JhLEVBQWhCLENBQVA7QUFBNEIsS0FBclo7QUFBc1pDLFVBQU0sRUFBQyxDQUFDQyxJQUFELEVBQU1GLEVBQU4sS0FBVztBQUFDLGdCQUF1Q1YsT0FBTztBQUFHLFVBQUlhLFNBQVMsR0FBQ0gsRUFBRSxHQUFDRSxJQUFELEdBQU0sRUFBdEI7QUFBeUIsVUFBSUUsT0FBTyxHQUFDSixFQUFFLElBQUVFLElBQWhCO0FBQXFCLGFBQU9qRCxNQUFNLENBQUM4QyxJQUFQLENBQVlJLFNBQVosRUFBc0JDLE9BQXRCLENBQVA7QUFBdUMsS0FBL2lCO0FBQWdqQkMsV0FBTyxFQUFDLENBQUNsQixHQUFELEVBQUthLEVBQUwsS0FBVTtBQUFDLGdCQUF1Q1YsT0FBTztBQUFHLGFBQU9yQyxNQUFNLENBQUNvRCxPQUFQLENBQWVsQixHQUFmLEVBQW1CYSxFQUFuQixDQUFQO0FBQStCLEtBQW5wQjtBQUFvcEJNLGFBQVMsRUFBQyxDQUFDSixJQUFELEVBQU1GLEVBQU4sS0FBVztBQUFDLGdCQUF1Q1YsT0FBTztBQUFHLFVBQUlpQixZQUFZLEdBQUNQLEVBQUUsR0FBQ0UsSUFBRCxHQUFNLEVBQXpCO0FBQTRCLFVBQUlNLFVBQVUsR0FBQ1IsRUFBRSxJQUFFRSxJQUFuQjtBQUF3QixhQUFPakQsTUFBTSxDQUFDb0QsT0FBUCxDQUFlRSxZQUFmLEVBQTRCQyxVQUE1QixDQUFQO0FBQWdEO0FBQS96QixHQUFOO0FBQXcwQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVjEyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUMsS0FBTixTQUFvQjlELCtDQUFwQixDQUF3QjtBQUN0QixlQUFhSSxlQUFiLENBQTZCMkQsVUFBN0IsRUFBeUM7QUFDdkM7QUFDQTtBQUNBLFVBQU1DLFNBQVMsR0FBR0MscUVBQWUsRUFBakMsQ0FIdUMsQ0FLdkM7O0FBQ0FGLGNBQVUsQ0FBQzFELEdBQVgsQ0FBZTJELFNBQWYsR0FBMkJBLFNBQTNCO0FBQ0EsUUFBSXpELFFBQVEsR0FBRyxNQUFNUCwrQ0FBRyxDQUFDSSxlQUFKLENBQW9CMkQsVUFBcEIsQ0FBckI7QUFFQSwyQ0FDS3hELFFBREw7QUFFRTJELHNCQUFnQixFQUFFRjtBQUZwQjtBQUlEOztBQUVEakQsYUFBVyxDQUFDQyxLQUFELEVBQVE7QUFDakIsVUFBTUEsS0FBTjtBQUNBLFVBQU1tRCxRQUFRLEdBQUcsTUFBakI7QUFDQSxTQUFLSCxTQUFMLEdBQWlCRyxRQUFRLEdBQ3JCbkQsS0FBSyxDQUFDa0QsZ0JBRGUsR0FFckJELHFFQUFlLENBQUNqRCxLQUFLLENBQUNrRCxnQkFBUCxDQUZuQjtBQUdEOztBQUVEakQsUUFBTSxHQUFHO0FBQ1AsVUFBTTtBQUFFZCxlQUFGO0FBQWE0QixlQUFiO0FBQXdCL0M7QUFBeEIsUUFBeUMsS0FBS2dDLEtBQXBEO0FBQ0EsV0FDRSxNQUFDLGtEQUFELFFBQ0UsTUFBQywyREFBRDtBQUFnQixZQUFNLEVBQUVoQztBQUF4QixPQUNFLE1BQUMsbURBQUQ7QUFBVSxXQUFLLEVBQUUsS0FBS2dGO0FBQXRCLE9BQ0UsTUFBQyxTQUFELEVBQWVqQyxTQUFmLENBREYsQ0FERixDQURGLENBREY7QUFTRDs7QUFuQ3FCOztBQXNDVHFDLHNJQUFnQixDQUFDTixLQUFELENBQS9CLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BLE1BQU1LLFFBQVEsR0FBRyxNQUFqQjtBQUNBRSxxRUFBa0IsQ0FBQ0YsUUFBRCxDQUFsQjtBQUVPLElBQU1HLEtBQWIsc0JBQU8sTUFBTUEsS0FBTixDQUFZO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTtBQUFBOztBQUFBLENBQW5CLG9GQUNHQywrQ0FESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDMkIsQ0FEM0I7QUFBQTtBQUFBLHlFQUVHQyxvREFGSCxFQUVZRCwrQ0FGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FFK0IsSUFGL0I7QUFBQTtBQUFBLDBFQUdHQyxvREFISCxFQUdZRCwrQ0FIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FHZ0MsS0FIaEM7QUFBQTtBQUFBLDZFQUlHQyxvREFKSCxFQUlZRCwrQ0FKWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FJbUMsSUFKbkM7QUFBQTtBQUFBLDJFQUtHQyxvREFMSCxFQUtZRCwrQ0FMWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FLaUMsSUFMakM7QUFBQTtBQUFBLDBFQU1HQyxvREFOSCxFQU1ZRCwrQ0FOWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FNZ0MsUUFOaEM7QUFBQTtBQUFBLHdFQVFHQyxvREFSSCxFQVFZRCwrQ0FSWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FROEIsT0FSOUI7QUFBQTtBQUFBLHVFQVNHQSwrQ0FUSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FTb0IsQ0FUcEI7QUFBQTtBQUFBLDhFQVVHQSwrQ0FWSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FVMkIsRUFWM0I7QUFBQTtBQUFBLDhFQVdHQyxvREFYSCxFQVdZRCwrQ0FYWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FXbUMsRUFYbkM7QUFBQTtBQUFBLDZFQVlHQyxvREFaSCxFQVlZRCwrQ0FaWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FZa0MsRUFabEM7QUFBQTtBQUFBLGdGQWFHQyxvREFiSCxFQWFZRCwrQ0FiWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FhcUMsS0FickM7QUFBQTtBQUFBLGdGQWVHQyxvREFmSCxFQWVZRCwrQ0FmWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FlcUMsRUFmckM7QUFBQTtBQUFBLG1GQWdCR0Msb0RBaEJILEVBZ0JZRCwrQ0FoQlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBZ0J3QyxLQWhCeEM7QUFBQTtBQUFBLGtGQWlCR0Msb0RBakJILEVBaUJZRCwrQ0FqQlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBaUJ1QyxLQWpCdkM7QUFBQTtBQUFBLCtFQW1CR0UsMkNBbkJIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQW1Cd0JDLE9BQUQsSUFBYTtBQUNoQyxVQUFJbEgsS0FBSyxHQUFHRixrRkFBWSxDQUFDb0gsT0FBRCxDQUF4QjtBQUNBLFdBQUt4SSxJQUFMLEdBQVl3SSxPQUFaO0FBQ0EsV0FBS0MsU0FBTCxHQUFpQm5ILEtBQUssQ0FBQ0csS0FBdkI7QUFDQSxXQUFLaUgsT0FBTCxHQUFlcEgsS0FBSyxDQUFDQyxHQUFyQjtBQUNELEtBeEJIO0FBQUE7QUFBQSwyRUEwQkdnSCwyQ0ExQkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBMEJvQkksR0FBRCxJQUFTO0FBQ3hCLFdBQUtBLEdBQUwsSUFBWUEsR0FBWjtBQUNELEtBNUJIO0FBQUE7QUFBQSw2RUE4QkdKLDJDQTlCSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0E4QnFCLE1BQU07QUFDdkIsV0FBS0ksR0FBTCxHQUFXLENBQVg7QUFDRCxLQWhDSDtBQUFBO0FBQUEsbUZBa0NHSiwyQ0FsQ0g7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBa0M0QkssSUFBRCxJQUFVO0FBQ2pDLFdBQUtDLFVBQUwsQ0FBZ0IzQixJQUFoQixDQUFxQjBCLElBQXJCO0FBQ0QsS0FwQ0g7QUFBQTtBQUFBLGdGQXNDR0wsMkNBdENIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQXNDd0IsQ0FBQ08sSUFBRCxFQUFPQyxJQUFQLEtBQWdCO0FBQ3BDLFVBQUksS0FBS0MsU0FBTCxDQUFlLENBQWYsS0FBcUJDLFNBQXpCLEVBQW9DO0FBQ2xDLFlBQUlDLE9BQU8sR0FBRyxFQUFkO0FBQ0FBLGVBQU8sQ0FBQyxNQUFELENBQVAsR0FBa0JILElBQWxCO0FBQ0FHLGVBQU8sQ0FBQyxNQUFELENBQVAsR0FBa0JKLElBQWxCO0FBQ0EsYUFBS0UsU0FBTCxDQUFlOUIsSUFBZixDQUFvQmdDLE9BQXBCO0FBQ0QsT0FMRCxNQUtPO0FBQ0wsWUFBSUMsa0JBQWtCLEdBQUcsS0FBekI7O0FBQ0EsYUFBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUtKLFNBQUwsQ0FBZUssTUFBbkMsRUFBMkNELENBQUMsRUFBNUMsRUFBZ0Q7QUFDOUMsY0FBSSxLQUFLSixTQUFMLENBQWVJLENBQWYsRUFBa0JOLElBQWxCLElBQTBCQSxJQUE5QixFQUFvQztBQUNsQyxpQkFBS0UsU0FBTCxDQUFlSSxDQUFmLEVBQWtCTCxJQUFsQixHQUF5QkEsSUFBekI7QUFDQUksOEJBQWtCLEdBQUcsSUFBckI7QUFDRDs7QUFDRCxjQUFJQyxDQUFDLElBQUksS0FBS0osU0FBTCxDQUFlSyxNQUFmLEdBQXdCLENBQTdCLElBQWtDRixrQkFBa0IsSUFBSSxLQUE1RCxFQUFtRTtBQUNqRSxnQkFBSUQsT0FBTyxHQUFHLEVBQWQ7QUFDQUEsbUJBQU8sQ0FBQyxNQUFELENBQVAsR0FBa0JILElBQWxCO0FBQ0FHLG1CQUFPLENBQUMsTUFBRCxDQUFQLEdBQWtCSixJQUFsQjtBQUNBLGlCQUFLRSxTQUFMLENBQWU5QixJQUFmLENBQW9CZ0MsT0FBcEI7QUFDRDtBQUNGO0FBQ0Y7QUFDRixLQTNESDtBQUFBO0FBQUEsbUZBNkRHWCwyQ0E3REg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBNkQyQixNQUFNO0FBQzdCLFdBQUtTLFNBQUwsR0FBaUIsRUFBakI7QUFDRCxLQS9ESDtBQUFBO0FBQUEsK0VBaUVHVCwyQ0FqRUg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBaUV1QixDQUFDTyxJQUFELEVBQU9RLEdBQVAsS0FBZTtBQUNsQyxVQUFJQyxNQUFNLEdBQUcsRUFBYjtBQUNBQSxZQUFNLENBQUMsS0FBRCxDQUFOLEdBQWdCRCxHQUFoQjtBQUNBQyxZQUFNLENBQUMsTUFBRCxDQUFOLEdBQWlCVCxJQUFqQjtBQUNBLFdBQUtVLFFBQUwsQ0FBY3RDLElBQWQsQ0FBbUJxQyxNQUFuQjtBQUNBLFdBQUtFLGlCQUFMO0FBQ0QsS0F2RUg7QUFBQTtBQUFBLGtGQXlFR2xCLDJDQXpFSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0F5RTBCLE1BQU07QUFDNUIsV0FBS2lCLFFBQUwsR0FBZ0IsRUFBaEI7QUFDRCxLQTNFSDtBQUFBO0FBQUEsc0ZBNkVHakIsMkNBN0VIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQTZFOEIsTUFBTTtBQUNoQyxXQUFLbUIsV0FBTCxHQUFtQixJQUFuQjtBQUNELEtBL0VIO0FBQUE7QUFBQSxxRkFnRkduQiwyQ0FoRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBZ0Y2QixNQUFNO0FBQy9CLFdBQUttQixXQUFMLEdBQW1CLEtBQW5CO0FBQ0QsS0FsRkg7QUFBQTtBQUFBLDhFQW1GR25CLDJDQW5GSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FtRnVCb0IsU0FBRCxJQUFlO0FBQ2pDLFdBQUtDLE1BQUwsR0FBY0QsU0FBZDtBQUNELEtBckZIO0FBQUE7QUFBQSw2RUF1RkdwQiwyQ0F2Rkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBdUZxQixNQUFNO0FBQ3ZCLFdBQUtJLEdBQUwsR0FBVyxDQUFYO0FBQ0QsS0F6Rkg7QUFBQTtBQUFBLG1GQTJGR0osMkNBM0ZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQTJGNEJzQixHQUFELElBQVM7QUFDaEMsV0FBS0MsV0FBTCxHQUFtQkQsR0FBbkI7QUFDRCxLQTdGSDtBQUFBO0FBQUE7QUFnR0EsSUFBSUUsS0FBSyxHQUFHLElBQVo7QUFDTyxNQUFNQyxPQUFPLEdBQUcvRywyREFBTSxFQUF0QjtBQUNBLE1BQU1nSCxZQUFZLEdBQUdDLDJEQUFhLENBQUMsSUFBSTlCLEtBQUosRUFBRCxDQUFsQztBQUVBLFNBQVNMLGVBQVQsQ0FBeUJvQyxXQUF6QixFQUFzQztBQUMzQztBQUNBLE1BQUlsQyxRQUFKLEVBQWM7QUFDWixXQUFPLElBQUlHLEtBQUosQ0FBVUgsUUFBVixFQUFvQmtDLFdBQXBCLENBQVA7QUFDRDs7QUFDRCxNQUFJSixLQUFLLEtBQUssSUFBZCxFQUFvQjtBQUNsQkEsU0FBSyxHQUFHLElBQUkzQixLQUFKLENBQVVILFFBQVYsRUFBb0JrQyxXQUFwQixDQUFSO0FBQ0Q7O0FBRURILFNBQU8sQ0FBQyxPQUFELEVBQVVELEtBQVYsQ0FBUCxDQUF3QkssSUFBeEIsQ0FBNkIsTUFBTTtBQUNqQzFJLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLDZCQUFaO0FBQ0QsR0FGRDtBQUlBLFNBQU9vSSxLQUFQO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvSEQseUM7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEseUMiLCJmaWxlIjoic3RhdGljL2RldmVsb3BtZW50L3BhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyIsIi8vIGV4cG9ydCBmdW5jdGlvbiBmb3JtYXREYXRlTW9udGhPbmx5KGRhdGUpIHtcbi8vICAgdmFyIG1vbnRoTmFtZXMgPSBbXG4vLyAgICAgXCJKYW5cIixcbi8vICAgICBcIkZlYlwiLFxuLy8gICAgIFwiTWFyXCIsXG4vLyAgICAgXCJBcHJcIixcbi8vICAgICBcIk1heVwiLFxuLy8gICAgIFwiSnVuXCIsXG4vLyAgICAgXCJKdWxcIixcbi8vICAgICBcIkF1Z1wiLFxuLy8gICAgIFwiU2VwdFwiLFxuLy8gICAgIFwiT2N0XCIsXG4vLyAgICAgXCJOb3ZcIixcbi8vICAgICBcIkRlY1wiLFxuLy8gICBdO1xuLy8gICBsZXQgdXRjRGF0ZSA9IGRhdGU7XG4vLyAgIGxldCB0aGVEYXRlID0gbmV3IERhdGUodXRjRGF0ZSk7XG5cbi8vICAgdmFyIGRheSA9IHRoZURhdGUuZ2V0RGF0ZSgpO1xuLy8gICB2YXIgaG91cnMgPSBhZGRaZXJvQmVmb3JlKHRoZURhdGUuZ2V0SG91cnMoKSk7XG4vLyAgIHZhciBtaW5zID0gYWRkWmVyb0JlZm9yZSh0aGVEYXRlLmdldE1pbnV0ZXMoKSk7XG4vLyAgIHZhciBtb250aEluZGV4ID0gYWRkWmVyb0JlZm9yZSh0aGVEYXRlLmdldE1vbnRoKCkpO1xuLy8gICB2YXIgeWVhciA9IGFkZFplcm9CZWZvcmUodGhlRGF0ZS5nZXRGdWxsWWVhcigpKTtcblxuLy8gICByZXR1cm4gKFxuLy8gICAgIGRheSArIFwiLVwiICsgbW9udGhJbmRleC50b1N0cmluZygpICsgXCItXCIgKyB5ZWFyICsgXCIgXCIgKyBob3VycyArIFwiOlwiICsgbWluc1xuLy8gICApO1xuLy8gfVxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdERhdGVNb250aE9ubHkoZGF0ZSkge1xuICB2YXIgbW9udGhOYW1lcyA9IFtcbiAgICBcIkphblwiLFxuICAgIFwiRmViXCIsXG4gICAgXCJNYXJcIixcbiAgICBcIkFwclwiLFxuICAgIFwiTWF5XCIsXG4gICAgXCJKdW5cIixcbiAgICBcIkp1bFwiLFxuICAgIFwiQXVnXCIsXG4gICAgXCJTZXB0XCIsXG4gICAgXCJPY3RcIixcbiAgICBcIk5vdlwiLFxuICAgIFwiRGVjXCIsXG4gIF07XG4gIGxldCB1dGNEYXRlID0gZGF0ZTtcbiAgbGV0IHRoZURhdGUgPSBuZXcgRGF0ZSh1dGNEYXRlKTtcblxuICB2YXIgZGF5ID0gdGhlRGF0ZS5nZXREYXRlKCk7XG4gIHZhciBob3VycyA9IGFkZFplcm9CZWZvcmUodGhlRGF0ZS5nZXRIb3VycygpKTtcbiAgdmFyIG1pbnMgPSBhZGRaZXJvQmVmb3JlKHRoZURhdGUuZ2V0TWludXRlcygpKTtcbiAgdmFyIG1vbnRoSW5kZXggPSB0aGVEYXRlLmdldE1vbnRoKCk7XG4gIC8vIHZhciBtb250aEluZGV4ID0gYWRkWmVyb0JlZm9yZSh0aGVEYXRlLmdldE1vbnRoKCkpO1xuICB2YXIgeWVhciA9IHRoZURhdGUuZ2V0RnVsbFllYXIoKTtcblxuICByZXR1cm4gZGF5ICsgXCIgXCIgKyBtb250aE5hbWVzW21vbnRoSW5kZXhdICsgXCIsIFwiICsgaG91cnMgKyBcIjpcIiArIG1pbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXREYXRlU2hvcnQoZGF0ZSkge1xuICBsZXQgdXRjRGF0ZSA9IGRhdGU7XG4gIGxldCB0aGVEYXRlID0gbmV3IERhdGUodXRjRGF0ZSk7XG5cbiAgdmFyIGRheSA9IGFkZFplcm9CZWZvcmUodGhlRGF0ZS5nZXREYXRlKCkpO1xuICB2YXIgaG91cnMgPSBhZGRaZXJvQmVmb3JlKHRoZURhdGUuZ2V0SG91cnMoKSk7XG4gIHZhciBtaW5zID0gYWRkWmVyb0JlZm9yZSh0aGVEYXRlLmdldE1pbnV0ZXMoKSk7XG4gIHZhciBtb250aEluZGV4ID0gYWRkWmVyb0JlZm9yZSh0aGVEYXRlLmdldE1vbnRoKCkpO1xuICB2YXIgeWVhciA9IHRoZURhdGUuZ2V0RnVsbFllYXIoKTtcblxuICByZXR1cm4gbW9udGhJbmRleC50b1N0cmluZygpICsgXCIvXCIgKyBkYXkudG9TdHJpbmcoKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXREYXRlU2hvcnRXaXRoSG91cihkYXRlKSB7XG4gIGxldCB1dGNEYXRlID0gZGF0ZTtcbiAgbGV0IHRoZURhdGUgPSBuZXcgRGF0ZSh1dGNEYXRlKTtcblxuICB2YXIgZGF5ID0gYWRkWmVyb0JlZm9yZSh0aGVEYXRlLmdldERhdGUoKSk7XG4gIHZhciBob3VycyA9IGFkZFplcm9CZWZvcmUodGhlRGF0ZS5nZXRIb3VycygpKTtcbiAgdmFyIG1pbnMgPSBhZGRaZXJvQmVmb3JlKHRoZURhdGUuZ2V0TWludXRlcygpKTtcbiAgdmFyIG1vbnRoSW5kZXggPSBhZGRaZXJvQmVmb3JlKHRoZURhdGUuZ2V0TW9udGgoKSk7XG4gIHZhciB5ZWFyID0gdGhlRGF0ZS5nZXRGdWxsWWVhcigpO1xuXG4gIHJldHVybiAoXG4gICAgbW9udGhJbmRleC50b1N0cmluZygpICtcbiAgICBcIi9cIiArXG4gICAgZGF5LnRvU3RyaW5nKCkgK1xuICAgIFwiIFwiICtcbiAgICBob3Vycy50b1N0cmluZygpICtcbiAgICBcIjpcIiArXG4gICAgbWlucy50b1N0cmluZygpXG4gICk7XG59XG5cbmZ1bmN0aW9uIGFkZFplcm9CZWZvcmUobikge1xuICByZXR1cm4gKG4gPCAxMCA/IFwiMFwiIDogXCJcIikgKyBuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RhdGVEYXRlKGlucHV0KSB7XG4gIGlmIChpbnB1dCA9PSBcIlRvZGF5XCIpIHtcbiAgICBsZXQgZGF0ZXMgPSB7fTtcbiAgICBkYXRlcy5lbmQgPSBtYWtlRGF0ZUhycygwKTtcbiAgICBkYXRlcy5zdGFydCA9IG1ha2VEYXRlSHJzKDI0KTtcbiAgICBjb25zb2xlLmxvZyhcImlzIHRvZGF5XCIpO1xuICAgIHJldHVybiBkYXRlcztcbiAgfVxuICBpZiAoaW5wdXQgPT0gXCJZZXN0ZXJkYXlcIikge1xuICAgIGxldCBkYXRlcyA9IHt9O1xuICAgIGRhdGVzLmVuZCA9IG1ha2VEYXRlSHJzKDEpO1xuICAgIGRhdGVzLnN0YXJ0ID0gbWFrZURhdGVEYXlzKDIpO1xuICAgIGNvbnNvbGUubG9nKFwiaXMgeWVzdGVyZGF5XCIpO1xuICAgIHJldHVybiBkYXRlcztcbiAgfVxuICBpZiAoaW5wdXQgPT0gXCJUaGlzIFdlZWtcIikge1xuICAgIGxldCBkYXRlcyA9IHt9O1xuICAgIGRhdGVzLmVuZCA9IG1ha2VEYXRlSHJzKDApO1xuICAgIGRhdGVzLnN0YXJ0ID0gbWFrZURhdGVEYXlzKDcpO1xuICAgIGNvbnNvbGUubG9nKFwiaXMgdGhpcyB3ZWVrXCIpO1xuICAgIHJldHVybiBkYXRlcztcbiAgfVxuICBpZiAoaW5wdXQgPT0gXCJUaGlzIE1vbnRoXCIpIHtcbiAgICBsZXQgZGF0ZXMgPSB7fTtcbiAgICBkYXRlcy5lbmQgPSBtYWtlRGF0ZUhycygwKTtcbiAgICBkYXRlcy5zdGFydCA9IG1ha2VEYXRlRGF5cygzMCk7XG4gICAgY29uc29sZS5sb2coXCJpcyB0aGlzIG1vbnRoXCIpO1xuICAgIHJldHVybiBkYXRlcztcbiAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VEYXRlSHJzKGhyc0JhY2spIHtcbiAgaWYgKGhyc0JhY2sgPT0gMCkge1xuICAgIGxldCBkdCA9IG5ldyBEYXRlKG5ldyBEYXRlKCkudG9VVENTdHJpbmcoKSk7XG4gICAgZHQgPSBkdC50b0lTT1N0cmluZygpO1xuICAgIHJldHVybiBkdDtcbiAgfSBlbHNlIHtcbiAgICBsZXQgZHQgPSBuZXcgRGF0ZShuZXcgRGF0ZSgpLnRvVVRDU3RyaW5nKCkpO1xuICAgIGR0LnNldEhvdXJzKGR0LmdldEhvdXJzKCkgLSBocnNCYWNrKTtcbiAgICBkdCA9IGR0LnRvSVNPU3RyaW5nKCk7XG4gICAgcmV0dXJuIGR0O1xuICB9XG59XG5leHBvcnQgZnVuY3Rpb24gbWFrZURhdGVEYXlzKG51bSkge1xuICBsZXQgZHQgPSBuZXcgRGF0ZShuZXcgRGF0ZSgpLnRvVVRDU3RyaW5nKCkpO1xuICBkdC5zZXREYXRlKGR0LmdldERhdGUoKSAtIG51bSk7XG4gIGR0ID0gZHQudG9JU09TdHJpbmcoKTtcbiAgY29uc29sZS5sb2coXCJnZXR0aW5nIGRheXMgYmFja1wiKTtcbiAgcmV0dXJuIGR0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsY0NvbW1pc3Npb24ocHJpY2UsIHNpZGUsIHF0eSwgbGVhdmVzUXR5LCBvcmRlclR5cGUpIHtcbiAgbGV0IHJlYWxRdHkgPSBxdHkgLSBsZWF2ZXNRdHk7XG4gIGxldCBjb21taXNzaW9uO1xuICBpZiAob3JkZXJUeXBlID09IFwiTWFya2V0XCIpIHtcbiAgICBjb21taXNzaW9uID0gKHJlYWxRdHkgKiAwLjAwNzUpIC8gcHJpY2U7XG4gICAgY29tbWlzc2lvbiA9IGNvbW1pc3Npb24gKiAtMTtcbiAgfVxuICBpZiAob3JkZXJUeXBlLmluY2x1ZGVzKFwiU3RvcFwiKSkge1xuICAgIGNvbW1pc3Npb24gPSAocmVhbFF0eSAqIDAuMDA3NSkgLyBwcmljZTtcbiAgICBjb21taXNzaW9uID0gY29tbWlzc2lvbiAqIC0xO1xuICB9XG4gIGlmIChvcmRlclR5cGUgPT0gXCJMaW1pdFwiKSB7XG4gICAgY29tbWlzc2lvbiA9IChyZWFsUXR5ICogMC4wMDI1KSAvIHByaWNlO1xuICB9XG4gIHJldHVybiBjb21taXNzaW9uLnRvRml4ZWQoNSk7XG59XG4iLCJpbXBvcnQgeyBBcG9sbG9DbGllbnQsIEluTWVtb3J5Q2FjaGUsIEh0dHBMaW5rIH0gZnJvbSBcImFwb2xsby1ib29zdFwiO1xuaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLXVuZmV0Y2hcIjtcblxubGV0IGFwb2xsb0NsaWVudCA9IG51bGw7XG5cbi8vIFBvbHlmaWxsIGZldGNoKCkgb24gdGhlIHNlcnZlciAodXNlZCBieSBhcG9sbG8tY2xpZW50KVxuaWYgKCFwcm9jZXNzLmJyb3dzZXIpIHtcbiAgZ2xvYmFsLmZldGNoID0gZmV0Y2g7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZShpbml0aWFsU3RhdGUpIHtcbiAgLy8gQ2hlY2sgb3V0IGh0dHBzOi8vZ2l0aHViLmNvbS96ZWl0L25leHQuanMvcHVsbC80NjExIGlmIHlvdSB3YW50IHRvIHVzZSB0aGUgQVdTQXBwU3luY0NsaWVudFxuICByZXR1cm4gbmV3IEFwb2xsb0NsaWVudCh7XG4gICAgY29ubmVjdFRvRGV2VG9vbHM6IHByb2Nlc3MuYnJvd3NlcixcbiAgICBzc3JNb2RlOiAhcHJvY2Vzcy5icm93c2VyLCAvLyBEaXNhYmxlcyBmb3JjZUZldGNoIG9uIHRoZSBzZXJ2ZXIgKHNvIHF1ZXJpZXMgYXJlIG9ubHkgcnVuIG9uY2UpXG4gICAgbGluazogbmV3IEh0dHBMaW5rKHtcbiAgICAgIHVyaTogXCJodHRwOi8vbG9jYWxob3N0OjQwMDAvZ3JhcGhxbFwiLCAvLyBTZXJ2ZXIgVVJMIChtdXN0IGJlIGFic29sdXRlKVxuICAgICAgLy8gdXJpOiBcImh0dHBzOi8vYml0c2pvdXJuYWwtYmFja2VuZC5jb21cIixcbiAgICAgIGNyZWRlbnRpYWxzOiBcImluY2x1ZGVcIiwgLy8gQWRkaXRpb25hbCBmZXRjaCgpIG9wdGlvbnMgbGlrZSBgY3JlZGVudGlhbHNgIG9yIGBoZWFkZXJzYFxuICAgIH0pLFxuICAgIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSgpLnJlc3RvcmUoaW5pdGlhbFN0YXRlIHx8IHt9KSxcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRBcG9sbG8oaW5pdGlhbFN0YXRlKSB7XG4gIC8vIE1ha2Ugc3VyZSB0byBjcmVhdGUgYSBuZXcgY2xpZW50IGZvciBldmVyeSBzZXJ2ZXItc2lkZSByZXF1ZXN0IHNvIHRoYXQgZGF0YVxuICAvLyBpc24ndCBzaGFyZWQgYmV0d2VlbiBjb25uZWN0aW9ucyAod2hpY2ggd291bGQgYmUgYmFkKVxuICBpZiAoIXByb2Nlc3MuYnJvd3Nlcikge1xuICAgIHJldHVybiBjcmVhdGUoaW5pdGlhbFN0YXRlKTtcbiAgfVxuXG4gIC8vIFJldXNlIGNsaWVudCBvbiB0aGUgY2xpZW50LXNpZGVcbiAgaWYgKCFhcG9sbG9DbGllbnQpIHtcbiAgICBhcG9sbG9DbGllbnQgPSBjcmVhdGUoaW5pdGlhbFN0YXRlKTtcbiAgfVxuXG4gIHJldHVybiBhcG9sbG9DbGllbnQ7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgaW5pdEFwb2xsbyBmcm9tICcuL2luaXQtYXBvbGxvJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgZ2V0RGF0YUZyb21UcmVlIH0gZnJvbSAncmVhY3QtYXBvbGxvJ1xuXG5leHBvcnQgZGVmYXVsdCBBcHAgPT4ge1xuICByZXR1cm4gY2xhc3MgQXBvbGxvIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgZGlzcGxheU5hbWUgPSAnd2l0aEFwb2xsbyhBcHApJ1xuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMgKGN0eCkge1xuICAgICAgY29uc3QgeyBDb21wb25lbnQsIHJvdXRlciB9ID0gY3R4XG5cbiAgICAgIGxldCBhcHBQcm9wcyA9IHt9XG4gICAgICBpZiAoQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgICAgICBhcHBQcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuICAgICAgfVxuXG4gICAgICAvLyBSdW4gYWxsIEdyYXBoUUwgcXVlcmllcyBpbiB0aGUgY29tcG9uZW50IHRyZWVcbiAgICAgIC8vIGFuZCBleHRyYWN0IHRoZSByZXN1bHRpbmcgZGF0YVxuICAgICAgY29uc3QgYXBvbGxvID0gaW5pdEFwb2xsbygpXG4gICAgICBpZiAoIXByb2Nlc3MuYnJvd3Nlcikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFJ1biBhbGwgR3JhcGhRTCBxdWVyaWVzXG4gICAgICAgICAgYXdhaXQgZ2V0RGF0YUZyb21UcmVlKFxuICAgICAgICAgICAgPEFwcFxuICAgICAgICAgICAgICB7Li4uYXBwUHJvcHN9XG4gICAgICAgICAgICAgIENvbXBvbmVudD17Q29tcG9uZW50fVxuICAgICAgICAgICAgICByb3V0ZXI9e3JvdXRlcn1cbiAgICAgICAgICAgICAgYXBvbGxvQ2xpZW50PXthcG9sbG99XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIClcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAvLyBQcmV2ZW50IEFwb2xsbyBDbGllbnQgR3JhcGhRTCBlcnJvcnMgZnJvbSBjcmFzaGluZyBTU1IuXG4gICAgICAgICAgLy8gSGFuZGxlIHRoZW0gaW4gY29tcG9uZW50cyB2aWEgdGhlIGRhdGEuZXJyb3IgcHJvcDpcbiAgICAgICAgICAvLyBodHRwczovL3d3dy5hcG9sbG9ncmFwaHFsLmNvbS9kb2NzL3JlYWN0L2FwaS9yZWFjdC1hcG9sbG8uaHRtbCNncmFwaHFsLXF1ZXJ5LWRhdGEtZXJyb3JcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB3aGlsZSBydW5uaW5nIGBnZXREYXRhRnJvbVRyZWVgJywgZXJyb3IpXG4gICAgICAgIH1cblxuICAgICAgICAvLyBnZXREYXRhRnJvbVRyZWUgZG9lcyBub3QgY2FsbCBjb21wb25lbnRXaWxsVW5tb3VudFxuICAgICAgICAvLyBoZWFkIHNpZGUgZWZmZWN0IHRoZXJlZm9yZSBuZWVkIHRvIGJlIGNsZWFyZWQgbWFudWFsbHlcbiAgICAgICAgSGVhZC5yZXdpbmQoKVxuICAgICAgfVxuXG4gICAgICAvLyBFeHRyYWN0IHF1ZXJ5IGRhdGEgZnJvbSB0aGUgQXBvbGxvIHN0b3JlXG4gICAgICBjb25zdCBhcG9sbG9TdGF0ZSA9IGFwb2xsby5jYWNoZS5leHRyYWN0KClcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uYXBwUHJvcHMsXG4gICAgICAgIGFwb2xsb1N0YXRlXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgICBzdXBlcihwcm9wcylcbiAgICAgIHRoaXMuYXBvbGxvQ2xpZW50ID0gaW5pdEFwb2xsbyhwcm9wcy5hcG9sbG9TdGF0ZSlcbiAgICB9XG5cbiAgICByZW5kZXIgKCkge1xuICAgICAgcmV0dXJuIDxBcHAgey4uLnRoaXMucHJvcHN9IGFwb2xsb0NsaWVudD17dGhpcy5hcG9sbG9DbGllbnR9IC8+XG4gICAgfVxuICB9XG59XG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L3BhZ2VzL19hcHAnKVxuIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuQ29udGFpbmVyPUNvbnRhaW5lcjtleHBvcnRzLmNyZWF0ZVVybD1jcmVhdGVVcmw7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3V0aWxzPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvdXRpbHNcIik7ZXhwb3J0cy5BcHBJbml0aWFsUHJvcHM9X3V0aWxzLkFwcEluaXRpYWxQcm9wczsvKipcbiAqIGBBcHBgIGNvbXBvbmVudCBpcyB1c2VkIGZvciBpbml0aWFsaXplIG9mIHBhZ2VzLiBJdCBhbGxvd3MgZm9yIG92ZXJ3cml0aW5nIGFuZCBmdWxsIGNvbnRyb2wgb2YgdGhlIGBwYWdlYCBpbml0aWFsaXphdGlvbi5cbiAqIFRoaXMgYWxsb3dzIGZvciBrZWVwaW5nIHN0YXRlIGJldHdlZW4gbmF2aWdhdGlvbiwgY3VzdG9tIGVycm9yIGhhbmRsaW5nLCBpbmplY3RpbmcgYWRkaXRpb25hbCBkYXRhLlxuICovYXN5bmMgZnVuY3Rpb24gYXBwR2V0SW5pdGlhbFByb3BzKF9yZWYpe3ZhcntDb21wb25lbnQsY3R4fT1fcmVmO3ZhciBwYWdlUHJvcHM9YXdhaXQoMCxfdXRpbHMubG9hZEdldEluaXRpYWxQcm9wcykoQ29tcG9uZW50LGN0eCk7cmV0dXJue3BhZ2VQcm9wc307fWNsYXNzIEFwcCBleHRlbmRzIF9yZWFjdC5kZWZhdWx0LkNvbXBvbmVudHsvLyBLZXB0IGhlcmUgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LlxuLy8gV2hlbiBzb21lb25lIGVuZGVkIEFwcCB0aGV5IGNvdWxkIGNhbGwgYHN1cGVyLmNvbXBvbmVudERpZENhdGNoYC5cbi8vIEBkZXByZWNhdGVkIFRoaXMgbWV0aG9kIGlzIG5vIGxvbmdlciBuZWVkZWQuIEVycm9ycyBhcmUgY2F1Z2h0IGF0IHRoZSB0b3AgbGV2ZWxcbmNvbXBvbmVudERpZENhdGNoKGVycm9yLF9lcnJvckluZm8pe3Rocm93IGVycm9yO31yZW5kZXIoKXt2YXJ7cm91dGVyLENvbXBvbmVudCxwYWdlUHJvcHMsX19OX1NTRyxfX05fU1NQfT10aGlzLnByb3BzO3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCxPYmplY3QuYXNzaWduKHt9LHBhZ2VQcm9wcywvLyB3ZSBkb24ndCBhZGQgdGhlIGxlZ2FjeSBVUkwgcHJvcCBpZiBpdCdzIHVzaW5nIG5vbi1sZWdhY3lcbi8vIG1ldGhvZHMgbGlrZSBnZXRTdGF0aWNQcm9wcyBhbmQgZ2V0U2VydmVyU2lkZVByb3BzXG4hKF9fTl9TU0d8fF9fTl9TU1ApP3t1cmw6Y3JlYXRlVXJsKHJvdXRlcil9Ont9KSk7fX1leHBvcnRzLmRlZmF1bHQ9QXBwO0FwcC5vcmlnR2V0SW5pdGlhbFByb3BzPWFwcEdldEluaXRpYWxQcm9wcztBcHAuZ2V0SW5pdGlhbFByb3BzPWFwcEdldEluaXRpYWxQcm9wczt2YXIgd2FybkNvbnRhaW5lcjt2YXIgd2FyblVybDtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7d2FybkNvbnRhaW5lcj0oMCxfdXRpbHMuZXhlY09uY2UpKCgpPT57Y29uc29sZS53YXJuKFwiV2FybmluZzogdGhlIGBDb250YWluZXJgIGluIGBfYXBwYCBoYXMgYmVlbiBkZXByZWNhdGVkIGFuZCBzaG91bGQgYmUgcmVtb3ZlZC4gaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2FwcC1jb250YWluZXItZGVwcmVjYXRlZFwiKTt9KTt3YXJuVXJsPSgwLF91dGlscy5leGVjT25jZSkoKCk9Pntjb25zb2xlLmVycm9yKFwiV2FybmluZzogdGhlICd1cmwnIHByb3BlcnR5IGlzIGRlcHJlY2F0ZWQuIGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy91cmwtZGVwcmVjYXRlZFwiKTt9KTt9Ly8gQGRlcHJlY2F0ZWQgbm9vcCBmb3Igbm93IHVudGlsIHJlbW92YWxcbmZ1bmN0aW9uIENvbnRhaW5lcihwKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl3YXJuQ29udGFpbmVyKCk7cmV0dXJuIHAuY2hpbGRyZW47fWZ1bmN0aW9uIGNyZWF0ZVVybChyb3V0ZXIpey8vIFRoaXMgaXMgdG8gbWFrZSBzdXJlIHdlIGRvbid0IHJlZmVyZW5jZXMgdGhlIHJvdXRlciBvYmplY3QgYXQgY2FsbCB0aW1lXG52YXJ7cGF0aG5hbWUsYXNQYXRoLHF1ZXJ5fT1yb3V0ZXI7cmV0dXJue2dldCBxdWVyeSgpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXdhcm5VcmwoKTtyZXR1cm4gcXVlcnk7fSxnZXQgcGF0aG5hbWUoKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl3YXJuVXJsKCk7cmV0dXJuIHBhdGhuYW1lO30sZ2V0IGFzUGF0aCgpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXdhcm5VcmwoKTtyZXR1cm4gYXNQYXRoO30sYmFjazooKT0+e2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXdhcm5VcmwoKTtyb3V0ZXIuYmFjaygpO30scHVzaDoodXJsLGFzKT0+e2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXdhcm5VcmwoKTtyZXR1cm4gcm91dGVyLnB1c2godXJsLGFzKTt9LHB1c2hUbzooaHJlZixhcyk9PntpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl3YXJuVXJsKCk7dmFyIHB1c2hSb3V0ZT1hcz9ocmVmOicnO3ZhciBwdXNoVXJsPWFzfHxocmVmO3JldHVybiByb3V0ZXIucHVzaChwdXNoUm91dGUscHVzaFVybCk7fSxyZXBsYWNlOih1cmwsYXMpPT57aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpd2FyblVybCgpO3JldHVybiByb3V0ZXIucmVwbGFjZSh1cmwsYXMpO30scmVwbGFjZVRvOihocmVmLGFzKT0+e2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXdhcm5VcmwoKTt2YXIgcmVwbGFjZVJvdXRlPWFzP2hyZWY6Jyc7dmFyIHJlcGxhY2VVcmw9YXN8fGhyZWY7cmV0dXJuIHJvdXRlci5yZXBsYWNlKHJlcGxhY2VSb3V0ZSxyZXBsYWNlVXJsKTt9fTt9IiwiaW1wb3J0IEFwcCwgeyBDb250YWluZXIgfSBmcm9tIFwibmV4dC9hcHBcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB3aXRoQXBvbGxvQ2xpZW50IGZyb20gXCIuLi9saWIvd2l0aC1hcG9sbG8tY2xpZW50XCI7XG5pbXBvcnQgeyBBcG9sbG9Qcm92aWRlciB9IGZyb20gXCJyZWFjdC1hcG9sbG9cIjtcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcIm1vYngtcmVhY3RcIjtcbmltcG9ydCB7IGluaXRpYWxpemVTdG9yZSwgaHlkcmF0ZSB9IGZyb20gXCIuLi9zdG9yZXMvc3RvcmVcIjtcblxuY2xhc3MgTXlBcHAgZXh0ZW5kcyBBcHAge1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKGFwcENvbnRleHQpIHtcbiAgICAvLyBHZXQgb3IgQ3JlYXRlIHRoZSBzdG9yZSB3aXRoIGB1bmRlZmluZWRgIGFzIGluaXRpYWxTdGF0ZVxuICAgIC8vIFRoaXMgYWxsb3dzIHlvdSB0byBzZXQgYSBjdXN0b20gZGVmYXVsdCBpbml0aWFsU3RhdGVcbiAgICBjb25zdCBtb2J4U3RvcmUgPSBpbml0aWFsaXplU3RvcmUoKTtcblxuICAgIC8vIFByb3ZpZGUgdGhlIHN0b3JlIHRvIGdldEluaXRpYWxQcm9wcyBvZiBwYWdlc1xuICAgIGFwcENvbnRleHQuY3R4Lm1vYnhTdG9yZSA9IG1vYnhTdG9yZTtcbiAgICBsZXQgYXBwUHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGFwcENvbnRleHQpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmFwcFByb3BzLFxuICAgICAgaW5pdGlhbE1vYnhTdGF0ZTogbW9ieFN0b3JlXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGNvbnN0IGlzU2VydmVyID0gIXByb2Nlc3MuYnJvd3NlcjtcbiAgICB0aGlzLm1vYnhTdG9yZSA9IGlzU2VydmVyXG4gICAgICA/IHByb3BzLmluaXRpYWxNb2J4U3RhdGVcbiAgICAgIDogaW5pdGlhbGl6ZVN0b3JlKHByb3BzLmluaXRpYWxNb2J4U3RhdGUpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMsIGFwb2xsb0NsaWVudCB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPEFwb2xsb1Byb3ZpZGVyIGNsaWVudD17YXBvbGxvQ2xpZW50fT5cbiAgICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3RoaXMubW9ieFN0b3JlfT5cbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICA8L1Byb3ZpZGVyPlxuICAgICAgICA8L0Fwb2xsb1Byb3ZpZGVyPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoQXBvbGxvQ2xpZW50KE15QXBwKTtcbiIsImltcG9ydCB7IGFjdGlvbiwgb2JzZXJ2YWJsZSB9IGZyb20gXCJtb2J4XCI7XG5pbXBvcnQgeyB1c2VTdGF0aWNSZW5kZXJpbmcsIG9ic2VydmVyIH0gZnJvbSBcIm1vYngtcmVhY3RcIjtcbmltcG9ydCB7IGNyZWF0ZSwgcGVyc2lzdCB9IGZyb20gXCJtb2J4LXBlcnNpc3RcIjtcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIGdldFN0YXRlRGF0ZSxcbiAgbWFrZURhdGVIcnMsXG4gIG1ha2VEYXRlRGF5cyxcbn0gZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVscGVycy9GdW5jdGlvbnNcIjtcblxuY29uc3QgaXNTZXJ2ZXIgPSAhcHJvY2Vzcy5icm93c2VyO1xudXNlU3RhdGljUmVuZGVyaW5nKGlzU2VydmVyKTtcblxuZXhwb3J0IGNsYXNzIFN0b3JlIHtcbiAgQG9ic2VydmFibGUgbGFzdFVwZGF0ZSA9IDA7XG4gIEBwZXJzaXN0IEBvYnNlcnZhYmxlIGxpZ2h0ID0gdHJ1ZTtcbiAgQHBlcnNpc3QgQG9ic2VydmFibGUgaXNBdXRoID0gZmFsc2U7XG4gIEBwZXJzaXN0IEBvYnNlcnZhYmxlIHN0YXJ0RGF0ZSA9IG51bGw7XG4gIEBwZXJzaXN0IEBvYnNlcnZhYmxlIGVuZERhdGUgPSBudWxsO1xuICBAcGVyc2lzdCBAb2JzZXJ2YWJsZSBzeW1ib2wgPSBcIlhCVFVTRFwiO1xuXG4gIEBwZXJzaXN0IEBvYnNlcnZhYmxlIGRhdGUgPSBcIlRvZGF5XCI7XG4gIEBvYnNlcnZhYmxlIHBubCA9IDA7XG4gIEBvYnNlcnZhYmxlIGdsb2JhbEhhc2ggPSBbXTtcbiAgQHBlcnNpc3QgQG9ic2VydmFibGUgdGVtcE5vdGVzID0gW107XG4gIEBwZXJzaXN0IEBvYnNlcnZhYmxlIHRlbXBUYWdzID0gW107XG4gIEBwZXJzaXN0IEBvYnNlcnZhYmxlIGhhc1RlbXBUYWdzID0gZmFsc2U7XG5cbiAgQHBlcnNpc3QgQG9ic2VydmFibGUgc2luZ2xlVHJhZGUgPSB7fTtcbiAgQHBlcnNpc3QgQG9ic2VydmFibGUgaGFzU2luZ2xlVHJhZGUgPSBmYWxzZTtcbiAgQHBlcnNpc3QgQG9ic2VydmFibGUgaXNTaW5nbGVOb3RlcyA9IGZhbHNlO1xuXG4gIEBhY3Rpb24gY2hhbmdlRGF0ZSA9IChuZXdEYXRlKSA9PiB7XG4gICAgbGV0IGRhdGVzID0gZ2V0U3RhdGVEYXRlKG5ld0RhdGUpO1xuICAgIHRoaXMuZGF0ZSA9IG5ld0RhdGU7XG4gICAgdGhpcy5zdGFydERhdGUgPSBkYXRlcy5zdGFydDtcbiAgICB0aGlzLmVuZERhdGUgPSBkYXRlcy5lbmQ7XG4gIH07XG5cbiAgQGFjdGlvbiBhZGRQbmwgPSAocG5sKSA9PiB7XG4gICAgdGhpcy5wbmwgKz0gcG5sO1xuICB9O1xuXG4gIEBhY3Rpb24gcmVzZXRQbmwgPSAoKSA9PiB7XG4gICAgdGhpcy5wbmwgPSAwO1xuICB9O1xuXG4gIEBhY3Rpb24gcHVzaEdsb2JhbEhhc2ggPSAoaGFzaCkgPT4ge1xuICAgIHRoaXMuZ2xvYmFsSGFzaC5wdXNoKGhhc2gpO1xuICB9O1xuXG4gIEBhY3Rpb24gYWRkVGVtcE5vdGUgPSAodGltZSwgbm90ZSkgPT4ge1xuICAgIGlmICh0aGlzLnRlbXBOb3Rlc1swXSA9PSB1bmRlZmluZWQpIHtcbiAgICAgIGxldCBuZXdOb3RlID0ge307XG4gICAgICBuZXdOb3RlW1wibm90ZVwiXSA9IG5vdGU7XG4gICAgICBuZXdOb3RlW1widGltZVwiXSA9IHRpbWU7XG4gICAgICB0aGlzLnRlbXBOb3Rlcy5wdXNoKG5ld05vdGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgYWxyZWFkeVByZXNlbnROb3RlID0gZmFsc2U7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudGVtcE5vdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0aGlzLnRlbXBOb3Rlc1tpXS50aW1lID09IHRpbWUpIHtcbiAgICAgICAgICB0aGlzLnRlbXBOb3Rlc1tpXS5ub3RlID0gbm90ZTtcbiAgICAgICAgICBhbHJlYWR5UHJlc2VudE5vdGUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpID09IHRoaXMudGVtcE5vdGVzLmxlbmd0aCAtIDEgJiYgYWxyZWFkeVByZXNlbnROb3RlID09IGZhbHNlKSB7XG4gICAgICAgICAgbGV0IG5ld05vdGUgPSB7fTtcbiAgICAgICAgICBuZXdOb3RlW1wibm90ZVwiXSA9IG5vdGU7XG4gICAgICAgICAgbmV3Tm90ZVtcInRpbWVcIl0gPSB0aW1lO1xuICAgICAgICAgIHRoaXMudGVtcE5vdGVzLnB1c2gobmV3Tm90ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgQGFjdGlvbiBjbGVhclRlbXBOb3RlcyA9ICgpID0+IHtcbiAgICB0aGlzLnRlbXBOb3RlcyA9IFtdO1xuICB9O1xuXG4gIEBhY3Rpb24gYWRkVGVtcFRhZyA9ICh0aW1lLCB0YWcpID0+IHtcbiAgICBsZXQgbmV3VGFnID0ge307XG4gICAgbmV3VGFnW1widGFnXCJdID0gdGFnO1xuICAgIG5ld1RhZ1tcInRpbWVcIl0gPSB0aW1lO1xuICAgIHRoaXMudGVtcFRhZ3MucHVzaChuZXdUYWcpO1xuICAgIHRoaXMuY2hhbmdlSGFzVGVtcFRhZ3MoKTtcbiAgfTtcblxuICBAYWN0aW9uIGNsZWFyVGVtcFRhZ3MgPSAoKSA9PiB7XG4gICAgdGhpcy50ZW1wVGFncyA9IFtdO1xuICB9O1xuXG4gIEBhY3Rpb24gY2hhbmdlSGFzVGVtcFRhZ3MgPSAoKSA9PiB7XG4gICAgdGhpcy5oYXNUZW1wVGFncyA9IHRydWU7XG4gIH07XG4gIEBhY3Rpb24gcmVzZXRIYXNUZW1wVGFncyA9ICgpID0+IHtcbiAgICB0aGlzLmhhc1RlbXBUYWdzID0gZmFsc2U7XG4gIH07XG4gIEBhY3Rpb24gc2V0U3ltYm9sID0gKG5ld1N5bWJvbCkgPT4ge1xuICAgIHRoaXMuc3ltYm9sID0gbmV3U3ltYm9sO1xuICB9O1xuXG4gIEBhY3Rpb24gcmVzZXRQbmwgPSAoKSA9PiB7XG4gICAgdGhpcy5wbmwgPSAwO1xuICB9O1xuXG4gIEBhY3Rpb24gc2V0U2luZ2xlVHJhZGUgPSAoZGF0KSA9PiB7XG4gICAgdGhpcy5zaW5nbGVUcmFkZSA9IGRhdDtcbiAgfTtcbn1cblxubGV0IHN0b3JlID0gbnVsbDtcbmV4cG9ydCBjb25zdCBoeWRyYXRlID0gY3JlYXRlKCk7XG5leHBvcnQgY29uc3QgU3RvcmVDb250ZXh0ID0gY3JlYXRlQ29udGV4dChuZXcgU3RvcmUoKSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplU3RvcmUoaW5pdGlhbERhdGEpIHtcbiAgLy8gQWx3YXlzIG1ha2UgYSBuZXcgc3RvcmUgaWYgc2VydmVyLCBvdGhlcndpc2Ugc3RhdGUgaXMgc2hhcmVkIGJldHdlZW4gcmVxdWVzdHNcbiAgaWYgKGlzU2VydmVyKSB7XG4gICAgcmV0dXJuIG5ldyBTdG9yZShpc1NlcnZlciwgaW5pdGlhbERhdGEpO1xuICB9XG4gIGlmIChzdG9yZSA9PT0gbnVsbCkge1xuICAgIHN0b3JlID0gbmV3IFN0b3JlKGlzU2VydmVyLCBpbml0aWFsRGF0YSk7XG4gIH1cblxuICBoeWRyYXRlKFwic3RvcmVcIiwgc3RvcmUpLnRoZW4oKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwic29tZVN0b3JlIGhhcyBiZWVuIGh5ZHJhdGVkXCIpO1xuICB9KTtcblxuICByZXR1cm4gc3RvcmU7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhcG9sbG8tYm9vc3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaXNvbW9ycGhpYy11bmZldGNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vYnhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9ieC1wZXJzaXN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vYngtcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWFwb2xsb1wiKTsiXSwic291cmNlUm9vdCI6IiJ9