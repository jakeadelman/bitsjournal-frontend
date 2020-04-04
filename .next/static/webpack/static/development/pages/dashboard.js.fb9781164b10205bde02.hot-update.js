webpackHotUpdate("static/development/pages/dashboard.js",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _shared_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/helpers */ "./components/shared/helpers.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../theme */ "./components/theme.js");
/* harmony import */ var _Helpers_Functions_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Helpers/Functions.js */ "./components/Helpers/Functions.js");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");
/* harmony import */ var _Charts2_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Charts2/index */ "./components/Charts2/index.js");
/* harmony import */ var _Notes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Notes */ "./components/Charts/Notes.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
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
              this.state.pnl = thePnl;
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
              this.state.pnl = pnl;
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
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faCaretUp"]
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
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faCaretDown"]
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

var ContainDiv = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "ReChart__ContainDiv",
  componentId: "sc-1e3lvhz-0"
})(["width:100%;display:flex;flex-direction:row;height:52px;border-bottom:1px solid #d3d3d3;&:hover{border-left:3px solid black;cursor:pointer;}"]);
var ContainDivClicked = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "ReChart__ContainDivClicked",
  componentId: "sc-1e3lvhz-1"
})(["width:100%;display:flex;flex-direction:row;height:52px;border-bottom:1px solid #d3d3d3;border-left:5px solid black;cursor:pointer;"]);
var ContainDivBlack = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "ReChart__ContainDivBlack",
  componentId: "sc-1e3lvhz-2"
})(["width:100%;display:flex;flex-direction:row;height:42px;background:#f8f8ff;border-bottom:1px solid #f2f2f2;"]);
var ContainDivHeader = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "ReChart__ContainDivHeader",
  componentId: "sc-1e3lvhz-3"
})(["width:100%;display:flex;flex-direction:row;height:52px;border-bottom:1px solid #d3d3d3;"]);
var NextToDiv = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "ReChart__NextToDiv",
  componentId: "sc-1e3lvhz-4"
})(["display:inline-block;width:30%;padding:10px;padding-left:12px;"]);
var NextToDivBlack = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "ReChart__NextToDivBlack",
  componentId: "sc-1e3lvhz-5"
})(["display:inline-block;width:30%;padding:5px;padding-left:12px;"]);
var NextToDivHeader = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "ReChart__NextToDivHeader",
  componentId: "sc-1e3lvhz-6"
})(["display:inline-block;width:30%;color:#78838e;font-weight:600;display:inline-block;text-transform:uppercase;padding:10px;padding-left:12px;"]);
var ReadMore = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "ReChart__ReadMore",
  componentId: "sc-1e3lvhz-7"
})(["position:absolute;bottom:0;left:0;width:100%;text-align:center;margin:0;padding:30px 0;background-image:-webkit-gradient( linear,left top,left bottom,color-stop(0,rgba(255,0,0,0)),color-stop(1,rgba(248,248,255,1)) );"]);
var ReadMoreTall = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "ReChart__ReadMoreTall",
  componentId: "sc-1e3lvhz-8"
})(["position:absolute;bottom:0;left:0;width:100%;text-align:center;margin:0;padding:30px 0;"]); // background-image: linear-gradient(to bottom, transparent, black);

var MoreBoxShort = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "ReChart__MoreBoxShort",
  componentId: "sc-1e3lvhz-9"
})(["max-height:200px;position:relative;overflow:hidden;"]);
var MoreBoxTall = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "ReChart__MoreBoxTall",
  componentId: "sc-1e3lvhz-10"
})(["max-height:none;position:relative;overflow:hidden;"]);
var TotalDetails = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "ReChart__TotalDetails",
  componentId: "sc-1e3lvhz-11"
})([""]); // border: 1px solid rgba(33, 37, 40, 0.7);

var ReadMoreInner = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "ReChart__ReadMoreInner",
  componentId: "sc-1e3lvhz-12"
})(["color:rgba(33,37,40,1);padding:0;margin:auto;width:30px;border-radius:2px;:hover{cursor:pointer;background-color:red;color:rgba(33,37,40,1);}font-size:20px;"]); // const ReadMoreInner = styled.div`
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

/***/ })

})
//# sourceMappingURL=dashboard.js.fb9781164b10205bde02.hot-update.js.map