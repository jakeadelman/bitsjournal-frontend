webpackHotUpdate("static/development/pages/dashboard.js",{

/***/ "./components/Charts2/index.js":
/*!*************************************!*\
  !*** ./components/Charts2/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ChartComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ChartDemo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChartDemo */ "./components/Charts2/ChartDemo.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./components/Charts2/utils.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_stockcharts_lib_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-stockcharts/lib/helper */ "./node_modules/react-stockcharts/lib/helper/index.js");
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
            var compare2 = newTrade.date - end; // console.log(compare1, compare2);

            var additionalTime = 1000 * 60 * 20;

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


            var _additionalTime = 1000 * 60 * 60;

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

            var _additionalTime3 = 1000 * 60 * 60 * 24 * 4;

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




/***/ })

})
//# sourceMappingURL=dashboard.js.6a54fedef931d8c1b823.hot-update.js.map