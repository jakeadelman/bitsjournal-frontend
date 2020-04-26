webpackHotUpdate("static/development/pages/dashboard.js",{

/***/ "./components/Dashboard/ReChart.js":
/*!*****************************************!*\
  !*** ./components/Dashboard/ReChart.js ***!
  \*****************************************/
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

      // console.log(this.state.data[0], "DAT ZERO");
      // if (this.state.data[0] != undefined) {
      // if (this.state.width != null) {
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
          }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDiv, null, "$", this.state.avgEntryPrice.toFixed(1)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDiv, null, "$", this.state.avgExitPrice.toFixed(1)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDiv, null, this.state.cumQty), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDiv, null, this.state.pnl.toFixed(4) + "xbt")), this.state.data.map(function (dat) {
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
          }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDiv, null, "$", this.state.avgEntryPrice.toFixed(1)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDiv, null, "$", this.state.avgExitPrice.toFixed(1)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDiv, null, this.state.cumQty), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDiv, null, this.state.pnl.toFixed(4) + "xbt")), this.state.data.map(function (dat) {
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
          }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDiv, null, "$", this.state.avgEntryPrice.toFixed(1)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDiv, null, "$", this.state.avgExitPrice.toFixed(1)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDiv, null, this.state.cumQty), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDiv, null, this.state.pnl.toFixed(4) + "xbt")), this.state.data.map(function (dat) {
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
          }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDiv, null, "$", this.state.avgEntryPrice.toFixed(1)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDiv, null, "$", this.state.avgExitPrice.toFixed(1)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDiv, null, this.state.cumQty), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDiv, null, this.state.pnl.toFixed(4) + "xbt")), this.state.data.map(function (dat) {
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
  componentId: "mo5ubi-0"
})(["width:100%;display:flex;flex-direction:row;height:52px;font-weight:400;border-bottom:1px solid #f2f2f2;&:hover{transition:none;border-left:5px solid #212528;cursor:pointer;}"]);
var ContainDivClicked = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "ReChart__ContainDivClicked",
  componentId: "mo5ubi-1"
})(["width:100%;display:flex;flex-direction:row;height:52px;transition:none;font-weight:400;border-left:10px solid #212528;border-radius:none;cursor:pointer;"]);
var ContainDivBlack = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "ReChart__ContainDivBlack",
  componentId: "mo5ubi-2"
})(["width:100%;display:flex;flex-direction:row;height:42px;background:#f8f8ff;border-bottom:1px solid #f2f2f2;"]);
var ContainDivHeader = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "ReChart__ContainDivHeader",
  componentId: "mo5ubi-3"
})(["width:100%;display:flex;flex-direction:row;height:42px;border-bottom:1px solid #d3d3d3;"]);
var NextToDiv = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "ReChart__NextToDiv",
  componentId: "mo5ubi-4"
})(["display:inline-block;width:30%;padding:8px;padding-top:14px;padding-left:12px;font-size:15px;color:#000000;@media (max-width:550px){font-size:13px;}"]);
var NextToDivBlack = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "ReChart__NextToDivBlack",
  componentId: "mo5ubi-5"
})(["display:inline-block;width:30%;padding:4px;padding-left:14px;font-size:14px;padding-top:9px;"]);
var NextToDivBlackTitle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "ReChart__NextToDivBlackTitle",
  componentId: "mo5ubi-6"
})(["display:inline-block;width:30%;padding:4px;padding-left:14px;padding-top:9px;font-size:14px;"]);
var NextToDivBlackTime = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "ReChart__NextToDivBlackTime",
  componentId: "mo5ubi-7"
})(["display:inline-block;width:30%;padding:4px;padding-left:14px;font-size:14px;padding-top:10px;@media (max-width:1200px){font-size:13px;}@media (max-width:663px){padding-top:0px !important;}"]);
var NextToDivHeader = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "ReChart__NextToDivHeader",
  componentId: "mo5ubi-8"
})(["display:inline-block;width:30%;color:#78838e;font-weight:600;display:inline-block;text-transform:uppercase;padding:10px;padding-left:12px;", " font-size:14px;"], _shared_helpers__WEBPACK_IMPORTED_MODULE_3__["smallFont"]);
var ReadMore = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "ReChart__ReadMore",
  componentId: "mo5ubi-9"
})(["position:absolute;bottom:0;left:0;width:100%;text-align:center;margin:0;padding:10px 0;background-image:-webkit-gradient( linear,left top,left bottom,color-stop(0,rgba(255,0,0,0)),color-stop(1,rgba(248,248,255,1)) );"]);
var ReadMoreTall = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "ReChart__ReadMoreTall",
  componentId: "mo5ubi-10"
})(["position:absolute;bottom:0;left:0;width:100%;text-align:center;margin:0;padding:10px 0;"]); // background-image: linear-gradient(to bottom, transparent, black);

var MoreBoxShort = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "ReChart__MoreBoxShort",
  componentId: "mo5ubi-11"
})(["max-height:200px;position:relative;overflow:hidden;"]);
var MoreBoxTall = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "ReChart__MoreBoxTall",
  componentId: "mo5ubi-12"
})(["max-height:none;position:relative;overflow:hidden;"]);
var TotalDetails = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "ReChart__TotalDetails",
  componentId: "mo5ubi-13"
})([""]); // border: 1px solid rgba(33, 37, 40, 0.7);

var ReadMoreInner = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "ReChart__ReadMoreInner",
  componentId: "mo5ubi-14"
})(["color:rgba(33,37,40,1);padding:0;margin:auto;width:30px;border-radius:2px;-webkit-transition-property:none;-moz-transition-property:none;-o-transition-property:none;transition-property:none;:hover{cursor:pointer;background-color:rgba(33,37,40,1);color:#fff;-webkit-transition-property:none;-moz-transition-property:none;-o-transition-property:none;transition-property:none;}font-size:20px;"]);

/***/ })

})
//# sourceMappingURL=dashboard.js.406f47baccef137e0a52.hot-update.js.map