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

/***/ "./components/Categories/CategoryList.js":
/*!***********************************************!*\
  !*** ./components/Categories/CategoryList.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react */ "mobx-react");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_2__);



var SidebarCategoryList = Object(mobx_react__WEBPACK_IMPORTED_MODULE_2__["inject"])("store")(Object(mobx_react__WEBPACK_IMPORTED_MODULE_2__["observer"])(function (_ref) {
  var store = _ref.store;

  function handleClick(value) {
    store.resetPnl();
    store.changeDate(value);
    console.log(store);
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CategoryList, null, store.date == 1 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ItemActive, {
    onClick: function onClick() {
      return handleClick(1);
    }
  }, "Today") : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Item, {
    onClick: function onClick() {
      return handleClick(1);
    }
  }, "Today"), store.date == 2 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ItemActive, {
    onClick: function onClick() {
      return handleClick(2);
    }
  }, "Yesterday") : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Item, {
    onClick: function onClick() {
      return handleClick(2);
    }
  }, "Yesterday"), store.date == 3 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ItemActive, {
    onClick: function onClick() {
      return handleClick(3);
    }
  }, "This Week") : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Item, {
    onClick: function onClick() {
      return handleClick(3);
    }
  }, "This Week"), store.date == 4 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ItemActive, {
    onClick: function onClick() {
      return handleClick(4);
    }
  }, "This Month") : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Item, {
    onClick: function onClick() {
      return handleClick(4);
    }
  }, "This Month"), store.date == 5 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ItemActive, {
    onClick: function onClick() {
      return handleClick(5);
    }
  }, "Custom") : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Item, {
    onClick: function onClick() {
      return handleClick(5);
    }
  }, "Custom"));
}));
/* harmony default export */ __webpack_exports__["default"] = (SidebarCategoryList);
var CategoryList = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.nav.withConfig({
  displayName: "CategoryList",
  componentId: "sc-1g55hdr-0"
})(["display:flex;flex-direction:column;"]);
var Item = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "CategoryList__Item",
  componentId: "sc-1g55hdr-1"
})(["padding:12px;font-size:15px;text-decoration:none;color:", ";color:white;::after{left:-1px;top:0;bottom:0;border-left:3px solid ", ";}&:hover{background-color:#fff;color:#212529;cursor:pointer;}"], function (props) {
  return props.theme.normalText;
}, function (props) {
  return props.theme.accent;
});
var ItemActive = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "CategoryList__ItemActive",
  componentId: "sc-1g55hdr-2"
})(["padding:12px;font-size:15px;text-decoration:none;color:", ";color:white;::after{left:-1px;top:0;bottom:0;border-left:3px solid ", ";}background-color:#fff;color:#212529;cursor:pointer;"], function (props) {
  return props.theme.normalText;
}, function (props) {
  return props.theme.accent;
});

/***/ }),

/***/ "./components/Categories/Header.js":
/*!*****************************************!*\
  !*** ./components/Categories/Header.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/helpers */ "./components/shared/helpers.js");




var SidebarCategoryListHeader = function SidebarCategoryListHeader() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Header, null, "Change Date");
};

/* harmony default export */ __webpack_exports__["default"] = (SidebarCategoryListHeader);
var Header = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span.withConfig({
  displayName: "Header",
  componentId: "waeii1-0"
})(["", " font-weight:600;display:block;padding:12px;text-align:center;color:", ";color:white;"], _shared_helpers__WEBPACK_IMPORTED_MODULE_2__["wideFont"], function (props) {
  return props.theme.mutedText;
});

/***/ }),

/***/ "./components/Categories/Menu.js":
/*!***************************************!*\
  !*** ./components/Categories/Menu.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../theme */ "./components/theme.js");
/* harmony import */ var _CategoryList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CategoryList */ "./components/Categories/CategoryList.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Header */ "./components/Categories/Header.js");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mobx-react */ "mobx-react");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_5__);





 // border: 1px solid ${props => props.theme.border};

var Sidebar = Object(mobx_react__WEBPACK_IMPORTED_MODULE_5__["inject"])("store")(Object(mobx_react__WEBPACK_IMPORTED_MODULE_5__["observer"])(function (_ref) {
  var store = _ref.store;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
    theme: Object(_theme__WEBPACK_IMPORTED_MODULE_2__["default"])(false)
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LapperContainer, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Lapper, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CategoryList__WEBPACK_IMPORTED_MODULE_3__["default"], null)), store.pnl >= 0 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Lapper2, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InnerLapper, null, store.pnl.toFixed(4) + "xbt")) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Lapper3, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InnerLapper, null, store.pnl.toFixed(4) + "xbt"))));
})); // {store.pnl >= 0 ? (
//   <Lapper2>
//     <InnerLapper>{store.pnl.toFixed(4) + "xbt"}</InnerLapper>
//   </Lapper2>
// ) : (
//   <Lapper3>
//     <InnerLapper>{store.pnl.toFixed(4) + "xbt"}</InnerLapper>
//   </Lapper3>
// )}

/* harmony default export */ __webpack_exports__["default"] = (Sidebar);
var LapperContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Menu__LapperContainer",
  componentId: "sc-1uueytc-0"
})(["display:flex;flex-direction:column;margin-left:24px;"]);
var Lapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.aside.withConfig({
  displayName: "Menu__Lapper",
  componentId: "sc-1uueytc-1"
})(["display:flex;flex-direction:column;flex-basis:240px;border-radius:2px;background-color:", ";background-color:#212529;margin-bottom:10px;@media (max-width:768px){display:none;}"], function (props) {
  return props.theme.foreground;
});
var InnerLapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Menu__InnerLapper",
  componentId: "sc-1uueytc-2"
})(["color:white;text-align:center;margin:auto;"]);
var Lapper2 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.aside.withConfig({
  displayName: "Menu__Lapper2",
  componentId: "sc-1uueytc-3"
})(["border-radius:2px;background-color:", ";background-color:green;max-height:30px;@media (max-width:768px){display:none;}"], function (props) {
  return props.theme.foreground;
});
var Lapper3 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.aside.withConfig({
  displayName: "Menu__Lapper3",
  componentId: "sc-1uueytc-4"
})(["border-radius:2px;background-color:", ";background-color:red;max-height:30px;@media (max-width:768px){display:none;}"], function (props) {
  return props.theme.foreground;
});

/***/ }),

/***/ "./components/Charts/Notes.js":
/*!************************************!*\
  !*** ./components/Charts/Notes.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers */ "./components/Charts/helpers.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__);



function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n            mutation addHashtag($time: String!, $hashtag: String!) {\n              addHashtag(time: $time, hashtag: $hashtag)\n            }\n          "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n            mutation addNotes($time: String!, $notes: String!) {\n              addNotes(time: $time, notes: $notes)\n            }\n          "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }










var _default =
/*#__PURE__*/
function (_Component) {
  _inherits(_default, _Component);

  function _default(props) {
    var _this;

    _classCallCheck(this, _default);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(_default).call(this, props));
    _this.state = {
      value: "",
      hashtags: [],
      initHashtags: []
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (this.props.firstTrade.notes != "undefined") {
        this.setState({
          value: this.props.firstTrade.notes
        });
      }

      var splitTags = this.props.firstTrade.hashtags.split(",");
      splitTags.map(function (tag) {
        _this2.state.initHashtags.push(tag);
      });
    }
  }, {
    key: "handleChange",
    value: function handleChange(client) {
      var _this3 = this;

      return function (event) {
        // event.preventDefault();
        _this3.setState({
          value: event.target.value
        }, _this3.handleSubmit(client));
      };
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(client) {
      var _this4 = this;

      return function (event) {
        if (event != undefined && event.preventDefault != undefined) {
          event.preventDefault();
        }

        console.log("HASHTAGS", _this4.state.hashtags);
        Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["getNotes"])(_this4.state.value).then(
        /*#__PURE__*/
        function () {
          var _ref = _asyncToGenerator(
          /*#__PURE__*/
          _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(res) {
            var notes, time, reso, r;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    notes = res[0]; // let hashtags = res[1];

                    time = _this4.props.firstTrade.timestamp;
                    reso = client.mutate({
                      mutation: graphql_tag__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject()),
                      variables: {
                        time: time,
                        notes: notes
                      }
                    });
                    _context.next = 5;
                    return reso;

                  case 5:
                    r = _context.sent;
                    console.log(r);

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }());
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_3__["ApolloConsumer"], null, function (client) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FullRow, {
          onSubmit: _this5.handleSubmit(client)
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HashtagDiv, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AddHashtag, {
          firstTrade: _this5.props.firstTrade,
          client: client
        })), _this5.state.initHashtags.map(function (tag) {
          if (tag != "undefined") {
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SingleHashtagDiv, null, "#", tag);
          }
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NotesInput, {
          type: "text",
          value: _this5.state.value,
          onChange: _this5.handleChange(client)
        })));
      });
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);



var AddHashtag =
/*#__PURE__*/
function (_Component2) {
  _inherits(AddHashtag, _Component2);

  function AddHashtag(props) {
    var _this6;

    _classCallCheck(this, AddHashtag);

    _this6 = _possibleConstructorReturn(this, _getPrototypeOf(AddHashtag).call(this, props));
    _this6.state = {
      clicked: false
    };
    _this6.handleChange = _this6.handleChange.bind(_assertThisInitialized(_this6));
    _this6.handleSubmit = _this6.handleSubmit.bind(_assertThisInitialized(_this6));
    _this6.clicked = _this6.clicked.bind(_assertThisInitialized(_this6));
    return _this6;
  }

  _createClass(AddHashtag, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        client: this.props.client
      });
    }
  }, {
    key: "handleChange",
    value: function handleChange(event) {
      // event.preventDefault();
      console.log(event.target.value);
      this.setState({
        value: event.target.value
      });
    }
  }, {
    key: "handleSubmit",
    value: function () {
      var _handleSubmit = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(event) {
        var _this7 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                // return event => {
                event.preventDefault();
                console.log(this.state.value);
                Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["getHashtags"])(this.state.value).then(
                /*#__PURE__*/
                function () {
                  var _ref2 = _asyncToGenerator(
                  /*#__PURE__*/
                  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(res) {
                    var client, hashtag, time, reso;
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            console.log("CLICKED");
                            client = _this7.state.client; // if(typeof)

                            hashtag = res;
                            console.log(hashtag, "HASHTAG");
                            time = _this7.props.firstTrade.timestamp;
                            reso = client.mutate({
                              mutation: graphql_tag__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject2()),
                              variables: {
                                time: time,
                                hashtag: hashtag
                              }
                            });
                            _context2.next = 8;
                            return reso;

                          case 8:
                            return _context2.abrupt("return", _context2.sent);

                          case 9:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2);
                  }));

                  return function (_x3) {
                    return _ref2.apply(this, arguments);
                  };
                }()).then(function () {
                  _this7.setState({
                    value: ""
                  });
                }); // };

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function handleSubmit(_x2) {
        return _handleSubmit.apply(this, arguments);
      }

      return handleSubmit;
    }()
  }, {
    key: "clicked",
    value: function clicked() {
      this.state.clicked ? this.setState({
        clicked: false
      }) : this.setState({
        clicked: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Popup, {
        onClick: this.clicked
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faPlus"],
        style: {
          transition: "none"
        }
      })), this.state.clicked ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PopupTop, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
        onSubmit: this.handleSubmit
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "text",
        value: this.state.value,
        onChange: this.handleChange
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AddHashSubmit, {
        type: "submit",
        value: "Add"
      }))) : null);
    }
  }]);

  return AddHashtag;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

var AddHashSubmit = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.input.withConfig({
  displayName: "Notes__AddHashSubmit",
  componentId: "nwljd5-0"
})(["background:none;border:none;color:white;font-weight:500;padding:2px;"]);
var Popup = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Notes__Popup",
  componentId: "nwljd5-1"
})(["position:relative;display:inline-block;cursor:pointer;background:#000;padding:8px;border-radius:2px;"]);
var PopupTop = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Notes__PopupTop",
  componentId: "nwljd5-2"
})(["position:absolute;background:#000;z-index:1;margin:5px;padding:2px;border-radius:2px;"]); // background: #6c757d;
// background: #b9bdc1;

var SingleHashtagDiv = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Notes__SingleHashtagDiv",
  componentId: "nwljd5-3"
})(["background:#f8f8ff;margin:20px 8px;text-align:center;vertical-align:middle;color:black;padding:10px;padding-top:8px;"]);
var HashtagDiv = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Notes__HashtagDiv",
  componentId: "nwljd5-4"
})(["margin:auto;text-align:center;vertical-align:middle;color:white;padding:10px;padding-top:8px;"]);
var FullRow = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.form.withConfig({
  displayName: "Notes__FullRow",
  componentId: "nwljd5-5"
})(["display:flex;flex-direction:row;"]);
var NotesSubmit = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.input.withConfig({
  displayName: "Notes__NotesSubmit",
  componentId: "nwljd5-6"
})(["margin:9px;padding:15px;background:#212528;border:none;color:white;"]);
var NotesInput = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.input.withConfig({
  displayName: "Notes__NotesInput",
  componentId: "nwljd5-7"
})(["width:100%;padding:12px 20px;margin:8px 0;box-sizing:border-box;background:#f8f8ff;border:none;"]);

/***/ }),

/***/ "./components/Charts/ReChart.js":
/*!**************************************!*\
  !*** ./components/Charts/ReChart.js ***!
  \**************************************/
/*! exports provided: default, ContainDiv, ContainDivClicked, ContainDivBlack, ContainDivHeader, NextToDiv, NextToDivBlack, NextToDivHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Example; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainDiv", function() { return ContainDiv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainDivClicked", function() { return ContainDivClicked; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainDivBlack", function() { return ContainDivBlack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainDivHeader", function() { return ContainDivHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NextToDiv", function() { return NextToDiv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NextToDivBlack", function() { return NextToDivBlack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NextToDivHeader", function() { return NextToDivHeader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recharts */ "recharts");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(recharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/helpers */ "./components/shared/helpers.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../theme */ "./components/theme.js");
/* harmony import */ var _Helpers_Functions_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Helpers/Functions.js */ "./components/Helpers/Functions.js");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mobx-react */ "mobx-react");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Charts2_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Charts2/index */ "./components/Charts2/index.js");
/* harmony import */ var _Notes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Notes */ "./components/Charts/Notes.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__);
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }













var Example =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Example, _PureComponent);

  function Example(props) {
    var _this;

    _classCallCheck(this, Example);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Example).call(this, props));
    _this.state = {
      width: 0,
      height: 0,
      data: [],
      fullTrades: []
    };
    _this.updateWindowDimensions = _this.updateWindowDimensions.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Example, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      console.log(this.props.data);
      this.props.data.fetchTradeHistory.map(function (dat) {
        _this2.state.data.unshift(dat);
      }); // this.setState({ candleData: this.props.data.fetchCandleHistory });
      // console.log(this.state);

      this.updateWindowDimensions();
      window.addEventListener("resize", this.updateWindowDimensions);
      this.state.data.map(function (dat, i) {
        if (dat.trdStart == true) {
          var sliced = _this2.state.data.slice(i, _this2.state.data.length); // console.log(sliced, "THIS SLICED");
          // console.log(this.state.fullTrades);


          for (var _i = 0; _i < sliced.length; _i++) {
            if (sliced[_i].trdEnd == true && _i > 0) {
              var newsliced = sliced.slice(0, _i + 1);

              if (newsliced[0].hashtags != null) {// this.state.hashtags.push(newsliced.)
              }

              _this2.state.fullTrades.unshift(newsliced); // console.log(this.state.fullTrades);


              break;
            }
          }
        }
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("resize", this.updateWindowDimensions);
    }
  }, {
    key: "updateWindowDimensions",
    value: function updateWindowDimensions() {
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
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_2__["ThemeProvider"], {
        theme: Object(_theme__WEBPACK_IMPORTED_MODULE_4__["default"])(false)
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          minWidth: this.state.chartWidth
        }
      }, this.state.fullTrades.map(function (slic, i) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MakeCol, {
          slic: slic,
          onemin: _this3.props.data.fetchOneMinuteCandleHistory,
          fivemin: _this3.props.data.fetchFiveMinuteCandleHistory,
          onehour: _this3.props.data.fetchOneHourCandleHistory,
          oneday: _this3.props.data.fetchOneDayCandleHistory,
          key: i
        });
      })));
    }
  }]);

  return Example;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);


var MakeCol = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_6__["inject"])("store"), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_6__["observer"])(_class =
/*#__PURE__*/
function (_Component) {
  _inherits(MakeCol, _Component);

  function MakeCol(props) {
    var _this4;

    _classCallCheck(this, MakeCol);

    _this4 = _possibleConstructorReturn(this, _getPrototypeOf(MakeCol).call(this, props));
    _this4.state = {
      data: [],
      pnl: 0,
      avgEntryPrice: 0,
      avgExitPrice: 0,
      clicked: false,
      cumQty: 0,
      readMoreClicked: false
    };
    _this4.readMoreClicked = _this4.readMoreClicked.bind(_assertThisInitialized(_this4));
    _this4.clicked = _this4.clicked.bind(_assertThisInitialized(_this4));
    return _this4;
  }

  _createClass(MakeCol, [{
    key: "componentDidMount",
    value: function componentDidMount() {// console.log(this.state);
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      this.state.data = this.props.slic; // console.log(this.state.data[0]);

      if (this.state.data[0].side == "Buy" && this.state.data[0].execType == "Trade") {
        var avgBuyPrice = 0;
        var avgSellPrice = 0;
        var totBuyContracts = 0;
        var totSellContracts = 0;
        var buyNum = 0;
        var sellNum = 0;
        var totBuyContractsMult = 0;
        var totSellContractsMult = 0;
        var realQty = 0;
        var totCommission = 0;

        for (var i = 0; i < this.state.data.length; i++) {
          realQty = this.state.data[i].orderQty - this.state.data[i].leavesQty;

          if (this.state.data[i].side == "Buy") {
            // totBuyPrice += parseFloat(this.state.data[i].price);
            buyNum += 1;
            totBuyContracts += realQty;
            totBuyContractsMult += realQty * parseFloat(this.state.data[i].price);
          }

          if (this.state.data[i].side == "Sell") {
            sellNum += 1;
            totSellContracts += realQty;
            totSellContractsMult += realQty * parseFloat(this.state.data[i].price);
          } // console.log("REAL QTY", realQty);


          if (this.state.data[i].orderType == "Limit" && this.state.data[i].execType !== "Funding") {
            totCommission += realQty * 0.0025 / this.state.data[i].price;
          }

          if (this.state.data[i].orderType == "Market") {
            totCommission -= realQty * 0.0075 / this.state.data[i].price;
          }

          if (this.state.data[i].orderType.includes("Stop")) {
            totCommission -= realQty * 0.0075 / this.state.data[i].price;
          }

          if (i == this.state.data.length - 1) {
            avgBuyPrice = totBuyContractsMult / totBuyContracts;
            avgSellPrice = totSellContractsMult / totSellContracts;

            if (avgBuyPrice != null) {
              this.state.avgEntryPrice = avgBuyPrice;
            } else {
              this.state.avgEntryPrice = 0;
            }

            if (avgSellPrice != null) {
              this.state.avgExitPrice = avgSellPrice;
            } else {
              this.state.avgExitPrice = 0;
            }

            this.state.cumQty = totBuyContracts;
            var thePnl = (1 / avgBuyPrice - 1 / avgSellPrice) * totSellContracts;

            if (thePnl != null) {
              console.log("TOT COMMISS", totCommission);
              this.state.pnl = thePnl + totCommission;
              this.props.store.addPnl(this.state.pnl);
            } else {
              this.state.pnl = 0;
            }
          }
        }
      }

      if (this.state.data[0].side == "Sell" && this.state.data[0].execType == "Trade") {
        // let avgBuyPrice = 0;
        // let avgSellPrice = 0;
        var _totBuyContracts = 0;
        var _totSellContracts = 0;
        var _buyNum = 0;
        var _sellNum = 0;
        var _totBuyContractsMult = 0;
        var _totSellContractsMult = 0;
        var _realQty = 0;
        var _totCommission = 0;

        for (var _i2 = 0; _i2 < this.state.data.length; _i2++) {
          _realQty = this.state.data[_i2].orderQty - this.state.data[_i2].leavesQty;

          if (this.state.data[_i2].side == "Buy") {
            // totBuyPrice += parseFloat(this.state.data[i].price);
            _buyNum += 1;
            _totBuyContracts += _realQty;
            _totBuyContractsMult += _realQty * parseFloat(this.state.data[_i2].price);
          }

          if (this.state.data[_i2].side == "Sell") {
            _sellNum += 1;
            _totSellContracts += _realQty;
            _totSellContractsMult += _realQty * parseFloat(this.state.data[_i2].price);
          }

          console.log("REAL QTY", _realQty);

          if (this.state.data[_i2].orderType == "Limit" && this.state.data[_i2].execType !== "Funding") {
            _totCommission += _realQty * 0.0025 / this.state.data[_i2].price;
          }

          if (this.state.data[_i2].orderType == "Market") {
            _totCommission -= _realQty * 0.0075 / this.state.data[_i2].price;
          }

          if (this.state.data[_i2].orderType.includes("Stop")) {
            _totCommission -= _realQty * 0.0075 / this.state.data[_i2].price;
          }

          if (_i2 == this.state.data.length - 1) {
            // console.log(totBuyContracts, totBuyContractsMult);
            // console.log(totSellContracts, totSellContractsMult);
            var _avgBuyPrice = _totBuyContractsMult / _totBuyContracts;

            var _avgSellPrice = _totSellContractsMult / _totSellContracts;

            var pnl = (1 / _avgBuyPrice - 1 / _avgSellPrice) * _totBuyContracts; // console.log(pnl, totBuyContractsMult, totBuyContracts);

            if (_avgBuyPrice != null) {
              this.state.avgExitPrice = _avgBuyPrice;
            } else {
              this.state.avgExitPrice = 0;
            }

            if (_avgSellPrice != null) {
              this.state.avgEntryPrice = _avgSellPrice;
            } else {
              this.state.avgEntryPrice = 0;
            }

            this.state.cumQty = _totSellContracts;

            if (pnl != null) {
              console.log("TOT COMMISS", _totCommission);
              this.state.pnl = pnl + _totCommission;
              this.props.store.addPnl(pnl);
            } else {
              this.state.pnl = 0;
            }
          }
        }
      }
    }
  }, {
    key: "clicked",
    value: function clicked() {
      // console.log(this.state);
      if (this.state.clicked == false) {
        this.setState({
          clicked: true
        });
      } else {
        this.setState({
          clicked: false
        });
      }
    }
  }, {
    key: "readMoreClicked",
    value: function readMoreClicked() {
      // console.log(this.state);
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
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      if (this.state.clicked == false) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContainDiv, {
          onClick: this.clicked.bind(this)
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDiv, null, Object(_Helpers_Functions_js__WEBPACK_IMPORTED_MODULE_5__["formatDateMonthOnly"])(this.state.data[0].timestamp)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDiv, null, Object(_Helpers_Functions_js__WEBPACK_IMPORTED_MODULE_5__["formatDateMonthOnly"])(this.state.data[this.state.data.length - 1].timestamp)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IsShort, {
          side: this.state.data[0].side
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDiv, null, "$", this.state.avgEntryPrice.toFixed(1)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDiv, null, "$", this.state.avgExitPrice.toFixed(1)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDiv, null, this.state.cumQty), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDiv, null, this.state.pnl.toFixed(4) + "xbt"));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TotalDetails, null, this.state.readMoreClicked ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MoreBoxTall, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContainDivClicked, {
          onClick: this.clicked.bind(this)
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDiv, null, Object(_Helpers_Functions_js__WEBPACK_IMPORTED_MODULE_5__["formatDateMonthOnly"])(this.state.data[0].timestamp)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDiv, null, Object(_Helpers_Functions_js__WEBPACK_IMPORTED_MODULE_5__["formatDateMonthOnly"])(this.state.data[this.state.data.length - 1].timestamp)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IsShort, {
          side: this.state.data[0].side
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDiv, null, "$", this.state.avgEntryPrice.toFixed(1)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDiv, null, "$", this.state.avgExitPrice.toFixed(1)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDiv, null, this.state.cumQty), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDiv, null, this.state.pnl.toFixed(4) + "xbt")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContainDivBlack, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDivBlack, null, "Timestamp"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDivBlack, null, "Side"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDivBlack, null, "Price"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDivBlack, null, "Order Qty"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDivBlack, null, "Commission")), this.state.data.map(function (dat) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContainDivBlack, {
            onClick: _this5.clicked.bind(_this5)
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDivBlack, null, dat.timestamp), dat.execType == "Trade" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDivBlack, null, dat.side) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDivBlack, null, dat.execType), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDivBlack, null, "$", dat.price.toString()), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDivBlack, null, dat.orderQty.toString()), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDivBlack, null, dat.commission));
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ReadMoreTall, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ReadMoreInner, {
          onClick: this.readMoreClicked
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeIcon"], {
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faCaretUp"],
          style: {
            transition: "none"
          }
        })))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MoreBoxShort, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContainDivClicked, {
          onClick: this.clicked
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDiv, null, Object(_Helpers_Functions_js__WEBPACK_IMPORTED_MODULE_5__["formatDateMonthOnly"])(this.state.data[0].timestamp)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDiv, null, Object(_Helpers_Functions_js__WEBPACK_IMPORTED_MODULE_5__["formatDateMonthOnly"])(this.state.data[this.state.data.length - 1].timestamp)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IsShort, {
          side: this.state.data[0].side
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDiv, null, "$", this.state.avgEntryPrice.toFixed(1)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDiv, null, "$", this.state.avgExitPrice.toFixed(1)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDiv, null, this.state.cumQty), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDiv, null, this.state.pnl.toFixed(4) + "xbt")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContainDivBlack, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDivBlack, null, "Timestamp"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDivBlack, null, "Side"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDivBlack, null, "Price"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDivBlack, null, "Order Qty"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDivBlack, null, "Commission")), this.state.data.map(function (dat) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContainDivBlack, {
            onClick: _this5.clicked.bind(_this5)
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDivBlack, null, dat.timestamp), dat.execType == "Trade" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDivBlack, null, dat.side) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDivBlack, null, dat.execType), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDivBlack, null, "$", dat.price.toString()), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDivBlack, null, dat.orderQty.toString()), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDivBlack, null, dat.commission));
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ReadMore, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ReadMoreInner, {
          onClick: this.readMoreClicked
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeIcon"], {
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faCaretDown"],
          style: {
            transition: "none"
          }
        })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Notes__WEBPACK_IMPORTED_MODULE_8__["default"], {
          firstTrade: this.state.data[0]
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Charts2_index__WEBPACK_IMPORTED_MODULE_7__["default"], {
          onemin: this.props.onemin,
          fivemin: this.props.fivemin,
          onehour: this.props.onehour,
          oneday: this.props.oneday,
          trades: this.state.data
        }));
      }
    }
  }]);

  return MakeCol;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"])) || _class) || _class);

var IsShort =
/*#__PURE__*/
function (_Component2) {
  _inherits(IsShort, _Component2);

  function IsShort() {
    _classCallCheck(this, IsShort);

    return _possibleConstructorReturn(this, _getPrototypeOf(IsShort).apply(this, arguments));
  }

  _createClass(IsShort, [{
    key: "render",
    value: function render() {
      if (this.props.side == "Sell") {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDiv, null, "Short");
      } else {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDiv, null, "Long");
      }
    }
  }]);

  return IsShort;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var ContainDiv = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "ReChart__ContainDiv",
  componentId: "sc-1e3lvhz-0"
})(["width:100%;display:flex;flex-direction:row;height:52px;border-bottom:1px solid #d3d3d3;&:hover{border-left:3px solid black;cursor:pointer;}"]);
var ContainDivClicked = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "ReChart__ContainDivClicked",
  componentId: "sc-1e3lvhz-1"
})(["width:100%;display:flex;flex-direction:row;height:52px;border-bottom:1px solid #d3d3d3;border-left:5px solid black;cursor:pointer;"]);
var ContainDivBlack = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "ReChart__ContainDivBlack",
  componentId: "sc-1e3lvhz-2"
})(["width:100%;display:flex;flex-direction:row;height:42px;background:#f8f8ff;border-bottom:1px solid #f2f2f2;"]);
var ContainDivHeader = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "ReChart__ContainDivHeader",
  componentId: "sc-1e3lvhz-3"
})(["width:100%;display:flex;flex-direction:row;height:52px;border-bottom:1px solid #d3d3d3;"]);
var NextToDiv = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "ReChart__NextToDiv",
  componentId: "sc-1e3lvhz-4"
})(["display:inline-block;width:30%;padding:10px;padding-left:12px;"]);
var NextToDivBlack = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "ReChart__NextToDivBlack",
  componentId: "sc-1e3lvhz-5"
})(["display:inline-block;width:30%;padding:5px;padding-left:12px;"]);
var NextToDivHeader = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "ReChart__NextToDivHeader",
  componentId: "sc-1e3lvhz-6"
})(["display:inline-block;width:30%;color:#78838e;font-weight:600;display:inline-block;text-transform:uppercase;padding:10px;padding-left:12px;"]);
var ReadMore = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "ReChart__ReadMore",
  componentId: "sc-1e3lvhz-7"
})(["position:absolute;bottom:0;left:0;width:100%;text-align:center;margin:0;padding:10px 0;background-image:-webkit-gradient( linear,left top,left bottom,color-stop(0,rgba(255,0,0,0)),color-stop(1,rgba(248,248,255,1)) );"]);
var ReadMoreTall = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "ReChart__ReadMoreTall",
  componentId: "sc-1e3lvhz-8"
})(["position:absolute;bottom:0;left:0;width:100%;text-align:center;margin:0;padding:10px 0;"]); // background-image: linear-gradient(to bottom, transparent, black);

var MoreBoxShort = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "ReChart__MoreBoxShort",
  componentId: "sc-1e3lvhz-9"
})(["max-height:200px;position:relative;overflow:hidden;"]);
var MoreBoxTall = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "ReChart__MoreBoxTall",
  componentId: "sc-1e3lvhz-10"
})(["max-height:none;position:relative;overflow:hidden;"]);
var TotalDetails = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "ReChart__TotalDetails",
  componentId: "sc-1e3lvhz-11"
})([""]); // border: 1px solid rgba(33, 37, 40, 0.7);

var ReadMoreInner = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "ReChart__ReadMoreInner",
  componentId: "sc-1e3lvhz-12"
})(["color:rgba(33,37,40,1);padding:0;margin:auto;width:30px;border-radius:2px;-webkit-transition-property:none;-moz-transition-property:none;-o-transition-property:none;transition-property:none;:hover{cursor:pointer;background-color:rgba(33,37,40,1);color:#fff;-webkit-transition-property:none;-moz-transition-property:none;-o-transition-property:none;transition-property:none;}font-size:20px;"]); // background-color: #4cabf7;
// const ReadMoreInner = styled.div`
//   background-color: #fff;
//   color: rgba(33, 37, 40, 1);
//   padding: 0;
//   margin: auto;
//   width: 20px;
//   border: 1px solid rgba(33, 37, 40, 0.7);
//   border-radius: 2px;
//   :hover {
//     cursor: pointer;
//   }
//   font-size: 20px;
// `;
// const renderLegend = props => {
//   const { payload } = props;
//   // console.log(payload);
//   return (
//     <StyledUl>
//       {payload.map((entry, index) => (
//         <li key={`item-${index}`} style={{ display: "flex", margin: "auto" }}>
//           <Sv color={entry.color} />
//           <div style={{ marginLeft: "7px" }}>{entry.value}</div>
//         </li>
//       ))}
//     </StyledUl>
//   );
// };
// const StyledUl = styled.ul`
//   display: flex;
//   font-size: 16px;
//   text-decoration: none;
//   margin-left: 60px;
//   list-style: none;
//   text-align: center;
//   color: ${props => props.theme.normalText};
// `;
// const Sv = ({ color }) => (
//   <svg width="10" height="10" style={{ marginTop: "8px" }}>
//     <rect width="10" height="10" fill={color} />
//   </svg>
// );

/***/ }),

/***/ "./components/Charts/helpers.js":
/*!**************************************!*\
  !*** ./components/Charts/helpers.js ***!
  \**************************************/
/*! exports provided: getNotes, getHashtags */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNotes", function() { return getNotes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHashtags", function() { return getHashtags; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getNotes(_x) {
  return _getNotes.apply(this, arguments);
}

function _getNotes() {
  _getNotes = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(inputVal) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new Promise(function (resolve) {
              var notes;

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


              var endArr = [];
              endArr.push(notes); // endArr.push(hashtags);

              resolve(endArr); // }
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getNotes.apply(this, arguments);
}

function getHashtags(_x2) {
  return _getHashtags.apply(this, arguments);
}

function _getHashtags() {
  _getHashtags = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(inputHashtags) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            console.log(inputHashtags, "INP HASH");
            return _context2.abrupt("return", new Promise(function (resolve) {
              var hashtags;

              if (inputHashtags != null && inputHashtags != undefined) {
                hashtags = inputHashtags;
              } else {
                hashtags = "undefined";
              }

              console.log(hashtags, "END HASHS");
              resolve(hashtags);
            }));

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getHashtags.apply(this, arguments);
}

/***/ }),

/***/ "./components/Charts2/ChartDemo.js":
/*!*****************************************!*\
  !*** ./components/Charts2/ChartDemo.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var d3_format__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-format */ "d3-format");
/* harmony import */ var d3_format__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(d3_format__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var d3_time_format__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-time-format */ "d3-time-format");
/* harmony import */ var d3_time_format__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(d3_time_format__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_stockcharts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-stockcharts */ "react-stockcharts");
/* harmony import */ var react_stockcharts__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_stockcharts__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_stockcharts_lib_series__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-stockcharts/lib/series */ "react-stockcharts/lib/series");
/* harmony import */ var react_stockcharts_lib_series__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_stockcharts_lib_series__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_stockcharts_lib_axes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-stockcharts/lib/axes */ "react-stockcharts/lib/axes");
/* harmony import */ var react_stockcharts_lib_axes__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_stockcharts_lib_axes__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_stockcharts_lib_coordinates__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-stockcharts/lib/coordinates */ "react-stockcharts/lib/coordinates");
/* harmony import */ var react_stockcharts_lib_coordinates__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_stockcharts_lib_coordinates__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./helpers */ "./components/Charts2/helpers.js");
/* harmony import */ var react_stockcharts_lib_annotation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-stockcharts/lib/annotation */ "react-stockcharts/lib/annotation");
/* harmony import */ var react_stockcharts_lib_annotation__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_stockcharts_lib_annotation__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_stockcharts_lib_scale__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-stockcharts/lib/scale */ "react-stockcharts/lib/scale");
/* harmony import */ var react_stockcharts_lib_scale__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_stockcharts_lib_scale__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_stockcharts_lib_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-stockcharts/lib/tooltip */ "react-stockcharts/lib/tooltip");
/* harmony import */ var react_stockcharts_lib_tooltip__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_stockcharts_lib_tooltip__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_stockcharts_lib_indicator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-stockcharts/lib/indicator */ "react-stockcharts/lib/indicator");
/* harmony import */ var react_stockcharts_lib_indicator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_stockcharts_lib_indicator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_stockcharts_lib_helper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-stockcharts/lib/helper */ "react-stockcharts/lib/helper");
/* harmony import */ var react_stockcharts_lib_helper__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_stockcharts_lib_helper__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_stockcharts_lib_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-stockcharts/lib/utils */ "react-stockcharts/lib/utils");
/* harmony import */ var react_stockcharts_lib_utils__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_stockcharts_lib_utils__WEBPACK_IMPORTED_MODULE_14__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

















var CandleStickChartWithAnnotation =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CandleStickChartWithAnnotation, _React$Component);

  function CandleStickChartWithAnnotation(props) {
    _classCallCheck(this, CandleStickChartWithAnnotation);

    return _possibleConstructorReturn(this, _getPrototypeOf(CandleStickChartWithAnnotation).call(this, props));
  }

  _createClass(CandleStickChartWithAnnotation, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // console.log(this.props);
      var yRangeNums = Object(_helpers__WEBPACK_IMPORTED_MODULE_8__["getYRangeNums"])(this.props.data);
      this.setState({
        yRangeNums: yRangeNums
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var margin = {
        left: 20,
        right: 50,
        top: 30,
        bottom: 30
      };
      var height = 400;
      var _this$props = this.props,
          type = _this$props.type,
          initialData = _this$props.data,
          width = _this$props.width,
          ratio = _this$props.ratio;
      var yAxisLabelX = width - margin.left - 40,
          yAxisLabelY = (height - margin.top - margin.bottom) / 2;
      var xScaleProvider = react_stockcharts_lib_scale__WEBPACK_IMPORTED_MODULE_10__["discontinuousTimeScaleProvider"].inputDateAccessor(function (d) {
        return d.date;
      });

      var _xScaleProvider = xScaleProvider(initialData),
          data = _xScaleProvider.data,
          xScale = _xScaleProvider.xScale,
          xAccessor = _xScaleProvider.xAccessor,
          displayXAccessor = _xScaleProvider.displayXAccessor;

      var start = xAccessor(Object(react_stockcharts_lib_utils__WEBPACK_IMPORTED_MODULE_14__["last"])(data));
      var end = xAccessor(data[Math.max(0, data.length - 150)]); // console.log(start, "CHART START");
      // console.log(end, "CHART END");

      var xExtents = [start, end];

      if (this.state == null) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Loading...");
      } // try {


      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_stockcharts__WEBPACK_IMPORTED_MODULE_4__["ChartCanvas"], {
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
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_stockcharts__WEBPACK_IMPORTED_MODULE_4__["Chart"], {
        id: 1,
        yExtents: [function (d) {
          return [d.high, d.low];
        }],
        padding: {
          top: 80,
          bottom: 80
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_stockcharts_lib_axes__WEBPACK_IMPORTED_MODULE_6__["XAxis"], {
        axisAt: "bottom",
        orient: "bottom"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_stockcharts_lib_coordinates__WEBPACK_IMPORTED_MODULE_7__["MouseCoordinateX"], {
        at: "bottom",
        orient: "bottom",
        displayFormat: Object(d3_time_format__WEBPACK_IMPORTED_MODULE_3__["timeFormat"])("%Y-%m-%d")
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_stockcharts_lib_coordinates__WEBPACK_IMPORTED_MODULE_7__["MouseCoordinateY"], {
        at: "right",
        orient: "right",
        displayFormat: Object(d3_format__WEBPACK_IMPORTED_MODULE_2__["format"])(".2f")
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_stockcharts_lib_axes__WEBPACK_IMPORTED_MODULE_6__["YAxis"], {
        axisAt: "right",
        orient: "right",
        ticks: 5
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_stockcharts_lib_series__WEBPACK_IMPORTED_MODULE_5__["CandlestickSeries"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_stockcharts_lib_tooltip__WEBPACK_IMPORTED_MODULE_11__["OHLCTooltip"], {
        origin: [-10, 0]
      }), this.props.trades.map(function (each) {
        // console.log(
        //   "mapping total length" + this.props.trades.length.toString(),
        //   each
        // );
        var datu = new Date(each.timestamp);

        if (each.side == "Buy") {
          var annotationPropsUp = {
            fontFamily: "Glyphicons Halflings",
            fontSize: 20,
            fill: "#018001",
            opacity: 0.8,
            text: "˄",
            y: function y(_ref) {
              var yScale = _ref.yScale;
              return yScale.range()[0] * Object(_helpers__WEBPACK_IMPORTED_MODULE_8__["findYValBuy"])(_this.state.yRangeNums[0], _this.state.yRangeNums[1], each.price);
            },
            onClick: console.log.bind(console),
            tooltip: function tooltip(d) {
              return Object(d3_time_format__WEBPACK_IMPORTED_MODULE_3__["timeFormat"])("%B")(d.date);
            } // onMouseOver: console.log.bind(console),

          };
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_stockcharts_lib_annotation__WEBPACK_IMPORTED_MODULE_9__["Annotate"], {
            with: react_stockcharts_lib_annotation__WEBPACK_IMPORTED_MODULE_9__["LabelAnnotation"],
            when: function when(d) {
              return Object(_helpers__WEBPACK_IMPORTED_MODULE_8__["timeCompare"])(d, datu, _this.props.timeframe);
            },
            usingProps: annotationPropsUp
          });
        } else if (each.side == "Sell") {
          var annotationPropsDown = {
            fontFamily: "Glyphicons Halflings",
            fontSize: 20,
            fill: "#FF0000",
            opacity: 0.8,
            text: "˅",
            y: function y(_ref2) {
              var yScale = _ref2.yScale;
              return yScale.range()[0] * Object(_helpers__WEBPACK_IMPORTED_MODULE_8__["findYValSell"])(_this.state.yRangeNums[0], _this.state.yRangeNums[1], each.price);
            },
            onClick: console.log.bind(console),
            tooltip: function tooltip(d) {
              return Object(d3_time_format__WEBPACK_IMPORTED_MODULE_3__["timeFormat"])("%B")(d.date);
            } // onMouseOver: console.log.bind(console),

          };
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_stockcharts_lib_annotation__WEBPACK_IMPORTED_MODULE_9__["Annotate"], {
            with: react_stockcharts_lib_annotation__WEBPACK_IMPORTED_MODULE_9__["LabelAnnotation"],
            when: function when(d) {
              return Object(_helpers__WEBPACK_IMPORTED_MODULE_8__["timeCompare"])(d, datu, _this.props.timeframe);
            },
            usingProps: annotationPropsDown
          });
        } else {
          return;
        }
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_stockcharts_lib_coordinates__WEBPACK_IMPORTED_MODULE_7__["CrossHairCursor"], {
        strokeDasharray: "LongDashDot"
      })); // } catch (err) {
      //   return <div>no chart</div>;
      // }
    }
  }]);

  return CandleStickChartWithAnnotation;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

CandleStickChartWithAnnotation.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  width: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  ratio: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(["svg", "hybrid"]).isRequired
};
CandleStickChartWithAnnotation.defaultProps = {
  type: "svg"
};
CandleStickChartWithAnnotation = Object(react_stockcharts_lib_helper__WEBPACK_IMPORTED_MODULE_13__["fitWidth"])(CandleStickChartWithAnnotation);
/* harmony default export */ __webpack_exports__["default"] = (CandleStickChartWithAnnotation);

/***/ }),

/***/ "./components/Charts2/helpers.js":
/*!***************************************!*\
  !*** ./components/Charts2/helpers.js ***!
  \***************************************/
/*! exports provided: timeCompare, getYRangeNums, findYValSell, findYValBuy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeCompare", function() { return timeCompare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getYRangeNums", function() { return getYRangeNums; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findYValSell", function() { return findYValSell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findYValBuy", function() { return findYValBuy; });
var timeCompare = function timeCompare(d, datu, timeframe) {
  var MS_PER_MINUTE = 60000;
  var coeffFive = 1000 * 60 * 5;
  var coeffOne = 1000 * 60 * 5;

  if (timeframe == "1m") {
    return Math.round(d.date.getTime() / coeffOne) * coeffOne === Math.round(datu.getTime() / coeffOne) * coeffOne;
  }

  if (timeframe == "5m") {
    return Math.round(d.date.getTime() / coeffFive) * coeffFive === Math.round(datu.getTime() / coeffFive) * coeffFive;
  }

  if (timeframe == "1h") {
    return d.date.getHours() === datu.getHours() && d.date.getDate() === datu.getDate();
  }

  if (timeframe == "1d") {
    return d.date.getDate() === datu.getDate();
  }
};
var getYRangeNums = function getYRangeNums(data) {
  var lowNum;
  var highNum;

  for (var i = 0; i < data.length; i++) {
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
      var arr = [];
      arr.push(lowNum);
      arr.push(highNum);
      console.log(arr);
      return arr;
    }
  }
};
var findYValSell = function findYValSell(yLow, yHigh, price) {
  var fullRange = yHigh - yLow;
  var myRange = yHigh - price;
  return myRange / (fullRange * 1.5);
};
var findYValBuy = function findYValBuy(yLow, yHigh, price) {
  var fullRange = yHigh - yLow;
  var myRange = yHigh - price;
  return myRange / (fullRange / 1.5);
};

/***/ }),

/***/ "./components/Charts2/index.js":
/*!*************************************!*\
  !*** ./components/Charts2/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ChartComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ChartDemo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChartDemo */ "./components/Charts2/ChartDemo.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./components/Charts2/utils.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_stockcharts_lib_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-stockcharts/lib/helper */ "react-stockcharts/lib/helper");
/* harmony import */ var react_stockcharts_lib_helper__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_stockcharts_lib_helper__WEBPACK_IMPORTED_MODULE_5__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var ChartComponent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ChartComponent, _React$Component);

  function ChartComponent(props) {
    _classCallCheck(this, ChartComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(ChartComponent).call(this, props)); // state = {};
  }

  _createClass(ChartComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // getData().then(data => {
      //   console.log(data);
      //   this.setState({ data });
      // });
      console.log(this.props);
      console.log(this.props.trades, "MY TRADES");
      var startTime = new Date(this.props.trades[0].timestamp);
      var endTime = new Date(this.props.trades[this.props.trades.length - 1].timestamp);
      var diffMs = Math.abs(startTime - endTime);
      var diffSecs = diffMs / 1000;
      var diffMins = Math.round(diffSecs / 60); // minutes
      // var diffHrs = Math.round(diffMins / 60); // hours
      // let myTimeframe = "1m";
      // console.log(diffMins, "DIFFMINS");

      try {
        if (diffMins < 60) {
          //   this.setState({ candleData: this.props.onemin });
          var allExec = [];

          for (var i = 0; i < this.props.onemin.length; i++) {
            var trade = this.props.onemin[i];
            var newTrade = {};
            newTrade.date = new Date(trade.timestamp);
            newTrade.open = parseFloat(trade.open);
            newTrade.close = parseFloat(trade.close);
            newTrade.high = parseFloat(trade.high);
            newTrade.low = parseFloat(trade.low);
            var strt = new Date(this.props.trades[0].timestamp);
            var end = new Date(this.props.trades[this.props.trades.length - 1].timestamp);
            var compare1 = newTrade.date - strt;
            var compare2 = newTrade.date - end;

            if (compare1 > 0 && compare2 < 0) {
              allExec.unshift(newTrade);
            }

            if (i == this.props.onemin.length - 1) {
              var timeframe = "1m";
              this.setState({
                trades: this.props.trades,
                newDat: allExec,
                timeframe: timeframe
              });
              console.log(this.state, "THIS STATE " + timeframe);
            }
          }
        }

        if (diffMins >= 60 && diffMins < 60 * 10) {
          //   this.setState({ candleData: this.props.fivemin });
          var _allExec = [];

          for (var _i = 0; _i < this.props.fivemin.length; _i++) {
            var _trade = this.props.fivemin[_i];
            var _newTrade = {};
            _newTrade.date = new Date(_trade.timestamp);
            _newTrade.open = parseFloat(_trade.open);
            _newTrade.close = parseFloat(_trade.close);
            _newTrade.high = parseFloat(_trade.high);
            _newTrade.low = parseFloat(_trade.low);

            var _strt = new Date(this.props.trades[0].timestamp);

            var _end = new Date(this.props.trades[this.props.trades.length - 1].timestamp);

            var _compare = _newTrade.date - _strt;

            var _compare2 = _newTrade.date - _end;

            if (_compare > 0 && _compare2 < 0) {
              _allExec.unshift(_newTrade);
            }

            if (_i == this.props.fivemin.length - 1) {
              var _timeframe = "5m";
              this.setState({
                trades: this.props.trades,
                newDat: _allExec,
                timeframe: _timeframe
              });
              console.log(this.state, "THIS STATE " + _timeframe);
            }
          }
        }

        var day = 60 * 24;

        if (diffMins >= 60 * 10 && diffMins < day * 4) {
          //   this.setState({ candleData: this.props.onehour });
          var _allExec2 = [];

          for (var _i2 = 0; _i2 < this.props.onehour.length; _i2++) {
            var _trade2 = this.props.onehour[_i2];
            var _newTrade2 = {};
            _newTrade2.date = new Date(_trade2.timestamp);
            _newTrade2.open = parseFloat(_trade2.open);
            _newTrade2.close = parseFloat(_trade2.close);
            _newTrade2.high = parseFloat(_trade2.high);
            _newTrade2.low = parseFloat(_trade2.low);

            var _strt2 = new Date(this.props.trades[0].timestamp);

            var _end2 = new Date(this.props.trades[this.props.trades.length - 1].timestamp);

            var _compare3 = _newTrade2.date - _strt2;

            var _compare4 = _newTrade2.date - _end2;

            if (_compare3 > 0 && _compare4 < 0) {
              _allExec2.unshift(_newTrade2);
            }

            if (_i2 == this.props.onehour.length - 1) {
              var _timeframe2 = "1h";
              this.setState({
                trades: this.props.trades,
                newDat: _allExec2,
                timeframe: _timeframe2
              });
              console.log(this.state, "THIS STATE " + _timeframe2);
            }
          }
        }

        if (diffMins >= day * 4) {
          //   this.setState({ candleData: this.props.oneday });
          var _allExec3 = [];

          for (var _i3 = 0; _i3 < this.props.oneday.length; _i3++) {
            var _trade3 = this.props.oneday[_i3];
            var _newTrade3 = {};
            _newTrade3.date = new Date(_trade3.timestamp);
            _newTrade3.open = parseFloat(_trade3.open);
            _newTrade3.close = parseFloat(_trade3.close);
            _newTrade3.high = parseFloat(_trade3.high);
            _newTrade3.low = parseFloat(_trade3.low);

            var _strt3 = new Date(this.props.trades[0].timestamp);

            var _end3 = new Date(this.props.trades[this.props.trades.length - 1].timestamp);

            var _compare5 = _newTrade3.date - _strt3;

            var _compare6 = _newTrade3.date - _end3;

            if (_compare5 > 0 && _compare6 < 0) {
              _allExec3.unshift(_newTrade3);
            }

            if (_i3 == this.props.oneday.length - 1) {
              var _timeframe3 = "1d";
              this.setState({
                trades: this.props.trades,
                newDat: _allExec3,
                timeframe: _timeframe3
              });
              console.log(this.state, "THIS STATE " + _timeframe3);
            }
          }
        }
      } catch (err) {
        console.log(err); // let allExec = [];
        // for (let i = 0; i < this.props.fivemin.length; i++) {
        //   let trade = this.props.fivemin[i];
        //   let newTrade = {};
        //   newTrade.date = new Date(trade.timestamp);
        //   newTrade.open = parseFloat(trade.open);
        //   newTrade.close = parseFloat(trade.close);
        //   newTrade.high = parseFloat(trade.high);
        //   newTrade.low = parseFloat(trade.low);
        //   let strt = new Date(this.props.trades[0].timestamp);
        //   let end = new Date(
        //     this.props.trades[this.props.trades.length - 1].timestamp
        //   );
        //   // console.log(strt, end, newTrade.date);
        //   let compare1 = newTrade.date - strt;
        //   let compare2 = newTrade.date - end;
        //   // console.log(compare1, compare2);
        //   if (compare1 > 0 && compare2 < 0) {
        //     allExec.unshift(newTrade);
        //   }
        //   if (i == this.props.fivemin.length - 1) {
        //     let timeframe = "5m";
        //     this.setState({
        //       trades: this.props.trades,
        //       newDat: allExec,
        //       timeframe: timeframe
        //     });
        //     console.log(allExec);
        //     console.log(this.props.trades);
        //     console.log(timeframe);
        //     console.log(this.state, "THIS STATE err " + timeframe);
        //   }
        // }
      } //  finally {
      //   if (this.state == null) {
      //     let allExec = [];
      //     for (let i = 0; i < this.props.onehour.length; i++) {
      //       let trade = this.props.onehour[i];
      //       let newTrade = {};
      //       newTrade.date = new Date(trade.timestamp);
      //       newTrade.open = parseFloat(trade.open);
      //       newTrade.close = parseFloat(trade.close);
      //       newTrade.high = parseFloat(trade.high);
      //       newTrade.low = parseFloat(trade.low);
      //       let strt = new Date(this.props.trades[0].timestamp);
      //       let end = new Date(
      //         this.props.trades[this.props.trades.length - 1].timestamp
      //       );
      //       // console.log(strt, end, newTrade.date);
      //       let compare1 = newTrade.date - strt;
      //       let compare2 = newTrade.date - end;
      //       // console.log(compare1, compare2);
      //       if (compare1 > 0 && compare2 < 0) {
      //         allExec.unshift(newTrade);
      //       }
      //       if (i == this.props.onehour.length - 1) {
      //         let timeframe = "1h";
      //         this.setState({
      //           trades: this.props.trades,
      //           newDat: allExec,
      //           timeframe: timeframe
      //         });
      //         console.log(allExec);
      //         console.log(this.state, "THIS STATE finally " + timeframe);
      //       }
      //     }
      //   }
      // }

    }
  }, {
    key: "render",
    value: function render() {
      if (this.state == null) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Alert"], {
          color: "light"
        }, "Can't render chart. We don't have small enough candlestick data going back to that date.");
      }

      if (!this.state.newDat[0]) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Alert"], {
          color: "light"
        }, "Can't render chart. We don't have small enough candlestick data going back to that date.");
      }

      console.log(this.state.newDat);
      return (// <TypeChooser>
        //   {type => (
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ChartDemo__WEBPACK_IMPORTED_MODULE_2__["default"], {
          type: "hybrid",
          data: this.state.newDat,
          trades: this.state.trades,
          timeframe: this.state.timeframe
        }) //   )}
        // </TypeChooser>

      );
    }
  }]);

  return ChartComponent;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component); // render(<ChartComponent />, document.getElementById("root"));




/***/ }),

/***/ "./components/Charts2/utils.js":
/*!*************************************!*\
  !*** ./components/Charts2/utils.js ***!
  \*************************************/
/*! exports provided: getData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getData", function() { return getData; });
/* harmony import */ var d3_dsv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-dsv */ "d3-dsv");
/* harmony import */ var d3_dsv__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(d3_dsv__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var d3_time_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-time-format */ "d3-time-format");
/* harmony import */ var d3_time_format__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(d3_time_format__WEBPACK_IMPORTED_MODULE_1__);



function parseData(parse) {
  return function (d) {
    d.date = parse(d.date);
    d.open = +d.open;
    d.high = +d.high;
    d.low = +d.low;
    d.close = +d.close;
    d.volume = +d.volume;
    return d;
  };
}

var parseDate = Object(d3_time_format__WEBPACK_IMPORTED_MODULE_1__["timeParse"])("%Y-%m-%d");
function getData() {
  var promiseMSFT = fetch("https://cdn.rawgit.com/rrag/react-stockcharts/master/docs/data/MSFT.tsv").then(function (response) {
    return response.text();
  }).then(function (data) {
    return Object(d3_dsv__WEBPACK_IMPORTED_MODULE_0__["tsvParse"])(data, parseData(parseDate));
  });
  return promiseMSFT;
}

/***/ }),

/***/ "./components/Dashboard/AddApiForm.js":
/*!********************************************!*\
  !*** ./components/Dashboard/AddApiForm.js ***!
  \********************************************/
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
/* harmony import */ var _Form2_FormWrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Form2/FormWrapper */ "./components/Form2/FormWrapper.js");
/* harmony import */ var _Form2_Input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Form2/Input */ "./components/Form2/Input.js");
/* harmony import */ var _form_Label__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../form/Label */ "./components/form/Label.js");
/* harmony import */ var _shared_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/Button */ "./components/shared/Button.js");


function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n          mutation addApiKey($key: String!, $secret: String!) {\n            addApiKey(key: $key, secret: $secret)\n          }\n        "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n          mutation {\n            populate\n          }\n        "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n        mutation addApiKey($key: String!, $secret: String!) {\n          addApiKey(key: $key, secret: $secret)\n        }\n      "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






 // import { observer } from "mobx-react-lite";
// import { UserStoreContext } from "../stores/UserStore.ts";







var Cookie = __webpack_require__(/*! js-cookie */ "js-cookie");

var ApiKeyForm = function ApiKeyForm() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      res = _useState2[0],
      setRes = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      _useState4 = _slicedToArray(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      _useState6 = _slicedToArray(_useState5, 2),
      notSubmitted = _useState6[0],
      setNotSubmitted = _useState6[1];

  function handleSubmit(_x, _x2) {
    return _handleSubmit.apply(this, arguments);
  }

  function _handleSubmit() {
    _handleSubmit = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event, client) {
      var form, formData, key, secret, apiRes;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();
              setNotSubmitted(false);
              form = event.target;
              formData = new window.FormData(form);
              key = formData.get("key");
              secret = formData.get("secret"); // console.log(email, password);

              form.reset(); //check if api key is valid

              apiRes = client.mutate({
                mutation: graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject()),
                variables: {
                  key: key,
                  secret: secret
                }
              });
              apiRes.then(function (apiRes) {
                console.log("<<RES>>");
                console.log(apiRes.data.addApiKey);
                console.log(_typeof(apiRes.data.addApiKey));
                var isTrue = apiRes.data.addApiKey == true;
                console.log(isTrue);
                setRes(isTrue);
                setLoading(false);
              }).catch(function (apiRes) {
                var isTrue = apiRes.data.addApiKey == true;
                console.log(isTrue);
                setRes(isTrue);
                setLoading(false);
              });

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _handleSubmit.apply(this, arguments);
  }

  if (notSubmitted == true) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["ApolloConsumer"], null, function (client) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Alert"], {
        color: "info"
      }, "Add a Bitmex api key to import your recent trades and to automatically populate your future trades into the platform."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Alert"], {
        color: "info"
      }, "Note: We keep the keys encrypted in out database, however, make sure to leave \"withdrawals allowed\" UNCHECKED anyways when choosing key settings.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Form2_FormWrapper__WEBPACK_IMPORTED_MODULE_8__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledForm, {
        onSubmit: function onSubmit(event) {
          return handleSubmit(event, client);
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(InputWrapper, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_form_Label__WEBPACK_IMPORTED_MODULE_10__["default"], null, "key"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Form2_Input__WEBPACK_IMPORTED_MODULE_9__["default"], {
        placeholder: "",
        name: "key",
        type: "text",
        required: true
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(InputWrapper, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_form_Label__WEBPACK_IMPORTED_MODULE_10__["default"], null, "secret"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Form2_Input__WEBPACK_IMPORTED_MODULE_9__["default"], {
        placeholder: "",
        name: "secret",
        type: "text",
        required: true
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          display: "flex",
          width: "100%"
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SubmitButton, {
        type: "submit"
      }, "Submit")))));
    });
  }

  if (loading == true) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "loading");
  } else {
    if (res == false) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "error submitting, please reload page and try again");
    }

    if (res == true) {
      console.log("IN TRUE");
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["ApolloConsumer"], null, function (client) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Populate, {
          client: client
        });
      });
    }
  }
};

var Populate = function Populate(_ref) {
  var client = _ref.client;

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState8 = _slicedToArray(_useState7, 2),
      res = _useState8[0],
      setRes = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      _useState10 = _slicedToArray(_useState9, 2),
      loading = _useState10[0],
      setLoading = _useState10[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (loading == true) {
      console.log("IN POPULATE");
      var myClient = client;
      var apiRes = myClient.mutate({
        mutation: graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject2())
      });
      apiRes.then(function (reso) {
        console.log("<<API RES>>");
        console.log(reso);
        console.log(reso.data.populate);
        setRes(reso.data.populate);
        setLoading(false);
      });
    }
  }, []);

  var resetApi =
  /*#__PURE__*/
  function () {
    var _ref2 = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(client) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              console.log("RESETTING");
              return _context3.abrupt("return", new Promise(
              /*#__PURE__*/
              function () {
                var _ref3 = _asyncToGenerator(
                /*#__PURE__*/
                _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(resolve) {
                  var key, secret, myRes;
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          key = "none";
                          secret = "none";
                          myRes = client.mutate({
                            mutation: graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject3()),
                            variables: {
                              key: key,
                              secret: secret
                            }
                          });
                          _context2.next = 5;
                          return myRes;

                        case 5:
                          return _context2.abrupt("return", _context2.sent);

                        case 6:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2);
                }));

                return function (_x4) {
                  return _ref3.apply(this, arguments);
                };
              }()));

            case 2:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function resetApi(_x3) {
      return _ref2.apply(this, arguments);
    };
  }();

  if (loading == true) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "loading");
  } else {
    if (res == false) {
      resetApi(client);
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "api key not valid - reload and try again");
    } else {
      //   return <div>api key valid</div>;
      location.reload();
    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (ApiKeyForm);
var StyledForm = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.form.withConfig({
  displayName: "AddApiForm__StyledForm",
  componentId: "z7z7vm-0"
})(["display:flex;flex-direction:column;align-items:flex-start;", ";"], function (props) {
  return props.loading && "filter: grayscale(0.5) blur(5px) opacity(0.6); pointer-events: none";
});
var SubmitButton = styled_components__WEBPACK_IMPORTED_MODULE_7___default()(_shared_Button__WEBPACK_IMPORTED_MODULE_11__["default"]).withConfig({
  displayName: "AddApiForm__SubmitButton",
  componentId: "z7z7vm-1"
})(["align-self:flex-end;margin-right:0px;margin-left:auto;"]);
var InputWrapper = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.div.withConfig({
  displayName: "AddApiForm__InputWrapper",
  componentId: "z7z7vm-2"
})(["position:relative;margin-bottom:24px;width:100%;"]);

/***/ }),

/***/ "./components/Dashboard/DashInitialTerms.js":
/*!**************************************************!*\
  !*** ./components/Dashboard/DashInitialTerms.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DashInitialTerms; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../theme */ "./components/theme.js");
/* harmony import */ var _FetchQuery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FetchQuery */ "./components/Dashboard/FetchQuery.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mobx-react */ "mobx-react");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _stores_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../stores/store */ "./stores/store.js");
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









var Cookie = __webpack_require__(/*! js-cookie */ "js-cookie");

var DashInitialTerms = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_5__["inject"])("store"), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_5__["observer"])(_class =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DashInitialTerms, _React$Component);

  function DashInitialTerms(props) {
    var _this;

    _classCallCheck(this, DashInitialTerms);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DashInitialTerms).call(this, props));
    _this.state = {};
    return _this;
  }

  _createClass(DashInitialTerms, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var cook = Cookie.get("isAuth") == "true";

      if (!cook) {
        next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/");
      } else if (!!cook) {
        this.setState({
          isAuth: cook
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
        theme: Object(_theme__WEBPACK_IMPORTED_MODULE_2__["default"])(false)
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FetchQuery__WEBPACK_IMPORTED_MODULE_3__["default"], null));
    }
  }]);

  return DashInitialTerms;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component)) || _class) || _class);


/***/ }),

/***/ "./components/Dashboard/FetchQuery.js":
/*!********************************************!*\
  !*** ./components/Dashboard/FetchQuery.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Charts_ReChart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Charts/ReChart */ "./components/Charts/ReChart.js");
/* harmony import */ var _Categories_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Categories/Menu */ "./components/Categories/Menu.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mobx-react */ "mobx-react");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Helpers_Functions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Helpers/Functions */ "./components/Helpers/Functions.js");
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! fast-deep-equal */ "fast-deep-equal");
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(fast_deep_equal__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _AddApiForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./AddApiForm */ "./components/Dashboard/AddApiForm.js");
var _dec, _class, _temp, _dec2, _class3;



function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query fetchTradeHistory($start: String!, $end: String!) {\n    checkApiKey\n\n    fetchTradeHistory(start: $start, end: $end) {\n      id\n      timestamp\n      side\n      price\n      orderQty\n      leavesQty\n      currentQty\n      avgEntryPrice\n      execGrossPnl\n      realizedPnl\n      commission\n      execType\n      orderType\n      trdStart\n      trdEnd\n      notes\n      hashtags\n    }\n\n    fetchOneMinuteCandleHistory(start: $start, end: $end) {\n      id\n      timestamp\n      symbol\n      timeframe\n      open\n      high\n      low\n      close\n      trades\n      volume\n      vwap\n      lastSize\n      homeNotional\n      foreignNotional\n    }\n\n    fetchOneHourCandleHistory(start: $start, end: $end) {\n      id\n      timestamp\n      symbol\n      timeframe\n      open\n      high\n      low\n      close\n      trades\n      volume\n      vwap\n      lastSize\n      homeNotional\n      foreignNotional\n    }\n\n    fetchOneDayCandleHistory(start: $start, end: $end) {\n      id\n      timestamp\n      symbol\n      timeframe\n      open\n      high\n      low\n      close\n      trades\n      volume\n      vwap\n      lastSize\n      homeNotional\n      foreignNotional\n    }\n\n    fetchFiveMinuteCandleHistory(start: $start, end: $end) {\n      id\n      timestamp\n      symbol\n      timeframe\n      open\n      high\n      low\n      close\n      trades\n      volume\n      vwap\n      lastSize\n      homeNotional\n      foreignNotional\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }










 // import { pushGlobalHash } from "../../stores/store";
// import { useState, useEffect } from "react";
// import { storesContext } from "../../stores/UserStore";

var FetchQuery = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_6__["inject"])(["store"]), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_6__["observer"])(_class = (_temp =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FetchQuery, _React$Component);

  function FetchQuery(props) {
    var _this;

    _classCallCheck(this, FetchQuery);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FetchQuery).call(this, props));

    _this.clicked = function () {
      store.isAuth = !store.isAuth;
      console.log(store.isAuth);
    };

    _this.state = {
      startDate: "",
      endDate: "",
      date: ""
    };
    return _this;
  }

  _createClass(FetchQuery, [{
    key: "componentDidMount",
    value: function componentDidMount() {// console.log(this.props.store);
      // try {
      //   let myStorage = window.localStorage;
      //   let theDate = myStorage.getItem("store");
      //   let obj = JSON.parse(theDate);
      //   console.log(obj);
      //   this.setState({
      //     startDate: obj.startDate,
      //     endDate: obj.endDate
      //   });
      //   console.log("SUCCESS");
      //   console.log(obj.startDate);
      //   console.log(obj.endDate);
      // } catch (err) {
      //   let theDates = getStateDate(2);
      //   this.setState({
      //     startDate: theDates.startDate,
      //     endDate: theDates.endDate
      //   });
      //   console.log("FAILED");
      // }
    }
  }, {
    key: "render",
    value: function render() {
      var fetchTradeHistoryVariables = {
        start: this.props.store.startDate,
        end: this.props.store.endDate
      };
      console.log(fetchTradeHistoryQuery); // let fetchTradeHistoryVariables = {
      //   start: "2020-02-24T12:43:56.702Z",
      //   end: "2020-02-26T15:01:59.727Z"
      // };

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comp, {
        query: fetchTradeHistoryQuery,
        vars: fetchTradeHistoryVariables
      }));
    }
  }]);

  return FetchQuery;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component), _temp)) || _class) || _class);
var Comp = (_dec2 = Object(mobx_react__WEBPACK_IMPORTED_MODULE_6__["inject"])(["store"]), _dec2(_class3 = Object(mobx_react__WEBPACK_IMPORTED_MODULE_6__["observer"])(_class3 =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(Comp, _React$Component2);

  function Comp(props) {
    var _this2;

    _classCallCheck(this, Comp);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(Comp).call(this, props));
    _this2.state = {
      globalHash: [],
      globalHashActive: ["all"]
    };
    _this2.getGlobalHashtags = _this2.getGlobalHashtags.bind(_assertThisInitialized(_this2));
    _this2.hashtagClicked = _this2.hashtagClicked.bind(_assertThisInitialized(_this2));
    return _this2;
  }

  _createClass(Comp, [{
    key: "getGlobalHashtags",
    value: function getGlobalHashtags(data) {
      for (var i = 0; i < data.fetchTradeHistory.length; i++) {
        var thisTradeHash = data.fetchTradeHistory[i].hashtags.split(",");

        if (thisTradeHash != "undefined") {
          for (var j = 0; j < thisTradeHash.length; j++) {
            if (thisTradeHash[j] != "undefined") {
              this.state.globalHash.push(thisTradeHash[j]);
            }
          }
        }
      }
    }
  }, {
    key: "hashtagClicked",
    value: function hashtagClicked(value) {
      console.log(this.state.globalHashActive);
      console.log(this.state.globalHash);

      if (this.state.globalHashActive[0] == undefined) {
        this.state.globalHashActive.push(value);
        var index = this.state.globalHash.indexOf(value);

        if (index > -1) {
          this.state.globalHash.splice(index, 1); // this.state.globalHash.push(value)
        }

        return;
      }

      for (var i = 0; i < this.state.globalHashActive.length; i++) {
        if (this.state.globalHashActive[i] == "all") {
          this.state.globalHashActive = [];
        }

        if (value == this.state.globalHashActive[i]) {
          return;
        }

        if (i == this.state.globalHashActive.length - 1) {
          console.log("ENDING");

          var _index = this.state.globalHash.indexOf(value);

          if (_index > -1) {
            this.state.globalHash.splice(_index, 1);
          }

          console.log(_index, "INDEX");
          this.state.globalHashActive.push(value);
          return;
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
        query: this.props.query,
        variables: this.props.vars
      }, function (_ref) {
        var loading = _ref.loading,
            error = _ref.error,
            data = _ref.data;
        if (error) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "no data loaded");
        if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Loading");
        console.log(data);
        console.log("<<DATA ABOVE>>");

        if (data.checkApiKey == false) {
          console.log("is false");
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AddApiForm__WEBPACK_IMPORTED_MODULE_9__["default"], null);
        } else {
          // console.log("is true");
          _this3.getGlobalHashtags(data);

          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapper, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ChartWrapper, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TopHashtagDiv, null, _this3.state.globalHashActive.map(function (hash) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TopHashtagIndividualActive, null, "#", hash);
          }), _this3.state.globalHash.map(function (hash) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TopHashtagIndividual, {
              onClick: function onClick() {
                return _this3.hashtagClicked(hash);
              }
            }, "#", hash);
          })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Charts_ReChart__WEBPACK_IMPORTED_MODULE_2__["ContainDivHeader"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Charts_ReChart__WEBPACK_IMPORTED_MODULE_2__["NextToDivHeader"], null, "Start"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Charts_ReChart__WEBPACK_IMPORTED_MODULE_2__["NextToDivHeader"], null, "End"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Charts_ReChart__WEBPACK_IMPORTED_MODULE_2__["NextToDivHeader"], null, "Direction"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Charts_ReChart__WEBPACK_IMPORTED_MODULE_2__["NextToDivHeader"], null, "Avg Entry"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Charts_ReChart__WEBPACK_IMPORTED_MODULE_2__["NextToDivHeader"], null, "Avg Exit"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Charts_ReChart__WEBPACK_IMPORTED_MODULE_2__["NextToDivHeader"], null, "Qty"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Charts_ReChart__WEBPACK_IMPORTED_MODULE_2__["NextToDivHeader"], null, "Realized Pnl")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Charts_ReChart__WEBPACK_IMPORTED_MODULE_2__["default"], {
            data: data
          })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Categories_Menu__WEBPACK_IMPORTED_MODULE_3__["default"], null));
        }
      });
    }
  }]);

  return Comp;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component)) || _class3) || _class3);
/* harmony default export */ __webpack_exports__["default"] = (FetchQuery);
var fetchTradeHistoryQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject());
var TopHashtagDiv = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "FetchQuery__TopHashtagDiv",
  componentId: "sc-1g6l220-0"
})(["display:flex;flex-direction:row;margin-bottom:8px;"]);
var TopHashtagIndividual = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "FetchQuery__TopHashtagIndividual",
  componentId: "sc-1g6l220-1"
})(["background:#f8f8ff;color:#000;padding:8px;margin:0 10px;border-radius:2px;:hover{cursor:pointer;}"]);
var TopHashtagIndividualActive = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "FetchQuery__TopHashtagIndividualActive",
  componentId: "sc-1g6l220-2"
})(["background:#212528;color:#fff;padding:8px;margin:0 10px;border-radius:2px;:hover{cursor:pointer;}"]);
var ChartWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "FetchQuery__ChartWrapper",
  componentId: "sc-1g6l220-3"
})(["background:white;padding:5px;width:100%;@media (max-width:768px){margin:0 5vw;}"]);
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "FetchQuery__Wrapper",
  componentId: "sc-1g6l220-4"
})(["display:flex;align-items:flex-align;"]);

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

/***/ "./components/Helpers/Functions.js":
/*!*****************************************!*\
  !*** ./components/Helpers/Functions.js ***!
  \*****************************************/
/*! exports provided: formatDateMonthOnly, getStateDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDateMonthOnly", function() { return formatDateMonthOnly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStateDate", function() { return getStateDate; });
function formatDateMonthOnly(date) {
  var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
  var theDate = new Date(date);
  var day = theDate.getDate();
  var hours = theDate.getHours();
  var mins = theDate.getMinutes();
  var monthIndex = theDate.getMonth();
  var year = theDate.getFullYear();
  return day + " " + monthNames[monthIndex] + ", " + hours + ":" + mins;
}
function getStateDate(input) {
  if (input == 1) {
    var dates = {};
    dates.end = makeDateHrs(0);
    dates.start = makeDateHrs(24);
    console.log("is today");
    return dates;
  }

  if (input == 2) {
    var _dates = {};
    _dates.end = makeDateHrs(1);
    _dates.start = makeDateDays(2);
    console.log("is yesterday");
    return _dates;
  }

  if (input == 3) {
    var _dates2 = {};
    _dates2.end = makeDateHrs(0);
    _dates2.start = makeDateDays(7);
    console.log("is this week");
    return _dates2;
  }

  if (input == 4) {
    var _dates3 = {};
    _dates3.end = makeDateHrs(0);
    _dates3.start = makeDateDays(30);
    console.log("is this month");
    return _dates3;
  }
}

function makeDateHrs(hrsBack) {
  if (hrsBack == 0) {
    var dt = new Date(new Date().toUTCString());
    dt = dt.toISOString();
    return dt;
  } else {
    var _dt = new Date(new Date().toUTCString());

    _dt.setHours(_dt.getHours() - hrsBack);

    _dt = _dt.toISOString();
    return _dt;
  }
}

function makeDateDays(num) {
  var dt = new Date(new Date().toUTCString());
  dt.setDate(dt.getDate() - num);
  dt = dt.toISOString();
  console.log("getting days back");
  return dt;
}

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

/***/ "./pages/dashboard.js":
/*!****************************!*\
  !*** ./pages/dashboard.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return dashboard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Dashboard_DashInitialTerms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Dashboard/DashInitialTerms */ "./components/Dashboard/DashInitialTerms.js");
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/App */ "./components/App.js");
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header/Header */ "./components/Header/Header.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/theme */ "./components/theme.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles.css */ "./styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_6__);






 // const Cookie = require("js-cookie");
// import Router from "next/router";

function dashboard(_ref) {
  var initialState = _ref.initialState;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_App__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header_Header__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_4__["ThemeProvider"], {
    theme: _components_theme__WEBPACK_IMPORTED_MODULE_5__["default"]
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapper, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Dashboard_DashInitialTerms__WEBPACK_IMPORTED_MODULE_1__["default"], null))));
}
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "dashboard__Wrapper",
  componentId: "dqnkpe-0"
})(["display:flex;align-items:flex-start;margin:0 10vw;@media (max-width:1024px){margin:0 5vw;}@media (max-width:768px){display:block;margin:0;}"]);

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
var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _temp;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }






var isServer = !false;
Object(mobx_react__WEBPACK_IMPORTED_MODULE_1__["useStaticRendering"])(isServer);
var Store = (_class = (_temp = function Store() {
  _classCallCheck(this, Store);

  _initializerDefineProperty(this, "lastUpdate", _descriptor, this);

  _initializerDefineProperty(this, "light", _descriptor2, this);

  _initializerDefineProperty(this, "isAuth", _descriptor3, this);

  _initializerDefineProperty(this, "startDate", _descriptor4, this);

  _initializerDefineProperty(this, "endDate", _descriptor5, this);

  _initializerDefineProperty(this, "date", _descriptor6, this);

  _initializerDefineProperty(this, "pnl", _descriptor7, this);

  _initializerDefineProperty(this, "globalHash", _descriptor8, this);

  _initializerDefineProperty(this, "changeDate", _descriptor9, this);

  _initializerDefineProperty(this, "addPnl", _descriptor10, this);

  _initializerDefineProperty(this, "resetPnl", _descriptor11, this);

  _initializerDefineProperty(this, "pushGlobalHash", _descriptor12, this);
} //   constructor(isServer, initialData = {}) {
//     this.lastUpdate =
//       initialData.lastUpdate != null ? initialData.lastUpdate : Date.now();
//     this.light = !!initialData.light;
//   }
//   @action start = () => {
//     this.timer = setInterval(() => {
//       this.lastUpdate = Date.now();
//       this.light = true;
//     }, 1000);
//   };
//   stop = () => clearInterval(this.timer);
, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "lastUpdate", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return 0;
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "light", [mobx_persist__WEBPACK_IMPORTED_MODULE_2__["persist"], mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "isAuth", [mobx_persist__WEBPACK_IMPORTED_MODULE_2__["persist"], mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "startDate", [mobx_persist__WEBPACK_IMPORTED_MODULE_2__["persist"], mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return "2020-02-24T12:43:56.702Z";
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "endDate", [mobx_persist__WEBPACK_IMPORTED_MODULE_2__["persist"], mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return "2020-02-28T12:43:56.702Z";
  }
}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "date", [mobx_persist__WEBPACK_IMPORTED_MODULE_2__["persist"], mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return 1;
  }
}), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "pnl", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return 0;
  }
}), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "globalHash", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, "changeDate", [mobx__WEBPACK_IMPORTED_MODULE_0__["action"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    var _this = this;

    return function (newDate) {
      var dates = Object(_components_Helpers_Functions__WEBPACK_IMPORTED_MODULE_4__["getStateDate"])(newDate);
      _this.date = newDate;
      _this.startDate = dates.start;
      _this.endDate = dates.end;
    };
  }
}), _descriptor10 = _applyDecoratedDescriptor(_class.prototype, "addPnl", [mobx__WEBPACK_IMPORTED_MODULE_0__["action"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    var _this2 = this;

    return function (pnl) {
      _this2.pnl += pnl;
    };
  }
}), _descriptor11 = _applyDecoratedDescriptor(_class.prototype, "resetPnl", [mobx__WEBPACK_IMPORTED_MODULE_0__["action"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    var _this3 = this;

    return function () {
      _this3.pnl = 0;
    };
  }
}), _descriptor12 = _applyDecoratedDescriptor(_class.prototype, "pushGlobalHash", [mobx__WEBPACK_IMPORTED_MODULE_0__["action"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    var _this4 = this;

    return function (hash) {
      _this4.globalHash.push(hash);
    };
  }
})), _class);
var store = null;
var hydrate = Object(mobx_persist__WEBPACK_IMPORTED_MODULE_2__["create"])();
var StoreContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["createContext"])(new Store());
function initializeStore(initialData) {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return new Store(isServer, initialData);
  }

  if (store === null) {
    store = new Store(isServer, initialData);
  }

  hydrate("store", store).then(function () {
    console.log("someStore has been hydrated");
  });
  return store;
}

/***/ }),

/***/ "./styles.css":
/*!********************!*\
  !*** ./styles.css ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 3:
/*!**********************************!*\
  !*** multi ./pages/dashboard.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/dashboard.js */"./pages/dashboard.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "d3-dsv":
/*!*************************!*\
  !*** external "d3-dsv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("d3-dsv");

/***/ }),

/***/ "d3-format":
/*!****************************!*\
  !*** external "d3-format" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("d3-format");

/***/ }),

/***/ "d3-time-format":
/*!*********************************!*\
  !*** external "d3-time-format" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("d3-time-format");

/***/ }),

/***/ "fast-deep-equal":
/*!**********************************!*\
  !*** external "fast-deep-equal" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fast-deep-equal");

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

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

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

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "react-stockcharts":
/*!************************************!*\
  !*** external "react-stockcharts" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-stockcharts");

/***/ }),

/***/ "react-stockcharts/lib/annotation":
/*!***************************************************!*\
  !*** external "react-stockcharts/lib/annotation" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-stockcharts/lib/annotation");

/***/ }),

/***/ "react-stockcharts/lib/axes":
/*!*********************************************!*\
  !*** external "react-stockcharts/lib/axes" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-stockcharts/lib/axes");

/***/ }),

/***/ "react-stockcharts/lib/coordinates":
/*!****************************************************!*\
  !*** external "react-stockcharts/lib/coordinates" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-stockcharts/lib/coordinates");

/***/ }),

/***/ "react-stockcharts/lib/helper":
/*!***********************************************!*\
  !*** external "react-stockcharts/lib/helper" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-stockcharts/lib/helper");

/***/ }),

/***/ "react-stockcharts/lib/indicator":
/*!**************************************************!*\
  !*** external "react-stockcharts/lib/indicator" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-stockcharts/lib/indicator");

/***/ }),

/***/ "react-stockcharts/lib/scale":
/*!**********************************************!*\
  !*** external "react-stockcharts/lib/scale" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-stockcharts/lib/scale");

/***/ }),

/***/ "react-stockcharts/lib/series":
/*!***********************************************!*\
  !*** external "react-stockcharts/lib/series" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-stockcharts/lib/series");

/***/ }),

/***/ "react-stockcharts/lib/tooltip":
/*!************************************************!*\
  !*** external "react-stockcharts/lib/tooltip" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-stockcharts/lib/tooltip");

/***/ }),

/***/ "react-stockcharts/lib/utils":
/*!**********************************************!*\
  !*** external "react-stockcharts/lib/utils" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-stockcharts/lib/utils");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "recharts":
/*!***************************!*\
  !*** external "recharts" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("recharts");

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
//# sourceMappingURL=dashboard.js.map