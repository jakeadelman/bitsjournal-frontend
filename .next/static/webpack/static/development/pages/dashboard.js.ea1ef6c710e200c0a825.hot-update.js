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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


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
      globalHashActive: ["all"]
    };
    _this.getGlobalHashtags = _this.getGlobalHashtags.bind(_assertThisInitialized(_this));
    _this.hashtagClicked = _this.hashtagClicked.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getGlobalHashtags(this.props.data);
    }
  }, {
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
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapper, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ChartWrapper, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TopHashtagDiv, null, this.state.globalHashActive.map(function (hash) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TopHashtagIndividualActive, null, "#", hash);
      }), this.state.globalHash.map(function (hash) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TopHashtagIndividual, {
          onClick: function onClick() {
            return _this2.hashtagClicked(hash);
          }
        }, "#", hash);
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContainDivHeader, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDivHeader, null, "Start"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDivHeader, null, "End"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDivHeader, null, "Direction"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDivHeader, null, "Avg Entry"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDivHeader, null, "Avg Exit"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDivHeader, null, "Qty"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextToDivHeader, null, "Realized Pnl")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ReChart, {
        data: this.props.data
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Sidebar, null));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);


var TopHashtagDiv = styled.div(_templateObject());
var TopHashtagIndividual = styled.div(_templateObject2());
var TopHashtagIndividualActive = styled.div(_templateObject3());
var ChartWrapper = styled.div(_templateObject4());
var Wrapper = styled.div(_templateObject5());

/***/ })

})
//# sourceMappingURL=dashboard.js.ea1ef6c710e200c0a825.hot-update.js.map