webpackHotUpdate("static/development/pages/dashboard.js",{

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
/* harmony import */ var _Charts_ReChart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Charts/ReChart */ "./components/Charts/ReChart.js");
/* harmony import */ var _Categories_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Categories/Menu */ "./components/Categories/Menu.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");
/* harmony import */ var _Helpers_Functions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Helpers/Functions */ "./components/Helpers/Functions.js");
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! fast-deep-equal */ "./node_modules/fast-deep-equal/index.js");
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
var Comp = (_dec2 = Object(mobx_react__WEBPACK_IMPORTED_MODULE_6__["inject"])("store"), _dec2(_class3 = Object(mobx_react__WEBPACK_IMPORTED_MODULE_6__["observer"])(_class3 =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(Comp, _React$Component2);

  function Comp(props) {
    var _this2;

    _classCallCheck(this, Comp);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(Comp).call(this, props));
    _this2.state = {};
    return _this2;
  }

  _createClass(Comp, [{
    key: "getGlobalHashtags",
    value: function getGlobalHashtags(data) {
      for (var i = 0; i < data.fetchTradeHistory.length; i++) {
        var thisTradeHash = data.fetchTradeHistory[i].hashtags.split(",");

        if (thisTradeHash != "undefined") {
          for (var j = 0; j < thisTradeHash.length; j++) {
            if (j != "undefined") {
              this.props.store.pushGlobalHash(j);
              console.log(this.props.store);
            }
          }
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

          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapper, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ChartWrapper, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Charts_ReChart__WEBPACK_IMPORTED_MODULE_2__["ContainDivHeader"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Charts_ReChart__WEBPACK_IMPORTED_MODULE_2__["NextToDivHeader"], null, "Start"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Charts_ReChart__WEBPACK_IMPORTED_MODULE_2__["NextToDivHeader"], null, "End"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Charts_ReChart__WEBPACK_IMPORTED_MODULE_2__["NextToDivHeader"], null, "Direction"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Charts_ReChart__WEBPACK_IMPORTED_MODULE_2__["NextToDivHeader"], null, "Avg Entry"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Charts_ReChart__WEBPACK_IMPORTED_MODULE_2__["NextToDivHeader"], null, "Avg Exit"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Charts_ReChart__WEBPACK_IMPORTED_MODULE_2__["NextToDivHeader"], null, "Qty"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Charts_ReChart__WEBPACK_IMPORTED_MODULE_2__["NextToDivHeader"], null, "Realized Pnl")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Charts_ReChart__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
var ChartWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "FetchQuery__ChartWrapper",
  componentId: "sc-1g6l220-0"
})(["background:white;padding:5px;width:100%;@media (max-width:768px){margin:0 5vw;}"]);
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "FetchQuery__Wrapper",
  componentId: "sc-1g6l220-1"
})(["display:flex;align-items:flex-align;"]);

/***/ })

})
//# sourceMappingURL=dashboard.js.ea7fd720e7cd6abb8812.hot-update.js.map