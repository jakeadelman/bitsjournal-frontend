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
})(["color:#fff;padding:8px;margin:0 10px;border-radius:2px;", " margin:0 auto;:hover{cursor:pointer;}margin-right:0;"], _shared_helpers__WEBPACK_IMPORTED_MODULE_13__["wideFont"]);
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

/***/ })

})
//# sourceMappingURL=dashboard.js.c839121c088b4754da15.hot-update.js.map