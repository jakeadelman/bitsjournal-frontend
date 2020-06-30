module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./components/App.js":
/*!***************************!*\
  !*** ./components/App.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (({
  children
}) => __jsx("main", null, children));

/***/ }),

/***/ "./components/Dashboard/768px/DashboardTest.js":
/*!*****************************************************!*\
  !*** ./components/Dashboard/768px/DashboardTest.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _class; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Tades_Trades__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Tades/Trades */ "./components/Dashboard/Tades/Trades.js");
/* harmony import */ var _Menu_Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Menu/Menu */ "./components/Menu/Menu.js");
/* harmony import */ var _Menu_768px_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Menu/768px/Menu */ "./components/Menu/768px/Menu.js");
/* harmony import */ var _shared_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/helpers */ "./components/Dashboard/shared/helpers.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Notes_NotesTest__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Notes/NotesTest */ "./components/Dashboard/Notes/NotesTest.js");
/* harmony import */ var _Tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Tabs */ "./components/Dashboard/Tabs.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! mobx-react */ "mobx-react");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! mobx */ "mobx");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _shared_helpers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/helpers */ "./components/shared/helpers.js");
var _dec, _class2;

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;
















let _class = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_11__["inject"])("store"), _dec(_class2 = Object(mobx_react__WEBPACK_IMPORTED_MODULE_11__["observer"])(_class2 = class extends react__WEBPACK_IMPORTED_MODULE_7___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      globalHash: [],
      globalHashActive: ["all"],
      data: null,
      filteredData: null,
      isSingle: false,
      isSingleNotes: false
    };
    this.getGlobalHashtags = this.getGlobalHashtags.bind(this);
    this.hashtagClicked = this.hashtagClicked.bind(this);
    this.hashtagClickedBack = this.hashtagClickedBack.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentWillMount() {
    this.setState({
      data: this.props.data
    });
    this.getGlobalHashtags(this.props.data);
  }

  componentDidMount() {
    this.singleTradeReaction = Object(mobx__WEBPACK_IMPORTED_MODULE_12__["reaction"])(() => this.props.store.hasSingleTrade, (notifications, reaction) => {
      console.log("HAS SINGLE", this.props.store.hasSingleTrade);

      if (this.props.store.hasSingleTrade == false) {
        this.setState({
          isSingle: false
        });
        console.log("setting back");
      } else {
        this.setState({
          isSingle: true,
          singleTrade: this.props.store.singleTrade[0]
        });
        console.log(this.state, "STATEE");
        console.log("setting back");
      }
    });
    this.singleNotesReaction = Object(mobx__WEBPACK_IMPORTED_MODULE_12__["reaction"])(() => this.props.store.isSingleNotes, (notifications, reaction) => {
      if (this.props.store.isSingleNotes == false) {
        this.setState({
          isSingleNotes: false
        });
      } else {
        this.setState({
          isSingleNotes: true
        });
      }
    });
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({
      width: window.innerWidth
    });
  }

  async getGlobalHashtags(data) {
    for (let i = 0; i < data.fetchTradeHistory.length; i++) {
      let thisTradeHash = data.fetchTradeHistory[i].hashtags.split(",");

      if (thisTradeHash != "undefined") {
        for (let j = 0; j < thisTradeHash.length; j++) {
          if (thisTradeHash[j] != "undefined") {
            let newGlobalHash = this.state.globalHash;
            newGlobalHash.push(thisTradeHash[j]);
            this.setState({
              globalHash: newGlobalHash
            });
          }
        }
      }
    }
  }

  async hashtagClickedBack(value) {
    if (value == "all") {
      console.log("DO NOTHING");
    } else {
      let newHashActive = [];
      let newHash = this.state.globalHash;

      for (let i = 0; i < this.state.globalHashActive.length; i++) {
        if (value !== this.state.globalHashActive[i]) {
          newHashActive.push(this.state.globalHashActive[i]);
        } else {
          newHash.push(this.state.globalHashActive[i]);
        }

        if (i == this.state.globalHashActive.length - 1) {
          if (newHashActive[0] == undefined) {
            let newHash2 = [];

            for (let j = 0; j < newHash.length; j++) {
              if (newHash[j] != "all") {
                newHash2.push(newHash[j]);
              }

              if (j == newHash.length - 1) {
                this.setState({
                  globalHash: newHash2,
                  globalHashActive: ["all"],
                  filteredData: null
                });
              }
            }
          } else {
            let newHash2 = [];

            for (let j = 0; j < newHash.length; j++) {
              if (newHash[j] != "all") {
                newHash2.push(newHash[j]);
              }

              if (j == newHash.length - 1) {
                Object(_shared_helpers__WEBPACK_IMPORTED_MODULE_4__["getNewDat"])(this.state.data, newHashActive).then(res => {
                  this.setState({
                    globalHash: newHash2,
                    globalHashActive: newHashActive,
                    filteredData: res
                  });
                });
              }
            }
          }
        }
      }
    }
  }

  async hashtagClicked(value) {
    if (value == "all") {
      let newGlobalHash = this.state.globalHash;
      let newGlobalHash2 = [];

      for (let i = 0; i < this.state.globalHashActive.length; i++) {
        newGlobalHash.push(this.state.globalHashActive[i]);

        if (i == this.state.globalHashActive.length - 1) {
          for (let j = 0; j < newGlobalHash.length; j++) {
            if (newGlobalHash[j] != "all") {
              newGlobalHash2.push(newGlobalHash[j]);
            }

            if (j == newGlobalHash.length - 1) {
              this.setState({
                globalHash: newGlobalHash2,
                globalHashActive: ["all"],
                filteredData: null
              });
              return;
            }
          }
        }
      }
    }

    if (this.state.globalHashActive[0] == undefined) {
      let newArray = [];
      newArray.push(value);
      this.setState({
        globalHashActive: newArray
      });
      const index = this.state.globalHash.indexOf(value);

      if (index > -1) {
        let newGlobalHash = this.state.globalHash;
        newGlobalHash.splice(index, 1);
        this.setState({
          globalHash: newGlobalHash
        });
      }

      return;
    }

    for (let i = 0; i < this.state.globalHashActive.length; i++) {
      if (this.state.globalHashActive[i] == "all") {
        this.state.globalHashActive = [];
        const index = this.state.globalHash.indexOf(value);

        if (index > -1) {
          let newGlobalHash = this.state.globalHash;
          newGlobalHash.splice(index, 1);
          let torf = false;

          for (let j = 0; j < newGlobalHash.length; j++) {
            if ("all" == newGlobalHash[j]) {
              torf = true;
            }

            if (j == newGlobalHash.length - 1 && torf == false) {
              newGlobalHash.push("all");
            }
          }

          let newGlobalHashActive = this.state.globalHashActive;
          newGlobalHashActive.push(value);
          Object(_shared_helpers__WEBPACK_IMPORTED_MODULE_4__["getNewDat"])(this.state.data, newGlobalHashActive).then(newDat => {
            this.setState({
              globalHashActive: newGlobalHashActive,
              globalHash: newGlobalHash,
              filteredData: newDat
            });
            return;
          });
        }
      }

      if (value == this.state.globalHashActive[i]) {
        return;
      }

      if (i == this.state.globalHashActive.length - 1) {
        const index = this.state.globalHash.indexOf(value);

        if (index > -1) {
          let newGlobalHash = this.state.globalHash;
          newGlobalHash.splice(index, 1); // newGlobalHash.push("all");

          let torf = false;

          for (let j = 0; j < newGlobalHash.length; j++) {
            if ("all" == newGlobalHash[j]) {
              torf = true;
            }

            if (j == newGlobalHash.length - 1 && torf == false) {
              newGlobalHash.push("all");
            }
          }

          let newGlobalHashActive = this.state.globalHashActive;
          newGlobalHashActive.push(value);
          Object(_shared_helpers__WEBPACK_IMPORTED_MODULE_4__["getNewDat"])(this.state.data, newGlobalHashActive).then(newDat => {
            this.setState({
              globalHashActive: newGlobalHashActive,
              globalHash: newGlobalHash,
              filteredData: newDat
            });
            return;
          });
        }
      }
    }
  }

  render() {
    if (this.state.data != null) {
      if (this.state.isSingle == false) {
        console.log("IS SINGLE IS FALSE");
        return __jsx(Wrapper, null, __jsx(ChartWrapper, null, __jsx(TopBarParent, null, __jsx(TopBarTop, null, __jsx(TopBarTopLeft, null, __jsx(_Menu_768px_Menu__WEBPACK_IMPORTED_MODULE_3__["Pnl768"], null)), __jsx(TopBarTopRight, null, __jsx(_Menu_768px_Menu__WEBPACK_IMPORTED_MODULE_3__["SymbolChooser768"], null))), __jsx(TopBarBottom, null, this.state.globalHashActive.map(hash => {
          return __jsx(TopHashtagIndividualActive, {
            onClick: () => this.hashtagClickedBack(hash)
          }, "#", hash);
        }), this.state.globalHash.map(hash => {
          return __jsx(TopHashtagIndividual, {
            onClick: () => this.hashtagClicked(hash)
          }, "#", hash);
        }))), __jsx(WholeGrid, null, this.state.isSingleNotes == false ? __jsx(_Tades_Trades__WEBPACK_IMPORTED_MODULE_1__["ContainDivHeader"], null, __jsx(_Tades_Trades__WEBPACK_IMPORTED_MODULE_1__["NextToDivHeader"], null, "Start"), __jsx(_Tades_Trades__WEBPACK_IMPORTED_MODULE_1__["NextToDivHeader"], null, "End"), __jsx(_Tades_Trades__WEBPACK_IMPORTED_MODULE_1__["NextToDivHeader"], null, "L/S"), __jsx(_Tades_Trades__WEBPACK_IMPORTED_MODULE_1__["NextToDivHeader"], null, "Entry"), __jsx(_Tades_Trades__WEBPACK_IMPORTED_MODULE_1__["NextToDivHeader"], null, "Exit"), __jsx(_Tades_Trades__WEBPACK_IMPORTED_MODULE_1__["NextToDivHeader"], null, "Qty"), __jsx(_Tades_Trades__WEBPACK_IMPORTED_MODULE_1__["NextToDivHeader"], null, "RPNL")) : null, __jsx(_Tades_Trades__WEBPACK_IMPORTED_MODULE_1__["default"], {
          data: this.state.data,
          filteredData: this.state.filteredData,
          initData: this.props.data
        }))));
      } else {
        console.log("IS SINGLE IS TRUE");
        return __jsx(Wrapper, null, __jsx(ChartWrapper, null, __jsx(TopBarParent, null, __jsx(TopBarChildBigLeft, null, __jsx(_Tabs__WEBPACK_IMPORTED_MODULE_9__["default"], null)), __jsx(TopBarChildSmall, null, __jsx(TopHashtagIndividualActivePnl, null, __jsx(_Menu_Menu__WEBPACK_IMPORTED_MODULE_2__["Pnl"], null))), __jsx(TopBarChildBigRight, null, __jsx(RightTabs, null, __jsx(_Notes_NotesTest__WEBPACK_IMPORTED_MODULE_8__["default"], {
          firstTrade: this.state.singleTrade
        })))), __jsx(WholeGrid, null, this.state.isSingleNotes == false ? __jsx(_Tades_Trades__WEBPACK_IMPORTED_MODULE_1__["ContainDivHeader"], null, __jsx(_Tades_Trades__WEBPACK_IMPORTED_MODULE_1__["NextToDivHeader"], null, "Start"), __jsx(_Tades_Trades__WEBPACK_IMPORTED_MODULE_1__["NextToDivHeader"], null, "End"), __jsx(_Tades_Trades__WEBPACK_IMPORTED_MODULE_1__["NextToDivHeader"], null, "L/S"), __jsx(_Tades_Trades__WEBPACK_IMPORTED_MODULE_1__["NextToDivHeader"], null, "Entry"), __jsx(_Tades_Trades__WEBPACK_IMPORTED_MODULE_1__["NextToDivHeader"], null, "Exit"), __jsx(_Tades_Trades__WEBPACK_IMPORTED_MODULE_1__["NextToDivHeader"], null, "Qty"), __jsx(_Tades_Trades__WEBPACK_IMPORTED_MODULE_1__["NextToDivHeader"], null, "RPNL")) : null, __jsx(_Tades_Trades__WEBPACK_IMPORTED_MODULE_1__["default"], {
          data: this.state.data,
          filteredData: this.state.filteredData,
          initData: this.props.data
        }))));
      }
    }
  }

}) || _class2) || _class2);


const SingleTabInner = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "DashboardTest__SingleTabInner",
  componentId: "sc-1dz292n-0"
})(["margin:auto;"]);
const SingleTab = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "DashboardTest__SingleTab",
  componentId: "sc-1dz292n-1"
})(["color:", ";background-color:", ";margin:auto 10px;border-radius:2px;padding:5px;:hover{cursor:pointer;}"], props => props.isActive ? "#fff" : "#000", props => props.isActive ? "#000" : "#fff");
const WrapTabs = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "DashboardTest__WrapTabs",
  componentId: "sc-1dz292n-2"
})(["display:flex;flex-direction:row;font-size:15px;"]);
const WholeGrid = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "DashboardTest__WholeGrid",
  componentId: "sc-1dz292n-3"
})([""]); // border: 1px solid #f2f2f2;

const TopBarParent = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "DashboardTest__TopBarParent",
  componentId: "sc-1dz292n-4"
})(["display:flex;flex-direction:column;flex-wrap:wrap;margin-bottom:14px;"]);
const TopBarTop = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "DashboardTest__TopBarTop",
  componentId: "sc-1dz292n-5"
})(["width:100%;display:flex;flex-direction:row;overflow:auto;margin-bottom:5px;"]);
const TopBarBottom = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "DashboardTest__TopBarBottom",
  componentId: "sc-1dz292n-6"
})(["width:100%;display:flex;flex-direction:row;overflow:auto;"]); // flex: 1 1 45%; /*grow | shrink | basis */

const TopBarTopRight = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "DashboardTest__TopBarTopRight",
  componentId: "sc-1dz292n-7"
})(["width:50%;display:flex;flex-direction:row;overflow:auto;"]);
const TopBarTopLeft = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "DashboardTest__TopBarTopLeft",
  componentId: "sc-1dz292n-8"
})(["width:50%;display:flex;flex-direction:row;overflow:auto;", ""], _shared_helpers__WEBPACK_IMPORTED_MODULE_13__["wideFont"]);
const TopBarChildSmall = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "DashboardTest__TopBarChildSmall",
  componentId: "sc-1dz292n-9"
})(["display:flex;flex-direction:row;width:10%;"]);
const TopHashtagIndividual = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "DashboardTest__TopHashtagIndividual",
  componentId: "sc-1dz292n-10"
})(["background:#f8f8ff;color:#000;padding:8px;margin:0 10px;border-radius:2px;", ":hover{cursor:pointer;}margin-left:0;white-space:nowrap;"], _shared_helpers__WEBPACK_IMPORTED_MODULE_13__["wideFont"]);
const TopHashtagIndividualActive = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "DashboardTest__TopHashtagIndividualActive",
  componentId: "sc-1dz292n-11"
})(["background:#212528;color:#fff;padding:8px;margin:0 10px;border-radius:2px;", ":hover{cursor:pointer;}margin-left:0;white-space:nowrap;"], _shared_helpers__WEBPACK_IMPORTED_MODULE_13__["wideFont"]);
const TopHashtagIndividualActiveRight = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "DashboardTest__TopHashtagIndividualActiveRight",
  componentId: "sc-1dz292n-12"
})(["background:#212528;color:#fff;padding:8px;margin:0 10px;border-radius:2px;", " margin:0 auto;:hover{cursor:pointer;}margin-right:0;"], _shared_helpers__WEBPACK_IMPORTED_MODULE_13__["wideFont"]);
const RightTabs = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "DashboardTest__RightTabs",
  componentId: "sc-1dz292n-13"
})(["color:#fff;margin:0 10px;border-radius:2px;", " margin:0 auto;:hover{cursor:pointer;}margin-right:0;"], _shared_helpers__WEBPACK_IMPORTED_MODULE_13__["wideFont"]);
const TopHashtagIndividualActivePnl = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "DashboardTest__TopHashtagIndividualActivePnl",
  componentId: "sc-1dz292n-14"
})(["color:#fff;padding:0px;margin:0 10px;border-radius:2px;", ":hover{cursor:pointer;}margin:auto;"], _shared_helpers__WEBPACK_IMPORTED_MODULE_13__["wideFont"]);
const ChartWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "DashboardTest__ChartWrapper",
  componentId: "sc-1dz292n-15"
})(["background:white;padding:5px;width:100%;padding:10px;@media (max-width:768px){}"]);
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "DashboardTest__Wrapper",
  componentId: "sc-1dz292n-16"
})(["display:flex;margin-top:5px;"]);

/***/ }),

/***/ "./components/Dashboard/AddApiForm.js":
/*!********************************************!*\
  !*** ./components/Dashboard/AddApiForm.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _form_FormWrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../form/FormWrapper */ "./components/form/FormWrapper.js");
/* harmony import */ var _form_Input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../form/Input */ "./components/form/Input.js");
/* harmony import */ var _form_Label__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../form/Label */ "./components/form/Label.js");
/* harmony import */ var _shared_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/Button */ "./components/shared/Button.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












const Cookie = __webpack_require__(/*! js-cookie */ "js-cookie");

const ApiKeyForm = () => {
  const {
    0: res,
    1: setRes
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const {
    0: notSubmitted,
    1: setNotSubmitted
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);

  async function handleSubmit(event, client) {
    event.preventDefault();
    setNotSubmitted(false);
    const form = event.target;
    const formData = new window.FormData(form);
    const key = formData.get("key");
    const secret = formData.get("secret"); // console.log(email, password);

    form.reset(); //check if api key is valid

    let apiRes = client.mutate({
      mutation: graphql_tag__WEBPACK_IMPORTED_MODULE_2___default.a`
        mutation addApiKey($key: String!, $secret: String!) {
          addApiKey(key: $key, secret: $secret)
        }
      `,
      variables: {
        key,
        secret
      }
    });
    apiRes.then(apiRes => {
      console.log("<<RES>>");
      console.log(apiRes.data.addApiKey);
      console.log(typeof apiRes.data.addApiKey);
      let isTrue = apiRes.data.addApiKey == true;
      console.log(isTrue);
      setRes(isTrue);
      setLoading(false);
    }).catch(apiRes => {
      let isTrue = apiRes.data.addApiKey == true;
      console.log(isTrue);
      setRes(isTrue);
      setLoading(false);
    });
  }

  if (notSubmitted == true) {
    return __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_1__["ApolloConsumer"], null, client => __jsx("div", null, __jsx("div", null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Alert"], {
      color: "info"
    }, "Add a Bitmex api key to import your recent trades and to automatically populate your future trades into the platform."), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Alert"], {
      color: "info"
    }, "Note: We keep the keys encrypted in out database, however, make sure to leave \"withdrawals allowed\" UNCHECKED anyways when choosing key settings.")), __jsx(_form_FormWrapper__WEBPACK_IMPORTED_MODULE_7__["default"], null, __jsx(StyledForm, {
      onSubmit: event => handleSubmit(event, client)
    }, __jsx(InputWrapper, null, __jsx(_form_Label__WEBPACK_IMPORTED_MODULE_9__["default"], null, "key"), __jsx(_form_Input__WEBPACK_IMPORTED_MODULE_8__["default"], {
      placeholder: "",
      name: "key",
      type: "text",
      required: true
    })), __jsx(InputWrapper, null, __jsx(_form_Label__WEBPACK_IMPORTED_MODULE_9__["default"], null, "secret"), __jsx(_form_Input__WEBPACK_IMPORTED_MODULE_8__["default"], {
      placeholder: "",
      name: "secret",
      type: "text",
      required: true
    })), __jsx("div", {
      style: {
        display: "flex",
        width: "100%"
      }
    }, __jsx(SubmitButton, {
      type: "submit"
    }, "Submit"))))));
  }

  if (loading == true) {
    return __jsx("div", null, "loading");
  } else {
    if (res == false) {
      return __jsx("div", null, "error submitting, please reload page and try again");
    }

    if (res == true) {
      return __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_1__["ApolloConsumer"], null, client => __jsx(Populate, {
        client: client
      }));
    }
  }
};

const Populate = ({
  client
}) => {
  const {
    0: res,
    1: setRes
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (loading == true) {
      console.log("IN POPULATE");
      let myClient = client;
      let apiRes = myClient.mutate({
        mutation: graphql_tag__WEBPACK_IMPORTED_MODULE_2___default.a`
          mutation {
            populate
          }
        `
      });
      apiRes.then(reso => {
        console.log("<<API RES>>");
        console.log(reso);
        console.log(reso.data.populate);
        setRes(reso.data.populate);
        setLoading(false);
      });
    }
  }, []);

  const resetApi = async client => {
    console.log("RESETTING");
    return new Promise(async resolve => {
      let key = "none";
      let secret = "none";
      let myRes = client.mutate({
        mutation: graphql_tag__WEBPACK_IMPORTED_MODULE_2___default.a`
          mutation addApiKey($key: String!, $secret: String!) {
            addApiKey(key: $key, secret: $secret)
          }
        `,
        variables: {
          key,
          secret
        }
      });
      return await myRes;
    });
  };

  if (loading == true) {
    return __jsx("div", null, "loading");
  } else {
    if (res == false) {
      resetApi(client);
      return __jsx("div", null, "api key not valid - reload and try again");
    } else {
      location.reload();
    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (ApiKeyForm);
const StyledForm = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.form.withConfig({
  displayName: "AddApiForm__StyledForm",
  componentId: "z7z7vm-0"
})(["display:flex;flex-direction:column;align-items:flex-start;", ";"], props => props.loading && "filter: grayscale(0.5) blur(5px) opacity(0.6); pointer-events: none");
const SubmitButton = styled_components__WEBPACK_IMPORTED_MODULE_6___default()(_shared_Button__WEBPACK_IMPORTED_MODULE_10__["default"]).withConfig({
  displayName: "AddApiForm__SubmitButton",
  componentId: "z7z7vm-1"
})(["align-self:flex-end;margin-right:0px;margin-left:auto;"]);
const InputWrapper = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.div.withConfig({
  displayName: "AddApiForm__InputWrapper",
  componentId: "z7z7vm-2"
})(["position:relative;margin-bottom:24px;width:100%;"]);

/***/ }),

/***/ "./components/Dashboard/Chart/ChartDemo.js":
/*!*************************************************!*\
  !*** ./components/Dashboard/Chart/ChartDemo.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var d3_format__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-format */ "d3-format");
/* harmony import */ var d3_format__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(d3_format__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var d3_time_format__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-time-format */ "d3-time-format");
/* harmony import */ var d3_time_format__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(d3_time_format__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_stockcharts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-stockcharts */ "react-stockcharts");
/* harmony import */ var react_stockcharts__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_stockcharts__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_stockcharts_lib_series__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-stockcharts/lib/series */ "react-stockcharts/lib/series");
/* harmony import */ var react_stockcharts_lib_series__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_stockcharts_lib_series__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_stockcharts_lib_axes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-stockcharts/lib/axes */ "react-stockcharts/lib/axes");
/* harmony import */ var react_stockcharts_lib_axes__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_stockcharts_lib_axes__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_stockcharts_lib_coordinates__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-stockcharts/lib/coordinates */ "react-stockcharts/lib/coordinates");
/* harmony import */ var react_stockcharts_lib_coordinates__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_stockcharts_lib_coordinates__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./helpers */ "./components/Dashboard/Chart/helpers.js");
/* harmony import */ var react_stockcharts_lib_annotation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-stockcharts/lib/annotation */ "react-stockcharts/lib/annotation");
/* harmony import */ var react_stockcharts_lib_annotation__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_stockcharts_lib_annotation__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_stockcharts_lib_scale__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-stockcharts/lib/scale */ "react-stockcharts/lib/scale");
/* harmony import */ var react_stockcharts_lib_scale__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_stockcharts_lib_scale__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_stockcharts_lib_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-stockcharts/lib/tooltip */ "react-stockcharts/lib/tooltip");
/* harmony import */ var react_stockcharts_lib_tooltip__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_stockcharts_lib_tooltip__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_stockcharts_lib_indicator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-stockcharts/lib/indicator */ "react-stockcharts/lib/indicator");
/* harmony import */ var react_stockcharts_lib_indicator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_stockcharts_lib_indicator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_stockcharts_lib_helper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-stockcharts/lib/helper */ "react-stockcharts/lib/helper");
/* harmony import */ var react_stockcharts_lib_helper__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_stockcharts_lib_helper__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_stockcharts_lib_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-stockcharts/lib/utils */ "react-stockcharts/lib/utils");
/* harmony import */ var react_stockcharts_lib_utils__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_stockcharts_lib_utils__WEBPACK_IMPORTED_MODULE_14__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
















class CandleStickChartWithAnnotation extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let yRangeNums = Object(_helpers__WEBPACK_IMPORTED_MODULE_8__["getYRangeNums"])(this.props.data);
    this.setState({
      yRangeNums: yRangeNums
    });
  }

  render() {
    const margin = {
      left: 20,
      right: 50,
      top: 30,
      bottom: 30
    };
    const height = 400;
    const {
      type,
      width,
      ratio,
      data: initialData
    } = this.props;
    const [yAxisLabelX, yAxisLabelY] = [width - margin.left - 40, (height - margin.top - margin.bottom) / 2];
    const xScaleProvider = react_stockcharts_lib_scale__WEBPACK_IMPORTED_MODULE_10__["discontinuousTimeScaleProvider"].inputDateAccessor(d => d.date);
    const {
      data,
      xScale,
      xAccessor,
      displayXAccessor
    } = xScaleProvider(initialData);
    const start = xAccessor(Object(react_stockcharts_lib_utils__WEBPACK_IMPORTED_MODULE_14__["last"])(data));
    const end = xAccessor(data[Math.max(0, data.length - 150)]);
    const xExtents = [start, end];

    if (this.state == null) {
      return __jsx("div", null, "Loading...");
    } // try {


    return __jsx(react_stockcharts__WEBPACK_IMPORTED_MODULE_4__["ChartCanvas"], {
      height: height,
      ratio: ratio,
      width: width,
      margin: margin,
      type: type,
      data: data,
      xScale: xScale,
      seriesName: "BTC",
      xAccessor: xAccessor,
      displayXAccessor: displayXAccessor,
      xExtents: xExtents
    }, __jsx(react_stockcharts__WEBPACK_IMPORTED_MODULE_4__["Chart"], {
      id: 1,
      yExtents: [d => [d.high, d.low]],
      padding: {
        top: 80,
        bottom: 80
      }
    }, __jsx(react_stockcharts_lib_axes__WEBPACK_IMPORTED_MODULE_6__["XAxis"], {
      axisAt: "bottom",
      orient: "bottom"
    }), __jsx(react_stockcharts_lib_coordinates__WEBPACK_IMPORTED_MODULE_7__["MouseCoordinateX"], {
      at: "bottom",
      orient: "bottom",
      displayFormat: Object(d3_time_format__WEBPACK_IMPORTED_MODULE_3__["timeFormat"])("%Y-%m-%d")
    }), __jsx(react_stockcharts_lib_coordinates__WEBPACK_IMPORTED_MODULE_7__["MouseCoordinateY"], {
      at: "right",
      orient: "right",
      displayFormat: Object(d3_format__WEBPACK_IMPORTED_MODULE_2__["format"])(".2f")
    }), __jsx(react_stockcharts_lib_axes__WEBPACK_IMPORTED_MODULE_6__["YAxis"], {
      axisAt: "right",
      orient: "right",
      ticks: 5
    }), __jsx(react_stockcharts_lib_series__WEBPACK_IMPORTED_MODULE_5__["CandlestickSeries"], null), __jsx(react_stockcharts_lib_tooltip__WEBPACK_IMPORTED_MODULE_11__["OHLCTooltip"], {
      origin: [-10, 0]
    }), this.props.trades.map(each => {
      // console.log(
      //   "mapping total length" + this.props.trades.length.toString(),
      //   each
      // );
      let datu = new Date(each.timestamp); // console.log(datu, this.props.timeframe);

      if (each.side == "Buy") {
        const annotationPropsUp = {
          fontFamily: "Glyphicons Halflings",
          fontSize: 15,
          fill: "#018001",
          // fill: rgba(1, 128, 1, 0.5),
          opacity: 0.8,
          text: "▲",
          y: ({
            yScale
          }) => {
            return yScale.range()[0] + 20; // return findYValBuy(
            //   this.state.yRangeNums[0],
            //   this.state.yRangeNums[1],
            //   each.price
            // );
          },
          onClick: console.log.bind(console),
          tooltip: d => Object(d3_time_format__WEBPACK_IMPORTED_MODULE_3__["timeFormat"])("%B")(d.date) // onMouseOver: console.log.bind(console),

        };
        return __jsx(react_stockcharts_lib_annotation__WEBPACK_IMPORTED_MODULE_9__["Annotate"], {
          with: react_stockcharts_lib_annotation__WEBPACK_IMPORTED_MODULE_9__["LabelAnnotation"],
          when: d => Object(_helpers__WEBPACK_IMPORTED_MODULE_8__["timeCompare"])(d, datu, this.props.timeframe),
          usingProps: annotationPropsUp
        });
      } else if (each.side == "Sell") {
        const annotationPropsDown = {
          fontFamily: "Glyphicons Halflings",
          fontSize: 15,
          fill: "#FF0000",
          opacity: 0.8,
          text: "▼",
          y: ({
            yScale
          }) => {
            return yScale.range()[1] - 20; // return findYValSell(
            //   this.state.yRangeNums[0],
            //   this.state.yRangeNums[1],
            //   each.price
            // );
          },
          onClick: console.log.bind(console),
          tooltip: d => Object(d3_time_format__WEBPACK_IMPORTED_MODULE_3__["timeFormat"])("%B")(d.date) // onMouseOver: console.log.bind(console),

        };
        return __jsx(react_stockcharts_lib_annotation__WEBPACK_IMPORTED_MODULE_9__["Annotate"], {
          with: react_stockcharts_lib_annotation__WEBPACK_IMPORTED_MODULE_9__["LabelAnnotation"],
          when: d => Object(_helpers__WEBPACK_IMPORTED_MODULE_8__["timeCompare"])(d, datu, this.props.timeframe),
          usingProps: annotationPropsDown
        });
      } else {
        return;
      }
    })), __jsx(react_stockcharts_lib_coordinates__WEBPACK_IMPORTED_MODULE_7__["CrossHairCursor"], {
      strokeDasharray: "LongDashDot"
    })); // } catch (err) {
    //   return <div>no chart</div>;
    // }
  }

}

CandleStickChartWithAnnotation.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  width: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  ratio: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(["svg", "hybrid"]).isRequired
};
CandleStickChartWithAnnotation.defaultProps = {
  type: "svg"
};
CandleStickChartWithAnnotation = Object(react_stockcharts_lib_helper__WEBPACK_IMPORTED_MODULE_13__["fitWidth"])(CandleStickChartWithAnnotation);
/* harmony default export */ __webpack_exports__["default"] = (CandleStickChartWithAnnotation);

/***/ }),

/***/ "./components/Dashboard/Chart/helpers.js":
/*!***********************************************!*\
  !*** ./components/Dashboard/Chart/helpers.js ***!
  \***********************************************/
/*! exports provided: timeCompare, getYRangeNums, findYValSell, findYValBuy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeCompare", function() { return timeCompare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getYRangeNums", function() { return getYRangeNums; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findYValSell", function() { return findYValSell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findYValBuy", function() { return findYValBuy; });
const timeCompare = (d, datu, timeframe) => {
  var MS_PER_MINUTE = 60000;
  var coeffFive = 1000 * 60 * 5; // var coeffOne = 1000 * 60 * 5;

  var coeffOne = 1000 * 60;

  if (timeframe == "1m") {
    return Math.round(d.date.getTime() / coeffOne) * coeffOne === Math.round(datu.getTime() / coeffOne) * coeffOne;
  }

  if (timeframe == "5m") {
    return Math.round(d.date.getTime() / coeffFive) * coeffFive === Math.round(datu.getTime() / coeffFive) * coeffFive;
  }

  if (timeframe == "1h") {
    return d.date.getHours() === datu.getHours() + 1 && d.date.getDate() === datu.getDate();
  }

  if (timeframe == "1d") {
    return d.date.getDate() === datu.getDate();
  }
};
const getYRangeNums = data => {
  let lowNum;
  let highNum;

  for (let i = 0; i < data.length; i++) {
    if (i == 0) {
      lowNum = data[0].low;
      highNum = data[0].high;
    }

    if (data[i].low < lowNum) {
      lowNum = data[i].low;
    }

    if (data[i].high > highNum) {
      highNum = data[i].high;
    }

    if (i == data.length - 1) {
      let arr = [];
      arr.push(lowNum);
      arr.push(highNum);
      console.log(arr);
      return arr;
    }
  }
};
const findYValSell = (yLow, yHigh, price) => {
  // let fullRange = yHigh - yLow;
  // let myRange = yHigh - parseInt(price);
  // let outOf = myRange / fullRange;
  // let multiplied = outOf * 180 + 70;
  // console.log(outOf, multiplied);
  return 80;
};
const findYValBuy = (yLow, yHigh, price) => {
  let fullRange = yHigh - yLow;
  let myRange = yHigh - parseInt(price);
  let outOf = myRange / fullRange;
  let multiplied = outOf * 180 + 100;
  console.log(outOf, multiplied);
  return multiplied;
};

/***/ }),

/***/ "./components/Dashboard/Chart/index.js":
/*!*********************************************!*\
  !*** ./components/Dashboard/Chart/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ChartComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ChartDemo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChartDemo */ "./components/Dashboard/Chart/ChartDemo.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_stockcharts_lib_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-stockcharts/lib/helper */ "react-stockcharts/lib/helper");
/* harmony import */ var react_stockcharts_lib_helper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_stockcharts_lib_helper__WEBPACK_IMPORTED_MODULE_4__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





class ChartComponent extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let startTime = new Date(this.props.trades[0].timestamp);
    let endTime = new Date(this.props.trades[this.props.trades.length - 1].timestamp);
    let diffMs = Math.abs(startTime - endTime);
    var diffSecs = diffMs / 1000;
    var diffMins = Math.round(diffSecs / 60); // minutes

    try {
      if (diffMins < 60) {
        //   this.setState({ candleData: this.props.onemin });
        let allExec = [];

        for (let i = 0; i < this.props.onemin.length; i++) {
          let trade = this.props.onemin[i];
          let newTrade = {};
          newTrade.date = new Date(trade.timestamp);
          newTrade.open = parseFloat(trade.open);
          newTrade.close = parseFloat(trade.close);
          newTrade.high = parseFloat(trade.high);
          newTrade.low = parseFloat(trade.low);
          let strt = new Date(this.props.trades[0].timestamp);
          let end = new Date(this.props.trades[this.props.trades.length - 1].timestamp);
          let compare1 = newTrade.date - strt;
          let compare2 = newTrade.date - end; // console.log(compare1, compare2);

          let additionalTime = 1000 * 60 * 30;

          if (compare1 > additionalTime * -1 && compare2 < additionalTime) {
            allExec.unshift(newTrade);
          }

          if (i == this.props.onemin.length - 1) {
            let timeframe = "1m";
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
        let allExec = [];

        for (let i = 0; i < this.props.fivemin.length; i++) {
          let trade = this.props.fivemin[i];
          let newTrade = {};
          newTrade.date = new Date(trade.timestamp);
          newTrade.open = parseFloat(trade.open);
          newTrade.close = parseFloat(trade.close);
          newTrade.high = parseFloat(trade.high);
          newTrade.low = parseFloat(trade.low);
          let strt = new Date(this.props.trades[0].timestamp);
          let end = new Date(this.props.trades[this.props.trades.length - 1].timestamp);
          let compare1 = newTrade.date - strt;
          let compare2 = newTrade.date - end; // console.log(compare1, compare2);

          let additionalTime = 1000 * 60 * 60 * 2;

          if (compare1 > additionalTime * -1 && compare2 < additionalTime) {
            allExec.unshift(newTrade);
          }

          if (i == this.props.fivemin.length - 1) {
            let timeframe = "5m";
            this.setState({
              trades: this.props.trades,
              newDat: allExec,
              timeframe: timeframe
            });
            console.log(this.state, "THIS STATE " + timeframe);
          }
        }
      }

      let day = 60 * 24;

      if (diffMins >= 60 * 10 && diffMins < day * 4) {
        //   this.setState({ candleData: this.props.onehour });
        let allExec = [];

        for (let i = 0; i < this.props.onehour.length; i++) {
          let trade = this.props.onehour[i];
          let newTrade = {};
          newTrade.date = new Date(trade.timestamp);
          newTrade.open = parseFloat(trade.open);
          newTrade.close = parseFloat(trade.close);
          newTrade.high = parseFloat(trade.high);
          newTrade.low = parseFloat(trade.low);
          let strt = new Date(this.props.trades[0].timestamp);
          let end = new Date(this.props.trades[this.props.trades.length - 1].timestamp);
          let compare1 = newTrade.date - strt;
          let compare2 = newTrade.date - end;
          let additionalTime = 1000 * 60 * 60 * 20;

          if (compare1 > additionalTime * -1 && compare2 < additionalTime) {
            // console.log(compare1, compare2);
            allExec.unshift(newTrade);
          }

          if (i == this.props.onehour.length - 1) {
            let timeframe = "1h";
            this.setState({
              trades: this.props.trades,
              newDat: allExec,
              timeframe: timeframe
            });
            console.log(this.state, "THIS STATE " + timeframe);
          }
        }
      }

      if (diffMins >= day * 4) {
        //   this.setState({ candleData: this.props.oneday });
        let allExec = [];

        for (let i = 0; i < this.props.oneday.length; i++) {
          let trade = this.props.oneday[i];
          let newTrade = {};
          newTrade.date = new Date(trade.timestamp);
          newTrade.open = parseFloat(trade.open);
          newTrade.close = parseFloat(trade.close);
          newTrade.high = parseFloat(trade.high);
          newTrade.low = parseFloat(trade.low);
          let strt = new Date(this.props.trades[0].timestamp);
          let end = new Date(this.props.trades[this.props.trades.length - 1].timestamp);
          let compare1 = newTrade.date - strt;
          let compare2 = newTrade.date - end;
          let additionalTime = 1000 * 60 * 60 * 24 * 10;

          if (compare1 > additionalTime * -1 && compare2 < additionalTime) {
            // console.log(compare1, compare2);
            allExec.unshift(newTrade);
          }

          if (i == this.props.oneday.length - 1) {
            let timeframe = "1d";
            this.setState({
              trades: this.props.trades,
              newDat: allExec,
              timeframe: timeframe
            });
            console.log(this.state, "THIS STATE " + timeframe);
          }
        }
      }
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    if (this.state == null || !this.state.newDat[0]) {
      return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Alert"], {
        color: "light"
      }, "Can't render chart. We don't have small enough candlestick data going back to that date.");
    }

    console.log(this.state.newDat);
    return (// <TypeChooser>
      //   {type => (
      __jsx(_ChartDemo__WEBPACK_IMPORTED_MODULE_2__["default"], {
        type: "hybrid",
        data: this.state.newDat,
        trades: this.state.trades,
        timeframe: this.state.timeframe
      }) //   )}
      // </TypeChooser>

    );
  }

}

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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Tades_Trades__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tades/Trades */ "./components/Dashboard/Tades/Trades.js");
/* harmony import */ var _Menu_Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Menu/Menu */ "./components/Menu/Menu.js");
/* harmony import */ var _shared_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/helpers */ "./components/Dashboard/shared/helpers.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Notes_NotesTest__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Notes/NotesTest */ "./components/Dashboard/Notes/NotesTest.js");
/* harmony import */ var _Tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Tabs */ "./components/Dashboard/Tabs.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! mobx-react */ "mobx-react");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! mobx */ "mobx");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _shared_helpers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/helpers */ "./components/shared/helpers.js");
var _dec, _class2;

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;















let _class = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_10__["inject"])("store"), _dec(_class2 = Object(mobx_react__WEBPACK_IMPORTED_MODULE_10__["observer"])(_class2 = class extends react__WEBPACK_IMPORTED_MODULE_6___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      globalHash: [],
      globalHashActive: ["all"],
      data: null,
      filteredData: null,
      isSingle: false,
      isSingleNotes: false
    };
    this.getGlobalHashtags = this.getGlobalHashtags.bind(this);
    this.hashtagClicked = this.hashtagClicked.bind(this);
    this.hashtagClickedBack = this.hashtagClickedBack.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentWillMount() {
    this.setState({
      data: this.props.data
    });
    this.getGlobalHashtags(this.props.data);
  }

  componentDidMount() {
    this.singleTradeReaction = Object(mobx__WEBPACK_IMPORTED_MODULE_11__["reaction"])(() => this.props.store.hasSingleTrade, (notifications, reaction) => {
      console.log("HAS SINGLE", this.props.store.hasSingleTrade);

      if (this.props.store.hasSingleTrade == false) {
        this.setState({
          isSingle: false
        });
        console.log("setting back");
      } else {
        this.setState({
          isSingle: true,
          singleTrade: this.props.store.singleTrade[0]
        });
        console.log(this.state, "STATEE");
        console.log("setting back");
      }
    });
    this.singleNotesReaction = Object(mobx__WEBPACK_IMPORTED_MODULE_11__["reaction"])(() => this.props.store.isSingleNotes, (notifications, reaction) => {
      if (this.props.store.isSingleNotes == false) {
        this.setState({
          isSingleNotes: false
        });
      } else {
        this.setState({
          isSingleNotes: true
        });
      }
    });
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({
      width: window.innerWidth
    });
  }

  async getGlobalHashtags(data) {
    for (let i = 0; i < data.fetchTradeHistory.length; i++) {
      let thisTradeHash = data.fetchTradeHistory[i].hashtags.split(",");

      if (thisTradeHash != "undefined") {
        for (let j = 0; j < thisTradeHash.length; j++) {
          if (thisTradeHash[j] != "undefined") {
            let newGlobalHash = this.state.globalHash;
            newGlobalHash.push(thisTradeHash[j]);
            this.setState({
              globalHash: newGlobalHash
            });
          }
        }
      }
    }
  }

  async hashtagClickedBack(value) {
    if (value == "all") {
      console.log("DO NOTHING");
    } else {
      let newHashActive = [];
      let newHash = this.state.globalHash;

      for (let i = 0; i < this.state.globalHashActive.length; i++) {
        if (value !== this.state.globalHashActive[i]) {
          newHashActive.push(this.state.globalHashActive[i]);
        } else {
          newHash.push(this.state.globalHashActive[i]);
        }

        if (i == this.state.globalHashActive.length - 1) {
          if (newHashActive[0] == undefined) {
            let newHash2 = [];

            for (let j = 0; j < newHash.length; j++) {
              if (newHash[j] != "all") {
                newHash2.push(newHash[j]);
              }

              if (j == newHash.length - 1) {
                this.setState({
                  globalHash: newHash2,
                  globalHashActive: ["all"],
                  filteredData: null
                });
              }
            }
          } else {
            let newHash2 = [];

            for (let j = 0; j < newHash.length; j++) {
              if (newHash[j] != "all") {
                newHash2.push(newHash[j]);
              }

              if (j == newHash.length - 1) {
                Object(_shared_helpers__WEBPACK_IMPORTED_MODULE_3__["getNewDat"])(this.state.data, newHashActive).then(res => {
                  this.setState({
                    globalHash: newHash2,
                    globalHashActive: newHashActive,
                    filteredData: res
                  });
                });
              }
            }
          }
        }
      }
    }
  }

  async hashtagClicked(value) {
    if (value == "all") {
      let newGlobalHash = this.state.globalHash;
      let newGlobalHash2 = [];

      for (let i = 0; i < this.state.globalHashActive.length; i++) {
        newGlobalHash.push(this.state.globalHashActive[i]);

        if (i == this.state.globalHashActive.length - 1) {
          for (let j = 0; j < newGlobalHash.length; j++) {
            if (newGlobalHash[j] != "all") {
              newGlobalHash2.push(newGlobalHash[j]);
            }

            if (j == newGlobalHash.length - 1) {
              this.setState({
                globalHash: newGlobalHash2,
                globalHashActive: ["all"],
                filteredData: null
              });
              return;
            }
          }
        }
      }
    }

    if (this.state.globalHashActive[0] == undefined) {
      let newArray = [];
      newArray.push(value);
      this.setState({
        globalHashActive: newArray
      });
      const index = this.state.globalHash.indexOf(value);

      if (index > -1) {
        let newGlobalHash = this.state.globalHash;
        newGlobalHash.splice(index, 1);
        this.setState({
          globalHash: newGlobalHash
        });
      }

      return;
    }

    for (let i = 0; i < this.state.globalHashActive.length; i++) {
      if (this.state.globalHashActive[i] == "all") {
        this.state.globalHashActive = [];
        const index = this.state.globalHash.indexOf(value);

        if (index > -1) {
          let newGlobalHash = this.state.globalHash;
          newGlobalHash.splice(index, 1);
          let torf = false;

          for (let j = 0; j < newGlobalHash.length; j++) {
            if ("all" == newGlobalHash[j]) {
              torf = true;
            }

            if (j == newGlobalHash.length - 1 && torf == false) {
              newGlobalHash.push("all");
            }
          }

          let newGlobalHashActive = this.state.globalHashActive;
          newGlobalHashActive.push(value);
          Object(_shared_helpers__WEBPACK_IMPORTED_MODULE_3__["getNewDat"])(this.state.data, newGlobalHashActive).then(newDat => {
            this.setState({
              globalHashActive: newGlobalHashActive,
              globalHash: newGlobalHash,
              filteredData: newDat
            });
            return;
          });
        }
      }

      if (value == this.state.globalHashActive[i]) {
        return;
      }

      if (i == this.state.globalHashActive.length - 1) {
        const index = this.state.globalHash.indexOf(value);

        if (index > -1) {
          let newGlobalHash = this.state.globalHash;
          newGlobalHash.splice(index, 1); // newGlobalHash.push("all");

          let torf = false;

          for (let j = 0; j < newGlobalHash.length; j++) {
            if ("all" == newGlobalHash[j]) {
              torf = true;
            }

            if (j == newGlobalHash.length - 1 && torf == false) {
              newGlobalHash.push("all");
            }
          }

          let newGlobalHashActive = this.state.globalHashActive;
          newGlobalHashActive.push(value);
          Object(_shared_helpers__WEBPACK_IMPORTED_MODULE_3__["getNewDat"])(this.state.data, newGlobalHashActive).then(newDat => {
            this.setState({
              globalHashActive: newGlobalHashActive,
              globalHash: newGlobalHash,
              filteredData: newDat
            });
            return;
          });
        }
      }
    }
  }

  render() {
    if (this.state.data != null) {
      if (this.state.isSingle == false) {
        console.log("IS SINGLE IS FALSE");
        return __jsx(Wrapper, null, __jsx(ChartWrapper, null, __jsx(TopBarParent, null, __jsx(TopBarChildBigLeft, null, this.state.globalHashActive.map(hash => {
          return __jsx(TopHashtagIndividualActive, {
            onClick: () => this.hashtagClickedBack(hash)
          }, "#", hash);
        }), this.state.globalHash.map(hash => {
          return __jsx(TopHashtagIndividual, {
            onClick: () => this.hashtagClicked(hash)
          }, "#", hash);
        })), __jsx(TopBarChildSmall, null, __jsx(TopHashtagIndividualActivePnl, null, __jsx(_Menu_Menu__WEBPACK_IMPORTED_MODULE_2__["Pnl"], null))), __jsx(TopBarChildBigRight, null, __jsx(TopHashtagIndividualActiveRight, null, __jsx(_Menu_Menu__WEBPACK_IMPORTED_MODULE_2__["SymbolChooser"], null)))), __jsx(WholeGrid, null, this.state.isSingleNotes == false ? __jsx(_Tades_Trades__WEBPACK_IMPORTED_MODULE_1__["ContainDivHeader"], null, __jsx(_Tades_Trades__WEBPACK_IMPORTED_MODULE_1__["NextToDivHeader"], null, "Start"), __jsx(_Tades_Trades__WEBPACK_IMPORTED_MODULE_1__["NextToDivHeader"], null, "End"), __jsx(_Tades_Trades__WEBPACK_IMPORTED_MODULE_1__["NextToDivHeader"], null, "L/S"), __jsx(_Tades_Trades__WEBPACK_IMPORTED_MODULE_1__["NextToDivHeader"], null, "Entry"), __jsx(_Tades_Trades__WEBPACK_IMPORTED_MODULE_1__["NextToDivHeader"], null, "Exit"), __jsx(_Tades_Trades__WEBPACK_IMPORTED_MODULE_1__["NextToDivHeader"], null, "Qty"), __jsx(_Tades_Trades__WEBPACK_IMPORTED_MODULE_1__["NextToDivHeader"], null, "RPNL")) : null, __jsx(_Tades_Trades__WEBPACK_IMPORTED_MODULE_1__["default"], {
          data: this.state.data,
          filteredData: this.state.filteredData,
          initData: this.props.data
        }))));
      } else {
        console.log("IS SINGLE IS TRUE");
        return __jsx(Wrapper, null, __jsx(ChartWrapper, null, __jsx(TopBarParent, null, __jsx(TopBarChildBigLeft, null, __jsx(_Tabs__WEBPACK_IMPORTED_MODULE_8__["default"], null)), __jsx(TopBarChildSmall, null, __jsx(TopHashtagIndividualActivePnl, null, __jsx(_Menu_Menu__WEBPACK_IMPORTED_MODULE_2__["Pnl"], null))), __jsx(TopBarChildBigRight, null, __jsx(RightTabs, null, __jsx(_Notes_NotesTest__WEBPACK_IMPORTED_MODULE_7__["default"], {
          firstTrade: this.state.singleTrade
        })))), __jsx(WholeGrid, null, this.state.isSingleNotes == false ? __jsx(_Tades_Trades__WEBPACK_IMPORTED_MODULE_1__["ContainDivHeader"], null, __jsx(_Tades_Trades__WEBPACK_IMPORTED_MODULE_1__["NextToDivHeader"], null, "Start"), __jsx(_Tades_Trades__WEBPACK_IMPORTED_MODULE_1__["NextToDivHeader"], null, "End"), __jsx(_Tades_Trades__WEBPACK_IMPORTED_MODULE_1__["NextToDivHeader"], null, "L/S"), __jsx(_Tades_Trades__WEBPACK_IMPORTED_MODULE_1__["NextToDivHeader"], null, "Entry"), __jsx(_Tades_Trades__WEBPACK_IMPORTED_MODULE_1__["NextToDivHeader"], null, "Exit"), __jsx(_Tades_Trades__WEBPACK_IMPORTED_MODULE_1__["NextToDivHeader"], null, "Qty"), __jsx(_Tades_Trades__WEBPACK_IMPORTED_MODULE_1__["NextToDivHeader"], null, "RPNL")) : null, __jsx(_Tades_Trades__WEBPACK_IMPORTED_MODULE_1__["default"], {
          data: this.state.data,
          filteredData: this.state.filteredData,
          initData: this.props.data
        }))));
      }
    }
  }

}) || _class2) || _class2);


const SingleTabInner = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Dashboard__SingleTabInner",
  componentId: "ij5648-0"
})(["margin:auto;"]);
const SingleTab = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Dashboard__SingleTab",
  componentId: "ij5648-1"
})(["color:", ";background-color:", ";margin:auto 10px;border-radius:2px;padding:5px;:hover{cursor:pointer;}"], props => props.isActive ? "#fff" : "#000", props => props.isActive ? "#000" : "#fff");
const WrapTabs = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Dashboard__WrapTabs",
  componentId: "ij5648-2"
})(["display:flex;flex-direction:row;font-size:15px;"]);
const WholeGrid = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Dashboard__WholeGrid",
  componentId: "ij5648-3"
})([""]); // border: 1px solid #f2f2f2;

const TopBarParent = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Dashboard__TopBarParent",
  componentId: "ij5648-4"
})(["display:flex;flex-direction:row;flex-wrap:wrap;margin-bottom:14px;"]); // flex: 1 1 45%; /*grow | shrink | basis */

const TopBarChildBigLeft = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Dashboard__TopBarChildBigLeft",
  componentId: "ij5648-5"
})(["width:45%;display:flex;flex-direction:row;overflow:auto;"]);
const TopBarChildBigRight = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Dashboard__TopBarChildBigRight",
  componentId: "ij5648-6"
})(["width:45%;display:flex;flex-direction:row;overflow:auto;"]);
const TopBarChildSmall = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Dashboard__TopBarChildSmall",
  componentId: "ij5648-7"
})(["display:flex;flex-direction:row;width:10%;"]);
const TopHashtagIndividual = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Dashboard__TopHashtagIndividual",
  componentId: "ij5648-8"
})(["background:#f8f8ff;color:#000;padding:8px;margin:0 10px;border-radius:2px;", ":hover{cursor:pointer;}margin-left:0;white-space:nowrap;"], _shared_helpers__WEBPACK_IMPORTED_MODULE_12__["wideFont"]);
const TopHashtagIndividualActive = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Dashboard__TopHashtagIndividualActive",
  componentId: "ij5648-9"
})(["background:#212528;color:#fff;padding:8px;margin:0 10px;border-radius:2px;", ":hover{cursor:pointer;}margin-left:0;white-space:nowrap;"], _shared_helpers__WEBPACK_IMPORTED_MODULE_12__["wideFont"]);
const TopHashtagIndividualActiveRight = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Dashboard__TopHashtagIndividualActiveRight",
  componentId: "ij5648-10"
})(["background:#212528;color:#fff;padding:8px;margin:0 10px;border-radius:2px;", " margin:0 auto;:hover{cursor:pointer;}margin-right:0;"], _shared_helpers__WEBPACK_IMPORTED_MODULE_12__["wideFont"]);
const RightTabs = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Dashboard__RightTabs",
  componentId: "ij5648-11"
})(["color:#fff;margin:0 10px;border-radius:2px;", " margin:0 auto;:hover{cursor:pointer;}margin-right:0;"], _shared_helpers__WEBPACK_IMPORTED_MODULE_12__["wideFont"]);
const TopHashtagIndividualActivePnl = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Dashboard__TopHashtagIndividualActivePnl",
  componentId: "ij5648-12"
})(["color:#fff;padding:0px;margin:0 10px;border-radius:2px;", ":hover{cursor:pointer;}margin:auto;"], _shared_helpers__WEBPACK_IMPORTED_MODULE_12__["wideFont"]);
const ChartWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Dashboard__ChartWrapper",
  componentId: "ij5648-13"
})(["background:white;padding:5px;width:100%;padding:10px;@media (max-width:768px){margin:0 5vw;}"]);
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Dashboard__Wrapper",
  componentId: "ij5648-14"
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Tades_Trades__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tades/Trades */ "./components/Dashboard/Tades/Trades.js");
/* harmony import */ var _Menu_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Menu/Menu */ "./components/Menu/Menu.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mobx-react */ "mobx-react");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! fast-deep-equal */ "fast-deep-equal");
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(fast_deep_equal__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _AddApiForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./AddApiForm */ "./components/Dashboard/AddApiForm.js");
/* harmony import */ var _Dashboard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Dashboard */ "./components/Dashboard/Dashboard.js");
/* harmony import */ var _768px_DashboardTest__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./768px/DashboardTest */ "./components/Dashboard/768px/DashboardTest.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! mobx */ "mobx");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Helpers_Functions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Helpers/Functions */ "./components/Helpers/Functions.js");
var _dec, _class, _temp, _dec2, _class3;


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;













let FetchQuery = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_6__["inject"])(["store"]), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_6__["observer"])(_class = (_temp = class FetchQuery extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    this.clicked = () => {
      store.isAuth = !store.isAuth;
      console.log(store.isAuth);
    };

    this.state = {
      startDate: "",
      endDate: "",
      date: ""
    };
  }

  componentDidMount() {
    console.log("loaded fetch query component");
  }

  render() {
    let fetchTradeHistoryVariables = {
      start: this.props.store.startDate,
      end: this.props.store.endDate,
      symbol: this.props.store.symbol
    };
    return __jsx("div", null, __jsx(Comp, {
      query: fetchTradeHistoryQuery,
      vars: fetchTradeHistoryVariables
    }));
  }

}, _temp)) || _class) || _class);
let Comp = (_dec2 = Object(mobx_react__WEBPACK_IMPORTED_MODULE_6__["inject"])(["store"]), _dec2(_class3 = Object(mobx_react__WEBPACK_IMPORTED_MODULE_6__["observer"])(_class3 = class Comp extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.tempTagsReaction = Object(mobx__WEBPACK_IMPORTED_MODULE_11__["reaction"])(() => this.props.store.hasTempTags, (notifications, reaction) => {
      this.forceUpdate(console.log("FORCE UPDATE WAS CALLED"));
    });
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    this.tempTagsReaction();
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    console.log(window.innerWidth);
    this.setState({
      width: window.innerWidth
    });
  }

  render() {
    console.log("rerendered");
    return __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
      query: this.props.query,
      variables: this.props.vars
    }, ({
      loading,
      error,
      data
    }) => {
      if (error) return __jsx("div", null, "no data loaded");
      if (loading) return __jsx("div", null, "Loading");

      if (data.checkApiKey == false) {
        return __jsx(_AddApiForm__WEBPACK_IMPORTED_MODULE_8__["default"], null);
      } else if (data.checkApiKey == true) {
        this.props.store.resetHasTempTags();
        this.props.store.clearTempNotes();
        this.props.store.clearTempTags();
        this.props.store.resetPnl();
        this.props.store.hasSingleTrade = false;

        if (this.state.width > 768) {
          return __jsx(_Dashboard__WEBPACK_IMPORTED_MODULE_9__["default"], {
            data: data
          });
        } else {
          return __jsx(_768px_DashboardTest__WEBPACK_IMPORTED_MODULE_10__["default"], {
            data: data
          });
        }
      }
    });
  }

}) || _class3) || _class3);
/* harmony default export */ __webpack_exports__["default"] = (FetchQuery);
const fetchTradeHistoryQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default.a`
  query fetchTradeHistory($start: String!, $end: String!, $symbol: String!) {
    checkApiKey

    fetchTradeHistory(start: $start, end: $end, symbol: $symbol) {
      id
      timestamp
      side
      price
      orderQty
      leavesQty
      currentQty
      avgEntryPrice
      execGrossPnl
      realizedPnl
      commission
      execType
      orderType
      trdStart
      trdEnd
      notes
      hashtags
    }

    fetchOneMinuteCandleHistory(start: $start, end: $end) {
      id
      timestamp
      symbol
      timeframe
      open
      high
      low
      close
      trades
      volume
      vwap
      lastSize
      homeNotional
      foreignNotional
    }

    fetchOneHourCandleHistory(start: $start, end: $end) {
      id
      timestamp
      symbol
      timeframe
      open
      high
      low
      close
      trades
      volume
      vwap
      lastSize
      homeNotional
      foreignNotional
    }

    fetchOneDayCandleHistory(start: $start, end: $end) {
      id
      timestamp
      symbol
      timeframe
      open
      high
      low
      close
      trades
      volume
      vwap
      lastSize
      homeNotional
      foreignNotional
    }

    fetchFiveMinuteCandleHistory(start: $start, end: $end) {
      id
      timestamp
      symbol
      timeframe
      open
      high
      low
      close
      trades
      volume
      vwap
      lastSize
      homeNotional
      foreignNotional
    }
  }
`;

/***/ }),

/***/ "./components/Dashboard/FetchQueryContainer.js":
/*!*****************************************************!*\
  !*** ./components/Dashboard/FetchQueryContainer.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DashInitialTerms; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../theme */ "./components/theme.js");
/* harmony import */ var _FetchQuery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FetchQuery */ "./components/Dashboard/FetchQuery.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mobx-react */ "mobx-react");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _stores_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../stores/store */ "./stores/store.js");
/* harmony import */ var _Helpers_Functions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Helpers/Functions */ "./components/Helpers/Functions.js");
var _dec, _class;

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const Cookie = __webpack_require__(/*! js-cookie */ "js-cookie");

let DashInitialTerms = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_5__["inject"])("store"), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_5__["observer"])(_class = class DashInitialTerms extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: null
    };
  }

  componentDidMount() {
    let cook = Cookie.get("isAuth") == "true";

    if (!cook) {
      next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/");
    } else if (!!cook) {
      this.setState({
        isAuth: cook
      });
    }

    if (this.props.store.startDate == null) {
      let dates = Object(_Helpers_Functions__WEBPACK_IMPORTED_MODULE_7__["getStateDate"])("This Week");
      this.props.store.startDate = dates.start;
      this.props.store.endDate = dates.end;
      this.setState({
        start: true
      });
    }
  }

  render() {
    if (this.state.start !== null) {
      return __jsx(styled_components__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
        theme: Object(_theme__WEBPACK_IMPORTED_MODULE_2__["default"])(false)
      }, __jsx("div", {
        style: {
          width: "100%"
        }
      }, __jsx(_FetchQuery__WEBPACK_IMPORTED_MODULE_3__["default"], null)));
    } else {
      return __jsx("div", null, "loading");
    }
  }

}) || _class) || _class);


/***/ }),

/***/ "./components/Dashboard/Notes/Notes.js":
/*!*********************************************!*\
  !*** ./components/Dashboard/Notes/Notes.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _class; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _notesHelpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notesHelpers */ "./components/Dashboard/Notes/notesHelpers.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! mobx-react */ "mobx-react");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! mobx */ "mobx");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! fast-deep-equal */ "fast-deep-equal");
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(fast_deep_equal__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_autosize_textarea__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-autosize-textarea */ "react-autosize-textarea");
/* harmony import */ var react_autosize_textarea__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_autosize_textarea__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _shared_helpers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/helpers */ "./components/shared/helpers.js");
var _dec, _class2, _dec2, _class3;


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;














let _class = (_dec2 = Object(mobx_react__WEBPACK_IMPORTED_MODULE_8__["inject"])(["store"]), _dec2(_class3 = Object(mobx_react__WEBPACK_IMPORTED_MODULE_8__["observer"])(_class3 = class extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      hashtags: [],
      initHashtags: [],
      showNotes: false
    };
    this.setShowNotes = this.setShowNotes.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.store.tempNotes[0] != undefined) {
      let isTemp = false;

      for (let i = 0; i < this.props.store.tempNotes.length; i++) {
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

    let splitTags = this.props.firstTrade.hashtags.split(",");
    splitTags.map(tag => {
      this.state.initHashtags.push(tag);
    });
  }

  handleChange(client) {
    return event => {
      // event.preventDefault();
      this.setState({
        value: event.target.value
      }, this.handleSubmit(client));
      this.props.store.addTempNote(this.props.firstTrade.timestamp, event.target.value);
    };
  }

  removeHashtag(client, hashtag) {
    return async event => {
      if (event != undefined && event.preventDefault != undefined) {
        event.preventDefault();
      }

      let time = this.props.firstTrade.timestamp;
      client.mutate({
        mutation: graphql_tag__WEBPACK_IMPORTED_MODULE_4___default.a`
            mutation removeHashtag($time: String!, $hashtag: String!) {
              removeHashtag(time: $time, hashtag: $hashtag)
            }
          `,
        variables: {
          time,
          hashtag
        },
        refetchQueries: [`fetchTradeHistory`]
      }).then(() => {
        this.props.store.changeHasTempTags();
      });
    };
  }

  handleSubmit(client) {
    return event => {
      if (event != undefined && event.preventDefault != undefined) {
        event.preventDefault();
      }

      console.log("HASHTAGS", this.state.hashtags);
      Object(_notesHelpers__WEBPACK_IMPORTED_MODULE_3__["getNotes"])(this.state.value).then(async res => {
        let notes = res[0];
        let time = this.props.firstTrade.timestamp;
        let reso = client.mutate({
          mutation: graphql_tag__WEBPACK_IMPORTED_MODULE_4___default.a`
            mutation addNotes($time: String!, $notes: String!) {
              addNotes(time: $time, notes: $notes)
            }
          `,
          variables: {
            time,
            notes
          }
        });
        return await reso;
      });
    };
  }

  setShowNotes() {
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

  render() {
    return __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_2__["ApolloConsumer"], null, client => __jsx("div", null, __jsx(FullRow, {
      onSubmit: this.handleSubmit(client)
    }, __jsx(HashtagDiv, null, __jsx(AddHashtag, {
      firstTrade: this.props.firstTrade,
      client: client
    })), this.state.initHashtags.map(tag => {
      if (tag != "undefined") {
        return __jsx(SingleHashtagDiv, null, __jsx(SingleHashtagText, null, "#", tag), __jsx(SingleHashtagDelete, {
          onClick: this.removeHashtag(client, tag)
        }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faTimes"],
          size: "xs",
          style: {
            transition: "none"
          }
        })));
      }
    }), this.state.showNotes == true ? __jsx(ShowNotesDiv, {
      onClick: () => this.setShowNotes()
    }, __jsx(ShowNotesInner, null, "Hide Notes")) : __jsx(ShowNotesDiv, {
      onClick: () => this.setShowNotes()
    }, __jsx(ShowNotesInner, null, "Show Notes"))), this.state.showNotes == true ? __jsx(react_autosize_textarea__WEBPACK_IMPORTED_MODULE_11___default.a, {
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
      value: this.state.value,
      onChange: this.handleChange(client)
    }) : null));
  }

}) || _class3) || _class3);

 // const NotesInput = styled.textarea`
//   width: 100%;
//   padding: 12px 20px;
//   margin: 8px 0;
//   box-sizing: border-box;
//   background: #f8f8ff;
//   border: none;
// `;

let AddHashtag = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_8__["inject"])(["store"]), _dec(_class2 = Object(mobx_react__WEBPACK_IMPORTED_MODULE_8__["observer"])(_class2 = class AddHashtag extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clicked = this.clicked.bind(this);
  }

  componentDidMount() {
    this.setState({
      client: this.props.client
    });
  }

  handleChange(event) {
    // event.preventDefault();
    console.log(event.target.value);
    this.setState({
      value: event.target.value
    });
  }

  async handleSubmit(event) {
    // return event => {
    event.preventDefault();
    console.log(this.state.value);
    Object(_notesHelpers__WEBPACK_IMPORTED_MODULE_3__["getHashtags"])(this.state.value).then(async res => {
      console.log("CLICKED");
      let client = this.state.client;
      let hashtag = res;
      console.log(hashtag, "HASHTAG");
      let time = this.props.firstTrade.timestamp;
      let reso = client.mutate({
        mutation: graphql_tag__WEBPACK_IMPORTED_MODULE_4___default.a`
            mutation addHashtag($time: String!, $hashtag: String!) {
              addHashtag(time: $time, hashtag: $hashtag)
            }
          `,
        variables: {
          time,
          hashtag
        },
        refetchQueries: [`fetchTradeHistory`]
      });
      return await reso;
    }).then(reso => {
      this.setState({
        value: ""
      });
      this.props.store.changeHasTempTags();
    }); // };
  }

  clicked() {
    this.state.clicked ? this.setState({
      clicked: false
    }) : this.setState({
      clicked: true
    });
  }

  render() {
    return __jsx("div", null, __jsx(Popup, {
      onClick: this.clicked
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faPlus"],
      style: {
        transition: "none"
      }
    })), this.state.clicked ? __jsx(PopupTop, null, __jsx("form", {
      onSubmit: this.handleSubmit
    }, __jsx("input", {
      type: "text",
      value: this.state.value,
      onChange: this.handleChange
    }), __jsx(AddHashSubmit, {
      type: "submit",
      value: "Add Hashtag"
    }))) : null);
  }

}) || _class2) || _class2);
const AddHashSubmit = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.input.withConfig({
  displayName: "Notes__AddHashSubmit",
  componentId: "sc-1x3lw2t-0"
})(["background:none;border:none;color:white;font-weight:500;padding:2px;"]);
const Popup = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Notes__Popup",
  componentId: "sc-1x3lw2t-1"
})(["position:relative;display:inline-block;cursor:pointer;background:#000;padding:8px;border-radius:2px;"]);
const PopupTop = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Notes__PopupTop",
  componentId: "sc-1x3lw2t-2"
})(["position:absolute;background:#000;z-index:1;margin:5px;padding:2px;border-radius:2px;"]); // background: #6c757d;
// background: #b9bdc1;

const SingleHashtagDiv = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Notes__SingleHashtagDiv",
  componentId: "sc-1x3lw2t-3"
})(["background:#f8f8ff;margin:20px 8px;color:black;padding:5px 7px;white-space:nowrap;display:flex;flex-direction:row;margin-left:0px;border-radius:2px;"]);
const ShowNotesDiv = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Notes__ShowNotesDiv",
  componentId: "sc-1x3lw2t-4"
})(["background:#fff;margin:20px 8px;color:#000;padding:10px;padding-top:8px;white-space:nowrap;display:flex;flex-direction:row;margin-left:0px;border-radius:2px;background:#f8f8ff;:hover{transition:none;cursor:pointer;}"]);
const ShowNotesInner = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Notes__ShowNotesInner",
  componentId: "sc-1x3lw2t-5"
})(["", " font-size:13px;transition:none;margin:auto;"], _shared_helpers__WEBPACK_IMPORTED_MODULE_12__["wideFont"]);
const SingleHashtagText = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Notes__SingleHashtagText",
  componentId: "sc-1x3lw2t-6"
})(["margin:auto;", ""], _shared_helpers__WEBPACK_IMPORTED_MODULE_12__["wideFont"]);
const SingleHashtagDelete = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Notes__SingleHashtagDelete",
  componentId: "sc-1x3lw2t-7"
})(["margin:auto;margin-left:6px;margin-bottom:4px;:hover{cursor:pointer;}"]);
const HashtagDiv = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Notes__HashtagDiv",
  componentId: "sc-1x3lw2t-8"
})(["margin:auto 0;text-align:center;vertical-align:middle;color:white;padding:10px;padding-top:8px;"]);
const FullRow = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.form.withConfig({
  displayName: "Notes__FullRow",
  componentId: "sc-1x3lw2t-9"
})(["display:flex;flex-direction:row;background:#f8f8ff;"]);
const NotesSubmit = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.input.withConfig({
  displayName: "Notes__NotesSubmit",
  componentId: "sc-1x3lw2t-10"
})(["margin:9px;padding:15px;background:#212528;border:none;color:white;"]);
const NotesInput = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.textarea.withConfig({
  displayName: "Notes__NotesInput",
  componentId: "sc-1x3lw2t-11"
})(["width:100%;padding:12px 20px;margin:0px 0;box-sizing:border-box;background:#f8f8ff;border:none;"]);

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _notesHelpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notesHelpers */ "./components/Dashboard/Notes/notesHelpers.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! mobx-react */ "mobx-react");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! mobx */ "mobx");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! fast-deep-equal */ "fast-deep-equal");
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(fast_deep_equal__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_autosize_textarea__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-autosize-textarea */ "react-autosize-textarea");
/* harmony import */ var react_autosize_textarea__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_autosize_textarea__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _shared_helpers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/helpers */ "./components/shared/helpers.js");
var _dec, _class2, _dec2, _class3;


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;














let _class = (_dec2 = Object(mobx_react__WEBPACK_IMPORTED_MODULE_8__["inject"])(["store"]), _dec2(_class3 = Object(mobx_react__WEBPACK_IMPORTED_MODULE_8__["observer"])(_class3 = class extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      hashtags: [],
      initHashtags: [],
      showNotes: false
    };
    this.setShowNotes = this.setShowNotes.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.store.tempNotes[0] != undefined) {
      let isTemp = false;

      for (let i = 0; i < this.props.store.tempNotes.length; i++) {
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

    let splitTags = this.props.firstTrade.hashtags.split(",");
    splitTags.map(tag => {
      this.state.initHashtags.push(tag);
    });
  }

  handleChange(client) {
    return event => {
      // event.preventDefault();
      this.setState({
        value: event.target.value
      }, this.handleSubmit(client));
      this.props.store.addTempNote(this.props.firstTrade.timestamp, event.target.value);
    };
  }

  removeHashtag(client, hashtag) {
    return async event => {
      if (event != undefined && event.preventDefault != undefined) {
        event.preventDefault();
      }

      let time = this.props.firstTrade.timestamp;
      client.mutate({
        mutation: graphql_tag__WEBPACK_IMPORTED_MODULE_4___default.a`
            mutation removeHashtag($time: String!, $hashtag: String!) {
              removeHashtag(time: $time, hashtag: $hashtag)
            }
          `,
        variables: {
          time,
          hashtag
        },
        refetchQueries: [`fetchTradeHistory`]
      }).then(() => {
        this.props.store.changeHasTempTags();
      });
    };
  }

  handleSubmit(client) {
    return event => {
      if (event != undefined && event.preventDefault != undefined) {
        event.preventDefault();
      }

      console.log("HASHTAGS", this.state.hashtags);
      Object(_notesHelpers__WEBPACK_IMPORTED_MODULE_3__["getNotes"])(this.state.value).then(async res => {
        let notes = res[0];
        let time = this.props.firstTrade.timestamp;
        let reso = client.mutate({
          mutation: graphql_tag__WEBPACK_IMPORTED_MODULE_4___default.a`
            mutation addNotes($time: String!, $notes: String!) {
              addNotes(time: $time, notes: $notes)
            }
          `,
          variables: {
            time,
            notes
          }
        });
        return await reso;
      });
    };
  }

  setShowNotes() {
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

  render() {
    return __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_2__["ApolloConsumer"], null, client => __jsx("div", null, __jsx(FullRow, {
      onSubmit: this.handleSubmit(client)
    }, this.state.initHashtags.map(tag => {
      if (tag != "undefined") {
        return __jsx(SingleHashtagDiv, null, __jsx(SingleHashtagText, null, "#", tag), __jsx(SingleHashtagDelete, {
          onClick: this.removeHashtag(client, tag)
        }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faTimes"],
          size: "xs",
          style: {
            transition: "none"
          }
        })));
      }
    }), __jsx(HashtagDiv, null, __jsx(AddHashtag, {
      firstTrade: this.props.firstTrade,
      client: client
    })))));
  }

}) || _class3) || _class3);

 // const NotesInput = styled.textarea`
//   width: 100%;
//   padding: 12px 20px;
//   margin: 8px 0;
//   box-sizing: border-box;
//   background: #f8f8ff;
//   border: none;
// `;

let AddHashtag = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_8__["inject"])(["store"]), _dec(_class2 = Object(mobx_react__WEBPACK_IMPORTED_MODULE_8__["observer"])(_class2 = class AddHashtag extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clicked = this.clicked.bind(this);
  }

  componentDidMount() {
    this.setState({
      client: this.props.client
    });
  }

  handleChange(event) {
    // event.preventDefault();
    console.log(event.target.value);
    this.setState({
      value: event.target.value
    });
  }

  async handleSubmit(event) {
    // return event => {
    event.preventDefault();
    console.log(this.state.value);
    Object(_notesHelpers__WEBPACK_IMPORTED_MODULE_3__["getHashtags"])(this.state.value).then(async res => {
      console.log("CLICKED");
      let client = this.state.client;
      let hashtag = res;
      console.log(hashtag, "HASHTAG");
      let time = this.props.firstTrade.timestamp;
      let reso = client.mutate({
        mutation: graphql_tag__WEBPACK_IMPORTED_MODULE_4___default.a`
            mutation addHashtag($time: String!, $hashtag: String!) {
              addHashtag(time: $time, hashtag: $hashtag)
            }
          `,
        variables: {
          time,
          hashtag
        },
        refetchQueries: [`fetchTradeHistory`]
      });
      return await reso;
    }).then(reso => {
      this.setState({
        value: ""
      });
      this.props.store.changeHasTempTags();
    }); // };
  }

  clicked() {
    this.state.clicked ? this.setState({
      clicked: false
    }) : this.setState({
      clicked: true
    });
  }

  render() {
    return __jsx("div", null, __jsx(Popup, {
      onClick: this.clicked,
      style: {
        display: "flex",
        flexDirection: "row"
      }
    }, __jsx("div", null, "Add Hashtag"), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faPlus"],
      style: {
        transition: "none",
        margin: "auto 4px"
      }
    })), this.state.clicked ? __jsx(PopupTop, null, __jsx("form", {
      onSubmit: this.handleSubmit
    }, __jsx("input", {
      type: "text",
      value: this.state.value,
      onChange: this.handleChange
    }), __jsx(AddHashSubmit, {
      type: "submit",
      value: "Add"
    }))) : null);
  }

}) || _class2) || _class2);
const AddHashSubmit = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.input.withConfig({
  displayName: "NotesTest__AddHashSubmit",
  componentId: "sc-6j67dn-0"
})(["background:none;border:none;color:white;font-weight:500;padding:2px;"]);
const Popup = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "NotesTest__Popup",
  componentId: "sc-6j67dn-1"
})(["position:relative;display:inline-block;cursor:pointer;background:#000;padding:8px;border-radius:2px;"]);
const PopupTop = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "NotesTest__PopupTop",
  componentId: "sc-6j67dn-2"
})(["position:absolute;background:#000;z-index:1;margin:5px;padding:2px;border-radius:2px;"]); // background: #6c757d;
// background: #b9bdc1;

const SingleHashtagDiv = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "NotesTest__SingleHashtagDiv",
  componentId: "sc-6j67dn-3"
})(["background:#f8f8ff;margin:0 8px;color:black;padding:5px 7px;white-space:nowrap;display:flex;flex-direction:row;margin-left:0px;border-radius:2px;"]);
const ShowNotesDiv = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "NotesTest__ShowNotesDiv",
  componentId: "sc-6j67dn-4"
})(["background:#fff;margin:20px 8px;color:#000;padding:10px;padding-top:8px;white-space:nowrap;display:flex;flex-direction:row;margin-left:0px;border-radius:2px;background:#f8f8ff;:hover{transition:none;cursor:pointer;}"]);
const ShowNotesInner = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "NotesTest__ShowNotesInner",
  componentId: "sc-6j67dn-5"
})(["", " font-size:13px;transition:none;margin:auto;"], _shared_helpers__WEBPACK_IMPORTED_MODULE_12__["wideFont"]);
const SingleHashtagText = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "NotesTest__SingleHashtagText",
  componentId: "sc-6j67dn-6"
})(["margin:auto;", ""], _shared_helpers__WEBPACK_IMPORTED_MODULE_12__["wideFont"]);
const SingleHashtagDelete = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "NotesTest__SingleHashtagDelete",
  componentId: "sc-6j67dn-7"
})(["margin:auto;margin-left:6px;margin-bottom:4px;:hover{cursor:pointer;}"]);
const HashtagDiv = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "NotesTest__HashtagDiv",
  componentId: "sc-6j67dn-8"
})(["margin:auto 0;text-align:center;vertical-align:middle;color:white;"]);
const FullRow = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.form.withConfig({
  displayName: "NotesTest__FullRow",
  componentId: "sc-6j67dn-9"
})(["display:flex;flex-direction:row;"]);
const NotesSubmit = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.input.withConfig({
  displayName: "NotesTest__NotesSubmit",
  componentId: "sc-6j67dn-10"
})(["margin:9px;padding:15px;background:#212528;border:none;color:white;"]);
const NotesInput = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.textarea.withConfig({
  displayName: "NotesTest__NotesInput",
  componentId: "sc-6j67dn-11"
})(["width:100%;padding:12px 20px;margin:0px 0;box-sizing:border-box;background:#f8f8ff;border:none;"]);

/***/ }),

/***/ "./components/Dashboard/Notes/TextArea.js":
/*!************************************************!*\
  !*** ./components/Dashboard/Notes/TextArea.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _notesHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notesHelpers */ "./components/Dashboard/Notes/notesHelpers.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mobx-react-lite */ "mobx-react-lite");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mobx-react */ "mobx-react");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_autosize_textarea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-autosize-textarea */ "react-autosize-textarea");
/* harmony import */ var react_autosize_textarea__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_autosize_textarea__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_6__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







const MyTextArea = Object(mobx_react__WEBPACK_IMPORTED_MODULE_4__["inject"])("store")(Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__["observer"])(({
  firstTrade,
  store,
  client
}) => {
  const {
    0: value,
    1: setValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  const {
    0: light,
    1: setLight
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: myClient,
    1: setClient
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(client);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    let val;

    if (firstTrade.notes == "undefined") {
      setValue("Add notes here...");
      setLight(true);
    } else {
      setValue(firstTrade.notes);
    }

    let notTemp = true;

    if (store.tempNotes[0] !== undefined) {
      for (let i = 0; i < store.tempNotes.length; i++) {
        if (store.tempNotes[i].time == firstTrade.timestamp.toString()) {
          setValue(store.tempNotes[i].note);
        }
      }
    }
  });
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (value != "Add notes here...") {
      setLight(false);
      Object(_notesHelpers__WEBPACK_IMPORTED_MODULE_0__["getNotes"])(value).then(async res => {
        let notes = res[0];
        let time = firstTrade.timestamp;
        let reso = myClient.mutate({
          mutation: graphql_tag__WEBPACK_IMPORTED_MODULE_6___default.a`
              mutation addNotes($time: String!, $notes: String!) {
                addNotes(time: $time, notes: $notes)
              }
            `,
          variables: {
            time,
            notes
          }
        });
        return await reso;
      });
    }
  }, [value]);

  function handleChange() {
    return event => {
      setLight(false);
      store.addTempNote(firstTrade.timestamp, event.target.value);
      setValue(event.target.value);
    };
  }

  if (light == false) {
    return __jsx(react_autosize_textarea__WEBPACK_IMPORTED_MODULE_5___default.a, {
      style: {
        width: "100%",
        padding: "12px 20px",
        marginTop: "8px",
        boxSizing: "border-box",
        background: "#f8f8ff",
        border: "none",
        outline: "none",
        fontSize: "15px"
      },
      rows: 5,
      maxRows: 25,
      value: value,
      onChange: handleChange()
    });
  } else {
    return __jsx(react_autosize_textarea__WEBPACK_IMPORTED_MODULE_5___default.a, {
      style: {
        width: "100%",
        padding: "12px 20px",
        marginTop: "8px",
        boxSizing: "border-box",
        background: "#f8f8ff",
        border: "none",
        outline: "none",
        fontSize: "15px",
        color: "#c6c6c6"
      },
      rows: 5,
      maxRows: 25,
      value: value,
      onChange: handleChange()
    });
  }
}));
/* harmony default export */ __webpack_exports__["default"] = (MyTextArea);

/***/ }),

/***/ "./components/Dashboard/Notes/notesHelpers.js":
/*!****************************************************!*\
  !*** ./components/Dashboard/Notes/notesHelpers.js ***!
  \****************************************************/
/*! exports provided: getNotes, getHashtags */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNotes", function() { return getNotes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHashtags", function() { return getHashtags; });
async function getNotes(inputVal) {
  return new Promise(resolve => {
    let notes;

    if (inputVal != null) {
      notes = inputVal;
    } else {
      notes = "undefined";
    } // let hashtags = "";
    // if (inputHashtags != null) {
    //   for (let k = 0; k < inputHashtags.length; k++) {
    //     hashtags += inputHashtags[k] + " ";
    //     if (k == inputHashtags.length - 1) {
    //       let endArr = [];
    //       endArr.push(notes);
    //       endArr.push(hashtags);
    //       resolve(endArr);
    //     }
    //   }
    // } else {


    let endArr = [];
    endArr.push(notes); // endArr.push(hashtags);

    resolve(endArr); // }
  });
}
async function getHashtags(inputHashtags) {
  console.log(inputHashtags, "INP HASH");
  return new Promise(resolve => {
    let hashtags;

    if (inputHashtags != null && inputHashtags != undefined) {
      hashtags = inputHashtags;
    } else {
      hashtags = "undefined";
    }

    console.log(hashtags, "END HASHS");
    resolve(hashtags);
  });
}

/***/ }),

/***/ "./components/Dashboard/Tabs.js":
/*!**************************************!*\
  !*** ./components/Dashboard/Tabs.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react */ "mobx-react");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react-lite */ "mobx-react-lite");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shared_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/helpers */ "./components/shared/helpers.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const Tabs = Object(mobx_react__WEBPACK_IMPORTED_MODULE_1__["inject"])("store")(Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__["observer"])(({
  store
}) => {
  const {
    0: activeTab,
    1: setActiveTab
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("notes");

  function setActive(tab) {
    console.log("CLICKED");

    if (tab !== activeTab) {
      setActiveTab(tab);
      console.log("setting tab", tab);

      if (tab == "notes") {
        store.isSingleNotes = false;
      } else {
        store.isSingleNotes = true;
      }
    }
  }

  function backwards() {
    console.log("BACK CLICKED");
    store.hasSingleTrade = false;
    store.isSingleNotes = false;
  }

  if (activeTab == "notes") {
    return __jsx(WrapTabs, null, __jsx(SingleTab, {
      isActive: false,
      onClick: () => backwards()
    }, __jsx(SingleTabInner, null, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faCaretLeft"],
      style: {
        transition: "none",
        marginRight: "7px",
        fontSize: "12px",
        marginBottom: "2px",
        marginTop: "auto"
      }
    }), "All Trades")), __jsx(SingleTab, {
      isActive: true,
      onClick: () => setActive("notes")
    }, __jsx(SingleTabInner, null, "Notes")), __jsx(SingleTab, {
      isActive: false,
      onClick: () => setActive("exec_hist")
    }, __jsx(SingleTabInner, null, "Execution History")));
  } else {
    return __jsx(WrapTabs, null, __jsx(SingleTab, {
      isActive: false,
      onClick: () => backwards()
    }, __jsx(SingleTabInner, null, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faCaretLeft"],
      style: {
        transition: "none",
        marginRight: "7px",
        fontSize: "12px",
        marginBottom: "2px",
        marginTop: "auto"
      }
    }), "All Trades")), __jsx(SingleTab, {
      isActive: false,
      onClick: () => setActive("notes")
    }, __jsx(SingleTabInner, null, "Notes")), __jsx(SingleTab, {
      isActive: true,
      onClick: () => setActive("exec_hist")
    }, __jsx(SingleTabInner, null, "Execution History")));
  }
}));
/* harmony default export */ __webpack_exports__["default"] = (Tabs);
const SingleTabInner = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "Tabs__SingleTabInner",
  componentId: "sc-1mz9w2n-0"
})(["margin:auto;"]);
const SingleTab = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "Tabs__SingleTab",
  componentId: "sc-1mz9w2n-1"
})(["color:", ";background-color:", ";margin:auto 10px;border-radius:2px;padding:5px;:hover{cursor:pointer;}"], props => props.isActive ? "#fff" : "#000", props => props.isActive ? "#212527" : "#fff");
const WrapTabs = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "Tabs__WrapTabs",
  componentId: "sc-1mz9w2n-2"
})(["display:flex;flex-direction:row;font-size:15px;"]);
const WholeGrid = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "Tabs__WholeGrid",
  componentId: "sc-1mz9w2n-3"
})(["border:1px solid #f2f2f2;"]);
const TopBarParent = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "Tabs__TopBarParent",
  componentId: "sc-1mz9w2n-4"
})(["display:flex;flex-direction:row;flex-wrap:wrap;margin-bottom:14px;"]);
const TopBarChildBig = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "Tabs__TopBarChildBig",
  componentId: "sc-1mz9w2n-5"
})(["flex:1 1 45%;display:flex;flex-direction:row;"]);
const TopBarChildSmall = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "Tabs__TopBarChildSmall",
  componentId: "sc-1mz9w2n-6"
})(["flex:1 1 10%;display:flex;flex-direction:row;"]);
const TopHashtagIndividual = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "Tabs__TopHashtagIndividual",
  componentId: "sc-1mz9w2n-7"
})(["background:#f8f8ff;color:#000;padding:8px;margin:0 10px;border-radius:2px;", ":hover{cursor:pointer;}margin-left:0;"], _shared_helpers__WEBPACK_IMPORTED_MODULE_6__["wideFont"]);
const TopHashtagIndividualActive = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "Tabs__TopHashtagIndividualActive",
  componentId: "sc-1mz9w2n-8"
})(["background:#212528;color:#fff;padding:8px;margin:0 10px;border-radius:2px;", " margin:0 auto;:hover{cursor:pointer;}margin-left:0;"], _shared_helpers__WEBPACK_IMPORTED_MODULE_6__["wideFont"]);
const TopHashtagIndividualActiveRight = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "Tabs__TopHashtagIndividualActiveRight",
  componentId: "sc-1mz9w2n-9"
})(["background:#212528;color:#fff;padding:8px;margin:0 10px;border-radius:2px;", " margin:0 auto;:hover{cursor:pointer;}margin-right:0;"], _shared_helpers__WEBPACK_IMPORTED_MODULE_6__["wideFont"]);
const TopHashtagIndividualActivePnl = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "Tabs__TopHashtagIndividualActivePnl",
  componentId: "sc-1mz9w2n-10"
})(["color:#fff;padding:0px;margin:0 10px;border-radius:2px;", ":hover{cursor:pointer;}margin:auto;"], _shared_helpers__WEBPACK_IMPORTED_MODULE_6__["wideFont"]);
const ChartWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "Tabs__ChartWrapper",
  componentId: "sc-1mz9w2n-11"
})(["background:white;padding:5px;width:100%;padding:10px;@media (max-width:768px){margin:0 5vw;}"]);
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "Tabs__Wrapper",
  componentId: "sc-1mz9w2n-12"
})(["display:flex;margin-top:5px;"]);

/***/ }),

/***/ "./components/Dashboard/Tades/Trades.js":
/*!**********************************************!*\
  !*** ./components/Dashboard/Tades/Trades.js ***!
  \**********************************************/
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recharts */ "recharts");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(recharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/helpers */ "./components/shared/helpers.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../theme */ "./components/theme.js");
/* harmony import */ var _Helpers_Functions_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Helpers/Functions.js */ "./components/Helpers/Functions.js");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mobx-react */ "mobx-react");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Chart_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Chart/index */ "./components/Dashboard/Chart/index.js");
/* harmony import */ var _Notes_Notes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Notes/Notes */ "./components/Dashboard/Notes/Notes.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! fast-deep-equal */ "fast-deep-equal");
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(fast_deep_equal__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_autosize_textarea__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-autosize-textarea */ "react-autosize-textarea");
/* harmony import */ var react_autosize_textarea__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_autosize_textarea__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _Notes_TextArea__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Notes/TextArea */ "./components/Dashboard/Notes/TextArea.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! mobx */ "mobx");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _calcTrades__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./calcTrades */ "./components/Dashboard/Tades/calcTrades.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_16__);
var _dec, _class, _dec2, _class2;

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

















let Example = (_dec2 = Object(mobx_react__WEBPACK_IMPORTED_MODULE_6__["inject"])(["store"]), _dec2(_class2 = Object(mobx_react__WEBPACK_IMPORTED_MODULE_6__["observer"])(_class2 = class Example extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
      data: [],
      fullTrades: [],
      hasSingleTrade: false
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.createFullTrades = this.createFullTrades.bind(this);
  }

  createFullTrades(data) {
    let fullRay = [];
    let fullTrades = [];

    for (let i = 0; i < data.fetchTradeHistory.length; i++) {
      fullRay.unshift(data.fetchTradeHistory[i]);

      if (i == data.fetchTradeHistory.length - 1) {
        for (let j = 0; j < fullRay.length; j++) {
          let dat = fullRay[j]; // dat.timestamp = formatDateForRow(dat.timestamp);
          // fullRay[j] = dat;

          if (dat.trdStart == true) {
            let sliced = fullRay.slice(j, fullRay.length);

            for (let k = 0; k < sliced.length; k++) {
              if (sliced[k].trdEnd == true && k > 0) {
                let newsliced = sliced.slice(0, k + 1);
                fullTrades.unshift(newsliced);
                break;
              }
            }
          }

          if (j == fullRay.length - 1) {
            let returnVal = {};
            returnVal["initData"] = this.props.initData;
            returnVal["data"] = fullRay;
            returnVal["fullTrades"] = fullTrades;
            return returnVal;
          }
        }
      }
    }
  }

  filter() {}

  componentDidUpdate(prevProps) {
    if (!fast_deep_equal__WEBPACK_IMPORTED_MODULE_11___default()(this.props.filteredData, prevProps.filteredData)) {
      // this.updateTrades(this.props.data);
      let newFullTrades = [];
      let firstFullTrades = this.createFullTrades(this.props.data);
      firstFullTrades = firstFullTrades.fullTrades;

      if (this.props.filteredData == null) {
        this.setState({
          fullTrades: firstFullTrades
        });
      } else {
        for (let i = 0; i < firstFullTrades.length; i++) {
          for (let j = 0; j < this.props.filteredData.length; j++) {
            if (firstFullTrades[i][0].id == this.props.filteredData[j].id) {
              newFullTrades.unshift(firstFullTrades[i]);
            }
          }

          if (i == firstFullTrades.length - 1) {
            this.setState({
              fullTrades: newFullTrades
            });
          }
        }
      }
    }
  }

  componentDidMount() {
    let returned = this.createFullTrades(this.props.data);

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
    this.singleNotesReaction = Object(mobx__WEBPACK_IMPORTED_MODULE_14__["reaction"])(() => this.props.store.isSingleNotes, (notifications, reaction) => {
      if (this.props.store.isSingleNotes == false) {
        this.setState({
          isSingleNotes: false
        });
      } else {
        this.setState({
          isSingleNotes: true
        });
      }
    });
    this.singleTradeReaction = Object(mobx__WEBPACK_IMPORTED_MODULE_14__["reaction"])(() => this.props.store.hasSingleTrade, (notifications, reaction) => {
      this.props.store.pnl = 0;

      if (this.props.store.hasSingleTrade == false) {
        this.setState({
          hasSingleTrade: false
        });
      } else {
        this.setState({
          hasSingleTrade: true
        });
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
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

  render() {
    if (this.state.hasSingleTrade == false) {
      return __jsx(styled_components__WEBPACK_IMPORTED_MODULE_2__["ThemeProvider"], {
        theme: Object(_theme__WEBPACK_IMPORTED_MODULE_4__["default"])(false)
      }, __jsx("div", {
        style: {
          minWidth: this.state.chartWidth
        }
      }, this.state.fullTrades.map((slic, i) => {
        return __jsx(MakeCol, {
          clicked: false,
          slic: slic,
          onemin: this.props.data.fetchOneMinuteCandleHistory,
          fivemin: this.props.data.fetchFiveMinuteCandleHistory,
          onehour: this.props.data.fetchOneHourCandleHistory,
          oneday: this.props.data.fetchOneDayCandleHistory,
          key: i
        });
      })));
    } else {
      return __jsx(styled_components__WEBPACK_IMPORTED_MODULE_2__["ThemeProvider"], {
        theme: Object(_theme__WEBPACK_IMPORTED_MODULE_4__["default"])(false)
      }, __jsx("div", {
        style: {
          minWidth: this.state.chartWidth
        }
      }, __jsx(MakeCol, {
        clicked: true,
        slic: this.props.store.singleTrade,
        onemin: this.props.data.fetchOneMinuteCandleHistory,
        fivemin: this.props.data.fetchFiveMinuteCandleHistory,
        onehour: this.props.data.fetchOneHourCandleHistory,
        oneday: this.props.data.fetchOneDayCandleHistory
      })));
    }
  }

}) || _class2) || _class2);

let MakeCol = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_6__["inject"])("store"), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_6__["observer"])(_class = class MakeCol extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      pnl: 0,
      avgEntryPrice: 0,
      avgExitPrice: 0,
      clicked: false,
      cumQty: 0,
      readMoreClicked: false
    };
    this.readMoreClicked = this.readMoreClicked.bind(this);
    this.clicked = this.clicked.bind(this);
    this.getSlicData = this.getSlicData.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  updateWindowDimensions() {
    this.setState({
      width: window.innerWidth
    });
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateWindowDimensions);
    this.setState({
      clicked: this.props.clicked
    });
  }

  componentDidUpdate(prevProps) {
    if (!fast_deep_equal__WEBPACK_IMPORTED_MODULE_11___default()(this.props.slic, prevProps.slic)) {
      this.getSlicData();
    }
  }

  componentWillMount() {
    this.getSlicData();
    this.updateWindowDimensions();
  }

  async getSlicData() {
    this.state.data = this.props.slic;
    let calced = await Object(_calcTrades__WEBPACK_IMPORTED_MODULE_15__["calcTrades"])(this.props.slic);

    if (calced !== undefined) {
      this.setState({
        pnl: calced["pnl"],
        avgEntryPrice: calced["avgEntryPrice"],
        avgExitPrice: calced["avgExitPrice"],
        cumQty: calced["cumQty"]
      });

      if (this.props.clicked == true) {
        this.props.store.pnl = calced["pnl"];
      } else {
        this.props.store.addPnl(calced["pnl"]);
      }
    }
  }

  clicked(dat) {
    if (this.state.clicked == false) {
      this.props.store.setSingleTrade(dat);
      this.props.store.hasSingleTrade = true;
      this.setState({
        clicked: true
      });
    } else {
      this.props.store.hasSingleTrade = false;
      this.setState({
        clicked: false
      });
    }
  }

  readMoreClicked() {
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

  render() {
    if (this.state.clicked == false) {
      return __jsx(ContainDiv, {
        onClick: () => this.clicked(this.state.data)
      }, __jsx(NextToDiv, null, Object(_Helpers_Functions_js__WEBPACK_IMPORTED_MODULE_5__["formatDateMonthOnly"])(this.state.data[0].timestamp)), __jsx(NextToDiv, null, Object(_Helpers_Functions_js__WEBPACK_IMPORTED_MODULE_5__["formatDateMonthOnly"])(this.state.data[this.state.data.length - 1].timestamp)), __jsx(IsShort, {
        side: this.state.data[0].side,
        last: this.state.data[this.state.data.length - 1].orderType
      }), __jsx(NextToDiv, null, "$", this.state.avgEntryPrice.toFixed(1)), __jsx(NextToDiv, null, "$", this.state.avgExitPrice.toFixed(1)), __jsx(NextToDiv, null, this.state.cumQty), __jsx(NextToDiv, null, this.state.pnl.toFixed(4) + "xbt"));
    } else {
      if (this.props.store.isSingleNotes == false) {
        return __jsx(TotalDetails, null, __jsx(MoreBoxTall, null, __jsx(ContainDivClicked, {
          onClick: () => this.clicked(this.state.data)
        }, __jsx(NextToDiv, null, Object(_Helpers_Functions_js__WEBPACK_IMPORTED_MODULE_5__["formatDateMonthOnly"])(this.state.data[0].timestamp)), __jsx(NextToDiv, null, Object(_Helpers_Functions_js__WEBPACK_IMPORTED_MODULE_5__["formatDateMonthOnly"])(this.state.data[this.state.data.length - 1].timestamp)), __jsx(IsShort, {
          side: this.state.data[0].side,
          last: this.state.data[this.state.data.length - 1].orderType
        }), __jsx(NextToDiv, null, "$", this.state.avgEntryPrice.toFixed(1)), __jsx(NextToDiv, null, "$", this.state.avgExitPrice.toFixed(1)), __jsx(NextToDiv, null, this.state.cumQty), __jsx(NextToDiv, null, this.state.pnl.toFixed(4) + "xbt"))), __jsx(_Chart_index__WEBPACK_IMPORTED_MODULE_7__["default"], {
          onemin: this.props.onemin,
          fivemin: this.props.fivemin,
          onehour: this.props.onehour,
          oneday: this.props.oneday,
          trades: this.state.data
        }), __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_16__["ApolloConsumer"], null, client => __jsx(_Notes_TextArea__WEBPACK_IMPORTED_MODULE_13__["default"], {
          firstTrade: this.state.data[0],
          client: client
        })));
      } else {
        return __jsx(TotalDetails, null, __jsx(MoreBoxTall, null, __jsx(OrderExecution, {
          data: this.state.data
        })));
      }
    }
  }

}) || _class) || _class);

class IsShort extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  componentDidMount() {
    console.log(this.props.last);
  }

  render() {
    if (this.props.side == "Sell") {
      if (this.props.last.includes("Stop")) {
        return __jsx(NextToDiv, null, "Short");
      } else {
        return __jsx(NextToDiv, null, "Short");
      }
    } else {
      if (this.props.last.includes("Stop")) {
        return __jsx(NextToDiv, null, "Long");
      } else {
        return __jsx(NextToDiv, null, "Long");
      }
    }
  }

}

const OrderExecution = ({
  data
}) => {
  return __jsx(ExecContainer, null, __jsx(ContainDivBlack, null, __jsx(NextToDivBlackTitle, null, __jsx(TitleSpan, null, "Timestamp")), __jsx(NextToDivBlackTitle, null, __jsx(TitleSpan, null, "Side")), __jsx(NextToDivBlackTitle, null, __jsx(TitleSpan, null, "Order Type")), __jsx(NextToDivBlackTitle, null, __jsx(TitleSpan, null, "Price")), __jsx(NextToDivBlackTitle, null, __jsx(TitleSpan, null, "Order Qty")), __jsx(NextToDivBlackTitle, null, __jsx(TitleSpan, null, "Leaves Qty")), __jsx(NextToDivBlackTitle, null, __jsx(TitleSpan, null, "Commission"))), data.map(dat => {
    return __jsx(ContainDivBlack, null, __jsx(NextToDivBlack, null, Object(_Helpers_Functions_js__WEBPACK_IMPORTED_MODULE_5__["formatDateMonthOnly"])(dat.timestamp)), dat.execType == "Trade" ? __jsx(NextToDivBlack, null, dat.side) : __jsx(NextToDivBlack, null, dat.execType), __jsx(NextToDivBlack, null, dat.orderType), __jsx(NextToDivBlack, null, "$", dat.price.toString()), __jsx(NextToDivBlack, null, dat.orderQty), __jsx(NextToDivBlack, null, dat.leavesQty == "0" ? "" : dat.leavesQty), __jsx(NextToDivBlack, null, dat.execType == "Funding" ? "" : Object(_Helpers_Functions_js__WEBPACK_IMPORTED_MODULE_5__["calcCommission"])(dat.price, dat.side, dat.orderQty, dat.leavesQty, dat.orderType)));
  }));
};

const ContainDiv = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Trades__ContainDiv",
  componentId: "bmyhv8-0"
})(["width:100%;display:flex;flex-direction:row;height:47px;border-bottom:1px solid #f2f2f2;font-weight:400;&:hover{transition:none;background:#f8f8ff;cursor:pointer;}"]);
const ContainDivClicked = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Trades__ContainDivClicked",
  componentId: "bmyhv8-1"
})(["width:100%;display:flex;flex-direction:row;height:47px;transition:none;font-weight:400;border-bottom:1px solid #f2f2f2;border-radius:none;cursor:pointer;background:#f8f8ff;background:#ffffff;"]);
const ContainDivBlack = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Trades__ContainDivBlack",
  componentId: "bmyhv8-2"
})(["width:100%;display:flex;flex-direction:row;height:40px;background:#f8f8ff;border-bottom:1px solid #f2f2f2;"]);
const ContainDivHeader = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Trades__ContainDivHeader",
  componentId: "bmyhv8-3"
})(["width:100%;display:flex;flex-direction:row;height:38px;border-bottom:1px solid #d3d3d3;"]); // f2f2f2
// border-right: 1px solid #f2f2f2;

const NextToDiv = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Trades__NextToDiv",
  componentId: "bmyhv8-4"
})(["display:inline-block;width:30%;padding:8px;padding-top:12px;padding-left:12px;color:#000;font-weight:300;font-size:14px;@media (max-width:550px){font-size:13px;}"]);
const NextToDivBlack = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Trades__NextToDivBlack",
  componentId: "bmyhv8-5"
})(["display:inline-block;width:30%;padding:4px;padding-left:12px;font-size:14px;padding-top:9px;"]); // border-right: 1px solid #f2f2f2;

const NextToDivBlackTitle = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Trades__NextToDivBlackTitle",
  componentId: "bmyhv8-6"
})(["display:inline-block;width:30%;padding:4px;padding-left:14px;padding-top:9px;font-size:14px;"]);
const TitleSpan = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.span.withConfig({
  displayName: "Trades__TitleSpan",
  componentId: "bmyhv8-7"
})(["display:inline-block;border-bottom:1px dotted black;padding-bottom:0px;font-size:13px;font-weight:300;color:black;"]);
const NextToDivBlackTime = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Trades__NextToDivBlackTime",
  componentId: "bmyhv8-8"
})(["display:inline-block;width:30%;padding:4px;padding-left:12px;font-size:14px;padding-top:10px;@media (max-width:1200px){font-size:13px;}@media (max-width:663px){padding-top:0px !important;}"]);
const NextToDivHeader = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Trades__NextToDivHeader",
  componentId: "bmyhv8-9"
})(["display:inline-block;width:30%;color:#78838e;font-weight:600;display:inline-block;text-transform:uppercase;padding:10px;padding-left:12px;", " font-size:13px;"], _shared_helpers__WEBPACK_IMPORTED_MODULE_3__["smallFont"]);
const InnerPnlWin = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Trades__InnerPnlWin",
  componentId: "bmyhv8-10"
})(["background:black;margin-right:auto;padding:0 3px;max-width:80px;color:white;font-weight:600;"]);
const InnerPnlLoss = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Trades__InnerPnlLoss",
  componentId: "bmyhv8-11"
})(["background:red;margin-right:auto;padding:0 3px;border-radius:2px;max-width:80px;color:white;font-weight:600;"]);
const ReadMore = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Trades__ReadMore",
  componentId: "bmyhv8-12"
})(["position:absolute;bottom:0;left:0;width:100%;text-align:center;margin:0;padding:10px 0;background-image:-webkit-gradient( linear,left top,left bottom,color-stop(0,rgba(255,0,0,0)),color-stop(1,rgba(248,248,255,1)) );"]);
const ReadMoreTall = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Trades__ReadMoreTall",
  componentId: "bmyhv8-13"
})(["position:absolute;bottom:0;left:0;width:100%;text-align:center;margin:0;padding:10px 0;"]); // background-image: linear-gradient(to bottom, transparent, black);

const MoreBoxShort = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Trades__MoreBoxShort",
  componentId: "bmyhv8-14"
})(["max-height:300px;position:relative;overflow:hidden;"]);
const MoreBoxTall = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Trades__MoreBoxTall",
  componentId: "bmyhv8-15"
})(["max-height:none;position:relative;overflow:hidden;"]);
const ExecContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Trades__ExecContainer",
  componentId: "bmyhv8-16"
})(["max-height:none;position:relative;overflow:hidden;border:1px solid #f2f2f2;"]);
const TotalDetails = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Trades__TotalDetails",
  componentId: "bmyhv8-17"
})([""]); // border: 1px solid rgba(33, 37, 40, 0.7);

const ReadMoreInner = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Trades__ReadMoreInner",
  componentId: "bmyhv8-18"
})(["color:rgba(33,37,40,1);padding:0;margin:auto;width:30px;border-radius:2px;-webkit-transition-property:none;-moz-transition-property:none;-o-transition-property:none;transition-property:none;:hover{cursor:pointer;background-color:rgba(33,37,40,1);color:#fff;-webkit-transition-property:none;-moz-transition-property:none;-o-transition-property:none;transition-property:none;}font-size:20px;"]);

/***/ }),

/***/ "./components/Dashboard/Tades/calcTrades.js":
/*!**************************************************!*\
  !*** ./components/Dashboard/Tades/calcTrades.js ***!
  \**************************************************/
/*! exports provided: calcTrades */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcTrades", function() { return calcTrades; });
async function calcTrades(inputData) {
  // inputData = this.props.slic;
  if (inputData[0].side == "Buy" && inputData[0].execType == "Trade") {
    let avgBuyPrice = 0;
    let avgSellPrice = 0;
    let totBuyContracts = 0;
    let totSellContracts = 0;
    let buyNum = 0;
    let sellNum = 0;
    let totBuyContractsMult = 0;
    let totSellContractsMult = 0;
    let realQty = 0;
    let totCommission = 0;

    for (let i = 0; i < inputData.length; i++) {
      // realQty = inputData[i].orderQty - inputData[i].leavesQty;
      if (inputData[i].side == "Buy" && inputData[i].leavesQty == 0) {
        buyNum += 1;
        totBuyContracts += inputData[i].orderQty;
        totBuyContractsMult += inputData[i].orderQty * parseFloat(inputData[i].price);
      }

      if (inputData[i].side == "Sell" && inputData[i].leavesQty == 0) {
        sellNum += 1;
        totSellContracts += inputData[i].orderQty;
        totSellContractsMult += inputData[i].orderQty * parseFloat(inputData[i].price);
      }

      if (inputData[i].orderType == "Limit" && inputData[i].execType !== "Funding") {
        totCommission += realQty * 0.0025 / inputData[i].price;
      }

      if (inputData[i].orderType == "Market") {
        totCommission -= realQty * 0.0075 / inputData[i].price;
      }

      if (inputData[i].orderType.includes("Stop")) {
        totCommission -= realQty * 0.0075 / inputData[i].price;
      }

      if (i == inputData.length - 1) {
        avgBuyPrice = totBuyContractsMult / totBuyContracts;
        avgSellPrice = totSellContractsMult / totSellContracts;
        let avgExit;
        let avgEntry;

        if (avgBuyPrice != null) {
          avgEntry = avgBuyPrice;
        } else {
          avgEntry = 0;
        }

        if (avgSellPrice != null) {
          avgExit = avgSellPrice;
        } else {
          avgExit = 0;
        } // this.state.cumQty = totBuyContracts;


        let thePnl = (1 / avgBuyPrice - 1 / avgSellPrice) * totSellContracts;

        if (thePnl != null) {
          let myPnl = thePnl + totCommission;
          return new Promise(resolve => {
            let end = {};
            end["pnl"] = myPnl;
            end["avgEntryPrice"] = avgEntry;
            end["avgExitPrice"] = avgExit;
            end["cumQty"] = totBuyContracts;
            resolve(end);
          }); //   store.addPnl(myPnl);
        } else {
          return new Promise(resolve => {
            let end = {};
            end["pnl"] = 0;
            end["avgEntryPrice"] = avgEntry;
            end["avgExitPrice"] = avgExit;
            end["cumQty"] = totBuyContracts;
            resolve(end);
          });
        }
      }
    }
  }

  if (inputData[0].side == "Sell" && inputData[0].execType == "Trade") {
    let totBuyContracts = 0;
    let totSellContracts = 0;
    let buyNum = 0;
    let sellNum = 0;
    let totBuyContractsMult = 0;
    let totSellContractsMult = 0;
    let realQty = 0;
    let totCommission = 0;

    for (let i = 0; i < inputData.length; i++) {
      // realQty = inputData[i].orderQty - inputData[i].leavesQty;
      if (inputData[i].side == "Buy" && inputData[i].leavesQty == 0) {
        // totBuyPrice += parseFloat(inputData[i].price);
        buyNum += 1;
        totBuyContracts += inputData[i].orderQty;
        totBuyContractsMult += inputData[i].orderQty * parseFloat(inputData[i].price);

        if (inputData[0].orderQty == 40000) {
          console.log("BUY SIDE", inputData[i], realQty, totSellContracts, totBuyContracts, totSellContractsMult);
        }
      }

      if (inputData[i].side == "Sell" && inputData[i].leavesQty == 0) {
        sellNum += 1;

        if (i == 0) {
          let difference = inputData[i].orderQty + inputData[i].currentQty;
          let newRealQty = inputData[i].orderQty - difference;
          totSellContracts += newRealQty;
          totSellContractsMult += newRealQty * parseFloat(inputData[i].price);
        } else {
          totSellContracts += inputData[i].orderQty;
          totSellContractsMult += inputData[i].orderQty * parseFloat(inputData[i].price);
        }

        if (inputData[0].orderQty == 40000) {
          console.log("SELL SIDE", inputData[i], realQty, totSellContracts, totBuyContracts, totSellContractsMult);
        }
      }

      if (inputData[i].orderType == "Limit" && inputData[i].execType !== "Funding") {
        totCommission += realQty * 0.0025 / inputData[i].price;
      }

      if (inputData[i].orderType == "Market") {
        totCommission -= realQty * 0.0075 / inputData[i].price;
      }

      if (inputData[i].orderType.includes("Stop")) {
        totCommission -= realQty * 0.0075 / inputData[i].price;
      }

      if (i == inputData.length - 1) {
        let avgBuyPrice = totBuyContractsMult / totBuyContracts;
        let avgSellPrice = totSellContractsMult / totSellContracts;
        let pnl = (1 / avgBuyPrice - 1 / avgSellPrice) * totBuyContracts;

        if (inputData[0].orderQty == 40000) {
          console.log(pnl, avgBuyPrice, avgSellPrice, totBuyContracts);
        }

        let avgEntry;
        let avgExit;

        if (avgBuyPrice != null) {
          avgExit = avgBuyPrice;
        } else {
          avgExit = 0;
        }

        if (avgSellPrice != null) {
          avgEntry = avgSellPrice;
        } else {
          avgEntry = 0;
        }

        if (pnl != null) {
          let myPnl = pnl + totCommission;
          return new Promise(resolve => {
            let end = {};
            end["pnl"] = myPnl;
            end["avgEntryPrice"] = avgEntry;
            end["avgExitPrice"] = avgExit;
            end["cumQty"] = totSellContracts;

            if (inputData[0].orderQty == 40000) {
              console.log(end);
            }

            resolve(end);
          });
        } else {
          return new Promise(resolve => {
            let end = {};
            end["pnl"] = 0;
            end["avgEntryPrice"] = avgEntry;
            end["avgExitPrice"] = avgExit;
            end["cumQty"] = totSellContracts;
            resolve(end);
          });
        }
      }
    }
  }
}

/***/ }),

/***/ "./components/Dashboard/shared/helpers.js":
/*!************************************************!*\
  !*** ./components/Dashboard/shared/helpers.js ***!
  \************************************************/
/*! exports provided: getNewDat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNewDat", function() { return getNewDat; });
const getNewDat = async (oldDat, hashtags) => {
  let newTrades = [];
  let oldTrades = oldDat.fetchTradeHistory;

  for (let i = 0; i < oldTrades.length; i++) {
    let tradeHashtags = oldTrades[i].hashtags.split(",");
    let oldTrade = oldTrades[i];
    console.log(tradeHashtags);

    if (tradeHashtags[0] != "undefined") {
      for (let j = 0; j < tradeHashtags.length; j++) {
        for (let m = 0; m < hashtags.length; m++) {
          if (hashtags[m] == tradeHashtags[j]) {
            if (newTrades[0] == undefined) {
              newTrades.push(oldTrade);
            } else {
              newTrades.push(oldTrade);
            }
          }
        }
      }
    }

    if (i == oldTrades.length - 1) {
      console.log(newTrades, "FILTERED TRADES");
      return newTrades;
    }
  }
};

/***/ }),

/***/ "./components/Header/DashboardHeader.js":
/*!**********************************************!*\
  !*** ./components/Header/DashboardHeader.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../theme */ "./components/theme.js");
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Logo */ "./components/Header/Logo.js");
/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header.scss */ "./components/Header/header.scss");
/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_header_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Menu_Datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Menu/Datepicker */ "./components/Menu/Datepicker.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _shared_helpers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/helpers */ "./components/shared/helpers.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;













const Cookie = __webpack_require__(/*! js-cookie */ "js-cookie");

const Header = ({
  router
}) => {
  async function logout(client) {
    Cookie.remove("isAuth");
    Cookie.remove("qid");
    window.localStorage.removeItem("store");
    await client.mutate({
      mutation: graphql_tag__WEBPACK_IMPORTED_MODULE_9___default.a`
        mutation logout {
          logout
        }
      `
    });
    next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push("/");
  }

  return __jsx(styled_components__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
    theme: Object(_theme__WEBPACK_IMPORTED_MODULE_4__["default"])(false)
  }, __jsx(Wrapper, null, __jsx(_Logo__WEBPACK_IMPORTED_MODULE_5__["default"], null), __jsx(DatePickersWrap, null, __jsx(DatePickerWrap, null, __jsx(_Menu_Datepicker__WEBPACK_IMPORTED_MODULE_7__["default"], {
    set: true,
    start: true
  })), __jsx("div", {
    style: {
      color: "white",
      margin: "auto 0px"
    }
  }, "-"), __jsx(DatePickerWrap, null, __jsx(_Menu_Datepicker__WEBPACK_IMPORTED_MODULE_7__["default"], {
    set: true,
    start: false
  }))), __jsx(LinksWrap, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    prefetch: true,
    href: "/settings"
  }, __jsx(StyledLink, {
    className: router.pathname === "/settings" ? "is-active" : ""
  }, "settings")), __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_8__["ApolloConsumer"], null, client => __jsx(StyledLink, {
    onClick: () => logout(client)
  }, "logout")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Header));
const LogoWrap = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "DashboardHeader__LogoWrap",
  componentId: "sc-1szqfd9-0"
})([""]);
const TempDiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "DashboardHeader__TempDiv",
  componentId: "sc-1szqfd9-1"
})(["margin:auto;"]);
const LinksWrap = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "DashboardHeader__LinksWrap",
  componentId: "sc-1szqfd9-2"
})(["margin-right:0;margin-left:auto;display:flex;flex-direction:row;"]);
const DatePickersWrap = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "DashboardHeader__DatePickersWrap",
  componentId: "sc-1szqfd9-3"
})(["margin-left:20px;margin-right:auto;display:flex;flex-direction:row;"]);
const DatePickerWrap = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "DashboardHeader__DatePickerWrap",
  componentId: "sc-1szqfd9-4"
})(["margin:auto 10px;"]);
const StyledLink = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "DashboardHeader__StyledLink",
  componentId: "sc-1szqfd9-5"
})(["", ";", ";margin:0;color:", ";color:#fff;text-transform:capitalize;position:relative;cursor:pointer;::after{", ";content:\"\";position:absolute;left:0;right:0;bottom:0;opacity:0;border-bottom:1px solid ", ";}:hover{opacity:1;color:", ";}:hover::after{opacity:1;border-bottom:1px solid ", ";}&.active::after{left:0;right:0;bottom:0;border-bottom:3px solid ", ";}font-weight:700;letter-spacing:0.05em;font-size:14px;margin-left:auto;"], _shared_helpers__WEBPACK_IMPORTED_MODULE_10__["headerItem"], _shared_helpers__WEBPACK_IMPORTED_MODULE_10__["link"], props => props.theme.mutedText, Object(_shared_helpers__WEBPACK_IMPORTED_MODULE_10__["transition"])("opacity", "border-bottom-width"), props => props.theme.accent, props => props.theme.accent, props => props.theme.accent, props => props.theme.accent);
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.header.withConfig({
  displayName: "DashboardHeader__Wrapper",
  componentId: "sc-1szqfd9-6"
})(["position:sticky;z-index:10;top:0;display:flex;align-items:stretch;border-bottom:2px solid #eee;height:55px;padding:0 0vw;font-weight:700;background-color:", ";user-select:none;background-color:#212527;@media (max-width:425px){margin-bottom:16px;height:40px;}@media (max-width:768px){padding:0;}"], props => props.theme.foreground);

/***/ }),

/***/ "./components/Header/Logo.js":
/*!***********************************!*\
  !*** ./components/Header/Logo.js ***!
  \***********************************/
/*! exports provided: HeaderLogoDark, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderLogoDark", function() { return HeaderLogoDark; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/helpers */ "./components/shared/helpers.js");
var _jsxFileName = "/Users/manx/projects-2/bitsjournal/frontend/components/Header/Logo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const HeaderLogo = () => __jsx(Logo, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 3
  }
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  prefetch: true,
  href: "/",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }
}, __jsx("span", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 7
  }
}, "\u20BFitsjournal")));

const HeaderLogoDark = () => __jsx(LogoDark, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 3
  }
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  prefetch: true,
  href: "/",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }
}, __jsx("span", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 7
  }
}, "\u20BFitsjournal")));
/* harmony default export */ __webpack_exports__["default"] = (HeaderLogo);
const Logo = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Logo",
  componentId: "sc-195qc4m-0"
})(["", " margin-right:0;font-size:26px;font-weight:500;color:", ";text-decoration:none;color:#fff;@media (max-width:425px){padding:0 8px 0 16px;font-size:19px;}"], _shared_helpers__WEBPACK_IMPORTED_MODULE_3__["headerItem"], props => props.theme.normalText);
const LogoDark = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Logo__LogoDark",
  componentId: "sc-195qc4m-1"
})(["", " margin-right:0;font-size:26px;font-weight:500;color:", ";text-decoration:none;color:", ";@media (max-width:425px){padding:0 8px 0 16px;font-size:19px;}"], _shared_helpers__WEBPACK_IMPORTED_MODULE_3__["headerItem"], props => props.theme.normalText, props => props.theme.mutedText); // display: flex;
// align-items: center;
// flex-shrink: 0;
// padding: 0 16px;
// @media (max-width: 425px) {
//   padding: 0 8px;
// }

/***/ }),

/***/ "./components/Header/header.scss":
/*!***************************************!*\
  !*** ./components/Header/header.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Helpers/Functions.js":
/*!*****************************************!*\
  !*** ./components/Helpers/Functions.js ***!
  \*****************************************/
/*! exports provided: formatDateMonthOnly, formatDateShort, formatDateShortWithHour, getStateDate, makeDateHrs, makeDateDays, calcCommission */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDateMonthOnly", function() { return formatDateMonthOnly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDateShort", function() { return formatDateShort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDateShortWithHour", function() { return formatDateShortWithHour; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStateDate", function() { return getStateDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeDateHrs", function() { return makeDateHrs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeDateDays", function() { return makeDateDays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcCommission", function() { return calcCommission; });
// export function formatDateMonthOnly(date) {
//   var monthNames = [
//     "Jan",
//     "Feb",
//     "Mar",
//     "Apr",
//     "May",
//     "Jun",
//     "Jul",
//     "Aug",
//     "Sept",
//     "Oct",
//     "Nov",
//     "Dec",
//   ];
//   let utcDate = date;
//   let theDate = new Date(utcDate);
//   var day = theDate.getDate();
//   var hours = addZeroBefore(theDate.getHours());
//   var mins = addZeroBefore(theDate.getMinutes());
//   var monthIndex = addZeroBefore(theDate.getMonth());
//   var year = addZeroBefore(theDate.getFullYear());
//   return (
//     day + "-" + monthIndex.toString() + "-" + year + " " + hours + ":" + mins
//   );
// }
function formatDateMonthOnly(date) {
  var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
  let utcDate = date;
  let theDate = new Date(utcDate);
  var day = theDate.getDate();
  var hours = addZeroBefore(theDate.getHours());
  var mins = addZeroBefore(theDate.getMinutes());
  var monthIndex = theDate.getMonth(); // var monthIndex = addZeroBefore(theDate.getMonth());

  var year = theDate.getFullYear();
  return day + " " + monthNames[monthIndex] + ", " + hours + ":" + mins;
}
function formatDateShort(date) {
  let utcDate = date;
  let theDate = new Date(utcDate);
  var day = addZeroBefore(theDate.getDate());
  var hours = addZeroBefore(theDate.getHours());
  var mins = addZeroBefore(theDate.getMinutes());
  var monthIndex = addZeroBefore(theDate.getMonth());
  var year = theDate.getFullYear();
  return monthIndex.toString() + "/" + day.toString();
}
function formatDateShortWithHour(date) {
  let utcDate = date;
  let theDate = new Date(utcDate);
  var day = addZeroBefore(theDate.getDate());
  var hours = addZeroBefore(theDate.getHours());
  var mins = addZeroBefore(theDate.getMinutes());
  var monthIndex = addZeroBefore(theDate.getMonth());
  var year = theDate.getFullYear();
  return monthIndex.toString() + "/" + day.toString() + " " + hours.toString() + ":" + mins.toString();
}

function addZeroBefore(n) {
  return (n < 10 ? "0" : "") + n;
}

function getStateDate(input) {
  if (input == "Today") {
    let dates = {};
    dates.end = makeDateHrs(0);
    dates.start = makeDateHrs(24);
    console.log("is today");
    return dates;
  }

  if (input == "Yesterday") {
    let dates = {};
    dates.end = makeDateHrs(1);
    dates.start = makeDateDays(2);
    console.log("is yesterday");
    return dates;
  }

  if (input == "This Week") {
    let dates = {};
    dates.end = makeDateHrs(0);
    dates.start = makeDateDays(7);
    console.log("is this week");
    return dates;
  }

  if (input == "This Month") {
    let dates = {};
    dates.end = makeDateHrs(0);
    dates.start = makeDateDays(30);
    console.log("is this month");
    return dates;
  }
}
function makeDateHrs(hrsBack) {
  if (hrsBack == 0) {
    let dt = new Date(new Date().toUTCString());
    dt = dt.toISOString();
    return dt;
  } else {
    let dt = new Date(new Date().toUTCString());
    dt.setHours(dt.getHours() - hrsBack);
    dt = dt.toISOString();
    return dt;
  }
}
function makeDateDays(num) {
  let dt = new Date(new Date().toUTCString());
  dt.setDate(dt.getDate() - num);
  dt = dt.toISOString();
  console.log("getting days back");
  return dt;
}
function calcCommission(price, side, qty, leavesQty, orderType) {
  let realQty = qty - leavesQty;
  let commission;

  if (orderType == "Market") {
    commission = realQty * 0.0075 / price;
    commission = commission * -1;
  }

  if (orderType.includes("Stop")) {
    commission = realQty * 0.0075 / price;
    commission = commission * -1;
  }

  if (orderType == "Limit") {
    commission = realQty * 0.0025 / price;
  }

  return commission.toFixed(5);
}

/***/ }),

/***/ "./components/Menu/768px/Menu.js":
/*!***************************************!*\
  !*** ./components/Menu/768px/Menu.js ***!
  \***************************************/
/*! exports provided: SymbolChooser768, Pnl768, default, SetSymbol */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SymbolChooser768", function() { return SymbolChooser768; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pnl768", function() { return Pnl768; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetSymbol", function() { return SetSymbol; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../theme */ "./components/theme.js");
/* harmony import */ var _CategoryList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CategoryList */ "./components/Menu/CategoryList.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Header */ "./components/Menu/Header.js");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mobx-react */ "mobx-react");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mobx-react-lite */ "mobx-react-lite");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Dashboard_Tades_Trades__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Dashboard/Tades/Trades */ "./components/Dashboard/Tades/Trades.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _shared_helpers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/helpers */ "./components/shared/helpers.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












const SymbolChooser768 = Object(mobx_react__WEBPACK_IMPORTED_MODULE_5__["inject"])("store")(Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_6__["observer"])(({
  store
}) => {
  const {
    0: dropdown,
    1: setDropdown
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const showDropdown = () => {
    if (dropdown == false) {
      setDropdown(true);
    } else {
      setDropdown(false);
    }
  };

  const clicked = value => {
    store.setSymbol(value);
    store.changeHasTempTags();
    setDropdown(false);
  };

  return __jsx(LapperChooser, {
    onClick: () => {
      showDropdown();
    }
  }, __jsx(SetSymbol, {
    style: {
      marginLeft: "2px"
    }
  }, __jsx(InnerSymbolChooser, null, __jsx("div", null, store.symbol), dropdown == true ? __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faCaretUp"],
    style: {
      transition: "none",
      marginRight: "3px",
      marginLeft: "3px",
      marginTop: "2px"
    }
  }) : __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faCaretDown"],
    style: {
      transition: "none",
      marginRight: "3px",
      marginLeft: "3px",
      marginTop: "2px"
    }
  }))), dropdown == true ? __jsx(DropdownListContainer, null, __jsx(DropdownListItem, {
    onClick: () => clicked("XBTUSD")
  }, "XBTUSD"), __jsx(DropdownListItem, {
    onClick: () => clicked("XBTU20")
  }, "XBTU20"), __jsx(DropdownListItem, {
    onClick: () => clicked("XBTM20")
  }, "XBTM20")) : null);
}));
const Pnl768 = Object(mobx_react__WEBPACK_IMPORTED_MODULE_5__["inject"])("store")(Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_6__["observer"])(({
  store
}) => {
  if (store.pnl >= 0) {
    return __jsx(Lapper2, {
      style: {
        marginRight: "2px"
      }
    }, __jsx(InnerLapper, {
      style: {
        padding: "4px"
      }
    }, store.pnl.toFixed(4) + "xbt"));
  } else {
    return __jsx(Lapper3, {
      style: {
        marginRight: "2px"
      }
    }, __jsx(InnerLapper, {
      style: {
        padding: "4px"
      }
    }, store.pnl.toFixed(4) + "xbt"));
  }
}));
const Sidebar = Object(mobx_react__WEBPACK_IMPORTED_MODULE_5__["inject"])("store")(Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_6__["observer"])(({
  store
}) => {
  const {
    0: dropdown,
    1: setDropdown
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const clicked = value => {
    store.setSymbol(value);
    store.changeHasTempTags();
    setDropdown(false);
  };

  const showDropdown = () => {
    if (dropdown == false) {
      setDropdown(true);
    } else {
      setDropdown(false);
    }
  };

  return __jsx(styled_components__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
    theme: Object(_theme__WEBPACK_IMPORTED_MODULE_2__["default"])(false)
  }, __jsx(LapperContainer, null, __jsx(Lapper4, {
    onClick: () => {
      showDropdown();
    }
  }, __jsx(SetSymbol, null, store.symbol, dropdown == true ? __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faCaretUp"],
    style: {
      transition: "none",
      marginRight: "4px",
      marginLeft: "3px"
    }
  }) : __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faCaretDown"],
    style: {
      transition: "none",
      marginRight: "4px",
      marginLeft: "3px"
    }
  })), dropdown == true ? __jsx(DropdownListContainer, null, __jsx(DropdownListItem, {
    onClick: () => clicked("XBTUSD")
  }, "XBTUSD"), __jsx(DropdownListItem, {
    onClick: () => clicked("XBTU20")
  }, "XBTU20"), __jsx(DropdownListItem, {
    onClick: () => clicked("XBTM20")
  }, "XBTM20")) : null), __jsx(Lapper, null, __jsx(_CategoryList__WEBPACK_IMPORTED_MODULE_3__["default"], null)), store.pnl >= 0 ? __jsx(Lapper2, null, __jsx(InnerLapper, null, store.pnl.toFixed(4) + "xbt")) : __jsx(Lapper3, null, __jsx(InnerLapper, null, store.pnl.toFixed(4) + "xbt"))));
}));
/* harmony default export */ __webpack_exports__["default"] = (Sidebar);
const LapperContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Menu__LapperContainer",
  componentId: "moll33-0"
})(["display:flex;flex-direction:column;margin-left:24px;"]);
const InnerSymbolChooser = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Menu__InnerSymbolChooser",
  componentId: "moll33-1"
})(["margin:auto;width:65px;display:flex;flex-direction:row;padding-top:4px;"]);
const Lapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.aside.withConfig({
  displayName: "Menu__Lapper",
  componentId: "moll33-2"
})(["display:flex;flex-direction:column;flex-basis:240px;border-radius:2px;background-color:", ";background-color:#212529;margin-bottom:10px;@media (max-width:768px){display:none;}"], props => props.theme.foreground);
const InnerLapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Menu__InnerLapper",
  componentId: "moll33-3"
})(["color:white;text-align:center;margin:auto;"]);
const Lapper2 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.aside.withConfig({
  displayName: "Menu__Lapper2",
  componentId: "moll33-4"
})(["border-radius:2px;background-color:", ";background-color:green;margin-left:0;margin-right:auto;margin-top:0;margin-bottom:0;width:100%;"], props => props.theme.foreground);
const LapperChooser = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.aside.withConfig({
  displayName: "Menu__LapperChooser",
  componentId: "moll33-5"
})(["border-radius:2px;background-color:", ";margin-left:0;margin-right:auto;margin-top:0;margin-bottom:0;width:100%;"], props => props.theme.foreground);
const Lapper3 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.aside.withConfig({
  displayName: "Menu__Lapper3",
  componentId: "moll33-6"
})(["border-radius:2px;background-color:", ";background-color:red;margin-left:0;margin-right:auto;width:100%;"], props => props.theme.foreground);
const Lapper4 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.aside.withConfig({
  displayName: "Menu__Lapper4",
  componentId: "moll33-7"
})(["display:flex;flex-direction:column;border-radius:2px;background-color:", ";background-color:#212529;margin-bottom:10px;@media (max-width:768px){display:none;}"], props => props.theme.foreground);
const SetSymbol = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Menu__SetSymbol",
  componentId: "moll33-8"
})(["font-weight:500;font-size:14px;", " color:#fff;background-color:#212527;height:100%;:hover{cursor:pointer;}"], _shared_helpers__WEBPACK_IMPORTED_MODULE_10__["wideFont"]);
const DropdownContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Menu__DropdownContainer",
  componentId: "moll33-9"
})(["height:100px;"]);
const DropdownListContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.ul.withConfig({
  displayName: "Menu__DropdownListContainer",
  componentId: "moll33-10"
})(["list-style-type:none;position:absolute;margin-left:-8px;border-radius:2px;background-color:#212527;"]);
const DropdownListItem = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.li.withConfig({
  displayName: "Menu__DropdownListItem",
  componentId: "moll33-11"
})(["text-align:center;font-weight:500;font-size:14px;color:#fff;background-color:#212529;padding:2px 15px;margin:4px 0;", ":hover{cursor:pointer;color:#000;background-color:#fff;}"], _shared_helpers__WEBPACK_IMPORTED_MODULE_10__["wideFont"]);

/***/ }),

/***/ "./components/Menu/CategoryList.js":
/*!*****************************************!*\
  !*** ./components/Menu/CategoryList.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react */ "mobx-react");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mobx-react-lite */ "mobx-react-lite");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/helpers */ "./components/shared/helpers.js");
/* harmony import */ var _Datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Datepicker */ "./components/Menu/Datepicker.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






const SidebarCategoryList = Object(mobx_react__WEBPACK_IMPORTED_MODULE_2__["inject"])("store")(Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__["observer"])(({
  store
}) => {
  const {
    0: customClicked,
    1: setCustomClicked
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  function handleClick(value) {
    store.resetPnl();
    store.changeDate(value);
    console.log(store);
  }

  function handleCustomClicked() {
    if (customClicked == true) {
      setCustomClicked(false);
    } else {
      setCustomClicked(true);
    }
  }

  return __jsx("div", null, __jsx(CategoryList, null, store.date == "Today" && customClicked == false ? __jsx(ItemActive, {
    onClick: () => handleClick("Today")
  }, "Today") : __jsx(Item, {
    onClick: () => handleClick("Today")
  }, "Today"), store.date == "Yesterday" && customClicked == false ? __jsx(ItemActive, {
    onClick: () => handleClick("Yesterday")
  }, "Yesterday") : __jsx(Item, {
    onClick: () => handleClick("Yesterday")
  }, "Yesterday"), store.date == "This Week" && customClicked == false ? __jsx(ItemActive, {
    onClick: () => handleClick("This Week")
  }, "This Week") : __jsx(Item, {
    onClick: () => handleClick("This Week")
  }, "This Week"), store.date == "This Month" && customClicked == false ? __jsx(ItemActive, {
    onClick: () => handleClick("This Month")
  }, "This Month") : __jsx(Item, {
    onClick: () => handleClick("This Month")
  }, "This Month"), customClicked == true || store.date == "Custom" ? __jsx(ItemActive, {
    onClick: () => handleCustomClicked()
  }, "Custom") : __jsx(Item, {
    onClick: () => handleCustomClicked()
  }, "Custom")), customClicked ? __jsx(Popup, null) : null);
}));

const Popup = () => {
  const {
    0: entered,
    1: setEntered
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  return __jsx(PopupTop, null, __jsx(PopContain, null, __jsx(Row1, null, __jsx(PopLabel, null, "start:"), __jsx(_Datepicker__WEBPACK_IMPORTED_MODULE_5__["default"], {
    start: true,
    set: entered
  })), __jsx(Row1, null, __jsx(PopLabel, null, "end:"), __jsx(_Datepicker__WEBPACK_IMPORTED_MODULE_5__["default"], {
    start: false,
    set: entered
  })), __jsx(PopEnter, {
    onClick: () => setEntered(true)
  }, "Set Date")));
};

/* harmony default export */ __webpack_exports__["default"] = (SidebarCategoryList);
const Row1 = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "CategoryList__Row1",
  componentId: "k2se5c-0"
})(["margin-bottom:5px;"]);
const PopContain = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "CategoryList__PopContain",
  componentId: "k2se5c-1"
})(["margin:5px;"]);
const PopLabel = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "CategoryList__PopLabel",
  componentId: "k2se5c-2"
})(["color:#fff;"]);
const PopEnter = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "CategoryList__PopEnter",
  componentId: "k2se5c-3"
})(["margin-top:5px;background:#fff;padding:2px;border-radius:1px;"]);
const PopupTop = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "CategoryList__PopupTop",
  componentId: "k2se5c-4"
})(["position:absolute;background:#000;z-index:1;margin:5px;padding:2px;border-radius:2px;"]);
const PopupItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "CategoryList__PopupItem",
  componentId: "k2se5c-5"
})(["position:relative;display:inline-block;cursor:pointer;"]);
const CategoryList = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.nav.withConfig({
  displayName: "CategoryList",
  componentId: "k2se5c-6"
})(["display:flex;flex-direction:column;"]);
const Item = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "CategoryList__Item",
  componentId: "k2se5c-7"
})(["padding:12px;font-size:15px;text-decoration:none;color:", ";color:white;::after{left:-1px;top:0;bottom:0;border-left:3px solid ", ";}&:hover{background-color:#fff;color:#212529;cursor:pointer;}"], props => props.theme.normalText, props => props.theme.accent);
const ItemActive = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "CategoryList__ItemActive",
  componentId: "k2se5c-8"
})(["padding:12px;font-size:15px;font-weight:300;text-decoration:none;color:", ";color:white;::after{left:-1px;top:0;bottom:0;border-left:3px solid ", ";}background-color:#fff;color:#212529;cursor:pointer;"], props => props.theme.normalText, props => props.theme.accent);

/***/ }),

/***/ "./components/Menu/Datepicker.js":
/*!***************************************!*\
  !*** ./components/Menu/Datepicker.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Example; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-datepicker */ "react-datepicker");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react */ "mobx-react");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-datepicker/dist/react-datepicker.css */ "./node_modules/react-datepicker/dist/react-datepicker.css");
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _datepicker_additional_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./datepicker-additional.css */ "./components/Menu/datepicker-additional.css");
/* harmony import */ var _datepicker_additional_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_datepicker_additional_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mobx */ "mobx");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_5__);
var _dec, _class, _temp;

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






let Example = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_2__["inject"])(["store"]), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_2__["observer"])(_class = (_temp = class Example extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    this.handleChange = date => {
      this.setState({
        date: date
      });
      console.log(date, "THIS IS DATE");
    };

    this.state = {
      date: new Date()
    };
  }

  componentWillMount() {}

  componentDidMount() {
    this.dateReaction = Object(mobx__WEBPACK_IMPORTED_MODULE_5__["reaction"])(() => this.props.store.startDate, (notifications, reaction) => {
      if (this.props.store.startDate !== null) {
        if (this.props.start == true) {
          this.setState({
            date: new Date(this.props.store.startDate)
          });
        } else {
          this.setState({
            date: new Date(this.props.store.endDate)
          });
        }
      }
    });
  }

  componentDidUpdate(prevProps) {
    console.log("just updated");

    if (this.props.set == true) {
      console.log("not equal");

      if (this.props.start == true) {
        console.log("was true");
        let firstDate = this.state.date.toISOString();
        let multiDate = firstDate.split("T");
        this.props.store.startDate = multiDate[0] + "T00:00:00.000Z";
        this.props.store.date = "Custom";
      }

      if (this.props.start == false) {
        console.log("was false");
        let firstDate = this.state.date.toISOString();
        let multiDate = firstDate.split("T");
        this.props.store.endDate = multiDate[0] + "T24:00:00.000Z";
        console.log(this.props.store.endDate);
        this.props.store.date = "Custom";
      }
    }
  }

  render() {
    return __jsx(react_datepicker__WEBPACK_IMPORTED_MODULE_1___default.a, {
      selected: this.state.date,
      onChange: this.handleChange
    });
  }

}, _temp)) || _class) || _class);


/***/ }),

/***/ "./components/Menu/Header.js":
/*!***********************************!*\
  !*** ./components/Menu/Header.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/helpers */ "./components/shared/helpers.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const SidebarCategoryListHeader = () => __jsx(Header, null, "Change Date");

/* harmony default export */ __webpack_exports__["default"] = (SidebarCategoryListHeader);
const Header = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span.withConfig({
  displayName: "Header",
  componentId: "sc-1ydou6k-0"
})(["", " font-weight:600;display:block;padding:12px;text-align:center;color:", ";color:white;"], _shared_helpers__WEBPACK_IMPORTED_MODULE_2__["wideFont"], props => props.theme.mutedText);

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../theme */ "./components/theme.js");
/* harmony import */ var _CategoryList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CategoryList */ "./components/Menu/CategoryList.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Header */ "./components/Menu/Header.js");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mobx-react */ "mobx-react");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mobx-react-lite */ "mobx-react-lite");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Dashboard_Tades_Trades__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Dashboard/Tades/Trades */ "./components/Dashboard/Tades/Trades.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _shared_helpers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/helpers */ "./components/shared/helpers.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












const SymbolChooser = Object(mobx_react__WEBPACK_IMPORTED_MODULE_5__["inject"])("store")(Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_6__["observer"])(({
  store
}) => {
  const {
    0: dropdown,
    1: setDropdown
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const showDropdown = () => {
    if (dropdown == false) {
      setDropdown(true);
    } else {
      setDropdown(false);
    }
  };

  const clicked = value => {
    store.setSymbol(value);
    store.changeHasTempTags();
    setDropdown(false);
  };

  return __jsx(Lapper2, {
    onClick: () => {
      showDropdown();
    }
  }, __jsx(SetSymbol, null, store.symbol, dropdown == true ? __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faCaretUp"],
    style: {
      transition: "none",
      marginRight: "3px",
      marginLeft: "3px"
    }
  }) : __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faCaretDown"],
    style: {
      transition: "none",
      marginRight: "3px",
      marginLeft: "3px"
    }
  })), dropdown == true ? __jsx(DropdownListContainer, null, __jsx(DropdownListItem, {
    onClick: () => clicked("XBTUSD")
  }, "XBTUSD"), __jsx(DropdownListItem, {
    onClick: () => clicked("XBTU20")
  }, "XBTU20"), __jsx(DropdownListItem, {
    onClick: () => clicked("XBTM20")
  }, "XBTM20")) : null);
}));
const Pnl = Object(mobx_react__WEBPACK_IMPORTED_MODULE_5__["inject"])("store")(Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_6__["observer"])(({
  store
}) => {
  if (store.pnl >= 0) {
    return __jsx(Lapper2, null, __jsx(InnerLapper, {
      style: {
        padding: "4px"
      }
    }, store.pnl.toFixed(4) + "xbt"));
  } else {
    return __jsx(Lapper3, null, __jsx(InnerLapper, {
      style: {
        padding: "4px"
      }
    }, store.pnl.toFixed(4) + "xbt"));
  }
}));
const Sidebar = Object(mobx_react__WEBPACK_IMPORTED_MODULE_5__["inject"])("store")(Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_6__["observer"])(({
  store
}) => {
  const {
    0: dropdown,
    1: setDropdown
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const clicked = value => {
    store.setSymbol(value);
    store.changeHasTempTags();
    setDropdown(false);
  };

  const showDropdown = () => {
    if (dropdown == false) {
      setDropdown(true);
    } else {
      setDropdown(false);
    }
  };

  return __jsx(styled_components__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
    theme: Object(_theme__WEBPACK_IMPORTED_MODULE_2__["default"])(false)
  }, __jsx(LapperContainer, null, __jsx(Lapper4, {
    onClick: () => {
      showDropdown();
    }
  }, __jsx(SetSymbol, null, store.symbol, dropdown == true ? __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faCaretUp"],
    style: {
      transition: "none",
      marginRight: "4px",
      marginLeft: "3px"
    }
  }) : __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faCaretDown"],
    style: {
      transition: "none",
      marginRight: "4px",
      marginLeft: "3px"
    }
  })), dropdown == true ? __jsx(DropdownListContainer, null, __jsx(DropdownListItem, {
    onClick: () => clicked("XBTUSD")
  }, "XBTUSD"), __jsx(DropdownListItem, {
    onClick: () => clicked("XBTU20")
  }, "XBTU20"), __jsx(DropdownListItem, {
    onClick: () => clicked("XBTM20")
  }, "XBTM20")) : null), __jsx(Lapper, null, __jsx(_CategoryList__WEBPACK_IMPORTED_MODULE_3__["default"], null)), store.pnl >= 0 ? __jsx(Lapper2, null, __jsx(InnerLapper, null, store.pnl.toFixed(4) + "xbt")) : __jsx(Lapper3, null, __jsx(InnerLapper, null, store.pnl.toFixed(4) + "xbt"))));
}));
/* harmony default export */ __webpack_exports__["default"] = (Sidebar);
const LapperContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Menu__LapperContainer",
  componentId: "sc-7pnj6a-0"
})(["display:flex;flex-direction:column;margin-left:24px;"]);
const Lapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.aside.withConfig({
  displayName: "Menu__Lapper",
  componentId: "sc-7pnj6a-1"
})(["display:flex;flex-direction:column;flex-basis:240px;border-radius:2px;background-color:", ";background-color:#212529;margin-bottom:10px;@media (max-width:768px){display:none;}"], props => props.theme.foreground);
const InnerLapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Menu__InnerLapper",
  componentId: "sc-7pnj6a-2"
})(["color:white;text-align:center;margin:auto;"]);
const Lapper2 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.aside.withConfig({
  displayName: "Menu__Lapper2",
  componentId: "sc-7pnj6a-3"
})(["border-radius:2px;background-color:", ";background-color:green;margin:auto;margin-top:0;margin-bottom:0;"], props => props.theme.foreground);
const Lapper3 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.aside.withConfig({
  displayName: "Menu__Lapper3",
  componentId: "sc-7pnj6a-4"
})(["border-radius:2px;background-color:", ";background-color:red;margin:auto;"], props => props.theme.foreground);
const Lapper4 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.aside.withConfig({
  displayName: "Menu__Lapper4",
  componentId: "sc-7pnj6a-5"
})(["display:flex;flex-direction:column;border-radius:2px;background-color:", ";background-color:#212529;margin-bottom:10px;@media (max-width:768px){display:none;}"], props => props.theme.foreground);
const SetSymbol = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Menu__SetSymbol",
  componentId: "sc-7pnj6a-6"
})(["font-weight:500;font-size:14px;", " color:#fff;background-color:#212527;:hover{cursor:pointer;}"], _shared_helpers__WEBPACK_IMPORTED_MODULE_10__["wideFont"]);
const DropdownContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Menu__DropdownContainer",
  componentId: "sc-7pnj6a-7"
})(["height:100px;"]);
const DropdownListContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.ul.withConfig({
  displayName: "Menu__DropdownListContainer",
  componentId: "sc-7pnj6a-8"
})(["list-style-type:none;position:absolute;margin-left:-8px;border-radius:2px;background-color:#212527;"]);
const DropdownListItem = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.li.withConfig({
  displayName: "Menu__DropdownListItem",
  componentId: "sc-7pnj6a-9"
})(["text-align:center;font-weight:500;font-size:14px;color:#fff;background-color:#212529;padding:2px 15px;margin:4px 0;", ":hover{cursor:pointer;color:#000;background-color:#fff;}"], _shared_helpers__WEBPACK_IMPORTED_MODULE_10__["wideFont"]);

/***/ }),

/***/ "./components/Menu/datepicker-additional.css":
/*!***************************************************!*\
  !*** ./components/Menu/datepicker-additional.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/form/FormWrapper.js":
/*!****************************************!*\
  !*** ./components/form/FormWrapper.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const FormWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "FormWrapper",
  componentId: "sc-15qkhyq-0"
})(["position:relative;overflow:hidden;margin:0 auto;border:1px solid ", ";border-radius:2px;width:375px;padding:24px;background-color:", ";@media (max-width:768px){padding:16px;}@media (max-width:", "){border-radius:0;border-left:none;border-right:none;}"], props => props.theme.border, props => props.theme.foreground, props => props.wide ? "600px" : "375px");
/* harmony default export */ __webpack_exports__["default"] = (FormWrapper); // max-width: ${props => (props.wide ? "600px" : "375px")};

/***/ }),

/***/ "./components/form/Input.js":
/*!**********************************!*\
  !*** ./components/form/Input.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
 // import { transition } from '../helpers';
// ${transition};

const Input = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.input.withConfig({
  displayName: "Input",
  componentId: "sc-1gcscia-0"
})(["--border:", ";--shadow:", ";display:block;", ";border-radius:3px;width:100%;padding:8px;background-color:", ";font-size:15px;color:", ";appearance:none;outline:none;resize:vertical;:hover,:focus{border:1px solid var(--border);}:focus{box-shadow:0 0 0 2px var(--shadow);}"], props => props.error ? props.theme.error : props.theme.accent, props => props.error ? props.theme.error + "4d" : props.theme.accent + "4d", props => props.error ? `
    border: 1px solid var(--border)
    ` : `
    border: 1px solid ${props.theme.border}
  `, props => props.theme.inputBackground, props => props.theme.normalText);
/* harmony default export */ __webpack_exports__["default"] = (Input);

/***/ }),

/***/ "./components/form/Label.js":
/*!**********************************!*\
  !*** ./components/form/Label.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/helpers */ "./components/shared/helpers.js");


const Label = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.label.withConfig({
  displayName: "Label",
  componentId: "sc-1n443xe-0"
})(["", ";display:block;margin-bottom:8px;color:", ";"], _shared_helpers__WEBPACK_IMPORTED_MODULE_1__["smallFont"], props => props.theme.mutedText);
/* harmony default export */ __webpack_exports__["default"] = (Label);

/***/ }),

/***/ "./components/shared/Button.js":
/*!*************************************!*\
  !*** ./components/shared/Button.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ "./components/shared/helpers.js");


const Button = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "Button",
  componentId: "sc-1yqwkyz-0"
})(["", ";", ";border:none;border-radius:3px;padding:8px 24px;background-color:", ";cursor:pointer;color:#ffffff;outline:none;:hover{filter:brightness(110%);}:active{filter:brightness(90%);}:focus{box-shadow:0 0 0 2px ", ";}"], Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["transition"])("filter", "box-shadow"), _helpers__WEBPACK_IMPORTED_MODULE_1__["wideFont"], props => props.theme.accent, props => props.theme.accent + "4d");
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./components/shared/helpers.js":
/*!**************************************!*\
  !*** ./components/shared/helpers.js ***!
  \**************************************/
/*! exports provided: smallFont, wideFont, fade, transition, headerItem, link, overflow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "smallFont", function() { return smallFont; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wideFont", function() { return wideFont; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fade", function() { return fade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transition", function() { return transition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headerItem", function() { return headerItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "link", function() { return link; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "overflow", function() { return overflow; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const smallFont = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["font-size:12px;font-weight:600;text-transform:uppercase;"]);
const wideFont = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["", ";font-weight:700;letter-spacing:0.05em;"], smallFont);
const fadeKeyframes = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["from{opacity:0;}to{opacity:1;}"]);
const fade = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["animation:", " 0.25s;"], fadeKeyframes);
const transition = props => Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["transition:all ", " ease;"], props.slow ? "0.3s" : "0.15s");
const headerItem = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["display:flex;align-items:center;flex-shrink:0;padding:0 16px;@media (max-width:425px){padding:0 8px;}"]);
const link = props => Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["", ";text-underline-position:under;text-decoration:none;color:", ";:hover{", ";color:", ";}"], transition, props => props.theme.normalText, props.underline && "text-decoration: underline", props => props.theme.accent);
const overflow = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"]);

/***/ }),

/***/ "./components/theme.js":
/*!*****************************!*\
  !*** ./components/theme.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const constants = {
  error: "#f5222d",
  vote: "#b6b6b6",
  upvote: "#f9920b",
  downvote: "#2e70ff"
};

const dark = _objectSpread(_objectSpread({}, constants), {}, {
  normalText: "#ffffff",
  mutedText: "#b0b8bf",
  border: "#333333",
  accent: "#33a0ff",
  pageBackground: "#1b1b1b",
  voteButtonHover: "#383838",
  foreground: "#262626",
  activeBackground: "#333333",
  inputBackground: "#333333",
  shadow: "rgba(0, 0, 0, 0.4)"
});

const light = _objectSpread(_objectSpread({}, constants), {}, {
  normalText: "#454f5b",
  mutedText: "#818e99",
  border: "#ebedf0",
  accent: "#1890ff",
  pageBackground: "#f4f6f8",
  voteButtonHover: "#f2f2f2",
  foreground: "#ffffff",
  activeBackground: "#fafafa",
  inputBackground: "#fcfcfc",
  shadow: "rgba(0, 0, 0, 0.05)"
});

const theme = isDark => isDark ? dark : light;

/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _router2 = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = /*#__PURE__*/_react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "./node_modules/next/node_modules/prop-types/index.js");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

exports.addBasePath = addBasePath;

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

exports.delBasePath = delBasePath;

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      pathname: addBasePath( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${delBasePath(pathname)}.json`),
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = escapeRegex(normalizedRoute.replace(/\/$/, '') || '/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  let namedParameterizedRoute; // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    namedParameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
      const isCatchAll = /^(\\\.){3}/.test($1);
      const key = $1 // Un-escape key
      .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '');
      return isCatchAll ? `/(?<${escapeRegex(key)}>.+?)` : `/(?<${escapeRegex(key)}>[^/]+?)`;
    });
  }

  return Object.assign({
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  }, namedParameterizedRoute ? {
    namedRegex: `^${namedParameterizedRoute}(?:/)?$`
  } : {});
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/node_modules/prop-types/checkPropTypes.js":
/*!*********************************************************************!*\
  !*** ./node_modules/next/node_modules/prop-types/checkPropTypes.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/next/node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/next/node_modules/prop-types/factoryWithTypeCheckers.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/prop-types/node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "object-assign");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/next/node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/next/node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/next/node_modules/prop-types/index.js":
/*!************************************************************!*\
  !*** ./node_modules/next/node_modules/prop-types/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/prop-types/node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/next/node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/next/node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/next/node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/next/node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/next/node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.2
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/prop-types/node_modules/react-is/index.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/next/node_modules/prop-types/node_modules/react-is/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-datepicker/dist/react-datepicker.css":
/*!*****************************************************************!*\
  !*** ./node_modules/react-datepicker/dist/react-datepicker.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/dashboard.js":
/*!****************************!*\
  !*** ./pages/dashboard.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return dashboard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Dashboard_FetchQueryContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Dashboard/FetchQueryContainer */ "./components/Dashboard/FetchQueryContainer.js");
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/App */ "./components/App.js");
/* harmony import */ var _components_Header_DashboardHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header/DashboardHeader */ "./components/Header/DashboardHeader.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/theme */ "./components/theme.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles.css */ "./styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_6__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







function dashboard({
  initialState
}) {
  // const [width, setWidth] = useState();
  // function updateWindowDimensions() {
  //   let newWidth = window.innerWidth;
  //   setWidth(newWidth);
  //   console.log(window.innerWidth);
  //   console.log(width);
  //   console.log(newWidth);
  // }
  // useEffect(() => {
  //   window.addEventListener("resize", updateWindowDimensions);
  //   return () => {
  //     window.removeEventListener("resize", updateWindowDimensions);
  //   };
  // }, []);
  return __jsx(_components_App__WEBPACK_IMPORTED_MODULE_2__["default"], null, __jsx(_components_Header_DashboardHeader__WEBPACK_IMPORTED_MODULE_3__["default"], null), __jsx(PageWrap, null, __jsx(styled_components__WEBPACK_IMPORTED_MODULE_4__["ThemeProvider"], {
    theme: _components_theme__WEBPACK_IMPORTED_MODULE_5__["default"]
  }, __jsx(Wrapper, null, __jsx(_components_Dashboard_FetchQueryContainer__WEBPACK_IMPORTED_MODULE_1__["default"], null)))));
}
const PageWrap = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "dashboard__PageWrap",
  componentId: "dqnkpe-0"
})(["height:100vh;margin:0 10vw;border-right:1px solid #f2f2f2;border-left:1px solid #f2f2f2;@media only screen and (max-width:768px){border:none;margin:0;}"]);
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "dashboard__Wrapper",
  componentId: "dqnkpe-1"
})(["display:flex;align-items:flex-start;margin:0;@media (max-width:1024px){margin:0;}@media (max-width:768px){display:block;margin:0;}"]);

/***/ }),

/***/ "./stores/store.js":
/*!*************************!*\
  !*** ./stores/store.js ***!
  \*************************/
/*! exports provided: Store, hydrate, StoreContext, initializeStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return Store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydrate", function() { return hydrate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreContext", function() { return StoreContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeStore", function() { return initializeStore; });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "mobx");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react */ "mobx-react");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mobx_persist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-persist */ "mobx-persist");
/* harmony import */ var mobx_persist__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mobx_persist__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Helpers_Functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Helpers/Functions */ "./components/Helpers/Functions.js");
var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _temp;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }






const isServer = !false;
Object(mobx_react__WEBPACK_IMPORTED_MODULE_1__["useStaticRendering"])(isServer);
let Store = (_class = (_temp = class Store {
  constructor() {
    _initializerDefineProperty(this, "lastUpdate", _descriptor, this);

    _initializerDefineProperty(this, "light", _descriptor2, this);

    _initializerDefineProperty(this, "isAuth", _descriptor3, this);

    _initializerDefineProperty(this, "startDate", _descriptor4, this);

    _initializerDefineProperty(this, "endDate", _descriptor5, this);

    _initializerDefineProperty(this, "symbol", _descriptor6, this);

    _initializerDefineProperty(this, "date", _descriptor7, this);

    _initializerDefineProperty(this, "pnl", _descriptor8, this);

    _initializerDefineProperty(this, "globalHash", _descriptor9, this);

    _initializerDefineProperty(this, "tempNotes", _descriptor10, this);

    _initializerDefineProperty(this, "tempTags", _descriptor11, this);

    _initializerDefineProperty(this, "hasTempTags", _descriptor12, this);

    _initializerDefineProperty(this, "singleTrade", _descriptor13, this);

    _initializerDefineProperty(this, "hasSingleTrade", _descriptor14, this);

    _initializerDefineProperty(this, "isSingleNotes", _descriptor15, this);

    _initializerDefineProperty(this, "changeDate", _descriptor16, this);

    _initializerDefineProperty(this, "addPnl", _descriptor17, this);

    _initializerDefineProperty(this, "resetPnl", _descriptor18, this);

    _initializerDefineProperty(this, "pushGlobalHash", _descriptor19, this);

    _initializerDefineProperty(this, "addTempNote", _descriptor20, this);

    _initializerDefineProperty(this, "clearTempNotes", _descriptor21, this);

    _initializerDefineProperty(this, "addTempTag", _descriptor22, this);

    _initializerDefineProperty(this, "clearTempTags", _descriptor23, this);

    _initializerDefineProperty(this, "changeHasTempTags", _descriptor24, this);

    _initializerDefineProperty(this, "resetHasTempTags", _descriptor25, this);

    _initializerDefineProperty(this, "setSymbol", _descriptor26, this);

    _initializerDefineProperty(this, "resetPnl", _descriptor27, this);

    _initializerDefineProperty(this, "setSingleTrade", _descriptor28, this);
  }

}, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "lastUpdate", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 0;
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "light", [mobx_persist__WEBPACK_IMPORTED_MODULE_2__["persist"], mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return true;
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "isAuth", [mobx_persist__WEBPACK_IMPORTED_MODULE_2__["persist"], mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "startDate", [mobx_persist__WEBPACK_IMPORTED_MODULE_2__["persist"], mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return null;
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "endDate", [mobx_persist__WEBPACK_IMPORTED_MODULE_2__["persist"], mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return null;
  }
}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "symbol", [mobx_persist__WEBPACK_IMPORTED_MODULE_2__["persist"], mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return "XBTUSD";
  }
}), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "date", [mobx_persist__WEBPACK_IMPORTED_MODULE_2__["persist"], mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return "Today";
  }
}), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "pnl", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 0;
  }
}), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, "globalHash", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return [];
  }
}), _descriptor10 = _applyDecoratedDescriptor(_class.prototype, "tempNotes", [mobx_persist__WEBPACK_IMPORTED_MODULE_2__["persist"], mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return [];
  }
}), _descriptor11 = _applyDecoratedDescriptor(_class.prototype, "tempTags", [mobx_persist__WEBPACK_IMPORTED_MODULE_2__["persist"], mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return [];
  }
}), _descriptor12 = _applyDecoratedDescriptor(_class.prototype, "hasTempTags", [mobx_persist__WEBPACK_IMPORTED_MODULE_2__["persist"], mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), _descriptor13 = _applyDecoratedDescriptor(_class.prototype, "singleTrade", [mobx_persist__WEBPACK_IMPORTED_MODULE_2__["persist"], mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return {};
  }
}), _descriptor14 = _applyDecoratedDescriptor(_class.prototype, "hasSingleTrade", [mobx_persist__WEBPACK_IMPORTED_MODULE_2__["persist"], mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), _descriptor15 = _applyDecoratedDescriptor(_class.prototype, "isSingleNotes", [mobx_persist__WEBPACK_IMPORTED_MODULE_2__["persist"], mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), _descriptor16 = _applyDecoratedDescriptor(_class.prototype, "changeDate", [mobx__WEBPACK_IMPORTED_MODULE_0__["action"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return newDate => {
      let dates = Object(_components_Helpers_Functions__WEBPACK_IMPORTED_MODULE_4__["getStateDate"])(newDate);
      this.date = newDate;
      this.startDate = dates.start;
      this.endDate = dates.end;
    };
  }
}), _descriptor17 = _applyDecoratedDescriptor(_class.prototype, "addPnl", [mobx__WEBPACK_IMPORTED_MODULE_0__["action"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return pnl => {
      this.pnl += pnl;
    };
  }
}), _descriptor18 = _applyDecoratedDescriptor(_class.prototype, "resetPnl", [mobx__WEBPACK_IMPORTED_MODULE_0__["action"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return () => {
      this.pnl = 0;
    };
  }
}), _descriptor19 = _applyDecoratedDescriptor(_class.prototype, "pushGlobalHash", [mobx__WEBPACK_IMPORTED_MODULE_0__["action"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return hash => {
      this.globalHash.push(hash);
    };
  }
}), _descriptor20 = _applyDecoratedDescriptor(_class.prototype, "addTempNote", [mobx__WEBPACK_IMPORTED_MODULE_0__["action"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return (time, note) => {
      if (this.tempNotes[0] == undefined) {
        let newNote = {};
        newNote["note"] = note;
        newNote["time"] = time;
        this.tempNotes.push(newNote);
      } else {
        let alreadyPresentNote = false;

        for (let i = 0; i < this.tempNotes.length; i++) {
          if (this.tempNotes[i].time == time) {
            this.tempNotes[i].note = note;
            alreadyPresentNote = true;
          }

          if (i == this.tempNotes.length - 1 && alreadyPresentNote == false) {
            let newNote = {};
            newNote["note"] = note;
            newNote["time"] = time;
            this.tempNotes.push(newNote);
          }
        }
      }
    };
  }
}), _descriptor21 = _applyDecoratedDescriptor(_class.prototype, "clearTempNotes", [mobx__WEBPACK_IMPORTED_MODULE_0__["action"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return () => {
      this.tempNotes = [];
    };
  }
}), _descriptor22 = _applyDecoratedDescriptor(_class.prototype, "addTempTag", [mobx__WEBPACK_IMPORTED_MODULE_0__["action"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return (time, tag) => {
      let newTag = {};
      newTag["tag"] = tag;
      newTag["time"] = time;
      this.tempTags.push(newTag);
      this.changeHasTempTags();
    };
  }
}), _descriptor23 = _applyDecoratedDescriptor(_class.prototype, "clearTempTags", [mobx__WEBPACK_IMPORTED_MODULE_0__["action"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return () => {
      this.tempTags = [];
    };
  }
}), _descriptor24 = _applyDecoratedDescriptor(_class.prototype, "changeHasTempTags", [mobx__WEBPACK_IMPORTED_MODULE_0__["action"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return () => {
      this.hasTempTags = true;
    };
  }
}), _descriptor25 = _applyDecoratedDescriptor(_class.prototype, "resetHasTempTags", [mobx__WEBPACK_IMPORTED_MODULE_0__["action"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return () => {
      this.hasTempTags = false;
    };
  }
}), _descriptor26 = _applyDecoratedDescriptor(_class.prototype, "setSymbol", [mobx__WEBPACK_IMPORTED_MODULE_0__["action"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return newSymbol => {
      this.symbol = newSymbol;
    };
  }
}), _descriptor27 = _applyDecoratedDescriptor(_class.prototype, "resetPnl", [mobx__WEBPACK_IMPORTED_MODULE_0__["action"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return () => {
      this.pnl = 0;
    };
  }
}), _descriptor28 = _applyDecoratedDescriptor(_class.prototype, "setSingleTrade", [mobx__WEBPACK_IMPORTED_MODULE_0__["action"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return dat => {
      this.singleTrade = dat;
    };
  }
})), _class);
let store = null;
const hydrate = Object(mobx_persist__WEBPACK_IMPORTED_MODULE_2__["create"])();
const StoreContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["createContext"])(new Store());
function initializeStore(initialData) {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return new Store(isServer, initialData);
  }

  if (store === null) {
    store = new Store(isServer, initialData);
  }

  hydrate("store", store).then(() => {
    console.log("someStore has been hydrated");
  });
  return store;
}

/***/ }),

/***/ "./styles.css":
/*!********************!*\
  !*** ./styles.css ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 7:
/*!**********************************!*\
  !*** multi ./pages/dashboard.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/manx/projects-2/bitsjournal/frontend/pages/dashboard.js */"./pages/dashboard.js");


/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "d3-format":
/*!****************************!*\
  !*** external "d3-format" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("d3-format");

/***/ }),

/***/ "d3-time-format":
/*!*********************************!*\
  !*** external "d3-time-format" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("d3-time-format");

/***/ }),

/***/ "fast-deep-equal":
/*!**********************************!*\
  !*** external "fast-deep-equal" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fast-deep-equal");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "mobx":
/*!***********************!*\
  !*** external "mobx" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mobx");

/***/ }),

/***/ "mobx-persist":
/*!*******************************!*\
  !*** external "mobx-persist" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mobx-persist");

/***/ }),

/***/ "mobx-react":
/*!*****************************!*\
  !*** external "mobx-react" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mobx-react");

/***/ }),

/***/ "mobx-react-lite":
/*!**********************************!*\
  !*** external "mobx-react-lite" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mobx-react-lite");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "object-assign":
/*!********************************!*\
  !*** external "object-assign" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("object-assign");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-apollo":
/*!*******************************!*\
  !*** external "react-apollo" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "react-autosize-textarea":
/*!******************************************!*\
  !*** external "react-autosize-textarea" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-autosize-textarea");

/***/ }),

/***/ "react-datepicker":
/*!***********************************!*\
  !*** external "react-datepicker" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-datepicker");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "react-stockcharts":
/*!************************************!*\
  !*** external "react-stockcharts" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-stockcharts");

/***/ }),

/***/ "react-stockcharts/lib/annotation":
/*!***************************************************!*\
  !*** external "react-stockcharts/lib/annotation" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-stockcharts/lib/annotation");

/***/ }),

/***/ "react-stockcharts/lib/axes":
/*!*********************************************!*\
  !*** external "react-stockcharts/lib/axes" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-stockcharts/lib/axes");

/***/ }),

/***/ "react-stockcharts/lib/coordinates":
/*!****************************************************!*\
  !*** external "react-stockcharts/lib/coordinates" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-stockcharts/lib/coordinates");

/***/ }),

/***/ "react-stockcharts/lib/helper":
/*!***********************************************!*\
  !*** external "react-stockcharts/lib/helper" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-stockcharts/lib/helper");

/***/ }),

/***/ "react-stockcharts/lib/indicator":
/*!**************************************************!*\
  !*** external "react-stockcharts/lib/indicator" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-stockcharts/lib/indicator");

/***/ }),

/***/ "react-stockcharts/lib/scale":
/*!**********************************************!*\
  !*** external "react-stockcharts/lib/scale" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-stockcharts/lib/scale");

/***/ }),

/***/ "react-stockcharts/lib/series":
/*!***********************************************!*\
  !*** external "react-stockcharts/lib/series" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-stockcharts/lib/series");

/***/ }),

/***/ "react-stockcharts/lib/tooltip":
/*!************************************************!*\
  !*** external "react-stockcharts/lib/tooltip" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-stockcharts/lib/tooltip");

/***/ }),

/***/ "react-stockcharts/lib/utils":
/*!**********************************************!*\
  !*** external "react-stockcharts/lib/utils" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-stockcharts/lib/utils");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "recharts":
/*!***************************!*\
  !*** external "recharts" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("recharts");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Rhc2hib2FyZC83NjhweC9EYXNoYm9hcmRUZXN0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRGFzaGJvYXJkL0FkZEFwaUZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9EYXNoYm9hcmQvQ2hhcnQvQ2hhcnREZW1vLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRGFzaGJvYXJkL0NoYXJ0L2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9EYXNoYm9hcmQvQ2hhcnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9EYXNoYm9hcmQvRGFzaGJvYXJkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRGFzaGJvYXJkL0ZldGNoUXVlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9EYXNoYm9hcmQvRmV0Y2hRdWVyeUNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Rhc2hib2FyZC9Ob3Rlcy9Ob3Rlcy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Rhc2hib2FyZC9Ob3Rlcy9Ob3Rlc1Rlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9EYXNoYm9hcmQvTm90ZXMvVGV4dEFyZWEuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9EYXNoYm9hcmQvTm90ZXMvbm90ZXNIZWxwZXJzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRGFzaGJvYXJkL1RhYnMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9EYXNoYm9hcmQvVGFkZXMvVHJhZGVzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRGFzaGJvYXJkL1RhZGVzL2NhbGNUcmFkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9EYXNoYm9hcmQvc2hhcmVkL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIvRGFzaGJvYXJkSGVhZGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVyL0xvZ28uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWxwZXJzL0Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01lbnUvNzY4cHgvTWVudS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01lbnUvQ2F0ZWdvcnlMaXN0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTWVudS9EYXRlcGlja2VyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTWVudS9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NZW51L01lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9mb3JtL0Zvcm1XcmFwcGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZm9ybS9JbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zvcm0vTGFiZWwuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zaGFyZWQvQnV0dG9uLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc2hhcmVkL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90aGVtZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9saW5rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC93aXRoLXJvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9taXR0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2NoZWNrUHJvcFR5cGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9ub2RlX21vZHVsZXMvcmVhY3QtaXMvY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL25vZGVfbW9kdWxlcy9yZWFjdC1pcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvcmVhY3QtaXMvY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9yZWFjdC1pcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9kYXNoYm9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmVzL3N0b3JlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImQzLWZvcm1hdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImQzLXRpbWUtZm9ybWF0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmFzdC1kZWVwLWVxdWFsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZ3JhcGhxbC10YWdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcy1jb29raWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb2J4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9ieC1wZXJzaXN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9ieC1yZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vYngtcmVhY3QtbGl0ZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwib2JqZWN0LWFzc2lnblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzLWV4YWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1hcG9sbG9cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1hdXRvc2l6ZS10ZXh0YXJlYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRhdGVwaWNrZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1kb21cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zdG9ja2NoYXJ0c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXN0b2NrY2hhcnRzL2xpYi9hbm5vdGF0aW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc3RvY2tjaGFydHMvbGliL2F4ZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zdG9ja2NoYXJ0cy9saWIvY29vcmRpbmF0ZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zdG9ja2NoYXJ0cy9saWIvaGVscGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc3RvY2tjaGFydHMvbGliL2luZGljYXRvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXN0b2NrY2hhcnRzL2xpYi9zY2FsZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXN0b2NrY2hhcnRzL2xpYi9zZXJpZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zdG9ja2NoYXJ0cy9saWIvdG9vbHRpcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXN0b2NrY2hhcnRzL2xpYi91dGlsc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0c3RyYXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWNoYXJ0c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidXJsXCIiXSwibmFtZXMiOlsiY2hpbGRyZW4iLCJpbmplY3QiLCJvYnNlcnZlciIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwiZ2xvYmFsSGFzaCIsImdsb2JhbEhhc2hBY3RpdmUiLCJkYXRhIiwiZmlsdGVyZWREYXRhIiwiaXNTaW5nbGUiLCJpc1NpbmdsZU5vdGVzIiwiZ2V0R2xvYmFsSGFzaHRhZ3MiLCJiaW5kIiwiaGFzaHRhZ0NsaWNrZWQiLCJoYXNodGFnQ2xpY2tlZEJhY2siLCJ1cGRhdGVXaW5kb3dEaW1lbnNpb25zIiwiY29tcG9uZW50V2lsbE1vdW50Iiwic2V0U3RhdGUiLCJjb21wb25lbnREaWRNb3VudCIsInNpbmdsZVRyYWRlUmVhY3Rpb24iLCJyZWFjdGlvbiIsInN0b3JlIiwiaGFzU2luZ2xlVHJhZGUiLCJub3RpZmljYXRpb25zIiwiY29uc29sZSIsImxvZyIsInNpbmdsZVRyYWRlIiwic2luZ2xlTm90ZXNSZWFjdGlvbiIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ3aWR0aCIsImlubmVyV2lkdGgiLCJpIiwiZmV0Y2hUcmFkZUhpc3RvcnkiLCJsZW5ndGgiLCJ0aGlzVHJhZGVIYXNoIiwiaGFzaHRhZ3MiLCJzcGxpdCIsImoiLCJuZXdHbG9iYWxIYXNoIiwicHVzaCIsInZhbHVlIiwibmV3SGFzaEFjdGl2ZSIsIm5ld0hhc2giLCJ1bmRlZmluZWQiLCJuZXdIYXNoMiIsImdldE5ld0RhdCIsInRoZW4iLCJyZXMiLCJuZXdHbG9iYWxIYXNoMiIsIm5ld0FycmF5IiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwidG9yZiIsIm5ld0dsb2JhbEhhc2hBY3RpdmUiLCJuZXdEYXQiLCJyZW5kZXIiLCJtYXAiLCJoYXNoIiwiU2luZ2xlVGFiSW5uZXIiLCJzdHlsZWQiLCJkaXYiLCJTaW5nbGVUYWIiLCJpc0FjdGl2ZSIsIldyYXBUYWJzIiwiV2hvbGVHcmlkIiwiVG9wQmFyUGFyZW50IiwiVG9wQmFyVG9wIiwiVG9wQmFyQm90dG9tIiwiVG9wQmFyVG9wUmlnaHQiLCJUb3BCYXJUb3BMZWZ0Iiwid2lkZUZvbnQiLCJUb3BCYXJDaGlsZFNtYWxsIiwiVG9wSGFzaHRhZ0luZGl2aWR1YWwiLCJUb3BIYXNodGFnSW5kaXZpZHVhbEFjdGl2ZSIsIlRvcEhhc2h0YWdJbmRpdmlkdWFsQWN0aXZlUmlnaHQiLCJSaWdodFRhYnMiLCJUb3BIYXNodGFnSW5kaXZpZHVhbEFjdGl2ZVBubCIsIkNoYXJ0V3JhcHBlciIsIldyYXBwZXIiLCJDb29raWUiLCJyZXF1aXJlIiwiQXBpS2V5Rm9ybSIsInNldFJlcyIsInVzZVN0YXRlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJub3RTdWJtaXR0ZWQiLCJzZXROb3RTdWJtaXR0ZWQiLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsImNsaWVudCIsInByZXZlbnREZWZhdWx0IiwiZm9ybSIsInRhcmdldCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJrZXkiLCJnZXQiLCJzZWNyZXQiLCJyZXNldCIsImFwaVJlcyIsIm11dGF0ZSIsIm11dGF0aW9uIiwiZ3FsIiwidmFyaWFibGVzIiwiYWRkQXBpS2V5IiwiaXNUcnVlIiwiY2F0Y2giLCJkaXNwbGF5IiwiUG9wdWxhdGUiLCJ1c2VFZmZlY3QiLCJteUNsaWVudCIsInJlc28iLCJwb3B1bGF0ZSIsInJlc2V0QXBpIiwiUHJvbWlzZSIsInJlc29sdmUiLCJteVJlcyIsImxvY2F0aW9uIiwicmVsb2FkIiwiU3R5bGVkRm9ybSIsIlN1Ym1pdEJ1dHRvbiIsIkJ1dHRvbiIsIklucHV0V3JhcHBlciIsIkNhbmRsZVN0aWNrQ2hhcnRXaXRoQW5ub3RhdGlvbiIsInlSYW5nZU51bXMiLCJnZXRZUmFuZ2VOdW1zIiwibWFyZ2luIiwibGVmdCIsInJpZ2h0IiwidG9wIiwiYm90dG9tIiwiaGVpZ2h0IiwidHlwZSIsInJhdGlvIiwiaW5pdGlhbERhdGEiLCJ5QXhpc0xhYmVsWCIsInlBeGlzTGFiZWxZIiwieFNjYWxlUHJvdmlkZXIiLCJkaXNjb250aW51b3VzVGltZVNjYWxlUHJvdmlkZXIiLCJpbnB1dERhdGVBY2Nlc3NvciIsImQiLCJkYXRlIiwieFNjYWxlIiwieEFjY2Vzc29yIiwiZGlzcGxheVhBY2Nlc3NvciIsInN0YXJ0IiwibGFzdCIsImVuZCIsIk1hdGgiLCJtYXgiLCJ4RXh0ZW50cyIsImhpZ2giLCJsb3ciLCJ0aW1lRm9ybWF0IiwiZm9ybWF0IiwidHJhZGVzIiwiZWFjaCIsImRhdHUiLCJEYXRlIiwidGltZXN0YW1wIiwic2lkZSIsImFubm90YXRpb25Qcm9wc1VwIiwiZm9udEZhbWlseSIsImZvbnRTaXplIiwiZmlsbCIsIm9wYWNpdHkiLCJ0ZXh0IiwieSIsInlTY2FsZSIsInJhbmdlIiwib25DbGljayIsInRvb2x0aXAiLCJMYWJlbEFubm90YXRpb24iLCJ0aW1lQ29tcGFyZSIsInRpbWVmcmFtZSIsImFubm90YXRpb25Qcm9wc0Rvd24iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhcnJheSIsImlzUmVxdWlyZWQiLCJudW1iZXIiLCJvbmVPZiIsImRlZmF1bHRQcm9wcyIsImZpdFdpZHRoIiwiTVNfUEVSX01JTlVURSIsImNvZWZmRml2ZSIsImNvZWZmT25lIiwicm91bmQiLCJnZXRUaW1lIiwiZ2V0SG91cnMiLCJnZXREYXRlIiwibG93TnVtIiwiaGlnaE51bSIsImFyciIsImZpbmRZVmFsU2VsbCIsInlMb3ciLCJ5SGlnaCIsInByaWNlIiwiZmluZFlWYWxCdXkiLCJmdWxsUmFuZ2UiLCJteVJhbmdlIiwicGFyc2VJbnQiLCJvdXRPZiIsIm11bHRpcGxpZWQiLCJDaGFydENvbXBvbmVudCIsInN0YXJ0VGltZSIsImVuZFRpbWUiLCJkaWZmTXMiLCJhYnMiLCJkaWZmU2VjcyIsImRpZmZNaW5zIiwiYWxsRXhlYyIsIm9uZW1pbiIsInRyYWRlIiwibmV3VHJhZGUiLCJvcGVuIiwicGFyc2VGbG9hdCIsImNsb3NlIiwic3RydCIsImNvbXBhcmUxIiwiY29tcGFyZTIiLCJhZGRpdGlvbmFsVGltZSIsInVuc2hpZnQiLCJmaXZlbWluIiwiZGF5Iiwib25laG91ciIsIm9uZWRheSIsImVyciIsIlRvcEJhckNoaWxkQmlnTGVmdCIsIlRvcEJhckNoaWxkQmlnUmlnaHQiLCJGZXRjaFF1ZXJ5IiwiY2xpY2tlZCIsImlzQXV0aCIsInN0YXJ0RGF0ZSIsImVuZERhdGUiLCJmZXRjaFRyYWRlSGlzdG9yeVZhcmlhYmxlcyIsInN5bWJvbCIsImZldGNoVHJhZGVIaXN0b3J5UXVlcnkiLCJDb21wIiwidGVtcFRhZ3NSZWFjdGlvbiIsImhhc1RlbXBUYWdzIiwiZm9yY2VVcGRhdGUiLCJxdWVyeSIsInZhcnMiLCJlcnJvciIsImNoZWNrQXBpS2V5IiwicmVzZXRIYXNUZW1wVGFncyIsImNsZWFyVGVtcE5vdGVzIiwiY2xlYXJUZW1wVGFncyIsInJlc2V0UG5sIiwiRGFzaEluaXRpYWxUZXJtcyIsImNvb2siLCJSb3V0ZXIiLCJkYXRlcyIsImdldFN0YXRlRGF0ZSIsInRoZW1lIiwiaW5pdEhhc2h0YWdzIiwic2hvd05vdGVzIiwic2V0U2hvd05vdGVzIiwiaGFuZGxlQ2hhbmdlIiwidGVtcE5vdGVzIiwiaXNUZW1wIiwidGltZSIsImZpcnN0VHJhZGUiLCJub3RlIiwibm90ZXMiLCJzcGxpdFRhZ3MiLCJ0YWciLCJhZGRUZW1wTm90ZSIsInJlbW92ZUhhc2h0YWciLCJoYXNodGFnIiwicmVmZXRjaFF1ZXJpZXMiLCJjaGFuZ2VIYXNUZW1wVGFncyIsImdldE5vdGVzIiwiZmFUaW1lcyIsInRyYW5zaXRpb24iLCJwYWRkaW5nIiwiYm94U2l6aW5nIiwiYmFja2dyb3VuZCIsImJvcmRlciIsIm91dGxpbmUiLCJBZGRIYXNodGFnIiwiZ2V0SGFzaHRhZ3MiLCJmYVBsdXMiLCJBZGRIYXNoU3VibWl0IiwiaW5wdXQiLCJQb3B1cCIsIlBvcHVwVG9wIiwiU2luZ2xlSGFzaHRhZ0RpdiIsIlNob3dOb3Rlc0RpdiIsIlNob3dOb3Rlc0lubmVyIiwiU2luZ2xlSGFzaHRhZ1RleHQiLCJTaW5nbGVIYXNodGFnRGVsZXRlIiwiSGFzaHRhZ0RpdiIsIkZ1bGxSb3ciLCJOb3Rlc1N1Ym1pdCIsIk5vdGVzSW5wdXQiLCJ0ZXh0YXJlYSIsImZsZXhEaXJlY3Rpb24iLCJNeVRleHRBcmVhIiwic2V0VmFsdWUiLCJsaWdodCIsInNldExpZ2h0Iiwic2V0Q2xpZW50IiwidmFsIiwibm90VGVtcCIsInRvU3RyaW5nIiwibWFyZ2luVG9wIiwiY29sb3IiLCJpbnB1dFZhbCIsImVuZEFyciIsImlucHV0SGFzaHRhZ3MiLCJUYWJzIiwiYWN0aXZlVGFiIiwic2V0QWN0aXZlVGFiIiwic2V0QWN0aXZlIiwidGFiIiwiYmFja3dhcmRzIiwiZmFDYXJldExlZnQiLCJtYXJnaW5SaWdodCIsIm1hcmdpbkJvdHRvbSIsIlRvcEJhckNoaWxkQmlnIiwiRXhhbXBsZSIsIlB1cmVDb21wb25lbnQiLCJmdWxsVHJhZGVzIiwiY3JlYXRlRnVsbFRyYWRlcyIsImZ1bGxSYXkiLCJkYXQiLCJ0cmRTdGFydCIsInNsaWNlZCIsInNsaWNlIiwiayIsInRyZEVuZCIsIm5ld3NsaWNlZCIsInJldHVyblZhbCIsImluaXREYXRhIiwiZmlsdGVyIiwiY29tcG9uZW50RGlkVXBkYXRlIiwicHJldlByb3BzIiwiZXF1YWwiLCJuZXdGdWxsVHJhZGVzIiwiZmlyc3RGdWxsVHJhZGVzIiwiaWQiLCJyZXR1cm5lZCIsInBubCIsImlubmVySGVpZ2h0IiwiY2hhcnRXaWR0aCIsIm1pbldpZHRoIiwic2xpYyIsImZldGNoT25lTWludXRlQ2FuZGxlSGlzdG9yeSIsImZldGNoRml2ZU1pbnV0ZUNhbmRsZUhpc3RvcnkiLCJmZXRjaE9uZUhvdXJDYW5kbGVIaXN0b3J5IiwiZmV0Y2hPbmVEYXlDYW5kbGVIaXN0b3J5IiwiTWFrZUNvbCIsImF2Z0VudHJ5UHJpY2UiLCJhdmdFeGl0UHJpY2UiLCJjdW1RdHkiLCJyZWFkTW9yZUNsaWNrZWQiLCJnZXRTbGljRGF0YSIsImNhbGNlZCIsImNhbGNUcmFkZXMiLCJhZGRQbmwiLCJzZXRTaW5nbGVUcmFkZSIsImZvcm1hdERhdGVNb250aE9ubHkiLCJvcmRlclR5cGUiLCJ0b0ZpeGVkIiwiSXNTaG9ydCIsImluY2x1ZGVzIiwiT3JkZXJFeGVjdXRpb24iLCJleGVjVHlwZSIsIm9yZGVyUXR5IiwibGVhdmVzUXR5IiwiY2FsY0NvbW1pc3Npb24iLCJDb250YWluRGl2IiwiQ29udGFpbkRpdkNsaWNrZWQiLCJDb250YWluRGl2QmxhY2siLCJDb250YWluRGl2SGVhZGVyIiwiTmV4dFRvRGl2IiwiTmV4dFRvRGl2QmxhY2siLCJOZXh0VG9EaXZCbGFja1RpdGxlIiwiVGl0bGVTcGFuIiwic3BhbiIsIk5leHRUb0RpdkJsYWNrVGltZSIsIk5leHRUb0RpdkhlYWRlciIsInNtYWxsRm9udCIsIklubmVyUG5sV2luIiwiSW5uZXJQbmxMb3NzIiwiUmVhZE1vcmUiLCJSZWFkTW9yZVRhbGwiLCJNb3JlQm94U2hvcnQiLCJNb3JlQm94VGFsbCIsIkV4ZWNDb250YWluZXIiLCJUb3RhbERldGFpbHMiLCJSZWFkTW9yZUlubmVyIiwiaW5wdXREYXRhIiwiYXZnQnV5UHJpY2UiLCJhdmdTZWxsUHJpY2UiLCJ0b3RCdXlDb250cmFjdHMiLCJ0b3RTZWxsQ29udHJhY3RzIiwiYnV5TnVtIiwic2VsbE51bSIsInRvdEJ1eUNvbnRyYWN0c011bHQiLCJ0b3RTZWxsQ29udHJhY3RzTXVsdCIsInJlYWxRdHkiLCJ0b3RDb21taXNzaW9uIiwiYXZnRXhpdCIsImF2Z0VudHJ5IiwidGhlUG5sIiwibXlQbmwiLCJkaWZmZXJlbmNlIiwiY3VycmVudFF0eSIsIm5ld1JlYWxRdHkiLCJvbGREYXQiLCJuZXdUcmFkZXMiLCJvbGRUcmFkZXMiLCJ0cmFkZUhhc2h0YWdzIiwib2xkVHJhZGUiLCJtIiwiSGVhZGVyIiwicm91dGVyIiwibG9nb3V0IiwicmVtb3ZlIiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsInBhdGhuYW1lIiwid2l0aFJvdXRlciIsIkxvZ29XcmFwIiwiVGVtcERpdiIsIkxpbmtzV3JhcCIsIkRhdGVQaWNrZXJzV3JhcCIsIkRhdGVQaWNrZXJXcmFwIiwiU3R5bGVkTGluayIsImhlYWRlckl0ZW0iLCJsaW5rIiwibXV0ZWRUZXh0IiwiYWNjZW50IiwiaGVhZGVyIiwiZm9yZWdyb3VuZCIsIkhlYWRlckxvZ28iLCJIZWFkZXJMb2dvRGFyayIsIkxvZ28iLCJub3JtYWxUZXh0IiwiTG9nb0RhcmsiLCJtb250aE5hbWVzIiwidXRjRGF0ZSIsInRoZURhdGUiLCJob3VycyIsImFkZFplcm9CZWZvcmUiLCJtaW5zIiwiZ2V0TWludXRlcyIsIm1vbnRoSW5kZXgiLCJnZXRNb250aCIsInllYXIiLCJnZXRGdWxsWWVhciIsImZvcm1hdERhdGVTaG9ydCIsImZvcm1hdERhdGVTaG9ydFdpdGhIb3VyIiwibiIsIm1ha2VEYXRlSHJzIiwibWFrZURhdGVEYXlzIiwiaHJzQmFjayIsImR0IiwidG9VVENTdHJpbmciLCJ0b0lTT1N0cmluZyIsInNldEhvdXJzIiwibnVtIiwic2V0RGF0ZSIsInF0eSIsImNvbW1pc3Npb24iLCJTeW1ib2xDaG9vc2VyNzY4IiwiZHJvcGRvd24iLCJzZXREcm9wZG93biIsInNob3dEcm9wZG93biIsInNldFN5bWJvbCIsIm1hcmdpbkxlZnQiLCJmYUNhcmV0VXAiLCJmYUNhcmV0RG93biIsIlBubDc2OCIsIlNpZGViYXIiLCJMYXBwZXJDb250YWluZXIiLCJJbm5lclN5bWJvbENob29zZXIiLCJMYXBwZXIiLCJhc2lkZSIsIklubmVyTGFwcGVyIiwiTGFwcGVyMiIsIkxhcHBlckNob29zZXIiLCJMYXBwZXIzIiwiTGFwcGVyNCIsIlNldFN5bWJvbCIsIkRyb3Bkb3duQ29udGFpbmVyIiwiRHJvcGRvd25MaXN0Q29udGFpbmVyIiwidWwiLCJEcm9wZG93bkxpc3RJdGVtIiwibGkiLCJTaWRlYmFyQ2F0ZWdvcnlMaXN0IiwiY3VzdG9tQ2xpY2tlZCIsInNldEN1c3RvbUNsaWNrZWQiLCJoYW5kbGVDbGljayIsImNoYW5nZURhdGUiLCJoYW5kbGVDdXN0b21DbGlja2VkIiwiZW50ZXJlZCIsInNldEVudGVyZWQiLCJSb3cxIiwiUG9wQ29udGFpbiIsIlBvcExhYmVsIiwiUG9wRW50ZXIiLCJidXR0b24iLCJQb3B1cEl0ZW0iLCJDYXRlZ29yeUxpc3QiLCJuYXYiLCJJdGVtIiwiSXRlbUFjdGl2ZSIsImRhdGVSZWFjdGlvbiIsInNldCIsImZpcnN0RGF0ZSIsIm11bHRpRGF0ZSIsIlNpZGViYXJDYXRlZ29yeUxpc3RIZWFkZXIiLCJTeW1ib2xDaG9vc2VyIiwiUG5sIiwiRm9ybVdyYXBwZXIiLCJ3aWRlIiwiSW5wdXQiLCJpbnB1dEJhY2tncm91bmQiLCJMYWJlbCIsImxhYmVsIiwiY3NzIiwiZmFkZUtleWZyYW1lcyIsImtleWZyYW1lcyIsImZhZGUiLCJzbG93IiwidW5kZXJsaW5lIiwib3ZlcmZsb3ciLCJjb25zdGFudHMiLCJ2b3RlIiwidXB2b3RlIiwiZG93bnZvdGUiLCJkYXJrIiwicGFnZUJhY2tncm91bmQiLCJ2b3RlQnV0dG9uSG92ZXIiLCJhY3RpdmVCYWNrZ3JvdW5kIiwic2hhZG93IiwiaXNEYXJrIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkIiwiZXhwb3J0cyIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwiX3JlYWN0IiwiX3VybCIsIl91dGlscyIsIl9yb3V0ZXIiLCJfcm91dGVyMiIsImlzTG9jYWwiLCJocmVmIiwidXJsIiwicGFyc2UiLCJvcmlnaW4iLCJnZXRMb2NhdGlvbk9yaWdpbiIsImhvc3QiLCJwcm90b2NvbCIsIm1lbW9pemVkRm9ybWF0VXJsIiwiZm9ybWF0RnVuYyIsImxhc3RIcmVmIiwibGFzdEFzIiwibGFzdFJlc3VsdCIsImFzIiwicmVzdWx0IiwiZm9ybWF0VXJsIiwiZm9ybWF0V2l0aFZhbGlkYXRpb24iLCJsaXN0ZW5lcnMiLCJNYXAiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsInByZWZldGNoZWQiLCJnZXRPYnNlcnZlciIsImVudHJpZXMiLCJmb3JFYWNoIiwiZW50cnkiLCJoYXMiLCJjYiIsImlzSW50ZXJzZWN0aW5nIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJ1bm9ic2VydmUiLCJkZWxldGUiLCJyb290TWFyZ2luIiwibGlzdGVuVG9JbnRlcnNlY3Rpb25zIiwiZWwiLCJvYnNlcnZlIiwiTGluayIsInAiLCJjbGVhblVwTGlzdGVuZXJzIiwiZm9ybWF0VXJscyIsImFzSHJlZiIsImFkZEJhc2VQYXRoIiwibGlua0NsaWNrZWQiLCJlIiwibm9kZU5hbWUiLCJjdXJyZW50VGFyZ2V0IiwibWV0YUtleSIsImN0cmxLZXkiLCJzaGlmdEtleSIsIm5hdGl2ZUV2ZW50Iiwid2hpY2giLCJzY3JvbGwiLCJyZXBsYWNlIiwic2hhbGxvdyIsInN1Y2Nlc3MiLCJzY3JvbGxUbyIsImRvY3VtZW50IiwiYm9keSIsImZvY3VzIiwicHJlZmV0Y2giLCJ3YXJuIiwiZ2V0UGF0aHMiLCJwYXJzZWRIcmVmIiwicGFyc2VkQXMiLCJyZXNvbHZlZEhyZWYiLCJoYW5kbGVSZWYiLCJyZWYiLCJ0YWdOYW1lIiwiaXNQcmVmZXRjaGVkIiwiam9pbiIsIm9wdGlvbnMiLCJwYXRocyIsImNyZWF0ZUVsZW1lbnQiLCJjaGlsZCIsIkNoaWxkcmVuIiwib25seSIsImN1cnJlbnQiLCJvbk1vdXNlRW50ZXIiLCJwcmlvcml0eSIsImRlZmF1bHRQcmV2ZW50ZWQiLCJwYXNzSHJlZiIsInByb2Nlc3MiLCJjbG9uZUVsZW1lbnQiLCJleGVjT25jZSIsImV4YWN0Iiwib25lT2ZUeXBlIiwic3RyaW5nIiwib2JqZWN0IiwiYm9vbCIsImVsZW1lbnQiLCJwcm9wTmFtZSIsIl9kZWZhdWx0IiwidXNlUm91dGVyIiwibWFrZVB1YmxpY1JvdXRlckluc3RhbmNlIiwiY3JlYXRlUm91dGVyIiwiTmV4dFJvdXRlciIsIl9yb3V0ZXJDb250ZXh0IiwiX3dpdGhSb3V0ZXIiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJldmVudHMiLCJmaWVsZCIsImdldFJvdXRlciIsImFyZ3VtZW50cyIsIm9uIiwiZXZlbnRGaWVsZCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic3Vic3RyaW5nIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsIkVycm9yIiwidXNlQ29udGV4dCIsIlJvdXRlckNvbnRleHQiLCJfbGVuIiwiYXJncyIsIkFycmF5IiwiX2tleSIsImluc3RhbmNlIiwicHJvcGVydHkiLCJhc3NpZ24iLCJDb21wb3NlZENvbXBvbmVudCIsIldpdGhSb3V0ZXJXcmFwcGVyIiwiZ2V0SW5pdGlhbFByb3BzIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsIm5hbWUiLCJkaXNwbGF5TmFtZSIsIm1pdHQiLCJhbGwiLCJjcmVhdGUiLCJoYW5kbGVyIiwib2ZmIiwiZW1pdCIsImV2dHMiLCJfX2ltcG9ydERlZmF1bHQiLCJtb2QiLCJ1cmxfMSIsIm1pdHRfMSIsInV0aWxzXzEiLCJpc19keW5hbWljXzEiLCJyb3V0ZV9tYXRjaGVyXzEiLCJyb3V0ZV9yZWdleF8xIiwiYmFzZVBhdGgiLCJwYXRoIiwiZGVsQmFzZVBhdGgiLCJzdWJzdHIiLCJ0b1JvdXRlIiwicHJlcGFyZVJvdXRlIiwiZmV0Y2hOZXh0RGF0YSIsImlzU2VydmVyUmVuZGVyIiwiYXR0ZW1wdHMiLCJnZXRSZXNwb25zZSIsImZldGNoIiwiX19ORVhUX0RBVEFfXyIsImJ1aWxkSWQiLCJjcmVkZW50aWFscyIsIm9rIiwic3RhdHVzIiwianNvbiIsImNvZGUiLCJpbml0aWFsUHJvcHMiLCJwYWdlTG9hZGVyIiwiQXBwIiwid3JhcEFwcCIsInN1YnNjcmlwdGlvbiIsImlzRmFsbGJhY2siLCJzZGMiLCJvblBvcFN0YXRlIiwiY2hhbmdlU3RhdGUiLCJnZXRVUkwiLCJpc1NzciIsImFzUGF0aCIsIl9icHMiLCJfZ2V0U3RhdGljRGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwicm91dGUiLCJjb21wb25lbnRzIiwiX19OX1NTRyIsIl9fTl9TU1AiLCJpc0R5bmFtaWNSb3V0ZSIsImF1dG9FeHBvcnQiLCJzdWIiLCJjbGMiLCJfd3JhcEFwcCIsIl9yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCIsInVwZGF0ZSIsIm5ld0RhdGEiLCJub3RpZnkiLCJiYWNrIiwiaGlzdG9yeSIsImNoYW5nZSIsIm1ldGhvZCIsIl9hcyIsInJlamVjdCIsIl9oIiwiU1QiLCJwZXJmb3JtYW5jZSIsIm1hcmsiLCJhYm9ydENvbXBvbmVudExvYWQiLCJvbmx5QUhhc2hDaGFuZ2UiLCJzY3JvbGxUb0hhc2giLCJ1cmxJc05ldyIsImFzUGF0aG5hbWUiLCJyb3V0ZVJlZ2V4IiwiZ2V0Um91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJnZXRSb3V0ZU1hdGNoZXIiLCJtaXNzaW5nUGFyYW1zIiwia2V5cyIsImdyb3VwcyIsInBhcmFtIiwiZ2V0Um91dGVJbmZvIiwicm91dGVJbmZvIiwiY2FuY2VsbGVkIiwiYXBwQ29tcCIsIm5leHQiLCJpc1ByZXJlbmRlcmVkIiwiY2FjaGVkUm91dGVJbmZvIiwiaGFuZGxlRXJyb3IiLCJsb2FkRXJyb3JGYWlsIiwiZmV0Y2hDb21wb25lbnQiLCJwYWdlIiwiZ2lwRXJyIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiX2dldERhdGEiLCJiZWZvcmVQb3BTdGF0ZSIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJuZXdVcmxOb0hhc2giLCJpZEVsIiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxJbnRvVmlldyIsIm5hbWVFbCIsImdldEVsZW1lbnRzQnlOYW1lIiwicHJlZmV0Y2hEYXRhIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwibG9hZFBhZ2UiLCJmbiIsImN0eCIsIkFwcFRyZWUiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiVEVTVF9ST1VURSIsInRlc3QiLCJyZSIsImV4ZWMiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJfIiwicGFyYW1zIiwic2x1Z05hbWUiLCJnIiwicG9zIiwicmVwZWF0IiwiZXNjYXBlUmVnZXgiLCJzdHIiLCJub3JtYWxpemVkUm91dGUiLCJlc2NhcGVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwiJDEiLCJpc0NhdGNoQWxsIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJSZWdFeHAiLCJuYW1lZFJlZ2V4IiwidXNlZCIsImhvc3RuYW1lIiwicG9ydCIsImdldERpc3BsYXlOYW1lIiwiaXNSZXNTZW50IiwiZmluaXNoZWQiLCJoZWFkZXJzU2VudCIsIl9hIiwicHJvdG90eXBlIiwicGFnZVByb3BzIiwidXJsT2JqZWN0S2V5cyIsIlNQIiwibWVhc3VyZSIsImRhc2hib2FyZCIsImluaXRpYWxTdGF0ZSIsIlBhZ2VXcmFwIiwiaXNTZXJ2ZXIiLCJ1c2VTdGF0aWNSZW5kZXJpbmciLCJTdG9yZSIsIm9ic2VydmFibGUiLCJwZXJzaXN0IiwiYWN0aW9uIiwibmV3RGF0ZSIsIm5ld05vdGUiLCJhbHJlYWR5UHJlc2VudE5vdGUiLCJuZXdUYWciLCJ0ZW1wVGFncyIsIm5ld1N5bWJvbCIsImh5ZHJhdGUiLCJTdG9yZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiaW5pdGlhbGl6ZVN0b3JlIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtR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O0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsVUFBVSxLQUFxQztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixzQkFBc0I7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVLElBQXFDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLDJCQUEyQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU0sS0FBcUMsNEZBQTRGLFNBQU07QUFDN0k7QUFDQTs7QUFFQSxtQkFBbUIsZ0NBQWdDO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQixnQ0FBZ0M7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDOWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSSxJQUFxQztBQUN6QyxnQkFBZ0IsbUJBQU8sQ0FBQyw0RkFBVTs7QUFFbEM7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLG1CQUFPLENBQUMseUdBQTJCO0FBQ3RELENBQUMsTUFBTSxFQUlOOzs7Ozs7Ozs7Ozs7O0FDbEJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7QUFFYjs7QUFFQTs7Ozs7Ozs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWE7Ozs7QUFJYixJQUFJLElBQXFDO0FBQ3pDO0FBQ0E7O0FBRUEsOENBQThDLGNBQWM7O0FBRTVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxzRkFBc0YsYUFBYTtBQUNuRztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0RkFBNEYsZUFBZTtBQUMzRztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7O0FDbE9hOztBQUViLElBQUksS0FBcUMsRUFBRSxFQUUxQztBQUNELG1CQUFtQixtQkFBTyxDQUFDLG9JQUErQjtBQUMxRDs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWE7Ozs7QUFJYixJQUFJLElBQXFDO0FBQ3pDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEVBQTBFO0FBQzFFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRDs7QUFFaEQ7QUFDQTtBQUNBO0FBQ0EsaURBQWlEOztBQUVqRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7OztBQ3BMYTs7QUFFYixJQUFJLEtBQXFDLEVBQUUsRUFFMUM7QUFDRCxtQkFBbUIsbUJBQU8sQ0FBQyw0R0FBK0I7QUFDMUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNDLFNBQVQsQ0FBbUI7QUFBRUM7QUFBRixDQUFuQixFQUFxQztBQUNsRDtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsU0FDRSxNQUFDLHVEQUFELFFBQ0UsTUFBQywwRUFBRCxPQURGLEVBRUUsTUFBQyxRQUFELFFBQ0UsTUFBQywrREFBRDtBQUFlLFNBQUssRUFBRXJrQix5REFBS0E7QUFBM0IsS0FDRSxNQUFDLE9BQUQsUUFDRSxNQUFDLGlGQUFELE9BREYsQ0FERixDQURGLENBRkYsQ0FERjtBQVlEO0FBRUQsTUFBTXNrQixRQUFRLEdBQUczd0Isd0RBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSwrSkFBZDtBQVdBLE1BQU1rQixPQUFPLEdBQUduQix3REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDBJQUFiLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BLE1BQU0yd0IsUUFBUSxHQUFHLE1BQWpCO0FBQ0FDLHFFQUFrQixDQUFDRCxRQUFELENBQWxCO0FBRU8sSUFBTUUsS0FBYixzQkFBTyxNQUFNQSxLQUFOLENBQVk7QUFBQTtBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBO0FBQUE7O0FBQUEsQ0FBbkIsb0ZBQ0dDLCtDQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUMyQixDQUQzQjtBQUFBO0FBQUEseUVBRUdDLG9EQUZILEVBRVlELCtDQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUUrQixJQUYvQjtBQUFBO0FBQUEsMEVBR0dDLG9EQUhILEVBR1lELCtDQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUdnQyxLQUhoQztBQUFBO0FBQUEsNkVBSUdDLG9EQUpILEVBSVlELCtDQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUltQyxJQUpuQztBQUFBO0FBQUEsMkVBS0dDLG9EQUxILEVBS1lELCtDQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUtpQyxJQUxqQztBQUFBO0FBQUEsMEVBTUdDLG9EQU5ILEVBTVlELCtDQU5aO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQU1nQyxRQU5oQztBQUFBO0FBQUEsd0VBUUdDLG9EQVJILEVBUVlELCtDQVJaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQVE4QixPQVI5QjtBQUFBO0FBQUEsdUVBU0dBLCtDQVRIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQVNvQixDQVRwQjtBQUFBO0FBQUEsOEVBVUdBLCtDQVZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQVUyQixFQVYzQjtBQUFBO0FBQUEsOEVBV0dDLG9EQVhILEVBV1lELCtDQVhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQVdtQyxFQVhuQztBQUFBO0FBQUEsNkVBWUdDLG9EQVpILEVBWVlELCtDQVpaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQVlrQyxFQVpsQztBQUFBO0FBQUEsZ0ZBYUdDLG9EQWJILEVBYVlELCtDQWJaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQWFxQyxLQWJyQztBQUFBO0FBQUEsZ0ZBZUdDLG9EQWZILEVBZVlELCtDQWZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQWVxQyxFQWZyQztBQUFBO0FBQUEsbUZBZ0JHQyxvREFoQkgsRUFnQllELCtDQWhCWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FnQndDLEtBaEJ4QztBQUFBO0FBQUEsa0ZBaUJHQyxvREFqQkgsRUFpQllELCtDQWpCWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FpQnVDLEtBakJ2QztBQUFBO0FBQUEsK0VBbUJHRSwyQ0FuQkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBbUJ3QkMsT0FBRCxJQUFhO0FBQ2hDLFVBQUkva0IsS0FBSyxHQUFHQyxrRkFBWSxDQUFDOGtCLE9BQUQsQ0FBeEI7QUFDQSxXQUFLL3JCLElBQUwsR0FBWStyQixPQUFaO0FBQ0EsV0FBS25tQixTQUFMLEdBQWlCb0IsS0FBSyxDQUFDNUcsS0FBdkI7QUFDQSxXQUFLeUYsT0FBTCxHQUFlbUIsS0FBSyxDQUFDMUcsR0FBckI7QUFDRCxLQXhCSDtBQUFBO0FBQUEsMkVBMEJHd3JCLDJDQTFCSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0EwQm9CbmYsR0FBRCxJQUFTO0FBQ3hCLFdBQUtBLEdBQUwsSUFBWUEsR0FBWjtBQUNELEtBNUJIO0FBQUE7QUFBQSw2RUE4QkdtZiwyQ0E5Qkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBOEJxQixNQUFNO0FBQ3ZCLFdBQUtuZixHQUFMLEdBQVcsQ0FBWDtBQUNELEtBaENIO0FBQUE7QUFBQSxtRkFrQ0dtZiwyQ0FsQ0g7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBa0M0Qm54QixJQUFELElBQVU7QUFDakMsV0FBS3hELFVBQUwsQ0FBZ0JxQyxJQUFoQixDQUFxQm1CLElBQXJCO0FBQ0QsS0FwQ0g7QUFBQTtBQUFBLGdGQXNDR214QiwyQ0F0Q0g7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBc0N3QixDQUFDcmtCLElBQUQsRUFBT0UsSUFBUCxLQUFnQjtBQUNwQyxVQUFJLEtBQUtKLFNBQUwsQ0FBZSxDQUFmLEtBQXFCM04sU0FBekIsRUFBb0M7QUFDbEMsWUFBSW95QixPQUFPLEdBQUcsRUFBZDtBQUNBQSxlQUFPLENBQUMsTUFBRCxDQUFQLEdBQWtCcmtCLElBQWxCO0FBQ0Fxa0IsZUFBTyxDQUFDLE1BQUQsQ0FBUCxHQUFrQnZrQixJQUFsQjtBQUNBLGFBQUtGLFNBQUwsQ0FBZS9OLElBQWYsQ0FBb0J3eUIsT0FBcEI7QUFDRCxPQUxELE1BS087QUFDTCxZQUFJQyxrQkFBa0IsR0FBRyxLQUF6Qjs7QUFDQSxhQUFLLElBQUlqekIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLdU8sU0FBTCxDQUFlck8sTUFBbkMsRUFBMkNGLENBQUMsRUFBNUMsRUFBZ0Q7QUFDOUMsY0FBSSxLQUFLdU8sU0FBTCxDQUFldk8sQ0FBZixFQUFrQnlPLElBQWxCLElBQTBCQSxJQUE5QixFQUFvQztBQUNsQyxpQkFBS0YsU0FBTCxDQUFldk8sQ0FBZixFQUFrQjJPLElBQWxCLEdBQXlCQSxJQUF6QjtBQUNBc2tCLDhCQUFrQixHQUFHLElBQXJCO0FBQ0Q7O0FBQ0QsY0FBSWp6QixDQUFDLElBQUksS0FBS3VPLFNBQUwsQ0FBZXJPLE1BQWYsR0FBd0IsQ0FBN0IsSUFBa0MreUIsa0JBQWtCLElBQUksS0FBNUQsRUFBbUU7QUFDakUsZ0JBQUlELE9BQU8sR0FBRyxFQUFkO0FBQ0FBLG1CQUFPLENBQUMsTUFBRCxDQUFQLEdBQWtCcmtCLElBQWxCO0FBQ0Fxa0IsbUJBQU8sQ0FBQyxNQUFELENBQVAsR0FBa0J2a0IsSUFBbEI7QUFDQSxpQkFBS0YsU0FBTCxDQUFlL04sSUFBZixDQUFvQnd5QixPQUFwQjtBQUNEO0FBQ0Y7QUFDRjtBQUNGLEtBM0RIO0FBQUE7QUFBQSxtRkE2REdGLDJDQTdESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0E2RDJCLE1BQU07QUFDN0IsV0FBS3ZrQixTQUFMLEdBQWlCLEVBQWpCO0FBQ0QsS0EvREg7QUFBQTtBQUFBLCtFQWlFR3VrQiwyQ0FqRUg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBaUV1QixDQUFDcmtCLElBQUQsRUFBT0ssR0FBUCxLQUFlO0FBQ2xDLFVBQUlva0IsTUFBTSxHQUFHLEVBQWI7QUFDQUEsWUFBTSxDQUFDLEtBQUQsQ0FBTixHQUFnQnBrQixHQUFoQjtBQUNBb2tCLFlBQU0sQ0FBQyxNQUFELENBQU4sR0FBaUJ6a0IsSUFBakI7QUFDQSxXQUFLMGtCLFFBQUwsQ0FBYzN5QixJQUFkLENBQW1CMHlCLE1BQW5CO0FBQ0EsV0FBSy9qQixpQkFBTDtBQUNELEtBdkVIO0FBQUE7QUFBQSxrRkF5RUcyakIsMkNBekVIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQXlFMEIsTUFBTTtBQUM1QixXQUFLSyxRQUFMLEdBQWdCLEVBQWhCO0FBQ0QsS0EzRUg7QUFBQTtBQUFBLHNGQTZFR0wsMkNBN0VIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQTZFOEIsTUFBTTtBQUNoQyxXQUFLM2xCLFdBQUwsR0FBbUIsSUFBbkI7QUFDRCxLQS9FSDtBQUFBO0FBQUEscUZBZ0ZHMmxCLDJDQWhGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FnRjZCLE1BQU07QUFDL0IsV0FBSzNsQixXQUFMLEdBQW1CLEtBQW5CO0FBQ0QsS0FsRkg7QUFBQTtBQUFBLDhFQW1GRzJsQiwyQ0FuRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBbUZ1Qk0sU0FBRCxJQUFlO0FBQ2pDLFdBQUtybUIsTUFBTCxHQUFjcW1CLFNBQWQ7QUFDRCxLQXJGSDtBQUFBO0FBQUEsNkVBdUZHTiwyQ0F2Rkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBdUZxQixNQUFNO0FBQ3ZCLFdBQUtuZixHQUFMLEdBQVcsQ0FBWDtBQUNELEtBekZIO0FBQUE7QUFBQSxtRkEyRkdtZiwyQ0EzRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBMkY0QnBnQixHQUFELElBQVM7QUFDaEMsV0FBS2xULFdBQUwsR0FBbUJrVCxHQUFuQjtBQUNELEtBN0ZIO0FBQUE7QUFBQTtBQWdHQSxJQUFJdlQsS0FBSyxHQUFHLElBQVo7QUFDTyxNQUFNazBCLE9BQU8sR0FBR3BLLDJEQUFNLEVBQXRCO0FBQ0EsTUFBTXFLLFlBQVksR0FBR0MsMkRBQWEsQ0FBQyxJQUFJWixLQUFKLEVBQUQsQ0FBbEM7QUFFQSxTQUFTYSxlQUFULENBQXlCL3NCLFdBQXpCLEVBQXNDO0FBQzNDO0FBQ0EsTUFBSWdzQixRQUFKLEVBQWM7QUFDWixXQUFPLElBQUlFLEtBQUosQ0FBVUYsUUFBVixFQUFvQmhzQixXQUFwQixDQUFQO0FBQ0Q7O0FBQ0QsTUFBSXRILEtBQUssS0FBSyxJQUFkLEVBQW9CO0FBQ2xCQSxTQUFLLEdBQUcsSUFBSXd6QixLQUFKLENBQVVGLFFBQVYsRUFBb0Joc0IsV0FBcEIsQ0FBUjtBQUNEOztBQUVENHNCLFNBQU8sQ0FBQyxPQUFELEVBQVVsMEIsS0FBVixDQUFQLENBQXdCNEIsSUFBeEIsQ0FBNkIsTUFBTTtBQUNqQ3pCLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLDZCQUFaO0FBQ0QsR0FGRDtBQUlBLFNBQU9KLEtBQVA7QUFDRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0hELDhEOzs7Ozs7Ozs7OztBQ0FBLDJEOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLDZEOzs7Ozs7Ozs7OztBQ0FBLHVEOzs7Ozs7Ozs7OztBQ0FBLDhEOzs7Ozs7Ozs7OztBQ0FBLHlEOzs7Ozs7Ozs7OztBQ0FBLDREOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLHlEOzs7Ozs7Ozs7OztBQ0FBLDBEOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLGdDIiwiZmlsZSI6InN0YXRpYy9kZXZlbG9wbWVudC9wYWdlcy9kYXNoYm9hcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNyk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7IiwiaW1wb3J0IFwiYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCAoeyBjaGlsZHJlbiB9KSA9PiA8bWFpbj57Y2hpbGRyZW59PC9tYWluPjtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQge1xuICBDb250YWluRGl2LFxuICBOZXh0VG9EaXYsXG4gIE5leHRUb0RpdkhlYWRlcixcbiAgUm93Q29udGFpbmVyLFxuICBDb250YWluRGl2SGVhZGVyLFxufSBmcm9tIFwiLi4vVGFkZXMvVHJhZGVzXCI7XG5pbXBvcnQgUmVDaGFydCBmcm9tIFwiLi4vVGFkZXMvVHJhZGVzXCI7XG5pbXBvcnQgU2lkZWJhciwgeyBTeW1ib2xDaG9vc2VyLCBQbmwgfSBmcm9tIFwiLi4vLi4vTWVudS9NZW51XCI7XG5pbXBvcnQgeyBQbmw3NjgsIFN5bWJvbENob29zZXI3NjggfSBmcm9tIFwiLi4vLi4vTWVudS83NjhweC9NZW51XCI7XG5pbXBvcnQgeyBnZXROZXdEYXQgfSBmcm9tIFwiLi4vc2hhcmVkL2hlbHBlcnNcIjtcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcbmltcG9ydCB7IGZhQ2FyZXRMZWZ0IH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTm90ZXMgZnJvbSBcIi4uL05vdGVzL05vdGVzVGVzdFwiO1xuaW1wb3J0IFRhYnMgZnJvbSBcIi4uL1RhYnNcIjtcbmltcG9ydCB7XG4gIE5hdixcbiAgTmF2SXRlbSxcbiAgRHJvcGRvd24sXG4gIERyb3Bkb3duSXRlbSxcbiAgRHJvcGRvd25Ub2dnbGUsXG4gIERyb3Bkb3duTWVudSxcbiAgTmF2TGluayxcbn0gZnJvbSBcInJlYWN0c3RyYXBcIjtcblxuaW1wb3J0IHsgaW5qZWN0LCBvYnNlcnZlciB9IGZyb20gXCJtb2J4LXJlYWN0XCI7XG5pbXBvcnQgeyB3aGVuLCByZWFjdGlvbiB9IGZyb20gXCJtb2J4XCI7XG5pbXBvcnQgeyB3aWRlRm9udCB9IGZyb20gXCIuLi8uLi9zaGFyZWQvaGVscGVyc1wiO1xuXG5AaW5qZWN0KFwic3RvcmVcIilcbkBvYnNlcnZlclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZ2xvYmFsSGFzaDogW10sXG4gICAgICBnbG9iYWxIYXNoQWN0aXZlOiBbXCJhbGxcIl0sXG4gICAgICBkYXRhOiBudWxsLFxuICAgICAgZmlsdGVyZWREYXRhOiBudWxsLFxuICAgICAgaXNTaW5nbGU6IGZhbHNlLFxuICAgICAgaXNTaW5nbGVOb3RlczogZmFsc2UsXG4gICAgfTtcbiAgICB0aGlzLmdldEdsb2JhbEhhc2h0YWdzID0gdGhpcy5nZXRHbG9iYWxIYXNodGFncy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFzaHRhZ0NsaWNrZWQgPSB0aGlzLmhhc2h0YWdDbGlja2VkLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYXNodGFnQ2xpY2tlZEJhY2sgPSB0aGlzLmhhc2h0YWdDbGlja2VkQmFjay5iaW5kKHRoaXMpO1xuICAgIHRoaXMudXBkYXRlV2luZG93RGltZW5zaW9ucyA9IHRoaXMudXBkYXRlV2luZG93RGltZW5zaW9ucy5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhOiB0aGlzLnByb3BzLmRhdGEgfSk7XG4gICAgdGhpcy5nZXRHbG9iYWxIYXNodGFncyh0aGlzLnByb3BzLmRhdGEpO1xuICB9XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuc2luZ2xlVHJhZGVSZWFjdGlvbiA9IHJlYWN0aW9uKFxuICAgICAgKCkgPT4gdGhpcy5wcm9wcy5zdG9yZS5oYXNTaW5nbGVUcmFkZSxcbiAgICAgIChub3RpZmljYXRpb25zLCByZWFjdGlvbikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkhBUyBTSU5HTEVcIiwgdGhpcy5wcm9wcy5zdG9yZS5oYXNTaW5nbGVUcmFkZSk7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLnN0b3JlLmhhc1NpbmdsZVRyYWRlID09IGZhbHNlKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzU2luZ2xlOiBmYWxzZSB9KTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInNldHRpbmcgYmFja1wiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGlzU2luZ2xlOiB0cnVlLFxuICAgICAgICAgICAgc2luZ2xlVHJhZGU6IHRoaXMucHJvcHMuc3RvcmUuc2luZ2xlVHJhZGVbMF0sXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSwgXCJTVEFURUVcIik7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJzZXR0aW5nIGJhY2tcIik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApO1xuICAgIHRoaXMuc2luZ2xlTm90ZXNSZWFjdGlvbiA9IHJlYWN0aW9uKFxuICAgICAgKCkgPT4gdGhpcy5wcm9wcy5zdG9yZS5pc1NpbmdsZU5vdGVzLFxuICAgICAgKG5vdGlmaWNhdGlvbnMsIHJlYWN0aW9uKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLnN0b3JlLmlzU2luZ2xlTm90ZXMgPT0gZmFsc2UpIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNTaW5nbGVOb3RlczogZmFsc2UgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpc1NpbmdsZU5vdGVzOiB0cnVlLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgKTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMudXBkYXRlV2luZG93RGltZW5zaW9ucyk7XG4gIH1cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy51cGRhdGVXaW5kb3dEaW1lbnNpb25zKTtcbiAgfVxuICB1cGRhdGVXaW5kb3dEaW1lbnNpb25zKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgZ2V0R2xvYmFsSGFzaHRhZ3MoZGF0YSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5mZXRjaFRyYWRlSGlzdG9yeS5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHRoaXNUcmFkZUhhc2ggPSBkYXRhLmZldGNoVHJhZGVIaXN0b3J5W2ldLmhhc2h0YWdzLnNwbGl0KFwiLFwiKTtcbiAgICAgIGlmICh0aGlzVHJhZGVIYXNoICE9IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzVHJhZGVIYXNoLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgaWYgKHRoaXNUcmFkZUhhc2hbal0gIT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgbGV0IG5ld0dsb2JhbEhhc2ggPSB0aGlzLnN0YXRlLmdsb2JhbEhhc2g7XG4gICAgICAgICAgICBuZXdHbG9iYWxIYXNoLnB1c2godGhpc1RyYWRlSGFzaFtqXSk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZ2xvYmFsSGFzaDogbmV3R2xvYmFsSGFzaCB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhc3luYyBoYXNodGFnQ2xpY2tlZEJhY2sodmFsdWUpIHtcbiAgICBpZiAodmFsdWUgPT0gXCJhbGxcIikge1xuICAgICAgY29uc29sZS5sb2coXCJETyBOT1RISU5HXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgbmV3SGFzaEFjdGl2ZSA9IFtdO1xuICAgICAgbGV0IG5ld0hhc2ggPSB0aGlzLnN0YXRlLmdsb2JhbEhhc2g7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3RhdGUuZ2xvYmFsSGFzaEFjdGl2ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodmFsdWUgIT09IHRoaXMuc3RhdGUuZ2xvYmFsSGFzaEFjdGl2ZVtpXSkge1xuICAgICAgICAgIG5ld0hhc2hBY3RpdmUucHVzaCh0aGlzLnN0YXRlLmdsb2JhbEhhc2hBY3RpdmVbaV0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5ld0hhc2gucHVzaCh0aGlzLnN0YXRlLmdsb2JhbEhhc2hBY3RpdmVbaV0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpID09IHRoaXMuc3RhdGUuZ2xvYmFsSGFzaEFjdGl2ZS5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgaWYgKG5ld0hhc2hBY3RpdmVbMF0gPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBsZXQgbmV3SGFzaDIgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbmV3SGFzaC5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICBpZiAobmV3SGFzaFtqXSAhPSBcImFsbFwiKSB7XG4gICAgICAgICAgICAgICAgbmV3SGFzaDIucHVzaChuZXdIYXNoW2pdKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoaiA9PSBuZXdIYXNoLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgIGdsb2JhbEhhc2g6IG5ld0hhc2gyLFxuICAgICAgICAgICAgICAgICAgZ2xvYmFsSGFzaEFjdGl2ZTogW1wiYWxsXCJdLFxuICAgICAgICAgICAgICAgICAgZmlsdGVyZWREYXRhOiBudWxsLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBuZXdIYXNoMiA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBuZXdIYXNoLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgIGlmIChuZXdIYXNoW2pdICE9IFwiYWxsXCIpIHtcbiAgICAgICAgICAgICAgICBuZXdIYXNoMi5wdXNoKG5ld0hhc2hbal0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChqID09IG5ld0hhc2gubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIGdldE5ld0RhdCh0aGlzLnN0YXRlLmRhdGEsIG5ld0hhc2hBY3RpdmUpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbEhhc2g6IG5ld0hhc2gyLFxuICAgICAgICAgICAgICAgICAgICBnbG9iYWxIYXNoQWN0aXZlOiBuZXdIYXNoQWN0aXZlLFxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJlZERhdGE6IHJlcyxcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgaGFzaHRhZ0NsaWNrZWQodmFsdWUpIHtcbiAgICBpZiAodmFsdWUgPT0gXCJhbGxcIikge1xuICAgICAgbGV0IG5ld0dsb2JhbEhhc2ggPSB0aGlzLnN0YXRlLmdsb2JhbEhhc2g7XG4gICAgICBsZXQgbmV3R2xvYmFsSGFzaDIgPSBbXTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zdGF0ZS5nbG9iYWxIYXNoQWN0aXZlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIG5ld0dsb2JhbEhhc2gucHVzaCh0aGlzLnN0YXRlLmdsb2JhbEhhc2hBY3RpdmVbaV0pO1xuICAgICAgICBpZiAoaSA9PSB0aGlzLnN0YXRlLmdsb2JhbEhhc2hBY3RpdmUubGVuZ3RoIC0gMSkge1xuICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbmV3R2xvYmFsSGFzaC5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgaWYgKG5ld0dsb2JhbEhhc2hbal0gIT0gXCJhbGxcIikge1xuICAgICAgICAgICAgICBuZXdHbG9iYWxIYXNoMi5wdXNoKG5ld0dsb2JhbEhhc2hbal0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGogPT0gbmV3R2xvYmFsSGFzaC5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGdsb2JhbEhhc2g6IG5ld0dsb2JhbEhhc2gyLFxuICAgICAgICAgICAgICAgIGdsb2JhbEhhc2hBY3RpdmU6IFtcImFsbFwiXSxcbiAgICAgICAgICAgICAgICBmaWx0ZXJlZERhdGE6IG51bGwsXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLnN0YXRlLmdsb2JhbEhhc2hBY3RpdmVbMF0gPT0gdW5kZWZpbmVkKSB7XG4gICAgICBsZXQgbmV3QXJyYXkgPSBbXTtcbiAgICAgIG5ld0FycmF5LnB1c2godmFsdWUpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGdsb2JhbEhhc2hBY3RpdmU6IG5ld0FycmF5IH0pO1xuICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnN0YXRlLmdsb2JhbEhhc2guaW5kZXhPZih2YWx1ZSk7XG4gICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICBsZXQgbmV3R2xvYmFsSGFzaCA9IHRoaXMuc3RhdGUuZ2xvYmFsSGFzaDtcbiAgICAgICAgbmV3R2xvYmFsSGFzaC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZ2xvYmFsSGFzaDogbmV3R2xvYmFsSGFzaCB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnN0YXRlLmdsb2JhbEhhc2hBY3RpdmUubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLmdsb2JhbEhhc2hBY3RpdmVbaV0gPT0gXCJhbGxcIikge1xuICAgICAgICB0aGlzLnN0YXRlLmdsb2JhbEhhc2hBY3RpdmUgPSBbXTtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnN0YXRlLmdsb2JhbEhhc2guaW5kZXhPZih2YWx1ZSk7XG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgbGV0IG5ld0dsb2JhbEhhc2ggPSB0aGlzLnN0YXRlLmdsb2JhbEhhc2g7XG4gICAgICAgICAgbmV3R2xvYmFsSGFzaC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgIGxldCB0b3JmID0gZmFsc2U7XG4gICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBuZXdHbG9iYWxIYXNoLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBpZiAoXCJhbGxcIiA9PSBuZXdHbG9iYWxIYXNoW2pdKSB7XG4gICAgICAgICAgICAgIHRvcmYgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGogPT0gbmV3R2xvYmFsSGFzaC5sZW5ndGggLSAxICYmIHRvcmYgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgbmV3R2xvYmFsSGFzaC5wdXNoKFwiYWxsXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBsZXQgbmV3R2xvYmFsSGFzaEFjdGl2ZSA9IHRoaXMuc3RhdGUuZ2xvYmFsSGFzaEFjdGl2ZTtcbiAgICAgICAgICBuZXdHbG9iYWxIYXNoQWN0aXZlLnB1c2godmFsdWUpO1xuICAgICAgICAgIGdldE5ld0RhdCh0aGlzLnN0YXRlLmRhdGEsIG5ld0dsb2JhbEhhc2hBY3RpdmUpLnRoZW4oKG5ld0RhdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIGdsb2JhbEhhc2hBY3RpdmU6IG5ld0dsb2JhbEhhc2hBY3RpdmUsXG4gICAgICAgICAgICAgIGdsb2JhbEhhc2g6IG5ld0dsb2JhbEhhc2gsXG4gICAgICAgICAgICAgIGZpbHRlcmVkRGF0YTogbmV3RGF0LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh2YWx1ZSA9PSB0aGlzLnN0YXRlLmdsb2JhbEhhc2hBY3RpdmVbaV0pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGkgPT0gdGhpcy5zdGF0ZS5nbG9iYWxIYXNoQWN0aXZlLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnN0YXRlLmdsb2JhbEhhc2guaW5kZXhPZih2YWx1ZSk7XG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgbGV0IG5ld0dsb2JhbEhhc2ggPSB0aGlzLnN0YXRlLmdsb2JhbEhhc2g7XG4gICAgICAgICAgbmV3R2xvYmFsSGFzaC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgIC8vIG5ld0dsb2JhbEhhc2gucHVzaChcImFsbFwiKTtcbiAgICAgICAgICBsZXQgdG9yZiA9IGZhbHNlO1xuICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbmV3R2xvYmFsSGFzaC5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgaWYgKFwiYWxsXCIgPT0gbmV3R2xvYmFsSGFzaFtqXSkge1xuICAgICAgICAgICAgICB0b3JmID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChqID09IG5ld0dsb2JhbEhhc2gubGVuZ3RoIC0gMSAmJiB0b3JmID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgIG5ld0dsb2JhbEhhc2gucHVzaChcImFsbFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgbGV0IG5ld0dsb2JhbEhhc2hBY3RpdmUgPSB0aGlzLnN0YXRlLmdsb2JhbEhhc2hBY3RpdmU7XG4gICAgICAgICAgbmV3R2xvYmFsSGFzaEFjdGl2ZS5wdXNoKHZhbHVlKTtcbiAgICAgICAgICBnZXROZXdEYXQodGhpcy5zdGF0ZS5kYXRhLCBuZXdHbG9iYWxIYXNoQWN0aXZlKS50aGVuKChuZXdEYXQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICBnbG9iYWxIYXNoQWN0aXZlOiBuZXdHbG9iYWxIYXNoQWN0aXZlLFxuICAgICAgICAgICAgICBnbG9iYWxIYXNoOiBuZXdHbG9iYWxIYXNoLFxuICAgICAgICAgICAgICBmaWx0ZXJlZERhdGE6IG5ld0RhdCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5kYXRhICE9IG51bGwpIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLmlzU2luZ2xlID09IGZhbHNlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiSVMgU0lOR0xFIElTIEZBTFNFXCIpO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxXcmFwcGVyPlxuICAgICAgICAgICAgPENoYXJ0V3JhcHBlcj5cbiAgICAgICAgICAgICAgPFRvcEJhclBhcmVudD5cbiAgICAgICAgICAgICAgICA8VG9wQmFyVG9wPlxuICAgICAgICAgICAgICAgICAgPFRvcEJhclRvcExlZnQ+XG4gICAgICAgICAgICAgICAgICAgIDxQbmw3NjggLz5cbiAgICAgICAgICAgICAgICAgIDwvVG9wQmFyVG9wTGVmdD5cbiAgICAgICAgICAgICAgICAgIDxUb3BCYXJUb3BSaWdodD5cbiAgICAgICAgICAgICAgICAgICAgPFN5bWJvbENob29zZXI3NjggLz5cbiAgICAgICAgICAgICAgICAgIDwvVG9wQmFyVG9wUmlnaHQ+XG4gICAgICAgICAgICAgICAgPC9Ub3BCYXJUb3A+XG4gICAgICAgICAgICAgICAgPFRvcEJhckJvdHRvbT5cbiAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmdsb2JhbEhhc2hBY3RpdmUubWFwKChoYXNoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgPFRvcEhhc2h0YWdJbmRpdmlkdWFsQWN0aXZlXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhc2h0YWdDbGlja2VkQmFjayhoYXNoKX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAje2hhc2h9XG4gICAgICAgICAgICAgICAgICAgICAgPC9Ub3BIYXNodGFnSW5kaXZpZHVhbEFjdGl2ZT5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZ2xvYmFsSGFzaC5tYXAoKGhhc2gpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICA8VG9wSGFzaHRhZ0luZGl2aWR1YWxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFzaHRhZ0NsaWNrZWQoaGFzaCl9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgI3toYXNofVxuICAgICAgICAgICAgICAgICAgICAgIDwvVG9wSGFzaHRhZ0luZGl2aWR1YWw+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L1RvcEJhckJvdHRvbT5cbiAgICAgICAgICAgICAgPC9Ub3BCYXJQYXJlbnQ+XG4gICAgICAgICAgICAgIDxXaG9sZUdyaWQ+XG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuaXNTaW5nbGVOb3RlcyA9PSBmYWxzZSA/IChcbiAgICAgICAgICAgICAgICAgIDxDb250YWluRGl2SGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICA8TmV4dFRvRGl2SGVhZGVyPlN0YXJ0PC9OZXh0VG9EaXZIZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgIDxOZXh0VG9EaXZIZWFkZXI+RW5kPC9OZXh0VG9EaXZIZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgIDxOZXh0VG9EaXZIZWFkZXI+TC9TPC9OZXh0VG9EaXZIZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgIDxOZXh0VG9EaXZIZWFkZXI+RW50cnk8L05leHRUb0RpdkhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgPE5leHRUb0RpdkhlYWRlcj5FeGl0PC9OZXh0VG9EaXZIZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgIDxOZXh0VG9EaXZIZWFkZXI+UXR5PC9OZXh0VG9EaXZIZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgIDxOZXh0VG9EaXZIZWFkZXI+UlBOTDwvTmV4dFRvRGl2SGVhZGVyPlxuICAgICAgICAgICAgICAgICAgPC9Db250YWluRGl2SGVhZGVyPlxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgIDxSZUNoYXJ0XG4gICAgICAgICAgICAgICAgICBkYXRhPXt0aGlzLnN0YXRlLmRhdGF9XG4gICAgICAgICAgICAgICAgICBmaWx0ZXJlZERhdGE9e3RoaXMuc3RhdGUuZmlsdGVyZWREYXRhfVxuICAgICAgICAgICAgICAgICAgaW5pdERhdGE9e3RoaXMucHJvcHMuZGF0YX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L1dob2xlR3JpZD5cbiAgICAgICAgICAgIDwvQ2hhcnRXcmFwcGVyPlxuICAgICAgICAgIDwvV3JhcHBlcj5cbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiSVMgU0lOR0xFIElTIFRSVUVcIik7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPFdyYXBwZXI+XG4gICAgICAgICAgICA8Q2hhcnRXcmFwcGVyPlxuICAgICAgICAgICAgICA8VG9wQmFyUGFyZW50PlxuICAgICAgICAgICAgICAgIDxUb3BCYXJDaGlsZEJpZ0xlZnQ+XG4gICAgICAgICAgICAgICAgICA8VGFicyAvPlxuICAgICAgICAgICAgICAgIDwvVG9wQmFyQ2hpbGRCaWdMZWZ0PlxuICAgICAgICAgICAgICAgIDxUb3BCYXJDaGlsZFNtYWxsPlxuICAgICAgICAgICAgICAgICAgPFRvcEhhc2h0YWdJbmRpdmlkdWFsQWN0aXZlUG5sPlxuICAgICAgICAgICAgICAgICAgICA8UG5sIC8+XG4gICAgICAgICAgICAgICAgICA8L1RvcEhhc2h0YWdJbmRpdmlkdWFsQWN0aXZlUG5sPlxuICAgICAgICAgICAgICAgIDwvVG9wQmFyQ2hpbGRTbWFsbD5cbiAgICAgICAgICAgICAgICA8VG9wQmFyQ2hpbGRCaWdSaWdodD5cbiAgICAgICAgICAgICAgICAgIDxSaWdodFRhYnM+XG4gICAgICAgICAgICAgICAgICAgIDxOb3RlcyBmaXJzdFRyYWRlPXt0aGlzLnN0YXRlLnNpbmdsZVRyYWRlfSAvPlxuICAgICAgICAgICAgICAgICAgPC9SaWdodFRhYnM+XG4gICAgICAgICAgICAgICAgPC9Ub3BCYXJDaGlsZEJpZ1JpZ2h0PlxuICAgICAgICAgICAgICA8L1RvcEJhclBhcmVudD5cbiAgICAgICAgICAgICAgPFdob2xlR3JpZD5cbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5pc1NpbmdsZU5vdGVzID09IGZhbHNlID8gKFxuICAgICAgICAgICAgICAgICAgPENvbnRhaW5EaXZIZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgIDxOZXh0VG9EaXZIZWFkZXI+U3RhcnQ8L05leHRUb0RpdkhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgPE5leHRUb0RpdkhlYWRlcj5FbmQ8L05leHRUb0RpdkhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgPE5leHRUb0RpdkhlYWRlcj5ML1M8L05leHRUb0RpdkhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgPE5leHRUb0RpdkhlYWRlcj5FbnRyeTwvTmV4dFRvRGl2SGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICA8TmV4dFRvRGl2SGVhZGVyPkV4aXQ8L05leHRUb0RpdkhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgPE5leHRUb0RpdkhlYWRlcj5RdHk8L05leHRUb0RpdkhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgPE5leHRUb0RpdkhlYWRlcj5SUE5MPC9OZXh0VG9EaXZIZWFkZXI+XG4gICAgICAgICAgICAgICAgICA8L0NvbnRhaW5EaXZIZWFkZXI+XG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgPFJlQ2hhcnRcbiAgICAgICAgICAgICAgICAgIGRhdGE9e3RoaXMuc3RhdGUuZGF0YX1cbiAgICAgICAgICAgICAgICAgIGZpbHRlcmVkRGF0YT17dGhpcy5zdGF0ZS5maWx0ZXJlZERhdGF9XG4gICAgICAgICAgICAgICAgICBpbml0RGF0YT17dGhpcy5wcm9wcy5kYXRhfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvV2hvbGVHcmlkPlxuICAgICAgICAgICAgPC9DaGFydFdyYXBwZXI+XG4gICAgICAgICAgPC9XcmFwcGVyPlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBTaW5nbGVUYWJJbm5lciA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbjogYXV0bztcbmA7XG5cbmNvbnN0IFNpbmdsZVRhYiA9IHN0eWxlZC5kaXZgXG4gIGNvbG9yOiAkeyhwcm9wcykgPT4gKHByb3BzLmlzQWN0aXZlID8gXCIjZmZmXCIgOiBcIiMwMDBcIil9O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwcm9wcykgPT4gKHByb3BzLmlzQWN0aXZlID8gXCIjMDAwXCIgOiBcIiNmZmZcIil9O1xuXG4gIG1hcmdpbjogYXV0byAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbmA7XG5cbmNvbnN0IFdyYXBUYWJzID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZm9udC1zaXplOiAxNXB4O1xuYDtcbmNvbnN0IFdob2xlR3JpZCA9IHN0eWxlZC5kaXZgYDtcbi8vIGJvcmRlcjogMXB4IHNvbGlkICNmMmYyZjI7XG5cbmNvbnN0IFRvcEJhclBhcmVudCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcbmA7XG5jb25zdCBUb3BCYXJUb3AgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbmA7XG5jb25zdCBUb3BCYXJCb3R0b20gPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgb3ZlcmZsb3c6IGF1dG87XG5gO1xuXG4vLyBmbGV4OiAxIDEgNDUlOyAvKmdyb3cgfCBzaHJpbmsgfCBiYXNpcyAqL1xuY29uc3QgVG9wQmFyVG9wUmlnaHQgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBvdmVyZmxvdzogYXV0bztcbmA7XG5jb25zdCBUb3BCYXJUb3BMZWZ0ID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgb3ZlcmZsb3c6IGF1dG87XG4gICR7d2lkZUZvbnR9XG5gO1xuXG5jb25zdCBUb3BCYXJDaGlsZFNtYWxsID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgd2lkdGg6IDEwJTtcbmA7XG5cbmNvbnN0IFRvcEhhc2h0YWdJbmRpdmlkdWFsID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZDogI2Y4ZjhmZjtcbiAgY29sb3I6ICMwMDA7XG4gIHBhZGRpbmc6IDhweDtcbiAgbWFyZ2luOiAwIDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgJHt3aWRlRm9udH1cblxuICA6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICBtYXJnaW4tbGVmdDogMDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbmA7XG5cbmNvbnN0IFRvcEhhc2h0YWdJbmRpdmlkdWFsQWN0aXZlID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZDogIzIxMjUyODtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDhweDtcbiAgbWFyZ2luOiAwIDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgJHt3aWRlRm9udH1cbiAgOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG5gO1xuY29uc3QgVG9wSGFzaHRhZ0luZGl2aWR1YWxBY3RpdmVSaWdodCA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQ6ICMyMTI1Mjg7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiA4cHg7XG4gIG1hcmdpbjogMCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gICR7d2lkZUZvbnR9XG4gIG1hcmdpbjowIGF1dG87XG4gIDpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIG1hcmdpbi1yaWdodDogMDtcbmA7XG5jb25zdCBSaWdodFRhYnMgPSBzdHlsZWQuZGl2YFxuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luOiAwIDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgJHt3aWRlRm9udH1cbiAgbWFyZ2luOjAgYXV0bztcbiAgOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgbWFyZ2luLXJpZ2h0OiAwO1xuYDtcblxuY29uc3QgVG9wSGFzaHRhZ0luZGl2aWR1YWxBY3RpdmVQbmwgPSBzdHlsZWQuZGl2YFxuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDAgMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAke3dpZGVGb250fVxuICA6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICBtYXJnaW46IGF1dG87XG5gO1xuXG5jb25zdCBDaGFydFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZzogNXB4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweDtcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIH1cbmA7XG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG5gO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEFwb2xsb0NvbnN1bWVyIH0gZnJvbSBcInJlYWN0LWFwb2xsb1wiO1xuaW1wb3J0IGdxbCBmcm9tIFwiZ3JhcGhxbC10YWdcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBBbGVydCB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XG5pbXBvcnQgXCJib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgRm9ybVdyYXBwZXIgZnJvbSBcIi4uL2Zvcm0vRm9ybVdyYXBwZXJcIjtcbmltcG9ydCBJbnB1dCBmcm9tIFwiLi4vZm9ybS9JbnB1dFwiO1xuaW1wb3J0IExhYmVsIGZyb20gXCIuLi9mb3JtL0xhYmVsXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9zaGFyZWQvQnV0dG9uXCI7XG5jb25zdCBDb29raWUgPSByZXF1aXJlKFwianMtY29va2llXCIpO1xuXG5jb25zdCBBcGlLZXlGb3JtID0gKCkgPT4ge1xuICBjb25zdCBbcmVzLCBzZXRSZXNdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW25vdFN1Ym1pdHRlZCwgc2V0Tm90U3VibWl0dGVkXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChldmVudCwgY2xpZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBzZXROb3RTdWJtaXR0ZWQoZmFsc2UpO1xuICAgIGNvbnN0IGZvcm0gPSBldmVudC50YXJnZXQ7XG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgd2luZG93LkZvcm1EYXRhKGZvcm0pO1xuICAgIGNvbnN0IGtleSA9IGZvcm1EYXRhLmdldChcImtleVwiKTtcbiAgICBjb25zdCBzZWNyZXQgPSBmb3JtRGF0YS5nZXQoXCJzZWNyZXRcIik7XG4gICAgLy8gY29uc29sZS5sb2coZW1haWwsIHBhc3N3b3JkKTtcbiAgICBmb3JtLnJlc2V0KCk7XG5cbiAgICAvL2NoZWNrIGlmIGFwaSBrZXkgaXMgdmFsaWRcblxuICAgIGxldCBhcGlSZXMgPSBjbGllbnQubXV0YXRlKHtcbiAgICAgIG11dGF0aW9uOiBncWxgXG4gICAgICAgIG11dGF0aW9uIGFkZEFwaUtleSgka2V5OiBTdHJpbmchLCAkc2VjcmV0OiBTdHJpbmchKSB7XG4gICAgICAgICAgYWRkQXBpS2V5KGtleTogJGtleSwgc2VjcmV0OiAkc2VjcmV0KVxuICAgICAgICB9XG4gICAgICBgLFxuICAgICAgdmFyaWFibGVzOiB7IGtleSwgc2VjcmV0IH0sXG4gICAgfSk7XG4gICAgYXBpUmVzXG4gICAgICAudGhlbigoYXBpUmVzKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiPDxSRVM+PlwiKTtcbiAgICAgICAgY29uc29sZS5sb2coYXBpUmVzLmRhdGEuYWRkQXBpS2V5KTtcbiAgICAgICAgY29uc29sZS5sb2codHlwZW9mIGFwaVJlcy5kYXRhLmFkZEFwaUtleSk7XG4gICAgICAgIGxldCBpc1RydWUgPSBhcGlSZXMuZGF0YS5hZGRBcGlLZXkgPT0gdHJ1ZTtcbiAgICAgICAgY29uc29sZS5sb2coaXNUcnVlKTtcbiAgICAgICAgc2V0UmVzKGlzVHJ1ZSk7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoYXBpUmVzKSA9PiB7XG4gICAgICAgIGxldCBpc1RydWUgPSBhcGlSZXMuZGF0YS5hZGRBcGlLZXkgPT0gdHJ1ZTtcbiAgICAgICAgY29uc29sZS5sb2coaXNUcnVlKTtcbiAgICAgICAgc2V0UmVzKGlzVHJ1ZSk7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgfSk7XG4gIH1cbiAgaWYgKG5vdFN1Ym1pdHRlZCA9PSB0cnVlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxBcG9sbG9Db25zdW1lcj5cbiAgICAgICAgeyhjbGllbnQpID0+IChcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPEFsZXJ0IGNvbG9yPVwiaW5mb1wiPlxuICAgICAgICAgICAgICAgIEFkZCBhIEJpdG1leCBhcGkga2V5IHRvIGltcG9ydCB5b3VyIHJlY2VudCB0cmFkZXMgYW5kIHRvXG4gICAgICAgICAgICAgICAgYXV0b21hdGljYWxseSBwb3B1bGF0ZSB5b3VyIGZ1dHVyZSB0cmFkZXMgaW50byB0aGUgcGxhdGZvcm0uXG4gICAgICAgICAgICAgIDwvQWxlcnQ+XG4gICAgICAgICAgICAgIDxBbGVydCBjb2xvcj1cImluZm9cIj5cbiAgICAgICAgICAgICAgICBOb3RlOiBXZSBrZWVwIHRoZSBrZXlzIGVuY3J5cHRlZCBpbiBvdXQgZGF0YWJhc2UsIGhvd2V2ZXIsIG1ha2VcbiAgICAgICAgICAgICAgICBzdXJlIHRvIGxlYXZlIFwid2l0aGRyYXdhbHMgYWxsb3dlZFwiIFVOQ0hFQ0tFRCBhbnl3YXlzIHdoZW5cbiAgICAgICAgICAgICAgICBjaG9vc2luZyBrZXkgc2V0dGluZ3MuXG4gICAgICAgICAgICAgIDwvQWxlcnQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxGb3JtV3JhcHBlcj5cbiAgICAgICAgICAgICAgPFN0eWxlZEZvcm0gb25TdWJtaXQ9eyhldmVudCkgPT4gaGFuZGxlU3VibWl0KGV2ZW50LCBjbGllbnQpfT5cbiAgICAgICAgICAgICAgICA8SW5wdXRXcmFwcGVyPlxuICAgICAgICAgICAgICAgICAgPExhYmVsPmtleTwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJcIiBuYW1lPVwia2V5XCIgdHlwZT1cInRleHRcIiByZXF1aXJlZCAvPlxuICAgICAgICAgICAgICAgIDwvSW5wdXRXcmFwcGVyPlxuICAgICAgICAgICAgICAgIDxJbnB1dFdyYXBwZXI+XG4gICAgICAgICAgICAgICAgICA8TGFiZWw+c2VjcmV0PC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIlwiIG5hbWU9XCJzZWNyZXRcIiB0eXBlPVwidGV4dFwiIHJlcXVpcmVkIC8+XG4gICAgICAgICAgICAgICAgPC9JbnB1dFdyYXBwZXI+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgd2lkdGg6IFwiMTAwJVwiIH19PlxuICAgICAgICAgICAgICAgICAgPFN1Ym1pdEJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9TdWJtaXRCdXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvU3R5bGVkRm9ybT5cbiAgICAgICAgICAgIDwvRm9ybVdyYXBwZXI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L0Fwb2xsb0NvbnN1bWVyPlxuICAgICk7XG4gIH1cblxuICBpZiAobG9hZGluZyA9PSB0cnVlKSB7XG4gICAgcmV0dXJuIDxkaXY+bG9hZGluZzwvZGl2PjtcbiAgfSBlbHNlIHtcbiAgICBpZiAocmVzID09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gPGRpdj5lcnJvciBzdWJtaXR0aW5nLCBwbGVhc2UgcmVsb2FkIHBhZ2UgYW5kIHRyeSBhZ2FpbjwvZGl2PjtcbiAgICB9XG4gICAgaWYgKHJlcyA9PSB0cnVlKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8QXBvbGxvQ29uc3VtZXI+XG4gICAgICAgICAgeyhjbGllbnQpID0+IDxQb3B1bGF0ZSBjbGllbnQ9e2NsaWVudH0gLz59XG4gICAgICAgIDwvQXBvbGxvQ29uc3VtZXI+XG4gICAgICApO1xuICAgIH1cbiAgfVxufTtcblxuY29uc3QgUG9wdWxhdGUgPSAoeyBjbGllbnQgfSkgPT4ge1xuICBjb25zdCBbcmVzLCBzZXRSZXNdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAobG9hZGluZyA9PSB0cnVlKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIklOIFBPUFVMQVRFXCIpO1xuICAgICAgbGV0IG15Q2xpZW50ID0gY2xpZW50O1xuICAgICAgbGV0IGFwaVJlcyA9IG15Q2xpZW50Lm11dGF0ZSh7XG4gICAgICAgIG11dGF0aW9uOiBncWxgXG4gICAgICAgICAgbXV0YXRpb24ge1xuICAgICAgICAgICAgcG9wdWxhdGVcbiAgICAgICAgICB9XG4gICAgICAgIGAsXG4gICAgICB9KTtcbiAgICAgIGFwaVJlcy50aGVuKChyZXNvKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiPDxBUEkgUkVTPj5cIik7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc28pO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNvLmRhdGEucG9wdWxhdGUpO1xuICAgICAgICBzZXRSZXMocmVzby5kYXRhLnBvcHVsYXRlKTtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICBjb25zdCByZXNldEFwaSA9IGFzeW5jIChjbGllbnQpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIlJFU0VUVElOR1wiKTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUpID0+IHtcbiAgICAgIGxldCBrZXkgPSBcIm5vbmVcIjtcbiAgICAgIGxldCBzZWNyZXQgPSBcIm5vbmVcIjtcblxuICAgICAgbGV0IG15UmVzID0gY2xpZW50Lm11dGF0ZSh7XG4gICAgICAgIG11dGF0aW9uOiBncWxgXG4gICAgICAgICAgbXV0YXRpb24gYWRkQXBpS2V5KCRrZXk6IFN0cmluZyEsICRzZWNyZXQ6IFN0cmluZyEpIHtcbiAgICAgICAgICAgIGFkZEFwaUtleShrZXk6ICRrZXksIHNlY3JldDogJHNlY3JldClcbiAgICAgICAgICB9XG4gICAgICAgIGAsXG4gICAgICAgIHZhcmlhYmxlczogeyBrZXksIHNlY3JldCB9LFxuICAgICAgfSk7XG4gICAgICByZXR1cm4gYXdhaXQgbXlSZXM7XG4gICAgfSk7XG4gIH07XG5cbiAgaWYgKGxvYWRpbmcgPT0gdHJ1ZSkge1xuICAgIHJldHVybiA8ZGl2PmxvYWRpbmc8L2Rpdj47XG4gIH0gZWxzZSB7XG4gICAgaWYgKHJlcyA9PSBmYWxzZSkge1xuICAgICAgcmVzZXRBcGkoY2xpZW50KTtcbiAgICAgIHJldHVybiA8ZGl2PmFwaSBrZXkgbm90IHZhbGlkIC0gcmVsb2FkIGFuZCB0cnkgYWdhaW48L2Rpdj47XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBpS2V5Rm9ybTtcblxuY29uc3QgU3R5bGVkRm9ybSA9IHN0eWxlZC5mb3JtYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgJHsocHJvcHMpID0+XG4gICAgcHJvcHMubG9hZGluZyAmJlxuICAgIFwiZmlsdGVyOiBncmF5c2NhbGUoMC41KSBibHVyKDVweCkgb3BhY2l0eSgwLjYpOyBwb2ludGVyLWV2ZW50czogbm9uZVwifTtcbmA7XG5cbmNvbnN0IFN1Ym1pdEJ1dHRvbiA9IHN0eWxlZChCdXR0b24pYFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuYDtcblxuY29uc3QgSW5wdXRXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICB3aWR0aDogMTAwJTtcbmA7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5cbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gXCJkMy1mb3JtYXRcIjtcbmltcG9ydCB7IHRpbWVGb3JtYXQgfSBmcm9tIFwiZDMtdGltZS1mb3JtYXRcIjtcblxuaW1wb3J0IHsgQ2hhcnRDYW52YXMsIENoYXJ0IH0gZnJvbSBcInJlYWN0LXN0b2NrY2hhcnRzXCI7XG5pbXBvcnQgeyBDYW5kbGVzdGlja1NlcmllcywgTGluZVNlcmllcyB9IGZyb20gXCJyZWFjdC1zdG9ja2NoYXJ0cy9saWIvc2VyaWVzXCI7XG5pbXBvcnQgeyBYQXhpcywgWUF4aXMgfSBmcm9tIFwicmVhY3Qtc3RvY2tjaGFydHMvbGliL2F4ZXNcIjtcbmltcG9ydCB7XG4gIENyb3NzSGFpckN1cnNvcixcbiAgRWRnZUluZGljYXRvcixcbiAgQ3VycmVudENvb3JkaW5hdGUsXG4gIE1vdXNlQ29vcmRpbmF0ZVgsXG4gIE1vdXNlQ29vcmRpbmF0ZVksXG59IGZyb20gXCJyZWFjdC1zdG9ja2NoYXJ0cy9saWIvY29vcmRpbmF0ZXNcIjtcbmltcG9ydCB7XG4gIHRpbWVDb21wYXJlLFxuICBnZXRZUmFuZ2VOdW1zLFxuICBmaW5kWVZhbEJ1eSxcbiAgZmluZFlWYWxTZWxsLFxufSBmcm9tIFwiLi9oZWxwZXJzXCI7XG5cbmltcG9ydCB7XG4gIExhYmVsQW5ub3RhdGlvbixcbiAgTGFiZWwsXG4gIEFubm90YXRlLFxufSBmcm9tIFwicmVhY3Qtc3RvY2tjaGFydHMvbGliL2Fubm90YXRpb25cIjtcbmltcG9ydCB7IGRpc2NvbnRpbnVvdXNUaW1lU2NhbGVQcm92aWRlciB9IGZyb20gXCJyZWFjdC1zdG9ja2NoYXJ0cy9saWIvc2NhbGVcIjtcbmltcG9ydCB7XG4gIE9ITENUb29sdGlwLFxuICBNb3ZpbmdBdmVyYWdlVG9vbHRpcCxcbn0gZnJvbSBcInJlYWN0LXN0b2NrY2hhcnRzL2xpYi90b29sdGlwXCI7XG5pbXBvcnQgeyBlbWEgfSBmcm9tIFwicmVhY3Qtc3RvY2tjaGFydHMvbGliL2luZGljYXRvclwiO1xuaW1wb3J0IHsgZml0V2lkdGggfSBmcm9tIFwicmVhY3Qtc3RvY2tjaGFydHMvbGliL2hlbHBlclwiO1xuaW1wb3J0IHsgbGFzdCB9IGZyb20gXCJyZWFjdC1zdG9ja2NoYXJ0cy9saWIvdXRpbHNcIjtcblxuY2xhc3MgQ2FuZGxlU3RpY2tDaGFydFdpdGhBbm5vdGF0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgbGV0IHlSYW5nZU51bXMgPSBnZXRZUmFuZ2VOdW1zKHRoaXMucHJvcHMuZGF0YSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHlSYW5nZU51bXM6IHlSYW5nZU51bXMgfSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IG1hcmdpbiA9IHsgbGVmdDogMjAsIHJpZ2h0OiA1MCwgdG9wOiAzMCwgYm90dG9tOiAzMCB9O1xuICAgIGNvbnN0IGhlaWdodCA9IDQwMDtcbiAgICBjb25zdCB7IHR5cGUsIHdpZHRoLCByYXRpbywgZGF0YTogaW5pdGlhbERhdGEgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCBbeUF4aXNMYWJlbFgsIHlBeGlzTGFiZWxZXSA9IFtcbiAgICAgIHdpZHRoIC0gbWFyZ2luLmxlZnQgLSA0MCxcbiAgICAgIChoZWlnaHQgLSBtYXJnaW4udG9wIC0gbWFyZ2luLmJvdHRvbSkgLyAyLFxuICAgIF07XG5cbiAgICBjb25zdCB4U2NhbGVQcm92aWRlciA9IGRpc2NvbnRpbnVvdXNUaW1lU2NhbGVQcm92aWRlci5pbnB1dERhdGVBY2Nlc3NvcihcbiAgICAgIChkKSA9PiBkLmRhdGVcbiAgICApO1xuICAgIGNvbnN0IHsgZGF0YSwgeFNjYWxlLCB4QWNjZXNzb3IsIGRpc3BsYXlYQWNjZXNzb3IgfSA9IHhTY2FsZVByb3ZpZGVyKFxuICAgICAgaW5pdGlhbERhdGFcbiAgICApO1xuXG4gICAgY29uc3Qgc3RhcnQgPSB4QWNjZXNzb3IobGFzdChkYXRhKSk7XG4gICAgY29uc3QgZW5kID0geEFjY2Vzc29yKGRhdGFbTWF0aC5tYXgoMCwgZGF0YS5sZW5ndGggLSAxNTApXSk7XG4gICAgY29uc3QgeEV4dGVudHMgPSBbc3RhcnQsIGVuZF07XG5cbiAgICBpZiAodGhpcy5zdGF0ZSA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xuICAgIH1cbiAgICAvLyB0cnkge1xuICAgIHJldHVybiAoXG4gICAgICA8Q2hhcnRDYW52YXNcbiAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgIHJhdGlvPXtyYXRpb31cbiAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICBtYXJnaW49e21hcmdpbn1cbiAgICAgICAgdHlwZT17dHlwZX1cbiAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgeFNjYWxlPXt4U2NhbGV9XG4gICAgICAgIHNlcmllc05hbWU9XCJCVENcIlxuICAgICAgICB4QWNjZXNzb3I9e3hBY2Nlc3Nvcn1cbiAgICAgICAgZGlzcGxheVhBY2Nlc3Nvcj17ZGlzcGxheVhBY2Nlc3Nvcn1cbiAgICAgICAgeEV4dGVudHM9e3hFeHRlbnRzfVxuICAgICAgPlxuICAgICAgICA8Q2hhcnRcbiAgICAgICAgICBpZD17MX1cbiAgICAgICAgICB5RXh0ZW50cz17WyhkKSA9PiBbZC5oaWdoLCBkLmxvd11dfVxuICAgICAgICAgIHBhZGRpbmc9e3sgdG9wOiA4MCwgYm90dG9tOiA4MCB9fVxuICAgICAgICA+XG4gICAgICAgICAgPFhBeGlzIGF4aXNBdD1cImJvdHRvbVwiIG9yaWVudD1cImJvdHRvbVwiIC8+XG4gICAgICAgICAgPE1vdXNlQ29vcmRpbmF0ZVhcbiAgICAgICAgICAgIGF0PVwiYm90dG9tXCJcbiAgICAgICAgICAgIG9yaWVudD1cImJvdHRvbVwiXG4gICAgICAgICAgICBkaXNwbGF5Rm9ybWF0PXt0aW1lRm9ybWF0KFwiJVktJW0tJWRcIil9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8TW91c2VDb29yZGluYXRlWVxuICAgICAgICAgICAgYXQ9XCJyaWdodFwiXG4gICAgICAgICAgICBvcmllbnQ9XCJyaWdodFwiXG4gICAgICAgICAgICBkaXNwbGF5Rm9ybWF0PXtmb3JtYXQoXCIuMmZcIil9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8WUF4aXMgYXhpc0F0PVwicmlnaHRcIiBvcmllbnQ9XCJyaWdodFwiIHRpY2tzPXs1fSAvPlxuICAgICAgICAgIDxDYW5kbGVzdGlja1NlcmllcyAvPlxuICAgICAgICAgIDxPSExDVG9vbHRpcCBvcmlnaW49e1stMTAsIDBdfSAvPlxuICAgICAgICAgIHt0aGlzLnByb3BzLnRyYWRlcy5tYXAoKGVhY2gpID0+IHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgLy8gICBcIm1hcHBpbmcgdG90YWwgbGVuZ3RoXCIgKyB0aGlzLnByb3BzLnRyYWRlcy5sZW5ndGgudG9TdHJpbmcoKSxcbiAgICAgICAgICAgIC8vICAgZWFjaFxuICAgICAgICAgICAgLy8gKTtcbiAgICAgICAgICAgIGxldCBkYXR1ID0gbmV3IERhdGUoZWFjaC50aW1lc3RhbXApO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0dSwgdGhpcy5wcm9wcy50aW1lZnJhbWUpO1xuICAgICAgICAgICAgaWYgKGVhY2guc2lkZSA9PSBcIkJ1eVwiKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGFubm90YXRpb25Qcm9wc1VwID0ge1xuICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiR2x5cGhpY29ucyBIYWxmbGluZ3NcIixcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogMTUsXG4gICAgICAgICAgICAgICAgZmlsbDogXCIjMDE4MDAxXCIsXG4gICAgICAgICAgICAgICAgLy8gZmlsbDogcmdiYSgxLCAxMjgsIDEsIDAuNSksXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC44LFxuICAgICAgICAgICAgICAgIHRleHQ6IFwi4payXCIsXG4gICAgICAgICAgICAgICAgeTogKHsgeVNjYWxlIH0pID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB5U2NhbGUucmFuZ2UoKVswXSArIDIwO1xuICAgICAgICAgICAgICAgICAgLy8gcmV0dXJuIGZpbmRZVmFsQnV5KFxuICAgICAgICAgICAgICAgICAgLy8gICB0aGlzLnN0YXRlLnlSYW5nZU51bXNbMF0sXG4gICAgICAgICAgICAgICAgICAvLyAgIHRoaXMuc3RhdGUueVJhbmdlTnVtc1sxXSxcbiAgICAgICAgICAgICAgICAgIC8vICAgZWFjaC5wcmljZVxuICAgICAgICAgICAgICAgICAgLy8gKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uQ2xpY2s6IGNvbnNvbGUubG9nLmJpbmQoY29uc29sZSksXG4gICAgICAgICAgICAgICAgdG9vbHRpcDogKGQpID0+IHRpbWVGb3JtYXQoXCIlQlwiKShkLmRhdGUpLFxuICAgICAgICAgICAgICAgIC8vIG9uTW91c2VPdmVyOiBjb25zb2xlLmxvZy5iaW5kKGNvbnNvbGUpLFxuICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPEFubm90YXRlXG4gICAgICAgICAgICAgICAgICB3aXRoPXtMYWJlbEFubm90YXRpb259XG4gICAgICAgICAgICAgICAgICB3aGVuPXsoZCkgPT4gdGltZUNvbXBhcmUoZCwgZGF0dSwgdGhpcy5wcm9wcy50aW1lZnJhbWUpfVxuICAgICAgICAgICAgICAgICAgdXNpbmdQcm9wcz17YW5ub3RhdGlvblByb3BzVXB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZWFjaC5zaWRlID09IFwiU2VsbFwiKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGFubm90YXRpb25Qcm9wc0Rvd24gPSB7XG4gICAgICAgICAgICAgICAgZm9udEZhbWlseTogXCJHbHlwaGljb25zIEhhbGZsaW5nc1wiLFxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxNSxcbiAgICAgICAgICAgICAgICBmaWxsOiBcIiNGRjAwMDBcIixcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjgsXG4gICAgICAgICAgICAgICAgdGV4dDogXCLilrxcIixcbiAgICAgICAgICAgICAgICB5OiAoeyB5U2NhbGUgfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHlTY2FsZS5yYW5nZSgpWzFdIC0gMjA7XG4gICAgICAgICAgICAgICAgICAvLyByZXR1cm4gZmluZFlWYWxTZWxsKFxuICAgICAgICAgICAgICAgICAgLy8gICB0aGlzLnN0YXRlLnlSYW5nZU51bXNbMF0sXG4gICAgICAgICAgICAgICAgICAvLyAgIHRoaXMuc3RhdGUueVJhbmdlTnVtc1sxXSxcbiAgICAgICAgICAgICAgICAgIC8vICAgZWFjaC5wcmljZVxuICAgICAgICAgICAgICAgICAgLy8gKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uQ2xpY2s6IGNvbnNvbGUubG9nLmJpbmQoY29uc29sZSksXG4gICAgICAgICAgICAgICAgdG9vbHRpcDogKGQpID0+IHRpbWVGb3JtYXQoXCIlQlwiKShkLmRhdGUpLFxuICAgICAgICAgICAgICAgIC8vIG9uTW91c2VPdmVyOiBjb25zb2xlLmxvZy5iaW5kKGNvbnNvbGUpLFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxBbm5vdGF0ZVxuICAgICAgICAgICAgICAgICAgd2l0aD17TGFiZWxBbm5vdGF0aW9ufVxuICAgICAgICAgICAgICAgICAgd2hlbj17KGQpID0+IHRpbWVDb21wYXJlKGQsIGRhdHUsIHRoaXMucHJvcHMudGltZWZyYW1lKX1cbiAgICAgICAgICAgICAgICAgIHVzaW5nUHJvcHM9e2Fubm90YXRpb25Qcm9wc0Rvd259XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9DaGFydD5cbiAgICAgICAgPENyb3NzSGFpckN1cnNvciBzdHJva2VEYXNoYXJyYXk9XCJMb25nRGFzaERvdFwiIC8+XG4gICAgICA8L0NoYXJ0Q2FudmFzPlxuICAgICk7XG4gICAgLy8gfSBjYXRjaCAoZXJyKSB7XG4gICAgLy8gICByZXR1cm4gPGRpdj5ubyBjaGFydDwvZGl2PjtcbiAgICAvLyB9XG4gIH1cbn1cblxuQ2FuZGxlU3RpY2tDaGFydFdpdGhBbm5vdGF0aW9uLnByb3BUeXBlcyA9IHtcbiAgZGF0YTogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gIHdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIHJhdGlvOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIHR5cGU6IFByb3BUeXBlcy5vbmVPZihbXCJzdmdcIiwgXCJoeWJyaWRcIl0pLmlzUmVxdWlyZWQsXG59O1xuXG5DYW5kbGVTdGlja0NoYXJ0V2l0aEFubm90YXRpb24uZGVmYXVsdFByb3BzID0ge1xuICB0eXBlOiBcInN2Z1wiLFxufTtcblxuQ2FuZGxlU3RpY2tDaGFydFdpdGhBbm5vdGF0aW9uID0gZml0V2lkdGgoQ2FuZGxlU3RpY2tDaGFydFdpdGhBbm5vdGF0aW9uKTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FuZGxlU3RpY2tDaGFydFdpdGhBbm5vdGF0aW9uO1xuIiwiZXhwb3J0IGNvbnN0IHRpbWVDb21wYXJlID0gKGQsIGRhdHUsIHRpbWVmcmFtZSkgPT4ge1xuICB2YXIgTVNfUEVSX01JTlVURSA9IDYwMDAwO1xuICB2YXIgY29lZmZGaXZlID0gMTAwMCAqIDYwICogNTtcbiAgLy8gdmFyIGNvZWZmT25lID0gMTAwMCAqIDYwICogNTtcbiAgdmFyIGNvZWZmT25lID0gMTAwMCAqIDYwO1xuICBpZiAodGltZWZyYW1lID09IFwiMW1cIikge1xuICAgIHJldHVybiAoXG4gICAgICBNYXRoLnJvdW5kKGQuZGF0ZS5nZXRUaW1lKCkgLyBjb2VmZk9uZSkgKiBjb2VmZk9uZSA9PT1cbiAgICAgIE1hdGgucm91bmQoZGF0dS5nZXRUaW1lKCkgLyBjb2VmZk9uZSkgKiBjb2VmZk9uZVxuICAgICk7XG4gIH1cbiAgaWYgKHRpbWVmcmFtZSA9PSBcIjVtXCIpIHtcbiAgICByZXR1cm4gKFxuICAgICAgTWF0aC5yb3VuZChkLmRhdGUuZ2V0VGltZSgpIC8gY29lZmZGaXZlKSAqIGNvZWZmRml2ZSA9PT1cbiAgICAgIE1hdGgucm91bmQoZGF0dS5nZXRUaW1lKCkgLyBjb2VmZkZpdmUpICogY29lZmZGaXZlXG4gICAgKTtcbiAgfVxuICBpZiAodGltZWZyYW1lID09IFwiMWhcIikge1xuICAgIHJldHVybiAoXG4gICAgICBkLmRhdGUuZ2V0SG91cnMoKSA9PT0gZGF0dS5nZXRIb3VycygpICsgMSAmJlxuICAgICAgZC5kYXRlLmdldERhdGUoKSA9PT0gZGF0dS5nZXREYXRlKClcbiAgICApO1xuICB9XG4gIGlmICh0aW1lZnJhbWUgPT0gXCIxZFwiKSB7XG4gICAgcmV0dXJuIGQuZGF0ZS5nZXREYXRlKCkgPT09IGRhdHUuZ2V0RGF0ZSgpO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0WVJhbmdlTnVtcyA9IChkYXRhKSA9PiB7XG4gIGxldCBsb3dOdW07XG4gIGxldCBoaWdoTnVtO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoaSA9PSAwKSB7XG4gICAgICBsb3dOdW0gPSBkYXRhWzBdLmxvdztcbiAgICAgIGhpZ2hOdW0gPSBkYXRhWzBdLmhpZ2g7XG4gICAgfVxuICAgIGlmIChkYXRhW2ldLmxvdyA8IGxvd051bSkge1xuICAgICAgbG93TnVtID0gZGF0YVtpXS5sb3c7XG4gICAgfVxuICAgIGlmIChkYXRhW2ldLmhpZ2ggPiBoaWdoTnVtKSB7XG4gICAgICBoaWdoTnVtID0gZGF0YVtpXS5oaWdoO1xuICAgIH1cbiAgICBpZiAoaSA9PSBkYXRhLmxlbmd0aCAtIDEpIHtcbiAgICAgIGxldCBhcnIgPSBbXTtcbiAgICAgIGFyci5wdXNoKGxvd051bSk7XG4gICAgICBhcnIucHVzaChoaWdoTnVtKTtcbiAgICAgIGNvbnNvbGUubG9nKGFycik7XG4gICAgICByZXR1cm4gYXJyO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGZpbmRZVmFsU2VsbCA9ICh5TG93LCB5SGlnaCwgcHJpY2UpID0+IHtcbiAgLy8gbGV0IGZ1bGxSYW5nZSA9IHlIaWdoIC0geUxvdztcbiAgLy8gbGV0IG15UmFuZ2UgPSB5SGlnaCAtIHBhcnNlSW50KHByaWNlKTtcbiAgLy8gbGV0IG91dE9mID0gbXlSYW5nZSAvIGZ1bGxSYW5nZTtcbiAgLy8gbGV0IG11bHRpcGxpZWQgPSBvdXRPZiAqIDE4MCArIDcwO1xuICAvLyBjb25zb2xlLmxvZyhvdXRPZiwgbXVsdGlwbGllZCk7XG4gIHJldHVybiA4MDtcbn07XG5leHBvcnQgY29uc3QgZmluZFlWYWxCdXkgPSAoeUxvdywgeUhpZ2gsIHByaWNlKSA9PiB7XG4gIGxldCBmdWxsUmFuZ2UgPSB5SGlnaCAtIHlMb3c7XG4gIGxldCBteVJhbmdlID0geUhpZ2ggLSBwYXJzZUludChwcmljZSk7XG4gIGxldCBvdXRPZiA9IG15UmFuZ2UgLyBmdWxsUmFuZ2U7XG4gIGxldCBtdWx0aXBsaWVkID0gb3V0T2YgKiAxODAgKyAxMDA7XG4gIGNvbnNvbGUubG9nKG91dE9mLCBtdWx0aXBsaWVkKTtcbiAgcmV0dXJuIG11bHRpcGxpZWQ7XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcInJlYWN0LWRvbVwiO1xuaW1wb3J0IENoYXJ0IGZyb20gXCIuL0NoYXJ0RGVtb1wiO1xuaW1wb3J0IHsgQWxlcnQgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xuXG5pbXBvcnQgeyBUeXBlQ2hvb3NlciB9IGZyb20gXCJyZWFjdC1zdG9ja2NoYXJ0cy9saWIvaGVscGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXJ0Q29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgbGV0IHN0YXJ0VGltZSA9IG5ldyBEYXRlKHRoaXMucHJvcHMudHJhZGVzWzBdLnRpbWVzdGFtcCk7XG4gICAgbGV0IGVuZFRpbWUgPSBuZXcgRGF0ZShcbiAgICAgIHRoaXMucHJvcHMudHJhZGVzW3RoaXMucHJvcHMudHJhZGVzLmxlbmd0aCAtIDFdLnRpbWVzdGFtcFxuICAgICk7XG4gICAgbGV0IGRpZmZNcyA9IE1hdGguYWJzKHN0YXJ0VGltZSAtIGVuZFRpbWUpO1xuICAgIHZhciBkaWZmU2VjcyA9IGRpZmZNcyAvIDEwMDA7XG4gICAgdmFyIGRpZmZNaW5zID0gTWF0aC5yb3VuZChkaWZmU2VjcyAvIDYwKTsgLy8gbWludXRlc1xuXG4gICAgdHJ5IHtcbiAgICAgIGlmIChkaWZmTWlucyA8IDYwKSB7XG4gICAgICAgIC8vICAgdGhpcy5zZXRTdGF0ZSh7IGNhbmRsZURhdGE6IHRoaXMucHJvcHMub25lbWluIH0pO1xuICAgICAgICBsZXQgYWxsRXhlYyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvcHMub25lbWluLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgbGV0IHRyYWRlID0gdGhpcy5wcm9wcy5vbmVtaW5baV07XG4gICAgICAgICAgbGV0IG5ld1RyYWRlID0ge307XG4gICAgICAgICAgbmV3VHJhZGUuZGF0ZSA9IG5ldyBEYXRlKHRyYWRlLnRpbWVzdGFtcCk7XG4gICAgICAgICAgbmV3VHJhZGUub3BlbiA9IHBhcnNlRmxvYXQodHJhZGUub3Blbik7XG4gICAgICAgICAgbmV3VHJhZGUuY2xvc2UgPSBwYXJzZUZsb2F0KHRyYWRlLmNsb3NlKTtcbiAgICAgICAgICBuZXdUcmFkZS5oaWdoID0gcGFyc2VGbG9hdCh0cmFkZS5oaWdoKTtcbiAgICAgICAgICBuZXdUcmFkZS5sb3cgPSBwYXJzZUZsb2F0KHRyYWRlLmxvdyk7XG4gICAgICAgICAgbGV0IHN0cnQgPSBuZXcgRGF0ZSh0aGlzLnByb3BzLnRyYWRlc1swXS50aW1lc3RhbXApO1xuICAgICAgICAgIGxldCBlbmQgPSBuZXcgRGF0ZShcbiAgICAgICAgICAgIHRoaXMucHJvcHMudHJhZGVzW3RoaXMucHJvcHMudHJhZGVzLmxlbmd0aCAtIDFdLnRpbWVzdGFtcFxuICAgICAgICAgICk7XG4gICAgICAgICAgbGV0IGNvbXBhcmUxID0gbmV3VHJhZGUuZGF0ZSAtIHN0cnQ7XG4gICAgICAgICAgbGV0IGNvbXBhcmUyID0gbmV3VHJhZGUuZGF0ZSAtIGVuZDtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjb21wYXJlMSwgY29tcGFyZTIpO1xuICAgICAgICAgIGxldCBhZGRpdGlvbmFsVGltZSA9IDEwMDAgKiA2MCAqIDMwO1xuICAgICAgICAgIGlmIChjb21wYXJlMSA+IGFkZGl0aW9uYWxUaW1lICogLTEgJiYgY29tcGFyZTIgPCBhZGRpdGlvbmFsVGltZSkge1xuICAgICAgICAgICAgYWxsRXhlYy51bnNoaWZ0KG5ld1RyYWRlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGkgPT0gdGhpcy5wcm9wcy5vbmVtaW4ubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgbGV0IHRpbWVmcmFtZSA9IFwiMW1cIjtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICB0cmFkZXM6IHRoaXMucHJvcHMudHJhZGVzLFxuICAgICAgICAgICAgICBuZXdEYXQ6IGFsbEV4ZWMsXG4gICAgICAgICAgICAgIHRpbWVmcmFtZTogdGltZWZyYW1lLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLCBcIlRISVMgU1RBVEUgXCIgKyB0aW1lZnJhbWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGRpZmZNaW5zID49IDYwICYmIGRpZmZNaW5zIDwgNjAgKiAxMCkge1xuICAgICAgICAvLyAgIHRoaXMuc2V0U3RhdGUoeyBjYW5kbGVEYXRhOiB0aGlzLnByb3BzLmZpdmVtaW4gfSk7XG4gICAgICAgIGxldCBhbGxFeGVjID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9wcy5maXZlbWluLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgbGV0IHRyYWRlID0gdGhpcy5wcm9wcy5maXZlbWluW2ldO1xuICAgICAgICAgIGxldCBuZXdUcmFkZSA9IHt9O1xuICAgICAgICAgIG5ld1RyYWRlLmRhdGUgPSBuZXcgRGF0ZSh0cmFkZS50aW1lc3RhbXApO1xuICAgICAgICAgIG5ld1RyYWRlLm9wZW4gPSBwYXJzZUZsb2F0KHRyYWRlLm9wZW4pO1xuICAgICAgICAgIG5ld1RyYWRlLmNsb3NlID0gcGFyc2VGbG9hdCh0cmFkZS5jbG9zZSk7XG4gICAgICAgICAgbmV3VHJhZGUuaGlnaCA9IHBhcnNlRmxvYXQodHJhZGUuaGlnaCk7XG4gICAgICAgICAgbmV3VHJhZGUubG93ID0gcGFyc2VGbG9hdCh0cmFkZS5sb3cpO1xuICAgICAgICAgIGxldCBzdHJ0ID0gbmV3IERhdGUodGhpcy5wcm9wcy50cmFkZXNbMF0udGltZXN0YW1wKTtcbiAgICAgICAgICBsZXQgZW5kID0gbmV3IERhdGUoXG4gICAgICAgICAgICB0aGlzLnByb3BzLnRyYWRlc1t0aGlzLnByb3BzLnRyYWRlcy5sZW5ndGggLSAxXS50aW1lc3RhbXBcbiAgICAgICAgICApO1xuICAgICAgICAgIGxldCBjb21wYXJlMSA9IG5ld1RyYWRlLmRhdGUgLSBzdHJ0O1xuICAgICAgICAgIGxldCBjb21wYXJlMiA9IG5ld1RyYWRlLmRhdGUgLSBlbmQ7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coY29tcGFyZTEsIGNvbXBhcmUyKTtcbiAgICAgICAgICBsZXQgYWRkaXRpb25hbFRpbWUgPSAxMDAwICogNjAgKiA2MCAqIDI7XG4gICAgICAgICAgaWYgKGNvbXBhcmUxID4gYWRkaXRpb25hbFRpbWUgKiAtMSAmJiBjb21wYXJlMiA8IGFkZGl0aW9uYWxUaW1lKSB7XG4gICAgICAgICAgICBhbGxFeGVjLnVuc2hpZnQobmV3VHJhZGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaSA9PSB0aGlzLnByb3BzLmZpdmVtaW4ubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgbGV0IHRpbWVmcmFtZSA9IFwiNW1cIjtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICB0cmFkZXM6IHRoaXMucHJvcHMudHJhZGVzLFxuICAgICAgICAgICAgICBuZXdEYXQ6IGFsbEV4ZWMsXG4gICAgICAgICAgICAgIHRpbWVmcmFtZTogdGltZWZyYW1lLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLCBcIlRISVMgU1RBVEUgXCIgKyB0aW1lZnJhbWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGV0IGRheSA9IDYwICogMjQ7XG4gICAgICBpZiAoZGlmZk1pbnMgPj0gNjAgKiAxMCAmJiBkaWZmTWlucyA8IGRheSAqIDQpIHtcbiAgICAgICAgLy8gICB0aGlzLnNldFN0YXRlKHsgY2FuZGxlRGF0YTogdGhpcy5wcm9wcy5vbmVob3VyIH0pO1xuICAgICAgICBsZXQgYWxsRXhlYyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvcHMub25laG91ci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGxldCB0cmFkZSA9IHRoaXMucHJvcHMub25laG91cltpXTtcbiAgICAgICAgICBsZXQgbmV3VHJhZGUgPSB7fTtcbiAgICAgICAgICBuZXdUcmFkZS5kYXRlID0gbmV3IERhdGUodHJhZGUudGltZXN0YW1wKTtcbiAgICAgICAgICBuZXdUcmFkZS5vcGVuID0gcGFyc2VGbG9hdCh0cmFkZS5vcGVuKTtcbiAgICAgICAgICBuZXdUcmFkZS5jbG9zZSA9IHBhcnNlRmxvYXQodHJhZGUuY2xvc2UpO1xuICAgICAgICAgIG5ld1RyYWRlLmhpZ2ggPSBwYXJzZUZsb2F0KHRyYWRlLmhpZ2gpO1xuICAgICAgICAgIG5ld1RyYWRlLmxvdyA9IHBhcnNlRmxvYXQodHJhZGUubG93KTtcbiAgICAgICAgICBsZXQgc3RydCA9IG5ldyBEYXRlKHRoaXMucHJvcHMudHJhZGVzWzBdLnRpbWVzdGFtcCk7XG4gICAgICAgICAgbGV0IGVuZCA9IG5ldyBEYXRlKFxuICAgICAgICAgICAgdGhpcy5wcm9wcy50cmFkZXNbdGhpcy5wcm9wcy50cmFkZXMubGVuZ3RoIC0gMV0udGltZXN0YW1wXG4gICAgICAgICAgKTtcbiAgICAgICAgICBsZXQgY29tcGFyZTEgPSBuZXdUcmFkZS5kYXRlIC0gc3RydDtcbiAgICAgICAgICBsZXQgY29tcGFyZTIgPSBuZXdUcmFkZS5kYXRlIC0gZW5kO1xuICAgICAgICAgIGxldCBhZGRpdGlvbmFsVGltZSA9IDEwMDAgKiA2MCAqIDYwICogMjA7XG4gICAgICAgICAgaWYgKGNvbXBhcmUxID4gYWRkaXRpb25hbFRpbWUgKiAtMSAmJiBjb21wYXJlMiA8IGFkZGl0aW9uYWxUaW1lKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjb21wYXJlMSwgY29tcGFyZTIpO1xuICAgICAgICAgICAgYWxsRXhlYy51bnNoaWZ0KG5ld1RyYWRlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGkgPT0gdGhpcy5wcm9wcy5vbmVob3VyLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIGxldCB0aW1lZnJhbWUgPSBcIjFoXCI7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgdHJhZGVzOiB0aGlzLnByb3BzLnRyYWRlcyxcbiAgICAgICAgICAgICAgbmV3RGF0OiBhbGxFeGVjLFxuICAgICAgICAgICAgICB0aW1lZnJhbWU6IHRpbWVmcmFtZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSwgXCJUSElTIFNUQVRFIFwiICsgdGltZWZyYW1lKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChkaWZmTWlucyA+PSBkYXkgKiA0KSB7XG4gICAgICAgIC8vICAgdGhpcy5zZXRTdGF0ZSh7IGNhbmRsZURhdGE6IHRoaXMucHJvcHMub25lZGF5IH0pO1xuICAgICAgICBsZXQgYWxsRXhlYyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvcHMub25lZGF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgbGV0IHRyYWRlID0gdGhpcy5wcm9wcy5vbmVkYXlbaV07XG4gICAgICAgICAgbGV0IG5ld1RyYWRlID0ge307XG4gICAgICAgICAgbmV3VHJhZGUuZGF0ZSA9IG5ldyBEYXRlKHRyYWRlLnRpbWVzdGFtcCk7XG4gICAgICAgICAgbmV3VHJhZGUub3BlbiA9IHBhcnNlRmxvYXQodHJhZGUub3Blbik7XG4gICAgICAgICAgbmV3VHJhZGUuY2xvc2UgPSBwYXJzZUZsb2F0KHRyYWRlLmNsb3NlKTtcbiAgICAgICAgICBuZXdUcmFkZS5oaWdoID0gcGFyc2VGbG9hdCh0cmFkZS5oaWdoKTtcbiAgICAgICAgICBuZXdUcmFkZS5sb3cgPSBwYXJzZUZsb2F0KHRyYWRlLmxvdyk7XG4gICAgICAgICAgbGV0IHN0cnQgPSBuZXcgRGF0ZSh0aGlzLnByb3BzLnRyYWRlc1swXS50aW1lc3RhbXApO1xuICAgICAgICAgIGxldCBlbmQgPSBuZXcgRGF0ZShcbiAgICAgICAgICAgIHRoaXMucHJvcHMudHJhZGVzW3RoaXMucHJvcHMudHJhZGVzLmxlbmd0aCAtIDFdLnRpbWVzdGFtcFxuICAgICAgICAgICk7XG4gICAgICAgICAgbGV0IGNvbXBhcmUxID0gbmV3VHJhZGUuZGF0ZSAtIHN0cnQ7XG4gICAgICAgICAgbGV0IGNvbXBhcmUyID0gbmV3VHJhZGUuZGF0ZSAtIGVuZDtcbiAgICAgICAgICBsZXQgYWRkaXRpb25hbFRpbWUgPSAxMDAwICogNjAgKiA2MCAqIDI0ICogMTA7XG4gICAgICAgICAgaWYgKGNvbXBhcmUxID4gYWRkaXRpb25hbFRpbWUgKiAtMSAmJiBjb21wYXJlMiA8IGFkZGl0aW9uYWxUaW1lKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjb21wYXJlMSwgY29tcGFyZTIpO1xuICAgICAgICAgICAgYWxsRXhlYy51bnNoaWZ0KG5ld1RyYWRlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGkgPT0gdGhpcy5wcm9wcy5vbmVkYXkubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgbGV0IHRpbWVmcmFtZSA9IFwiMWRcIjtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICB0cmFkZXM6IHRoaXMucHJvcHMudHJhZGVzLFxuICAgICAgICAgICAgICBuZXdEYXQ6IGFsbEV4ZWMsXG4gICAgICAgICAgICAgIHRpbWVmcmFtZTogdGltZWZyYW1lLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLCBcIlRISVMgU1RBVEUgXCIgKyB0aW1lZnJhbWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB9XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGlmICh0aGlzLnN0YXRlID09IG51bGwgfHwgIXRoaXMuc3RhdGUubmV3RGF0WzBdKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8QWxlcnQgY29sb3I9XCJsaWdodFwiPlxuICAgICAgICAgIENhbid0IHJlbmRlciBjaGFydC4gV2UgZG9uJ3QgaGF2ZSBzbWFsbCBlbm91Z2ggY2FuZGxlc3RpY2sgZGF0YSBnb2luZ1xuICAgICAgICAgIGJhY2sgdG8gdGhhdCBkYXRlLlxuICAgICAgICA8L0FsZXJ0PlxuICAgICAgKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5uZXdEYXQpO1xuICAgIHJldHVybiAoXG4gICAgICAvLyA8VHlwZUNob29zZXI+XG4gICAgICAvLyAgIHt0eXBlID0+IChcbiAgICAgIDxDaGFydFxuICAgICAgICB0eXBlPXtcImh5YnJpZFwifVxuICAgICAgICBkYXRhPXt0aGlzLnN0YXRlLm5ld0RhdH1cbiAgICAgICAgdHJhZGVzPXt0aGlzLnN0YXRlLnRyYWRlc31cbiAgICAgICAgdGltZWZyYW1lPXt0aGlzLnN0YXRlLnRpbWVmcmFtZX1cbiAgICAgIC8+XG4gICAgICAvLyAgICl9XG4gICAgICAvLyA8L1R5cGVDaG9vc2VyPlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQge1xuICBDb250YWluRGl2LFxuICBOZXh0VG9EaXYsXG4gIE5leHRUb0RpdkhlYWRlcixcbiAgUm93Q29udGFpbmVyLFxuICBDb250YWluRGl2SGVhZGVyLFxufSBmcm9tIFwiLi9UYWRlcy9UcmFkZXNcIjtcbmltcG9ydCBSZUNoYXJ0IGZyb20gXCIuL1RhZGVzL1RyYWRlc1wiO1xuaW1wb3J0IFNpZGViYXIsIHsgU3ltYm9sQ2hvb3NlciwgUG5sIH0gZnJvbSBcIi4uL01lbnUvTWVudVwiO1xuaW1wb3J0IHsgZ2V0TmV3RGF0IH0gZnJvbSBcIi4vc2hhcmVkL2hlbHBlcnNcIjtcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcbmltcG9ydCB7IGZhQ2FyZXRMZWZ0IH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTm90ZXMgZnJvbSBcIi4vTm90ZXMvTm90ZXNUZXN0XCI7XG5pbXBvcnQgVGFicyBmcm9tIFwiLi9UYWJzXCI7XG5pbXBvcnQge1xuICBOYXYsXG4gIE5hdkl0ZW0sXG4gIERyb3Bkb3duLFxuICBEcm9wZG93bkl0ZW0sXG4gIERyb3Bkb3duVG9nZ2xlLFxuICBEcm9wZG93bk1lbnUsXG4gIE5hdkxpbmssXG59IGZyb20gXCJyZWFjdHN0cmFwXCI7XG5cbmltcG9ydCB7IGluamVjdCwgb2JzZXJ2ZXIgfSBmcm9tIFwibW9ieC1yZWFjdFwiO1xuaW1wb3J0IHsgd2hlbiwgcmVhY3Rpb24gfSBmcm9tIFwibW9ieFwiO1xuaW1wb3J0IHsgd2lkZUZvbnQgfSBmcm9tIFwiLi4vc2hhcmVkL2hlbHBlcnNcIjtcblxuQGluamVjdChcInN0b3JlXCIpXG5Ab2JzZXJ2ZXJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGdsb2JhbEhhc2g6IFtdLFxuICAgICAgZ2xvYmFsSGFzaEFjdGl2ZTogW1wiYWxsXCJdLFxuICAgICAgZGF0YTogbnVsbCxcbiAgICAgIGZpbHRlcmVkRGF0YTogbnVsbCxcbiAgICAgIGlzU2luZ2xlOiBmYWxzZSxcbiAgICAgIGlzU2luZ2xlTm90ZXM6IGZhbHNlLFxuICAgIH07XG4gICAgdGhpcy5nZXRHbG9iYWxIYXNodGFncyA9IHRoaXMuZ2V0R2xvYmFsSGFzaHRhZ3MuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhc2h0YWdDbGlja2VkID0gdGhpcy5oYXNodGFnQ2xpY2tlZC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFzaHRhZ0NsaWNrZWRCYWNrID0gdGhpcy5oYXNodGFnQ2xpY2tlZEJhY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLnVwZGF0ZVdpbmRvd0RpbWVuc2lvbnMgPSB0aGlzLnVwZGF0ZVdpbmRvd0RpbWVuc2lvbnMuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZGF0YTogdGhpcy5wcm9wcy5kYXRhIH0pO1xuICAgIHRoaXMuZ2V0R2xvYmFsSGFzaHRhZ3ModGhpcy5wcm9wcy5kYXRhKTtcbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnNpbmdsZVRyYWRlUmVhY3Rpb24gPSByZWFjdGlvbihcbiAgICAgICgpID0+IHRoaXMucHJvcHMuc3RvcmUuaGFzU2luZ2xlVHJhZGUsXG4gICAgICAobm90aWZpY2F0aW9ucywgcmVhY3Rpb24pID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJIQVMgU0lOR0xFXCIsIHRoaXMucHJvcHMuc3RvcmUuaGFzU2luZ2xlVHJhZGUpO1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5zdG9yZS5oYXNTaW5nbGVUcmFkZSA9PSBmYWxzZSkge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc1NpbmdsZTogZmFsc2UgfSk7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJzZXR0aW5nIGJhY2tcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpc1NpbmdsZTogdHJ1ZSxcbiAgICAgICAgICAgIHNpbmdsZVRyYWRlOiB0aGlzLnByb3BzLnN0b3JlLnNpbmdsZVRyYWRlWzBdLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUsIFwiU1RBVEVFXCIpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwic2V0dGluZyBiYWNrXCIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgKTtcbiAgICB0aGlzLnNpbmdsZU5vdGVzUmVhY3Rpb24gPSByZWFjdGlvbihcbiAgICAgICgpID0+IHRoaXMucHJvcHMuc3RvcmUuaXNTaW5nbGVOb3RlcyxcbiAgICAgIChub3RpZmljYXRpb25zLCByZWFjdGlvbikgPT4ge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5zdG9yZS5pc1NpbmdsZU5vdGVzID09IGZhbHNlKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzU2luZ2xlTm90ZXM6IGZhbHNlIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaXNTaW5nbGVOb3RlczogdHJ1ZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLnVwZGF0ZVdpbmRvd0RpbWVuc2lvbnMpO1xuICB9XG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMudXBkYXRlV2luZG93RGltZW5zaW9ucyk7XG4gIH1cbiAgdXBkYXRlV2luZG93RGltZW5zaW9ucygpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIGdldEdsb2JhbEhhc2h0YWdzKGRhdGEpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEuZmV0Y2hUcmFkZUhpc3RvcnkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCB0aGlzVHJhZGVIYXNoID0gZGF0YS5mZXRjaFRyYWRlSGlzdG9yeVtpXS5oYXNodGFncy5zcGxpdChcIixcIik7XG4gICAgICBpZiAodGhpc1RyYWRlSGFzaCAhPSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpc1RyYWRlSGFzaC5sZW5ndGg7IGorKykge1xuICAgICAgICAgIGlmICh0aGlzVHJhZGVIYXNoW2pdICE9IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIGxldCBuZXdHbG9iYWxIYXNoID0gdGhpcy5zdGF0ZS5nbG9iYWxIYXNoO1xuICAgICAgICAgICAgbmV3R2xvYmFsSGFzaC5wdXNoKHRoaXNUcmFkZUhhc2hbal0pO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGdsb2JhbEhhc2g6IG5ld0dsb2JhbEhhc2ggfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgaGFzaHRhZ0NsaWNrZWRCYWNrKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlID09IFwiYWxsXCIpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiRE8gTk9USElOR1wiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IG5ld0hhc2hBY3RpdmUgPSBbXTtcbiAgICAgIGxldCBuZXdIYXNoID0gdGhpcy5zdGF0ZS5nbG9iYWxIYXNoO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnN0YXRlLmdsb2JhbEhhc2hBY3RpdmUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHZhbHVlICE9PSB0aGlzLnN0YXRlLmdsb2JhbEhhc2hBY3RpdmVbaV0pIHtcbiAgICAgICAgICBuZXdIYXNoQWN0aXZlLnB1c2godGhpcy5zdGF0ZS5nbG9iYWxIYXNoQWN0aXZlW2ldKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXdIYXNoLnB1c2godGhpcy5zdGF0ZS5nbG9iYWxIYXNoQWN0aXZlW2ldKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaSA9PSB0aGlzLnN0YXRlLmdsb2JhbEhhc2hBY3RpdmUubGVuZ3RoIC0gMSkge1xuICAgICAgICAgIGlmIChuZXdIYXNoQWN0aXZlWzBdID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbGV0IG5ld0hhc2gyID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG5ld0hhc2gubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgaWYgKG5ld0hhc2hbal0gIT0gXCJhbGxcIikge1xuICAgICAgICAgICAgICAgIG5ld0hhc2gyLnB1c2gobmV3SGFzaFtqXSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKGogPT0gbmV3SGFzaC5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICBnbG9iYWxIYXNoOiBuZXdIYXNoMixcbiAgICAgICAgICAgICAgICAgIGdsb2JhbEhhc2hBY3RpdmU6IFtcImFsbFwiXSxcbiAgICAgICAgICAgICAgICAgIGZpbHRlcmVkRGF0YTogbnVsbCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgbmV3SGFzaDIgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbmV3SGFzaC5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICBpZiAobmV3SGFzaFtqXSAhPSBcImFsbFwiKSB7XG4gICAgICAgICAgICAgICAgbmV3SGFzaDIucHVzaChuZXdIYXNoW2pdKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoaiA9PSBuZXdIYXNoLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICBnZXROZXdEYXQodGhpcy5zdGF0ZS5kYXRhLCBuZXdIYXNoQWN0aXZlKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBnbG9iYWxIYXNoOiBuZXdIYXNoMixcbiAgICAgICAgICAgICAgICAgICAgZ2xvYmFsSGFzaEFjdGl2ZTogbmV3SGFzaEFjdGl2ZSxcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyZWREYXRhOiByZXMsXG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGhhc2h0YWdDbGlja2VkKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlID09IFwiYWxsXCIpIHtcbiAgICAgIGxldCBuZXdHbG9iYWxIYXNoID0gdGhpcy5zdGF0ZS5nbG9iYWxIYXNoO1xuICAgICAgbGV0IG5ld0dsb2JhbEhhc2gyID0gW107XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3RhdGUuZ2xvYmFsSGFzaEFjdGl2ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICBuZXdHbG9iYWxIYXNoLnB1c2godGhpcy5zdGF0ZS5nbG9iYWxIYXNoQWN0aXZlW2ldKTtcbiAgICAgICAgaWYgKGkgPT0gdGhpcy5zdGF0ZS5nbG9iYWxIYXNoQWN0aXZlLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG5ld0dsb2JhbEhhc2gubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGlmIChuZXdHbG9iYWxIYXNoW2pdICE9IFwiYWxsXCIpIHtcbiAgICAgICAgICAgICAgbmV3R2xvYmFsSGFzaDIucHVzaChuZXdHbG9iYWxIYXNoW2pdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChqID09IG5ld0dsb2JhbEhhc2gubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBnbG9iYWxIYXNoOiBuZXdHbG9iYWxIYXNoMixcbiAgICAgICAgICAgICAgICBnbG9iYWxIYXNoQWN0aXZlOiBbXCJhbGxcIl0sXG4gICAgICAgICAgICAgICAgZmlsdGVyZWREYXRhOiBudWxsLFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5zdGF0ZS5nbG9iYWxIYXNoQWN0aXZlWzBdID09IHVuZGVmaW5lZCkge1xuICAgICAgbGV0IG5ld0FycmF5ID0gW107XG4gICAgICBuZXdBcnJheS5wdXNoKHZhbHVlKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBnbG9iYWxIYXNoQWN0aXZlOiBuZXdBcnJheSB9KTtcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5zdGF0ZS5nbG9iYWxIYXNoLmluZGV4T2YodmFsdWUpO1xuICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgbGV0IG5ld0dsb2JhbEhhc2ggPSB0aGlzLnN0YXRlLmdsb2JhbEhhc2g7XG4gICAgICAgIG5ld0dsb2JhbEhhc2guc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGdsb2JhbEhhc2g6IG5ld0dsb2JhbEhhc2ggfSk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zdGF0ZS5nbG9iYWxIYXNoQWN0aXZlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5nbG9iYWxIYXNoQWN0aXZlW2ldID09IFwiYWxsXCIpIHtcbiAgICAgICAgdGhpcy5zdGF0ZS5nbG9iYWxIYXNoQWN0aXZlID0gW107XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5zdGF0ZS5nbG9iYWxIYXNoLmluZGV4T2YodmFsdWUpO1xuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgIGxldCBuZXdHbG9iYWxIYXNoID0gdGhpcy5zdGF0ZS5nbG9iYWxIYXNoO1xuICAgICAgICAgIG5ld0dsb2JhbEhhc2guc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICBsZXQgdG9yZiA9IGZhbHNlO1xuICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbmV3R2xvYmFsSGFzaC5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgaWYgKFwiYWxsXCIgPT0gbmV3R2xvYmFsSGFzaFtqXSkge1xuICAgICAgICAgICAgICB0b3JmID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChqID09IG5ld0dsb2JhbEhhc2gubGVuZ3RoIC0gMSAmJiB0b3JmID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgIG5ld0dsb2JhbEhhc2gucHVzaChcImFsbFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgbGV0IG5ld0dsb2JhbEhhc2hBY3RpdmUgPSB0aGlzLnN0YXRlLmdsb2JhbEhhc2hBY3RpdmU7XG4gICAgICAgICAgbmV3R2xvYmFsSGFzaEFjdGl2ZS5wdXNoKHZhbHVlKTtcbiAgICAgICAgICBnZXROZXdEYXQodGhpcy5zdGF0ZS5kYXRhLCBuZXdHbG9iYWxIYXNoQWN0aXZlKS50aGVuKChuZXdEYXQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICBnbG9iYWxIYXNoQWN0aXZlOiBuZXdHbG9iYWxIYXNoQWN0aXZlLFxuICAgICAgICAgICAgICBnbG9iYWxIYXNoOiBuZXdHbG9iYWxIYXNoLFxuICAgICAgICAgICAgICBmaWx0ZXJlZERhdGE6IG5ld0RhdCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodmFsdWUgPT0gdGhpcy5zdGF0ZS5nbG9iYWxIYXNoQWN0aXZlW2ldKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChpID09IHRoaXMuc3RhdGUuZ2xvYmFsSGFzaEFjdGl2ZS5sZW5ndGggLSAxKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5zdGF0ZS5nbG9iYWxIYXNoLmluZGV4T2YodmFsdWUpO1xuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgIGxldCBuZXdHbG9iYWxIYXNoID0gdGhpcy5zdGF0ZS5nbG9iYWxIYXNoO1xuICAgICAgICAgIG5ld0dsb2JhbEhhc2guc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAvLyBuZXdHbG9iYWxIYXNoLnB1c2goXCJhbGxcIik7XG4gICAgICAgICAgbGV0IHRvcmYgPSBmYWxzZTtcbiAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG5ld0dsb2JhbEhhc2gubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGlmIChcImFsbFwiID09IG5ld0dsb2JhbEhhc2hbal0pIHtcbiAgICAgICAgICAgICAgdG9yZiA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaiA9PSBuZXdHbG9iYWxIYXNoLmxlbmd0aCAtIDEgJiYgdG9yZiA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICBuZXdHbG9iYWxIYXNoLnB1c2goXCJhbGxcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGxldCBuZXdHbG9iYWxIYXNoQWN0aXZlID0gdGhpcy5zdGF0ZS5nbG9iYWxIYXNoQWN0aXZlO1xuICAgICAgICAgIG5ld0dsb2JhbEhhc2hBY3RpdmUucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgZ2V0TmV3RGF0KHRoaXMuc3RhdGUuZGF0YSwgbmV3R2xvYmFsSGFzaEFjdGl2ZSkudGhlbigobmV3RGF0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgZ2xvYmFsSGFzaEFjdGl2ZTogbmV3R2xvYmFsSGFzaEFjdGl2ZSxcbiAgICAgICAgICAgICAgZ2xvYmFsSGFzaDogbmV3R2xvYmFsSGFzaCxcbiAgICAgICAgICAgICAgZmlsdGVyZWREYXRhOiBuZXdEYXQsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuZGF0YSAhPSBudWxsKSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5pc1NpbmdsZSA9PSBmYWxzZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIklTIFNJTkdMRSBJUyBGQUxTRVwiKTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8V3JhcHBlcj5cbiAgICAgICAgICAgIDxDaGFydFdyYXBwZXI+XG4gICAgICAgICAgICAgIDxUb3BCYXJQYXJlbnQ+XG4gICAgICAgICAgICAgICAgPFRvcEJhckNoaWxkQmlnTGVmdD5cbiAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmdsb2JhbEhhc2hBY3RpdmUubWFwKChoYXNoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgPFRvcEhhc2h0YWdJbmRpdmlkdWFsQWN0aXZlXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhc2h0YWdDbGlja2VkQmFjayhoYXNoKX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAje2hhc2h9XG4gICAgICAgICAgICAgICAgICAgICAgPC9Ub3BIYXNodGFnSW5kaXZpZHVhbEFjdGl2ZT5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZ2xvYmFsSGFzaC5tYXAoKGhhc2gpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICA8VG9wSGFzaHRhZ0luZGl2aWR1YWxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFzaHRhZ0NsaWNrZWQoaGFzaCl9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgI3toYXNofVxuICAgICAgICAgICAgICAgICAgICAgIDwvVG9wSGFzaHRhZ0luZGl2aWR1YWw+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L1RvcEJhckNoaWxkQmlnTGVmdD5cbiAgICAgICAgICAgICAgICA8VG9wQmFyQ2hpbGRTbWFsbD5cbiAgICAgICAgICAgICAgICAgIDxUb3BIYXNodGFnSW5kaXZpZHVhbEFjdGl2ZVBubD5cbiAgICAgICAgICAgICAgICAgICAgPFBubCAvPlxuICAgICAgICAgICAgICAgICAgPC9Ub3BIYXNodGFnSW5kaXZpZHVhbEFjdGl2ZVBubD5cbiAgICAgICAgICAgICAgICA8L1RvcEJhckNoaWxkU21hbGw+XG4gICAgICAgICAgICAgICAgPFRvcEJhckNoaWxkQmlnUmlnaHQ+XG4gICAgICAgICAgICAgICAgICA8VG9wSGFzaHRhZ0luZGl2aWR1YWxBY3RpdmVSaWdodD5cbiAgICAgICAgICAgICAgICAgICAgPFN5bWJvbENob29zZXIgLz5cbiAgICAgICAgICAgICAgICAgIDwvVG9wSGFzaHRhZ0luZGl2aWR1YWxBY3RpdmVSaWdodD5cbiAgICAgICAgICAgICAgICA8L1RvcEJhckNoaWxkQmlnUmlnaHQ+XG4gICAgICAgICAgICAgIDwvVG9wQmFyUGFyZW50PlxuICAgICAgICAgICAgICA8V2hvbGVHcmlkPlxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmlzU2luZ2xlTm90ZXMgPT0gZmFsc2UgPyAoXG4gICAgICAgICAgICAgICAgICA8Q29udGFpbkRpdkhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgPE5leHRUb0RpdkhlYWRlcj5TdGFydDwvTmV4dFRvRGl2SGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICA8TmV4dFRvRGl2SGVhZGVyPkVuZDwvTmV4dFRvRGl2SGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICA8TmV4dFRvRGl2SGVhZGVyPkwvUzwvTmV4dFRvRGl2SGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICA8TmV4dFRvRGl2SGVhZGVyPkVudHJ5PC9OZXh0VG9EaXZIZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgIDxOZXh0VG9EaXZIZWFkZXI+RXhpdDwvTmV4dFRvRGl2SGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICA8TmV4dFRvRGl2SGVhZGVyPlF0eTwvTmV4dFRvRGl2SGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICA8TmV4dFRvRGl2SGVhZGVyPlJQTkw8L05leHRUb0RpdkhlYWRlcj5cbiAgICAgICAgICAgICAgICAgIDwvQ29udGFpbkRpdkhlYWRlcj5cbiAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICA8UmVDaGFydFxuICAgICAgICAgICAgICAgICAgZGF0YT17dGhpcy5zdGF0ZS5kYXRhfVxuICAgICAgICAgICAgICAgICAgZmlsdGVyZWREYXRhPXt0aGlzLnN0YXRlLmZpbHRlcmVkRGF0YX1cbiAgICAgICAgICAgICAgICAgIGluaXREYXRhPXt0aGlzLnByb3BzLmRhdGF9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9XaG9sZUdyaWQ+XG4gICAgICAgICAgICA8L0NoYXJ0V3JhcHBlcj5cbiAgICAgICAgICA8L1dyYXBwZXI+XG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhcIklTIFNJTkdMRSBJUyBUUlVFXCIpO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxXcmFwcGVyPlxuICAgICAgICAgICAgPENoYXJ0V3JhcHBlcj5cbiAgICAgICAgICAgICAgPFRvcEJhclBhcmVudD5cbiAgICAgICAgICAgICAgICA8VG9wQmFyQ2hpbGRCaWdMZWZ0PlxuICAgICAgICAgICAgICAgICAgPFRhYnMgLz5cbiAgICAgICAgICAgICAgICA8L1RvcEJhckNoaWxkQmlnTGVmdD5cbiAgICAgICAgICAgICAgICA8VG9wQmFyQ2hpbGRTbWFsbD5cbiAgICAgICAgICAgICAgICAgIDxUb3BIYXNodGFnSW5kaXZpZHVhbEFjdGl2ZVBubD5cbiAgICAgICAgICAgICAgICAgICAgPFBubCAvPlxuICAgICAgICAgICAgICAgICAgPC9Ub3BIYXNodGFnSW5kaXZpZHVhbEFjdGl2ZVBubD5cbiAgICAgICAgICAgICAgICA8L1RvcEJhckNoaWxkU21hbGw+XG4gICAgICAgICAgICAgICAgPFRvcEJhckNoaWxkQmlnUmlnaHQ+XG4gICAgICAgICAgICAgICAgICA8UmlnaHRUYWJzPlxuICAgICAgICAgICAgICAgICAgICA8Tm90ZXMgZmlyc3RUcmFkZT17dGhpcy5zdGF0ZS5zaW5nbGVUcmFkZX0gLz5cbiAgICAgICAgICAgICAgICAgIDwvUmlnaHRUYWJzPlxuICAgICAgICAgICAgICAgIDwvVG9wQmFyQ2hpbGRCaWdSaWdodD5cbiAgICAgICAgICAgICAgPC9Ub3BCYXJQYXJlbnQ+XG4gICAgICAgICAgICAgIDxXaG9sZUdyaWQ+XG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuaXNTaW5nbGVOb3RlcyA9PSBmYWxzZSA/IChcbiAgICAgICAgICAgICAgICAgIDxDb250YWluRGl2SGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICA8TmV4dFRvRGl2SGVhZGVyPlN0YXJ0PC9OZXh0VG9EaXZIZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgIDxOZXh0VG9EaXZIZWFkZXI+RW5kPC9OZXh0VG9EaXZIZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgIDxOZXh0VG9EaXZIZWFkZXI+TC9TPC9OZXh0VG9EaXZIZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgIDxOZXh0VG9EaXZIZWFkZXI+RW50cnk8L05leHRUb0RpdkhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgPE5leHRUb0RpdkhlYWRlcj5FeGl0PC9OZXh0VG9EaXZIZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgIDxOZXh0VG9EaXZIZWFkZXI+UXR5PC9OZXh0VG9EaXZIZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgIDxOZXh0VG9EaXZIZWFkZXI+UlBOTDwvTmV4dFRvRGl2SGVhZGVyPlxuICAgICAgICAgICAgICAgICAgPC9Db250YWluRGl2SGVhZGVyPlxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgIDxSZUNoYXJ0XG4gICAgICAgICAgICAgICAgICBkYXRhPXt0aGlzLnN0YXRlLmRhdGF9XG4gICAgICAgICAgICAgICAgICBmaWx0ZXJlZERhdGE9e3RoaXMuc3RhdGUuZmlsdGVyZWREYXRhfVxuICAgICAgICAgICAgICAgICAgaW5pdERhdGE9e3RoaXMucHJvcHMuZGF0YX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L1dob2xlR3JpZD5cbiAgICAgICAgICAgIDwvQ2hhcnRXcmFwcGVyPlxuICAgICAgICAgIDwvV3JhcHBlcj5cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuY29uc3QgU2luZ2xlVGFiSW5uZXIgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW46IGF1dG87XG5gO1xuXG5jb25zdCBTaW5nbGVUYWIgPSBzdHlsZWQuZGl2YFxuICBjb2xvcjogJHsocHJvcHMpID0+IChwcm9wcy5pc0FjdGl2ZSA/IFwiI2ZmZlwiIDogXCIjMDAwXCIpfTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsocHJvcHMpID0+IChwcm9wcy5pc0FjdGl2ZSA/IFwiIzAwMFwiIDogXCIjZmZmXCIpfTtcblxuICBtYXJnaW46IGF1dG8gMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIDpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5gO1xuXG5jb25zdCBXcmFwVGFicyA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZvbnQtc2l6ZTogMTVweDtcbmA7XG5jb25zdCBXaG9sZUdyaWQgPSBzdHlsZWQuZGl2YGA7XG4vLyBib3JkZXI6IDFweCBzb2xpZCAjZjJmMmYyO1xuXG5jb25zdCBUb3BCYXJQYXJlbnQgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1hcmdpbi1ib3R0b206IDE0cHg7XG5gO1xuXG4vLyBmbGV4OiAxIDEgNDUlOyAvKmdyb3cgfCBzaHJpbmsgfCBiYXNpcyAqL1xuY29uc3QgVG9wQmFyQ2hpbGRCaWdMZWZ0ID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDQ1JTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgb3ZlcmZsb3c6IGF1dG87XG5gO1xuY29uc3QgVG9wQmFyQ2hpbGRCaWdSaWdodCA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiA0NSU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIG92ZXJmbG93OiBhdXRvO1xuYDtcblxuY29uc3QgVG9wQmFyQ2hpbGRTbWFsbCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHdpZHRoOiAxMCU7XG5gO1xuXG5jb25zdCBUb3BIYXNodGFnSW5kaXZpZHVhbCA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQ6ICNmOGY4ZmY7XG4gIGNvbG9yOiAjMDAwO1xuICBwYWRkaW5nOiA4cHg7XG4gIG1hcmdpbjogMCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gICR7d2lkZUZvbnR9XG5cbiAgOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG5gO1xuXG5jb25zdCBUb3BIYXNodGFnSW5kaXZpZHVhbEFjdGl2ZSA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQ6ICMyMTI1Mjg7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiA4cHg7XG4gIG1hcmdpbjogMCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gICR7d2lkZUZvbnR9XG4gIDpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuYDtcbmNvbnN0IFRvcEhhc2h0YWdJbmRpdmlkdWFsQWN0aXZlUmlnaHQgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kOiAjMjEyNTI4O1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogOHB4O1xuICBtYXJnaW46IDAgMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAke3dpZGVGb250fVxuICBtYXJnaW46MCBhdXRvO1xuICA6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICBtYXJnaW4tcmlnaHQ6IDA7XG5gO1xuY29uc3QgUmlnaHRUYWJzID0gc3R5bGVkLmRpdmBcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbjogMCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gICR7d2lkZUZvbnR9XG4gIG1hcmdpbjowIGF1dG87XG4gIDpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIG1hcmdpbi1yaWdodDogMDtcbmA7XG5cbmNvbnN0IFRvcEhhc2h0YWdJbmRpdmlkdWFsQWN0aXZlUG5sID0gc3R5bGVkLmRpdmBcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiAwIDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgJHt3aWRlRm9udH1cbiAgOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgbWFyZ2luOiBhdXRvO1xuYDtcblxuY29uc3QgQ2hhcnRXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBhZGRpbmc6IDVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIG1hcmdpbjogMCA1dnc7XG4gIH1cbmA7XG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG5gO1xuIiwiaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwicmVhY3QtYXBvbGxvXCI7XG5pbXBvcnQgUmVDaGFydCBmcm9tIFwiLi9UYWRlcy9UcmFkZXNcIjtcbmltcG9ydCBTaWRlYmFyIGZyb20gXCIuLi9NZW51L01lbnVcIjtcbmltcG9ydCBncWwgZnJvbSBcImdyYXBocWwtdGFnXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgaW5qZWN0LCBvYnNlcnZlciB9IGZyb20gXCJtb2J4LXJlYWN0XCI7XG5pbXBvcnQge1xuICBDb250YWluRGl2LFxuICBOZXh0VG9EaXYsXG4gIE5leHRUb0RpdkhlYWRlcixcbiAgUm93Q29udGFpbmVyLFxuICBDb250YWluRGl2SGVhZGVyLFxufSBmcm9tIFwiLi9UYWRlcy9UcmFkZXNcIjtcbmltcG9ydCB7IGVxdWFsIH0gZnJvbSBcImZhc3QtZGVlcC1lcXVhbFwiO1xuaW1wb3J0IEFwaUtleUZvcm0gZnJvbSBcIi4vQWRkQXBpRm9ybVwiO1xuaW1wb3J0IFRvdGFsRGF0IGZyb20gXCIuL0Rhc2hib2FyZFwiO1xuaW1wb3J0IFRvdGFsRGF0NzY4IGZyb20gXCIuLzc2OHB4L0Rhc2hib2FyZFRlc3RcIjtcbmltcG9ydCB7IHdoZW4sIHJlYWN0aW9uIH0gZnJvbSBcIm1vYnhcIjtcbmltcG9ydCB7IGdldFN0YXRlRGF0ZSwgbWFrZURhdGVEYXlzLCBtYWtlRGF0ZUhycyB9IGZyb20gXCIuLi9IZWxwZXJzL0Z1bmN0aW9uc1wiO1xuXG5AaW5qZWN0KFtcInN0b3JlXCJdKVxuQG9ic2VydmVyXG5jbGFzcyBGZXRjaFF1ZXJ5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgc3RhcnREYXRlOiBcIlwiLCBlbmREYXRlOiBcIlwiLCBkYXRlOiBcIlwiIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zb2xlLmxvZyhcImxvYWRlZCBmZXRjaCBxdWVyeSBjb21wb25lbnRcIik7XG4gIH1cblxuICBjbGlja2VkID0gKCkgPT4ge1xuICAgIHN0b3JlLmlzQXV0aCA9ICFzdG9yZS5pc0F1dGg7XG4gICAgY29uc29sZS5sb2coc3RvcmUuaXNBdXRoKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGZldGNoVHJhZGVIaXN0b3J5VmFyaWFibGVzID0ge1xuICAgICAgc3RhcnQ6IHRoaXMucHJvcHMuc3RvcmUuc3RhcnREYXRlLFxuICAgICAgZW5kOiB0aGlzLnByb3BzLnN0b3JlLmVuZERhdGUsXG4gICAgICBzeW1ib2w6IHRoaXMucHJvcHMuc3RvcmUuc3ltYm9sLFxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPENvbXBcbiAgICAgICAgICBxdWVyeT17ZmV0Y2hUcmFkZUhpc3RvcnlRdWVyeX1cbiAgICAgICAgICB2YXJzPXtmZXRjaFRyYWRlSGlzdG9yeVZhcmlhYmxlc31cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuQGluamVjdChbXCJzdG9yZVwiXSlcbkBvYnNlcnZlclxuY2xhc3MgQ29tcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IHdpZHRoOiAwIH07XG4gICAgdGhpcy51cGRhdGVXaW5kb3dEaW1lbnNpb25zID0gdGhpcy51cGRhdGVXaW5kb3dEaW1lbnNpb25zLmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnRlbXBUYWdzUmVhY3Rpb24gPSByZWFjdGlvbihcbiAgICAgICgpID0+IHRoaXMucHJvcHMuc3RvcmUuaGFzVGVtcFRhZ3MsXG4gICAgICAobm90aWZpY2F0aW9ucywgcmVhY3Rpb24pID0+IHtcbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZShjb25zb2xlLmxvZyhcIkZPUkNFIFVQREFURSBXQVMgQ0FMTEVEXCIpKTtcbiAgICAgIH1cbiAgICApO1xuICAgIHRoaXMudXBkYXRlV2luZG93RGltZW5zaW9ucygpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMudXBkYXRlV2luZG93RGltZW5zaW9ucyk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnRlbXBUYWdzUmVhY3Rpb24oKTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLnVwZGF0ZVdpbmRvd0RpbWVuc2lvbnMpO1xuICB9XG5cbiAgdXBkYXRlV2luZG93RGltZW5zaW9ucygpIHtcbiAgICBjb25zb2xlLmxvZyh3aW5kb3cuaW5uZXJXaWR0aCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB3aWR0aDogd2luZG93LmlubmVyV2lkdGgsXG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc29sZS5sb2coXCJyZXJlbmRlcmVkXCIpO1xuICAgIHJldHVybiAoXG4gICAgICA8UXVlcnkgcXVlcnk9e3RoaXMucHJvcHMucXVlcnl9IHZhcmlhYmxlcz17dGhpcy5wcm9wcy52YXJzfT5cbiAgICAgICAgeyh7IGxvYWRpbmcsIGVycm9yLCBkYXRhIH0pID0+IHtcbiAgICAgICAgICBpZiAoZXJyb3IpIHJldHVybiA8ZGl2Pm5vIGRhdGEgbG9hZGVkPC9kaXY+O1xuICAgICAgICAgIGlmIChsb2FkaW5nKSByZXR1cm4gPGRpdj5Mb2FkaW5nPC9kaXY+O1xuICAgICAgICAgIGlmIChkYXRhLmNoZWNrQXBpS2V5ID09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm4gPEFwaUtleUZvcm0gLz47XG4gICAgICAgICAgfSBlbHNlIGlmIChkYXRhLmNoZWNrQXBpS2V5ID09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc3RvcmUucmVzZXRIYXNUZW1wVGFncygpO1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5zdG9yZS5jbGVhclRlbXBOb3RlcygpO1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5zdG9yZS5jbGVhclRlbXBUYWdzKCk7XG4gICAgICAgICAgICB0aGlzLnByb3BzLnN0b3JlLnJlc2V0UG5sKCk7XG4gICAgICAgICAgICB0aGlzLnByb3BzLnN0b3JlLmhhc1NpbmdsZVRyYWRlID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLndpZHRoID4gNzY4KSB7XG4gICAgICAgICAgICAgIHJldHVybiA8VG90YWxEYXQgZGF0YT17ZGF0YX0gLz47XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXR1cm4gPFRvdGFsRGF0NzY4IGRhdGE9e2RhdGF9IC8+O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfX1cbiAgICAgIDwvUXVlcnk+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGZXRjaFF1ZXJ5O1xuXG5jb25zdCBmZXRjaFRyYWRlSGlzdG9yeVF1ZXJ5ID0gZ3FsYFxuICBxdWVyeSBmZXRjaFRyYWRlSGlzdG9yeSgkc3RhcnQ6IFN0cmluZyEsICRlbmQ6IFN0cmluZyEsICRzeW1ib2w6IFN0cmluZyEpIHtcbiAgICBjaGVja0FwaUtleVxuXG4gICAgZmV0Y2hUcmFkZUhpc3Rvcnkoc3RhcnQ6ICRzdGFydCwgZW5kOiAkZW5kLCBzeW1ib2w6ICRzeW1ib2wpIHtcbiAgICAgIGlkXG4gICAgICB0aW1lc3RhbXBcbiAgICAgIHNpZGVcbiAgICAgIHByaWNlXG4gICAgICBvcmRlclF0eVxuICAgICAgbGVhdmVzUXR5XG4gICAgICBjdXJyZW50UXR5XG4gICAgICBhdmdFbnRyeVByaWNlXG4gICAgICBleGVjR3Jvc3NQbmxcbiAgICAgIHJlYWxpemVkUG5sXG4gICAgICBjb21taXNzaW9uXG4gICAgICBleGVjVHlwZVxuICAgICAgb3JkZXJUeXBlXG4gICAgICB0cmRTdGFydFxuICAgICAgdHJkRW5kXG4gICAgICBub3Rlc1xuICAgICAgaGFzaHRhZ3NcbiAgICB9XG5cbiAgICBmZXRjaE9uZU1pbnV0ZUNhbmRsZUhpc3Rvcnkoc3RhcnQ6ICRzdGFydCwgZW5kOiAkZW5kKSB7XG4gICAgICBpZFxuICAgICAgdGltZXN0YW1wXG4gICAgICBzeW1ib2xcbiAgICAgIHRpbWVmcmFtZVxuICAgICAgb3BlblxuICAgICAgaGlnaFxuICAgICAgbG93XG4gICAgICBjbG9zZVxuICAgICAgdHJhZGVzXG4gICAgICB2b2x1bWVcbiAgICAgIHZ3YXBcbiAgICAgIGxhc3RTaXplXG4gICAgICBob21lTm90aW9uYWxcbiAgICAgIGZvcmVpZ25Ob3Rpb25hbFxuICAgIH1cblxuICAgIGZldGNoT25lSG91ckNhbmRsZUhpc3Rvcnkoc3RhcnQ6ICRzdGFydCwgZW5kOiAkZW5kKSB7XG4gICAgICBpZFxuICAgICAgdGltZXN0YW1wXG4gICAgICBzeW1ib2xcbiAgICAgIHRpbWVmcmFtZVxuICAgICAgb3BlblxuICAgICAgaGlnaFxuICAgICAgbG93XG4gICAgICBjbG9zZVxuICAgICAgdHJhZGVzXG4gICAgICB2b2x1bWVcbiAgICAgIHZ3YXBcbiAgICAgIGxhc3RTaXplXG4gICAgICBob21lTm90aW9uYWxcbiAgICAgIGZvcmVpZ25Ob3Rpb25hbFxuICAgIH1cblxuICAgIGZldGNoT25lRGF5Q2FuZGxlSGlzdG9yeShzdGFydDogJHN0YXJ0LCBlbmQ6ICRlbmQpIHtcbiAgICAgIGlkXG4gICAgICB0aW1lc3RhbXBcbiAgICAgIHN5bWJvbFxuICAgICAgdGltZWZyYW1lXG4gICAgICBvcGVuXG4gICAgICBoaWdoXG4gICAgICBsb3dcbiAgICAgIGNsb3NlXG4gICAgICB0cmFkZXNcbiAgICAgIHZvbHVtZVxuICAgICAgdndhcFxuICAgICAgbGFzdFNpemVcbiAgICAgIGhvbWVOb3Rpb25hbFxuICAgICAgZm9yZWlnbk5vdGlvbmFsXG4gICAgfVxuXG4gICAgZmV0Y2hGaXZlTWludXRlQ2FuZGxlSGlzdG9yeShzdGFydDogJHN0YXJ0LCBlbmQ6ICRlbmQpIHtcbiAgICAgIGlkXG4gICAgICB0aW1lc3RhbXBcbiAgICAgIHN5bWJvbFxuICAgICAgdGltZWZyYW1lXG4gICAgICBvcGVuXG4gICAgICBoaWdoXG4gICAgICBsb3dcbiAgICAgIGNsb3NlXG4gICAgICB0cmFkZXNcbiAgICAgIHZvbHVtZVxuICAgICAgdndhcFxuICAgICAgbGFzdFNpemVcbiAgICAgIGhvbWVOb3Rpb25hbFxuICAgICAgZm9yZWlnbk5vdGlvbmFsXG4gICAgfVxuICB9XG5gO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCwgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4uL3RoZW1lXCI7XG5pbXBvcnQgRmV0Y2hRdWVyeSBmcm9tIFwiLi9GZXRjaFF1ZXJ5XCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgaW5qZWN0LCBvYnNlcnZlciB9IGZyb20gXCJtb2J4LXJlYWN0XCI7XG5pbXBvcnQgeyBTdG9yZSwgaHlkcmF0ZSB9IGZyb20gXCIuLi8uLi9zdG9yZXMvc3RvcmVcIjtcbmltcG9ydCB7IGdldFN0YXRlRGF0ZSB9IGZyb20gXCIuLi9IZWxwZXJzL0Z1bmN0aW9uc1wiO1xuXG5jb25zdCBDb29raWUgPSByZXF1aXJlKFwianMtY29va2llXCIpO1xuXG5AaW5qZWN0KFwic3RvcmVcIilcbkBvYnNlcnZlclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGFzaEluaXRpYWxUZXJtcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzdGFydDogbnVsbCxcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgbGV0IGNvb2sgPSBDb29raWUuZ2V0KFwiaXNBdXRoXCIpID09IFwidHJ1ZVwiO1xuICAgIGlmICghY29vaykge1xuICAgICAgUm91dGVyLnB1c2goXCIvXCIpO1xuICAgIH0gZWxzZSBpZiAoISFjb29rKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgaXNBdXRoOiBjb29rIH0pO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5zdG9yZS5zdGFydERhdGUgPT0gbnVsbCkge1xuICAgICAgbGV0IGRhdGVzID0gZ2V0U3RhdGVEYXRlKFwiVGhpcyBXZWVrXCIpO1xuICAgICAgdGhpcy5wcm9wcy5zdG9yZS5zdGFydERhdGUgPSBkYXRlcy5zdGFydDtcbiAgICAgIHRoaXMucHJvcHMuc3RvcmUuZW5kRGF0ZSA9IGRhdGVzLmVuZDtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzdGFydDogdHJ1ZSB9KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuc3RhcnQgIT09IG51bGwpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZShmYWxzZSl9PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19PlxuICAgICAgICAgICAgPEZldGNoUXVlcnkgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIDxkaXY+bG9hZGluZzwvZGl2PjtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IEFwb2xsb0NvbnN1bWVyIH0gZnJvbSBcInJlYWN0LWFwb2xsb1wiO1xuaW1wb3J0IHsgZ2V0Tm90ZXMsIGdldEhhc2h0YWdzIH0gZnJvbSBcIi4vbm90ZXNIZWxwZXJzXCI7XG5pbXBvcnQgZ3FsIGZyb20gXCJncmFwaHFsLXRhZ1wiO1xuaW1wb3J0IHtcbiAgRHJvcGRvd24sXG4gIERyb3Bkb3duVG9nZ2xlLFxuICBEcm9wZG93bk1lbnUsXG4gIERyb3Bkb3duSXRlbSxcbn0gZnJvbSBcInJlYWN0c3RyYXBcIjtcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcbmltcG9ydCB7IGZhUGx1cywgZmFUaW1lcywgZmFFcXVhbHMgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5pbXBvcnQgeyBpbmplY3QsIG9ic2VydmVyIH0gZnJvbSBcIm1vYngtcmVhY3RcIjtcbmltcG9ydCB7IHdoZW4gfSBmcm9tIFwibW9ieFwiO1xuaW1wb3J0IGVxdWFsIGZyb20gXCJmYXN0LWRlZXAtZXF1YWxcIjtcbmltcG9ydCBUZXh0YXJlYUF1dG9zaXplIGZyb20gXCJyZWFjdC1hdXRvc2l6ZS10ZXh0YXJlYVwiO1xuaW1wb3J0IHsgd2lkZUZvbnQsIHNtYWxsRm9udCB9IGZyb20gXCIuLi8uLi9zaGFyZWQvaGVscGVyc1wiO1xuXG5AaW5qZWN0KFtcInN0b3JlXCJdKVxuQG9ic2VydmVyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB2YWx1ZTogXCJcIixcbiAgICAgIGhhc2h0YWdzOiBbXSxcbiAgICAgIGluaXRIYXNodGFnczogW10sXG4gICAgICBzaG93Tm90ZXM6IGZhbHNlLFxuICAgIH07XG5cbiAgICB0aGlzLnNldFNob3dOb3RlcyA9IHRoaXMuc2V0U2hvd05vdGVzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmICh0aGlzLnByb3BzLnN0b3JlLnRlbXBOb3Rlc1swXSAhPSB1bmRlZmluZWQpIHtcbiAgICAgIGxldCBpc1RlbXAgPSBmYWxzZTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9wcy5zdG9yZS50ZW1wTm90ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHRoaXMucHJvcHMuc3RvcmUudGVtcE5vdGVzW2ldLnRpbWUgPT0gdGhpcy5wcm9wcy5maXJzdFRyYWRlLnRpbWVzdGFtcFxuICAgICAgICApIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6IHRoaXMucHJvcHMuc3RvcmUudGVtcE5vdGVzW2ldLm5vdGUgfSk7XG4gICAgICAgICAgaXNUZW1wID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaSA9PSB0aGlzLnByb3BzLnN0b3JlLnRlbXBOb3Rlcy5sZW5ndGggLSAxICYmIGlzVGVtcCA9PSBmYWxzZSkge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdmFsdWU6IHRoaXMucHJvcHMuZmlyc3RUcmFkZS5ub3RlcyxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5maXJzdFRyYWRlLm5vdGVzICE9IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgdmFsdWU6IHRoaXMucHJvcHMuZmlyc3RUcmFkZS5ub3RlcyxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxldCBzcGxpdFRhZ3MgPSB0aGlzLnByb3BzLmZpcnN0VHJhZGUuaGFzaHRhZ3Muc3BsaXQoXCIsXCIpO1xuICAgIHNwbGl0VGFncy5tYXAoKHRhZykgPT4ge1xuICAgICAgdGhpcy5zdGF0ZS5pbml0SGFzaHRhZ3MucHVzaCh0YWcpO1xuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKGNsaWVudCkge1xuICAgIHJldHVybiAoZXZlbnQpID0+IHtcbiAgICAgIC8vIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZSB9LCB0aGlzLmhhbmRsZVN1Ym1pdChjbGllbnQpKTtcbiAgICAgIHRoaXMucHJvcHMuc3RvcmUuYWRkVGVtcE5vdGUoXG4gICAgICAgIHRoaXMucHJvcHMuZmlyc3RUcmFkZS50aW1lc3RhbXAsXG4gICAgICAgIGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgKTtcbiAgICB9O1xuICB9XG5cbiAgcmVtb3ZlSGFzaHRhZyhjbGllbnQsIGhhc2h0YWcpIHtcbiAgICByZXR1cm4gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQgIT0gdW5kZWZpbmVkICYmIGV2ZW50LnByZXZlbnREZWZhdWx0ICE9IHVuZGVmaW5lZCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgICAgbGV0IHRpbWUgPSB0aGlzLnByb3BzLmZpcnN0VHJhZGUudGltZXN0YW1wO1xuICAgICAgY2xpZW50XG4gICAgICAgIC5tdXRhdGUoe1xuICAgICAgICAgIG11dGF0aW9uOiBncWxgXG4gICAgICAgICAgICBtdXRhdGlvbiByZW1vdmVIYXNodGFnKCR0aW1lOiBTdHJpbmchLCAkaGFzaHRhZzogU3RyaW5nISkge1xuICAgICAgICAgICAgICByZW1vdmVIYXNodGFnKHRpbWU6ICR0aW1lLCBoYXNodGFnOiAkaGFzaHRhZylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgLFxuICAgICAgICAgIHZhcmlhYmxlczogeyB0aW1lLCBoYXNodGFnIH0sXG4gICAgICAgICAgcmVmZXRjaFF1ZXJpZXM6IFtgZmV0Y2hUcmFkZUhpc3RvcnlgXSxcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHRoaXMucHJvcHMuc3RvcmUuY2hhbmdlSGFzVGVtcFRhZ3MoKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgfVxuXG4gIGhhbmRsZVN1Ym1pdChjbGllbnQpIHtcbiAgICByZXR1cm4gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQgIT0gdW5kZWZpbmVkICYmIGV2ZW50LnByZXZlbnREZWZhdWx0ICE9IHVuZGVmaW5lZCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coXCJIQVNIVEFHU1wiLCB0aGlzLnN0YXRlLmhhc2h0YWdzKTtcbiAgICAgIGdldE5vdGVzKHRoaXMuc3RhdGUudmFsdWUpLnRoZW4oYXN5bmMgKHJlcykgPT4ge1xuICAgICAgICBsZXQgbm90ZXMgPSByZXNbMF07XG4gICAgICAgIGxldCB0aW1lID0gdGhpcy5wcm9wcy5maXJzdFRyYWRlLnRpbWVzdGFtcDtcbiAgICAgICAgbGV0IHJlc28gPSBjbGllbnQubXV0YXRlKHtcbiAgICAgICAgICBtdXRhdGlvbjogZ3FsYFxuICAgICAgICAgICAgbXV0YXRpb24gYWRkTm90ZXMoJHRpbWU6IFN0cmluZyEsICRub3RlczogU3RyaW5nISkge1xuICAgICAgICAgICAgICBhZGROb3Rlcyh0aW1lOiAkdGltZSwgbm90ZXM6ICRub3RlcylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgLFxuICAgICAgICAgIHZhcmlhYmxlczogeyB0aW1lLCBub3RlcyB9LFxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gYXdhaXQgcmVzbztcbiAgICAgIH0pO1xuICAgIH07XG4gIH1cblxuICBzZXRTaG93Tm90ZXMoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuc2hvd05vdGVzID09IGZhbHNlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd05vdGVzOiB0cnVlIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd05vdGVzOiBmYWxzZSB9KTtcbiAgICB9XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8QXBvbGxvQ29uc3VtZXI+XG4gICAgICAgIHsoY2xpZW50KSA9PiAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxGdWxsUm93IG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdChjbGllbnQpfT5cbiAgICAgICAgICAgICAgPEhhc2h0YWdEaXY+XG4gICAgICAgICAgICAgICAgPEFkZEhhc2h0YWdcbiAgICAgICAgICAgICAgICAgIGZpcnN0VHJhZGU9e3RoaXMucHJvcHMuZmlyc3RUcmFkZX1cbiAgICAgICAgICAgICAgICAgIGNsaWVudD17Y2xpZW50fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvSGFzaHRhZ0Rpdj5cbiAgICAgICAgICAgICAge3RoaXMuc3RhdGUuaW5pdEhhc2h0YWdzLm1hcCgodGFnKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRhZyAhPSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8U2luZ2xlSGFzaHRhZ0Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8U2luZ2xlSGFzaHRhZ1RleHQ+I3t0YWd9PC9TaW5nbGVIYXNodGFnVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICA8U2luZ2xlSGFzaHRhZ0RlbGV0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5yZW1vdmVIYXNodGFnKGNsaWVudCwgdGFnKX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGljb249e2ZhVGltZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJ4c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvU2luZ2xlSGFzaHRhZ0RlbGV0ZT5cbiAgICAgICAgICAgICAgICAgICAgPC9TaW5nbGVIYXNodGFnRGl2PlxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zaG93Tm90ZXMgPT0gdHJ1ZSA/IChcbiAgICAgICAgICAgICAgICA8U2hvd05vdGVzRGl2IG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U2hvd05vdGVzKCl9PlxuICAgICAgICAgICAgICAgICAgPFNob3dOb3Rlc0lubmVyPkhpZGUgTm90ZXM8L1Nob3dOb3Rlc0lubmVyPlxuICAgICAgICAgICAgICAgIDwvU2hvd05vdGVzRGl2PlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxTaG93Tm90ZXNEaXYgb25DbGljaz17KCkgPT4gdGhpcy5zZXRTaG93Tm90ZXMoKX0+XG4gICAgICAgICAgICAgICAgICA8U2hvd05vdGVzSW5uZXI+U2hvdyBOb3RlczwvU2hvd05vdGVzSW5uZXI+XG4gICAgICAgICAgICAgICAgPC9TaG93Tm90ZXNEaXY+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L0Z1bGxSb3c+XG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5zaG93Tm90ZXMgPT0gdHJ1ZSA/IChcbiAgICAgICAgICAgICAgPFRleHRhcmVhQXV0b3NpemVcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIxMnB4IDIwcHhcIixcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCI4cHggMFwiLFxuICAgICAgICAgICAgICAgICAgYm94U2l6aW5nOiBcImJvcmRlci1ib3hcIixcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IFwiI2Y4ZjhmZlwiLFxuICAgICAgICAgICAgICAgICAgYm9yZGVyOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICAgIG91dGxpbmU6IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTZweFwiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgcm93cz17NX1cbiAgICAgICAgICAgICAgICBtYXhSb3dzPXsyNX1cbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UoY2xpZW50KX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9BcG9sbG9Db25zdW1lcj5cbiAgICApO1xuICB9XG59XG4vLyBjb25zdCBOb3Rlc0lucHV0ID0gc3R5bGVkLnRleHRhcmVhYFxuLy8gICB3aWR0aDogMTAwJTtcbi8vICAgcGFkZGluZzogMTJweCAyMHB4O1xuLy8gICBtYXJnaW46IDhweCAwO1xuLy8gICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuLy8gICBiYWNrZ3JvdW5kOiAjZjhmOGZmO1xuLy8gICBib3JkZXI6IG5vbmU7XG4vLyBgO1xuXG5AaW5qZWN0KFtcInN0b3JlXCJdKVxuQG9ic2VydmVyXG5jbGFzcyBBZGRIYXNodGFnIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgY2xpY2tlZDogZmFsc2UgfTtcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2xpY2tlZCA9IHRoaXMuY2xpY2tlZC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNsaWVudDogdGhpcy5wcm9wcy5jbGllbnQgfSk7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcbiAgICAvLyBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiBldmVudC50YXJnZXQudmFsdWUgfSk7XG4gIH1cblxuICBhc3luYyBoYW5kbGVTdWJtaXQoZXZlbnQpIHtcbiAgICAvLyByZXR1cm4gZXZlbnQgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS52YWx1ZSk7XG4gICAgZ2V0SGFzaHRhZ3ModGhpcy5zdGF0ZS52YWx1ZSlcbiAgICAgIC50aGVuKGFzeW5jIChyZXMpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJDTElDS0VEXCIpO1xuICAgICAgICBsZXQgY2xpZW50ID0gdGhpcy5zdGF0ZS5jbGllbnQ7XG4gICAgICAgIGxldCBoYXNodGFnID0gcmVzO1xuICAgICAgICBjb25zb2xlLmxvZyhoYXNodGFnLCBcIkhBU0hUQUdcIik7XG4gICAgICAgIGxldCB0aW1lID0gdGhpcy5wcm9wcy5maXJzdFRyYWRlLnRpbWVzdGFtcDtcbiAgICAgICAgbGV0IHJlc28gPSBjbGllbnQubXV0YXRlKHtcbiAgICAgICAgICBtdXRhdGlvbjogZ3FsYFxuICAgICAgICAgICAgbXV0YXRpb24gYWRkSGFzaHRhZygkdGltZTogU3RyaW5nISwgJGhhc2h0YWc6IFN0cmluZyEpIHtcbiAgICAgICAgICAgICAgYWRkSGFzaHRhZyh0aW1lOiAkdGltZSwgaGFzaHRhZzogJGhhc2h0YWcpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgYCxcbiAgICAgICAgICB2YXJpYWJsZXM6IHsgdGltZSwgaGFzaHRhZyB9LFxuICAgICAgICAgIHJlZmV0Y2hRdWVyaWVzOiBbYGZldGNoVHJhZGVIaXN0b3J5YF0sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBhd2FpdCByZXNvO1xuICAgICAgfSlcbiAgICAgIC50aGVuKChyZXNvKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogXCJcIiB9KTtcbiAgICAgICAgdGhpcy5wcm9wcy5zdG9yZS5jaGFuZ2VIYXNUZW1wVGFncygpO1xuICAgICAgfSk7XG4gICAgLy8gfTtcbiAgfVxuXG4gIGNsaWNrZWQoKSB7XG4gICAgdGhpcy5zdGF0ZS5jbGlja2VkXG4gICAgICA/IHRoaXMuc2V0U3RhdGUoeyBjbGlja2VkOiBmYWxzZSB9KVxuICAgICAgOiB0aGlzLnNldFN0YXRlKHsgY2xpY2tlZDogdHJ1ZSB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPFBvcHVwIG9uQ2xpY2s9e3RoaXMuY2xpY2tlZH0+XG4gICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVBsdXN9IHN0eWxlPXt7IHRyYW5zaXRpb246IFwibm9uZVwiIH19IC8+XG4gICAgICAgIDwvUG9wdXA+XG4gICAgICAgIHt0aGlzLnN0YXRlLmNsaWNrZWQgPyAoXG4gICAgICAgICAgPFBvcHVwVG9wPlxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPEFkZEhhc2hTdWJtaXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiQWRkIEhhc2h0YWdcIiAvPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDwvUG9wdXBUb3A+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuY29uc3QgQWRkSGFzaFN1Ym1pdCA9IHN0eWxlZC5pbnB1dGBcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmc6IDJweDtcbmA7XG5jb25zdCBQb3B1cCA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQ6ICMwMDA7XG4gIHBhZGRpbmc6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuYDtcblxuY29uc3QgUG9wdXBUb3AgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6ICMwMDA7XG4gIHotaW5kZXg6IDE7XG4gIG1hcmdpbjogNXB4O1xuICBwYWRkaW5nOiAycHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbmA7XG4vLyBiYWNrZ3JvdW5kOiAjNmM3NTdkO1xuLy8gYmFja2dyb3VuZDogI2I5YmRjMTtcbmNvbnN0IFNpbmdsZUhhc2h0YWdEaXYgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kOiAjZjhmOGZmO1xuICBtYXJnaW46IDIwcHggOHB4O1xuICBjb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDVweCA3cHg7XG5cbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuYDtcblxuY29uc3QgU2hvd05vdGVzRGl2ID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgbWFyZ2luOiAyMHB4IDhweDtcblxuICBjb2xvcjogIzAwMDtcbiAgcGFkZGluZzogMTBweDtcbiAgcGFkZGluZy10b3A6IDhweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBiYWNrZ3JvdW5kOiAjZjhmOGZmO1xuICA6aG92ZXIge1xuICAgIHRyYW5zaXRpb246IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5gO1xuXG5jb25zdCBTaG93Tm90ZXNJbm5lciA9IHN0eWxlZC5kaXZgXG4gICR7d2lkZUZvbnR9XG4gIGZvbnQtc2l6ZToxM3B4O1xuICB0cmFuc2l0aW9uOiBub25lO1xuICBtYXJnaW46IGF1dG87XG5gO1xuXG5jb25zdCBTaW5nbGVIYXNodGFnVGV4dCA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbjogYXV0bztcbiAgJHt3aWRlRm9udH1cbmA7XG5jb25zdCBTaW5nbGVIYXNodGFnRGVsZXRlID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tbGVmdDogNnB4O1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gIDpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5gO1xuXG5jb25zdCBIYXNodGFnRGl2ID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luOiBhdXRvIDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBwYWRkaW5nLXRvcDogOHB4O1xuYDtcblxuY29uc3QgRnVsbFJvdyA9IHN0eWxlZC5mb3JtYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBiYWNrZ3JvdW5kOiAjZjhmOGZmO1xuYDtcblxuY29uc3QgTm90ZXNTdWJtaXQgPSBzdHlsZWQuaW5wdXRgXG4gIG1hcmdpbjogOXB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjMjEyNTI4O1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbmA7XG5cbmNvbnN0IE5vdGVzSW5wdXQgPSBzdHlsZWQudGV4dGFyZWFgXG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gIG1hcmdpbjogMHB4IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJhY2tncm91bmQ6ICNmOGY4ZmY7XG4gIGJvcmRlcjogbm9uZTtcbmA7XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBBcG9sbG9Db25zdW1lciB9IGZyb20gXCJyZWFjdC1hcG9sbG9cIjtcbmltcG9ydCB7IGdldE5vdGVzLCBnZXRIYXNodGFncyB9IGZyb20gXCIuL25vdGVzSGVscGVyc1wiO1xuaW1wb3J0IGdxbCBmcm9tIFwiZ3JhcGhxbC10YWdcIjtcbmltcG9ydCB7XG4gIERyb3Bkb3duLFxuICBEcm9wZG93blRvZ2dsZSxcbiAgRHJvcGRvd25NZW51LFxuICBEcm9wZG93bkl0ZW0sXG59IGZyb20gXCJyZWFjdHN0cmFwXCI7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XG5pbXBvcnQgeyBmYVBsdXMsIGZhVGltZXMsIGZhRXF1YWxzIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xuaW1wb3J0IHsgaW5qZWN0LCBvYnNlcnZlciB9IGZyb20gXCJtb2J4LXJlYWN0XCI7XG5pbXBvcnQgeyB3aGVuIH0gZnJvbSBcIm1vYnhcIjtcbmltcG9ydCBlcXVhbCBmcm9tIFwiZmFzdC1kZWVwLWVxdWFsXCI7XG5pbXBvcnQgVGV4dGFyZWFBdXRvc2l6ZSBmcm9tIFwicmVhY3QtYXV0b3NpemUtdGV4dGFyZWFcIjtcbmltcG9ydCB7IHdpZGVGb250LCBzbWFsbEZvbnQgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2hlbHBlcnNcIjtcblxuQGluamVjdChbXCJzdG9yZVwiXSlcbkBvYnNlcnZlclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdmFsdWU6IFwiXCIsXG4gICAgICBoYXNodGFnczogW10sXG4gICAgICBpbml0SGFzaHRhZ3M6IFtdLFxuICAgICAgc2hvd05vdGVzOiBmYWxzZSxcbiAgICB9O1xuXG4gICAgdGhpcy5zZXRTaG93Tm90ZXMgPSB0aGlzLnNldFNob3dOb3Rlcy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5zdG9yZS50ZW1wTm90ZXNbMF0gIT0gdW5kZWZpbmVkKSB7XG4gICAgICBsZXQgaXNUZW1wID0gZmFsc2U7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvcHMuc3RvcmUudGVtcE5vdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICB0aGlzLnByb3BzLnN0b3JlLnRlbXBOb3Rlc1tpXS50aW1lID09IHRoaXMucHJvcHMuZmlyc3RUcmFkZS50aW1lc3RhbXBcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiB0aGlzLnByb3BzLnN0b3JlLnRlbXBOb3Rlc1tpXS5ub3RlIH0pO1xuICAgICAgICAgIGlzVGVtcCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGkgPT0gdGhpcy5wcm9wcy5zdG9yZS50ZW1wTm90ZXMubGVuZ3RoIC0gMSAmJiBpc1RlbXAgPT0gZmFsc2UpIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLnByb3BzLmZpcnN0VHJhZGUubm90ZXMsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMucHJvcHMuZmlyc3RUcmFkZS5ub3RlcyAhPSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHZhbHVlOiB0aGlzLnByb3BzLmZpcnN0VHJhZGUubm90ZXMsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBsZXQgc3BsaXRUYWdzID0gdGhpcy5wcm9wcy5maXJzdFRyYWRlLmhhc2h0YWdzLnNwbGl0KFwiLFwiKTtcbiAgICBzcGxpdFRhZ3MubWFwKCh0YWcpID0+IHtcbiAgICAgIHRoaXMuc3RhdGUuaW5pdEhhc2h0YWdzLnB1c2godGFnKTtcbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZShjbGllbnQpIHtcbiAgICByZXR1cm4gKGV2ZW50KSA9PiB7XG4gICAgICAvLyBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiBldmVudC50YXJnZXQudmFsdWUgfSwgdGhpcy5oYW5kbGVTdWJtaXQoY2xpZW50KSk7XG4gICAgICB0aGlzLnByb3BzLnN0b3JlLmFkZFRlbXBOb3RlKFxuICAgICAgICB0aGlzLnByb3BzLmZpcnN0VHJhZGUudGltZXN0YW1wLFxuICAgICAgICBldmVudC50YXJnZXQudmFsdWVcbiAgICAgICk7XG4gICAgfTtcbiAgfVxuXG4gIHJlbW92ZUhhc2h0YWcoY2xpZW50LCBoYXNodGFnKSB7XG4gICAgcmV0dXJuIGFzeW5jIChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50ICE9IHVuZGVmaW5lZCAmJiBldmVudC5wcmV2ZW50RGVmYXVsdCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICAgIGxldCB0aW1lID0gdGhpcy5wcm9wcy5maXJzdFRyYWRlLnRpbWVzdGFtcDtcbiAgICAgIGNsaWVudFxuICAgICAgICAubXV0YXRlKHtcbiAgICAgICAgICBtdXRhdGlvbjogZ3FsYFxuICAgICAgICAgICAgbXV0YXRpb24gcmVtb3ZlSGFzaHRhZygkdGltZTogU3RyaW5nISwgJGhhc2h0YWc6IFN0cmluZyEpIHtcbiAgICAgICAgICAgICAgcmVtb3ZlSGFzaHRhZyh0aW1lOiAkdGltZSwgaGFzaHRhZzogJGhhc2h0YWcpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgYCxcbiAgICAgICAgICB2YXJpYWJsZXM6IHsgdGltZSwgaGFzaHRhZyB9LFxuICAgICAgICAgIHJlZmV0Y2hRdWVyaWVzOiBbYGZldGNoVHJhZGVIaXN0b3J5YF0sXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICB0aGlzLnByb3BzLnN0b3JlLmNoYW5nZUhhc1RlbXBUYWdzKCk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gIH1cblxuICBoYW5kbGVTdWJtaXQoY2xpZW50KSB7XG4gICAgcmV0dXJuIChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50ICE9IHVuZGVmaW5lZCAmJiBldmVudC5wcmV2ZW50RGVmYXVsdCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKFwiSEFTSFRBR1NcIiwgdGhpcy5zdGF0ZS5oYXNodGFncyk7XG4gICAgICBnZXROb3Rlcyh0aGlzLnN0YXRlLnZhbHVlKS50aGVuKGFzeW5jIChyZXMpID0+IHtcbiAgICAgICAgbGV0IG5vdGVzID0gcmVzWzBdO1xuICAgICAgICBsZXQgdGltZSA9IHRoaXMucHJvcHMuZmlyc3RUcmFkZS50aW1lc3RhbXA7XG4gICAgICAgIGxldCByZXNvID0gY2xpZW50Lm11dGF0ZSh7XG4gICAgICAgICAgbXV0YXRpb246IGdxbGBcbiAgICAgICAgICAgIG11dGF0aW9uIGFkZE5vdGVzKCR0aW1lOiBTdHJpbmchLCAkbm90ZXM6IFN0cmluZyEpIHtcbiAgICAgICAgICAgICAgYWRkTm90ZXModGltZTogJHRpbWUsIG5vdGVzOiAkbm90ZXMpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgYCxcbiAgICAgICAgICB2YXJpYWJsZXM6IHsgdGltZSwgbm90ZXMgfSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGF3YWl0IHJlc287XG4gICAgICB9KTtcbiAgICB9O1xuICB9XG5cbiAgc2V0U2hvd05vdGVzKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLnNob3dOb3RlcyA9PSBmYWxzZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dOb3RlczogdHJ1ZSB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dOb3RlczogZmFsc2UgfSk7XG4gICAgfVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEFwb2xsb0NvbnN1bWVyPlxuICAgICAgICB7KGNsaWVudCkgPT4gKFxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8RnVsbFJvdyBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXQoY2xpZW50KX0+XG4gICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmluaXRIYXNodGFncy5tYXAoKHRhZykgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0YWcgIT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPFNpbmdsZUhhc2h0YWdEaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPFNpbmdsZUhhc2h0YWdUZXh0PiN7dGFnfTwvU2luZ2xlSGFzaHRhZ1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgPFNpbmdsZUhhc2h0YWdEZWxldGVcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucmVtb3ZlSGFzaHRhZyhjbGllbnQsIHRhZyl9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPXtmYVRpbWVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwieHNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L1NpbmdsZUhhc2h0YWdEZWxldGU+XG4gICAgICAgICAgICAgICAgICAgIDwvU2luZ2xlSGFzaHRhZ0Rpdj5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPEhhc2h0YWdEaXY+XG4gICAgICAgICAgICAgICAgPEFkZEhhc2h0YWdcbiAgICAgICAgICAgICAgICAgIGZpcnN0VHJhZGU9e3RoaXMucHJvcHMuZmlyc3RUcmFkZX1cbiAgICAgICAgICAgICAgICAgIGNsaWVudD17Y2xpZW50fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvSGFzaHRhZ0Rpdj5cbiAgICAgICAgICAgIDwvRnVsbFJvdz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvQXBvbGxvQ29uc3VtZXI+XG4gICAgKTtcbiAgfVxufVxuLy8gY29uc3QgTm90ZXNJbnB1dCA9IHN0eWxlZC50ZXh0YXJlYWBcbi8vICAgd2lkdGg6IDEwMCU7XG4vLyAgIHBhZGRpbmc6IDEycHggMjBweDtcbi8vICAgbWFyZ2luOiA4cHggMDtcbi8vICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbi8vICAgYmFja2dyb3VuZDogI2Y4ZjhmZjtcbi8vICAgYm9yZGVyOiBub25lO1xuLy8gYDtcblxuQGluamVjdChbXCJzdG9yZVwiXSlcbkBvYnNlcnZlclxuY2xhc3MgQWRkSGFzaHRhZyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IGNsaWNrZWQ6IGZhbHNlIH07XG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNsaWNrZWQgPSB0aGlzLmNsaWNrZWQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBjbGllbnQ6IHRoaXMucHJvcHMuY2xpZW50IH0pO1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgLy8gZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQudmFsdWUpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xuICB9XG5cbiAgYXN5bmMgaGFuZGxlU3VibWl0KGV2ZW50KSB7XG4gICAgLy8gcmV0dXJuIGV2ZW50ID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUudmFsdWUpO1xuICAgIGdldEhhc2h0YWdzKHRoaXMuc3RhdGUudmFsdWUpXG4gICAgICAudGhlbihhc3luYyAocmVzKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ0xJQ0tFRFwiKTtcbiAgICAgICAgbGV0IGNsaWVudCA9IHRoaXMuc3RhdGUuY2xpZW50O1xuICAgICAgICBsZXQgaGFzaHRhZyA9IHJlcztcbiAgICAgICAgY29uc29sZS5sb2coaGFzaHRhZywgXCJIQVNIVEFHXCIpO1xuICAgICAgICBsZXQgdGltZSA9IHRoaXMucHJvcHMuZmlyc3RUcmFkZS50aW1lc3RhbXA7XG4gICAgICAgIGxldCByZXNvID0gY2xpZW50Lm11dGF0ZSh7XG4gICAgICAgICAgbXV0YXRpb246IGdxbGBcbiAgICAgICAgICAgIG11dGF0aW9uIGFkZEhhc2h0YWcoJHRpbWU6IFN0cmluZyEsICRoYXNodGFnOiBTdHJpbmchKSB7XG4gICAgICAgICAgICAgIGFkZEhhc2h0YWcodGltZTogJHRpbWUsIGhhc2h0YWc6ICRoYXNodGFnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIGAsXG4gICAgICAgICAgdmFyaWFibGVzOiB7IHRpbWUsIGhhc2h0YWcgfSxcbiAgICAgICAgICByZWZldGNoUXVlcmllczogW2BmZXRjaFRyYWRlSGlzdG9yeWBdLFxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gYXdhaXQgcmVzbztcbiAgICAgIH0pXG4gICAgICAudGhlbigocmVzbykgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6IFwiXCIgfSk7XG4gICAgICAgIHRoaXMucHJvcHMuc3RvcmUuY2hhbmdlSGFzVGVtcFRhZ3MoKTtcbiAgICAgIH0pO1xuICAgIC8vIH07XG4gIH1cblxuICBjbGlja2VkKCkge1xuICAgIHRoaXMuc3RhdGUuY2xpY2tlZFxuICAgICAgPyB0aGlzLnNldFN0YXRlKHsgY2xpY2tlZDogZmFsc2UgfSlcbiAgICAgIDogdGhpcy5zZXRTdGF0ZSh7IGNsaWNrZWQ6IHRydWUgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxQb3B1cFxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuY2xpY2tlZH1cbiAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJyb3dcIiB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdj5BZGQgSGFzaHRhZzwvZGl2PlxuICAgICAgICAgIDxGb250QXdlc29tZUljb25cbiAgICAgICAgICAgIGljb249e2ZhUGx1c31cbiAgICAgICAgICAgIHN0eWxlPXt7IHRyYW5zaXRpb246IFwibm9uZVwiLCBtYXJnaW46IFwiYXV0byA0cHhcIiB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvUG9wdXA+XG4gICAgICAgIHt0aGlzLnN0YXRlLmNsaWNrZWQgPyAoXG4gICAgICAgICAgPFBvcHVwVG9wPlxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPEFkZEhhc2hTdWJtaXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiQWRkXCIgLz5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8L1BvcHVwVG9wPlxuICAgICAgICApIDogbnVsbH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbmNvbnN0IEFkZEhhc2hTdWJtaXQgPSBzdHlsZWQuaW5wdXRgXG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNTAwO1xuICBwYWRkaW5nOiAycHg7XG5gO1xuY29uc3QgUG9wdXAgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xuICBwYWRkaW5nOiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbmA7XG5cbmNvbnN0IFBvcHVwVG9wID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xuICB6LWluZGV4OiAxO1xuICBtYXJnaW46IDVweDtcbiAgcGFkZGluZzogMnB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG5gO1xuLy8gYmFja2dyb3VuZDogIzZjNzU3ZDtcbi8vIGJhY2tncm91bmQ6ICNiOWJkYzE7XG5jb25zdCBTaW5nbGVIYXNodGFnRGl2ID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZDogI2Y4ZjhmZjtcbiAgbWFyZ2luOiAwIDhweDtcbiAgY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiA1cHggN3B4O1xuXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbmA7XG5cbmNvbnN0IFNob3dOb3Rlc0RpdiA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIG1hcmdpbjogMjBweCA4cHg7XG5cbiAgY29sb3I6ICMwMDA7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYmFja2dyb3VuZDogI2Y4ZjhmZjtcbiAgOmhvdmVyIHtcbiAgICB0cmFuc2l0aW9uOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuYDtcblxuY29uc3QgU2hvd05vdGVzSW5uZXIgPSBzdHlsZWQuZGl2YFxuICAke3dpZGVGb250fVxuICBmb250LXNpemU6MTNweDtcbiAgdHJhbnNpdGlvbjogbm9uZTtcbiAgbWFyZ2luOiBhdXRvO1xuYDtcblxuY29uc3QgU2luZ2xlSGFzaHRhZ1RleHQgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW46IGF1dG87XG4gICR7d2lkZUZvbnR9XG5gO1xuY29uc3QgU2luZ2xlSGFzaHRhZ0RlbGV0ZSA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IDZweDtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICA6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuYDtcblxuY29uc3QgSGFzaHRhZ0RpdiA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbjogYXV0byAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGNvbG9yOiB3aGl0ZTtcbmA7XG5cbmNvbnN0IEZ1bGxSb3cgPSBzdHlsZWQuZm9ybWBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbmA7XG5cbmNvbnN0IE5vdGVzU3VibWl0ID0gc3R5bGVkLmlucHV0YFxuICBtYXJnaW46IDlweDtcbiAgcGFkZGluZzogMTVweDtcbiAgYmFja2dyb3VuZDogIzIxMjUyODtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG5gO1xuXG5jb25zdCBOb3Rlc0lucHV0ID0gc3R5bGVkLnRleHRhcmVhYFxuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTJweCAyMHB4O1xuICBtYXJnaW46IDBweCAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBiYWNrZ3JvdW5kOiAjZjhmOGZmO1xuICBib3JkZXI6IG5vbmU7XG5gO1xuIiwiaW1wb3J0IHsgZ2V0Tm90ZXMsIGdldEhhc2h0YWdzIH0gZnJvbSBcIi4vbm90ZXNIZWxwZXJzXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQXBvbGxvQ29uc3VtZXIgfSBmcm9tIFwicmVhY3QtYXBvbGxvXCI7XG5pbXBvcnQgeyBvYnNlcnZlciB9IGZyb20gXCJtb2J4LXJlYWN0LWxpdGVcIjtcbmltcG9ydCB7IGluamVjdCB9IGZyb20gXCJtb2J4LXJlYWN0XCI7XG5pbXBvcnQgVGV4dGFyZWFBdXRvc2l6ZSBmcm9tIFwicmVhY3QtYXV0b3NpemUtdGV4dGFyZWFcIjtcbmltcG9ydCBncWwgZnJvbSBcImdyYXBocWwtdGFnXCI7XG5cbmNvbnN0IE15VGV4dEFyZWEgPSBpbmplY3QoXCJzdG9yZVwiKShcbiAgb2JzZXJ2ZXIoKHsgZmlyc3RUcmFkZSwgc3RvcmUsIGNsaWVudCB9KSA9PiB7XG4gICAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZSgpO1xuICAgIGNvbnN0IFtsaWdodCwgc2V0TGlnaHRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtteUNsaWVudCwgc2V0Q2xpZW50XSA9IHVzZVN0YXRlKGNsaWVudCk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGxldCB2YWw7XG4gICAgICBpZiAoZmlyc3RUcmFkZS5ub3RlcyA9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIHNldFZhbHVlKFwiQWRkIG5vdGVzIGhlcmUuLi5cIik7XG4gICAgICAgIHNldExpZ2h0KHRydWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0VmFsdWUoZmlyc3RUcmFkZS5ub3Rlcyk7XG4gICAgICB9XG4gICAgICBsZXQgbm90VGVtcCA9IHRydWU7XG4gICAgICBpZiAoc3RvcmUudGVtcE5vdGVzWzBdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdG9yZS50ZW1wTm90ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAoc3RvcmUudGVtcE5vdGVzW2ldLnRpbWUgPT0gZmlyc3RUcmFkZS50aW1lc3RhbXAudG9TdHJpbmcoKSkge1xuICAgICAgICAgICAgc2V0VmFsdWUoc3RvcmUudGVtcE5vdGVzW2ldLm5vdGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGlmICh2YWx1ZSAhPSBcIkFkZCBub3RlcyBoZXJlLi4uXCIpIHtcbiAgICAgICAgc2V0TGlnaHQoZmFsc2UpO1xuICAgICAgICBnZXROb3Rlcyh2YWx1ZSkudGhlbihhc3luYyAocmVzKSA9PiB7XG4gICAgICAgICAgbGV0IG5vdGVzID0gcmVzWzBdO1xuICAgICAgICAgIGxldCB0aW1lID0gZmlyc3RUcmFkZS50aW1lc3RhbXA7XG4gICAgICAgICAgbGV0IHJlc28gPSBteUNsaWVudC5tdXRhdGUoe1xuICAgICAgICAgICAgbXV0YXRpb246IGdxbGBcbiAgICAgICAgICAgICAgbXV0YXRpb24gYWRkTm90ZXMoJHRpbWU6IFN0cmluZyEsICRub3RlczogU3RyaW5nISkge1xuICAgICAgICAgICAgICAgIGFkZE5vdGVzKHRpbWU6ICR0aW1lLCBub3RlczogJG5vdGVzKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgLFxuICAgICAgICAgICAgdmFyaWFibGVzOiB7IHRpbWUsIG5vdGVzIH0sXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuIGF3YWl0IHJlc287XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sIFt2YWx1ZV0pO1xuXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKCkge1xuICAgICAgcmV0dXJuIChldmVudCkgPT4ge1xuICAgICAgICBzZXRMaWdodChmYWxzZSk7XG4gICAgICAgIHN0b3JlLmFkZFRlbXBOb3RlKGZpcnN0VHJhZGUudGltZXN0YW1wLCBldmVudC50YXJnZXQudmFsdWUpO1xuICAgICAgICBzZXRWYWx1ZShldmVudC50YXJnZXQudmFsdWUpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAobGlnaHQgPT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUZXh0YXJlYUF1dG9zaXplXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgIHBhZGRpbmc6IFwiMTJweCAyMHB4XCIsXG4gICAgICAgICAgICBtYXJnaW5Ub3A6IFwiOHB4XCIsXG4gICAgICAgICAgICBib3hTaXppbmc6IFwiYm9yZGVyLWJveFwiLFxuICAgICAgICAgICAgYmFja2dyb3VuZDogXCIjZjhmOGZmXCIsXG4gICAgICAgICAgICBib3JkZXI6IFwibm9uZVwiLFxuICAgICAgICAgICAgb3V0bGluZTogXCJub25lXCIsXG4gICAgICAgICAgICBmb250U2l6ZTogXCIxNXB4XCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgICByb3dzPXs1fVxuICAgICAgICAgIG1heFJvd3M9ezI1fVxuICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKCl9XG4gICAgICAgIC8+XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VGV4dGFyZWFBdXRvc2l6ZVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICBwYWRkaW5nOiBcIjEycHggMjBweFwiLFxuICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjhweFwiLFxuICAgICAgICAgICAgYm94U2l6aW5nOiBcImJvcmRlci1ib3hcIixcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IFwiI2Y4ZjhmZlwiLFxuICAgICAgICAgICAgYm9yZGVyOiBcIm5vbmVcIixcbiAgICAgICAgICAgIG91dGxpbmU6IFwibm9uZVwiLFxuICAgICAgICAgICAgZm9udFNpemU6IFwiMTVweFwiLFxuICAgICAgICAgICAgY29sb3I6IFwiI2M2YzZjNlwiLFxuICAgICAgICAgIH19XG4gICAgICAgICAgcm93cz17NX1cbiAgICAgICAgICBtYXhSb3dzPXsyNX1cbiAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgpfVxuICAgICAgICAvPlxuICAgICAgKTtcbiAgICB9XG4gIH0pXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBNeVRleHRBcmVhO1xuIiwiZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE5vdGVzKGlucHV0VmFsKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICBsZXQgbm90ZXM7XG4gICAgaWYgKGlucHV0VmFsICE9IG51bGwpIHtcbiAgICAgIG5vdGVzID0gaW5wdXRWYWw7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5vdGVzID0gXCJ1bmRlZmluZWRcIjtcbiAgICB9XG4gICAgLy8gbGV0IGhhc2h0YWdzID0gXCJcIjtcbiAgICAvLyBpZiAoaW5wdXRIYXNodGFncyAhPSBudWxsKSB7XG4gICAgLy8gICBmb3IgKGxldCBrID0gMDsgayA8IGlucHV0SGFzaHRhZ3MubGVuZ3RoOyBrKyspIHtcbiAgICAvLyAgICAgaGFzaHRhZ3MgKz0gaW5wdXRIYXNodGFnc1trXSArIFwiIFwiO1xuICAgIC8vICAgICBpZiAoayA9PSBpbnB1dEhhc2h0YWdzLmxlbmd0aCAtIDEpIHtcbiAgICAvLyAgICAgICBsZXQgZW5kQXJyID0gW107XG4gICAgLy8gICAgICAgZW5kQXJyLnB1c2gobm90ZXMpO1xuICAgIC8vICAgICAgIGVuZEFyci5wdXNoKGhhc2h0YWdzKTtcbiAgICAvLyAgICAgICByZXNvbHZlKGVuZEFycik7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgIH1cbiAgICAvLyB9IGVsc2Uge1xuICAgIGxldCBlbmRBcnIgPSBbXTtcbiAgICBlbmRBcnIucHVzaChub3Rlcyk7XG4gICAgLy8gZW5kQXJyLnB1c2goaGFzaHRhZ3MpO1xuICAgIHJlc29sdmUoZW5kQXJyKTtcbiAgICAvLyB9XG4gIH0pO1xufVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEhhc2h0YWdzKGlucHV0SGFzaHRhZ3MpIHtcbiAgY29uc29sZS5sb2coaW5wdXRIYXNodGFncywgXCJJTlAgSEFTSFwiKTtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgIGxldCBoYXNodGFncztcbiAgICBpZiAoaW5wdXRIYXNodGFncyAhPSBudWxsICYmIGlucHV0SGFzaHRhZ3MgIT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNodGFncyA9IGlucHV0SGFzaHRhZ3M7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhhc2h0YWdzID0gXCJ1bmRlZmluZWRcIjtcbiAgICB9XG4gICAgY29uc29sZS5sb2coaGFzaHRhZ3MsIFwiRU5EIEhBU0hTXCIpO1xuICAgIHJlc29sdmUoaGFzaHRhZ3MpO1xuICB9KTtcbn1cbiIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBpbmplY3QgfSBmcm9tIFwibW9ieC1yZWFjdFwiO1xuaW1wb3J0IHsgb2JzZXJ2ZXIgfSBmcm9tIFwibW9ieC1yZWFjdC1saXRlXCI7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XG5pbXBvcnQgeyBmYUNhcmV0TGVmdCB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmltcG9ydCB7IHdpZGVGb250IH0gZnJvbSBcIi4uL3NoYXJlZC9oZWxwZXJzXCI7XG5cbmNvbnN0IFRhYnMgPSBpbmplY3QoXCJzdG9yZVwiKShcbiAgb2JzZXJ2ZXIoKHsgc3RvcmUgfSkgPT4ge1xuICAgIGNvbnN0IFthY3RpdmVUYWIsIHNldEFjdGl2ZVRhYl0gPSB1c2VTdGF0ZShcIm5vdGVzXCIpO1xuXG4gICAgZnVuY3Rpb24gc2V0QWN0aXZlKHRhYikge1xuICAgICAgY29uc29sZS5sb2coXCJDTElDS0VEXCIpO1xuICAgICAgaWYgKHRhYiAhPT0gYWN0aXZlVGFiKSB7XG4gICAgICAgIHNldEFjdGl2ZVRhYih0YWIpO1xuICAgICAgICBjb25zb2xlLmxvZyhcInNldHRpbmcgdGFiXCIsIHRhYik7XG4gICAgICAgIGlmICh0YWIgPT0gXCJub3Rlc1wiKSB7XG4gICAgICAgICAgc3RvcmUuaXNTaW5nbGVOb3RlcyA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN0b3JlLmlzU2luZ2xlTm90ZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYmFja3dhcmRzKCkge1xuICAgICAgY29uc29sZS5sb2coXCJCQUNLIENMSUNLRURcIik7XG4gICAgICBzdG9yZS5oYXNTaW5nbGVUcmFkZSA9IGZhbHNlO1xuICAgICAgc3RvcmUuaXNTaW5nbGVOb3RlcyA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChhY3RpdmVUYWIgPT0gXCJub3Rlc1wiKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8V3JhcFRhYnM+XG4gICAgICAgICAgPFNpbmdsZVRhYiBpc0FjdGl2ZT17ZmFsc2V9IG9uQ2xpY2s9eygpID0+IGJhY2t3YXJkcygpfT5cbiAgICAgICAgICAgIDxTaW5nbGVUYWJJbm5lcj5cbiAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxuICAgICAgICAgICAgICAgIGljb249e2ZhQ2FyZXRMZWZ0fVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIjdweFwiLFxuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTJweFwiLFxuICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjJweFwiLFxuICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcImF1dG9cIixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICBBbGwgVHJhZGVzXG4gICAgICAgICAgICA8L1NpbmdsZVRhYklubmVyPlxuICAgICAgICAgIDwvU2luZ2xlVGFiPlxuICAgICAgICAgIDxTaW5nbGVUYWIgaXNBY3RpdmU9e3RydWV9IG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZShcIm5vdGVzXCIpfT5cbiAgICAgICAgICAgIDxTaW5nbGVUYWJJbm5lcj5Ob3RlczwvU2luZ2xlVGFiSW5uZXI+XG4gICAgICAgICAgPC9TaW5nbGVUYWI+XG4gICAgICAgICAgPFNpbmdsZVRhYiBpc0FjdGl2ZT17ZmFsc2V9IG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZShcImV4ZWNfaGlzdFwiKX0+XG4gICAgICAgICAgICA8U2luZ2xlVGFiSW5uZXI+RXhlY3V0aW9uIEhpc3Rvcnk8L1NpbmdsZVRhYklubmVyPlxuICAgICAgICAgIDwvU2luZ2xlVGFiPlxuICAgICAgICA8L1dyYXBUYWJzPlxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFdyYXBUYWJzPlxuICAgICAgICAgIDxTaW5nbGVUYWIgaXNBY3RpdmU9e2ZhbHNlfSBvbkNsaWNrPXsoKSA9PiBiYWNrd2FyZHMoKX0+XG4gICAgICAgICAgICA8U2luZ2xlVGFiSW5uZXI+XG4gICAgICAgICAgICAgIDxGb250QXdlc29tZUljb25cbiAgICAgICAgICAgICAgICBpY29uPXtmYUNhcmV0TGVmdH1cbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogXCI3cHhcIixcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjEycHhcIixcbiAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIycHhcIixcbiAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCJhdXRvXCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgQWxsIFRyYWRlc1xuICAgICAgICAgICAgPC9TaW5nbGVUYWJJbm5lcj5cbiAgICAgICAgICA8L1NpbmdsZVRhYj5cbiAgICAgICAgICA8U2luZ2xlVGFiIGlzQWN0aXZlPXtmYWxzZX0gb25DbGljaz17KCkgPT4gc2V0QWN0aXZlKFwibm90ZXNcIil9PlxuICAgICAgICAgICAgPFNpbmdsZVRhYklubmVyPk5vdGVzPC9TaW5nbGVUYWJJbm5lcj5cbiAgICAgICAgICA8L1NpbmdsZVRhYj5cbiAgICAgICAgICA8U2luZ2xlVGFiIGlzQWN0aXZlPXt0cnVlfSBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmUoXCJleGVjX2hpc3RcIil9PlxuICAgICAgICAgICAgPFNpbmdsZVRhYklubmVyPkV4ZWN1dGlvbiBIaXN0b3J5PC9TaW5nbGVUYWJJbm5lcj5cbiAgICAgICAgICA8L1NpbmdsZVRhYj5cbiAgICAgICAgPC9XcmFwVGFicz5cbiAgICAgICk7XG4gICAgfVxuICB9KVxuKTtcblxuZXhwb3J0IGRlZmF1bHQgVGFicztcblxuY29uc3QgU2luZ2xlVGFiSW5uZXIgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW46IGF1dG87XG5gO1xuXG5jb25zdCBTaW5nbGVUYWIgPSBzdHlsZWQuZGl2YFxuICBjb2xvcjogJHsocHJvcHMpID0+IChwcm9wcy5pc0FjdGl2ZSA/IFwiI2ZmZlwiIDogXCIjMDAwXCIpfTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsocHJvcHMpID0+IChwcm9wcy5pc0FjdGl2ZSA/IFwiIzIxMjUyN1wiIDogXCIjZmZmXCIpfTtcblxuICBtYXJnaW46IGF1dG8gMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIDpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5gO1xuXG5jb25zdCBXcmFwVGFicyA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZvbnQtc2l6ZTogMTVweDtcbmA7XG5jb25zdCBXaG9sZUdyaWQgPSBzdHlsZWQuZGl2YFxuICBib3JkZXI6IDFweCBzb2xpZCAjZjJmMmYyO1xuYDtcblxuY29uc3QgVG9wQmFyUGFyZW50ID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xuYDtcblxuY29uc3QgVG9wQmFyQ2hpbGRCaWcgPSBzdHlsZWQuZGl2YFxuICBmbGV4OiAxIDEgNDUlOyAvKmdyb3cgfCBzaHJpbmsgfCBiYXNpcyAqL1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuYDtcbmNvbnN0IFRvcEJhckNoaWxkU21hbGwgPSBzdHlsZWQuZGl2YFxuICBmbGV4OiAxIDEgMTAlOyAvKmdyb3cgfCBzaHJpbmsgfCBiYXNpcyAqL1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuYDtcblxuY29uc3QgVG9wSGFzaHRhZ0luZGl2aWR1YWwgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kOiAjZjhmOGZmO1xuICBjb2xvcjogIzAwMDtcbiAgcGFkZGluZzogOHB4O1xuICBtYXJnaW46IDAgMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAke3dpZGVGb250fVxuXG4gIDpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIG1hcmdpbi1sZWZ0OiAwO1xuYDtcblxuY29uc3QgVG9wSGFzaHRhZ0luZGl2aWR1YWxBY3RpdmUgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kOiAjMjEyNTI4O1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogOHB4O1xuICBtYXJnaW46IDAgMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAke3dpZGVGb250fVxuICBtYXJnaW46MCBhdXRvO1xuICA6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICBtYXJnaW4tbGVmdDogMDtcbmA7XG5jb25zdCBUb3BIYXNodGFnSW5kaXZpZHVhbEFjdGl2ZVJpZ2h0ID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZDogIzIxMjUyODtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDhweDtcbiAgbWFyZ2luOiAwIDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgJHt3aWRlRm9udH1cbiAgbWFyZ2luOjAgYXV0bztcbiAgOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgbWFyZ2luLXJpZ2h0OiAwO1xuYDtcblxuY29uc3QgVG9wSGFzaHRhZ0luZGl2aWR1YWxBY3RpdmVQbmwgPSBzdHlsZWQuZGl2YFxuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDAgMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAke3dpZGVGb250fVxuICA6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICBtYXJnaW46IGF1dG87XG5gO1xuXG5jb25zdCBDaGFydFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZzogNXB4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweDtcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgbWFyZ2luOiAwIDV2dztcbiAgfVxuYDtcblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi10b3A6IDVweDtcbmA7XG4iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCwgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBMaW5lQ2hhcnQsXG4gIEFyZWFDaGFydCxcbiAgQXJlYSxcbiAgTGluZSxcbiAgWEF4aXMsXG4gIFlBeGlzLFxuICBDYXJ0ZXNpYW5HcmlkLFxuICBUb29sdGlwLFxuICBMZWdlbmQsXG59IGZyb20gXCJyZWNoYXJ0c1wiO1xuaW1wb3J0IHN0eWxlZCwgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyB3aWRlRm9udCwgc21hbGxGb250IH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9oZWxwZXJzXCI7XG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4uLy4uL3RoZW1lXCI7XG5pbXBvcnQge1xuICBmb3JtYXREYXRlTW9udGhPbmx5LFxuICBjYWxjQ29tbWlzc2lvbixcbiAgZm9ybWF0RGF0ZVNob3J0LFxuICBmb3JtYXREYXRlU2hvcnRXaXRoSG91cixcbn0gZnJvbSBcIi4uLy4uL0hlbHBlcnMvRnVuY3Rpb25zLmpzXCI7XG5pbXBvcnQgeyBpbmplY3QsIG9ic2VydmVyIH0gZnJvbSBcIm1vYngtcmVhY3RcIjtcbmltcG9ydCBNYWluQ2hhcnQgZnJvbSBcIi4uL0NoYXJ0L2luZGV4XCI7XG5pbXBvcnQgTm90ZXMgZnJvbSBcIi4uL05vdGVzL05vdGVzXCI7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XG5pbXBvcnQgeyBmYUNhcmV0RG93biwgZmFDYXJldFVwIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xuaW1wb3J0IGVxdWFsIGZyb20gXCJmYXN0LWRlZXAtZXF1YWxcIjtcbmltcG9ydCBUZXh0YXJlYUF1dG9zaXplIGZyb20gXCJyZWFjdC1hdXRvc2l6ZS10ZXh0YXJlYVwiO1xuaW1wb3J0IE15VGV4dEFyZWEgZnJvbSBcIi4uL05vdGVzL1RleHRBcmVhXCI7XG5pbXBvcnQgeyB3aGVuLCByZWFjdGlvbiB9IGZyb20gXCJtb2J4XCI7XG5pbXBvcnQgeyBjYWxjVHJhZGVzIH0gZnJvbSBcIi4vY2FsY1RyYWRlc1wiO1xuaW1wb3J0IHsgQXBvbGxvQ29uc3VtZXIgfSBmcm9tIFwicmVhY3QtYXBvbGxvXCI7XG5cbkBpbmplY3QoW1wic3RvcmVcIl0pXG5Ab2JzZXJ2ZXJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4YW1wbGUgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHdpZHRoOiAwLFxuICAgICAgaGVpZ2h0OiAwLFxuICAgICAgZGF0YTogW10sXG4gICAgICBmdWxsVHJhZGVzOiBbXSxcbiAgICAgIGhhc1NpbmdsZVRyYWRlOiBmYWxzZSxcbiAgICB9O1xuICAgIHRoaXMudXBkYXRlV2luZG93RGltZW5zaW9ucyA9IHRoaXMudXBkYXRlV2luZG93RGltZW5zaW9ucy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY3JlYXRlRnVsbFRyYWRlcyA9IHRoaXMuY3JlYXRlRnVsbFRyYWRlcy5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY3JlYXRlRnVsbFRyYWRlcyhkYXRhKSB7XG4gICAgbGV0IGZ1bGxSYXkgPSBbXTtcbiAgICBsZXQgZnVsbFRyYWRlcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5mZXRjaFRyYWRlSGlzdG9yeS5sZW5ndGg7IGkrKykge1xuICAgICAgZnVsbFJheS51bnNoaWZ0KGRhdGEuZmV0Y2hUcmFkZUhpc3RvcnlbaV0pO1xuICAgICAgaWYgKGkgPT0gZGF0YS5mZXRjaFRyYWRlSGlzdG9yeS5sZW5ndGggLSAxKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZnVsbFJheS5sZW5ndGg7IGorKykge1xuICAgICAgICAgIGxldCBkYXQgPSBmdWxsUmF5W2pdO1xuICAgICAgICAgIC8vIGRhdC50aW1lc3RhbXAgPSBmb3JtYXREYXRlRm9yUm93KGRhdC50aW1lc3RhbXApO1xuICAgICAgICAgIC8vIGZ1bGxSYXlbal0gPSBkYXQ7XG4gICAgICAgICAgaWYgKGRhdC50cmRTdGFydCA9PSB0cnVlKSB7XG4gICAgICAgICAgICBsZXQgc2xpY2VkID0gZnVsbFJheS5zbGljZShqLCBmdWxsUmF5Lmxlbmd0aCk7XG4gICAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IHNsaWNlZC5sZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgICBpZiAoc2xpY2VkW2tdLnRyZEVuZCA9PSB0cnVlICYmIGsgPiAwKSB7XG4gICAgICAgICAgICAgICAgbGV0IG5ld3NsaWNlZCA9IHNsaWNlZC5zbGljZSgwLCBrICsgMSk7XG4gICAgICAgICAgICAgICAgZnVsbFRyYWRlcy51bnNoaWZ0KG5ld3NsaWNlZCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGogPT0gZnVsbFJheS5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICBsZXQgcmV0dXJuVmFsID0ge307XG4gICAgICAgICAgICByZXR1cm5WYWxbXCJpbml0RGF0YVwiXSA9IHRoaXMucHJvcHMuaW5pdERhdGE7XG4gICAgICAgICAgICByZXR1cm5WYWxbXCJkYXRhXCJdID0gZnVsbFJheTtcbiAgICAgICAgICAgIHJldHVyblZhbFtcImZ1bGxUcmFkZXNcIl0gPSBmdWxsVHJhZGVzO1xuICAgICAgICAgICAgcmV0dXJuIHJldHVyblZhbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmaWx0ZXIoKSB7fVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICBpZiAoIWVxdWFsKHRoaXMucHJvcHMuZmlsdGVyZWREYXRhLCBwcmV2UHJvcHMuZmlsdGVyZWREYXRhKSkge1xuICAgICAgLy8gdGhpcy51cGRhdGVUcmFkZXModGhpcy5wcm9wcy5kYXRhKTtcbiAgICAgIGxldCBuZXdGdWxsVHJhZGVzID0gW107XG4gICAgICBsZXQgZmlyc3RGdWxsVHJhZGVzID0gdGhpcy5jcmVhdGVGdWxsVHJhZGVzKHRoaXMucHJvcHMuZGF0YSk7XG4gICAgICBmaXJzdEZ1bGxUcmFkZXMgPSBmaXJzdEZ1bGxUcmFkZXMuZnVsbFRyYWRlcztcbiAgICAgIGlmICh0aGlzLnByb3BzLmZpbHRlcmVkRGF0YSA9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBmdWxsVHJhZGVzOiBmaXJzdEZ1bGxUcmFkZXMgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpcnN0RnVsbFRyYWRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5wcm9wcy5maWx0ZXJlZERhdGEubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGlmIChmaXJzdEZ1bGxUcmFkZXNbaV1bMF0uaWQgPT0gdGhpcy5wcm9wcy5maWx0ZXJlZERhdGFbal0uaWQpIHtcbiAgICAgICAgICAgICAgbmV3RnVsbFRyYWRlcy51bnNoaWZ0KGZpcnN0RnVsbFRyYWRlc1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChpID09IGZpcnN0RnVsbFRyYWRlcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZnVsbFRyYWRlczogbmV3RnVsbFRyYWRlcyB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBsZXQgcmV0dXJuZWQgPSB0aGlzLmNyZWF0ZUZ1bGxUcmFkZXModGhpcy5wcm9wcy5kYXRhKTtcbiAgICBpZiAocmV0dXJuZWQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZGF0YTogcmV0dXJuZWQuZnVsbFJheSxcbiAgICAgICAgZnVsbFRyYWRlczogcmV0dXJuZWQuZnVsbFRyYWRlcyxcbiAgICAgICAgaW5pdERhdGE6IHJldHVybmVkLmluaXREYXRhLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBkYXRhOiB0aGlzLnByb3BzLmluaXREYXRhLFxuICAgICAgICBpbml0RGF0YTogdGhpcy5wcm9wcy5pbml0RGF0YSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZVdpbmRvd0RpbWVuc2lvbnMoKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLnVwZGF0ZVdpbmRvd0RpbWVuc2lvbnMpO1xuXG4gICAgdGhpcy5zaW5nbGVOb3Rlc1JlYWN0aW9uID0gcmVhY3Rpb24oXG4gICAgICAoKSA9PiB0aGlzLnByb3BzLnN0b3JlLmlzU2luZ2xlTm90ZXMsXG4gICAgICAobm90aWZpY2F0aW9ucywgcmVhY3Rpb24pID0+IHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc3RvcmUuaXNTaW5nbGVOb3RlcyA9PSBmYWxzZSkge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc1NpbmdsZU5vdGVzOiBmYWxzZSB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNTaW5nbGVOb3RlczogdHJ1ZSB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICk7XG5cbiAgICB0aGlzLnNpbmdsZVRyYWRlUmVhY3Rpb24gPSByZWFjdGlvbihcbiAgICAgICgpID0+IHRoaXMucHJvcHMuc3RvcmUuaGFzU2luZ2xlVHJhZGUsXG4gICAgICAobm90aWZpY2F0aW9ucywgcmVhY3Rpb24pID0+IHtcbiAgICAgICAgdGhpcy5wcm9wcy5zdG9yZS5wbmwgPSAwO1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5zdG9yZS5oYXNTaW5nbGVUcmFkZSA9PSBmYWxzZSkge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBoYXNTaW5nbGVUcmFkZTogZmFsc2UgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGhhc1NpbmdsZVRyYWRlOiB0cnVlIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMudXBkYXRlV2luZG93RGltZW5zaW9ucyk7XG4gIH1cblxuICB1cGRhdGVXaW5kb3dEaW1lbnNpb25zKCkge1xuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDc2OCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICAgICAgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsXG4gICAgICAgIGNoYXJ0V2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoICogMC45LFxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDEwMjQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB3aWR0aDogd2luZG93LmlubmVyV2lkdGgsXG4gICAgICAgIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LFxuICAgICAgICBjaGFydFdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCAqIDAuOSAtIDE3OSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAod2luZG93LmlubmVyV2lkdGggPj0gMTAyNCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICAgICAgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsXG4gICAgICAgIGNoYXJ0V2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoICogMC44IC0gMTc5LFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLmhhc1NpbmdsZVRyYWRlID09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWUoZmFsc2UpfT5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1pbldpZHRoOiB0aGlzLnN0YXRlLmNoYXJ0V2lkdGggfX0+XG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5mdWxsVHJhZGVzLm1hcCgoc2xpYywgaSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxNYWtlQ29sXG4gICAgICAgICAgICAgICAgICBjbGlja2VkPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgIHNsaWM9e3NsaWN9XG4gICAgICAgICAgICAgICAgICBvbmVtaW49e3RoaXMucHJvcHMuZGF0YS5mZXRjaE9uZU1pbnV0ZUNhbmRsZUhpc3Rvcnl9XG4gICAgICAgICAgICAgICAgICBmaXZlbWluPXt0aGlzLnByb3BzLmRhdGEuZmV0Y2hGaXZlTWludXRlQ2FuZGxlSGlzdG9yeX1cbiAgICAgICAgICAgICAgICAgIG9uZWhvdXI9e3RoaXMucHJvcHMuZGF0YS5mZXRjaE9uZUhvdXJDYW5kbGVIaXN0b3J5fVxuICAgICAgICAgICAgICAgICAgb25lZGF5PXt0aGlzLnByb3BzLmRhdGEuZmV0Y2hPbmVEYXlDYW5kbGVIaXN0b3J5fVxuICAgICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lKGZhbHNlKX0+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBtaW5XaWR0aDogdGhpcy5zdGF0ZS5jaGFydFdpZHRoIH19PlxuICAgICAgICAgICAgPE1ha2VDb2xcbiAgICAgICAgICAgICAgY2xpY2tlZD17dHJ1ZX1cbiAgICAgICAgICAgICAgc2xpYz17dGhpcy5wcm9wcy5zdG9yZS5zaW5nbGVUcmFkZX1cbiAgICAgICAgICAgICAgb25lbWluPXt0aGlzLnByb3BzLmRhdGEuZmV0Y2hPbmVNaW51dGVDYW5kbGVIaXN0b3J5fVxuICAgICAgICAgICAgICBmaXZlbWluPXt0aGlzLnByb3BzLmRhdGEuZmV0Y2hGaXZlTWludXRlQ2FuZGxlSGlzdG9yeX1cbiAgICAgICAgICAgICAgb25laG91cj17dGhpcy5wcm9wcy5kYXRhLmZldGNoT25lSG91ckNhbmRsZUhpc3Rvcnl9XG4gICAgICAgICAgICAgIG9uZWRheT17dGhpcy5wcm9wcy5kYXRhLmZldGNoT25lRGF5Q2FuZGxlSGlzdG9yeX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICAgICk7XG4gICAgfVxuICB9XG59XG5cbkBpbmplY3QoXCJzdG9yZVwiKVxuQG9ic2VydmVyXG5jbGFzcyBNYWtlQ29sIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGRhdGE6IFtdLFxuICAgICAgcG5sOiAwLFxuICAgICAgYXZnRW50cnlQcmljZTogMCxcbiAgICAgIGF2Z0V4aXRQcmljZTogMCxcbiAgICAgIGNsaWNrZWQ6IGZhbHNlLFxuICAgICAgY3VtUXR5OiAwLFxuICAgICAgcmVhZE1vcmVDbGlja2VkOiBmYWxzZSxcbiAgICB9O1xuICAgIHRoaXMucmVhZE1vcmVDbGlja2VkID0gdGhpcy5yZWFkTW9yZUNsaWNrZWQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNsaWNrZWQgPSB0aGlzLmNsaWNrZWQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmdldFNsaWNEYXRhID0gdGhpcy5nZXRTbGljRGF0YS5iaW5kKHRoaXMpO1xuICAgIHRoaXMudXBkYXRlV2luZG93RGltZW5zaW9ucyA9IHRoaXMudXBkYXRlV2luZG93RGltZW5zaW9ucy5iaW5kKHRoaXMpO1xuICB9XG5cbiAgdXBkYXRlV2luZG93RGltZW5zaW9ucygpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICB9KTtcbiAgfVxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLnVwZGF0ZVdpbmRvd0RpbWVuc2lvbnMpO1xuICB9XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMudXBkYXRlV2luZG93RGltZW5zaW9ucyk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNsaWNrZWQ6IHRoaXMucHJvcHMuY2xpY2tlZCB9KTtcbiAgfVxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgaWYgKCFlcXVhbCh0aGlzLnByb3BzLnNsaWMsIHByZXZQcm9wcy5zbGljKSkge1xuICAgICAgdGhpcy5nZXRTbGljRGF0YSgpO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICB0aGlzLmdldFNsaWNEYXRhKCk7XG4gICAgdGhpcy51cGRhdGVXaW5kb3dEaW1lbnNpb25zKCk7XG4gIH1cblxuICBhc3luYyBnZXRTbGljRGF0YSgpIHtcbiAgICB0aGlzLnN0YXRlLmRhdGEgPSB0aGlzLnByb3BzLnNsaWM7XG4gICAgbGV0IGNhbGNlZCA9IGF3YWl0IGNhbGNUcmFkZXModGhpcy5wcm9wcy5zbGljKTtcblxuICAgIGlmIChjYWxjZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHBubDogY2FsY2VkW1wicG5sXCJdLFxuICAgICAgICBhdmdFbnRyeVByaWNlOiBjYWxjZWRbXCJhdmdFbnRyeVByaWNlXCJdLFxuICAgICAgICBhdmdFeGl0UHJpY2U6IGNhbGNlZFtcImF2Z0V4aXRQcmljZVwiXSxcbiAgICAgICAgY3VtUXR5OiBjYWxjZWRbXCJjdW1RdHlcIl0sXG4gICAgICB9KTtcbiAgICAgIGlmICh0aGlzLnByb3BzLmNsaWNrZWQgPT0gdHJ1ZSkge1xuICAgICAgICB0aGlzLnByb3BzLnN0b3JlLnBubCA9IGNhbGNlZFtcInBubFwiXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucHJvcHMuc3RvcmUuYWRkUG5sKGNhbGNlZFtcInBubFwiXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2xpY2tlZChkYXQpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5jbGlja2VkID09IGZhbHNlKSB7XG4gICAgICB0aGlzLnByb3BzLnN0b3JlLnNldFNpbmdsZVRyYWRlKGRhdCk7XG4gICAgICB0aGlzLnByb3BzLnN0b3JlLmhhc1NpbmdsZVRyYWRlID0gdHJ1ZTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjbGlja2VkOiB0cnVlIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnByb3BzLnN0b3JlLmhhc1NpbmdsZVRyYWRlID0gZmFsc2U7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgY2xpY2tlZDogZmFsc2UgfSk7XG4gICAgfVxuICB9XG5cbiAgcmVhZE1vcmVDbGlja2VkKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLnJlYWRNb3JlQ2xpY2tlZCA9PSBmYWxzZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJlYWRNb3JlQ2xpY2tlZDogdHJ1ZSB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJlYWRNb3JlQ2xpY2tlZDogZmFsc2UgfSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLmNsaWNrZWQgPT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxDb250YWluRGl2IG9uQ2xpY2s9eygpID0+IHRoaXMuY2xpY2tlZCh0aGlzLnN0YXRlLmRhdGEpfT5cbiAgICAgICAgICA8TmV4dFRvRGl2PlxuICAgICAgICAgICAge2Zvcm1hdERhdGVNb250aE9ubHkodGhpcy5zdGF0ZS5kYXRhWzBdLnRpbWVzdGFtcCl9XG4gICAgICAgICAgPC9OZXh0VG9EaXY+XG4gICAgICAgICAgPE5leHRUb0Rpdj5cbiAgICAgICAgICAgIHtmb3JtYXREYXRlTW9udGhPbmx5KFxuICAgICAgICAgICAgICB0aGlzLnN0YXRlLmRhdGFbdGhpcy5zdGF0ZS5kYXRhLmxlbmd0aCAtIDFdLnRpbWVzdGFtcFxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L05leHRUb0Rpdj5cbiAgICAgICAgICA8SXNTaG9ydFxuICAgICAgICAgICAgc2lkZT17dGhpcy5zdGF0ZS5kYXRhWzBdLnNpZGV9XG4gICAgICAgICAgICBsYXN0PXt0aGlzLnN0YXRlLmRhdGFbdGhpcy5zdGF0ZS5kYXRhLmxlbmd0aCAtIDFdLm9yZGVyVHlwZX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxOZXh0VG9EaXY+JHt0aGlzLnN0YXRlLmF2Z0VudHJ5UHJpY2UudG9GaXhlZCgxKX08L05leHRUb0Rpdj5cbiAgICAgICAgICA8TmV4dFRvRGl2PiR7dGhpcy5zdGF0ZS5hdmdFeGl0UHJpY2UudG9GaXhlZCgxKX08L05leHRUb0Rpdj5cbiAgICAgICAgICA8TmV4dFRvRGl2Pnt0aGlzLnN0YXRlLmN1bVF0eX08L05leHRUb0Rpdj5cbiAgICAgICAgICA8TmV4dFRvRGl2Pnt0aGlzLnN0YXRlLnBubC50b0ZpeGVkKDQpICsgXCJ4YnRcIn08L05leHRUb0Rpdj5cbiAgICAgICAgPC9Db250YWluRGl2PlxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMucHJvcHMuc3RvcmUuaXNTaW5nbGVOb3RlcyA9PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxUb3RhbERldGFpbHM+XG4gICAgICAgICAgICA8TW9yZUJveFRhbGw+XG4gICAgICAgICAgICAgIDxDb250YWluRGl2Q2xpY2tlZCBvbkNsaWNrPXsoKSA9PiB0aGlzLmNsaWNrZWQodGhpcy5zdGF0ZS5kYXRhKX0+XG4gICAgICAgICAgICAgICAgPE5leHRUb0Rpdj5cbiAgICAgICAgICAgICAgICAgIHtmb3JtYXREYXRlTW9udGhPbmx5KHRoaXMuc3RhdGUuZGF0YVswXS50aW1lc3RhbXApfVxuICAgICAgICAgICAgICAgIDwvTmV4dFRvRGl2PlxuICAgICAgICAgICAgICAgIDxOZXh0VG9EaXY+XG4gICAgICAgICAgICAgICAgICB7Zm9ybWF0RGF0ZU1vbnRoT25seShcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5kYXRhW3RoaXMuc3RhdGUuZGF0YS5sZW5ndGggLSAxXS50aW1lc3RhbXBcbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9OZXh0VG9EaXY+XG4gICAgICAgICAgICAgICAgPElzU2hvcnRcbiAgICAgICAgICAgICAgICAgIHNpZGU9e3RoaXMuc3RhdGUuZGF0YVswXS5zaWRlfVxuICAgICAgICAgICAgICAgICAgbGFzdD17dGhpcy5zdGF0ZS5kYXRhW3RoaXMuc3RhdGUuZGF0YS5sZW5ndGggLSAxXS5vcmRlclR5cGV9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8TmV4dFRvRGl2PiR7dGhpcy5zdGF0ZS5hdmdFbnRyeVByaWNlLnRvRml4ZWQoMSl9PC9OZXh0VG9EaXY+XG4gICAgICAgICAgICAgICAgPE5leHRUb0Rpdj4ke3RoaXMuc3RhdGUuYXZnRXhpdFByaWNlLnRvRml4ZWQoMSl9PC9OZXh0VG9EaXY+XG4gICAgICAgICAgICAgICAgPE5leHRUb0Rpdj57dGhpcy5zdGF0ZS5jdW1RdHl9PC9OZXh0VG9EaXY+XG4gICAgICAgICAgICAgICAgPE5leHRUb0Rpdj57dGhpcy5zdGF0ZS5wbmwudG9GaXhlZCg0KSArIFwieGJ0XCJ9PC9OZXh0VG9EaXY+XG4gICAgICAgICAgICAgIDwvQ29udGFpbkRpdkNsaWNrZWQ+XG4gICAgICAgICAgICA8L01vcmVCb3hUYWxsPlxuXG4gICAgICAgICAgICA8TWFpbkNoYXJ0XG4gICAgICAgICAgICAgIG9uZW1pbj17dGhpcy5wcm9wcy5vbmVtaW59XG4gICAgICAgICAgICAgIGZpdmVtaW49e3RoaXMucHJvcHMuZml2ZW1pbn1cbiAgICAgICAgICAgICAgb25laG91cj17dGhpcy5wcm9wcy5vbmVob3VyfVxuICAgICAgICAgICAgICBvbmVkYXk9e3RoaXMucHJvcHMub25lZGF5fVxuICAgICAgICAgICAgICB0cmFkZXM9e3RoaXMuc3RhdGUuZGF0YX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8QXBvbGxvQ29uc3VtZXI+XG4gICAgICAgICAgICAgIHsoY2xpZW50KSA9PiAoXG4gICAgICAgICAgICAgICAgPE15VGV4dEFyZWEgZmlyc3RUcmFkZT17dGhpcy5zdGF0ZS5kYXRhWzBdfSBjbGllbnQ9e2NsaWVudH0gLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvQXBvbGxvQ29uc3VtZXI+XG4gICAgICAgICAgPC9Ub3RhbERldGFpbHM+XG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxUb3RhbERldGFpbHM+XG4gICAgICAgICAgICA8TW9yZUJveFRhbGw+XG4gICAgICAgICAgICAgIDxPcmRlckV4ZWN1dGlvbiBkYXRhPXt0aGlzLnN0YXRlLmRhdGF9IC8+XG4gICAgICAgICAgICA8L01vcmVCb3hUYWxsPlxuICAgICAgICAgIDwvVG90YWxEZXRhaWxzPlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5jbGFzcyBJc1Nob3J0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5wcm9wcy5sYXN0KTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuc2lkZSA9PSBcIlNlbGxcIikge1xuICAgICAgaWYgKHRoaXMucHJvcHMubGFzdC5pbmNsdWRlcyhcIlN0b3BcIikpIHtcbiAgICAgICAgcmV0dXJuIDxOZXh0VG9EaXY+U2hvcnQ8L05leHRUb0Rpdj47XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gPE5leHRUb0Rpdj5TaG9ydDwvTmV4dFRvRGl2PjtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMucHJvcHMubGFzdC5pbmNsdWRlcyhcIlN0b3BcIikpIHtcbiAgICAgICAgcmV0dXJuIDxOZXh0VG9EaXY+TG9uZzwvTmV4dFRvRGl2PjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiA8TmV4dFRvRGl2Pkxvbmc8L05leHRUb0Rpdj47XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmNvbnN0IE9yZGVyRXhlY3V0aW9uID0gKHsgZGF0YSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEV4ZWNDb250YWluZXI+XG4gICAgICA8Q29udGFpbkRpdkJsYWNrPlxuICAgICAgICA8TmV4dFRvRGl2QmxhY2tUaXRsZT5cbiAgICAgICAgICA8VGl0bGVTcGFuPlRpbWVzdGFtcDwvVGl0bGVTcGFuPlxuICAgICAgICA8L05leHRUb0RpdkJsYWNrVGl0bGU+XG4gICAgICAgIDxOZXh0VG9EaXZCbGFja1RpdGxlPlxuICAgICAgICAgIDxUaXRsZVNwYW4+U2lkZTwvVGl0bGVTcGFuPlxuICAgICAgICA8L05leHRUb0RpdkJsYWNrVGl0bGU+XG4gICAgICAgIDxOZXh0VG9EaXZCbGFja1RpdGxlPlxuICAgICAgICAgIDxUaXRsZVNwYW4+T3JkZXIgVHlwZTwvVGl0bGVTcGFuPlxuICAgICAgICA8L05leHRUb0RpdkJsYWNrVGl0bGU+XG4gICAgICAgIDxOZXh0VG9EaXZCbGFja1RpdGxlPlxuICAgICAgICAgIDxUaXRsZVNwYW4+UHJpY2U8L1RpdGxlU3Bhbj5cbiAgICAgICAgPC9OZXh0VG9EaXZCbGFja1RpdGxlPlxuICAgICAgICA8TmV4dFRvRGl2QmxhY2tUaXRsZT5cbiAgICAgICAgICA8VGl0bGVTcGFuPk9yZGVyIFF0eTwvVGl0bGVTcGFuPlxuICAgICAgICA8L05leHRUb0RpdkJsYWNrVGl0bGU+XG4gICAgICAgIDxOZXh0VG9EaXZCbGFja1RpdGxlPlxuICAgICAgICAgIDxUaXRsZVNwYW4+TGVhdmVzIFF0eTwvVGl0bGVTcGFuPlxuICAgICAgICA8L05leHRUb0RpdkJsYWNrVGl0bGU+XG4gICAgICAgIDxOZXh0VG9EaXZCbGFja1RpdGxlPlxuICAgICAgICAgIDxUaXRsZVNwYW4+Q29tbWlzc2lvbjwvVGl0bGVTcGFuPlxuICAgICAgICA8L05leHRUb0RpdkJsYWNrVGl0bGU+XG4gICAgICA8L0NvbnRhaW5EaXZCbGFjaz5cblxuICAgICAge2RhdGEubWFwKChkYXQpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8Q29udGFpbkRpdkJsYWNrPlxuICAgICAgICAgICAgPE5leHRUb0RpdkJsYWNrPlxuICAgICAgICAgICAgICB7Zm9ybWF0RGF0ZU1vbnRoT25seShkYXQudGltZXN0YW1wKX1cbiAgICAgICAgICAgIDwvTmV4dFRvRGl2QmxhY2s+XG4gICAgICAgICAgICB7ZGF0LmV4ZWNUeXBlID09IFwiVHJhZGVcIiA/IChcbiAgICAgICAgICAgICAgPE5leHRUb0RpdkJsYWNrPntkYXQuc2lkZX08L05leHRUb0RpdkJsYWNrPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPE5leHRUb0RpdkJsYWNrPntkYXQuZXhlY1R5cGV9PC9OZXh0VG9EaXZCbGFjaz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8TmV4dFRvRGl2QmxhY2s+e2RhdC5vcmRlclR5cGV9PC9OZXh0VG9EaXZCbGFjaz5cbiAgICAgICAgICAgIDxOZXh0VG9EaXZCbGFjaz4ke2RhdC5wcmljZS50b1N0cmluZygpfTwvTmV4dFRvRGl2QmxhY2s+XG4gICAgICAgICAgICA8TmV4dFRvRGl2QmxhY2s+e2RhdC5vcmRlclF0eX08L05leHRUb0RpdkJsYWNrPlxuICAgICAgICAgICAgPE5leHRUb0RpdkJsYWNrPlxuICAgICAgICAgICAgICB7ZGF0LmxlYXZlc1F0eSA9PSBcIjBcIiA/IFwiXCIgOiBkYXQubGVhdmVzUXR5fVxuICAgICAgICAgICAgPC9OZXh0VG9EaXZCbGFjaz5cbiAgICAgICAgICAgIDxOZXh0VG9EaXZCbGFjaz5cbiAgICAgICAgICAgICAge2RhdC5leGVjVHlwZSA9PSBcIkZ1bmRpbmdcIlxuICAgICAgICAgICAgICAgID8gXCJcIlxuICAgICAgICAgICAgICAgIDogY2FsY0NvbW1pc3Npb24oXG4gICAgICAgICAgICAgICAgICAgIGRhdC5wcmljZSxcbiAgICAgICAgICAgICAgICAgICAgZGF0LnNpZGUsXG4gICAgICAgICAgICAgICAgICAgIGRhdC5vcmRlclF0eSxcbiAgICAgICAgICAgICAgICAgICAgZGF0LmxlYXZlc1F0eSxcbiAgICAgICAgICAgICAgICAgICAgZGF0Lm9yZGVyVHlwZVxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvTmV4dFRvRGl2QmxhY2s+XG4gICAgICAgICAgPC9Db250YWluRGl2QmxhY2s+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICA8L0V4ZWNDb250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgQ29udGFpbkRpdiA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBoZWlnaHQ6IDQ3cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjJmMmYyO1xuICBmb250LXdlaWdodDogNDAwO1xuXG4gICY6aG92ZXIge1xuICAgIHRyYW5zaXRpb246IG5vbmU7XG4gICAgYmFja2dyb3VuZDogI2Y4ZjhmZjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbmA7XG5leHBvcnQgY29uc3QgQ29udGFpbkRpdkNsaWNrZWQgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgaGVpZ2h0OiA0N3B4O1xuXG4gIHRyYW5zaXRpb246IG5vbmU7XG5cbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMmYyZjI7XG4gIGJvcmRlci1yYWRpdXM6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZDogI2Y4ZjhmZjtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbmA7XG5leHBvcnQgY29uc3QgQ29udGFpbkRpdkJsYWNrID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGhlaWdodDogNDBweDtcbiAgYmFja2dyb3VuZDogI2Y4ZjhmZjtcblxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YyZjJmMjtcbmA7XG5leHBvcnQgY29uc3QgQ29udGFpbkRpdkhlYWRlciA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBoZWlnaHQ6IDM4cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDNkM2QzO1xuYDtcbi8vIGYyZjJmMlxuLy8gYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2YyZjJmMjtcbmV4cG9ydCBjb25zdCBOZXh0VG9EaXYgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAzMCU7XG4gIHBhZGRpbmc6IDhweDtcbiAgcGFkZGluZy10b3A6IDEycHg7XG4gIHBhZGRpbmctbGVmdDogMTJweDtcblxuICBjb2xvcjogIzAwMDtcblxuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDE0cHg7XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDU1MHB4KSB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgTmV4dFRvRGl2QmxhY2sgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAzMCU7XG4gIHBhZGRpbmc6IDRweDtcbiAgcGFkZGluZy1sZWZ0OiAxMnB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmctdG9wOiA5cHg7XG5gO1xuLy8gYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2YyZjJmMjtcbmV4cG9ydCBjb25zdCBOZXh0VG9EaXZCbGFja1RpdGxlID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMzAlO1xuICBwYWRkaW5nOiA0cHg7XG4gIHBhZGRpbmctbGVmdDogMTRweDtcbiAgcGFkZGluZy10b3A6IDlweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuYDtcblxuY29uc3QgVGl0bGVTcGFuID0gc3R5bGVkLnNwYW5gXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCBibGFjaztcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBjb2xvcjogYmxhY2s7XG5gO1xuZXhwb3J0IGNvbnN0IE5leHRUb0RpdkJsYWNrVGltZSA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDMwJTtcbiAgcGFkZGluZzogNHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEycHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gIH1cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDY2M3B4KSB7XG4gICAgcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50O1xuICB9XG5gO1xuZXhwb3J0IGNvbnN0IE5leHRUb0RpdkhlYWRlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDMwJTtcbiAgY29sb3I6ICM3ODgzOGU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgcGFkZGluZzogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAxMnB4O1xuICAke3NtYWxsRm9udH1cbiAgZm9udC1zaXplOjEzcHg7XG5gO1xuXG5jb25zdCBJbm5lclBubFdpbiA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHBhZGRpbmc6IDAgM3B4O1xuICBtYXgtd2lkdGg6IDgwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbmA7XG5jb25zdCBJbm5lclBubExvc3MgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kOiByZWQ7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgcGFkZGluZzogMCAzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgbWF4LXdpZHRoOiA4MHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG5gO1xuXG5jb25zdCBSZWFkTW9yZSA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDEwcHggMDtcblxuICAvKiBcInRyYW5zcGFyZW50XCIgb25seSB3b3JrcyBoZXJlIGJlY2F1c2UgPT0gcmdiYSgwLDAsMCwwKSAqL1xuXG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQoXG4gICAgbGluZWFyLFxuICAgIGxlZnQgdG9wLFxuICAgIGxlZnQgYm90dG9tLFxuICAgIGNvbG9yLXN0b3AoMCwgcmdiYSgyNTUsIDAsIDAsIDApKSxcbiAgICBjb2xvci1zdG9wKDEsIHJnYmEoMjQ4LCAyNDgsIDI1NSwgMSkpXG4gICk7XG5gO1xuY29uc3QgUmVhZE1vcmVUYWxsID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMTBweCAwO1xuYDtcbi8vIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHRyYW5zcGFyZW50LCBibGFjayk7XG5jb25zdCBNb3JlQm94U2hvcnQgPSBzdHlsZWQuZGl2YFxuICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuYDtcbmNvbnN0IE1vcmVCb3hUYWxsID0gc3R5bGVkLmRpdmBcbiAgbWF4LWhlaWdodDogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuYDtcbmNvbnN0IEV4ZWNDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBtYXgtaGVpZ2h0OiBub25lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMmYyZjI7XG5gO1xuXG5jb25zdCBUb3RhbERldGFpbHMgPSBzdHlsZWQuZGl2YGA7XG4vLyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDMzLCAzNywgNDAsIDAuNyk7XG5jb25zdCBSZWFkTW9yZUlubmVyID0gc3R5bGVkLmRpdmBcbiAgY29sb3I6IHJnYmEoMzMsIDM3LCA0MCwgMSk7XG5cbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IG5vbmU7XG4gIC1tb3otdHJhbnNpdGlvbi1wcm9wZXJ0eTogbm9uZTtcbiAgLW8tdHJhbnNpdGlvbi1wcm9wZXJ0eTogbm9uZTtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogbm9uZTtcblxuICA6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMzLCAzNywgNDAsIDEpO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogbm9uZTtcbiAgICAtbW96LXRyYW5zaXRpb24tcHJvcGVydHk6IG5vbmU7XG4gICAgLW8tdHJhbnNpdGlvbi1wcm9wZXJ0eTogbm9uZTtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBub25lO1xuICB9XG4gIGZvbnQtc2l6ZTogMjBweDtcbmA7XG4iLCJleHBvcnQgYXN5bmMgZnVuY3Rpb24gY2FsY1RyYWRlcyhpbnB1dERhdGEpIHtcbiAgLy8gaW5wdXREYXRhID0gdGhpcy5wcm9wcy5zbGljO1xuICBpZiAoaW5wdXREYXRhWzBdLnNpZGUgPT0gXCJCdXlcIiAmJiBpbnB1dERhdGFbMF0uZXhlY1R5cGUgPT0gXCJUcmFkZVwiKSB7XG4gICAgbGV0IGF2Z0J1eVByaWNlID0gMDtcbiAgICBsZXQgYXZnU2VsbFByaWNlID0gMDtcbiAgICBsZXQgdG90QnV5Q29udHJhY3RzID0gMDtcbiAgICBsZXQgdG90U2VsbENvbnRyYWN0cyA9IDA7XG4gICAgbGV0IGJ1eU51bSA9IDA7XG4gICAgbGV0IHNlbGxOdW0gPSAwO1xuICAgIGxldCB0b3RCdXlDb250cmFjdHNNdWx0ID0gMDtcbiAgICBsZXQgdG90U2VsbENvbnRyYWN0c011bHQgPSAwO1xuICAgIGxldCByZWFsUXR5ID0gMDtcbiAgICBsZXQgdG90Q29tbWlzc2lvbiA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnB1dERhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIHJlYWxRdHkgPSBpbnB1dERhdGFbaV0ub3JkZXJRdHkgLSBpbnB1dERhdGFbaV0ubGVhdmVzUXR5O1xuICAgICAgaWYgKGlucHV0RGF0YVtpXS5zaWRlID09IFwiQnV5XCIgJiYgaW5wdXREYXRhW2ldLmxlYXZlc1F0eSA9PSAwKSB7XG4gICAgICAgIGJ1eU51bSArPSAxO1xuICAgICAgICB0b3RCdXlDb250cmFjdHMgKz0gaW5wdXREYXRhW2ldLm9yZGVyUXR5O1xuICAgICAgICB0b3RCdXlDb250cmFjdHNNdWx0ICs9XG4gICAgICAgICAgaW5wdXREYXRhW2ldLm9yZGVyUXR5ICogcGFyc2VGbG9hdChpbnB1dERhdGFbaV0ucHJpY2UpO1xuICAgICAgfVxuICAgICAgaWYgKGlucHV0RGF0YVtpXS5zaWRlID09IFwiU2VsbFwiICYmIGlucHV0RGF0YVtpXS5sZWF2ZXNRdHkgPT0gMCkge1xuICAgICAgICBzZWxsTnVtICs9IDE7XG4gICAgICAgIHRvdFNlbGxDb250cmFjdHMgKz0gaW5wdXREYXRhW2ldLm9yZGVyUXR5O1xuICAgICAgICB0b3RTZWxsQ29udHJhY3RzTXVsdCArPVxuICAgICAgICAgIGlucHV0RGF0YVtpXS5vcmRlclF0eSAqIHBhcnNlRmxvYXQoaW5wdXREYXRhW2ldLnByaWNlKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgaW5wdXREYXRhW2ldLm9yZGVyVHlwZSA9PSBcIkxpbWl0XCIgJiZcbiAgICAgICAgaW5wdXREYXRhW2ldLmV4ZWNUeXBlICE9PSBcIkZ1bmRpbmdcIlxuICAgICAgKSB7XG4gICAgICAgIHRvdENvbW1pc3Npb24gKz0gKHJlYWxRdHkgKiAwLjAwMjUpIC8gaW5wdXREYXRhW2ldLnByaWNlO1xuICAgICAgfVxuICAgICAgaWYgKGlucHV0RGF0YVtpXS5vcmRlclR5cGUgPT0gXCJNYXJrZXRcIikge1xuICAgICAgICB0b3RDb21taXNzaW9uIC09IChyZWFsUXR5ICogMC4wMDc1KSAvIGlucHV0RGF0YVtpXS5wcmljZTtcbiAgICAgIH1cbiAgICAgIGlmIChpbnB1dERhdGFbaV0ub3JkZXJUeXBlLmluY2x1ZGVzKFwiU3RvcFwiKSkge1xuICAgICAgICB0b3RDb21taXNzaW9uIC09IChyZWFsUXR5ICogMC4wMDc1KSAvIGlucHV0RGF0YVtpXS5wcmljZTtcbiAgICAgIH1cbiAgICAgIGlmIChpID09IGlucHV0RGF0YS5sZW5ndGggLSAxKSB7XG4gICAgICAgIGF2Z0J1eVByaWNlID0gdG90QnV5Q29udHJhY3RzTXVsdCAvIHRvdEJ1eUNvbnRyYWN0cztcbiAgICAgICAgYXZnU2VsbFByaWNlID0gdG90U2VsbENvbnRyYWN0c011bHQgLyB0b3RTZWxsQ29udHJhY3RzO1xuICAgICAgICBsZXQgYXZnRXhpdDtcbiAgICAgICAgbGV0IGF2Z0VudHJ5O1xuICAgICAgICBpZiAoYXZnQnV5UHJpY2UgIT0gbnVsbCkge1xuICAgICAgICAgIGF2Z0VudHJ5ID0gYXZnQnV5UHJpY2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYXZnRW50cnkgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhdmdTZWxsUHJpY2UgIT0gbnVsbCkge1xuICAgICAgICAgIGF2Z0V4aXQgPSBhdmdTZWxsUHJpY2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYXZnRXhpdCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgLy8gdGhpcy5zdGF0ZS5jdW1RdHkgPSB0b3RCdXlDb250cmFjdHM7XG4gICAgICAgIGxldCB0aGVQbmwgPSAoMSAvIGF2Z0J1eVByaWNlIC0gMSAvIGF2Z1NlbGxQcmljZSkgKiB0b3RTZWxsQ29udHJhY3RzO1xuICAgICAgICBpZiAodGhlUG5sICE9IG51bGwpIHtcbiAgICAgICAgICBsZXQgbXlQbmwgPSB0aGVQbmwgKyB0b3RDb21taXNzaW9uO1xuICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgbGV0IGVuZCA9IHt9O1xuICAgICAgICAgICAgZW5kW1wicG5sXCJdID0gbXlQbmw7XG4gICAgICAgICAgICBlbmRbXCJhdmdFbnRyeVByaWNlXCJdID0gYXZnRW50cnk7XG4gICAgICAgICAgICBlbmRbXCJhdmdFeGl0UHJpY2VcIl0gPSBhdmdFeGl0O1xuICAgICAgICAgICAgZW5kW1wiY3VtUXR5XCJdID0gdG90QnV5Q29udHJhY3RzO1xuICAgICAgICAgICAgcmVzb2x2ZShlbmQpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIC8vICAgc3RvcmUuYWRkUG5sKG15UG5sKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIGxldCBlbmQgPSB7fTtcbiAgICAgICAgICAgIGVuZFtcInBubFwiXSA9IDA7XG4gICAgICAgICAgICBlbmRbXCJhdmdFbnRyeVByaWNlXCJdID0gYXZnRW50cnk7XG4gICAgICAgICAgICBlbmRbXCJhdmdFeGl0UHJpY2VcIl0gPSBhdmdFeGl0O1xuICAgICAgICAgICAgZW5kW1wiY3VtUXR5XCJdID0gdG90QnV5Q29udHJhY3RzO1xuICAgICAgICAgICAgcmVzb2x2ZShlbmQpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlmIChpbnB1dERhdGFbMF0uc2lkZSA9PSBcIlNlbGxcIiAmJiBpbnB1dERhdGFbMF0uZXhlY1R5cGUgPT0gXCJUcmFkZVwiKSB7XG4gICAgbGV0IHRvdEJ1eUNvbnRyYWN0cyA9IDA7XG4gICAgbGV0IHRvdFNlbGxDb250cmFjdHMgPSAwO1xuICAgIGxldCBidXlOdW0gPSAwO1xuICAgIGxldCBzZWxsTnVtID0gMDtcbiAgICBsZXQgdG90QnV5Q29udHJhY3RzTXVsdCA9IDA7XG4gICAgbGV0IHRvdFNlbGxDb250cmFjdHNNdWx0ID0gMDtcbiAgICBsZXQgcmVhbFF0eSA9IDA7XG4gICAgbGV0IHRvdENvbW1pc3Npb24gPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5wdXREYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyByZWFsUXR5ID0gaW5wdXREYXRhW2ldLm9yZGVyUXR5IC0gaW5wdXREYXRhW2ldLmxlYXZlc1F0eTtcbiAgICAgIGlmIChpbnB1dERhdGFbaV0uc2lkZSA9PSBcIkJ1eVwiICYmIGlucHV0RGF0YVtpXS5sZWF2ZXNRdHkgPT0gMCkge1xuICAgICAgICAvLyB0b3RCdXlQcmljZSArPSBwYXJzZUZsb2F0KGlucHV0RGF0YVtpXS5wcmljZSk7XG4gICAgICAgIGJ1eU51bSArPSAxO1xuICAgICAgICB0b3RCdXlDb250cmFjdHMgKz0gaW5wdXREYXRhW2ldLm9yZGVyUXR5O1xuICAgICAgICB0b3RCdXlDb250cmFjdHNNdWx0ICs9XG4gICAgICAgICAgaW5wdXREYXRhW2ldLm9yZGVyUXR5ICogcGFyc2VGbG9hdChpbnB1dERhdGFbaV0ucHJpY2UpO1xuICAgICAgICBpZiAoaW5wdXREYXRhWzBdLm9yZGVyUXR5ID09IDQwMDAwKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICBcIkJVWSBTSURFXCIsXG4gICAgICAgICAgICBpbnB1dERhdGFbaV0sXG4gICAgICAgICAgICByZWFsUXR5LFxuICAgICAgICAgICAgdG90U2VsbENvbnRyYWN0cyxcbiAgICAgICAgICAgIHRvdEJ1eUNvbnRyYWN0cyxcbiAgICAgICAgICAgIHRvdFNlbGxDb250cmFjdHNNdWx0XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGlucHV0RGF0YVtpXS5zaWRlID09IFwiU2VsbFwiICYmIGlucHV0RGF0YVtpXS5sZWF2ZXNRdHkgPT0gMCkge1xuICAgICAgICBzZWxsTnVtICs9IDE7XG4gICAgICAgIGlmIChpID09IDApIHtcbiAgICAgICAgICBsZXQgZGlmZmVyZW5jZSA9IGlucHV0RGF0YVtpXS5vcmRlclF0eSArIGlucHV0RGF0YVtpXS5jdXJyZW50UXR5O1xuICAgICAgICAgIGxldCBuZXdSZWFsUXR5ID0gaW5wdXREYXRhW2ldLm9yZGVyUXR5IC0gZGlmZmVyZW5jZTtcbiAgICAgICAgICB0b3RTZWxsQ29udHJhY3RzICs9IG5ld1JlYWxRdHk7XG4gICAgICAgICAgdG90U2VsbENvbnRyYWN0c011bHQgKz0gbmV3UmVhbFF0eSAqIHBhcnNlRmxvYXQoaW5wdXREYXRhW2ldLnByaWNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0b3RTZWxsQ29udHJhY3RzICs9IGlucHV0RGF0YVtpXS5vcmRlclF0eTtcbiAgICAgICAgICB0b3RTZWxsQ29udHJhY3RzTXVsdCArPVxuICAgICAgICAgICAgaW5wdXREYXRhW2ldLm9yZGVyUXR5ICogcGFyc2VGbG9hdChpbnB1dERhdGFbaV0ucHJpY2UpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpbnB1dERhdGFbMF0ub3JkZXJRdHkgPT0gNDAwMDApIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgIFwiU0VMTCBTSURFXCIsXG4gICAgICAgICAgICBpbnB1dERhdGFbaV0sXG4gICAgICAgICAgICByZWFsUXR5LFxuICAgICAgICAgICAgdG90U2VsbENvbnRyYWN0cyxcbiAgICAgICAgICAgIHRvdEJ1eUNvbnRyYWN0cyxcbiAgICAgICAgICAgIHRvdFNlbGxDb250cmFjdHNNdWx0XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBpbnB1dERhdGFbaV0ub3JkZXJUeXBlID09IFwiTGltaXRcIiAmJlxuICAgICAgICBpbnB1dERhdGFbaV0uZXhlY1R5cGUgIT09IFwiRnVuZGluZ1wiXG4gICAgICApIHtcbiAgICAgICAgdG90Q29tbWlzc2lvbiArPSAocmVhbFF0eSAqIDAuMDAyNSkgLyBpbnB1dERhdGFbaV0ucHJpY2U7XG4gICAgICB9XG4gICAgICBpZiAoaW5wdXREYXRhW2ldLm9yZGVyVHlwZSA9PSBcIk1hcmtldFwiKSB7XG4gICAgICAgIHRvdENvbW1pc3Npb24gLT0gKHJlYWxRdHkgKiAwLjAwNzUpIC8gaW5wdXREYXRhW2ldLnByaWNlO1xuICAgICAgfVxuICAgICAgaWYgKGlucHV0RGF0YVtpXS5vcmRlclR5cGUuaW5jbHVkZXMoXCJTdG9wXCIpKSB7XG4gICAgICAgIHRvdENvbW1pc3Npb24gLT0gKHJlYWxRdHkgKiAwLjAwNzUpIC8gaW5wdXREYXRhW2ldLnByaWNlO1xuICAgICAgfVxuICAgICAgaWYgKGkgPT0gaW5wdXREYXRhLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgbGV0IGF2Z0J1eVByaWNlID0gdG90QnV5Q29udHJhY3RzTXVsdCAvIHRvdEJ1eUNvbnRyYWN0cztcbiAgICAgICAgbGV0IGF2Z1NlbGxQcmljZSA9IHRvdFNlbGxDb250cmFjdHNNdWx0IC8gdG90U2VsbENvbnRyYWN0cztcbiAgICAgICAgbGV0IHBubCA9ICgxIC8gYXZnQnV5UHJpY2UgLSAxIC8gYXZnU2VsbFByaWNlKSAqIHRvdEJ1eUNvbnRyYWN0cztcbiAgICAgICAgaWYgKGlucHV0RGF0YVswXS5vcmRlclF0eSA9PSA0MDAwMCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHBubCwgYXZnQnV5UHJpY2UsIGF2Z1NlbGxQcmljZSwgdG90QnV5Q29udHJhY3RzKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgYXZnRW50cnk7XG4gICAgICAgIGxldCBhdmdFeGl0O1xuICAgICAgICBpZiAoYXZnQnV5UHJpY2UgIT0gbnVsbCkge1xuICAgICAgICAgIGF2Z0V4aXQgPSBhdmdCdXlQcmljZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhdmdFeGl0ID0gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYXZnU2VsbFByaWNlICE9IG51bGwpIHtcbiAgICAgICAgICBhdmdFbnRyeSA9IGF2Z1NlbGxQcmljZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhdmdFbnRyeSA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocG5sICE9IG51bGwpIHtcbiAgICAgICAgICBsZXQgbXlQbmwgPSBwbmwgKyB0b3RDb21taXNzaW9uO1xuICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgbGV0IGVuZCA9IHt9O1xuICAgICAgICAgICAgZW5kW1wicG5sXCJdID0gbXlQbmw7XG4gICAgICAgICAgICBlbmRbXCJhdmdFbnRyeVByaWNlXCJdID0gYXZnRW50cnk7XG4gICAgICAgICAgICBlbmRbXCJhdmdFeGl0UHJpY2VcIl0gPSBhdmdFeGl0O1xuICAgICAgICAgICAgZW5kW1wiY3VtUXR5XCJdID0gdG90U2VsbENvbnRyYWN0cztcbiAgICAgICAgICAgIGlmIChpbnB1dERhdGFbMF0ub3JkZXJRdHkgPT0gNDAwMDApIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZW5kKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc29sdmUoZW5kKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIGxldCBlbmQgPSB7fTtcbiAgICAgICAgICAgIGVuZFtcInBubFwiXSA9IDA7XG4gICAgICAgICAgICBlbmRbXCJhdmdFbnRyeVByaWNlXCJdID0gYXZnRW50cnk7XG4gICAgICAgICAgICBlbmRbXCJhdmdFeGl0UHJpY2VcIl0gPSBhdmdFeGl0O1xuICAgICAgICAgICAgZW5kW1wiY3VtUXR5XCJdID0gdG90U2VsbENvbnRyYWN0cztcbiAgICAgICAgICAgIHJlc29sdmUoZW5kKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IGdldE5ld0RhdCA9IGFzeW5jIChvbGREYXQsIGhhc2h0YWdzKSA9PiB7XG4gIGxldCBuZXdUcmFkZXMgPSBbXTtcbiAgbGV0IG9sZFRyYWRlcyA9IG9sZERhdC5mZXRjaFRyYWRlSGlzdG9yeTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBvbGRUcmFkZXMubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgdHJhZGVIYXNodGFncyA9IG9sZFRyYWRlc1tpXS5oYXNodGFncy5zcGxpdChcIixcIik7XG4gICAgbGV0IG9sZFRyYWRlID0gb2xkVHJhZGVzW2ldO1xuICAgIGNvbnNvbGUubG9nKHRyYWRlSGFzaHRhZ3MpO1xuICAgIGlmICh0cmFkZUhhc2h0YWdzWzBdICE9IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdHJhZGVIYXNodGFncy5sZW5ndGg7IGorKykge1xuICAgICAgICBmb3IgKGxldCBtID0gMDsgbSA8IGhhc2h0YWdzLmxlbmd0aDsgbSsrKSB7XG4gICAgICAgICAgaWYgKGhhc2h0YWdzW21dID09IHRyYWRlSGFzaHRhZ3Nbal0pIHtcbiAgICAgICAgICAgIGlmIChuZXdUcmFkZXNbMF0gPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIG5ld1RyYWRlcy5wdXNoKG9sZFRyYWRlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG5ld1RyYWRlcy5wdXNoKG9sZFRyYWRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGkgPT0gb2xkVHJhZGVzLmxlbmd0aCAtIDEpIHtcbiAgICAgIGNvbnNvbGUubG9nKG5ld1RyYWRlcywgXCJGSUxURVJFRCBUUkFERVNcIik7XG4gICAgICByZXR1cm4gbmV3VHJhZGVzO1xuICAgIH1cbiAgfVxufTtcbiIsImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBzdHlsZWQsIHsgVGhlbWVQcm92aWRlciB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHRoZW1lIGZyb20gXCIuLi90aGVtZVwiO1xuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkZXJMb2dvIGZyb20gXCIuL0xvZ29cIjtcbmltcG9ydCBcIi4vaGVhZGVyLnNjc3NcIjtcbmltcG9ydCBEYXRlUGlja2VyIGZyb20gXCIuLi9NZW51L0RhdGVwaWNrZXJcIjtcbmltcG9ydCB7IEFwb2xsb0NvbnN1bWVyIH0gZnJvbSBcInJlYWN0LWFwb2xsb1wiO1xuaW1wb3J0IGdxbCBmcm9tIFwiZ3JhcGhxbC10YWdcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmltcG9ydCB7IGhlYWRlckl0ZW0sIHdpZGVGb250LCBsaW5rLCB0cmFuc2l0aW9uIH0gZnJvbSBcIi4uL3NoYXJlZC9oZWxwZXJzXCI7XG5jb25zdCBDb29raWUgPSByZXF1aXJlKFwianMtY29va2llXCIpO1xuXG5jb25zdCBIZWFkZXIgPSAoeyByb3V0ZXIgfSkgPT4ge1xuICBhc3luYyBmdW5jdGlvbiBsb2dvdXQoY2xpZW50KSB7XG4gICAgQ29va2llLnJlbW92ZShcImlzQXV0aFwiKTtcbiAgICBDb29raWUucmVtb3ZlKFwicWlkXCIpO1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInN0b3JlXCIpO1xuICAgIGF3YWl0IGNsaWVudC5tdXRhdGUoe1xuICAgICAgbXV0YXRpb246IGdxbGBcbiAgICAgICAgbXV0YXRpb24gbG9nb3V0IHtcbiAgICAgICAgICBsb2dvdXRcbiAgICAgICAgfVxuICAgICAgYCxcbiAgICB9KTtcbiAgICBSb3V0ZXIucHVzaChcIi9cIik7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZShmYWxzZSl9PlxuICAgICAgPFdyYXBwZXI+XG4gICAgICAgIDxIZWFkZXJMb2dvIC8+XG4gICAgICAgIDxEYXRlUGlja2Vyc1dyYXA+XG4gICAgICAgICAgPERhdGVQaWNrZXJXcmFwPlxuICAgICAgICAgICAgPERhdGVQaWNrZXIgc2V0PXt0cnVlfSBzdGFydD17dHJ1ZX0gLz5cbiAgICAgICAgICA8L0RhdGVQaWNrZXJXcmFwPlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgY29sb3I6IFwid2hpdGVcIiwgbWFyZ2luOiBcImF1dG8gMHB4XCIgfX0+LTwvZGl2PlxuICAgICAgICAgIDxEYXRlUGlja2VyV3JhcD5cbiAgICAgICAgICAgIDxEYXRlUGlja2VyIHNldD17dHJ1ZX0gc3RhcnQ9e2ZhbHNlfSAvPlxuICAgICAgICAgIDwvRGF0ZVBpY2tlcldyYXA+XG4gICAgICAgIDwvRGF0ZVBpY2tlcnNXcmFwPlxuICAgICAgICA8TGlua3NXcmFwPlxuICAgICAgICAgIDxMaW5rIHByZWZldGNoIGhyZWY9XCIvc2V0dGluZ3NcIj5cbiAgICAgICAgICAgIDxTdHlsZWRMaW5rXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09PSBcIi9zZXR0aW5nc1wiID8gXCJpcy1hY3RpdmVcIiA6IFwiXCJ9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHNldHRpbmdzXG4gICAgICAgICAgICA8L1N0eWxlZExpbms+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxBcG9sbG9Db25zdW1lcj5cbiAgICAgICAgICAgIHsoY2xpZW50KSA9PiAoXG4gICAgICAgICAgICAgIDxTdHlsZWRMaW5rIG9uQ2xpY2s9eygpID0+IGxvZ291dChjbGllbnQpfT5sb2dvdXQ8L1N0eWxlZExpbms+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvQXBvbGxvQ29uc3VtZXI+XG4gICAgICAgIDwvTGlua3NXcmFwPlxuICAgICAgPC9XcmFwcGVyPlxuICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoSGVhZGVyKTtcblxuY29uc3QgTG9nb1dyYXAgPSBzdHlsZWQuZGl2YGA7XG5cbmNvbnN0IFRlbXBEaXYgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW46IGF1dG87XG5gO1xuXG5jb25zdCBMaW5rc1dyYXAgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuYDtcblxuY29uc3QgRGF0ZVBpY2tlcnNXcmFwID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbmA7XG5jb25zdCBEYXRlUGlja2VyV3JhcCA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbjogYXV0byAxMHB4O1xuYDtcblxuY29uc3QgU3R5bGVkTGluayA9IHN0eWxlZC5kaXZgXG4gICR7aGVhZGVySXRlbX07XG4gICR7bGlua307XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5tdXRlZFRleHR9O1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG5cbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIDo6YWZ0ZXIge1xuICAgICR7dHJhbnNpdGlvbihcIm9wYWNpdHlcIiwgXCJib3JkZXItYm90dG9tLXdpZHRoXCIpfTtcblxuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5hY2NlbnR9O1xuICB9XG5cbiAgOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYWNjZW50fTtcbiAgfVxuICA6aG92ZXI6OmFmdGVyIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYWNjZW50fTtcbiAgfVxuXG4gICYuYWN0aXZlOjphZnRlciB7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5hY2NlbnR9O1xuICB9XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG5gO1xuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmhlYWRlcmBcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgei1pbmRleDogMTA7XG4gIHRvcDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG5cbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlZWU7XG4gIGhlaWdodDogNTVweDtcbiAgcGFkZGluZzogMCAwdnc7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5mb3JlZ3JvdW5kfTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTI1Mjc7XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDQyNXB4KSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gIH1cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuYDtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBoZWFkZXJJdGVtLCB3aWRlRm9udCB9IGZyb20gXCIuLi9zaGFyZWQvaGVscGVyc1wiO1xuXG5jb25zdCBIZWFkZXJMb2dvID0gKCkgPT4gKFxuICA8TG9nbz5cbiAgICA8TGluayBwcmVmZXRjaCBocmVmPVwiL1wiPlxuICAgICAgPHNwYW4+4oK/aXRzam91cm5hbDwvc3Bhbj5cbiAgICA8L0xpbms+XG4gIDwvTG9nbz5cbik7XG5cbmV4cG9ydCBjb25zdCBIZWFkZXJMb2dvRGFyayA9ICgpID0+IChcbiAgPExvZ29EYXJrPlxuICAgIDxMaW5rIHByZWZldGNoIGhyZWY9XCIvXCI+XG4gICAgICA8c3Bhbj7igr9pdHNqb3VybmFsPC9zcGFuPlxuICAgIDwvTGluaz5cbiAgPC9Mb2dvRGFyaz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlckxvZ287XG5cbmNvbnN0IExvZ28gPSBzdHlsZWQuZGl2YFxuICAke2hlYWRlckl0ZW19XG5cbiAgbWFyZ2luLXJpZ2h0OiAwO1xuICBmb250LXNpemU6IDI2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUubm9ybWFsVGV4dH07XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICNmZmY7XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDQyNXB4KSB7XG4gICAgcGFkZGluZzogMCA4cHggMCAxNnB4O1xuICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgfVxuYDtcblxuY29uc3QgTG9nb0RhcmsgPSBzdHlsZWQuZGl2YFxuICAke2hlYWRlckl0ZW19XG5cbiAgbWFyZ2luLXJpZ2h0OiAwO1xuICBmb250LXNpemU6IDI2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUubm9ybWFsVGV4dH07XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5tdXRlZFRleHR9O1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA0MjVweCkge1xuICAgIHBhZGRpbmc6IDAgOHB4IDAgMTZweDtcbiAgICBmb250LXNpemU6IDE5cHg7XG4gIH1cbmA7XG5cbi8vIGRpc3BsYXk6IGZsZXg7XG4vLyBhbGlnbi1pdGVtczogY2VudGVyO1xuLy8gZmxleC1zaHJpbms6IDA7XG4vLyBwYWRkaW5nOiAwIDE2cHg7XG4vLyBAbWVkaWEgKG1heC13aWR0aDogNDI1cHgpIHtcbi8vICAgcGFkZGluZzogMCA4cHg7XG4vLyB9XG4iLCIvLyBleHBvcnQgZnVuY3Rpb24gZm9ybWF0RGF0ZU1vbnRoT25seShkYXRlKSB7XG4vLyAgIHZhciBtb250aE5hbWVzID0gW1xuLy8gICAgIFwiSmFuXCIsXG4vLyAgICAgXCJGZWJcIixcbi8vICAgICBcIk1hclwiLFxuLy8gICAgIFwiQXByXCIsXG4vLyAgICAgXCJNYXlcIixcbi8vICAgICBcIkp1blwiLFxuLy8gICAgIFwiSnVsXCIsXG4vLyAgICAgXCJBdWdcIixcbi8vICAgICBcIlNlcHRcIixcbi8vICAgICBcIk9jdFwiLFxuLy8gICAgIFwiTm92XCIsXG4vLyAgICAgXCJEZWNcIixcbi8vICAgXTtcbi8vICAgbGV0IHV0Y0RhdGUgPSBkYXRlO1xuLy8gICBsZXQgdGhlRGF0ZSA9IG5ldyBEYXRlKHV0Y0RhdGUpO1xuXG4vLyAgIHZhciBkYXkgPSB0aGVEYXRlLmdldERhdGUoKTtcbi8vICAgdmFyIGhvdXJzID0gYWRkWmVyb0JlZm9yZSh0aGVEYXRlLmdldEhvdXJzKCkpO1xuLy8gICB2YXIgbWlucyA9IGFkZFplcm9CZWZvcmUodGhlRGF0ZS5nZXRNaW51dGVzKCkpO1xuLy8gICB2YXIgbW9udGhJbmRleCA9IGFkZFplcm9CZWZvcmUodGhlRGF0ZS5nZXRNb250aCgpKTtcbi8vICAgdmFyIHllYXIgPSBhZGRaZXJvQmVmb3JlKHRoZURhdGUuZ2V0RnVsbFllYXIoKSk7XG5cbi8vICAgcmV0dXJuIChcbi8vICAgICBkYXkgKyBcIi1cIiArIG1vbnRoSW5kZXgudG9TdHJpbmcoKSArIFwiLVwiICsgeWVhciArIFwiIFwiICsgaG91cnMgKyBcIjpcIiArIG1pbnNcbi8vICAgKTtcbi8vIH1cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXREYXRlTW9udGhPbmx5KGRhdGUpIHtcbiAgdmFyIG1vbnRoTmFtZXMgPSBbXG4gICAgXCJKYW5cIixcbiAgICBcIkZlYlwiLFxuICAgIFwiTWFyXCIsXG4gICAgXCJBcHJcIixcbiAgICBcIk1heVwiLFxuICAgIFwiSnVuXCIsXG4gICAgXCJKdWxcIixcbiAgICBcIkF1Z1wiLFxuICAgIFwiU2VwdFwiLFxuICAgIFwiT2N0XCIsXG4gICAgXCJOb3ZcIixcbiAgICBcIkRlY1wiLFxuICBdO1xuICBsZXQgdXRjRGF0ZSA9IGRhdGU7XG4gIGxldCB0aGVEYXRlID0gbmV3IERhdGUodXRjRGF0ZSk7XG5cbiAgdmFyIGRheSA9IHRoZURhdGUuZ2V0RGF0ZSgpO1xuICB2YXIgaG91cnMgPSBhZGRaZXJvQmVmb3JlKHRoZURhdGUuZ2V0SG91cnMoKSk7XG4gIHZhciBtaW5zID0gYWRkWmVyb0JlZm9yZSh0aGVEYXRlLmdldE1pbnV0ZXMoKSk7XG4gIHZhciBtb250aEluZGV4ID0gdGhlRGF0ZS5nZXRNb250aCgpO1xuICAvLyB2YXIgbW9udGhJbmRleCA9IGFkZFplcm9CZWZvcmUodGhlRGF0ZS5nZXRNb250aCgpKTtcbiAgdmFyIHllYXIgPSB0aGVEYXRlLmdldEZ1bGxZZWFyKCk7XG5cbiAgcmV0dXJuIGRheSArIFwiIFwiICsgbW9udGhOYW1lc1ttb250aEluZGV4XSArIFwiLCBcIiArIGhvdXJzICsgXCI6XCIgKyBtaW5zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0RGF0ZVNob3J0KGRhdGUpIHtcbiAgbGV0IHV0Y0RhdGUgPSBkYXRlO1xuICBsZXQgdGhlRGF0ZSA9IG5ldyBEYXRlKHV0Y0RhdGUpO1xuXG4gIHZhciBkYXkgPSBhZGRaZXJvQmVmb3JlKHRoZURhdGUuZ2V0RGF0ZSgpKTtcbiAgdmFyIGhvdXJzID0gYWRkWmVyb0JlZm9yZSh0aGVEYXRlLmdldEhvdXJzKCkpO1xuICB2YXIgbWlucyA9IGFkZFplcm9CZWZvcmUodGhlRGF0ZS5nZXRNaW51dGVzKCkpO1xuICB2YXIgbW9udGhJbmRleCA9IGFkZFplcm9CZWZvcmUodGhlRGF0ZS5nZXRNb250aCgpKTtcbiAgdmFyIHllYXIgPSB0aGVEYXRlLmdldEZ1bGxZZWFyKCk7XG5cbiAgcmV0dXJuIG1vbnRoSW5kZXgudG9TdHJpbmcoKSArIFwiL1wiICsgZGF5LnRvU3RyaW5nKCk7XG59XG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0RGF0ZVNob3J0V2l0aEhvdXIoZGF0ZSkge1xuICBsZXQgdXRjRGF0ZSA9IGRhdGU7XG4gIGxldCB0aGVEYXRlID0gbmV3IERhdGUodXRjRGF0ZSk7XG5cbiAgdmFyIGRheSA9IGFkZFplcm9CZWZvcmUodGhlRGF0ZS5nZXREYXRlKCkpO1xuICB2YXIgaG91cnMgPSBhZGRaZXJvQmVmb3JlKHRoZURhdGUuZ2V0SG91cnMoKSk7XG4gIHZhciBtaW5zID0gYWRkWmVyb0JlZm9yZSh0aGVEYXRlLmdldE1pbnV0ZXMoKSk7XG4gIHZhciBtb250aEluZGV4ID0gYWRkWmVyb0JlZm9yZSh0aGVEYXRlLmdldE1vbnRoKCkpO1xuICB2YXIgeWVhciA9IHRoZURhdGUuZ2V0RnVsbFllYXIoKTtcblxuICByZXR1cm4gKFxuICAgIG1vbnRoSW5kZXgudG9TdHJpbmcoKSArXG4gICAgXCIvXCIgK1xuICAgIGRheS50b1N0cmluZygpICtcbiAgICBcIiBcIiArXG4gICAgaG91cnMudG9TdHJpbmcoKSArXG4gICAgXCI6XCIgK1xuICAgIG1pbnMudG9TdHJpbmcoKVxuICApO1xufVxuXG5mdW5jdGlvbiBhZGRaZXJvQmVmb3JlKG4pIHtcbiAgcmV0dXJuIChuIDwgMTAgPyBcIjBcIiA6IFwiXCIpICsgbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0YXRlRGF0ZShpbnB1dCkge1xuICBpZiAoaW5wdXQgPT0gXCJUb2RheVwiKSB7XG4gICAgbGV0IGRhdGVzID0ge307XG4gICAgZGF0ZXMuZW5kID0gbWFrZURhdGVIcnMoMCk7XG4gICAgZGF0ZXMuc3RhcnQgPSBtYWtlRGF0ZUhycygyNCk7XG4gICAgY29uc29sZS5sb2coXCJpcyB0b2RheVwiKTtcbiAgICByZXR1cm4gZGF0ZXM7XG4gIH1cbiAgaWYgKGlucHV0ID09IFwiWWVzdGVyZGF5XCIpIHtcbiAgICBsZXQgZGF0ZXMgPSB7fTtcbiAgICBkYXRlcy5lbmQgPSBtYWtlRGF0ZUhycygxKTtcbiAgICBkYXRlcy5zdGFydCA9IG1ha2VEYXRlRGF5cygyKTtcbiAgICBjb25zb2xlLmxvZyhcImlzIHllc3RlcmRheVwiKTtcbiAgICByZXR1cm4gZGF0ZXM7XG4gIH1cbiAgaWYgKGlucHV0ID09IFwiVGhpcyBXZWVrXCIpIHtcbiAgICBsZXQgZGF0ZXMgPSB7fTtcbiAgICBkYXRlcy5lbmQgPSBtYWtlRGF0ZUhycygwKTtcbiAgICBkYXRlcy5zdGFydCA9IG1ha2VEYXRlRGF5cyg3KTtcbiAgICBjb25zb2xlLmxvZyhcImlzIHRoaXMgd2Vla1wiKTtcbiAgICByZXR1cm4gZGF0ZXM7XG4gIH1cbiAgaWYgKGlucHV0ID09IFwiVGhpcyBNb250aFwiKSB7XG4gICAgbGV0IGRhdGVzID0ge307XG4gICAgZGF0ZXMuZW5kID0gbWFrZURhdGVIcnMoMCk7XG4gICAgZGF0ZXMuc3RhcnQgPSBtYWtlRGF0ZURheXMoMzApO1xuICAgIGNvbnNvbGUubG9nKFwiaXMgdGhpcyBtb250aFwiKTtcbiAgICByZXR1cm4gZGF0ZXM7XG4gIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBtYWtlRGF0ZUhycyhocnNCYWNrKSB7XG4gIGlmIChocnNCYWNrID09IDApIHtcbiAgICBsZXQgZHQgPSBuZXcgRGF0ZShuZXcgRGF0ZSgpLnRvVVRDU3RyaW5nKCkpO1xuICAgIGR0ID0gZHQudG9JU09TdHJpbmcoKTtcbiAgICByZXR1cm4gZHQ7XG4gIH0gZWxzZSB7XG4gICAgbGV0IGR0ID0gbmV3IERhdGUobmV3IERhdGUoKS50b1VUQ1N0cmluZygpKTtcbiAgICBkdC5zZXRIb3VycyhkdC5nZXRIb3VycygpIC0gaHJzQmFjayk7XG4gICAgZHQgPSBkdC50b0lTT1N0cmluZygpO1xuICAgIHJldHVybiBkdDtcbiAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VEYXRlRGF5cyhudW0pIHtcbiAgbGV0IGR0ID0gbmV3IERhdGUobmV3IERhdGUoKS50b1VUQ1N0cmluZygpKTtcbiAgZHQuc2V0RGF0ZShkdC5nZXREYXRlKCkgLSBudW0pO1xuICBkdCA9IGR0LnRvSVNPU3RyaW5nKCk7XG4gIGNvbnNvbGUubG9nKFwiZ2V0dGluZyBkYXlzIGJhY2tcIik7XG4gIHJldHVybiBkdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGNDb21taXNzaW9uKHByaWNlLCBzaWRlLCBxdHksIGxlYXZlc1F0eSwgb3JkZXJUeXBlKSB7XG4gIGxldCByZWFsUXR5ID0gcXR5IC0gbGVhdmVzUXR5O1xuICBsZXQgY29tbWlzc2lvbjtcbiAgaWYgKG9yZGVyVHlwZSA9PSBcIk1hcmtldFwiKSB7XG4gICAgY29tbWlzc2lvbiA9IChyZWFsUXR5ICogMC4wMDc1KSAvIHByaWNlO1xuICAgIGNvbW1pc3Npb24gPSBjb21taXNzaW9uICogLTE7XG4gIH1cbiAgaWYgKG9yZGVyVHlwZS5pbmNsdWRlcyhcIlN0b3BcIikpIHtcbiAgICBjb21taXNzaW9uID0gKHJlYWxRdHkgKiAwLjAwNzUpIC8gcHJpY2U7XG4gICAgY29tbWlzc2lvbiA9IGNvbW1pc3Npb24gKiAtMTtcbiAgfVxuICBpZiAob3JkZXJUeXBlID09IFwiTGltaXRcIikge1xuICAgIGNvbW1pc3Npb24gPSAocmVhbFF0eSAqIDAuMDAyNSkgLyBwcmljZTtcbiAgfVxuICByZXR1cm4gY29tbWlzc2lvbi50b0ZpeGVkKDUpO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCwgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4uLy4uL3RoZW1lXCI7XG5pbXBvcnQgQ2F0ZWdvcnlMaXN0IGZyb20gXCIuLi9DYXRlZ29yeUxpc3RcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL0hlYWRlclwiO1xuaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSBcIm1vYngtcmVhY3RcIjtcbmltcG9ydCB7IG9ic2VydmVyIH0gZnJvbSBcIm1vYngtcmVhY3QtbGl0ZVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ29udGFpbkRpdkNsaWNrZWQgfSBmcm9tIFwiLi4vLi4vRGFzaGJvYXJkL1RhZGVzL1RyYWRlc1wiO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xuaW1wb3J0IHsgZmFDYXJldERvd24sIGZhQ2FyZXRVcCB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcbmltcG9ydCB7IHdpZGVGb250IH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9oZWxwZXJzXCI7XG5cbmV4cG9ydCBjb25zdCBTeW1ib2xDaG9vc2VyNzY4ID0gaW5qZWN0KFwic3RvcmVcIikoXG4gIG9ic2VydmVyKCh7IHN0b3JlIH0pID0+IHtcbiAgICBjb25zdCBbZHJvcGRvd24sIHNldERyb3Bkb3duXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IHNob3dEcm9wZG93biA9ICgpID0+IHtcbiAgICAgIGlmIChkcm9wZG93biA9PSBmYWxzZSkge1xuICAgICAgICBzZXREcm9wZG93bih0cnVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldERyb3Bkb3duKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgY2xpY2tlZCA9ICh2YWx1ZSkgPT4ge1xuICAgICAgc3RvcmUuc2V0U3ltYm9sKHZhbHVlKTtcbiAgICAgIHN0b3JlLmNoYW5nZUhhc1RlbXBUYWdzKCk7XG4gICAgICBzZXREcm9wZG93bihmYWxzZSk7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICA8TGFwcGVyQ2hvb3NlclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgc2hvd0Ryb3Bkb3duKCk7XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxTZXRTeW1ib2wgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCIycHhcIiB9fT5cbiAgICAgICAgICA8SW5uZXJTeW1ib2xDaG9vc2VyPlxuICAgICAgICAgICAgPGRpdj57c3RvcmUuc3ltYm9sfTwvZGl2PlxuICAgICAgICAgICAge2Ryb3Bkb3duID09IHRydWUgPyAoXG4gICAgICAgICAgICAgIDxGb250QXdlc29tZUljb25cbiAgICAgICAgICAgICAgICBpY29uPXtmYUNhcmV0VXB9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiM3B4XCIsXG4gICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBcIjNweFwiLFxuICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjJweFwiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXG4gICAgICAgICAgICAgICAgaWNvbj17ZmFDYXJldERvd259XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiM3B4XCIsXG4gICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBcIjNweFwiLFxuICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjJweFwiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvSW5uZXJTeW1ib2xDaG9vc2VyPlxuICAgICAgICA8L1NldFN5bWJvbD5cbiAgICAgICAge2Ryb3Bkb3duID09IHRydWUgPyAoXG4gICAgICAgICAgPERyb3Bkb3duTGlzdENvbnRhaW5lcj5cbiAgICAgICAgICAgIDxEcm9wZG93bkxpc3RJdGVtIG9uQ2xpY2s9eygpID0+IGNsaWNrZWQoXCJYQlRVU0RcIil9PlxuICAgICAgICAgICAgICBYQlRVU0RcbiAgICAgICAgICAgIDwvRHJvcGRvd25MaXN0SXRlbT5cbiAgICAgICAgICAgIDxEcm9wZG93bkxpc3RJdGVtIG9uQ2xpY2s9eygpID0+IGNsaWNrZWQoXCJYQlRVMjBcIil9PlxuICAgICAgICAgICAgICBYQlRVMjBcbiAgICAgICAgICAgIDwvRHJvcGRvd25MaXN0SXRlbT5cbiAgICAgICAgICAgIDxEcm9wZG93bkxpc3RJdGVtIG9uQ2xpY2s9eygpID0+IGNsaWNrZWQoXCJYQlRNMjBcIil9PlxuICAgICAgICAgICAgICBYQlRNMjBcbiAgICAgICAgICAgIDwvRHJvcGRvd25MaXN0SXRlbT5cbiAgICAgICAgICA8L0Ryb3Bkb3duTGlzdENvbnRhaW5lcj5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICA8L0xhcHBlckNob29zZXI+XG4gICAgKTtcbiAgfSlcbik7XG5cbmV4cG9ydCBjb25zdCBQbmw3NjggPSBpbmplY3QoXCJzdG9yZVwiKShcbiAgb2JzZXJ2ZXIoKHsgc3RvcmUgfSkgPT4ge1xuICAgIGlmIChzdG9yZS5wbmwgPj0gMCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPExhcHBlcjIgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMnB4XCIgfX0+XG4gICAgICAgICAgPElubmVyTGFwcGVyIHN0eWxlPXt7IHBhZGRpbmc6IFwiNHB4XCIgfX0+XG4gICAgICAgICAgICB7c3RvcmUucG5sLnRvRml4ZWQoNCkgKyBcInhidFwifVxuICAgICAgICAgIDwvSW5uZXJMYXBwZXI+XG4gICAgICAgIDwvTGFwcGVyMj5cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxMYXBwZXIzIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjJweFwiIH19PlxuICAgICAgICAgIDxJbm5lckxhcHBlciBzdHlsZT17eyBwYWRkaW5nOiBcIjRweFwiIH19PlxuICAgICAgICAgICAge3N0b3JlLnBubC50b0ZpeGVkKDQpICsgXCJ4YnRcIn1cbiAgICAgICAgICA8L0lubmVyTGFwcGVyPlxuICAgICAgICA8L0xhcHBlcjM+XG4gICAgICApO1xuICAgIH1cbiAgfSlcbik7XG5cbmNvbnN0IFNpZGViYXIgPSBpbmplY3QoXCJzdG9yZVwiKShcbiAgb2JzZXJ2ZXIoKHsgc3RvcmUgfSkgPT4ge1xuICAgIGNvbnN0IFtkcm9wZG93biwgc2V0RHJvcGRvd25dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgY29uc3QgY2xpY2tlZCA9ICh2YWx1ZSkgPT4ge1xuICAgICAgc3RvcmUuc2V0U3ltYm9sKHZhbHVlKTtcbiAgICAgIHN0b3JlLmNoYW5nZUhhc1RlbXBUYWdzKCk7XG4gICAgICBzZXREcm9wZG93bihmYWxzZSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHNob3dEcm9wZG93biA9ICgpID0+IHtcbiAgICAgIGlmIChkcm9wZG93biA9PSBmYWxzZSkge1xuICAgICAgICBzZXREcm9wZG93bih0cnVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldERyb3Bkb3duKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZShmYWxzZSl9PlxuICAgICAgICA8TGFwcGVyQ29udGFpbmVyPlxuICAgICAgICAgIDxMYXBwZXI0XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHNob3dEcm9wZG93bigpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8U2V0U3ltYm9sPlxuICAgICAgICAgICAgICB7c3RvcmUuc3ltYm9sfVxuICAgICAgICAgICAgICB7ZHJvcGRvd24gPT0gdHJ1ZSA/IChcbiAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXG4gICAgICAgICAgICAgICAgICBpY29uPXtmYUNhcmV0VXB9XG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiNHB4XCIsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IFwiM3B4XCIsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxuICAgICAgICAgICAgICAgICAgaWNvbj17ZmFDYXJldERvd259XG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiNHB4XCIsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IFwiM3B4XCIsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L1NldFN5bWJvbD5cbiAgICAgICAgICAgIHtkcm9wZG93biA9PSB0cnVlID8gKFxuICAgICAgICAgICAgICA8RHJvcGRvd25MaXN0Q29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxEcm9wZG93bkxpc3RJdGVtIG9uQ2xpY2s9eygpID0+IGNsaWNrZWQoXCJYQlRVU0RcIil9PlxuICAgICAgICAgICAgICAgICAgWEJUVVNEXG4gICAgICAgICAgICAgICAgPC9Ecm9wZG93bkxpc3RJdGVtPlxuICAgICAgICAgICAgICAgIDxEcm9wZG93bkxpc3RJdGVtIG9uQ2xpY2s9eygpID0+IGNsaWNrZWQoXCJYQlRVMjBcIil9PlxuICAgICAgICAgICAgICAgICAgWEJUVTIwXG4gICAgICAgICAgICAgICAgPC9Ecm9wZG93bkxpc3RJdGVtPlxuICAgICAgICAgICAgICAgIDxEcm9wZG93bkxpc3RJdGVtIG9uQ2xpY2s9eygpID0+IGNsaWNrZWQoXCJYQlRNMjBcIil9PlxuICAgICAgICAgICAgICAgICAgWEJUTTIwXG4gICAgICAgICAgICAgICAgPC9Ecm9wZG93bkxpc3RJdGVtPlxuICAgICAgICAgICAgICA8L0Ryb3Bkb3duTGlzdENvbnRhaW5lcj5cbiAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgIDwvTGFwcGVyND5cbiAgICAgICAgICA8TGFwcGVyPlxuICAgICAgICAgICAgPENhdGVnb3J5TGlzdCAvPlxuICAgICAgICAgIDwvTGFwcGVyPlxuICAgICAgICAgIHtzdG9yZS5wbmwgPj0gMCA/IChcbiAgICAgICAgICAgIDxMYXBwZXIyPlxuICAgICAgICAgICAgICA8SW5uZXJMYXBwZXI+e3N0b3JlLnBubC50b0ZpeGVkKDQpICsgXCJ4YnRcIn08L0lubmVyTGFwcGVyPlxuICAgICAgICAgICAgPC9MYXBwZXIyPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8TGFwcGVyMz5cbiAgICAgICAgICAgICAgPElubmVyTGFwcGVyPntzdG9yZS5wbmwudG9GaXhlZCg0KSArIFwieGJ0XCJ9PC9Jbm5lckxhcHBlcj5cbiAgICAgICAgICAgIDwvTGFwcGVyMz5cbiAgICAgICAgICApfVxuICAgICAgICA8L0xhcHBlckNvbnRhaW5lcj5cbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICApO1xuICB9KVxuKTtcblxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhcjtcbmNvbnN0IExhcHBlckNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbi1sZWZ0OiAyNHB4O1xuYDtcblxuY29uc3QgSW5uZXJTeW1ib2xDaG9vc2VyID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogNjVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgcGFkZGluZy10b3A6IDRweDtcbmA7XG5cbmNvbnN0IExhcHBlciA9IHN0eWxlZC5hc2lkZWBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC1iYXNpczogMjQwcHg7XG5cbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuZm9yZWdyb3VuZH07XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTI1Mjk7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbmA7XG5jb25zdCBJbm5lckxhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IGF1dG87XG5gO1xuXG5jb25zdCBMYXBwZXIyID0gc3R5bGVkLmFzaWRlYFxuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5mb3JlZ3JvdW5kfTtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xuYDtcbmNvbnN0IExhcHBlckNob29zZXIgPSBzdHlsZWQuYXNpZGVgXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmZvcmVncm91bmR9O1xuICBtYXJnaW4tbGVmdDogMDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbmA7XG5cbmNvbnN0IExhcHBlcjMgPSBzdHlsZWQuYXNpZGVgXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmZvcmVncm91bmR9O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xuYDtcblxuY29uc3QgTGFwcGVyNCA9IHN0eWxlZC5hc2lkZWBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5mb3JlZ3JvdW5kfTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjUyOTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuYDtcbmV4cG9ydCBjb25zdCBTZXRTeW1ib2wgPSBzdHlsZWQuZGl2YFxuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gICR7d2lkZUZvbnR9XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyNTI3O1xuICBoZWlnaHQ6IDEwMCU7XG4gIDpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5gO1xuXG5jb25zdCBEcm9wZG93bkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGhlaWdodDogMTAwcHg7XG5gO1xuY29uc3QgRHJvcGRvd25MaXN0Q29udGFpbmVyID0gc3R5bGVkLnVsYFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLWxlZnQ6IC04cHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjUyNztcbmA7XG5jb25zdCBEcm9wZG93bkxpc3RJdGVtID0gc3R5bGVkLmxpYFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTI1Mjk7XG4gIHBhZGRpbmc6IDJweCAxNXB4O1xuICBtYXJnaW46IDRweCAwO1xuICAke3dpZGVGb250fVxuICA6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB9XG5gO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBpbmplY3QgfSBmcm9tIFwibW9ieC1yZWFjdFwiO1xuaW1wb3J0IHsgb2JzZXJ2ZXIgfSBmcm9tIFwibW9ieC1yZWFjdC1saXRlXCI7XG5pbXBvcnQgeyB3aWRlRm9udCB9IGZyb20gXCIuLi9zaGFyZWQvaGVscGVyc1wiO1xuaW1wb3J0IERhdGVwaWNrZXIgZnJvbSBcIi4vRGF0ZXBpY2tlclwiO1xuXG5jb25zdCBTaWRlYmFyQ2F0ZWdvcnlMaXN0ID0gaW5qZWN0KFwic3RvcmVcIikoXG4gIG9ic2VydmVyKCh7IHN0b3JlIH0pID0+IHtcbiAgICBjb25zdCBbY3VzdG9tQ2xpY2tlZCwgc2V0Q3VzdG9tQ2xpY2tlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVDbGljayh2YWx1ZSkge1xuICAgICAgc3RvcmUucmVzZXRQbmwoKTtcbiAgICAgIHN0b3JlLmNoYW5nZURhdGUodmFsdWUpO1xuICAgICAgY29uc29sZS5sb2coc3RvcmUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZUN1c3RvbUNsaWNrZWQoKSB7XG4gICAgICBpZiAoY3VzdG9tQ2xpY2tlZCA9PSB0cnVlKSB7XG4gICAgICAgIHNldEN1c3RvbUNsaWNrZWQoZmFsc2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0Q3VzdG9tQ2xpY2tlZCh0cnVlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPENhdGVnb3J5TGlzdD5cbiAgICAgICAgICB7c3RvcmUuZGF0ZSA9PSBcIlRvZGF5XCIgJiYgY3VzdG9tQ2xpY2tlZCA9PSBmYWxzZSA/IChcbiAgICAgICAgICAgIDxJdGVtQWN0aXZlIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKFwiVG9kYXlcIil9PlRvZGF5PC9JdGVtQWN0aXZlPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8SXRlbSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljayhcIlRvZGF5XCIpfT5Ub2RheTwvSXRlbT5cbiAgICAgICAgICApfVxuICAgICAgICAgIHtzdG9yZS5kYXRlID09IFwiWWVzdGVyZGF5XCIgJiYgY3VzdG9tQ2xpY2tlZCA9PSBmYWxzZSA/IChcbiAgICAgICAgICAgIDxJdGVtQWN0aXZlIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKFwiWWVzdGVyZGF5XCIpfT5cbiAgICAgICAgICAgICAgWWVzdGVyZGF5XG4gICAgICAgICAgICA8L0l0ZW1BY3RpdmU+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxJdGVtIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKFwiWWVzdGVyZGF5XCIpfT5ZZXN0ZXJkYXk8L0l0ZW0+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7c3RvcmUuZGF0ZSA9PSBcIlRoaXMgV2Vla1wiICYmIGN1c3RvbUNsaWNrZWQgPT0gZmFsc2UgPyAoXG4gICAgICAgICAgICA8SXRlbUFjdGl2ZSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljayhcIlRoaXMgV2Vla1wiKX0+XG4gICAgICAgICAgICAgIFRoaXMgV2Vla1xuICAgICAgICAgICAgPC9JdGVtQWN0aXZlPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8SXRlbSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljayhcIlRoaXMgV2Vla1wiKX0+VGhpcyBXZWVrPC9JdGVtPlxuICAgICAgICAgICl9XG4gICAgICAgICAge3N0b3JlLmRhdGUgPT0gXCJUaGlzIE1vbnRoXCIgJiYgY3VzdG9tQ2xpY2tlZCA9PSBmYWxzZSA/IChcbiAgICAgICAgICAgIDxJdGVtQWN0aXZlIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKFwiVGhpcyBNb250aFwiKX0+XG4gICAgICAgICAgICAgIFRoaXMgTW9udGhcbiAgICAgICAgICAgIDwvSXRlbUFjdGl2ZT5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPEl0ZW0gb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soXCJUaGlzIE1vbnRoXCIpfT5UaGlzIE1vbnRoPC9JdGVtPlxuICAgICAgICAgICl9XG5cbiAgICAgICAgICB7Y3VzdG9tQ2xpY2tlZCA9PSB0cnVlIHx8IHN0b3JlLmRhdGUgPT0gXCJDdXN0b21cIiA/IChcbiAgICAgICAgICAgIDxJdGVtQWN0aXZlIG9uQ2xpY2s9eygpID0+IGhhbmRsZUN1c3RvbUNsaWNrZWQoKX0+XG4gICAgICAgICAgICAgIEN1c3RvbVxuICAgICAgICAgICAgPC9JdGVtQWN0aXZlPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8SXRlbSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDdXN0b21DbGlja2VkKCl9PkN1c3RvbTwvSXRlbT5cbiAgICAgICAgICApfVxuICAgICAgICA8L0NhdGVnb3J5TGlzdD5cbiAgICAgICAge2N1c3RvbUNsaWNrZWQgPyA8UG9wdXAgLz4gOiBudWxsfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfSlcbik7XG5cbmNvbnN0IFBvcHVwID0gKCkgPT4ge1xuICBjb25zdCBbZW50ZXJlZCwgc2V0RW50ZXJlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIHJldHVybiAoXG4gICAgPFBvcHVwVG9wPlxuICAgICAgPFBvcENvbnRhaW4+XG4gICAgICAgIDxSb3cxPlxuICAgICAgICAgIDxQb3BMYWJlbD5zdGFydDo8L1BvcExhYmVsPlxuICAgICAgICAgIDxEYXRlcGlja2VyIHN0YXJ0PXt0cnVlfSBzZXQ9e2VudGVyZWR9IC8+XG4gICAgICAgIDwvUm93MT5cbiAgICAgICAgPFJvdzE+XG4gICAgICAgICAgPFBvcExhYmVsPmVuZDo8L1BvcExhYmVsPlxuICAgICAgICAgIDxEYXRlcGlja2VyIHN0YXJ0PXtmYWxzZX0gc2V0PXtlbnRlcmVkfSAvPlxuICAgICAgICA8L1JvdzE+XG4gICAgICAgIDxQb3BFbnRlciBvbkNsaWNrPXsoKSA9PiBzZXRFbnRlcmVkKHRydWUpfT5TZXQgRGF0ZTwvUG9wRW50ZXI+XG4gICAgICA8L1BvcENvbnRhaW4+XG4gICAgPC9Qb3B1cFRvcD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGViYXJDYXRlZ29yeUxpc3Q7XG5cbmNvbnN0IFJvdzEgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XG5gO1xuY29uc3QgUG9wQ29udGFpbiA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbjogNXB4O1xuYDtcbmNvbnN0IFBvcExhYmVsID0gc3R5bGVkLmRpdmBcbiAgY29sb3I6ICNmZmY7XG5gO1xuY29uc3QgUG9wRW50ZXIgPSBzdHlsZWQuYnV0dG9uYFxuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDJweDtcbiAgYm9yZGVyLXJhZGl1czogMXB4O1xuYDtcblxuY29uc3QgUG9wdXBUb3AgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6ICMwMDA7XG4gIHotaW5kZXg6IDE7XG4gIG1hcmdpbjogNXB4O1xuICBwYWRkaW5nOiAycHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbmA7XG5cbmNvbnN0IFBvcHVwSXRlbSA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5gO1xuXG5jb25zdCBDYXRlZ29yeUxpc3QgPSBzdHlsZWQubmF2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuYDtcblxuY29uc3QgSXRlbSA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6IDEycHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLm5vcm1hbFRleHR9O1xuICBjb2xvcjogd2hpdGU7XG4gIDo6YWZ0ZXIge1xuICAgIGxlZnQ6IC0xcHg7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5hY2NlbnR9O1xuICB9XG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgY29sb3I6ICMyMTI1Mjk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5gO1xuY29uc3QgSXRlbUFjdGl2ZSA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6IDEycHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLm5vcm1hbFRleHR9O1xuICBjb2xvcjogd2hpdGU7XG4gIDo6YWZ0ZXIge1xuICAgIGxlZnQ6IC0xcHg7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5hY2NlbnR9O1xuICB9XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgY29sb3I6ICMyMTI1Mjk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbmA7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRGF0ZVBpY2tlciBmcm9tIFwicmVhY3QtZGF0ZXBpY2tlclwiO1xuaW1wb3J0IHsgaW5qZWN0LCBvYnNlcnZlciB9IGZyb20gXCJtb2J4LXJlYWN0XCI7XG5cbmltcG9ydCBcInJlYWN0LWRhdGVwaWNrZXIvZGlzdC9yZWFjdC1kYXRlcGlja2VyLmNzc1wiO1xuaW1wb3J0IFwiLi9kYXRlcGlja2VyLWFkZGl0aW9uYWwuY3NzXCI7XG5pbXBvcnQgeyByZWFjdGlvbiB9IGZyb20gXCJtb2J4XCI7XG5cbkBpbmplY3QoW1wic3RvcmVcIl0pXG5Ab2JzZXJ2ZXJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4YW1wbGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZGF0ZTogbmV3IERhdGUoKSxcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge31cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmRhdGVSZWFjdGlvbiA9IHJlYWN0aW9uKFxuICAgICAgKCkgPT4gdGhpcy5wcm9wcy5zdG9yZS5zdGFydERhdGUsXG4gICAgICAobm90aWZpY2F0aW9ucywgcmVhY3Rpb24pID0+IHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc3RvcmUuc3RhcnREYXRlICE9PSBudWxsKSB7XG4gICAgICAgICAgaWYgKHRoaXMucHJvcHMuc3RhcnQgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGU6IG5ldyBEYXRlKHRoaXMucHJvcHMuc3RvcmUuc3RhcnREYXRlKSB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGU6IG5ldyBEYXRlKHRoaXMucHJvcHMuc3RvcmUuZW5kRGF0ZSkgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSA9IChkYXRlKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGU6IGRhdGUgfSk7XG4gICAgY29uc29sZS5sb2coZGF0ZSwgXCJUSElTIElTIERBVEVcIik7XG4gIH07XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIGNvbnNvbGUubG9nKFwianVzdCB1cGRhdGVkXCIpO1xuICAgIGlmICh0aGlzLnByb3BzLnNldCA9PSB0cnVlKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIm5vdCBlcXVhbFwiKTtcbiAgICAgIGlmICh0aGlzLnByb3BzLnN0YXJ0ID09IHRydWUpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJ3YXMgdHJ1ZVwiKTtcbiAgICAgICAgbGV0IGZpcnN0RGF0ZSA9IHRoaXMuc3RhdGUuZGF0ZS50b0lTT1N0cmluZygpO1xuICAgICAgICBsZXQgbXVsdGlEYXRlID0gZmlyc3REYXRlLnNwbGl0KFwiVFwiKTtcbiAgICAgICAgdGhpcy5wcm9wcy5zdG9yZS5zdGFydERhdGUgPSBtdWx0aURhdGVbMF0gKyBcIlQwMDowMDowMC4wMDBaXCI7XG4gICAgICAgIHRoaXMucHJvcHMuc3RvcmUuZGF0ZSA9IFwiQ3VzdG9tXCI7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5wcm9wcy5zdGFydCA9PSBmYWxzZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIndhcyBmYWxzZVwiKTtcbiAgICAgICAgbGV0IGZpcnN0RGF0ZSA9IHRoaXMuc3RhdGUuZGF0ZS50b0lTT1N0cmluZygpO1xuICAgICAgICBsZXQgbXVsdGlEYXRlID0gZmlyc3REYXRlLnNwbGl0KFwiVFwiKTtcbiAgICAgICAgdGhpcy5wcm9wcy5zdG9yZS5lbmREYXRlID0gbXVsdGlEYXRlWzBdICsgXCJUMjQ6MDA6MDAuMDAwWlwiO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzLnN0b3JlLmVuZERhdGUpO1xuICAgICAgICB0aGlzLnByb3BzLnN0b3JlLmRhdGUgPSBcIkN1c3RvbVwiO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPERhdGVQaWNrZXIgc2VsZWN0ZWQ9e3RoaXMuc3RhdGUuZGF0ZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSAvPlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyB3aWRlRm9udCB9IGZyb20gXCIuLi9zaGFyZWQvaGVscGVyc1wiO1xuXG5jb25zdCBTaWRlYmFyQ2F0ZWdvcnlMaXN0SGVhZGVyID0gKCkgPT4gPEhlYWRlcj5DaGFuZ2UgRGF0ZTwvSGVhZGVyPjtcblxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhckNhdGVnb3J5TGlzdEhlYWRlcjtcblxuY29uc3QgSGVhZGVyID0gc3R5bGVkLnNwYW5gXG4gICR7d2lkZUZvbnR9XG4gIGZvbnQtd2VpZ2h0OjYwMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDEycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubXV0ZWRUZXh0fTtcbiAgY29sb3I6IHdoaXRlO1xuYDtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQsIHsgVGhlbWVQcm92aWRlciB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHRoZW1lIGZyb20gXCIuLi90aGVtZVwiO1xuaW1wb3J0IENhdGVnb3J5TGlzdCBmcm9tIFwiLi9DYXRlZ29yeUxpc3RcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vSGVhZGVyXCI7XG5pbXBvcnQgeyBpbmplY3QgfSBmcm9tIFwibW9ieC1yZWFjdFwiO1xuaW1wb3J0IHsgb2JzZXJ2ZXIgfSBmcm9tIFwibW9ieC1yZWFjdC1saXRlXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDb250YWluRGl2Q2xpY2tlZCB9IGZyb20gXCIuLi9EYXNoYm9hcmQvVGFkZXMvVHJhZGVzXCI7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XG5pbXBvcnQgeyBmYUNhcmV0RG93biwgZmFDYXJldFVwIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xuaW1wb3J0IHsgd2lkZUZvbnQgfSBmcm9tIFwiLi4vc2hhcmVkL2hlbHBlcnNcIjtcblxuZXhwb3J0IGNvbnN0IFN5bWJvbENob29zZXIgPSBpbmplY3QoXCJzdG9yZVwiKShcbiAgb2JzZXJ2ZXIoKHsgc3RvcmUgfSkgPT4ge1xuICAgIGNvbnN0IFtkcm9wZG93biwgc2V0RHJvcGRvd25dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgY29uc3Qgc2hvd0Ryb3Bkb3duID0gKCkgPT4ge1xuICAgICAgaWYgKGRyb3Bkb3duID09IGZhbHNlKSB7XG4gICAgICAgIHNldERyb3Bkb3duKHRydWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0RHJvcGRvd24oZmFsc2UpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBjbGlja2VkID0gKHZhbHVlKSA9PiB7XG4gICAgICBzdG9yZS5zZXRTeW1ib2wodmFsdWUpO1xuICAgICAgc3RvcmUuY2hhbmdlSGFzVGVtcFRhZ3MoKTtcbiAgICAgIHNldERyb3Bkb3duKGZhbHNlKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXBwZXIyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBzaG93RHJvcGRvd24oKTtcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPFNldFN5bWJvbD5cbiAgICAgICAgICB7c3RvcmUuc3ltYm9sfVxuICAgICAgICAgIHtkcm9wZG93biA9PSB0cnVlID8gKFxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxuICAgICAgICAgICAgICBpY29uPXtmYUNhcmV0VXB9XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiM3B4XCIsXG4gICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogXCIzcHhcIixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxGb250QXdlc29tZUljb25cbiAgICAgICAgICAgICAgaWNvbj17ZmFDYXJldERvd259XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiM3B4XCIsXG4gICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogXCIzcHhcIixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9TZXRTeW1ib2w+XG4gICAgICAgIHtkcm9wZG93biA9PSB0cnVlID8gKFxuICAgICAgICAgIDxEcm9wZG93bkxpc3RDb250YWluZXI+XG4gICAgICAgICAgICA8RHJvcGRvd25MaXN0SXRlbSBvbkNsaWNrPXsoKSA9PiBjbGlja2VkKFwiWEJUVVNEXCIpfT5cbiAgICAgICAgICAgICAgWEJUVVNEXG4gICAgICAgICAgICA8L0Ryb3Bkb3duTGlzdEl0ZW0+XG4gICAgICAgICAgICA8RHJvcGRvd25MaXN0SXRlbSBvbkNsaWNrPXsoKSA9PiBjbGlja2VkKFwiWEJUVTIwXCIpfT5cbiAgICAgICAgICAgICAgWEJUVTIwXG4gICAgICAgICAgICA8L0Ryb3Bkb3duTGlzdEl0ZW0+XG4gICAgICAgICAgICA8RHJvcGRvd25MaXN0SXRlbSBvbkNsaWNrPXsoKSA9PiBjbGlja2VkKFwiWEJUTTIwXCIpfT5cbiAgICAgICAgICAgICAgWEJUTTIwXG4gICAgICAgICAgICA8L0Ryb3Bkb3duTGlzdEl0ZW0+XG4gICAgICAgICAgPC9Ecm9wZG93bkxpc3RDb250YWluZXI+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgPC9MYXBwZXIyPlxuICAgICk7XG4gIH0pXG4pO1xuXG5leHBvcnQgY29uc3QgUG5sID0gaW5qZWN0KFwic3RvcmVcIikoXG4gIG9ic2VydmVyKCh7IHN0b3JlIH0pID0+IHtcbiAgICBpZiAoc3RvcmUucG5sID49IDApIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxMYXBwZXIyPlxuICAgICAgICAgIDxJbm5lckxhcHBlciBzdHlsZT17eyBwYWRkaW5nOiBcIjRweFwiIH19PlxuICAgICAgICAgICAge3N0b3JlLnBubC50b0ZpeGVkKDQpICsgXCJ4YnRcIn1cbiAgICAgICAgICA8L0lubmVyTGFwcGVyPlxuICAgICAgICA8L0xhcHBlcjI+XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8TGFwcGVyMz5cbiAgICAgICAgICA8SW5uZXJMYXBwZXIgc3R5bGU9e3sgcGFkZGluZzogXCI0cHhcIiB9fT5cbiAgICAgICAgICAgIHtzdG9yZS5wbmwudG9GaXhlZCg0KSArIFwieGJ0XCJ9XG4gICAgICAgICAgPC9Jbm5lckxhcHBlcj5cbiAgICAgICAgPC9MYXBwZXIzPlxuICAgICAgKTtcbiAgICB9XG4gIH0pXG4pO1xuXG5jb25zdCBTaWRlYmFyID0gaW5qZWN0KFwic3RvcmVcIikoXG4gIG9ic2VydmVyKCh7IHN0b3JlIH0pID0+IHtcbiAgICBjb25zdCBbZHJvcGRvd24sIHNldERyb3Bkb3duXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IGNsaWNrZWQgPSAodmFsdWUpID0+IHtcbiAgICAgIHN0b3JlLnNldFN5bWJvbCh2YWx1ZSk7XG4gICAgICBzdG9yZS5jaGFuZ2VIYXNUZW1wVGFncygpO1xuICAgICAgc2V0RHJvcGRvd24oZmFsc2UpO1xuICAgIH07XG5cbiAgICBjb25zdCBzaG93RHJvcGRvd24gPSAoKSA9PiB7XG4gICAgICBpZiAoZHJvcGRvd24gPT0gZmFsc2UpIHtcbiAgICAgICAgc2V0RHJvcGRvd24odHJ1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXREcm9wZG93bihmYWxzZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWUoZmFsc2UpfT5cbiAgICAgICAgPExhcHBlckNvbnRhaW5lcj5cbiAgICAgICAgICA8TGFwcGVyNFxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBzaG93RHJvcGRvd24oKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFNldFN5bWJvbD5cbiAgICAgICAgICAgICAge3N0b3JlLnN5bWJvbH1cbiAgICAgICAgICAgICAge2Ryb3Bkb3duID09IHRydWUgPyAoXG4gICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxuICAgICAgICAgICAgICAgICAgaWNvbj17ZmFDYXJldFVwfVxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIjRweFwiLFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBcIjNweFwiLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb25cbiAgICAgICAgICAgICAgICAgIGljb249e2ZhQ2FyZXREb3dufVxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIjRweFwiLFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBcIjNweFwiLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9TZXRTeW1ib2w+XG4gICAgICAgICAgICB7ZHJvcGRvd24gPT0gdHJ1ZSA/IChcbiAgICAgICAgICAgICAgPERyb3Bkb3duTGlzdENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8RHJvcGRvd25MaXN0SXRlbSBvbkNsaWNrPXsoKSA9PiBjbGlja2VkKFwiWEJUVVNEXCIpfT5cbiAgICAgICAgICAgICAgICAgIFhCVFVTRFxuICAgICAgICAgICAgICAgIDwvRHJvcGRvd25MaXN0SXRlbT5cbiAgICAgICAgICAgICAgICA8RHJvcGRvd25MaXN0SXRlbSBvbkNsaWNrPXsoKSA9PiBjbGlja2VkKFwiWEJUVTIwXCIpfT5cbiAgICAgICAgICAgICAgICAgIFhCVFUyMFxuICAgICAgICAgICAgICAgIDwvRHJvcGRvd25MaXN0SXRlbT5cbiAgICAgICAgICAgICAgICA8RHJvcGRvd25MaXN0SXRlbSBvbkNsaWNrPXsoKSA9PiBjbGlja2VkKFwiWEJUTTIwXCIpfT5cbiAgICAgICAgICAgICAgICAgIFhCVE0yMFxuICAgICAgICAgICAgICAgIDwvRHJvcGRvd25MaXN0SXRlbT5cbiAgICAgICAgICAgICAgPC9Ecm9wZG93bkxpc3RDb250YWluZXI+XG4gICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICA8L0xhcHBlcjQ+XG4gICAgICAgICAgPExhcHBlcj5cbiAgICAgICAgICAgIDxDYXRlZ29yeUxpc3QgLz5cbiAgICAgICAgICA8L0xhcHBlcj5cbiAgICAgICAgICB7c3RvcmUucG5sID49IDAgPyAoXG4gICAgICAgICAgICA8TGFwcGVyMj5cbiAgICAgICAgICAgICAgPElubmVyTGFwcGVyPntzdG9yZS5wbmwudG9GaXhlZCg0KSArIFwieGJ0XCJ9PC9Jbm5lckxhcHBlcj5cbiAgICAgICAgICAgIDwvTGFwcGVyMj5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPExhcHBlcjM+XG4gICAgICAgICAgICAgIDxJbm5lckxhcHBlcj57c3RvcmUucG5sLnRvRml4ZWQoNCkgKyBcInhidFwifTwvSW5uZXJMYXBwZXI+XG4gICAgICAgICAgICA8L0xhcHBlcjM+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9MYXBwZXJDb250YWluZXI+XG4gICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgKTtcbiAgfSlcbik7XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGViYXI7XG5jb25zdCBMYXBwZXJDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tbGVmdDogMjRweDtcbmA7XG5cbmNvbnN0IExhcHBlciA9IHN0eWxlZC5hc2lkZWBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC1iYXNpczogMjQwcHg7XG5cbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuZm9yZWdyb3VuZH07XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTI1Mjk7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbmA7XG5jb25zdCBJbm5lckxhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IGF1dG87XG5gO1xuXG5jb25zdCBMYXBwZXIyID0gc3R5bGVkLmFzaWRlYFxuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5mb3JlZ3JvdW5kfTtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbmA7XG5cbmNvbnN0IExhcHBlcjMgPSBzdHlsZWQuYXNpZGVgXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmZvcmVncm91bmR9O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIG1hcmdpbjogYXV0bztcbmA7XG5cbmNvbnN0IExhcHBlcjQgPSBzdHlsZWQuYXNpZGVgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuZm9yZWdyb3VuZH07XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTI1Mjk7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbmA7XG5leHBvcnQgY29uc3QgU2V0U3ltYm9sID0gc3R5bGVkLmRpdmBcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICAke3dpZGVGb250fVxuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjUyNztcbiAgOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbmA7XG5cbmNvbnN0IERyb3Bkb3duQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgaGVpZ2h0OiAxMDBweDtcbmA7XG5jb25zdCBEcm9wZG93bkxpc3RDb250YWluZXIgPSBzdHlsZWQudWxgXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tbGVmdDogLThweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyNTI3O1xuYDtcbmNvbnN0IERyb3Bkb3duTGlzdEl0ZW0gPSBzdHlsZWQubGlgXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjUyOTtcbiAgcGFkZGluZzogMnB4IDE1cHg7XG4gIG1hcmdpbjogNHB4IDA7XG4gICR7d2lkZUZvbnR9XG4gIDpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIH1cbmA7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5jb25zdCBGb3JtV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJvcmRlcjogMXB4IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYm9yZGVyfTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICB3aWR0aDogMzc1cHg7XG4gIHBhZGRpbmc6IDI0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZm9yZWdyb3VuZH07XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgcGFkZGluZzogMTZweDtcbiAgfVxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAke3Byb3BzID0+IChwcm9wcy53aWRlID8gXCI2MDBweFwiIDogXCIzNzVweFwiKX0pIHtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgRm9ybVdyYXBwZXI7XG5cbi8vIG1heC13aWR0aDogJHtwcm9wcyA9PiAocHJvcHMud2lkZSA/IFwiNjAwcHhcIiA6IFwiMzc1cHhcIil9O1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbi8vIGltcG9ydCB7IHRyYW5zaXRpb24gfSBmcm9tICcuLi9oZWxwZXJzJztcblxuLy8gJHt0cmFuc2l0aW9ufTtcbmNvbnN0IElucHV0ID0gc3R5bGVkLmlucHV0YFxuICAtLWJvcmRlcjogJHsocHJvcHMpID0+XG4gICAgcHJvcHMuZXJyb3IgPyBwcm9wcy50aGVtZS5lcnJvciA6IHByb3BzLnRoZW1lLmFjY2VudH07XG4gIC0tc2hhZG93OiAkeyhwcm9wcykgPT5cbiAgICBwcm9wcy5lcnJvciA/IHByb3BzLnRoZW1lLmVycm9yICsgXCI0ZFwiIDogcHJvcHMudGhlbWUuYWNjZW50ICsgXCI0ZFwifTtcblxuICBkaXNwbGF5OiBibG9jaztcbiAgJHsocHJvcHMpID0+XG4gICAgcHJvcHMuZXJyb3JcbiAgICAgID8gYFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcilcbiAgICBgXG4gICAgICA6IGBcbiAgICBib3JkZXI6IDFweCBzb2xpZCAke3Byb3BzLnRoZW1lLmJvcmRlcn1cbiAgYH07XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmlucHV0QmFja2dyb3VuZH07XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5ub3JtYWxUZXh0fTtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcblxuICA6aG92ZXIsXG4gIDpmb2N1cyB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgfVxuXG4gIDpmb2N1cyB7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMnB4IHZhcigtLXNoYWRvdyk7XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IElucHV0O1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IHNtYWxsRm9udCB9IGZyb20gXCIuLi9zaGFyZWQvaGVscGVyc1wiO1xuXG5jb25zdCBMYWJlbCA9IHN0eWxlZC5sYWJlbGBcbiAgJHtzbWFsbEZvbnR9O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5tdXRlZFRleHR9O1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgTGFiZWw7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgdHJhbnNpdGlvbiwgd2lkZUZvbnQgfSBmcm9tIFwiLi9oZWxwZXJzXCI7XG5cbmNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gICR7dHJhbnNpdGlvbihcImZpbHRlclwiLCBcImJveC1zaGFkb3dcIil9O1xuICAke3dpZGVGb250fTtcblxuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgcGFkZGluZzogOHB4IDI0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYWNjZW50fTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgb3V0bGluZTogbm9uZTtcblxuICA6aG92ZXIge1xuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxMTAlKTtcbiAgfVxuXG4gIDphY3RpdmUge1xuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg5MCUpO1xuICB9XG5cbiAgOmZvY3VzIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAycHggJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5hY2NlbnQgKyBcIjRkXCJ9O1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XG4iLCJpbXBvcnQgeyBjc3MsIGtleWZyYW1lcyB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5leHBvcnQgY29uc3Qgc21hbGxGb250ID0gY3NzYFxuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5gO1xuXG5leHBvcnQgY29uc3Qgd2lkZUZvbnQgPSBjc3NgXG4gICR7c21hbGxGb250fTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcbmA7XG5cbmNvbnN0IGZhZGVLZXlmcmFtZXMgPSBrZXlmcmFtZXNgXG4gIGZyb20geyBvcGFjaXR5OiAwOyB9XG4gIHRvIHsgb3BhY2l0eTogMTsgfVxuYDtcblxuZXhwb3J0IGNvbnN0IGZhZGUgPSBjc3NgXG4gIGFuaW1hdGlvbjogJHtmYWRlS2V5ZnJhbWVzfSAwLjI1cztcbmA7XG5cbmV4cG9ydCBjb25zdCB0cmFuc2l0aW9uID0gcHJvcHMgPT4gY3NzYFxuICB0cmFuc2l0aW9uOiBhbGwgJHtwcm9wcy5zbG93ID8gXCIwLjNzXCIgOiBcIjAuMTVzXCJ9IGVhc2U7XG5gO1xuXG5leHBvcnQgY29uc3QgaGVhZGVySXRlbSA9IGNzc2BcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1zaHJpbms6IDA7XG4gIHBhZGRpbmc6IDAgMTZweDtcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDQyNXB4KSB7XG4gICAgcGFkZGluZzogMCA4cHg7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBsaW5rID0gcHJvcHMgPT4gY3NzYFxuICAke3RyYW5zaXRpb259O1xuICB0ZXh0LXVuZGVybGluZS1wb3NpdGlvbjogdW5kZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubm9ybWFsVGV4dH07XG4gIDpob3ZlciB7XG4gICAgJHtwcm9wcy51bmRlcmxpbmUgJiYgXCJ0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZVwifTtcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5hY2NlbnR9O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3Qgb3ZlcmZsb3cgPSBjc3NgXG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuYDtcbiIsImNvbnN0IGNvbnN0YW50cyA9IHtcbiAgZXJyb3I6IFwiI2Y1MjIyZFwiLFxuICB2b3RlOiBcIiNiNmI2YjZcIixcbiAgdXB2b3RlOiBcIiNmOTkyMGJcIixcbiAgZG93bnZvdGU6IFwiIzJlNzBmZlwiXG59O1xuXG5jb25zdCBkYXJrID0ge1xuICAuLi5jb25zdGFudHMsXG4gIG5vcm1hbFRleHQ6IFwiI2ZmZmZmZlwiLFxuICBtdXRlZFRleHQ6IFwiI2IwYjhiZlwiLFxuICBib3JkZXI6IFwiIzMzMzMzM1wiLFxuICBhY2NlbnQ6IFwiIzMzYTBmZlwiLFxuICBwYWdlQmFja2dyb3VuZDogXCIjMWIxYjFiXCIsXG4gIHZvdGVCdXR0b25Ib3ZlcjogXCIjMzgzODM4XCIsXG4gIGZvcmVncm91bmQ6IFwiIzI2MjYyNlwiLFxuICBhY3RpdmVCYWNrZ3JvdW5kOiBcIiMzMzMzMzNcIixcbiAgaW5wdXRCYWNrZ3JvdW5kOiBcIiMzMzMzMzNcIixcbiAgc2hhZG93OiBcInJnYmEoMCwgMCwgMCwgMC40KVwiXG59O1xuXG5jb25zdCBsaWdodCA9IHtcbiAgLi4uY29uc3RhbnRzLFxuICBub3JtYWxUZXh0OiBcIiM0NTRmNWJcIixcbiAgbXV0ZWRUZXh0OiBcIiM4MThlOTlcIixcbiAgYm9yZGVyOiBcIiNlYmVkZjBcIixcbiAgYWNjZW50OiBcIiMxODkwZmZcIixcbiAgcGFnZUJhY2tncm91bmQ6IFwiI2Y0ZjZmOFwiLFxuICB2b3RlQnV0dG9uSG92ZXI6IFwiI2YyZjJmMlwiLFxuICBmb3JlZ3JvdW5kOiBcIiNmZmZmZmZcIixcbiAgYWN0aXZlQmFja2dyb3VuZDogXCIjZmFmYWZhXCIsXG4gIGlucHV0QmFja2dyb3VuZDogXCIjZmNmY2ZjXCIsXG4gIHNoYWRvdzogXCJyZ2JhKDAsIDAsIDAsIDAuMDUpXCJcbn07XG5cbmNvbnN0IHRoZW1lID0gaXNEYXJrID0+IChpc0RhcmsgPyBkYXJrIDogbGlnaHQpO1xuXG5leHBvcnQgZGVmYXVsdCB0aGVtZTtcbiIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTt2YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3VybD1yZXF1aXJlKFwidXJsXCIpO3ZhciBfdXRpbHM9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi91dGlsc1wiKTt2YXIgX3JvdXRlcj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3JvdXRlclwiKSk7dmFyIF9yb3V0ZXIyPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlclwiKTtmdW5jdGlvbiBpc0xvY2FsKGhyZWYpe3ZhciB1cmw9KDAsX3VybC5wYXJzZSkoaHJlZixmYWxzZSx0cnVlKTt2YXIgb3JpZ2luPSgwLF91cmwucGFyc2UpKCgwLF91dGlscy5nZXRMb2NhdGlvbk9yaWdpbikoKSxmYWxzZSx0cnVlKTtyZXR1cm4hdXJsLmhvc3R8fHVybC5wcm90b2NvbD09PW9yaWdpbi5wcm90b2NvbCYmdXJsLmhvc3Q9PT1vcmlnaW4uaG9zdDt9ZnVuY3Rpb24gbWVtb2l6ZWRGb3JtYXRVcmwoZm9ybWF0RnVuYyl7dmFyIGxhc3RIcmVmPW51bGw7dmFyIGxhc3RBcz1udWxsO3ZhciBsYXN0UmVzdWx0PW51bGw7cmV0dXJuKGhyZWYsYXMpPT57aWYobGFzdFJlc3VsdCYmaHJlZj09PWxhc3RIcmVmJiZhcz09PWxhc3RBcyl7cmV0dXJuIGxhc3RSZXN1bHQ7fXZhciByZXN1bHQ9Zm9ybWF0RnVuYyhocmVmLGFzKTtsYXN0SHJlZj1ocmVmO2xhc3RBcz1hcztsYXN0UmVzdWx0PXJlc3VsdDtyZXR1cm4gcmVzdWx0O307fWZ1bmN0aW9uIGZvcm1hdFVybCh1cmwpe3JldHVybiB1cmwmJnR5cGVvZiB1cmw9PT0nb2JqZWN0Jz8oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHVybCk6dXJsO312YXIgb2JzZXJ2ZXI7dmFyIGxpc3RlbmVycz1uZXcgTWFwKCk7dmFyIEludGVyc2VjdGlvbk9ic2VydmVyPXR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJz93aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXI6bnVsbDt2YXIgcHJlZmV0Y2hlZD17fTtmdW5jdGlvbiBnZXRPYnNlcnZlcigpey8vIFJldHVybiBzaGFyZWQgaW5zdGFuY2Ugb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgYWxyZWFkeSBjcmVhdGVkXG5pZihvYnNlcnZlcil7cmV0dXJuIG9ic2VydmVyO30vLyBPbmx5IGNyZWF0ZSBzaGFyZWQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgc3VwcG9ydGVkIGluIGJyb3dzZXJcbmlmKCFJbnRlcnNlY3Rpb25PYnNlcnZlcil7cmV0dXJuIHVuZGVmaW5lZDt9cmV0dXJuIG9ic2VydmVyPW5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzPT57ZW50cmllcy5mb3JFYWNoKGVudHJ5PT57aWYoIWxpc3RlbmVycy5oYXMoZW50cnkudGFyZ2V0KSl7cmV0dXJuO312YXIgY2I9bGlzdGVuZXJzLmdldChlbnRyeS50YXJnZXQpO2lmKGVudHJ5LmlzSW50ZXJzZWN0aW5nfHxlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbz4wKXtvYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KTtsaXN0ZW5lcnMuZGVsZXRlKGVudHJ5LnRhcmdldCk7Y2IoKTt9fSk7fSx7cm9vdE1hcmdpbjonMjAwcHgnfSk7fXZhciBsaXN0ZW5Ub0ludGVyc2VjdGlvbnM9KGVsLGNiKT0+e3ZhciBvYnNlcnZlcj1nZXRPYnNlcnZlcigpO2lmKCFvYnNlcnZlcil7cmV0dXJuKCk9Pnt9O31vYnNlcnZlci5vYnNlcnZlKGVsKTtsaXN0ZW5lcnMuc2V0KGVsLGNiKTtyZXR1cm4oKT0+e3RyeXtvYnNlcnZlci51bm9ic2VydmUoZWwpO31jYXRjaChlcnIpe2NvbnNvbGUuZXJyb3IoZXJyKTt9bGlzdGVuZXJzLmRlbGV0ZShlbCk7fTt9O2NsYXNzIExpbmsgZXh0ZW5kcyBfcmVhY3QuQ29tcG9uZW50e2NvbnN0cnVjdG9yKHByb3BzKXtzdXBlcihwcm9wcyk7dGhpcy5wPXZvaWQgMDt0aGlzLmNsZWFuVXBMaXN0ZW5lcnM9KCk9Pnt9O3RoaXMuZm9ybWF0VXJscz1tZW1vaXplZEZvcm1hdFVybCgoaHJlZixhc0hyZWYpPT57cmV0dXJue2hyZWY6KDAsX3JvdXRlcjIuYWRkQmFzZVBhdGgpKGZvcm1hdFVybChocmVmKSksYXM6YXNIcmVmPygwLF9yb3V0ZXIyLmFkZEJhc2VQYXRoKShmb3JtYXRVcmwoYXNIcmVmKSk6YXNIcmVmfTt9KTt0aGlzLmxpbmtDbGlja2VkPWU9Pnt2YXJ7bm9kZU5hbWUsdGFyZ2V0fT1lLmN1cnJlbnRUYXJnZXQ7aWYobm9kZU5hbWU9PT0nQScmJih0YXJnZXQmJnRhcmdldCE9PSdfc2VsZid8fGUubWV0YUtleXx8ZS5jdHJsS2V5fHxlLnNoaWZ0S2V5fHxlLm5hdGl2ZUV2ZW50JiZlLm5hdGl2ZUV2ZW50LndoaWNoPT09Mikpey8vIGlnbm9yZSBjbGljayBmb3IgbmV3IHRhYiAvIG5ldyB3aW5kb3cgYmVoYXZpb3JcbnJldHVybjt9dmFye2hyZWYsYXN9PXRoaXMuZm9ybWF0VXJscyh0aGlzLnByb3BzLmhyZWYsdGhpcy5wcm9wcy5hcyk7aWYoIWlzTG9jYWwoaHJlZikpey8vIGlnbm9yZSBjbGljayBpZiBpdCdzIG91dHNpZGUgb3VyIHNjb3BlIChlLmcuIGh0dHBzOi8vZ29vZ2xlLmNvbSlcbnJldHVybjt9dmFye3BhdGhuYW1lfT13aW5kb3cubG9jYXRpb247aHJlZj0oMCxfdXJsLnJlc29sdmUpKHBhdGhuYW1lLGhyZWYpO2FzPWFzPygwLF91cmwucmVzb2x2ZSkocGF0aG5hbWUsYXMpOmhyZWY7ZS5wcmV2ZW50RGVmYXVsdCgpOy8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xudmFye3Njcm9sbH09dGhpcy5wcm9wcztpZihzY3JvbGw9PW51bGwpe3Njcm9sbD1hcy5pbmRleE9mKCcjJyk8MDt9Ly8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG5fcm91dGVyLmRlZmF1bHRbdGhpcy5wcm9wcy5yZXBsYWNlPydyZXBsYWNlJzoncHVzaCddKGhyZWYsYXMse3NoYWxsb3c6dGhpcy5wcm9wcy5zaGFsbG93fSkudGhlbihzdWNjZXNzPT57aWYoIXN1Y2Nlc3MpcmV0dXJuO2lmKHNjcm9sbCl7d2luZG93LnNjcm9sbFRvKDAsMCk7ZG9jdW1lbnQuYm9keS5mb2N1cygpO319KTt9O2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtpZihwcm9wcy5wcmVmZXRjaCl7Y29uc29sZS53YXJuKCdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnKTt9fXRoaXMucD1wcm9wcy5wcmVmZXRjaCE9PWZhbHNlO31jb21wb25lbnRXaWxsVW5tb3VudCgpe3RoaXMuY2xlYW5VcExpc3RlbmVycygpO31nZXRQYXRocygpe3ZhcntwYXRobmFtZX09d2luZG93LmxvY2F0aW9uO3ZhcntocmVmOnBhcnNlZEhyZWYsYXM6cGFyc2VkQXN9PXRoaXMuZm9ybWF0VXJscyh0aGlzLnByb3BzLmhyZWYsdGhpcy5wcm9wcy5hcyk7dmFyIHJlc29sdmVkSHJlZj0oMCxfdXJsLnJlc29sdmUpKHBhdGhuYW1lLHBhcnNlZEhyZWYpO3JldHVybltyZXNvbHZlZEhyZWYscGFyc2VkQXM/KDAsX3VybC5yZXNvbHZlKShwYXRobmFtZSxwYXJzZWRBcyk6cmVzb2x2ZWRIcmVmXTt9aGFuZGxlUmVmKHJlZil7aWYodGhpcy5wJiZJbnRlcnNlY3Rpb25PYnNlcnZlciYmcmVmJiZyZWYudGFnTmFtZSl7dGhpcy5jbGVhblVwTGlzdGVuZXJzKCk7dmFyIGlzUHJlZmV0Y2hlZD1wcmVmZXRjaGVkW3RoaXMuZ2V0UGF0aHMoKS5qb2luKC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4nJScpXTtpZighaXNQcmVmZXRjaGVkKXt0aGlzLmNsZWFuVXBMaXN0ZW5lcnM9bGlzdGVuVG9JbnRlcnNlY3Rpb25zKHJlZiwoKT0+e3RoaXMucHJlZmV0Y2goKTt9KTt9fX0vLyBUaGUgZnVuY3Rpb24gaXMgbWVtb2l6ZWQgc28gdGhhdCBubyBleHRyYSBsaWZlY3ljbGVzIGFyZSBuZWVkZWRcbi8vIGFzIHBlciBodHRwczovL3JlYWN0anMub3JnL2Jsb2cvMjAxOC8wNi8wNy95b3UtcHJvYmFibHktZG9udC1uZWVkLWRlcml2ZWQtc3RhdGUuaHRtbFxucHJlZmV0Y2gob3B0aW9ucyl7aWYoIXRoaXMucHx8dHlwZW9mIHdpbmRvdz09PSd1bmRlZmluZWQnKXJldHVybjsvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG52YXIgcGF0aHM9dGhpcy5nZXRQYXRocygpOy8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbi8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG5fcm91dGVyLmRlZmF1bHQucHJlZmV0Y2gocGF0aHNbLyogaHJlZiAqLzBdLHBhdGhzWy8qIGFzUGF0aCAqLzFdLG9wdGlvbnMpLmNhdGNoKGVycj0+e2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXsvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG50aHJvdyBlcnI7fX0pO3ByZWZldGNoZWRbcGF0aHMuam9pbigvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuJyUnKV09dHJ1ZTt9cmVuZGVyKCl7dmFye2NoaWxkcmVufT10aGlzLnByb3BzO3ZhcntocmVmLGFzfT10aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLHRoaXMucHJvcHMuYXMpOy8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuaWYodHlwZW9mIGNoaWxkcmVuPT09J3N0cmluZycpe2NoaWxkcmVuPS8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYVwiLG51bGwsY2hpbGRyZW4pO30vLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbnZhciBjaGlsZD1fcmVhY3QuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7dmFyIHByb3BzPXtyZWY6ZWw9Pnt0aGlzLmhhbmRsZVJlZihlbCk7aWYoY2hpbGQmJnR5cGVvZiBjaGlsZD09PSdvYmplY3QnJiZjaGlsZC5yZWYpe2lmKHR5cGVvZiBjaGlsZC5yZWY9PT0nZnVuY3Rpb24nKWNoaWxkLnJlZihlbCk7ZWxzZSBpZih0eXBlb2YgY2hpbGQucmVmPT09J29iamVjdCcpe2NoaWxkLnJlZi5jdXJyZW50PWVsO319fSxvbk1vdXNlRW50ZXI6ZT0+e2lmKGNoaWxkLnByb3BzJiZ0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyPT09J2Z1bmN0aW9uJyl7Y2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpO310aGlzLnByZWZldGNoKHtwcmlvcml0eTp0cnVlfSk7fSxvbkNsaWNrOmU9PntpZihjaGlsZC5wcm9wcyYmdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2s9PT0nZnVuY3Rpb24nKXtjaGlsZC5wcm9wcy5vbkNsaWNrKGUpO31pZighZS5kZWZhdWx0UHJldmVudGVkKXt0aGlzLmxpbmtDbGlja2VkKGUpO319fTsvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbi8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuaWYodGhpcy5wcm9wcy5wYXNzSHJlZnx8Y2hpbGQudHlwZT09PSdhJyYmISgnaHJlZidpbiBjaGlsZC5wcm9wcykpe3Byb3BzLmhyZWY9YXN8fGhyZWY7fS8vIEFkZCB0aGUgZW5kaW5nIHNsYXNoIHRvIHRoZSBwYXRocy4gU28sIHdlIGNhbiBzZXJ2ZSB0aGVcbi8vIFwiPHBhZ2U+L2luZGV4Lmh0bWxcIiBkaXJlY3RseS5cbmlmKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpe3ZhciByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydD1yZXF1aXJlKCcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKS5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydDtpZihwcm9wcy5ocmVmJiZ0eXBlb2YgX19ORVhUX0RBVEFfXyE9PSd1bmRlZmluZWQnJiZfX05FWFRfREFUQV9fLm5leHRFeHBvcnQpe3Byb3BzLmhyZWY9cmV3cml0ZVVybEZvck5leHRFeHBvcnQocHJvcHMuaHJlZik7fX1yZXR1cm4gX3JlYWN0LmRlZmF1bHQuY2xvbmVFbGVtZW50KGNoaWxkLHByb3BzKTt9fWlmKHByb2Nlc3MuZW52Lk5PREVfRU5WPT09J2RldmVsb3BtZW50Jyl7dmFyIHdhcm49KDAsX3V0aWxzLmV4ZWNPbmNlKShjb25zb2xlLmVycm9yKTsvLyBUaGlzIG1vZHVsZSBnZXRzIHJlbW92ZWQgYnkgd2VicGFjay5JZ25vcmVQbHVnaW5cbnZhciBQcm9wVHlwZXM9cmVxdWlyZSgncHJvcC10eXBlcycpO3ZhciBleGFjdD1yZXF1aXJlKCdwcm9wLXR5cGVzLWV4YWN0Jyk7Ly8gQHRzLWlnbm9yZSB0aGUgcHJvcGVydHkgaXMgc3VwcG9ydGVkLCB3aGVuIGRlY2xhcmluZyBpdCBvbiB0aGUgY2xhc3MgaXQgb3V0cHV0cyBhbiBleHRyYSBiaXQgb2YgY29kZSB3aGljaCBpcyBub3QgbmVlZGVkLlxuTGluay5wcm9wVHlwZXM9ZXhhY3Qoe2hyZWY6UHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZyxQcm9wVHlwZXMub2JqZWN0XSkuaXNSZXF1aXJlZCxhczpQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLFByb3BUeXBlcy5vYmplY3RdKSxwcmVmZXRjaDpQcm9wVHlwZXMuYm9vbCxyZXBsYWNlOlByb3BUeXBlcy5ib29sLHNoYWxsb3c6UHJvcFR5cGVzLmJvb2wscGFzc0hyZWY6UHJvcFR5cGVzLmJvb2wsc2Nyb2xsOlByb3BUeXBlcy5ib29sLGNoaWxkcmVuOlByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5lbGVtZW50LChwcm9wcyxwcm9wTmFtZSk9Pnt2YXIgdmFsdWU9cHJvcHNbcHJvcE5hbWVdO2lmKHR5cGVvZiB2YWx1ZT09PSdzdHJpbmcnKXt3YXJuKFwiV2FybmluZzogWW91J3JlIHVzaW5nIGEgc3RyaW5nIGRpcmVjdGx5IGluc2lkZSA8TGluaz4uIFRoaXMgdXNhZ2UgaGFzIGJlZW4gZGVwcmVjYXRlZC4gUGxlYXNlIGFkZCBhbiA8YT4gdGFnIGFzIGNoaWxkIG9mIDxMaW5rPlwiKTt9cmV0dXJuIG51bGw7fV0pLmlzUmVxdWlyZWR9KTt9dmFyIF9kZWZhdWx0PUxpbms7ZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnVzZVJvdXRlcj11c2VSb3V0ZXI7ZXhwb3J0cy5tYWtlUHVibGljUm91dGVySW5zdGFuY2U9bWFrZVB1YmxpY1JvdXRlckluc3RhbmNlO2V4cG9ydHMuY3JlYXRlUm91dGVyPWV4cG9ydHMud2l0aFJvdXRlcj1leHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfcm91dGVyMj1faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXJcIikpO2V4cG9ydHMuUm91dGVyPV9yb3V0ZXIyLmRlZmF1bHQ7ZXhwb3J0cy5OZXh0Um91dGVyPV9yb3V0ZXIyLk5leHRSb3V0ZXI7dmFyIF9yb3V0ZXJDb250ZXh0PXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHRcIik7dmFyIF93aXRoUm91dGVyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vd2l0aC1yb3V0ZXJcIikpO2V4cG9ydHMud2l0aFJvdXRlcj1fd2l0aFJvdXRlci5kZWZhdWx0Oy8qIGdsb2JhbCB3aW5kb3cgKi92YXIgc2luZ2xldG9uUm91dGVyPXtyb3V0ZXI6bnVsbCwvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxucmVhZHlDYWxsYmFja3M6W10scmVhZHkoY2Ipe2lmKHRoaXMucm91dGVyKXJldHVybiBjYigpO2lmKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJyl7dGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKTt9fX07Ly8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxudmFyIHVybFByb3BlcnR5RmllbGRzPVsncGF0aG5hbWUnLCdyb3V0ZScsJ3F1ZXJ5JywnYXNQYXRoJywnY29tcG9uZW50cycsJ2lzRmFsbGJhY2snLCdiYXNlUGF0aCddO3ZhciByb3V0ZXJFdmVudHM9Wydyb3V0ZUNoYW5nZVN0YXJ0JywnYmVmb3JlSGlzdG9yeUNoYW5nZScsJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCdyb3V0ZUNoYW5nZUVycm9yJywnaGFzaENoYW5nZVN0YXJ0JywnaGFzaENoYW5nZUNvbXBsZXRlJ107dmFyIGNvcmVNZXRob2RGaWVsZHM9WydwdXNoJywncmVwbGFjZScsJ3JlbG9hZCcsJ2JhY2snLCdwcmVmZXRjaCcsJ2JlZm9yZVBvcFN0YXRlJ107Ly8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwnZXZlbnRzJyx7Z2V0KCl7cmV0dXJuIF9yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzO319KTt1cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKGZpZWxkPT57Ly8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbi8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4vLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlcixmaWVsZCx7Z2V0KCl7dmFyIHJvdXRlcj1nZXRSb3V0ZXIoKTtyZXR1cm4gcm91dGVyW2ZpZWxkXTt9fSk7fSk7Y29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKGZpZWxkPT57Ly8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbjtzaW5nbGV0b25Sb3V0ZXJbZmllbGRdPWZ1bmN0aW9uKCl7dmFyIHJvdXRlcj1nZXRSb3V0ZXIoKTtyZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmd1bWVudHMpO307fSk7cm91dGVyRXZlbnRzLmZvckVhY2goZXZlbnQ9PntzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCk9Pntfcm91dGVyMi5kZWZhdWx0LmV2ZW50cy5vbihldmVudCxmdW5jdGlvbigpe3ZhciBldmVudEZpZWxkPVwib25cIitldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKStldmVudC5zdWJzdHJpbmcoMSk7dmFyIF9zaW5nbGV0b25Sb3V0ZXI9c2luZ2xldG9uUm91dGVyO2lmKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pe3RyeXtfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3VtZW50cyk7fWNhdGNoKGVycil7Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbmNvbnNvbGUuZXJyb3IoXCJFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogXCIrZXZlbnRGaWVsZCk7Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbmNvbnNvbGUuZXJyb3IoZXJyLm1lc3NhZ2UrXCJcXG5cIitlcnIuc3RhY2spO319fSk7fSk7fSk7ZnVuY3Rpb24gZ2V0Um91dGVyKCl7aWYoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpe3ZhciBtZXNzYWdlPSdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJysnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nO3Rocm93IG5ldyBFcnJvcihtZXNzYWdlKTt9cmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7fS8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxudmFyIF9kZWZhdWx0PXNpbmdsZXRvblJvdXRlcjsvLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0O2Z1bmN0aW9uIHVzZVJvdXRlcigpe3JldHVybiBfcmVhY3QuZGVmYXVsdC51c2VDb250ZXh0KF9yb3V0ZXJDb250ZXh0LlJvdXRlckNvbnRleHQpO30vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxudmFyIGNyZWF0ZVJvdXRlcj1mdW5jdGlvbiBjcmVhdGVSb3V0ZXIoKXtmb3IodmFyIF9sZW49YXJndW1lbnRzLmxlbmd0aCxhcmdzPW5ldyBBcnJheShfbGVuKSxfa2V5PTA7X2tleTxfbGVuO19rZXkrKyl7YXJnc1tfa2V5XT1hcmd1bWVudHNbX2tleV07fXNpbmdsZXRvblJvdXRlci5yb3V0ZXI9bmV3IF9yb3V0ZXIyLmRlZmF1bHQoLi4uYXJncyk7c2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goY2I9PmNiKCkpO3NpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcz1bXTtyZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjt9Oy8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydHMuY3JlYXRlUm91dGVyPWNyZWF0ZVJvdXRlcjtmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyKXt2YXIgX3JvdXRlcj1yb3V0ZXI7dmFyIGluc3RhbmNlPXt9O2Zvcih2YXIgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpe2lmKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XT09PSdvYmplY3QnKXtpbnN0YW5jZVtwcm9wZXJ0eV09T2JqZWN0LmFzc2lnbih7fSxfcm91dGVyW3Byb3BlcnR5XSk7Ly8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbmNvbnRpbnVlO31pbnN0YW5jZVtwcm9wZXJ0eV09X3JvdXRlcltwcm9wZXJ0eV07fS8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbmluc3RhbmNlLmV2ZW50cz1fcm91dGVyMi5kZWZhdWx0LmV2ZW50cztjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goZmllbGQ9PntpbnN0YW5jZVtmaWVsZF09ZnVuY3Rpb24oKXtyZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJndW1lbnRzKTt9O30pO3JldHVybiBpbnN0YW5jZTt9IiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD13aXRoUm91dGVyO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfcm91dGVyPXJlcXVpcmUoXCIuL3JvdXRlclwiKTtmdW5jdGlvbiB3aXRoUm91dGVyKENvbXBvc2VkQ29tcG9uZW50KXtmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wcyl7cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9zZWRDb21wb25lbnQsT2JqZWN0LmFzc2lnbih7cm91dGVyOigwLF9yb3V0ZXIudXNlUm91dGVyKSgpfSxwcm9wcykpO31XaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHM9Q29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuO1dpdGhSb3V0ZXJXcmFwcGVyLm9yaWdHZXRJbml0aWFsUHJvcHM9Q29tcG9zZWRDb21wb25lbnQub3JpZ0dldEluaXRpYWxQcm9wcztpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7dmFyIG5hbWU9Q29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWV8fENvbXBvc2VkQ29tcG9uZW50Lm5hbWV8fCdVbmtub3duJztXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZT1cIndpdGhSb3V0ZXIoXCIrbmFtZStcIilcIjt9cmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyO30iLCJcInVzZSBzdHJpY3RcIjtcbi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gbWl0dCgpIHtcbiAgICBjb25zdCBhbGwgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHJldHVybiB7XG4gICAgICAgIG9uKHR5cGUsIGhhbmRsZXIpIHtcbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIChhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKTtcbiAgICAgICAgfSxcbiAgICAgICAgb2ZmKHR5cGUsIGhhbmRsZXIpIHtcbiAgICAgICAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYml0d2lzZVxuICAgICAgICAgICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlbWl0KHR5cGUsIC4uLmV2dHMpIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIChhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyKSA9PiB7XG4gICAgICAgICAgICAgICAgaGFuZGxlciguLi5ldnRzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgIH07XG59XG5leHBvcnRzLmRlZmF1bHQgPSBtaXR0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB1cmxfMSA9IHJlcXVpcmUoXCJ1cmxcIik7XG5jb25zdCBtaXR0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL21pdHRcIikpO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmNvbnN0IGlzX2R5bmFtaWNfMSA9IHJlcXVpcmUoXCIuL3V0aWxzL2lzLWR5bmFtaWNcIik7XG5jb25zdCByb3V0ZV9tYXRjaGVyXzEgPSByZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1tYXRjaGVyXCIpO1xuY29uc3Qgcm91dGVfcmVnZXhfMSA9IHJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLXJlZ2V4XCIpO1xuY29uc3QgYmFzZVBhdGggPSBwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIHx8ICcnO1xuZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aCkge1xuICAgIHJldHVybiBwYXRoLmluZGV4T2YoYmFzZVBhdGgpICE9PSAwID8gYmFzZVBhdGggKyBwYXRoIDogcGF0aDtcbn1cbmV4cG9ydHMuYWRkQmFzZVBhdGggPSBhZGRCYXNlUGF0aDtcbmZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aC5pbmRleE9mKGJhc2VQYXRoKSA9PT0gMFxuICAgICAgICA/IHBhdGguc3Vic3RyKGJhc2VQYXRoLmxlbmd0aCkgfHwgJy8nXG4gICAgICAgIDogcGF0aDtcbn1cbmV4cG9ydHMuZGVsQmFzZVBhdGggPSBkZWxCYXNlUGF0aDtcbmZ1bmN0aW9uIHRvUm91dGUocGF0aCkge1xuICAgIHJldHVybiBwYXRoLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nO1xufVxuY29uc3QgcHJlcGFyZVJvdXRlID0gKHBhdGgpID0+IHRvUm91dGUoIXBhdGggfHwgcGF0aCA9PT0gJy8nID8gJy9pbmRleCcgOiBwYXRoKTtcbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEocGF0aG5hbWUsIHF1ZXJ5LCBpc1NlcnZlclJlbmRlciwgY2IpIHtcbiAgICBsZXQgYXR0ZW1wdHMgPSBpc1NlcnZlclJlbmRlciA/IDMgOiAxO1xuICAgIGZ1bmN0aW9uIGdldFJlc3BvbnNlKCkge1xuICAgICAgICByZXR1cm4gZmV0Y2godXRpbHNfMS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICBwYXRobmFtZTogYWRkQmFzZVBhdGgoXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlIF9fTkVYVF9EQVRBX19cbiAgICAgICAgICAgIGAvX25leHQvZGF0YS8ke19fTkVYVF9EQVRBX18uYnVpbGRJZH0ke2RlbEJhc2VQYXRoKHBhdGhuYW1lKX0uanNvbmApLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgIH0pLCB7XG4gICAgICAgICAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAgICAgICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAgICAgICAgIC8vID4gb3B0aW9uLlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgICAgICAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgICAgICAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgICB9KS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgICAgIGlmICgtLWF0dGVtcHRzID4gMCAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ2V0UmVzcG9uc2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGdldFJlc3BvbnNlKClcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIHJldHVybiBjYiA/IGNiKGRhdGEpIDogZGF0YTtcbiAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAgICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAgICAgLy8gbG9vcC5cbiAgICAgICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgICAgICAgO1xuICAgICAgICAgICAgZXJyLmNvZGUgPSAnUEFHRV9MT0FEX0VSUk9SJztcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBlcnI7XG4gICAgfSk7XG59XG5jbGFzcyBSb3V0ZXIge1xuICAgIGNvbnN0cnVjdG9yKHBhdGhuYW1lLCBxdWVyeSwgYXMsIHsgaW5pdGlhbFByb3BzLCBwYWdlTG9hZGVyLCBBcHAsIHdyYXBBcHAsIENvbXBvbmVudCwgZXJyLCBzdWJzY3JpcHRpb24sIGlzRmFsbGJhY2ssIH0pIHtcbiAgICAgICAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgICAgICAgdGhpcy5zZGMgPSB7fTtcbiAgICAgICAgdGhpcy5vblBvcFN0YXRlID0gKGUpID0+IHtcbiAgICAgICAgICAgIGlmICghZS5zdGF0ZSkge1xuICAgICAgICAgICAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgICAgICAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgICAgICAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAgICAgICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgICAgICAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgICAgICAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgICAgICAgICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpcztcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCB1dGlsc18xLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLCB1dGlsc18xLmdldFVSTCgpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAgICAgICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgICAgICAgICAgaWYgKGUuc3RhdGUgJiZcbiAgICAgICAgICAgICAgICB0aGlzLmlzU3NyICYmXG4gICAgICAgICAgICAgICAgZS5zdGF0ZS5hcyA9PT0gdGhpcy5hc1BhdGggJiZcbiAgICAgICAgICAgICAgICB1cmxfMS5wYXJzZShlLnN0YXRlLnVybCkucGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgICAgICAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgICAgICAgICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKGUuc3RhdGUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zIH0gPSBlLnN0YXRlO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHVybCA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGFzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ2Bwb3BzdGF0ZWAgZXZlbnQgdHJpZ2dlcmVkIGJ1dCBgZXZlbnQuc3RhdGVgIGRpZCBub3QgaGF2ZSBgdXJsYCBvciBgYXNgIGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9wb3BzdGF0ZS1zdGF0ZS1lbXB0eScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucmVwbGFjZSh1cmwsIGFzLCBvcHRpb25zKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fZ2V0U3RhdGljRGF0YSA9IChhc1BhdGgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhdGhuYW1lID0gcHJlcGFyZVJvdXRlKHVybF8xLnBhcnNlKGFzUGF0aCkucGF0aG5hbWUpO1xuICAgICAgICAgICAgcmV0dXJuIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgdGhpcy5zZGNbcGF0aG5hbWVdXG4gICAgICAgICAgICAgICAgPyBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbcGF0aG5hbWVdKVxuICAgICAgICAgICAgICAgIDogZmV0Y2hOZXh0RGF0YShwYXRobmFtZSwgbnVsbCwgdGhpcy5pc1NzciwgZGF0YSA9PiAodGhpcy5zZGNbcGF0aG5hbWVdID0gZGF0YSkpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9nZXRTZXJ2ZXJEYXRhID0gKGFzUGF0aCkgPT4ge1xuICAgICAgICAgICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB1cmxfMS5wYXJzZShhc1BhdGgsIHRydWUpO1xuICAgICAgICAgICAgcGF0aG5hbWUgPSBwcmVwYXJlUm91dGUocGF0aG5hbWUpO1xuICAgICAgICAgICAgcmV0dXJuIGZldGNoTmV4dERhdGEocGF0aG5hbWUsIHF1ZXJ5LCB0aGlzLmlzU3NyKTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgICAgIHRoaXMucm91dGUgPSB0b1JvdXRlKHBhdGhuYW1lKTtcbiAgICAgICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IHt9O1xuICAgICAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICAgICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICAgICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0geyBDb21wb25lbnQ6IEFwcCB9O1xuICAgICAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgICAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgICAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHM7XG4gICAgICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXI7XG4gICAgICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZTtcbiAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICAgICAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgICAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgICAgICB0aGlzLmFzUGF0aCA9XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICAgICAgICBpc19keW5hbWljXzEuaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXM7XG4gICAgICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aDtcbiAgICAgICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb247XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHA7XG4gICAgICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAgICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICAgICAgdGhpcy5pc1NzciA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2s7XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgICAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICAgICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgICAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCB1dGlsc18xLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLCBhcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIEBkZXByZWNhdGVkIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IGV2ZW4gdGhvdWdoIGl0J3MgYSBwcml2YXRlIG1ldGhvZC5cbiAgICBzdGF0aWMgX3Jld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHVybCkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAgICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydDtcbiAgICAgICAgICAgIHJldHVybiByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCh1cmwpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHVybDtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cGRhdGUocm91dGUsIG1vZCkge1xuICAgICAgICBjb25zdCBDb21wb25lbnQgPSBtb2QuZGVmYXVsdCB8fCBtb2Q7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdO1xuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IHVwZGF0ZSB1bmF2YWlsYWJsZSByb3V0ZTogJHtyb3V0ZX1gKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuZXdEYXRhID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBkYXRhKSwgeyBDb21wb25lbnQsIF9fTl9TU0c6IG1vZC5fX05fU1NHLCBfX05fU1NQOiBtb2QuX19OX1NTUCB9KTtcbiAgICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IG5ld0RhdGE7XG4gICAgICAgIC8vIHBhZ2VzL19hcHAuanMgdXBkYXRlZFxuICAgICAgICBpZiAocm91dGUgPT09ICcvX2FwcCcpIHtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJvdXRlID09PSB0aGlzLnJvdXRlKSB7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeShuZXdEYXRhKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZWxvYWQoKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAgICovXG4gICAgYmFjaygpIHtcbiAgICAgICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgICAqL1xuICAgIHB1c2godXJsLCBhcyA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAgICovXG4gICAgcmVwbGFjZSh1cmwsIGFzID0gdXJsLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgY2hhbmdlKG1ldGhvZCwgX3VybCwgX2FzLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMuX2gpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzU3NyID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgICAgICAgICBpZiAodXRpbHNfMS5TVCkge1xuICAgICAgICAgICAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgICAgICAgICAgIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gICAgICAgICAgICBsZXQgdXJsID0gdHlwZW9mIF91cmwgPT09ICdvYmplY3QnID8gdXRpbHNfMS5mb3JtYXRXaXRoVmFsaWRhdGlvbihfdXJsKSA6IF91cmw7XG4gICAgICAgICAgICBsZXQgYXMgPSB0eXBlb2YgX2FzID09PSAnb2JqZWN0JyA/IHV0aWxzXzEuZm9ybWF0V2l0aFZhbGlkYXRpb24oX2FzKSA6IF9hcztcbiAgICAgICAgICAgIHVybCA9IGFkZEJhc2VQYXRoKHVybCk7XG4gICAgICAgICAgICBhcyA9IGFkZEJhc2VQYXRoKGFzKTtcbiAgICAgICAgICAgIC8vIEFkZCB0aGUgZW5kaW5nIHNsYXNoIHRvIHRoZSBwYXRocy4gU28sIHdlIGNhbiBzZXJ2ZSB0aGVcbiAgICAgICAgICAgIC8vIFwiPHBhZ2U+L2luZGV4Lmh0bWxcIiBkaXJlY3RseSBmb3IgdGhlIFNTUiBwYWdlLlxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4vcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgICAgICAgICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydDtcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICAgICAgICAgICAgaWYgKF9fTkVYVF9EQVRBX18ubmV4dEV4cG9ydCkge1xuICAgICAgICAgICAgICAgICAgICBhcyA9IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KGFzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZChhcyk7XG4gICAgICAgICAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgICAgICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuICAgICAgICAgICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgICAgICAgICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgICAgICAgICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoYXMpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hc1BhdGggPSBhcztcbiAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxUb0hhc2goYXMpO1xuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnksIHByb3RvY29sIH0gPSB1cmxfMS5wYXJzZSh1cmwsIHRydWUpO1xuICAgICAgICAgICAgaWYgKCFwYXRobmFtZSB8fCBwcm90b2NvbCkge1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBocmVmIHBhc3NlZCB0byByb3V0ZXI6ICR7dXJsfSBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvaW52YWxpZC1ocmVmLXBhc3NlZGApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgICAgICAgICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgICAgICAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgICAgICAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgICAgICAgICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgICAgICAgICAgaWYgKCF0aGlzLnVybElzTmV3KGFzKSkge1xuICAgICAgICAgICAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgcm91dGUgPSB0b1JvdXRlKHBhdGhuYW1lKTtcbiAgICAgICAgICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zO1xuICAgICAgICAgICAgaWYgKGlzX2R5bmFtaWNfMS5pc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lOiBhc1BhdGhuYW1lIH0gPSB1cmxfMS5wYXJzZShhcyk7XG4gICAgICAgICAgICAgICAgY29uc3Qgcm91dGVSZWdleCA9IHJvdXRlX3JlZ2V4XzEuZ2V0Um91dGVSZWdleChyb3V0ZSk7XG4gICAgICAgICAgICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IHJvdXRlX21hdGNoZXJfMS5nZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKHBhcmFtID0+ICFxdWVyeVtwYXJhbV0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGAgZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChuZXcgRXJyb3IoYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2luY29tcGF0aWJsZS1ocmVmLWFzYCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcyk7XG4gICAgICAgICAgICAvLyBJZiBzaGFsbG93IGlzIHRydWUgYW5kIHRoZSByb3V0ZSBleGlzdHMgaW4gdGhlIHJvdXRlciBjYWNoZSB3ZSByZXVzZSB0aGUgcHJldmlvdXMgcmVzdWx0XG4gICAgICAgICAgICB0aGlzLmdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgc2hhbGxvdykudGhlbihyb3V0ZUluZm8gPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgZXJyb3IgfSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IgJiYgZXJyb3IuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhcHBDb21wID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudDtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIXJvdXRlSW5mby5Db21wb25lbnQuZ2V0SW5pdGlhbFByb3BzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVJbmZvKTtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGFzKTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgIH0sIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCB1dGlsc18xLmdldFVSTCgpICE9PSBhcykge1xuICAgICAgICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXSh7XG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGFzLFxuICAgICAgICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgICB9LCBcbiAgICAgICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICAgICAnJywgYXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgc2hhbGxvdyA9IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV07XG4gICAgICAgIC8vIElmIHRoZXJlIGlzIGEgc2hhbGxvdyByb3V0ZSB0cmFuc2l0aW9uIHBvc3NpYmxlXG4gICAgICAgIC8vIElmIHRoZSByb3V0ZSBpcyBhbHJlYWR5IHJlbmRlcmVkIG9uIHRoZSBzY3JlZW4uXG4gICAgICAgIGlmIChzaGFsbG93ICYmIGNhY2hlZFJvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShjYWNoZWRSb3V0ZUluZm8pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGhhbmRsZUVycm9yID0gKGVyciwgbG9hZEVycm9yRmFpbCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIuY29kZSA9PT0gJ1BBR0VfTE9BRF9FUlJPUicgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgICAgICAgICAgICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgICAgICAgICAgICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgICAgICAgICAgICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcbiAgICAgICAgICAgICAgICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXM7XG4gICAgICAgICAgICAgICAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgICAgICAgICAgICAgICAvLyBTbywgd2UgbmVlZCB0byBtYXJrIGl0IGFzIGEgY2FuY2VsbGVkIGVycm9yIGFuZCBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgICAgICAgICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBUT0RPOiBmaXggdGhlIGNvbnRyb2wgZmxvdyBoZXJlXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHsgZXJyb3I6IGVyciB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBUT0RPOiBmaXggdGhlIGNvbnRyb2wgZmxvdyBoZXJlXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHsgZXJyb3I6IGVyciB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLmZldGNoQ29tcG9uZW50KCcvX2Vycm9yJylcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBwYWdlOiBDb21wb25lbnQgfSA9IHJlcztcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm91dGVJbmZvID0geyBDb21wb25lbnQsIGVyciB9O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS50aGVuKHByb3BzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8uZXJyb3IgPSBlcnI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyb3V0ZUluZm8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgZ2lwRXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5lcnJvciA9IGVycjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJvdXRlSW5mbyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBoYW5kbGVFcnJvcihlcnIsIHRydWUpKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGlmIChjYWNoZWRSb3V0ZUluZm8pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShjYWNoZWRSb3V0ZUluZm8pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbihyZXMgPT4gcmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgICAgfSksIHJlamVjdCk7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigocm91dGVJbmZvKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcbiAgICAgICAgICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZ2V0RGF0YSgoKSA9PiBfX05fU1NHXG4gICAgICAgICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGFzKVxuICAgICAgICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgICAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoYXMpXG4gICAgICAgICAgICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBcbiAgICAgICAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgICAgICAgIH0pKS50aGVuKHByb3BzID0+IHtcbiAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wcztcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgICAgIHJldHVybiByb3V0ZUluZm87XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChoYW5kbGVFcnJvcik7XG4gICAgfVxuICAgIHNldChyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgZGF0YSkge1xuICAgICAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yb3V0ZSA9IHJvdXRlO1xuICAgICAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWU7XG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgICAgICAgdGhpcy5hc1BhdGggPSBhcztcbiAgICAgICAgdGhpcy5ub3RpZnkoZGF0YSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICAgKi9cbiAgICBiZWZvcmVQb3BTdGF0ZShjYikge1xuICAgICAgICB0aGlzLl9icHMgPSBjYjtcbiAgICB9XG4gICAgb25seUFIYXNoQ2hhbmdlKGFzKSB7XG4gICAgICAgIGlmICghdGhpcy5hc1BhdGgpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKTtcbiAgICAgICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpO1xuICAgICAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICAgICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAgICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAgICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICAgICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2g7XG4gICAgfVxuICAgIHNjcm9sbFRvSGFzaChhcykge1xuICAgICAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJyk7XG4gICAgICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgICAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgICAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaCk7XG4gICAgICAgIGlmIChpZEVsKSB7XG4gICAgICAgICAgICBpZEVsLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgICAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXTtcbiAgICAgICAgaWYgKG5hbWVFbCkge1xuICAgICAgICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXJsSXNOZXcoYXNQYXRoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICAgKi9cbiAgICBwcmVmZXRjaCh1cmwsIGFzUGF0aCA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lLCBwcm90b2NvbCB9ID0gdXJsXzEucGFyc2UodXJsKTtcbiAgICAgICAgICAgIGlmICghcGF0aG5hbWUgfHwgcHJvdG9jb2wpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gcm91dGVyOiAke3VybH0gaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2ludmFsaWQtaHJlZi1wYXNzZWRgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByb3V0ZSA9IGRlbEJhc2VQYXRoKHRvUm91dGUocGF0aG5hbWUpKTtcbiAgICAgICAgICAgIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXIucHJlZmV0Y2hEYXRhKHVybCwgZGVsQmFzZVBhdGgoYXNQYXRoKSksXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgICAgICAgICAgXSkudGhlbigoKSA9PiByZXNvbHZlKCksIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZSkge1xuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgICByb3V0ZSA9IGRlbEJhc2VQYXRoKHJvdXRlKTtcbiAgICAgICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKTtcbiAgICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImApO1xuICAgICAgICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdDtcbiAgICB9XG4gICAgX2dldERhdGEoZm4pIHtcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNsYyA9IGNhbmNlbDtcbiAgICAgICAgcmV0dXJuIGZuKCkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpO1xuICAgICAgICAgICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwgY3R4KSB7XG4gICAgICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXTtcbiAgICAgICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwKTtcbiAgICAgICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlO1xuICAgICAgICByZXR1cm4gdXRpbHNfMS5sb2FkR2V0SW5pdGlhbFByb3BzKEFwcCwge1xuICAgICAgICAgICAgQXBwVHJlZSxcbiAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgICAgICAgIGN0eCxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFib3J0Q29tcG9uZW50TG9hZChhcykge1xuICAgICAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgICAgICAgIGNvbnN0IGUgPSBuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpO1xuICAgICAgICAgICAgZS5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZSwgYXMpO1xuICAgICAgICAgICAgdGhpcy5jbGMoKTtcbiAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBub3RpZnkoZGF0YSkge1xuICAgICAgICB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50KTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBSb3V0ZXI7XG5Sb3V0ZXIuZXZlbnRzID0gbWl0dF8xLmRlZmF1bHQoKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvO1xuZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGUpIHtcbiAgICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKTtcbn1cbmV4cG9ydHMuaXNEeW5hbWljUm91dGUgPSBpc0R5bmFtaWNSb3V0ZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpIHtcbiAgICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXg7XG4gICAgcmV0dXJuIChwYXRobmFtZSkgPT4ge1xuICAgICAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSk7XG4gICAgICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbSkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChfKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKCdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJyk7XG4gICAgICAgICAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCc7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBwYXJhbXMgPSB7fTtcbiAgICAgICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV07XG4gICAgICAgICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc107XG4gICAgICAgICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgICAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoZW50cnkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICAgICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBkZWNvZGUobSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcGFyYW1zO1xuICAgIH07XG59XG5leHBvcnRzLmdldFJvdXRlTWF0Y2hlciA9IGdldFJvdXRlTWF0Y2hlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJyk7XG59XG5mdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KG5vcm1hbGl6ZWRSb3V0ZSkge1xuICAgIC8vIEVzY2FwZSBhbGwgY2hhcmFjdGVycyB0aGF0IGNvdWxkIGJlIGNvbnNpZGVyZWQgUmVnRXhcbiAgICBjb25zdCBlc2NhcGVkUm91dGUgPSBlc2NhcGVSZWdleChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpO1xuICAgIGNvbnN0IGdyb3VwcyA9IHt9O1xuICAgIGxldCBncm91cEluZGV4ID0gMTtcbiAgICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBlc2NhcGVkUm91dGUucmVwbGFjZSgvXFwvXFxcXFxcWyhbXi9dKz8pXFxcXFxcXSg/PVxcL3wkKS9nLCAoXywgJDEpID0+IHtcbiAgICAgICAgY29uc3QgaXNDYXRjaEFsbCA9IC9eKFxcXFxcXC4pezN9Ly50ZXN0KCQxKTtcbiAgICAgICAgZ3JvdXBzWyQxXG4gICAgICAgICAgICAvLyBVbi1lc2NhcGUga2V5XG4gICAgICAgICAgICAucmVwbGFjZSgvXFxcXChbfFxcXFx7fSgpW1xcXV4kKyo/Li1dKS9nLCAnJDEnKVxuICAgICAgICAgICAgLnJlcGxhY2UoL15cXC57M30vLCAnJylcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgICBdID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0OiBpc0NhdGNoQWxsIH07XG4gICAgICAgIHJldHVybiBpc0NhdGNoQWxsID8gJy8oLis/KScgOiAnLyhbXi9dKz8pJztcbiAgICB9KTtcbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGU7XG4gICAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gICAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBlc2NhcGVkUm91dGUucmVwbGFjZSgvXFwvXFxcXFxcWyhbXi9dKz8pXFxcXFxcXSg/PVxcL3wkKS9nLCAoXywgJDEpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlzQ2F0Y2hBbGwgPSAvXihcXFxcXFwuKXszfS8udGVzdCgkMSk7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSAkMVxuICAgICAgICAgICAgICAgIC8vIFVuLWVzY2FwZSBrZXlcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFxcXChbfFxcXFx7fSgpW1xcXV4kKyo/Li1dKS9nLCAnJDEnKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9eXFwuezN9LywgJycpO1xuICAgICAgICAgICAgcmV0dXJuIGlzQ2F0Y2hBbGxcbiAgICAgICAgICAgICAgICA/IGAvKD88JHtlc2NhcGVSZWdleChrZXkpfT4uKz8pYFxuICAgICAgICAgICAgICAgIDogYC8oPzwke2VzY2FwZVJlZ2V4KGtleSl9PlteL10rPylgO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oeyByZTogbmV3IFJlZ0V4cCgnXicgKyBwYXJhbWV0ZXJpemVkUm91dGUgKyAnKD86Lyk/JCcsICdpJyksIGdyb3VwcyB9LCAobmFtZWRQYXJhbWV0ZXJpemVkUm91dGVcbiAgICAgICAgPyB7XG4gICAgICAgICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgICAgIH1cbiAgICAgICAgOiB7fSkpO1xufVxuZXhwb3J0cy5nZXRSb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdXJsXzEgPSByZXF1aXJlKFwidXJsXCIpO1xuLyoqXG4gKiBVdGlsc1xuICovXG5mdW5jdGlvbiBleGVjT25jZShmbikge1xuICAgIGxldCB1c2VkID0gZmFsc2U7XG4gICAgbGV0IHJlc3VsdDtcbiAgICByZXR1cm4gKCguLi5hcmdzKSA9PiB7XG4gICAgICAgIGlmICghdXNlZCkge1xuICAgICAgICAgICAgdXNlZCA9IHRydWU7XG4gICAgICAgICAgICByZXN1bHQgPSBmbiguLi5hcmdzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pO1xufVxuZXhwb3J0cy5leGVjT25jZSA9IGV4ZWNPbmNlO1xuZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gICAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvbjtcbiAgICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gO1xufVxuZXhwb3J0cy5nZXRMb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luO1xuZnVuY3Rpb24gZ2V0VVJMKCkge1xuICAgIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uO1xuICAgIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKCk7XG4gICAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpO1xufVxuZXhwb3J0cy5nZXRVUkwgPSBnZXRVUkw7XG5mdW5jdGlvbiBnZXREaXNwbGF5TmFtZShDb21wb25lbnQpIHtcbiAgICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICAgICAgPyBDb21wb25lbnRcbiAgICAgICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nO1xufVxuZXhwb3J0cy5nZXREaXNwbGF5TmFtZSA9IGdldERpc3BsYXlOYW1lO1xuZnVuY3Rpb24gaXNSZXNTZW50KHJlcykge1xuICAgIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50O1xufVxuZXhwb3J0cy5pc1Jlc1NlbnQgPSBpc1Jlc1NlbnQ7XG5hc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzKEFwcCwgY3R4KSB7XG4gICAgdmFyIF9hO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmICgoX2EgPSBBcHAucHJvdG90eXBlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShBcHApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKTtcbiAgICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gICAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eCk7XG4gICAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgICAgICByZXR1cm4gcHJvcHM7XG4gICAgfVxuICAgIGlmICghcHJvcHMpIHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoQXBwKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYCR7Z2V0RGlzcGxheU5hbWUoQXBwKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHByb3BzO1xufVxuZXhwb3J0cy5sb2FkR2V0SW5pdGlhbFByb3BzID0gbG9hZEdldEluaXRpYWxQcm9wcztcbmV4cG9ydHMudXJsT2JqZWN0S2V5cyA9IFtcbiAgICAnYXV0aCcsXG4gICAgJ2hhc2gnLFxuICAgICdob3N0JyxcbiAgICAnaG9zdG5hbWUnLFxuICAgICdocmVmJyxcbiAgICAncGF0aCcsXG4gICAgJ3BhdGhuYW1lJyxcbiAgICAncG9ydCcsXG4gICAgJ3Byb3RvY29sJyxcbiAgICAncXVlcnknLFxuICAgICdzZWFyY2gnLFxuICAgICdzbGFzaGVzJyxcbl07XG5mdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmwsIG9wdGlvbnMpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGV4cG9ydHMudXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdXJsXzEuZm9ybWF0KHVybCwgb3B0aW9ucyk7XG59XG5leHBvcnRzLmZvcm1hdFdpdGhWYWxpZGF0aW9uID0gZm9ybWF0V2l0aFZhbGlkYXRpb247XG5leHBvcnRzLlNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJztcbmV4cG9ydHMuU1QgPSBleHBvcnRzLlNQICYmXG4gICAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJztcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24oKSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gcmVxdWlyZSgnLi9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcbiAgdmFyIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xuICB2YXIgaGFzID0gRnVuY3Rpb24uY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xuXG4gIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKHRleHQpIHtcbiAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgdGV4dDtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9O1xufVxuXG4vKipcbiAqIEFzc2VydCB0aGF0IHRoZSB2YWx1ZXMgbWF0Y2ggd2l0aCB0aGUgdHlwZSBzcGVjcy5cbiAqIEVycm9yIG1lc3NhZ2VzIGFyZSBtZW1vcml6ZWQgYW5kIHdpbGwgb25seSBiZSBzaG93biBvbmNlLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0eXBlU3BlY3MgTWFwIG9mIG5hbWUgdG8gYSBSZWFjdFByb3BUeXBlXG4gKiBAcGFyYW0ge29iamVjdH0gdmFsdWVzIFJ1bnRpbWUgdmFsdWVzIHRoYXQgbmVlZCB0byBiZSB0eXBlLWNoZWNrZWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhdGlvbiBlLmcuIFwicHJvcFwiLCBcImNvbnRleHRcIiwgXCJjaGlsZCBjb250ZXh0XCJcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb21wb25lbnROYW1lIE5hbWUgb2YgdGhlIGNvbXBvbmVudCBmb3IgZXJyb3IgbWVzc2FnZXMuXG4gKiBAcGFyYW0gez9GdW5jdGlvbn0gZ2V0U3RhY2sgUmV0dXJucyB0aGUgY29tcG9uZW50IHN0YWNrLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY2hlY2tQcm9wVHlwZXModHlwZVNwZWNzLCB2YWx1ZXMsIGxvY2F0aW9uLCBjb21wb25lbnROYW1lLCBnZXRTdGFjaykge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZvciAodmFyIHR5cGVTcGVjTmFtZSBpbiB0eXBlU3BlY3MpIHtcbiAgICAgIGlmIChoYXModHlwZVNwZWNzLCB0eXBlU3BlY05hbWUpKSB7XG4gICAgICAgIHZhciBlcnJvcjtcbiAgICAgICAgLy8gUHJvcCB0eXBlIHZhbGlkYXRpb24gbWF5IHRocm93LiBJbiBjYXNlIHRoZXkgZG8sIHdlIGRvbid0IHdhbnQgdG9cbiAgICAgICAgLy8gZmFpbCB0aGUgcmVuZGVyIHBoYXNlIHdoZXJlIGl0IGRpZG4ndCBmYWlsIGJlZm9yZS4gU28gd2UgbG9nIGl0LlxuICAgICAgICAvLyBBZnRlciB0aGVzZSBoYXZlIGJlZW4gY2xlYW5lZCB1cCwgd2UnbGwgbGV0IHRoZW0gdGhyb3cuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyBpcyBpbnRlbnRpb25hbGx5IGFuIGludmFyaWFudCB0aGF0IGdldHMgY2F1Z2h0LiBJdCdzIHRoZSBzYW1lXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYXMgd2l0aG91dCB0aGlzIHN0YXRlbWVudCBleGNlcHQgd2l0aCBhIGJldHRlciBtZXNzYWdlLlxuICAgICAgICAgIGlmICh0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHZhciBlcnIgPSBFcnJvcihcbiAgICAgICAgICAgICAgKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiAnICsgbG9jYXRpb24gKyAnIHR5cGUgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyAnICtcbiAgICAgICAgICAgICAgJ2l0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tIHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZSwgYnV0IHJlY2VpdmVkIGAnICsgdHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICsgJ2AuJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlcnJvciA9IHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdKHZhbHVlcywgdHlwZVNwZWNOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgbnVsbCwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgIGVycm9yID0gZXg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVycm9yICYmICEoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikpIHtcbiAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAoY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnKSArICc6IHR5cGUgc3BlY2lmaWNhdGlvbiBvZiAnICtcbiAgICAgICAgICAgIGxvY2F0aW9uICsgJyBgJyArIHR5cGVTcGVjTmFtZSArICdgIGlzIGludmFsaWQ7IHRoZSB0eXBlIGNoZWNrZXIgJyArXG4gICAgICAgICAgICAnZnVuY3Rpb24gbXVzdCByZXR1cm4gYG51bGxgIG9yIGFuIGBFcnJvcmAgYnV0IHJldHVybmVkIGEgJyArIHR5cGVvZiBlcnJvciArICcuICcgK1xuICAgICAgICAgICAgJ1lvdSBtYXkgaGF2ZSBmb3Jnb3R0ZW4gdG8gcGFzcyBhbiBhcmd1bWVudCB0byB0aGUgdHlwZSBjaGVja2VyICcgK1xuICAgICAgICAgICAgJ2NyZWF0b3IgKGFycmF5T2YsIGluc3RhbmNlT2YsIG9iamVjdE9mLCBvbmVPZiwgb25lT2ZUeXBlLCBhbmQgJyArXG4gICAgICAgICAgICAnc2hhcGUgYWxsIHJlcXVpcmUgYW4gYXJndW1lbnQpLidcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yICYmICEoZXJyb3IubWVzc2FnZSBpbiBsb2dnZWRUeXBlRmFpbHVyZXMpKSB7XG4gICAgICAgICAgLy8gT25seSBtb25pdG9yIHRoaXMgZmFpbHVyZSBvbmNlIGJlY2F1c2UgdGhlcmUgdGVuZHMgdG8gYmUgYSBsb3Qgb2YgdGhlXG4gICAgICAgICAgLy8gc2FtZSBlcnJvci5cbiAgICAgICAgICBsb2dnZWRUeXBlRmFpbHVyZXNbZXJyb3IubWVzc2FnZV0gPSB0cnVlO1xuXG4gICAgICAgICAgdmFyIHN0YWNrID0gZ2V0U3RhY2sgPyBnZXRTdGFjaygpIDogJyc7XG5cbiAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAnRmFpbGVkICcgKyBsb2NhdGlvbiArICcgdHlwZTogJyArIGVycm9yLm1lc3NhZ2UgKyAoc3RhY2sgIT0gbnVsbCA/IHN0YWNrIDogJycpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFJlc2V0cyB3YXJuaW5nIGNhY2hlIHdoZW4gdGVzdGluZy5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5jaGVja1Byb3BUeXBlcy5yZXNldFdhcm5pbmdDYWNoZSA9IGZ1bmN0aW9uKCkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2hlY2tQcm9wVHlwZXM7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0SXMgPSByZXF1aXJlKCdyZWFjdC1pcycpO1xudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gcmVxdWlyZSgnLi9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcbnZhciBjaGVja1Byb3BUeXBlcyA9IHJlcXVpcmUoJy4vY2hlY2tQcm9wVHlwZXMnKTtcblxudmFyIGhhcyA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcbnZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbigpIHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBwcmludFdhcm5pbmcgPSBmdW5jdGlvbih0ZXh0KSB7XG4gICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIHRleHQ7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfTtcbn1cblxuZnVuY3Rpb24gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbCgpIHtcbiAgcmV0dXJuIG51bGw7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXNWYWxpZEVsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpIHtcbiAgLyogZ2xvYmFsIFN5bWJvbCAqL1xuICB2YXIgSVRFUkFUT1JfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuaXRlcmF0b3I7XG4gIHZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJzsgLy8gQmVmb3JlIFN5bWJvbCBzcGVjLlxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpdGVyYXRvciBtZXRob2QgZnVuY3Rpb24gY29udGFpbmVkIG9uIHRoZSBpdGVyYWJsZSBvYmplY3QuXG4gICAqXG4gICAqIEJlIHN1cmUgdG8gaW52b2tlIHRoZSBmdW5jdGlvbiB3aXRoIHRoZSBpdGVyYWJsZSBhcyBjb250ZXh0OlxuICAgKlxuICAgKiAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG15SXRlcmFibGUpO1xuICAgKiAgICAgaWYgKGl0ZXJhdG9yRm4pIHtcbiAgICogICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG15SXRlcmFibGUpO1xuICAgKiAgICAgICAuLi5cbiAgICogICAgIH1cbiAgICpcbiAgICogQHBhcmFtIHs/b2JqZWN0fSBtYXliZUl0ZXJhYmxlXG4gICAqIEByZXR1cm4gez9mdW5jdGlvbn1cbiAgICovXG4gIGZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICAgIHZhciBpdGVyYXRvckZuID0gbWF5YmVJdGVyYWJsZSAmJiAoSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbSVRFUkFUT1JfU1lNQk9MXSB8fCBtYXliZUl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXSk7XG4gICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gaXRlcmF0b3JGbjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ29sbGVjdGlvbiBvZiBtZXRob2RzIHRoYXQgYWxsb3cgZGVjbGFyYXRpb24gYW5kIHZhbGlkYXRpb24gb2YgcHJvcHMgdGhhdCBhcmVcbiAgICogc3VwcGxpZWQgdG8gUmVhY3QgY29tcG9uZW50cy4gRXhhbXBsZSB1c2FnZTpcbiAgICpcbiAgICogICB2YXIgUHJvcHMgPSByZXF1aXJlKCdSZWFjdFByb3BUeXBlcycpO1xuICAgKiAgIHZhciBNeUFydGljbGUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAqICAgICBwcm9wVHlwZXM6IHtcbiAgICogICAgICAgLy8gQW4gb3B0aW9uYWwgc3RyaW5nIHByb3AgbmFtZWQgXCJkZXNjcmlwdGlvblwiLlxuICAgKiAgICAgICBkZXNjcmlwdGlvbjogUHJvcHMuc3RyaW5nLFxuICAgKlxuICAgKiAgICAgICAvLyBBIHJlcXVpcmVkIGVudW0gcHJvcCBuYW1lZCBcImNhdGVnb3J5XCIuXG4gICAqICAgICAgIGNhdGVnb3J5OiBQcm9wcy5vbmVPZihbJ05ld3MnLCdQaG90b3MnXSkuaXNSZXF1aXJlZCxcbiAgICpcbiAgICogICAgICAgLy8gQSBwcm9wIG5hbWVkIFwiZGlhbG9nXCIgdGhhdCByZXF1aXJlcyBhbiBpbnN0YW5jZSBvZiBEaWFsb2cuXG4gICAqICAgICAgIGRpYWxvZzogUHJvcHMuaW5zdGFuY2VPZihEaWFsb2cpLmlzUmVxdWlyZWRcbiAgICogICAgIH0sXG4gICAqICAgICByZW5kZXI6IGZ1bmN0aW9uKCkgeyAuLi4gfVxuICAgKiAgIH0pO1xuICAgKlxuICAgKiBBIG1vcmUgZm9ybWFsIHNwZWNpZmljYXRpb24gb2YgaG93IHRoZXNlIG1ldGhvZHMgYXJlIHVzZWQ6XG4gICAqXG4gICAqICAgdHlwZSA6PSBhcnJheXxib29sfGZ1bmN8b2JqZWN0fG51bWJlcnxzdHJpbmd8b25lT2YoWy4uLl0pfGluc3RhbmNlT2YoLi4uKVxuICAgKiAgIGRlY2wgOj0gUmVhY3RQcm9wVHlwZXMue3R5cGV9KC5pc1JlcXVpcmVkKT9cbiAgICpcbiAgICogRWFjaCBhbmQgZXZlcnkgZGVjbGFyYXRpb24gcHJvZHVjZXMgYSBmdW5jdGlvbiB3aXRoIHRoZSBzYW1lIHNpZ25hdHVyZS4gVGhpc1xuICAgKiBhbGxvd3MgdGhlIGNyZWF0aW9uIG9mIGN1c3RvbSB2YWxpZGF0aW9uIGZ1bmN0aW9ucy4gRm9yIGV4YW1wbGU6XG4gICAqXG4gICAqICB2YXIgTXlMaW5rID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgKiAgICBwcm9wVHlwZXM6IHtcbiAgICogICAgICAvLyBBbiBvcHRpb25hbCBzdHJpbmcgb3IgVVJJIHByb3AgbmFtZWQgXCJocmVmXCIuXG4gICAqICAgICAgaHJlZjogZnVuY3Rpb24ocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gICAqICAgICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgKiAgICAgICAgaWYgKHByb3BWYWx1ZSAhPSBudWxsICYmIHR5cGVvZiBwcm9wVmFsdWUgIT09ICdzdHJpbmcnICYmXG4gICAqICAgICAgICAgICAgIShwcm9wVmFsdWUgaW5zdGFuY2VvZiBVUkkpKSB7XG4gICAqICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAqICAgICAgICAgICAgJ0V4cGVjdGVkIGEgc3RyaW5nIG9yIGFuIFVSSSBmb3IgJyArIHByb3BOYW1lICsgJyBpbiAnICtcbiAgICogICAgICAgICAgICBjb21wb25lbnROYW1lXG4gICAqICAgICAgICAgICk7XG4gICAqICAgICAgICB9XG4gICAqICAgICAgfVxuICAgKiAgICB9LFxuICAgKiAgICByZW5kZXI6IGZ1bmN0aW9uKCkgey4uLn1cbiAgICogIH0pO1xuICAgKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG5cbiAgdmFyIEFOT05ZTU9VUyA9ICc8PGFub255bW91cz4+JztcblxuICAvLyBJbXBvcnRhbnQhXG4gIC8vIEtlZXAgdGhpcyBsaXN0IGluIHN5bmMgd2l0aCBwcm9kdWN0aW9uIHZlcnNpb24gaW4gYC4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzYC5cbiAgdmFyIFJlYWN0UHJvcFR5cGVzID0ge1xuICAgIGFycmF5OiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignYXJyYXknKSxcbiAgICBib29sOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignYm9vbGVhbicpLFxuICAgIGZ1bmM6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdmdW5jdGlvbicpLFxuICAgIG51bWJlcjogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ251bWJlcicpLFxuICAgIG9iamVjdDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ29iamVjdCcpLFxuICAgIHN0cmluZzogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ3N0cmluZycpLFxuICAgIHN5bWJvbDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ3N5bWJvbCcpLFxuXG4gICAgYW55OiBjcmVhdGVBbnlUeXBlQ2hlY2tlcigpLFxuICAgIGFycmF5T2Y6IGNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlcixcbiAgICBlbGVtZW50OiBjcmVhdGVFbGVtZW50VHlwZUNoZWNrZXIoKSxcbiAgICBlbGVtZW50VHlwZTogY3JlYXRlRWxlbWVudFR5cGVUeXBlQ2hlY2tlcigpLFxuICAgIGluc3RhbmNlT2Y6IGNyZWF0ZUluc3RhbmNlVHlwZUNoZWNrZXIsXG4gICAgbm9kZTogY3JlYXRlTm9kZUNoZWNrZXIoKSxcbiAgICBvYmplY3RPZjogY3JlYXRlT2JqZWN0T2ZUeXBlQ2hlY2tlcixcbiAgICBvbmVPZjogY3JlYXRlRW51bVR5cGVDaGVja2VyLFxuICAgIG9uZU9mVHlwZTogY3JlYXRlVW5pb25UeXBlQ2hlY2tlcixcbiAgICBzaGFwZTogY3JlYXRlU2hhcGVUeXBlQ2hlY2tlcixcbiAgICBleGFjdDogY3JlYXRlU3RyaWN0U2hhcGVUeXBlQ2hlY2tlcixcbiAgfTtcblxuICAvKipcbiAgICogaW5saW5lZCBPYmplY3QuaXMgcG9seWZpbGwgdG8gYXZvaWQgcmVxdWlyaW5nIGNvbnN1bWVycyBzaGlwIHRoZWlyIG93blxuICAgKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9PYmplY3QvaXNcbiAgICovXG4gIC8qZXNsaW50LWRpc2FibGUgbm8tc2VsZi1jb21wYXJlKi9cbiAgZnVuY3Rpb24gaXMoeCwgeSkge1xuICAgIC8vIFNhbWVWYWx1ZSBhbGdvcml0aG1cbiAgICBpZiAoeCA9PT0geSkge1xuICAgICAgLy8gU3RlcHMgMS01LCA3LTEwXG4gICAgICAvLyBTdGVwcyA2LmItNi5lOiArMCAhPSAtMFxuICAgICAgcmV0dXJuIHggIT09IDAgfHwgMSAvIHggPT09IDEgLyB5O1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTdGVwIDYuYTogTmFOID09IE5hTlxuICAgICAgcmV0dXJuIHggIT09IHggJiYgeSAhPT0geTtcbiAgICB9XG4gIH1cbiAgLyplc2xpbnQtZW5hYmxlIG5vLXNlbGYtY29tcGFyZSovXG5cbiAgLyoqXG4gICAqIFdlIHVzZSBhbiBFcnJvci1saWtlIG9iamVjdCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSBhcyBwZW9wbGUgbWF5IGNhbGxcbiAgICogUHJvcFR5cGVzIGRpcmVjdGx5IGFuZCBpbnNwZWN0IHRoZWlyIG91dHB1dC4gSG93ZXZlciwgd2UgZG9uJ3QgdXNlIHJlYWxcbiAgICogRXJyb3JzIGFueW1vcmUuIFdlIGRvbid0IGluc3BlY3QgdGhlaXIgc3RhY2sgYW55d2F5LCBhbmQgY3JlYXRpbmcgdGhlbVxuICAgKiBpcyBwcm9oaWJpdGl2ZWx5IGV4cGVuc2l2ZSBpZiB0aGV5IGFyZSBjcmVhdGVkIHRvbyBvZnRlbiwgc3VjaCBhcyB3aGF0XG4gICAqIGhhcHBlbnMgaW4gb25lT2ZUeXBlKCkgZm9yIGFueSB0eXBlIGJlZm9yZSB0aGUgb25lIHRoYXQgbWF0Y2hlZC5cbiAgICovXG4gIGZ1bmN0aW9uIFByb3BUeXBlRXJyb3IobWVzc2FnZSkge1xuICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgdGhpcy5zdGFjayA9ICcnO1xuICB9XG4gIC8vIE1ha2UgYGluc3RhbmNlb2YgRXJyb3JgIHN0aWxsIHdvcmsgZm9yIHJldHVybmVkIGVycm9ycy5cbiAgUHJvcFR5cGVFcnJvci5wcm90b3R5cGUgPSBFcnJvci5wcm90b3R5cGU7XG5cbiAgZnVuY3Rpb24gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdmFyIG1hbnVhbFByb3BUeXBlQ2FsbENhY2hlID0ge307XG4gICAgICB2YXIgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQgPSAwO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjaGVja1R5cGUoaXNSZXF1aXJlZCwgcHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICAgIGNvbXBvbmVudE5hbWUgPSBjb21wb25lbnROYW1lIHx8IEFOT05ZTU9VUztcbiAgICAgIHByb3BGdWxsTmFtZSA9IHByb3BGdWxsTmFtZSB8fCBwcm9wTmFtZTtcblxuICAgICAgaWYgKHNlY3JldCAhPT0gUmVhY3RQcm9wVHlwZXNTZWNyZXQpIHtcbiAgICAgICAgaWYgKHRocm93T25EaXJlY3RBY2Nlc3MpIHtcbiAgICAgICAgICAvLyBOZXcgYmVoYXZpb3Igb25seSBmb3IgdXNlcnMgb2YgYHByb3AtdHlwZXNgIHBhY2thZ2VcbiAgICAgICAgICB2YXIgZXJyID0gbmV3IEVycm9yKFxuICAgICAgICAgICAgJ0NhbGxpbmcgUHJvcFR5cGVzIHZhbGlkYXRvcnMgZGlyZWN0bHkgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgICAgICAgJ1VzZSBgUHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzKClgIHRvIGNhbGwgdGhlbS4gJyArXG4gICAgICAgICAgICAnUmVhZCBtb3JlIGF0IGh0dHA6Ly9mYi5tZS91c2UtY2hlY2stcHJvcC10eXBlcydcbiAgICAgICAgICApO1xuICAgICAgICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIC8vIE9sZCBiZWhhdmlvciBmb3IgcGVvcGxlIHVzaW5nIFJlYWN0LlByb3BUeXBlc1xuICAgICAgICAgIHZhciBjYWNoZUtleSA9IGNvbXBvbmVudE5hbWUgKyAnOicgKyBwcm9wTmFtZTtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAhbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGVbY2FjaGVLZXldICYmXG4gICAgICAgICAgICAvLyBBdm9pZCBzcGFtbWluZyB0aGUgY29uc29sZSBiZWNhdXNlIHRoZXkgYXJlIG9mdGVuIG5vdCBhY3Rpb25hYmxlIGV4Y2VwdCBmb3IgbGliIGF1dGhvcnNcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50IDwgM1xuICAgICAgICAgICkge1xuICAgICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgICAnWW91IGFyZSBtYW51YWxseSBjYWxsaW5nIGEgUmVhY3QuUHJvcFR5cGVzIHZhbGlkYXRpb24gJyArXG4gICAgICAgICAgICAgICdmdW5jdGlvbiBmb3IgdGhlIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgcHJvcCBvbiBgJyArIGNvbXBvbmVudE5hbWUgICsgJ2AuIFRoaXMgaXMgZGVwcmVjYXRlZCAnICtcbiAgICAgICAgICAgICAgJ2FuZCB3aWxsIHRocm93IGluIHRoZSBzdGFuZGFsb25lIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICAgICAgICAgJ1lvdSBtYXkgYmUgc2VlaW5nIHRoaXMgd2FybmluZyBkdWUgdG8gYSB0aGlyZC1wYXJ0eSBQcm9wVHlwZXMgJyArXG4gICAgICAgICAgICAgICdsaWJyYXJ5LiBTZWUgaHR0cHM6Ly9mYi5tZS9yZWFjdC13YXJuaW5nLWRvbnQtY2FsbC1wcm9wdHlwZXMgJyArICdmb3IgZGV0YWlscy4nXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGVbY2FjaGVLZXldID0gdHJ1ZTtcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50Kys7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09IG51bGwpIHtcbiAgICAgICAgaWYgKGlzUmVxdWlyZWQpIHtcbiAgICAgICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1RoZSAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgaXMgbWFya2VkIGFzIHJlcXVpcmVkICcgKyAoJ2luIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBidXQgaXRzIHZhbHVlIGlzIGBudWxsYC4nKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignVGhlICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBpcyBtYXJrZWQgYXMgcmVxdWlyZWQgaW4gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGJ1dCBpdHMgdmFsdWUgaXMgYHVuZGVmaW5lZGAuJykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGNoYWluZWRDaGVja1R5cGUgPSBjaGVja1R5cGUuYmluZChudWxsLCBmYWxzZSk7XG4gICAgY2hhaW5lZENoZWNrVHlwZS5pc1JlcXVpcmVkID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgdHJ1ZSk7XG5cbiAgICByZXR1cm4gY2hhaW5lZENoZWNrVHlwZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKGV4cGVjdGVkVHlwZSkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gZXhwZWN0ZWRUeXBlKSB7XG4gICAgICAgIC8vIGBwcm9wVmFsdWVgIGJlaW5nIGluc3RhbmNlIG9mLCBzYXksIGRhdGUvcmVnZXhwLCBwYXNzIHRoZSAnb2JqZWN0J1xuICAgICAgICAvLyBjaGVjaywgYnV0IHdlIGNhbiBvZmZlciBhIG1vcmUgcHJlY2lzZSBlcnJvciBtZXNzYWdlIGhlcmUgcmF0aGVyIHRoYW5cbiAgICAgICAgLy8gJ29mIHR5cGUgYG9iamVjdGAnLlxuICAgICAgICB2YXIgcHJlY2lzZVR5cGUgPSBnZXRQcmVjaXNlVHlwZShwcm9wVmFsdWUpO1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByZWNpc2VUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkICcpICsgKCdgJyArIGV4cGVjdGVkVHlwZSArICdgLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQW55VHlwZUNoZWNrZXIoKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGwpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQXJyYXlPZlR5cGVDaGVja2VyKHR5cGVDaGVja2VyKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAodHlwZW9mIHR5cGVDaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignUHJvcGVydHkgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiBjb21wb25lbnQgYCcgKyBjb21wb25lbnROYW1lICsgJ2AgaGFzIGludmFsaWQgUHJvcFR5cGUgbm90YXRpb24gaW5zaWRlIGFycmF5T2YuJyk7XG4gICAgICB9XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYW4gYXJyYXkuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wVmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGVycm9yID0gdHlwZUNoZWNrZXIocHJvcFZhbHVlLCBpLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJ1snICsgaSArICddJywgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbGVtZW50VHlwZUNoZWNrZXIoKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudChwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgc2luZ2xlIFJlYWN0RWxlbWVudC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRUeXBlVHlwZUNoZWNrZXIoKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgaWYgKCFSZWFjdElzLmlzVmFsaWRFbGVtZW50VHlwZShwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgc2luZ2xlIFJlYWN0RWxlbWVudCB0eXBlLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlcihleHBlY3RlZENsYXNzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAoIShwcm9wc1twcm9wTmFtZV0gaW5zdGFuY2VvZiBleHBlY3RlZENsYXNzKSkge1xuICAgICAgICB2YXIgZXhwZWN0ZWRDbGFzc05hbWUgPSBleHBlY3RlZENsYXNzLm5hbWUgfHwgQU5PTllNT1VTO1xuICAgICAgICB2YXIgYWN0dWFsQ2xhc3NOYW1lID0gZ2V0Q2xhc3NOYW1lKHByb3BzW3Byb3BOYW1lXSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIGFjdHVhbENsYXNzTmFtZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCAnKSArICgnaW5zdGFuY2Ugb2YgYCcgKyBleHBlY3RlZENsYXNzTmFtZSArICdgLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRW51bVR5cGVDaGVja2VyKGV4cGVjdGVkVmFsdWVzKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGV4cGVjdGVkVmFsdWVzKSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgJ0ludmFsaWQgYXJndW1lbnRzIHN1cHBsaWVkIHRvIG9uZU9mLCBleHBlY3RlZCBhbiBhcnJheSwgZ290ICcgKyBhcmd1bWVudHMubGVuZ3RoICsgJyBhcmd1bWVudHMuICcgK1xuICAgICAgICAgICAgJ0EgY29tbW9uIG1pc3Rha2UgaXMgdG8gd3JpdGUgb25lT2YoeCwgeSwgeikgaW5zdGVhZCBvZiBvbmVPZihbeCwgeSwgel0pLidcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByaW50V2FybmluZygnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZiwgZXhwZWN0ZWQgYW4gYXJyYXkuJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXhwZWN0ZWRWYWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGlzKHByb3BWYWx1ZSwgZXhwZWN0ZWRWYWx1ZXNbaV0pKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIHZhbHVlc1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KGV4cGVjdGVkVmFsdWVzLCBmdW5jdGlvbiByZXBsYWNlcihrZXksIHZhbHVlKSB7XG4gICAgICAgIHZhciB0eXBlID0gZ2V0UHJlY2lzZVR5cGUodmFsdWUpO1xuICAgICAgICBpZiAodHlwZSA9PT0gJ3N5bWJvbCcpIHtcbiAgICAgICAgICByZXR1cm4gU3RyaW5nKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdmFsdWUgYCcgKyBTdHJpbmcocHJvcFZhbHVlKSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBvbmUgb2YgJyArIHZhbHVlc1N0cmluZyArICcuJykpO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlT2JqZWN0T2ZUeXBlQ2hlY2tlcih0eXBlQ2hlY2tlcikge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKHR5cGVvZiB0eXBlQ2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1Byb3BlcnR5IGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgY29tcG9uZW50IGAnICsgY29tcG9uZW50TmFtZSArICdgIGhhcyBpbnZhbGlkIFByb3BUeXBlIG5vdGF0aW9uIGluc2lkZSBvYmplY3RPZi4nKTtcbiAgICAgIH1cbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhbiBvYmplY3QuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIga2V5IGluIHByb3BWYWx1ZSkge1xuICAgICAgICBpZiAoaGFzKHByb3BWYWx1ZSwga2V5KSkge1xuICAgICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlVW5pb25UeXBlQ2hlY2tlcihhcnJheU9mVHlwZUNoZWNrZXJzKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5T2ZUeXBlQ2hlY2tlcnMpKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gcHJpbnRXYXJuaW5nKCdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mVHlwZSwgZXhwZWN0ZWQgYW4gaW5zdGFuY2Ugb2YgYXJyYXkuJykgOiB2b2lkIDA7XG4gICAgICByZXR1cm4gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbDtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5T2ZUeXBlQ2hlY2tlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjaGVja2VyID0gYXJyYXlPZlR5cGVDaGVja2Vyc1tpXTtcbiAgICAgIGlmICh0eXBlb2YgY2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2ZUeXBlLiBFeHBlY3RlZCBhbiBhcnJheSBvZiBjaGVjayBmdW5jdGlvbnMsIGJ1dCAnICtcbiAgICAgICAgICAncmVjZWl2ZWQgJyArIGdldFBvc3RmaXhGb3JUeXBlV2FybmluZyhjaGVja2VyKSArICcgYXQgaW5kZXggJyArIGkgKyAnLidcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5T2ZUeXBlQ2hlY2tlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBhcnJheU9mVHlwZUNoZWNrZXJzW2ldO1xuICAgICAgICBpZiAoY2hlY2tlcihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KSA9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBzdXBwbGllZCB0byAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4nKSk7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVOb2RlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICghaXNOb2RlKHByb3BzW3Byb3BOYW1lXSkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBzdXBwbGllZCB0byAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBSZWFjdE5vZGUuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVTaGFwZVR5cGVDaGVja2VyKHNoYXBlVHlwZXMpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgYCcgKyBwcm9wVHlwZSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBgb2JqZWN0YC4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBrZXkgaW4gc2hhcGVUeXBlcykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IHNoYXBlVHlwZXNba2V5XTtcbiAgICAgICAgaWYgKCFjaGVja2VyKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVycm9yID0gY2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlU3RyaWN0U2hhcGVUeXBlQ2hlY2tlcihzaGFwZVR5cGVzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlIGAnICsgcHJvcFR5cGUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYG9iamVjdGAuJykpO1xuICAgICAgfVxuICAgICAgLy8gV2UgbmVlZCB0byBjaGVjayBhbGwga2V5cyBpbiBjYXNlIHNvbWUgYXJlIHJlcXVpcmVkIGJ1dCBtaXNzaW5nIGZyb21cbiAgICAgIC8vIHByb3BzLlxuICAgICAgdmFyIGFsbEtleXMgPSBhc3NpZ24oe30sIHByb3BzW3Byb3BOYW1lXSwgc2hhcGVUeXBlcyk7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gYWxsS2V5cykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IHNoYXBlVHlwZXNba2V5XTtcbiAgICAgICAgaWYgKCFjaGVja2VyKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKFxuICAgICAgICAgICAgJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGtleSBgJyArIGtleSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLicgK1xuICAgICAgICAgICAgJ1xcbkJhZCBvYmplY3Q6ICcgKyBKU09OLnN0cmluZ2lmeShwcm9wc1twcm9wTmFtZV0sIG51bGwsICcgICcpICtcbiAgICAgICAgICAgICdcXG5WYWxpZCBrZXlzOiAnICsgIEpTT04uc3RyaW5naWZ5KE9iamVjdC5rZXlzKHNoYXBlVHlwZXMpLCBudWxsLCAnICAnKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVycm9yID0gY2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBpc05vZGUocHJvcFZhbHVlKSB7XG4gICAgc3dpdGNoICh0eXBlb2YgcHJvcFZhbHVlKSB7XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIGNhc2UgJ3VuZGVmaW5lZCc6XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgIHJldHVybiAhcHJvcFZhbHVlO1xuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgICAgIHJldHVybiBwcm9wVmFsdWUuZXZlcnkoaXNOb2RlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvcFZhbHVlID09PSBudWxsIHx8IGlzVmFsaWRFbGVtZW50KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihwcm9wVmFsdWUpO1xuICAgICAgICBpZiAoaXRlcmF0b3JGbikge1xuICAgICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChwcm9wVmFsdWUpO1xuICAgICAgICAgIHZhciBzdGVwO1xuICAgICAgICAgIGlmIChpdGVyYXRvckZuICE9PSBwcm9wVmFsdWUuZW50cmllcykge1xuICAgICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgICBpZiAoIWlzTm9kZShzdGVwLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBJdGVyYXRvciB3aWxsIHByb3ZpZGUgZW50cnkgW2ssdl0gdHVwbGVzIHJhdGhlciB0aGFuIHZhbHVlcy5cbiAgICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgICAgdmFyIGVudHJ5ID0gc3RlcC52YWx1ZTtcbiAgICAgICAgICAgICAgaWYgKGVudHJ5KSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc05vZGUoZW50cnlbMV0pKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGlzU3ltYm9sKHByb3BUeXBlLCBwcm9wVmFsdWUpIHtcbiAgICAvLyBOYXRpdmUgU3ltYm9sLlxuICAgIGlmIChwcm9wVHlwZSA9PT0gJ3N5bWJvbCcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIGZhbHN5IHZhbHVlIGNhbid0IGJlIGEgU3ltYm9sXG4gICAgaWYgKCFwcm9wVmFsdWUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddID09PSAnU3ltYm9sJ1xuICAgIGlmIChwcm9wVmFsdWVbJ0BAdG9TdHJpbmdUYWcnXSA9PT0gJ1N5bWJvbCcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIEZhbGxiYWNrIGZvciBub24tc3BlYyBjb21wbGlhbnQgU3ltYm9scyB3aGljaCBhcmUgcG9seWZpbGxlZC5cbiAgICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBwcm9wVmFsdWUgaW5zdGFuY2VvZiBTeW1ib2wpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIEVxdWl2YWxlbnQgb2YgYHR5cGVvZmAgYnV0IHdpdGggc3BlY2lhbCBoYW5kbGluZyBmb3IgYXJyYXkgYW5kIHJlZ2V4cC5cbiAgZnVuY3Rpb24gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKSB7XG4gICAgdmFyIHByb3BUeXBlID0gdHlwZW9mIHByb3BWYWx1ZTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICByZXR1cm4gJ2FycmF5JztcbiAgICB9XG4gICAgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgLy8gT2xkIHdlYmtpdHMgKGF0IGxlYXN0IHVudGlsIEFuZHJvaWQgNC4wKSByZXR1cm4gJ2Z1bmN0aW9uJyByYXRoZXIgdGhhblxuICAgICAgLy8gJ29iamVjdCcgZm9yIHR5cGVvZiBhIFJlZ0V4cC4gV2UnbGwgbm9ybWFsaXplIHRoaXMgaGVyZSBzbyB0aGF0IC9ibGEvXG4gICAgICAvLyBwYXNzZXMgUHJvcFR5cGVzLm9iamVjdC5cbiAgICAgIHJldHVybiAnb2JqZWN0JztcbiAgICB9XG4gICAgaWYgKGlzU3ltYm9sKHByb3BUeXBlLCBwcm9wVmFsdWUpKSB7XG4gICAgICByZXR1cm4gJ3N5bWJvbCc7XG4gICAgfVxuICAgIHJldHVybiBwcm9wVHlwZTtcbiAgfVxuXG4gIC8vIFRoaXMgaGFuZGxlcyBtb3JlIHR5cGVzIHRoYW4gYGdldFByb3BUeXBlYC4gT25seSB1c2VkIGZvciBlcnJvciBtZXNzYWdlcy5cbiAgLy8gU2VlIGBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcmAuXG4gIGZ1bmN0aW9uIGdldFByZWNpc2VUeXBlKHByb3BWYWx1ZSkge1xuICAgIGlmICh0eXBlb2YgcHJvcFZhbHVlID09PSAndW5kZWZpbmVkJyB8fCBwcm9wVmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiAnJyArIHByb3BWYWx1ZTtcbiAgICB9XG4gICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICBpZiAocHJvcFR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICByZXR1cm4gJ2RhdGUnO1xuICAgICAgfSBlbHNlIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgICAgcmV0dXJuICdyZWdleHAnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcHJvcFR5cGU7XG4gIH1cblxuICAvLyBSZXR1cm5zIGEgc3RyaW5nIHRoYXQgaXMgcG9zdGZpeGVkIHRvIGEgd2FybmluZyBhYm91dCBhbiBpbnZhbGlkIHR5cGUuXG4gIC8vIEZvciBleGFtcGxlLCBcInVuZGVmaW5lZFwiIG9yIFwib2YgdHlwZSBhcnJheVwiXG4gIGZ1bmN0aW9uIGdldFBvc3RmaXhGb3JUeXBlV2FybmluZyh2YWx1ZSkge1xuICAgIHZhciB0eXBlID0gZ2V0UHJlY2lzZVR5cGUodmFsdWUpO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgcmV0dXJuICdhbiAnICsgdHlwZTtcbiAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgY2FzZSAnZGF0ZSc6XG4gICAgICBjYXNlICdyZWdleHAnOlxuICAgICAgICByZXR1cm4gJ2EgJyArIHR5cGU7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gdHlwZTtcbiAgICB9XG4gIH1cblxuICAvLyBSZXR1cm5zIGNsYXNzIG5hbWUgb2YgdGhlIG9iamVjdCwgaWYgYW55LlxuICBmdW5jdGlvbiBnZXRDbGFzc05hbWUocHJvcFZhbHVlKSB7XG4gICAgaWYgKCFwcm9wVmFsdWUuY29uc3RydWN0b3IgfHwgIXByb3BWYWx1ZS5jb25zdHJ1Y3Rvci5uYW1lKSB7XG4gICAgICByZXR1cm4gQU5PTllNT1VTO1xuICAgIH1cbiAgICByZXR1cm4gcHJvcFZhbHVlLmNvbnN0cnVjdG9yLm5hbWU7XG4gIH1cblxuICBSZWFjdFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcyA9IGNoZWNrUHJvcFR5cGVzO1xuICBSZWFjdFByb3BUeXBlcy5yZXNldFdhcm5pbmdDYWNoZSA9IGNoZWNrUHJvcFR5cGVzLnJlc2V0V2FybmluZ0NhY2hlO1xuICBSZWFjdFByb3BUeXBlcy5Qcm9wVHlwZXMgPSBSZWFjdFByb3BUeXBlcztcblxuICByZXR1cm4gUmVhY3RQcm9wVHlwZXM7XG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgUmVhY3RJcyA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG5cbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgZGV2ZWxvcG1lbnQgYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgdmFyIHRocm93T25EaXJlY3RBY2Nlc3MgPSB0cnVlO1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMnKShSZWFjdElzLmlzRWxlbWVudCwgdGhyb3dPbkRpcmVjdEFjY2Vzcyk7XG59IGVsc2Uge1xuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBwcm9kdWN0aW9uIGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMnKSgpO1xufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9ICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCc7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RQcm9wVHlwZXNTZWNyZXQ7XG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE2LjguMlxuICogcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cblxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcbi8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cbnZhciBoYXNTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3I7XG5cbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgOiAweGVhYzc7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wb3J0YWwnKSA6IDB4ZWFjYTtcbnZhciBSRUFDVF9GUkFHTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZnJhZ21lbnQnKSA6IDB4ZWFjYjtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3RyaWN0X21vZGUnKSA6IDB4ZWFjYztcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvZmlsZXInKSA6IDB4ZWFkMjtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvdmlkZXInKSA6IDB4ZWFjZDtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb250ZXh0JykgOiAweGVhY2U7XG52YXIgUkVBQ1RfQVNZTkNfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuYXN5bmNfbW9kZScpIDogMHhlYWNmO1xudmFyIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29uY3VycmVudF9tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZvcndhcmRfcmVmJykgOiAweGVhZDA7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlJykgOiAweGVhZDE7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QubWVtbycpIDogMHhlYWQzO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmxhenknKSA6IDB4ZWFkNDtcblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyB8fFxuICAvLyBOb3RlOiBpdHMgdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgaWYgaXQncyBhIHBvbHlmaWxsLlxuICB0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUpO1xufVxuXG4vKipcbiAqIEZvcmtlZCBmcm9tIGZianMvd2FybmluZzpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9mYmpzL2Jsb2IvZTY2YmEyMGFkNWJlNDMzZWI1NDQyM2YyYjA5N2Q4MjkzMjRkOWRlNi9wYWNrYWdlcy9mYmpzL3NyYy9fX2ZvcmtzX18vd2FybmluZy5qc1xuICpcbiAqIE9ubHkgY2hhbmdlIGlzIHdlIHVzZSBjb25zb2xlLndhcm4gaW5zdGVhZCBvZiBjb25zb2xlLmVycm9yLFxuICogYW5kIGRvIG5vdGhpbmcgd2hlbiAnY29uc29sZScgaXMgbm90IHN1cHBvcnRlZC5cbiAqIFRoaXMgcmVhbGx5IHNpbXBsaWZpZXMgdGhlIGNvZGUuXG4gKiAtLS1cbiAqIFNpbWlsYXIgdG8gaW52YXJpYW50IGJ1dCBvbmx5IGxvZ3MgYSB3YXJuaW5nIGlmIHRoZSBjb25kaXRpb24gaXMgbm90IG1ldC5cbiAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gbG9nIGlzc3VlcyBpbiBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMgaW4gY3JpdGljYWxcbiAqIHBhdGhzLiBSZW1vdmluZyB0aGUgbG9nZ2luZyBjb2RlIGZvciBwcm9kdWN0aW9uIGVudmlyb25tZW50cyB3aWxsIGtlZXAgdGhlXG4gKiBzYW1lIGxvZ2ljIGFuZCBmb2xsb3cgdGhlIHNhbWUgY29kZSBwYXRocy5cbiAqL1xuXG52YXIgbG93UHJpb3JpdHlXYXJuaW5nID0gZnVuY3Rpb24gKCkge307XG5cbntcbiAgdmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uIChmb3JtYXQpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gYXJnc1thcmdJbmRleCsrXTtcbiAgICB9KTtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLndhcm4obWVzc2FnZSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH07XG5cbiAgbG93UHJpb3JpdHlXYXJuaW5nID0gZnVuY3Rpb24gKGNvbmRpdGlvbiwgZm9ybWF0KSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2Bsb3dQcmlvcml0eVdhcm5pbmcoY29uZGl0aW9uLCBmb3JtYXQsIC4uLmFyZ3MpYCByZXF1aXJlcyBhIHdhcm5pbmcgJyArICdtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuICAgIGlmICghY29uZGl0aW9uKSB7XG4gICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMiA+IDIgPyBfbGVuMiAtIDIgOiAwKSwgX2tleTIgPSAyOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgIGFyZ3NbX2tleTIgLSAyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICB9XG5cbiAgICAgIHByaW50V2FybmluZy5hcHBseSh1bmRlZmluZWQsIFtmb3JtYXRdLmNvbmNhdChhcmdzKSk7XG4gICAgfVxuICB9O1xufVxuXG52YXIgbG93UHJpb3JpdHlXYXJuaW5nJDEgPSBsb3dQcmlvcml0eVdhcm5pbmc7XG5cbmZ1bmN0aW9uIHR5cGVPZihvYmplY3QpIHtcbiAgaWYgKHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCkge1xuICAgIHZhciAkJHR5cGVvZiA9IG9iamVjdC4kJHR5cGVvZjtcbiAgICBzd2l0Y2ggKCQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRTpcbiAgICAgICAgdmFyIHR5cGUgPSBvYmplY3QudHlwZTtcblxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0FTWU5DX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfRlJBR01FTlRfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgICAgICAgIHJldHVybiB0eXBlO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB2YXIgJCR0eXBlb2ZUeXBlID0gdHlwZSAmJiB0eXBlLiQkdHlwZW9mO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKCQkdHlwZW9mVHlwZSkge1xuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mVHlwZTtcbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuLy8gQXN5bmNNb2RlIGlzIGRlcHJlY2F0ZWQgYWxvbmcgd2l0aCBpc0FzeW5jTW9kZVxudmFyIEFzeW5jTW9kZSA9IFJFQUNUX0FTWU5DX01PREVfVFlQRTtcbnZhciBDb25jdXJyZW50TW9kZSA9IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xudmFyIENvbnRleHRDb25zdW1lciA9IFJFQUNUX0NPTlRFWFRfVFlQRTtcbnZhciBDb250ZXh0UHJvdmlkZXIgPSBSRUFDVF9QUk9WSURFUl9UWVBFO1xudmFyIEVsZW1lbnQgPSBSRUFDVF9FTEVNRU5UX1RZUEU7XG52YXIgRm9yd2FyZFJlZiA9IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG52YXIgRnJhZ21lbnQgPSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xudmFyIExhenkgPSBSRUFDVF9MQVpZX1RZUEU7XG52YXIgTWVtbyA9IFJFQUNUX01FTU9fVFlQRTtcbnZhciBQb3J0YWwgPSBSRUFDVF9QT1JUQUxfVFlQRTtcbnZhciBQcm9maWxlciA9IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG52YXIgU3RyaWN0TW9kZSA9IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG52YXIgU3VzcGVuc2UgPSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xuXG52YXIgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSBmYWxzZTtcblxuLy8gQXN5bmNNb2RlIHNob3VsZCBiZSBkZXByZWNhdGVkXG5mdW5jdGlvbiBpc0FzeW5jTW9kZShvYmplY3QpIHtcbiAge1xuICAgIGlmICghaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUpIHtcbiAgICAgIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gdHJ1ZTtcbiAgICAgIGxvd1ByaW9yaXR5V2FybmluZyQxKGZhbHNlLCAnVGhlIFJlYWN0SXMuaXNBc3luY01vZGUoKSBhbGlhcyBoYXMgYmVlbiBkZXByZWNhdGVkLCAnICsgJ2FuZCB3aWxsIGJlIHJlbW92ZWQgaW4gUmVhY3QgMTcrLiBVcGRhdGUgeW91ciBjb2RlIHRvIHVzZSAnICsgJ1JlYWN0SXMuaXNDb25jdXJyZW50TW9kZSgpIGluc3RlYWQuIEl0IGhhcyB0aGUgZXhhY3Qgc2FtZSBBUEkuJyk7XG4gICAgfVxuICB9XG4gIHJldHVybiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkgfHwgdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0FTWU5DX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29uY3VycmVudE1vZGUob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRDb25zdW1lcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05URVhUX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRQcm92aWRlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9WSURFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNFbGVtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNGb3J3YXJkUmVmKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZyYWdtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0xhenkob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTEFaWV9UWVBFO1xufVxuZnVuY3Rpb24gaXNNZW1vKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX01FTU9fVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUG9ydGFsKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BPUlRBTF9UWVBFO1xufVxuZnVuY3Rpb24gaXNQcm9maWxlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdHJpY3RNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N1c3BlbnNlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG59XG5cbmV4cG9ydHMudHlwZU9mID0gdHlwZU9mO1xuZXhwb3J0cy5Bc3luY01vZGUgPSBBc3luY01vZGU7XG5leHBvcnRzLkNvbmN1cnJlbnRNb2RlID0gQ29uY3VycmVudE1vZGU7XG5leHBvcnRzLkNvbnRleHRDb25zdW1lciA9IENvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuQ29udGV4dFByb3ZpZGVyID0gQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5FbGVtZW50ID0gRWxlbWVudDtcbmV4cG9ydHMuRm9yd2FyZFJlZiA9IEZvcndhcmRSZWY7XG5leHBvcnRzLkZyYWdtZW50ID0gRnJhZ21lbnQ7XG5leHBvcnRzLkxhenkgPSBMYXp5O1xuZXhwb3J0cy5NZW1vID0gTWVtbztcbmV4cG9ydHMuUG9ydGFsID0gUG9ydGFsO1xuZXhwb3J0cy5Qcm9maWxlciA9IFByb2ZpbGVyO1xuZXhwb3J0cy5TdHJpY3RNb2RlID0gU3RyaWN0TW9kZTtcbmV4cG9ydHMuU3VzcGVuc2UgPSBTdXNwZW5zZTtcbmV4cG9ydHMuaXNWYWxpZEVsZW1lbnRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlO1xuZXhwb3J0cy5pc0FzeW5jTW9kZSA9IGlzQXN5bmNNb2RlO1xuZXhwb3J0cy5pc0NvbmN1cnJlbnRNb2RlID0gaXNDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuaXNDb250ZXh0Q29uc3VtZXIgPSBpc0NvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuaXNDb250ZXh0UHJvdmlkZXIgPSBpc0NvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuaXNFbGVtZW50ID0gaXNFbGVtZW50O1xuZXhwb3J0cy5pc0ZvcndhcmRSZWYgPSBpc0ZvcndhcmRSZWY7XG5leHBvcnRzLmlzRnJhZ21lbnQgPSBpc0ZyYWdtZW50O1xuZXhwb3J0cy5pc0xhenkgPSBpc0xhenk7XG5leHBvcnRzLmlzTWVtbyA9IGlzTWVtbztcbmV4cG9ydHMuaXNQb3J0YWwgPSBpc1BvcnRhbDtcbmV4cG9ydHMuaXNQcm9maWxlciA9IGlzUHJvZmlsZXI7XG5leHBvcnRzLmlzU3RyaWN0TW9kZSA9IGlzU3RyaWN0TW9kZTtcbmV4cG9ydHMuaXNTdXNwZW5zZSA9IGlzU3VzcGVuc2U7XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTYuMTMuMVxuICogcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cblxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcbi8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cbnZhciBoYXNTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3I7XG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIDogMHhlYWM3O1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucG9ydGFsJykgOiAweGVhY2E7XG52YXIgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZyYWdtZW50JykgOiAweGVhY2I7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN0cmljdF9tb2RlJykgOiAweGVhY2M7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb2ZpbGVyJykgOiAweGVhZDI7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb3ZpZGVyJykgOiAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29udGV4dCcpIDogMHhlYWNlOyAvLyBUT0RPOiBXZSBkb24ndCB1c2UgQXN5bmNNb2RlIG9yIENvbmN1cnJlbnRNb2RlIGFueW1vcmUuIFRoZXkgd2VyZSB0ZW1wb3Jhcnlcbi8vICh1bnN0YWJsZSkgQVBJcyB0aGF0IGhhdmUgYmVlbiByZW1vdmVkLiBDYW4gd2UgcmVtb3ZlIHRoZSBzeW1ib2xzP1xuXG52YXIgUkVBQ1RfQVNZTkNfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuYXN5bmNfbW9kZScpIDogMHhlYWNmO1xudmFyIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29uY3VycmVudF9tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZvcndhcmRfcmVmJykgOiAweGVhZDA7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlJykgOiAweGVhZDE7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpIDogMHhlYWQ4O1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0Lm1lbW8nKSA6IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5sYXp5JykgOiAweGVhZDQ7XG52YXIgUkVBQ1RfQkxPQ0tfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmJsb2NrJykgOiAweGVhZDk7XG52YXIgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZ1bmRhbWVudGFsJykgOiAweGVhZDU7XG52YXIgUkVBQ1RfUkVTUE9OREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5yZXNwb25kZXInKSA6IDB4ZWFkNjtcbnZhciBSRUFDVF9TQ09QRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc2NvcGUnKSA6IDB4ZWFkNztcblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyB8fCAvLyBOb3RlOiBpdHMgdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgaWYgaXQncyBhIHBvbHlmaWxsLlxuICB0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUkVTUE9OREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfU0NPUEVfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9CTE9DS19UWVBFKTtcbn1cblxuZnVuY3Rpb24gdHlwZU9mKG9iamVjdCkge1xuICBpZiAodHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsKSB7XG4gICAgdmFyICQkdHlwZW9mID0gb2JqZWN0LiQkdHlwZW9mO1xuXG4gICAgc3dpdGNoICgkJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9FTEVNRU5UX1RZUEU6XG4gICAgICAgIHZhciB0eXBlID0gb2JqZWN0LnR5cGU7XG5cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgY2FzZSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICAgICAgICByZXR1cm4gdHlwZTtcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB2YXIgJCR0eXBlb2ZUeXBlID0gdHlwZSAmJiB0eXBlLiQkdHlwZW9mO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKCQkdHlwZW9mVHlwZSkge1xuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2ZUeXBlO1xuXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59IC8vIEFzeW5jTW9kZSBpcyBkZXByZWNhdGVkIGFsb25nIHdpdGggaXNBc3luY01vZGVcblxudmFyIEFzeW5jTW9kZSA9IFJFQUNUX0FTWU5DX01PREVfVFlQRTtcbnZhciBDb25jdXJyZW50TW9kZSA9IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xudmFyIENvbnRleHRDb25zdW1lciA9IFJFQUNUX0NPTlRFWFRfVFlQRTtcbnZhciBDb250ZXh0UHJvdmlkZXIgPSBSRUFDVF9QUk9WSURFUl9UWVBFO1xudmFyIEVsZW1lbnQgPSBSRUFDVF9FTEVNRU5UX1RZUEU7XG52YXIgRm9yd2FyZFJlZiA9IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG52YXIgRnJhZ21lbnQgPSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xudmFyIExhenkgPSBSRUFDVF9MQVpZX1RZUEU7XG52YXIgTWVtbyA9IFJFQUNUX01FTU9fVFlQRTtcbnZhciBQb3J0YWwgPSBSRUFDVF9QT1JUQUxfVFlQRTtcbnZhciBQcm9maWxlciA9IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG52YXIgU3RyaWN0TW9kZSA9IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG52YXIgU3VzcGVuc2UgPSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xudmFyIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gZmFsc2U7IC8vIEFzeW5jTW9kZSBzaG91bGQgYmUgZGVwcmVjYXRlZFxuXG5mdW5jdGlvbiBpc0FzeW5jTW9kZShvYmplY3QpIHtcbiAge1xuICAgIGlmICghaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUpIHtcbiAgICAgIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gdHJ1ZTsgLy8gVXNpbmcgY29uc29sZVsnd2FybiddIHRvIGV2YWRlIEJhYmVsIGFuZCBFU0xpbnRcblxuICAgICAgY29uc29sZVsnd2FybiddKCdUaGUgUmVhY3RJcy5pc0FzeW5jTW9kZSgpIGFsaWFzIGhhcyBiZWVuIGRlcHJlY2F0ZWQsICcgKyAnYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBSZWFjdCAxNysuIFVwZGF0ZSB5b3VyIGNvZGUgdG8gdXNlICcgKyAnUmVhY3RJcy5pc0NvbmN1cnJlbnRNb2RlKCkgaW5zdGVhZC4gSXQgaGFzIHRoZSBleGFjdCBzYW1lIEFQSS4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHx8IHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0Q29uc3VtZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0UHJvdmlkZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRWxlbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRm9yd2FyZFJlZihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xufVxuZnVuY3Rpb24gaXNGcmFnbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNMYXp5KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0xBWllfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTWVtbyhvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9NRU1PX1RZUEU7XG59XG5mdW5jdGlvbiBpc1BvcnRhbChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QT1JUQUxfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUHJvZmlsZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3RyaWN0TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdXNwZW5zZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xufVxuXG5leHBvcnRzLkFzeW5jTW9kZSA9IEFzeW5jTW9kZTtcbmV4cG9ydHMuQ29uY3VycmVudE1vZGUgPSBDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuQ29udGV4dENvbnN1bWVyID0gQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5Db250ZXh0UHJvdmlkZXIgPSBDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLkVsZW1lbnQgPSBFbGVtZW50O1xuZXhwb3J0cy5Gb3J3YXJkUmVmID0gRm9yd2FyZFJlZjtcbmV4cG9ydHMuRnJhZ21lbnQgPSBGcmFnbWVudDtcbmV4cG9ydHMuTGF6eSA9IExhenk7XG5leHBvcnRzLk1lbW8gPSBNZW1vO1xuZXhwb3J0cy5Qb3J0YWwgPSBQb3J0YWw7XG5leHBvcnRzLlByb2ZpbGVyID0gUHJvZmlsZXI7XG5leHBvcnRzLlN0cmljdE1vZGUgPSBTdHJpY3RNb2RlO1xuZXhwb3J0cy5TdXNwZW5zZSA9IFN1c3BlbnNlO1xuZXhwb3J0cy5pc0FzeW5jTW9kZSA9IGlzQXN5bmNNb2RlO1xuZXhwb3J0cy5pc0NvbmN1cnJlbnRNb2RlID0gaXNDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuaXNDb250ZXh0Q29uc3VtZXIgPSBpc0NvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuaXNDb250ZXh0UHJvdmlkZXIgPSBpc0NvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuaXNFbGVtZW50ID0gaXNFbGVtZW50O1xuZXhwb3J0cy5pc0ZvcndhcmRSZWYgPSBpc0ZvcndhcmRSZWY7XG5leHBvcnRzLmlzRnJhZ21lbnQgPSBpc0ZyYWdtZW50O1xuZXhwb3J0cy5pc0xhenkgPSBpc0xhenk7XG5leHBvcnRzLmlzTWVtbyA9IGlzTWVtbztcbmV4cG9ydHMuaXNQb3J0YWwgPSBpc1BvcnRhbDtcbmV4cG9ydHMuaXNQcm9maWxlciA9IGlzUHJvZmlsZXI7XG5leHBvcnRzLmlzU3RyaWN0TW9kZSA9IGlzU3RyaWN0TW9kZTtcbmV4cG9ydHMuaXNTdXNwZW5zZSA9IGlzU3VzcGVuc2U7XG5leHBvcnRzLmlzVmFsaWRFbGVtZW50VHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZTtcbmV4cG9ydHMudHlwZU9mID0gdHlwZU9mO1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IERhc2hJbml0aWFsVGVybXMgZnJvbSBcIi4uL2NvbXBvbmVudHMvRGFzaGJvYXJkL0ZldGNoUXVlcnlDb250YWluZXJcIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4uL2NvbXBvbmVudHMvQXBwXCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlci9EYXNoYm9hcmRIZWFkZXJcIjtcbmltcG9ydCBzdHlsZWQsIHsgVGhlbWVQcm92aWRlciB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHRoZW1lIGZyb20gXCIuLi9jb21wb25lbnRzL3RoZW1lXCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMuY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRhc2hib2FyZCh7IGluaXRpYWxTdGF0ZSB9KSB7XG4gIC8vIGNvbnN0IFt3aWR0aCwgc2V0V2lkdGhdID0gdXNlU3RhdGUoKTtcblxuICAvLyBmdW5jdGlvbiB1cGRhdGVXaW5kb3dEaW1lbnNpb25zKCkge1xuICAvLyAgIGxldCBuZXdXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAvLyAgIHNldFdpZHRoKG5ld1dpZHRoKTtcbiAgLy8gICBjb25zb2xlLmxvZyh3aW5kb3cuaW5uZXJXaWR0aCk7XG4gIC8vICAgY29uc29sZS5sb2cod2lkdGgpO1xuICAvLyAgIGNvbnNvbGUubG9nKG5ld1dpZHRoKTtcbiAgLy8gfVxuXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdXBkYXRlV2luZG93RGltZW5zaW9ucyk7XG5cbiAgLy8gICByZXR1cm4gKCkgPT4ge1xuICAvLyAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdXBkYXRlV2luZG93RGltZW5zaW9ucyk7XG4gIC8vICAgfTtcbiAgLy8gfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPEFwcD5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxQYWdlV3JhcD5cbiAgICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgICA8V3JhcHBlcj5cbiAgICAgICAgICAgIDxEYXNoSW5pdGlhbFRlcm1zIC8+XG4gICAgICAgICAgPC9XcmFwcGVyPlxuICAgICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgICA8L1BhZ2VXcmFwPlxuICAgIDwvQXBwPlxuICApO1xufVxuXG5jb25zdCBQYWdlV3JhcCA9IHN0eWxlZC5kaXZgXG4gIGhlaWdodDogMTAwdmg7XG4gIG1hcmdpbjogMCAxMHZ3O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZjJmMmYyO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNmMmYyZjI7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgbWFyZ2luOiAwO1xuICB9XG5gO1xuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIG1hcmdpbjogMDtcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAgIG1hcmdpbjogMDtcbiAgfVxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDA7XG4gIH1cbmA7XG4iLCJpbXBvcnQgeyBhY3Rpb24sIG9ic2VydmFibGUgfSBmcm9tIFwibW9ieFwiO1xuaW1wb3J0IHsgdXNlU3RhdGljUmVuZGVyaW5nLCBvYnNlcnZlciB9IGZyb20gXCJtb2J4LXJlYWN0XCI7XG5pbXBvcnQgeyBjcmVhdGUsIHBlcnNpc3QgfSBmcm9tIFwibW9ieC1wZXJzaXN0XCI7XG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBnZXRTdGF0ZURhdGUsXG4gIG1ha2VEYXRlSHJzLFxuICBtYWtlRGF0ZURheXMsXG59IGZyb20gXCIuLi9jb21wb25lbnRzL0hlbHBlcnMvRnVuY3Rpb25zXCI7XG5cbmNvbnN0IGlzU2VydmVyID0gIXByb2Nlc3MuYnJvd3NlcjtcbnVzZVN0YXRpY1JlbmRlcmluZyhpc1NlcnZlcik7XG5cbmV4cG9ydCBjbGFzcyBTdG9yZSB7XG4gIEBvYnNlcnZhYmxlIGxhc3RVcGRhdGUgPSAwO1xuICBAcGVyc2lzdCBAb2JzZXJ2YWJsZSBsaWdodCA9IHRydWU7XG4gIEBwZXJzaXN0IEBvYnNlcnZhYmxlIGlzQXV0aCA9IGZhbHNlO1xuICBAcGVyc2lzdCBAb2JzZXJ2YWJsZSBzdGFydERhdGUgPSBudWxsO1xuICBAcGVyc2lzdCBAb2JzZXJ2YWJsZSBlbmREYXRlID0gbnVsbDtcbiAgQHBlcnNpc3QgQG9ic2VydmFibGUgc3ltYm9sID0gXCJYQlRVU0RcIjtcblxuICBAcGVyc2lzdCBAb2JzZXJ2YWJsZSBkYXRlID0gXCJUb2RheVwiO1xuICBAb2JzZXJ2YWJsZSBwbmwgPSAwO1xuICBAb2JzZXJ2YWJsZSBnbG9iYWxIYXNoID0gW107XG4gIEBwZXJzaXN0IEBvYnNlcnZhYmxlIHRlbXBOb3RlcyA9IFtdO1xuICBAcGVyc2lzdCBAb2JzZXJ2YWJsZSB0ZW1wVGFncyA9IFtdO1xuICBAcGVyc2lzdCBAb2JzZXJ2YWJsZSBoYXNUZW1wVGFncyA9IGZhbHNlO1xuXG4gIEBwZXJzaXN0IEBvYnNlcnZhYmxlIHNpbmdsZVRyYWRlID0ge307XG4gIEBwZXJzaXN0IEBvYnNlcnZhYmxlIGhhc1NpbmdsZVRyYWRlID0gZmFsc2U7XG4gIEBwZXJzaXN0IEBvYnNlcnZhYmxlIGlzU2luZ2xlTm90ZXMgPSBmYWxzZTtcblxuICBAYWN0aW9uIGNoYW5nZURhdGUgPSAobmV3RGF0ZSkgPT4ge1xuICAgIGxldCBkYXRlcyA9IGdldFN0YXRlRGF0ZShuZXdEYXRlKTtcbiAgICB0aGlzLmRhdGUgPSBuZXdEYXRlO1xuICAgIHRoaXMuc3RhcnREYXRlID0gZGF0ZXMuc3RhcnQ7XG4gICAgdGhpcy5lbmREYXRlID0gZGF0ZXMuZW5kO1xuICB9O1xuXG4gIEBhY3Rpb24gYWRkUG5sID0gKHBubCkgPT4ge1xuICAgIHRoaXMucG5sICs9IHBubDtcbiAgfTtcblxuICBAYWN0aW9uIHJlc2V0UG5sID0gKCkgPT4ge1xuICAgIHRoaXMucG5sID0gMDtcbiAgfTtcblxuICBAYWN0aW9uIHB1c2hHbG9iYWxIYXNoID0gKGhhc2gpID0+IHtcbiAgICB0aGlzLmdsb2JhbEhhc2gucHVzaChoYXNoKTtcbiAgfTtcblxuICBAYWN0aW9uIGFkZFRlbXBOb3RlID0gKHRpbWUsIG5vdGUpID0+IHtcbiAgICBpZiAodGhpcy50ZW1wTm90ZXNbMF0gPT0gdW5kZWZpbmVkKSB7XG4gICAgICBsZXQgbmV3Tm90ZSA9IHt9O1xuICAgICAgbmV3Tm90ZVtcIm5vdGVcIl0gPSBub3RlO1xuICAgICAgbmV3Tm90ZVtcInRpbWVcIl0gPSB0aW1lO1xuICAgICAgdGhpcy50ZW1wTm90ZXMucHVzaChuZXdOb3RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGFscmVhZHlQcmVzZW50Tm90ZSA9IGZhbHNlO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRlbXBOb3Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodGhpcy50ZW1wTm90ZXNbaV0udGltZSA9PSB0aW1lKSB7XG4gICAgICAgICAgdGhpcy50ZW1wTm90ZXNbaV0ubm90ZSA9IG5vdGU7XG4gICAgICAgICAgYWxyZWFkeVByZXNlbnROb3RlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaSA9PSB0aGlzLnRlbXBOb3Rlcy5sZW5ndGggLSAxICYmIGFscmVhZHlQcmVzZW50Tm90ZSA9PSBmYWxzZSkge1xuICAgICAgICAgIGxldCBuZXdOb3RlID0ge307XG4gICAgICAgICAgbmV3Tm90ZVtcIm5vdGVcIl0gPSBub3RlO1xuICAgICAgICAgIG5ld05vdGVbXCJ0aW1lXCJdID0gdGltZTtcbiAgICAgICAgICB0aGlzLnRlbXBOb3Rlcy5wdXNoKG5ld05vdGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIEBhY3Rpb24gY2xlYXJUZW1wTm90ZXMgPSAoKSA9PiB7XG4gICAgdGhpcy50ZW1wTm90ZXMgPSBbXTtcbiAgfTtcblxuICBAYWN0aW9uIGFkZFRlbXBUYWcgPSAodGltZSwgdGFnKSA9PiB7XG4gICAgbGV0IG5ld1RhZyA9IHt9O1xuICAgIG5ld1RhZ1tcInRhZ1wiXSA9IHRhZztcbiAgICBuZXdUYWdbXCJ0aW1lXCJdID0gdGltZTtcbiAgICB0aGlzLnRlbXBUYWdzLnB1c2gobmV3VGFnKTtcbiAgICB0aGlzLmNoYW5nZUhhc1RlbXBUYWdzKCk7XG4gIH07XG5cbiAgQGFjdGlvbiBjbGVhclRlbXBUYWdzID0gKCkgPT4ge1xuICAgIHRoaXMudGVtcFRhZ3MgPSBbXTtcbiAgfTtcblxuICBAYWN0aW9uIGNoYW5nZUhhc1RlbXBUYWdzID0gKCkgPT4ge1xuICAgIHRoaXMuaGFzVGVtcFRhZ3MgPSB0cnVlO1xuICB9O1xuICBAYWN0aW9uIHJlc2V0SGFzVGVtcFRhZ3MgPSAoKSA9PiB7XG4gICAgdGhpcy5oYXNUZW1wVGFncyA9IGZhbHNlO1xuICB9O1xuICBAYWN0aW9uIHNldFN5bWJvbCA9IChuZXdTeW1ib2wpID0+IHtcbiAgICB0aGlzLnN5bWJvbCA9IG5ld1N5bWJvbDtcbiAgfTtcblxuICBAYWN0aW9uIHJlc2V0UG5sID0gKCkgPT4ge1xuICAgIHRoaXMucG5sID0gMDtcbiAgfTtcblxuICBAYWN0aW9uIHNldFNpbmdsZVRyYWRlID0gKGRhdCkgPT4ge1xuICAgIHRoaXMuc2luZ2xlVHJhZGUgPSBkYXQ7XG4gIH07XG59XG5cbmxldCBzdG9yZSA9IG51bGw7XG5leHBvcnQgY29uc3QgaHlkcmF0ZSA9IGNyZWF0ZSgpO1xuZXhwb3J0IGNvbnN0IFN0b3JlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQobmV3IFN0b3JlKCkpO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZVN0b3JlKGluaXRpYWxEYXRhKSB7XG4gIC8vIEFsd2F5cyBtYWtlIGEgbmV3IHN0b3JlIGlmIHNlcnZlciwgb3RoZXJ3aXNlIHN0YXRlIGlzIHNoYXJlZCBiZXR3ZWVuIHJlcXVlc3RzXG4gIGlmIChpc1NlcnZlcikge1xuICAgIHJldHVybiBuZXcgU3RvcmUoaXNTZXJ2ZXIsIGluaXRpYWxEYXRhKTtcbiAgfVxuICBpZiAoc3RvcmUgPT09IG51bGwpIHtcbiAgICBzdG9yZSA9IG5ldyBTdG9yZShpc1NlcnZlciwgaW5pdGlhbERhdGEpO1xuICB9XG5cbiAgaHlkcmF0ZShcInN0b3JlXCIsIHN0b3JlKS50aGVuKCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcInNvbWVTdG9yZSBoYXMgYmVlbiBoeWRyYXRlZFwiKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHN0b3JlO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkMy1mb3JtYXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZDMtdGltZS1mb3JtYXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmFzdC1kZWVwLWVxdWFsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImdyYXBocWwtdGFnXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb2J4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vYngtcGVyc2lzdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb2J4LXJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vYngtcmVhY3QtbGl0ZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJvYmplY3QtYXNzaWduXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlcy1leGFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1hcG9sbG9cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYXV0b3NpemUtdGV4dGFyZWFcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZGF0ZXBpY2tlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kb21cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc3RvY2tjaGFydHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc3RvY2tjaGFydHMvbGliL2Fubm90YXRpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc3RvY2tjaGFydHMvbGliL2F4ZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc3RvY2tjaGFydHMvbGliL2Nvb3JkaW5hdGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXN0b2NrY2hhcnRzL2xpYi9oZWxwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc3RvY2tjaGFydHMvbGliL2luZGljYXRvclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zdG9ja2NoYXJ0cy9saWIvc2NhbGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc3RvY2tjaGFydHMvbGliL3Nlcmllc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zdG9ja2NoYXJ0cy9saWIvdG9vbHRpcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zdG9ja2NoYXJ0cy9saWIvdXRpbHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RzdHJhcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWNoYXJ0c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1cmxcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==