webpackHotUpdate("static/development/pages/dashboard.js",{

/***/ "./components/Dashboard/768px/Dashboard.js":
/*!*************************************************!*\
  !*** ./components/Dashboard/768px/Dashboard.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _class; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Trades__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Trades */ "./components/Dashboard/Trades.js");
/* harmony import */ var _Menu_768px_Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Menu/768px/Menu */ "./components/Menu/768px/Menu.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers */ "./components/Dashboard/helpers.js");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");


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









var _class = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_6__["inject"])("store"), _dec(_class2 = Object(mobx_react__WEBPACK_IMPORTED_MODULE_6__["observer"])(_class2 =
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
      filteredData: null
    };
    _this.getGlobalHashtags = _this.getGlobalHashtags.bind(_assertThisInitialized(_this));
    _this.hashtagClicked = _this.hashtagClicked.bind(_assertThisInitialized(_this));
    _this.hashtagClickedBack = _this.hashtagClickedBack.bind(_assertThisInitialized(_this));
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
        var _this2 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (value == "all") {
                  console.log("DO NOTHING");
                } else {
                  (function () {
                    var newHashActive = [];
                    var newHash = _this2.state.globalHash;

                    for (var i = 0; i < _this2.state.globalHashActive.length; i++) {
                      if (value !== _this2.state.globalHashActive[i]) {
                        newHashActive.push(_this2.state.globalHashActive[i]);
                      } else {
                        newHash.push(_this2.state.globalHashActive[i]);
                      }

                      if (i == _this2.state.globalHashActive.length - 1) {
                        if (newHashActive[0] == undefined) {
                          var newHash2 = [];

                          for (var j = 0; j < newHash.length; j++) {
                            if (newHash[j] != "all") {
                              newHash2.push(newHash[j]);
                            }

                            if (j == newHash.length - 1) {
                              _this2.setState({
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
                                Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["getNewDat"])(_this2.state.data, newHashActive).then(function (res) {
                                  _this2.setState({
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
        var _this3 = this;

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
                      var newGlobalHash = _this3.state.globalHash;
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

                      var newGlobalHashActive = _this3.state.globalHashActive;
                      newGlobalHashActive.push(value);
                      Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["getNewDat"])(_this3.state.data, newGlobalHashActive).then(function (newDat) {
                        _this3.setState({
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
                      var newGlobalHash = _this3.state.globalHash;
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

                      var newGlobalHashActive = _this3.state.globalHashActive;
                      newGlobalHashActive.push(value);
                      Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["getNewDat"])(_this3.state.data, newGlobalHashActive).then(function (newDat) {
                        _this3.setState({
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
      var _this4 = this;

      console.log("THIS IS GLOBAL HAS", this.state.globalHash);
      console.log("IN 786");

      if (this.state.data != null) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Wrapper, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Menu_768px_Menu__WEBPACK_IMPORTED_MODULE_4__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ChartWrapper, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TopHashtagDiv, null, this.state.globalHashActive.map(function (hash) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TopHashtagIndividualActive, {
            onClick: function onClick() {
              return _this4.hashtagClickedBack(hash);
            }
          }, "#", hash);
        }), this.state.globalHash.map(function (hash) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TopHashtagIndividual, {
            onClick: function onClick() {
              return _this4.hashtagClicked(hash);
            }
          }, "#", hash);
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Trades__WEBPACK_IMPORTED_MODULE_3__["ContainDivHeader"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Trades__WEBPACK_IMPORTED_MODULE_3__["NextToDivHeader"], null, "Start"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Trades__WEBPACK_IMPORTED_MODULE_3__["NextToDivHeader"], null, "End"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Trades__WEBPACK_IMPORTED_MODULE_3__["NextToDivHeader"], null, "L/S"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Trades__WEBPACK_IMPORTED_MODULE_3__["NextToDivHeader"], null, "Entry"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Trades__WEBPACK_IMPORTED_MODULE_3__["NextToDivHeader"], null, "Exit"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Trades__WEBPACK_IMPORTED_MODULE_3__["NextToDivHeader"], null, "Qty"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Trades__WEBPACK_IMPORTED_MODULE_3__["NextToDivHeader"], null, "RPNL")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Trades__WEBPACK_IMPORTED_MODULE_3__["default"], {
          data: this.state.data,
          filteredData: this.state.filteredData,
          initData: this.props.data
        })));
      }
    }
  }]);

  return _class2;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component)) || _class2) || _class2);


var TopHashtagDiv = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Dashboard__TopHashtagDiv",
  componentId: "ii6mcv-0"
})(["display:flex;flex-direction:row;margin-bottom:8px;"]);
var TopHashtagIndividual = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Dashboard__TopHashtagIndividual",
  componentId: "ii6mcv-1"
})(["background:#f8f8ff;color:#000;padding:8px;margin:0 10px;border-radius:2px;:hover{cursor:pointer;}"]);
var TopHashtagIndividualActive = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Dashboard__TopHashtagIndividualActive",
  componentId: "ii6mcv-2"
})(["background:#212528;color:#fff;padding:8px;margin:0 10px;border-radius:2px;:hover{cursor:pointer;}"]);
var ChartWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Dashboard__ChartWrapper",
  componentId: "ii6mcv-3"
})(["background:white;padding:5px;width:100%;@media (max-width:768px){margin:0;}"]);
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Dashboard__Wrapper",
  componentId: "ii6mcv-4"
})(["display:flex;flex-direction:column;"]);

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
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Trades__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Trades */ "./components/Dashboard/Trades.js");
/* harmony import */ var _Menu_Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Menu/Menu */ "./components/Menu/Menu.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers */ "./components/Dashboard/helpers.js");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var _shared_helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/helpers */ "./components/shared/helpers.js");


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










var _class = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_6__["inject"])("store"), _dec(_class2 = Object(mobx_react__WEBPACK_IMPORTED_MODULE_6__["observer"])(_class2 =
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
      filteredData: null
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
        var _this2 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (value == "all") {
                  console.log("DO NOTHING");
                } else {
                  (function () {
                    var newHashActive = [];
                    var newHash = _this2.state.globalHash;

                    for (var i = 0; i < _this2.state.globalHashActive.length; i++) {
                      if (value !== _this2.state.globalHashActive[i]) {
                        newHashActive.push(_this2.state.globalHashActive[i]);
                      } else {
                        newHash.push(_this2.state.globalHashActive[i]);
                      }

                      if (i == _this2.state.globalHashActive.length - 1) {
                        if (newHashActive[0] == undefined) {
                          var newHash2 = [];

                          for (var j = 0; j < newHash.length; j++) {
                            if (newHash[j] != "all") {
                              newHash2.push(newHash[j]);
                            }

                            if (j == newHash.length - 1) {
                              _this2.setState({
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
                                Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["getNewDat"])(_this2.state.data, newHashActive).then(function (res) {
                                  _this2.setState({
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
        var _this3 = this;

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
                      var newGlobalHash = _this3.state.globalHash;
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

                      var newGlobalHashActive = _this3.state.globalHashActive;
                      newGlobalHashActive.push(value);
                      Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["getNewDat"])(_this3.state.data, newGlobalHashActive).then(function (newDat) {
                        _this3.setState({
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
                      var newGlobalHash = _this3.state.globalHash;
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

                      var newGlobalHashActive = _this3.state.globalHashActive;
                      newGlobalHashActive.push(value);
                      Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["getNewDat"])(_this3.state.data, newGlobalHashActive).then(function (newDat) {
                        _this3.setState({
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
      var _this4 = this;

      if (this.state.data != null) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Wrapper, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ChartWrapper, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TopHashtagDiv, null, this.state.globalHashActive.map(function (hash) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TopHashtagIndividualActive, {
            onClick: function onClick() {
              return _this4.hashtagClickedBack(hash);
            }
          }, "#", hash);
        }), this.state.globalHash.map(function (hash) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TopHashtagIndividual, {
            onClick: function onClick() {
              return _this4.hashtagClicked(hash);
            }
          }, "#", hash);
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TopHashtagIndividualActivePnl, {
          style: {
            margin: "0 auto"
          }
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Menu_Menu__WEBPACK_IMPORTED_MODULE_4__["Pnl"], null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TopHashtagIndividualActive, {
          style: {
            marginRight: "0"
          }
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Menu_Menu__WEBPACK_IMPORTED_MODULE_4__["SymbolChooser"], null))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(WholeGrid, null, this.state.width > 1380 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Trades__WEBPACK_IMPORTED_MODULE_3__["ContainDivHeader"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Trades__WEBPACK_IMPORTED_MODULE_3__["NextToDivHeader"], null, "Start"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Trades__WEBPACK_IMPORTED_MODULE_3__["NextToDivHeader"], null, "End"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Trades__WEBPACK_IMPORTED_MODULE_3__["NextToDivHeader"], null, "L/S"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Trades__WEBPACK_IMPORTED_MODULE_3__["NextToDivHeader"], null, "Avg Entry"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Trades__WEBPACK_IMPORTED_MODULE_3__["NextToDivHeader"], null, "Avg Exit"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Trades__WEBPACK_IMPORTED_MODULE_3__["NextToDivHeader"], null, "Qty"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Trades__WEBPACK_IMPORTED_MODULE_3__["NextToDivHeader"], null, "Realized Pnl")) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Trades__WEBPACK_IMPORTED_MODULE_3__["ContainDivHeader"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Trades__WEBPACK_IMPORTED_MODULE_3__["NextToDivHeader"], null, "Start"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Trades__WEBPACK_IMPORTED_MODULE_3__["NextToDivHeader"], null, "End"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Trades__WEBPACK_IMPORTED_MODULE_3__["NextToDivHeader"], null, "L/S"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Trades__WEBPACK_IMPORTED_MODULE_3__["NextToDivHeader"], null, "Entry"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Trades__WEBPACK_IMPORTED_MODULE_3__["NextToDivHeader"], null, "Exit"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Trades__WEBPACK_IMPORTED_MODULE_3__["NextToDivHeader"], null, "Qty"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Trades__WEBPACK_IMPORTED_MODULE_3__["NextToDivHeader"], null, "RPNL")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Trades__WEBPACK_IMPORTED_MODULE_3__["default"], {
          data: this.state.data,
          filteredData: this.state.filteredData,
          initData: this.props.data
        }))));
      }
    }
  }]);

  return _class2;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component)) || _class2) || _class2);


var WholeGrid = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Dashboard__WholeGrid",
  componentId: "ij5648-0"
})(["border:1px solid #f2f2f2;"]);
var TopHashtagDiv = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Dashboard__TopHashtagDiv",
  componentId: "ij5648-1"
})(["display:flex;flex-direction:row;margin-bottom:14px;"]);
var TopHashtagIndividual = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Dashboard__TopHashtagIndividual",
  componentId: "ij5648-2"
})(["background:#f8f8ff;color:#000;padding:8px;margin:0 10px;border-radius:2px;", ":hover{cursor:pointer;}"], _shared_helpers__WEBPACK_IMPORTED_MODULE_8__["wideFont"]);
var TopHashtagIndividualActive = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Dashboard__TopHashtagIndividualActive",
  componentId: "ij5648-3"
})(["background:#212528;color:#fff;padding:8px;margin:0 10px;border-radius:2px;", ":hover{cursor:pointer;}"], _shared_helpers__WEBPACK_IMPORTED_MODULE_8__["wideFont"]);
var TopHashtagIndividualActivePnl = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Dashboard__TopHashtagIndividualActivePnl",
  componentId: "ij5648-4"
})(["color:#fff;padding:0px;margin:0 10px;border-radius:2px;", ":hover{cursor:pointer;}"], _shared_helpers__WEBPACK_IMPORTED_MODULE_8__["wideFont"]);
var ChartWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Dashboard__ChartWrapper",
  componentId: "ij5648-5"
})(["background:white;padding:5px;width:100%;padding:10px;@media (max-width:768px){margin:0 5vw;}"]);
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Dashboard__Wrapper",
  componentId: "ij5648-6"
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.esm.js");
/* harmony import */ var _Trades__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Trades */ "./components/Dashboard/Trades.js");
/* harmony import */ var _Menu_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Menu/Menu */ "./components/Menu/Menu.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");
/* harmony import */ var _Helpers_Functions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Helpers/Functions */ "./components/Helpers/Functions.js");
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! fast-deep-equal */ "./node_modules/fast-deep-equal/index.js");
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(fast_deep_equal__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _AddApiForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./AddApiForm */ "./components/Dashboard/AddApiForm.js");
/* harmony import */ var _Dashboard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Dashboard */ "./components/Dashboard/Dashboard.js");
/* harmony import */ var _768px_Dashboard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./768px/Dashboard */ "./components/Dashboard/768px/Dashboard.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
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

      this.tempTagsReaction = Object(mobx__WEBPACK_IMPORTED_MODULE_12__["reaction"])(function () {
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
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AddApiForm__WEBPACK_IMPORTED_MODULE_9__["default"], null);
        } else if (data.checkApiKey == true) {
          _this4.props.store.resetHasTempTags();

          _this4.props.store.clearTempNotes();

          _this4.props.store.clearTempTags();

          _this4.props.store.resetPnl();

          if (_this4.state.width > 768) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Dashboard__WEBPACK_IMPORTED_MODULE_10__["default"], {
              data: data
            });
          } else {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_768px_Dashboard__WEBPACK_IMPORTED_MODULE_11__["default"], {
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

/***/ "./components/Dashboard/ReChart.js":
false,

/***/ "./components/Dashboard/Trades.js":
/*!****************************************!*\
  !*** ./components/Dashboard/Trades.js ***!
  \****************************************/
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _shared_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/helpers */ "./components/shared/helpers.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../theme */ "./components/theme.js");
/* harmony import */ var _Helpers_Functions_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Helpers/Functions.js */ "./components/Helpers/Functions.js");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");
/* harmony import */ var _Charts2_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Charts2/index */ "./components/Charts2/index.js");
/* harmony import */ var _Notes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Notes */ "./components/Dashboard/Notes.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! fast-deep-equal */ "./node_modules/fast-deep-equal/index.js");
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(fast_deep_equal__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
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
    _this.createFullTrades = _this.createFullTrades.bind(_assertThisInitialized(_this));
    return _this;
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
      if (!fast_deep_equal__WEBPACK_IMPORTED_MODULE_11___default()(this.props.filteredData, prevProps.filteredData)) {
        console.log("WAS NOT EQUAL"); // this.updateTrades(this.props.data);

        var newFullTrades = [];
        var firstFullTrades = this.createFullTrades(this.props.data);
        firstFullTrades = firstFullTrades.fullTrades;
        console.log(this.props.data);

        if (this.props.filteredData == null) {
          console.log("was null", firstFullTrades);
          this.setState({
            fullTrades: firstFullTrades
          });
        } else {
          for (var i = 0; i < firstFullTrades.length; i++) {
            for (var j = 0; j < this.props.filteredData.length; j++) {
              if (firstFullTrades[i][0].id == this.props.filteredData[j].id) {
                console.log("ADDING", firstFullTrades[i]);
                newFullTrades.unshift(firstFullTrades[i]);
              }
            }

            if (i == firstFullTrades.length - 1) {
              console.log(newFullTrades, "NEW FULL");
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
      console.log("MOUNTING");
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
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_2__["ThemeProvider"], {
        theme: Object(_theme__WEBPACK_IMPORTED_MODULE_4__["default"])(false)
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          minWidth: this.state.chartWidth
        }
      }, this.state.fullTrades.map(function (slic, i) {
        console.log(slic);
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MakeCol, {
          slic: slic,
          onemin: _this2.props.data.fetchOneMinuteCandleHistory,
          fivemin: _this2.props.data.fetchFiveMinuteCandleHistory,
          onehour: _this2.props.data.fetchOneHourCandleHistory,
          oneday: _this2.props.data.fetchOneDayCandleHistory,
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
    var _this3;

    _classCallCheck(this, MakeCol);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(MakeCol).call(this, props));
    _this3.state = {
      data: [],
      pnl: 0,
      avgEntryPrice: 0,
      avgExitPrice: 0,
      clicked: false,
      cumQty: 0,
      readMoreClicked: false
    };
    _this3.readMoreClicked = _this3.readMoreClicked.bind(_assertThisInitialized(_this3));
    _this3.clicked = _this3.clicked.bind(_assertThisInitialized(_this3));
    _this3.getSlicData = _this3.getSlicData.bind(_assertThisInitialized(_this3));
    _this3.updateWindowDimensions = _this3.updateWindowDimensions.bind(_assertThisInitialized(_this3));
    return _this3;
  }

  _createClass(MakeCol, [{
    key: "updateWindowDimensions",
    value: function updateWindowDimensions() {
      console.log(this.state.width);
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
      console.log("MOUNTED", this.props.slic);
      window.addEventListener("resize", this.updateWindowDimensions);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (!fast_deep_equal__WEBPACK_IMPORTED_MODULE_11___default()(this.props.slic, prevProps.slic)) {
        console.log("UPDATED");
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
    value: function getSlicData() {
      this.state.data = this.props.slic;

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
            var avgExit = void 0;
            var avgEntry = void 0;

            if (avgBuyPrice != null) {
              // this.state.avgEntryPrice = avgBuyPrice;
              avgEntry = avgBuyPrice;
            } else {
              avgEntry = 0; // this.state.avgEntryPrice = 0;
            }

            if (avgSellPrice != null) {
              // this.state.avgExitPrice = avgSellPrice;
              avgExit = avgSellPrice;
            } else {
              // this.state.avgExitPrice = 0;
              avgExit = 0;
            }

            this.state.cumQty = totBuyContracts;
            var thePnl = (1 / avgBuyPrice - 1 / avgSellPrice) * totSellContracts;

            if (thePnl != null) {
              var myPnl = thePnl + totCommission;
              this.setState({
                pnl: myPnl,
                avgEntryPrice: avgEntry,
                avgExitPrice: avgExit
              }, function () {
                return console.log("STATE IS SET");
              });
              this.props.store.addPnl(myPnl);
            } else {
              // this.state.pnl = 0;
              this.setState({
                pnl: 0,
                avgEntryPrice: avgEntry,
                avgExitPrice: avgExit
              }, function () {
                return console.log("STATE IS SET");
              });
            }
          }
        }
      }

      if (this.state.data[0].side == "Sell" && this.state.data[0].execType == "Trade") {
        var _totBuyContracts = 0;
        var _totSellContracts = 0;
        var _buyNum = 0;
        var _sellNum = 0;
        var _totBuyContractsMult = 0;
        var _totSellContractsMult = 0;
        var _realQty = 0;
        var _totCommission = 0;

        for (var _i = 0; _i < this.state.data.length; _i++) {
          _realQty = this.state.data[_i].orderQty - this.state.data[_i].leavesQty;

          if (this.state.data[_i].side == "Buy") {
            // totBuyPrice += parseFloat(this.state.data[i].price);
            _buyNum += 1;
            _totBuyContracts += _realQty;
            _totBuyContractsMult += _realQty * parseFloat(this.state.data[_i].price);
          }

          if (this.state.data[_i].side == "Sell") {
            _sellNum += 1;
            _totSellContracts += _realQty;
            _totSellContractsMult += _realQty * parseFloat(this.state.data[_i].price);
          } // console.log("REAL QTY", realQty);


          if (this.state.data[_i].orderType == "Limit" && this.state.data[_i].execType !== "Funding") {
            _totCommission += _realQty * 0.0025 / this.state.data[_i].price;
          }

          if (this.state.data[_i].orderType == "Market") {
            _totCommission -= _realQty * 0.0075 / this.state.data[_i].price;
          }

          if (this.state.data[_i].orderType.includes("Stop")) {
            _totCommission -= _realQty * 0.0075 / this.state.data[_i].price;
          }

          if (_i == this.state.data.length - 1) {
            var _avgBuyPrice = _totBuyContractsMult / _totBuyContracts;

            var _avgSellPrice = _totSellContractsMult / _totSellContracts;

            var pnl = (1 / _avgBuyPrice - 1 / _avgSellPrice) * _totBuyContracts;

            var _avgEntry = void 0;

            var _avgExit = void 0;

            if (_avgBuyPrice != null) {
              _avgExit = _avgBuyPrice;
            } else {
              _avgExit = 0;
            }

            if (_avgSellPrice != null) {
              _avgEntry = _avgSellPrice;
            } else {
              _avgEntry = 0;
            }

            this.state.cumQty = _totSellContracts;

            if (pnl != null) {
              var _myPnl = pnl + _totCommission;

              this.setState({
                pnl: _myPnl,
                avgEntryPrice: _avgEntry,
                avgExitPrice: _avgExit
              }, function () {
                return console.log("STATE IS SET");
              });
              this.props.store.addPnl(_myPnl);
            } else {
              // this.state.pnl = 0;
              this.setState({
                pnl: 0,
                avgEntryPrice: _avgEntry,
                avgExitPrice: _avgExit
              }, function () {
                return console.log("STATE IS SET");
              });
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
      var _this4 = this;

      if (this.state.width > 1380) {
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
          }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDiv, null, "$", this.state.avgEntryPrice.toFixed(1)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDiv, null, "$", this.state.avgExitPrice.toFixed(1)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDiv, null, this.state.cumQty), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDiv, null, this.state.pnl.toFixed(4) + "xbt")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Notes__WEBPACK_IMPORTED_MODULE_8__["default"], {
            firstTrade: this.state.data[0]
          }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContainDivBlack, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDivBlackTitle, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TitleSpan, null, "Timestamp")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDivBlackTitle, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TitleSpan, null, "Side")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDivBlackTitle, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TitleSpan, null, "Order Type")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDivBlackTitle, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TitleSpan, null, "Price")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDivBlackTitle, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TitleSpan, null, "Order Qty")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDivBlackTitle, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TitleSpan, null, "Leaves Qty")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDivBlackTitle, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TitleSpan, null, "Commission"))), this.state.data.map(function (dat) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContainDivBlack, {
              onClick: _this4.clicked.bind(_this4)
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDivBlack, null, Object(_Helpers_Functions_js__WEBPACK_IMPORTED_MODULE_5__["formatDateMonthOnly"])(dat.timestamp)), dat.execType == "Trade" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDivBlack, null, dat.side) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDivBlack, null, dat.execType), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDivBlack, null, dat.orderType), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDivBlack, null, "$", dat.price.toString()), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDivBlack, null, dat.orderQty), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDivBlack, null, dat.leavesQty == "0" ? "" : dat.leavesQty), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDivBlack, null, dat.execType == "Funding" ? "" : Object(_Helpers_Functions_js__WEBPACK_IMPORTED_MODULE_5__["calcCommission"])(dat.price, dat.side, dat.orderQty, dat.leavesQty, dat.orderType)));
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
          }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDiv, null, "$", this.state.avgEntryPrice.toFixed(1)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDiv, null, "$", this.state.avgExitPrice.toFixed(1)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDiv, null, this.state.cumQty), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDiv, null, this.state.pnl.toFixed(4) + "xbt")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Notes__WEBPACK_IMPORTED_MODULE_8__["default"], {
            firstTrade: this.state.data[0]
          }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContainDivBlack, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDivBlackTitle, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TitleSpan, null, "Timestamp")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDivBlackTitle, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TitleSpan, null, "Side")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDivBlackTitle, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TitleSpan, null, "Order Type")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDivBlackTitle, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TitleSpan, null, "Price")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDivBlackTitle, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TitleSpan, null, "Order Qty")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDivBlackTitle, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TitleSpan, null, "Leaves Qty")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDivBlackTitle, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TitleSpan, null, "Commission"))), this.state.data.map(function (dat) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContainDivBlack, {
              onClick: _this4.clicked.bind(_this4)
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDivBlack, null, Object(_Helpers_Functions_js__WEBPACK_IMPORTED_MODULE_5__["formatDateMonthOnly"])(dat.timestamp)), dat.execType == "Trade" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDivBlack, null, dat.side) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDivBlack, null, dat.execType), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDivBlack, null, dat.orderType), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDivBlack, null, "$", dat.price.toString()), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDivBlack, null, dat.orderQty), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDivBlack, null, dat.leavesQty == "0" ? "" : dat.leavesQty), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDivBlack, null, dat.execType == "Funding" ? "" : Object(_Helpers_Functions_js__WEBPACK_IMPORTED_MODULE_5__["calcCommission"])(dat.price, dat.side, dat.orderQty, dat.leavesQty, dat.orderType)));
          }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ReadMore, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ReadMoreInner, {
            onClick: this.readMoreClicked
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeIcon"], {
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faCaretDown"],
            style: {
              transition: "none"
            }
          })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Charts2_index__WEBPACK_IMPORTED_MODULE_7__["default"], {
            onemin: this.props.onemin,
            fivemin: this.props.fivemin,
            onehour: this.props.onehour,
            oneday: this.props.oneday,
            trades: this.state.data
          }));
        }
      } else {
        if (this.state.clicked == false) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContainDiv, {
            onClick: this.clicked.bind(this)
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDiv, null, Object(_Helpers_Functions_js__WEBPACK_IMPORTED_MODULE_5__["formatDateShort"])(this.state.data[0].timestamp)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDiv, null, Object(_Helpers_Functions_js__WEBPACK_IMPORTED_MODULE_5__["formatDateShort"])(this.state.data[this.state.data.length - 1].timestamp)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IsShort, {
            side: this.state.data[0].side
          }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDiv, null, "$", this.state.avgEntryPrice.toFixed(1)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDiv, null, "$", this.state.avgExitPrice.toFixed(1)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDiv, null, this.state.cumQty), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDiv, null, this.state.pnl.toFixed(4) + "xbt"));
        } else {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TotalDetails, null, this.state.readMoreClicked ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MoreBoxTall, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContainDivClicked, {
            onClick: this.clicked.bind(this)
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDiv, null, Object(_Helpers_Functions_js__WEBPACK_IMPORTED_MODULE_5__["formatDateShort"])(this.state.data[0].timestamp)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDiv, null, Object(_Helpers_Functions_js__WEBPACK_IMPORTED_MODULE_5__["formatDateShort"])(this.state.data[this.state.data.length - 1].timestamp)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IsShort, {
            side: this.state.data[0].side
          }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDiv, null, "$", this.state.avgEntryPrice.toFixed(1)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDiv, null, "$", this.state.avgExitPrice.toFixed(1)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDiv, null, this.state.cumQty), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDiv, null, this.state.pnl.toFixed(4) + "xbt")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Notes__WEBPACK_IMPORTED_MODULE_8__["default"], {
            firstTrade: this.state.data[0]
          }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContainDivBlack, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDivBlackTitle, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TitleSpan, null, "Timestamp")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDivBlackTitle, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TitleSpan, null, "Side")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDivBlackTitle, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TitleSpan, null, "Order Type")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDivBlackTitle, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TitleSpan, null, "Price")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDivBlackTitle, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TitleSpan, null, "Order Qty")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDivBlackTitle, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TitleSpan, null, "Leaves Qty")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDivBlackTitle, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TitleSpan, null, "Commission"))), this.state.data.map(function (dat) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContainDivBlack, {
              onClick: _this4.clicked.bind(_this4)
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDivBlackTime, null, Object(_Helpers_Functions_js__WEBPACK_IMPORTED_MODULE_5__["formatDateShortWithHour"])(dat.timestamp)), dat.execType == "Trade" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDivBlack, null, dat.side) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDivBlack, null, dat.execType), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDivBlack, null, dat.orderType), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDivBlack, null, "$", dat.price.toString()), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDivBlack, null, dat.orderQty), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDivBlack, null, dat.leavesQty == "0" ? "" : dat.leavesQty), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDivBlack, null, dat.execType == "Funding" ? "" : Object(_Helpers_Functions_js__WEBPACK_IMPORTED_MODULE_5__["calcCommission"])(dat.price, dat.side, dat.orderQty, dat.leavesQty, dat.orderType)));
          }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ReadMoreTall, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ReadMoreInner, {
            onClick: this.readMoreClicked
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeIcon"], {
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faCaretUp"],
            style: {
              transition: "none"
            }
          })))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MoreBoxShort, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContainDivClicked, {
            onClick: this.clicked
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDiv, null, Object(_Helpers_Functions_js__WEBPACK_IMPORTED_MODULE_5__["formatDateShort"])(this.state.data[0].timestamp)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDiv, null, Object(_Helpers_Functions_js__WEBPACK_IMPORTED_MODULE_5__["formatDateShort"])(this.state.data[this.state.data.length - 1].timestamp)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IsShort, {
            side: this.state.data[0].side
          }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDiv, null, "$", this.state.avgEntryPrice.toFixed(1)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDiv, null, "$", this.state.avgExitPrice.toFixed(1)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDiv, null, this.state.cumQty), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDiv, null, this.state.pnl.toFixed(4) + "xbt")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Notes__WEBPACK_IMPORTED_MODULE_8__["default"], {
            firstTrade: this.state.data[0]
          }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContainDivBlack, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDivBlackTitle, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TitleSpan, null, "Timestamp")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDivBlackTitle, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TitleSpan, null, "Side")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDivBlackTitle, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TitleSpan, null, "Order Type")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDivBlackTitle, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TitleSpan, null, "Price")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDivBlackTitle, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TitleSpan, null, "Order Qty")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDivBlackTitle, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TitleSpan, null, "Leaves Qty")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDivBlackTitle, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TitleSpan, null, "Commission"))), this.state.data.map(function (dat) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContainDivBlack, {
              onClick: _this4.clicked.bind(_this4)
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDivBlackTime, null, Object(_Helpers_Functions_js__WEBPACK_IMPORTED_MODULE_5__["formatDateShortWithHour"])(dat.timestamp)), dat.execType == "Trade" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDivBlack, null, dat.side) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDivBlack, null, dat.execType), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDivBlack, null, dat.orderType), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDivBlack, null, "$", dat.price.toString()), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDivBlack, null, dat.orderQty), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDivBlack, null, dat.leavesQty == "0" ? "" : dat.leavesQty), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDivBlack, null, dat.execType == "Funding" ? "" : Object(_Helpers_Functions_js__WEBPACK_IMPORTED_MODULE_5__["calcCommission"])(dat.price, dat.side, dat.orderQty, dat.leavesQty, dat.orderType)));
          }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ReadMore, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ReadMoreInner, {
            onClick: this.readMoreClicked
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeIcon"], {
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faCaretDown"],
            style: {
              transition: "none"
            }
          })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Charts2_index__WEBPACK_IMPORTED_MODULE_7__["default"], {
            onemin: this.props.onemin,
            fivemin: this.props.fivemin,
            onehour: this.props.onehour,
            oneday: this.props.oneday,
            trades: this.state.data
          }));
        }
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

var ContainDiv = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Trades__ContainDiv",
  componentId: "sc-2xufv3-0"
})(["width:100%;display:flex;flex-direction:row;height:52px;font-weight:400;border-bottom:1px solid #f2f2f2;&:hover{border-bottom:none;transition:none;border-left:3px solid #212528;cursor:pointer;}"]);
var ContainDivClicked = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Trades__ContainDivClicked",
  componentId: "sc-2xufv3-1"
})(["width:100%;display:flex;flex-direction:row;height:52px;transition:none;font-weight:400;border-bottom:1px solid #f2f2f2;border-left:5px solid #212528;border-radius:none;cursor:pointer;background:#f8f8ff;"]);
var ContainDivBlack = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Trades__ContainDivBlack",
  componentId: "sc-2xufv3-2"
})(["width:100%;display:flex;flex-direction:row;height:42px;background:#f8f8ff;border-bottom:1px solid #f2f2f2;"]);
var ContainDivHeader = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Trades__ContainDivHeader",
  componentId: "sc-2xufv3-3"
})(["width:100%;display:flex;flex-direction:row;height:42px;border-bottom:1px solid #d3d3d3;"]); // f2f2f2

var NextToDiv = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Trades__NextToDiv",
  componentId: "sc-2xufv3-4"
})(["display:inline-block;width:30%;padding:8px;padding-top:14px;padding-left:12px;font-size:15px;color:#000000;border-right:1px solid #f2f2f2;font-weight:300;font-size:15px;@media (max-width:550px){font-size:13px;}"]);
var NextToDivBlack = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Trades__NextToDivBlack",
  componentId: "sc-2xufv3-5"
})(["display:inline-block;width:30%;padding:4px;padding-left:12px;font-size:14px;padding-top:9px;border-right:1px solid #f2f2f2;"]);
var NextToDivBlackTitle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Trades__NextToDivBlackTitle",
  componentId: "sc-2xufv3-6"
})(["display:inline-block;width:30%;padding:4px;padding-left:14px;padding-top:9px;font-size:14px;"]);
var TitleSpan = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].span.withConfig({
  displayName: "Trades__TitleSpan",
  componentId: "sc-2xufv3-7"
})(["display:inline-block;border-bottom:1px dotted black;padding-bottom:0px;font-size:13px;font-weight:300;color:black;"]);
var NextToDivBlackTime = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Trades__NextToDivBlackTime",
  componentId: "sc-2xufv3-8"
})(["display:inline-block;width:30%;padding:4px;padding-left:12px;font-size:14px;padding-top:10px;@media (max-width:1200px){font-size:13px;}@media (max-width:663px){padding-top:0px !important;}"]);
var NextToDivHeader = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Trades__NextToDivHeader",
  componentId: "sc-2xufv3-9"
})(["display:inline-block;width:30%;color:#78838e;font-weight:600;display:inline-block;text-transform:uppercase;padding:10px;padding-left:12px;", " font-size:13px;"], _shared_helpers__WEBPACK_IMPORTED_MODULE_3__["smallFont"]);
var ReadMore = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Trades__ReadMore",
  componentId: "sc-2xufv3-10"
})(["position:absolute;bottom:0;left:0;width:100%;text-align:center;margin:0;padding:10px 0;background-image:-webkit-gradient( linear,left top,left bottom,color-stop(0,rgba(255,0,0,0)),color-stop(1,rgba(248,248,255,1)) );"]);
var ReadMoreTall = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Trades__ReadMoreTall",
  componentId: "sc-2xufv3-11"
})(["position:absolute;bottom:0;left:0;width:100%;text-align:center;margin:0;padding:10px 0;"]); // background-image: linear-gradient(to bottom, transparent, black);

var MoreBoxShort = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Trades__MoreBoxShort",
  componentId: "sc-2xufv3-12"
})(["max-height:300px;position:relative;overflow:hidden;"]);
var MoreBoxTall = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Trades__MoreBoxTall",
  componentId: "sc-2xufv3-13"
})(["max-height:none;position:relative;overflow:hidden;"]);
var TotalDetails = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Trades__TotalDetails",
  componentId: "sc-2xufv3-14"
})([""]); // border: 1px solid rgba(33, 37, 40, 0.7);

var ReadMoreInner = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Trades__ReadMoreInner",
  componentId: "sc-2xufv3-15"
})(["color:rgba(33,37,40,1);padding:0;margin:auto;width:30px;border-radius:2px;-webkit-transition-property:none;-moz-transition-property:none;-o-transition-property:none;transition-property:none;:hover{cursor:pointer;background-color:rgba(33,37,40,1);color:#fff;-webkit-transition-property:none;-moz-transition-property:none;-o-transition-property:none;transition-property:none;}font-size:20px;"]);

/***/ }),

/***/ "./components/Menu/768px/Menu.js":
/*!***************************************!*\
  !*** ./components/Menu/768px/Menu.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../theme */ "./components/theme.js");
/* harmony import */ var _CategoryList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CategoryList */ "./components/Menu/768px/CategoryList.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Header */ "./components/Menu/768px/Header.js");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mobx-react-lite */ "./node_modules/mobx-react-lite/dist/index.module.js");
/* harmony import */ var _Dashboard_Trades__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Dashboard/Trades */ "./components/Dashboard/Trades.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











 // border: 1px solid ${props => props.theme.border};

var Sidebar = Object(mobx_react__WEBPACK_IMPORTED_MODULE_5__["inject"])("store")(Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_6__["observer"])(function (_ref) {
  var store = _ref.store;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      dropdown = _useState2[0],
      setDropdown = _useState2[1];

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

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LapContain, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LapInner, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LapFurtherIn, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SetSymbol, {
    onClick: function onClick() {
      showDropdown();
    }
  }, dropdown == true ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
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
  }), store.symbol), dropdown == true ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DropdownListContainer, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DropdownListItem, {
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
  }, "XBTM20")) : null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LapInner, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LapFurtherIn, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CategoryList__WEBPACK_IMPORTED_MODULE_3__["default"], null))), store.pnl >= 0 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LapInner, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InnerLapper, null, "+", store.pnl.toFixed(4) + "xbt")) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LapInner, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InnerLapper, null, "-", store.pnl.toFixed(4) + "xbt")));
}));
var LapContain = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Menu__LapContain",
  componentId: "moll33-0"
})(["display:flex;flex-direction:column;"]);
var LapInner = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Menu__LapInner",
  componentId: "moll33-1"
})(["background-color:#212529;margin:4px 15px;border-radius:2px;"]);
var LapFurtherIn = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Menu__LapFurtherIn",
  componentId: "moll33-2"
})(["margin:0 auto;width:100px;"]);
/* harmony default export */ __webpack_exports__["default"] = (Sidebar);
var LapperMegaContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Menu__LapperMegaContainer",
  componentId: "moll33-3"
})(["display:absolute;"]);
var LapperContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Menu__LapperContainer",
  componentId: "moll33-4"
})(["display:flex;flex-direction:column;margin-left:24px;"]);
var Lapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].aside.withConfig({
  displayName: "Menu__Lapper",
  componentId: "moll33-5"
})(["display:flex;flex-direction:column;flex-basis:240px;border-radius:2px;background-color:", ";background-color:#212529;margin-bottom:10px;@media (max-width:768px){display:none;}"], function (props) {
  return props.theme.foreground;
});
var InnerLapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Menu__InnerLapper",
  componentId: "moll33-6"
})(["color:white;text-align:center;margin:auto;"]);
var Lapper2 = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].aside.withConfig({
  displayName: "Menu__Lapper2",
  componentId: "moll33-7"
})(["border-radius:2px;background-color:", ";background-color:green;max-height:30px;@media (max-width:768px){display:none;}"], function (props) {
  return props.theme.foreground;
});
var Lapper3 = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].aside.withConfig({
  displayName: "Menu__Lapper3",
  componentId: "moll33-8"
})(["border-radius:2px;background-color:", ";background-color:red;max-height:30px;@media (max-width:768px){display:none;}"], function (props) {
  return props.theme.foreground;
});
var Lapper4 = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].aside.withConfig({
  displayName: "Menu__Lapper4",
  componentId: "moll33-9"
})(["display:flex;flex-direction:column;border-radius:2px;background-color:", ";background-color:#212529;margin-bottom:10px;@media (max-width:768px){display:none;}"], function (props) {
  return props.theme.foreground;
});
var SetSymbol = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Menu__SetSymbol",
  componentId: "moll33-10"
})(["font-size:15px;color:#fff;:hover{cursor:pointer;}"]);
var DropdownContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Menu__DropdownContainer",
  componentId: "moll33-11"
})(["height:100px;"]);
var DropdownListContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].ul.withConfig({
  displayName: "Menu__DropdownListContainer",
  componentId: "moll33-12"
})(["list-style-type:none;"]);
var DropdownListItem = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].li.withConfig({
  displayName: "Menu__DropdownListItem",
  componentId: "moll33-13"
})(["text-align:center;font-size:15px;color:#fff;:hover{cursor:pointer;color:#000;background-color:#fff;}"]);

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../theme */ "./components/theme.js");
/* harmony import */ var _CategoryList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CategoryList */ "./components/Menu/CategoryList.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Header */ "./components/Menu/Header.js");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mobx-react-lite */ "./node_modules/mobx-react-lite/dist/index.module.js");
/* harmony import */ var _Dashboard_Trades__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Dashboard/Trades */ "./components/Dashboard/Trades.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _shared_helpers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/helpers */ "./components/shared/helpers.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












 // border: 1px solid ${props => props.theme.border};

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

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SetSymbol, {
    onClick: function onClick() {
      showDropdown();
    }
  }, dropdown == true ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
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
  }), store.symbol);
}));
var Pnl = Object(mobx_react__WEBPACK_IMPORTED_MODULE_5__["inject"])("store")(Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_6__["observer"])(function (_ref2) {
  var store = _ref2.store;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      minHeight: "100%"
    }
  }, store.pnl >= 0 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Lapper2, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InnerLapper, null, store.pnl.toFixed(4) + "xbt")) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Lapper3, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InnerLapper, null, store.pnl.toFixed(4) + "xbt")));
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
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LapperContainer, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Lapper4, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SetSymbol, {
    onClick: function onClick() {
      showDropdown();
    }
  }, dropdown == true ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
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
  }), store.symbol), dropdown == true ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DropdownListContainer, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DropdownListItem, {
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
var LapperContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Menu__LapperContainer",
  componentId: "sc-7pnj6a-0"
})(["display:flex;flex-direction:column;margin-left:24px;"]);
var Lapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].aside.withConfig({
  displayName: "Menu__Lapper",
  componentId: "sc-7pnj6a-1"
})(["display:flex;flex-direction:column;flex-basis:240px;border-radius:2px;background-color:", ";background-color:#212529;margin-bottom:10px;@media (max-width:768px){display:none;}"], function (props) {
  return props.theme.foreground;
});
var InnerLapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Menu__InnerLapper",
  componentId: "sc-7pnj6a-2"
})(["color:white;text-align:center;margin:auto;"]);
var Lapper2 = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].aside.withConfig({
  displayName: "Menu__Lapper2",
  componentId: "sc-7pnj6a-3"
})(["border-radius:2px;background-color:", ";background-color:green;margin:auto;"], function (props) {
  return props.theme.foreground;
});
var Lapper3 = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].aside.withConfig({
  displayName: "Menu__Lapper3",
  componentId: "sc-7pnj6a-4"
})(["border-radius:2px;background-color:", ";background-color:red;margin:auto;"], function (props) {
  return props.theme.foreground;
});
var Lapper4 = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].aside.withConfig({
  displayName: "Menu__Lapper4",
  componentId: "sc-7pnj6a-5"
})(["display:flex;flex-direction:column;border-radius:2px;background-color:", ";background-color:#212529;margin-bottom:10px;@media (max-width:768px){display:none;}"], function (props) {
  return props.theme.foreground;
});
var SetSymbol = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Menu__SetSymbol",
  componentId: "sc-7pnj6a-6"
})(["font-weight:500;font-size:14px;", " color:#fff;background-color:#212527;:hover{cursor:pointer;}"], _shared_helpers__WEBPACK_IMPORTED_MODULE_10__["wideFont"]);
var DropdownContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Menu__DropdownContainer",
  componentId: "sc-7pnj6a-7"
})(["height:100px;"]);
var DropdownListContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].ul.withConfig({
  displayName: "Menu__DropdownListContainer",
  componentId: "sc-7pnj6a-8"
})(["list-style-type:none;"]);
var DropdownListItem = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].li.withConfig({
  displayName: "Menu__DropdownListItem",
  componentId: "sc-7pnj6a-9"
})(["text-align:center;", " font-weight:500;font-size:14px;color:#fff;:hover{cursor:pointer;color:#000;background-color:#fff;}"], _shared_helpers__WEBPACK_IMPORTED_MODULE_10__["wideFont"]);

/***/ })

})
//# sourceMappingURL=dashboard.js.0e2db6616f2dd97a09a2.hot-update.js.map