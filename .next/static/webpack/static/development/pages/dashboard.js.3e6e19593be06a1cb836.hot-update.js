webpackHotUpdate("static/development/pages/dashboard.js",{

/***/ "./components/Dashboard/Hashtags.js":
/*!******************************************!*\
  !*** ./components/Dashboard/Hashtags.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Charts_ReChart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Charts/ReChart */ "./components/Charts/ReChart.js");
/* harmony import */ var _Categories_Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Categories/Menu */ "./components/Categories/Menu.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers */ "./components/Dashboard/helpers.js");



function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: flex-align;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  background: white;\n  padding: 5px;\n  width: 100%;\n  @media (max-width: 768px) {\n    margin: 0 5vw;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  background: #212528;\n  color: #fff;\n  padding: 8px;\n  margin: 0 10px;\n  border-radius: 2px;\n  :hover {\n    cursor: pointer;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  background: #f8f8ff;\n  color: #000;\n  padding: 8px;\n  margin: 0 10px;\n  border-radius: 2px;\n  :hover {\n    cursor: pointer;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  margin-bottom: 8px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

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







var _default =
/*#__PURE__*/
function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default(props) {
    var _this;

    _classCallCheck(this, _default);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(_default).call(this, props));
    _this.state = {
      globalHash: [],
      globalHashActive: ["all"],
      data: _this.props.data
    };
    _this.getGlobalHashtags = _this.getGlobalHashtags.bind(_assertThisInitialized(_this));
    _this.hashtagClicked = _this.hashtagClicked.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(_default, [{
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
      console.log(this.state.data, "THIS DAT");
    }
  }, {
    key: "getGlobalHashtags",
    value: function () {
      var _getGlobalHashtags = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(data) {
        var i, thisTradeHash, j, newGlobalHash, newDat;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                i = 0;

              case 1:
                if (!(i < data.fetchTradeHistory.length)) {
                  _context.next = 20;
                  break;
                }

                thisTradeHash = data.fetchTradeHistory[i].hashtags.split(",");

                if (!(thisTradeHash != "undefined")) {
                  _context.next = 17;
                  break;
                }

                j = 0;

              case 5:
                if (!(j < thisTradeHash.length)) {
                  _context.next = 17;
                  break;
                }

                if (!(thisTradeHash[j] != "undefined")) {
                  _context.next = 14;
                  break;
                }

                newGlobalHash = this.state.globalHash;
                newGlobalHash.push(thisTradeHash[j]);
                this.setState({
                  globalHash: newGlobalHash
                });
                _context.next = 12;
                return Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["getNewDat"])(data, this.state.globalHashActive);

              case 12:
                newDat = _context.sent;
                this.setState({
                  globalHash: newGlobalHash,
                  data: newDat
                });

              case 14:
                j++;
                _context.next = 5;
                break;

              case 17:
                i++;
                _context.next = 1;
                break;

              case 20:
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
    key: "hashtagClicked",
    value: function () {
      var _hashtagClicked = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(value) {
        var newArray, index, newGlobalHash, i, _index, _newGlobalHash, newGlobalHashActive, newDat, _index2, _newGlobalHash2, _newGlobalHashActive, _newDat;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                console.log("CLICKED");
                console.log(this.state.data, "THIS DAT");

                if (!(this.state.globalHashActive[0] == undefined)) {
                  _context2.next = 12;
                  break;
                }

                console.log("WAS UNDEFINED");
                newArray = [];
                newArray.push(value);
                this.setState({
                  globalHashActive: newArray
                });
                index = this.state.globalHash.indexOf(value);

                if (index > -1) {
                  newGlobalHash = this.state.globalHash;
                  newGlobalHash.splice(index, 1);
                  this.setState({
                    globalHash: newGlobalHash
                  });
                }

                console.log(this.state.globalHashActive);
                console.log(this.state.globalHash);
                return _context2.abrupt("return");

              case 12:
                i = 0;

              case 13:
                if (!(i < this.state.globalHashActive.length)) {
                  _context2.next = 49;
                  break;
                }

                if (!(this.state.globalHashActive[i] == "all")) {
                  _context2.next = 28;
                  break;
                }

                this.state.globalHashActive = [];
                _index = this.state.globalHash.indexOf(value);

                if (!(_index > -1)) {
                  _context2.next = 28;
                  break;
                }

                _newGlobalHash = this.state.globalHash;

                _newGlobalHash.splice(_index, 1);

                _newGlobalHash.push("all");

                newGlobalHashActive = this.state.globalHashActive;
                newGlobalHashActive.push(value);
                _context2.next = 25;
                return Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["getNewDat"])(this.state.data, newGlobalHashActive);

              case 25:
                newDat = _context2.sent;
                this.setState({
                  globalHashActive: newGlobalHashActive,
                  globalHash: _newGlobalHash,
                  data: newDat
                });
                return _context2.abrupt("return");

              case 28:
                if (!(value == this.state.globalHashActive[i])) {
                  _context2.next = 30;
                  break;
                }

                return _context2.abrupt("return");

              case 30:
                if (!(i == this.state.globalHashActive.length - 1)) {
                  _context2.next = 46;
                  break;
                }

                console.log("ENDING");
                _index2 = this.state.globalHash.indexOf(value);

                if (!(_index2 > -1)) {
                  _context2.next = 46;
                  break;
                }

                _newGlobalHash2 = this.state.globalHash;

                _newGlobalHash2.splice(_index2, 1);

                _newGlobalHash2.push("all");

                _newGlobalHashActive = this.state.globalHashActive;

                _newGlobalHashActive.push(value);

                _context2.next = 41;
                return Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["getNewDat"])(this.state.data, _newGlobalHashActive);

              case 41:
                _newDat = _context2.sent;
                this.setState({
                  globalHashActive: _newGlobalHashActive,
                  globalHash: _newGlobalHash2,
                  data: _newDat
                });
                console.log(this.state.globalHashActive);
                console.log(this.state.globalHash);
                return _context2.abrupt("return");

              case 46:
                i++;
                _context2.next = 13;
                break;

              case 49:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function hashtagClicked(_x2) {
        return _hashtagClicked.apply(this, arguments);
      }

      return hashtagClicked;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      // this.getGlobalHashtags(this.props.data);
      if (this.state.data != null) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Wrapper, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ChartWrapper, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TopHashtagDiv, null, this.state.globalHashActive.map(function (hash) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TopHashtagIndividualActive, null, "#", hash);
        }), this.state.globalHash.map(function (hash) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TopHashtagIndividual, {
            onClick: function onClick() {
              return _this2.hashtagClicked(hash);
            }
          }, "#", hash);
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Charts_ReChart__WEBPACK_IMPORTED_MODULE_3__["ContainDivHeader"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Charts_ReChart__WEBPACK_IMPORTED_MODULE_3__["NextToDivHeader"], null, "Start"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Charts_ReChart__WEBPACK_IMPORTED_MODULE_3__["NextToDivHeader"], null, "End"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Charts_ReChart__WEBPACK_IMPORTED_MODULE_3__["NextToDivHeader"], null, "Direction"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Charts_ReChart__WEBPACK_IMPORTED_MODULE_3__["NextToDivHeader"], null, "Avg Entry"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Charts_ReChart__WEBPACK_IMPORTED_MODULE_3__["NextToDivHeader"], null, "Avg Exit"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Charts_ReChart__WEBPACK_IMPORTED_MODULE_3__["NextToDivHeader"], null, "Qty"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Charts_ReChart__WEBPACK_IMPORTED_MODULE_3__["NextToDivHeader"], null, "Realized Pnl")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Charts_ReChart__WEBPACK_IMPORTED_MODULE_3__["default"], {
          data: this.state.data
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Categories_Menu__WEBPACK_IMPORTED_MODULE_4__["default"], null));
      }
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);


var TopHashtagDiv = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());
var TopHashtagIndividual = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject2());
var TopHashtagIndividualActive = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject3());
var ChartWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject4());
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject5());

/***/ })

})
//# sourceMappingURL=dashboard.js.3e6e19593be06a1cb836.hot-update.js.map