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

/***/ "./components/Dashboard/768px/DashboardTest.js":
/*!*****************************************************!*\
  !*** ./components/Dashboard/768px/DashboardTest.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _class; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Tades_Trades__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Tades/Trades */ "./components/Dashboard/Tades/Trades.js");
/* harmony import */ var _Menu_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Menu/Menu */ "./components/Menu/Menu.js");
/* harmony import */ var _Menu_768px_Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Menu/768px/Menu */ "./components/Menu/768px/Menu.js");
/* harmony import */ var _shared_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/helpers */ "./components/Dashboard/shared/helpers.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Notes_NotesTest__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Notes/NotesTest */ "./components/Dashboard/Notes/NotesTest.js");
/* harmony import */ var _Tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Tabs */ "./components/Dashboard/Tabs.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! mobx-react */ "mobx-react");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! mobx */ "mobx");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _shared_helpers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/helpers */ "./components/shared/helpers.js");


var _dec, _class2;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

















var _class = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_12__["inject"])("store"), _dec(_class2 = Object(mobx_react__WEBPACK_IMPORTED_MODULE_12__["observer"])(_class2 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(_class2, _React$Component);

  function _class2(props) {
    var _this;

    _classCallCheck(this, _class2);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(_class2).call(this, props));
    _this.state = {
      globalHash: [],
      globalHashActive: ["all"],
      data: null,
      filteredData: null,
      isSingle: false,
      isSingleNotes: false
    };
    _this.getGlobalHashtags = _this.getGlobalHashtags.bind(_assertThisInitialized(_this));
    _this.hashtagClicked = _this.hashtagClicked.bind(_assertThisInitialized(_this));
    _this.hashtagClickedBack = _this.hashtagClickedBack.bind(_assertThisInitialized(_this));
    _this.updateWindowDimensions = _this.updateWindowDimensions.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(_class2, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.setState({
        data: this.props.data
      });
      this.getGlobalHashtags(this.props.data);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.singleTradeReaction = Object(mobx__WEBPACK_IMPORTED_MODULE_13__["reaction"])(function () {
        return _this2.props.store.hasSingleTrade;
      }, function (notifications, reaction) {
        console.log("HAS SINGLE", _this2.props.store.hasSingleTrade);

        if (_this2.props.store.hasSingleTrade == false) {
          _this2.setState({
            isSingle: false
          });

          console.log("setting back");
        } else {
          _this2.setState({
            isSingle: true,
            singleTrade: _this2.props.store.singleTrade[0]
          });

          console.log(_this2.state, "STATEE");
          console.log("setting back");
        }
      });
      this.singleNotesReaction = Object(mobx__WEBPACK_IMPORTED_MODULE_13__["reaction"])(function () {
        return _this2.props.store.isSingleNotes;
      }, function (notifications, reaction) {
        if (_this2.props.store.isSingleNotes == false) {
          _this2.setState({
            isSingleNotes: false
          });
        } else {
          _this2.setState({
            isSingleNotes: true
          });
        }
      });
      window.addEventListener("resize", this.updateWindowDimensions);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("resize", this.updateWindowDimensions);
    }
  }, {
    key: "updateWindowDimensions",
    value: function updateWindowDimensions() {
      this.setState({
        width: window.innerWidth
      });
    }
  }, {
    key: "getGlobalHashtags",
    value: function () {
      var _getGlobalHashtags = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(data) {
        var i, thisTradeHash, j, newGlobalHash;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                for (i = 0; i < data.fetchTradeHistory.length; i++) {
                  thisTradeHash = data.fetchTradeHistory[i].hashtags.split(",");

                  if (thisTradeHash != "undefined") {
                    for (j = 0; j < thisTradeHash.length; j++) {
                      if (thisTradeHash[j] != "undefined") {
                        newGlobalHash = this.state.globalHash;
                        newGlobalHash.push(thisTradeHash[j]);
                        this.setState({
                          globalHash: newGlobalHash
                        });
                      }
                    }
                  }
                }

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getGlobalHashtags(_x) {
        return _getGlobalHashtags.apply(this, arguments);
      }

      return getGlobalHashtags;
    }()
  }, {
    key: "hashtagClickedBack",
    value: function () {
      var _hashtagClickedBack = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(value) {
        var _this3 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (value == "all") {
                  console.log("DO NOTHING");
                } else {
                  (function () {
                    var newHashActive = [];
                    var newHash = _this3.state.globalHash;

                    for (var i = 0; i < _this3.state.globalHashActive.length; i++) {
                      if (value !== _this3.state.globalHashActive[i]) {
                        newHashActive.push(_this3.state.globalHashActive[i]);
                      } else {
                        newHash.push(_this3.state.globalHashActive[i]);
                      }

                      if (i == _this3.state.globalHashActive.length - 1) {
                        if (newHashActive[0] == undefined) {
                          var newHash2 = [];

                          for (var j = 0; j < newHash.length; j++) {
                            if (newHash[j] != "all") {
                              newHash2.push(newHash[j]);
                            }

                            if (j == newHash.length - 1) {
                              _this3.setState({
                                globalHash: newHash2,
                                globalHashActive: ["all"],
                                filteredData: null
                              });
                            }
                          }
                        } else {
                          (function () {
                            var newHash2 = [];

                            for (var _j = 0; _j < newHash.length; _j++) {
                              if (newHash[_j] != "all") {
                                newHash2.push(newHash[_j]);
                              }

                              if (_j == newHash.length - 1) {
                                Object(_shared_helpers__WEBPACK_IMPORTED_MODULE_5__["getNewDat"])(_this3.state.data, newHashActive).then(function (res) {
                                  _this3.setState({
                                    globalHash: newHash2,
                                    globalHashActive: newHashActive,
                                    filteredData: res
                                  });
                                });
                              }
                            }
                          })();
                        }
                      }
                    }
                  })();
                }

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function hashtagClickedBack(_x2) {
        return _hashtagClickedBack.apply(this, arguments);
      }

      return hashtagClickedBack;
    }()
  }, {
    key: "hashtagClicked",
    value: function () {
      var _hashtagClicked = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(value) {
        var _this4 = this;

        var newGlobalHash, newGlobalHash2, i, j, newArray, index, _newGlobalHash, _i, _index, _index2;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!(value == "all")) {
                  _context3.next = 19;
                  break;
                }

                newGlobalHash = this.state.globalHash;
                newGlobalHash2 = [];
                i = 0;

              case 4:
                if (!(i < this.state.globalHashActive.length)) {
                  _context3.next = 19;
                  break;
                }

                newGlobalHash.push(this.state.globalHashActive[i]);

                if (!(i == this.state.globalHashActive.length - 1)) {
                  _context3.next = 16;
                  break;
                }

                j = 0;

              case 8:
                if (!(j < newGlobalHash.length)) {
                  _context3.next = 16;
                  break;
                }

                if (newGlobalHash[j] != "all") {
                  newGlobalHash2.push(newGlobalHash[j]);
                }

                if (!(j == newGlobalHash.length - 1)) {
                  _context3.next = 13;
                  break;
                }

                this.setState({
                  globalHash: newGlobalHash2,
                  globalHashActive: ["all"],
                  filteredData: null
                });
                return _context3.abrupt("return");

              case 13:
                j++;
                _context3.next = 8;
                break;

              case 16:
                i++;
                _context3.next = 4;
                break;

              case 19:
                if (!(this.state.globalHashActive[0] == undefined)) {
                  _context3.next = 26;
                  break;
                }

                newArray = [];
                newArray.push(value);
                this.setState({
                  globalHashActive: newArray
                });
                index = this.state.globalHash.indexOf(value);

                if (index > -1) {
                  _newGlobalHash = this.state.globalHash;

                  _newGlobalHash.splice(index, 1);

                  this.setState({
                    globalHash: _newGlobalHash
                  });
                }

                return _context3.abrupt("return");

              case 26:
                _i = 0;

              case 27:
                if (!(_i < this.state.globalHashActive.length)) {
                  _context3.next = 35;
                  break;
                }

                if (this.state.globalHashActive[_i] == "all") {
                  this.state.globalHashActive = [];
                  _index = this.state.globalHash.indexOf(value);

                  if (_index > -1) {
                    (function () {
                      var newGlobalHash = _this4.state.globalHash;
                      newGlobalHash.splice(_index, 1);
                      var torf = false;

                      for (var _j2 = 0; _j2 < newGlobalHash.length; _j2++) {
                        if ("all" == newGlobalHash[_j2]) {
                          torf = true;
                        }

                        if (_j2 == newGlobalHash.length - 1 && torf == false) {
                          newGlobalHash.push("all");
                        }
                      }

                      var newGlobalHashActive = _this4.state.globalHashActive;
                      newGlobalHashActive.push(value);
                      Object(_shared_helpers__WEBPACK_IMPORTED_MODULE_5__["getNewDat"])(_this4.state.data, newGlobalHashActive).then(function (newDat) {
                        _this4.setState({
                          globalHashActive: newGlobalHashActive,
                          globalHash: newGlobalHash,
                          filteredData: newDat
                        });

                        return;
                      });
                    })();
                  }
                }

                if (!(value == this.state.globalHashActive[_i])) {
                  _context3.next = 31;
                  break;
                }

                return _context3.abrupt("return");

              case 31:
                if (_i == this.state.globalHashActive.length - 1) {
                  _index2 = this.state.globalHash.indexOf(value);

                  if (_index2 > -1) {
                    (function () {
                      var newGlobalHash = _this4.state.globalHash;
                      newGlobalHash.splice(_index2, 1); // newGlobalHash.push("all");

                      var torf = false;

                      for (var _j3 = 0; _j3 < newGlobalHash.length; _j3++) {
                        if ("all" == newGlobalHash[_j3]) {
                          torf = true;
                        }

                        if (_j3 == newGlobalHash.length - 1 && torf == false) {
                          newGlobalHash.push("all");
                        }
                      }

                      var newGlobalHashActive = _this4.state.globalHashActive;
                      newGlobalHashActive.push(value);
                      Object(_shared_helpers__WEBPACK_IMPORTED_MODULE_5__["getNewDat"])(_this4.state.data, newGlobalHashActive).then(function (newDat) {
                        _this4.setState({
                          globalHashActive: newGlobalHashActive,
                          globalHash: newGlobalHash,
                          filteredData: newDat
                        });

                        return;
                      });
                    })();
                  }
                }

              case 32:
                _i++;
                _context3.next = 27;
                break;

              case 35:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function hashtagClicked(_x3) {
        return _hashtagClicked.apply(this, arguments);
      }

      return hashtagClicked;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      if (this.state.data != null) {
        if (this.state.isSingle == false) {
          console.log("IS SINGLE IS FALSE");
          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Wrapper, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(ChartWrapper, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(TopBarParent, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(TopBarTop, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(TopBarTopLeft, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Menu_768px_Menu__WEBPACK_IMPORTED_MODULE_4__["Pnl768"], null)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(TopBarTopRight, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Menu_768px_Menu__WEBPACK_IMPORTED_MODULE_4__["SymbolChooser768"], null))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(TopBarBottom, null, this.state.globalHashActive.map(function (hash) {
            return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(TopHashtagIndividualActive, {
              onClick: function onClick() {
                return _this5.hashtagClickedBack(hash);
              }
            }, "#", hash);
          }), this.state.globalHash.map(function (hash) {
            return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(TopHashtagIndividual, {
              onClick: function onClick() {
                return _this5.hashtagClicked(hash);
              }
            }, "#", hash);
          }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(WholeGrid, null, this.state.isSingleNotes == false ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Tades_Trades__WEBPACK_IMPORTED_MODULE_2__["ContainDivHeader"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Tades_Trades__WEBPACK_IMPORTED_MODULE_2__["NextToDivHeader"], null, "Start"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Tades_Trades__WEBPACK_IMPORTED_MODULE_2__["NextToDivHeader"], null, "End"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Tades_Trades__WEBPACK_IMPORTED_MODULE_2__["NextToDivHeader"], null, "L/S"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Tades_Trades__WEBPACK_IMPORTED_MODULE_2__["NextToDivHeader"], null, "Entry"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Tades_Trades__WEBPACK_IMPORTED_MODULE_2__["NextToDivHeader"], null, "Exit"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Tades_Trades__WEBPACK_IMPORTED_MODULE_2__["NextToDivHeader"], null, "Qty"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Tades_Trades__WEBPACK_IMPORTED_MODULE_2__["NextToDivHeader"], null, "RPNL")) : null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Tades_Trades__WEBPACK_IMPORTED_MODULE_2__["default"], {
            data: this.state.data,
            filteredData: this.state.filteredData,
            initData: this.props.data
          }))));
        } else {
          console.log("IS SINGLE IS TRUE");
          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Wrapper, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(ChartWrapper, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(TopBarParent, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(TopBarChildBigLeft, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Tabs__WEBPACK_IMPORTED_MODULE_10__["default"], null)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(TopBarChildSmall, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(TopHashtagIndividualActivePnl, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Menu_Menu__WEBPACK_IMPORTED_MODULE_3__["Pnl"], null))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(TopBarChildBigRight, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(RightTabs, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Notes_NotesTest__WEBPACK_IMPORTED_MODULE_9__["default"], {
            firstTrade: this.state.singleTrade
          })))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(WholeGrid, null, this.state.isSingleNotes == false ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Tades_Trades__WEBPACK_IMPORTED_MODULE_2__["ContainDivHeader"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Tades_Trades__WEBPACK_IMPORTED_MODULE_2__["NextToDivHeader"], null, "Start"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Tades_Trades__WEBPACK_IMPORTED_MODULE_2__["NextToDivHeader"], null, "End"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Tades_Trades__WEBPACK_IMPORTED_MODULE_2__["NextToDivHeader"], null, "L/S"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Tades_Trades__WEBPACK_IMPORTED_MODULE_2__["NextToDivHeader"], null, "Entry"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Tades_Trades__WEBPACK_IMPORTED_MODULE_2__["NextToDivHeader"], null, "Exit"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Tades_Trades__WEBPACK_IMPORTED_MODULE_2__["NextToDivHeader"], null, "Qty"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Tades_Trades__WEBPACK_IMPORTED_MODULE_2__["NextToDivHeader"], null, "RPNL")) : null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Tades_Trades__WEBPACK_IMPORTED_MODULE_2__["default"], {
            data: this.state.data,
            filteredData: this.state.filteredData,
            initData: this.props.data
          }))));
        }
      }
    }
  }]);

  return _class2;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component)) || _class2) || _class2);


var SingleTabInner = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "DashboardTest__SingleTabInner",
  componentId: "sc-1dz292n-0"
})(["margin:auto;"]);
var SingleTab = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "DashboardTest__SingleTab",
  componentId: "sc-1dz292n-1"
})(["color:", ";background-color:", ";margin:auto 10px;border-radius:2px;padding:5px;:hover{cursor:pointer;}"], function (props) {
  return props.isActive ? "#fff" : "#000";
}, function (props) {
  return props.isActive ? "#000" : "#fff";
});
var WrapTabs = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "DashboardTest__WrapTabs",
  componentId: "sc-1dz292n-2"
})(["display:flex;flex-direction:row;font-size:15px;"]);
var WholeGrid = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "DashboardTest__WholeGrid",
  componentId: "sc-1dz292n-3"
})([""]); // border: 1px solid #f2f2f2;

var TopBarParent = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "DashboardTest__TopBarParent",
  componentId: "sc-1dz292n-4"
})(["display:flex;flex-direction:column;flex-wrap:wrap;margin-bottom:14px;"]);
var TopBarTop = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "DashboardTest__TopBarTop",
  componentId: "sc-1dz292n-5"
})(["width:100%;display:flex;flex-direction:row;overflow:auto;margin-bottom:5px;"]);
var TopBarBottom = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "DashboardTest__TopBarBottom",
  componentId: "sc-1dz292n-6"
})(["width:100%;display:flex;flex-direction:row;overflow:auto;"]); // flex: 1 1 45%; /*grow | shrink | basis */

var TopBarTopRight = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "DashboardTest__TopBarTopRight",
  componentId: "sc-1dz292n-7"
})(["width:50%;display:flex;flex-direction:row;overflow:auto;"]);
var TopBarTopLeft = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "DashboardTest__TopBarTopLeft",
  componentId: "sc-1dz292n-8"
})(["width:50%;display:flex;flex-direction:row;overflow:auto;", ""], _shared_helpers__WEBPACK_IMPORTED_MODULE_14__["wideFont"]);
var TopBarChildSmall = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "DashboardTest__TopBarChildSmall",
  componentId: "sc-1dz292n-9"
})(["display:flex;flex-direction:row;width:10%;"]);
var TopHashtagIndividual = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "DashboardTest__TopHashtagIndividual",
  componentId: "sc-1dz292n-10"
})(["background:#f8f8ff;color:#000;padding:8px;margin:0 10px;border-radius:2px;", ":hover{cursor:pointer;}margin-left:0;white-space:nowrap;"], _shared_helpers__WEBPACK_IMPORTED_MODULE_14__["wideFont"]);
var TopHashtagIndividualActive = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "DashboardTest__TopHashtagIndividualActive",
  componentId: "sc-1dz292n-11"
})(["background:#212528;color:#fff;padding:8px;margin:0 10px;border-radius:2px;", ":hover{cursor:pointer;}margin-left:0;white-space:nowrap;"], _shared_helpers__WEBPACK_IMPORTED_MODULE_14__["wideFont"]);
var TopHashtagIndividualActiveRight = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "DashboardTest__TopHashtagIndividualActiveRight",
  componentId: "sc-1dz292n-12"
})(["background:#212528;color:#fff;padding:8px;margin:0 10px;border-radius:2px;", " margin:0 auto;:hover{cursor:pointer;}margin-right:0;"], _shared_helpers__WEBPACK_IMPORTED_MODULE_14__["wideFont"]);
var RightTabs = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "DashboardTest__RightTabs",
  componentId: "sc-1dz292n-13"
})(["color:#fff;margin:0 10px;border-radius:2px;", " margin:0 auto;:hover{cursor:pointer;}margin-right:0;"], _shared_helpers__WEBPACK_IMPORTED_MODULE_14__["wideFont"]);
var TopHashtagIndividualActivePnl = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "DashboardTest__TopHashtagIndividualActivePnl",
  componentId: "sc-1dz292n-14"
})(["color:#fff;padding:0px;margin:0 10px;border-radius:2px;", ":hover{cursor:pointer;}margin:auto;"], _shared_helpers__WEBPACK_IMPORTED_MODULE_14__["wideFont"]);
var ChartWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "DashboardTest__ChartWrapper",
  componentId: "sc-1dz292n-15"
})(["background:white;padding:5px;width:100%;padding:10px;@media (max-width:768px){}"]);
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "DashboardTest__Wrapper",
  componentId: "sc-1dz292n-16"
})(["display:flex;margin-top:5px;"]);

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
/* harmony import */ var _form_FormWrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../form/FormWrapper */ "./components/form/FormWrapper.js");
/* harmony import */ var _form_Input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../form/Input */ "./components/form/Input.js");
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
      }, "Note: We keep the keys encrypted in out database, however, make sure to leave \"withdrawals allowed\" UNCHECKED anyways when choosing key settings.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_form_FormWrapper__WEBPACK_IMPORTED_MODULE_8__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledForm, {
        onSubmit: function onSubmit(event) {
          return handleSubmit(event, client);
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(InputWrapper, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_form_Label__WEBPACK_IMPORTED_MODULE_10__["default"], null, "key"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_form_Input__WEBPACK_IMPORTED_MODULE_9__["default"], {
        placeholder: "",
        name: "key",
        type: "text",
        required: true
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(InputWrapper, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_form_Label__WEBPACK_IMPORTED_MODULE_10__["default"], null, "secret"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_form_Input__WEBPACK_IMPORTED_MODULE_9__["default"], {
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

/***/ "./components/Dashboard/Chart/ChartDemo.js":
/*!*************************************************!*\
  !*** ./components/Dashboard/Chart/ChartDemo.js ***!
  \*************************************************/
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
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./helpers */ "./components/Dashboard/Chart/helpers.js");
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
          width = _this$props.width,
          ratio = _this$props.ratio,
          initialData = _this$props.data;
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
      var end = xAccessor(data[Math.max(0, data.length - 150)]);
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
        var datu = new Date(each.timestamp); // console.log(datu, this.props.timeframe);

        if (each.side == "Buy") {
          var annotationPropsUp = {
            fontFamily: "Glyphicons Halflings",
            fontSize: 15,
            fill: "#018001",
            // fill: rgba(1, 128, 1, 0.5),
            opacity: 0.8,
            text: "▲",
            y: function y(_ref) {
              var yScale = _ref.yScale;
              return yScale.range()[0] + 20; // return findYValBuy(
              //   this.state.yRangeNums[0],
              //   this.state.yRangeNums[1],
              //   each.price
              // );
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
            fontSize: 15,
            fill: "#FF0000",
            opacity: 0.8,
            text: "▼",
            y: function y(_ref2) {
              var yScale = _ref2.yScale;
              return yScale.range()[1] - 20; // return findYValSell(
              //   this.state.yRangeNums[0],
              //   this.state.yRangeNums[1],
              //   each.price
              // );
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

/***/ "./components/Dashboard/Chart/helpers.js":
/*!***********************************************!*\
  !*** ./components/Dashboard/Chart/helpers.js ***!
  \***********************************************/
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
  // let fullRange = yHigh - yLow;
  // let myRange = yHigh - parseInt(price);
  // let outOf = myRange / fullRange;
  // let multiplied = outOf * 180 + 70;
  // console.log(outOf, multiplied);
  return 80;
};
var findYValBuy = function findYValBuy(yLow, yHigh, price) {
  var fullRange = yHigh - yLow;
  var myRange = yHigh - parseInt(price);
  var outOf = myRange / fullRange;
  var multiplied = outOf * 180 + 100;
  console.log(outOf, multiplied);
  return multiplied;
};

/***/ }),

/***/ "./components/Dashboard/Chart/index.js":
/*!*********************************************!*\
  !*** ./components/Dashboard/Chart/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ChartComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ChartDemo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChartDemo */ "./components/Dashboard/Chart/ChartDemo.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_stockcharts_lib_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-stockcharts/lib/helper */ "react-stockcharts/lib/helper");
/* harmony import */ var react_stockcharts_lib_helper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_stockcharts_lib_helper__WEBPACK_IMPORTED_MODULE_4__);
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

    return _possibleConstructorReturn(this, _getPrototypeOf(ChartComponent).call(this, props));
  }

  _createClass(ChartComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var startTime = new Date(this.props.trades[0].timestamp);
      var endTime = new Date(this.props.trades[this.props.trades.length - 1].timestamp);
      var diffMs = Math.abs(startTime - endTime);
      var diffSecs = diffMs / 1000;
      var diffMins = Math.round(diffSecs / 60); // minutes

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
            var compare2 = newTrade.date - end; // console.log(compare1, compare2);

            var additionalTime = 1000 * 60 * 30;

            if (compare1 > additionalTime * -1 && compare2 < additionalTime) {
              allExec.unshift(newTrade);
            }

            if (i == this.props.onemin.length - 1) {
              var timeframe = "1m";
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

            var _compare2 = _newTrade.date - _end; // console.log(compare1, compare2);


            var _additionalTime = 1000 * 60 * 60 * 2;

            if (_compare > _additionalTime * -1 && _compare2 < _additionalTime) {
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

            var _additionalTime2 = 1000 * 60 * 60 * 20;

            if (_compare3 > _additionalTime2 * -1 && _compare4 < _additionalTime2) {
              // console.log(compare1, compare2);
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

            var _additionalTime3 = 1000 * 60 * 60 * 24 * 10;

            if (_compare5 > _additionalTime3 * -1 && _compare6 < _additionalTime3) {
              // console.log(compare1, compare2);
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
        console.log(err);
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state == null || !this.state.newDat[0]) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Alert"], {
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
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./components/Dashboard/Dashboard.js":
/*!*******************************************!*\
  !*** ./components/Dashboard/Dashboard.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _class; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Tades_Trades__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tades/Trades */ "./components/Dashboard/Tades/Trades.js");
/* harmony import */ var _Menu_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Menu/Menu */ "./components/Menu/Menu.js");
/* harmony import */ var _shared_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/helpers */ "./components/Dashboard/shared/helpers.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Notes_NotesTest__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Notes/NotesTest */ "./components/Dashboard/Notes/NotesTest.js");
/* harmony import */ var _Tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Tabs */ "./components/Dashboard/Tabs.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! mobx-react */ "mobx-react");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! mobx */ "mobx");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _shared_helpers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/helpers */ "./components/shared/helpers.js");


var _dec, _class2;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
















var _class = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_11__["inject"])("store"), _dec(_class2 = Object(mobx_react__WEBPACK_IMPORTED_MODULE_11__["observer"])(_class2 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(_class2, _React$Component);

  function _class2(props) {
    var _this;

    _classCallCheck(this, _class2);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(_class2).call(this, props));
    _this.state = {
      globalHash: [],
      globalHashActive: ["all"],
      data: null,
      filteredData: null,
      isSingle: false,
      isSingleNotes: false
    };
    _this.getGlobalHashtags = _this.getGlobalHashtags.bind(_assertThisInitialized(_this));
    _this.hashtagClicked = _this.hashtagClicked.bind(_assertThisInitialized(_this));
    _this.hashtagClickedBack = _this.hashtagClickedBack.bind(_assertThisInitialized(_this));
    _this.updateWindowDimensions = _this.updateWindowDimensions.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(_class2, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.setState({
        data: this.props.data
      });
      this.getGlobalHashtags(this.props.data);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.singleTradeReaction = Object(mobx__WEBPACK_IMPORTED_MODULE_12__["reaction"])(function () {
        return _this2.props.store.hasSingleTrade;
      }, function (notifications, reaction) {
        console.log("HAS SINGLE", _this2.props.store.hasSingleTrade);

        if (_this2.props.store.hasSingleTrade == false) {
          _this2.setState({
            isSingle: false
          });

          console.log("setting back");
        } else {
          _this2.setState({
            isSingle: true,
            singleTrade: _this2.props.store.singleTrade[0]
          });

          console.log(_this2.state, "STATEE");
          console.log("setting back");
        }
      });
      this.singleNotesReaction = Object(mobx__WEBPACK_IMPORTED_MODULE_12__["reaction"])(function () {
        return _this2.props.store.isSingleNotes;
      }, function (notifications, reaction) {
        if (_this2.props.store.isSingleNotes == false) {
          _this2.setState({
            isSingleNotes: false
          });
        } else {
          _this2.setState({
            isSingleNotes: true
          });
        }
      });
      window.addEventListener("resize", this.updateWindowDimensions);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("resize", this.updateWindowDimensions);
    }
  }, {
    key: "updateWindowDimensions",
    value: function updateWindowDimensions() {
      this.setState({
        width: window.innerWidth
      });
    }
  }, {
    key: "getGlobalHashtags",
    value: function () {
      var _getGlobalHashtags = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(data) {
        var i, thisTradeHash, j, newGlobalHash;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                for (i = 0; i < data.fetchTradeHistory.length; i++) {
                  thisTradeHash = data.fetchTradeHistory[i].hashtags.split(",");

                  if (thisTradeHash != "undefined") {
                    for (j = 0; j < thisTradeHash.length; j++) {
                      if (thisTradeHash[j] != "undefined") {
                        newGlobalHash = this.state.globalHash;
                        newGlobalHash.push(thisTradeHash[j]);
                        this.setState({
                          globalHash: newGlobalHash
                        });
                      }
                    }
                  }
                }

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getGlobalHashtags(_x) {
        return _getGlobalHashtags.apply(this, arguments);
      }

      return getGlobalHashtags;
    }()
  }, {
    key: "hashtagClickedBack",
    value: function () {
      var _hashtagClickedBack = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(value) {
        var _this3 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (value == "all") {
                  console.log("DO NOTHING");
                } else {
                  (function () {
                    var newHashActive = [];
                    var newHash = _this3.state.globalHash;

                    for (var i = 0; i < _this3.state.globalHashActive.length; i++) {
                      if (value !== _this3.state.globalHashActive[i]) {
                        newHashActive.push(_this3.state.globalHashActive[i]);
                      } else {
                        newHash.push(_this3.state.globalHashActive[i]);
                      }

                      if (i == _this3.state.globalHashActive.length - 1) {
                        if (newHashActive[0] == undefined) {
                          var newHash2 = [];

                          for (var j = 0; j < newHash.length; j++) {
                            if (newHash[j] != "all") {
                              newHash2.push(newHash[j]);
                            }

                            if (j == newHash.length - 1) {
                              _this3.setState({
                                globalHash: newHash2,
                                globalHashActive: ["all"],
                                filteredData: null
                              });
                            }
                          }
                        } else {
                          (function () {
                            var newHash2 = [];

                            for (var _j = 0; _j < newHash.length; _j++) {
                              if (newHash[_j] != "all") {
                                newHash2.push(newHash[_j]);
                              }

                              if (_j == newHash.length - 1) {
                                Object(_shared_helpers__WEBPACK_IMPORTED_MODULE_4__["getNewDat"])(_this3.state.data, newHashActive).then(function (res) {
                                  _this3.setState({
                                    globalHash: newHash2,
                                    globalHashActive: newHashActive,
                                    filteredData: res
                                  });
                                });
                              }
                            }
                          })();
                        }
                      }
                    }
                  })();
                }

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function hashtagClickedBack(_x2) {
        return _hashtagClickedBack.apply(this, arguments);
      }

      return hashtagClickedBack;
    }()
  }, {
    key: "hashtagClicked",
    value: function () {
      var _hashtagClicked = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(value) {
        var _this4 = this;

        var newGlobalHash, newGlobalHash2, i, j, newArray, index, _newGlobalHash, _i, _index, _index2;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!(value == "all")) {
                  _context3.next = 19;
                  break;
                }

                newGlobalHash = this.state.globalHash;
                newGlobalHash2 = [];
                i = 0;

              case 4:
                if (!(i < this.state.globalHashActive.length)) {
                  _context3.next = 19;
                  break;
                }

                newGlobalHash.push(this.state.globalHashActive[i]);

                if (!(i == this.state.globalHashActive.length - 1)) {
                  _context3.next = 16;
                  break;
                }

                j = 0;

              case 8:
                if (!(j < newGlobalHash.length)) {
                  _context3.next = 16;
                  break;
                }

                if (newGlobalHash[j] != "all") {
                  newGlobalHash2.push(newGlobalHash[j]);
                }

                if (!(j == newGlobalHash.length - 1)) {
                  _context3.next = 13;
                  break;
                }

                this.setState({
                  globalHash: newGlobalHash2,
                  globalHashActive: ["all"],
                  filteredData: null
                });
                return _context3.abrupt("return");

              case 13:
                j++;
                _context3.next = 8;
                break;

              case 16:
                i++;
                _context3.next = 4;
                break;

              case 19:
                if (!(this.state.globalHashActive[0] == undefined)) {
                  _context3.next = 26;
                  break;
                }

                newArray = [];
                newArray.push(value);
                this.setState({
                  globalHashActive: newArray
                });
                index = this.state.globalHash.indexOf(value);

                if (index > -1) {
                  _newGlobalHash = this.state.globalHash;

                  _newGlobalHash.splice(index, 1);

                  this.setState({
                    globalHash: _newGlobalHash
                  });
                }

                return _context3.abrupt("return");

              case 26:
                _i = 0;

              case 27:
                if (!(_i < this.state.globalHashActive.length)) {
                  _context3.next = 35;
                  break;
                }

                if (this.state.globalHashActive[_i] == "all") {
                  this.state.globalHashActive = [];
                  _index = this.state.globalHash.indexOf(value);

                  if (_index > -1) {
                    (function () {
                      var newGlobalHash = _this4.state.globalHash;
                      newGlobalHash.splice(_index, 1);
                      var torf = false;

                      for (var _j2 = 0; _j2 < newGlobalHash.length; _j2++) {
                        if ("all" == newGlobalHash[_j2]) {
                          torf = true;
                        }

                        if (_j2 == newGlobalHash.length - 1 && torf == false) {
                          newGlobalHash.push("all");
                        }
                      }

                      var newGlobalHashActive = _this4.state.globalHashActive;
                      newGlobalHashActive.push(value);
                      Object(_shared_helpers__WEBPACK_IMPORTED_MODULE_4__["getNewDat"])(_this4.state.data, newGlobalHashActive).then(function (newDat) {
                        _this4.setState({
                          globalHashActive: newGlobalHashActive,
                          globalHash: newGlobalHash,
                          filteredData: newDat
                        });

                        return;
                      });
                    })();
                  }
                }

                if (!(value == this.state.globalHashActive[_i])) {
                  _context3.next = 31;
                  break;
                }

                return _context3.abrupt("return");

              case 31:
                if (_i == this.state.globalHashActive.length - 1) {
                  _index2 = this.state.globalHash.indexOf(value);

                  if (_index2 > -1) {
                    (function () {
                      var newGlobalHash = _this4.state.globalHash;
                      newGlobalHash.splice(_index2, 1); // newGlobalHash.push("all");

                      var torf = false;

                      for (var _j3 = 0; _j3 < newGlobalHash.length; _j3++) {
                        if ("all" == newGlobalHash[_j3]) {
                          torf = true;
                        }

                        if (_j3 == newGlobalHash.length - 1 && torf == false) {
                          newGlobalHash.push("all");
                        }
                      }

                      var newGlobalHashActive = _this4.state.globalHashActive;
                      newGlobalHashActive.push(value);
                      Object(_shared_helpers__WEBPACK_IMPORTED_MODULE_4__["getNewDat"])(_this4.state.data, newGlobalHashActive).then(function (newDat) {
                        _this4.setState({
                          globalHashActive: newGlobalHashActive,
                          globalHash: newGlobalHash,
                          filteredData: newDat
                        });

                        return;
                      });
                    })();
                  }
                }

              case 32:
                _i++;
                _context3.next = 27;
                break;

              case 35:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function hashtagClicked(_x3) {
        return _hashtagClicked.apply(this, arguments);
      }

      return hashtagClicked;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      if (this.state.data != null) {
        if (this.state.isSingle == false) {
          console.log("IS SINGLE IS FALSE");
          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Wrapper, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(ChartWrapper, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(TopBarParent, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(TopBarChildBigLeft, null, this.state.globalHashActive.map(function (hash) {
            return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(TopHashtagIndividualActive, {
              onClick: function onClick() {
                return _this5.hashtagClickedBack(hash);
              }
            }, "#", hash);
          }), this.state.globalHash.map(function (hash) {
            return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(TopHashtagIndividual, {
              onClick: function onClick() {
                return _this5.hashtagClicked(hash);
              }
            }, "#", hash);
          })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(TopBarChildSmall, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(TopHashtagIndividualActivePnl, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Menu_Menu__WEBPACK_IMPORTED_MODULE_3__["Pnl"], null))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(TopBarChildBigRight, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(TopHashtagIndividualActiveRight, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Menu_Menu__WEBPACK_IMPORTED_MODULE_3__["SymbolChooser"], null)))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(WholeGrid, null, this.state.isSingleNotes == false ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Tades_Trades__WEBPACK_IMPORTED_MODULE_2__["ContainDivHeader"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Tades_Trades__WEBPACK_IMPORTED_MODULE_2__["NextToDivHeader"], null, "Start"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Tades_Trades__WEBPACK_IMPORTED_MODULE_2__["NextToDivHeader"], null, "End"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Tades_Trades__WEBPACK_IMPORTED_MODULE_2__["NextToDivHeader"], null, "L/S"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Tades_Trades__WEBPACK_IMPORTED_MODULE_2__["NextToDivHeader"], null, "Entry"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Tades_Trades__WEBPACK_IMPORTED_MODULE_2__["NextToDivHeader"], null, "Exit"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Tades_Trades__WEBPACK_IMPORTED_MODULE_2__["NextToDivHeader"], null, "Qty"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Tades_Trades__WEBPACK_IMPORTED_MODULE_2__["NextToDivHeader"], null, "RPNL")) : null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Tades_Trades__WEBPACK_IMPORTED_MODULE_2__["default"], {
            data: this.state.data,
            filteredData: this.state.filteredData,
            initData: this.props.data
          }))));
        } else {
          console.log("IS SINGLE IS TRUE");
          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Wrapper, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(ChartWrapper, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(TopBarParent, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(TopBarChildBigLeft, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Tabs__WEBPACK_IMPORTED_MODULE_9__["default"], null)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(TopBarChildSmall, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(TopHashtagIndividualActivePnl, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Menu_Menu__WEBPACK_IMPORTED_MODULE_3__["Pnl"], null))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(TopBarChildBigRight, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(RightTabs, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Notes_NotesTest__WEBPACK_IMPORTED_MODULE_8__["default"], {
            firstTrade: this.state.singleTrade
          })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(WholeGrid, null, this.state.isSingleNotes == false ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Tades_Trades__WEBPACK_IMPORTED_MODULE_2__["ContainDivHeader"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Tades_Trades__WEBPACK_IMPORTED_MODULE_2__["NextToDivHeader"], null, "Start"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Tades_Trades__WEBPACK_IMPORTED_MODULE_2__["NextToDivHeader"], null, "End"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Tades_Trades__WEBPACK_IMPORTED_MODULE_2__["NextToDivHeader"], null, "L/S"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Tades_Trades__WEBPACK_IMPORTED_MODULE_2__["NextToDivHeader"], null, "Entry"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Tades_Trades__WEBPACK_IMPORTED_MODULE_2__["NextToDivHeader"], null, "Exit"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Tades_Trades__WEBPACK_IMPORTED_MODULE_2__["NextToDivHeader"], null, "Qty"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Tades_Trades__WEBPACK_IMPORTED_MODULE_2__["NextToDivHeader"], null, "RPNL")) : null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Tades_Trades__WEBPACK_IMPORTED_MODULE_2__["default"], {
            data: this.state.data,
            filteredData: this.state.filteredData,
            initData: this.props.data
          }))));
        }
      }
    }
  }]);

  return _class2;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component)) || _class2) || _class2);


var SingleTabInner = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Dashboard__SingleTabInner",
  componentId: "ij5648-0"
})(["margin:auto;"]);
var SingleTab = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Dashboard__SingleTab",
  componentId: "ij5648-1"
})(["color:", ";background-color:", ";margin:auto 10px;border-radius:2px;padding:5px;:hover{cursor:pointer;}"], function (props) {
  return props.isActive ? "#fff" : "#000";
}, function (props) {
  return props.isActive ? "#000" : "#fff";
});
var WrapTabs = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Dashboard__WrapTabs",
  componentId: "ij5648-2"
})(["display:flex;flex-direction:row;font-size:15px;"]);
var WholeGrid = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Dashboard__WholeGrid",
  componentId: "ij5648-3"
})([""]); // border: 1px solid #f2f2f2;

var TopBarParent = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Dashboard__TopBarParent",
  componentId: "ij5648-4"
})(["display:flex;flex-direction:row;flex-wrap:wrap;margin-bottom:14px;"]); // flex: 1 1 45%; /*grow | shrink | basis */

var TopBarChildBigLeft = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Dashboard__TopBarChildBigLeft",
  componentId: "ij5648-5"
})(["width:45%;display:flex;flex-direction:row;overflow:auto;"]);
var TopBarChildBigRight = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Dashboard__TopBarChildBigRight",
  componentId: "ij5648-6"
})(["width:45%;display:flex;flex-direction:row;overflow:auto;"]);
var TopBarChildSmall = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Dashboard__TopBarChildSmall",
  componentId: "ij5648-7"
})(["display:flex;flex-direction:row;width:10%;"]);
var TopHashtagIndividual = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Dashboard__TopHashtagIndividual",
  componentId: "ij5648-8"
})(["background:#f8f8ff;color:#000;padding:8px;margin:0 10px;border-radius:2px;", ":hover{cursor:pointer;}margin-left:0;white-space:nowrap;"], _shared_helpers__WEBPACK_IMPORTED_MODULE_13__["wideFont"]);
var TopHashtagIndividualActive = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Dashboard__TopHashtagIndividualActive",
  componentId: "ij5648-9"
})(["background:#212528;color:#fff;padding:8px;margin:0 10px;border-radius:2px;", ":hover{cursor:pointer;}margin-left:0;white-space:nowrap;"], _shared_helpers__WEBPACK_IMPORTED_MODULE_13__["wideFont"]);
var TopHashtagIndividualActiveRight = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Dashboard__TopHashtagIndividualActiveRight",
  componentId: "ij5648-10"
})(["background:#212528;color:#fff;padding:8px;margin:0 10px;border-radius:2px;", " margin:0 auto;:hover{cursor:pointer;}margin-right:0;"], _shared_helpers__WEBPACK_IMPORTED_MODULE_13__["wideFont"]);
var RightTabs = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Dashboard__RightTabs",
  componentId: "ij5648-11"
})(["color:#fff;margin:0 10px;border-radius:2px;", " margin:0 auto;:hover{cursor:pointer;}margin-right:0;"], _shared_helpers__WEBPACK_IMPORTED_MODULE_13__["wideFont"]);
var TopHashtagIndividualActivePnl = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Dashboard__TopHashtagIndividualActivePnl",
  componentId: "ij5648-12"
})(["color:#fff;padding:0px;margin:0 10px;border-radius:2px;", ":hover{cursor:pointer;}margin:auto;"], _shared_helpers__WEBPACK_IMPORTED_MODULE_13__["wideFont"]);
var ChartWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Dashboard__ChartWrapper",
  componentId: "ij5648-13"
})(["background:white;padding:5px;width:100%;padding:10px;@media (max-width:768px){margin:0 5vw;}"]);
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Dashboard__Wrapper",
  componentId: "ij5648-14"
})(["display:flex;margin-top:5px;"]);

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
/* harmony import */ var _Tades_Trades__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tades/Trades */ "./components/Dashboard/Tades/Trades.js");
/* harmony import */ var _Menu_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Menu/Menu */ "./components/Menu/Menu.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mobx-react */ "mobx-react");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! fast-deep-equal */ "fast-deep-equal");
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(fast_deep_equal__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _AddApiForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./AddApiForm */ "./components/Dashboard/AddApiForm.js");
/* harmony import */ var _Dashboard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Dashboard */ "./components/Dashboard/Dashboard.js");
/* harmony import */ var _768px_DashboardTest__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./768px/DashboardTest */ "./components/Dashboard/768px/DashboardTest.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! mobx */ "mobx");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Helpers_Functions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Helpers/Functions */ "./components/Helpers/Functions.js");
var _dec, _class, _temp, _dec2, _class3;



function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query fetchTradeHistory($start: String!, $end: String!, $symbol: String!) {\n    checkApiKey\n\n    fetchTradeHistory(start: $start, end: $end, symbol: $symbol) {\n      id\n      timestamp\n      side\n      price\n      orderQty\n      leavesQty\n      currentQty\n      avgEntryPrice\n      execGrossPnl\n      realizedPnl\n      commission\n      execType\n      orderType\n      trdStart\n      trdEnd\n      notes\n      hashtags\n    }\n\n    fetchOneMinuteCandleHistory(start: $start, end: $end) {\n      id\n      timestamp\n      symbol\n      timeframe\n      open\n      high\n      low\n      close\n      trades\n      volume\n      vwap\n      lastSize\n      homeNotional\n      foreignNotional\n    }\n\n    fetchOneHourCandleHistory(start: $start, end: $end) {\n      id\n      timestamp\n      symbol\n      timeframe\n      open\n      high\n      low\n      close\n      trades\n      volume\n      vwap\n      lastSize\n      homeNotional\n      foreignNotional\n    }\n\n    fetchOneDayCandleHistory(start: $start, end: $end) {\n      id\n      timestamp\n      symbol\n      timeframe\n      open\n      high\n      low\n      close\n      trades\n      volume\n      vwap\n      lastSize\n      homeNotional\n      foreignNotional\n    }\n\n    fetchFiveMinuteCandleHistory(start: $start, end: $end) {\n      id\n      timestamp\n      symbol\n      timeframe\n      open\n      high\n      low\n      close\n      trades\n      volume\n      vwap\n      lastSize\n      homeNotional\n      foreignNotional\n    }\n  }\n"]);

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
    value: function componentDidMount() {
      console.log("loaded fetch query component");
    }
  }, {
    key: "render",
    value: function render() {
      var fetchTradeHistoryVariables = {
        start: this.props.store.startDate,
        end: this.props.store.endDate,
        symbol: this.props.store.symbol
      };
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
      width: 0
    };
    _this2.updateWindowDimensions = _this2.updateWindowDimensions.bind(_assertThisInitialized(_this2));
    return _this2;
  }

  _createClass(Comp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      this.tempTagsReaction = Object(mobx__WEBPACK_IMPORTED_MODULE_11__["reaction"])(function () {
        return _this3.props.store.hasTempTags;
      }, function (notifications, reaction) {
        _this3.forceUpdate(console.log("FORCE UPDATE WAS CALLED"));
      });
      this.updateWindowDimensions();
      window.addEventListener("resize", this.updateWindowDimensions);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.tempTagsReaction();
      window.removeEventListener("resize", this.updateWindowDimensions);
    }
  }, {
    key: "updateWindowDimensions",
    value: function updateWindowDimensions() {
      console.log(window.innerWidth);
      this.setState({
        width: window.innerWidth
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      console.log("rerendered");
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
        query: this.props.query,
        variables: this.props.vars
      }, function (_ref) {
        var loading = _ref.loading,
            error = _ref.error,
            data = _ref.data;
        if (error) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "no data loaded");
        if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Loading");

        if (data.checkApiKey == false) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AddApiForm__WEBPACK_IMPORTED_MODULE_8__["default"], null);
        } else if (data.checkApiKey == true) {
          _this4.props.store.resetHasTempTags();

          _this4.props.store.clearTempNotes();

          _this4.props.store.clearTempTags();

          _this4.props.store.resetPnl();

          _this4.props.store.hasSingleTrade = false;

          if (_this4.state.width > 768) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Dashboard__WEBPACK_IMPORTED_MODULE_9__["default"], {
              data: data
            });
          } else {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_768px_DashboardTest__WEBPACK_IMPORTED_MODULE_10__["default"], {
              data: data
            });
          }
        }
      });
    }
  }]);

  return Comp;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component)) || _class3) || _class3);
/* harmony default export */ __webpack_exports__["default"] = (FetchQuery);
var fetchTradeHistoryQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject());

/***/ }),

/***/ "./components/Dashboard/FetchQueryContainer.js":
/*!*****************************************************!*\
  !*** ./components/Dashboard/FetchQueryContainer.js ***!
  \*****************************************************/
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
/* harmony import */ var _Helpers_Functions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Helpers/Functions */ "./components/Helpers/Functions.js");
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
    _this.state = {
      start: null
    };
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

      if (this.props.store.startDate == null) {
        var dates = Object(_Helpers_Functions__WEBPACK_IMPORTED_MODULE_7__["getStateDate"])("This Week");
        this.props.store.startDate = dates.start;
        this.props.store.endDate = dates.end;
        this.setState({
          start: true
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.start !== null) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
          theme: Object(_theme__WEBPACK_IMPORTED_MODULE_2__["default"])(false)
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          style: {
            width: "100%"
          }
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FetchQuery__WEBPACK_IMPORTED_MODULE_3__["default"], null)));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "loading");
      }
    }
  }]);

  return DashInitialTerms;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component)) || _class) || _class);


/***/ }),

/***/ "./components/Dashboard/Notes/Notes.js":
/*!*********************************************!*\
  !*** ./components/Dashboard/Notes/Notes.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _class; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _notesHelpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notesHelpers */ "./components/Dashboard/Notes/notesHelpers.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! mobx-react */ "mobx-react");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! mobx */ "mobx");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! fast-deep-equal */ "fast-deep-equal");
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(fast_deep_equal__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_autosize_textarea__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-autosize-textarea */ "react-autosize-textarea");
/* harmony import */ var react_autosize_textarea__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_autosize_textarea__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _shared_helpers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/helpers */ "./components/shared/helpers.js");


var _dec, _class2, _dec2, _class3;



function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n            mutation addNotes($time: String!, $notes: String!) {\n              addNotes(time: $time, notes: $notes)\n            }\n          "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n            mutation removeHashtag($time: String!, $hashtag: String!) {\n              removeHashtag(time: $time, hashtag: $hashtag)\n            }\n          "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n            mutation addHashtag($time: String!, $hashtag: String!) {\n              addHashtag(time: $time, hashtag: $hashtag)\n            }\n          "]);

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















var _class = (_dec2 = Object(mobx_react__WEBPACK_IMPORTED_MODULE_9__["inject"])(["store"]), _dec2(_class3 = Object(mobx_react__WEBPACK_IMPORTED_MODULE_9__["observer"])(_class3 =
/*#__PURE__*/
function (_Component2) {
  _inherits(_class3, _Component2);

  function _class3(props) {
    var _this3;

    _classCallCheck(this, _class3);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(_class3).call(this, props));
    _this3.state = {
      value: "",
      hashtags: [],
      initHashtags: [],
      showNotes: false
    };
    _this3.setShowNotes = _this3.setShowNotes.bind(_assertThisInitialized(_this3));
    _this3.handleChange = _this3.handleChange.bind(_assertThisInitialized(_this3));
    _this3.handleSubmit = _this3.handleSubmit.bind(_assertThisInitialized(_this3));
    return _this3;
  }

  _createClass(_class3, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this4 = this;

      if (this.props.store.tempNotes[0] != undefined) {
        var isTemp = false;

        for (var i = 0; i < this.props.store.tempNotes.length; i++) {
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

      var splitTags = this.props.firstTrade.hashtags.split(",");
      splitTags.map(function (tag) {
        _this4.state.initHashtags.push(tag);
      });
    }
  }, {
    key: "handleChange",
    value: function handleChange(client) {
      var _this5 = this;

      return function (event) {
        // event.preventDefault();
        _this5.setState({
          value: event.target.value
        }, _this5.handleSubmit(client));

        _this5.props.store.addTempNote(_this5.props.firstTrade.timestamp, event.target.value);
      };
    }
  }, {
    key: "removeHashtag",
    value: function removeHashtag(client, hashtag) {
      var _this6 = this;

      return (
        /*#__PURE__*/
        function () {
          var _ref2 = _asyncToGenerator(
          /*#__PURE__*/
          _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(event) {
            var time;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    if (event != undefined && event.preventDefault != undefined) {
                      event.preventDefault();
                    }

                    time = _this6.props.firstTrade.timestamp;
                    client.mutate({
                      mutation: graphql_tag__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject2()),
                      variables: {
                        time: time,
                        hashtag: hashtag
                      },
                      refetchQueries: ["fetchTradeHistory"]
                    }).then(function () {
                      _this6.props.store.changeHasTempTags();
                    });

                  case 3:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3);
          }));

          return function (_x3) {
            return _ref2.apply(this, arguments);
          };
        }()
      );
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(client) {
      var _this7 = this;

      return function (event) {
        if (event != undefined && event.preventDefault != undefined) {
          event.preventDefault();
        }

        console.log("HASHTAGS", _this7.state.hashtags);
        Object(_notesHelpers__WEBPACK_IMPORTED_MODULE_4__["getNotes"])(_this7.state.value).then(
        /*#__PURE__*/
        function () {
          var _ref3 = _asyncToGenerator(
          /*#__PURE__*/
          _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(res) {
            var notes, time, reso;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    notes = res[0];
                    time = _this7.props.firstTrade.timestamp;
                    reso = client.mutate({
                      mutation: graphql_tag__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject3()),
                      variables: {
                        time: time,
                        notes: notes
                      }
                    });
                    _context4.next = 5;
                    return reso;

                  case 5:
                    return _context4.abrupt("return", _context4.sent);

                  case 6:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4);
          }));

          return function (_x4) {
            return _ref3.apply(this, arguments);
          };
        }());
      };
    }
  }, {
    key: "setShowNotes",
    value: function setShowNotes() {
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
  }, {
    key: "render",
    value: function render() {
      var _this8 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_3__["ApolloConsumer"], null, function (client) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FullRow, {
          onSubmit: _this8.handleSubmit(client)
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HashtagDiv, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AddHashtag, {
          firstTrade: _this8.props.firstTrade,
          client: client
        })), _this8.state.initHashtags.map(function (tag) {
          if (tag != "undefined") {
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SingleHashtagDiv, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SingleHashtagText, null, "#", tag), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SingleHashtagDelete, {
              onClick: _this8.removeHashtag(client, tag)
            }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faTimes"],
              size: "xs",
              style: {
                transition: "none"
              }
            })));
          }
        }), _this8.state.showNotes == true ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ShowNotesDiv, {
          onClick: function onClick() {
            return _this8.setShowNotes();
          }
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ShowNotesInner, null, "Hide Notes")) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ShowNotesDiv, {
          onClick: function onClick() {
            return _this8.setShowNotes();
          }
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ShowNotesInner, null, "Show Notes"))), _this8.state.showNotes == true ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_autosize_textarea__WEBPACK_IMPORTED_MODULE_12___default.a, {
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
          value: _this8.state.value,
          onChange: _this8.handleChange(client)
        }) : null);
      });
    }
  }]);

  return _class3;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"])) || _class3) || _class3);

 // const NotesInput = styled.textarea`
//   width: 100%;
//   padding: 12px 20px;
//   margin: 8px 0;
//   box-sizing: border-box;
//   background: #f8f8ff;
//   border: none;
// `;

var AddHashtag = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_9__["inject"])(["store"]), _dec(_class2 = Object(mobx_react__WEBPACK_IMPORTED_MODULE_9__["observer"])(_class2 =
/*#__PURE__*/
function (_Component) {
  _inherits(AddHashtag, _Component);

  function AddHashtag(props) {
    var _this;

    _classCallCheck(this, AddHashtag);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AddHashtag).call(this, props));
    _this.state = {
      clicked: false
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    _this.clicked = _this.clicked.bind(_assertThisInitialized(_this));
    return _this;
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
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(event) {
        var _this2 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // return event => {
                event.preventDefault();
                console.log(this.state.value);
                Object(_notesHelpers__WEBPACK_IMPORTED_MODULE_4__["getHashtags"])(this.state.value).then(
                /*#__PURE__*/
                function () {
                  var _ref = _asyncToGenerator(
                  /*#__PURE__*/
                  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(res) {
                    var client, hashtag, time, reso;
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            console.log("CLICKED");
                            client = _this2.state.client;
                            hashtag = res;
                            console.log(hashtag, "HASHTAG");
                            time = _this2.props.firstTrade.timestamp;
                            reso = client.mutate({
                              mutation: graphql_tag__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject()),
                              variables: {
                                time: time,
                                hashtag: hashtag
                              },
                              refetchQueries: ["fetchTradeHistory"]
                            });
                            _context.next = 8;
                            return reso;

                          case 8:
                            return _context.abrupt("return", _context.sent);

                          case 9:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }));

                  return function (_x2) {
                    return _ref.apply(this, arguments);
                  };
                }()).then(function (reso) {
                  _this2.setState({
                    value: ""
                  });

                  _this2.props.store.changeHasTempTags();
                }); // };

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function handleSubmit(_x) {
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
        value: "Add Hashtag"
      }))) : null);
    }
  }]);

  return AddHashtag;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"])) || _class2) || _class2);
var AddHashSubmit = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.input.withConfig({
  displayName: "Notes__AddHashSubmit",
  componentId: "sc-1x3lw2t-0"
})(["background:none;border:none;color:white;font-weight:500;padding:2px;"]);
var Popup = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Notes__Popup",
  componentId: "sc-1x3lw2t-1"
})(["position:relative;display:inline-block;cursor:pointer;background:#000;padding:8px;border-radius:2px;"]);
var PopupTop = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Notes__PopupTop",
  componentId: "sc-1x3lw2t-2"
})(["position:absolute;background:#000;z-index:1;margin:5px;padding:2px;border-radius:2px;"]); // background: #6c757d;
// background: #b9bdc1;

var SingleHashtagDiv = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Notes__SingleHashtagDiv",
  componentId: "sc-1x3lw2t-3"
})(["background:#f8f8ff;margin:20px 8px;color:black;padding:5px 7px;white-space:nowrap;display:flex;flex-direction:row;margin-left:0px;border-radius:2px;"]);
var ShowNotesDiv = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Notes__ShowNotesDiv",
  componentId: "sc-1x3lw2t-4"
})(["background:#fff;margin:20px 8px;color:#000;padding:10px;padding-top:8px;white-space:nowrap;display:flex;flex-direction:row;margin-left:0px;border-radius:2px;background:#f8f8ff;:hover{transition:none;cursor:pointer;}"]);
var ShowNotesInner = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Notes__ShowNotesInner",
  componentId: "sc-1x3lw2t-5"
})(["", " font-size:13px;transition:none;margin:auto;"], _shared_helpers__WEBPACK_IMPORTED_MODULE_13__["wideFont"]);
var SingleHashtagText = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Notes__SingleHashtagText",
  componentId: "sc-1x3lw2t-6"
})(["margin:auto;", ""], _shared_helpers__WEBPACK_IMPORTED_MODULE_13__["wideFont"]);
var SingleHashtagDelete = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Notes__SingleHashtagDelete",
  componentId: "sc-1x3lw2t-7"
})(["margin:auto;margin-left:6px;margin-bottom:4px;:hover{cursor:pointer;}"]);
var HashtagDiv = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Notes__HashtagDiv",
  componentId: "sc-1x3lw2t-8"
})(["margin:auto 0;text-align:center;vertical-align:middle;color:white;padding:10px;padding-top:8px;"]);
var FullRow = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.form.withConfig({
  displayName: "Notes__FullRow",
  componentId: "sc-1x3lw2t-9"
})(["display:flex;flex-direction:row;background:#f8f8ff;"]);
var NotesSubmit = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.input.withConfig({
  displayName: "Notes__NotesSubmit",
  componentId: "sc-1x3lw2t-10"
})(["margin:9px;padding:15px;background:#212528;border:none;color:white;"]);
var NotesInput = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.textarea.withConfig({
  displayName: "Notes__NotesInput",
  componentId: "sc-1x3lw2t-11"
})(["width:100%;padding:12px 20px;margin:0px 0;box-sizing:border-box;background:#f8f8ff;border:none;"]);

/***/ }),

/***/ "./components/Dashboard/Notes/NotesTest.js":
/*!*************************************************!*\
  !*** ./components/Dashboard/Notes/NotesTest.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _class; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _notesHelpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notesHelpers */ "./components/Dashboard/Notes/notesHelpers.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! mobx-react */ "mobx-react");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! mobx */ "mobx");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! fast-deep-equal */ "fast-deep-equal");
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(fast_deep_equal__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_autosize_textarea__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-autosize-textarea */ "react-autosize-textarea");
/* harmony import */ var react_autosize_textarea__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_autosize_textarea__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _shared_helpers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/helpers */ "./components/shared/helpers.js");


var _dec, _class2, _dec2, _class3;



function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n            mutation addNotes($time: String!, $notes: String!) {\n              addNotes(time: $time, notes: $notes)\n            }\n          "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n            mutation removeHashtag($time: String!, $hashtag: String!) {\n              removeHashtag(time: $time, hashtag: $hashtag)\n            }\n          "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n            mutation addHashtag($time: String!, $hashtag: String!) {\n              addHashtag(time: $time, hashtag: $hashtag)\n            }\n          "]);

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















var _class = (_dec2 = Object(mobx_react__WEBPACK_IMPORTED_MODULE_9__["inject"])(["store"]), _dec2(_class3 = Object(mobx_react__WEBPACK_IMPORTED_MODULE_9__["observer"])(_class3 =
/*#__PURE__*/
function (_Component2) {
  _inherits(_class3, _Component2);

  function _class3(props) {
    var _this3;

    _classCallCheck(this, _class3);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(_class3).call(this, props));
    _this3.state = {
      value: "",
      hashtags: [],
      initHashtags: [],
      showNotes: false
    };
    _this3.setShowNotes = _this3.setShowNotes.bind(_assertThisInitialized(_this3));
    _this3.handleChange = _this3.handleChange.bind(_assertThisInitialized(_this3));
    _this3.handleSubmit = _this3.handleSubmit.bind(_assertThisInitialized(_this3));
    return _this3;
  }

  _createClass(_class3, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this4 = this;

      if (this.props.store.tempNotes[0] != undefined) {
        var isTemp = false;

        for (var i = 0; i < this.props.store.tempNotes.length; i++) {
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

      var splitTags = this.props.firstTrade.hashtags.split(",");
      splitTags.map(function (tag) {
        _this4.state.initHashtags.push(tag);
      });
    }
  }, {
    key: "handleChange",
    value: function handleChange(client) {
      var _this5 = this;

      return function (event) {
        // event.preventDefault();
        _this5.setState({
          value: event.target.value
        }, _this5.handleSubmit(client));

        _this5.props.store.addTempNote(_this5.props.firstTrade.timestamp, event.target.value);
      };
    }
  }, {
    key: "removeHashtag",
    value: function removeHashtag(client, hashtag) {
      var _this6 = this;

      return (
        /*#__PURE__*/
        function () {
          var _ref2 = _asyncToGenerator(
          /*#__PURE__*/
          _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(event) {
            var time;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    if (event != undefined && event.preventDefault != undefined) {
                      event.preventDefault();
                    }

                    time = _this6.props.firstTrade.timestamp;
                    client.mutate({
                      mutation: graphql_tag__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject2()),
                      variables: {
                        time: time,
                        hashtag: hashtag
                      },
                      refetchQueries: ["fetchTradeHistory"]
                    }).then(function () {
                      _this6.props.store.changeHasTempTags();
                    });

                  case 3:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3);
          }));

          return function (_x3) {
            return _ref2.apply(this, arguments);
          };
        }()
      );
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(client) {
      var _this7 = this;

      return function (event) {
        if (event != undefined && event.preventDefault != undefined) {
          event.preventDefault();
        }

        console.log("HASHTAGS", _this7.state.hashtags);
        Object(_notesHelpers__WEBPACK_IMPORTED_MODULE_4__["getNotes"])(_this7.state.value).then(
        /*#__PURE__*/
        function () {
          var _ref3 = _asyncToGenerator(
          /*#__PURE__*/
          _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(res) {
            var notes, time, reso;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    notes = res[0];
                    time = _this7.props.firstTrade.timestamp;
                    reso = client.mutate({
                      mutation: graphql_tag__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject3()),
                      variables: {
                        time: time,
                        notes: notes
                      }
                    });
                    _context4.next = 5;
                    return reso;

                  case 5:
                    return _context4.abrupt("return", _context4.sent);

                  case 6:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4);
          }));

          return function (_x4) {
            return _ref3.apply(this, arguments);
          };
        }());
      };
    }
  }, {
    key: "setShowNotes",
    value: function setShowNotes() {
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
  }, {
    key: "render",
    value: function render() {
      var _this8 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_3__["ApolloConsumer"], null, function (client) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FullRow, {
          onSubmit: _this8.handleSubmit(client)
        }, _this8.state.initHashtags.map(function (tag) {
          if (tag != "undefined") {
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SingleHashtagDiv, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SingleHashtagText, null, "#", tag), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SingleHashtagDelete, {
              onClick: _this8.removeHashtag(client, tag)
            }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faTimes"],
              size: "xs",
              style: {
                transition: "none"
              }
            })));
          }
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HashtagDiv, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AddHashtag, {
          firstTrade: _this8.props.firstTrade,
          client: client
        }))));
      });
    }
  }]);

  return _class3;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"])) || _class3) || _class3);

 // const NotesInput = styled.textarea`
//   width: 100%;
//   padding: 12px 20px;
//   margin: 8px 0;
//   box-sizing: border-box;
//   background: #f8f8ff;
//   border: none;
// `;

var AddHashtag = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_9__["inject"])(["store"]), _dec(_class2 = Object(mobx_react__WEBPACK_IMPORTED_MODULE_9__["observer"])(_class2 =
/*#__PURE__*/
function (_Component) {
  _inherits(AddHashtag, _Component);

  function AddHashtag(props) {
    var _this;

    _classCallCheck(this, AddHashtag);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AddHashtag).call(this, props));
    _this.state = {
      clicked: false
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    _this.clicked = _this.clicked.bind(_assertThisInitialized(_this));
    return _this;
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
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(event) {
        var _this2 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // return event => {
                event.preventDefault();
                console.log(this.state.value);
                Object(_notesHelpers__WEBPACK_IMPORTED_MODULE_4__["getHashtags"])(this.state.value).then(
                /*#__PURE__*/
                function () {
                  var _ref = _asyncToGenerator(
                  /*#__PURE__*/
                  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(res) {
                    var client, hashtag, time, reso;
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            console.log("CLICKED");
                            client = _this2.state.client;
                            hashtag = res;
                            console.log(hashtag, "HASHTAG");
                            time = _this2.props.firstTrade.timestamp;
                            reso = client.mutate({
                              mutation: graphql_tag__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject()),
                              variables: {
                                time: time,
                                hashtag: hashtag
                              },
                              refetchQueries: ["fetchTradeHistory"]
                            });
                            _context.next = 8;
                            return reso;

                          case 8:
                            return _context.abrupt("return", _context.sent);

                          case 9:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }));

                  return function (_x2) {
                    return _ref.apply(this, arguments);
                  };
                }()).then(function (reso) {
                  _this2.setState({
                    value: ""
                  });

                  _this2.props.store.changeHasTempTags();
                }); // };

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function handleSubmit(_x) {
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
        onClick: this.clicked,
        style: {
          display: "flex",
          flexDirection: "row"
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "Add Hashtag"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faPlus"],
        style: {
          transition: "none",
          margin: "auto 4px"
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
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"])) || _class2) || _class2);
var AddHashSubmit = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.input.withConfig({
  displayName: "NotesTest__AddHashSubmit",
  componentId: "sc-6j67dn-0"
})(["background:none;border:none;color:white;font-weight:500;padding:2px;"]);
var Popup = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "NotesTest__Popup",
  componentId: "sc-6j67dn-1"
})(["position:relative;display:inline-block;cursor:pointer;background:#000;padding:8px;border-radius:2px;"]);
var PopupTop = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "NotesTest__PopupTop",
  componentId: "sc-6j67dn-2"
})(["position:absolute;background:#000;z-index:1;margin:5px;padding:2px;border-radius:2px;"]); // background: #6c757d;
// background: #b9bdc1;

var SingleHashtagDiv = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "NotesTest__SingleHashtagDiv",
  componentId: "sc-6j67dn-3"
})(["background:#f8f8ff;margin:0 8px;color:black;padding:5px 7px;white-space:nowrap;display:flex;flex-direction:row;margin-left:0px;border-radius:2px;"]);
var ShowNotesDiv = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "NotesTest__ShowNotesDiv",
  componentId: "sc-6j67dn-4"
})(["background:#fff;margin:20px 8px;color:#000;padding:10px;padding-top:8px;white-space:nowrap;display:flex;flex-direction:row;margin-left:0px;border-radius:2px;background:#f8f8ff;:hover{transition:none;cursor:pointer;}"]);
var ShowNotesInner = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "NotesTest__ShowNotesInner",
  componentId: "sc-6j67dn-5"
})(["", " font-size:13px;transition:none;margin:auto;"], _shared_helpers__WEBPACK_IMPORTED_MODULE_13__["wideFont"]);
var SingleHashtagText = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "NotesTest__SingleHashtagText",
  componentId: "sc-6j67dn-6"
})(["margin:auto;", ""], _shared_helpers__WEBPACK_IMPORTED_MODULE_13__["wideFont"]);
var SingleHashtagDelete = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "NotesTest__SingleHashtagDelete",
  componentId: "sc-6j67dn-7"
})(["margin:auto;margin-left:6px;margin-bottom:4px;:hover{cursor:pointer;}"]);
var HashtagDiv = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "NotesTest__HashtagDiv",
  componentId: "sc-6j67dn-8"
})(["margin:auto 0;text-align:center;vertical-align:middle;color:white;"]);
var FullRow = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.form.withConfig({
  displayName: "NotesTest__FullRow",
  componentId: "sc-6j67dn-9"
})(["display:flex;flex-direction:row;"]);
var NotesSubmit = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.input.withConfig({
  displayName: "NotesTest__NotesSubmit",
  componentId: "sc-6j67dn-10"
})(["margin:9px;padding:15px;background:#212528;border:none;color:white;"]);
var NotesInput = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.textarea.withConfig({
  displayName: "NotesTest__NotesInput",
  componentId: "sc-6j67dn-11"
})(["width:100%;padding:12px 20px;margin:0px 0;box-sizing:border-box;background:#f8f8ff;border:none;"]);

/***/ }),

/***/ "./components/Dashboard/Notes/TextArea.js":
/*!************************************************!*\
  !*** ./components/Dashboard/Notes/TextArea.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _notesHelpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notesHelpers */ "./components/Dashboard/Notes/notesHelpers.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mobx-react-lite */ "mobx-react-lite");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mobx-react */ "mobx-react");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_autosize_textarea__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-autosize-textarea */ "react-autosize-textarea");
/* harmony import */ var react_autosize_textarea__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_autosize_textarea__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_7__);


function _templateObject() {
  var data = _taggedTemplateLiteral(["\n              mutation addNotes($time: String!, $notes: String!) {\n                addNotes(time: $time, notes: $notes)\n              }\n            "]);

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








var MyTextArea = Object(mobx_react__WEBPACK_IMPORTED_MODULE_5__["inject"])("store")(Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_4__["observer"])(function (_ref) {
  var firstTrade = _ref.firstTrade,
      store = _ref.store,
      client = _ref.client;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      light = _useState4[0],
      setLight = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(client),
      _useState6 = _slicedToArray(_useState5, 2),
      myClient = _useState6[0],
      setClient = _useState6[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var val;

    if (firstTrade.notes == "undefined") {
      setValue("Add notes here...");
      setLight(true);
    } else {
      setValue(firstTrade.notes);
    }

    var notTemp = true;

    if (store.tempNotes[0] !== undefined) {
      for (var i = 0; i < store.tempNotes.length; i++) {
        if (store.tempNotes[i].time == firstTrade.timestamp.toString()) {
          setValue(store.tempNotes[i].note);
        }
      }
    }
  });
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (value != "Add notes here...") {
      setLight(false);
      Object(_notesHelpers__WEBPACK_IMPORTED_MODULE_1__["getNotes"])(value).then(
      /*#__PURE__*/
      function () {
        var _ref2 = _asyncToGenerator(
        /*#__PURE__*/
        _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(res) {
          var notes, time, reso;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  notes = res[0];
                  time = firstTrade.timestamp;
                  reso = myClient.mutate({
                    mutation: graphql_tag__WEBPACK_IMPORTED_MODULE_7___default()(_templateObject()),
                    variables: {
                      time: time,
                      notes: notes
                    }
                  });
                  _context.next = 5;
                  return reso;

                case 5:
                  return _context.abrupt("return", _context.sent);

                case 6:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x) {
          return _ref2.apply(this, arguments);
        };
      }());
    }
  }, [value]);

  function handleChange() {
    return function (event) {
      setLight(false);
      store.addTempNote(firstTrade.timestamp, event.target.value);
      setValue(event.target.value);
    };
  }

  if (light == false) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_autosize_textarea__WEBPACK_IMPORTED_MODULE_6___default.a, {
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
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_autosize_textarea__WEBPACK_IMPORTED_MODULE_6___default.a, {
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
/* harmony default export */ __webpack_exports__["default"] = (MyTextArea);

/***/ }),

/***/ "./components/Dashboard/Notes/notesHelpers.js":
/*!****************************************************!*\
  !*** ./components/Dashboard/Notes/notesHelpers.js ***!
  \****************************************************/
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

/***/ "./components/Dashboard/Tabs.js":
/*!**************************************!*\
  !*** ./components/Dashboard/Tabs.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react */ "mobx-react");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react-lite */ "mobx-react-lite");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shared_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/helpers */ "./components/shared/helpers.js");


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var Tabs = Object(mobx_react__WEBPACK_IMPORTED_MODULE_1__["inject"])("store")(Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__["observer"])(function (_ref) {
  var store = _ref.store;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("notes"),
      _useState2 = _slicedToArray(_useState, 2),
      activeTab = _useState2[0],
      setActiveTab = _useState2[1];

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
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrapTabs, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SingleTab, {
      isActive: false,
      onClick: function onClick() {
        return backwards();
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SingleTabInner, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faCaretLeft"],
      style: {
        transition: "none",
        marginRight: "7px",
        fontSize: "12px",
        marginBottom: "2px",
        marginTop: "auto"
      }
    }), "All Trades")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SingleTab, {
      isActive: true,
      onClick: function onClick() {
        return setActive("notes");
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SingleTabInner, null, "Notes")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SingleTab, {
      isActive: false,
      onClick: function onClick() {
        return setActive("exec_hist");
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SingleTabInner, null, "Execution History")));
  } else {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrapTabs, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SingleTab, {
      isActive: false,
      onClick: function onClick() {
        return backwards();
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SingleTabInner, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faCaretLeft"],
      style: {
        transition: "none",
        marginRight: "7px",
        fontSize: "12px",
        marginBottom: "2px",
        marginTop: "auto"
      }
    }), "All Trades")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SingleTab, {
      isActive: false,
      onClick: function onClick() {
        return setActive("notes");
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SingleTabInner, null, "Notes")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SingleTab, {
      isActive: true,
      onClick: function onClick() {
        return setActive("exec_hist");
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SingleTabInner, null, "Execution History")));
  }
}));
/* harmony default export */ __webpack_exports__["default"] = (Tabs);
var SingleTabInner = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "Tabs__SingleTabInner",
  componentId: "sc-1mz9w2n-0"
})(["margin:auto;"]);
var SingleTab = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "Tabs__SingleTab",
  componentId: "sc-1mz9w2n-1"
})(["color:", ";background-color:", ";margin:auto 10px;border-radius:2px;padding:5px;:hover{cursor:pointer;}"], function (props) {
  return props.isActive ? "#fff" : "#000";
}, function (props) {
  return props.isActive ? "#212527" : "#fff";
});
var WrapTabs = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "Tabs__WrapTabs",
  componentId: "sc-1mz9w2n-2"
})(["display:flex;flex-direction:row;font-size:15px;"]);
var WholeGrid = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "Tabs__WholeGrid",
  componentId: "sc-1mz9w2n-3"
})(["border:1px solid #f2f2f2;"]);
var TopBarParent = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "Tabs__TopBarParent",
  componentId: "sc-1mz9w2n-4"
})(["display:flex;flex-direction:row;flex-wrap:wrap;margin-bottom:14px;"]);
var TopBarChildBig = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "Tabs__TopBarChildBig",
  componentId: "sc-1mz9w2n-5"
})(["flex:1 1 45%;display:flex;flex-direction:row;"]);
var TopBarChildSmall = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "Tabs__TopBarChildSmall",
  componentId: "sc-1mz9w2n-6"
})(["flex:1 1 10%;display:flex;flex-direction:row;"]);
var TopHashtagIndividual = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "Tabs__TopHashtagIndividual",
  componentId: "sc-1mz9w2n-7"
})(["background:#f8f8ff;color:#000;padding:8px;margin:0 10px;border-radius:2px;", ":hover{cursor:pointer;}margin-left:0;"], _shared_helpers__WEBPACK_IMPORTED_MODULE_6__["wideFont"]);
var TopHashtagIndividualActive = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "Tabs__TopHashtagIndividualActive",
  componentId: "sc-1mz9w2n-8"
})(["background:#212528;color:#fff;padding:8px;margin:0 10px;border-radius:2px;", " margin:0 auto;:hover{cursor:pointer;}margin-left:0;"], _shared_helpers__WEBPACK_IMPORTED_MODULE_6__["wideFont"]);
var TopHashtagIndividualActiveRight = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "Tabs__TopHashtagIndividualActiveRight",
  componentId: "sc-1mz9w2n-9"
})(["background:#212528;color:#fff;padding:8px;margin:0 10px;border-radius:2px;", " margin:0 auto;:hover{cursor:pointer;}margin-right:0;"], _shared_helpers__WEBPACK_IMPORTED_MODULE_6__["wideFont"]);
var TopHashtagIndividualActivePnl = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "Tabs__TopHashtagIndividualActivePnl",
  componentId: "sc-1mz9w2n-10"
})(["color:#fff;padding:0px;margin:0 10px;border-radius:2px;", ":hover{cursor:pointer;}margin:auto;"], _shared_helpers__WEBPACK_IMPORTED_MODULE_6__["wideFont"]);
var ChartWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "Tabs__ChartWrapper",
  componentId: "sc-1mz9w2n-11"
})(["background:white;padding:5px;width:100%;padding:10px;@media (max-width:768px){margin:0 5vw;}"]);
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "Tabs__Wrapper",
  componentId: "sc-1mz9w2n-12"
})(["display:flex;margin-top:5px;"]);

/***/ }),

/***/ "./components/Dashboard/Tades/Trades.js":
/*!**********************************************!*\
  !*** ./components/Dashboard/Tades/Trades.js ***!
  \**********************************************/
/*! exports provided: default, ContainDiv, ContainDivClicked, ContainDivBlack, ContainDivHeader, NextToDiv, NextToDivBlack, NextToDivBlackTitle, NextToDivBlackTime, NextToDivHeader */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NextToDivBlackTitle", function() { return NextToDivBlackTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NextToDivBlackTime", function() { return NextToDivBlackTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NextToDivHeader", function() { return NextToDivHeader; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recharts */ "recharts");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(recharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/helpers */ "./components/shared/helpers.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../theme */ "./components/theme.js");
/* harmony import */ var _Helpers_Functions_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Helpers/Functions.js */ "./components/Helpers/Functions.js");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mobx-react */ "mobx-react");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Chart_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Chart/index */ "./components/Dashboard/Chart/index.js");
/* harmony import */ var _Notes_Notes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Notes/Notes */ "./components/Dashboard/Notes/Notes.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! fast-deep-equal */ "fast-deep-equal");
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(fast_deep_equal__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_autosize_textarea__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-autosize-textarea */ "react-autosize-textarea");
/* harmony import */ var react_autosize_textarea__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_autosize_textarea__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _Notes_TextArea__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Notes/TextArea */ "./components/Dashboard/Notes/TextArea.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! mobx */ "mobx");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _calcTrades__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./calcTrades */ "./components/Dashboard/Tades/calcTrades.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_17__);


var _dec, _class, _dec2, _class2;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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


















var Example = (_dec2 = Object(mobx_react__WEBPACK_IMPORTED_MODULE_7__["inject"])(["store"]), _dec2(_class2 = Object(mobx_react__WEBPACK_IMPORTED_MODULE_7__["observer"])(_class2 =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Example, _PureComponent);

  function Example(props) {
    var _this3;

    _classCallCheck(this, Example);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(Example).call(this, props));
    _this3.state = {
      width: 0,
      height: 0,
      data: [],
      fullTrades: [],
      hasSingleTrade: false
    };
    _this3.updateWindowDimensions = _this3.updateWindowDimensions.bind(_assertThisInitialized(_this3));
    _this3.createFullTrades = _this3.createFullTrades.bind(_assertThisInitialized(_this3));
    return _this3;
  }

  _createClass(Example, [{
    key: "createFullTrades",
    value: function createFullTrades(data) {
      var fullRay = [];
      var fullTrades = [];

      for (var i = 0; i < data.fetchTradeHistory.length; i++) {
        fullRay.unshift(data.fetchTradeHistory[i]);

        if (i == data.fetchTradeHistory.length - 1) {
          for (var j = 0; j < fullRay.length; j++) {
            var dat = fullRay[j]; // dat.timestamp = formatDateForRow(dat.timestamp);
            // fullRay[j] = dat;

            if (dat.trdStart == true) {
              var sliced = fullRay.slice(j, fullRay.length);

              for (var k = 0; k < sliced.length; k++) {
                if (sliced[k].trdEnd == true && k > 0) {
                  var newsliced = sliced.slice(0, k + 1);
                  fullTrades.unshift(newsliced);
                  break;
                }
              }
            }

            if (j == fullRay.length - 1) {
              var returnVal = {};
              returnVal["initData"] = this.props.initData;
              returnVal["data"] = fullRay;
              returnVal["fullTrades"] = fullTrades;
              return returnVal;
            }
          }
        }
      }
    }
  }, {
    key: "filter",
    value: function filter() {}
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (!fast_deep_equal__WEBPACK_IMPORTED_MODULE_12___default()(this.props.filteredData, prevProps.filteredData)) {
        // this.updateTrades(this.props.data);
        var newFullTrades = [];
        var firstFullTrades = this.createFullTrades(this.props.data);
        firstFullTrades = firstFullTrades.fullTrades;

        if (this.props.filteredData == null) {
          this.setState({
            fullTrades: firstFullTrades
          });
        } else {
          for (var i = 0; i < firstFullTrades.length; i++) {
            for (var j = 0; j < this.props.filteredData.length; j++) {
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
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this4 = this;

      var returned = this.createFullTrades(this.props.data);

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
      this.singleNotesReaction = Object(mobx__WEBPACK_IMPORTED_MODULE_15__["reaction"])(function () {
        return _this4.props.store.isSingleNotes;
      }, function (notifications, reaction) {
        if (_this4.props.store.isSingleNotes == false) {
          _this4.setState({
            isSingleNotes: false
          });
        } else {
          _this4.setState({
            isSingleNotes: true
          });
        }
      });
      this.singleTradeReaction = Object(mobx__WEBPACK_IMPORTED_MODULE_15__["reaction"])(function () {
        return _this4.props.store.hasSingleTrade;
      }, function (notifications, reaction) {
        _this4.props.store.pnl = 0;

        if (_this4.props.store.hasSingleTrade == false) {
          _this4.setState({
            hasSingleTrade: false
          });
        } else {
          _this4.setState({
            hasSingleTrade: true
          });
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
      var _this5 = this;

      if (this.state.hasSingleTrade == false) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
          theme: Object(_theme__WEBPACK_IMPORTED_MODULE_5__["default"])(false)
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          style: {
            minWidth: this.state.chartWidth
          }
        }, this.state.fullTrades.map(function (slic, i) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MakeCol, {
            clicked: false,
            slic: slic,
            onemin: _this5.props.data.fetchOneMinuteCandleHistory,
            fivemin: _this5.props.data.fetchFiveMinuteCandleHistory,
            onehour: _this5.props.data.fetchOneHourCandleHistory,
            oneday: _this5.props.data.fetchOneDayCandleHistory,
            key: i
          });
        })));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
          theme: Object(_theme__WEBPACK_IMPORTED_MODULE_5__["default"])(false)
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          style: {
            minWidth: this.state.chartWidth
          }
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MakeCol, {
          clicked: true,
          slic: this.props.store.singleTrade,
          onemin: this.props.data.fetchOneMinuteCandleHistory,
          fivemin: this.props.data.fetchFiveMinuteCandleHistory,
          onehour: this.props.data.fetchOneHourCandleHistory,
          oneday: this.props.data.fetchOneDayCandleHistory
        })));
      }
    }
  }]);

  return Example;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"])) || _class2) || _class2);

var MakeCol = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_7__["inject"])("store"), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_7__["observer"])(_class =
/*#__PURE__*/
function (_Component) {
  _inherits(MakeCol, _Component);

  function MakeCol(props) {
    var _this;

    _classCallCheck(this, MakeCol);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MakeCol).call(this, props));
    _this.state = {
      data: [],
      pnl: 0,
      avgEntryPrice: 0,
      avgExitPrice: 0,
      clicked: false,
      cumQty: 0,
      readMoreClicked: false
    };
    _this.readMoreClicked = _this.readMoreClicked.bind(_assertThisInitialized(_this));
    _this.clicked = _this.clicked.bind(_assertThisInitialized(_this));
    _this.getSlicData = _this.getSlicData.bind(_assertThisInitialized(_this));
    _this.updateWindowDimensions = _this.updateWindowDimensions.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(MakeCol, [{
    key: "updateWindowDimensions",
    value: function updateWindowDimensions() {
      this.setState({
        width: window.innerWidth
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("resize", this.updateWindowDimensions);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener("resize", this.updateWindowDimensions);
      this.setState({
        clicked: this.props.clicked
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (!fast_deep_equal__WEBPACK_IMPORTED_MODULE_12___default()(this.props.slic, prevProps.slic)) {
        this.getSlicData();
      }
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      this.getSlicData();
      this.updateWindowDimensions();
    }
  }, {
    key: "getSlicData",
    value: function () {
      var _getSlicData = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var calced;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.state.data = this.props.slic;
                _context.next = 3;
                return Object(_calcTrades__WEBPACK_IMPORTED_MODULE_16__["calcTrades"])(this.props.slic);

              case 3:
                calced = _context.sent;

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

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getSlicData() {
        return _getSlicData.apply(this, arguments);
      }

      return getSlicData;
    }()
  }, {
    key: "clicked",
    value: function clicked(dat) {
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
  }, {
    key: "readMoreClicked",
    value: function readMoreClicked() {
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
      var _this2 = this;

      if (this.state.clicked == false) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ContainDiv, {
          onClick: function onClick() {
            return _this2.clicked(_this2.state.data);
          }
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NextToDiv, null, Object(_Helpers_Functions_js__WEBPACK_IMPORTED_MODULE_6__["formatDateMonthOnly"])(this.state.data[0].timestamp)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NextToDiv, null, Object(_Helpers_Functions_js__WEBPACK_IMPORTED_MODULE_6__["formatDateMonthOnly"])(this.state.data[this.state.data.length - 1].timestamp)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(IsShort, {
          side: this.state.data[0].side,
          last: this.state.data[this.state.data.length - 1].orderType
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NextToDiv, null, "$", this.state.avgEntryPrice.toFixed(1)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NextToDiv, null, "$", this.state.avgExitPrice.toFixed(1)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NextToDiv, null, this.state.cumQty), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NextToDiv, null, this.state.pnl.toFixed(4) + "xbt"));
      } else {
        if (this.props.store.isSingleNotes == false) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TotalDetails, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MoreBoxTall, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ContainDivClicked, {
            onClick: function onClick() {
              return _this2.clicked(_this2.state.data);
            }
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NextToDiv, null, Object(_Helpers_Functions_js__WEBPACK_IMPORTED_MODULE_6__["formatDateMonthOnly"])(this.state.data[0].timestamp)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NextToDiv, null, Object(_Helpers_Functions_js__WEBPACK_IMPORTED_MODULE_6__["formatDateMonthOnly"])(this.state.data[this.state.data.length - 1].timestamp)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(IsShort, {
            side: this.state.data[0].side,
            last: this.state.data[this.state.data.length - 1].orderType
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NextToDiv, null, "$", this.state.avgEntryPrice.toFixed(1)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NextToDiv, null, "$", this.state.avgExitPrice.toFixed(1)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NextToDiv, null, this.state.cumQty), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NextToDiv, null, this.state.pnl.toFixed(4) + "xbt"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Chart_index__WEBPACK_IMPORTED_MODULE_8__["default"], {
            onemin: this.props.onemin,
            fivemin: this.props.fivemin,
            onehour: this.props.onehour,
            oneday: this.props.oneday,
            trades: this.state.data
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_17__["ApolloConsumer"], null, function (client) {
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Notes_TextArea__WEBPACK_IMPORTED_MODULE_14__["default"], {
              firstTrade: _this2.state.data[0],
              client: client
            });
          }));
        } else {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TotalDetails, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MoreBoxTall, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(OrderExecution, {
            data: this.state.data
          })));
        }
      }
    }
  }]);

  return MakeCol;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"])) || _class) || _class);

var IsShort =
/*#__PURE__*/
function (_Component2) {
  _inherits(IsShort, _Component2);

  function IsShort() {
    _classCallCheck(this, IsShort);

    return _possibleConstructorReturn(this, _getPrototypeOf(IsShort).apply(this, arguments));
  }

  _createClass(IsShort, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log(this.props.last);
    }
  }, {
    key: "render",
    value: function render() {
      if (this.props.side == "Sell") {
        if (this.props.last.includes("Stop")) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NextToDiv, null, "Short");
        } else {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NextToDiv, null, "Short");
        }
      } else {
        if (this.props.last.includes("Stop")) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NextToDiv, null, "Long");
        } else {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NextToDiv, null, "Long");
        }
      }
    }
  }]);

  return IsShort;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

var OrderExecution = function OrderExecution(_ref) {
  var data = _ref.data;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ExecContainer, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ContainDivBlack, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NextToDivBlackTitle, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TitleSpan, null, "Timestamp")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NextToDivBlackTitle, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TitleSpan, null, "Side")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NextToDivBlackTitle, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TitleSpan, null, "Order Type")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NextToDivBlackTitle, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TitleSpan, null, "Price")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NextToDivBlackTitle, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TitleSpan, null, "Order Qty")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NextToDivBlackTitle, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TitleSpan, null, "Leaves Qty")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NextToDivBlackTitle, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TitleSpan, null, "Commission"))), data.map(function (dat) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ContainDivBlack, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NextToDivBlack, null, Object(_Helpers_Functions_js__WEBPACK_IMPORTED_MODULE_6__["formatDateMonthOnly"])(dat.timestamp)), dat.execType == "Trade" ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NextToDivBlack, null, dat.side) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NextToDivBlack, null, dat.execType), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NextToDivBlack, null, dat.orderType), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NextToDivBlack, null, "$", dat.price.toString()), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NextToDivBlack, null, dat.orderQty), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NextToDivBlack, null, dat.leavesQty == "0" ? "" : dat.leavesQty), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NextToDivBlack, null, dat.execType == "Funding" ? "" : Object(_Helpers_Functions_js__WEBPACK_IMPORTED_MODULE_6__["calcCommission"])(dat.price, dat.side, dat.orderQty, dat.leavesQty, dat.orderType)));
  }));
};

var ContainDiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "Trades__ContainDiv",
  componentId: "bmyhv8-0"
})(["width:100%;display:flex;flex-direction:row;height:47px;border-bottom:1px solid #f2f2f2;font-weight:400;&:hover{transition:none;background:#f8f8ff;cursor:pointer;}"]);
var ContainDivClicked = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "Trades__ContainDivClicked",
  componentId: "bmyhv8-1"
})(["width:100%;display:flex;flex-direction:row;height:47px;transition:none;font-weight:400;border-bottom:1px solid #f2f2f2;border-radius:none;cursor:pointer;background:#f8f8ff;background:#ffffff;"]);
var ContainDivBlack = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "Trades__ContainDivBlack",
  componentId: "bmyhv8-2"
})(["width:100%;display:flex;flex-direction:row;height:40px;background:#f8f8ff;border-bottom:1px solid #f2f2f2;"]);
var ContainDivHeader = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "Trades__ContainDivHeader",
  componentId: "bmyhv8-3"
})(["width:100%;display:flex;flex-direction:row;height:38px;border-bottom:1px solid #d3d3d3;"]); // f2f2f2
// border-right: 1px solid #f2f2f2;

var NextToDiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "Trades__NextToDiv",
  componentId: "bmyhv8-4"
})(["display:inline-block;width:30%;padding:8px;padding-top:12px;padding-left:12px;color:#000;font-weight:300;font-size:14px;@media (max-width:550px){font-size:13px;}"]);
var NextToDivBlack = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "Trades__NextToDivBlack",
  componentId: "bmyhv8-5"
})(["display:inline-block;width:30%;padding:4px;padding-left:12px;font-size:14px;padding-top:9px;"]); // border-right: 1px solid #f2f2f2;

var NextToDivBlackTitle = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "Trades__NextToDivBlackTitle",
  componentId: "bmyhv8-6"
})(["display:inline-block;width:30%;padding:4px;padding-left:14px;padding-top:9px;font-size:14px;"]);
var TitleSpan = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.span.withConfig({
  displayName: "Trades__TitleSpan",
  componentId: "bmyhv8-7"
})(["display:inline-block;border-bottom:1px dotted black;padding-bottom:0px;font-size:13px;font-weight:300;color:black;"]);
var NextToDivBlackTime = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "Trades__NextToDivBlackTime",
  componentId: "bmyhv8-8"
})(["display:inline-block;width:30%;padding:4px;padding-left:12px;font-size:14px;padding-top:10px;@media (max-width:1200px){font-size:13px;}@media (max-width:663px){padding-top:0px !important;}"]);
var NextToDivHeader = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "Trades__NextToDivHeader",
  componentId: "bmyhv8-9"
})(["display:inline-block;width:30%;color:#78838e;font-weight:600;display:inline-block;text-transform:uppercase;padding:10px;padding-left:12px;", " font-size:13px;"], _shared_helpers__WEBPACK_IMPORTED_MODULE_4__["smallFont"]);
var InnerPnlWin = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "Trades__InnerPnlWin",
  componentId: "bmyhv8-10"
})(["background:black;margin-right:auto;padding:0 3px;max-width:80px;color:white;font-weight:600;"]);
var InnerPnlLoss = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "Trades__InnerPnlLoss",
  componentId: "bmyhv8-11"
})(["background:red;margin-right:auto;padding:0 3px;border-radius:2px;max-width:80px;color:white;font-weight:600;"]);
var ReadMore = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "Trades__ReadMore",
  componentId: "bmyhv8-12"
})(["position:absolute;bottom:0;left:0;width:100%;text-align:center;margin:0;padding:10px 0;background-image:-webkit-gradient( linear,left top,left bottom,color-stop(0,rgba(255,0,0,0)),color-stop(1,rgba(248,248,255,1)) );"]);
var ReadMoreTall = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "Trades__ReadMoreTall",
  componentId: "bmyhv8-13"
})(["position:absolute;bottom:0;left:0;width:100%;text-align:center;margin:0;padding:10px 0;"]); // background-image: linear-gradient(to bottom, transparent, black);

var MoreBoxShort = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "Trades__MoreBoxShort",
  componentId: "bmyhv8-14"
})(["max-height:300px;position:relative;overflow:hidden;"]);
var MoreBoxTall = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "Trades__MoreBoxTall",
  componentId: "bmyhv8-15"
})(["max-height:none;position:relative;overflow:hidden;"]);
var ExecContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "Trades__ExecContainer",
  componentId: "bmyhv8-16"
})(["max-height:none;position:relative;overflow:hidden;border:1px solid #f2f2f2;"]);
var TotalDetails = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "Trades__TotalDetails",
  componentId: "bmyhv8-17"
})([""]); // border: 1px solid rgba(33, 37, 40, 0.7);

var ReadMoreInner = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "Trades__ReadMoreInner",
  componentId: "bmyhv8-18"
})(["color:rgba(33,37,40,1);padding:0;margin:auto;width:30px;border-radius:2px;-webkit-transition-property:none;-moz-transition-property:none;-o-transition-property:none;transition-property:none;:hover{cursor:pointer;background-color:rgba(33,37,40,1);color:#fff;-webkit-transition-property:none;-moz-transition-property:none;-o-transition-property:none;transition-property:none;}font-size:20px;"]);

/***/ }),

/***/ "./components/Dashboard/Tades/calcTrades.js":
/*!**************************************************!*\
  !*** ./components/Dashboard/Tades/calcTrades.js ***!
  \**************************************************/
/*! exports provided: calcTrades */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcTrades", function() { return calcTrades; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function calcTrades(_x) {
  return _calcTrades.apply(this, arguments);
}

function _calcTrades() {
  _calcTrades = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(inputData) {
    var _ret, _ret3;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(inputData[0].side == "Buy" && inputData[0].execType == "Trade")) {
              _context.next = 4;
              break;
            }

            _ret = function () {
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

              for (var i = 0; i < inputData.length; i++) {
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
                  var _ret2 = function () {
                    avgBuyPrice = totBuyContractsMult / totBuyContracts;
                    avgSellPrice = totSellContractsMult / totSellContracts;
                    var avgExit = void 0;
                    var avgEntry = void 0;

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


                    var thePnl = (1 / avgBuyPrice - 1 / avgSellPrice) * totSellContracts;

                    if (thePnl != null) {
                      var myPnl = thePnl + totCommission;
                      return {
                        v: {
                          v: new Promise(function (resolve) {
                            var end = {};
                            end["pnl"] = myPnl;
                            end["avgEntryPrice"] = avgEntry;
                            end["avgExitPrice"] = avgExit;
                            end["cumQty"] = totBuyContracts;
                            resolve(end);
                          })
                        }
                      }; //   store.addPnl(myPnl);
                    } else {
                      return {
                        v: {
                          v: new Promise(function (resolve) {
                            var end = {};
                            end["pnl"] = 0;
                            end["avgEntryPrice"] = avgEntry;
                            end["avgExitPrice"] = avgExit;
                            end["cumQty"] = totBuyContracts;
                            resolve(end);
                          })
                        }
                      };
                    }
                  }();

                  if (_typeof(_ret2) === "object") return _ret2.v;
                }
              }
            }();

            if (!(_typeof(_ret) === "object")) {
              _context.next = 4;
              break;
            }

            return _context.abrupt("return", _ret.v);

          case 4:
            if (!(inputData[0].side == "Sell" && inputData[0].execType == "Trade")) {
              _context.next = 8;
              break;
            }

            _ret3 = function () {
              var totBuyContracts = 0;
              var totSellContracts = 0;
              var buyNum = 0;
              var sellNum = 0;
              var totBuyContractsMult = 0;
              var totSellContractsMult = 0;
              var realQty = 0;
              var totCommission = 0;

              for (var i = 0; i < inputData.length; i++) {
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
                    var difference = inputData[i].orderQty + inputData[i].currentQty;
                    var newRealQty = inputData[i].orderQty - difference;
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
                  var _ret4 = function () {
                    var avgBuyPrice = totBuyContractsMult / totBuyContracts;
                    var avgSellPrice = totSellContractsMult / totSellContracts;
                    var pnl = (1 / avgBuyPrice - 1 / avgSellPrice) * totBuyContracts;

                    if (inputData[0].orderQty == 40000) {
                      console.log(pnl, avgBuyPrice, avgSellPrice, totBuyContracts);
                    }

                    var avgEntry = void 0;
                    var avgExit = void 0;

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
                      var myPnl = pnl + totCommission;
                      return {
                        v: {
                          v: new Promise(function (resolve) {
                            var end = {};
                            end["pnl"] = myPnl;
                            end["avgEntryPrice"] = avgEntry;
                            end["avgExitPrice"] = avgExit;
                            end["cumQty"] = totSellContracts;

                            if (inputData[0].orderQty == 40000) {
                              console.log(end);
                            }

                            resolve(end);
                          })
                        }
                      };
                    } else {
                      return {
                        v: {
                          v: new Promise(function (resolve) {
                            var end = {};
                            end["pnl"] = 0;
                            end["avgEntryPrice"] = avgEntry;
                            end["avgExitPrice"] = avgExit;
                            end["cumQty"] = totSellContracts;
                            resolve(end);
                          })
                        }
                      };
                    }
                  }();

                  if (_typeof(_ret4) === "object") return _ret4.v;
                }
              }
            }();

            if (!(_typeof(_ret3) === "object")) {
              _context.next = 8;
              break;
            }

            return _context.abrupt("return", _ret3.v);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _calcTrades.apply(this, arguments);
}

/***/ }),

/***/ "./components/Dashboard/shared/helpers.js":
/*!************************************************!*\
  !*** ./components/Dashboard/shared/helpers.js ***!
  \************************************************/
/*! exports provided: getNewDat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNewDat", function() { return getNewDat; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getNewDat =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(oldDat, hashtags) {
    var newTrades, oldTrades, i, tradeHashtags, oldTrade, j, m;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            newTrades = [];
            oldTrades = oldDat.fetchTradeHistory;
            i = 0;

          case 3:
            if (!(i < oldTrades.length)) {
              _context.next = 14;
              break;
            }

            tradeHashtags = oldTrades[i].hashtags.split(",");
            oldTrade = oldTrades[i];
            console.log(tradeHashtags);

            if (tradeHashtags[0] != "undefined") {
              for (j = 0; j < tradeHashtags.length; j++) {
                for (m = 0; m < hashtags.length; m++) {
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

            if (!(i == oldTrades.length - 1)) {
              _context.next = 11;
              break;
            }

            console.log(newTrades, "FILTERED TRADES");
            return _context.abrupt("return", newTrades);

          case 11:
            i++;
            _context.next = 3;
            break;

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getNewDat(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./components/Header/DashboardHeader.js":
/*!**********************************************!*\
  !*** ./components/Header/DashboardHeader.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../theme */ "./components/theme.js");
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Logo */ "./components/Header/Logo.js");
/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header.scss */ "./components/Header/header.scss");
/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_header_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Menu_Datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Menu/Datepicker */ "./components/Menu/Datepicker.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
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














var Cookie = __webpack_require__(/*! js-cookie */ "js-cookie");

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
var LogoWrap = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "DashboardHeader__LogoWrap",
  componentId: "sc-1szqfd9-0"
})([""]);
var TempDiv = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "DashboardHeader__TempDiv",
  componentId: "sc-1szqfd9-1"
})(["margin:auto;"]);
var LinksWrap = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "DashboardHeader__LinksWrap",
  componentId: "sc-1szqfd9-2"
})(["margin-right:0;margin-left:auto;display:flex;flex-direction:row;"]);
var DatePickersWrap = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "DashboardHeader__DatePickersWrap",
  componentId: "sc-1szqfd9-3"
})(["margin-left:20px;margin-right:auto;display:flex;flex-direction:row;"]);
var DatePickerWrap = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "DashboardHeader__DatePickerWrap",
  componentId: "sc-1szqfd9-4"
})(["margin:auto 10px;"]);
var StyledLink = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
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
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.header.withConfig({
  displayName: "DashboardHeader__Wrapper",
  componentId: "sc-1szqfd9-6"
})(["position:sticky;z-index:10;top:0;display:flex;align-items:stretch;border-bottom:2px solid #eee;height:55px;padding:0 0vw;font-weight:700;background-color:", ";user-select:none;background-color:#212527;@media (max-width:425px){margin-bottom:16px;height:40px;}@media (max-width:768px){padding:0;}"], function (props) {
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





var HeaderLogo = function HeaderLogo() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Logo, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    prefetch: true,
    href: "/"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u20BFitsjournal")));
};

/* harmony default export */ __webpack_exports__["default"] = (HeaderLogo);
var Logo = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Logo",
  componentId: "sc-195qc4m-0"
})(["", " margin-right:0;font-size:26px;font-weight:500;color:", ";text-decoration:none;color:#fff;@media (max-width:425px){padding:0 8px 0 16px;font-size:19px;}"], _shared_helpers__WEBPACK_IMPORTED_MODULE_3__["headerItem"], function (props) {
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
  var utcDate = date;
  var theDate = new Date(utcDate);
  var day = theDate.getDate();
  var hours = addZeroBefore(theDate.getHours());
  var mins = addZeroBefore(theDate.getMinutes());
  var monthIndex = theDate.getMonth(); // var monthIndex = addZeroBefore(theDate.getMonth());

  var year = theDate.getFullYear();
  return day + " " + monthNames[monthIndex] + ", " + hours + ":" + mins;
}
function formatDateShort(date) {
  var utcDate = date;
  var theDate = new Date(utcDate);
  var day = addZeroBefore(theDate.getDate());
  var hours = addZeroBefore(theDate.getHours());
  var mins = addZeroBefore(theDate.getMinutes());
  var monthIndex = addZeroBefore(theDate.getMonth());
  var year = theDate.getFullYear();
  return monthIndex.toString() + "/" + day.toString();
}
function formatDateShortWithHour(date) {
  var utcDate = date;
  var theDate = new Date(utcDate);
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
    var dates = {};
    dates.end = makeDateHrs(0);
    dates.start = makeDateHrs(24);
    console.log("is today");
    return dates;
  }

  if (input == "Yesterday") {
    var _dates = {};
    _dates.end = makeDateHrs(1);
    _dates.start = makeDateDays(2);
    console.log("is yesterday");
    return _dates;
  }

  if (input == "This Week") {
    var _dates2 = {};
    _dates2.end = makeDateHrs(0);
    _dates2.start = makeDateDays(7);
    console.log("is this week");
    return _dates2;
  }

  if (input == "This Month") {
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
function calcCommission(price, side, qty, leavesQty, orderType) {
  var realQty = qty - leavesQty;
  var commission;

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

/***/ "./components/Menu/768px/Menu.js":
/*!***************************************!*\
  !*** ./components/Menu/768px/Menu.js ***!
  \***************************************/
/*! exports provided: SymbolChooser768, Pnl768, default, SetSymbol */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SymbolChooser768", function() { return SymbolChooser768; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pnl768", function() { return Pnl768; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetSymbol", function() { return SetSymbol; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../theme */ "./components/theme.js");
/* harmony import */ var _CategoryList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CategoryList */ "./components/Menu/CategoryList.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Header */ "./components/Menu/Header.js");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mobx-react */ "mobx-react");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mobx-react-lite */ "mobx-react-lite");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Dashboard_Tades_Trades__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Dashboard/Tades/Trades */ "./components/Dashboard/Tades/Trades.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _shared_helpers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/helpers */ "./components/shared/helpers.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }













var SymbolChooser768 = Object(mobx_react__WEBPACK_IMPORTED_MODULE_5__["inject"])("store")(Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_6__["observer"])(function (_ref) {
  var store = _ref.store;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      dropdown = _useState2[0],
      setDropdown = _useState2[1];

  var showDropdown = function showDropdown() {
    if (dropdown == false) {
      setDropdown(true);
    } else {
      setDropdown(false);
    }
  };

  var clicked = function clicked(value) {
    store.setSymbol(value);
    store.changeHasTempTags();
    setDropdown(false);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LapperChooser, {
    onClick: function onClick() {
      showDropdown();
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SetSymbol, {
    style: {
      marginLeft: "2px"
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InnerSymbolChooser, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, store.symbol), dropdown == true ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faCaretUp"],
    style: {
      transition: "none",
      marginRight: "3px",
      marginLeft: "3px",
      marginTop: "2px"
    }
  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faCaretDown"],
    style: {
      transition: "none",
      marginRight: "3px",
      marginLeft: "3px",
      marginTop: "2px"
    }
  }))), dropdown == true ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DropdownListContainer, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DropdownListItem, {
    onClick: function onClick() {
      return clicked("XBTUSD");
    }
  }, "XBTUSD"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DropdownListItem, {
    onClick: function onClick() {
      return clicked("XBTU20");
    }
  }, "XBTU20"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DropdownListItem, {
    onClick: function onClick() {
      return clicked("XBTM20");
    }
  }, "XBTM20")) : null);
}));
var Pnl768 = Object(mobx_react__WEBPACK_IMPORTED_MODULE_5__["inject"])("store")(Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_6__["observer"])(function (_ref2) {
  var store = _ref2.store;

  if (store.pnl >= 0) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Lapper2, {
      style: {
        marginRight: "2px"
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InnerLapper, {
      style: {
        padding: "4px"
      }
    }, store.pnl.toFixed(4) + "xbt"));
  } else {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Lapper3, {
      style: {
        marginRight: "2px"
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InnerLapper, {
      style: {
        padding: "4px"
      }
    }, store.pnl.toFixed(4) + "xbt"));
  }
}));
var Sidebar = Object(mobx_react__WEBPACK_IMPORTED_MODULE_5__["inject"])("store")(Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_6__["observer"])(function (_ref3) {
  var store = _ref3.store;

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      dropdown = _useState4[0],
      setDropdown = _useState4[1];

  var clicked = function clicked(value) {
    store.setSymbol(value);
    store.changeHasTempTags();
    setDropdown(false);
  };

  var showDropdown = function showDropdown() {
    if (dropdown == false) {
      setDropdown(true);
    } else {
      setDropdown(false);
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
    theme: Object(_theme__WEBPACK_IMPORTED_MODULE_2__["default"])(false)
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LapperContainer, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Lapper4, {
    onClick: function onClick() {
      showDropdown();
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SetSymbol, null, store.symbol, dropdown == true ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faCaretUp"],
    style: {
      transition: "none",
      marginRight: "4px",
      marginLeft: "3px"
    }
  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faCaretDown"],
    style: {
      transition: "none",
      marginRight: "4px",
      marginLeft: "3px"
    }
  })), dropdown == true ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DropdownListContainer, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DropdownListItem, {
    onClick: function onClick() {
      return clicked("XBTUSD");
    }
  }, "XBTUSD"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DropdownListItem, {
    onClick: function onClick() {
      return clicked("XBTU20");
    }
  }, "XBTU20"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DropdownListItem, {
    onClick: function onClick() {
      return clicked("XBTM20");
    }
  }, "XBTM20")) : null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Lapper, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CategoryList__WEBPACK_IMPORTED_MODULE_3__["default"], null)), store.pnl >= 0 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Lapper2, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InnerLapper, null, store.pnl.toFixed(4) + "xbt")) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Lapper3, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InnerLapper, null, store.pnl.toFixed(4) + "xbt"))));
}));
/* harmony default export */ __webpack_exports__["default"] = (Sidebar);
var LapperContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Menu__LapperContainer",
  componentId: "moll33-0"
})(["display:flex;flex-direction:column;margin-left:24px;"]);
var InnerSymbolChooser = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Menu__InnerSymbolChooser",
  componentId: "moll33-1"
})(["margin:auto;width:65px;display:flex;flex-direction:row;padding-top:4px;"]);
var Lapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.aside.withConfig({
  displayName: "Menu__Lapper",
  componentId: "moll33-2"
})(["display:flex;flex-direction:column;flex-basis:240px;border-radius:2px;background-color:", ";background-color:#212529;margin-bottom:10px;@media (max-width:768px){display:none;}"], function (props) {
  return props.theme.foreground;
});
var InnerLapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Menu__InnerLapper",
  componentId: "moll33-3"
})(["color:white;text-align:center;margin:auto;"]);
var Lapper2 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.aside.withConfig({
  displayName: "Menu__Lapper2",
  componentId: "moll33-4"
})(["border-radius:2px;background-color:", ";background-color:green;margin-left:0;margin-right:auto;margin-top:0;margin-bottom:0;width:100%;"], function (props) {
  return props.theme.foreground;
});
var LapperChooser = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.aside.withConfig({
  displayName: "Menu__LapperChooser",
  componentId: "moll33-5"
})(["border-radius:2px;background-color:", ";margin-left:0;margin-right:auto;margin-top:0;margin-bottom:0;width:100%;"], function (props) {
  return props.theme.foreground;
});
var Lapper3 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.aside.withConfig({
  displayName: "Menu__Lapper3",
  componentId: "moll33-6"
})(["border-radius:2px;background-color:", ";background-color:red;margin-left:0;margin-right:auto;width:100%;"], function (props) {
  return props.theme.foreground;
});
var Lapper4 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.aside.withConfig({
  displayName: "Menu__Lapper4",
  componentId: "moll33-7"
})(["display:flex;flex-direction:column;border-radius:2px;background-color:", ";background-color:#212529;margin-bottom:10px;@media (max-width:768px){display:none;}"], function (props) {
  return props.theme.foreground;
});
var SetSymbol = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Menu__SetSymbol",
  componentId: "moll33-8"
})(["font-weight:500;font-size:14px;", " color:#fff;background-color:#212527;height:100%;:hover{cursor:pointer;}"], _shared_helpers__WEBPACK_IMPORTED_MODULE_10__["wideFont"]);
var DropdownContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Menu__DropdownContainer",
  componentId: "moll33-9"
})(["height:100px;"]);
var DropdownListContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.ul.withConfig({
  displayName: "Menu__DropdownListContainer",
  componentId: "moll33-10"
})(["list-style-type:none;position:absolute;margin-left:-8px;border-radius:2px;background-color:#212527;"]);
var DropdownListItem = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.li.withConfig({
  displayName: "Menu__DropdownListItem",
  componentId: "moll33-11"
})(["text-align:center;font-weight:500;font-size:14px;color:#fff;background-color:#212529;padding:2px 15px;margin:4px 0;", ":hover{cursor:pointer;color:#000;background-color:#fff;}"], _shared_helpers__WEBPACK_IMPORTED_MODULE_10__["wideFont"]);

/***/ }),

/***/ "./components/Menu/CategoryList.js":
/*!*****************************************!*\
  !*** ./components/Menu/CategoryList.js ***!
  \*****************************************/
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
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mobx-react-lite */ "mobx-react-lite");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__);
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
    if (customClicked == true) {
      setCustomClicked(false);
    } else {
      setCustomClicked(true);
    }
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
  }, "This Month"), customClicked == true || store.date == "Custom" ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ItemActive, {
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
var Row1 = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "CategoryList__Row1",
  componentId: "k2se5c-0"
})(["margin-bottom:5px;"]);
var PopContain = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "CategoryList__PopContain",
  componentId: "k2se5c-1"
})(["margin:5px;"]);
var PopLabel = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "CategoryList__PopLabel",
  componentId: "k2se5c-2"
})(["color:#fff;"]);
var PopEnter = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "CategoryList__PopEnter",
  componentId: "k2se5c-3"
})(["margin-top:5px;background:#fff;padding:2px;border-radius:1px;"]);
var PopupTop = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "CategoryList__PopupTop",
  componentId: "k2se5c-4"
})(["position:absolute;background:#000;z-index:1;margin:5px;padding:2px;border-radius:2px;"]);
var PopupItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "CategoryList__PopupItem",
  componentId: "k2se5c-5"
})(["position:relative;display:inline-block;cursor:pointer;"]);
var CategoryList = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.nav.withConfig({
  displayName: "CategoryList",
  componentId: "k2se5c-6"
})(["display:flex;flex-direction:column;"]);
var Item = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "CategoryList__Item",
  componentId: "k2se5c-7"
})(["padding:12px;font-size:15px;text-decoration:none;color:", ";color:white;::after{left:-1px;top:0;bottom:0;border-left:3px solid ", ";}&:hover{background-color:#fff;color:#212529;cursor:pointer;}"], function (props) {
  return props.theme.normalText;
}, function (props) {
  return props.theme.accent;
});
var ItemActive = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "CategoryList__ItemActive",
  componentId: "k2se5c-8"
})(["padding:12px;font-size:15px;font-weight:300;text-decoration:none;color:", ";color:white;::after{left:-1px;top:0;bottom:0;border-left:3px solid ", ";}background-color:#fff;color:#212529;cursor:pointer;"], function (props) {
  return props.theme.normalText;
}, function (props) {
  return props.theme.accent;
});

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

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var Example = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_2__["inject"])(["store"]), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_2__["observer"])(_class = (_temp =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Example, _React$Component);

  function Example(props) {
    var _this;

    _classCallCheck(this, Example);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Example).call(this, props));

    _this.handleChange = function (date) {
      _this.setState({
        date: date
      });

      console.log(date, "THIS IS DATE");
    };

    _this.state = {
      date: new Date()
    };
    return _this;
  }

  _createClass(Example, [{
    key: "componentWillMount",
    value: function componentWillMount() {}
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.dateReaction = Object(mobx__WEBPACK_IMPORTED_MODULE_5__["reaction"])(function () {
        return _this2.props.store.startDate;
      }, function (notifications, reaction) {
        if (_this2.props.store.startDate !== null) {
          if (_this2.props.start == true) {
            _this2.setState({
              date: new Date(_this2.props.store.startDate)
            });
          } else {
            _this2.setState({
              date: new Date(_this2.props.store.endDate)
            });
          }
        }
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      console.log("just updated");

      if (this.props.set == true) {
        console.log("not equal");

        if (this.props.start == true) {
          console.log("was true");
          var firstDate = this.state.date.toISOString();
          var multiDate = firstDate.split("T");
          this.props.store.startDate = multiDate[0] + "T00:00:00.000Z";
          this.props.store.date = "Custom";
        }

        if (this.props.start == false) {
          console.log("was false");

          var _firstDate = this.state.date.toISOString();

          var _multiDate = _firstDate.split("T");

          this.props.store.endDate = _multiDate[0] + "T24:00:00.000Z";
          console.log(this.props.store.endDate);
          this.props.store.date = "Custom";
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_datepicker__WEBPACK_IMPORTED_MODULE_1___default.a, {
        selected: this.state.date,
        onChange: this.handleChange
      });
    }
  }]);

  return Example;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component), _temp)) || _class) || _class);


/***/ }),

/***/ "./components/Menu/Header.js":
/*!***********************************!*\
  !*** ./components/Menu/Header.js ***!
  \***********************************/
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
  componentId: "sc-1ydou6k-0"
})(["", " font-weight:600;display:block;padding:12px;text-align:center;color:", ";color:white;"], _shared_helpers__WEBPACK_IMPORTED_MODULE_2__["wideFont"], function (props) {
  return props.theme.mutedText;
});

/***/ }),

/***/ "./components/Menu/Menu.js":
/*!*********************************!*\
  !*** ./components/Menu/Menu.js ***!
  \*********************************/
/*! exports provided: SymbolChooser, Pnl, default, SetSymbol */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SymbolChooser", function() { return SymbolChooser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pnl", function() { return Pnl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetSymbol", function() { return SetSymbol; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../theme */ "./components/theme.js");
/* harmony import */ var _CategoryList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CategoryList */ "./components/Menu/CategoryList.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Header */ "./components/Menu/Header.js");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mobx-react */ "mobx-react");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mobx-react-lite */ "mobx-react-lite");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Dashboard_Tades_Trades__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Dashboard/Tades/Trades */ "./components/Dashboard/Tades/Trades.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _shared_helpers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/helpers */ "./components/shared/helpers.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }













var SymbolChooser = Object(mobx_react__WEBPACK_IMPORTED_MODULE_5__["inject"])("store")(Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_6__["observer"])(function (_ref) {
  var store = _ref.store;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      dropdown = _useState2[0],
      setDropdown = _useState2[1];

  var showDropdown = function showDropdown() {
    if (dropdown == false) {
      setDropdown(true);
    } else {
      setDropdown(false);
    }
  };

  var clicked = function clicked(value) {
    store.setSymbol(value);
    store.changeHasTempTags();
    setDropdown(false);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Lapper2, {
    onClick: function onClick() {
      showDropdown();
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SetSymbol, null, store.symbol, dropdown == true ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faCaretUp"],
    style: {
      transition: "none",
      marginRight: "3px",
      marginLeft: "3px"
    }
  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faCaretDown"],
    style: {
      transition: "none",
      marginRight: "3px",
      marginLeft: "3px"
    }
  })), dropdown == true ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DropdownListContainer, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DropdownListItem, {
    onClick: function onClick() {
      return clicked("XBTUSD");
    }
  }, "XBTUSD"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DropdownListItem, {
    onClick: function onClick() {
      return clicked("XBTU20");
    }
  }, "XBTU20"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DropdownListItem, {
    onClick: function onClick() {
      return clicked("XBTM20");
    }
  }, "XBTM20")) : null);
}));
var Pnl = Object(mobx_react__WEBPACK_IMPORTED_MODULE_5__["inject"])("store")(Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_6__["observer"])(function (_ref2) {
  var store = _ref2.store;

  if (store.pnl >= 0) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Lapper2, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InnerLapper, {
      style: {
        padding: "4px"
      }
    }, store.pnl.toFixed(4) + "xbt"));
  } else {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Lapper3, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InnerLapper, {
      style: {
        padding: "4px"
      }
    }, store.pnl.toFixed(4) + "xbt"));
  }
}));
var Sidebar = Object(mobx_react__WEBPACK_IMPORTED_MODULE_5__["inject"])("store")(Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_6__["observer"])(function (_ref3) {
  var store = _ref3.store;

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      dropdown = _useState4[0],
      setDropdown = _useState4[1];

  var clicked = function clicked(value) {
    store.setSymbol(value);
    store.changeHasTempTags();
    setDropdown(false);
  };

  var showDropdown = function showDropdown() {
    if (dropdown == false) {
      setDropdown(true);
    } else {
      setDropdown(false);
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
    theme: Object(_theme__WEBPACK_IMPORTED_MODULE_2__["default"])(false)
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LapperContainer, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Lapper4, {
    onClick: function onClick() {
      showDropdown();
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SetSymbol, null, store.symbol, dropdown == true ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faCaretUp"],
    style: {
      transition: "none",
      marginRight: "4px",
      marginLeft: "3px"
    }
  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faCaretDown"],
    style: {
      transition: "none",
      marginRight: "4px",
      marginLeft: "3px"
    }
  })), dropdown == true ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DropdownListContainer, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DropdownListItem, {
    onClick: function onClick() {
      return clicked("XBTUSD");
    }
  }, "XBTUSD"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DropdownListItem, {
    onClick: function onClick() {
      return clicked("XBTU20");
    }
  }, "XBTU20"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DropdownListItem, {
    onClick: function onClick() {
      return clicked("XBTM20");
    }
  }, "XBTM20")) : null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Lapper, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CategoryList__WEBPACK_IMPORTED_MODULE_3__["default"], null)), store.pnl >= 0 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Lapper2, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InnerLapper, null, store.pnl.toFixed(4) + "xbt")) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Lapper3, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InnerLapper, null, store.pnl.toFixed(4) + "xbt"))));
}));
/* harmony default export */ __webpack_exports__["default"] = (Sidebar);
var LapperContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Menu__LapperContainer",
  componentId: "sc-7pnj6a-0"
})(["display:flex;flex-direction:column;margin-left:24px;"]);
var Lapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.aside.withConfig({
  displayName: "Menu__Lapper",
  componentId: "sc-7pnj6a-1"
})(["display:flex;flex-direction:column;flex-basis:240px;border-radius:2px;background-color:", ";background-color:#212529;margin-bottom:10px;@media (max-width:768px){display:none;}"], function (props) {
  return props.theme.foreground;
});
var InnerLapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Menu__InnerLapper",
  componentId: "sc-7pnj6a-2"
})(["color:white;text-align:center;margin:auto;"]);
var Lapper2 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.aside.withConfig({
  displayName: "Menu__Lapper2",
  componentId: "sc-7pnj6a-3"
})(["border-radius:2px;background-color:", ";background-color:green;margin:auto;margin-top:0;margin-bottom:0;"], function (props) {
  return props.theme.foreground;
});
var Lapper3 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.aside.withConfig({
  displayName: "Menu__Lapper3",
  componentId: "sc-7pnj6a-4"
})(["border-radius:2px;background-color:", ";background-color:red;margin:auto;"], function (props) {
  return props.theme.foreground;
});
var Lapper4 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.aside.withConfig({
  displayName: "Menu__Lapper4",
  componentId: "sc-7pnj6a-5"
})(["display:flex;flex-direction:column;border-radius:2px;background-color:", ";background-color:#212529;margin-bottom:10px;@media (max-width:768px){display:none;}"], function (props) {
  return props.theme.foreground;
});
var SetSymbol = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Menu__SetSymbol",
  componentId: "sc-7pnj6a-6"
})(["font-weight:500;font-size:14px;", " color:#fff;background-color:#212527;:hover{cursor:pointer;}"], _shared_helpers__WEBPACK_IMPORTED_MODULE_10__["wideFont"]);
var DropdownContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Menu__DropdownContainer",
  componentId: "sc-7pnj6a-7"
})(["height:100px;"]);
var DropdownListContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.ul.withConfig({
  displayName: "Menu__DropdownListContainer",
  componentId: "sc-7pnj6a-8"
})(["list-style-type:none;position:absolute;margin-left:-8px;border-radius:2px;background-color:#212527;"]);
var DropdownListItem = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.li.withConfig({
  displayName: "Menu__DropdownListItem",
  componentId: "sc-7pnj6a-9"
})(["text-align:center;font-weight:500;font-size:14px;color:#fff;background-color:#212529;padding:2px 15px;margin:4px 0;", ":hover{cursor:pointer;color:#000;background-color:#fff;}"], _shared_helpers__WEBPACK_IMPORTED_MODULE_10__["wideFont"]);

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

var FormWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "FormWrapper",
  componentId: "sc-15qkhyq-0"
})(["position:relative;overflow:hidden;margin:0 auto;border:1px solid ", ";border-radius:2px;width:375px;padding:24px;background-color:", ";@media (max-width:768px){padding:16px;}@media (max-width:", "){border-radius:0;border-left:none;border-right:none;}"], function (props) {
  return props.theme.border;
}, function (props) {
  return props.theme.foreground;
}, function (props) {
  return props.wide ? "600px" : "375px";
});
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

var Input = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.input.withConfig({
  displayName: "Input",
  componentId: "sc-1gcscia-0"
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

/***/ "./node_modules/react-datepicker/dist/react-datepicker.css":
/*!*****************************************************************!*\
  !*** ./node_modules/react-datepicker/dist/react-datepicker.css ***!
  \*****************************************************************/
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
/* harmony import */ var _components_Dashboard_FetchQueryContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Dashboard/FetchQueryContainer */ "./components/Dashboard/FetchQueryContainer.js");
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/App */ "./components/App.js");
/* harmony import */ var _components_Header_DashboardHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header/DashboardHeader */ "./components/Header/DashboardHeader.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/theme */ "./components/theme.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles.css */ "./styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_6__);







function dashboard(_ref) {
  var initialState = _ref.initialState;
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
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_App__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header_DashboardHeader__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PageWrap, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_4__["ThemeProvider"], {
    theme: _components_theme__WEBPACK_IMPORTED_MODULE_5__["default"]
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapper, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Dashboard_FetchQueryContainer__WEBPACK_IMPORTED_MODULE_1__["default"], null)))));
}
var PageWrap = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "dashboard__PageWrap",
  componentId: "dqnkpe-0"
})(["height:100vh;margin:0 10vw;border-right:1px solid #f2f2f2;border-left:1px solid #f2f2f2;@media only screen and (max-width:768px){border:none;margin:0;}"]);
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "dashboard__Wrapper",
  componentId: "dqnkpe-1"
})(["display:flex;align-items:flex-start;margin:0;@media (max-width:1024px){margin:0;}@media (max-width:768px){display:block;margin:0;}"]);

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
}, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "lastUpdate", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
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
    return null;
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "endDate", [mobx_persist__WEBPACK_IMPORTED_MODULE_2__["persist"], mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "symbol", [mobx_persist__WEBPACK_IMPORTED_MODULE_2__["persist"], mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return "XBTUSD";
  }
}), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "date", [mobx_persist__WEBPACK_IMPORTED_MODULE_2__["persist"], mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return "Today";
  }
}), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "pnl", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return 0;
  }
}), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, "globalHash", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor10 = _applyDecoratedDescriptor(_class.prototype, "tempNotes", [mobx_persist__WEBPACK_IMPORTED_MODULE_2__["persist"], mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor11 = _applyDecoratedDescriptor(_class.prototype, "tempTags", [mobx_persist__WEBPACK_IMPORTED_MODULE_2__["persist"], mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor12 = _applyDecoratedDescriptor(_class.prototype, "hasTempTags", [mobx_persist__WEBPACK_IMPORTED_MODULE_2__["persist"], mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor13 = _applyDecoratedDescriptor(_class.prototype, "singleTrade", [mobx_persist__WEBPACK_IMPORTED_MODULE_2__["persist"], mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return {};
  }
}), _descriptor14 = _applyDecoratedDescriptor(_class.prototype, "hasSingleTrade", [mobx_persist__WEBPACK_IMPORTED_MODULE_2__["persist"], mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor15 = _applyDecoratedDescriptor(_class.prototype, "isSingleNotes", [mobx_persist__WEBPACK_IMPORTED_MODULE_2__["persist"], mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor16 = _applyDecoratedDescriptor(_class.prototype, "changeDate", [mobx__WEBPACK_IMPORTED_MODULE_0__["action"]], {
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
}), _descriptor17 = _applyDecoratedDescriptor(_class.prototype, "addPnl", [mobx__WEBPACK_IMPORTED_MODULE_0__["action"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    var _this2 = this;

    return function (pnl) {
      _this2.pnl += pnl;
    };
  }
}), _descriptor18 = _applyDecoratedDescriptor(_class.prototype, "resetPnl", [mobx__WEBPACK_IMPORTED_MODULE_0__["action"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    var _this3 = this;

    return function () {
      _this3.pnl = 0;
    };
  }
}), _descriptor19 = _applyDecoratedDescriptor(_class.prototype, "pushGlobalHash", [mobx__WEBPACK_IMPORTED_MODULE_0__["action"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    var _this4 = this;

    return function (hash) {
      _this4.globalHash.push(hash);
    };
  }
}), _descriptor20 = _applyDecoratedDescriptor(_class.prototype, "addTempNote", [mobx__WEBPACK_IMPORTED_MODULE_0__["action"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    var _this5 = this;

    return function (time, note) {
      if (_this5.tempNotes[0] == undefined) {
        var newNote = {};
        newNote["note"] = note;
        newNote["time"] = time;

        _this5.tempNotes.push(newNote);
      } else {
        var alreadyPresentNote = false;

        for (var i = 0; i < _this5.tempNotes.length; i++) {
          if (_this5.tempNotes[i].time == time) {
            _this5.tempNotes[i].note = note;
            alreadyPresentNote = true;
          }

          if (i == _this5.tempNotes.length - 1 && alreadyPresentNote == false) {
            var _newNote = {};
            _newNote["note"] = note;
            _newNote["time"] = time;

            _this5.tempNotes.push(_newNote);
          }
        }
      }
    };
  }
}), _descriptor21 = _applyDecoratedDescriptor(_class.prototype, "clearTempNotes", [mobx__WEBPACK_IMPORTED_MODULE_0__["action"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    var _this6 = this;

    return function () {
      _this6.tempNotes = [];
    };
  }
}), _descriptor22 = _applyDecoratedDescriptor(_class.prototype, "addTempTag", [mobx__WEBPACK_IMPORTED_MODULE_0__["action"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    var _this7 = this;

    return function (time, tag) {
      var newTag = {};
      newTag["tag"] = tag;
      newTag["time"] = time;

      _this7.tempTags.push(newTag);

      _this7.changeHasTempTags();
    };
  }
}), _descriptor23 = _applyDecoratedDescriptor(_class.prototype, "clearTempTags", [mobx__WEBPACK_IMPORTED_MODULE_0__["action"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    var _this8 = this;

    return function () {
      _this8.tempTags = [];
    };
  }
}), _descriptor24 = _applyDecoratedDescriptor(_class.prototype, "changeHasTempTags", [mobx__WEBPACK_IMPORTED_MODULE_0__["action"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    var _this9 = this;

    return function () {
      _this9.hasTempTags = true;
    };
  }
}), _descriptor25 = _applyDecoratedDescriptor(_class.prototype, "resetHasTempTags", [mobx__WEBPACK_IMPORTED_MODULE_0__["action"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    var _this10 = this;

    return function () {
      _this10.hasTempTags = false;
    };
  }
}), _descriptor26 = _applyDecoratedDescriptor(_class.prototype, "setSymbol", [mobx__WEBPACK_IMPORTED_MODULE_0__["action"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    var _this11 = this;

    return function (newSymbol) {
      _this11.symbol = newSymbol;
    };
  }
}), _descriptor27 = _applyDecoratedDescriptor(_class.prototype, "resetPnl", [mobx__WEBPACK_IMPORTED_MODULE_0__["action"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    var _this12 = this;

    return function () {
      _this12.pnl = 0;
    };
  }
}), _descriptor28 = _applyDecoratedDescriptor(_class.prototype, "setSingleTrade", [mobx__WEBPACK_IMPORTED_MODULE_0__["action"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    var _this13 = this;

    return function (dat) {
      _this13.singleTrade = dat;
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

/***/ 4:
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

/***/ "mobx-react-lite":
/*!**********************************!*\
  !*** external "mobx-react-lite" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mobx-react-lite");

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

/***/ "react-autosize-textarea":
/*!******************************************!*\
  !*** external "react-autosize-textarea" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-autosize-textarea");

/***/ }),

/***/ "react-datepicker":
/*!***********************************!*\
  !*** external "react-datepicker" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-datepicker");

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