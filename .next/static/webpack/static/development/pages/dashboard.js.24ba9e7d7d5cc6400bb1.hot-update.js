webpackHotUpdate("static/development/pages/dashboard.js",{

/***/ "./components/Dashboard/Notes.js":
/*!***************************************!*\
  !*** ./components/Dashboard/Notes.js ***!
  \***************************************/
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
/* harmony import */ var _notesHelpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notesHelpers */ "./components/Dashboard/notesHelpers.js");
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
/* harmony import */ var _shared_helpers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/helpers */ "./components/shared/helpers.js");


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
                    notes = res[0]; // let hashtags = res[1];

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
                            client = _this2.state.client; // if(typeof)

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
  displayName: "Notes__AddHashSubmit",
  componentId: "i5ukt5-0"
})(["background:none;border:none;color:white;font-weight:500;padding:2px;"]);
var Popup = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Notes__Popup",
  componentId: "i5ukt5-1"
})(["position:relative;display:inline-block;cursor:pointer;background:#000;padding:8px;border-radius:2px;"]);
var PopupTop = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Notes__PopupTop",
  componentId: "i5ukt5-2"
})(["position:absolute;background:#000;z-index:1;margin:5px;padding:2px;border-radius:2px;"]); // background: #6c757d;
// background: #b9bdc1;

var SingleHashtagDiv = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Notes__SingleHashtagDiv",
  componentId: "i5ukt5-3"
})(["background:#f8f8ff;margin:20px 8px;color:black;padding:5px 5px;white-space:nowrap;display:flex;flex-direction:row;margin-left:0px;border-radius:2px;"]);
var ShowNotesDiv = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Notes__ShowNotesDiv",
  componentId: "i5ukt5-4"
})(["background:#fff;margin:20px 8px;color:#000;padding:10px;padding-top:8px;white-space:nowrap;display:flex;flex-direction:row;margin-left:0px;border-radius:2px;:hover{transition:none;cursor:pointer;}"]);
var ShowNotesInner = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Notes__ShowNotesInner",
  componentId: "i5ukt5-5"
})(["", " font-size:13px;transition:none;margin:auto;"], _shared_helpers__WEBPACK_IMPORTED_MODULE_13__["wideFont"]);
var SingleHashtagText = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Notes__SingleHashtagText",
  componentId: "i5ukt5-6"
})(["margin:auto;", ""], _shared_helpers__WEBPACK_IMPORTED_MODULE_13__["wideFont"]);
var SingleHashtagDelete = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Notes__SingleHashtagDelete",
  componentId: "i5ukt5-7"
})(["margin:auto;margin-left:6px;margin-bottom:4px;:hover{cursor:pointer;}"]);
var HashtagDiv = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Notes__HashtagDiv",
  componentId: "i5ukt5-8"
})(["margin:auto 0;text-align:center;vertical-align:middle;color:white;padding:10px;padding-top:8px;"]);
var FullRow = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].form.withConfig({
  displayName: "Notes__FullRow",
  componentId: "i5ukt5-9"
})(["display:flex;flex-direction:row;"]);
var NotesSubmit = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].input.withConfig({
  displayName: "Notes__NotesSubmit",
  componentId: "i5ukt5-10"
})(["margin:9px;padding:15px;background:#212528;border:none;color:white;"]);
var NotesInput = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].textarea.withConfig({
  displayName: "Notes__NotesInput",
  componentId: "i5ukt5-11"
})(["width:100%;padding:12px 20px;margin:8px 0;box-sizing:border-box;background:#f8f8ff;border:none;"]);

/***/ })

})
//# sourceMappingURL=dashboard.js.24ba9e7d7d5cc6400bb1.hot-update.js.map