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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/jkW":
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

/***/ "/vMJ":
/***/ (function(module, exports) {

module.exports = require("react-stockcharts/lib/indicator");

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) { var name; }

  return WithRouterWrapper;
}

/***/ }),

/***/ "1MVt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = (theme);

/***/ }),

/***/ "1cN5":
/***/ (function(module, exports) {

module.exports = require("d3-format");

/***/ }),

/***/ "3aVm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("q4sD");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* harmony default export */ __webpack_exports__["a"] = (({
  children
}) => __jsx("main", null, children));

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("u9iw");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4Us4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("fdFK");


const Button = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "Button",
  componentId: "sc-1yqwkyz-0"
})(["", ";", ";border:none;border-radius:3px;padding:8px 24px;background-color:", ";cursor:pointer;color:#ffffff;outline:none;:hover{filter:brightness(110%);}:active{filter:brightness(90%);}:focus{box-shadow:0 0 0 2px ", ";}"], Object(_helpers__WEBPACK_IMPORTED_MODULE_1__[/* transition */ "d"])("filter", "box-shadow"), _helpers__WEBPACK_IMPORTED_MODULE_1__[/* wideFont */ "e"], props => props.theme.accent, props => props.theme.accent + "4d");
/* harmony default export */ __webpack_exports__["a"] = (Button);

/***/ }),

/***/ "5Buo":
/***/ (function(module, exports) {



/***/ }),

/***/ "5IWx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
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
/* harmony default export */ __webpack_exports__["a"] = (Input);

/***/ }),

/***/ "6S3F":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Example; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ZTWx");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("sGQ9");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("5Buo");
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _datepicker_additional_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Vo13");
/* harmony import */ var _datepicker_additional_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_datepicker_additional_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("VBo9");
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

/***/ "7KCV":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("C+bE");

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

/***/ "8jpN":
/***/ (function(module, exports) {

module.exports = require("react-stockcharts/lib/series");

/***/ }),

/***/ "AroE":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "BKIj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return formatDateMonthOnly; });
/* unused harmony export formatDateShort */
/* unused harmony export formatDateShortWithHour */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getStateDate; });
/* unused harmony export makeDateHrs */
/* unused harmony export makeDateDays */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return calcCommission; });
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

/***/ "C+bE":
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

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "EX4p":
/***/ (function(module, exports) {

module.exports = require("react-stockcharts/lib/annotation");

/***/ }),

/***/ "F0YZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Store */
/* unused harmony export hydrate */
/* unused harmony export StoreContext */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return initializeStore; });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("VBo9");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("sGQ9");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mobx_persist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YFs0");
/* harmony import */ var mobx_persist__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mobx_persist__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Helpers_Functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("BKIj");
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
      let dates = Object(_components_Helpers_Functions__WEBPACK_IMPORTED_MODULE_4__[/* getStateDate */ "c"])(newDate);
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

/***/ "H1/M":
/***/ (function(module, exports) {

module.exports = require("react-stockcharts/lib/coordinates");

/***/ }),

/***/ "L1EO":
/***/ (function(module, exports) {



/***/ }),

/***/ "MGkW":
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "No/t":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "QVzf":
/***/ (function(module, exports) {

module.exports = require("react-stockcharts/lib/utils");

/***/ }),

/***/ "Uq7R":
/***/ (function(module, exports) {

module.exports = require("recharts");

/***/ }),

/***/ "V2I+":
/***/ (function(module, exports) {



/***/ }),

/***/ "VBo9":
/***/ (function(module, exports) {

module.exports = require("mobx");

/***/ }),

/***/ "Vo13":
/***/ (function(module, exports) {



/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YFs0":
/***/ (function(module, exports) {

module.exports = require("mobx-persist");

/***/ }),

/***/ "YTqd":
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

/***/ "YwNs":
/***/ (function(module, exports) {

module.exports = require("fast-deep-equal");

/***/ }),

/***/ "ZTWx":
/***/ (function(module, exports) {

module.exports = require("react-datepicker");

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

var _interopRequireWildcard = __webpack_require__("7KCV");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _url = __webpack_require__("bzos");

var _utils = __webpack_require__("kYf9");

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

var _router2 = __webpack_require__("elyg");

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

    if (false) {}

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
      if (false) {}
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

if (false) { var exact, PropTypes, warn; }

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dZ6Y":
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

/***/ "elyg":
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

const url_1 = __webpack_require__("bzos");

const mitt_1 = __importDefault(__webpack_require__("dZ6Y"));

const utils_1 = __webpack_require__("g/15");

const is_dynamic_1 = __webpack_require__("/jkW");

const route_matcher_1 = __webpack_require__("gguc");

const route_regex_1 = __webpack_require__("YTqd");

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

      if (false) {}

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  true && this.sdc[pathname] ? Promise.resolve(this.sdc[pathname]) : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
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
        if (false) {}

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
            if (false) {}

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

        if (false) {}

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
    if (false) {}

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

      if (false) {}

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
        if (false) {}

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (false) {}

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

/***/ "faye":
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "fdFK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return smallFont; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return wideFont; });
/* unused harmony export fade */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return transition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return headerItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return link; });
/* unused harmony export overflow */
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
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

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");
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

  if (false) {} // when called from _app `ctx` is nested in `ctx`


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

  if (false) {}

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (false) {}

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "gguc":
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

/***/ "h24m":
/***/ (function(module, exports) {

module.exports = require("react-stockcharts/lib/tooltip");

/***/ }),

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "lOrv":
/***/ (function(module, exports) {

module.exports = require("react-stockcharts");

/***/ }),

/***/ "mBQT":
/***/ (function(module, exports) {

module.exports = require("d3-time-format");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

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

/***/ "nazx":
/***/ (function(module, exports) {

module.exports = require("mobx-react-lite");

/***/ }),

/***/ "nx10":
/***/ (function(module, exports) {

module.exports = require("react-autosize-textarea");

/***/ }),

/***/ "oL/c":
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "pQo6":
/***/ (function(module, exports) {

module.exports = require("react-stockcharts/lib/axes");

/***/ }),

/***/ "q4sD":
/***/ (function(module, exports) {



/***/ }),

/***/ "sGQ9":
/***/ (function(module, exports) {

module.exports = require("mobx-react");

/***/ }),

/***/ "sw/1":
/***/ (function(module, exports) {

module.exports = require("react-stockcharts/lib/helper");

/***/ }),

/***/ "tKIE":
/***/ (function(module, exports) {

module.exports = require("react-stockcharts/lib/scale");

/***/ }),

/***/ "tdIn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("fdFK");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const HeaderLogo = () => __jsx(Logo, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  prefetch: true,
  href: "/"
}, __jsx("span", null, "\u20BFitsjournal")));

/* harmony default export */ __webpack_exports__["a"] = (HeaderLogo);
const Logo = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Logo",
  componentId: "sc-195qc4m-0"
})(["", " margin-right:0;font-size:26px;font-weight:500;color:", ";text-decoration:none;color:#fff;@media (max-width:425px){padding:0 8px 0 16px;font-size:19px;}"], _shared_helpers__WEBPACK_IMPORTED_MODULE_3__[/* headerItem */ "a"], props => props.theme.normalText); // display: flex;
// align-items: center;
// flex-shrink: 0;
// padding: 0 16px;
// @media (max-width: 425px) {
//   padding: 0 8px;
// }

/***/ }),

/***/ "teKy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("fdFK");


const Label = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.label.withConfig({
  displayName: "Label",
  componentId: "sc-1n443xe-0"
})(["", ";display:block;margin-bottom:8px;color:", ";"], _shared_helpers__WEBPACK_IMPORTED_MODULE_1__[/* smallFont */ "c"], props => props.theme.mutedText);
/* harmony default export */ __webpack_exports__["a"] = (Label);

/***/ }),

/***/ "txk1":
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "u9iw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ dashboard; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./components/theme.js
var theme = __webpack_require__("1MVt");

// EXTERNAL MODULE: external "react-apollo"
var external_react_apollo_ = __webpack_require__("MGkW");

// EXTERNAL MODULE: external "recharts"
var external_recharts_ = __webpack_require__("Uq7R");

// EXTERNAL MODULE: ./components/shared/helpers.js
var helpers = __webpack_require__("fdFK");

// EXTERNAL MODULE: ./components/Helpers/Functions.js
var Functions = __webpack_require__("BKIj");

// EXTERNAL MODULE: external "mobx-react"
var external_mobx_react_ = __webpack_require__("sGQ9");

// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__("faye");

// EXTERNAL MODULE: external "d3-format"
var external_d3_format_ = __webpack_require__("1cN5");

// EXTERNAL MODULE: external "d3-time-format"
var external_d3_time_format_ = __webpack_require__("mBQT");

// EXTERNAL MODULE: external "react-stockcharts"
var external_react_stockcharts_ = __webpack_require__("lOrv");

// EXTERNAL MODULE: external "react-stockcharts/lib/series"
var series_ = __webpack_require__("8jpN");

// EXTERNAL MODULE: external "react-stockcharts/lib/axes"
var axes_ = __webpack_require__("pQo6");

// EXTERNAL MODULE: external "react-stockcharts/lib/coordinates"
var coordinates_ = __webpack_require__("H1/M");

// CONCATENATED MODULE: ./components/Dashboard/Chart/helpers.js
const timeCompare = (d, datu, timeframe) => {
  var MS_PER_MINUTE = 60000;
  var coeffFive = 1000 * 60 * 5; // var coeffOne = 1000 * 60 * 5;

  var coeffOne = 1000 * 60;

  if (timeframe == "1m") {
    return Math.round(d.date.getTime() / coeffOne) * coeffOne === Math.round(datu.getTime() / coeffOne) * coeffOne;
  }

  if (timeframe == "5m") {
    return Math.round(d.date.getTime() / coeffFive) * coeffFive === Math.round(datu.getTime() / coeffFive) * coeffFive;
  }

  if (timeframe == "1h") {
    return d.date.getHours() === datu.getHours() + 1 && d.date.getDate() === datu.getDate();
  }

  if (timeframe == "1d") {
    return d.date.getDate() === datu.getDate();
  }
};
const getYRangeNums = data => {
  let lowNum;
  let highNum;

  for (let i = 0; i < data.length; i++) {
    if (i == 0) {
      lowNum = data[0].low;
      highNum = data[0].high;
    }

    if (data[i].low < lowNum) {
      lowNum = data[i].low;
    }

    if (data[i].high > highNum) {
      highNum = data[i].high;
    }

    if (i == data.length - 1) {
      let arr = [];
      arr.push(lowNum);
      arr.push(highNum);
      console.log(arr);
      return arr;
    }
  }
};
const findYValSell = (yLow, yHigh, price) => {
  // let fullRange = yHigh - yLow;
  // let myRange = yHigh - parseInt(price);
  // let outOf = myRange / fullRange;
  // let multiplied = outOf * 180 + 70;
  // console.log(outOf, multiplied);
  return 80;
};
const findYValBuy = (yLow, yHigh, price) => {
  let fullRange = yHigh - yLow;
  let myRange = yHigh - parseInt(price);
  let outOf = myRange / fullRange;
  let multiplied = outOf * 180 + 100;
  console.log(outOf, multiplied);
  return multiplied;
};
// EXTERNAL MODULE: external "react-stockcharts/lib/annotation"
var annotation_ = __webpack_require__("EX4p");

// EXTERNAL MODULE: external "react-stockcharts/lib/scale"
var scale_ = __webpack_require__("tKIE");

// EXTERNAL MODULE: external "react-stockcharts/lib/tooltip"
var tooltip_ = __webpack_require__("h24m");

// EXTERNAL MODULE: external "react-stockcharts/lib/indicator"
var indicator_ = __webpack_require__("/vMJ");

// EXTERNAL MODULE: external "react-stockcharts/lib/helper"
var helper_ = __webpack_require__("sw/1");

// EXTERNAL MODULE: external "react-stockcharts/lib/utils"
var utils_ = __webpack_require__("QVzf");

// CONCATENATED MODULE: ./components/Dashboard/Chart/ChartDemo.js
var __jsx = external_react_default.a.createElement;















class ChartDemo_CandleStickChartWithAnnotation extends external_react_default.a.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let yRangeNums = getYRangeNums(this.props.data);
    this.setState({
      yRangeNums: yRangeNums
    });
  }

  render() {
    const margin = {
      left: 20,
      right: 50,
      top: 30,
      bottom: 30
    };
    const height = 400;
    const {
      type,
      width,
      ratio,
      data: initialData
    } = this.props;
    const [yAxisLabelX, yAxisLabelY] = [width - margin.left - 40, (height - margin.top - margin.bottom) / 2];
    const xScaleProvider = scale_["discontinuousTimeScaleProvider"].inputDateAccessor(d => d.date);
    const {
      data,
      xScale,
      xAccessor,
      displayXAccessor
    } = xScaleProvider(initialData);
    const start = xAccessor(Object(utils_["last"])(data));
    const end = xAccessor(data[Math.max(0, data.length - 150)]);
    const xExtents = [start, end];

    if (this.state == null) {
      return __jsx("div", null, "Loading...");
    } // try {


    return __jsx(external_react_stockcharts_["ChartCanvas"], {
      height: height,
      ratio: ratio,
      width: width,
      margin: margin,
      type: type,
      data: data,
      xScale: xScale,
      seriesName: "BTC",
      xAccessor: xAccessor,
      displayXAccessor: displayXAccessor,
      xExtents: xExtents
    }, __jsx(external_react_stockcharts_["Chart"], {
      id: 1,
      yExtents: [d => [d.high, d.low]],
      padding: {
        top: 80,
        bottom: 80
      }
    }, __jsx(axes_["XAxis"], {
      axisAt: "bottom",
      orient: "bottom"
    }), __jsx(coordinates_["MouseCoordinateX"], {
      at: "bottom",
      orient: "bottom",
      displayFormat: Object(external_d3_time_format_["timeFormat"])("%Y-%m-%d")
    }), __jsx(coordinates_["MouseCoordinateY"], {
      at: "right",
      orient: "right",
      displayFormat: Object(external_d3_format_["format"])(".2f")
    }), __jsx(axes_["YAxis"], {
      axisAt: "right",
      orient: "right",
      ticks: 5
    }), __jsx(series_["CandlestickSeries"], null), __jsx(tooltip_["OHLCTooltip"], {
      origin: [-10, 0]
    }), this.props.trades.map(each => {
      // console.log(
      //   "mapping total length" + this.props.trades.length.toString(),
      //   each
      // );
      let datu = new Date(each.timestamp); // console.log(datu, this.props.timeframe);

      if (each.side == "Buy") {
        const annotationPropsUp = {
          fontFamily: "Glyphicons Halflings",
          fontSize: 15,
          fill: "#018001",
          // fill: rgba(1, 128, 1, 0.5),
          opacity: 0.8,
          text: "▲",
          y: ({
            yScale
          }) => {
            return yScale.range()[0] + 20; // return findYValBuy(
            //   this.state.yRangeNums[0],
            //   this.state.yRangeNums[1],
            //   each.price
            // );
          },
          onClick: console.log.bind(console),
          tooltip: d => Object(external_d3_time_format_["timeFormat"])("%B")(d.date) // onMouseOver: console.log.bind(console),

        };
        return __jsx(annotation_["Annotate"], {
          with: annotation_["LabelAnnotation"],
          when: d => timeCompare(d, datu, this.props.timeframe),
          usingProps: annotationPropsUp
        });
      } else if (each.side == "Sell") {
        const annotationPropsDown = {
          fontFamily: "Glyphicons Halflings",
          fontSize: 15,
          fill: "#FF0000",
          opacity: 0.8,
          text: "▼",
          y: ({
            yScale
          }) => {
            return yScale.range()[1] - 20; // return findYValSell(
            //   this.state.yRangeNums[0],
            //   this.state.yRangeNums[1],
            //   each.price
            // );
          },
          onClick: console.log.bind(console),
          tooltip: d => Object(external_d3_time_format_["timeFormat"])("%B")(d.date) // onMouseOver: console.log.bind(console),

        };
        return __jsx(annotation_["Annotate"], {
          with: annotation_["LabelAnnotation"],
          when: d => timeCompare(d, datu, this.props.timeframe),
          usingProps: annotationPropsDown
        });
      } else {
        return;
      }
    })), __jsx(coordinates_["CrossHairCursor"], {
      strokeDasharray: "LongDashDot"
    })); // } catch (err) {
    //   return <div>no chart</div>;
    // }
  }

}

ChartDemo_CandleStickChartWithAnnotation.defaultProps = {
  type: "svg"
};
ChartDemo_CandleStickChartWithAnnotation = Object(helper_["fitWidth"])(ChartDemo_CandleStickChartWithAnnotation);
/* harmony default export */ var ChartDemo = (ChartDemo_CandleStickChartWithAnnotation);
// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__("oL/c");

// CONCATENATED MODULE: ./components/Dashboard/Chart/index.js
var Chart_jsx = external_react_default.a.createElement;





class Chart_ChartComponent extends external_react_default.a.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let startTime = new Date(this.props.trades[0].timestamp);
    let endTime = new Date(this.props.trades[this.props.trades.length - 1].timestamp);
    let diffMs = Math.abs(startTime - endTime);
    var diffSecs = diffMs / 1000;
    var diffMins = Math.round(diffSecs / 60); // minutes

    try {
      if (diffMins < 60) {
        //   this.setState({ candleData: this.props.onemin });
        let allExec = [];

        for (let i = 0; i < this.props.onemin.length; i++) {
          let trade = this.props.onemin[i];
          let newTrade = {};
          newTrade.date = new Date(trade.timestamp);
          newTrade.open = parseFloat(trade.open);
          newTrade.close = parseFloat(trade.close);
          newTrade.high = parseFloat(trade.high);
          newTrade.low = parseFloat(trade.low);
          let strt = new Date(this.props.trades[0].timestamp);
          let end = new Date(this.props.trades[this.props.trades.length - 1].timestamp);
          let compare1 = newTrade.date - strt;
          let compare2 = newTrade.date - end; // console.log(compare1, compare2);

          let additionalTime = 1000 * 60 * 30;

          if (compare1 > additionalTime * -1 && compare2 < additionalTime) {
            allExec.unshift(newTrade);
          }

          if (i == this.props.onemin.length - 1) {
            let timeframe = "1m";
            this.setState({
              trades: this.props.trades,
              newDat: allExec,
              timeframe: timeframe
            }); // console.log(this.state, "THIS STATE " + timeframe);
          }
        }
      }

      if (diffMins >= 60 && diffMins < 60 * 10) {
        //   this.setState({ candleData: this.props.fivemin });
        let allExec = [];

        for (let i = 0; i < this.props.fivemin.length; i++) {
          let trade = this.props.fivemin[i];
          let newTrade = {};
          newTrade.date = new Date(trade.timestamp);
          newTrade.open = parseFloat(trade.open);
          newTrade.close = parseFloat(trade.close);
          newTrade.high = parseFloat(trade.high);
          newTrade.low = parseFloat(trade.low);
          let strt = new Date(this.props.trades[0].timestamp);
          let end = new Date(this.props.trades[this.props.trades.length - 1].timestamp);
          let compare1 = newTrade.date - strt;
          let compare2 = newTrade.date - end; // console.log(compare1, compare2);

          let additionalTime = 1000 * 60 * 60 * 2;

          if (compare1 > additionalTime * -1 && compare2 < additionalTime) {
            allExec.unshift(newTrade);
          }

          if (i == this.props.fivemin.length - 1) {
            let timeframe = "5m";
            this.setState({
              trades: this.props.trades,
              newDat: allExec,
              timeframe: timeframe
            });
            console.log(this.state, "THIS STATE " + timeframe);
          }
        }
      }

      let day = 60 * 24;

      if (diffMins >= 60 * 10 && diffMins < day * 4) {
        //   this.setState({ candleData: this.props.onehour });
        let allExec = [];

        for (let i = 0; i < this.props.onehour.length; i++) {
          let trade = this.props.onehour[i];
          let newTrade = {};
          newTrade.date = new Date(trade.timestamp);
          newTrade.open = parseFloat(trade.open);
          newTrade.close = parseFloat(trade.close);
          newTrade.high = parseFloat(trade.high);
          newTrade.low = parseFloat(trade.low);
          let strt = new Date(this.props.trades[0].timestamp);
          let end = new Date(this.props.trades[this.props.trades.length - 1].timestamp);
          let compare1 = newTrade.date - strt;
          let compare2 = newTrade.date - end;
          let additionalTime = 1000 * 60 * 60 * 20;

          if (compare1 > additionalTime * -1 && compare2 < additionalTime) {
            // console.log(compare1, compare2);
            allExec.unshift(newTrade);
          }

          if (i == this.props.onehour.length - 1) {
            let timeframe = "1h";
            this.setState({
              trades: this.props.trades,
              newDat: allExec,
              timeframe: timeframe
            });
            console.log(this.state, "THIS STATE " + timeframe);
          }
        }
      }

      if (diffMins >= day * 4) {
        //   this.setState({ candleData: this.props.oneday });
        let allExec = [];

        for (let i = 0; i < this.props.oneday.length; i++) {
          let trade = this.props.oneday[i];
          let newTrade = {};
          newTrade.date = new Date(trade.timestamp);
          newTrade.open = parseFloat(trade.open);
          newTrade.close = parseFloat(trade.close);
          newTrade.high = parseFloat(trade.high);
          newTrade.low = parseFloat(trade.low);
          let strt = new Date(this.props.trades[0].timestamp);
          let end = new Date(this.props.trades[this.props.trades.length - 1].timestamp);
          let compare1 = newTrade.date - strt;
          let compare2 = newTrade.date - end;
          let additionalTime = 1000 * 60 * 60 * 24 * 10;

          if (compare1 > additionalTime * -1 && compare2 < additionalTime) {
            // console.log(compare1, compare2);
            allExec.unshift(newTrade);
          }

          if (i == this.props.oneday.length - 1) {
            let timeframe = "1d";
            this.setState({
              trades: this.props.trades,
              newDat: allExec,
              timeframe: timeframe
            });
            console.log(this.state, "THIS STATE " + timeframe);
          }
        }
      }
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    if (this.state == null || !this.state.newDat[0]) {
      return Chart_jsx(external_reactstrap_["Alert"], {
        color: "light"
      }, "Can't render chart. We don't have small enough candlestick data going back to that date.");
    }

    console.log(this.state.newDat);
    return (// <TypeChooser>
      //   {type => (
      Chart_jsx(ChartDemo, {
        type: "hybrid",
        data: this.state.newDat,
        trades: this.state.trades,
        timeframe: this.state.timeframe
      }) //   )}
      // </TypeChooser>

    );
  }

}
// CONCATENATED MODULE: ./components/Dashboard/Notes/notesHelpers.js
async function getNotes(inputVal) {
  return new Promise(resolve => {
    let notes;

    if (inputVal != null) {
      notes = inputVal;
    } else {
      notes = "undefined";
    } // let hashtags = "";
    // if (inputHashtags != null) {
    //   for (let k = 0; k < inputHashtags.length; k++) {
    //     hashtags += inputHashtags[k] + " ";
    //     if (k == inputHashtags.length - 1) {
    //       let endArr = [];
    //       endArr.push(notes);
    //       endArr.push(hashtags);
    //       resolve(endArr);
    //     }
    //   }
    // } else {


    let endArr = [];
    endArr.push(notes); // endArr.push(hashtags);

    resolve(endArr); // }
  });
}
async function getHashtags(inputHashtags) {
  console.log(inputHashtags, "INP HASH");
  return new Promise(resolve => {
    let hashtags;

    if (inputHashtags != null && inputHashtags != undefined) {
      hashtags = inputHashtags;
    } else {
      hashtags = "undefined";
    }

    console.log(hashtags, "END HASHS");
    resolve(hashtags);
  });
}
// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__("txk1");
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);

// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__("uhWA");

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__("No/t");

// EXTERNAL MODULE: external "mobx"
var external_mobx_ = __webpack_require__("VBo9");

// EXTERNAL MODULE: external "fast-deep-equal"
var external_fast_deep_equal_ = __webpack_require__("YwNs");
var external_fast_deep_equal_default = /*#__PURE__*/__webpack_require__.n(external_fast_deep_equal_);

// EXTERNAL MODULE: external "react-autosize-textarea"
var external_react_autosize_textarea_ = __webpack_require__("nx10");
var external_react_autosize_textarea_default = /*#__PURE__*/__webpack_require__.n(external_react_autosize_textarea_);

// CONCATENATED MODULE: ./components/Dashboard/Notes/Notes.js
var _dec, _class2, _dec2, _class3;


var Notes_jsx = external_react_default.a.createElement;














let _class = (_dec2 = Object(external_mobx_react_["inject"])(["store"]), _dec2(_class3 = Object(external_mobx_react_["observer"])(_class3 = class extends external_react_["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      hashtags: [],
      initHashtags: [],
      showNotes: false
    };
    this.setShowNotes = this.setShowNotes.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.store.tempNotes[0] != undefined) {
      let isTemp = false;

      for (let i = 0; i < this.props.store.tempNotes.length; i++) {
        if (this.props.store.tempNotes[i].time == this.props.firstTrade.timestamp) {
          this.setState({
            value: this.props.store.tempNotes[i].note
          });
          isTemp = true;
        }

        if (i == this.props.store.tempNotes.length - 1 && isTemp == false) {
          this.setState({
            value: this.props.firstTrade.notes
          });
        }
      }
    } else {
      if (this.props.firstTrade.notes != "undefined") {
        this.setState({
          value: this.props.firstTrade.notes
        });
      }
    }

    let splitTags = this.props.firstTrade.hashtags.split(",");
    splitTags.map(tag => {
      this.state.initHashtags.push(tag);
    });
  }

  handleChange(client) {
    return event => {
      // event.preventDefault();
      this.setState({
        value: event.target.value
      }, this.handleSubmit(client));
      this.props.store.addTempNote(this.props.firstTrade.timestamp, event.target.value);
    };
  }

  removeHashtag(client, hashtag) {
    return async event => {
      if (event != undefined && event.preventDefault != undefined) {
        event.preventDefault();
      }

      let time = this.props.firstTrade.timestamp;
      client.mutate({
        mutation: external_graphql_tag_default.a`
            mutation removeHashtag($time: String!, $hashtag: String!) {
              removeHashtag(time: $time, hashtag: $hashtag)
            }
          `,
        variables: {
          time,
          hashtag
        },
        refetchQueries: [`fetchTradeHistory`]
      }).then(() => {
        this.props.store.changeHasTempTags();
      });
    };
  }

  handleSubmit(client) {
    return event => {
      if (event != undefined && event.preventDefault != undefined) {
        event.preventDefault();
      }

      console.log("HASHTAGS", this.state.hashtags);
      getNotes(this.state.value).then(async res => {
        let notes = res[0];
        let time = this.props.firstTrade.timestamp;
        let reso = client.mutate({
          mutation: external_graphql_tag_default.a`
            mutation addNotes($time: String!, $notes: String!) {
              addNotes(time: $time, notes: $notes)
            }
          `,
          variables: {
            time,
            notes
          }
        });
        return await reso;
      });
    };
  }

  setShowNotes() {
    if (this.state.showNotes == false) {
      this.setState({
        showNotes: true
      });
    } else {
      this.setState({
        showNotes: false
      });
    }
  }

  render() {
    return Notes_jsx(external_react_apollo_["ApolloConsumer"], null, client => Notes_jsx("div", null, Notes_jsx(FullRow, {
      onSubmit: this.handleSubmit(client)
    }, Notes_jsx(HashtagDiv, null, Notes_jsx(Notes_AddHashtag, {
      firstTrade: this.props.firstTrade,
      client: client
    })), this.state.initHashtags.map(tag => {
      if (tag != "undefined") {
        return Notes_jsx(SingleHashtagDiv, null, Notes_jsx(SingleHashtagText, null, "#", tag), Notes_jsx(SingleHashtagDelete, {
          onClick: this.removeHashtag(client, tag)
        }, Notes_jsx(react_fontawesome_["FontAwesomeIcon"], {
          icon: free_solid_svg_icons_["faTimes"],
          size: "xs",
          style: {
            transition: "none"
          }
        })));
      }
    }), this.state.showNotes == true ? Notes_jsx(ShowNotesDiv, {
      onClick: () => this.setShowNotes()
    }, Notes_jsx(ShowNotesInner, null, "Hide Notes")) : Notes_jsx(ShowNotesDiv, {
      onClick: () => this.setShowNotes()
    }, Notes_jsx(ShowNotesInner, null, "Show Notes"))), this.state.showNotes == true ? Notes_jsx(external_react_autosize_textarea_default.a, {
      style: {
        width: "100%",
        padding: "12px 20px",
        margin: "8px 0",
        boxSizing: "border-box",
        background: "#f8f8ff",
        border: "none",
        outline: "none",
        fontSize: "16px"
      },
      rows: 5,
      maxRows: 25,
      value: this.state.value,
      onChange: this.handleChange(client)
    }) : null));
  }

}) || _class3) || _class3);

 // const NotesInput = styled.textarea`
//   width: 100%;
//   padding: 12px 20px;
//   margin: 8px 0;
//   box-sizing: border-box;
//   background: #f8f8ff;
//   border: none;
// `;

let Notes_AddHashtag = (_dec = Object(external_mobx_react_["inject"])(["store"]), _dec(_class2 = Object(external_mobx_react_["observer"])(_class2 = class AddHashtag extends external_react_["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clicked = this.clicked.bind(this);
  }

  componentDidMount() {
    this.setState({
      client: this.props.client
    });
  }

  handleChange(event) {
    // event.preventDefault();
    console.log(event.target.value);
    this.setState({
      value: event.target.value
    });
  }

  async handleSubmit(event) {
    // return event => {
    event.preventDefault();
    console.log(this.state.value);
    getHashtags(this.state.value).then(async res => {
      console.log("CLICKED");
      let client = this.state.client;
      let hashtag = res;
      console.log(hashtag, "HASHTAG");
      let time = this.props.firstTrade.timestamp;
      let reso = client.mutate({
        mutation: external_graphql_tag_default.a`
            mutation addHashtag($time: String!, $hashtag: String!) {
              addHashtag(time: $time, hashtag: $hashtag)
            }
          `,
        variables: {
          time,
          hashtag
        },
        refetchQueries: [`fetchTradeHistory`]
      });
      return await reso;
    }).then(reso => {
      this.setState({
        value: ""
      });
      this.props.store.changeHasTempTags();
    }); // };
  }

  clicked() {
    this.state.clicked ? this.setState({
      clicked: false
    }) : this.setState({
      clicked: true
    });
  }

  render() {
    return Notes_jsx("div", null, Notes_jsx(Popup, {
      onClick: this.clicked
    }, Notes_jsx(react_fontawesome_["FontAwesomeIcon"], {
      icon: free_solid_svg_icons_["faPlus"],
      style: {
        transition: "none"
      }
    })), this.state.clicked ? Notes_jsx(PopupTop, null, Notes_jsx("form", {
      onSubmit: this.handleSubmit
    }, Notes_jsx("input", {
      type: "text",
      value: this.state.value,
      onChange: this.handleChange
    }), Notes_jsx(AddHashSubmit, {
      type: "submit",
      value: "Add Hashtag"
    }))) : null);
  }

}) || _class2) || _class2);
const AddHashSubmit = external_styled_components_default.a.input.withConfig({
  displayName: "Notes__AddHashSubmit",
  componentId: "sc-1x3lw2t-0"
})(["background:none;border:none;color:white;font-weight:500;padding:2px;"]);
const Popup = external_styled_components_default.a.div.withConfig({
  displayName: "Notes__Popup",
  componentId: "sc-1x3lw2t-1"
})(["position:relative;display:inline-block;cursor:pointer;background:#000;padding:8px;border-radius:2px;"]);
const PopupTop = external_styled_components_default.a.div.withConfig({
  displayName: "Notes__PopupTop",
  componentId: "sc-1x3lw2t-2"
})(["position:absolute;background:#000;z-index:1;margin:5px;padding:2px;border-radius:2px;"]); // background: #6c757d;
// background: #b9bdc1;

const SingleHashtagDiv = external_styled_components_default.a.div.withConfig({
  displayName: "Notes__SingleHashtagDiv",
  componentId: "sc-1x3lw2t-3"
})(["background:#f8f8ff;margin:20px 8px;color:black;padding:5px 7px;white-space:nowrap;display:flex;flex-direction:row;margin-left:0px;border-radius:2px;"]);
const ShowNotesDiv = external_styled_components_default.a.div.withConfig({
  displayName: "Notes__ShowNotesDiv",
  componentId: "sc-1x3lw2t-4"
})(["background:#fff;margin:20px 8px;color:#000;padding:10px;padding-top:8px;white-space:nowrap;display:flex;flex-direction:row;margin-left:0px;border-radius:2px;background:#f8f8ff;:hover{transition:none;cursor:pointer;}"]);
const ShowNotesInner = external_styled_components_default.a.div.withConfig({
  displayName: "Notes__ShowNotesInner",
  componentId: "sc-1x3lw2t-5"
})(["", " font-size:13px;transition:none;margin:auto;"], helpers["e" /* wideFont */]);
const SingleHashtagText = external_styled_components_default.a.div.withConfig({
  displayName: "Notes__SingleHashtagText",
  componentId: "sc-1x3lw2t-6"
})(["margin:auto;", ""], helpers["e" /* wideFont */]);
const SingleHashtagDelete = external_styled_components_default.a.div.withConfig({
  displayName: "Notes__SingleHashtagDelete",
  componentId: "sc-1x3lw2t-7"
})(["margin:auto;margin-left:6px;margin-bottom:4px;:hover{cursor:pointer;}"]);
const HashtagDiv = external_styled_components_default.a.div.withConfig({
  displayName: "Notes__HashtagDiv",
  componentId: "sc-1x3lw2t-8"
})(["margin:auto 0;text-align:center;vertical-align:middle;color:white;padding:10px;padding-top:8px;"]);
const FullRow = external_styled_components_default.a.form.withConfig({
  displayName: "Notes__FullRow",
  componentId: "sc-1x3lw2t-9"
})(["display:flex;flex-direction:row;background:#f8f8ff;"]);
const NotesSubmit = external_styled_components_default.a.input.withConfig({
  displayName: "Notes__NotesSubmit",
  componentId: "sc-1x3lw2t-10"
})(["margin:9px;padding:15px;background:#212528;border:none;color:white;"]);
const NotesInput = external_styled_components_default.a.textarea.withConfig({
  displayName: "Notes__NotesInput",
  componentId: "sc-1x3lw2t-11"
})(["width:100%;padding:12px 20px;margin:0px 0;box-sizing:border-box;background:#f8f8ff;border:none;"]);
// EXTERNAL MODULE: external "mobx-react-lite"
var external_mobx_react_lite_ = __webpack_require__("nazx");

// CONCATENATED MODULE: ./components/Dashboard/Notes/TextArea.js
var TextArea_jsx = external_react_default.a.createElement;







const MyTextArea = Object(external_mobx_react_["inject"])("store")(Object(external_mobx_react_lite_["observer"])(({
  firstTrade,
  store,
  client
}) => {
  const {
    0: value,
    1: setValue
  } = Object(external_react_["useState"])();
  const {
    0: light,
    1: setLight
  } = Object(external_react_["useState"])(false);
  const {
    0: myClient,
    1: setClient
  } = Object(external_react_["useState"])(client);
  Object(external_react_["useEffect"])(() => {
    let val;

    if (firstTrade.notes == "undefined") {
      setValue("Add notes here...");
      setLight(true);
    } else {
      setValue(firstTrade.notes);
    }

    let notTemp = true;

    if (store.tempNotes[0] !== undefined) {
      for (let i = 0; i < store.tempNotes.length; i++) {
        if (store.tempNotes[i].time == firstTrade.timestamp.toString()) {
          setValue(store.tempNotes[i].note);
        }
      }
    }
  });
  Object(external_react_["useEffect"])(() => {
    if (value != "Add notes here...") {
      setLight(false);
      getNotes(value).then(async res => {
        let notes = res[0];
        let time = firstTrade.timestamp;
        let reso = myClient.mutate({
          mutation: external_graphql_tag_default.a`
              mutation addNotes($time: String!, $notes: String!) {
                addNotes(time: $time, notes: $notes)
              }
            `,
          variables: {
            time,
            notes
          }
        });
        return await reso;
      });
    }
  }, [value]);

  function handleChange() {
    return event => {
      setLight(false);
      store.addTempNote(firstTrade.timestamp, event.target.value);
      setValue(event.target.value);
    };
  }

  if (light == false) {
    return TextArea_jsx(external_react_autosize_textarea_default.a, {
      style: {
        width: "100%",
        padding: "12px 20px",
        marginTop: "8px",
        boxSizing: "border-box",
        background: "#f8f8ff",
        border: "none",
        outline: "none",
        fontSize: "15px"
      },
      rows: 5,
      maxRows: 25,
      value: value,
      onChange: handleChange()
    });
  } else {
    return TextArea_jsx(external_react_autosize_textarea_default.a, {
      style: {
        width: "100%",
        padding: "12px 20px",
        marginTop: "8px",
        boxSizing: "border-box",
        background: "#f8f8ff",
        border: "none",
        outline: "none",
        fontSize: "15px",
        color: "#c6c6c6"
      },
      rows: 5,
      maxRows: 25,
      value: value,
      onChange: handleChange()
    });
  }
}));
/* harmony default export */ var TextArea = (MyTextArea);
// CONCATENATED MODULE: ./components/Dashboard/Tades/calcTrades.js
async function calcTrades(inputData) {
  // inputData = this.props.slic;
  if (inputData[0].side == "Buy" && inputData[0].execType == "Trade") {
    let avgBuyPrice = 0;
    let avgSellPrice = 0;
    let totBuyContracts = 0;
    let totSellContracts = 0;
    let buyNum = 0;
    let sellNum = 0;
    let totBuyContractsMult = 0;
    let totSellContractsMult = 0;
    let realQty = 0;
    let totCommission = 0;

    for (let i = 0; i < inputData.length; i++) {
      // realQty = inputData[i].orderQty - inputData[i].leavesQty;
      if (inputData[i].side == "Buy" && inputData[i].leavesQty == 0) {
        buyNum += 1;
        totBuyContracts += inputData[i].orderQty;
        totBuyContractsMult += inputData[i].orderQty * parseFloat(inputData[i].price);
      }

      if (inputData[i].side == "Sell" && inputData[i].leavesQty == 0) {
        sellNum += 1;
        totSellContracts += inputData[i].orderQty;
        totSellContractsMult += inputData[i].orderQty * parseFloat(inputData[i].price);
      }

      if (inputData[i].orderType == "Limit" && inputData[i].execType !== "Funding") {
        totCommission += realQty * 0.0025 / inputData[i].price;
      }

      if (inputData[i].orderType == "Market") {
        totCommission -= realQty * 0.0075 / inputData[i].price;
      }

      if (inputData[i].orderType.includes("Stop")) {
        totCommission -= realQty * 0.0075 / inputData[i].price;
      }

      if (i == inputData.length - 1) {
        avgBuyPrice = totBuyContractsMult / totBuyContracts;
        avgSellPrice = totSellContractsMult / totSellContracts;
        let avgExit;
        let avgEntry;

        if (avgBuyPrice != null) {
          avgEntry = avgBuyPrice;
        } else {
          avgEntry = 0;
        }

        if (avgSellPrice != null) {
          avgExit = avgSellPrice;
        } else {
          avgExit = 0;
        } // this.state.cumQty = totBuyContracts;


        let thePnl = (1 / avgBuyPrice - 1 / avgSellPrice) * totSellContracts;

        if (thePnl != null) {
          let myPnl = thePnl + totCommission;
          return new Promise(resolve => {
            let end = {};
            end["pnl"] = myPnl;
            end["avgEntryPrice"] = avgEntry;
            end["avgExitPrice"] = avgExit;
            end["cumQty"] = totBuyContracts;
            resolve(end);
          }); //   store.addPnl(myPnl);
        } else {
          return new Promise(resolve => {
            let end = {};
            end["pnl"] = 0;
            end["avgEntryPrice"] = avgEntry;
            end["avgExitPrice"] = avgExit;
            end["cumQty"] = totBuyContracts;
            resolve(end);
          });
        }
      }
    }
  }

  if (inputData[0].side == "Sell" && inputData[0].execType == "Trade") {
    let totBuyContracts = 0;
    let totSellContracts = 0;
    let buyNum = 0;
    let sellNum = 0;
    let totBuyContractsMult = 0;
    let totSellContractsMult = 0;
    let realQty = 0;
    let totCommission = 0;

    for (let i = 0; i < inputData.length; i++) {
      // realQty = inputData[i].orderQty - inputData[i].leavesQty;
      if (inputData[i].side == "Buy" && inputData[i].leavesQty == 0) {
        // totBuyPrice += parseFloat(inputData[i].price);
        buyNum += 1;
        totBuyContracts += inputData[i].orderQty;
        totBuyContractsMult += inputData[i].orderQty * parseFloat(inputData[i].price);

        if (inputData[0].orderQty == 40000) {
          console.log("BUY SIDE", inputData[i], realQty, totSellContracts, totBuyContracts, totSellContractsMult);
        }
      }

      if (inputData[i].side == "Sell" && inputData[i].leavesQty == 0) {
        sellNum += 1;

        if (i == 0) {
          let difference = inputData[i].orderQty + inputData[i].currentQty;
          let newRealQty = inputData[i].orderQty - difference;
          totSellContracts += newRealQty;
          totSellContractsMult += newRealQty * parseFloat(inputData[i].price);
        } else {
          totSellContracts += inputData[i].orderQty;
          totSellContractsMult += inputData[i].orderQty * parseFloat(inputData[i].price);
        }

        if (inputData[0].orderQty == 40000) {
          console.log("SELL SIDE", inputData[i], realQty, totSellContracts, totBuyContracts, totSellContractsMult);
        }
      }

      if (inputData[i].orderType == "Limit" && inputData[i].execType !== "Funding") {
        totCommission += realQty * 0.0025 / inputData[i].price;
      }

      if (inputData[i].orderType == "Market") {
        totCommission -= realQty * 0.0075 / inputData[i].price;
      }

      if (inputData[i].orderType.includes("Stop")) {
        totCommission -= realQty * 0.0075 / inputData[i].price;
      }

      if (i == inputData.length - 1) {
        let avgBuyPrice = totBuyContractsMult / totBuyContracts;
        let avgSellPrice = totSellContractsMult / totSellContracts;
        let pnl = (1 / avgBuyPrice - 1 / avgSellPrice) * totBuyContracts;

        if (inputData[0].orderQty == 40000) {
          console.log(pnl, avgBuyPrice, avgSellPrice, totBuyContracts);
        }

        let avgEntry;
        let avgExit;

        if (avgBuyPrice != null) {
          avgExit = avgBuyPrice;
        } else {
          avgExit = 0;
        }

        if (avgSellPrice != null) {
          avgEntry = avgSellPrice;
        } else {
          avgEntry = 0;
        }

        if (pnl != null) {
          let myPnl = pnl + totCommission;
          return new Promise(resolve => {
            let end = {};
            end["pnl"] = myPnl;
            end["avgEntryPrice"] = avgEntry;
            end["avgExitPrice"] = avgExit;
            end["cumQty"] = totSellContracts;

            if (inputData[0].orderQty == 40000) {
              console.log(end);
            }

            resolve(end);
          });
        } else {
          return new Promise(resolve => {
            let end = {};
            end["pnl"] = 0;
            end["avgEntryPrice"] = avgEntry;
            end["avgExitPrice"] = avgExit;
            end["cumQty"] = totSellContracts;
            resolve(end);
          });
        }
      }
    }
  }
}
// CONCATENATED MODULE: ./components/Dashboard/Tades/Trades.js
var Trades_dec, Trades_class, Trades_dec2, Trades_class2;

var Trades_jsx = external_react_default.a.createElement;

















let Trades_Example = (Trades_dec2 = Object(external_mobx_react_["inject"])(["store"]), Trades_dec2(Trades_class2 = Object(external_mobx_react_["observer"])(Trades_class2 = class Example extends external_react_["PureComponent"] {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
      data: [],
      fullTrades: [],
      hasSingleTrade: false
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.createFullTrades = this.createFullTrades.bind(this);
  }

  createFullTrades(data) {
    let fullRay = [];
    let fullTrades = [];

    for (let i = 0; i < data.fetchTradeHistory.length; i++) {
      fullRay.unshift(data.fetchTradeHistory[i]);

      if (i == data.fetchTradeHistory.length - 1) {
        for (let j = 0; j < fullRay.length; j++) {
          let dat = fullRay[j]; // dat.timestamp = formatDateForRow(dat.timestamp);
          // fullRay[j] = dat;

          if (dat.trdStart == true) {
            let sliced = fullRay.slice(j, fullRay.length);

            for (let k = 0; k < sliced.length; k++) {
              if (sliced[k].trdEnd == true && k > 0) {
                let newsliced = sliced.slice(0, k + 1);
                fullTrades.unshift(newsliced);
                break;
              }
            }
          }

          if (j == fullRay.length - 1) {
            let returnVal = {};
            returnVal["initData"] = this.props.initData;
            returnVal["data"] = fullRay;
            returnVal["fullTrades"] = fullTrades;
            return returnVal;
          }
        }
      }
    }
  }

  filter() {}

  componentDidUpdate(prevProps) {
    if (!external_fast_deep_equal_default()(this.props.filteredData, prevProps.filteredData)) {
      // this.updateTrades(this.props.data);
      let newFullTrades = [];
      let firstFullTrades = this.createFullTrades(this.props.data);
      firstFullTrades = firstFullTrades.fullTrades;

      if (this.props.filteredData == null) {
        this.setState({
          fullTrades: firstFullTrades
        });
      } else {
        for (let i = 0; i < firstFullTrades.length; i++) {
          for (let j = 0; j < this.props.filteredData.length; j++) {
            if (firstFullTrades[i][0].id == this.props.filteredData[j].id) {
              newFullTrades.unshift(firstFullTrades[i]);
            }
          }

          if (i == firstFullTrades.length - 1) {
            this.setState({
              fullTrades: newFullTrades
            });
          }
        }
      }
    }
  }

  componentDidMount() {
    let returned = this.createFullTrades(this.props.data);

    if (returned != undefined) {
      this.setState({
        data: returned.fullRay,
        fullTrades: returned.fullTrades,
        initData: returned.initData
      });
    } else {
      this.setState({
        data: this.props.initData,
        initData: this.props.initData
      });
    }

    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
    this.singleNotesReaction = Object(external_mobx_["reaction"])(() => this.props.store.isSingleNotes, (notifications, reaction) => {
      if (this.props.store.isSingleNotes == false) {
        this.setState({
          isSingleNotes: false
        });
      } else {
        this.setState({
          isSingleNotes: true
        });
      }
    });
    this.singleTradeReaction = Object(external_mobx_["reaction"])(() => this.props.store.hasSingleTrade, (notifications, reaction) => {
      this.props.store.pnl = 0;

      if (this.props.store.hasSingleTrade == false) {
        this.setState({
          hasSingleTrade: false
        });
      } else {
        this.setState({
          hasSingleTrade: true
        });
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    if (window.innerWidth < 768) {
      this.setState({
        width: window.innerWidth,
        height: window.innerHeight,
        chartWidth: window.innerWidth * 0.9
      });
    } else if (window.innerWidth < 1024) {
      this.setState({
        width: window.innerWidth,
        height: window.innerHeight,
        chartWidth: window.innerWidth * 0.9 - 179
      });
    } else if (window.innerWidth >= 1024) {
      this.setState({
        width: window.innerWidth,
        height: window.innerHeight,
        chartWidth: window.innerWidth * 0.8 - 179
      });
    }
  }

  render() {
    if (this.state.hasSingleTrade == false) {
      return Trades_jsx(external_styled_components_["ThemeProvider"], {
        theme: Object(theme["a" /* default */])(false)
      }, Trades_jsx("div", {
        style: {
          minWidth: this.state.chartWidth
        }
      }, this.state.fullTrades.map((slic, i) => {
        return Trades_jsx(Trades_MakeCol, {
          clicked: false,
          slic: slic,
          onemin: this.props.data.fetchOneMinuteCandleHistory,
          fivemin: this.props.data.fetchFiveMinuteCandleHistory,
          onehour: this.props.data.fetchOneHourCandleHistory,
          oneday: this.props.data.fetchOneDayCandleHistory,
          key: i
        });
      })));
    } else {
      return Trades_jsx(external_styled_components_["ThemeProvider"], {
        theme: Object(theme["a" /* default */])(false)
      }, Trades_jsx("div", {
        style: {
          minWidth: this.state.chartWidth
        }
      }, Trades_jsx(Trades_MakeCol, {
        clicked: true,
        slic: this.props.store.singleTrade,
        onemin: this.props.data.fetchOneMinuteCandleHistory,
        fivemin: this.props.data.fetchFiveMinuteCandleHistory,
        onehour: this.props.data.fetchOneHourCandleHistory,
        oneday: this.props.data.fetchOneDayCandleHistory
      })));
    }
  }

}) || Trades_class2) || Trades_class2);

let Trades_MakeCol = (Trades_dec = Object(external_mobx_react_["inject"])("store"), Trades_dec(Trades_class = Object(external_mobx_react_["observer"])(Trades_class = class MakeCol extends external_react_["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      pnl: 0,
      avgEntryPrice: 0,
      avgExitPrice: 0,
      clicked: false,
      cumQty: 0,
      readMoreClicked: false
    };
    this.readMoreClicked = this.readMoreClicked.bind(this);
    this.clicked = this.clicked.bind(this);
    this.getSlicData = this.getSlicData.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  updateWindowDimensions() {
    this.setState({
      width: window.innerWidth
    });
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateWindowDimensions);
    this.setState({
      clicked: this.props.clicked
    });
  }

  componentDidUpdate(prevProps) {
    if (!external_fast_deep_equal_default()(this.props.slic, prevProps.slic)) {
      this.getSlicData();
    }
  }

  componentWillMount() {
    this.getSlicData();
    this.updateWindowDimensions();
  }

  async getSlicData() {
    this.state.data = this.props.slic;
    let calced = await calcTrades(this.props.slic);

    if (calced !== undefined) {
      this.setState({
        pnl: calced["pnl"],
        avgEntryPrice: calced["avgEntryPrice"],
        avgExitPrice: calced["avgExitPrice"],
        cumQty: calced["cumQty"]
      });

      if (this.props.clicked == true) {
        this.props.store.pnl = calced["pnl"];
      } else {
        this.props.store.addPnl(calced["pnl"]);
      }
    }
  }

  clicked(dat) {
    if (this.state.clicked == false) {
      this.props.store.setSingleTrade(dat);
      this.props.store.hasSingleTrade = true;
      this.setState({
        clicked: true
      });
    } else {
      this.props.store.hasSingleTrade = false;
      this.setState({
        clicked: false
      });
    }
  }

  readMoreClicked() {
    if (this.state.readMoreClicked == false) {
      this.setState({
        readMoreClicked: true
      });
    } else {
      this.setState({
        readMoreClicked: false
      });
    }
  }

  render() {
    if (this.state.clicked == false) {
      return Trades_jsx(ContainDiv, {
        onClick: () => this.clicked(this.state.data)
      }, Trades_jsx(NextToDiv, null, Object(Functions["b" /* formatDateMonthOnly */])(this.state.data[0].timestamp)), Trades_jsx(NextToDiv, null, Object(Functions["b" /* formatDateMonthOnly */])(this.state.data[this.state.data.length - 1].timestamp)), Trades_jsx(Trades_IsShort, {
        side: this.state.data[0].side,
        last: this.state.data[this.state.data.length - 1].orderType
      }), Trades_jsx(NextToDiv, null, "$", this.state.avgEntryPrice.toFixed(1)), Trades_jsx(NextToDiv, null, "$", this.state.avgExitPrice.toFixed(1)), Trades_jsx(NextToDiv, null, this.state.cumQty), Trades_jsx(NextToDiv, null, this.state.pnl.toFixed(4) + "xbt"));
    } else {
      if (this.props.store.isSingleNotes == false) {
        return Trades_jsx(TotalDetails, null, Trades_jsx(MoreBoxTall, null, Trades_jsx(ContainDivClicked, {
          onClick: () => this.clicked(this.state.data)
        }, Trades_jsx(NextToDiv, null, Object(Functions["b" /* formatDateMonthOnly */])(this.state.data[0].timestamp)), Trades_jsx(NextToDiv, null, Object(Functions["b" /* formatDateMonthOnly */])(this.state.data[this.state.data.length - 1].timestamp)), Trades_jsx(Trades_IsShort, {
          side: this.state.data[0].side,
          last: this.state.data[this.state.data.length - 1].orderType
        }), Trades_jsx(NextToDiv, null, "$", this.state.avgEntryPrice.toFixed(1)), Trades_jsx(NextToDiv, null, "$", this.state.avgExitPrice.toFixed(1)), Trades_jsx(NextToDiv, null, this.state.cumQty), Trades_jsx(NextToDiv, null, this.state.pnl.toFixed(4) + "xbt"))), Trades_jsx(Chart_ChartComponent, {
          onemin: this.props.onemin,
          fivemin: this.props.fivemin,
          onehour: this.props.onehour,
          oneday: this.props.oneday,
          trades: this.state.data
        }), Trades_jsx(external_react_apollo_["ApolloConsumer"], null, client => Trades_jsx(TextArea, {
          firstTrade: this.state.data[0],
          client: client
        })));
      } else {
        return Trades_jsx(TotalDetails, null, Trades_jsx(MoreBoxTall, null, Trades_jsx(OrderExecution, {
          data: this.state.data
        })));
      }
    }
  }

}) || Trades_class) || Trades_class);

class Trades_IsShort extends external_react_["Component"] {
  componentDidMount() {
    console.log(this.props.last);
  }

  render() {
    if (this.props.side == "Sell") {
      if (this.props.last.includes("Stop")) {
        return Trades_jsx(NextToDiv, null, "Short");
      } else {
        return Trades_jsx(NextToDiv, null, "Short");
      }
    } else {
      if (this.props.last.includes("Stop")) {
        return Trades_jsx(NextToDiv, null, "Long");
      } else {
        return Trades_jsx(NextToDiv, null, "Long");
      }
    }
  }

}

const OrderExecution = ({
  data
}) => {
  return Trades_jsx(ExecContainer, null, Trades_jsx(ContainDivBlack, null, Trades_jsx(NextToDivBlackTitle, null, Trades_jsx(TitleSpan, null, "Timestamp")), Trades_jsx(NextToDivBlackTitle, null, Trades_jsx(TitleSpan, null, "Side")), Trades_jsx(NextToDivBlackTitle, null, Trades_jsx(TitleSpan, null, "Order Type")), Trades_jsx(NextToDivBlackTitle, null, Trades_jsx(TitleSpan, null, "Price")), Trades_jsx(NextToDivBlackTitle, null, Trades_jsx(TitleSpan, null, "Order Qty")), Trades_jsx(NextToDivBlackTitle, null, Trades_jsx(TitleSpan, null, "Leaves Qty")), Trades_jsx(NextToDivBlackTitle, null, Trades_jsx(TitleSpan, null, "Commission"))), data.map(dat => {
    return Trades_jsx(ContainDivBlack, null, Trades_jsx(NextToDivBlack, null, Object(Functions["b" /* formatDateMonthOnly */])(dat.timestamp)), dat.execType == "Trade" ? Trades_jsx(NextToDivBlack, null, dat.side) : Trades_jsx(NextToDivBlack, null, dat.execType), Trades_jsx(NextToDivBlack, null, dat.orderType), Trades_jsx(NextToDivBlack, null, "$", dat.price.toString()), Trades_jsx(NextToDivBlack, null, dat.orderQty), Trades_jsx(NextToDivBlack, null, dat.leavesQty == "0" ? "" : dat.leavesQty), Trades_jsx(NextToDivBlack, null, dat.execType == "Funding" ? "" : Object(Functions["a" /* calcCommission */])(dat.price, dat.side, dat.orderQty, dat.leavesQty, dat.orderType)));
  }));
};

const ContainDiv = external_styled_components_default.a.div.withConfig({
  displayName: "Trades__ContainDiv",
  componentId: "bmyhv8-0"
})(["width:100%;display:flex;flex-direction:row;height:47px;border-bottom:1px solid #f2f2f2;font-weight:400;&:hover{transition:none;background:#f8f8ff;cursor:pointer;}"]);
const ContainDivClicked = external_styled_components_default.a.div.withConfig({
  displayName: "Trades__ContainDivClicked",
  componentId: "bmyhv8-1"
})(["width:100%;display:flex;flex-direction:row;height:47px;transition:none;font-weight:400;border-bottom:1px solid #f2f2f2;border-radius:none;cursor:pointer;background:#f8f8ff;background:#ffffff;"]);
const ContainDivBlack = external_styled_components_default.a.div.withConfig({
  displayName: "Trades__ContainDivBlack",
  componentId: "bmyhv8-2"
})(["width:100%;display:flex;flex-direction:row;height:40px;background:#f8f8ff;border-bottom:1px solid #f2f2f2;"]);
const ContainDivHeader = external_styled_components_default.a.div.withConfig({
  displayName: "Trades__ContainDivHeader",
  componentId: "bmyhv8-3"
})(["width:100%;display:flex;flex-direction:row;height:38px;border-bottom:1px solid #d3d3d3;"]); // f2f2f2
// border-right: 1px solid #f2f2f2;

const NextToDiv = external_styled_components_default.a.div.withConfig({
  displayName: "Trades__NextToDiv",
  componentId: "bmyhv8-4"
})(["display:inline-block;width:30%;padding:8px;padding-top:12px;padding-left:12px;color:#000;font-weight:300;font-size:14px;@media (max-width:550px){font-size:13px;}"]);
const NextToDivBlack = external_styled_components_default.a.div.withConfig({
  displayName: "Trades__NextToDivBlack",
  componentId: "bmyhv8-5"
})(["display:inline-block;width:30%;padding:4px;padding-left:12px;font-size:14px;padding-top:9px;"]); // border-right: 1px solid #f2f2f2;

const NextToDivBlackTitle = external_styled_components_default.a.div.withConfig({
  displayName: "Trades__NextToDivBlackTitle",
  componentId: "bmyhv8-6"
})(["display:inline-block;width:30%;padding:4px;padding-left:14px;padding-top:9px;font-size:14px;"]);
const TitleSpan = external_styled_components_default.a.span.withConfig({
  displayName: "Trades__TitleSpan",
  componentId: "bmyhv8-7"
})(["display:inline-block;border-bottom:1px dotted black;padding-bottom:0px;font-size:13px;font-weight:300;color:black;"]);
const NextToDivBlackTime = external_styled_components_default.a.div.withConfig({
  displayName: "Trades__NextToDivBlackTime",
  componentId: "bmyhv8-8"
})(["display:inline-block;width:30%;padding:4px;padding-left:12px;font-size:14px;padding-top:10px;@media (max-width:1200px){font-size:13px;}@media (max-width:663px){padding-top:0px !important;}"]);
const NextToDivHeader = external_styled_components_default.a.div.withConfig({
  displayName: "Trades__NextToDivHeader",
  componentId: "bmyhv8-9"
})(["display:inline-block;width:30%;color:#78838e;font-weight:600;display:inline-block;text-transform:uppercase;padding:10px;padding-left:12px;", " font-size:13px;"], helpers["c" /* smallFont */]);
const InnerPnlWin = external_styled_components_default.a.div.withConfig({
  displayName: "Trades__InnerPnlWin",
  componentId: "bmyhv8-10"
})(["background:black;margin-right:auto;padding:0 3px;max-width:80px;color:white;font-weight:600;"]);
const InnerPnlLoss = external_styled_components_default.a.div.withConfig({
  displayName: "Trades__InnerPnlLoss",
  componentId: "bmyhv8-11"
})(["background:red;margin-right:auto;padding:0 3px;border-radius:2px;max-width:80px;color:white;font-weight:600;"]);
const ReadMore = external_styled_components_default.a.div.withConfig({
  displayName: "Trades__ReadMore",
  componentId: "bmyhv8-12"
})(["position:absolute;bottom:0;left:0;width:100%;text-align:center;margin:0;padding:10px 0;background-image:-webkit-gradient( linear,left top,left bottom,color-stop(0,rgba(255,0,0,0)),color-stop(1,rgba(248,248,255,1)) );"]);
const ReadMoreTall = external_styled_components_default.a.div.withConfig({
  displayName: "Trades__ReadMoreTall",
  componentId: "bmyhv8-13"
})(["position:absolute;bottom:0;left:0;width:100%;text-align:center;margin:0;padding:10px 0;"]); // background-image: linear-gradient(to bottom, transparent, black);

const MoreBoxShort = external_styled_components_default.a.div.withConfig({
  displayName: "Trades__MoreBoxShort",
  componentId: "bmyhv8-14"
})(["max-height:300px;position:relative;overflow:hidden;"]);
const MoreBoxTall = external_styled_components_default.a.div.withConfig({
  displayName: "Trades__MoreBoxTall",
  componentId: "bmyhv8-15"
})(["max-height:none;position:relative;overflow:hidden;"]);
const ExecContainer = external_styled_components_default.a.div.withConfig({
  displayName: "Trades__ExecContainer",
  componentId: "bmyhv8-16"
})(["max-height:none;position:relative;overflow:hidden;border:1px solid #f2f2f2;"]);
const TotalDetails = external_styled_components_default.a.div.withConfig({
  displayName: "Trades__TotalDetails",
  componentId: "bmyhv8-17"
})([""]); // border: 1px solid rgba(33, 37, 40, 0.7);

const ReadMoreInner = external_styled_components_default.a.div.withConfig({
  displayName: "Trades__ReadMoreInner",
  componentId: "bmyhv8-18"
})(["color:rgba(33,37,40,1);padding:0;margin:auto;width:30px;border-radius:2px;-webkit-transition-property:none;-moz-transition-property:none;-o-transition-property:none;transition-property:none;:hover{cursor:pointer;background-color:rgba(33,37,40,1);color:#fff;-webkit-transition-property:none;-moz-transition-property:none;-o-transition-property:none;transition-property:none;}font-size:20px;"]);
// EXTERNAL MODULE: ./components/Menu/Datepicker.js
var Datepicker = __webpack_require__("6S3F");

// CONCATENATED MODULE: ./components/Menu/CategoryList.js
var CategoryList_jsx = external_react_default.a.createElement;






const SidebarCategoryList = Object(external_mobx_react_["inject"])("store")(Object(external_mobx_react_lite_["observer"])(({
  store
}) => {
  const {
    0: customClicked,
    1: setCustomClicked
  } = Object(external_react_["useState"])(false);

  function handleClick(value) {
    store.resetPnl();
    store.changeDate(value);
    console.log(store);
  }

  function handleCustomClicked() {
    if (customClicked == true) {
      setCustomClicked(false);
    } else {
      setCustomClicked(true);
    }
  }

  return CategoryList_jsx("div", null, CategoryList_jsx(CategoryList_CategoryList, null, store.date == "Today" && customClicked == false ? CategoryList_jsx(ItemActive, {
    onClick: () => handleClick("Today")
  }, "Today") : CategoryList_jsx(Item, {
    onClick: () => handleClick("Today")
  }, "Today"), store.date == "Yesterday" && customClicked == false ? CategoryList_jsx(ItemActive, {
    onClick: () => handleClick("Yesterday")
  }, "Yesterday") : CategoryList_jsx(Item, {
    onClick: () => handleClick("Yesterday")
  }, "Yesterday"), store.date == "This Week" && customClicked == false ? CategoryList_jsx(ItemActive, {
    onClick: () => handleClick("This Week")
  }, "This Week") : CategoryList_jsx(Item, {
    onClick: () => handleClick("This Week")
  }, "This Week"), store.date == "This Month" && customClicked == false ? CategoryList_jsx(ItemActive, {
    onClick: () => handleClick("This Month")
  }, "This Month") : CategoryList_jsx(Item, {
    onClick: () => handleClick("This Month")
  }, "This Month"), customClicked == true || store.date == "Custom" ? CategoryList_jsx(ItemActive, {
    onClick: () => handleCustomClicked()
  }, "Custom") : CategoryList_jsx(Item, {
    onClick: () => handleCustomClicked()
  }, "Custom")), customClicked ? CategoryList_jsx(CategoryList_Popup, null) : null);
}));

const CategoryList_Popup = () => {
  const {
    0: entered,
    1: setEntered
  } = Object(external_react_["useState"])(false);
  return CategoryList_jsx(CategoryList_PopupTop, null, CategoryList_jsx(PopContain, null, CategoryList_jsx(Row1, null, CategoryList_jsx(PopLabel, null, "start:"), CategoryList_jsx(Datepicker["a" /* default */], {
    start: true,
    set: entered
  })), CategoryList_jsx(Row1, null, CategoryList_jsx(PopLabel, null, "end:"), CategoryList_jsx(Datepicker["a" /* default */], {
    start: false,
    set: entered
  })), CategoryList_jsx(PopEnter, {
    onClick: () => setEntered(true)
  }, "Set Date")));
};

/* harmony default export */ var CategoryList = (SidebarCategoryList);
const Row1 = external_styled_components_default.a.div.withConfig({
  displayName: "CategoryList__Row1",
  componentId: "k2se5c-0"
})(["margin-bottom:5px;"]);
const PopContain = external_styled_components_default.a.div.withConfig({
  displayName: "CategoryList__PopContain",
  componentId: "k2se5c-1"
})(["margin:5px;"]);
const PopLabel = external_styled_components_default.a.div.withConfig({
  displayName: "CategoryList__PopLabel",
  componentId: "k2se5c-2"
})(["color:#fff;"]);
const PopEnter = external_styled_components_default.a.button.withConfig({
  displayName: "CategoryList__PopEnter",
  componentId: "k2se5c-3"
})(["margin-top:5px;background:#fff;padding:2px;border-radius:1px;"]);
const CategoryList_PopupTop = external_styled_components_default.a.div.withConfig({
  displayName: "CategoryList__PopupTop",
  componentId: "k2se5c-4"
})(["position:absolute;background:#000;z-index:1;margin:5px;padding:2px;border-radius:2px;"]);
const PopupItem = external_styled_components_default.a.div.withConfig({
  displayName: "CategoryList__PopupItem",
  componentId: "k2se5c-5"
})(["position:relative;display:inline-block;cursor:pointer;"]);
const CategoryList_CategoryList = external_styled_components_default.a.nav.withConfig({
  displayName: "CategoryList",
  componentId: "k2se5c-6"
})(["display:flex;flex-direction:column;"]);
const Item = external_styled_components_default.a.div.withConfig({
  displayName: "CategoryList__Item",
  componentId: "k2se5c-7"
})(["padding:12px;font-size:15px;text-decoration:none;color:", ";color:white;::after{left:-1px;top:0;bottom:0;border-left:3px solid ", ";}&:hover{background-color:#fff;color:#212529;cursor:pointer;}"], props => props.theme.normalText, props => props.theme.accent);
const ItemActive = external_styled_components_default.a.div.withConfig({
  displayName: "CategoryList__ItemActive",
  componentId: "k2se5c-8"
})(["padding:12px;font-size:15px;font-weight:300;text-decoration:none;color:", ";color:white;::after{left:-1px;top:0;bottom:0;border-left:3px solid ", ";}background-color:#fff;color:#212529;cursor:pointer;"], props => props.theme.normalText, props => props.theme.accent);
// CONCATENATED MODULE: ./components/Menu/Header.js
var Header_jsx = external_react_default.a.createElement;




const SidebarCategoryListHeader = () => Header_jsx(Header_Header, null, "Change Date");

/* harmony default export */ var Header = (SidebarCategoryListHeader);
const Header_Header = external_styled_components_default.a.span.withConfig({
  displayName: "Header",
  componentId: "sc-1ydou6k-0"
})(["", " font-weight:600;display:block;padding:12px;text-align:center;color:", ";color:white;"], helpers["e" /* wideFont */], props => props.theme.mutedText);
// CONCATENATED MODULE: ./components/Menu/Menu.js
var Menu_jsx = external_react_default.a.createElement;












const SymbolChooser = Object(external_mobx_react_["inject"])("store")(Object(external_mobx_react_lite_["observer"])(({
  store
}) => {
  const {
    0: dropdown,
    1: setDropdown
  } = Object(external_react_["useState"])(false);

  const showDropdown = () => {
    if (dropdown == false) {
      setDropdown(true);
    } else {
      setDropdown(false);
    }
  };

  const clicked = value => {
    store.setSymbol(value);
    store.changeHasTempTags();
    setDropdown(false);
  };

  return Menu_jsx(Lapper2, {
    onClick: () => {
      showDropdown();
    }
  }, Menu_jsx(SetSymbol, null, store.symbol, dropdown == true ? Menu_jsx(react_fontawesome_["FontAwesomeIcon"], {
    icon: free_solid_svg_icons_["faCaretUp"],
    style: {
      transition: "none",
      marginRight: "3px",
      marginLeft: "3px"
    }
  }) : Menu_jsx(react_fontawesome_["FontAwesomeIcon"], {
    icon: free_solid_svg_icons_["faCaretDown"],
    style: {
      transition: "none",
      marginRight: "3px",
      marginLeft: "3px"
    }
  })), dropdown == true ? Menu_jsx(DropdownListContainer, null, Menu_jsx(DropdownListItem, {
    onClick: () => clicked("XBTUSD")
  }, "XBTUSD"), Menu_jsx(DropdownListItem, {
    onClick: () => clicked("XBTU20")
  }, "XBTU20"), Menu_jsx(DropdownListItem, {
    onClick: () => clicked("XBTM20")
  }, "XBTM20")) : null);
}));
const Pnl = Object(external_mobx_react_["inject"])("store")(Object(external_mobx_react_lite_["observer"])(({
  store
}) => {
  if (store.pnl >= 0) {
    return Menu_jsx(Lapper2, null, Menu_jsx(InnerLapper, {
      style: {
        padding: "4px"
      }
    }, store.pnl.toFixed(4) + "xbt"));
  } else {
    return Menu_jsx(Lapper3, null, Menu_jsx(InnerLapper, {
      style: {
        padding: "4px"
      }
    }, store.pnl.toFixed(4) + "xbt"));
  }
}));
const Sidebar = Object(external_mobx_react_["inject"])("store")(Object(external_mobx_react_lite_["observer"])(({
  store
}) => {
  const {
    0: dropdown,
    1: setDropdown
  } = Object(external_react_["useState"])(false);

  const clicked = value => {
    store.setSymbol(value);
    store.changeHasTempTags();
    setDropdown(false);
  };

  const showDropdown = () => {
    if (dropdown == false) {
      setDropdown(true);
    } else {
      setDropdown(false);
    }
  };

  return Menu_jsx(external_styled_components_["ThemeProvider"], {
    theme: Object(theme["a" /* default */])(false)
  }, Menu_jsx(LapperContainer, null, Menu_jsx(Lapper4, {
    onClick: () => {
      showDropdown();
    }
  }, Menu_jsx(SetSymbol, null, store.symbol, dropdown == true ? Menu_jsx(react_fontawesome_["FontAwesomeIcon"], {
    icon: free_solid_svg_icons_["faCaretUp"],
    style: {
      transition: "none",
      marginRight: "4px",
      marginLeft: "3px"
    }
  }) : Menu_jsx(react_fontawesome_["FontAwesomeIcon"], {
    icon: free_solid_svg_icons_["faCaretDown"],
    style: {
      transition: "none",
      marginRight: "4px",
      marginLeft: "3px"
    }
  })), dropdown == true ? Menu_jsx(DropdownListContainer, null, Menu_jsx(DropdownListItem, {
    onClick: () => clicked("XBTUSD")
  }, "XBTUSD"), Menu_jsx(DropdownListItem, {
    onClick: () => clicked("XBTU20")
  }, "XBTU20"), Menu_jsx(DropdownListItem, {
    onClick: () => clicked("XBTM20")
  }, "XBTM20")) : null), Menu_jsx(Lapper, null, Menu_jsx(CategoryList, null)), store.pnl >= 0 ? Menu_jsx(Lapper2, null, Menu_jsx(InnerLapper, null, store.pnl.toFixed(4) + "xbt")) : Menu_jsx(Lapper3, null, Menu_jsx(InnerLapper, null, store.pnl.toFixed(4) + "xbt"))));
}));
/* harmony default export */ var Menu = (Sidebar);
const LapperContainer = external_styled_components_default.a.div.withConfig({
  displayName: "Menu__LapperContainer",
  componentId: "sc-7pnj6a-0"
})(["display:flex;flex-direction:column;margin-left:24px;"]);
const Lapper = external_styled_components_default.a.aside.withConfig({
  displayName: "Menu__Lapper",
  componentId: "sc-7pnj6a-1"
})(["display:flex;flex-direction:column;flex-basis:240px;border-radius:2px;background-color:", ";background-color:#212529;margin-bottom:10px;@media (max-width:768px){display:none;}"], props => props.theme.foreground);
const InnerLapper = external_styled_components_default.a.div.withConfig({
  displayName: "Menu__InnerLapper",
  componentId: "sc-7pnj6a-2"
})(["color:white;text-align:center;margin:auto;"]);
const Lapper2 = external_styled_components_default.a.aside.withConfig({
  displayName: "Menu__Lapper2",
  componentId: "sc-7pnj6a-3"
})(["border-radius:2px;background-color:", ";background-color:green;margin:auto;margin-top:0;margin-bottom:0;"], props => props.theme.foreground);
const Lapper3 = external_styled_components_default.a.aside.withConfig({
  displayName: "Menu__Lapper3",
  componentId: "sc-7pnj6a-4"
})(["border-radius:2px;background-color:", ";background-color:red;margin:auto;"], props => props.theme.foreground);
const Lapper4 = external_styled_components_default.a.aside.withConfig({
  displayName: "Menu__Lapper4",
  componentId: "sc-7pnj6a-5"
})(["display:flex;flex-direction:column;border-radius:2px;background-color:", ";background-color:#212529;margin-bottom:10px;@media (max-width:768px){display:none;}"], props => props.theme.foreground);
const SetSymbol = external_styled_components_default.a.div.withConfig({
  displayName: "Menu__SetSymbol",
  componentId: "sc-7pnj6a-6"
})(["font-weight:500;font-size:14px;", " color:#fff;background-color:#212527;:hover{cursor:pointer;}"], helpers["e" /* wideFont */]);
const DropdownContainer = external_styled_components_default.a.div.withConfig({
  displayName: "Menu__DropdownContainer",
  componentId: "sc-7pnj6a-7"
})(["height:100px;"]);
const DropdownListContainer = external_styled_components_default.a.ul.withConfig({
  displayName: "Menu__DropdownListContainer",
  componentId: "sc-7pnj6a-8"
})(["list-style-type:none;position:absolute;margin-left:-8px;border-radius:2px;background-color:#212527;"]);
const DropdownListItem = external_styled_components_default.a.li.withConfig({
  displayName: "Menu__DropdownListItem",
  componentId: "sc-7pnj6a-9"
})(["text-align:center;font-weight:500;font-size:14px;color:#fff;background-color:#212529;padding:2px 15px;margin:4px 0;", ":hover{cursor:pointer;color:#000;background-color:#fff;}"], helpers["e" /* wideFont */]);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: ./node_modules/bootstrap/dist/css/bootstrap.min.css
var bootstrap_min = __webpack_require__("q4sD");

// EXTERNAL MODULE: ./components/form/FormWrapper.js
var FormWrapper = __webpack_require__("wC3/");

// EXTERNAL MODULE: ./components/form/Input.js
var Input = __webpack_require__("5IWx");

// EXTERNAL MODULE: ./components/form/Label.js
var Label = __webpack_require__("teKy");

// EXTERNAL MODULE: ./components/shared/Button.js
var Button = __webpack_require__("4Us4");

// CONCATENATED MODULE: ./components/Dashboard/AddApiForm.js
var AddApiForm_jsx = external_react_default.a.createElement;












const Cookie = __webpack_require__("vmXh");

const ApiKeyForm = () => {
  const {
    0: res,
    1: setRes
  } = Object(external_react_["useState"])(false);
  const {
    0: loading,
    1: setLoading
  } = Object(external_react_["useState"])(true);
  const {
    0: notSubmitted,
    1: setNotSubmitted
  } = Object(external_react_["useState"])(true);

  async function handleSubmit(event, client) {
    event.preventDefault();
    setNotSubmitted(false);
    const form = event.target;
    const formData = new window.FormData(form);
    const key = formData.get("key");
    const secret = formData.get("secret"); // console.log(email, password);

    form.reset(); //check if api key is valid

    let apiRes = client.mutate({
      mutation: external_graphql_tag_default.a`
        mutation addApiKey($key: String!, $secret: String!) {
          addApiKey(key: $key, secret: $secret)
        }
      `,
      variables: {
        key,
        secret
      }
    });
    apiRes.then(apiRes => {
      console.log("<<RES>>");
      console.log(apiRes.data.addApiKey);
      console.log(typeof apiRes.data.addApiKey);
      let isTrue = apiRes.data.addApiKey == true;
      console.log(isTrue);
      setRes(isTrue);
      setLoading(false);
    }).catch(apiRes => {
      let isTrue = apiRes.data.addApiKey == true;
      console.log(isTrue);
      setRes(isTrue);
      setLoading(false);
    });
  }

  if (notSubmitted == true) {
    return AddApiForm_jsx(external_react_apollo_["ApolloConsumer"], null, client => AddApiForm_jsx("div", null, AddApiForm_jsx("div", null, AddApiForm_jsx(external_reactstrap_["Alert"], {
      color: "info"
    }, "Add a Bitmex api key to import your recent trades and to automatically populate your future trades into the platform."), AddApiForm_jsx(external_reactstrap_["Alert"], {
      color: "info"
    }, "Note: We keep the keys encrypted in out database, however, make sure to leave \"withdrawals allowed\" UNCHECKED anyways when choosing key settings.")), AddApiForm_jsx(FormWrapper["a" /* default */], null, AddApiForm_jsx(StyledForm, {
      onSubmit: event => handleSubmit(event, client)
    }, AddApiForm_jsx(InputWrapper, null, AddApiForm_jsx(Label["a" /* default */], null, "key"), AddApiForm_jsx(Input["a" /* default */], {
      placeholder: "",
      name: "key",
      type: "text",
      required: true
    })), AddApiForm_jsx(InputWrapper, null, AddApiForm_jsx(Label["a" /* default */], null, "secret"), AddApiForm_jsx(Input["a" /* default */], {
      placeholder: "",
      name: "secret",
      type: "text",
      required: true
    })), AddApiForm_jsx("div", {
      style: {
        display: "flex",
        width: "100%"
      }
    }, AddApiForm_jsx(SubmitButton, {
      type: "submit"
    }, "Submit"))))));
  }

  if (loading == true) {
    return AddApiForm_jsx("div", null, "loading");
  } else {
    if (res == false) {
      return AddApiForm_jsx("div", null, "error submitting, please reload page and try again");
    }

    if (res == true) {
      return AddApiForm_jsx(external_react_apollo_["ApolloConsumer"], null, client => AddApiForm_jsx(Populate, {
        client: client
      }));
    }
  }
};

const Populate = ({
  client
}) => {
  const {
    0: res,
    1: setRes
  } = Object(external_react_["useState"])(false);
  const {
    0: loading,
    1: setLoading
  } = Object(external_react_["useState"])(true);
  Object(external_react_["useEffect"])(() => {
    if (loading == true) {
      console.log("IN POPULATE");
      let myClient = client;
      let apiRes = myClient.mutate({
        mutation: external_graphql_tag_default.a`
          mutation {
            populate
          }
        `
      });
      apiRes.then(reso => {
        console.log("<<API RES>>");
        console.log(reso);
        console.log(reso.data.populate);
        setRes(reso.data.populate);
        setLoading(false);
      });
    }
  }, []);

  const resetApi = async client => {
    console.log("RESETTING");
    return new Promise(async resolve => {
      let key = "none";
      let secret = "none";
      let myRes = client.mutate({
        mutation: external_graphql_tag_default.a`
          mutation addApiKey($key: String!, $secret: String!) {
            addApiKey(key: $key, secret: $secret)
          }
        `,
        variables: {
          key,
          secret
        }
      });
      return await myRes;
    });
  };

  if (loading == true) {
    return AddApiForm_jsx("div", null, "loading");
  } else {
    if (res == false) {
      resetApi(client);
      return AddApiForm_jsx("div", null, "api key not valid - reload and try again");
    } else {
      location.reload();
    }
  }
};

/* harmony default export */ var AddApiForm = (ApiKeyForm);
const StyledForm = external_styled_components_default.a.form.withConfig({
  displayName: "AddApiForm__StyledForm",
  componentId: "z7z7vm-0"
})(["display:flex;flex-direction:column;align-items:flex-start;", ";"], props => props.loading && "filter: grayscale(0.5) blur(5px) opacity(0.6); pointer-events: none");
const SubmitButton = external_styled_components_default()(Button["a" /* default */]).withConfig({
  displayName: "AddApiForm__SubmitButton",
  componentId: "z7z7vm-1"
})(["align-self:flex-end;margin-right:0px;margin-left:auto;"]);
const InputWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "AddApiForm__InputWrapper",
  componentId: "z7z7vm-2"
})(["position:relative;margin-bottom:24px;width:100%;"]);
// CONCATENATED MODULE: ./components/Dashboard/shared/helpers.js
const getNewDat = async (oldDat, hashtags) => {
  let newTrades = [];
  let oldTrades = oldDat.fetchTradeHistory;

  for (let i = 0; i < oldTrades.length; i++) {
    let tradeHashtags = oldTrades[i].hashtags.split(",");
    let oldTrade = oldTrades[i];
    console.log(tradeHashtags);

    if (tradeHashtags[0] != "undefined") {
      for (let j = 0; j < tradeHashtags.length; j++) {
        for (let m = 0; m < hashtags.length; m++) {
          if (hashtags[m] == tradeHashtags[j]) {
            if (newTrades[0] == undefined) {
              newTrades.push(oldTrade);
            } else {
              newTrades.push(oldTrade);
            }
          }
        }
      }
    }

    if (i == oldTrades.length - 1) {
      console.log(newTrades, "FILTERED TRADES");
      return newTrades;
    }
  }
};
// CONCATENATED MODULE: ./components/Dashboard/Notes/NotesTest.js
var NotesTest_dec, NotesTest_class2, NotesTest_dec2, NotesTest_class3;


var NotesTest_jsx = external_react_default.a.createElement;














let NotesTest_class = (NotesTest_dec2 = Object(external_mobx_react_["inject"])(["store"]), NotesTest_dec2(NotesTest_class3 = Object(external_mobx_react_["observer"])(NotesTest_class3 = class extends external_react_["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      hashtags: [],
      initHashtags: [],
      showNotes: false
    };
    this.setShowNotes = this.setShowNotes.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.store.tempNotes[0] != undefined) {
      let isTemp = false;

      for (let i = 0; i < this.props.store.tempNotes.length; i++) {
        if (this.props.store.tempNotes[i].time == this.props.firstTrade.timestamp) {
          this.setState({
            value: this.props.store.tempNotes[i].note
          });
          isTemp = true;
        }

        if (i == this.props.store.tempNotes.length - 1 && isTemp == false) {
          this.setState({
            value: this.props.firstTrade.notes
          });
        }
      }
    } else {
      if (this.props.firstTrade.notes != "undefined") {
        this.setState({
          value: this.props.firstTrade.notes
        });
      }
    }

    let splitTags = this.props.firstTrade.hashtags.split(",");
    splitTags.map(tag => {
      this.state.initHashtags.push(tag);
    });
  }

  handleChange(client) {
    return event => {
      // event.preventDefault();
      this.setState({
        value: event.target.value
      }, this.handleSubmit(client));
      this.props.store.addTempNote(this.props.firstTrade.timestamp, event.target.value);
    };
  }

  removeHashtag(client, hashtag) {
    return async event => {
      if (event != undefined && event.preventDefault != undefined) {
        event.preventDefault();
      }

      let time = this.props.firstTrade.timestamp;
      client.mutate({
        mutation: external_graphql_tag_default.a`
            mutation removeHashtag($time: String!, $hashtag: String!) {
              removeHashtag(time: $time, hashtag: $hashtag)
            }
          `,
        variables: {
          time,
          hashtag
        },
        refetchQueries: [`fetchTradeHistory`]
      }).then(() => {
        this.props.store.changeHasTempTags();
      });
    };
  }

  handleSubmit(client) {
    return event => {
      if (event != undefined && event.preventDefault != undefined) {
        event.preventDefault();
      }

      console.log("HASHTAGS", this.state.hashtags);
      getNotes(this.state.value).then(async res => {
        let notes = res[0];
        let time = this.props.firstTrade.timestamp;
        let reso = client.mutate({
          mutation: external_graphql_tag_default.a`
            mutation addNotes($time: String!, $notes: String!) {
              addNotes(time: $time, notes: $notes)
            }
          `,
          variables: {
            time,
            notes
          }
        });
        return await reso;
      });
    };
  }

  setShowNotes() {
    if (this.state.showNotes == false) {
      this.setState({
        showNotes: true
      });
    } else {
      this.setState({
        showNotes: false
      });
    }
  }

  render() {
    return NotesTest_jsx(external_react_apollo_["ApolloConsumer"], null, client => NotesTest_jsx("div", null, NotesTest_jsx(NotesTest_FullRow, {
      onSubmit: this.handleSubmit(client)
    }, this.state.initHashtags.map(tag => {
      if (tag != "undefined") {
        return NotesTest_jsx(NotesTest_SingleHashtagDiv, null, NotesTest_jsx(NotesTest_SingleHashtagText, null, "#", tag), NotesTest_jsx(NotesTest_SingleHashtagDelete, {
          onClick: this.removeHashtag(client, tag)
        }, NotesTest_jsx(react_fontawesome_["FontAwesomeIcon"], {
          icon: free_solid_svg_icons_["faTimes"],
          size: "xs",
          style: {
            transition: "none"
          }
        })));
      }
    }), NotesTest_jsx(NotesTest_HashtagDiv, null, NotesTest_jsx(NotesTest_AddHashtag, {
      firstTrade: this.props.firstTrade,
      client: client
    })))));
  }

}) || NotesTest_class3) || NotesTest_class3);

 // const NotesInput = styled.textarea`
//   width: 100%;
//   padding: 12px 20px;
//   margin: 8px 0;
//   box-sizing: border-box;
//   background: #f8f8ff;
//   border: none;
// `;

let NotesTest_AddHashtag = (NotesTest_dec = Object(external_mobx_react_["inject"])(["store"]), NotesTest_dec(NotesTest_class2 = Object(external_mobx_react_["observer"])(NotesTest_class2 = class AddHashtag extends external_react_["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clicked = this.clicked.bind(this);
  }

  componentDidMount() {
    this.setState({
      client: this.props.client
    });
  }

  handleChange(event) {
    // event.preventDefault();
    console.log(event.target.value);
    this.setState({
      value: event.target.value
    });
  }

  async handleSubmit(event) {
    // return event => {
    event.preventDefault();
    console.log(this.state.value);
    getHashtags(this.state.value).then(async res => {
      console.log("CLICKED");
      let client = this.state.client;
      let hashtag = res;
      console.log(hashtag, "HASHTAG");
      let time = this.props.firstTrade.timestamp;
      let reso = client.mutate({
        mutation: external_graphql_tag_default.a`
            mutation addHashtag($time: String!, $hashtag: String!) {
              addHashtag(time: $time, hashtag: $hashtag)
            }
          `,
        variables: {
          time,
          hashtag
        },
        refetchQueries: [`fetchTradeHistory`]
      });
      return await reso;
    }).then(reso => {
      this.setState({
        value: ""
      });
      this.props.store.changeHasTempTags();
    }); // };
  }

  clicked() {
    this.state.clicked ? this.setState({
      clicked: false
    }) : this.setState({
      clicked: true
    });
  }

  render() {
    return NotesTest_jsx("div", null, NotesTest_jsx(NotesTest_Popup, {
      onClick: this.clicked,
      style: {
        display: "flex",
        flexDirection: "row"
      }
    }, NotesTest_jsx("div", null, "Add Hashtag"), NotesTest_jsx(react_fontawesome_["FontAwesomeIcon"], {
      icon: free_solid_svg_icons_["faPlus"],
      style: {
        transition: "none",
        margin: "auto 4px"
      }
    })), this.state.clicked ? NotesTest_jsx(NotesTest_PopupTop, null, NotesTest_jsx("form", {
      onSubmit: this.handleSubmit
    }, NotesTest_jsx("input", {
      type: "text",
      value: this.state.value,
      onChange: this.handleChange
    }), NotesTest_jsx(NotesTest_AddHashSubmit, {
      type: "submit",
      value: "Add"
    }))) : null);
  }

}) || NotesTest_class2) || NotesTest_class2);
const NotesTest_AddHashSubmit = external_styled_components_default.a.input.withConfig({
  displayName: "NotesTest__AddHashSubmit",
  componentId: "sc-6j67dn-0"
})(["background:none;border:none;color:white;font-weight:500;padding:2px;"]);
const NotesTest_Popup = external_styled_components_default.a.div.withConfig({
  displayName: "NotesTest__Popup",
  componentId: "sc-6j67dn-1"
})(["position:relative;display:inline-block;cursor:pointer;background:#000;padding:8px;border-radius:2px;"]);
const NotesTest_PopupTop = external_styled_components_default.a.div.withConfig({
  displayName: "NotesTest__PopupTop",
  componentId: "sc-6j67dn-2"
})(["position:absolute;background:#000;z-index:1;margin:5px;padding:2px;border-radius:2px;"]); // background: #6c757d;
// background: #b9bdc1;

const NotesTest_SingleHashtagDiv = external_styled_components_default.a.div.withConfig({
  displayName: "NotesTest__SingleHashtagDiv",
  componentId: "sc-6j67dn-3"
})(["background:#f8f8ff;margin:0 8px;color:black;padding:5px 7px;white-space:nowrap;display:flex;flex-direction:row;margin-left:0px;border-radius:2px;"]);
const NotesTest_ShowNotesDiv = external_styled_components_default.a.div.withConfig({
  displayName: "NotesTest__ShowNotesDiv",
  componentId: "sc-6j67dn-4"
})(["background:#fff;margin:20px 8px;color:#000;padding:10px;padding-top:8px;white-space:nowrap;display:flex;flex-direction:row;margin-left:0px;border-radius:2px;background:#f8f8ff;:hover{transition:none;cursor:pointer;}"]);
const NotesTest_ShowNotesInner = external_styled_components_default.a.div.withConfig({
  displayName: "NotesTest__ShowNotesInner",
  componentId: "sc-6j67dn-5"
})(["", " font-size:13px;transition:none;margin:auto;"], helpers["e" /* wideFont */]);
const NotesTest_SingleHashtagText = external_styled_components_default.a.div.withConfig({
  displayName: "NotesTest__SingleHashtagText",
  componentId: "sc-6j67dn-6"
})(["margin:auto;", ""], helpers["e" /* wideFont */]);
const NotesTest_SingleHashtagDelete = external_styled_components_default.a.div.withConfig({
  displayName: "NotesTest__SingleHashtagDelete",
  componentId: "sc-6j67dn-7"
})(["margin:auto;margin-left:6px;margin-bottom:4px;:hover{cursor:pointer;}"]);
const NotesTest_HashtagDiv = external_styled_components_default.a.div.withConfig({
  displayName: "NotesTest__HashtagDiv",
  componentId: "sc-6j67dn-8"
})(["margin:auto 0;text-align:center;vertical-align:middle;color:white;"]);
const NotesTest_FullRow = external_styled_components_default.a.form.withConfig({
  displayName: "NotesTest__FullRow",
  componentId: "sc-6j67dn-9"
})(["display:flex;flex-direction:row;"]);
const NotesTest_NotesSubmit = external_styled_components_default.a.input.withConfig({
  displayName: "NotesTest__NotesSubmit",
  componentId: "sc-6j67dn-10"
})(["margin:9px;padding:15px;background:#212528;border:none;color:white;"]);
const NotesTest_NotesInput = external_styled_components_default.a.textarea.withConfig({
  displayName: "NotesTest__NotesInput",
  componentId: "sc-6j67dn-11"
})(["width:100%;padding:12px 20px;margin:0px 0;box-sizing:border-box;background:#f8f8ff;border:none;"]);
// CONCATENATED MODULE: ./components/Dashboard/Tabs.js

var Tabs_jsx = external_react_default.a.createElement;







const Tabs = Object(external_mobx_react_["inject"])("store")(Object(external_mobx_react_lite_["observer"])(({
  store
}) => {
  const {
    0: activeTab,
    1: setActiveTab
  } = Object(external_react_["useState"])("notes");

  function setActive(tab) {
    console.log("CLICKED");

    if (tab !== activeTab) {
      setActiveTab(tab);
      console.log("setting tab", tab);

      if (tab == "notes") {
        store.isSingleNotes = false;
      } else {
        store.isSingleNotes = true;
      }
    }
  }

  function backwards() {
    console.log("BACK CLICKED");
    store.hasSingleTrade = false;
    store.isSingleNotes = false;
  }

  if (activeTab == "notes") {
    return Tabs_jsx(WrapTabs, null, Tabs_jsx(SingleTab, {
      isActive: false,
      onClick: () => backwards()
    }, Tabs_jsx(SingleTabInner, null, Tabs_jsx(react_fontawesome_["FontAwesomeIcon"], {
      icon: free_solid_svg_icons_["faCaretLeft"],
      style: {
        transition: "none",
        marginRight: "7px",
        fontSize: "12px",
        marginBottom: "2px",
        marginTop: "auto"
      }
    }), "All Trades")), Tabs_jsx(SingleTab, {
      isActive: true,
      onClick: () => setActive("notes")
    }, Tabs_jsx(SingleTabInner, null, "Notes")), Tabs_jsx(SingleTab, {
      isActive: false,
      onClick: () => setActive("exec_hist")
    }, Tabs_jsx(SingleTabInner, null, "Execution History")));
  } else {
    return Tabs_jsx(WrapTabs, null, Tabs_jsx(SingleTab, {
      isActive: false,
      onClick: () => backwards()
    }, Tabs_jsx(SingleTabInner, null, Tabs_jsx(react_fontawesome_["FontAwesomeIcon"], {
      icon: free_solid_svg_icons_["faCaretLeft"],
      style: {
        transition: "none",
        marginRight: "7px",
        fontSize: "12px",
        marginBottom: "2px",
        marginTop: "auto"
      }
    }), "All Trades")), Tabs_jsx(SingleTab, {
      isActive: false,
      onClick: () => setActive("notes")
    }, Tabs_jsx(SingleTabInner, null, "Notes")), Tabs_jsx(SingleTab, {
      isActive: true,
      onClick: () => setActive("exec_hist")
    }, Tabs_jsx(SingleTabInner, null, "Execution History")));
  }
}));
/* harmony default export */ var Dashboard_Tabs = (Tabs);
const SingleTabInner = external_styled_components_default.a.div.withConfig({
  displayName: "Tabs__SingleTabInner",
  componentId: "sc-1mz9w2n-0"
})(["margin:auto;"]);
const SingleTab = external_styled_components_default.a.div.withConfig({
  displayName: "Tabs__SingleTab",
  componentId: "sc-1mz9w2n-1"
})(["color:", ";background-color:", ";margin:auto 10px;border-radius:2px;padding:5px;:hover{cursor:pointer;}"], props => props.isActive ? "#fff" : "#000", props => props.isActive ? "#212527" : "#fff");
const WrapTabs = external_styled_components_default.a.div.withConfig({
  displayName: "Tabs__WrapTabs",
  componentId: "sc-1mz9w2n-2"
})(["display:flex;flex-direction:row;font-size:15px;"]);
const WholeGrid = external_styled_components_default.a.div.withConfig({
  displayName: "Tabs__WholeGrid",
  componentId: "sc-1mz9w2n-3"
})(["border:1px solid #f2f2f2;"]);
const TopBarParent = external_styled_components_default.a.div.withConfig({
  displayName: "Tabs__TopBarParent",
  componentId: "sc-1mz9w2n-4"
})(["display:flex;flex-direction:row;flex-wrap:wrap;margin-bottom:14px;"]);
const TopBarChildBig = external_styled_components_default.a.div.withConfig({
  displayName: "Tabs__TopBarChildBig",
  componentId: "sc-1mz9w2n-5"
})(["flex:1 1 45%;display:flex;flex-direction:row;"]);
const TopBarChildSmall = external_styled_components_default.a.div.withConfig({
  displayName: "Tabs__TopBarChildSmall",
  componentId: "sc-1mz9w2n-6"
})(["flex:1 1 10%;display:flex;flex-direction:row;"]);
const TopHashtagIndividual = external_styled_components_default.a.div.withConfig({
  displayName: "Tabs__TopHashtagIndividual",
  componentId: "sc-1mz9w2n-7"
})(["background:#f8f8ff;color:#000;padding:8px;margin:0 10px;border-radius:2px;", ":hover{cursor:pointer;}margin-left:0;"], helpers["e" /* wideFont */]);
const TopHashtagIndividualActive = external_styled_components_default.a.div.withConfig({
  displayName: "Tabs__TopHashtagIndividualActive",
  componentId: "sc-1mz9w2n-8"
})(["background:#212528;color:#fff;padding:8px;margin:0 10px;border-radius:2px;", " margin:0 auto;:hover{cursor:pointer;}margin-left:0;"], helpers["e" /* wideFont */]);
const TopHashtagIndividualActiveRight = external_styled_components_default.a.div.withConfig({
  displayName: "Tabs__TopHashtagIndividualActiveRight",
  componentId: "sc-1mz9w2n-9"
})(["background:#212528;color:#fff;padding:8px;margin:0 10px;border-radius:2px;", " margin:0 auto;:hover{cursor:pointer;}margin-right:0;"], helpers["e" /* wideFont */]);
const TopHashtagIndividualActivePnl = external_styled_components_default.a.div.withConfig({
  displayName: "Tabs__TopHashtagIndividualActivePnl",
  componentId: "sc-1mz9w2n-10"
})(["color:#fff;padding:0px;margin:0 10px;border-radius:2px;", ":hover{cursor:pointer;}margin:auto;"], helpers["e" /* wideFont */]);
const ChartWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Tabs__ChartWrapper",
  componentId: "sc-1mz9w2n-11"
})(["background:white;padding:5px;width:100%;padding:10px;@media (max-width:768px){margin:0 5vw;}"]);
const Wrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Tabs__Wrapper",
  componentId: "sc-1mz9w2n-12"
})(["display:flex;margin-top:5px;"]);
// CONCATENATED MODULE: ./components/Dashboard/Dashboard.js
var Dashboard_dec, Dashboard_class2;

var Dashboard_jsx = external_react_default.a.createElement;















let Dashboard_class = (Dashboard_dec = Object(external_mobx_react_["inject"])("store"), Dashboard_dec(Dashboard_class2 = Object(external_mobx_react_["observer"])(Dashboard_class2 = class extends external_react_default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      globalHash: [],
      globalHashActive: ["all"],
      data: null,
      filteredData: null,
      isSingle: false,
      isSingleNotes: false
    };
    this.getGlobalHashtags = this.getGlobalHashtags.bind(this);
    this.hashtagClicked = this.hashtagClicked.bind(this);
    this.hashtagClickedBack = this.hashtagClickedBack.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentWillMount() {
    this.setState({
      data: this.props.data
    });
    this.getGlobalHashtags(this.props.data);
  }

  componentDidMount() {
    this.singleTradeReaction = Object(external_mobx_["reaction"])(() => this.props.store.hasSingleTrade, (notifications, reaction) => {
      console.log("HAS SINGLE", this.props.store.hasSingleTrade);

      if (this.props.store.hasSingleTrade == false) {
        this.setState({
          isSingle: false
        });
        console.log("setting back");
      } else {
        this.setState({
          isSingle: true,
          singleTrade: this.props.store.singleTrade[0]
        });
        console.log(this.state, "STATEE");
        console.log("setting back");
      }
    });
    this.singleNotesReaction = Object(external_mobx_["reaction"])(() => this.props.store.isSingleNotes, (notifications, reaction) => {
      if (this.props.store.isSingleNotes == false) {
        this.setState({
          isSingleNotes: false
        });
      } else {
        this.setState({
          isSingleNotes: true
        });
      }
    });
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({
      width: window.innerWidth
    });
  }

  async getGlobalHashtags(data) {
    for (let i = 0; i < data.fetchTradeHistory.length; i++) {
      let thisTradeHash = data.fetchTradeHistory[i].hashtags.split(",");

      if (thisTradeHash != "undefined") {
        for (let j = 0; j < thisTradeHash.length; j++) {
          if (thisTradeHash[j] != "undefined") {
            let newGlobalHash = this.state.globalHash;
            newGlobalHash.push(thisTradeHash[j]);
            this.setState({
              globalHash: newGlobalHash
            });
          }
        }
      }
    }
  }

  async hashtagClickedBack(value) {
    if (value == "all") {
      console.log("DO NOTHING");
    } else {
      let newHashActive = [];
      let newHash = this.state.globalHash;

      for (let i = 0; i < this.state.globalHashActive.length; i++) {
        if (value !== this.state.globalHashActive[i]) {
          newHashActive.push(this.state.globalHashActive[i]);
        } else {
          newHash.push(this.state.globalHashActive[i]);
        }

        if (i == this.state.globalHashActive.length - 1) {
          if (newHashActive[0] == undefined) {
            let newHash2 = [];

            for (let j = 0; j < newHash.length; j++) {
              if (newHash[j] != "all") {
                newHash2.push(newHash[j]);
              }

              if (j == newHash.length - 1) {
                this.setState({
                  globalHash: newHash2,
                  globalHashActive: ["all"],
                  filteredData: null
                });
              }
            }
          } else {
            let newHash2 = [];

            for (let j = 0; j < newHash.length; j++) {
              if (newHash[j] != "all") {
                newHash2.push(newHash[j]);
              }

              if (j == newHash.length - 1) {
                getNewDat(this.state.data, newHashActive).then(res => {
                  this.setState({
                    globalHash: newHash2,
                    globalHashActive: newHashActive,
                    filteredData: res
                  });
                });
              }
            }
          }
        }
      }
    }
  }

  async hashtagClicked(value) {
    if (value == "all") {
      let newGlobalHash = this.state.globalHash;
      let newGlobalHash2 = [];

      for (let i = 0; i < this.state.globalHashActive.length; i++) {
        newGlobalHash.push(this.state.globalHashActive[i]);

        if (i == this.state.globalHashActive.length - 1) {
          for (let j = 0; j < newGlobalHash.length; j++) {
            if (newGlobalHash[j] != "all") {
              newGlobalHash2.push(newGlobalHash[j]);
            }

            if (j == newGlobalHash.length - 1) {
              this.setState({
                globalHash: newGlobalHash2,
                globalHashActive: ["all"],
                filteredData: null
              });
              return;
            }
          }
        }
      }
    }

    if (this.state.globalHashActive[0] == undefined) {
      let newArray = [];
      newArray.push(value);
      this.setState({
        globalHashActive: newArray
      });
      const index = this.state.globalHash.indexOf(value);

      if (index > -1) {
        let newGlobalHash = this.state.globalHash;
        newGlobalHash.splice(index, 1);
        this.setState({
          globalHash: newGlobalHash
        });
      }

      return;
    }

    for (let i = 0; i < this.state.globalHashActive.length; i++) {
      if (this.state.globalHashActive[i] == "all") {
        this.state.globalHashActive = [];
        const index = this.state.globalHash.indexOf(value);

        if (index > -1) {
          let newGlobalHash = this.state.globalHash;
          newGlobalHash.splice(index, 1);
          let torf = false;

          for (let j = 0; j < newGlobalHash.length; j++) {
            if ("all" == newGlobalHash[j]) {
              torf = true;
            }

            if (j == newGlobalHash.length - 1 && torf == false) {
              newGlobalHash.push("all");
            }
          }

          let newGlobalHashActive = this.state.globalHashActive;
          newGlobalHashActive.push(value);
          getNewDat(this.state.data, newGlobalHashActive).then(newDat => {
            this.setState({
              globalHashActive: newGlobalHashActive,
              globalHash: newGlobalHash,
              filteredData: newDat
            });
            return;
          });
        }
      }

      if (value == this.state.globalHashActive[i]) {
        return;
      }

      if (i == this.state.globalHashActive.length - 1) {
        const index = this.state.globalHash.indexOf(value);

        if (index > -1) {
          let newGlobalHash = this.state.globalHash;
          newGlobalHash.splice(index, 1); // newGlobalHash.push("all");

          let torf = false;

          for (let j = 0; j < newGlobalHash.length; j++) {
            if ("all" == newGlobalHash[j]) {
              torf = true;
            }

            if (j == newGlobalHash.length - 1 && torf == false) {
              newGlobalHash.push("all");
            }
          }

          let newGlobalHashActive = this.state.globalHashActive;
          newGlobalHashActive.push(value);
          getNewDat(this.state.data, newGlobalHashActive).then(newDat => {
            this.setState({
              globalHashActive: newGlobalHashActive,
              globalHash: newGlobalHash,
              filteredData: newDat
            });
            return;
          });
        }
      }
    }
  }

  render() {
    if (this.state.data != null) {
      if (this.state.isSingle == false) {
        console.log("IS SINGLE IS FALSE");
        return Dashboard_jsx(Dashboard_Wrapper, null, Dashboard_jsx(Dashboard_ChartWrapper, null, Dashboard_jsx(Dashboard_TopBarParent, null, Dashboard_jsx(Dashboard_TopBarChildBigLeft, null, this.state.globalHashActive.map(hash => {
          return Dashboard_jsx(Dashboard_TopHashtagIndividualActive, {
            onClick: () => this.hashtagClickedBack(hash)
          }, "#", hash);
        }), this.state.globalHash.map(hash => {
          return Dashboard_jsx(Dashboard_TopHashtagIndividual, {
            onClick: () => this.hashtagClicked(hash)
          }, "#", hash);
        })), Dashboard_jsx(Dashboard_TopBarChildSmall, null, Dashboard_jsx(Dashboard_TopHashtagIndividualActivePnl, null, Dashboard_jsx(Pnl, null))), Dashboard_jsx(Dashboard_TopBarChildBigRight, null, Dashboard_jsx(Dashboard_TopHashtagIndividualActiveRight, null, Dashboard_jsx(SymbolChooser, null)))), Dashboard_jsx(Dashboard_WholeGrid, null, this.state.isSingleNotes == false ? Dashboard_jsx(ContainDivHeader, null, Dashboard_jsx(NextToDivHeader, null, "Start"), Dashboard_jsx(NextToDivHeader, null, "End"), Dashboard_jsx(NextToDivHeader, null, "L/S"), Dashboard_jsx(NextToDivHeader, null, "Entry"), Dashboard_jsx(NextToDivHeader, null, "Exit"), Dashboard_jsx(NextToDivHeader, null, "Qty"), Dashboard_jsx(NextToDivHeader, null, "RPNL")) : null, Dashboard_jsx(Trades_Example, {
          data: this.state.data,
          filteredData: this.state.filteredData,
          initData: this.props.data
        }))));
      } else {
        console.log("IS SINGLE IS TRUE");
        return Dashboard_jsx(Dashboard_Wrapper, null, Dashboard_jsx(Dashboard_ChartWrapper, null, Dashboard_jsx(Dashboard_TopBarParent, null, Dashboard_jsx(Dashboard_TopBarChildBigLeft, null, Dashboard_jsx(Dashboard_Tabs, null)), Dashboard_jsx(Dashboard_TopBarChildSmall, null, Dashboard_jsx(Dashboard_TopHashtagIndividualActivePnl, null, Dashboard_jsx(Pnl, null))), Dashboard_jsx(Dashboard_TopBarChildBigRight, null, Dashboard_jsx(RightTabs, null, Dashboard_jsx(NotesTest_class, {
          firstTrade: this.state.singleTrade
        })))), Dashboard_jsx(Dashboard_WholeGrid, null, this.state.isSingleNotes == false ? Dashboard_jsx(ContainDivHeader, null, Dashboard_jsx(NextToDivHeader, null, "Start"), Dashboard_jsx(NextToDivHeader, null, "End"), Dashboard_jsx(NextToDivHeader, null, "L/S"), Dashboard_jsx(NextToDivHeader, null, "Entry"), Dashboard_jsx(NextToDivHeader, null, "Exit"), Dashboard_jsx(NextToDivHeader, null, "Qty"), Dashboard_jsx(NextToDivHeader, null, "RPNL")) : null, Dashboard_jsx(Trades_Example, {
          data: this.state.data,
          filteredData: this.state.filteredData,
          initData: this.props.data
        }))));
      }
    }
  }

}) || Dashboard_class2) || Dashboard_class2);


const Dashboard_SingleTabInner = external_styled_components_default.a.div.withConfig({
  displayName: "Dashboard__SingleTabInner",
  componentId: "ij5648-0"
})(["margin:auto;"]);
const Dashboard_SingleTab = external_styled_components_default.a.div.withConfig({
  displayName: "Dashboard__SingleTab",
  componentId: "ij5648-1"
})(["color:", ";background-color:", ";margin:auto 10px;border-radius:2px;padding:5px;:hover{cursor:pointer;}"], props => props.isActive ? "#fff" : "#000", props => props.isActive ? "#000" : "#fff");
const Dashboard_WrapTabs = external_styled_components_default.a.div.withConfig({
  displayName: "Dashboard__WrapTabs",
  componentId: "ij5648-2"
})(["display:flex;flex-direction:row;font-size:15px;"]);
const Dashboard_WholeGrid = external_styled_components_default.a.div.withConfig({
  displayName: "Dashboard__WholeGrid",
  componentId: "ij5648-3"
})([""]); // border: 1px solid #f2f2f2;

const Dashboard_TopBarParent = external_styled_components_default.a.div.withConfig({
  displayName: "Dashboard__TopBarParent",
  componentId: "ij5648-4"
})(["display:flex;flex-direction:row;flex-wrap:wrap;margin-bottom:14px;"]); // flex: 1 1 45%; /*grow | shrink | basis */

const Dashboard_TopBarChildBigLeft = external_styled_components_default.a.div.withConfig({
  displayName: "Dashboard__TopBarChildBigLeft",
  componentId: "ij5648-5"
})(["width:45%;display:flex;flex-direction:row;overflow:auto;"]);
const Dashboard_TopBarChildBigRight = external_styled_components_default.a.div.withConfig({
  displayName: "Dashboard__TopBarChildBigRight",
  componentId: "ij5648-6"
})(["width:45%;display:flex;flex-direction:row;overflow:auto;"]);
const Dashboard_TopBarChildSmall = external_styled_components_default.a.div.withConfig({
  displayName: "Dashboard__TopBarChildSmall",
  componentId: "ij5648-7"
})(["display:flex;flex-direction:row;width:10%;"]);
const Dashboard_TopHashtagIndividual = external_styled_components_default.a.div.withConfig({
  displayName: "Dashboard__TopHashtagIndividual",
  componentId: "ij5648-8"
})(["background:#f8f8ff;color:#000;padding:8px;margin:0 10px;border-radius:2px;", ":hover{cursor:pointer;}margin-left:0;white-space:nowrap;"], helpers["e" /* wideFont */]);
const Dashboard_TopHashtagIndividualActive = external_styled_components_default.a.div.withConfig({
  displayName: "Dashboard__TopHashtagIndividualActive",
  componentId: "ij5648-9"
})(["background:#212528;color:#fff;padding:8px;margin:0 10px;border-radius:2px;", ":hover{cursor:pointer;}margin-left:0;white-space:nowrap;"], helpers["e" /* wideFont */]);
const Dashboard_TopHashtagIndividualActiveRight = external_styled_components_default.a.div.withConfig({
  displayName: "Dashboard__TopHashtagIndividualActiveRight",
  componentId: "ij5648-10"
})(["background:#212528;color:#fff;padding:8px;margin:0 10px;border-radius:2px;", " margin:0 auto;:hover{cursor:pointer;}margin-right:0;"], helpers["e" /* wideFont */]);
const RightTabs = external_styled_components_default.a.div.withConfig({
  displayName: "Dashboard__RightTabs",
  componentId: "ij5648-11"
})(["color:#fff;margin:0 10px;border-radius:2px;", " margin:0 auto;:hover{cursor:pointer;}margin-right:0;"], helpers["e" /* wideFont */]);
const Dashboard_TopHashtagIndividualActivePnl = external_styled_components_default.a.div.withConfig({
  displayName: "Dashboard__TopHashtagIndividualActivePnl",
  componentId: "ij5648-12"
})(["color:#fff;padding:0px;margin:0 10px;border-radius:2px;", ":hover{cursor:pointer;}margin:auto;"], helpers["e" /* wideFont */]);
const Dashboard_ChartWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Dashboard__ChartWrapper",
  componentId: "ij5648-13"
})(["background:white;padding:5px;width:100%;padding:10px;@media (max-width:768px){margin:0 5vw;}"]);
const Dashboard_Wrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Dashboard__Wrapper",
  componentId: "ij5648-14"
})(["display:flex;margin-top:5px;"]);
// CONCATENATED MODULE: ./components/Menu/768px/Menu.js
var _768px_Menu_jsx = external_react_default.a.createElement;












const SymbolChooser768 = Object(external_mobx_react_["inject"])("store")(Object(external_mobx_react_lite_["observer"])(({
  store
}) => {
  const {
    0: dropdown,
    1: setDropdown
  } = Object(external_react_["useState"])(false);

  const showDropdown = () => {
    if (dropdown == false) {
      setDropdown(true);
    } else {
      setDropdown(false);
    }
  };

  const clicked = value => {
    store.setSymbol(value);
    store.changeHasTempTags();
    setDropdown(false);
  };

  return _768px_Menu_jsx(LapperChooser, {
    onClick: () => {
      showDropdown();
    }
  }, _768px_Menu_jsx(Menu_SetSymbol, {
    style: {
      marginLeft: "2px"
    }
  }, _768px_Menu_jsx(InnerSymbolChooser, null, _768px_Menu_jsx("div", null, store.symbol), dropdown == true ? _768px_Menu_jsx(react_fontawesome_["FontAwesomeIcon"], {
    icon: free_solid_svg_icons_["faCaretUp"],
    style: {
      transition: "none",
      marginRight: "3px",
      marginLeft: "3px",
      marginTop: "2px"
    }
  }) : _768px_Menu_jsx(react_fontawesome_["FontAwesomeIcon"], {
    icon: free_solid_svg_icons_["faCaretDown"],
    style: {
      transition: "none",
      marginRight: "3px",
      marginLeft: "3px",
      marginTop: "2px"
    }
  }))), dropdown == true ? _768px_Menu_jsx(Menu_DropdownListContainer, null, _768px_Menu_jsx(Menu_DropdownListItem, {
    onClick: () => clicked("XBTUSD")
  }, "XBTUSD"), _768px_Menu_jsx(Menu_DropdownListItem, {
    onClick: () => clicked("XBTU20")
  }, "XBTU20"), _768px_Menu_jsx(Menu_DropdownListItem, {
    onClick: () => clicked("XBTM20")
  }, "XBTM20")) : null);
}));
const Pnl768 = Object(external_mobx_react_["inject"])("store")(Object(external_mobx_react_lite_["observer"])(({
  store
}) => {
  if (store.pnl >= 0) {
    return _768px_Menu_jsx(Menu_Lapper2, {
      style: {
        marginRight: "2px"
      }
    }, _768px_Menu_jsx(Menu_InnerLapper, {
      style: {
        padding: "4px"
      }
    }, store.pnl.toFixed(4) + "xbt"));
  } else {
    return _768px_Menu_jsx(Menu_Lapper3, {
      style: {
        marginRight: "2px"
      }
    }, _768px_Menu_jsx(Menu_InnerLapper, {
      style: {
        padding: "4px"
      }
    }, store.pnl.toFixed(4) + "xbt"));
  }
}));
const Menu_Sidebar = Object(external_mobx_react_["inject"])("store")(Object(external_mobx_react_lite_["observer"])(({
  store
}) => {
  const {
    0: dropdown,
    1: setDropdown
  } = Object(external_react_["useState"])(false);

  const clicked = value => {
    store.setSymbol(value);
    store.changeHasTempTags();
    setDropdown(false);
  };

  const showDropdown = () => {
    if (dropdown == false) {
      setDropdown(true);
    } else {
      setDropdown(false);
    }
  };

  return _768px_Menu_jsx(external_styled_components_["ThemeProvider"], {
    theme: Object(theme["a" /* default */])(false)
  }, _768px_Menu_jsx(Menu_LapperContainer, null, _768px_Menu_jsx(Menu_Lapper4, {
    onClick: () => {
      showDropdown();
    }
  }, _768px_Menu_jsx(Menu_SetSymbol, null, store.symbol, dropdown == true ? _768px_Menu_jsx(react_fontawesome_["FontAwesomeIcon"], {
    icon: free_solid_svg_icons_["faCaretUp"],
    style: {
      transition: "none",
      marginRight: "4px",
      marginLeft: "3px"
    }
  }) : _768px_Menu_jsx(react_fontawesome_["FontAwesomeIcon"], {
    icon: free_solid_svg_icons_["faCaretDown"],
    style: {
      transition: "none",
      marginRight: "4px",
      marginLeft: "3px"
    }
  })), dropdown == true ? _768px_Menu_jsx(Menu_DropdownListContainer, null, _768px_Menu_jsx(Menu_DropdownListItem, {
    onClick: () => clicked("XBTUSD")
  }, "XBTUSD"), _768px_Menu_jsx(Menu_DropdownListItem, {
    onClick: () => clicked("XBTU20")
  }, "XBTU20"), _768px_Menu_jsx(Menu_DropdownListItem, {
    onClick: () => clicked("XBTM20")
  }, "XBTM20")) : null), _768px_Menu_jsx(Menu_Lapper, null, _768px_Menu_jsx(CategoryList, null)), store.pnl >= 0 ? _768px_Menu_jsx(Menu_Lapper2, null, _768px_Menu_jsx(Menu_InnerLapper, null, store.pnl.toFixed(4) + "xbt")) : _768px_Menu_jsx(Menu_Lapper3, null, _768px_Menu_jsx(Menu_InnerLapper, null, store.pnl.toFixed(4) + "xbt"))));
}));
/* harmony default export */ var _768px_Menu = (Menu_Sidebar);
const Menu_LapperContainer = external_styled_components_default.a.div.withConfig({
  displayName: "Menu__LapperContainer",
  componentId: "moll33-0"
})(["display:flex;flex-direction:column;margin-left:24px;"]);
const InnerSymbolChooser = external_styled_components_default.a.div.withConfig({
  displayName: "Menu__InnerSymbolChooser",
  componentId: "moll33-1"
})(["margin:auto;width:65px;display:flex;flex-direction:row;padding-top:4px;"]);
const Menu_Lapper = external_styled_components_default.a.aside.withConfig({
  displayName: "Menu__Lapper",
  componentId: "moll33-2"
})(["display:flex;flex-direction:column;flex-basis:240px;border-radius:2px;background-color:", ";background-color:#212529;margin-bottom:10px;@media (max-width:768px){display:none;}"], props => props.theme.foreground);
const Menu_InnerLapper = external_styled_components_default.a.div.withConfig({
  displayName: "Menu__InnerLapper",
  componentId: "moll33-3"
})(["color:white;text-align:center;margin:auto;"]);
const Menu_Lapper2 = external_styled_components_default.a.aside.withConfig({
  displayName: "Menu__Lapper2",
  componentId: "moll33-4"
})(["border-radius:2px;background-color:", ";background-color:green;margin-left:0;margin-right:auto;margin-top:0;margin-bottom:0;width:100%;"], props => props.theme.foreground);
const LapperChooser = external_styled_components_default.a.aside.withConfig({
  displayName: "Menu__LapperChooser",
  componentId: "moll33-5"
})(["border-radius:2px;background-color:", ";margin-left:0;margin-right:auto;margin-top:0;margin-bottom:0;width:100%;"], props => props.theme.foreground);
const Menu_Lapper3 = external_styled_components_default.a.aside.withConfig({
  displayName: "Menu__Lapper3",
  componentId: "moll33-6"
})(["border-radius:2px;background-color:", ";background-color:red;margin-left:0;margin-right:auto;width:100%;"], props => props.theme.foreground);
const Menu_Lapper4 = external_styled_components_default.a.aside.withConfig({
  displayName: "Menu__Lapper4",
  componentId: "moll33-7"
})(["display:flex;flex-direction:column;border-radius:2px;background-color:", ";background-color:#212529;margin-bottom:10px;@media (max-width:768px){display:none;}"], props => props.theme.foreground);
const Menu_SetSymbol = external_styled_components_default.a.div.withConfig({
  displayName: "Menu__SetSymbol",
  componentId: "moll33-8"
})(["font-weight:500;font-size:14px;", " color:#fff;background-color:#212527;height:100%;:hover{cursor:pointer;}"], helpers["e" /* wideFont */]);
const Menu_DropdownContainer = external_styled_components_default.a.div.withConfig({
  displayName: "Menu__DropdownContainer",
  componentId: "moll33-9"
})(["height:100px;"]);
const Menu_DropdownListContainer = external_styled_components_default.a.ul.withConfig({
  displayName: "Menu__DropdownListContainer",
  componentId: "moll33-10"
})(["list-style-type:none;position:absolute;margin-left:-8px;border-radius:2px;background-color:#212527;"]);
const Menu_DropdownListItem = external_styled_components_default.a.li.withConfig({
  displayName: "Menu__DropdownListItem",
  componentId: "moll33-11"
})(["text-align:center;font-weight:500;font-size:14px;color:#fff;background-color:#212529;padding:2px 15px;margin:4px 0;", ":hover{cursor:pointer;color:#000;background-color:#fff;}"], helpers["e" /* wideFont */]);
// CONCATENATED MODULE: ./components/Dashboard/768px/DashboardTest.js
var DashboardTest_dec, DashboardTest_class2;

var DashboardTest_jsx = external_react_default.a.createElement;
















let DashboardTest_class = (DashboardTest_dec = Object(external_mobx_react_["inject"])("store"), DashboardTest_dec(DashboardTest_class2 = Object(external_mobx_react_["observer"])(DashboardTest_class2 = class extends external_react_default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      globalHash: [],
      globalHashActive: ["all"],
      data: null,
      filteredData: null,
      isSingle: false,
      isSingleNotes: false
    };
    this.getGlobalHashtags = this.getGlobalHashtags.bind(this);
    this.hashtagClicked = this.hashtagClicked.bind(this);
    this.hashtagClickedBack = this.hashtagClickedBack.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentWillMount() {
    this.setState({
      data: this.props.data
    });
    this.getGlobalHashtags(this.props.data);
  }

  componentDidMount() {
    this.singleTradeReaction = Object(external_mobx_["reaction"])(() => this.props.store.hasSingleTrade, (notifications, reaction) => {
      console.log("HAS SINGLE", this.props.store.hasSingleTrade);

      if (this.props.store.hasSingleTrade == false) {
        this.setState({
          isSingle: false
        });
        console.log("setting back");
      } else {
        this.setState({
          isSingle: true,
          singleTrade: this.props.store.singleTrade[0]
        });
        console.log(this.state, "STATEE");
        console.log("setting back");
      }
    });
    this.singleNotesReaction = Object(external_mobx_["reaction"])(() => this.props.store.isSingleNotes, (notifications, reaction) => {
      if (this.props.store.isSingleNotes == false) {
        this.setState({
          isSingleNotes: false
        });
      } else {
        this.setState({
          isSingleNotes: true
        });
      }
    });
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({
      width: window.innerWidth
    });
  }

  async getGlobalHashtags(data) {
    for (let i = 0; i < data.fetchTradeHistory.length; i++) {
      let thisTradeHash = data.fetchTradeHistory[i].hashtags.split(",");

      if (thisTradeHash != "undefined") {
        for (let j = 0; j < thisTradeHash.length; j++) {
          if (thisTradeHash[j] != "undefined") {
            let newGlobalHash = this.state.globalHash;
            newGlobalHash.push(thisTradeHash[j]);
            this.setState({
              globalHash: newGlobalHash
            });
          }
        }
      }
    }
  }

  async hashtagClickedBack(value) {
    if (value == "all") {
      console.log("DO NOTHING");
    } else {
      let newHashActive = [];
      let newHash = this.state.globalHash;

      for (let i = 0; i < this.state.globalHashActive.length; i++) {
        if (value !== this.state.globalHashActive[i]) {
          newHashActive.push(this.state.globalHashActive[i]);
        } else {
          newHash.push(this.state.globalHashActive[i]);
        }

        if (i == this.state.globalHashActive.length - 1) {
          if (newHashActive[0] == undefined) {
            let newHash2 = [];

            for (let j = 0; j < newHash.length; j++) {
              if (newHash[j] != "all") {
                newHash2.push(newHash[j]);
              }

              if (j == newHash.length - 1) {
                this.setState({
                  globalHash: newHash2,
                  globalHashActive: ["all"],
                  filteredData: null
                });
              }
            }
          } else {
            let newHash2 = [];

            for (let j = 0; j < newHash.length; j++) {
              if (newHash[j] != "all") {
                newHash2.push(newHash[j]);
              }

              if (j == newHash.length - 1) {
                getNewDat(this.state.data, newHashActive).then(res => {
                  this.setState({
                    globalHash: newHash2,
                    globalHashActive: newHashActive,
                    filteredData: res
                  });
                });
              }
            }
          }
        }
      }
    }
  }

  async hashtagClicked(value) {
    if (value == "all") {
      let newGlobalHash = this.state.globalHash;
      let newGlobalHash2 = [];

      for (let i = 0; i < this.state.globalHashActive.length; i++) {
        newGlobalHash.push(this.state.globalHashActive[i]);

        if (i == this.state.globalHashActive.length - 1) {
          for (let j = 0; j < newGlobalHash.length; j++) {
            if (newGlobalHash[j] != "all") {
              newGlobalHash2.push(newGlobalHash[j]);
            }

            if (j == newGlobalHash.length - 1) {
              this.setState({
                globalHash: newGlobalHash2,
                globalHashActive: ["all"],
                filteredData: null
              });
              return;
            }
          }
        }
      }
    }

    if (this.state.globalHashActive[0] == undefined) {
      let newArray = [];
      newArray.push(value);
      this.setState({
        globalHashActive: newArray
      });
      const index = this.state.globalHash.indexOf(value);

      if (index > -1) {
        let newGlobalHash = this.state.globalHash;
        newGlobalHash.splice(index, 1);
        this.setState({
          globalHash: newGlobalHash
        });
      }

      return;
    }

    for (let i = 0; i < this.state.globalHashActive.length; i++) {
      if (this.state.globalHashActive[i] == "all") {
        this.state.globalHashActive = [];
        const index = this.state.globalHash.indexOf(value);

        if (index > -1) {
          let newGlobalHash = this.state.globalHash;
          newGlobalHash.splice(index, 1);
          let torf = false;

          for (let j = 0; j < newGlobalHash.length; j++) {
            if ("all" == newGlobalHash[j]) {
              torf = true;
            }

            if (j == newGlobalHash.length - 1 && torf == false) {
              newGlobalHash.push("all");
            }
          }

          let newGlobalHashActive = this.state.globalHashActive;
          newGlobalHashActive.push(value);
          getNewDat(this.state.data, newGlobalHashActive).then(newDat => {
            this.setState({
              globalHashActive: newGlobalHashActive,
              globalHash: newGlobalHash,
              filteredData: newDat
            });
            return;
          });
        }
      }

      if (value == this.state.globalHashActive[i]) {
        return;
      }

      if (i == this.state.globalHashActive.length - 1) {
        const index = this.state.globalHash.indexOf(value);

        if (index > -1) {
          let newGlobalHash = this.state.globalHash;
          newGlobalHash.splice(index, 1); // newGlobalHash.push("all");

          let torf = false;

          for (let j = 0; j < newGlobalHash.length; j++) {
            if ("all" == newGlobalHash[j]) {
              torf = true;
            }

            if (j == newGlobalHash.length - 1 && torf == false) {
              newGlobalHash.push("all");
            }
          }

          let newGlobalHashActive = this.state.globalHashActive;
          newGlobalHashActive.push(value);
          getNewDat(this.state.data, newGlobalHashActive).then(newDat => {
            this.setState({
              globalHashActive: newGlobalHashActive,
              globalHash: newGlobalHash,
              filteredData: newDat
            });
            return;
          });
        }
      }
    }
  }

  render() {
    if (this.state.data != null) {
      if (this.state.isSingle == false) {
        console.log("IS SINGLE IS FALSE");
        return DashboardTest_jsx(DashboardTest_Wrapper, null, DashboardTest_jsx(DashboardTest_ChartWrapper, null, DashboardTest_jsx(DashboardTest_TopBarParent, null, DashboardTest_jsx(TopBarTop, null, DashboardTest_jsx(TopBarTopLeft, null, DashboardTest_jsx(Pnl768, null)), DashboardTest_jsx(TopBarTopRight, null, DashboardTest_jsx(SymbolChooser768, null))), DashboardTest_jsx(TopBarBottom, null, this.state.globalHashActive.map(hash => {
          return DashboardTest_jsx(DashboardTest_TopHashtagIndividualActive, {
            onClick: () => this.hashtagClickedBack(hash)
          }, "#", hash);
        }), this.state.globalHash.map(hash => {
          return DashboardTest_jsx(DashboardTest_TopHashtagIndividual, {
            onClick: () => this.hashtagClicked(hash)
          }, "#", hash);
        }))), DashboardTest_jsx(DashboardTest_WholeGrid, null, this.state.isSingleNotes == false ? DashboardTest_jsx(ContainDivHeader, null, DashboardTest_jsx(NextToDivHeader, null, "Start"), DashboardTest_jsx(NextToDivHeader, null, "End"), DashboardTest_jsx(NextToDivHeader, null, "L/S"), DashboardTest_jsx(NextToDivHeader, null, "Entry"), DashboardTest_jsx(NextToDivHeader, null, "Exit"), DashboardTest_jsx(NextToDivHeader, null, "Qty"), DashboardTest_jsx(NextToDivHeader, null, "RPNL")) : null, DashboardTest_jsx(Trades_Example, {
          data: this.state.data,
          filteredData: this.state.filteredData,
          initData: this.props.data
        }))));
      } else {
        console.log("IS SINGLE IS TRUE");
        return DashboardTest_jsx(DashboardTest_Wrapper, null, DashboardTest_jsx(DashboardTest_ChartWrapper, null, DashboardTest_jsx(DashboardTest_TopBarParent, null, DashboardTest_jsx(TopBarChildBigLeft, null, DashboardTest_jsx(Dashboard_Tabs, null)), DashboardTest_jsx(DashboardTest_TopBarChildSmall, null, DashboardTest_jsx(DashboardTest_TopHashtagIndividualActivePnl, null, DashboardTest_jsx(Pnl, null))), DashboardTest_jsx(TopBarChildBigRight, null, DashboardTest_jsx(DashboardTest_RightTabs, null, DashboardTest_jsx(NotesTest_class, {
          firstTrade: this.state.singleTrade
        })))), DashboardTest_jsx(DashboardTest_WholeGrid, null, this.state.isSingleNotes == false ? DashboardTest_jsx(ContainDivHeader, null, DashboardTest_jsx(NextToDivHeader, null, "Start"), DashboardTest_jsx(NextToDivHeader, null, "End"), DashboardTest_jsx(NextToDivHeader, null, "L/S"), DashboardTest_jsx(NextToDivHeader, null, "Entry"), DashboardTest_jsx(NextToDivHeader, null, "Exit"), DashboardTest_jsx(NextToDivHeader, null, "Qty"), DashboardTest_jsx(NextToDivHeader, null, "RPNL")) : null, DashboardTest_jsx(Trades_Example, {
          data: this.state.data,
          filteredData: this.state.filteredData,
          initData: this.props.data
        }))));
      }
    }
  }

}) || DashboardTest_class2) || DashboardTest_class2);


const DashboardTest_SingleTabInner = external_styled_components_default.a.div.withConfig({
  displayName: "DashboardTest__SingleTabInner",
  componentId: "sc-1dz292n-0"
})(["margin:auto;"]);
const DashboardTest_SingleTab = external_styled_components_default.a.div.withConfig({
  displayName: "DashboardTest__SingleTab",
  componentId: "sc-1dz292n-1"
})(["color:", ";background-color:", ";margin:auto 10px;border-radius:2px;padding:5px;:hover{cursor:pointer;}"], props => props.isActive ? "#fff" : "#000", props => props.isActive ? "#000" : "#fff");
const DashboardTest_WrapTabs = external_styled_components_default.a.div.withConfig({
  displayName: "DashboardTest__WrapTabs",
  componentId: "sc-1dz292n-2"
})(["display:flex;flex-direction:row;font-size:15px;"]);
const DashboardTest_WholeGrid = external_styled_components_default.a.div.withConfig({
  displayName: "DashboardTest__WholeGrid",
  componentId: "sc-1dz292n-3"
})([""]); // border: 1px solid #f2f2f2;

const DashboardTest_TopBarParent = external_styled_components_default.a.div.withConfig({
  displayName: "DashboardTest__TopBarParent",
  componentId: "sc-1dz292n-4"
})(["display:flex;flex-direction:column;flex-wrap:wrap;margin-bottom:14px;"]);
const TopBarTop = external_styled_components_default.a.div.withConfig({
  displayName: "DashboardTest__TopBarTop",
  componentId: "sc-1dz292n-5"
})(["width:100%;display:flex;flex-direction:row;overflow:auto;margin-bottom:5px;"]);
const TopBarBottom = external_styled_components_default.a.div.withConfig({
  displayName: "DashboardTest__TopBarBottom",
  componentId: "sc-1dz292n-6"
})(["width:100%;display:flex;flex-direction:row;overflow:auto;"]); // flex: 1 1 45%; /*grow | shrink | basis */

const TopBarTopRight = external_styled_components_default.a.div.withConfig({
  displayName: "DashboardTest__TopBarTopRight",
  componentId: "sc-1dz292n-7"
})(["width:50%;display:flex;flex-direction:row;overflow:auto;"]);
const TopBarTopLeft = external_styled_components_default.a.div.withConfig({
  displayName: "DashboardTest__TopBarTopLeft",
  componentId: "sc-1dz292n-8"
})(["width:50%;display:flex;flex-direction:row;overflow:auto;", ""], helpers["e" /* wideFont */]);
const DashboardTest_TopBarChildSmall = external_styled_components_default.a.div.withConfig({
  displayName: "DashboardTest__TopBarChildSmall",
  componentId: "sc-1dz292n-9"
})(["display:flex;flex-direction:row;width:10%;"]);
const DashboardTest_TopHashtagIndividual = external_styled_components_default.a.div.withConfig({
  displayName: "DashboardTest__TopHashtagIndividual",
  componentId: "sc-1dz292n-10"
})(["background:#f8f8ff;color:#000;padding:8px;margin:0 10px;border-radius:2px;", ":hover{cursor:pointer;}margin-left:0;white-space:nowrap;"], helpers["e" /* wideFont */]);
const DashboardTest_TopHashtagIndividualActive = external_styled_components_default.a.div.withConfig({
  displayName: "DashboardTest__TopHashtagIndividualActive",
  componentId: "sc-1dz292n-11"
})(["background:#212528;color:#fff;padding:8px;margin:0 10px;border-radius:2px;", ":hover{cursor:pointer;}margin-left:0;white-space:nowrap;"], helpers["e" /* wideFont */]);
const DashboardTest_TopHashtagIndividualActiveRight = external_styled_components_default.a.div.withConfig({
  displayName: "DashboardTest__TopHashtagIndividualActiveRight",
  componentId: "sc-1dz292n-12"
})(["background:#212528;color:#fff;padding:8px;margin:0 10px;border-radius:2px;", " margin:0 auto;:hover{cursor:pointer;}margin-right:0;"], helpers["e" /* wideFont */]);
const DashboardTest_RightTabs = external_styled_components_default.a.div.withConfig({
  displayName: "DashboardTest__RightTabs",
  componentId: "sc-1dz292n-13"
})(["color:#fff;margin:0 10px;border-radius:2px;", " margin:0 auto;:hover{cursor:pointer;}margin-right:0;"], helpers["e" /* wideFont */]);
const DashboardTest_TopHashtagIndividualActivePnl = external_styled_components_default.a.div.withConfig({
  displayName: "DashboardTest__TopHashtagIndividualActivePnl",
  componentId: "sc-1dz292n-14"
})(["color:#fff;padding:0px;margin:0 10px;border-radius:2px;", ":hover{cursor:pointer;}margin:auto;"], helpers["e" /* wideFont */]);
const DashboardTest_ChartWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "DashboardTest__ChartWrapper",
  componentId: "sc-1dz292n-15"
})(["background:white;padding:5px;width:100%;padding:10px;@media (max-width:768px){}"]);
const DashboardTest_Wrapper = external_styled_components_default.a.div.withConfig({
  displayName: "DashboardTest__Wrapper",
  componentId: "sc-1dz292n-16"
})(["display:flex;margin-top:5px;"]);
// CONCATENATED MODULE: ./components/Dashboard/FetchQuery.js
var FetchQuery_dec, FetchQuery_class, _temp, FetchQuery_dec2, FetchQuery_class3;


var FetchQuery_jsx = external_react_default.a.createElement;













let FetchQuery_FetchQuery = (FetchQuery_dec = Object(external_mobx_react_["inject"])(["store"]), FetchQuery_dec(FetchQuery_class = Object(external_mobx_react_["observer"])(FetchQuery_class = (_temp = class FetchQuery extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    this.clicked = () => {
      store.isAuth = !store.isAuth;
      console.log(store.isAuth);
    };

    this.state = {
      startDate: "",
      endDate: "",
      date: ""
    };
  }

  componentDidMount() {
    console.log("loaded fetch query component");
  }

  render() {
    let fetchTradeHistoryVariables = {
      start: this.props.store.startDate,
      end: this.props.store.endDate,
      symbol: this.props.store.symbol
    };
    return FetchQuery_jsx("div", null, FetchQuery_jsx(FetchQuery_Comp, {
      query: fetchTradeHistoryQuery,
      vars: fetchTradeHistoryVariables
    }));
  }

}, _temp)) || FetchQuery_class) || FetchQuery_class);
let FetchQuery_Comp = (FetchQuery_dec2 = Object(external_mobx_react_["inject"])(["store"]), FetchQuery_dec2(FetchQuery_class3 = Object(external_mobx_react_["observer"])(FetchQuery_class3 = class Comp extends external_react_default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.tempTagsReaction = Object(external_mobx_["reaction"])(() => this.props.store.hasTempTags, (notifications, reaction) => {
      this.forceUpdate(console.log("FORCE UPDATE WAS CALLED"));
    });
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    this.tempTagsReaction();
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    console.log(window.innerWidth);
    this.setState({
      width: window.innerWidth
    });
  }

  render() {
    console.log("rerendered");
    return FetchQuery_jsx(external_react_apollo_["Query"], {
      query: this.props.query,
      variables: this.props.vars
    }, ({
      loading,
      error,
      data
    }) => {
      if (error) return FetchQuery_jsx("div", null, "no data loaded");
      if (loading) return FetchQuery_jsx("div", null, "Loading");

      if (data.checkApiKey == false) {
        return FetchQuery_jsx(AddApiForm, null);
      } else if (data.checkApiKey == true) {
        this.props.store.resetHasTempTags();
        this.props.store.clearTempNotes();
        this.props.store.clearTempTags();
        this.props.store.resetPnl();
        this.props.store.hasSingleTrade = false;

        if (this.state.width > 768) {
          return FetchQuery_jsx(Dashboard_class, {
            data: data
          });
        } else {
          return FetchQuery_jsx(DashboardTest_class, {
            data: data
          });
        }
      }
    });
  }

}) || FetchQuery_class3) || FetchQuery_class3);
/* harmony default export */ var Dashboard_FetchQuery = (FetchQuery_FetchQuery);
const fetchTradeHistoryQuery = external_graphql_tag_default.a`
  query fetchTradeHistory($start: String!, $end: String!, $symbol: String!) {
    checkApiKey

    fetchTradeHistory(start: $start, end: $end, symbol: $symbol) {
      id
      timestamp
      side
      price
      orderQty
      leavesQty
      currentQty
      avgEntryPrice
      execGrossPnl
      realizedPnl
      commission
      execType
      orderType
      trdStart
      trdEnd
      notes
      hashtags
    }

    fetchOneMinuteCandleHistory(start: $start, end: $end) {
      id
      timestamp
      symbol
      timeframe
      open
      high
      low
      close
      trades
      volume
      vwap
      lastSize
      homeNotional
      foreignNotional
    }

    fetchOneHourCandleHistory(start: $start, end: $end) {
      id
      timestamp
      symbol
      timeframe
      open
      high
      low
      close
      trades
      volume
      vwap
      lastSize
      homeNotional
      foreignNotional
    }

    fetchOneDayCandleHistory(start: $start, end: $end) {
      id
      timestamp
      symbol
      timeframe
      open
      high
      low
      close
      trades
      volume
      vwap
      lastSize
      homeNotional
      foreignNotional
    }

    fetchFiveMinuteCandleHistory(start: $start, end: $end) {
      id
      timestamp
      symbol
      timeframe
      open
      high
      low
      close
      trades
      volume
      vwap
      lastSize
      homeNotional
      foreignNotional
    }
  }
`;
// EXTERNAL MODULE: ./stores/store.js
var stores_store = __webpack_require__("F0YZ");

// CONCATENATED MODULE: ./components/Dashboard/FetchQueryContainer.js
var FetchQueryContainer_dec, FetchQueryContainer_class;

var FetchQueryContainer_jsx = external_react_default.a.createElement;









const FetchQueryContainer_Cookie = __webpack_require__("vmXh");

let FetchQueryContainer_DashInitialTerms = (FetchQueryContainer_dec = Object(external_mobx_react_["inject"])("store"), FetchQueryContainer_dec(FetchQueryContainer_class = Object(external_mobx_react_["observer"])(FetchQueryContainer_class = class DashInitialTerms extends external_react_default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: null
    };
  }

  componentDidMount() {
    let cook = FetchQueryContainer_Cookie.get("isAuth") == "true";

    if (!cook) {
      router_default.a.push("/");
    } else if (!!cook) {
      this.setState({
        isAuth: cook
      });
    }

    if (this.props.store.startDate == null) {
      let dates = Object(Functions["c" /* getStateDate */])("This Week");
      this.props.store.startDate = dates.start;
      this.props.store.endDate = dates.end;
      this.setState({
        start: true
      });
    }
  }

  render() {
    if (this.state.start !== null) {
      return FetchQueryContainer_jsx(external_styled_components_["ThemeProvider"], {
        theme: Object(theme["a" /* default */])(false)
      }, FetchQueryContainer_jsx("div", {
        style: {
          width: "100%"
        }
      }, FetchQueryContainer_jsx(Dashboard_FetchQuery, null)));
    } else {
      return FetchQueryContainer_jsx("div", null, "loading");
    }
  }

}) || FetchQueryContainer_class) || FetchQueryContainer_class);

// EXTERNAL MODULE: ./components/App.js
var App = __webpack_require__("3aVm");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./components/Header/Logo.js
var Logo = __webpack_require__("tdIn");

// EXTERNAL MODULE: ./components/Header/header.scss
var header = __webpack_require__("V2I+");

// CONCATENATED MODULE: ./components/Header/DashboardHeader.js

var DashboardHeader_jsx = external_react_default.a.createElement;













const DashboardHeader_Cookie = __webpack_require__("vmXh");

const DashboardHeader_Header = ({
  router
}) => {
  async function logout(client) {
    DashboardHeader_Cookie.remove("isAuth");
    DashboardHeader_Cookie.remove("qid");
    window.localStorage.removeItem("store");
    await client.mutate({
      mutation: external_graphql_tag_default.a`
        mutation logout {
          logout
        }
      `
    });
    router_default.a.push("/");
  }

  return DashboardHeader_jsx(external_styled_components_["ThemeProvider"], {
    theme: Object(theme["a" /* default */])(false)
  }, DashboardHeader_jsx(DashboardHeader_Wrapper, null, DashboardHeader_jsx(Logo["a" /* default */], null), DashboardHeader_jsx(DatePickersWrap, null, DashboardHeader_jsx(DatePickerWrap, null, DashboardHeader_jsx(Datepicker["a" /* default */], {
    set: true,
    start: true
  })), DashboardHeader_jsx("div", {
    style: {
      color: "white",
      margin: "auto 0px"
    }
  }, "-"), DashboardHeader_jsx(DatePickerWrap, null, DashboardHeader_jsx(Datepicker["a" /* default */], {
    set: true,
    start: false
  }))), DashboardHeader_jsx(LinksWrap, null, DashboardHeader_jsx(link_default.a, {
    prefetch: true,
    href: "/settings"
  }, DashboardHeader_jsx(StyledLink, {
    className: router.pathname === "/settings" ? "is-active" : ""
  }, "settings")), DashboardHeader_jsx(external_react_apollo_["ApolloConsumer"], null, client => DashboardHeader_jsx(StyledLink, {
    onClick: () => logout(client)
  }, "logout")))));
};

/* harmony default export */ var DashboardHeader = (Object(router_["withRouter"])(DashboardHeader_Header));
const LogoWrap = external_styled_components_default.a.div.withConfig({
  displayName: "DashboardHeader__LogoWrap",
  componentId: "sc-1szqfd9-0"
})([""]);
const TempDiv = external_styled_components_default.a.div.withConfig({
  displayName: "DashboardHeader__TempDiv",
  componentId: "sc-1szqfd9-1"
})(["margin:auto;"]);
const LinksWrap = external_styled_components_default.a.div.withConfig({
  displayName: "DashboardHeader__LinksWrap",
  componentId: "sc-1szqfd9-2"
})(["margin-right:0;margin-left:auto;display:flex;flex-direction:row;"]);
const DatePickersWrap = external_styled_components_default.a.div.withConfig({
  displayName: "DashboardHeader__DatePickersWrap",
  componentId: "sc-1szqfd9-3"
})(["margin-left:20px;margin-right:auto;display:flex;flex-direction:row;"]);
const DatePickerWrap = external_styled_components_default.a.div.withConfig({
  displayName: "DashboardHeader__DatePickerWrap",
  componentId: "sc-1szqfd9-4"
})(["margin:auto 10px;"]);
const StyledLink = external_styled_components_default.a.div.withConfig({
  displayName: "DashboardHeader__StyledLink",
  componentId: "sc-1szqfd9-5"
})(["", ";", ";margin:0;color:", ";color:#fff;text-transform:capitalize;position:relative;cursor:pointer;::after{", ";content:\"\";position:absolute;left:0;right:0;bottom:0;opacity:0;border-bottom:1px solid ", ";}:hover{opacity:1;color:", ";}:hover::after{opacity:1;border-bottom:1px solid ", ";}&.active::after{left:0;right:0;bottom:0;border-bottom:3px solid ", ";}font-weight:700;letter-spacing:0.05em;font-size:14px;margin-left:auto;"], helpers["a" /* headerItem */], helpers["b" /* link */], props => props.theme.mutedText, Object(helpers["d" /* transition */])("opacity", "border-bottom-width"), props => props.theme.accent, props => props.theme.accent, props => props.theme.accent, props => props.theme.accent);
const DashboardHeader_Wrapper = external_styled_components_default.a.header.withConfig({
  displayName: "DashboardHeader__Wrapper",
  componentId: "sc-1szqfd9-6"
})(["position:sticky;z-index:10;top:0;display:flex;align-items:stretch;border-bottom:2px solid #eee;height:55px;padding:0 0vw;font-weight:700;background-color:", ";user-select:none;background-color:#212527;@media (max-width:425px){margin-bottom:16px;height:40px;}@media (max-width:768px){padding:0;}"], props => props.theme.foreground);
// EXTERNAL MODULE: ./styles.css
var styles = __webpack_require__("L1EO");

// CONCATENATED MODULE: ./pages/dashboard.js
var dashboard_jsx = external_react_default.a.createElement;







function dashboard({
  initialState
}) {
  // const [width, setWidth] = useState();
  // function updateWindowDimensions() {
  //   let newWidth = window.innerWidth;
  //   setWidth(newWidth);
  //   console.log(window.innerWidth);
  //   console.log(width);
  //   console.log(newWidth);
  // }
  // useEffect(() => {
  //   window.addEventListener("resize", updateWindowDimensions);
  //   return () => {
  //     window.removeEventListener("resize", updateWindowDimensions);
  //   };
  // }, []);
  return dashboard_jsx(App["a" /* default */], null, dashboard_jsx(DashboardHeader, null), dashboard_jsx(PageWrap, null, dashboard_jsx(external_styled_components_["ThemeProvider"], {
    theme: theme["a" /* default */]
  }, dashboard_jsx(dashboard_Wrapper, null, dashboard_jsx(FetchQueryContainer_DashInitialTerms, null)))));
}
const PageWrap = external_styled_components_default.a.div.withConfig({
  displayName: "dashboard__PageWrap",
  componentId: "dqnkpe-0"
})(["height:100vh;margin:0 10vw;border-right:1px solid #f2f2f2;border-left:1px solid #f2f2f2;@media only screen and (max-width:768px){border:none;margin:0;}"]);
const dashboard_Wrapper = external_styled_components_default.a.div.withConfig({
  displayName: "dashboard__Wrapper",
  componentId: "dqnkpe-1"
})(["display:flex;align-items:flex-start;margin:0;@media (max-width:1024px){margin:0;}@media (max-width:768px){display:block;margin:0;}"]);

/***/ }),

/***/ "uhWA":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "vmXh":
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "wC3/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const FormWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "FormWrapper",
  componentId: "sc-15qkhyq-0"
})(["position:relative;overflow:hidden;margin:0 auto;border:1px solid ", ";border-radius:2px;width:375px;padding:24px;background-color:", ";@media (max-width:768px){padding:16px;}@media (max-width:", "){border-radius:0;border-left:none;border-right:none;}"], props => props.theme.border, props => props.theme.foreground, props => props.wide ? "600px" : "375px");
/* harmony default export */ __webpack_exports__["a"] = (FormWrapper); // max-width: ${props => (props.wide ? "600px" : "375px")};

/***/ })

/******/ });