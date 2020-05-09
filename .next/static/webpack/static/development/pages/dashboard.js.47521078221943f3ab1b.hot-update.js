webpackHotUpdate("static/development/pages/dashboard.js",{

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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Trades__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Trades */ "./components/Dashboard/Trades.js");
/* harmony import */ var _Menu_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Menu/Menu */ "./components/Menu/Menu.js");
/* harmony import */ var _shared_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/helpers */ "./components/Dashboard/shared/helpers.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Notes_NotesTest__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Notes/NotesTest */ "./components/Dashboard/Notes/NotesTest.js");
/* harmony import */ var _Tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Tabs */ "./components/Dashboard/Tabs.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
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
      isSingle: false
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
          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Wrapper, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(ChartWrapper, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(TopBarParent, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(TopBarChildBig, null, this.state.globalHashActive.map(function (hash) {
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
          })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(TopBarChildSmall, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(TopHashtagIndividualActivePnl, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Menu_Menu__WEBPACK_IMPORTED_MODULE_3__["Pnl"], null))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(TopBarChildBig, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(TopHashtagIndividualActiveRight, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Menu_Menu__WEBPACK_IMPORTED_MODULE_3__["SymbolChooser"], null)))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(WholeGrid, null, this.state.width > 1380 ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Trades__WEBPACK_IMPORTED_MODULE_2__["ContainDivHeader"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Trades__WEBPACK_IMPORTED_MODULE_2__["NextToDivHeader"], null, "Start"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Trades__WEBPACK_IMPORTED_MODULE_2__["NextToDivHeader"], null, "End"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Trades__WEBPACK_IMPORTED_MODULE_2__["NextToDivHeader"], null, "L/S"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Trades__WEBPACK_IMPORTED_MODULE_2__["NextToDivHeader"], null, "Avg Entry"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Trades__WEBPACK_IMPORTED_MODULE_2__["NextToDivHeader"], null, "Avg Exit"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Trades__WEBPACK_IMPORTED_MODULE_2__["NextToDivHeader"], null, "Qty"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Trades__WEBPACK_IMPORTED_MODULE_2__["NextToDivHeader"], null, "Realized Pnl")) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Trades__WEBPACK_IMPORTED_MODULE_2__["ContainDivHeader"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Trades__WEBPACK_IMPORTED_MODULE_2__["NextToDivHeader"], null, "Start"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Trades__WEBPACK_IMPORTED_MODULE_2__["NextToDivHeader"], null, "End"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Trades__WEBPACK_IMPORTED_MODULE_2__["NextToDivHeader"], null, "L/S"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Trades__WEBPACK_IMPORTED_MODULE_2__["NextToDivHeader"], null, "Entry"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Trades__WEBPACK_IMPORTED_MODULE_2__["NextToDivHeader"], null, "Exit"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Trades__WEBPACK_IMPORTED_MODULE_2__["NextToDivHeader"], null, "Qty"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Trades__WEBPACK_IMPORTED_MODULE_2__["NextToDivHeader"], null, "RPNL")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Trades__WEBPACK_IMPORTED_MODULE_2__["default"], {
            data: this.state.data,
            filteredData: this.state.filteredData,
            initData: this.props.data
          }))));
        } else {
          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Wrapper, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(ChartWrapper, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(TopBarParent, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(TopBarChildBig, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Tabs__WEBPACK_IMPORTED_MODULE_9__["default"], null)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(TopBarChildSmall, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(TopHashtagIndividualActivePnl, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Menu_Menu__WEBPACK_IMPORTED_MODULE_3__["Pnl"], null))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(TopBarChildBig, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(TopHashtagIndividualActiveRight, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Notes_NotesTest__WEBPACK_IMPORTED_MODULE_8__["default"], {
            firstTrade: this.state.singleTrade
          })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(WholeGrid, null, this.state.width > 1380 ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Trades__WEBPACK_IMPORTED_MODULE_2__["ContainDivHeader"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Trades__WEBPACK_IMPORTED_MODULE_2__["NextToDivHeader"], null, "Start"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Trades__WEBPACK_IMPORTED_MODULE_2__["NextToDivHeader"], null, "End"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Trades__WEBPACK_IMPORTED_MODULE_2__["NextToDivHeader"], null, "L/S"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Trades__WEBPACK_IMPORTED_MODULE_2__["NextToDivHeader"], null, "Avg Entry"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Trades__WEBPACK_IMPORTED_MODULE_2__["NextToDivHeader"], null, "Avg Exit"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Trades__WEBPACK_IMPORTED_MODULE_2__["NextToDivHeader"], null, "Qty"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Trades__WEBPACK_IMPORTED_MODULE_2__["NextToDivHeader"], null, "Realized Pnl")) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Trades__WEBPACK_IMPORTED_MODULE_2__["ContainDivHeader"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Trades__WEBPACK_IMPORTED_MODULE_2__["NextToDivHeader"], null, "Start"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Trades__WEBPACK_IMPORTED_MODULE_2__["NextToDivHeader"], null, "End"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Trades__WEBPACK_IMPORTED_MODULE_2__["NextToDivHeader"], null, "L/S"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Trades__WEBPACK_IMPORTED_MODULE_2__["NextToDivHeader"], null, "Entry"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Trades__WEBPACK_IMPORTED_MODULE_2__["NextToDivHeader"], null, "Exit"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Trades__WEBPACK_IMPORTED_MODULE_2__["NextToDivHeader"], null, "Qty"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Trades__WEBPACK_IMPORTED_MODULE_2__["NextToDivHeader"], null, "RPNL")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Trades__WEBPACK_IMPORTED_MODULE_2__["default"], {
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


var SingleTabInner = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Dashboard__SingleTabInner",
  componentId: "ij5648-0"
})(["margin:auto;"]);
var SingleTab = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Dashboard__SingleTab",
  componentId: "ij5648-1"
})(["color:", ";background-color:", ";margin:auto 10px;border-radius:2px;padding:5px;:hover{cursor:pointer;}"], function (props) {
  return props.isActive ? "#fff" : "#000";
}, function (props) {
  return props.isActive ? "#000" : "#fff";
});
var WrapTabs = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Dashboard__WrapTabs",
  componentId: "ij5648-2"
})(["display:flex;flex-direction:row;font-size:15px;"]);
var WholeGrid = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Dashboard__WholeGrid",
  componentId: "ij5648-3"
})(["border:1px solid #f2f2f2;"]);
var TopBarParent = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Dashboard__TopBarParent",
  componentId: "ij5648-4"
})(["display:flex;flex-direction:row;flex-wrap:wrap;margin-bottom:14px;"]);
var TopBarChildBig = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Dashboard__TopBarChildBig",
  componentId: "ij5648-5"
})(["flex:1 1 45%;display:flex;flex-direction:row;"]);
var TopBarChildSmall = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Dashboard__TopBarChildSmall",
  componentId: "ij5648-6"
})(["flex:1 1 10%;display:flex;flex-direction:row;"]);
var TopHashtagIndividual = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Dashboard__TopHashtagIndividual",
  componentId: "ij5648-7"
})(["background:#f8f8ff;color:#000;padding:8px;margin:0 10px;border-radius:2px;", ":hover{cursor:pointer;}margin-left:0;"], _shared_helpers__WEBPACK_IMPORTED_MODULE_13__["wideFont"]);
var TopHashtagIndividualActive = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Dashboard__TopHashtagIndividualActive",
  componentId: "ij5648-8"
})(["background:#212528;color:#fff;padding:8px;margin:0 10px;border-radius:2px;", " margin:0 auto;:hover{cursor:pointer;}margin-left:0;"], _shared_helpers__WEBPACK_IMPORTED_MODULE_13__["wideFont"]);
var TopHashtagIndividualActiveRight = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Dashboard__TopHashtagIndividualActiveRight",
  componentId: "ij5648-9"
})(["background:#212528;color:#fff;padding:8px;margin:0 10px;border-radius:2px;", " margin:0 auto;:hover{cursor:pointer;}margin-right:0;"], _shared_helpers__WEBPACK_IMPORTED_MODULE_13__["wideFont"]);
var TopHashtagIndividualActivePnl = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Dashboard__TopHashtagIndividualActivePnl",
  componentId: "ij5648-10"
})(["color:#fff;padding:0px;margin:0 10px;border-radius:2px;", ":hover{cursor:pointer;}margin:auto;"], _shared_helpers__WEBPACK_IMPORTED_MODULE_13__["wideFont"]);
var ChartWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Dashboard__ChartWrapper",
  componentId: "ij5648-11"
})(["background:white;padding:5px;width:100%;padding:10px;@media (max-width:768px){margin:0 5vw;}"]);
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Dashboard__Wrapper",
  componentId: "ij5648-12"
})(["display:flex;margin-top:5px;"]);

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
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.esm.js");
/* harmony import */ var _notesHelpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notesHelpers */ "./components/Dashboard/Notes/notesHelpers.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! fast-deep-equal */ "./node_modules/fast-deep-equal/index.js");
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(fast_deep_equal__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_autosize_textarea__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-autosize-textarea */ "./node_modules/react-autosize-textarea/lib/index.js");
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
        })));
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
var AddHashSubmit = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].input.withConfig({
  displayName: "NotesTest__AddHashSubmit",
  componentId: "sc-6j67dn-0"
})(["background:none;border:none;color:white;font-weight:500;padding:2px;"]);
var Popup = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "NotesTest__Popup",
  componentId: "sc-6j67dn-1"
})(["position:relative;display:inline-block;cursor:pointer;background:#000;padding:8px;border-radius:2px;"]);
var PopupTop = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "NotesTest__PopupTop",
  componentId: "sc-6j67dn-2"
})(["position:absolute;background:#000;z-index:1;margin:5px;padding:2px;border-radius:2px;"]); // background: #6c757d;
// background: #b9bdc1;

var SingleHashtagDiv = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "NotesTest__SingleHashtagDiv",
  componentId: "sc-6j67dn-3"
})(["background:#f8f8ff;margin:20px 8px;color:black;padding:5px 7px;white-space:nowrap;display:flex;flex-direction:row;margin-left:0px;border-radius:2px;"]);
var ShowNotesDiv = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "NotesTest__ShowNotesDiv",
  componentId: "sc-6j67dn-4"
})(["background:#fff;margin:20px 8px;color:#000;padding:10px;padding-top:8px;white-space:nowrap;display:flex;flex-direction:row;margin-left:0px;border-radius:2px;background:#f8f8ff;:hover{transition:none;cursor:pointer;}"]);
var ShowNotesInner = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "NotesTest__ShowNotesInner",
  componentId: "sc-6j67dn-5"
})(["", " font-size:13px;transition:none;margin:auto;"], _shared_helpers__WEBPACK_IMPORTED_MODULE_13__["wideFont"]);
var SingleHashtagText = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "NotesTest__SingleHashtagText",
  componentId: "sc-6j67dn-6"
})(["margin:auto;", ""], _shared_helpers__WEBPACK_IMPORTED_MODULE_13__["wideFont"]);
var SingleHashtagDelete = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "NotesTest__SingleHashtagDelete",
  componentId: "sc-6j67dn-7"
})(["margin:auto;margin-left:6px;margin-bottom:4px;:hover{cursor:pointer;}"]);
var HashtagDiv = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "NotesTest__HashtagDiv",
  componentId: "sc-6j67dn-8"
})(["margin:auto 0;text-align:center;vertical-align:middle;color:white;padding:10px;padding-top:8px;"]);
var FullRow = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].form.withConfig({
  displayName: "NotesTest__FullRow",
  componentId: "sc-6j67dn-9"
})(["display:flex;flex-direction:row;background:#f8f8ff;"]);
var NotesSubmit = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].input.withConfig({
  displayName: "NotesTest__NotesSubmit",
  componentId: "sc-6j67dn-10"
})(["margin:9px;padding:15px;background:#212528;border:none;color:white;"]);
var NotesInput = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].textarea.withConfig({
  displayName: "NotesTest__NotesInput",
  componentId: "sc-6j67dn-11"
})(["width:100%;padding:12px 20px;margin:0px 0;box-sizing:border-box;background:#f8f8ff;border:none;"]);

/***/ })

})
//# sourceMappingURL=dashboard.js.47521078221943f3ab1b.hot-update.js.map