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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/helpers */ "./components/shared/helpers.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const HeaderLogo = () => __jsx(Logo, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  prefetch: true,
  href: "/"
}, __jsx("span", null, "\u20BFitsjournal")));

/* harmony default export */ __webpack_exports__["default"] = (HeaderLogo);
const Logo = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Logo",
  componentId: "sc-195qc4m-0"
})(["", " margin-right:0;font-size:26px;font-weight:500;color:", ";text-decoration:none;color:#fff;@media (max-width:425px){padding:0 8px 0 16px;font-size:19px;}"], _shared_helpers__WEBPACK_IMPORTED_MODULE_3__["headerItem"], props => props.theme.normalText); // display: flex;
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

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

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

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
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


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

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

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

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


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

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


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

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

/***/ 5:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Rhc2hib2FyZC83NjhweC9EYXNoYm9hcmRUZXN0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRGFzaGJvYXJkL0FkZEFwaUZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9EYXNoYm9hcmQvQ2hhcnQvQ2hhcnREZW1vLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRGFzaGJvYXJkL0NoYXJ0L2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9EYXNoYm9hcmQvQ2hhcnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9EYXNoYm9hcmQvRGFzaGJvYXJkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRGFzaGJvYXJkL0ZldGNoUXVlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9EYXNoYm9hcmQvRmV0Y2hRdWVyeUNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Rhc2hib2FyZC9Ob3Rlcy9Ob3Rlcy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Rhc2hib2FyZC9Ob3Rlcy9Ob3Rlc1Rlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9EYXNoYm9hcmQvTm90ZXMvVGV4dEFyZWEuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9EYXNoYm9hcmQvTm90ZXMvbm90ZXNIZWxwZXJzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRGFzaGJvYXJkL1RhYnMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9EYXNoYm9hcmQvVGFkZXMvVHJhZGVzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRGFzaGJvYXJkL1RhZGVzL2NhbGNUcmFkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9EYXNoYm9hcmQvc2hhcmVkL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIvRGFzaGJvYXJkSGVhZGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVyL0xvZ28uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWxwZXJzL0Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01lbnUvNzY4cHgvTWVudS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01lbnUvQ2F0ZWdvcnlMaXN0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTWVudS9EYXRlcGlja2VyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTWVudS9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NZW51L01lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9mb3JtL0Zvcm1XcmFwcGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZm9ybS9JbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zvcm0vTGFiZWwuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zaGFyZWQvQnV0dG9uLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc2hhcmVkL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90aGVtZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvd2l0aC1yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvbWl0dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9yZWFjdC1pcy9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2Rhc2hib2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZXMvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZDMtZm9ybWF0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZDMtdGltZS1mb3JtYXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmYXN0LWRlZXAtZXF1YWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJncmFwaHFsLXRhZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpzLWNvb2tpZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vYnhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb2J4LXBlcnNpc3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb2J4LXJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9ieC1yZWFjdC1saXRlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlcy1leGFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYXBvbGxvXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYXV0b3NpemUtdGV4dGFyZWFcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1kYXRlcGlja2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZG9tXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc3RvY2tjaGFydHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zdG9ja2NoYXJ0cy9saWIvYW5ub3RhdGlvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXN0b2NrY2hhcnRzL2xpYi9heGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc3RvY2tjaGFydHMvbGliL2Nvb3JkaW5hdGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc3RvY2tjaGFydHMvbGliL2hlbHBlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXN0b2NrY2hhcnRzL2xpYi9pbmRpY2F0b3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zdG9ja2NoYXJ0cy9saWIvc2NhbGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zdG9ja2NoYXJ0cy9saWIvc2VyaWVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc3RvY2tjaGFydHMvbGliL3Rvb2x0aXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zdG9ja2NoYXJ0cy9saWIvdXRpbHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdHN0cmFwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVjaGFydHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInVybFwiIl0sIm5hbWVzIjpbImNoaWxkcmVuIiwiaW5qZWN0Iiwib2JzZXJ2ZXIiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsImdsb2JhbEhhc2giLCJnbG9iYWxIYXNoQWN0aXZlIiwiZGF0YSIsImZpbHRlcmVkRGF0YSIsImlzU2luZ2xlIiwiaXNTaW5nbGVOb3RlcyIsImdldEdsb2JhbEhhc2h0YWdzIiwiYmluZCIsImhhc2h0YWdDbGlja2VkIiwiaGFzaHRhZ0NsaWNrZWRCYWNrIiwidXBkYXRlV2luZG93RGltZW5zaW9ucyIsImNvbXBvbmVudFdpbGxNb3VudCIsInNldFN0YXRlIiwiY29tcG9uZW50RGlkTW91bnQiLCJzaW5nbGVUcmFkZVJlYWN0aW9uIiwicmVhY3Rpb24iLCJzdG9yZSIsImhhc1NpbmdsZVRyYWRlIiwibm90aWZpY2F0aW9ucyIsImNvbnNvbGUiLCJsb2ciLCJzaW5nbGVUcmFkZSIsInNpbmdsZU5vdGVzUmVhY3Rpb24iLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwid2lkdGgiLCJpbm5lcldpZHRoIiwiaSIsImZldGNoVHJhZGVIaXN0b3J5IiwibGVuZ3RoIiwidGhpc1RyYWRlSGFzaCIsImhhc2h0YWdzIiwic3BsaXQiLCJqIiwibmV3R2xvYmFsSGFzaCIsInB1c2giLCJ2YWx1ZSIsIm5ld0hhc2hBY3RpdmUiLCJuZXdIYXNoIiwidW5kZWZpbmVkIiwibmV3SGFzaDIiLCJnZXROZXdEYXQiLCJ0aGVuIiwicmVzIiwibmV3R2xvYmFsSGFzaDIiLCJuZXdBcnJheSIsImluZGV4IiwiaW5kZXhPZiIsInNwbGljZSIsInRvcmYiLCJuZXdHbG9iYWxIYXNoQWN0aXZlIiwibmV3RGF0IiwicmVuZGVyIiwibWFwIiwiaGFzaCIsIlNpbmdsZVRhYklubmVyIiwic3R5bGVkIiwiZGl2IiwiU2luZ2xlVGFiIiwiaXNBY3RpdmUiLCJXcmFwVGFicyIsIldob2xlR3JpZCIsIlRvcEJhclBhcmVudCIsIlRvcEJhclRvcCIsIlRvcEJhckJvdHRvbSIsIlRvcEJhclRvcFJpZ2h0IiwiVG9wQmFyVG9wTGVmdCIsIndpZGVGb250IiwiVG9wQmFyQ2hpbGRTbWFsbCIsIlRvcEhhc2h0YWdJbmRpdmlkdWFsIiwiVG9wSGFzaHRhZ0luZGl2aWR1YWxBY3RpdmUiLCJUb3BIYXNodGFnSW5kaXZpZHVhbEFjdGl2ZVJpZ2h0IiwiUmlnaHRUYWJzIiwiVG9wSGFzaHRhZ0luZGl2aWR1YWxBY3RpdmVQbmwiLCJDaGFydFdyYXBwZXIiLCJXcmFwcGVyIiwiQ29va2llIiwicmVxdWlyZSIsIkFwaUtleUZvcm0iLCJzZXRSZXMiLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwibm90U3VibWl0dGVkIiwic2V0Tm90U3VibWl0dGVkIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJjbGllbnQiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm0iLCJ0YXJnZXQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwia2V5IiwiZ2V0Iiwic2VjcmV0IiwicmVzZXQiLCJhcGlSZXMiLCJtdXRhdGUiLCJtdXRhdGlvbiIsImdxbCIsInZhcmlhYmxlcyIsImFkZEFwaUtleSIsImlzVHJ1ZSIsImNhdGNoIiwiZGlzcGxheSIsIlBvcHVsYXRlIiwidXNlRWZmZWN0IiwibXlDbGllbnQiLCJyZXNvIiwicG9wdWxhdGUiLCJyZXNldEFwaSIsIlByb21pc2UiLCJyZXNvbHZlIiwibXlSZXMiLCJsb2NhdGlvbiIsInJlbG9hZCIsIlN0eWxlZEZvcm0iLCJTdWJtaXRCdXR0b24iLCJCdXR0b24iLCJJbnB1dFdyYXBwZXIiLCJDYW5kbGVTdGlja0NoYXJ0V2l0aEFubm90YXRpb24iLCJ5UmFuZ2VOdW1zIiwiZ2V0WVJhbmdlTnVtcyIsIm1hcmdpbiIsImxlZnQiLCJyaWdodCIsInRvcCIsImJvdHRvbSIsImhlaWdodCIsInR5cGUiLCJyYXRpbyIsImluaXRpYWxEYXRhIiwieUF4aXNMYWJlbFgiLCJ5QXhpc0xhYmVsWSIsInhTY2FsZVByb3ZpZGVyIiwiZGlzY29udGludW91c1RpbWVTY2FsZVByb3ZpZGVyIiwiaW5wdXREYXRlQWNjZXNzb3IiLCJkIiwiZGF0ZSIsInhTY2FsZSIsInhBY2Nlc3NvciIsImRpc3BsYXlYQWNjZXNzb3IiLCJzdGFydCIsImxhc3QiLCJlbmQiLCJNYXRoIiwibWF4IiwieEV4dGVudHMiLCJoaWdoIiwibG93IiwidGltZUZvcm1hdCIsImZvcm1hdCIsInRyYWRlcyIsImVhY2giLCJkYXR1IiwiRGF0ZSIsInRpbWVzdGFtcCIsInNpZGUiLCJhbm5vdGF0aW9uUHJvcHNVcCIsImZvbnRGYW1pbHkiLCJmb250U2l6ZSIsImZpbGwiLCJvcGFjaXR5IiwidGV4dCIsInkiLCJ5U2NhbGUiLCJyYW5nZSIsIm9uQ2xpY2siLCJ0b29sdGlwIiwiTGFiZWxBbm5vdGF0aW9uIiwidGltZUNvbXBhcmUiLCJ0aW1lZnJhbWUiLCJhbm5vdGF0aW9uUHJvcHNEb3duIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYXJyYXkiLCJpc1JlcXVpcmVkIiwibnVtYmVyIiwib25lT2YiLCJkZWZhdWx0UHJvcHMiLCJmaXRXaWR0aCIsIk1TX1BFUl9NSU5VVEUiLCJjb2VmZkZpdmUiLCJjb2VmZk9uZSIsInJvdW5kIiwiZ2V0VGltZSIsImdldEhvdXJzIiwiZ2V0RGF0ZSIsImxvd051bSIsImhpZ2hOdW0iLCJhcnIiLCJmaW5kWVZhbFNlbGwiLCJ5TG93IiwieUhpZ2giLCJwcmljZSIsImZpbmRZVmFsQnV5IiwiZnVsbFJhbmdlIiwibXlSYW5nZSIsInBhcnNlSW50Iiwib3V0T2YiLCJtdWx0aXBsaWVkIiwiQ2hhcnRDb21wb25lbnQiLCJzdGFydFRpbWUiLCJlbmRUaW1lIiwiZGlmZk1zIiwiYWJzIiwiZGlmZlNlY3MiLCJkaWZmTWlucyIsImFsbEV4ZWMiLCJvbmVtaW4iLCJ0cmFkZSIsIm5ld1RyYWRlIiwib3BlbiIsInBhcnNlRmxvYXQiLCJjbG9zZSIsInN0cnQiLCJjb21wYXJlMSIsImNvbXBhcmUyIiwiYWRkaXRpb25hbFRpbWUiLCJ1bnNoaWZ0IiwiZml2ZW1pbiIsImRheSIsIm9uZWhvdXIiLCJvbmVkYXkiLCJlcnIiLCJUb3BCYXJDaGlsZEJpZ0xlZnQiLCJUb3BCYXJDaGlsZEJpZ1JpZ2h0IiwiRmV0Y2hRdWVyeSIsImNsaWNrZWQiLCJpc0F1dGgiLCJzdGFydERhdGUiLCJlbmREYXRlIiwiZmV0Y2hUcmFkZUhpc3RvcnlWYXJpYWJsZXMiLCJzeW1ib2wiLCJmZXRjaFRyYWRlSGlzdG9yeVF1ZXJ5IiwiQ29tcCIsInRlbXBUYWdzUmVhY3Rpb24iLCJoYXNUZW1wVGFncyIsImZvcmNlVXBkYXRlIiwicXVlcnkiLCJ2YXJzIiwiZXJyb3IiLCJjaGVja0FwaUtleSIsInJlc2V0SGFzVGVtcFRhZ3MiLCJjbGVhclRlbXBOb3RlcyIsImNsZWFyVGVtcFRhZ3MiLCJyZXNldFBubCIsIkRhc2hJbml0aWFsVGVybXMiLCJjb29rIiwiUm91dGVyIiwiZGF0ZXMiLCJnZXRTdGF0ZURhdGUiLCJ0aGVtZSIsImluaXRIYXNodGFncyIsInNob3dOb3RlcyIsInNldFNob3dOb3RlcyIsImhhbmRsZUNoYW5nZSIsInRlbXBOb3RlcyIsImlzVGVtcCIsInRpbWUiLCJmaXJzdFRyYWRlIiwibm90ZSIsIm5vdGVzIiwic3BsaXRUYWdzIiwidGFnIiwiYWRkVGVtcE5vdGUiLCJyZW1vdmVIYXNodGFnIiwiaGFzaHRhZyIsInJlZmV0Y2hRdWVyaWVzIiwiY2hhbmdlSGFzVGVtcFRhZ3MiLCJnZXROb3RlcyIsImZhVGltZXMiLCJ0cmFuc2l0aW9uIiwicGFkZGluZyIsImJveFNpemluZyIsImJhY2tncm91bmQiLCJib3JkZXIiLCJvdXRsaW5lIiwiQWRkSGFzaHRhZyIsImdldEhhc2h0YWdzIiwiZmFQbHVzIiwiQWRkSGFzaFN1Ym1pdCIsImlucHV0IiwiUG9wdXAiLCJQb3B1cFRvcCIsIlNpbmdsZUhhc2h0YWdEaXYiLCJTaG93Tm90ZXNEaXYiLCJTaG93Tm90ZXNJbm5lciIsIlNpbmdsZUhhc2h0YWdUZXh0IiwiU2luZ2xlSGFzaHRhZ0RlbGV0ZSIsIkhhc2h0YWdEaXYiLCJGdWxsUm93IiwiTm90ZXNTdWJtaXQiLCJOb3Rlc0lucHV0IiwidGV4dGFyZWEiLCJmbGV4RGlyZWN0aW9uIiwiTXlUZXh0QXJlYSIsInNldFZhbHVlIiwibGlnaHQiLCJzZXRMaWdodCIsInNldENsaWVudCIsInZhbCIsIm5vdFRlbXAiLCJ0b1N0cmluZyIsIm1hcmdpblRvcCIsImNvbG9yIiwiaW5wdXRWYWwiLCJlbmRBcnIiLCJpbnB1dEhhc2h0YWdzIiwiVGFicyIsImFjdGl2ZVRhYiIsInNldEFjdGl2ZVRhYiIsInNldEFjdGl2ZSIsInRhYiIsImJhY2t3YXJkcyIsImZhQ2FyZXRMZWZ0IiwibWFyZ2luUmlnaHQiLCJtYXJnaW5Cb3R0b20iLCJUb3BCYXJDaGlsZEJpZyIsIkV4YW1wbGUiLCJQdXJlQ29tcG9uZW50IiwiZnVsbFRyYWRlcyIsImNyZWF0ZUZ1bGxUcmFkZXMiLCJmdWxsUmF5IiwiZGF0IiwidHJkU3RhcnQiLCJzbGljZWQiLCJzbGljZSIsImsiLCJ0cmRFbmQiLCJuZXdzbGljZWQiLCJyZXR1cm5WYWwiLCJpbml0RGF0YSIsImZpbHRlciIsImNvbXBvbmVudERpZFVwZGF0ZSIsInByZXZQcm9wcyIsImVxdWFsIiwibmV3RnVsbFRyYWRlcyIsImZpcnN0RnVsbFRyYWRlcyIsImlkIiwicmV0dXJuZWQiLCJwbmwiLCJpbm5lckhlaWdodCIsImNoYXJ0V2lkdGgiLCJtaW5XaWR0aCIsInNsaWMiLCJmZXRjaE9uZU1pbnV0ZUNhbmRsZUhpc3RvcnkiLCJmZXRjaEZpdmVNaW51dGVDYW5kbGVIaXN0b3J5IiwiZmV0Y2hPbmVIb3VyQ2FuZGxlSGlzdG9yeSIsImZldGNoT25lRGF5Q2FuZGxlSGlzdG9yeSIsIk1ha2VDb2wiLCJhdmdFbnRyeVByaWNlIiwiYXZnRXhpdFByaWNlIiwiY3VtUXR5IiwicmVhZE1vcmVDbGlja2VkIiwiZ2V0U2xpY0RhdGEiLCJjYWxjZWQiLCJjYWxjVHJhZGVzIiwiYWRkUG5sIiwic2V0U2luZ2xlVHJhZGUiLCJmb3JtYXREYXRlTW9udGhPbmx5Iiwib3JkZXJUeXBlIiwidG9GaXhlZCIsIklzU2hvcnQiLCJpbmNsdWRlcyIsIk9yZGVyRXhlY3V0aW9uIiwiZXhlY1R5cGUiLCJvcmRlclF0eSIsImxlYXZlc1F0eSIsImNhbGNDb21taXNzaW9uIiwiQ29udGFpbkRpdiIsIkNvbnRhaW5EaXZDbGlja2VkIiwiQ29udGFpbkRpdkJsYWNrIiwiQ29udGFpbkRpdkhlYWRlciIsIk5leHRUb0RpdiIsIk5leHRUb0RpdkJsYWNrIiwiTmV4dFRvRGl2QmxhY2tUaXRsZSIsIlRpdGxlU3BhbiIsInNwYW4iLCJOZXh0VG9EaXZCbGFja1RpbWUiLCJOZXh0VG9EaXZIZWFkZXIiLCJzbWFsbEZvbnQiLCJJbm5lclBubFdpbiIsIklubmVyUG5sTG9zcyIsIlJlYWRNb3JlIiwiUmVhZE1vcmVUYWxsIiwiTW9yZUJveFNob3J0IiwiTW9yZUJveFRhbGwiLCJFeGVjQ29udGFpbmVyIiwiVG90YWxEZXRhaWxzIiwiUmVhZE1vcmVJbm5lciIsImlucHV0RGF0YSIsImF2Z0J1eVByaWNlIiwiYXZnU2VsbFByaWNlIiwidG90QnV5Q29udHJhY3RzIiwidG90U2VsbENvbnRyYWN0cyIsImJ1eU51bSIsInNlbGxOdW0iLCJ0b3RCdXlDb250cmFjdHNNdWx0IiwidG90U2VsbENvbnRyYWN0c011bHQiLCJyZWFsUXR5IiwidG90Q29tbWlzc2lvbiIsImF2Z0V4aXQiLCJhdmdFbnRyeSIsInRoZVBubCIsIm15UG5sIiwiZGlmZmVyZW5jZSIsImN1cnJlbnRRdHkiLCJuZXdSZWFsUXR5Iiwib2xkRGF0IiwibmV3VHJhZGVzIiwib2xkVHJhZGVzIiwidHJhZGVIYXNodGFncyIsIm9sZFRyYWRlIiwibSIsIkhlYWRlciIsInJvdXRlciIsImxvZ291dCIsInJlbW92ZSIsImxvY2FsU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJwYXRobmFtZSIsIndpdGhSb3V0ZXIiLCJMb2dvV3JhcCIsIlRlbXBEaXYiLCJMaW5rc1dyYXAiLCJEYXRlUGlja2Vyc1dyYXAiLCJEYXRlUGlja2VyV3JhcCIsIlN0eWxlZExpbmsiLCJoZWFkZXJJdGVtIiwibGluayIsIm11dGVkVGV4dCIsImFjY2VudCIsImhlYWRlciIsImZvcmVncm91bmQiLCJIZWFkZXJMb2dvIiwiTG9nbyIsIm5vcm1hbFRleHQiLCJtb250aE5hbWVzIiwidXRjRGF0ZSIsInRoZURhdGUiLCJob3VycyIsImFkZFplcm9CZWZvcmUiLCJtaW5zIiwiZ2V0TWludXRlcyIsIm1vbnRoSW5kZXgiLCJnZXRNb250aCIsInllYXIiLCJnZXRGdWxsWWVhciIsImZvcm1hdERhdGVTaG9ydCIsImZvcm1hdERhdGVTaG9ydFdpdGhIb3VyIiwibiIsIm1ha2VEYXRlSHJzIiwibWFrZURhdGVEYXlzIiwiaHJzQmFjayIsImR0IiwidG9VVENTdHJpbmciLCJ0b0lTT1N0cmluZyIsInNldEhvdXJzIiwibnVtIiwic2V0RGF0ZSIsInF0eSIsImNvbW1pc3Npb24iLCJTeW1ib2xDaG9vc2VyNzY4IiwiZHJvcGRvd24iLCJzZXREcm9wZG93biIsInNob3dEcm9wZG93biIsInNldFN5bWJvbCIsIm1hcmdpbkxlZnQiLCJmYUNhcmV0VXAiLCJmYUNhcmV0RG93biIsIlBubDc2OCIsIlNpZGViYXIiLCJMYXBwZXJDb250YWluZXIiLCJJbm5lclN5bWJvbENob29zZXIiLCJMYXBwZXIiLCJhc2lkZSIsIklubmVyTGFwcGVyIiwiTGFwcGVyMiIsIkxhcHBlckNob29zZXIiLCJMYXBwZXIzIiwiTGFwcGVyNCIsIlNldFN5bWJvbCIsIkRyb3Bkb3duQ29udGFpbmVyIiwiRHJvcGRvd25MaXN0Q29udGFpbmVyIiwidWwiLCJEcm9wZG93bkxpc3RJdGVtIiwibGkiLCJTaWRlYmFyQ2F0ZWdvcnlMaXN0IiwiY3VzdG9tQ2xpY2tlZCIsInNldEN1c3RvbUNsaWNrZWQiLCJoYW5kbGVDbGljayIsImNoYW5nZURhdGUiLCJoYW5kbGVDdXN0b21DbGlja2VkIiwiZW50ZXJlZCIsInNldEVudGVyZWQiLCJSb3cxIiwiUG9wQ29udGFpbiIsIlBvcExhYmVsIiwiUG9wRW50ZXIiLCJidXR0b24iLCJQb3B1cEl0ZW0iLCJDYXRlZ29yeUxpc3QiLCJuYXYiLCJJdGVtIiwiSXRlbUFjdGl2ZSIsImRhdGVSZWFjdGlvbiIsInNldCIsImZpcnN0RGF0ZSIsIm11bHRpRGF0ZSIsIlNpZGViYXJDYXRlZ29yeUxpc3RIZWFkZXIiLCJTeW1ib2xDaG9vc2VyIiwiUG5sIiwiRm9ybVdyYXBwZXIiLCJ3aWRlIiwiSW5wdXQiLCJpbnB1dEJhY2tncm91bmQiLCJMYWJlbCIsImxhYmVsIiwiY3NzIiwiZmFkZUtleWZyYW1lcyIsImtleWZyYW1lcyIsImZhZGUiLCJzbG93IiwidW5kZXJsaW5lIiwib3ZlcmZsb3ciLCJjb25zdGFudHMiLCJ2b3RlIiwidXB2b3RlIiwiZG93bnZvdGUiLCJkYXJrIiwicGFnZUJhY2tncm91bmQiLCJ2b3RlQnV0dG9uSG92ZXIiLCJhY3RpdmVCYWNrZ3JvdW5kIiwic2hhZG93IiwiaXNEYXJrIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkIiwiZXhwb3J0cyIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwiX3JlYWN0IiwiX3VybCIsIl91dGlscyIsIl9yb3V0ZXIiLCJfcm91dGVyMiIsImlzTG9jYWwiLCJocmVmIiwidXJsIiwicGFyc2UiLCJvcmlnaW4iLCJnZXRMb2NhdGlvbk9yaWdpbiIsImhvc3QiLCJwcm90b2NvbCIsIm1lbW9pemVkRm9ybWF0VXJsIiwiZm9ybWF0RnVuYyIsImxhc3RIcmVmIiwibGFzdEFzIiwibGFzdFJlc3VsdCIsImFzIiwicmVzdWx0IiwiZm9ybWF0VXJsIiwiZm9ybWF0V2l0aFZhbGlkYXRpb24iLCJsaXN0ZW5lcnMiLCJNYXAiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsInByZWZldGNoZWQiLCJnZXRPYnNlcnZlciIsImVudHJpZXMiLCJmb3JFYWNoIiwiZW50cnkiLCJoYXMiLCJjYiIsImlzSW50ZXJzZWN0aW5nIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJ1bm9ic2VydmUiLCJkZWxldGUiLCJyb290TWFyZ2luIiwibGlzdGVuVG9JbnRlcnNlY3Rpb25zIiwiZWwiLCJvYnNlcnZlIiwiTGluayIsInAiLCJjbGVhblVwTGlzdGVuZXJzIiwiZm9ybWF0VXJscyIsImFzSHJlZiIsImFkZEJhc2VQYXRoIiwibGlua0NsaWNrZWQiLCJlIiwibm9kZU5hbWUiLCJjdXJyZW50VGFyZ2V0IiwibWV0YUtleSIsImN0cmxLZXkiLCJzaGlmdEtleSIsIm5hdGl2ZUV2ZW50Iiwid2hpY2giLCJzY3JvbGwiLCJyZXBsYWNlIiwic2hhbGxvdyIsInN1Y2Nlc3MiLCJzY3JvbGxUbyIsImRvY3VtZW50IiwiYm9keSIsImZvY3VzIiwicHJlZmV0Y2giLCJ3YXJuIiwiZ2V0UGF0aHMiLCJwYXJzZWRIcmVmIiwicGFyc2VkQXMiLCJyZXNvbHZlZEhyZWYiLCJoYW5kbGVSZWYiLCJyZWYiLCJ0YWdOYW1lIiwiaXNQcmVmZXRjaGVkIiwiam9pbiIsIm9wdGlvbnMiLCJwYXRocyIsImNyZWF0ZUVsZW1lbnQiLCJjaGlsZCIsIkNoaWxkcmVuIiwib25seSIsImN1cnJlbnQiLCJvbk1vdXNlRW50ZXIiLCJwcmlvcml0eSIsImRlZmF1bHRQcmV2ZW50ZWQiLCJwYXNzSHJlZiIsInByb2Nlc3MiLCJjbG9uZUVsZW1lbnQiLCJleGVjT25jZSIsImV4YWN0Iiwib25lT2ZUeXBlIiwic3RyaW5nIiwib2JqZWN0IiwiYm9vbCIsImVsZW1lbnQiLCJwcm9wTmFtZSIsIl9kZWZhdWx0IiwidXNlUm91dGVyIiwibWFrZVB1YmxpY1JvdXRlckluc3RhbmNlIiwiY3JlYXRlUm91dGVyIiwiTmV4dFJvdXRlciIsIl9yb3V0ZXJDb250ZXh0IiwiX3dpdGhSb3V0ZXIiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJldmVudHMiLCJmaWVsZCIsImdldFJvdXRlciIsImFyZ3VtZW50cyIsIm9uIiwiZXZlbnRGaWVsZCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic3Vic3RyaW5nIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsIkVycm9yIiwidXNlQ29udGV4dCIsIlJvdXRlckNvbnRleHQiLCJfbGVuIiwiYXJncyIsIkFycmF5IiwiX2tleSIsImluc3RhbmNlIiwicHJvcGVydHkiLCJhc3NpZ24iLCJDb21wb3NlZENvbXBvbmVudCIsIldpdGhSb3V0ZXJXcmFwcGVyIiwiZ2V0SW5pdGlhbFByb3BzIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsIm5hbWUiLCJkaXNwbGF5TmFtZSIsIm1pdHQiLCJhbGwiLCJjcmVhdGUiLCJoYW5kbGVyIiwib2ZmIiwiZW1pdCIsImV2dHMiLCJfX2ltcG9ydERlZmF1bHQiLCJtb2QiLCJ1cmxfMSIsIm1pdHRfMSIsInV0aWxzXzEiLCJpc19keW5hbWljXzEiLCJyb3V0ZV9tYXRjaGVyXzEiLCJyb3V0ZV9yZWdleF8xIiwiYmFzZVBhdGgiLCJwYXRoIiwiZGVsQmFzZVBhdGgiLCJzdWJzdHIiLCJ0b1JvdXRlIiwicHJlcGFyZVJvdXRlIiwiZmV0Y2hOZXh0RGF0YSIsImlzU2VydmVyUmVuZGVyIiwiYXR0ZW1wdHMiLCJnZXRSZXNwb25zZSIsImZldGNoIiwiX19ORVhUX0RBVEFfXyIsImJ1aWxkSWQiLCJjcmVkZW50aWFscyIsIm9rIiwic3RhdHVzIiwianNvbiIsImNvZGUiLCJpbml0aWFsUHJvcHMiLCJwYWdlTG9hZGVyIiwiQXBwIiwid3JhcEFwcCIsInN1YnNjcmlwdGlvbiIsImlzRmFsbGJhY2siLCJzZGMiLCJvblBvcFN0YXRlIiwiY2hhbmdlU3RhdGUiLCJnZXRVUkwiLCJpc1NzciIsImFzUGF0aCIsIl9icHMiLCJfZ2V0U3RhdGljRGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwicm91dGUiLCJjb21wb25lbnRzIiwiX19OX1NTRyIsIl9fTl9TU1AiLCJpc0R5bmFtaWNSb3V0ZSIsImF1dG9FeHBvcnQiLCJzdWIiLCJjbGMiLCJfd3JhcEFwcCIsIl9yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCIsInVwZGF0ZSIsIm5ld0RhdGEiLCJub3RpZnkiLCJiYWNrIiwiaGlzdG9yeSIsImNoYW5nZSIsIm1ldGhvZCIsIl9hcyIsInJlamVjdCIsIl9oIiwiU1QiLCJwZXJmb3JtYW5jZSIsIm1hcmsiLCJhYm9ydENvbXBvbmVudExvYWQiLCJvbmx5QUhhc2hDaGFuZ2UiLCJzY3JvbGxUb0hhc2giLCJ1cmxJc05ldyIsImFzUGF0aG5hbWUiLCJyb3V0ZVJlZ2V4IiwiZ2V0Um91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJnZXRSb3V0ZU1hdGNoZXIiLCJtaXNzaW5nUGFyYW1zIiwia2V5cyIsImdyb3VwcyIsInBhcmFtIiwiZ2V0Um91dGVJbmZvIiwicm91dGVJbmZvIiwiY2FuY2VsbGVkIiwiYXBwQ29tcCIsIm5leHQiLCJpc1ByZXJlbmRlcmVkIiwiY2FjaGVkUm91dGVJbmZvIiwiaGFuZGxlRXJyb3IiLCJsb2FkRXJyb3JGYWlsIiwiZmV0Y2hDb21wb25lbnQiLCJwYWdlIiwiZ2lwRXJyIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiX2dldERhdGEiLCJiZWZvcmVQb3BTdGF0ZSIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJuZXdVcmxOb0hhc2giLCJpZEVsIiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxJbnRvVmlldyIsIm5hbWVFbCIsImdldEVsZW1lbnRzQnlOYW1lIiwicHJlZmV0Y2hEYXRhIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwibG9hZFBhZ2UiLCJmbiIsImN0eCIsIkFwcFRyZWUiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiVEVTVF9ST1VURSIsInRlc3QiLCJyZSIsImV4ZWMiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJfIiwicGFyYW1zIiwic2x1Z05hbWUiLCJnIiwicG9zIiwicmVwZWF0IiwiZXNjYXBlUmVnZXgiLCJzdHIiLCJub3JtYWxpemVkUm91dGUiLCJlc2NhcGVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwiJDEiLCJpc0NhdGNoQWxsIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJSZWdFeHAiLCJuYW1lZFJlZ2V4IiwidXNlZCIsImhvc3RuYW1lIiwicG9ydCIsImdldERpc3BsYXlOYW1lIiwiaXNSZXNTZW50IiwiZmluaXNoZWQiLCJoZWFkZXJzU2VudCIsIl9hIiwicHJvdG90eXBlIiwicGFnZVByb3BzIiwidXJsT2JqZWN0S2V5cyIsIlNQIiwibWVhc3VyZSIsImRhc2hib2FyZCIsImluaXRpYWxTdGF0ZSIsIlBhZ2VXcmFwIiwiaXNTZXJ2ZXIiLCJ1c2VTdGF0aWNSZW5kZXJpbmciLCJTdG9yZSIsIm9ic2VydmFibGUiLCJwZXJzaXN0IiwiYWN0aW9uIiwibmV3RGF0ZSIsIm5ld05vdGUiLCJhbHJlYWR5UHJlc2VudE5vdGUiLCJuZXdUYWciLCJ0ZW1wVGFncyIsIm5ld1N5bWJvbCIsImh5ZHJhdGUiLCJTdG9yZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiaW5pdGlhbGl6ZVN0b3JlIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUN4RkEsd0U7Ozs7Ozs7Ozs7O0FDQUEsK0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFFZSxnRUFBQztBQUFFQTtBQUFGLENBQUQsS0FBa0Isb0JBQU9BLFFBQVAsQ0FBakMsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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LGVBQVQsQ0FBeUI3c0IsV0FBekIsRUFBc0M7QUFDM0M7QUFDQSxNQUFJOHJCLFFBQUosRUFBYztBQUNaLFdBQU8sSUFBSUUsS0FBSixDQUFVRixRQUFWLEVBQW9COXJCLFdBQXBCLENBQVA7QUFDRDs7QUFDRCxNQUFJdEgsS0FBSyxLQUFLLElBQWQsRUFBb0I7QUFDbEJBLFNBQUssR0FBRyxJQUFJc3pCLEtBQUosQ0FBVUYsUUFBVixFQUFvQjlyQixXQUFwQixDQUFSO0FBQ0Q7O0FBRUQwc0IsU0FBTyxDQUFDLE9BQUQsRUFBVWgwQixLQUFWLENBQVAsQ0FBd0I0QixJQUF4QixDQUE2QixNQUFNO0FBQ2pDekIsV0FBTyxDQUFDQyxHQUFSLENBQVksNkJBQVo7QUFDRCxHQUZEO0FBSUEsU0FBT0osS0FBUDtBQUNELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvSEQsOEQ7Ozs7Ozs7Ozs7O0FDQUEsMkQ7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsNkQ7Ozs7Ozs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7Ozs7O0FDQUEsOEQ7Ozs7Ozs7Ozs7O0FDQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEsNEQ7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsZ0MiLCJmaWxlIjoic3RhdGljL2RldmVsb3BtZW50L3BhZ2VzL2Rhc2hib2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA1KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiKTsiLCJpbXBvcnQgXCJib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0ICh7IGNoaWxkcmVuIH0pID0+IDxtYWluPntjaGlsZHJlbn08L21haW4+O1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7XG4gIENvbnRhaW5EaXYsXG4gIE5leHRUb0RpdixcbiAgTmV4dFRvRGl2SGVhZGVyLFxuICBSb3dDb250YWluZXIsXG4gIENvbnRhaW5EaXZIZWFkZXIsXG59IGZyb20gXCIuLi9UYWRlcy9UcmFkZXNcIjtcbmltcG9ydCBSZUNoYXJ0IGZyb20gXCIuLi9UYWRlcy9UcmFkZXNcIjtcbmltcG9ydCBTaWRlYmFyLCB7IFN5bWJvbENob29zZXIsIFBubCB9IGZyb20gXCIuLi8uLi9NZW51L01lbnVcIjtcbmltcG9ydCB7IFBubDc2OCwgU3ltYm9sQ2hvb3Nlcjc2OCB9IGZyb20gXCIuLi8uLi9NZW51Lzc2OHB4L01lbnVcIjtcbmltcG9ydCB7IGdldE5ld0RhdCB9IGZyb20gXCIuLi9zaGFyZWQvaGVscGVyc1wiO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xuaW1wb3J0IHsgZmFDYXJldExlZnQgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBOb3RlcyBmcm9tIFwiLi4vTm90ZXMvTm90ZXNUZXN0XCI7XG5pbXBvcnQgVGFicyBmcm9tIFwiLi4vVGFic1wiO1xuaW1wb3J0IHtcbiAgTmF2LFxuICBOYXZJdGVtLFxuICBEcm9wZG93bixcbiAgRHJvcGRvd25JdGVtLFxuICBEcm9wZG93blRvZ2dsZSxcbiAgRHJvcGRvd25NZW51LFxuICBOYXZMaW5rLFxufSBmcm9tIFwicmVhY3RzdHJhcFwiO1xuXG5pbXBvcnQgeyBpbmplY3QsIG9ic2VydmVyIH0gZnJvbSBcIm1vYngtcmVhY3RcIjtcbmltcG9ydCB7IHdoZW4sIHJlYWN0aW9uIH0gZnJvbSBcIm1vYnhcIjtcbmltcG9ydCB7IHdpZGVGb250IH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9oZWxwZXJzXCI7XG5cbkBpbmplY3QoXCJzdG9yZVwiKVxuQG9ic2VydmVyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBnbG9iYWxIYXNoOiBbXSxcbiAgICAgIGdsb2JhbEhhc2hBY3RpdmU6IFtcImFsbFwiXSxcbiAgICAgIGRhdGE6IG51bGwsXG4gICAgICBmaWx0ZXJlZERhdGE6IG51bGwsXG4gICAgICBpc1NpbmdsZTogZmFsc2UsXG4gICAgICBpc1NpbmdsZU5vdGVzOiBmYWxzZSxcbiAgICB9O1xuICAgIHRoaXMuZ2V0R2xvYmFsSGFzaHRhZ3MgPSB0aGlzLmdldEdsb2JhbEhhc2h0YWdzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYXNodGFnQ2xpY2tlZCA9IHRoaXMuaGFzaHRhZ0NsaWNrZWQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhc2h0YWdDbGlja2VkQmFjayA9IHRoaXMuaGFzaHRhZ0NsaWNrZWRCYWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy51cGRhdGVXaW5kb3dEaW1lbnNpb25zID0gdGhpcy51cGRhdGVXaW5kb3dEaW1lbnNpb25zLmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGE6IHRoaXMucHJvcHMuZGF0YSB9KTtcbiAgICB0aGlzLmdldEdsb2JhbEhhc2h0YWdzKHRoaXMucHJvcHMuZGF0YSk7XG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5zaW5nbGVUcmFkZVJlYWN0aW9uID0gcmVhY3Rpb24oXG4gICAgICAoKSA9PiB0aGlzLnByb3BzLnN0b3JlLmhhc1NpbmdsZVRyYWRlLFxuICAgICAgKG5vdGlmaWNhdGlvbnMsIHJlYWN0aW9uKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiSEFTIFNJTkdMRVwiLCB0aGlzLnByb3BzLnN0b3JlLmhhc1NpbmdsZVRyYWRlKTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc3RvcmUuaGFzU2luZ2xlVHJhZGUgPT0gZmFsc2UpIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNTaW5nbGU6IGZhbHNlIH0pO1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwic2V0dGluZyBiYWNrXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaXNTaW5nbGU6IHRydWUsXG4gICAgICAgICAgICBzaW5nbGVUcmFkZTogdGhpcy5wcm9wcy5zdG9yZS5zaW5nbGVUcmFkZVswXSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLCBcIlNUQVRFRVwiKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInNldHRpbmcgYmFja1wiKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICk7XG4gICAgdGhpcy5zaW5nbGVOb3Rlc1JlYWN0aW9uID0gcmVhY3Rpb24oXG4gICAgICAoKSA9PiB0aGlzLnByb3BzLnN0b3JlLmlzU2luZ2xlTm90ZXMsXG4gICAgICAobm90aWZpY2F0aW9ucywgcmVhY3Rpb24pID0+IHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc3RvcmUuaXNTaW5nbGVOb3RlcyA9PSBmYWxzZSkge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc1NpbmdsZU5vdGVzOiBmYWxzZSB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGlzU2luZ2xlTm90ZXM6IHRydWUsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy51cGRhdGVXaW5kb3dEaW1lbnNpb25zKTtcbiAgfVxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLnVwZGF0ZVdpbmRvd0RpbWVuc2lvbnMpO1xuICB9XG4gIHVwZGF0ZVdpbmRvd0RpbWVuc2lvbnMoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB3aWR0aDogd2luZG93LmlubmVyV2lkdGgsXG4gICAgfSk7XG4gIH1cblxuICBhc3luYyBnZXRHbG9iYWxIYXNodGFncyhkYXRhKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmZldGNoVHJhZGVIaXN0b3J5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgdGhpc1RyYWRlSGFzaCA9IGRhdGEuZmV0Y2hUcmFkZUhpc3RvcnlbaV0uaGFzaHRhZ3Muc3BsaXQoXCIsXCIpO1xuICAgICAgaWYgKHRoaXNUcmFkZUhhc2ggIT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXNUcmFkZUhhc2gubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBpZiAodGhpc1RyYWRlSGFzaFtqXSAhPSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICBsZXQgbmV3R2xvYmFsSGFzaCA9IHRoaXMuc3RhdGUuZ2xvYmFsSGFzaDtcbiAgICAgICAgICAgIG5ld0dsb2JhbEhhc2gucHVzaCh0aGlzVHJhZGVIYXNoW2pdKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBnbG9iYWxIYXNoOiBuZXdHbG9iYWxIYXNoIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGhhc2h0YWdDbGlja2VkQmFjayh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSA9PSBcImFsbFwiKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkRPIE5PVEhJTkdcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBuZXdIYXNoQWN0aXZlID0gW107XG4gICAgICBsZXQgbmV3SGFzaCA9IHRoaXMuc3RhdGUuZ2xvYmFsSGFzaDtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zdGF0ZS5nbG9iYWxIYXNoQWN0aXZlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5zdGF0ZS5nbG9iYWxIYXNoQWN0aXZlW2ldKSB7XG4gICAgICAgICAgbmV3SGFzaEFjdGl2ZS5wdXNoKHRoaXMuc3RhdGUuZ2xvYmFsSGFzaEFjdGl2ZVtpXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV3SGFzaC5wdXNoKHRoaXMuc3RhdGUuZ2xvYmFsSGFzaEFjdGl2ZVtpXSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGkgPT0gdGhpcy5zdGF0ZS5nbG9iYWxIYXNoQWN0aXZlLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICBpZiAobmV3SGFzaEFjdGl2ZVswXSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGxldCBuZXdIYXNoMiA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBuZXdIYXNoLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgIGlmIChuZXdIYXNoW2pdICE9IFwiYWxsXCIpIHtcbiAgICAgICAgICAgICAgICBuZXdIYXNoMi5wdXNoKG5ld0hhc2hbal0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChqID09IG5ld0hhc2gubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgZ2xvYmFsSGFzaDogbmV3SGFzaDIsXG4gICAgICAgICAgICAgICAgICBnbG9iYWxIYXNoQWN0aXZlOiBbXCJhbGxcIl0sXG4gICAgICAgICAgICAgICAgICBmaWx0ZXJlZERhdGE6IG51bGwsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IG5ld0hhc2gyID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG5ld0hhc2gubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgaWYgKG5ld0hhc2hbal0gIT0gXCJhbGxcIikge1xuICAgICAgICAgICAgICAgIG5ld0hhc2gyLnB1c2gobmV3SGFzaFtqXSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKGogPT0gbmV3SGFzaC5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgZ2V0TmV3RGF0KHRoaXMuc3RhdGUuZGF0YSwgbmV3SGFzaEFjdGl2ZSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgZ2xvYmFsSGFzaDogbmV3SGFzaDIsXG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbEhhc2hBY3RpdmU6IG5ld0hhc2hBY3RpdmUsXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcmVkRGF0YTogcmVzLFxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhc3luYyBoYXNodGFnQ2xpY2tlZCh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSA9PSBcImFsbFwiKSB7XG4gICAgICBsZXQgbmV3R2xvYmFsSGFzaCA9IHRoaXMuc3RhdGUuZ2xvYmFsSGFzaDtcbiAgICAgIGxldCBuZXdHbG9iYWxIYXNoMiA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnN0YXRlLmdsb2JhbEhhc2hBY3RpdmUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbmV3R2xvYmFsSGFzaC5wdXNoKHRoaXMuc3RhdGUuZ2xvYmFsSGFzaEFjdGl2ZVtpXSk7XG4gICAgICAgIGlmIChpID09IHRoaXMuc3RhdGUuZ2xvYmFsSGFzaEFjdGl2ZS5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBuZXdHbG9iYWxIYXNoLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBpZiAobmV3R2xvYmFsSGFzaFtqXSAhPSBcImFsbFwiKSB7XG4gICAgICAgICAgICAgIG5ld0dsb2JhbEhhc2gyLnB1c2gobmV3R2xvYmFsSGFzaFtqXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaiA9PSBuZXdHbG9iYWxIYXNoLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgZ2xvYmFsSGFzaDogbmV3R2xvYmFsSGFzaDIsXG4gICAgICAgICAgICAgICAgZ2xvYmFsSGFzaEFjdGl2ZTogW1wiYWxsXCJdLFxuICAgICAgICAgICAgICAgIGZpbHRlcmVkRGF0YTogbnVsbCxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMuc3RhdGUuZ2xvYmFsSGFzaEFjdGl2ZVswXSA9PSB1bmRlZmluZWQpIHtcbiAgICAgIGxldCBuZXdBcnJheSA9IFtdO1xuICAgICAgbmV3QXJyYXkucHVzaCh2YWx1ZSk7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZ2xvYmFsSGFzaEFjdGl2ZTogbmV3QXJyYXkgfSk7XG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMuc3RhdGUuZ2xvYmFsSGFzaC5pbmRleE9mKHZhbHVlKTtcbiAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgIGxldCBuZXdHbG9iYWxIYXNoID0gdGhpcy5zdGF0ZS5nbG9iYWxIYXNoO1xuICAgICAgICBuZXdHbG9iYWxIYXNoLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBnbG9iYWxIYXNoOiBuZXdHbG9iYWxIYXNoIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3RhdGUuZ2xvYmFsSGFzaEFjdGl2ZS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRoaXMuc3RhdGUuZ2xvYmFsSGFzaEFjdGl2ZVtpXSA9PSBcImFsbFwiKSB7XG4gICAgICAgIHRoaXMuc3RhdGUuZ2xvYmFsSGFzaEFjdGl2ZSA9IFtdO1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuc3RhdGUuZ2xvYmFsSGFzaC5pbmRleE9mKHZhbHVlKTtcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICBsZXQgbmV3R2xvYmFsSGFzaCA9IHRoaXMuc3RhdGUuZ2xvYmFsSGFzaDtcbiAgICAgICAgICBuZXdHbG9iYWxIYXNoLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgbGV0IHRvcmYgPSBmYWxzZTtcbiAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG5ld0dsb2JhbEhhc2gubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGlmIChcImFsbFwiID09IG5ld0dsb2JhbEhhc2hbal0pIHtcbiAgICAgICAgICAgICAgdG9yZiA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaiA9PSBuZXdHbG9iYWxIYXNoLmxlbmd0aCAtIDEgJiYgdG9yZiA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICBuZXdHbG9iYWxIYXNoLnB1c2goXCJhbGxcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGxldCBuZXdHbG9iYWxIYXNoQWN0aXZlID0gdGhpcy5zdGF0ZS5nbG9iYWxIYXNoQWN0aXZlO1xuICAgICAgICAgIG5ld0dsb2JhbEhhc2hBY3RpdmUucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgZ2V0TmV3RGF0KHRoaXMuc3RhdGUuZGF0YSwgbmV3R2xvYmFsSGFzaEFjdGl2ZSkudGhlbigobmV3RGF0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgZ2xvYmFsSGFzaEFjdGl2ZTogbmV3R2xvYmFsSGFzaEFjdGl2ZSxcbiAgICAgICAgICAgICAgZ2xvYmFsSGFzaDogbmV3R2xvYmFsSGFzaCxcbiAgICAgICAgICAgICAgZmlsdGVyZWREYXRhOiBuZXdEYXQsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHZhbHVlID09IHRoaXMuc3RhdGUuZ2xvYmFsSGFzaEFjdGl2ZVtpXSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoaSA9PSB0aGlzLnN0YXRlLmdsb2JhbEhhc2hBY3RpdmUubGVuZ3RoIC0gMSkge1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuc3RhdGUuZ2xvYmFsSGFzaC5pbmRleE9mKHZhbHVlKTtcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICBsZXQgbmV3R2xvYmFsSGFzaCA9IHRoaXMuc3RhdGUuZ2xvYmFsSGFzaDtcbiAgICAgICAgICBuZXdHbG9iYWxIYXNoLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgLy8gbmV3R2xvYmFsSGFzaC5wdXNoKFwiYWxsXCIpO1xuICAgICAgICAgIGxldCB0b3JmID0gZmFsc2U7XG4gICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBuZXdHbG9iYWxIYXNoLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBpZiAoXCJhbGxcIiA9PSBuZXdHbG9iYWxIYXNoW2pdKSB7XG4gICAgICAgICAgICAgIHRvcmYgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGogPT0gbmV3R2xvYmFsSGFzaC5sZW5ndGggLSAxICYmIHRvcmYgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgbmV3R2xvYmFsSGFzaC5wdXNoKFwiYWxsXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBsZXQgbmV3R2xvYmFsSGFzaEFjdGl2ZSA9IHRoaXMuc3RhdGUuZ2xvYmFsSGFzaEFjdGl2ZTtcbiAgICAgICAgICBuZXdHbG9iYWxIYXNoQWN0aXZlLnB1c2godmFsdWUpO1xuICAgICAgICAgIGdldE5ld0RhdCh0aGlzLnN0YXRlLmRhdGEsIG5ld0dsb2JhbEhhc2hBY3RpdmUpLnRoZW4oKG5ld0RhdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIGdsb2JhbEhhc2hBY3RpdmU6IG5ld0dsb2JhbEhhc2hBY3RpdmUsXG4gICAgICAgICAgICAgIGdsb2JhbEhhc2g6IG5ld0dsb2JhbEhhc2gsXG4gICAgICAgICAgICAgIGZpbHRlcmVkRGF0YTogbmV3RGF0LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLmRhdGEgIT0gbnVsbCkge1xuICAgICAgaWYgKHRoaXMuc3RhdGUuaXNTaW5nbGUgPT0gZmFsc2UpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJJUyBTSU5HTEUgSVMgRkFMU0VcIik7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPFdyYXBwZXI+XG4gICAgICAgICAgICA8Q2hhcnRXcmFwcGVyPlxuICAgICAgICAgICAgICA8VG9wQmFyUGFyZW50PlxuICAgICAgICAgICAgICAgIDxUb3BCYXJUb3A+XG4gICAgICAgICAgICAgICAgICA8VG9wQmFyVG9wTGVmdD5cbiAgICAgICAgICAgICAgICAgICAgPFBubDc2OCAvPlxuICAgICAgICAgICAgICAgICAgPC9Ub3BCYXJUb3BMZWZ0PlxuICAgICAgICAgICAgICAgICAgPFRvcEJhclRvcFJpZ2h0PlxuICAgICAgICAgICAgICAgICAgICA8U3ltYm9sQ2hvb3Nlcjc2OCAvPlxuICAgICAgICAgICAgICAgICAgPC9Ub3BCYXJUb3BSaWdodD5cbiAgICAgICAgICAgICAgICA8L1RvcEJhclRvcD5cbiAgICAgICAgICAgICAgICA8VG9wQmFyQm90dG9tPlxuICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZ2xvYmFsSGFzaEFjdGl2ZS5tYXAoKGhhc2gpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICA8VG9wSGFzaHRhZ0luZGl2aWR1YWxBY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFzaHRhZ0NsaWNrZWRCYWNrKGhhc2gpfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICN7aGFzaH1cbiAgICAgICAgICAgICAgICAgICAgICA8L1RvcEhhc2h0YWdJbmRpdmlkdWFsQWN0aXZlPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5nbG9iYWxIYXNoLm1hcCgoaGFzaCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxUb3BIYXNodGFnSW5kaXZpZHVhbFxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYXNodGFnQ2xpY2tlZChoYXNoKX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAje2hhc2h9XG4gICAgICAgICAgICAgICAgICAgICAgPC9Ub3BIYXNodGFnSW5kaXZpZHVhbD5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvVG9wQmFyQm90dG9tPlxuICAgICAgICAgICAgICA8L1RvcEJhclBhcmVudD5cbiAgICAgICAgICAgICAgPFdob2xlR3JpZD5cbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5pc1NpbmdsZU5vdGVzID09IGZhbHNlID8gKFxuICAgICAgICAgICAgICAgICAgPENvbnRhaW5EaXZIZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgIDxOZXh0VG9EaXZIZWFkZXI+U3RhcnQ8L05leHRUb0RpdkhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgPE5leHRUb0RpdkhlYWRlcj5FbmQ8L05leHRUb0RpdkhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgPE5leHRUb0RpdkhlYWRlcj5ML1M8L05leHRUb0RpdkhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgPE5leHRUb0RpdkhlYWRlcj5FbnRyeTwvTmV4dFRvRGl2SGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICA8TmV4dFRvRGl2SGVhZGVyPkV4aXQ8L05leHRUb0RpdkhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgPE5leHRUb0RpdkhlYWRlcj5RdHk8L05leHRUb0RpdkhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgPE5leHRUb0RpdkhlYWRlcj5SUE5MPC9OZXh0VG9EaXZIZWFkZXI+XG4gICAgICAgICAgICAgICAgICA8L0NvbnRhaW5EaXZIZWFkZXI+XG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgPFJlQ2hhcnRcbiAgICAgICAgICAgICAgICAgIGRhdGE9e3RoaXMuc3RhdGUuZGF0YX1cbiAgICAgICAgICAgICAgICAgIGZpbHRlcmVkRGF0YT17dGhpcy5zdGF0ZS5maWx0ZXJlZERhdGF9XG4gICAgICAgICAgICAgICAgICBpbml0RGF0YT17dGhpcy5wcm9wcy5kYXRhfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvV2hvbGVHcmlkPlxuICAgICAgICAgICAgPC9DaGFydFdyYXBwZXI+XG4gICAgICAgICAgPC9XcmFwcGVyPlxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJJUyBTSU5HTEUgSVMgVFJVRVwiKTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8V3JhcHBlcj5cbiAgICAgICAgICAgIDxDaGFydFdyYXBwZXI+XG4gICAgICAgICAgICAgIDxUb3BCYXJQYXJlbnQ+XG4gICAgICAgICAgICAgICAgPFRvcEJhckNoaWxkQmlnTGVmdD5cbiAgICAgICAgICAgICAgICAgIDxUYWJzIC8+XG4gICAgICAgICAgICAgICAgPC9Ub3BCYXJDaGlsZEJpZ0xlZnQ+XG4gICAgICAgICAgICAgICAgPFRvcEJhckNoaWxkU21hbGw+XG4gICAgICAgICAgICAgICAgICA8VG9wSGFzaHRhZ0luZGl2aWR1YWxBY3RpdmVQbmw+XG4gICAgICAgICAgICAgICAgICAgIDxQbmwgLz5cbiAgICAgICAgICAgICAgICAgIDwvVG9wSGFzaHRhZ0luZGl2aWR1YWxBY3RpdmVQbmw+XG4gICAgICAgICAgICAgICAgPC9Ub3BCYXJDaGlsZFNtYWxsPlxuICAgICAgICAgICAgICAgIDxUb3BCYXJDaGlsZEJpZ1JpZ2h0PlxuICAgICAgICAgICAgICAgICAgPFJpZ2h0VGFicz5cbiAgICAgICAgICAgICAgICAgICAgPE5vdGVzIGZpcnN0VHJhZGU9e3RoaXMuc3RhdGUuc2luZ2xlVHJhZGV9IC8+XG4gICAgICAgICAgICAgICAgICA8L1JpZ2h0VGFicz5cbiAgICAgICAgICAgICAgICA8L1RvcEJhckNoaWxkQmlnUmlnaHQ+XG4gICAgICAgICAgICAgIDwvVG9wQmFyUGFyZW50PlxuICAgICAgICAgICAgICA8V2hvbGVHcmlkPlxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmlzU2luZ2xlTm90ZXMgPT0gZmFsc2UgPyAoXG4gICAgICAgICAgICAgICAgICA8Q29udGFpbkRpdkhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgPE5leHRUb0RpdkhlYWRlcj5TdGFydDwvTmV4dFRvRGl2SGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICA8TmV4dFRvRGl2SGVhZGVyPkVuZDwvTmV4dFRvRGl2SGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICA8TmV4dFRvRGl2SGVhZGVyPkwvUzwvTmV4dFRvRGl2SGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICA8TmV4dFRvRGl2SGVhZGVyPkVudHJ5PC9OZXh0VG9EaXZIZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgIDxOZXh0VG9EaXZIZWFkZXI+RXhpdDwvTmV4dFRvRGl2SGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICA8TmV4dFRvRGl2SGVhZGVyPlF0eTwvTmV4dFRvRGl2SGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICA8TmV4dFRvRGl2SGVhZGVyPlJQTkw8L05leHRUb0RpdkhlYWRlcj5cbiAgICAgICAgICAgICAgICAgIDwvQ29udGFpbkRpdkhlYWRlcj5cbiAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICA8UmVDaGFydFxuICAgICAgICAgICAgICAgICAgZGF0YT17dGhpcy5zdGF0ZS5kYXRhfVxuICAgICAgICAgICAgICAgICAgZmlsdGVyZWREYXRhPXt0aGlzLnN0YXRlLmZpbHRlcmVkRGF0YX1cbiAgICAgICAgICAgICAgICAgIGluaXREYXRhPXt0aGlzLnByb3BzLmRhdGF9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9XaG9sZUdyaWQ+XG4gICAgICAgICAgICA8L0NoYXJ0V3JhcHBlcj5cbiAgICAgICAgICA8L1dyYXBwZXI+XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmNvbnN0IFNpbmdsZVRhYklubmVyID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luOiBhdXRvO1xuYDtcblxuY29uc3QgU2luZ2xlVGFiID0gc3R5bGVkLmRpdmBcbiAgY29sb3I6ICR7KHByb3BzKSA9PiAocHJvcHMuaXNBY3RpdmUgPyBcIiNmZmZcIiA6IFwiIzAwMFwiKX07XG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHByb3BzKSA9PiAocHJvcHMuaXNBY3RpdmUgPyBcIiMwMDBcIiA6IFwiI2ZmZlwiKX07XG5cbiAgbWFyZ2luOiBhdXRvIDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgcGFkZGluZzogNXB4O1xuICA6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuYDtcblxuY29uc3QgV3JhcFRhYnMgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmb250LXNpemU6IDE1cHg7XG5gO1xuY29uc3QgV2hvbGVHcmlkID0gc3R5bGVkLmRpdmBgO1xuLy8gYm9yZGVyOiAxcHggc29saWQgI2YyZjJmMjtcblxuY29uc3QgVG9wQmFyUGFyZW50ID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xuYDtcbmNvbnN0IFRvcEJhclRvcCA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBvdmVyZmxvdzogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuYDtcbmNvbnN0IFRvcEJhckJvdHRvbSA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBvdmVyZmxvdzogYXV0bztcbmA7XG5cbi8vIGZsZXg6IDEgMSA0NSU7IC8qZ3JvdyB8IHNocmluayB8IGJhc2lzICovXG5jb25zdCBUb3BCYXJUb3BSaWdodCA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiA1MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIG92ZXJmbG93OiBhdXRvO1xuYDtcbmNvbnN0IFRvcEJhclRvcExlZnQgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBvdmVyZmxvdzogYXV0bztcbiAgJHt3aWRlRm9udH1cbmA7XG5cbmNvbnN0IFRvcEJhckNoaWxkU21hbGwgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB3aWR0aDogMTAlO1xuYDtcblxuY29uc3QgVG9wSGFzaHRhZ0luZGl2aWR1YWwgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kOiAjZjhmOGZmO1xuICBjb2xvcjogIzAwMDtcbiAgcGFkZGluZzogOHB4O1xuICBtYXJnaW46IDAgMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAke3dpZGVGb250fVxuXG4gIDpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuYDtcblxuY29uc3QgVG9wSGFzaHRhZ0luZGl2aWR1YWxBY3RpdmUgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kOiAjMjEyNTI4O1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogOHB4O1xuICBtYXJnaW46IDAgMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAke3dpZGVGb250fVxuICA6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICBtYXJnaW4tbGVmdDogMDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbmA7XG5jb25zdCBUb3BIYXNodGFnSW5kaXZpZHVhbEFjdGl2ZVJpZ2h0ID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZDogIzIxMjUyODtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDhweDtcbiAgbWFyZ2luOiAwIDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgJHt3aWRlRm9udH1cbiAgbWFyZ2luOjAgYXV0bztcbiAgOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgbWFyZ2luLXJpZ2h0OiAwO1xuYDtcbmNvbnN0IFJpZ2h0VGFicyA9IHN0eWxlZC5kaXZgXG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW46IDAgMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAke3dpZGVGb250fVxuICBtYXJnaW46MCBhdXRvO1xuICA6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICBtYXJnaW4tcmlnaHQ6IDA7XG5gO1xuXG5jb25zdCBUb3BIYXNodGFnSW5kaXZpZHVhbEFjdGl2ZVBubCA9IHN0eWxlZC5kaXZgXG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gICR7d2lkZUZvbnR9XG4gIDpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIG1hcmdpbjogYXV0bztcbmA7XG5cbmNvbnN0IENoYXJ0V3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwYWRkaW5nOiA1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgfVxuYDtcblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi10b3A6IDVweDtcbmA7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQXBvbGxvQ29uc3VtZXIgfSBmcm9tIFwicmVhY3QtYXBvbGxvXCI7XG5pbXBvcnQgZ3FsIGZyb20gXCJncmFwaHFsLXRhZ1wiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IEFsZXJ0IH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcbmltcG9ydCBcImJvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1wiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBGb3JtV3JhcHBlciBmcm9tIFwiLi4vZm9ybS9Gb3JtV3JhcHBlclwiO1xuaW1wb3J0IElucHV0IGZyb20gXCIuLi9mb3JtL0lucHV0XCI7XG5pbXBvcnQgTGFiZWwgZnJvbSBcIi4uL2Zvcm0vTGFiZWxcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uL3NoYXJlZC9CdXR0b25cIjtcbmNvbnN0IENvb2tpZSA9IHJlcXVpcmUoXCJqcy1jb29raWVcIik7XG5cbmNvbnN0IEFwaUtleUZvcm0gPSAoKSA9PiB7XG4gIGNvbnN0IFtyZXMsIHNldFJlc10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbbm90U3VibWl0dGVkLCBzZXROb3RTdWJtaXR0ZWRdID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGV2ZW50LCBjbGllbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNldE5vdFN1Ym1pdHRlZChmYWxzZSk7XG4gICAgY29uc3QgZm9ybSA9IGV2ZW50LnRhcmdldDtcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyB3aW5kb3cuRm9ybURhdGEoZm9ybSk7XG4gICAgY29uc3Qga2V5ID0gZm9ybURhdGEuZ2V0KFwia2V5XCIpO1xuICAgIGNvbnN0IHNlY3JldCA9IGZvcm1EYXRhLmdldChcInNlY3JldFwiKTtcbiAgICAvLyBjb25zb2xlLmxvZyhlbWFpbCwgcGFzc3dvcmQpO1xuICAgIGZvcm0ucmVzZXQoKTtcblxuICAgIC8vY2hlY2sgaWYgYXBpIGtleSBpcyB2YWxpZFxuXG4gICAgbGV0IGFwaVJlcyA9IGNsaWVudC5tdXRhdGUoe1xuICAgICAgbXV0YXRpb246IGdxbGBcbiAgICAgICAgbXV0YXRpb24gYWRkQXBpS2V5KCRrZXk6IFN0cmluZyEsICRzZWNyZXQ6IFN0cmluZyEpIHtcbiAgICAgICAgICBhZGRBcGlLZXkoa2V5OiAka2V5LCBzZWNyZXQ6ICRzZWNyZXQpXG4gICAgICAgIH1cbiAgICAgIGAsXG4gICAgICB2YXJpYWJsZXM6IHsga2V5LCBzZWNyZXQgfSxcbiAgICB9KTtcbiAgICBhcGlSZXNcbiAgICAgIC50aGVuKChhcGlSZXMpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCI8PFJFUz4+XCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhhcGlSZXMuZGF0YS5hZGRBcGlLZXkpO1xuICAgICAgICBjb25zb2xlLmxvZyh0eXBlb2YgYXBpUmVzLmRhdGEuYWRkQXBpS2V5KTtcbiAgICAgICAgbGV0IGlzVHJ1ZSA9IGFwaVJlcy5kYXRhLmFkZEFwaUtleSA9PSB0cnVlO1xuICAgICAgICBjb25zb2xlLmxvZyhpc1RydWUpO1xuICAgICAgICBzZXRSZXMoaXNUcnVlKTtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChhcGlSZXMpID0+IHtcbiAgICAgICAgbGV0IGlzVHJ1ZSA9IGFwaVJlcy5kYXRhLmFkZEFwaUtleSA9PSB0cnVlO1xuICAgICAgICBjb25zb2xlLmxvZyhpc1RydWUpO1xuICAgICAgICBzZXRSZXMoaXNUcnVlKTtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICB9KTtcbiAgfVxuICBpZiAobm90U3VibWl0dGVkID09IHRydWUpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEFwb2xsb0NvbnN1bWVyPlxuICAgICAgICB7KGNsaWVudCkgPT4gKFxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8QWxlcnQgY29sb3I9XCJpbmZvXCI+XG4gICAgICAgICAgICAgICAgQWRkIGEgQml0bWV4IGFwaSBrZXkgdG8gaW1wb3J0IHlvdXIgcmVjZW50IHRyYWRlcyBhbmQgdG9cbiAgICAgICAgICAgICAgICBhdXRvbWF0aWNhbGx5IHBvcHVsYXRlIHlvdXIgZnV0dXJlIHRyYWRlcyBpbnRvIHRoZSBwbGF0Zm9ybS5cbiAgICAgICAgICAgICAgPC9BbGVydD5cbiAgICAgICAgICAgICAgPEFsZXJ0IGNvbG9yPVwiaW5mb1wiPlxuICAgICAgICAgICAgICAgIE5vdGU6IFdlIGtlZXAgdGhlIGtleXMgZW5jcnlwdGVkIGluIG91dCBkYXRhYmFzZSwgaG93ZXZlciwgbWFrZVxuICAgICAgICAgICAgICAgIHN1cmUgdG8gbGVhdmUgXCJ3aXRoZHJhd2FscyBhbGxvd2VkXCIgVU5DSEVDS0VEIGFueXdheXMgd2hlblxuICAgICAgICAgICAgICAgIGNob29zaW5nIGtleSBzZXR0aW5ncy5cbiAgICAgICAgICAgICAgPC9BbGVydD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPEZvcm1XcmFwcGVyPlxuICAgICAgICAgICAgICA8U3R5bGVkRm9ybSBvblN1Ym1pdD17KGV2ZW50KSA9PiBoYW5kbGVTdWJtaXQoZXZlbnQsIGNsaWVudCl9PlxuICAgICAgICAgICAgICAgIDxJbnB1dFdyYXBwZXI+XG4gICAgICAgICAgICAgICAgICA8TGFiZWw+a2V5PC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIlwiIG5hbWU9XCJrZXlcIiB0eXBlPVwidGV4dFwiIHJlcXVpcmVkIC8+XG4gICAgICAgICAgICAgICAgPC9JbnB1dFdyYXBwZXI+XG4gICAgICAgICAgICAgICAgPElucHV0V3JhcHBlcj5cbiAgICAgICAgICAgICAgICAgIDxMYWJlbD5zZWNyZXQ8L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwiXCIgbmFtZT1cInNlY3JldFwiIHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWQgLz5cbiAgICAgICAgICAgICAgICA8L0lucHV0V3JhcHBlcj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCB3aWR0aDogXCIxMDAlXCIgfX0+XG4gICAgICAgICAgICAgICAgICA8U3VibWl0QnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L1N1Ym1pdEJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9TdHlsZWRGb3JtPlxuICAgICAgICAgICAgPC9Gb3JtV3JhcHBlcj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvQXBvbGxvQ29uc3VtZXI+XG4gICAgKTtcbiAgfVxuXG4gIGlmIChsb2FkaW5nID09IHRydWUpIHtcbiAgICByZXR1cm4gPGRpdj5sb2FkaW5nPC9kaXY+O1xuICB9IGVsc2Uge1xuICAgIGlmIChyZXMgPT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiA8ZGl2PmVycm9yIHN1Ym1pdHRpbmcsIHBsZWFzZSByZWxvYWQgcGFnZSBhbmQgdHJ5IGFnYWluPC9kaXY+O1xuICAgIH1cbiAgICBpZiAocmVzID09IHRydWUpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxBcG9sbG9Db25zdW1lcj5cbiAgICAgICAgICB7KGNsaWVudCkgPT4gPFBvcHVsYXRlIGNsaWVudD17Y2xpZW50fSAvPn1cbiAgICAgICAgPC9BcG9sbG9Db25zdW1lcj5cbiAgICAgICk7XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBQb3B1bGF0ZSA9ICh7IGNsaWVudCB9KSA9PiB7XG4gIGNvbnN0IFtyZXMsIHNldFJlc10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChsb2FkaW5nID09IHRydWUpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiSU4gUE9QVUxBVEVcIik7XG4gICAgICBsZXQgbXlDbGllbnQgPSBjbGllbnQ7XG4gICAgICBsZXQgYXBpUmVzID0gbXlDbGllbnQubXV0YXRlKHtcbiAgICAgICAgbXV0YXRpb246IGdxbGBcbiAgICAgICAgICBtdXRhdGlvbiB7XG4gICAgICAgICAgICBwb3B1bGF0ZVxuICAgICAgICAgIH1cbiAgICAgICAgYCxcbiAgICAgIH0pO1xuICAgICAgYXBpUmVzLnRoZW4oKHJlc28pID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCI8PEFQSSBSRVM+PlwiKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzbyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc28uZGF0YS5wb3B1bGF0ZSk7XG4gICAgICAgIHNldFJlcyhyZXNvLmRhdGEucG9wdWxhdGUpO1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIGNvbnN0IHJlc2V0QXBpID0gYXN5bmMgKGNsaWVudCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiUkVTRVRUSU5HXCIpO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSkgPT4ge1xuICAgICAgbGV0IGtleSA9IFwibm9uZVwiO1xuICAgICAgbGV0IHNlY3JldCA9IFwibm9uZVwiO1xuXG4gICAgICBsZXQgbXlSZXMgPSBjbGllbnQubXV0YXRlKHtcbiAgICAgICAgbXV0YXRpb246IGdxbGBcbiAgICAgICAgICBtdXRhdGlvbiBhZGRBcGlLZXkoJGtleTogU3RyaW5nISwgJHNlY3JldDogU3RyaW5nISkge1xuICAgICAgICAgICAgYWRkQXBpS2V5KGtleTogJGtleSwgc2VjcmV0OiAkc2VjcmV0KVxuICAgICAgICAgIH1cbiAgICAgICAgYCxcbiAgICAgICAgdmFyaWFibGVzOiB7IGtleSwgc2VjcmV0IH0sXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBhd2FpdCBteVJlcztcbiAgICB9KTtcbiAgfTtcblxuICBpZiAobG9hZGluZyA9PSB0cnVlKSB7XG4gICAgcmV0dXJuIDxkaXY+bG9hZGluZzwvZGl2PjtcbiAgfSBlbHNlIHtcbiAgICBpZiAocmVzID09IGZhbHNlKSB7XG4gICAgICByZXNldEFwaShjbGllbnQpO1xuICAgICAgcmV0dXJuIDxkaXY+YXBpIGtleSBub3QgdmFsaWQgLSByZWxvYWQgYW5kIHRyeSBhZ2FpbjwvZGl2PjtcbiAgICB9IGVsc2Uge1xuICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcGlLZXlGb3JtO1xuXG5jb25zdCBTdHlsZWRGb3JtID0gc3R5bGVkLmZvcm1gXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAkeyhwcm9wcykgPT5cbiAgICBwcm9wcy5sb2FkaW5nICYmXG4gICAgXCJmaWx0ZXI6IGdyYXlzY2FsZSgwLjUpIGJsdXIoNXB4KSBvcGFjaXR5KDAuNik7IHBvaW50ZXItZXZlbnRzOiBub25lXCJ9O1xuYDtcblxuY29uc3QgU3VibWl0QnV0dG9uID0gc3R5bGVkKEJ1dHRvbilgXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG5gO1xuXG5jb25zdCBJbnB1dFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gIHdpZHRoOiAxMDAlO1xuYDtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcblxuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSBcImQzLWZvcm1hdFwiO1xuaW1wb3J0IHsgdGltZUZvcm1hdCB9IGZyb20gXCJkMy10aW1lLWZvcm1hdFwiO1xuXG5pbXBvcnQgeyBDaGFydENhbnZhcywgQ2hhcnQgfSBmcm9tIFwicmVhY3Qtc3RvY2tjaGFydHNcIjtcbmltcG9ydCB7IENhbmRsZXN0aWNrU2VyaWVzLCBMaW5lU2VyaWVzIH0gZnJvbSBcInJlYWN0LXN0b2NrY2hhcnRzL2xpYi9zZXJpZXNcIjtcbmltcG9ydCB7IFhBeGlzLCBZQXhpcyB9IGZyb20gXCJyZWFjdC1zdG9ja2NoYXJ0cy9saWIvYXhlc1wiO1xuaW1wb3J0IHtcbiAgQ3Jvc3NIYWlyQ3Vyc29yLFxuICBFZGdlSW5kaWNhdG9yLFxuICBDdXJyZW50Q29vcmRpbmF0ZSxcbiAgTW91c2VDb29yZGluYXRlWCxcbiAgTW91c2VDb29yZGluYXRlWSxcbn0gZnJvbSBcInJlYWN0LXN0b2NrY2hhcnRzL2xpYi9jb29yZGluYXRlc1wiO1xuaW1wb3J0IHtcbiAgdGltZUNvbXBhcmUsXG4gIGdldFlSYW5nZU51bXMsXG4gIGZpbmRZVmFsQnV5LFxuICBmaW5kWVZhbFNlbGwsXG59IGZyb20gXCIuL2hlbHBlcnNcIjtcblxuaW1wb3J0IHtcbiAgTGFiZWxBbm5vdGF0aW9uLFxuICBMYWJlbCxcbiAgQW5ub3RhdGUsXG59IGZyb20gXCJyZWFjdC1zdG9ja2NoYXJ0cy9saWIvYW5ub3RhdGlvblwiO1xuaW1wb3J0IHsgZGlzY29udGludW91c1RpbWVTY2FsZVByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXN0b2NrY2hhcnRzL2xpYi9zY2FsZVwiO1xuaW1wb3J0IHtcbiAgT0hMQ1Rvb2x0aXAsXG4gIE1vdmluZ0F2ZXJhZ2VUb29sdGlwLFxufSBmcm9tIFwicmVhY3Qtc3RvY2tjaGFydHMvbGliL3Rvb2x0aXBcIjtcbmltcG9ydCB7IGVtYSB9IGZyb20gXCJyZWFjdC1zdG9ja2NoYXJ0cy9saWIvaW5kaWNhdG9yXCI7XG5pbXBvcnQgeyBmaXRXaWR0aCB9IGZyb20gXCJyZWFjdC1zdG9ja2NoYXJ0cy9saWIvaGVscGVyXCI7XG5pbXBvcnQgeyBsYXN0IH0gZnJvbSBcInJlYWN0LXN0b2NrY2hhcnRzL2xpYi91dGlsc1wiO1xuXG5jbGFzcyBDYW5kbGVTdGlja0NoYXJ0V2l0aEFubm90YXRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBsZXQgeVJhbmdlTnVtcyA9IGdldFlSYW5nZU51bXModGhpcy5wcm9wcy5kYXRhKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgeVJhbmdlTnVtczogeVJhbmdlTnVtcyB9KTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgbWFyZ2luID0geyBsZWZ0OiAyMCwgcmlnaHQ6IDUwLCB0b3A6IDMwLCBib3R0b206IDMwIH07XG4gICAgY29uc3QgaGVpZ2h0ID0gNDAwO1xuICAgIGNvbnN0IHsgdHlwZSwgd2lkdGgsIHJhdGlvLCBkYXRhOiBpbml0aWFsRGF0YSB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IFt5QXhpc0xhYmVsWCwgeUF4aXNMYWJlbFldID0gW1xuICAgICAgd2lkdGggLSBtYXJnaW4ubGVmdCAtIDQwLFxuICAgICAgKGhlaWdodCAtIG1hcmdpbi50b3AgLSBtYXJnaW4uYm90dG9tKSAvIDIsXG4gICAgXTtcblxuICAgIGNvbnN0IHhTY2FsZVByb3ZpZGVyID0gZGlzY29udGludW91c1RpbWVTY2FsZVByb3ZpZGVyLmlucHV0RGF0ZUFjY2Vzc29yKFxuICAgICAgKGQpID0+IGQuZGF0ZVxuICAgICk7XG4gICAgY29uc3QgeyBkYXRhLCB4U2NhbGUsIHhBY2Nlc3NvciwgZGlzcGxheVhBY2Nlc3NvciB9ID0geFNjYWxlUHJvdmlkZXIoXG4gICAgICBpbml0aWFsRGF0YVxuICAgICk7XG5cbiAgICBjb25zdCBzdGFydCA9IHhBY2Nlc3NvcihsYXN0KGRhdGEpKTtcbiAgICBjb25zdCBlbmQgPSB4QWNjZXNzb3IoZGF0YVtNYXRoLm1heCgwLCBkYXRhLmxlbmd0aCAtIDE1MCldKTtcbiAgICBjb25zdCB4RXh0ZW50cyA9IFtzdGFydCwgZW5kXTtcblxuICAgIGlmICh0aGlzLnN0YXRlID09IG51bGwpIHtcbiAgICAgIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XG4gICAgfVxuICAgIC8vIHRyeSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxDaGFydENhbnZhc1xuICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgcmF0aW89e3JhdGlvfVxuICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgIG1hcmdpbj17bWFyZ2lufVxuICAgICAgICB0eXBlPXt0eXBlfVxuICAgICAgICBkYXRhPXtkYXRhfVxuICAgICAgICB4U2NhbGU9e3hTY2FsZX1cbiAgICAgICAgc2VyaWVzTmFtZT1cIkJUQ1wiXG4gICAgICAgIHhBY2Nlc3Nvcj17eEFjY2Vzc29yfVxuICAgICAgICBkaXNwbGF5WEFjY2Vzc29yPXtkaXNwbGF5WEFjY2Vzc29yfVxuICAgICAgICB4RXh0ZW50cz17eEV4dGVudHN9XG4gICAgICA+XG4gICAgICAgIDxDaGFydFxuICAgICAgICAgIGlkPXsxfVxuICAgICAgICAgIHlFeHRlbnRzPXtbKGQpID0+IFtkLmhpZ2gsIGQubG93XV19XG4gICAgICAgICAgcGFkZGluZz17eyB0b3A6IDgwLCBib3R0b206IDgwIH19XG4gICAgICAgID5cbiAgICAgICAgICA8WEF4aXMgYXhpc0F0PVwiYm90dG9tXCIgb3JpZW50PVwiYm90dG9tXCIgLz5cbiAgICAgICAgICA8TW91c2VDb29yZGluYXRlWFxuICAgICAgICAgICAgYXQ9XCJib3R0b21cIlxuICAgICAgICAgICAgb3JpZW50PVwiYm90dG9tXCJcbiAgICAgICAgICAgIGRpc3BsYXlGb3JtYXQ9e3RpbWVGb3JtYXQoXCIlWS0lbS0lZFwiKX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxNb3VzZUNvb3JkaW5hdGVZXG4gICAgICAgICAgICBhdD1cInJpZ2h0XCJcbiAgICAgICAgICAgIG9yaWVudD1cInJpZ2h0XCJcbiAgICAgICAgICAgIGRpc3BsYXlGb3JtYXQ9e2Zvcm1hdChcIi4yZlwiKX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxZQXhpcyBheGlzQXQ9XCJyaWdodFwiIG9yaWVudD1cInJpZ2h0XCIgdGlja3M9ezV9IC8+XG4gICAgICAgICAgPENhbmRsZXN0aWNrU2VyaWVzIC8+XG4gICAgICAgICAgPE9ITENUb29sdGlwIG9yaWdpbj17Wy0xMCwgMF19IC8+XG4gICAgICAgICAge3RoaXMucHJvcHMudHJhZGVzLm1hcCgoZWFjaCkgPT4ge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXG4gICAgICAgICAgICAvLyAgIFwibWFwcGluZyB0b3RhbCBsZW5ndGhcIiArIHRoaXMucHJvcHMudHJhZGVzLmxlbmd0aC50b1N0cmluZygpLFxuICAgICAgICAgICAgLy8gICBlYWNoXG4gICAgICAgICAgICAvLyApO1xuICAgICAgICAgICAgbGV0IGRhdHUgPSBuZXcgRGF0ZShlYWNoLnRpbWVzdGFtcCk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXR1LCB0aGlzLnByb3BzLnRpbWVmcmFtZSk7XG4gICAgICAgICAgICBpZiAoZWFjaC5zaWRlID09IFwiQnV5XCIpIHtcbiAgICAgICAgICAgICAgY29uc3QgYW5ub3RhdGlvblByb3BzVXAgPSB7XG4gICAgICAgICAgICAgICAgZm9udEZhbWlseTogXCJHbHlwaGljb25zIEhhbGZsaW5nc1wiLFxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxNSxcbiAgICAgICAgICAgICAgICBmaWxsOiBcIiMwMTgwMDFcIixcbiAgICAgICAgICAgICAgICAvLyBmaWxsOiByZ2JhKDEsIDEyOCwgMSwgMC41KSxcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjgsXG4gICAgICAgICAgICAgICAgdGV4dDogXCLilrJcIixcbiAgICAgICAgICAgICAgICB5OiAoeyB5U2NhbGUgfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHlTY2FsZS5yYW5nZSgpWzBdICsgMjA7XG4gICAgICAgICAgICAgICAgICAvLyByZXR1cm4gZmluZFlWYWxCdXkoXG4gICAgICAgICAgICAgICAgICAvLyAgIHRoaXMuc3RhdGUueVJhbmdlTnVtc1swXSxcbiAgICAgICAgICAgICAgICAgIC8vICAgdGhpcy5zdGF0ZS55UmFuZ2VOdW1zWzFdLFxuICAgICAgICAgICAgICAgICAgLy8gICBlYWNoLnByaWNlXG4gICAgICAgICAgICAgICAgICAvLyApO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25DbGljazogY29uc29sZS5sb2cuYmluZChjb25zb2xlKSxcbiAgICAgICAgICAgICAgICB0b29sdGlwOiAoZCkgPT4gdGltZUZvcm1hdChcIiVCXCIpKGQuZGF0ZSksXG4gICAgICAgICAgICAgICAgLy8gb25Nb3VzZU92ZXI6IGNvbnNvbGUubG9nLmJpbmQoY29uc29sZSksXG4gICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8QW5ub3RhdGVcbiAgICAgICAgICAgICAgICAgIHdpdGg9e0xhYmVsQW5ub3RhdGlvbn1cbiAgICAgICAgICAgICAgICAgIHdoZW49eyhkKSA9PiB0aW1lQ29tcGFyZShkLCBkYXR1LCB0aGlzLnByb3BzLnRpbWVmcmFtZSl9XG4gICAgICAgICAgICAgICAgICB1c2luZ1Byb3BzPXthbm5vdGF0aW9uUHJvcHNVcH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlYWNoLnNpZGUgPT0gXCJTZWxsXCIpIHtcbiAgICAgICAgICAgICAgY29uc3QgYW5ub3RhdGlvblByb3BzRG93biA9IHtcbiAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBcIkdseXBoaWNvbnMgSGFsZmxpbmdzXCIsXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IDE1LFxuICAgICAgICAgICAgICAgIGZpbGw6IFwiI0ZGMDAwMFwiLFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuOCxcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIuKWvFwiLFxuICAgICAgICAgICAgICAgIHk6ICh7IHlTY2FsZSB9KSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4geVNjYWxlLnJhbmdlKClbMV0gLSAyMDtcbiAgICAgICAgICAgICAgICAgIC8vIHJldHVybiBmaW5kWVZhbFNlbGwoXG4gICAgICAgICAgICAgICAgICAvLyAgIHRoaXMuc3RhdGUueVJhbmdlTnVtc1swXSxcbiAgICAgICAgICAgICAgICAgIC8vICAgdGhpcy5zdGF0ZS55UmFuZ2VOdW1zWzFdLFxuICAgICAgICAgICAgICAgICAgLy8gICBlYWNoLnByaWNlXG4gICAgICAgICAgICAgICAgICAvLyApO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25DbGljazogY29uc29sZS5sb2cuYmluZChjb25zb2xlKSxcbiAgICAgICAgICAgICAgICB0b29sdGlwOiAoZCkgPT4gdGltZUZvcm1hdChcIiVCXCIpKGQuZGF0ZSksXG4gICAgICAgICAgICAgICAgLy8gb25Nb3VzZU92ZXI6IGNvbnNvbGUubG9nLmJpbmQoY29uc29sZSksXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPEFubm90YXRlXG4gICAgICAgICAgICAgICAgICB3aXRoPXtMYWJlbEFubm90YXRpb259XG4gICAgICAgICAgICAgICAgICB3aGVuPXsoZCkgPT4gdGltZUNvbXBhcmUoZCwgZGF0dSwgdGhpcy5wcm9wcy50aW1lZnJhbWUpfVxuICAgICAgICAgICAgICAgICAgdXNpbmdQcm9wcz17YW5ub3RhdGlvblByb3BzRG93bn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pfVxuICAgICAgICA8L0NoYXJ0PlxuICAgICAgICA8Q3Jvc3NIYWlyQ3Vyc29yIHN0cm9rZURhc2hhcnJheT1cIkxvbmdEYXNoRG90XCIgLz5cbiAgICAgIDwvQ2hhcnRDYW52YXM+XG4gICAgKTtcbiAgICAvLyB9IGNhdGNoIChlcnIpIHtcbiAgICAvLyAgIHJldHVybiA8ZGl2Pm5vIGNoYXJ0PC9kaXY+O1xuICAgIC8vIH1cbiAgfVxufVxuXG5DYW5kbGVTdGlja0NoYXJ0V2l0aEFubm90YXRpb24ucHJvcFR5cGVzID0ge1xuICBkYXRhOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgd2lkdGg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgcmF0aW86IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgdHlwZTogUHJvcFR5cGVzLm9uZU9mKFtcInN2Z1wiLCBcImh5YnJpZFwiXSkuaXNSZXF1aXJlZCxcbn07XG5cbkNhbmRsZVN0aWNrQ2hhcnRXaXRoQW5ub3RhdGlvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIHR5cGU6IFwic3ZnXCIsXG59O1xuXG5DYW5kbGVTdGlja0NoYXJ0V2l0aEFubm90YXRpb24gPSBmaXRXaWR0aChDYW5kbGVTdGlja0NoYXJ0V2l0aEFubm90YXRpb24pO1xuXG5leHBvcnQgZGVmYXVsdCBDYW5kbGVTdGlja0NoYXJ0V2l0aEFubm90YXRpb247XG4iLCJleHBvcnQgY29uc3QgdGltZUNvbXBhcmUgPSAoZCwgZGF0dSwgdGltZWZyYW1lKSA9PiB7XG4gIHZhciBNU19QRVJfTUlOVVRFID0gNjAwMDA7XG4gIHZhciBjb2VmZkZpdmUgPSAxMDAwICogNjAgKiA1O1xuICAvLyB2YXIgY29lZmZPbmUgPSAxMDAwICogNjAgKiA1O1xuICB2YXIgY29lZmZPbmUgPSAxMDAwICogNjA7XG4gIGlmICh0aW1lZnJhbWUgPT0gXCIxbVwiKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIE1hdGgucm91bmQoZC5kYXRlLmdldFRpbWUoKSAvIGNvZWZmT25lKSAqIGNvZWZmT25lID09PVxuICAgICAgTWF0aC5yb3VuZChkYXR1LmdldFRpbWUoKSAvIGNvZWZmT25lKSAqIGNvZWZmT25lXG4gICAgKTtcbiAgfVxuICBpZiAodGltZWZyYW1lID09IFwiNW1cIikge1xuICAgIHJldHVybiAoXG4gICAgICBNYXRoLnJvdW5kKGQuZGF0ZS5nZXRUaW1lKCkgLyBjb2VmZkZpdmUpICogY29lZmZGaXZlID09PVxuICAgICAgTWF0aC5yb3VuZChkYXR1LmdldFRpbWUoKSAvIGNvZWZmRml2ZSkgKiBjb2VmZkZpdmVcbiAgICApO1xuICB9XG4gIGlmICh0aW1lZnJhbWUgPT0gXCIxaFwiKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIGQuZGF0ZS5nZXRIb3VycygpID09PSBkYXR1LmdldEhvdXJzKCkgKyAxICYmXG4gICAgICBkLmRhdGUuZ2V0RGF0ZSgpID09PSBkYXR1LmdldERhdGUoKVxuICAgICk7XG4gIH1cbiAgaWYgKHRpbWVmcmFtZSA9PSBcIjFkXCIpIHtcbiAgICByZXR1cm4gZC5kYXRlLmdldERhdGUoKSA9PT0gZGF0dS5nZXREYXRlKCk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBnZXRZUmFuZ2VOdW1zID0gKGRhdGEpID0+IHtcbiAgbGV0IGxvd051bTtcbiAgbGV0IGhpZ2hOdW07XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChpID09IDApIHtcbiAgICAgIGxvd051bSA9IGRhdGFbMF0ubG93O1xuICAgICAgaGlnaE51bSA9IGRhdGFbMF0uaGlnaDtcbiAgICB9XG4gICAgaWYgKGRhdGFbaV0ubG93IDwgbG93TnVtKSB7XG4gICAgICBsb3dOdW0gPSBkYXRhW2ldLmxvdztcbiAgICB9XG4gICAgaWYgKGRhdGFbaV0uaGlnaCA+IGhpZ2hOdW0pIHtcbiAgICAgIGhpZ2hOdW0gPSBkYXRhW2ldLmhpZ2g7XG4gICAgfVxuICAgIGlmIChpID09IGRhdGEubGVuZ3RoIC0gMSkge1xuICAgICAgbGV0IGFyciA9IFtdO1xuICAgICAgYXJyLnB1c2gobG93TnVtKTtcbiAgICAgIGFyci5wdXNoKGhpZ2hOdW0pO1xuICAgICAgY29uc29sZS5sb2coYXJyKTtcbiAgICAgIHJldHVybiBhcnI7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZmluZFlWYWxTZWxsID0gKHlMb3csIHlIaWdoLCBwcmljZSkgPT4ge1xuICAvLyBsZXQgZnVsbFJhbmdlID0geUhpZ2ggLSB5TG93O1xuICAvLyBsZXQgbXlSYW5nZSA9IHlIaWdoIC0gcGFyc2VJbnQocHJpY2UpO1xuICAvLyBsZXQgb3V0T2YgPSBteVJhbmdlIC8gZnVsbFJhbmdlO1xuICAvLyBsZXQgbXVsdGlwbGllZCA9IG91dE9mICogMTgwICsgNzA7XG4gIC8vIGNvbnNvbGUubG9nKG91dE9mLCBtdWx0aXBsaWVkKTtcbiAgcmV0dXJuIDgwO1xufTtcbmV4cG9ydCBjb25zdCBmaW5kWVZhbEJ1eSA9ICh5TG93LCB5SGlnaCwgcHJpY2UpID0+IHtcbiAgbGV0IGZ1bGxSYW5nZSA9IHlIaWdoIC0geUxvdztcbiAgbGV0IG15UmFuZ2UgPSB5SGlnaCAtIHBhcnNlSW50KHByaWNlKTtcbiAgbGV0IG91dE9mID0gbXlSYW5nZSAvIGZ1bGxSYW5nZTtcbiAgbGV0IG11bHRpcGxpZWQgPSBvdXRPZiAqIDE4MCArIDEwMDtcbiAgY29uc29sZS5sb2cob3V0T2YsIG11bHRpcGxpZWQpO1xuICByZXR1cm4gbXVsdGlwbGllZDtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwicmVhY3QtZG9tXCI7XG5pbXBvcnQgQ2hhcnQgZnJvbSBcIi4vQ2hhcnREZW1vXCI7XG5pbXBvcnQgeyBBbGVydCB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XG5cbmltcG9ydCB7IFR5cGVDaG9vc2VyIH0gZnJvbSBcInJlYWN0LXN0b2NrY2hhcnRzL2xpYi9oZWxwZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhcnRDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBsZXQgc3RhcnRUaW1lID0gbmV3IERhdGUodGhpcy5wcm9wcy50cmFkZXNbMF0udGltZXN0YW1wKTtcbiAgICBsZXQgZW5kVGltZSA9IG5ldyBEYXRlKFxuICAgICAgdGhpcy5wcm9wcy50cmFkZXNbdGhpcy5wcm9wcy50cmFkZXMubGVuZ3RoIC0gMV0udGltZXN0YW1wXG4gICAgKTtcbiAgICBsZXQgZGlmZk1zID0gTWF0aC5hYnMoc3RhcnRUaW1lIC0gZW5kVGltZSk7XG4gICAgdmFyIGRpZmZTZWNzID0gZGlmZk1zIC8gMTAwMDtcbiAgICB2YXIgZGlmZk1pbnMgPSBNYXRoLnJvdW5kKGRpZmZTZWNzIC8gNjApOyAvLyBtaW51dGVzXG5cbiAgICB0cnkge1xuICAgICAgaWYgKGRpZmZNaW5zIDwgNjApIHtcbiAgICAgICAgLy8gICB0aGlzLnNldFN0YXRlKHsgY2FuZGxlRGF0YTogdGhpcy5wcm9wcy5vbmVtaW4gfSk7XG4gICAgICAgIGxldCBhbGxFeGVjID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9wcy5vbmVtaW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBsZXQgdHJhZGUgPSB0aGlzLnByb3BzLm9uZW1pbltpXTtcbiAgICAgICAgICBsZXQgbmV3VHJhZGUgPSB7fTtcbiAgICAgICAgICBuZXdUcmFkZS5kYXRlID0gbmV3IERhdGUodHJhZGUudGltZXN0YW1wKTtcbiAgICAgICAgICBuZXdUcmFkZS5vcGVuID0gcGFyc2VGbG9hdCh0cmFkZS5vcGVuKTtcbiAgICAgICAgICBuZXdUcmFkZS5jbG9zZSA9IHBhcnNlRmxvYXQodHJhZGUuY2xvc2UpO1xuICAgICAgICAgIG5ld1RyYWRlLmhpZ2ggPSBwYXJzZUZsb2F0KHRyYWRlLmhpZ2gpO1xuICAgICAgICAgIG5ld1RyYWRlLmxvdyA9IHBhcnNlRmxvYXQodHJhZGUubG93KTtcbiAgICAgICAgICBsZXQgc3RydCA9IG5ldyBEYXRlKHRoaXMucHJvcHMudHJhZGVzWzBdLnRpbWVzdGFtcCk7XG4gICAgICAgICAgbGV0IGVuZCA9IG5ldyBEYXRlKFxuICAgICAgICAgICAgdGhpcy5wcm9wcy50cmFkZXNbdGhpcy5wcm9wcy50cmFkZXMubGVuZ3RoIC0gMV0udGltZXN0YW1wXG4gICAgICAgICAgKTtcbiAgICAgICAgICBsZXQgY29tcGFyZTEgPSBuZXdUcmFkZS5kYXRlIC0gc3RydDtcbiAgICAgICAgICBsZXQgY29tcGFyZTIgPSBuZXdUcmFkZS5kYXRlIC0gZW5kO1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNvbXBhcmUxLCBjb21wYXJlMik7XG4gICAgICAgICAgbGV0IGFkZGl0aW9uYWxUaW1lID0gMTAwMCAqIDYwICogMzA7XG4gICAgICAgICAgaWYgKGNvbXBhcmUxID4gYWRkaXRpb25hbFRpbWUgKiAtMSAmJiBjb21wYXJlMiA8IGFkZGl0aW9uYWxUaW1lKSB7XG4gICAgICAgICAgICBhbGxFeGVjLnVuc2hpZnQobmV3VHJhZGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaSA9PSB0aGlzLnByb3BzLm9uZW1pbi5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICBsZXQgdGltZWZyYW1lID0gXCIxbVwiO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIHRyYWRlczogdGhpcy5wcm9wcy50cmFkZXMsXG4gICAgICAgICAgICAgIG5ld0RhdDogYWxsRXhlYyxcbiAgICAgICAgICAgICAgdGltZWZyYW1lOiB0aW1lZnJhbWUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUsIFwiVEhJUyBTVEFURSBcIiArIHRpbWVmcmFtZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoZGlmZk1pbnMgPj0gNjAgJiYgZGlmZk1pbnMgPCA2MCAqIDEwKSB7XG4gICAgICAgIC8vICAgdGhpcy5zZXRTdGF0ZSh7IGNhbmRsZURhdGE6IHRoaXMucHJvcHMuZml2ZW1pbiB9KTtcbiAgICAgICAgbGV0IGFsbEV4ZWMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb3BzLmZpdmVtaW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBsZXQgdHJhZGUgPSB0aGlzLnByb3BzLmZpdmVtaW5baV07XG4gICAgICAgICAgbGV0IG5ld1RyYWRlID0ge307XG4gICAgICAgICAgbmV3VHJhZGUuZGF0ZSA9IG5ldyBEYXRlKHRyYWRlLnRpbWVzdGFtcCk7XG4gICAgICAgICAgbmV3VHJhZGUub3BlbiA9IHBhcnNlRmxvYXQodHJhZGUub3Blbik7XG4gICAgICAgICAgbmV3VHJhZGUuY2xvc2UgPSBwYXJzZUZsb2F0KHRyYWRlLmNsb3NlKTtcbiAgICAgICAgICBuZXdUcmFkZS5oaWdoID0gcGFyc2VGbG9hdCh0cmFkZS5oaWdoKTtcbiAgICAgICAgICBuZXdUcmFkZS5sb3cgPSBwYXJzZUZsb2F0KHRyYWRlLmxvdyk7XG4gICAgICAgICAgbGV0IHN0cnQgPSBuZXcgRGF0ZSh0aGlzLnByb3BzLnRyYWRlc1swXS50aW1lc3RhbXApO1xuICAgICAgICAgIGxldCBlbmQgPSBuZXcgRGF0ZShcbiAgICAgICAgICAgIHRoaXMucHJvcHMudHJhZGVzW3RoaXMucHJvcHMudHJhZGVzLmxlbmd0aCAtIDFdLnRpbWVzdGFtcFxuICAgICAgICAgICk7XG4gICAgICAgICAgbGV0IGNvbXBhcmUxID0gbmV3VHJhZGUuZGF0ZSAtIHN0cnQ7XG4gICAgICAgICAgbGV0IGNvbXBhcmUyID0gbmV3VHJhZGUuZGF0ZSAtIGVuZDtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjb21wYXJlMSwgY29tcGFyZTIpO1xuICAgICAgICAgIGxldCBhZGRpdGlvbmFsVGltZSA9IDEwMDAgKiA2MCAqIDYwICogMjtcbiAgICAgICAgICBpZiAoY29tcGFyZTEgPiBhZGRpdGlvbmFsVGltZSAqIC0xICYmIGNvbXBhcmUyIDwgYWRkaXRpb25hbFRpbWUpIHtcbiAgICAgICAgICAgIGFsbEV4ZWMudW5zaGlmdChuZXdUcmFkZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChpID09IHRoaXMucHJvcHMuZml2ZW1pbi5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICBsZXQgdGltZWZyYW1lID0gXCI1bVwiO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIHRyYWRlczogdGhpcy5wcm9wcy50cmFkZXMsXG4gICAgICAgICAgICAgIG5ld0RhdDogYWxsRXhlYyxcbiAgICAgICAgICAgICAgdGltZWZyYW1lOiB0aW1lZnJhbWUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUsIFwiVEhJUyBTVEFURSBcIiArIHRpbWVmcmFtZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsZXQgZGF5ID0gNjAgKiAyNDtcbiAgICAgIGlmIChkaWZmTWlucyA+PSA2MCAqIDEwICYmIGRpZmZNaW5zIDwgZGF5ICogNCkge1xuICAgICAgICAvLyAgIHRoaXMuc2V0U3RhdGUoeyBjYW5kbGVEYXRhOiB0aGlzLnByb3BzLm9uZWhvdXIgfSk7XG4gICAgICAgIGxldCBhbGxFeGVjID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9wcy5vbmVob3VyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgbGV0IHRyYWRlID0gdGhpcy5wcm9wcy5vbmVob3VyW2ldO1xuICAgICAgICAgIGxldCBuZXdUcmFkZSA9IHt9O1xuICAgICAgICAgIG5ld1RyYWRlLmRhdGUgPSBuZXcgRGF0ZSh0cmFkZS50aW1lc3RhbXApO1xuICAgICAgICAgIG5ld1RyYWRlLm9wZW4gPSBwYXJzZUZsb2F0KHRyYWRlLm9wZW4pO1xuICAgICAgICAgIG5ld1RyYWRlLmNsb3NlID0gcGFyc2VGbG9hdCh0cmFkZS5jbG9zZSk7XG4gICAgICAgICAgbmV3VHJhZGUuaGlnaCA9IHBhcnNlRmxvYXQodHJhZGUuaGlnaCk7XG4gICAgICAgICAgbmV3VHJhZGUubG93ID0gcGFyc2VGbG9hdCh0cmFkZS5sb3cpO1xuICAgICAgICAgIGxldCBzdHJ0ID0gbmV3IERhdGUodGhpcy5wcm9wcy50cmFkZXNbMF0udGltZXN0YW1wKTtcbiAgICAgICAgICBsZXQgZW5kID0gbmV3IERhdGUoXG4gICAgICAgICAgICB0aGlzLnByb3BzLnRyYWRlc1t0aGlzLnByb3BzLnRyYWRlcy5sZW5ndGggLSAxXS50aW1lc3RhbXBcbiAgICAgICAgICApO1xuICAgICAgICAgIGxldCBjb21wYXJlMSA9IG5ld1RyYWRlLmRhdGUgLSBzdHJ0O1xuICAgICAgICAgIGxldCBjb21wYXJlMiA9IG5ld1RyYWRlLmRhdGUgLSBlbmQ7XG4gICAgICAgICAgbGV0IGFkZGl0aW9uYWxUaW1lID0gMTAwMCAqIDYwICogNjAgKiAyMDtcbiAgICAgICAgICBpZiAoY29tcGFyZTEgPiBhZGRpdGlvbmFsVGltZSAqIC0xICYmIGNvbXBhcmUyIDwgYWRkaXRpb25hbFRpbWUpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNvbXBhcmUxLCBjb21wYXJlMik7XG4gICAgICAgICAgICBhbGxFeGVjLnVuc2hpZnQobmV3VHJhZGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaSA9PSB0aGlzLnByb3BzLm9uZWhvdXIubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgbGV0IHRpbWVmcmFtZSA9IFwiMWhcIjtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICB0cmFkZXM6IHRoaXMucHJvcHMudHJhZGVzLFxuICAgICAgICAgICAgICBuZXdEYXQ6IGFsbEV4ZWMsXG4gICAgICAgICAgICAgIHRpbWVmcmFtZTogdGltZWZyYW1lLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLCBcIlRISVMgU1RBVEUgXCIgKyB0aW1lZnJhbWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGRpZmZNaW5zID49IGRheSAqIDQpIHtcbiAgICAgICAgLy8gICB0aGlzLnNldFN0YXRlKHsgY2FuZGxlRGF0YTogdGhpcy5wcm9wcy5vbmVkYXkgfSk7XG4gICAgICAgIGxldCBhbGxFeGVjID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9wcy5vbmVkYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBsZXQgdHJhZGUgPSB0aGlzLnByb3BzLm9uZWRheVtpXTtcbiAgICAgICAgICBsZXQgbmV3VHJhZGUgPSB7fTtcbiAgICAgICAgICBuZXdUcmFkZS5kYXRlID0gbmV3IERhdGUodHJhZGUudGltZXN0YW1wKTtcbiAgICAgICAgICBuZXdUcmFkZS5vcGVuID0gcGFyc2VGbG9hdCh0cmFkZS5vcGVuKTtcbiAgICAgICAgICBuZXdUcmFkZS5jbG9zZSA9IHBhcnNlRmxvYXQodHJhZGUuY2xvc2UpO1xuICAgICAgICAgIG5ld1RyYWRlLmhpZ2ggPSBwYXJzZUZsb2F0KHRyYWRlLmhpZ2gpO1xuICAgICAgICAgIG5ld1RyYWRlLmxvdyA9IHBhcnNlRmxvYXQodHJhZGUubG93KTtcbiAgICAgICAgICBsZXQgc3RydCA9IG5ldyBEYXRlKHRoaXMucHJvcHMudHJhZGVzWzBdLnRpbWVzdGFtcCk7XG4gICAgICAgICAgbGV0IGVuZCA9IG5ldyBEYXRlKFxuICAgICAgICAgICAgdGhpcy5wcm9wcy50cmFkZXNbdGhpcy5wcm9wcy50cmFkZXMubGVuZ3RoIC0gMV0udGltZXN0YW1wXG4gICAgICAgICAgKTtcbiAgICAgICAgICBsZXQgY29tcGFyZTEgPSBuZXdUcmFkZS5kYXRlIC0gc3RydDtcbiAgICAgICAgICBsZXQgY29tcGFyZTIgPSBuZXdUcmFkZS5kYXRlIC0gZW5kO1xuICAgICAgICAgIGxldCBhZGRpdGlvbmFsVGltZSA9IDEwMDAgKiA2MCAqIDYwICogMjQgKiAxMDtcbiAgICAgICAgICBpZiAoY29tcGFyZTEgPiBhZGRpdGlvbmFsVGltZSAqIC0xICYmIGNvbXBhcmUyIDwgYWRkaXRpb25hbFRpbWUpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNvbXBhcmUxLCBjb21wYXJlMik7XG4gICAgICAgICAgICBhbGxFeGVjLnVuc2hpZnQobmV3VHJhZGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaSA9PSB0aGlzLnByb3BzLm9uZWRheS5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICBsZXQgdGltZWZyYW1lID0gXCIxZFwiO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIHRyYWRlczogdGhpcy5wcm9wcy50cmFkZXMsXG4gICAgICAgICAgICAgIG5ld0RhdDogYWxsRXhlYyxcbiAgICAgICAgICAgICAgdGltZWZyYW1lOiB0aW1lZnJhbWUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUsIFwiVEhJUyBTVEFURSBcIiArIHRpbWVmcmFtZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIH1cbiAgfVxuICByZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUgPT0gbnVsbCB8fCAhdGhpcy5zdGF0ZS5uZXdEYXRbMF0pIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxBbGVydCBjb2xvcj1cImxpZ2h0XCI+XG4gICAgICAgICAgQ2FuJ3QgcmVuZGVyIGNoYXJ0LiBXZSBkb24ndCBoYXZlIHNtYWxsIGVub3VnaCBjYW5kbGVzdGljayBkYXRhIGdvaW5nXG4gICAgICAgICAgYmFjayB0byB0aGF0IGRhdGUuXG4gICAgICAgIDwvQWxlcnQ+XG4gICAgICApO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLm5ld0RhdCk7XG4gICAgcmV0dXJuIChcbiAgICAgIC8vIDxUeXBlQ2hvb3Nlcj5cbiAgICAgIC8vICAge3R5cGUgPT4gKFxuICAgICAgPENoYXJ0XG4gICAgICAgIHR5cGU9e1wiaHlicmlkXCJ9XG4gICAgICAgIGRhdGE9e3RoaXMuc3RhdGUubmV3RGF0fVxuICAgICAgICB0cmFkZXM9e3RoaXMuc3RhdGUudHJhZGVzfVxuICAgICAgICB0aW1lZnJhbWU9e3RoaXMuc3RhdGUudGltZWZyYW1lfVxuICAgICAgLz5cbiAgICAgIC8vICAgKX1cbiAgICAgIC8vIDwvVHlwZUNob29zZXI+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7XG4gIENvbnRhaW5EaXYsXG4gIE5leHRUb0RpdixcbiAgTmV4dFRvRGl2SGVhZGVyLFxuICBSb3dDb250YWluZXIsXG4gIENvbnRhaW5EaXZIZWFkZXIsXG59IGZyb20gXCIuL1RhZGVzL1RyYWRlc1wiO1xuaW1wb3J0IFJlQ2hhcnQgZnJvbSBcIi4vVGFkZXMvVHJhZGVzXCI7XG5pbXBvcnQgU2lkZWJhciwgeyBTeW1ib2xDaG9vc2VyLCBQbmwgfSBmcm9tIFwiLi4vTWVudS9NZW51XCI7XG5pbXBvcnQgeyBnZXROZXdEYXQgfSBmcm9tIFwiLi9zaGFyZWQvaGVscGVyc1wiO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xuaW1wb3J0IHsgZmFDYXJldExlZnQgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBOb3RlcyBmcm9tIFwiLi9Ob3Rlcy9Ob3Rlc1Rlc3RcIjtcbmltcG9ydCBUYWJzIGZyb20gXCIuL1RhYnNcIjtcbmltcG9ydCB7XG4gIE5hdixcbiAgTmF2SXRlbSxcbiAgRHJvcGRvd24sXG4gIERyb3Bkb3duSXRlbSxcbiAgRHJvcGRvd25Ub2dnbGUsXG4gIERyb3Bkb3duTWVudSxcbiAgTmF2TGluayxcbn0gZnJvbSBcInJlYWN0c3RyYXBcIjtcblxuaW1wb3J0IHsgaW5qZWN0LCBvYnNlcnZlciB9IGZyb20gXCJtb2J4LXJlYWN0XCI7XG5pbXBvcnQgeyB3aGVuLCByZWFjdGlvbiB9IGZyb20gXCJtb2J4XCI7XG5pbXBvcnQgeyB3aWRlRm9udCB9IGZyb20gXCIuLi9zaGFyZWQvaGVscGVyc1wiO1xuXG5AaW5qZWN0KFwic3RvcmVcIilcbkBvYnNlcnZlclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZ2xvYmFsSGFzaDogW10sXG4gICAgICBnbG9iYWxIYXNoQWN0aXZlOiBbXCJhbGxcIl0sXG4gICAgICBkYXRhOiBudWxsLFxuICAgICAgZmlsdGVyZWREYXRhOiBudWxsLFxuICAgICAgaXNTaW5nbGU6IGZhbHNlLFxuICAgICAgaXNTaW5nbGVOb3RlczogZmFsc2UsXG4gICAgfTtcbiAgICB0aGlzLmdldEdsb2JhbEhhc2h0YWdzID0gdGhpcy5nZXRHbG9iYWxIYXNodGFncy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFzaHRhZ0NsaWNrZWQgPSB0aGlzLmhhc2h0YWdDbGlja2VkLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYXNodGFnQ2xpY2tlZEJhY2sgPSB0aGlzLmhhc2h0YWdDbGlja2VkQmFjay5iaW5kKHRoaXMpO1xuICAgIHRoaXMudXBkYXRlV2luZG93RGltZW5zaW9ucyA9IHRoaXMudXBkYXRlV2luZG93RGltZW5zaW9ucy5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhOiB0aGlzLnByb3BzLmRhdGEgfSk7XG4gICAgdGhpcy5nZXRHbG9iYWxIYXNodGFncyh0aGlzLnByb3BzLmRhdGEpO1xuICB9XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuc2luZ2xlVHJhZGVSZWFjdGlvbiA9IHJlYWN0aW9uKFxuICAgICAgKCkgPT4gdGhpcy5wcm9wcy5zdG9yZS5oYXNTaW5nbGVUcmFkZSxcbiAgICAgIChub3RpZmljYXRpb25zLCByZWFjdGlvbikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkhBUyBTSU5HTEVcIiwgdGhpcy5wcm9wcy5zdG9yZS5oYXNTaW5nbGVUcmFkZSk7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLnN0b3JlLmhhc1NpbmdsZVRyYWRlID09IGZhbHNlKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzU2luZ2xlOiBmYWxzZSB9KTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInNldHRpbmcgYmFja1wiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGlzU2luZ2xlOiB0cnVlLFxuICAgICAgICAgICAgc2luZ2xlVHJhZGU6IHRoaXMucHJvcHMuc3RvcmUuc2luZ2xlVHJhZGVbMF0sXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSwgXCJTVEFURUVcIik7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJzZXR0aW5nIGJhY2tcIik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApO1xuICAgIHRoaXMuc2luZ2xlTm90ZXNSZWFjdGlvbiA9IHJlYWN0aW9uKFxuICAgICAgKCkgPT4gdGhpcy5wcm9wcy5zdG9yZS5pc1NpbmdsZU5vdGVzLFxuICAgICAgKG5vdGlmaWNhdGlvbnMsIHJlYWN0aW9uKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLnN0b3JlLmlzU2luZ2xlTm90ZXMgPT0gZmFsc2UpIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNTaW5nbGVOb3RlczogZmFsc2UgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpc1NpbmdsZU5vdGVzOiB0cnVlLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgKTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMudXBkYXRlV2luZG93RGltZW5zaW9ucyk7XG4gIH1cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy51cGRhdGVXaW5kb3dEaW1lbnNpb25zKTtcbiAgfVxuICB1cGRhdGVXaW5kb3dEaW1lbnNpb25zKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgZ2V0R2xvYmFsSGFzaHRhZ3MoZGF0YSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5mZXRjaFRyYWRlSGlzdG9yeS5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHRoaXNUcmFkZUhhc2ggPSBkYXRhLmZldGNoVHJhZGVIaXN0b3J5W2ldLmhhc2h0YWdzLnNwbGl0KFwiLFwiKTtcbiAgICAgIGlmICh0aGlzVHJhZGVIYXNoICE9IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzVHJhZGVIYXNoLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgaWYgKHRoaXNUcmFkZUhhc2hbal0gIT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgbGV0IG5ld0dsb2JhbEhhc2ggPSB0aGlzLnN0YXRlLmdsb2JhbEhhc2g7XG4gICAgICAgICAgICBuZXdHbG9iYWxIYXNoLnB1c2godGhpc1RyYWRlSGFzaFtqXSk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZ2xvYmFsSGFzaDogbmV3R2xvYmFsSGFzaCB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhc3luYyBoYXNodGFnQ2xpY2tlZEJhY2sodmFsdWUpIHtcbiAgICBpZiAodmFsdWUgPT0gXCJhbGxcIikge1xuICAgICAgY29uc29sZS5sb2coXCJETyBOT1RISU5HXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgbmV3SGFzaEFjdGl2ZSA9IFtdO1xuICAgICAgbGV0IG5ld0hhc2ggPSB0aGlzLnN0YXRlLmdsb2JhbEhhc2g7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3RhdGUuZ2xvYmFsSGFzaEFjdGl2ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodmFsdWUgIT09IHRoaXMuc3RhdGUuZ2xvYmFsSGFzaEFjdGl2ZVtpXSkge1xuICAgICAgICAgIG5ld0hhc2hBY3RpdmUucHVzaCh0aGlzLnN0YXRlLmdsb2JhbEhhc2hBY3RpdmVbaV0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5ld0hhc2gucHVzaCh0aGlzLnN0YXRlLmdsb2JhbEhhc2hBY3RpdmVbaV0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpID09IHRoaXMuc3RhdGUuZ2xvYmFsSGFzaEFjdGl2ZS5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgaWYgKG5ld0hhc2hBY3RpdmVbMF0gPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBsZXQgbmV3SGFzaDIgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbmV3SGFzaC5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICBpZiAobmV3SGFzaFtqXSAhPSBcImFsbFwiKSB7XG4gICAgICAgICAgICAgICAgbmV3SGFzaDIucHVzaChuZXdIYXNoW2pdKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoaiA9PSBuZXdIYXNoLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgIGdsb2JhbEhhc2g6IG5ld0hhc2gyLFxuICAgICAgICAgICAgICAgICAgZ2xvYmFsSGFzaEFjdGl2ZTogW1wiYWxsXCJdLFxuICAgICAgICAgICAgICAgICAgZmlsdGVyZWREYXRhOiBudWxsLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBuZXdIYXNoMiA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBuZXdIYXNoLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgIGlmIChuZXdIYXNoW2pdICE9IFwiYWxsXCIpIHtcbiAgICAgICAgICAgICAgICBuZXdIYXNoMi5wdXNoKG5ld0hhc2hbal0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChqID09IG5ld0hhc2gubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIGdldE5ld0RhdCh0aGlzLnN0YXRlLmRhdGEsIG5ld0hhc2hBY3RpdmUpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbEhhc2g6IG5ld0hhc2gyLFxuICAgICAgICAgICAgICAgICAgICBnbG9iYWxIYXNoQWN0aXZlOiBuZXdIYXNoQWN0aXZlLFxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJlZERhdGE6IHJlcyxcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgaGFzaHRhZ0NsaWNrZWQodmFsdWUpIHtcbiAgICBpZiAodmFsdWUgPT0gXCJhbGxcIikge1xuICAgICAgbGV0IG5ld0dsb2JhbEhhc2ggPSB0aGlzLnN0YXRlLmdsb2JhbEhhc2g7XG4gICAgICBsZXQgbmV3R2xvYmFsSGFzaDIgPSBbXTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zdGF0ZS5nbG9iYWxIYXNoQWN0aXZlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIG5ld0dsb2JhbEhhc2gucHVzaCh0aGlzLnN0YXRlLmdsb2JhbEhhc2hBY3RpdmVbaV0pO1xuICAgICAgICBpZiAoaSA9PSB0aGlzLnN0YXRlLmdsb2JhbEhhc2hBY3RpdmUubGVuZ3RoIC0gMSkge1xuICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbmV3R2xvYmFsSGFzaC5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgaWYgKG5ld0dsb2JhbEhhc2hbal0gIT0gXCJhbGxcIikge1xuICAgICAgICAgICAgICBuZXdHbG9iYWxIYXNoMi5wdXNoKG5ld0dsb2JhbEhhc2hbal0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGogPT0gbmV3R2xvYmFsSGFzaC5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGdsb2JhbEhhc2g6IG5ld0dsb2JhbEhhc2gyLFxuICAgICAgICAgICAgICAgIGdsb2JhbEhhc2hBY3RpdmU6IFtcImFsbFwiXSxcbiAgICAgICAgICAgICAgICBmaWx0ZXJlZERhdGE6IG51bGwsXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLnN0YXRlLmdsb2JhbEhhc2hBY3RpdmVbMF0gPT0gdW5kZWZpbmVkKSB7XG4gICAgICBsZXQgbmV3QXJyYXkgPSBbXTtcbiAgICAgIG5ld0FycmF5LnB1c2godmFsdWUpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGdsb2JhbEhhc2hBY3RpdmU6IG5ld0FycmF5IH0pO1xuICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnN0YXRlLmdsb2JhbEhhc2guaW5kZXhPZih2YWx1ZSk7XG4gICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICBsZXQgbmV3R2xvYmFsSGFzaCA9IHRoaXMuc3RhdGUuZ2xvYmFsSGFzaDtcbiAgICAgICAgbmV3R2xvYmFsSGFzaC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZ2xvYmFsSGFzaDogbmV3R2xvYmFsSGFzaCB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnN0YXRlLmdsb2JhbEhhc2hBY3RpdmUubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLmdsb2JhbEhhc2hBY3RpdmVbaV0gPT0gXCJhbGxcIikge1xuICAgICAgICB0aGlzLnN0YXRlLmdsb2JhbEhhc2hBY3RpdmUgPSBbXTtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnN0YXRlLmdsb2JhbEhhc2guaW5kZXhPZih2YWx1ZSk7XG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgbGV0IG5ld0dsb2JhbEhhc2ggPSB0aGlzLnN0YXRlLmdsb2JhbEhhc2g7XG4gICAgICAgICAgbmV3R2xvYmFsSGFzaC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgIGxldCB0b3JmID0gZmFsc2U7XG4gICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBuZXdHbG9iYWxIYXNoLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBpZiAoXCJhbGxcIiA9PSBuZXdHbG9iYWxIYXNoW2pdKSB7XG4gICAgICAgICAgICAgIHRvcmYgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGogPT0gbmV3R2xvYmFsSGFzaC5sZW5ndGggLSAxICYmIHRvcmYgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgbmV3R2xvYmFsSGFzaC5wdXNoKFwiYWxsXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBsZXQgbmV3R2xvYmFsSGFzaEFjdGl2ZSA9IHRoaXMuc3RhdGUuZ2xvYmFsSGFzaEFjdGl2ZTtcbiAgICAgICAgICBuZXdHbG9iYWxIYXNoQWN0aXZlLnB1c2godmFsdWUpO1xuICAgICAgICAgIGdldE5ld0RhdCh0aGlzLnN0YXRlLmRhdGEsIG5ld0dsb2JhbEhhc2hBY3RpdmUpLnRoZW4oKG5ld0RhdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIGdsb2JhbEhhc2hBY3RpdmU6IG5ld0dsb2JhbEhhc2hBY3RpdmUsXG4gICAgICAgICAgICAgIGdsb2JhbEhhc2g6IG5ld0dsb2JhbEhhc2gsXG4gICAgICAgICAgICAgIGZpbHRlcmVkRGF0YTogbmV3RGF0LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh2YWx1ZSA9PSB0aGlzLnN0YXRlLmdsb2JhbEhhc2hBY3RpdmVbaV0pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGkgPT0gdGhpcy5zdGF0ZS5nbG9iYWxIYXNoQWN0aXZlLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnN0YXRlLmdsb2JhbEhhc2guaW5kZXhPZih2YWx1ZSk7XG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgbGV0IG5ld0dsb2JhbEhhc2ggPSB0aGlzLnN0YXRlLmdsb2JhbEhhc2g7XG4gICAgICAgICAgbmV3R2xvYmFsSGFzaC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgIC8vIG5ld0dsb2JhbEhhc2gucHVzaChcImFsbFwiKTtcbiAgICAgICAgICBsZXQgdG9yZiA9IGZhbHNlO1xuICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbmV3R2xvYmFsSGFzaC5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgaWYgKFwiYWxsXCIgPT0gbmV3R2xvYmFsSGFzaFtqXSkge1xuICAgICAgICAgICAgICB0b3JmID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChqID09IG5ld0dsb2JhbEhhc2gubGVuZ3RoIC0gMSAmJiB0b3JmID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgIG5ld0dsb2JhbEhhc2gucHVzaChcImFsbFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgbGV0IG5ld0dsb2JhbEhhc2hBY3RpdmUgPSB0aGlzLnN0YXRlLmdsb2JhbEhhc2hBY3RpdmU7XG4gICAgICAgICAgbmV3R2xvYmFsSGFzaEFjdGl2ZS5wdXNoKHZhbHVlKTtcbiAgICAgICAgICBnZXROZXdEYXQodGhpcy5zdGF0ZS5kYXRhLCBuZXdHbG9iYWxIYXNoQWN0aXZlKS50aGVuKChuZXdEYXQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICBnbG9iYWxIYXNoQWN0aXZlOiBuZXdHbG9iYWxIYXNoQWN0aXZlLFxuICAgICAgICAgICAgICBnbG9iYWxIYXNoOiBuZXdHbG9iYWxIYXNoLFxuICAgICAgICAgICAgICBmaWx0ZXJlZERhdGE6IG5ld0RhdCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5kYXRhICE9IG51bGwpIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLmlzU2luZ2xlID09IGZhbHNlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiSVMgU0lOR0xFIElTIEZBTFNFXCIpO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxXcmFwcGVyPlxuICAgICAgICAgICAgPENoYXJ0V3JhcHBlcj5cbiAgICAgICAgICAgICAgPFRvcEJhclBhcmVudD5cbiAgICAgICAgICAgICAgICA8VG9wQmFyQ2hpbGRCaWdMZWZ0PlxuICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZ2xvYmFsSGFzaEFjdGl2ZS5tYXAoKGhhc2gpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICA8VG9wSGFzaHRhZ0luZGl2aWR1YWxBY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFzaHRhZ0NsaWNrZWRCYWNrKGhhc2gpfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICN7aGFzaH1cbiAgICAgICAgICAgICAgICAgICAgICA8L1RvcEhhc2h0YWdJbmRpdmlkdWFsQWN0aXZlPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5nbG9iYWxIYXNoLm1hcCgoaGFzaCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxUb3BIYXNodGFnSW5kaXZpZHVhbFxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYXNodGFnQ2xpY2tlZChoYXNoKX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAje2hhc2h9XG4gICAgICAgICAgICAgICAgICAgICAgPC9Ub3BIYXNodGFnSW5kaXZpZHVhbD5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvVG9wQmFyQ2hpbGRCaWdMZWZ0PlxuICAgICAgICAgICAgICAgIDxUb3BCYXJDaGlsZFNtYWxsPlxuICAgICAgICAgICAgICAgICAgPFRvcEhhc2h0YWdJbmRpdmlkdWFsQWN0aXZlUG5sPlxuICAgICAgICAgICAgICAgICAgICA8UG5sIC8+XG4gICAgICAgICAgICAgICAgICA8L1RvcEhhc2h0YWdJbmRpdmlkdWFsQWN0aXZlUG5sPlxuICAgICAgICAgICAgICAgIDwvVG9wQmFyQ2hpbGRTbWFsbD5cbiAgICAgICAgICAgICAgICA8VG9wQmFyQ2hpbGRCaWdSaWdodD5cbiAgICAgICAgICAgICAgICAgIDxUb3BIYXNodGFnSW5kaXZpZHVhbEFjdGl2ZVJpZ2h0PlxuICAgICAgICAgICAgICAgICAgICA8U3ltYm9sQ2hvb3NlciAvPlxuICAgICAgICAgICAgICAgICAgPC9Ub3BIYXNodGFnSW5kaXZpZHVhbEFjdGl2ZVJpZ2h0PlxuICAgICAgICAgICAgICAgIDwvVG9wQmFyQ2hpbGRCaWdSaWdodD5cbiAgICAgICAgICAgICAgPC9Ub3BCYXJQYXJlbnQ+XG4gICAgICAgICAgICAgIDxXaG9sZUdyaWQ+XG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuaXNTaW5nbGVOb3RlcyA9PSBmYWxzZSA/IChcbiAgICAgICAgICAgICAgICAgIDxDb250YWluRGl2SGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICA8TmV4dFRvRGl2SGVhZGVyPlN0YXJ0PC9OZXh0VG9EaXZIZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgIDxOZXh0VG9EaXZIZWFkZXI+RW5kPC9OZXh0VG9EaXZIZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgIDxOZXh0VG9EaXZIZWFkZXI+TC9TPC9OZXh0VG9EaXZIZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgIDxOZXh0VG9EaXZIZWFkZXI+RW50cnk8L05leHRUb0RpdkhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgPE5leHRUb0RpdkhlYWRlcj5FeGl0PC9OZXh0VG9EaXZIZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgIDxOZXh0VG9EaXZIZWFkZXI+UXR5PC9OZXh0VG9EaXZIZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgIDxOZXh0VG9EaXZIZWFkZXI+UlBOTDwvTmV4dFRvRGl2SGVhZGVyPlxuICAgICAgICAgICAgICAgICAgPC9Db250YWluRGl2SGVhZGVyPlxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgIDxSZUNoYXJ0XG4gICAgICAgICAgICAgICAgICBkYXRhPXt0aGlzLnN0YXRlLmRhdGF9XG4gICAgICAgICAgICAgICAgICBmaWx0ZXJlZERhdGE9e3RoaXMuc3RhdGUuZmlsdGVyZWREYXRhfVxuICAgICAgICAgICAgICAgICAgaW5pdERhdGE9e3RoaXMucHJvcHMuZGF0YX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L1dob2xlR3JpZD5cbiAgICAgICAgICAgIDwvQ2hhcnRXcmFwcGVyPlxuICAgICAgICAgIDwvV3JhcHBlcj5cbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiSVMgU0lOR0xFIElTIFRSVUVcIik7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPFdyYXBwZXI+XG4gICAgICAgICAgICA8Q2hhcnRXcmFwcGVyPlxuICAgICAgICAgICAgICA8VG9wQmFyUGFyZW50PlxuICAgICAgICAgICAgICAgIDxUb3BCYXJDaGlsZEJpZ0xlZnQ+XG4gICAgICAgICAgICAgICAgICA8VGFicyAvPlxuICAgICAgICAgICAgICAgIDwvVG9wQmFyQ2hpbGRCaWdMZWZ0PlxuICAgICAgICAgICAgICAgIDxUb3BCYXJDaGlsZFNtYWxsPlxuICAgICAgICAgICAgICAgICAgPFRvcEhhc2h0YWdJbmRpdmlkdWFsQWN0aXZlUG5sPlxuICAgICAgICAgICAgICAgICAgICA8UG5sIC8+XG4gICAgICAgICAgICAgICAgICA8L1RvcEhhc2h0YWdJbmRpdmlkdWFsQWN0aXZlUG5sPlxuICAgICAgICAgICAgICAgIDwvVG9wQmFyQ2hpbGRTbWFsbD5cbiAgICAgICAgICAgICAgICA8VG9wQmFyQ2hpbGRCaWdSaWdodD5cbiAgICAgICAgICAgICAgICAgIDxSaWdodFRhYnM+XG4gICAgICAgICAgICAgICAgICAgIDxOb3RlcyBmaXJzdFRyYWRlPXt0aGlzLnN0YXRlLnNpbmdsZVRyYWRlfSAvPlxuICAgICAgICAgICAgICAgICAgPC9SaWdodFRhYnM+XG4gICAgICAgICAgICAgICAgPC9Ub3BCYXJDaGlsZEJpZ1JpZ2h0PlxuICAgICAgICAgICAgICA8L1RvcEJhclBhcmVudD5cbiAgICAgICAgICAgICAgPFdob2xlR3JpZD5cbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5pc1NpbmdsZU5vdGVzID09IGZhbHNlID8gKFxuICAgICAgICAgICAgICAgICAgPENvbnRhaW5EaXZIZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgIDxOZXh0VG9EaXZIZWFkZXI+U3RhcnQ8L05leHRUb0RpdkhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgPE5leHRUb0RpdkhlYWRlcj5FbmQ8L05leHRUb0RpdkhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgPE5leHRUb0RpdkhlYWRlcj5ML1M8L05leHRUb0RpdkhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgPE5leHRUb0RpdkhlYWRlcj5FbnRyeTwvTmV4dFRvRGl2SGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICA8TmV4dFRvRGl2SGVhZGVyPkV4aXQ8L05leHRUb0RpdkhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgPE5leHRUb0RpdkhlYWRlcj5RdHk8L05leHRUb0RpdkhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgPE5leHRUb0RpdkhlYWRlcj5SUE5MPC9OZXh0VG9EaXZIZWFkZXI+XG4gICAgICAgICAgICAgICAgICA8L0NvbnRhaW5EaXZIZWFkZXI+XG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgPFJlQ2hhcnRcbiAgICAgICAgICAgICAgICAgIGRhdGE9e3RoaXMuc3RhdGUuZGF0YX1cbiAgICAgICAgICAgICAgICAgIGZpbHRlcmVkRGF0YT17dGhpcy5zdGF0ZS5maWx0ZXJlZERhdGF9XG4gICAgICAgICAgICAgICAgICBpbml0RGF0YT17dGhpcy5wcm9wcy5kYXRhfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvV2hvbGVHcmlkPlxuICAgICAgICAgICAgPC9DaGFydFdyYXBwZXI+XG4gICAgICAgICAgPC9XcmFwcGVyPlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBTaW5nbGVUYWJJbm5lciA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbjogYXV0bztcbmA7XG5cbmNvbnN0IFNpbmdsZVRhYiA9IHN0eWxlZC5kaXZgXG4gIGNvbG9yOiAkeyhwcm9wcykgPT4gKHByb3BzLmlzQWN0aXZlID8gXCIjZmZmXCIgOiBcIiMwMDBcIil9O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwcm9wcykgPT4gKHByb3BzLmlzQWN0aXZlID8gXCIjMDAwXCIgOiBcIiNmZmZcIil9O1xuXG4gIG1hcmdpbjogYXV0byAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbmA7XG5cbmNvbnN0IFdyYXBUYWJzID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZm9udC1zaXplOiAxNXB4O1xuYDtcbmNvbnN0IFdob2xlR3JpZCA9IHN0eWxlZC5kaXZgYDtcbi8vIGJvcmRlcjogMXB4IHNvbGlkICNmMmYyZjI7XG5cbmNvbnN0IFRvcEJhclBhcmVudCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcbmA7XG5cbi8vIGZsZXg6IDEgMSA0NSU7IC8qZ3JvdyB8IHNocmluayB8IGJhc2lzICovXG5jb25zdCBUb3BCYXJDaGlsZEJpZ0xlZnQgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogNDUlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBvdmVyZmxvdzogYXV0bztcbmA7XG5jb25zdCBUb3BCYXJDaGlsZEJpZ1JpZ2h0ID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDQ1JTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgb3ZlcmZsb3c6IGF1dG87XG5gO1xuXG5jb25zdCBUb3BCYXJDaGlsZFNtYWxsID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgd2lkdGg6IDEwJTtcbmA7XG5cbmNvbnN0IFRvcEhhc2h0YWdJbmRpdmlkdWFsID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZDogI2Y4ZjhmZjtcbiAgY29sb3I6ICMwMDA7XG4gIHBhZGRpbmc6IDhweDtcbiAgbWFyZ2luOiAwIDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgJHt3aWRlRm9udH1cblxuICA6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICBtYXJnaW4tbGVmdDogMDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbmA7XG5cbmNvbnN0IFRvcEhhc2h0YWdJbmRpdmlkdWFsQWN0aXZlID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZDogIzIxMjUyODtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDhweDtcbiAgbWFyZ2luOiAwIDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgJHt3aWRlRm9udH1cbiAgOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG5gO1xuY29uc3QgVG9wSGFzaHRhZ0luZGl2aWR1YWxBY3RpdmVSaWdodCA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQ6ICMyMTI1Mjg7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiA4cHg7XG4gIG1hcmdpbjogMCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gICR7d2lkZUZvbnR9XG4gIG1hcmdpbjowIGF1dG87XG4gIDpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIG1hcmdpbi1yaWdodDogMDtcbmA7XG5jb25zdCBSaWdodFRhYnMgPSBzdHlsZWQuZGl2YFxuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luOiAwIDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgJHt3aWRlRm9udH1cbiAgbWFyZ2luOjAgYXV0bztcbiAgOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgbWFyZ2luLXJpZ2h0OiAwO1xuYDtcblxuY29uc3QgVG9wSGFzaHRhZ0luZGl2aWR1YWxBY3RpdmVQbmwgPSBzdHlsZWQuZGl2YFxuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDAgMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAke3dpZGVGb250fVxuICA6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICBtYXJnaW46IGF1dG87XG5gO1xuXG5jb25zdCBDaGFydFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZzogNXB4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweDtcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgbWFyZ2luOiAwIDV2dztcbiAgfVxuYDtcblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi10b3A6IDVweDtcbmA7XG4iLCJpbXBvcnQgeyBRdWVyeSB9IGZyb20gXCJyZWFjdC1hcG9sbG9cIjtcbmltcG9ydCBSZUNoYXJ0IGZyb20gXCIuL1RhZGVzL1RyYWRlc1wiO1xuaW1wb3J0IFNpZGViYXIgZnJvbSBcIi4uL01lbnUvTWVudVwiO1xuaW1wb3J0IGdxbCBmcm9tIFwiZ3JhcGhxbC10YWdcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBpbmplY3QsIG9ic2VydmVyIH0gZnJvbSBcIm1vYngtcmVhY3RcIjtcbmltcG9ydCB7XG4gIENvbnRhaW5EaXYsXG4gIE5leHRUb0RpdixcbiAgTmV4dFRvRGl2SGVhZGVyLFxuICBSb3dDb250YWluZXIsXG4gIENvbnRhaW5EaXZIZWFkZXIsXG59IGZyb20gXCIuL1RhZGVzL1RyYWRlc1wiO1xuaW1wb3J0IHsgZXF1YWwgfSBmcm9tIFwiZmFzdC1kZWVwLWVxdWFsXCI7XG5pbXBvcnQgQXBpS2V5Rm9ybSBmcm9tIFwiLi9BZGRBcGlGb3JtXCI7XG5pbXBvcnQgVG90YWxEYXQgZnJvbSBcIi4vRGFzaGJvYXJkXCI7XG5pbXBvcnQgVG90YWxEYXQ3NjggZnJvbSBcIi4vNzY4cHgvRGFzaGJvYXJkVGVzdFwiO1xuaW1wb3J0IHsgd2hlbiwgcmVhY3Rpb24gfSBmcm9tIFwibW9ieFwiO1xuaW1wb3J0IHsgZ2V0U3RhdGVEYXRlLCBtYWtlRGF0ZURheXMsIG1ha2VEYXRlSHJzIH0gZnJvbSBcIi4uL0hlbHBlcnMvRnVuY3Rpb25zXCI7XG5cbkBpbmplY3QoW1wic3RvcmVcIl0pXG5Ab2JzZXJ2ZXJcbmNsYXNzIEZldGNoUXVlcnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBzdGFydERhdGU6IFwiXCIsIGVuZERhdGU6IFwiXCIsIGRhdGU6IFwiXCIgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnNvbGUubG9nKFwibG9hZGVkIGZldGNoIHF1ZXJ5IGNvbXBvbmVudFwiKTtcbiAgfVxuXG4gIGNsaWNrZWQgPSAoKSA9PiB7XG4gICAgc3RvcmUuaXNBdXRoID0gIXN0b3JlLmlzQXV0aDtcbiAgICBjb25zb2xlLmxvZyhzdG9yZS5pc0F1dGgpO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgZmV0Y2hUcmFkZUhpc3RvcnlWYXJpYWJsZXMgPSB7XG4gICAgICBzdGFydDogdGhpcy5wcm9wcy5zdG9yZS5zdGFydERhdGUsXG4gICAgICBlbmQ6IHRoaXMucHJvcHMuc3RvcmUuZW5kRGF0ZSxcbiAgICAgIHN5bWJvbDogdGhpcy5wcm9wcy5zdG9yZS5zeW1ib2wsXG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8Q29tcFxuICAgICAgICAgIHF1ZXJ5PXtmZXRjaFRyYWRlSGlzdG9yeVF1ZXJ5fVxuICAgICAgICAgIHZhcnM9e2ZldGNoVHJhZGVIaXN0b3J5VmFyaWFibGVzfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5AaW5qZWN0KFtcInN0b3JlXCJdKVxuQG9ic2VydmVyXG5jbGFzcyBDb21wIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgd2lkdGg6IDAgfTtcbiAgICB0aGlzLnVwZGF0ZVdpbmRvd0RpbWVuc2lvbnMgPSB0aGlzLnVwZGF0ZVdpbmRvd0RpbWVuc2lvbnMuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMudGVtcFRhZ3NSZWFjdGlvbiA9IHJlYWN0aW9uKFxuICAgICAgKCkgPT4gdGhpcy5wcm9wcy5zdG9yZS5oYXNUZW1wVGFncyxcbiAgICAgIChub3RpZmljYXRpb25zLCByZWFjdGlvbikgPT4ge1xuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKGNvbnNvbGUubG9nKFwiRk9SQ0UgVVBEQVRFIFdBUyBDQUxMRURcIikpO1xuICAgICAgfVxuICAgICk7XG4gICAgdGhpcy51cGRhdGVXaW5kb3dEaW1lbnNpb25zKCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy51cGRhdGVXaW5kb3dEaW1lbnNpb25zKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMudGVtcFRhZ3NSZWFjdGlvbigpO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMudXBkYXRlV2luZG93RGltZW5zaW9ucyk7XG4gIH1cblxuICB1cGRhdGVXaW5kb3dEaW1lbnNpb25zKCkge1xuICAgIGNvbnNvbGUubG9nKHdpbmRvdy5pbm5lcldpZHRoKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zb2xlLmxvZyhcInJlcmVuZGVyZWRcIik7XG4gICAgcmV0dXJuIChcbiAgICAgIDxRdWVyeSBxdWVyeT17dGhpcy5wcm9wcy5xdWVyeX0gdmFyaWFibGVzPXt0aGlzLnByb3BzLnZhcnN9PlxuICAgICAgICB7KHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfSkgPT4ge1xuICAgICAgICAgIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+bm8gZGF0YSBsb2FkZWQ8L2Rpdj47XG4gICAgICAgICAgaWYgKGxvYWRpbmcpIHJldHVybiA8ZGl2PkxvYWRpbmc8L2Rpdj47XG4gICAgICAgICAgaWYgKGRhdGEuY2hlY2tBcGlLZXkgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybiA8QXBpS2V5Rm9ybSAvPjtcbiAgICAgICAgICB9IGVsc2UgaWYgKGRhdGEuY2hlY2tBcGlLZXkgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5zdG9yZS5yZXNldEhhc1RlbXBUYWdzKCk7XG4gICAgICAgICAgICB0aGlzLnByb3BzLnN0b3JlLmNsZWFyVGVtcE5vdGVzKCk7XG4gICAgICAgICAgICB0aGlzLnByb3BzLnN0b3JlLmNsZWFyVGVtcFRhZ3MoKTtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc3RvcmUucmVzZXRQbmwoKTtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc3RvcmUuaGFzU2luZ2xlVHJhZGUgPSBmYWxzZTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUud2lkdGggPiA3NjgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIDxUb3RhbERhdCBkYXRhPXtkYXRhfSAvPjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJldHVybiA8VG90YWxEYXQ3NjggZGF0YT17ZGF0YX0gLz47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9fVxuICAgICAgPC9RdWVyeT5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZldGNoUXVlcnk7XG5cbmNvbnN0IGZldGNoVHJhZGVIaXN0b3J5UXVlcnkgPSBncWxgXG4gIHF1ZXJ5IGZldGNoVHJhZGVIaXN0b3J5KCRzdGFydDogU3RyaW5nISwgJGVuZDogU3RyaW5nISwgJHN5bWJvbDogU3RyaW5nISkge1xuICAgIGNoZWNrQXBpS2V5XG5cbiAgICBmZXRjaFRyYWRlSGlzdG9yeShzdGFydDogJHN0YXJ0LCBlbmQ6ICRlbmQsIHN5bWJvbDogJHN5bWJvbCkge1xuICAgICAgaWRcbiAgICAgIHRpbWVzdGFtcFxuICAgICAgc2lkZVxuICAgICAgcHJpY2VcbiAgICAgIG9yZGVyUXR5XG4gICAgICBsZWF2ZXNRdHlcbiAgICAgIGN1cnJlbnRRdHlcbiAgICAgIGF2Z0VudHJ5UHJpY2VcbiAgICAgIGV4ZWNHcm9zc1BubFxuICAgICAgcmVhbGl6ZWRQbmxcbiAgICAgIGNvbW1pc3Npb25cbiAgICAgIGV4ZWNUeXBlXG4gICAgICBvcmRlclR5cGVcbiAgICAgIHRyZFN0YXJ0XG4gICAgICB0cmRFbmRcbiAgICAgIG5vdGVzXG4gICAgICBoYXNodGFnc1xuICAgIH1cblxuICAgIGZldGNoT25lTWludXRlQ2FuZGxlSGlzdG9yeShzdGFydDogJHN0YXJ0LCBlbmQ6ICRlbmQpIHtcbiAgICAgIGlkXG4gICAgICB0aW1lc3RhbXBcbiAgICAgIHN5bWJvbFxuICAgICAgdGltZWZyYW1lXG4gICAgICBvcGVuXG4gICAgICBoaWdoXG4gICAgICBsb3dcbiAgICAgIGNsb3NlXG4gICAgICB0cmFkZXNcbiAgICAgIHZvbHVtZVxuICAgICAgdndhcFxuICAgICAgbGFzdFNpemVcbiAgICAgIGhvbWVOb3Rpb25hbFxuICAgICAgZm9yZWlnbk5vdGlvbmFsXG4gICAgfVxuXG4gICAgZmV0Y2hPbmVIb3VyQ2FuZGxlSGlzdG9yeShzdGFydDogJHN0YXJ0LCBlbmQ6ICRlbmQpIHtcbiAgICAgIGlkXG4gICAgICB0aW1lc3RhbXBcbiAgICAgIHN5bWJvbFxuICAgICAgdGltZWZyYW1lXG4gICAgICBvcGVuXG4gICAgICBoaWdoXG4gICAgICBsb3dcbiAgICAgIGNsb3NlXG4gICAgICB0cmFkZXNcbiAgICAgIHZvbHVtZVxuICAgICAgdndhcFxuICAgICAgbGFzdFNpemVcbiAgICAgIGhvbWVOb3Rpb25hbFxuICAgICAgZm9yZWlnbk5vdGlvbmFsXG4gICAgfVxuXG4gICAgZmV0Y2hPbmVEYXlDYW5kbGVIaXN0b3J5KHN0YXJ0OiAkc3RhcnQsIGVuZDogJGVuZCkge1xuICAgICAgaWRcbiAgICAgIHRpbWVzdGFtcFxuICAgICAgc3ltYm9sXG4gICAgICB0aW1lZnJhbWVcbiAgICAgIG9wZW5cbiAgICAgIGhpZ2hcbiAgICAgIGxvd1xuICAgICAgY2xvc2VcbiAgICAgIHRyYWRlc1xuICAgICAgdm9sdW1lXG4gICAgICB2d2FwXG4gICAgICBsYXN0U2l6ZVxuICAgICAgaG9tZU5vdGlvbmFsXG4gICAgICBmb3JlaWduTm90aW9uYWxcbiAgICB9XG5cbiAgICBmZXRjaEZpdmVNaW51dGVDYW5kbGVIaXN0b3J5KHN0YXJ0OiAkc3RhcnQsIGVuZDogJGVuZCkge1xuICAgICAgaWRcbiAgICAgIHRpbWVzdGFtcFxuICAgICAgc3ltYm9sXG4gICAgICB0aW1lZnJhbWVcbiAgICAgIG9wZW5cbiAgICAgIGhpZ2hcbiAgICAgIGxvd1xuICAgICAgY2xvc2VcbiAgICAgIHRyYWRlc1xuICAgICAgdm9sdW1lXG4gICAgICB2d2FwXG4gICAgICBsYXN0U2l6ZVxuICAgICAgaG9tZU5vdGlvbmFsXG4gICAgICBmb3JlaWduTm90aW9uYWxcbiAgICB9XG4gIH1cbmA7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkLCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB0aGVtZSBmcm9tIFwiLi4vdGhlbWVcIjtcbmltcG9ydCBGZXRjaFF1ZXJ5IGZyb20gXCIuL0ZldGNoUXVlcnlcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBpbmplY3QsIG9ic2VydmVyIH0gZnJvbSBcIm1vYngtcmVhY3RcIjtcbmltcG9ydCB7IFN0b3JlLCBoeWRyYXRlIH0gZnJvbSBcIi4uLy4uL3N0b3Jlcy9zdG9yZVwiO1xuaW1wb3J0IHsgZ2V0U3RhdGVEYXRlIH0gZnJvbSBcIi4uL0hlbHBlcnMvRnVuY3Rpb25zXCI7XG5cbmNvbnN0IENvb2tpZSA9IHJlcXVpcmUoXCJqcy1jb29raWVcIik7XG5cbkBpbmplY3QoXCJzdG9yZVwiKVxuQG9ic2VydmVyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXNoSW5pdGlhbFRlcm1zIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHN0YXJ0OiBudWxsLFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBsZXQgY29vayA9IENvb2tpZS5nZXQoXCJpc0F1dGhcIikgPT0gXCJ0cnVlXCI7XG4gICAgaWYgKCFjb29rKSB7XG4gICAgICBSb3V0ZXIucHVzaChcIi9cIik7XG4gICAgfSBlbHNlIGlmICghIWNvb2spIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0F1dGg6IGNvb2sgfSk7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLnN0b3JlLnN0YXJ0RGF0ZSA9PSBudWxsKSB7XG4gICAgICBsZXQgZGF0ZXMgPSBnZXRTdGF0ZURhdGUoXCJUaGlzIFdlZWtcIik7XG4gICAgICB0aGlzLnByb3BzLnN0b3JlLnN0YXJ0RGF0ZSA9IGRhdGVzLnN0YXJ0O1xuICAgICAgdGhpcy5wcm9wcy5zdG9yZS5lbmREYXRlID0gZGF0ZXMuZW5kO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN0YXJ0OiB0cnVlIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5zdGFydCAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lKGZhbHNlKX0+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX0+XG4gICAgICAgICAgICA8RmV0Y2hRdWVyeSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gPGRpdj5sb2FkaW5nPC9kaXY+O1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgQXBvbGxvQ29uc3VtZXIgfSBmcm9tIFwicmVhY3QtYXBvbGxvXCI7XG5pbXBvcnQgeyBnZXROb3RlcywgZ2V0SGFzaHRhZ3MgfSBmcm9tIFwiLi9ub3Rlc0hlbHBlcnNcIjtcbmltcG9ydCBncWwgZnJvbSBcImdyYXBocWwtdGFnXCI7XG5pbXBvcnQge1xuICBEcm9wZG93bixcbiAgRHJvcGRvd25Ub2dnbGUsXG4gIERyb3Bkb3duTWVudSxcbiAgRHJvcGRvd25JdGVtLFxufSBmcm9tIFwicmVhY3RzdHJhcFwiO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xuaW1wb3J0IHsgZmFQbHVzLCBmYVRpbWVzLCBmYUVxdWFscyB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcbmltcG9ydCB7IGluamVjdCwgb2JzZXJ2ZXIgfSBmcm9tIFwibW9ieC1yZWFjdFwiO1xuaW1wb3J0IHsgd2hlbiB9IGZyb20gXCJtb2J4XCI7XG5pbXBvcnQgZXF1YWwgZnJvbSBcImZhc3QtZGVlcC1lcXVhbFwiO1xuaW1wb3J0IFRleHRhcmVhQXV0b3NpemUgZnJvbSBcInJlYWN0LWF1dG9zaXplLXRleHRhcmVhXCI7XG5pbXBvcnQgeyB3aWRlRm9udCwgc21hbGxGb250IH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9oZWxwZXJzXCI7XG5cbkBpbmplY3QoW1wic3RvcmVcIl0pXG5Ab2JzZXJ2ZXJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHZhbHVlOiBcIlwiLFxuICAgICAgaGFzaHRhZ3M6IFtdLFxuICAgICAgaW5pdEhhc2h0YWdzOiBbXSxcbiAgICAgIHNob3dOb3RlczogZmFsc2UsXG4gICAgfTtcblxuICAgIHRoaXMuc2V0U2hvd05vdGVzID0gdGhpcy5zZXRTaG93Tm90ZXMuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuc3RvcmUudGVtcE5vdGVzWzBdICE9IHVuZGVmaW5lZCkge1xuICAgICAgbGV0IGlzVGVtcCA9IGZhbHNlO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb3BzLnN0b3JlLnRlbXBOb3Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgdGhpcy5wcm9wcy5zdG9yZS50ZW1wTm90ZXNbaV0udGltZSA9PSB0aGlzLnByb3BzLmZpcnN0VHJhZGUudGltZXN0YW1wXG4gICAgICAgICkge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogdGhpcy5wcm9wcy5zdG9yZS50ZW1wTm90ZXNbaV0ubm90ZSB9KTtcbiAgICAgICAgICBpc1RlbXAgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpID09IHRoaXMucHJvcHMuc3RvcmUudGVtcE5vdGVzLmxlbmd0aCAtIDEgJiYgaXNUZW1wID09IGZhbHNlKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB2YWx1ZTogdGhpcy5wcm9wcy5maXJzdFRyYWRlLm5vdGVzLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmZpcnN0VHJhZGUubm90ZXMgIT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICB2YWx1ZTogdGhpcy5wcm9wcy5maXJzdFRyYWRlLm5vdGVzLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGV0IHNwbGl0VGFncyA9IHRoaXMucHJvcHMuZmlyc3RUcmFkZS5oYXNodGFncy5zcGxpdChcIixcIik7XG4gICAgc3BsaXRUYWdzLm1hcCgodGFnKSA9PiB7XG4gICAgICB0aGlzLnN0YXRlLmluaXRIYXNodGFncy5wdXNoKHRhZyk7XG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoY2xpZW50KSB7XG4gICAgcmV0dXJuIChldmVudCkgPT4ge1xuICAgICAgLy8gZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0sIHRoaXMuaGFuZGxlU3VibWl0KGNsaWVudCkpO1xuICAgICAgdGhpcy5wcm9wcy5zdG9yZS5hZGRUZW1wTm90ZShcbiAgICAgICAgdGhpcy5wcm9wcy5maXJzdFRyYWRlLnRpbWVzdGFtcCxcbiAgICAgICAgZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICApO1xuICAgIH07XG4gIH1cblxuICByZW1vdmVIYXNodGFnKGNsaWVudCwgaGFzaHRhZykge1xuICAgIHJldHVybiBhc3luYyAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudCAhPSB1bmRlZmluZWQgJiYgZXZlbnQucHJldmVudERlZmF1bHQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgICBsZXQgdGltZSA9IHRoaXMucHJvcHMuZmlyc3RUcmFkZS50aW1lc3RhbXA7XG4gICAgICBjbGllbnRcbiAgICAgICAgLm11dGF0ZSh7XG4gICAgICAgICAgbXV0YXRpb246IGdxbGBcbiAgICAgICAgICAgIG11dGF0aW9uIHJlbW92ZUhhc2h0YWcoJHRpbWU6IFN0cmluZyEsICRoYXNodGFnOiBTdHJpbmchKSB7XG4gICAgICAgICAgICAgIHJlbW92ZUhhc2h0YWcodGltZTogJHRpbWUsIGhhc2h0YWc6ICRoYXNodGFnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIGAsXG4gICAgICAgICAgdmFyaWFibGVzOiB7IHRpbWUsIGhhc2h0YWcgfSxcbiAgICAgICAgICByZWZldGNoUXVlcmllczogW2BmZXRjaFRyYWRlSGlzdG9yeWBdLFxuICAgICAgICB9KVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5zdG9yZS5jaGFuZ2VIYXNUZW1wVGFncygpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICB9XG5cbiAgaGFuZGxlU3VibWl0KGNsaWVudCkge1xuICAgIHJldHVybiAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudCAhPSB1bmRlZmluZWQgJiYgZXZlbnQucHJldmVudERlZmF1bHQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZyhcIkhBU0hUQUdTXCIsIHRoaXMuc3RhdGUuaGFzaHRhZ3MpO1xuICAgICAgZ2V0Tm90ZXModGhpcy5zdGF0ZS52YWx1ZSkudGhlbihhc3luYyAocmVzKSA9PiB7XG4gICAgICAgIGxldCBub3RlcyA9IHJlc1swXTtcbiAgICAgICAgbGV0IHRpbWUgPSB0aGlzLnByb3BzLmZpcnN0VHJhZGUudGltZXN0YW1wO1xuICAgICAgICBsZXQgcmVzbyA9IGNsaWVudC5tdXRhdGUoe1xuICAgICAgICAgIG11dGF0aW9uOiBncWxgXG4gICAgICAgICAgICBtdXRhdGlvbiBhZGROb3RlcygkdGltZTogU3RyaW5nISwgJG5vdGVzOiBTdHJpbmchKSB7XG4gICAgICAgICAgICAgIGFkZE5vdGVzKHRpbWU6ICR0aW1lLCBub3RlczogJG5vdGVzKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIGAsXG4gICAgICAgICAgdmFyaWFibGVzOiB7IHRpbWUsIG5vdGVzIH0sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBhd2FpdCByZXNvO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfVxuXG4gIHNldFNob3dOb3RlcygpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5zaG93Tm90ZXMgPT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93Tm90ZXM6IHRydWUgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93Tm90ZXM6IGZhbHNlIH0pO1xuICAgIH1cbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxBcG9sbG9Db25zdW1lcj5cbiAgICAgICAgeyhjbGllbnQpID0+IChcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEZ1bGxSb3cgb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0KGNsaWVudCl9PlxuICAgICAgICAgICAgICA8SGFzaHRhZ0Rpdj5cbiAgICAgICAgICAgICAgICA8QWRkSGFzaHRhZ1xuICAgICAgICAgICAgICAgICAgZmlyc3RUcmFkZT17dGhpcy5wcm9wcy5maXJzdFRyYWRlfVxuICAgICAgICAgICAgICAgICAgY2xpZW50PXtjbGllbnR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9IYXNodGFnRGl2PlxuICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5pbml0SGFzaHRhZ3MubWFwKCh0YWcpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGFnICE9IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxTaW5nbGVIYXNodGFnRGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxTaW5nbGVIYXNodGFnVGV4dD4je3RhZ308L1NpbmdsZUhhc2h0YWdUZXh0PlxuICAgICAgICAgICAgICAgICAgICAgIDxTaW5nbGVIYXNodGFnRGVsZXRlXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnJlbW92ZUhhc2h0YWcoY2xpZW50LCB0YWcpfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj17ZmFUaW1lc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInhzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9TaW5nbGVIYXNodGFnRGVsZXRlPlxuICAgICAgICAgICAgICAgICAgICA8L1NpbmdsZUhhc2h0YWdEaXY+XG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnNob3dOb3RlcyA9PSB0cnVlID8gKFxuICAgICAgICAgICAgICAgIDxTaG93Tm90ZXNEaXYgb25DbGljaz17KCkgPT4gdGhpcy5zZXRTaG93Tm90ZXMoKX0+XG4gICAgICAgICAgICAgICAgICA8U2hvd05vdGVzSW5uZXI+SGlkZSBOb3RlczwvU2hvd05vdGVzSW5uZXI+XG4gICAgICAgICAgICAgICAgPC9TaG93Tm90ZXNEaXY+XG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPFNob3dOb3Rlc0RpdiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFNob3dOb3RlcygpfT5cbiAgICAgICAgICAgICAgICAgIDxTaG93Tm90ZXNJbm5lcj5TaG93IE5vdGVzPC9TaG93Tm90ZXNJbm5lcj5cbiAgICAgICAgICAgICAgICA8L1Nob3dOb3Rlc0Rpdj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvRnVsbFJvdz5cbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLnNob3dOb3RlcyA9PSB0cnVlID8gKFxuICAgICAgICAgICAgICA8VGV4dGFyZWFBdXRvc2l6ZVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjEycHggMjBweFwiLFxuICAgICAgICAgICAgICAgICAgbWFyZ2luOiBcIjhweCAwXCIsXG4gICAgICAgICAgICAgICAgICBib3hTaXppbmc6IFwiYm9yZGVyLWJveFwiLFxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogXCIjZjhmOGZmXCIsXG4gICAgICAgICAgICAgICAgICBib3JkZXI6IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgICAgb3V0bGluZTogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxNnB4XCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICByb3dzPXs1fVxuICAgICAgICAgICAgICAgIG1heFJvd3M9ezI1fVxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZShjbGllbnQpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L0Fwb2xsb0NvbnN1bWVyPlxuICAgICk7XG4gIH1cbn1cbi8vIGNvbnN0IE5vdGVzSW5wdXQgPSBzdHlsZWQudGV4dGFyZWFgXG4vLyAgIHdpZHRoOiAxMDAlO1xuLy8gICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4vLyAgIG1hcmdpbjogOHB4IDA7XG4vLyAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4vLyAgIGJhY2tncm91bmQ6ICNmOGY4ZmY7XG4vLyAgIGJvcmRlcjogbm9uZTtcbi8vIGA7XG5cbkBpbmplY3QoW1wic3RvcmVcIl0pXG5Ab2JzZXJ2ZXJcbmNsYXNzIEFkZEhhc2h0YWcgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBjbGlja2VkOiBmYWxzZSB9O1xuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5jbGlja2VkID0gdGhpcy5jbGlja2VkLmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgY2xpZW50OiB0aGlzLnByb3BzLmNsaWVudCB9KTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZShldmVudCkge1xuICAgIC8vIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVN1Ym1pdChldmVudCkge1xuICAgIC8vIHJldHVybiBldmVudCA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnZhbHVlKTtcbiAgICBnZXRIYXNodGFncyh0aGlzLnN0YXRlLnZhbHVlKVxuICAgICAgLnRoZW4oYXN5bmMgKHJlcykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkNMSUNLRURcIik7XG4gICAgICAgIGxldCBjbGllbnQgPSB0aGlzLnN0YXRlLmNsaWVudDtcbiAgICAgICAgbGV0IGhhc2h0YWcgPSByZXM7XG4gICAgICAgIGNvbnNvbGUubG9nKGhhc2h0YWcsIFwiSEFTSFRBR1wiKTtcbiAgICAgICAgbGV0IHRpbWUgPSB0aGlzLnByb3BzLmZpcnN0VHJhZGUudGltZXN0YW1wO1xuICAgICAgICBsZXQgcmVzbyA9IGNsaWVudC5tdXRhdGUoe1xuICAgICAgICAgIG11dGF0aW9uOiBncWxgXG4gICAgICAgICAgICBtdXRhdGlvbiBhZGRIYXNodGFnKCR0aW1lOiBTdHJpbmchLCAkaGFzaHRhZzogU3RyaW5nISkge1xuICAgICAgICAgICAgICBhZGRIYXNodGFnKHRpbWU6ICR0aW1lLCBoYXNodGFnOiAkaGFzaHRhZylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgLFxuICAgICAgICAgIHZhcmlhYmxlczogeyB0aW1lLCBoYXNodGFnIH0sXG4gICAgICAgICAgcmVmZXRjaFF1ZXJpZXM6IFtgZmV0Y2hUcmFkZUhpc3RvcnlgXSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGF3YWl0IHJlc287XG4gICAgICB9KVxuICAgICAgLnRoZW4oKHJlc28pID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiBcIlwiIH0pO1xuICAgICAgICB0aGlzLnByb3BzLnN0b3JlLmNoYW5nZUhhc1RlbXBUYWdzKCk7XG4gICAgICB9KTtcbiAgICAvLyB9O1xuICB9XG5cbiAgY2xpY2tlZCgpIHtcbiAgICB0aGlzLnN0YXRlLmNsaWNrZWRcbiAgICAgID8gdGhpcy5zZXRTdGF0ZSh7IGNsaWNrZWQ6IGZhbHNlIH0pXG4gICAgICA6IHRoaXMuc2V0U3RhdGUoeyBjbGlja2VkOiB0cnVlIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8UG9wdXAgb25DbGljaz17dGhpcy5jbGlja2VkfT5cbiAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhUGx1c30gc3R5bGU9e3sgdHJhbnNpdGlvbjogXCJub25lXCIgfX0gLz5cbiAgICAgICAgPC9Qb3B1cD5cbiAgICAgICAge3RoaXMuc3RhdGUuY2xpY2tlZCA/IChcbiAgICAgICAgICA8UG9wdXBUb3A+XG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8QWRkSGFzaFN1Ym1pdCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJBZGQgSGFzaHRhZ1wiIC8+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPC9Qb3B1cFRvcD5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5jb25zdCBBZGRIYXNoU3VibWl0ID0gc3R5bGVkLmlucHV0YFxuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZzogMnB4O1xuYDtcbmNvbnN0IFBvcHVwID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZDogIzAwMDtcbiAgcGFkZGluZzogOHB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG5gO1xuXG5jb25zdCBQb3B1cFRvcCA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogIzAwMDtcbiAgei1pbmRleDogMTtcbiAgbWFyZ2luOiA1cHg7XG4gIHBhZGRpbmc6IDJweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuYDtcbi8vIGJhY2tncm91bmQ6ICM2Yzc1N2Q7XG4vLyBiYWNrZ3JvdW5kOiAjYjliZGMxO1xuY29uc3QgU2luZ2xlSGFzaHRhZ0RpdiA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQ6ICNmOGY4ZmY7XG4gIG1hcmdpbjogMjBweCA4cHg7XG4gIGNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogNXB4IDdweDtcblxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBtYXJnaW4tbGVmdDogMHB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG5gO1xuXG5jb25zdCBTaG93Tm90ZXNEaXYgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBtYXJnaW46IDIwcHggOHB4O1xuXG4gIGNvbG9yOiAjMDAwO1xuICBwYWRkaW5nOiAxMHB4O1xuICBwYWRkaW5nLXRvcDogOHB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBtYXJnaW4tbGVmdDogMHB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJhY2tncm91bmQ6ICNmOGY4ZmY7XG4gIDpob3ZlciB7XG4gICAgdHJhbnNpdGlvbjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbmA7XG5cbmNvbnN0IFNob3dOb3Rlc0lubmVyID0gc3R5bGVkLmRpdmBcbiAgJHt3aWRlRm9udH1cbiAgZm9udC1zaXplOjEzcHg7XG4gIHRyYW5zaXRpb246IG5vbmU7XG4gIG1hcmdpbjogYXV0bztcbmA7XG5cbmNvbnN0IFNpbmdsZUhhc2h0YWdUZXh0ID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luOiBhdXRvO1xuICAke3dpZGVGb250fVxuYDtcbmNvbnN0IFNpbmdsZUhhc2h0YWdEZWxldGUgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiA2cHg7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbiAgOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbmA7XG5cbmNvbnN0IEhhc2h0YWdEaXYgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW46IGF1dG8gMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG5gO1xuXG5jb25zdCBGdWxsUm93ID0gc3R5bGVkLmZvcm1gXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGJhY2tncm91bmQ6ICNmOGY4ZmY7XG5gO1xuXG5jb25zdCBOb3Rlc1N1Ym1pdCA9IHN0eWxlZC5pbnB1dGBcbiAgbWFyZ2luOiA5cHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJhY2tncm91bmQ6ICMyMTI1Mjg7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuYDtcblxuY29uc3QgTm90ZXNJbnB1dCA9IHN0eWxlZC50ZXh0YXJlYWBcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEycHggMjBweDtcbiAgbWFyZ2luOiAwcHggMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYmFja2dyb3VuZDogI2Y4ZjhmZjtcbiAgYm9yZGVyOiBub25lO1xuYDtcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IEFwb2xsb0NvbnN1bWVyIH0gZnJvbSBcInJlYWN0LWFwb2xsb1wiO1xuaW1wb3J0IHsgZ2V0Tm90ZXMsIGdldEhhc2h0YWdzIH0gZnJvbSBcIi4vbm90ZXNIZWxwZXJzXCI7XG5pbXBvcnQgZ3FsIGZyb20gXCJncmFwaHFsLXRhZ1wiO1xuaW1wb3J0IHtcbiAgRHJvcGRvd24sXG4gIERyb3Bkb3duVG9nZ2xlLFxuICBEcm9wZG93bk1lbnUsXG4gIERyb3Bkb3duSXRlbSxcbn0gZnJvbSBcInJlYWN0c3RyYXBcIjtcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcbmltcG9ydCB7IGZhUGx1cywgZmFUaW1lcywgZmFFcXVhbHMgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5pbXBvcnQgeyBpbmplY3QsIG9ic2VydmVyIH0gZnJvbSBcIm1vYngtcmVhY3RcIjtcbmltcG9ydCB7IHdoZW4gfSBmcm9tIFwibW9ieFwiO1xuaW1wb3J0IGVxdWFsIGZyb20gXCJmYXN0LWRlZXAtZXF1YWxcIjtcbmltcG9ydCBUZXh0YXJlYUF1dG9zaXplIGZyb20gXCJyZWFjdC1hdXRvc2l6ZS10ZXh0YXJlYVwiO1xuaW1wb3J0IHsgd2lkZUZvbnQsIHNtYWxsRm9udCB9IGZyb20gXCIuLi8uLi9zaGFyZWQvaGVscGVyc1wiO1xuXG5AaW5qZWN0KFtcInN0b3JlXCJdKVxuQG9ic2VydmVyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB2YWx1ZTogXCJcIixcbiAgICAgIGhhc2h0YWdzOiBbXSxcbiAgICAgIGluaXRIYXNodGFnczogW10sXG4gICAgICBzaG93Tm90ZXM6IGZhbHNlLFxuICAgIH07XG5cbiAgICB0aGlzLnNldFNob3dOb3RlcyA9IHRoaXMuc2V0U2hvd05vdGVzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmICh0aGlzLnByb3BzLnN0b3JlLnRlbXBOb3Rlc1swXSAhPSB1bmRlZmluZWQpIHtcbiAgICAgIGxldCBpc1RlbXAgPSBmYWxzZTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9wcy5zdG9yZS50ZW1wTm90ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHRoaXMucHJvcHMuc3RvcmUudGVtcE5vdGVzW2ldLnRpbWUgPT0gdGhpcy5wcm9wcy5maXJzdFRyYWRlLnRpbWVzdGFtcFxuICAgICAgICApIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6IHRoaXMucHJvcHMuc3RvcmUudGVtcE5vdGVzW2ldLm5vdGUgfSk7XG4gICAgICAgICAgaXNUZW1wID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaSA9PSB0aGlzLnByb3BzLnN0b3JlLnRlbXBOb3Rlcy5sZW5ndGggLSAxICYmIGlzVGVtcCA9PSBmYWxzZSkge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdmFsdWU6IHRoaXMucHJvcHMuZmlyc3RUcmFkZS5ub3RlcyxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5maXJzdFRyYWRlLm5vdGVzICE9IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgdmFsdWU6IHRoaXMucHJvcHMuZmlyc3RUcmFkZS5ub3RlcyxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxldCBzcGxpdFRhZ3MgPSB0aGlzLnByb3BzLmZpcnN0VHJhZGUuaGFzaHRhZ3Muc3BsaXQoXCIsXCIpO1xuICAgIHNwbGl0VGFncy5tYXAoKHRhZykgPT4ge1xuICAgICAgdGhpcy5zdGF0ZS5pbml0SGFzaHRhZ3MucHVzaCh0YWcpO1xuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKGNsaWVudCkge1xuICAgIHJldHVybiAoZXZlbnQpID0+IHtcbiAgICAgIC8vIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZSB9LCB0aGlzLmhhbmRsZVN1Ym1pdChjbGllbnQpKTtcbiAgICAgIHRoaXMucHJvcHMuc3RvcmUuYWRkVGVtcE5vdGUoXG4gICAgICAgIHRoaXMucHJvcHMuZmlyc3RUcmFkZS50aW1lc3RhbXAsXG4gICAgICAgIGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgKTtcbiAgICB9O1xuICB9XG5cbiAgcmVtb3ZlSGFzaHRhZyhjbGllbnQsIGhhc2h0YWcpIHtcbiAgICByZXR1cm4gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQgIT0gdW5kZWZpbmVkICYmIGV2ZW50LnByZXZlbnREZWZhdWx0ICE9IHVuZGVmaW5lZCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgICAgbGV0IHRpbWUgPSB0aGlzLnByb3BzLmZpcnN0VHJhZGUudGltZXN0YW1wO1xuICAgICAgY2xpZW50XG4gICAgICAgIC5tdXRhdGUoe1xuICAgICAgICAgIG11dGF0aW9uOiBncWxgXG4gICAgICAgICAgICBtdXRhdGlvbiByZW1vdmVIYXNodGFnKCR0aW1lOiBTdHJpbmchLCAkaGFzaHRhZzogU3RyaW5nISkge1xuICAgICAgICAgICAgICByZW1vdmVIYXNodGFnKHRpbWU6ICR0aW1lLCBoYXNodGFnOiAkaGFzaHRhZylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgLFxuICAgICAgICAgIHZhcmlhYmxlczogeyB0aW1lLCBoYXNodGFnIH0sXG4gICAgICAgICAgcmVmZXRjaFF1ZXJpZXM6IFtgZmV0Y2hUcmFkZUhpc3RvcnlgXSxcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHRoaXMucHJvcHMuc3RvcmUuY2hhbmdlSGFzVGVtcFRhZ3MoKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgfVxuXG4gIGhhbmRsZVN1Ym1pdChjbGllbnQpIHtcbiAgICByZXR1cm4gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQgIT0gdW5kZWZpbmVkICYmIGV2ZW50LnByZXZlbnREZWZhdWx0ICE9IHVuZGVmaW5lZCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coXCJIQVNIVEFHU1wiLCB0aGlzLnN0YXRlLmhhc2h0YWdzKTtcbiAgICAgIGdldE5vdGVzKHRoaXMuc3RhdGUudmFsdWUpLnRoZW4oYXN5bmMgKHJlcykgPT4ge1xuICAgICAgICBsZXQgbm90ZXMgPSByZXNbMF07XG4gICAgICAgIGxldCB0aW1lID0gdGhpcy5wcm9wcy5maXJzdFRyYWRlLnRpbWVzdGFtcDtcbiAgICAgICAgbGV0IHJlc28gPSBjbGllbnQubXV0YXRlKHtcbiAgICAgICAgICBtdXRhdGlvbjogZ3FsYFxuICAgICAgICAgICAgbXV0YXRpb24gYWRkTm90ZXMoJHRpbWU6IFN0cmluZyEsICRub3RlczogU3RyaW5nISkge1xuICAgICAgICAgICAgICBhZGROb3Rlcyh0aW1lOiAkdGltZSwgbm90ZXM6ICRub3RlcylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgLFxuICAgICAgICAgIHZhcmlhYmxlczogeyB0aW1lLCBub3RlcyB9LFxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gYXdhaXQgcmVzbztcbiAgICAgIH0pO1xuICAgIH07XG4gIH1cblxuICBzZXRTaG93Tm90ZXMoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuc2hvd05vdGVzID09IGZhbHNlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd05vdGVzOiB0cnVlIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd05vdGVzOiBmYWxzZSB9KTtcbiAgICB9XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8QXBvbGxvQ29uc3VtZXI+XG4gICAgICAgIHsoY2xpZW50KSA9PiAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxGdWxsUm93IG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdChjbGllbnQpfT5cbiAgICAgICAgICAgICAge3RoaXMuc3RhdGUuaW5pdEhhc2h0YWdzLm1hcCgodGFnKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRhZyAhPSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8U2luZ2xlSGFzaHRhZ0Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8U2luZ2xlSGFzaHRhZ1RleHQ+I3t0YWd9PC9TaW5nbGVIYXNodGFnVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICA8U2luZ2xlSGFzaHRhZ0RlbGV0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5yZW1vdmVIYXNodGFnKGNsaWVudCwgdGFnKX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGljb249e2ZhVGltZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJ4c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvU2luZ2xlSGFzaHRhZ0RlbGV0ZT5cbiAgICAgICAgICAgICAgICAgICAgPC9TaW5nbGVIYXNodGFnRGl2PlxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA8SGFzaHRhZ0Rpdj5cbiAgICAgICAgICAgICAgICA8QWRkSGFzaHRhZ1xuICAgICAgICAgICAgICAgICAgZmlyc3RUcmFkZT17dGhpcy5wcm9wcy5maXJzdFRyYWRlfVxuICAgICAgICAgICAgICAgICAgY2xpZW50PXtjbGllbnR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9IYXNodGFnRGl2PlxuICAgICAgICAgICAgPC9GdWxsUm93PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9BcG9sbG9Db25zdW1lcj5cbiAgICApO1xuICB9XG59XG4vLyBjb25zdCBOb3Rlc0lucHV0ID0gc3R5bGVkLnRleHRhcmVhYFxuLy8gICB3aWR0aDogMTAwJTtcbi8vICAgcGFkZGluZzogMTJweCAyMHB4O1xuLy8gICBtYXJnaW46IDhweCAwO1xuLy8gICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuLy8gICBiYWNrZ3JvdW5kOiAjZjhmOGZmO1xuLy8gICBib3JkZXI6IG5vbmU7XG4vLyBgO1xuXG5AaW5qZWN0KFtcInN0b3JlXCJdKVxuQG9ic2VydmVyXG5jbGFzcyBBZGRIYXNodGFnIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgY2xpY2tlZDogZmFsc2UgfTtcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2xpY2tlZCA9IHRoaXMuY2xpY2tlZC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNsaWVudDogdGhpcy5wcm9wcy5jbGllbnQgfSk7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcbiAgICAvLyBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiBldmVudC50YXJnZXQudmFsdWUgfSk7XG4gIH1cblxuICBhc3luYyBoYW5kbGVTdWJtaXQoZXZlbnQpIHtcbiAgICAvLyByZXR1cm4gZXZlbnQgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS52YWx1ZSk7XG4gICAgZ2V0SGFzaHRhZ3ModGhpcy5zdGF0ZS52YWx1ZSlcbiAgICAgIC50aGVuKGFzeW5jIChyZXMpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJDTElDS0VEXCIpO1xuICAgICAgICBsZXQgY2xpZW50ID0gdGhpcy5zdGF0ZS5jbGllbnQ7XG4gICAgICAgIGxldCBoYXNodGFnID0gcmVzO1xuICAgICAgICBjb25zb2xlLmxvZyhoYXNodGFnLCBcIkhBU0hUQUdcIik7XG4gICAgICAgIGxldCB0aW1lID0gdGhpcy5wcm9wcy5maXJzdFRyYWRlLnRpbWVzdGFtcDtcbiAgICAgICAgbGV0IHJlc28gPSBjbGllbnQubXV0YXRlKHtcbiAgICAgICAgICBtdXRhdGlvbjogZ3FsYFxuICAgICAgICAgICAgbXV0YXRpb24gYWRkSGFzaHRhZygkdGltZTogU3RyaW5nISwgJGhhc2h0YWc6IFN0cmluZyEpIHtcbiAgICAgICAgICAgICAgYWRkSGFzaHRhZyh0aW1lOiAkdGltZSwgaGFzaHRhZzogJGhhc2h0YWcpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgYCxcbiAgICAgICAgICB2YXJpYWJsZXM6IHsgdGltZSwgaGFzaHRhZyB9LFxuICAgICAgICAgIHJlZmV0Y2hRdWVyaWVzOiBbYGZldGNoVHJhZGVIaXN0b3J5YF0sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBhd2FpdCByZXNvO1xuICAgICAgfSlcbiAgICAgIC50aGVuKChyZXNvKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogXCJcIiB9KTtcbiAgICAgICAgdGhpcy5wcm9wcy5zdG9yZS5jaGFuZ2VIYXNUZW1wVGFncygpO1xuICAgICAgfSk7XG4gICAgLy8gfTtcbiAgfVxuXG4gIGNsaWNrZWQoKSB7XG4gICAgdGhpcy5zdGF0ZS5jbGlja2VkXG4gICAgICA/IHRoaXMuc2V0U3RhdGUoeyBjbGlja2VkOiBmYWxzZSB9KVxuICAgICAgOiB0aGlzLnNldFN0YXRlKHsgY2xpY2tlZDogdHJ1ZSB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPFBvcHVwXG4gICAgICAgICAgb25DbGljaz17dGhpcy5jbGlja2VkfVxuICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcInJvd1wiIH19XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2PkFkZCBIYXNodGFnPC9kaXY+XG4gICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxuICAgICAgICAgICAgaWNvbj17ZmFQbHVzfVxuICAgICAgICAgICAgc3R5bGU9e3sgdHJhbnNpdGlvbjogXCJub25lXCIsIG1hcmdpbjogXCJhdXRvIDRweFwiIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Qb3B1cD5cbiAgICAgICAge3RoaXMuc3RhdGUuY2xpY2tlZCA/IChcbiAgICAgICAgICA8UG9wdXBUb3A+XG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8QWRkSGFzaFN1Ym1pdCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJBZGRcIiAvPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDwvUG9wdXBUb3A+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuY29uc3QgQWRkSGFzaFN1Ym1pdCA9IHN0eWxlZC5pbnB1dGBcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmc6IDJweDtcbmA7XG5jb25zdCBQb3B1cCA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQ6ICMwMDA7XG4gIHBhZGRpbmc6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuYDtcblxuY29uc3QgUG9wdXBUb3AgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6ICMwMDA7XG4gIHotaW5kZXg6IDE7XG4gIG1hcmdpbjogNXB4O1xuICBwYWRkaW5nOiAycHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbmA7XG4vLyBiYWNrZ3JvdW5kOiAjNmM3NTdkO1xuLy8gYmFja2dyb3VuZDogI2I5YmRjMTtcbmNvbnN0IFNpbmdsZUhhc2h0YWdEaXYgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kOiAjZjhmOGZmO1xuICBtYXJnaW46IDAgOHB4O1xuICBjb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDVweCA3cHg7XG5cbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuYDtcblxuY29uc3QgU2hvd05vdGVzRGl2ID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgbWFyZ2luOiAyMHB4IDhweDtcblxuICBjb2xvcjogIzAwMDtcbiAgcGFkZGluZzogMTBweDtcbiAgcGFkZGluZy10b3A6IDhweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBiYWNrZ3JvdW5kOiAjZjhmOGZmO1xuICA6aG92ZXIge1xuICAgIHRyYW5zaXRpb246IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5gO1xuXG5jb25zdCBTaG93Tm90ZXNJbm5lciA9IHN0eWxlZC5kaXZgXG4gICR7d2lkZUZvbnR9XG4gIGZvbnQtc2l6ZToxM3B4O1xuICB0cmFuc2l0aW9uOiBub25lO1xuICBtYXJnaW46IGF1dG87XG5gO1xuXG5jb25zdCBTaW5nbGVIYXNodGFnVGV4dCA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbjogYXV0bztcbiAgJHt3aWRlRm9udH1cbmA7XG5jb25zdCBTaW5nbGVIYXNodGFnRGVsZXRlID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tbGVmdDogNnB4O1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gIDpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5gO1xuXG5jb25zdCBIYXNodGFnRGl2ID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luOiBhdXRvIDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgY29sb3I6IHdoaXRlO1xuYDtcblxuY29uc3QgRnVsbFJvdyA9IHN0eWxlZC5mb3JtYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuYDtcblxuY29uc3QgTm90ZXNTdWJtaXQgPSBzdHlsZWQuaW5wdXRgXG4gIG1hcmdpbjogOXB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjMjEyNTI4O1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbmA7XG5cbmNvbnN0IE5vdGVzSW5wdXQgPSBzdHlsZWQudGV4dGFyZWFgXG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gIG1hcmdpbjogMHB4IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJhY2tncm91bmQ6ICNmOGY4ZmY7XG4gIGJvcmRlcjogbm9uZTtcbmA7XG4iLCJpbXBvcnQgeyBnZXROb3RlcywgZ2V0SGFzaHRhZ3MgfSBmcm9tIFwiLi9ub3Rlc0hlbHBlcnNcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBBcG9sbG9Db25zdW1lciB9IGZyb20gXCJyZWFjdC1hcG9sbG9cIjtcbmltcG9ydCB7IG9ic2VydmVyIH0gZnJvbSBcIm1vYngtcmVhY3QtbGl0ZVwiO1xuaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSBcIm1vYngtcmVhY3RcIjtcbmltcG9ydCBUZXh0YXJlYUF1dG9zaXplIGZyb20gXCJyZWFjdC1hdXRvc2l6ZS10ZXh0YXJlYVwiO1xuaW1wb3J0IGdxbCBmcm9tIFwiZ3JhcGhxbC10YWdcIjtcblxuY29uc3QgTXlUZXh0QXJlYSA9IGluamVjdChcInN0b3JlXCIpKFxuICBvYnNlcnZlcigoeyBmaXJzdFRyYWRlLCBzdG9yZSwgY2xpZW50IH0pID0+IHtcbiAgICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKCk7XG4gICAgY29uc3QgW2xpZ2h0LCBzZXRMaWdodF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW215Q2xpZW50LCBzZXRDbGllbnRdID0gdXNlU3RhdGUoY2xpZW50KTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgbGV0IHZhbDtcbiAgICAgIGlmIChmaXJzdFRyYWRlLm5vdGVzID09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgc2V0VmFsdWUoXCJBZGQgbm90ZXMgaGVyZS4uLlwiKTtcbiAgICAgICAgc2V0TGlnaHQodHJ1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRWYWx1ZShmaXJzdFRyYWRlLm5vdGVzKTtcbiAgICAgIH1cbiAgICAgIGxldCBub3RUZW1wID0gdHJ1ZTtcbiAgICAgIGlmIChzdG9yZS50ZW1wTm90ZXNbMF0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0b3JlLnRlbXBOb3Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChzdG9yZS50ZW1wTm90ZXNbaV0udGltZSA9PSBmaXJzdFRyYWRlLnRpbWVzdGFtcC50b1N0cmluZygpKSB7XG4gICAgICAgICAgICBzZXRWYWx1ZShzdG9yZS50ZW1wTm90ZXNbaV0ubm90ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgaWYgKHZhbHVlICE9IFwiQWRkIG5vdGVzIGhlcmUuLi5cIikge1xuICAgICAgICBzZXRMaWdodChmYWxzZSk7XG4gICAgICAgIGdldE5vdGVzKHZhbHVlKS50aGVuKGFzeW5jIChyZXMpID0+IHtcbiAgICAgICAgICBsZXQgbm90ZXMgPSByZXNbMF07XG4gICAgICAgICAgbGV0IHRpbWUgPSBmaXJzdFRyYWRlLnRpbWVzdGFtcDtcbiAgICAgICAgICBsZXQgcmVzbyA9IG15Q2xpZW50Lm11dGF0ZSh7XG4gICAgICAgICAgICBtdXRhdGlvbjogZ3FsYFxuICAgICAgICAgICAgICBtdXRhdGlvbiBhZGROb3RlcygkdGltZTogU3RyaW5nISwgJG5vdGVzOiBTdHJpbmchKSB7XG4gICAgICAgICAgICAgICAgYWRkTm90ZXModGltZTogJHRpbWUsIG5vdGVzOiAkbm90ZXMpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGAsXG4gICAgICAgICAgICB2YXJpYWJsZXM6IHsgdGltZSwgbm90ZXMgfSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gYXdhaXQgcmVzbztcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwgW3ZhbHVlXSk7XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoKSB7XG4gICAgICByZXR1cm4gKGV2ZW50KSA9PiB7XG4gICAgICAgIHNldExpZ2h0KGZhbHNlKTtcbiAgICAgICAgc3RvcmUuYWRkVGVtcE5vdGUoZmlyc3RUcmFkZS50aW1lc3RhbXAsIGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICAgIHNldFZhbHVlKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmIChsaWdodCA9PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFRleHRhcmVhQXV0b3NpemVcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgcGFkZGluZzogXCIxMnB4IDIwcHhcIixcbiAgICAgICAgICAgIG1hcmdpblRvcDogXCI4cHhcIixcbiAgICAgICAgICAgIGJveFNpemluZzogXCJib3JkZXItYm94XCIsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBcIiNmOGY4ZmZcIixcbiAgICAgICAgICAgIGJvcmRlcjogXCJub25lXCIsXG4gICAgICAgICAgICBvdXRsaW5lOiBcIm5vbmVcIixcbiAgICAgICAgICAgIGZvbnRTaXplOiBcIjE1cHhcIixcbiAgICAgICAgICB9fVxuICAgICAgICAgIHJvd3M9ezV9XG4gICAgICAgICAgbWF4Um93cz17MjV9XG4gICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoKX1cbiAgICAgICAgLz5cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUZXh0YXJlYUF1dG9zaXplXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgIHBhZGRpbmc6IFwiMTJweCAyMHB4XCIsXG4gICAgICAgICAgICBtYXJnaW5Ub3A6IFwiOHB4XCIsXG4gICAgICAgICAgICBib3hTaXppbmc6IFwiYm9yZGVyLWJveFwiLFxuICAgICAgICAgICAgYmFja2dyb3VuZDogXCIjZjhmOGZmXCIsXG4gICAgICAgICAgICBib3JkZXI6IFwibm9uZVwiLFxuICAgICAgICAgICAgb3V0bGluZTogXCJub25lXCIsXG4gICAgICAgICAgICBmb250U2l6ZTogXCIxNXB4XCIsXG4gICAgICAgICAgICBjb2xvcjogXCIjYzZjNmM2XCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgICByb3dzPXs1fVxuICAgICAgICAgIG1heFJvd3M9ezI1fVxuICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKCl9XG4gICAgICAgIC8+XG4gICAgICApO1xuICAgIH1cbiAgfSlcbik7XG5cbmV4cG9ydCBkZWZhdWx0IE15VGV4dEFyZWE7XG4iLCJleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Tm90ZXMoaW5wdXRWYWwpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgIGxldCBub3RlcztcbiAgICBpZiAoaW5wdXRWYWwgIT0gbnVsbCkge1xuICAgICAgbm90ZXMgPSBpbnB1dFZhbDtcbiAgICB9IGVsc2Uge1xuICAgICAgbm90ZXMgPSBcInVuZGVmaW5lZFwiO1xuICAgIH1cbiAgICAvLyBsZXQgaGFzaHRhZ3MgPSBcIlwiO1xuICAgIC8vIGlmIChpbnB1dEhhc2h0YWdzICE9IG51bGwpIHtcbiAgICAvLyAgIGZvciAobGV0IGsgPSAwOyBrIDwgaW5wdXRIYXNodGFncy5sZW5ndGg7IGsrKykge1xuICAgIC8vICAgICBoYXNodGFncyArPSBpbnB1dEhhc2h0YWdzW2tdICsgXCIgXCI7XG4gICAgLy8gICAgIGlmIChrID09IGlucHV0SGFzaHRhZ3MubGVuZ3RoIC0gMSkge1xuICAgIC8vICAgICAgIGxldCBlbmRBcnIgPSBbXTtcbiAgICAvLyAgICAgICBlbmRBcnIucHVzaChub3Rlcyk7XG4gICAgLy8gICAgICAgZW5kQXJyLnB1c2goaGFzaHRhZ3MpO1xuICAgIC8vICAgICAgIHJlc29sdmUoZW5kQXJyKTtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgfVxuICAgIC8vIH0gZWxzZSB7XG4gICAgbGV0IGVuZEFyciA9IFtdO1xuICAgIGVuZEFyci5wdXNoKG5vdGVzKTtcbiAgICAvLyBlbmRBcnIucHVzaChoYXNodGFncyk7XG4gICAgcmVzb2x2ZShlbmRBcnIpO1xuICAgIC8vIH1cbiAgfSk7XG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0SGFzaHRhZ3MoaW5wdXRIYXNodGFncykge1xuICBjb25zb2xlLmxvZyhpbnB1dEhhc2h0YWdzLCBcIklOUCBIQVNIXCIpO1xuICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgbGV0IGhhc2h0YWdzO1xuICAgIGlmIChpbnB1dEhhc2h0YWdzICE9IG51bGwgJiYgaW5wdXRIYXNodGFncyAhPSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc2h0YWdzID0gaW5wdXRIYXNodGFncztcbiAgICB9IGVsc2Uge1xuICAgICAgaGFzaHRhZ3MgPSBcInVuZGVmaW5lZFwiO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhoYXNodGFncywgXCJFTkQgSEFTSFNcIik7XG4gICAgcmVzb2x2ZShoYXNodGFncyk7XG4gIH0pO1xufVxuIiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGluamVjdCB9IGZyb20gXCJtb2J4LXJlYWN0XCI7XG5pbXBvcnQgeyBvYnNlcnZlciB9IGZyb20gXCJtb2J4LXJlYWN0LWxpdGVcIjtcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcbmltcG9ydCB7IGZhQ2FyZXRMZWZ0IH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuaW1wb3J0IHsgd2lkZUZvbnQgfSBmcm9tIFwiLi4vc2hhcmVkL2hlbHBlcnNcIjtcblxuY29uc3QgVGFicyA9IGluamVjdChcInN0b3JlXCIpKFxuICBvYnNlcnZlcigoeyBzdG9yZSB9KSA9PiB7XG4gICAgY29uc3QgW2FjdGl2ZVRhYiwgc2V0QWN0aXZlVGFiXSA9IHVzZVN0YXRlKFwibm90ZXNcIik7XG5cbiAgICBmdW5jdGlvbiBzZXRBY3RpdmUodGFiKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkNMSUNLRURcIik7XG4gICAgICBpZiAodGFiICE9PSBhY3RpdmVUYWIpIHtcbiAgICAgICAgc2V0QWN0aXZlVGFiKHRhYik7XG4gICAgICAgIGNvbnNvbGUubG9nKFwic2V0dGluZyB0YWJcIiwgdGFiKTtcbiAgICAgICAgaWYgKHRhYiA9PSBcIm5vdGVzXCIpIHtcbiAgICAgICAgICBzdG9yZS5pc1NpbmdsZU5vdGVzID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3RvcmUuaXNTaW5nbGVOb3RlcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBiYWNrd2FyZHMoKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkJBQ0sgQ0xJQ0tFRFwiKTtcbiAgICAgIHN0b3JlLmhhc1NpbmdsZVRyYWRlID0gZmFsc2U7XG4gICAgICBzdG9yZS5pc1NpbmdsZU5vdGVzID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKGFjdGl2ZVRhYiA9PSBcIm5vdGVzXCIpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxXcmFwVGFicz5cbiAgICAgICAgICA8U2luZ2xlVGFiIGlzQWN0aXZlPXtmYWxzZX0gb25DbGljaz17KCkgPT4gYmFja3dhcmRzKCl9PlxuICAgICAgICAgICAgPFNpbmdsZVRhYklubmVyPlxuICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXG4gICAgICAgICAgICAgICAgaWNvbj17ZmFDYXJldExlZnR9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiN3B4XCIsXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxMnB4XCIsXG4gICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiMnB4XCIsXG4gICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiYXV0b1wiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIEFsbCBUcmFkZXNcbiAgICAgICAgICAgIDwvU2luZ2xlVGFiSW5uZXI+XG4gICAgICAgICAgPC9TaW5nbGVUYWI+XG4gICAgICAgICAgPFNpbmdsZVRhYiBpc0FjdGl2ZT17dHJ1ZX0gb25DbGljaz17KCkgPT4gc2V0QWN0aXZlKFwibm90ZXNcIil9PlxuICAgICAgICAgICAgPFNpbmdsZVRhYklubmVyPk5vdGVzPC9TaW5nbGVUYWJJbm5lcj5cbiAgICAgICAgICA8L1NpbmdsZVRhYj5cbiAgICAgICAgICA8U2luZ2xlVGFiIGlzQWN0aXZlPXtmYWxzZX0gb25DbGljaz17KCkgPT4gc2V0QWN0aXZlKFwiZXhlY19oaXN0XCIpfT5cbiAgICAgICAgICAgIDxTaW5nbGVUYWJJbm5lcj5FeGVjdXRpb24gSGlzdG9yeTwvU2luZ2xlVGFiSW5uZXI+XG4gICAgICAgICAgPC9TaW5nbGVUYWI+XG4gICAgICAgIDwvV3JhcFRhYnM+XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8V3JhcFRhYnM+XG4gICAgICAgICAgPFNpbmdsZVRhYiBpc0FjdGl2ZT17ZmFsc2V9IG9uQ2xpY2s9eygpID0+IGJhY2t3YXJkcygpfT5cbiAgICAgICAgICAgIDxTaW5nbGVUYWJJbm5lcj5cbiAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxuICAgICAgICAgICAgICAgIGljb249e2ZhQ2FyZXRMZWZ0fVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIjdweFwiLFxuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTJweFwiLFxuICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjJweFwiLFxuICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcImF1dG9cIixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICBBbGwgVHJhZGVzXG4gICAgICAgICAgICA8L1NpbmdsZVRhYklubmVyPlxuICAgICAgICAgIDwvU2luZ2xlVGFiPlxuICAgICAgICAgIDxTaW5nbGVUYWIgaXNBY3RpdmU9e2ZhbHNlfSBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmUoXCJub3Rlc1wiKX0+XG4gICAgICAgICAgICA8U2luZ2xlVGFiSW5uZXI+Tm90ZXM8L1NpbmdsZVRhYklubmVyPlxuICAgICAgICAgIDwvU2luZ2xlVGFiPlxuICAgICAgICAgIDxTaW5nbGVUYWIgaXNBY3RpdmU9e3RydWV9IG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZShcImV4ZWNfaGlzdFwiKX0+XG4gICAgICAgICAgICA8U2luZ2xlVGFiSW5uZXI+RXhlY3V0aW9uIEhpc3Rvcnk8L1NpbmdsZVRhYklubmVyPlxuICAgICAgICAgIDwvU2luZ2xlVGFiPlxuICAgICAgICA8L1dyYXBUYWJzPlxuICAgICAgKTtcbiAgICB9XG4gIH0pXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBUYWJzO1xuXG5jb25zdCBTaW5nbGVUYWJJbm5lciA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbjogYXV0bztcbmA7XG5cbmNvbnN0IFNpbmdsZVRhYiA9IHN0eWxlZC5kaXZgXG4gIGNvbG9yOiAkeyhwcm9wcykgPT4gKHByb3BzLmlzQWN0aXZlID8gXCIjZmZmXCIgOiBcIiMwMDBcIil9O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwcm9wcykgPT4gKHByb3BzLmlzQWN0aXZlID8gXCIjMjEyNTI3XCIgOiBcIiNmZmZcIil9O1xuXG4gIG1hcmdpbjogYXV0byAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbmA7XG5cbmNvbnN0IFdyYXBUYWJzID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZm9udC1zaXplOiAxNXB4O1xuYDtcbmNvbnN0IFdob2xlR3JpZCA9IHN0eWxlZC5kaXZgXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMmYyZjI7XG5gO1xuXG5jb25zdCBUb3BCYXJQYXJlbnQgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1hcmdpbi1ib3R0b206IDE0cHg7XG5gO1xuXG5jb25zdCBUb3BCYXJDaGlsZEJpZyA9IHN0eWxlZC5kaXZgXG4gIGZsZXg6IDEgMSA0NSU7IC8qZ3JvdyB8IHNocmluayB8IGJhc2lzICovXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG5gO1xuY29uc3QgVG9wQmFyQ2hpbGRTbWFsbCA9IHN0eWxlZC5kaXZgXG4gIGZsZXg6IDEgMSAxMCU7IC8qZ3JvdyB8IHNocmluayB8IGJhc2lzICovXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG5gO1xuXG5jb25zdCBUb3BIYXNodGFnSW5kaXZpZHVhbCA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQ6ICNmOGY4ZmY7XG4gIGNvbG9yOiAjMDAwO1xuICBwYWRkaW5nOiA4cHg7XG4gIG1hcmdpbjogMCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gICR7d2lkZUZvbnR9XG5cbiAgOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgbWFyZ2luLWxlZnQ6IDA7XG5gO1xuXG5jb25zdCBUb3BIYXNodGFnSW5kaXZpZHVhbEFjdGl2ZSA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQ6ICMyMTI1Mjg7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiA4cHg7XG4gIG1hcmdpbjogMCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gICR7d2lkZUZvbnR9XG4gIG1hcmdpbjowIGF1dG87XG4gIDpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIG1hcmdpbi1sZWZ0OiAwO1xuYDtcbmNvbnN0IFRvcEhhc2h0YWdJbmRpdmlkdWFsQWN0aXZlUmlnaHQgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kOiAjMjEyNTI4O1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogOHB4O1xuICBtYXJnaW46IDAgMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAke3dpZGVGb250fVxuICBtYXJnaW46MCBhdXRvO1xuICA6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICBtYXJnaW4tcmlnaHQ6IDA7XG5gO1xuXG5jb25zdCBUb3BIYXNodGFnSW5kaXZpZHVhbEFjdGl2ZVBubCA9IHN0eWxlZC5kaXZgXG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gICR7d2lkZUZvbnR9XG4gIDpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIG1hcmdpbjogYXV0bztcbmA7XG5cbmNvbnN0IENoYXJ0V3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwYWRkaW5nOiA1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICBtYXJnaW46IDAgNXZ3O1xuICB9XG5gO1xuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuYDtcbiIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50LCBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIExpbmVDaGFydCxcbiAgQXJlYUNoYXJ0LFxuICBBcmVhLFxuICBMaW5lLFxuICBYQXhpcyxcbiAgWUF4aXMsXG4gIENhcnRlc2lhbkdyaWQsXG4gIFRvb2x0aXAsXG4gIExlZ2VuZCxcbn0gZnJvbSBcInJlY2hhcnRzXCI7XG5pbXBvcnQgc3R5bGVkLCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IHdpZGVGb250LCBzbWFsbEZvbnQgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2hlbHBlcnNcIjtcbmltcG9ydCB0aGVtZSBmcm9tIFwiLi4vLi4vdGhlbWVcIjtcbmltcG9ydCB7XG4gIGZvcm1hdERhdGVNb250aE9ubHksXG4gIGNhbGNDb21taXNzaW9uLFxuICBmb3JtYXREYXRlU2hvcnQsXG4gIGZvcm1hdERhdGVTaG9ydFdpdGhIb3VyLFxufSBmcm9tIFwiLi4vLi4vSGVscGVycy9GdW5jdGlvbnMuanNcIjtcbmltcG9ydCB7IGluamVjdCwgb2JzZXJ2ZXIgfSBmcm9tIFwibW9ieC1yZWFjdFwiO1xuaW1wb3J0IE1haW5DaGFydCBmcm9tIFwiLi4vQ2hhcnQvaW5kZXhcIjtcbmltcG9ydCBOb3RlcyBmcm9tIFwiLi4vTm90ZXMvTm90ZXNcIjtcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcbmltcG9ydCB7IGZhQ2FyZXREb3duLCBmYUNhcmV0VXAgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5pbXBvcnQgZXF1YWwgZnJvbSBcImZhc3QtZGVlcC1lcXVhbFwiO1xuaW1wb3J0IFRleHRhcmVhQXV0b3NpemUgZnJvbSBcInJlYWN0LWF1dG9zaXplLXRleHRhcmVhXCI7XG5pbXBvcnQgTXlUZXh0QXJlYSBmcm9tIFwiLi4vTm90ZXMvVGV4dEFyZWFcIjtcbmltcG9ydCB7IHdoZW4sIHJlYWN0aW9uIH0gZnJvbSBcIm1vYnhcIjtcbmltcG9ydCB7IGNhbGNUcmFkZXMgfSBmcm9tIFwiLi9jYWxjVHJhZGVzXCI7XG5pbXBvcnQgeyBBcG9sbG9Db25zdW1lciB9IGZyb20gXCJyZWFjdC1hcG9sbG9cIjtcblxuQGluamVjdChbXCJzdG9yZVwiXSlcbkBvYnNlcnZlclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhhbXBsZSBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgd2lkdGg6IDAsXG4gICAgICBoZWlnaHQ6IDAsXG4gICAgICBkYXRhOiBbXSxcbiAgICAgIGZ1bGxUcmFkZXM6IFtdLFxuICAgICAgaGFzU2luZ2xlVHJhZGU6IGZhbHNlLFxuICAgIH07XG4gICAgdGhpcy51cGRhdGVXaW5kb3dEaW1lbnNpb25zID0gdGhpcy51cGRhdGVXaW5kb3dEaW1lbnNpb25zLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jcmVhdGVGdWxsVHJhZGVzID0gdGhpcy5jcmVhdGVGdWxsVHJhZGVzLmJpbmQodGhpcyk7XG4gIH1cblxuICBjcmVhdGVGdWxsVHJhZGVzKGRhdGEpIHtcbiAgICBsZXQgZnVsbFJheSA9IFtdO1xuICAgIGxldCBmdWxsVHJhZGVzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmZldGNoVHJhZGVIaXN0b3J5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBmdWxsUmF5LnVuc2hpZnQoZGF0YS5mZXRjaFRyYWRlSGlzdG9yeVtpXSk7XG4gICAgICBpZiAoaSA9PSBkYXRhLmZldGNoVHJhZGVIaXN0b3J5Lmxlbmd0aCAtIDEpIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBmdWxsUmF5Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgbGV0IGRhdCA9IGZ1bGxSYXlbal07XG4gICAgICAgICAgLy8gZGF0LnRpbWVzdGFtcCA9IGZvcm1hdERhdGVGb3JSb3coZGF0LnRpbWVzdGFtcCk7XG4gICAgICAgICAgLy8gZnVsbFJheVtqXSA9IGRhdDtcbiAgICAgICAgICBpZiAoZGF0LnRyZFN0YXJ0ID09IHRydWUpIHtcbiAgICAgICAgICAgIGxldCBzbGljZWQgPSBmdWxsUmF5LnNsaWNlKGosIGZ1bGxSYXkubGVuZ3RoKTtcbiAgICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgc2xpY2VkLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICAgIGlmIChzbGljZWRba10udHJkRW5kID09IHRydWUgJiYgayA+IDApIHtcbiAgICAgICAgICAgICAgICBsZXQgbmV3c2xpY2VkID0gc2xpY2VkLnNsaWNlKDAsIGsgKyAxKTtcbiAgICAgICAgICAgICAgICBmdWxsVHJhZGVzLnVuc2hpZnQobmV3c2xpY2VkKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaiA9PSBmdWxsUmF5Lmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIGxldCByZXR1cm5WYWwgPSB7fTtcbiAgICAgICAgICAgIHJldHVyblZhbFtcImluaXREYXRhXCJdID0gdGhpcy5wcm9wcy5pbml0RGF0YTtcbiAgICAgICAgICAgIHJldHVyblZhbFtcImRhdGFcIl0gPSBmdWxsUmF5O1xuICAgICAgICAgICAgcmV0dXJuVmFsW1wiZnVsbFRyYWRlc1wiXSA9IGZ1bGxUcmFkZXM7XG4gICAgICAgICAgICByZXR1cm4gcmV0dXJuVmFsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZpbHRlcigpIHt9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIGlmICghZXF1YWwodGhpcy5wcm9wcy5maWx0ZXJlZERhdGEsIHByZXZQcm9wcy5maWx0ZXJlZERhdGEpKSB7XG4gICAgICAvLyB0aGlzLnVwZGF0ZVRyYWRlcyh0aGlzLnByb3BzLmRhdGEpO1xuICAgICAgbGV0IG5ld0Z1bGxUcmFkZXMgPSBbXTtcbiAgICAgIGxldCBmaXJzdEZ1bGxUcmFkZXMgPSB0aGlzLmNyZWF0ZUZ1bGxUcmFkZXModGhpcy5wcm9wcy5kYXRhKTtcbiAgICAgIGZpcnN0RnVsbFRyYWRlcyA9IGZpcnN0RnVsbFRyYWRlcy5mdWxsVHJhZGVzO1xuICAgICAgaWYgKHRoaXMucHJvcHMuZmlsdGVyZWREYXRhID09IG51bGwpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZ1bGxUcmFkZXM6IGZpcnN0RnVsbFRyYWRlcyB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlyc3RGdWxsVHJhZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLnByb3BzLmZpbHRlcmVkRGF0YS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgaWYgKGZpcnN0RnVsbFRyYWRlc1tpXVswXS5pZCA9PSB0aGlzLnByb3BzLmZpbHRlcmVkRGF0YVtqXS5pZCkge1xuICAgICAgICAgICAgICBuZXdGdWxsVHJhZGVzLnVuc2hpZnQoZmlyc3RGdWxsVHJhZGVzW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGkgPT0gZmlyc3RGdWxsVHJhZGVzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBmdWxsVHJhZGVzOiBuZXdGdWxsVHJhZGVzIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGxldCByZXR1cm5lZCA9IHRoaXMuY3JlYXRlRnVsbFRyYWRlcyh0aGlzLnByb3BzLmRhdGEpO1xuICAgIGlmIChyZXR1cm5lZCAhPSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBkYXRhOiByZXR1cm5lZC5mdWxsUmF5LFxuICAgICAgICBmdWxsVHJhZGVzOiByZXR1cm5lZC5mdWxsVHJhZGVzLFxuICAgICAgICBpbml0RGF0YTogcmV0dXJuZWQuaW5pdERhdGEsXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGRhdGE6IHRoaXMucHJvcHMuaW5pdERhdGEsXG4gICAgICAgIGluaXREYXRhOiB0aGlzLnByb3BzLmluaXREYXRhLFxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMudXBkYXRlV2luZG93RGltZW5zaW9ucygpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMudXBkYXRlV2luZG93RGltZW5zaW9ucyk7XG5cbiAgICB0aGlzLnNpbmdsZU5vdGVzUmVhY3Rpb24gPSByZWFjdGlvbihcbiAgICAgICgpID0+IHRoaXMucHJvcHMuc3RvcmUuaXNTaW5nbGVOb3RlcyxcbiAgICAgIChub3RpZmljYXRpb25zLCByZWFjdGlvbikgPT4ge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5zdG9yZS5pc1NpbmdsZU5vdGVzID09IGZhbHNlKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzU2luZ2xlTm90ZXM6IGZhbHNlIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc1NpbmdsZU5vdGVzOiB0cnVlIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgKTtcblxuICAgIHRoaXMuc2luZ2xlVHJhZGVSZWFjdGlvbiA9IHJlYWN0aW9uKFxuICAgICAgKCkgPT4gdGhpcy5wcm9wcy5zdG9yZS5oYXNTaW5nbGVUcmFkZSxcbiAgICAgIChub3RpZmljYXRpb25zLCByZWFjdGlvbikgPT4ge1xuICAgICAgICB0aGlzLnByb3BzLnN0b3JlLnBubCA9IDA7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLnN0b3JlLmhhc1NpbmdsZVRyYWRlID09IGZhbHNlKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGhhc1NpbmdsZVRyYWRlOiBmYWxzZSB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaGFzU2luZ2xlVHJhZGU6IHRydWUgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy51cGRhdGVXaW5kb3dEaW1lbnNpb25zKTtcbiAgfVxuXG4gIHVwZGF0ZVdpbmRvd0RpbWVuc2lvbnMoKSB7XG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgNzY4KSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxuICAgICAgICBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCxcbiAgICAgICAgY2hhcnRXaWR0aDogd2luZG93LmlubmVyV2lkdGggKiAwLjksXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgMTAyNCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICAgICAgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsXG4gICAgICAgIGNoYXJ0V2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoICogMC45IC0gMTc5LFxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+PSAxMDI0KSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxuICAgICAgICBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCxcbiAgICAgICAgY2hhcnRXaWR0aDogd2luZG93LmlubmVyV2lkdGggKiAwLjggLSAxNzksXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuaGFzU2luZ2xlVHJhZGUgPT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZShmYWxzZSl9PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWluV2lkdGg6IHRoaXMuc3RhdGUuY2hhcnRXaWR0aCB9fT5cbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLmZ1bGxUcmFkZXMubWFwKChzbGljLCBpKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPE1ha2VDb2xcbiAgICAgICAgICAgICAgICAgIGNsaWNrZWQ9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgc2xpYz17c2xpY31cbiAgICAgICAgICAgICAgICAgIG9uZW1pbj17dGhpcy5wcm9wcy5kYXRhLmZldGNoT25lTWludXRlQ2FuZGxlSGlzdG9yeX1cbiAgICAgICAgICAgICAgICAgIGZpdmVtaW49e3RoaXMucHJvcHMuZGF0YS5mZXRjaEZpdmVNaW51dGVDYW5kbGVIaXN0b3J5fVxuICAgICAgICAgICAgICAgICAgb25laG91cj17dGhpcy5wcm9wcy5kYXRhLmZldGNoT25lSG91ckNhbmRsZUhpc3Rvcnl9XG4gICAgICAgICAgICAgICAgICBvbmVkYXk9e3RoaXMucHJvcHMuZGF0YS5mZXRjaE9uZURheUNhbmRsZUhpc3Rvcnl9XG4gICAgICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWUoZmFsc2UpfT5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1pbldpZHRoOiB0aGlzLnN0YXRlLmNoYXJ0V2lkdGggfX0+XG4gICAgICAgICAgICA8TWFrZUNvbFxuICAgICAgICAgICAgICBjbGlja2VkPXt0cnVlfVxuICAgICAgICAgICAgICBzbGljPXt0aGlzLnByb3BzLnN0b3JlLnNpbmdsZVRyYWRlfVxuICAgICAgICAgICAgICBvbmVtaW49e3RoaXMucHJvcHMuZGF0YS5mZXRjaE9uZU1pbnV0ZUNhbmRsZUhpc3Rvcnl9XG4gICAgICAgICAgICAgIGZpdmVtaW49e3RoaXMucHJvcHMuZGF0YS5mZXRjaEZpdmVNaW51dGVDYW5kbGVIaXN0b3J5fVxuICAgICAgICAgICAgICBvbmVob3VyPXt0aGlzLnByb3BzLmRhdGEuZmV0Y2hPbmVIb3VyQ2FuZGxlSGlzdG9yeX1cbiAgICAgICAgICAgICAgb25lZGF5PXt0aGlzLnByb3BzLmRhdGEuZmV0Y2hPbmVEYXlDYW5kbGVIaXN0b3J5fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cblxuQGluamVjdChcInN0b3JlXCIpXG5Ab2JzZXJ2ZXJcbmNsYXNzIE1ha2VDb2wgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZGF0YTogW10sXG4gICAgICBwbmw6IDAsXG4gICAgICBhdmdFbnRyeVByaWNlOiAwLFxuICAgICAgYXZnRXhpdFByaWNlOiAwLFxuICAgICAgY2xpY2tlZDogZmFsc2UsXG4gICAgICBjdW1RdHk6IDAsXG4gICAgICByZWFkTW9yZUNsaWNrZWQ6IGZhbHNlLFxuICAgIH07XG4gICAgdGhpcy5yZWFkTW9yZUNsaWNrZWQgPSB0aGlzLnJlYWRNb3JlQ2xpY2tlZC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2xpY2tlZCA9IHRoaXMuY2xpY2tlZC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZ2V0U2xpY0RhdGEgPSB0aGlzLmdldFNsaWNEYXRhLmJpbmQodGhpcyk7XG4gICAgdGhpcy51cGRhdGVXaW5kb3dEaW1lbnNpb25zID0gdGhpcy51cGRhdGVXaW5kb3dEaW1lbnNpb25zLmJpbmQodGhpcyk7XG4gIH1cblxuICB1cGRhdGVXaW5kb3dEaW1lbnNpb25zKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxuICAgIH0pO1xuICB9XG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMudXBkYXRlV2luZG93RGltZW5zaW9ucyk7XG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy51cGRhdGVXaW5kb3dEaW1lbnNpb25zKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgY2xpY2tlZDogdGhpcy5wcm9wcy5jbGlja2VkIH0pO1xuICB9XG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICBpZiAoIWVxdWFsKHRoaXMucHJvcHMuc2xpYywgcHJldlByb3BzLnNsaWMpKSB7XG4gICAgICB0aGlzLmdldFNsaWNEYXRhKCk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIHRoaXMuZ2V0U2xpY0RhdGEoKTtcbiAgICB0aGlzLnVwZGF0ZVdpbmRvd0RpbWVuc2lvbnMoKTtcbiAgfVxuXG4gIGFzeW5jIGdldFNsaWNEYXRhKCkge1xuICAgIHRoaXMuc3RhdGUuZGF0YSA9IHRoaXMucHJvcHMuc2xpYztcbiAgICBsZXQgY2FsY2VkID0gYXdhaXQgY2FsY1RyYWRlcyh0aGlzLnByb3BzLnNsaWMpO1xuXG4gICAgaWYgKGNhbGNlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgcG5sOiBjYWxjZWRbXCJwbmxcIl0sXG4gICAgICAgIGF2Z0VudHJ5UHJpY2U6IGNhbGNlZFtcImF2Z0VudHJ5UHJpY2VcIl0sXG4gICAgICAgIGF2Z0V4aXRQcmljZTogY2FsY2VkW1wiYXZnRXhpdFByaWNlXCJdLFxuICAgICAgICBjdW1RdHk6IGNhbGNlZFtcImN1bVF0eVwiXSxcbiAgICAgIH0pO1xuICAgICAgaWYgKHRoaXMucHJvcHMuY2xpY2tlZCA9PSB0cnVlKSB7XG4gICAgICAgIHRoaXMucHJvcHMuc3RvcmUucG5sID0gY2FsY2VkW1wicG5sXCJdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wcm9wcy5zdG9yZS5hZGRQbmwoY2FsY2VkW1wicG5sXCJdKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjbGlja2VkKGRhdCkge1xuICAgIGlmICh0aGlzLnN0YXRlLmNsaWNrZWQgPT0gZmFsc2UpIHtcbiAgICAgIHRoaXMucHJvcHMuc3RvcmUuc2V0U2luZ2xlVHJhZGUoZGF0KTtcbiAgICAgIHRoaXMucHJvcHMuc3RvcmUuaGFzU2luZ2xlVHJhZGUgPSB0cnVlO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNsaWNrZWQ6IHRydWUgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucHJvcHMuc3RvcmUuaGFzU2luZ2xlVHJhZGUgPSBmYWxzZTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjbGlja2VkOiBmYWxzZSB9KTtcbiAgICB9XG4gIH1cblxuICByZWFkTW9yZUNsaWNrZWQoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUucmVhZE1vcmVDbGlja2VkID09IGZhbHNlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgcmVhZE1vcmVDbGlja2VkOiB0cnVlIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgcmVhZE1vcmVDbGlja2VkOiBmYWxzZSB9KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuY2xpY2tlZCA9PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPENvbnRhaW5EaXYgb25DbGljaz17KCkgPT4gdGhpcy5jbGlja2VkKHRoaXMuc3RhdGUuZGF0YSl9PlxuICAgICAgICAgIDxOZXh0VG9EaXY+XG4gICAgICAgICAgICB7Zm9ybWF0RGF0ZU1vbnRoT25seSh0aGlzLnN0YXRlLmRhdGFbMF0udGltZXN0YW1wKX1cbiAgICAgICAgICA8L05leHRUb0Rpdj5cbiAgICAgICAgICA8TmV4dFRvRGl2PlxuICAgICAgICAgICAge2Zvcm1hdERhdGVNb250aE9ubHkoXG4gICAgICAgICAgICAgIHRoaXMuc3RhdGUuZGF0YVt0aGlzLnN0YXRlLmRhdGEubGVuZ3RoIC0gMV0udGltZXN0YW1wXG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvTmV4dFRvRGl2PlxuICAgICAgICAgIDxJc1Nob3J0XG4gICAgICAgICAgICBzaWRlPXt0aGlzLnN0YXRlLmRhdGFbMF0uc2lkZX1cbiAgICAgICAgICAgIGxhc3Q9e3RoaXMuc3RhdGUuZGF0YVt0aGlzLnN0YXRlLmRhdGEubGVuZ3RoIC0gMV0ub3JkZXJUeXBlfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPE5leHRUb0Rpdj4ke3RoaXMuc3RhdGUuYXZnRW50cnlQcmljZS50b0ZpeGVkKDEpfTwvTmV4dFRvRGl2PlxuICAgICAgICAgIDxOZXh0VG9EaXY+JHt0aGlzLnN0YXRlLmF2Z0V4aXRQcmljZS50b0ZpeGVkKDEpfTwvTmV4dFRvRGl2PlxuICAgICAgICAgIDxOZXh0VG9EaXY+e3RoaXMuc3RhdGUuY3VtUXR5fTwvTmV4dFRvRGl2PlxuICAgICAgICAgIDxOZXh0VG9EaXY+e3RoaXMuc3RhdGUucG5sLnRvRml4ZWQoNCkgKyBcInhidFwifTwvTmV4dFRvRGl2PlxuICAgICAgICA8L0NvbnRhaW5EaXY+XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5zdG9yZS5pc1NpbmdsZU5vdGVzID09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPFRvdGFsRGV0YWlscz5cbiAgICAgICAgICAgIDxNb3JlQm94VGFsbD5cbiAgICAgICAgICAgICAgPENvbnRhaW5EaXZDbGlja2VkIG9uQ2xpY2s9eygpID0+IHRoaXMuY2xpY2tlZCh0aGlzLnN0YXRlLmRhdGEpfT5cbiAgICAgICAgICAgICAgICA8TmV4dFRvRGl2PlxuICAgICAgICAgICAgICAgICAge2Zvcm1hdERhdGVNb250aE9ubHkodGhpcy5zdGF0ZS5kYXRhWzBdLnRpbWVzdGFtcCl9XG4gICAgICAgICAgICAgICAgPC9OZXh0VG9EaXY+XG4gICAgICAgICAgICAgICAgPE5leHRUb0Rpdj5cbiAgICAgICAgICAgICAgICAgIHtmb3JtYXREYXRlTW9udGhPbmx5KFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmRhdGFbdGhpcy5zdGF0ZS5kYXRhLmxlbmd0aCAtIDFdLnRpbWVzdGFtcFxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L05leHRUb0Rpdj5cbiAgICAgICAgICAgICAgICA8SXNTaG9ydFxuICAgICAgICAgICAgICAgICAgc2lkZT17dGhpcy5zdGF0ZS5kYXRhWzBdLnNpZGV9XG4gICAgICAgICAgICAgICAgICBsYXN0PXt0aGlzLnN0YXRlLmRhdGFbdGhpcy5zdGF0ZS5kYXRhLmxlbmd0aCAtIDFdLm9yZGVyVHlwZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxOZXh0VG9EaXY+JHt0aGlzLnN0YXRlLmF2Z0VudHJ5UHJpY2UudG9GaXhlZCgxKX08L05leHRUb0Rpdj5cbiAgICAgICAgICAgICAgICA8TmV4dFRvRGl2PiR7dGhpcy5zdGF0ZS5hdmdFeGl0UHJpY2UudG9GaXhlZCgxKX08L05leHRUb0Rpdj5cbiAgICAgICAgICAgICAgICA8TmV4dFRvRGl2Pnt0aGlzLnN0YXRlLmN1bVF0eX08L05leHRUb0Rpdj5cbiAgICAgICAgICAgICAgICA8TmV4dFRvRGl2Pnt0aGlzLnN0YXRlLnBubC50b0ZpeGVkKDQpICsgXCJ4YnRcIn08L05leHRUb0Rpdj5cbiAgICAgICAgICAgICAgPC9Db250YWluRGl2Q2xpY2tlZD5cbiAgICAgICAgICAgIDwvTW9yZUJveFRhbGw+XG5cbiAgICAgICAgICAgIDxNYWluQ2hhcnRcbiAgICAgICAgICAgICAgb25lbWluPXt0aGlzLnByb3BzLm9uZW1pbn1cbiAgICAgICAgICAgICAgZml2ZW1pbj17dGhpcy5wcm9wcy5maXZlbWlufVxuICAgICAgICAgICAgICBvbmVob3VyPXt0aGlzLnByb3BzLm9uZWhvdXJ9XG4gICAgICAgICAgICAgIG9uZWRheT17dGhpcy5wcm9wcy5vbmVkYXl9XG4gICAgICAgICAgICAgIHRyYWRlcz17dGhpcy5zdGF0ZS5kYXRhfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxBcG9sbG9Db25zdW1lcj5cbiAgICAgICAgICAgICAgeyhjbGllbnQpID0+IChcbiAgICAgICAgICAgICAgICA8TXlUZXh0QXJlYSBmaXJzdFRyYWRlPXt0aGlzLnN0YXRlLmRhdGFbMF19IGNsaWVudD17Y2xpZW50fSAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9BcG9sbG9Db25zdW1lcj5cbiAgICAgICAgICA8L1RvdGFsRGV0YWlscz5cbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPFRvdGFsRGV0YWlscz5cbiAgICAgICAgICAgIDxNb3JlQm94VGFsbD5cbiAgICAgICAgICAgICAgPE9yZGVyRXhlY3V0aW9uIGRhdGE9e3RoaXMuc3RhdGUuZGF0YX0gLz5cbiAgICAgICAgICAgIDwvTW9yZUJveFRhbGw+XG4gICAgICAgICAgPC9Ub3RhbERldGFpbHM+XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmNsYXNzIElzU2hvcnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzLmxhc3QpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5zaWRlID09IFwiU2VsbFwiKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5sYXN0LmluY2x1ZGVzKFwiU3RvcFwiKSkge1xuICAgICAgICByZXR1cm4gPE5leHRUb0Rpdj5TaG9ydDwvTmV4dFRvRGl2PjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiA8TmV4dFRvRGl2PlNob3J0PC9OZXh0VG9EaXY+O1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5sYXN0LmluY2x1ZGVzKFwiU3RvcFwiKSkge1xuICAgICAgICByZXR1cm4gPE5leHRUb0Rpdj5Mb25nPC9OZXh0VG9EaXY+O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIDxOZXh0VG9EaXY+TG9uZzwvTmV4dFRvRGl2PjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuY29uc3QgT3JkZXJFeGVjdXRpb24gPSAoeyBkYXRhIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8RXhlY0NvbnRhaW5lcj5cbiAgICAgIDxDb250YWluRGl2QmxhY2s+XG4gICAgICAgIDxOZXh0VG9EaXZCbGFja1RpdGxlPlxuICAgICAgICAgIDxUaXRsZVNwYW4+VGltZXN0YW1wPC9UaXRsZVNwYW4+XG4gICAgICAgIDwvTmV4dFRvRGl2QmxhY2tUaXRsZT5cbiAgICAgICAgPE5leHRUb0RpdkJsYWNrVGl0bGU+XG4gICAgICAgICAgPFRpdGxlU3Bhbj5TaWRlPC9UaXRsZVNwYW4+XG4gICAgICAgIDwvTmV4dFRvRGl2QmxhY2tUaXRsZT5cbiAgICAgICAgPE5leHRUb0RpdkJsYWNrVGl0bGU+XG4gICAgICAgICAgPFRpdGxlU3Bhbj5PcmRlciBUeXBlPC9UaXRsZVNwYW4+XG4gICAgICAgIDwvTmV4dFRvRGl2QmxhY2tUaXRsZT5cbiAgICAgICAgPE5leHRUb0RpdkJsYWNrVGl0bGU+XG4gICAgICAgICAgPFRpdGxlU3Bhbj5QcmljZTwvVGl0bGVTcGFuPlxuICAgICAgICA8L05leHRUb0RpdkJsYWNrVGl0bGU+XG4gICAgICAgIDxOZXh0VG9EaXZCbGFja1RpdGxlPlxuICAgICAgICAgIDxUaXRsZVNwYW4+T3JkZXIgUXR5PC9UaXRsZVNwYW4+XG4gICAgICAgIDwvTmV4dFRvRGl2QmxhY2tUaXRsZT5cbiAgICAgICAgPE5leHRUb0RpdkJsYWNrVGl0bGU+XG4gICAgICAgICAgPFRpdGxlU3Bhbj5MZWF2ZXMgUXR5PC9UaXRsZVNwYW4+XG4gICAgICAgIDwvTmV4dFRvRGl2QmxhY2tUaXRsZT5cbiAgICAgICAgPE5leHRUb0RpdkJsYWNrVGl0bGU+XG4gICAgICAgICAgPFRpdGxlU3Bhbj5Db21taXNzaW9uPC9UaXRsZVNwYW4+XG4gICAgICAgIDwvTmV4dFRvRGl2QmxhY2tUaXRsZT5cbiAgICAgIDwvQ29udGFpbkRpdkJsYWNrPlxuXG4gICAgICB7ZGF0YS5tYXAoKGRhdCkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxDb250YWluRGl2QmxhY2s+XG4gICAgICAgICAgICA8TmV4dFRvRGl2QmxhY2s+XG4gICAgICAgICAgICAgIHtmb3JtYXREYXRlTW9udGhPbmx5KGRhdC50aW1lc3RhbXApfVxuICAgICAgICAgICAgPC9OZXh0VG9EaXZCbGFjaz5cbiAgICAgICAgICAgIHtkYXQuZXhlY1R5cGUgPT0gXCJUcmFkZVwiID8gKFxuICAgICAgICAgICAgICA8TmV4dFRvRGl2QmxhY2s+e2RhdC5zaWRlfTwvTmV4dFRvRGl2QmxhY2s+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8TmV4dFRvRGl2QmxhY2s+e2RhdC5leGVjVHlwZX08L05leHRUb0RpdkJsYWNrPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxOZXh0VG9EaXZCbGFjaz57ZGF0Lm9yZGVyVHlwZX08L05leHRUb0RpdkJsYWNrPlxuICAgICAgICAgICAgPE5leHRUb0RpdkJsYWNrPiR7ZGF0LnByaWNlLnRvU3RyaW5nKCl9PC9OZXh0VG9EaXZCbGFjaz5cbiAgICAgICAgICAgIDxOZXh0VG9EaXZCbGFjaz57ZGF0Lm9yZGVyUXR5fTwvTmV4dFRvRGl2QmxhY2s+XG4gICAgICAgICAgICA8TmV4dFRvRGl2QmxhY2s+XG4gICAgICAgICAgICAgIHtkYXQubGVhdmVzUXR5ID09IFwiMFwiID8gXCJcIiA6IGRhdC5sZWF2ZXNRdHl9XG4gICAgICAgICAgICA8L05leHRUb0RpdkJsYWNrPlxuICAgICAgICAgICAgPE5leHRUb0RpdkJsYWNrPlxuICAgICAgICAgICAgICB7ZGF0LmV4ZWNUeXBlID09IFwiRnVuZGluZ1wiXG4gICAgICAgICAgICAgICAgPyBcIlwiXG4gICAgICAgICAgICAgICAgOiBjYWxjQ29tbWlzc2lvbihcbiAgICAgICAgICAgICAgICAgICAgZGF0LnByaWNlLFxuICAgICAgICAgICAgICAgICAgICBkYXQuc2lkZSxcbiAgICAgICAgICAgICAgICAgICAgZGF0Lm9yZGVyUXR5LFxuICAgICAgICAgICAgICAgICAgICBkYXQubGVhdmVzUXR5LFxuICAgICAgICAgICAgICAgICAgICBkYXQub3JkZXJUeXBlXG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9OZXh0VG9EaXZCbGFjaz5cbiAgICAgICAgICA8L0NvbnRhaW5EaXZCbGFjaz5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuICAgIDwvRXhlY0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBDb250YWluRGl2ID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGhlaWdodDogNDdweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMmYyZjI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG5cbiAgJjpob3ZlciB7XG4gICAgdHJhbnNpdGlvbjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiAjZjhmOGZmO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuYDtcbmV4cG9ydCBjb25zdCBDb250YWluRGl2Q2xpY2tlZCA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBoZWlnaHQ6IDQ3cHg7XG5cbiAgdHJhbnNpdGlvbjogbm9uZTtcblxuICBmb250LXdlaWdodDogNDAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YyZjJmMjtcbiAgYm9yZGVyLXJhZGl1czogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiAjZjhmOGZmO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuYDtcbmV4cG9ydCBjb25zdCBDb250YWluRGl2QmxhY2sgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgaGVpZ2h0OiA0MHB4O1xuICBiYWNrZ3JvdW5kOiAjZjhmOGZmO1xuXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjJmMmYyO1xuYDtcbmV4cG9ydCBjb25zdCBDb250YWluRGl2SGVhZGVyID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGhlaWdodDogMzhweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkM2QzZDM7XG5gO1xuLy8gZjJmMmYyXG4vLyBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZjJmMmYyO1xuZXhwb3J0IGNvbnN0IE5leHRUb0RpdiA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDMwJTtcbiAgcGFkZGluZzogOHB4O1xuICBwYWRkaW5nLXRvcDogMTJweDtcbiAgcGFkZGluZy1sZWZ0OiAxMnB4O1xuXG4gIGNvbG9yOiAjMDAwO1xuXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcblxuICBAbWVkaWEgKG1heC13aWR0aDogNTUwcHgpIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBOZXh0VG9EaXZCbGFjayA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDMwJTtcbiAgcGFkZGluZzogNHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEycHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZy10b3A6IDlweDtcbmA7XG4vLyBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZjJmMmYyO1xuZXhwb3J0IGNvbnN0IE5leHRUb0RpdkJsYWNrVGl0bGUgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAzMCU7XG4gIHBhZGRpbmc6IDRweDtcbiAgcGFkZGluZy1sZWZ0OiAxNHB4O1xuICBwYWRkaW5nLXRvcDogOXB4O1xuICBmb250LXNpemU6IDE0cHg7XG5gO1xuXG5jb25zdCBUaXRsZVNwYW4gPSBzdHlsZWQuc3BhbmBcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkIGJsYWNrO1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiBibGFjaztcbmA7XG5leHBvcnQgY29uc3QgTmV4dFRvRGl2QmxhY2tUaW1lID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMzAlO1xuICBwYWRkaW5nOiA0cHg7XG4gIHBhZGRpbmctbGVmdDogMTJweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgfVxuICBAbWVkaWEgKG1heC13aWR0aDogNjYzcHgpIHtcbiAgICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbmA7XG5leHBvcnQgY29uc3QgTmV4dFRvRGl2SGVhZGVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMzAlO1xuICBjb2xvcjogIzc4ODM4ZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEycHg7XG4gICR7c21hbGxGb250fVxuICBmb250LXNpemU6MTNweDtcbmA7XG5cbmNvbnN0IElubmVyUG5sV2luID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgcGFkZGluZzogMCAzcHg7XG4gIG1heC13aWR0aDogODBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNjAwO1xuYDtcbmNvbnN0IElubmVyUG5sTG9zcyA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQ6IHJlZDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAwIDNweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBtYXgtd2lkdGg6IDgwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbmA7XG5cbmNvbnN0IFJlYWRNb3JlID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMTBweCAwO1xuXG4gIC8qIFwidHJhbnNwYXJlbnRcIiBvbmx5IHdvcmtzIGhlcmUgYmVjYXVzZSA9PSByZ2JhKDAsMCwwLDApICovXG5cbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChcbiAgICBsaW5lYXIsXG4gICAgbGVmdCB0b3AsXG4gICAgbGVmdCBib3R0b20sXG4gICAgY29sb3Itc3RvcCgwLCByZ2JhKDI1NSwgMCwgMCwgMCkpLFxuICAgIGNvbG9yLXN0b3AoMSwgcmdiYSgyNDgsIDI0OCwgMjU1LCAxKSlcbiAgKTtcbmA7XG5jb25zdCBSZWFkTW9yZVRhbGwgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAxMHB4IDA7XG5gO1xuLy8gYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgdHJhbnNwYXJlbnQsIGJsYWNrKTtcbmNvbnN0IE1vcmVCb3hTaG9ydCA9IHN0eWxlZC5kaXZgXG4gIG1heC1oZWlnaHQ6IDMwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5gO1xuY29uc3QgTW9yZUJveFRhbGwgPSBzdHlsZWQuZGl2YFxuICBtYXgtaGVpZ2h0OiBub25lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5gO1xuY29uc3QgRXhlY0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIG1heC1oZWlnaHQ6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2YyZjJmMjtcbmA7XG5cbmNvbnN0IFRvdGFsRGV0YWlscyA9IHN0eWxlZC5kaXZgYDtcbi8vIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMzMsIDM3LCA0MCwgMC43KTtcbmNvbnN0IFJlYWRNb3JlSW5uZXIgPSBzdHlsZWQuZGl2YFxuICBjb2xvcjogcmdiYSgzMywgMzcsIDQwLCAxKTtcblxuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogbm9uZTtcbiAgLW1vei10cmFuc2l0aW9uLXByb3BlcnR5OiBub25lO1xuICAtby10cmFuc2l0aW9uLXByb3BlcnR5OiBub25lO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBub25lO1xuXG4gIDpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzMsIDM3LCA0MCwgMSk7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiBub25lO1xuICAgIC1tb3otdHJhbnNpdGlvbi1wcm9wZXJ0eTogbm9uZTtcbiAgICAtby10cmFuc2l0aW9uLXByb3BlcnR5OiBub25lO1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IG5vbmU7XG4gIH1cbiAgZm9udC1zaXplOiAyMHB4O1xuYDtcbiIsImV4cG9ydCBhc3luYyBmdW5jdGlvbiBjYWxjVHJhZGVzKGlucHV0RGF0YSkge1xuICAvLyBpbnB1dERhdGEgPSB0aGlzLnByb3BzLnNsaWM7XG4gIGlmIChpbnB1dERhdGFbMF0uc2lkZSA9PSBcIkJ1eVwiICYmIGlucHV0RGF0YVswXS5leGVjVHlwZSA9PSBcIlRyYWRlXCIpIHtcbiAgICBsZXQgYXZnQnV5UHJpY2UgPSAwO1xuICAgIGxldCBhdmdTZWxsUHJpY2UgPSAwO1xuICAgIGxldCB0b3RCdXlDb250cmFjdHMgPSAwO1xuICAgIGxldCB0b3RTZWxsQ29udHJhY3RzID0gMDtcbiAgICBsZXQgYnV5TnVtID0gMDtcbiAgICBsZXQgc2VsbE51bSA9IDA7XG4gICAgbGV0IHRvdEJ1eUNvbnRyYWN0c011bHQgPSAwO1xuICAgIGxldCB0b3RTZWxsQ29udHJhY3RzTXVsdCA9IDA7XG4gICAgbGV0IHJlYWxRdHkgPSAwO1xuICAgIGxldCB0b3RDb21taXNzaW9uID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGlucHV0RGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gcmVhbFF0eSA9IGlucHV0RGF0YVtpXS5vcmRlclF0eSAtIGlucHV0RGF0YVtpXS5sZWF2ZXNRdHk7XG4gICAgICBpZiAoaW5wdXREYXRhW2ldLnNpZGUgPT0gXCJCdXlcIiAmJiBpbnB1dERhdGFbaV0ubGVhdmVzUXR5ID09IDApIHtcbiAgICAgICAgYnV5TnVtICs9IDE7XG4gICAgICAgIHRvdEJ1eUNvbnRyYWN0cyArPSBpbnB1dERhdGFbaV0ub3JkZXJRdHk7XG4gICAgICAgIHRvdEJ1eUNvbnRyYWN0c011bHQgKz1cbiAgICAgICAgICBpbnB1dERhdGFbaV0ub3JkZXJRdHkgKiBwYXJzZUZsb2F0KGlucHV0RGF0YVtpXS5wcmljZSk7XG4gICAgICB9XG4gICAgICBpZiAoaW5wdXREYXRhW2ldLnNpZGUgPT0gXCJTZWxsXCIgJiYgaW5wdXREYXRhW2ldLmxlYXZlc1F0eSA9PSAwKSB7XG4gICAgICAgIHNlbGxOdW0gKz0gMTtcbiAgICAgICAgdG90U2VsbENvbnRyYWN0cyArPSBpbnB1dERhdGFbaV0ub3JkZXJRdHk7XG4gICAgICAgIHRvdFNlbGxDb250cmFjdHNNdWx0ICs9XG4gICAgICAgICAgaW5wdXREYXRhW2ldLm9yZGVyUXR5ICogcGFyc2VGbG9hdChpbnB1dERhdGFbaV0ucHJpY2UpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBpbnB1dERhdGFbaV0ub3JkZXJUeXBlID09IFwiTGltaXRcIiAmJlxuICAgICAgICBpbnB1dERhdGFbaV0uZXhlY1R5cGUgIT09IFwiRnVuZGluZ1wiXG4gICAgICApIHtcbiAgICAgICAgdG90Q29tbWlzc2lvbiArPSAocmVhbFF0eSAqIDAuMDAyNSkgLyBpbnB1dERhdGFbaV0ucHJpY2U7XG4gICAgICB9XG4gICAgICBpZiAoaW5wdXREYXRhW2ldLm9yZGVyVHlwZSA9PSBcIk1hcmtldFwiKSB7XG4gICAgICAgIHRvdENvbW1pc3Npb24gLT0gKHJlYWxRdHkgKiAwLjAwNzUpIC8gaW5wdXREYXRhW2ldLnByaWNlO1xuICAgICAgfVxuICAgICAgaWYgKGlucHV0RGF0YVtpXS5vcmRlclR5cGUuaW5jbHVkZXMoXCJTdG9wXCIpKSB7XG4gICAgICAgIHRvdENvbW1pc3Npb24gLT0gKHJlYWxRdHkgKiAwLjAwNzUpIC8gaW5wdXREYXRhW2ldLnByaWNlO1xuICAgICAgfVxuICAgICAgaWYgKGkgPT0gaW5wdXREYXRhLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgYXZnQnV5UHJpY2UgPSB0b3RCdXlDb250cmFjdHNNdWx0IC8gdG90QnV5Q29udHJhY3RzO1xuICAgICAgICBhdmdTZWxsUHJpY2UgPSB0b3RTZWxsQ29udHJhY3RzTXVsdCAvIHRvdFNlbGxDb250cmFjdHM7XG4gICAgICAgIGxldCBhdmdFeGl0O1xuICAgICAgICBsZXQgYXZnRW50cnk7XG4gICAgICAgIGlmIChhdmdCdXlQcmljZSAhPSBudWxsKSB7XG4gICAgICAgICAgYXZnRW50cnkgPSBhdmdCdXlQcmljZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhdmdFbnRyeSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGF2Z1NlbGxQcmljZSAhPSBudWxsKSB7XG4gICAgICAgICAgYXZnRXhpdCA9IGF2Z1NlbGxQcmljZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhdmdFeGl0ID0gMDtcbiAgICAgICAgfVxuICAgICAgICAvLyB0aGlzLnN0YXRlLmN1bVF0eSA9IHRvdEJ1eUNvbnRyYWN0cztcbiAgICAgICAgbGV0IHRoZVBubCA9ICgxIC8gYXZnQnV5UHJpY2UgLSAxIC8gYXZnU2VsbFByaWNlKSAqIHRvdFNlbGxDb250cmFjdHM7XG4gICAgICAgIGlmICh0aGVQbmwgIT0gbnVsbCkge1xuICAgICAgICAgIGxldCBteVBubCA9IHRoZVBubCArIHRvdENvbW1pc3Npb247XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBsZXQgZW5kID0ge307XG4gICAgICAgICAgICBlbmRbXCJwbmxcIl0gPSBteVBubDtcbiAgICAgICAgICAgIGVuZFtcImF2Z0VudHJ5UHJpY2VcIl0gPSBhdmdFbnRyeTtcbiAgICAgICAgICAgIGVuZFtcImF2Z0V4aXRQcmljZVwiXSA9IGF2Z0V4aXQ7XG4gICAgICAgICAgICBlbmRbXCJjdW1RdHlcIl0gPSB0b3RCdXlDb250cmFjdHM7XG4gICAgICAgICAgICByZXNvbHZlKGVuZCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgLy8gICBzdG9yZS5hZGRQbmwobXlQbmwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgbGV0IGVuZCA9IHt9O1xuICAgICAgICAgICAgZW5kW1wicG5sXCJdID0gMDtcbiAgICAgICAgICAgIGVuZFtcImF2Z0VudHJ5UHJpY2VcIl0gPSBhdmdFbnRyeTtcbiAgICAgICAgICAgIGVuZFtcImF2Z0V4aXRQcmljZVwiXSA9IGF2Z0V4aXQ7XG4gICAgICAgICAgICBlbmRbXCJjdW1RdHlcIl0gPSB0b3RCdXlDb250cmFjdHM7XG4gICAgICAgICAgICByZXNvbHZlKGVuZCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaWYgKGlucHV0RGF0YVswXS5zaWRlID09IFwiU2VsbFwiICYmIGlucHV0RGF0YVswXS5leGVjVHlwZSA9PSBcIlRyYWRlXCIpIHtcbiAgICBsZXQgdG90QnV5Q29udHJhY3RzID0gMDtcbiAgICBsZXQgdG90U2VsbENvbnRyYWN0cyA9IDA7XG4gICAgbGV0IGJ1eU51bSA9IDA7XG4gICAgbGV0IHNlbGxOdW0gPSAwO1xuICAgIGxldCB0b3RCdXlDb250cmFjdHNNdWx0ID0gMDtcbiAgICBsZXQgdG90U2VsbENvbnRyYWN0c011bHQgPSAwO1xuICAgIGxldCByZWFsUXR5ID0gMDtcbiAgICBsZXQgdG90Q29tbWlzc2lvbiA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnB1dERhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIHJlYWxRdHkgPSBpbnB1dERhdGFbaV0ub3JkZXJRdHkgLSBpbnB1dERhdGFbaV0ubGVhdmVzUXR5O1xuICAgICAgaWYgKGlucHV0RGF0YVtpXS5zaWRlID09IFwiQnV5XCIgJiYgaW5wdXREYXRhW2ldLmxlYXZlc1F0eSA9PSAwKSB7XG4gICAgICAgIC8vIHRvdEJ1eVByaWNlICs9IHBhcnNlRmxvYXQoaW5wdXREYXRhW2ldLnByaWNlKTtcbiAgICAgICAgYnV5TnVtICs9IDE7XG4gICAgICAgIHRvdEJ1eUNvbnRyYWN0cyArPSBpbnB1dERhdGFbaV0ub3JkZXJRdHk7XG4gICAgICAgIHRvdEJ1eUNvbnRyYWN0c011bHQgKz1cbiAgICAgICAgICBpbnB1dERhdGFbaV0ub3JkZXJRdHkgKiBwYXJzZUZsb2F0KGlucHV0RGF0YVtpXS5wcmljZSk7XG4gICAgICAgIGlmIChpbnB1dERhdGFbMF0ub3JkZXJRdHkgPT0gNDAwMDApIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgIFwiQlVZIFNJREVcIixcbiAgICAgICAgICAgIGlucHV0RGF0YVtpXSxcbiAgICAgICAgICAgIHJlYWxRdHksXG4gICAgICAgICAgICB0b3RTZWxsQ29udHJhY3RzLFxuICAgICAgICAgICAgdG90QnV5Q29udHJhY3RzLFxuICAgICAgICAgICAgdG90U2VsbENvbnRyYWN0c011bHRcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoaW5wdXREYXRhW2ldLnNpZGUgPT0gXCJTZWxsXCIgJiYgaW5wdXREYXRhW2ldLmxlYXZlc1F0eSA9PSAwKSB7XG4gICAgICAgIHNlbGxOdW0gKz0gMTtcbiAgICAgICAgaWYgKGkgPT0gMCkge1xuICAgICAgICAgIGxldCBkaWZmZXJlbmNlID0gaW5wdXREYXRhW2ldLm9yZGVyUXR5ICsgaW5wdXREYXRhW2ldLmN1cnJlbnRRdHk7XG4gICAgICAgICAgbGV0IG5ld1JlYWxRdHkgPSBpbnB1dERhdGFbaV0ub3JkZXJRdHkgLSBkaWZmZXJlbmNlO1xuICAgICAgICAgIHRvdFNlbGxDb250cmFjdHMgKz0gbmV3UmVhbFF0eTtcbiAgICAgICAgICB0b3RTZWxsQ29udHJhY3RzTXVsdCArPSBuZXdSZWFsUXR5ICogcGFyc2VGbG9hdChpbnB1dERhdGFbaV0ucHJpY2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRvdFNlbGxDb250cmFjdHMgKz0gaW5wdXREYXRhW2ldLm9yZGVyUXR5O1xuICAgICAgICAgIHRvdFNlbGxDb250cmFjdHNNdWx0ICs9XG4gICAgICAgICAgICBpbnB1dERhdGFbaV0ub3JkZXJRdHkgKiBwYXJzZUZsb2F0KGlucHV0RGF0YVtpXS5wcmljZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlucHV0RGF0YVswXS5vcmRlclF0eSA9PSA0MDAwMCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgXCJTRUxMIFNJREVcIixcbiAgICAgICAgICAgIGlucHV0RGF0YVtpXSxcbiAgICAgICAgICAgIHJlYWxRdHksXG4gICAgICAgICAgICB0b3RTZWxsQ29udHJhY3RzLFxuICAgICAgICAgICAgdG90QnV5Q29udHJhY3RzLFxuICAgICAgICAgICAgdG90U2VsbENvbnRyYWN0c011bHRcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIGlucHV0RGF0YVtpXS5vcmRlclR5cGUgPT0gXCJMaW1pdFwiICYmXG4gICAgICAgIGlucHV0RGF0YVtpXS5leGVjVHlwZSAhPT0gXCJGdW5kaW5nXCJcbiAgICAgICkge1xuICAgICAgICB0b3RDb21taXNzaW9uICs9IChyZWFsUXR5ICogMC4wMDI1KSAvIGlucHV0RGF0YVtpXS5wcmljZTtcbiAgICAgIH1cbiAgICAgIGlmIChpbnB1dERhdGFbaV0ub3JkZXJUeXBlID09IFwiTWFya2V0XCIpIHtcbiAgICAgICAgdG90Q29tbWlzc2lvbiAtPSAocmVhbFF0eSAqIDAuMDA3NSkgLyBpbnB1dERhdGFbaV0ucHJpY2U7XG4gICAgICB9XG4gICAgICBpZiAoaW5wdXREYXRhW2ldLm9yZGVyVHlwZS5pbmNsdWRlcyhcIlN0b3BcIikpIHtcbiAgICAgICAgdG90Q29tbWlzc2lvbiAtPSAocmVhbFF0eSAqIDAuMDA3NSkgLyBpbnB1dERhdGFbaV0ucHJpY2U7XG4gICAgICB9XG4gICAgICBpZiAoaSA9PSBpbnB1dERhdGEubGVuZ3RoIC0gMSkge1xuICAgICAgICBsZXQgYXZnQnV5UHJpY2UgPSB0b3RCdXlDb250cmFjdHNNdWx0IC8gdG90QnV5Q29udHJhY3RzO1xuICAgICAgICBsZXQgYXZnU2VsbFByaWNlID0gdG90U2VsbENvbnRyYWN0c011bHQgLyB0b3RTZWxsQ29udHJhY3RzO1xuICAgICAgICBsZXQgcG5sID0gKDEgLyBhdmdCdXlQcmljZSAtIDEgLyBhdmdTZWxsUHJpY2UpICogdG90QnV5Q29udHJhY3RzO1xuICAgICAgICBpZiAoaW5wdXREYXRhWzBdLm9yZGVyUXR5ID09IDQwMDAwKSB7XG4gICAgICAgICAgY29uc29sZS5sb2cocG5sLCBhdmdCdXlQcmljZSwgYXZnU2VsbFByaWNlLCB0b3RCdXlDb250cmFjdHMpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBhdmdFbnRyeTtcbiAgICAgICAgbGV0IGF2Z0V4aXQ7XG4gICAgICAgIGlmIChhdmdCdXlQcmljZSAhPSBudWxsKSB7XG4gICAgICAgICAgYXZnRXhpdCA9IGF2Z0J1eVByaWNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGF2Z0V4aXQgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhdmdTZWxsUHJpY2UgIT0gbnVsbCkge1xuICAgICAgICAgIGF2Z0VudHJ5ID0gYXZnU2VsbFByaWNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGF2Z0VudHJ5ID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwbmwgIT0gbnVsbCkge1xuICAgICAgICAgIGxldCBteVBubCA9IHBubCArIHRvdENvbW1pc3Npb247XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBsZXQgZW5kID0ge307XG4gICAgICAgICAgICBlbmRbXCJwbmxcIl0gPSBteVBubDtcbiAgICAgICAgICAgIGVuZFtcImF2Z0VudHJ5UHJpY2VcIl0gPSBhdmdFbnRyeTtcbiAgICAgICAgICAgIGVuZFtcImF2Z0V4aXRQcmljZVwiXSA9IGF2Z0V4aXQ7XG4gICAgICAgICAgICBlbmRbXCJjdW1RdHlcIl0gPSB0b3RTZWxsQ29udHJhY3RzO1xuICAgICAgICAgICAgaWYgKGlucHV0RGF0YVswXS5vcmRlclF0eSA9PSA0MDAwMCkge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlbmQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzb2x2ZShlbmQpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgbGV0IGVuZCA9IHt9O1xuICAgICAgICAgICAgZW5kW1wicG5sXCJdID0gMDtcbiAgICAgICAgICAgIGVuZFtcImF2Z0VudHJ5UHJpY2VcIl0gPSBhdmdFbnRyeTtcbiAgICAgICAgICAgIGVuZFtcImF2Z0V4aXRQcmljZVwiXSA9IGF2Z0V4aXQ7XG4gICAgICAgICAgICBlbmRbXCJjdW1RdHlcIl0gPSB0b3RTZWxsQ29udHJhY3RzO1xuICAgICAgICAgICAgcmVzb2x2ZShlbmQpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgY29uc3QgZ2V0TmV3RGF0ID0gYXN5bmMgKG9sZERhdCwgaGFzaHRhZ3MpID0+IHtcbiAgbGV0IG5ld1RyYWRlcyA9IFtdO1xuICBsZXQgb2xkVHJhZGVzID0gb2xkRGF0LmZldGNoVHJhZGVIaXN0b3J5O1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG9sZFRyYWRlcy5sZW5ndGg7IGkrKykge1xuICAgIGxldCB0cmFkZUhhc2h0YWdzID0gb2xkVHJhZGVzW2ldLmhhc2h0YWdzLnNwbGl0KFwiLFwiKTtcbiAgICBsZXQgb2xkVHJhZGUgPSBvbGRUcmFkZXNbaV07XG4gICAgY29uc29sZS5sb2codHJhZGVIYXNodGFncyk7XG4gICAgaWYgKHRyYWRlSGFzaHRhZ3NbMF0gIT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0cmFkZUhhc2h0YWdzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGZvciAobGV0IG0gPSAwOyBtIDwgaGFzaHRhZ3MubGVuZ3RoOyBtKyspIHtcbiAgICAgICAgICBpZiAoaGFzaHRhZ3NbbV0gPT0gdHJhZGVIYXNodGFnc1tqXSkge1xuICAgICAgICAgICAgaWYgKG5ld1RyYWRlc1swXSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgbmV3VHJhZGVzLnB1c2gob2xkVHJhZGUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbmV3VHJhZGVzLnB1c2gob2xkVHJhZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoaSA9PSBvbGRUcmFkZXMubGVuZ3RoIC0gMSkge1xuICAgICAgY29uc29sZS5sb2cobmV3VHJhZGVzLCBcIkZJTFRFUkVEIFRSQURFU1wiKTtcbiAgICAgIHJldHVybiBuZXdUcmFkZXM7XG4gICAgfVxuICB9XG59O1xuIiwiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHN0eWxlZCwgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4uL3RoZW1lXCI7XG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWRlckxvZ28gZnJvbSBcIi4vTG9nb1wiO1xuaW1wb3J0IFwiLi9oZWFkZXIuc2Nzc1wiO1xuaW1wb3J0IERhdGVQaWNrZXIgZnJvbSBcIi4uL01lbnUvRGF0ZXBpY2tlclwiO1xuaW1wb3J0IHsgQXBvbGxvQ29uc3VtZXIgfSBmcm9tIFwicmVhY3QtYXBvbGxvXCI7XG5pbXBvcnQgZ3FsIGZyb20gXCJncmFwaHFsLXRhZ1wiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgaGVhZGVySXRlbSwgd2lkZUZvbnQsIGxpbmssIHRyYW5zaXRpb24gfSBmcm9tIFwiLi4vc2hhcmVkL2hlbHBlcnNcIjtcbmNvbnN0IENvb2tpZSA9IHJlcXVpcmUoXCJqcy1jb29raWVcIik7XG5cbmNvbnN0IEhlYWRlciA9ICh7IHJvdXRlciB9KSA9PiB7XG4gIGFzeW5jIGZ1bmN0aW9uIGxvZ291dChjbGllbnQpIHtcbiAgICBDb29raWUucmVtb3ZlKFwiaXNBdXRoXCIpO1xuICAgIENvb2tpZS5yZW1vdmUoXCJxaWRcIik7XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwic3RvcmVcIik7XG4gICAgYXdhaXQgY2xpZW50Lm11dGF0ZSh7XG4gICAgICBtdXRhdGlvbjogZ3FsYFxuICAgICAgICBtdXRhdGlvbiBsb2dvdXQge1xuICAgICAgICAgIGxvZ291dFxuICAgICAgICB9XG4gICAgICBgLFxuICAgIH0pO1xuICAgIFJvdXRlci5wdXNoKFwiL1wiKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lKGZhbHNlKX0+XG4gICAgICA8V3JhcHBlcj5cbiAgICAgICAgPEhlYWRlckxvZ28gLz5cbiAgICAgICAgPERhdGVQaWNrZXJzV3JhcD5cbiAgICAgICAgICA8RGF0ZVBpY2tlcldyYXA+XG4gICAgICAgICAgICA8RGF0ZVBpY2tlciBzZXQ9e3RydWV9IHN0YXJ0PXt0cnVlfSAvPlxuICAgICAgICAgIDwvRGF0ZVBpY2tlcldyYXA+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBjb2xvcjogXCJ3aGl0ZVwiLCBtYXJnaW46IFwiYXV0byAwcHhcIiB9fT4tPC9kaXY+XG4gICAgICAgICAgPERhdGVQaWNrZXJXcmFwPlxuICAgICAgICAgICAgPERhdGVQaWNrZXIgc2V0PXt0cnVlfSBzdGFydD17ZmFsc2V9IC8+XG4gICAgICAgICAgPC9EYXRlUGlja2VyV3JhcD5cbiAgICAgICAgPC9EYXRlUGlja2Vyc1dyYXA+XG4gICAgICAgIDxMaW5rc1dyYXA+XG4gICAgICAgICAgPExpbmsgcHJlZmV0Y2ggaHJlZj1cIi9zZXR0aW5nc1wiPlxuICAgICAgICAgICAgPFN0eWxlZExpbmtcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtyb3V0ZXIucGF0aG5hbWUgPT09IFwiL3NldHRpbmdzXCIgPyBcImlzLWFjdGl2ZVwiIDogXCJcIn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgc2V0dGluZ3NcbiAgICAgICAgICAgIDwvU3R5bGVkTGluaz5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPEFwb2xsb0NvbnN1bWVyPlxuICAgICAgICAgICAgeyhjbGllbnQpID0+IChcbiAgICAgICAgICAgICAgPFN0eWxlZExpbmsgb25DbGljaz17KCkgPT4gbG9nb3V0KGNsaWVudCl9PmxvZ291dDwvU3R5bGVkTGluaz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9BcG9sbG9Db25zdW1lcj5cbiAgICAgICAgPC9MaW5rc1dyYXA+XG4gICAgICA8L1dyYXBwZXI+XG4gICAgPC9UaGVtZVByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihIZWFkZXIpO1xuXG5jb25zdCBMb2dvV3JhcCA9IHN0eWxlZC5kaXZgYDtcblxuY29uc3QgVGVtcERpdiA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbjogYXV0bztcbmA7XG5cbmNvbnN0IExpbmtzV3JhcCA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi1yaWdodDogMDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG5gO1xuXG5jb25zdCBEYXRlUGlja2Vyc1dyYXAgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuYDtcbmNvbnN0IERhdGVQaWNrZXJXcmFwID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luOiBhdXRvIDEwcHg7XG5gO1xuXG5jb25zdCBTdHlsZWRMaW5rID0gc3R5bGVkLmRpdmBcbiAgJHtoZWFkZXJJdGVtfTtcbiAgJHtsaW5rfTtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLm11dGVkVGV4dH07XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcblxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgOjphZnRlciB7XG4gICAgJHt0cmFuc2l0aW9uKFwib3BhY2l0eVwiLCBcImJvcmRlci1ib3R0b20td2lkdGhcIil9O1xuXG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgb3BhY2l0eTogMDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmFjY2VudH07XG4gIH1cblxuICA6aG92ZXIge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5hY2NlbnR9O1xuICB9XG4gIDpob3Zlcjo6YWZ0ZXIge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5hY2NlbnR9O1xuICB9XG5cbiAgJi5hY3RpdmU6OmFmdGVyIHtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmFjY2VudH07XG4gIH1cbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbmA7XG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuaGVhZGVyYFxuICBwb3NpdGlvbjogc3RpY2t5O1xuICB6LWluZGV4OiAxMDtcbiAgdG9wOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcblxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2VlZTtcbiAgaGVpZ2h0OiA1NXB4O1xuICBwYWRkaW5nOiAwIDB2dztcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmZvcmVncm91bmR9O1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjUyNztcblxuICBAbWVkaWEgKG1heC13aWR0aDogNDI1cHgpIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgfVxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5gO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IGhlYWRlckl0ZW0sIHdpZGVGb250IH0gZnJvbSBcIi4uL3NoYXJlZC9oZWxwZXJzXCI7XG5cbmNvbnN0IEhlYWRlckxvZ28gPSAoKSA9PiAoXG4gIDxMb2dvPlxuICAgIDxMaW5rIHByZWZldGNoIGhyZWY9XCIvXCI+XG4gICAgICA8c3Bhbj7igr9pdHNqb3VybmFsPC9zcGFuPlxuICAgIDwvTGluaz5cbiAgPC9Mb2dvPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyTG9nbztcblxuY29uc3QgTG9nbyA9IHN0eWxlZC5kaXZgXG4gICR7aGVhZGVySXRlbX1cblxuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5ub3JtYWxUZXh0fTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogI2ZmZjtcblxuICBAbWVkaWEgKG1heC13aWR0aDogNDI1cHgpIHtcbiAgICBwYWRkaW5nOiAwIDhweCAwIDE2cHg7XG4gICAgZm9udC1zaXplOiAxOXB4O1xuICB9XG5gO1xuXG4vLyBkaXNwbGF5OiBmbGV4O1xuLy8gYWxpZ24taXRlbXM6IGNlbnRlcjtcbi8vIGZsZXgtc2hyaW5rOiAwO1xuLy8gcGFkZGluZzogMCAxNnB4O1xuLy8gQG1lZGlhIChtYXgtd2lkdGg6IDQyNXB4KSB7XG4vLyAgIHBhZGRpbmc6IDAgOHB4O1xuLy8gfVxuIiwiLy8gZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdERhdGVNb250aE9ubHkoZGF0ZSkge1xuLy8gICB2YXIgbW9udGhOYW1lcyA9IFtcbi8vICAgICBcIkphblwiLFxuLy8gICAgIFwiRmViXCIsXG4vLyAgICAgXCJNYXJcIixcbi8vICAgICBcIkFwclwiLFxuLy8gICAgIFwiTWF5XCIsXG4vLyAgICAgXCJKdW5cIixcbi8vICAgICBcIkp1bFwiLFxuLy8gICAgIFwiQXVnXCIsXG4vLyAgICAgXCJTZXB0XCIsXG4vLyAgICAgXCJPY3RcIixcbi8vICAgICBcIk5vdlwiLFxuLy8gICAgIFwiRGVjXCIsXG4vLyAgIF07XG4vLyAgIGxldCB1dGNEYXRlID0gZGF0ZTtcbi8vICAgbGV0IHRoZURhdGUgPSBuZXcgRGF0ZSh1dGNEYXRlKTtcblxuLy8gICB2YXIgZGF5ID0gdGhlRGF0ZS5nZXREYXRlKCk7XG4vLyAgIHZhciBob3VycyA9IGFkZFplcm9CZWZvcmUodGhlRGF0ZS5nZXRIb3VycygpKTtcbi8vICAgdmFyIG1pbnMgPSBhZGRaZXJvQmVmb3JlKHRoZURhdGUuZ2V0TWludXRlcygpKTtcbi8vICAgdmFyIG1vbnRoSW5kZXggPSBhZGRaZXJvQmVmb3JlKHRoZURhdGUuZ2V0TW9udGgoKSk7XG4vLyAgIHZhciB5ZWFyID0gYWRkWmVyb0JlZm9yZSh0aGVEYXRlLmdldEZ1bGxZZWFyKCkpO1xuXG4vLyAgIHJldHVybiAoXG4vLyAgICAgZGF5ICsgXCItXCIgKyBtb250aEluZGV4LnRvU3RyaW5nKCkgKyBcIi1cIiArIHllYXIgKyBcIiBcIiArIGhvdXJzICsgXCI6XCIgKyBtaW5zXG4vLyAgICk7XG4vLyB9XG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0RGF0ZU1vbnRoT25seShkYXRlKSB7XG4gIHZhciBtb250aE5hbWVzID0gW1xuICAgIFwiSmFuXCIsXG4gICAgXCJGZWJcIixcbiAgICBcIk1hclwiLFxuICAgIFwiQXByXCIsXG4gICAgXCJNYXlcIixcbiAgICBcIkp1blwiLFxuICAgIFwiSnVsXCIsXG4gICAgXCJBdWdcIixcbiAgICBcIlNlcHRcIixcbiAgICBcIk9jdFwiLFxuICAgIFwiTm92XCIsXG4gICAgXCJEZWNcIixcbiAgXTtcbiAgbGV0IHV0Y0RhdGUgPSBkYXRlO1xuICBsZXQgdGhlRGF0ZSA9IG5ldyBEYXRlKHV0Y0RhdGUpO1xuXG4gIHZhciBkYXkgPSB0aGVEYXRlLmdldERhdGUoKTtcbiAgdmFyIGhvdXJzID0gYWRkWmVyb0JlZm9yZSh0aGVEYXRlLmdldEhvdXJzKCkpO1xuICB2YXIgbWlucyA9IGFkZFplcm9CZWZvcmUodGhlRGF0ZS5nZXRNaW51dGVzKCkpO1xuICB2YXIgbW9udGhJbmRleCA9IHRoZURhdGUuZ2V0TW9udGgoKTtcbiAgLy8gdmFyIG1vbnRoSW5kZXggPSBhZGRaZXJvQmVmb3JlKHRoZURhdGUuZ2V0TW9udGgoKSk7XG4gIHZhciB5ZWFyID0gdGhlRGF0ZS5nZXRGdWxsWWVhcigpO1xuXG4gIHJldHVybiBkYXkgKyBcIiBcIiArIG1vbnRoTmFtZXNbbW9udGhJbmRleF0gKyBcIiwgXCIgKyBob3VycyArIFwiOlwiICsgbWlucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdERhdGVTaG9ydChkYXRlKSB7XG4gIGxldCB1dGNEYXRlID0gZGF0ZTtcbiAgbGV0IHRoZURhdGUgPSBuZXcgRGF0ZSh1dGNEYXRlKTtcblxuICB2YXIgZGF5ID0gYWRkWmVyb0JlZm9yZSh0aGVEYXRlLmdldERhdGUoKSk7XG4gIHZhciBob3VycyA9IGFkZFplcm9CZWZvcmUodGhlRGF0ZS5nZXRIb3VycygpKTtcbiAgdmFyIG1pbnMgPSBhZGRaZXJvQmVmb3JlKHRoZURhdGUuZ2V0TWludXRlcygpKTtcbiAgdmFyIG1vbnRoSW5kZXggPSBhZGRaZXJvQmVmb3JlKHRoZURhdGUuZ2V0TW9udGgoKSk7XG4gIHZhciB5ZWFyID0gdGhlRGF0ZS5nZXRGdWxsWWVhcigpO1xuXG4gIHJldHVybiBtb250aEluZGV4LnRvU3RyaW5nKCkgKyBcIi9cIiArIGRheS50b1N0cmluZygpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdERhdGVTaG9ydFdpdGhIb3VyKGRhdGUpIHtcbiAgbGV0IHV0Y0RhdGUgPSBkYXRlO1xuICBsZXQgdGhlRGF0ZSA9IG5ldyBEYXRlKHV0Y0RhdGUpO1xuXG4gIHZhciBkYXkgPSBhZGRaZXJvQmVmb3JlKHRoZURhdGUuZ2V0RGF0ZSgpKTtcbiAgdmFyIGhvdXJzID0gYWRkWmVyb0JlZm9yZSh0aGVEYXRlLmdldEhvdXJzKCkpO1xuICB2YXIgbWlucyA9IGFkZFplcm9CZWZvcmUodGhlRGF0ZS5nZXRNaW51dGVzKCkpO1xuICB2YXIgbW9udGhJbmRleCA9IGFkZFplcm9CZWZvcmUodGhlRGF0ZS5nZXRNb250aCgpKTtcbiAgdmFyIHllYXIgPSB0aGVEYXRlLmdldEZ1bGxZZWFyKCk7XG5cbiAgcmV0dXJuIChcbiAgICBtb250aEluZGV4LnRvU3RyaW5nKCkgK1xuICAgIFwiL1wiICtcbiAgICBkYXkudG9TdHJpbmcoKSArXG4gICAgXCIgXCIgK1xuICAgIGhvdXJzLnRvU3RyaW5nKCkgK1xuICAgIFwiOlwiICtcbiAgICBtaW5zLnRvU3RyaW5nKClcbiAgKTtcbn1cblxuZnVuY3Rpb24gYWRkWmVyb0JlZm9yZShuKSB7XG4gIHJldHVybiAobiA8IDEwID8gXCIwXCIgOiBcIlwiKSArIG47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdGF0ZURhdGUoaW5wdXQpIHtcbiAgaWYgKGlucHV0ID09IFwiVG9kYXlcIikge1xuICAgIGxldCBkYXRlcyA9IHt9O1xuICAgIGRhdGVzLmVuZCA9IG1ha2VEYXRlSHJzKDApO1xuICAgIGRhdGVzLnN0YXJ0ID0gbWFrZURhdGVIcnMoMjQpO1xuICAgIGNvbnNvbGUubG9nKFwiaXMgdG9kYXlcIik7XG4gICAgcmV0dXJuIGRhdGVzO1xuICB9XG4gIGlmIChpbnB1dCA9PSBcIlllc3RlcmRheVwiKSB7XG4gICAgbGV0IGRhdGVzID0ge307XG4gICAgZGF0ZXMuZW5kID0gbWFrZURhdGVIcnMoMSk7XG4gICAgZGF0ZXMuc3RhcnQgPSBtYWtlRGF0ZURheXMoMik7XG4gICAgY29uc29sZS5sb2coXCJpcyB5ZXN0ZXJkYXlcIik7XG4gICAgcmV0dXJuIGRhdGVzO1xuICB9XG4gIGlmIChpbnB1dCA9PSBcIlRoaXMgV2Vla1wiKSB7XG4gICAgbGV0IGRhdGVzID0ge307XG4gICAgZGF0ZXMuZW5kID0gbWFrZURhdGVIcnMoMCk7XG4gICAgZGF0ZXMuc3RhcnQgPSBtYWtlRGF0ZURheXMoNyk7XG4gICAgY29uc29sZS5sb2coXCJpcyB0aGlzIHdlZWtcIik7XG4gICAgcmV0dXJuIGRhdGVzO1xuICB9XG4gIGlmIChpbnB1dCA9PSBcIlRoaXMgTW9udGhcIikge1xuICAgIGxldCBkYXRlcyA9IHt9O1xuICAgIGRhdGVzLmVuZCA9IG1ha2VEYXRlSHJzKDApO1xuICAgIGRhdGVzLnN0YXJ0ID0gbWFrZURhdGVEYXlzKDMwKTtcbiAgICBjb25zb2xlLmxvZyhcImlzIHRoaXMgbW9udGhcIik7XG4gICAgcmV0dXJuIGRhdGVzO1xuICB9XG59XG5leHBvcnQgZnVuY3Rpb24gbWFrZURhdGVIcnMoaHJzQmFjaykge1xuICBpZiAoaHJzQmFjayA9PSAwKSB7XG4gICAgbGV0IGR0ID0gbmV3IERhdGUobmV3IERhdGUoKS50b1VUQ1N0cmluZygpKTtcbiAgICBkdCA9IGR0LnRvSVNPU3RyaW5nKCk7XG4gICAgcmV0dXJuIGR0O1xuICB9IGVsc2Uge1xuICAgIGxldCBkdCA9IG5ldyBEYXRlKG5ldyBEYXRlKCkudG9VVENTdHJpbmcoKSk7XG4gICAgZHQuc2V0SG91cnMoZHQuZ2V0SG91cnMoKSAtIGhyc0JhY2spO1xuICAgIGR0ID0gZHQudG9JU09TdHJpbmcoKTtcbiAgICByZXR1cm4gZHQ7XG4gIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBtYWtlRGF0ZURheXMobnVtKSB7XG4gIGxldCBkdCA9IG5ldyBEYXRlKG5ldyBEYXRlKCkudG9VVENTdHJpbmcoKSk7XG4gIGR0LnNldERhdGUoZHQuZ2V0RGF0ZSgpIC0gbnVtKTtcbiAgZHQgPSBkdC50b0lTT1N0cmluZygpO1xuICBjb25zb2xlLmxvZyhcImdldHRpbmcgZGF5cyBiYWNrXCIpO1xuICByZXR1cm4gZHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjQ29tbWlzc2lvbihwcmljZSwgc2lkZSwgcXR5LCBsZWF2ZXNRdHksIG9yZGVyVHlwZSkge1xuICBsZXQgcmVhbFF0eSA9IHF0eSAtIGxlYXZlc1F0eTtcbiAgbGV0IGNvbW1pc3Npb247XG4gIGlmIChvcmRlclR5cGUgPT0gXCJNYXJrZXRcIikge1xuICAgIGNvbW1pc3Npb24gPSAocmVhbFF0eSAqIDAuMDA3NSkgLyBwcmljZTtcbiAgICBjb21taXNzaW9uID0gY29tbWlzc2lvbiAqIC0xO1xuICB9XG4gIGlmIChvcmRlclR5cGUuaW5jbHVkZXMoXCJTdG9wXCIpKSB7XG4gICAgY29tbWlzc2lvbiA9IChyZWFsUXR5ICogMC4wMDc1KSAvIHByaWNlO1xuICAgIGNvbW1pc3Npb24gPSBjb21taXNzaW9uICogLTE7XG4gIH1cbiAgaWYgKG9yZGVyVHlwZSA9PSBcIkxpbWl0XCIpIHtcbiAgICBjb21taXNzaW9uID0gKHJlYWxRdHkgKiAwLjAwMjUpIC8gcHJpY2U7XG4gIH1cbiAgcmV0dXJuIGNvbW1pc3Npb24udG9GaXhlZCg1KTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQsIHsgVGhlbWVQcm92aWRlciB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHRoZW1lIGZyb20gXCIuLi8uLi90aGVtZVwiO1xuaW1wb3J0IENhdGVnb3J5TGlzdCBmcm9tIFwiLi4vQ2F0ZWdvcnlMaXN0XCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9IZWFkZXJcIjtcbmltcG9ydCB7IGluamVjdCB9IGZyb20gXCJtb2J4LXJlYWN0XCI7XG5pbXBvcnQgeyBvYnNlcnZlciB9IGZyb20gXCJtb2J4LXJlYWN0LWxpdGVcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENvbnRhaW5EaXZDbGlja2VkIH0gZnJvbSBcIi4uLy4uL0Rhc2hib2FyZC9UYWRlcy9UcmFkZXNcIjtcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcbmltcG9ydCB7IGZhQ2FyZXREb3duLCBmYUNhcmV0VXAgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5pbXBvcnQgeyB3aWRlRm9udCB9IGZyb20gXCIuLi8uLi9zaGFyZWQvaGVscGVyc1wiO1xuXG5leHBvcnQgY29uc3QgU3ltYm9sQ2hvb3Nlcjc2OCA9IGluamVjdChcInN0b3JlXCIpKFxuICBvYnNlcnZlcigoeyBzdG9yZSB9KSA9PiB7XG4gICAgY29uc3QgW2Ryb3Bkb3duLCBzZXREcm9wZG93bl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICBjb25zdCBzaG93RHJvcGRvd24gPSAoKSA9PiB7XG4gICAgICBpZiAoZHJvcGRvd24gPT0gZmFsc2UpIHtcbiAgICAgICAgc2V0RHJvcGRvd24odHJ1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXREcm9wZG93bihmYWxzZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGNsaWNrZWQgPSAodmFsdWUpID0+IHtcbiAgICAgIHN0b3JlLnNldFN5bWJvbCh2YWx1ZSk7XG4gICAgICBzdG9yZS5jaGFuZ2VIYXNUZW1wVGFncygpO1xuICAgICAgc2V0RHJvcGRvd24oZmFsc2UpO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPExhcHBlckNob29zZXJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgIHNob3dEcm9wZG93bigpO1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8U2V0U3ltYm9sIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiMnB4XCIgfX0+XG4gICAgICAgICAgPElubmVyU3ltYm9sQ2hvb3Nlcj5cbiAgICAgICAgICAgIDxkaXY+e3N0b3JlLnN5bWJvbH08L2Rpdj5cbiAgICAgICAgICAgIHtkcm9wZG93biA9PSB0cnVlID8gKFxuICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXG4gICAgICAgICAgICAgICAgaWNvbj17ZmFDYXJldFVwfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIjNweFwiLFxuICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogXCIzcHhcIixcbiAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCIycHhcIixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxuICAgICAgICAgICAgICAgIGljb249e2ZhQ2FyZXREb3dufVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIjNweFwiLFxuICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogXCIzcHhcIixcbiAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCIycHhcIixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L0lubmVyU3ltYm9sQ2hvb3Nlcj5cbiAgICAgICAgPC9TZXRTeW1ib2w+XG4gICAgICAgIHtkcm9wZG93biA9PSB0cnVlID8gKFxuICAgICAgICAgIDxEcm9wZG93bkxpc3RDb250YWluZXI+XG4gICAgICAgICAgICA8RHJvcGRvd25MaXN0SXRlbSBvbkNsaWNrPXsoKSA9PiBjbGlja2VkKFwiWEJUVVNEXCIpfT5cbiAgICAgICAgICAgICAgWEJUVVNEXG4gICAgICAgICAgICA8L0Ryb3Bkb3duTGlzdEl0ZW0+XG4gICAgICAgICAgICA8RHJvcGRvd25MaXN0SXRlbSBvbkNsaWNrPXsoKSA9PiBjbGlja2VkKFwiWEJUVTIwXCIpfT5cbiAgICAgICAgICAgICAgWEJUVTIwXG4gICAgICAgICAgICA8L0Ryb3Bkb3duTGlzdEl0ZW0+XG4gICAgICAgICAgICA8RHJvcGRvd25MaXN0SXRlbSBvbkNsaWNrPXsoKSA9PiBjbGlja2VkKFwiWEJUTTIwXCIpfT5cbiAgICAgICAgICAgICAgWEJUTTIwXG4gICAgICAgICAgICA8L0Ryb3Bkb3duTGlzdEl0ZW0+XG4gICAgICAgICAgPC9Ecm9wZG93bkxpc3RDb250YWluZXI+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgPC9MYXBwZXJDaG9vc2VyPlxuICAgICk7XG4gIH0pXG4pO1xuXG5leHBvcnQgY29uc3QgUG5sNzY4ID0gaW5qZWN0KFwic3RvcmVcIikoXG4gIG9ic2VydmVyKCh7IHN0b3JlIH0pID0+IHtcbiAgICBpZiAoc3RvcmUucG5sID49IDApIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxMYXBwZXIyIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjJweFwiIH19PlxuICAgICAgICAgIDxJbm5lckxhcHBlciBzdHlsZT17eyBwYWRkaW5nOiBcIjRweFwiIH19PlxuICAgICAgICAgICAge3N0b3JlLnBubC50b0ZpeGVkKDQpICsgXCJ4YnRcIn1cbiAgICAgICAgICA8L0lubmVyTGFwcGVyPlxuICAgICAgICA8L0xhcHBlcjI+XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8TGFwcGVyMyBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIycHhcIiB9fT5cbiAgICAgICAgICA8SW5uZXJMYXBwZXIgc3R5bGU9e3sgcGFkZGluZzogXCI0cHhcIiB9fT5cbiAgICAgICAgICAgIHtzdG9yZS5wbmwudG9GaXhlZCg0KSArIFwieGJ0XCJ9XG4gICAgICAgICAgPC9Jbm5lckxhcHBlcj5cbiAgICAgICAgPC9MYXBwZXIzPlxuICAgICAgKTtcbiAgICB9XG4gIH0pXG4pO1xuXG5jb25zdCBTaWRlYmFyID0gaW5qZWN0KFwic3RvcmVcIikoXG4gIG9ic2VydmVyKCh7IHN0b3JlIH0pID0+IHtcbiAgICBjb25zdCBbZHJvcGRvd24sIHNldERyb3Bkb3duXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IGNsaWNrZWQgPSAodmFsdWUpID0+IHtcbiAgICAgIHN0b3JlLnNldFN5bWJvbCh2YWx1ZSk7XG4gICAgICBzdG9yZS5jaGFuZ2VIYXNUZW1wVGFncygpO1xuICAgICAgc2V0RHJvcGRvd24oZmFsc2UpO1xuICAgIH07XG5cbiAgICBjb25zdCBzaG93RHJvcGRvd24gPSAoKSA9PiB7XG4gICAgICBpZiAoZHJvcGRvd24gPT0gZmFsc2UpIHtcbiAgICAgICAgc2V0RHJvcGRvd24odHJ1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXREcm9wZG93bihmYWxzZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWUoZmFsc2UpfT5cbiAgICAgICAgPExhcHBlckNvbnRhaW5lcj5cbiAgICAgICAgICA8TGFwcGVyNFxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBzaG93RHJvcGRvd24oKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFNldFN5bWJvbD5cbiAgICAgICAgICAgICAge3N0b3JlLnN5bWJvbH1cbiAgICAgICAgICAgICAge2Ryb3Bkb3duID09IHRydWUgPyAoXG4gICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxuICAgICAgICAgICAgICAgICAgaWNvbj17ZmFDYXJldFVwfVxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIjRweFwiLFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBcIjNweFwiLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb25cbiAgICAgICAgICAgICAgICAgIGljb249e2ZhQ2FyZXREb3dufVxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIjRweFwiLFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBcIjNweFwiLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9TZXRTeW1ib2w+XG4gICAgICAgICAgICB7ZHJvcGRvd24gPT0gdHJ1ZSA/IChcbiAgICAgICAgICAgICAgPERyb3Bkb3duTGlzdENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8RHJvcGRvd25MaXN0SXRlbSBvbkNsaWNrPXsoKSA9PiBjbGlja2VkKFwiWEJUVVNEXCIpfT5cbiAgICAgICAgICAgICAgICAgIFhCVFVTRFxuICAgICAgICAgICAgICAgIDwvRHJvcGRvd25MaXN0SXRlbT5cbiAgICAgICAgICAgICAgICA8RHJvcGRvd25MaXN0SXRlbSBvbkNsaWNrPXsoKSA9PiBjbGlja2VkKFwiWEJUVTIwXCIpfT5cbiAgICAgICAgICAgICAgICAgIFhCVFUyMFxuICAgICAgICAgICAgICAgIDwvRHJvcGRvd25MaXN0SXRlbT5cbiAgICAgICAgICAgICAgICA8RHJvcGRvd25MaXN0SXRlbSBvbkNsaWNrPXsoKSA9PiBjbGlja2VkKFwiWEJUTTIwXCIpfT5cbiAgICAgICAgICAgICAgICAgIFhCVE0yMFxuICAgICAgICAgICAgICAgIDwvRHJvcGRvd25MaXN0SXRlbT5cbiAgICAgICAgICAgICAgPC9Ecm9wZG93bkxpc3RDb250YWluZXI+XG4gICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICA8L0xhcHBlcjQ+XG4gICAgICAgICAgPExhcHBlcj5cbiAgICAgICAgICAgIDxDYXRlZ29yeUxpc3QgLz5cbiAgICAgICAgICA8L0xhcHBlcj5cbiAgICAgICAgICB7c3RvcmUucG5sID49IDAgPyAoXG4gICAgICAgICAgICA8TGFwcGVyMj5cbiAgICAgICAgICAgICAgPElubmVyTGFwcGVyPntzdG9yZS5wbmwudG9GaXhlZCg0KSArIFwieGJ0XCJ9PC9Jbm5lckxhcHBlcj5cbiAgICAgICAgICAgIDwvTGFwcGVyMj5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPExhcHBlcjM+XG4gICAgICAgICAgICAgIDxJbm5lckxhcHBlcj57c3RvcmUucG5sLnRvRml4ZWQoNCkgKyBcInhidFwifTwvSW5uZXJMYXBwZXI+XG4gICAgICAgICAgICA8L0xhcHBlcjM+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9MYXBwZXJDb250YWluZXI+XG4gICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgKTtcbiAgfSlcbik7XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGViYXI7XG5jb25zdCBMYXBwZXJDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tbGVmdDogMjRweDtcbmA7XG5cbmNvbnN0IElubmVyU3ltYm9sQ2hvb3NlciA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDY1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHBhZGRpbmctdG9wOiA0cHg7XG5gO1xuXG5jb25zdCBMYXBwZXIgPSBzdHlsZWQuYXNpZGVgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXgtYmFzaXM6IDI0MHB4O1xuXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmZvcmVncm91bmR9O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyNTI5O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5gO1xuY29uc3QgSW5uZXJMYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiBhdXRvO1xuYDtcblxuY29uc3QgTGFwcGVyMiA9IHN0eWxlZC5hc2lkZWBcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuZm9yZWdyb3VuZH07XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICBtYXJnaW4tbGVmdDogMDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbmA7XG5jb25zdCBMYXBwZXJDaG9vc2VyID0gc3R5bGVkLmFzaWRlYFxuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5mb3JlZ3JvdW5kfTtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG5gO1xuXG5jb25zdCBMYXBwZXIzID0gc3R5bGVkLmFzaWRlYFxuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5mb3JlZ3JvdW5kfTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBtYXJnaW4tbGVmdDogMDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB3aWR0aDogMTAwJTtcbmA7XG5cbmNvbnN0IExhcHBlcjQgPSBzdHlsZWQuYXNpZGVgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuZm9yZWdyb3VuZH07XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTI1Mjk7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbmA7XG5leHBvcnQgY29uc3QgU2V0U3ltYm9sID0gc3R5bGVkLmRpdmBcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICAke3dpZGVGb250fVxuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjUyNztcbiAgaGVpZ2h0OiAxMDAlO1xuICA6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuYDtcblxuY29uc3QgRHJvcGRvd25Db250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBoZWlnaHQ6IDEwMHB4O1xuYDtcbmNvbnN0IERyb3Bkb3duTGlzdENvbnRhaW5lciA9IHN0eWxlZC51bGBcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi1sZWZ0OiAtOHB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTI1Mjc7XG5gO1xuY29uc3QgRHJvcGRvd25MaXN0SXRlbSA9IHN0eWxlZC5saWBcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyNTI5O1xuICBwYWRkaW5nOiAycHggMTVweDtcbiAgbWFyZ2luOiA0cHggMDtcbiAgJHt3aWRlRm9udH1cbiAgOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgfVxuYDtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSBcIm1vYngtcmVhY3RcIjtcbmltcG9ydCB7IG9ic2VydmVyIH0gZnJvbSBcIm1vYngtcmVhY3QtbGl0ZVwiO1xuaW1wb3J0IHsgd2lkZUZvbnQgfSBmcm9tIFwiLi4vc2hhcmVkL2hlbHBlcnNcIjtcbmltcG9ydCBEYXRlcGlja2VyIGZyb20gXCIuL0RhdGVwaWNrZXJcIjtcblxuY29uc3QgU2lkZWJhckNhdGVnb3J5TGlzdCA9IGluamVjdChcInN0b3JlXCIpKFxuICBvYnNlcnZlcigoeyBzdG9yZSB9KSA9PiB7XG4gICAgY29uc3QgW2N1c3RvbUNsaWNrZWQsIHNldEN1c3RvbUNsaWNrZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2xpY2sodmFsdWUpIHtcbiAgICAgIHN0b3JlLnJlc2V0UG5sKCk7XG4gICAgICBzdG9yZS5jaGFuZ2VEYXRlKHZhbHVlKTtcbiAgICAgIGNvbnNvbGUubG9nKHN0b3JlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVDdXN0b21DbGlja2VkKCkge1xuICAgICAgaWYgKGN1c3RvbUNsaWNrZWQgPT0gdHJ1ZSkge1xuICAgICAgICBzZXRDdXN0b21DbGlja2VkKGZhbHNlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldEN1c3RvbUNsaWNrZWQodHJ1ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxDYXRlZ29yeUxpc3Q+XG4gICAgICAgICAge3N0b3JlLmRhdGUgPT0gXCJUb2RheVwiICYmIGN1c3RvbUNsaWNrZWQgPT0gZmFsc2UgPyAoXG4gICAgICAgICAgICA8SXRlbUFjdGl2ZSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljayhcIlRvZGF5XCIpfT5Ub2RheTwvSXRlbUFjdGl2ZT5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPEl0ZW0gb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soXCJUb2RheVwiKX0+VG9kYXk8L0l0ZW0+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7c3RvcmUuZGF0ZSA9PSBcIlllc3RlcmRheVwiICYmIGN1c3RvbUNsaWNrZWQgPT0gZmFsc2UgPyAoXG4gICAgICAgICAgICA8SXRlbUFjdGl2ZSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljayhcIlllc3RlcmRheVwiKX0+XG4gICAgICAgICAgICAgIFllc3RlcmRheVxuICAgICAgICAgICAgPC9JdGVtQWN0aXZlPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8SXRlbSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljayhcIlllc3RlcmRheVwiKX0+WWVzdGVyZGF5PC9JdGVtPlxuICAgICAgICAgICl9XG4gICAgICAgICAge3N0b3JlLmRhdGUgPT0gXCJUaGlzIFdlZWtcIiAmJiBjdXN0b21DbGlja2VkID09IGZhbHNlID8gKFxuICAgICAgICAgICAgPEl0ZW1BY3RpdmUgb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soXCJUaGlzIFdlZWtcIil9PlxuICAgICAgICAgICAgICBUaGlzIFdlZWtcbiAgICAgICAgICAgIDwvSXRlbUFjdGl2ZT5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPEl0ZW0gb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soXCJUaGlzIFdlZWtcIil9PlRoaXMgV2VlazwvSXRlbT5cbiAgICAgICAgICApfVxuICAgICAgICAgIHtzdG9yZS5kYXRlID09IFwiVGhpcyBNb250aFwiICYmIGN1c3RvbUNsaWNrZWQgPT0gZmFsc2UgPyAoXG4gICAgICAgICAgICA8SXRlbUFjdGl2ZSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljayhcIlRoaXMgTW9udGhcIil9PlxuICAgICAgICAgICAgICBUaGlzIE1vbnRoXG4gICAgICAgICAgICA8L0l0ZW1BY3RpdmU+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxJdGVtIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKFwiVGhpcyBNb250aFwiKX0+VGhpcyBNb250aDwvSXRlbT5cbiAgICAgICAgICApfVxuXG4gICAgICAgICAge2N1c3RvbUNsaWNrZWQgPT0gdHJ1ZSB8fCBzdG9yZS5kYXRlID09IFwiQ3VzdG9tXCIgPyAoXG4gICAgICAgICAgICA8SXRlbUFjdGl2ZSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDdXN0b21DbGlja2VkKCl9PlxuICAgICAgICAgICAgICBDdXN0b21cbiAgICAgICAgICAgIDwvSXRlbUFjdGl2ZT5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPEl0ZW0gb25DbGljaz17KCkgPT4gaGFuZGxlQ3VzdG9tQ2xpY2tlZCgpfT5DdXN0b208L0l0ZW0+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9DYXRlZ29yeUxpc3Q+XG4gICAgICAgIHtjdXN0b21DbGlja2VkID8gPFBvcHVwIC8+IDogbnVsbH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH0pXG4pO1xuXG5jb25zdCBQb3B1cCA9ICgpID0+IHtcbiAgY29uc3QgW2VudGVyZWQsIHNldEVudGVyZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICByZXR1cm4gKFxuICAgIDxQb3B1cFRvcD5cbiAgICAgIDxQb3BDb250YWluPlxuICAgICAgICA8Um93MT5cbiAgICAgICAgICA8UG9wTGFiZWw+c3RhcnQ6PC9Qb3BMYWJlbD5cbiAgICAgICAgICA8RGF0ZXBpY2tlciBzdGFydD17dHJ1ZX0gc2V0PXtlbnRlcmVkfSAvPlxuICAgICAgICA8L1JvdzE+XG4gICAgICAgIDxSb3cxPlxuICAgICAgICAgIDxQb3BMYWJlbD5lbmQ6PC9Qb3BMYWJlbD5cbiAgICAgICAgICA8RGF0ZXBpY2tlciBzdGFydD17ZmFsc2V9IHNldD17ZW50ZXJlZH0gLz5cbiAgICAgICAgPC9Sb3cxPlxuICAgICAgICA8UG9wRW50ZXIgb25DbGljaz17KCkgPT4gc2V0RW50ZXJlZCh0cnVlKX0+U2V0IERhdGU8L1BvcEVudGVyPlxuICAgICAgPC9Qb3BDb250YWluPlxuICAgIDwvUG9wdXBUb3A+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyQ2F0ZWdvcnlMaXN0O1xuXG5jb25zdCBSb3cxID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuYDtcbmNvbnN0IFBvcENvbnRhaW4gPSBzdHlsZWQuZGl2YFxuICBtYXJnaW46IDVweDtcbmA7XG5jb25zdCBQb3BMYWJlbCA9IHN0eWxlZC5kaXZgXG4gIGNvbG9yOiAjZmZmO1xuYDtcbmNvbnN0IFBvcEVudGVyID0gc3R5bGVkLmJ1dHRvbmBcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiAycHg7XG4gIGJvcmRlci1yYWRpdXM6IDFweDtcbmA7XG5cbmNvbnN0IFBvcHVwVG9wID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xuICB6LWluZGV4OiAxO1xuICBtYXJnaW46IDVweDtcbiAgcGFkZGluZzogMnB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG5gO1xuXG5jb25zdCBQb3B1cEl0ZW0gPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY3Vyc29yOiBwb2ludGVyO1xuYDtcblxuY29uc3QgQ2F0ZWdvcnlMaXN0ID0gc3R5bGVkLm5hdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbmA7XG5cbmNvbnN0IEl0ZW0gPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiAxMnB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5ub3JtYWxUZXh0fTtcbiAgY29sb3I6IHdoaXRlO1xuICA6OmFmdGVyIHtcbiAgICBsZWZ0OiAtMXB4O1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYWNjZW50fTtcbiAgfVxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGNvbG9yOiAjMjEyNTI5O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuYDtcbmNvbnN0IEl0ZW1BY3RpdmUgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiAxMnB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5ub3JtYWxUZXh0fTtcbiAgY29sb3I6IHdoaXRlO1xuICA6OmFmdGVyIHtcbiAgICBsZWZ0OiAtMXB4O1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYWNjZW50fTtcbiAgfVxuXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGNvbG9yOiAjMjEyNTI5O1xuICBjdXJzb3I6IHBvaW50ZXI7XG5gO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IERhdGVQaWNrZXIgZnJvbSBcInJlYWN0LWRhdGVwaWNrZXJcIjtcbmltcG9ydCB7IGluamVjdCwgb2JzZXJ2ZXIgfSBmcm9tIFwibW9ieC1yZWFjdFwiO1xuXG5pbXBvcnQgXCJyZWFjdC1kYXRlcGlja2VyL2Rpc3QvcmVhY3QtZGF0ZXBpY2tlci5jc3NcIjtcbmltcG9ydCBcIi4vZGF0ZXBpY2tlci1hZGRpdGlvbmFsLmNzc1wiO1xuaW1wb3J0IHsgcmVhY3Rpb24gfSBmcm9tIFwibW9ieFwiO1xuXG5AaW5qZWN0KFtcInN0b3JlXCJdKVxuQG9ic2VydmVyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeGFtcGxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGRhdGU6IG5ldyBEYXRlKCksXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHt9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5kYXRlUmVhY3Rpb24gPSByZWFjdGlvbihcbiAgICAgICgpID0+IHRoaXMucHJvcHMuc3RvcmUuc3RhcnREYXRlLFxuICAgICAgKG5vdGlmaWNhdGlvbnMsIHJlYWN0aW9uKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLnN0b3JlLnN0YXJ0RGF0ZSAhPT0gbnVsbCkge1xuICAgICAgICAgIGlmICh0aGlzLnByb3BzLnN0YXJ0ID09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRlOiBuZXcgRGF0ZSh0aGlzLnByb3BzLnN0b3JlLnN0YXJ0RGF0ZSkgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRlOiBuZXcgRGF0ZSh0aGlzLnByb3BzLnN0b3JlLmVuZERhdGUpIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UgPSAoZGF0ZSkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRlOiBkYXRlIH0pO1xuICAgIGNvbnNvbGUubG9nKGRhdGUsIFwiVEhJUyBJUyBEQVRFXCIpO1xuICB9O1xuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICBjb25zb2xlLmxvZyhcImp1c3QgdXBkYXRlZFwiKTtcbiAgICBpZiAodGhpcy5wcm9wcy5zZXQgPT0gdHJ1ZSkge1xuICAgICAgY29uc29sZS5sb2coXCJub3QgZXF1YWxcIik7XG4gICAgICBpZiAodGhpcy5wcm9wcy5zdGFydCA9PSB0cnVlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwid2FzIHRydWVcIik7XG4gICAgICAgIGxldCBmaXJzdERhdGUgPSB0aGlzLnN0YXRlLmRhdGUudG9JU09TdHJpbmcoKTtcbiAgICAgICAgbGV0IG11bHRpRGF0ZSA9IGZpcnN0RGF0ZS5zcGxpdChcIlRcIik7XG4gICAgICAgIHRoaXMucHJvcHMuc3RvcmUuc3RhcnREYXRlID0gbXVsdGlEYXRlWzBdICsgXCJUMDA6MDA6MDAuMDAwWlwiO1xuICAgICAgICB0aGlzLnByb3BzLnN0b3JlLmRhdGUgPSBcIkN1c3RvbVwiO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMucHJvcHMuc3RhcnQgPT0gZmFsc2UpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJ3YXMgZmFsc2VcIik7XG4gICAgICAgIGxldCBmaXJzdERhdGUgPSB0aGlzLnN0YXRlLmRhdGUudG9JU09TdHJpbmcoKTtcbiAgICAgICAgbGV0IG11bHRpRGF0ZSA9IGZpcnN0RGF0ZS5zcGxpdChcIlRcIik7XG4gICAgICAgIHRoaXMucHJvcHMuc3RvcmUuZW5kRGF0ZSA9IG11bHRpRGF0ZVswXSArIFwiVDI0OjAwOjAwLjAwMFpcIjtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wcm9wcy5zdG9yZS5lbmREYXRlKTtcbiAgICAgICAgdGhpcy5wcm9wcy5zdG9yZS5kYXRlID0gXCJDdXN0b21cIjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxEYXRlUGlja2VyIHNlbGVjdGVkPXt0aGlzLnN0YXRlLmRhdGV9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gLz5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgd2lkZUZvbnQgfSBmcm9tIFwiLi4vc2hhcmVkL2hlbHBlcnNcIjtcblxuY29uc3QgU2lkZWJhckNhdGVnb3J5TGlzdEhlYWRlciA9ICgpID0+IDxIZWFkZXI+Q2hhbmdlIERhdGU8L0hlYWRlcj47XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGViYXJDYXRlZ29yeUxpc3RIZWFkZXI7XG5cbmNvbnN0IEhlYWRlciA9IHN0eWxlZC5zcGFuYFxuICAke3dpZGVGb250fVxuICBmb250LXdlaWdodDo2MDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAxMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLm11dGVkVGV4dH07XG4gIGNvbG9yOiB3aGl0ZTtcbmA7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkLCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB0aGVtZSBmcm9tIFwiLi4vdGhlbWVcIjtcbmltcG9ydCBDYXRlZ29yeUxpc3QgZnJvbSBcIi4vQ2F0ZWdvcnlMaXN0XCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiO1xuaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSBcIm1vYngtcmVhY3RcIjtcbmltcG9ydCB7IG9ic2VydmVyIH0gZnJvbSBcIm1vYngtcmVhY3QtbGl0ZVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ29udGFpbkRpdkNsaWNrZWQgfSBmcm9tIFwiLi4vRGFzaGJvYXJkL1RhZGVzL1RyYWRlc1wiO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xuaW1wb3J0IHsgZmFDYXJldERvd24sIGZhQ2FyZXRVcCB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcbmltcG9ydCB7IHdpZGVGb250IH0gZnJvbSBcIi4uL3NoYXJlZC9oZWxwZXJzXCI7XG5cbmV4cG9ydCBjb25zdCBTeW1ib2xDaG9vc2VyID0gaW5qZWN0KFwic3RvcmVcIikoXG4gIG9ic2VydmVyKCh7IHN0b3JlIH0pID0+IHtcbiAgICBjb25zdCBbZHJvcGRvd24sIHNldERyb3Bkb3duXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IHNob3dEcm9wZG93biA9ICgpID0+IHtcbiAgICAgIGlmIChkcm9wZG93biA9PSBmYWxzZSkge1xuICAgICAgICBzZXREcm9wZG93bih0cnVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldERyb3Bkb3duKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgY2xpY2tlZCA9ICh2YWx1ZSkgPT4ge1xuICAgICAgc3RvcmUuc2V0U3ltYm9sKHZhbHVlKTtcbiAgICAgIHN0b3JlLmNoYW5nZUhhc1RlbXBUYWdzKCk7XG4gICAgICBzZXREcm9wZG93bihmYWxzZSk7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICA8TGFwcGVyMlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgc2hvd0Ryb3Bkb3duKCk7XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxTZXRTeW1ib2w+XG4gICAgICAgICAge3N0b3JlLnN5bWJvbH1cbiAgICAgICAgICB7ZHJvcGRvd24gPT0gdHJ1ZSA/IChcbiAgICAgICAgICAgIDxGb250QXdlc29tZUljb25cbiAgICAgICAgICAgICAgaWNvbj17ZmFDYXJldFVwfVxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIjNweFwiLFxuICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IFwiM3B4XCIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXG4gICAgICAgICAgICAgIGljb249e2ZhQ2FyZXREb3dufVxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIjNweFwiLFxuICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IFwiM3B4XCIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvU2V0U3ltYm9sPlxuICAgICAgICB7ZHJvcGRvd24gPT0gdHJ1ZSA/IChcbiAgICAgICAgICA8RHJvcGRvd25MaXN0Q29udGFpbmVyPlxuICAgICAgICAgICAgPERyb3Bkb3duTGlzdEl0ZW0gb25DbGljaz17KCkgPT4gY2xpY2tlZChcIlhCVFVTRFwiKX0+XG4gICAgICAgICAgICAgIFhCVFVTRFxuICAgICAgICAgICAgPC9Ecm9wZG93bkxpc3RJdGVtPlxuICAgICAgICAgICAgPERyb3Bkb3duTGlzdEl0ZW0gb25DbGljaz17KCkgPT4gY2xpY2tlZChcIlhCVFUyMFwiKX0+XG4gICAgICAgICAgICAgIFhCVFUyMFxuICAgICAgICAgICAgPC9Ecm9wZG93bkxpc3RJdGVtPlxuICAgICAgICAgICAgPERyb3Bkb3duTGlzdEl0ZW0gb25DbGljaz17KCkgPT4gY2xpY2tlZChcIlhCVE0yMFwiKX0+XG4gICAgICAgICAgICAgIFhCVE0yMFxuICAgICAgICAgICAgPC9Ecm9wZG93bkxpc3RJdGVtPlxuICAgICAgICAgIDwvRHJvcGRvd25MaXN0Q29udGFpbmVyPlxuICAgICAgICApIDogbnVsbH1cbiAgICAgIDwvTGFwcGVyMj5cbiAgICApO1xuICB9KVxuKTtcblxuZXhwb3J0IGNvbnN0IFBubCA9IGluamVjdChcInN0b3JlXCIpKFxuICBvYnNlcnZlcigoeyBzdG9yZSB9KSA9PiB7XG4gICAgaWYgKHN0b3JlLnBubCA+PSAwKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8TGFwcGVyMj5cbiAgICAgICAgICA8SW5uZXJMYXBwZXIgc3R5bGU9e3sgcGFkZGluZzogXCI0cHhcIiB9fT5cbiAgICAgICAgICAgIHtzdG9yZS5wbmwudG9GaXhlZCg0KSArIFwieGJ0XCJ9XG4gICAgICAgICAgPC9Jbm5lckxhcHBlcj5cbiAgICAgICAgPC9MYXBwZXIyPlxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPExhcHBlcjM+XG4gICAgICAgICAgPElubmVyTGFwcGVyIHN0eWxlPXt7IHBhZGRpbmc6IFwiNHB4XCIgfX0+XG4gICAgICAgICAgICB7c3RvcmUucG5sLnRvRml4ZWQoNCkgKyBcInhidFwifVxuICAgICAgICAgIDwvSW5uZXJMYXBwZXI+XG4gICAgICAgIDwvTGFwcGVyMz5cbiAgICAgICk7XG4gICAgfVxuICB9KVxuKTtcblxuY29uc3QgU2lkZWJhciA9IGluamVjdChcInN0b3JlXCIpKFxuICBvYnNlcnZlcigoeyBzdG9yZSB9KSA9PiB7XG4gICAgY29uc3QgW2Ryb3Bkb3duLCBzZXREcm9wZG93bl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICBjb25zdCBjbGlja2VkID0gKHZhbHVlKSA9PiB7XG4gICAgICBzdG9yZS5zZXRTeW1ib2wodmFsdWUpO1xuICAgICAgc3RvcmUuY2hhbmdlSGFzVGVtcFRhZ3MoKTtcbiAgICAgIHNldERyb3Bkb3duKGZhbHNlKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2hvd0Ryb3Bkb3duID0gKCkgPT4ge1xuICAgICAgaWYgKGRyb3Bkb3duID09IGZhbHNlKSB7XG4gICAgICAgIHNldERyb3Bkb3duKHRydWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0RHJvcGRvd24oZmFsc2UpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lKGZhbHNlKX0+XG4gICAgICAgIDxMYXBwZXJDb250YWluZXI+XG4gICAgICAgICAgPExhcHBlcjRcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgc2hvd0Ryb3Bkb3duKCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxTZXRTeW1ib2w+XG4gICAgICAgICAgICAgIHtzdG9yZS5zeW1ib2x9XG4gICAgICAgICAgICAgIHtkcm9wZG93biA9PSB0cnVlID8gKFxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb25cbiAgICAgICAgICAgICAgICAgIGljb249e2ZhQ2FyZXRVcH1cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogXCI0cHhcIixcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogXCIzcHhcIixcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXG4gICAgICAgICAgICAgICAgICBpY29uPXtmYUNhcmV0RG93bn1cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogXCI0cHhcIixcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogXCIzcHhcIixcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvU2V0U3ltYm9sPlxuICAgICAgICAgICAge2Ryb3Bkb3duID09IHRydWUgPyAoXG4gICAgICAgICAgICAgIDxEcm9wZG93bkxpc3RDb250YWluZXI+XG4gICAgICAgICAgICAgICAgPERyb3Bkb3duTGlzdEl0ZW0gb25DbGljaz17KCkgPT4gY2xpY2tlZChcIlhCVFVTRFwiKX0+XG4gICAgICAgICAgICAgICAgICBYQlRVU0RcbiAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgPERyb3Bkb3duTGlzdEl0ZW0gb25DbGljaz17KCkgPT4gY2xpY2tlZChcIlhCVFUyMFwiKX0+XG4gICAgICAgICAgICAgICAgICBYQlRVMjBcbiAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgPERyb3Bkb3duTGlzdEl0ZW0gb25DbGljaz17KCkgPT4gY2xpY2tlZChcIlhCVE0yMFwiKX0+XG4gICAgICAgICAgICAgICAgICBYQlRNMjBcbiAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duTGlzdEl0ZW0+XG4gICAgICAgICAgICAgIDwvRHJvcGRvd25MaXN0Q29udGFpbmVyPlxuICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgPC9MYXBwZXI0PlxuICAgICAgICAgIDxMYXBwZXI+XG4gICAgICAgICAgICA8Q2F0ZWdvcnlMaXN0IC8+XG4gICAgICAgICAgPC9MYXBwZXI+XG4gICAgICAgICAge3N0b3JlLnBubCA+PSAwID8gKFxuICAgICAgICAgICAgPExhcHBlcjI+XG4gICAgICAgICAgICAgIDxJbm5lckxhcHBlcj57c3RvcmUucG5sLnRvRml4ZWQoNCkgKyBcInhidFwifTwvSW5uZXJMYXBwZXI+XG4gICAgICAgICAgICA8L0xhcHBlcjI+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxMYXBwZXIzPlxuICAgICAgICAgICAgICA8SW5uZXJMYXBwZXI+e3N0b3JlLnBubC50b0ZpeGVkKDQpICsgXCJ4YnRcIn08L0lubmVyTGFwcGVyPlxuICAgICAgICAgICAgPC9MYXBwZXIzPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvTGFwcGVyQ29udGFpbmVyPlxuICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgICk7XG4gIH0pXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyO1xuY29uc3QgTGFwcGVyQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLWxlZnQ6IDI0cHg7XG5gO1xuXG5jb25zdCBMYXBwZXIgPSBzdHlsZWQuYXNpZGVgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXgtYmFzaXM6IDI0MHB4O1xuXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmZvcmVncm91bmR9O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyNTI5O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5gO1xuY29uc3QgSW5uZXJMYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiBhdXRvO1xuYDtcblxuY29uc3QgTGFwcGVyMiA9IHN0eWxlZC5hc2lkZWBcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuZm9yZWdyb3VuZH07XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG5gO1xuXG5jb25zdCBMYXBwZXIzID0gc3R5bGVkLmFzaWRlYFxuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5mb3JlZ3JvdW5kfTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBtYXJnaW46IGF1dG87XG5gO1xuXG5jb25zdCBMYXBwZXI0ID0gc3R5bGVkLmFzaWRlYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmZvcmVncm91bmR9O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyNTI5O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5gO1xuZXhwb3J0IGNvbnN0IFNldFN5bWJvbCA9IHN0eWxlZC5kaXZgXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgJHt3aWRlRm9udH1cbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTI1Mjc7XG4gIDpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5gO1xuXG5jb25zdCBEcm9wZG93bkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGhlaWdodDogMTAwcHg7XG5gO1xuY29uc3QgRHJvcGRvd25MaXN0Q29udGFpbmVyID0gc3R5bGVkLnVsYFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLWxlZnQ6IC04cHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjUyNztcbmA7XG5jb25zdCBEcm9wZG93bkxpc3RJdGVtID0gc3R5bGVkLmxpYFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTI1Mjk7XG4gIHBhZGRpbmc6IDJweCAxNXB4O1xuICBtYXJnaW46IDRweCAwO1xuICAke3dpZGVGb250fVxuICA6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB9XG5gO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuY29uc3QgRm9ybVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3JkZXI6IDFweCBzb2xpZCAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJvcmRlcn07XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgd2lkdGg6IDM3NXB4O1xuICBwYWRkaW5nOiAyNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmZvcmVncm91bmR9O1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gIH1cblxuICBAbWVkaWEgKG1heC13aWR0aDogJHtwcm9wcyA9PiAocHJvcHMud2lkZSA/IFwiNjAwcHhcIiA6IFwiMzc1cHhcIil9KSB7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm1XcmFwcGVyO1xuXG4vLyBtYXgtd2lkdGg6ICR7cHJvcHMgPT4gKHByb3BzLndpZGUgPyBcIjYwMHB4XCIgOiBcIjM3NXB4XCIpfTtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG4vLyBpbXBvcnQgeyB0cmFuc2l0aW9uIH0gZnJvbSAnLi4vaGVscGVycyc7XG5cbi8vICR7dHJhbnNpdGlvbn07XG5jb25zdCBJbnB1dCA9IHN0eWxlZC5pbnB1dGBcbiAgLS1ib3JkZXI6ICR7KHByb3BzKSA9PlxuICAgIHByb3BzLmVycm9yID8gcHJvcHMudGhlbWUuZXJyb3IgOiBwcm9wcy50aGVtZS5hY2NlbnR9O1xuICAtLXNoYWRvdzogJHsocHJvcHMpID0+XG4gICAgcHJvcHMuZXJyb3IgPyBwcm9wcy50aGVtZS5lcnJvciArIFwiNGRcIiA6IHByb3BzLnRoZW1lLmFjY2VudCArIFwiNGRcIn07XG5cbiAgZGlzcGxheTogYmxvY2s7XG4gICR7KHByb3BzKSA9PlxuICAgIHByb3BzLmVycm9yXG4gICAgICA/IGBcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpXG4gICAgYFxuICAgICAgOiBgXG4gICAgYm9yZGVyOiAxcHggc29saWQgJHtwcm9wcy50aGVtZS5ib3JkZXJ9XG4gIGB9O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5pbnB1dEJhY2tncm91bmR9O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUubm9ybWFsVGV4dH07XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHJlc2l6ZTogdmVydGljYWw7XG5cbiAgOmhvdmVyLFxuICA6Zm9jdXMge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG4gIH1cblxuICA6Zm9jdXMge1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDJweCB2YXIoLS1zaGFkb3cpO1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBJbnB1dDtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBzbWFsbEZvbnQgfSBmcm9tIFwiLi4vc2hhcmVkL2hlbHBlcnNcIjtcblxuY29uc3QgTGFiZWwgPSBzdHlsZWQubGFiZWxgXG4gICR7c21hbGxGb250fTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubXV0ZWRUZXh0fTtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IExhYmVsO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IHRyYW5zaXRpb24sIHdpZGVGb250IH0gZnJvbSBcIi4vaGVscGVyc1wiO1xuXG5jb25zdCBCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICAke3RyYW5zaXRpb24oXCJmaWx0ZXJcIiwgXCJib3gtc2hhZG93XCIpfTtcbiAgJHt3aWRlRm9udH07XG5cbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHBhZGRpbmc6IDhweCAyNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmFjY2VudH07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIG91dGxpbmU6IG5vbmU7XG5cbiAgOmhvdmVyIHtcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMTEwJSk7XG4gIH1cblxuICA6YWN0aXZlIHtcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoOTAlKTtcbiAgfVxuXG4gIDpmb2N1cyB7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMnB4ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYWNjZW50ICsgXCI0ZFwifTtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xuIiwiaW1wb3J0IHsgY3NzLCBrZXlmcmFtZXMgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuZXhwb3J0IGNvbnN0IHNtYWxsRm9udCA9IGNzc2BcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuYDtcblxuZXhwb3J0IGNvbnN0IHdpZGVGb250ID0gY3NzYFxuICAke3NtYWxsRm9udH07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG5gO1xuXG5jb25zdCBmYWRlS2V5ZnJhbWVzID0ga2V5ZnJhbWVzYFxuICBmcm9tIHsgb3BhY2l0eTogMDsgfVxuICB0byB7IG9wYWNpdHk6IDE7IH1cbmA7XG5cbmV4cG9ydCBjb25zdCBmYWRlID0gY3NzYFxuICBhbmltYXRpb246ICR7ZmFkZUtleWZyYW1lc30gMC4yNXM7XG5gO1xuXG5leHBvcnQgY29uc3QgdHJhbnNpdGlvbiA9IHByb3BzID0+IGNzc2BcbiAgdHJhbnNpdGlvbjogYWxsICR7cHJvcHMuc2xvdyA/IFwiMC4zc1wiIDogXCIwLjE1c1wifSBlYXNlO1xuYDtcblxuZXhwb3J0IGNvbnN0IGhlYWRlckl0ZW0gPSBjc3NgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBwYWRkaW5nOiAwIDE2cHg7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA0MjVweCkge1xuICAgIHBhZGRpbmc6IDAgOHB4O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgbGluayA9IHByb3BzID0+IGNzc2BcbiAgJHt0cmFuc2l0aW9ufTtcbiAgdGV4dC11bmRlcmxpbmUtcG9zaXRpb246IHVuZGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLm5vcm1hbFRleHR9O1xuICA6aG92ZXIge1xuICAgICR7cHJvcHMudW5kZXJsaW5lICYmIFwidGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmVcIn07XG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYWNjZW50fTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IG92ZXJmbG93ID0gY3NzYFxuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbmA7XG4iLCJjb25zdCBjb25zdGFudHMgPSB7XG4gIGVycm9yOiBcIiNmNTIyMmRcIixcbiAgdm90ZTogXCIjYjZiNmI2XCIsXG4gIHVwdm90ZTogXCIjZjk5MjBiXCIsXG4gIGRvd252b3RlOiBcIiMyZTcwZmZcIlxufTtcblxuY29uc3QgZGFyayA9IHtcbiAgLi4uY29uc3RhbnRzLFxuICBub3JtYWxUZXh0OiBcIiNmZmZmZmZcIixcbiAgbXV0ZWRUZXh0OiBcIiNiMGI4YmZcIixcbiAgYm9yZGVyOiBcIiMzMzMzMzNcIixcbiAgYWNjZW50OiBcIiMzM2EwZmZcIixcbiAgcGFnZUJhY2tncm91bmQ6IFwiIzFiMWIxYlwiLFxuICB2b3RlQnV0dG9uSG92ZXI6IFwiIzM4MzgzOFwiLFxuICBmb3JlZ3JvdW5kOiBcIiMyNjI2MjZcIixcbiAgYWN0aXZlQmFja2dyb3VuZDogXCIjMzMzMzMzXCIsXG4gIGlucHV0QmFja2dyb3VuZDogXCIjMzMzMzMzXCIsXG4gIHNoYWRvdzogXCJyZ2JhKDAsIDAsIDAsIDAuNClcIlxufTtcblxuY29uc3QgbGlnaHQgPSB7XG4gIC4uLmNvbnN0YW50cyxcbiAgbm9ybWFsVGV4dDogXCIjNDU0ZjViXCIsXG4gIG11dGVkVGV4dDogXCIjODE4ZTk5XCIsXG4gIGJvcmRlcjogXCIjZWJlZGYwXCIsXG4gIGFjY2VudDogXCIjMTg5MGZmXCIsXG4gIHBhZ2VCYWNrZ3JvdW5kOiBcIiNmNGY2ZjhcIixcbiAgdm90ZUJ1dHRvbkhvdmVyOiBcIiNmMmYyZjJcIixcbiAgZm9yZWdyb3VuZDogXCIjZmZmZmZmXCIsXG4gIGFjdGl2ZUJhY2tncm91bmQ6IFwiI2ZhZmFmYVwiLFxuICBpbnB1dEJhY2tncm91bmQ6IFwiI2ZjZmNmY1wiLFxuICBzaGFkb3c6IFwicmdiYSgwLCAwLCAwLCAwLjA1KVwiXG59O1xuXG5jb25zdCB0aGVtZSA9IGlzRGFyayA9PiAoaXNEYXJrID8gZGFyayA6IGxpZ2h0KTtcblxuZXhwb3J0IGRlZmF1bHQgdGhlbWU7XG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7dmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkPXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF91cmw9cmVxdWlyZShcInVybFwiKTt2YXIgX3V0aWxzPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvdXRpbHNcIik7dmFyIF9yb3V0ZXI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9yb3V0ZXJcIikpO3ZhciBfcm91dGVyMj1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXJcIik7ZnVuY3Rpb24gaXNMb2NhbChocmVmKXt2YXIgdXJsPSgwLF91cmwucGFyc2UpKGhyZWYsZmFsc2UsdHJ1ZSk7dmFyIG9yaWdpbj0oMCxfdXJsLnBhcnNlKSgoMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCksZmFsc2UsdHJ1ZSk7cmV0dXJuIXVybC5ob3N0fHx1cmwucHJvdG9jb2w9PT1vcmlnaW4ucHJvdG9jb2wmJnVybC5ob3N0PT09b3JpZ2luLmhvc3Q7fWZ1bmN0aW9uIG1lbW9pemVkRm9ybWF0VXJsKGZvcm1hdEZ1bmMpe3ZhciBsYXN0SHJlZj1udWxsO3ZhciBsYXN0QXM9bnVsbDt2YXIgbGFzdFJlc3VsdD1udWxsO3JldHVybihocmVmLGFzKT0+e2lmKGxhc3RSZXN1bHQmJmhyZWY9PT1sYXN0SHJlZiYmYXM9PT1sYXN0QXMpe3JldHVybiBsYXN0UmVzdWx0O312YXIgcmVzdWx0PWZvcm1hdEZ1bmMoaHJlZixhcyk7bGFzdEhyZWY9aHJlZjtsYXN0QXM9YXM7bGFzdFJlc3VsdD1yZXN1bHQ7cmV0dXJuIHJlc3VsdDt9O31mdW5jdGlvbiBmb3JtYXRVcmwodXJsKXtyZXR1cm4gdXJsJiZ0eXBlb2YgdXJsPT09J29iamVjdCc/KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKSh1cmwpOnVybDt9dmFyIG9ic2VydmVyO3ZhciBsaXN0ZW5lcnM9bmV3IE1hcCgpO3ZhciBJbnRlcnNlY3Rpb25PYnNlcnZlcj10eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCc/d2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyOm51bGw7dmFyIHByZWZldGNoZWQ9e307ZnVuY3Rpb24gZ2V0T2JzZXJ2ZXIoKXsvLyBSZXR1cm4gc2hhcmVkIGluc3RhbmNlIG9mIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIGFscmVhZHkgY3JlYXRlZFxuaWYob2JzZXJ2ZXIpe3JldHVybiBvYnNlcnZlcjt9Ly8gT25seSBjcmVhdGUgc2hhcmVkIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIHN1cHBvcnRlZCBpbiBicm93c2VyXG5pZighSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpe3JldHVybiB1bmRlZmluZWQ7fXJldHVybiBvYnNlcnZlcj1uZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcz0+e2VudHJpZXMuZm9yRWFjaChlbnRyeT0+e2lmKCFsaXN0ZW5lcnMuaGFzKGVudHJ5LnRhcmdldCkpe3JldHVybjt9dmFyIGNiPWxpc3RlbmVycy5nZXQoZW50cnkudGFyZ2V0KTtpZihlbnRyeS5pc0ludGVyc2VjdGluZ3x8ZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8+MCl7b2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7bGlzdGVuZXJzLmRlbGV0ZShlbnRyeS50YXJnZXQpO2NiKCk7fX0pO30se3Jvb3RNYXJnaW46JzIwMHB4J30pO312YXIgbGlzdGVuVG9JbnRlcnNlY3Rpb25zPShlbCxjYik9Pnt2YXIgb2JzZXJ2ZXI9Z2V0T2JzZXJ2ZXIoKTtpZighb2JzZXJ2ZXIpe3JldHVybigpPT57fTt9b2JzZXJ2ZXIub2JzZXJ2ZShlbCk7bGlzdGVuZXJzLnNldChlbCxjYik7cmV0dXJuKCk9Pnt0cnl7b2JzZXJ2ZXIudW5vYnNlcnZlKGVsKTt9Y2F0Y2goZXJyKXtjb25zb2xlLmVycm9yKGVycik7fWxpc3RlbmVycy5kZWxldGUoZWwpO307fTtjbGFzcyBMaW5rIGV4dGVuZHMgX3JlYWN0LkNvbXBvbmVudHtjb25zdHJ1Y3Rvcihwcm9wcyl7c3VwZXIocHJvcHMpO3RoaXMucD12b2lkIDA7dGhpcy5jbGVhblVwTGlzdGVuZXJzPSgpPT57fTt0aGlzLmZvcm1hdFVybHM9bWVtb2l6ZWRGb3JtYXRVcmwoKGhyZWYsYXNIcmVmKT0+e3JldHVybntocmVmOigwLF9yb3V0ZXIyLmFkZEJhc2VQYXRoKShmb3JtYXRVcmwoaHJlZikpLGFzOmFzSHJlZj8oMCxfcm91dGVyMi5hZGRCYXNlUGF0aCkoZm9ybWF0VXJsKGFzSHJlZikpOmFzSHJlZn07fSk7dGhpcy5saW5rQ2xpY2tlZD1lPT57dmFye25vZGVOYW1lLHRhcmdldH09ZS5jdXJyZW50VGFyZ2V0O2lmKG5vZGVOYW1lPT09J0EnJiYodGFyZ2V0JiZ0YXJnZXQhPT0nX3NlbGYnfHxlLm1ldGFLZXl8fGUuY3RybEtleXx8ZS5zaGlmdEtleXx8ZS5uYXRpdmVFdmVudCYmZS5uYXRpdmVFdmVudC53aGljaD09PTIpKXsvLyBpZ25vcmUgY2xpY2sgZm9yIG5ldyB0YWIgLyBuZXcgd2luZG93IGJlaGF2aW9yXG5yZXR1cm47fXZhcntocmVmLGFzfT10aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLHRoaXMucHJvcHMuYXMpO2lmKCFpc0xvY2FsKGhyZWYpKXsvLyBpZ25vcmUgY2xpY2sgaWYgaXQncyBvdXRzaWRlIG91ciBzY29wZSAoZS5nLiBodHRwczovL2dvb2dsZS5jb20pXG5yZXR1cm47fXZhcntwYXRobmFtZX09d2luZG93LmxvY2F0aW9uO2hyZWY9KDAsX3VybC5yZXNvbHZlKShwYXRobmFtZSxocmVmKTthcz1hcz8oMCxfdXJsLnJlc29sdmUpKHBhdGhuYW1lLGFzKTpocmVmO2UucHJldmVudERlZmF1bHQoKTsvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbnZhcntzY3JvbGx9PXRoaXMucHJvcHM7aWYoc2Nyb2xsPT1udWxsKXtzY3JvbGw9YXMuaW5kZXhPZignIycpPDA7fS8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuX3JvdXRlci5kZWZhdWx0W3RoaXMucHJvcHMucmVwbGFjZT8ncmVwbGFjZSc6J3B1c2gnXShocmVmLGFzLHtzaGFsbG93OnRoaXMucHJvcHMuc2hhbGxvd30pLnRoZW4oc3VjY2Vzcz0+e2lmKCFzdWNjZXNzKXJldHVybjtpZihzY3JvbGwpe3dpbmRvdy5zY3JvbGxUbygwLDApO2RvY3VtZW50LmJvZHkuZm9jdXMoKTt9fSk7fTtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7aWYocHJvcHMucHJlZmV0Y2gpe2NvbnNvbGUud2FybignTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJyk7fX10aGlzLnA9cHJvcHMucHJlZmV0Y2ghPT1mYWxzZTt9Y29tcG9uZW50V2lsbFVubW91bnQoKXt0aGlzLmNsZWFuVXBMaXN0ZW5lcnMoKTt9Z2V0UGF0aHMoKXt2YXJ7cGF0aG5hbWV9PXdpbmRvdy5sb2NhdGlvbjt2YXJ7aHJlZjpwYXJzZWRIcmVmLGFzOnBhcnNlZEFzfT10aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLHRoaXMucHJvcHMuYXMpO3ZhciByZXNvbHZlZEhyZWY9KDAsX3VybC5yZXNvbHZlKShwYXRobmFtZSxwYXJzZWRIcmVmKTtyZXR1cm5bcmVzb2x2ZWRIcmVmLHBhcnNlZEFzPygwLF91cmwucmVzb2x2ZSkocGF0aG5hbWUscGFyc2VkQXMpOnJlc29sdmVkSHJlZl07fWhhbmRsZVJlZihyZWYpe2lmKHRoaXMucCYmSW50ZXJzZWN0aW9uT2JzZXJ2ZXImJnJlZiYmcmVmLnRhZ05hbWUpe3RoaXMuY2xlYW5VcExpc3RlbmVycygpO3ZhciBpc1ByZWZldGNoZWQ9cHJlZmV0Y2hlZFt0aGlzLmdldFBhdGhzKCkuam9pbigvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuJyUnKV07aWYoIWlzUHJlZmV0Y2hlZCl7dGhpcy5jbGVhblVwTGlzdGVuZXJzPWxpc3RlblRvSW50ZXJzZWN0aW9ucyhyZWYsKCk9Pnt0aGlzLnByZWZldGNoKCk7fSk7fX19Ly8gVGhlIGZ1bmN0aW9uIGlzIG1lbW9pemVkIHNvIHRoYXQgbm8gZXh0cmEgbGlmZWN5Y2xlcyBhcmUgbmVlZGVkXG4vLyBhcyBwZXIgaHR0cHM6Ly9yZWFjdGpzLm9yZy9ibG9nLzIwMTgvMDYvMDcveW91LXByb2JhYmx5LWRvbnQtbmVlZC1kZXJpdmVkLXN0YXRlLmh0bWxcbnByZWZldGNoKG9wdGlvbnMpe2lmKCF0aGlzLnB8fHR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJylyZXR1cm47Ly8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxudmFyIHBhdGhzPXRoaXMuZ2V0UGF0aHMoKTsvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4vLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3Rcbi8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuX3JvdXRlci5kZWZhdWx0LnByZWZldGNoKHBhdGhzWy8qIGhyZWYgKi8wXSxwYXRoc1svKiBhc1BhdGggKi8xXSxvcHRpb25zKS5jYXRjaChlcnI9PntpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Ly8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xudGhyb3cgZXJyO319KTtwcmVmZXRjaGVkW3BhdGhzLmpvaW4oLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiclJyldPXRydWU7fXJlbmRlcigpe3ZhcntjaGlsZHJlbn09dGhpcy5wcm9wczt2YXJ7aHJlZixhc309dGhpcy5mb3JtYXRVcmxzKHRoaXMucHJvcHMuaHJlZix0aGlzLnByb3BzLmFzKTsvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbmlmKHR5cGVvZiBjaGlsZHJlbj09PSdzdHJpbmcnKXtjaGlsZHJlbj0vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFcIixudWxsLGNoaWxkcmVuKTt9Ly8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG52YXIgY2hpbGQ9X3JlYWN0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO3ZhciBwcm9wcz17cmVmOmVsPT57dGhpcy5oYW5kbGVSZWYoZWwpO2lmKGNoaWxkJiZ0eXBlb2YgY2hpbGQ9PT0nb2JqZWN0JyYmY2hpbGQucmVmKXtpZih0eXBlb2YgY2hpbGQucmVmPT09J2Z1bmN0aW9uJyljaGlsZC5yZWYoZWwpO2Vsc2UgaWYodHlwZW9mIGNoaWxkLnJlZj09PSdvYmplY3QnKXtjaGlsZC5yZWYuY3VycmVudD1lbDt9fX0sb25Nb3VzZUVudGVyOmU9PntpZihjaGlsZC5wcm9wcyYmdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcj09PSdmdW5jdGlvbicpe2NoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKTt9dGhpcy5wcmVmZXRjaCh7cHJpb3JpdHk6dHJ1ZX0pO30sb25DbGljazplPT57aWYoY2hpbGQucHJvcHMmJnR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrPT09J2Z1bmN0aW9uJyl7Y2hpbGQucHJvcHMub25DbGljayhlKTt9aWYoIWUuZGVmYXVsdFByZXZlbnRlZCl7dGhpcy5saW5rQ2xpY2tlZChlKTt9fX07Ly8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4vLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbmlmKHRoaXMucHJvcHMucGFzc0hyZWZ8fGNoaWxkLnR5cGU9PT0nYScmJiEoJ2hyZWYnaW4gY2hpbGQucHJvcHMpKXtwcm9wcy5ocmVmPWFzfHxocmVmO30vLyBBZGQgdGhlIGVuZGluZyBzbGFzaCB0byB0aGUgcGF0aHMuIFNvLCB3ZSBjYW4gc2VydmUgdGhlXG4vLyBcIjxwYWdlPi9pbmRleC5odG1sXCIgZGlyZWN0bHkuXG5pZihwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKXt2YXIgcmV3cml0ZVVybEZvck5leHRFeHBvcnQ9cmVxdWlyZSgnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JykucmV3cml0ZVVybEZvck5leHRFeHBvcnQ7aWYocHJvcHMuaHJlZiYmdHlwZW9mIF9fTkVYVF9EQVRBX18hPT0ndW5kZWZpbmVkJyYmX19ORVhUX0RBVEFfXy5uZXh0RXhwb3J0KXtwcm9wcy5ocmVmPXJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHByb3BzLmhyZWYpO319cmV0dXJuIF9yZWFjdC5kZWZhdWx0LmNsb25lRWxlbWVudChjaGlsZCxwcm9wcyk7fX1pZihwcm9jZXNzLmVudi5OT0RFX0VOVj09PSdkZXZlbG9wbWVudCcpe3ZhciB3YXJuPSgwLF91dGlscy5leGVjT25jZSkoY29uc29sZS5lcnJvcik7Ly8gVGhpcyBtb2R1bGUgZ2V0cyByZW1vdmVkIGJ5IHdlYnBhY2suSWdub3JlUGx1Z2luXG52YXIgUHJvcFR5cGVzPXJlcXVpcmUoJ3Byb3AtdHlwZXMnKTt2YXIgZXhhY3Q9cmVxdWlyZSgncHJvcC10eXBlcy1leGFjdCcpOy8vIEB0cy1pZ25vcmUgdGhlIHByb3BlcnR5IGlzIHN1cHBvcnRlZCwgd2hlbiBkZWNsYXJpbmcgaXQgb24gdGhlIGNsYXNzIGl0IG91dHB1dHMgYW4gZXh0cmEgYml0IG9mIGNvZGUgd2hpY2ggaXMgbm90IG5lZWRlZC5cbkxpbmsucHJvcFR5cGVzPWV4YWN0KHtocmVmOlByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsUHJvcFR5cGVzLm9iamVjdF0pLmlzUmVxdWlyZWQsYXM6UHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZyxQcm9wVHlwZXMub2JqZWN0XSkscHJlZmV0Y2g6UHJvcFR5cGVzLmJvb2wscmVwbGFjZTpQcm9wVHlwZXMuYm9vbCxzaGFsbG93OlByb3BUeXBlcy5ib29sLHBhc3NIcmVmOlByb3BUeXBlcy5ib29sLHNjcm9sbDpQcm9wVHlwZXMuYm9vbCxjaGlsZHJlbjpQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZWxlbWVudCwocHJvcHMscHJvcE5hbWUpPT57dmFyIHZhbHVlPXByb3BzW3Byb3BOYW1lXTtpZih0eXBlb2YgdmFsdWU9PT0nc3RyaW5nJyl7d2FybihcIldhcm5pbmc6IFlvdSdyZSB1c2luZyBhIHN0cmluZyBkaXJlY3RseSBpbnNpZGUgPExpbms+LiBUaGlzIHVzYWdlIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFBsZWFzZSBhZGQgYW4gPGE+IHRhZyBhcyBjaGlsZCBvZiA8TGluaz5cIik7fXJldHVybiBudWxsO31dKS5pc1JlcXVpcmVkfSk7fXZhciBfZGVmYXVsdD1MaW5rO2V4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy51c2VSb3V0ZXI9dXNlUm91dGVyO2V4cG9ydHMubWFrZVB1YmxpY1JvdXRlckluc3RhbmNlPW1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZTtleHBvcnRzLmNyZWF0ZVJvdXRlcj1leHBvcnRzLndpdGhSb3V0ZXI9ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcjI9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyXCIpKTtleHBvcnRzLlJvdXRlcj1fcm91dGVyMi5kZWZhdWx0O2V4cG9ydHMuTmV4dFJvdXRlcj1fcm91dGVyMi5OZXh0Um91dGVyO3ZhciBfcm91dGVyQ29udGV4dD1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0XCIpO3ZhciBfd2l0aFJvdXRlcj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3dpdGgtcm91dGVyXCIpKTtleHBvcnRzLndpdGhSb3V0ZXI9X3dpdGhSb3V0ZXIuZGVmYXVsdDsvKiBnbG9iYWwgd2luZG93ICovdmFyIHNpbmdsZXRvblJvdXRlcj17cm91dGVyOm51bGwsLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbnJlYWR5Q2FsbGJhY2tzOltdLHJlYWR5KGNiKXtpZih0aGlzLnJvdXRlcilyZXR1cm4gY2IoKTtpZih0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCcpe3RoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYik7fX19Oy8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbnZhciB1cmxQcm9wZXJ0eUZpZWxkcz1bJ3BhdGhuYW1lJywncm91dGUnLCdxdWVyeScsJ2FzUGF0aCcsJ2NvbXBvbmVudHMnLCdpc0ZhbGxiYWNrJywnYmFzZVBhdGgnXTt2YXIgcm91dGVyRXZlbnRzPVsncm91dGVDaGFuZ2VTdGFydCcsJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywncm91dGVDaGFuZ2VFcnJvcicsJ2hhc2hDaGFuZ2VTdGFydCcsJ2hhc2hDaGFuZ2VDb21wbGV0ZSddO3ZhciBjb3JlTWV0aG9kRmllbGRzPVsncHVzaCcsJ3JlcGxhY2UnLCdyZWxvYWQnLCdiYWNrJywncHJlZmV0Y2gnLCdiZWZvcmVQb3BTdGF0ZSddOy8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsJ2V2ZW50cycse2dldCgpe3JldHVybiBfcm91dGVyMi5kZWZhdWx0LmV2ZW50czt9fSk7dXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaChmaWVsZD0+ey8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4vLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbi8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsZmllbGQse2dldCgpe3ZhciByb3V0ZXI9Z2V0Um91dGVyKCk7cmV0dXJuIHJvdXRlcltmaWVsZF07fX0pO30pO2NvcmVNZXRob2RGaWVsZHMuZm9yRWFjaChmaWVsZD0+ey8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG47c2luZ2xldG9uUm91dGVyW2ZpZWxkXT1mdW5jdGlvbigpe3ZhciByb3V0ZXI9Z2V0Um91dGVyKCk7cmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJndW1lbnRzKTt9O30pO3JvdXRlckV2ZW50cy5mb3JFYWNoKGV2ZW50PT57c2luZ2xldG9uUm91dGVyLnJlYWR5KCgpPT57X3JvdXRlcjIuZGVmYXVsdC5ldmVudHMub24oZXZlbnQsZnVuY3Rpb24oKXt2YXIgZXZlbnRGaWVsZD1cIm9uXCIrZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrZXZlbnQuc3Vic3RyaW5nKDEpO3ZhciBfc2luZ2xldG9uUm91dGVyPXNpbmdsZXRvblJvdXRlcjtpZihfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKXt0cnl7X3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmd1bWVudHMpO31jYXRjaChlcnIpey8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG5jb25zb2xlLmVycm9yKFwiRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6IFwiK2V2ZW50RmllbGQpOy8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG5jb25zb2xlLmVycm9yKGVyci5tZXNzYWdlK1wiXFxuXCIrZXJyLnN0YWNrKTt9fX0pO30pO30pO2Z1bmN0aW9uIGdldFJvdXRlcigpe2lmKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKXt2YXIgbWVzc2FnZT0nTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicrJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJzt0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7fXJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO30vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbnZhciBfZGVmYXVsdD1zaW5nbGV0b25Sb3V0ZXI7Ly8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDtmdW5jdGlvbiB1c2VSb3V0ZXIoKXtyZXR1cm4gX3JlYWN0LmRlZmF1bHQudXNlQ29udGV4dChfcm91dGVyQ29udGV4dC5Sb3V0ZXJDb250ZXh0KTt9Ly8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbnZhciBjcmVhdGVSb3V0ZXI9ZnVuY3Rpb24gY3JlYXRlUm91dGVyKCl7Zm9yKHZhciBfbGVuPWFyZ3VtZW50cy5sZW5ndGgsYXJncz1uZXcgQXJyYXkoX2xlbiksX2tleT0wO19rZXk8X2xlbjtfa2V5Kyspe2FyZ3NbX2tleV09YXJndW1lbnRzW19rZXldO31zaW5nbGV0b25Sb3V0ZXIucm91dGVyPW5ldyBfcm91dGVyMi5kZWZhdWx0KC4uLmFyZ3MpO3NpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKGNiPT5jYigpKTtzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3M9W107cmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7fTsvLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnRzLmNyZWF0ZVJvdXRlcj1jcmVhdGVSb3V0ZXI7ZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcil7dmFyIF9yb3V0ZXI9cm91dGVyO3ZhciBpbnN0YW5jZT17fTtmb3IodmFyIHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKXtpZih0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV09PT0nb2JqZWN0Jyl7aW5zdGFuY2VbcHJvcGVydHldPU9iamVjdC5hc3NpZ24oe30sX3JvdXRlcltwcm9wZXJ0eV0pOy8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG5jb250aW51ZTt9aW5zdGFuY2VbcHJvcGVydHldPV9yb3V0ZXJbcHJvcGVydHldO30vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5pbnN0YW5jZS5ldmVudHM9X3JvdXRlcjIuZGVmYXVsdC5ldmVudHM7Y29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKGZpZWxkPT57aW5zdGFuY2VbZmllbGRdPWZ1bmN0aW9uKCl7cmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3VtZW50cyk7fTt9KTtyZXR1cm4gaW5zdGFuY2U7fSIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9d2l0aFJvdXRlcjt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcj1yZXF1aXJlKFwiLi9yb3V0ZXJcIik7ZnVuY3Rpb24gd2l0aFJvdXRlcihDb21wb3NlZENvbXBvbmVudCl7ZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHMpe3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvc2VkQ29tcG9uZW50LE9iamVjdC5hc3NpZ24oe3JvdXRlcjooMCxfcm91dGVyLnVzZVJvdXRlcikoKX0scHJvcHMpKTt9V2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzPUNvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcy8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbjtXaXRoUm91dGVyV3JhcHBlci5vcmlnR2V0SW5pdGlhbFByb3BzPUNvbXBvc2VkQ29tcG9uZW50Lm9yaWdHZXRJbml0aWFsUHJvcHM7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe3ZhciBuYW1lPUNvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lfHxDb21wb3NlZENvbXBvbmVudC5uYW1lfHwnVW5rbm93bic7V2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWU9XCJ3aXRoUm91dGVyKFwiK25hbWUrXCIpXCI7fXJldHVybiBXaXRoUm91dGVyV3JhcHBlcjt9IiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIG1pdHQoKSB7XG4gICAgY29uc3QgYWxsID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBvbih0eXBlLCBoYW5kbGVyKSB7XG4gICAgICAgICAgICA7XG4gICAgICAgICAgICAoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcik7XG4gICAgICAgIH0sXG4gICAgICAgIG9mZih0eXBlLCBoYW5kbGVyKSB7XG4gICAgICAgICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWJpdHdpc2VcbiAgICAgICAgICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZW1pdCh0eXBlLCAuLi5ldnRzKSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICAgICAgICA7XG4gICAgICAgICAgICAoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcikgPT4ge1xuICAgICAgICAgICAgICAgIGhhbmRsZXIoLi4uZXZ0cyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICB9O1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gbWl0dDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdXJsXzEgPSByZXF1aXJlKFwidXJsXCIpO1xuY29uc3QgbWl0dF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9taXR0XCIpKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5jb25zdCBpc19keW5hbWljXzEgPSByZXF1aXJlKFwiLi91dGlscy9pcy1keW5hbWljXCIpO1xuY29uc3Qgcm91dGVfbWF0Y2hlcl8xID0gcmVxdWlyZShcIi4vdXRpbHMvcm91dGUtbWF0Y2hlclwiKTtcbmNvbnN0IHJvdXRlX3JlZ2V4XzEgPSByZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1yZWdleFwiKTtcbmNvbnN0IGJhc2VQYXRoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCB8fCAnJztcbmZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aC5pbmRleE9mKGJhc2VQYXRoKSAhPT0gMCA/IGJhc2VQYXRoICsgcGF0aCA6IHBhdGg7XG59XG5leHBvcnRzLmFkZEJhc2VQYXRoID0gYWRkQmFzZVBhdGg7XG5mdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoKSB7XG4gICAgcmV0dXJuIHBhdGguaW5kZXhPZihiYXNlUGF0aCkgPT09IDBcbiAgICAgICAgPyBwYXRoLnN1YnN0cihiYXNlUGF0aC5sZW5ndGgpIHx8ICcvJ1xuICAgICAgICA6IHBhdGg7XG59XG5leHBvcnRzLmRlbEJhc2VQYXRoID0gZGVsQmFzZVBhdGg7XG5mdW5jdGlvbiB0b1JvdXRlKHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aC5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJztcbn1cbmNvbnN0IHByZXBhcmVSb3V0ZSA9IChwYXRoKSA9PiB0b1JvdXRlKCFwYXRoIHx8IHBhdGggPT09ICcvJyA/ICcvaW5kZXgnIDogcGF0aCk7XG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKHBhdGhuYW1lLCBxdWVyeSwgaXNTZXJ2ZXJSZW5kZXIsIGNiKSB7XG4gICAgbGV0IGF0dGVtcHRzID0gaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMTtcbiAgICBmdW5jdGlvbiBnZXRSZXNwb25zZSgpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKHV0aWxzXzEuZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgICAgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKFxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBfX05FWFRfREFUQV9fXG4gICAgICAgICAgICBgL19uZXh0L2RhdGEvJHtfX05FWFRfREFUQV9fLmJ1aWxkSWR9JHtkZWxCYXNlUGF0aChwYXRobmFtZSl9Lmpzb25gKSxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICB9KSwge1xuICAgICAgICAgICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgICAgICAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgICAgICAgICAvLyA+IG9wdGlvbi5cbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgICAgICAgICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgICAgICAgICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgICAgICAgfSkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgICAgICBpZiAoLS1hdHRlbXB0cyA+IDAgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdldFJlc3BvbnNlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBnZXRSZXNwb25zZSgpXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICByZXR1cm4gY2IgPyBjYihkYXRhKSA6IGRhdGE7XG4gICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgICAgIC8vIGxvb3AuXG4gICAgICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIGVyci5jb2RlID0gJ1BBR0VfTE9BRF9FUlJPUic7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgZXJyO1xuICAgIH0pO1xufVxuY2xhc3MgUm91dGVyIHtcbiAgICBjb25zdHJ1Y3RvcihwYXRobmFtZSwgcXVlcnksIGFzLCB7IGluaXRpYWxQcm9wcywgcGFnZUxvYWRlciwgQXBwLCB3cmFwQXBwLCBDb21wb25lbnQsIGVyciwgc3Vic2NyaXB0aW9uLCBpc0ZhbGxiYWNrLCB9KSB7XG4gICAgICAgIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gICAgICAgIHRoaXMuc2RjID0ge307XG4gICAgICAgIHRoaXMub25Qb3BTdGF0ZSA9IChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWUuc3RhdGUpIHtcbiAgICAgICAgICAgICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgICAgICAgICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgICAgICAgICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgICAgICAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgICAgICAgICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgICAgICAgICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAgICAgICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywgdXRpbHNfMS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSwgdXRpbHNfMS5nZXRVUkwoKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgICAgICAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICAgICAgICAgIGlmIChlLnN0YXRlICYmXG4gICAgICAgICAgICAgICAgdGhpcy5pc1NzciAmJlxuICAgICAgICAgICAgICAgIGUuc3RhdGUuYXMgPT09IHRoaXMuYXNQYXRoICYmXG4gICAgICAgICAgICAgICAgdXJsXzEucGFyc2UoZS5zdGF0ZS51cmwpLnBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgICAgICAgICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICAgICAgICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhlLnN0YXRlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucyB9ID0gZS5zdGF0ZTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB1cmwgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBhcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdgcG9wc3RhdGVgIGV2ZW50IHRyaWdnZXJlZCBidXQgYGV2ZW50LnN0YXRlYCBkaWQgbm90IGhhdmUgYHVybGAgb3IgYGFzYCBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvcG9wc3RhdGUtc3RhdGUtZW1wdHknKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnJlcGxhY2UodXJsLCBhcywgb3B0aW9ucyk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2dldFN0YXRpY0RhdGEgPSAoYXNQYXRoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYXRobmFtZSA9IHByZXBhcmVSb3V0ZSh1cmxfMS5wYXJzZShhc1BhdGgpLnBhdGhuYW1lKTtcbiAgICAgICAgICAgIHJldHVybiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW3BhdGhuYW1lXVxuICAgICAgICAgICAgICAgID8gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW3BhdGhuYW1lXSlcbiAgICAgICAgICAgICAgICA6IGZldGNoTmV4dERhdGEocGF0aG5hbWUsIG51bGwsIHRoaXMuaXNTc3IsIGRhdGEgPT4gKHRoaXMuc2RjW3BhdGhuYW1lXSA9IGRhdGEpKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fZ2V0U2VydmVyRGF0YSA9IChhc1BhdGgpID0+IHtcbiAgICAgICAgICAgIGxldCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdXJsXzEucGFyc2UoYXNQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIHBhdGhuYW1lID0gcHJlcGFyZVJvdXRlKHBhdGhuYW1lKTtcbiAgICAgICAgICAgIHJldHVybiBmZXRjaE5leHREYXRhKHBhdGhuYW1lLCBxdWVyeSwgdGhpcy5pc1Nzcik7XG4gICAgICAgIH07XG4gICAgICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgICAgICB0aGlzLnJvdXRlID0gdG9Sb3V0ZShwYXRobmFtZSk7XG4gICAgICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgICAgICB0aGlzLmNvbXBvbmVudHMgPSB7fTtcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgICAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgICAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHsgQ29tcG9uZW50OiBBcHAgfTtcbiAgICAgICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAgICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICAgICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzO1xuICAgICAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyO1xuICAgICAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWU7XG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgICAgICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAgICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICAgICAgdGhpcy5hc1BhdGggPVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgICAgICAgaXNfZHluYW1pY18xLmlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBfX05FWFRfREFUQV9fLmF1dG9FeHBvcnQgPyBwYXRobmFtZSA6IGFzO1xuICAgICAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGg7XG4gICAgICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwO1xuICAgICAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgICAgIHRoaXMuaXNTc3IgPSB0cnVlO1xuICAgICAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrO1xuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAgICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAgICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgICAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywgdXRpbHNfMS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSwgYXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBAZGVwcmVjYXRlZCBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSBldmVuIHRob3VnaCBpdCdzIGEgcHJpdmF0ZSBtZXRob2QuXG4gICAgc3RhdGljIF9yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCh1cmwpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgICAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnQ7XG4gICAgICAgICAgICByZXR1cm4gcmV3cml0ZVVybEZvck5leHRFeHBvcnQodXJsKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB1cmw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXBkYXRlKHJvdXRlLCBtb2QpIHtcbiAgICAgICAgY29uc3QgQ29tcG9uZW50ID0gbW9kLmRlZmF1bHQgfHwgbW9kO1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXTtcbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCB1cGRhdGUgdW5hdmFpbGFibGUgcm91dGU6ICR7cm91dGV9YCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmV3RGF0YSA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZGF0YSksIHsgQ29tcG9uZW50LCBfX05fU1NHOiBtb2QuX19OX1NTRywgX19OX1NTUDogbW9kLl9fTl9TU1AgfSk7XG4gICAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSBuZXdEYXRhO1xuICAgICAgICAvLyBwYWdlcy9fYXBwLmpzIHVwZGF0ZWRcbiAgICAgICAgaWYgKHJvdXRlID09PSAnL19hcHAnKSB7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyb3V0ZSA9PT0gdGhpcy5yb3V0ZSkge1xuICAgICAgICAgICAgdGhpcy5ub3RpZnkobmV3RGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVsb2FkKCkge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgICAqL1xuICAgIGJhY2soKSB7XG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICAgKi9cbiAgICBwdXNoKHVybCwgYXMgPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgICAqL1xuICAgIHJlcGxhY2UodXJsLCBhcyA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIGNoYW5nZShtZXRob2QsIF91cmwsIF9hcywgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFvcHRpb25zLl9oKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1NzciA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgICAgICAgICAgaWYgKHV0aWxzXzEuU1QpIHtcbiAgICAgICAgICAgICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gICAgICAgICAgICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICAgICAgICAgICAgbGV0IHVybCA9IHR5cGVvZiBfdXJsID09PSAnb2JqZWN0JyA/IHV0aWxzXzEuZm9ybWF0V2l0aFZhbGlkYXRpb24oX3VybCkgOiBfdXJsO1xuICAgICAgICAgICAgbGV0IGFzID0gdHlwZW9mIF9hcyA9PT0gJ29iamVjdCcgPyB1dGlsc18xLmZvcm1hdFdpdGhWYWxpZGF0aW9uKF9hcykgOiBfYXM7XG4gICAgICAgICAgICB1cmwgPSBhZGRCYXNlUGF0aCh1cmwpO1xuICAgICAgICAgICAgYXMgPSBhZGRCYXNlUGF0aChhcyk7XG4gICAgICAgICAgICAvLyBBZGQgdGhlIGVuZGluZyBzbGFzaCB0byB0aGUgcGF0aHMuIFNvLCB3ZSBjYW4gc2VydmUgdGhlXG4gICAgICAgICAgICAvLyBcIjxwYWdlPi9pbmRleC5odG1sXCIgZGlyZWN0bHkgZm9yIHRoZSBTU1IgcGFnZS5cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAgICAgICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnQ7XG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgICAgICAgICAgIGlmIChfX05FWFRfREFUQV9fLm5leHRFeHBvcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgYXMgPSByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydChhcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQoYXMpO1xuICAgICAgICAgICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAgICAgICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cbiAgICAgICAgICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAgICAgICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAgICAgICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgICAgICAgICAgaWYgKCFvcHRpb25zLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGFzKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYXNQYXRoID0gYXM7XG4gICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGFzKTtcbiAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5LCBwcm90b2NvbCB9ID0gdXJsXzEucGFyc2UodXJsLCB0cnVlKTtcbiAgICAgICAgICAgIGlmICghcGF0aG5hbWUgfHwgcHJvdG9jb2wpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gcm91dGVyOiAke3VybH0gaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2ludmFsaWQtaHJlZi1wYXNzZWRgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAgICAgICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgICAgICAgICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgICAgICAgICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAgICAgICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICAgICAgICAgIGlmICghdGhpcy51cmxJc05ldyhhcykpIHtcbiAgICAgICAgICAgICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJvdXRlID0gdG9Sb3V0ZShwYXRobmFtZSk7XG4gICAgICAgICAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9ucztcbiAgICAgICAgICAgIGlmIChpc19keW5hbWljXzEuaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZTogYXNQYXRobmFtZSB9ID0gdXJsXzEucGFyc2UoYXMpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSByb3V0ZV9yZWdleF8xLmdldFJvdXRlUmVnZXgocm91dGUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByb3V0ZV9tYXRjaGVyXzEuZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpO1xuICAgICAgICAgICAgICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihwYXJhbSA9PiAhcXVlcnlbcGFyYW1dKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgIGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oJywgJyl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QobmV3IEVycm9yKGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9pbmNvbXBhdGlibGUtaHJlZi1hc2ApKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMpO1xuICAgICAgICAgICAgLy8gSWYgc2hhbGxvdyBpcyB0cnVlIGFuZCB0aGUgcm91dGUgZXhpc3RzIGluIHRoZSByb3V0ZXIgY2FjaGUgd2UgcmV1c2UgdGhlIHByZXZpb3VzIHJlc3VsdFxuICAgICAgICAgICAgdGhpcy5nZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHNoYWxsb3cpLnRoZW4ocm91dGVJbmZvID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGVycm9yIH0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yICYmIGVycm9yLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXBwQ29tcCA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQ7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFyb3V0ZUluZm8uQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlSW5mbyk7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBhcyk7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICB9LCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgdXRpbHNfMS5nZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oe1xuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBhcyxcbiAgICAgICAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAgICAgJycsIGFzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHNoYWxsb3cgPSBmYWxzZSkge1xuICAgICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdO1xuICAgICAgICAvLyBJZiB0aGVyZSBpcyBhIHNoYWxsb3cgcm91dGUgdHJhbnNpdGlvbiBwb3NzaWJsZVxuICAgICAgICAvLyBJZiB0aGUgcm91dGUgaXMgYWxyZWFkeSByZW5kZXJlZCBvbiB0aGUgc2NyZWVuLlxuICAgICAgICBpZiAoc2hhbGxvdyAmJiBjYWNoZWRSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoY2FjaGVkUm91dGVJbmZvKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBoYW5kbGVFcnJvciA9IChlcnIsIGxvYWRFcnJvckZhaWwpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyLmNvZGUgPT09ICdQQUdFX0xPQURfRVJST1InIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgICAgICAgICAgICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgICAgICAgICAgICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAgICAgICAgICAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG4gICAgICAgICAgICAgICAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzO1xuICAgICAgICAgICAgICAgICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgICAgICAgICAgICAgICAgLy8gU28sIHdlIG5lZWQgdG8gbWFyayBpdCBhcyBhIGNhbmNlbGxlZCBlcnJvciBhbmQgc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgICAgICAgICAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgVE9ETzogZml4IHRoZSBjb250cm9sIGZsb3cgaGVyZVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh7IGVycm9yOiBlcnIgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgVE9ETzogZml4IHRoZSBjb250cm9sIGZsb3cgaGVyZVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh7IGVycm9yOiBlcnIgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy5mZXRjaENvbXBvbmVudCgnL19lcnJvcicpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgcGFnZTogQ29tcG9uZW50IH0gPSByZXM7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IHsgQ29tcG9uZW50LCBlcnIgfTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSkudGhlbihwcm9wcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLmVycm9yID0gZXJyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocm91dGVJbmZvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIGdpcEVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8uZXJyb3IgPSBlcnI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge307XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyb3V0ZUluZm8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gaGFuZGxlRXJyb3IoZXJyLCB0cnVlKSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAoY2FjaGVkUm91dGVJbmZvKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoY2FjaGVkUm91dGVJbmZvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4ocmVzID0+IHJlc29sdmUoe1xuICAgICAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICAgIH0pLCByZWplY3QpO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKHJvdXRlSW5mbykgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG4gICAgICAgICAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2dldERhdGEoKCkgPT4gX19OX1NTR1xuICAgICAgICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShhcylcbiAgICAgICAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICAgICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGFzKVxuICAgICAgICAgICAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwgXG4gICAgICAgICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICAgICAgICB9KSkudGhlbihwcm9wcyA9PiB7XG4gICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHM7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgICAgICByZXR1cm4gcm91dGVJbmZvO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goaGFuZGxlRXJyb3IpO1xuICAgIH1cbiAgICBzZXQocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIGRhdGEpIHtcbiAgICAgICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2U7XG4gICAgICAgIHRoaXMucm91dGUgPSByb3V0ZTtcbiAgICAgICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gICAgICAgIHRoaXMuYXNQYXRoID0gYXM7XG4gICAgICAgIHRoaXMubm90aWZ5KGRhdGEpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAgICovXG4gICAgYmVmb3JlUG9wU3RhdGUoY2IpIHtcbiAgICAgICAgdGhpcy5fYnBzID0gY2I7XG4gICAgfVxuICAgIG9ubHlBSGFzaENoYW5nZShhcykge1xuICAgICAgICBpZiAoIXRoaXMuYXNQYXRoKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJyk7XG4gICAgICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKTtcbiAgICAgICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgICAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgICAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoO1xuICAgIH1cbiAgICBzY3JvbGxUb0hhc2goYXMpIHtcbiAgICAgICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpO1xuICAgICAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICAgICAgaWYgKGhhc2ggPT09ICcnKSB7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICAgICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpO1xuICAgICAgICBpZiAoaWRFbCkge1xuICAgICAgICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgICAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICAgICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF07XG4gICAgICAgIGlmIChuYW1lRWwpIHtcbiAgICAgICAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVybElzTmV3KGFzUGF0aCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAgICovXG4gICAgcHJlZmV0Y2godXJsLCBhc1BhdGggPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZSwgcHJvdG9jb2wgfSA9IHVybF8xLnBhcnNlKHVybCk7XG4gICAgICAgICAgICBpZiAoIXBhdGhuYW1lIHx8IHByb3RvY29sKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIHJvdXRlcjogJHt1cmx9IGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9pbnZhbGlkLWhyZWYtcGFzc2VkYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgcm91dGUgPSBkZWxCYXNlUGF0aCh0b1JvdXRlKHBhdGhuYW1lKSk7XG4gICAgICAgICAgICBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyLnByZWZldGNoRGF0YSh1cmwsIGRlbEJhc2VQYXRoKGFzUGF0aCkpLFxuICAgICAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICAgICAgICAgIF0pLnRoZW4oKCkgPT4gcmVzb2x2ZSgpLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGUpIHtcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgICAgcm91dGUgPSBkZWxCYXNlUGF0aChyb3V0ZSk7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSk7XG4gICAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgKTtcbiAgICAgICAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb21wb25lbnRSZXN1bHQ7XG4gICAgfVxuICAgIF9nZXREYXRhKGZuKSB7XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jbGMgPSBjYW5jZWw7XG4gICAgICAgIHJldHVybiBmbigpLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKTtcbiAgICAgICAgICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIGN0eCkge1xuICAgICAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ107XG4gICAgICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcCk7XG4gICAgICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZTtcbiAgICAgICAgcmV0dXJuIHV0aWxzXzEubG9hZEdldEluaXRpYWxQcm9wcyhBcHAsIHtcbiAgICAgICAgICAgIEFwcFRyZWUsXG4gICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICAgICAgICBjdHgsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhYm9ydENvbXBvbmVudExvYWQoYXMpIHtcbiAgICAgICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICAgICAgICBjb25zdCBlID0gbmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKTtcbiAgICAgICAgICAgIGUuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGUsIGFzKTtcbiAgICAgICAgICAgIHRoaXMuY2xjKCk7XG4gICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbm90aWZ5KGRhdGEpIHtcbiAgICAgICAgdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gUm91dGVyO1xuUm91dGVyLmV2ZW50cyA9IG1pdHRfMS5kZWZhdWx0KCk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpLztcbmZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlKSB7XG4gICAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSk7XG59XG5leHBvcnRzLmlzRHluYW1pY1JvdXRlID0gaXNEeW5hbWljUm91dGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KSB7XG4gICAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4O1xuICAgIHJldHVybiAocGF0aG5hbWUpID0+IHtcbiAgICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUpO1xuICAgICAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZWNvZGUgPSAocGFyYW0pID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoXykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcignZmFpbGVkIHRvIGRlY29kZSBwYXJhbScpO1xuICAgICAgICAgICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnO1xuICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcGFyYW1zID0ge307XG4gICAgICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdO1xuICAgICAgICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdO1xuICAgICAgICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICAgICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKGVudHJ5ID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICAgICAgICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICAgICAgICAgICAgICAgIDogZGVjb2RlKG0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHBhcmFtcztcbiAgICB9O1xufVxuZXhwb3J0cy5nZXRSb3V0ZU1hdGNoZXIgPSBnZXRSb3V0ZU1hdGNoZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpO1xufVxuZnVuY3Rpb24gZ2V0Um91dGVSZWdleChub3JtYWxpemVkUm91dGUpIHtcbiAgICAvLyBFc2NhcGUgYWxsIGNoYXJhY3RlcnMgdGhhdCBjb3VsZCBiZSBjb25zaWRlcmVkIFJlZ0V4XG4gICAgY29uc3QgZXNjYXBlZFJvdXRlID0gZXNjYXBlUmVnZXgobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKTtcbiAgICBjb25zdCBncm91cHMgPSB7fTtcbiAgICBsZXQgZ3JvdXBJbmRleCA9IDE7XG4gICAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gZXNjYXBlZFJvdXRlLnJlcGxhY2UoL1xcL1xcXFxcXFsoW14vXSs/KVxcXFxcXF0oPz1cXC98JCkvZywgKF8sICQxKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzQ2F0Y2hBbGwgPSAvXihcXFxcXFwuKXszfS8udGVzdCgkMSk7XG4gICAgICAgIGdyb3Vwc1skMVxuICAgICAgICAgICAgLy8gVW4tZXNjYXBlIGtleVxuICAgICAgICAgICAgLnJlcGxhY2UoL1xcXFwoW3xcXFxce30oKVtcXF1eJCsqPy4tXSkvZywgJyQxJylcbiAgICAgICAgICAgIC5yZXBsYWNlKC9eXFwuezN9LywgJycpXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgICAgXSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdDogaXNDYXRjaEFsbCB9O1xuICAgICAgICByZXR1cm4gaXNDYXRjaEFsbCA/ICcvKC4rPyknIDogJy8oW14vXSs/KSc7XG4gICAgfSk7XG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlO1xuICAgIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAgIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gZXNjYXBlZFJvdXRlLnJlcGxhY2UoL1xcL1xcXFxcXFsoW14vXSs/KVxcXFxcXF0oPz1cXC98JCkvZywgKF8sICQxKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpc0NhdGNoQWxsID0gL14oXFxcXFxcLil7M30vLnRlc3QoJDEpO1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gJDFcbiAgICAgICAgICAgICAgICAvLyBVbi1lc2NhcGUga2V5XG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcXFwoW3xcXFxce30oKVtcXF1eJCsqPy4tXSkvZywgJyQxJylcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvXlxcLnszfS8sICcnKTtcbiAgICAgICAgICAgIHJldHVybiBpc0NhdGNoQWxsXG4gICAgICAgICAgICAgICAgPyBgLyg/PCR7ZXNjYXBlUmVnZXgoa2V5KX0+Lis/KWBcbiAgICAgICAgICAgICAgICA6IGAvKD88JHtlc2NhcGVSZWdleChrZXkpfT5bXi9dKz8pYDtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHsgcmU6IG5ldyBSZWdFeHAoJ14nICsgcGFyYW1ldGVyaXplZFJvdXRlICsgJyg/Oi8pPyQnLCAnaScpLCBncm91cHMgfSwgKG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlXG4gICAgICAgID8ge1xuICAgICAgICAgICAgbmFtZWRSZWdleDogYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgLFxuICAgICAgICB9XG4gICAgICAgIDoge30pKTtcbn1cbmV4cG9ydHMuZ2V0Um91dGVSZWdleCA9IGdldFJvdXRlUmVnZXg7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHVybF8xID0gcmVxdWlyZShcInVybFwiKTtcbi8qKlxuICogVXRpbHNcbiAqL1xuZnVuY3Rpb24gZXhlY09uY2UoZm4pIHtcbiAgICBsZXQgdXNlZCA9IGZhbHNlO1xuICAgIGxldCByZXN1bHQ7XG4gICAgcmV0dXJuICgoLi4uYXJncykgPT4ge1xuICAgICAgICBpZiAoIXVzZWQpIHtcbiAgICAgICAgICAgIHVzZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9KTtcbn1cbmV4cG9ydHMuZXhlY09uY2UgPSBleGVjT25jZTtcbmZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICAgIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb247XG4gICAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YDtcbn1cbmV4cG9ydHMuZ2V0TG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbjtcbmZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvbjtcbiAgICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpO1xuICAgIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKTtcbn1cbmV4cG9ydHMuZ2V0VVJMID0gZ2V0VVJMO1xuZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWUoQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgICAgID8gQ29tcG9uZW50XG4gICAgICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJztcbn1cbmV4cG9ydHMuZ2V0RGlzcGxheU5hbWUgPSBnZXREaXNwbGF5TmFtZTtcbmZ1bmN0aW9uIGlzUmVzU2VudChyZXMpIHtcbiAgICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudDtcbn1cbmV4cG9ydHMuaXNSZXNTZW50ID0gaXNSZXNTZW50O1xuYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wcyhBcHAsIGN0eCkge1xuICAgIHZhciBfYTtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoKF9hID0gQXBwLnByb3RvdHlwZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmdldEluaXRpYWxQcm9wcykge1xuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoQXBwKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYDtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gICAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcyk7XG4gICAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge307XG4gICAgfVxuICAgIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpO1xuICAgIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICAgICAgcmV0dXJuIHByb3BzO1xuICAgIH1cbiAgICBpZiAoIXByb3BzKSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKEFwcCl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYDtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGAke2dldERpc3BsYXlOYW1lKEFwcCl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2ApO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwcm9wcztcbn1cbmV4cG9ydHMubG9hZEdldEluaXRpYWxQcm9wcyA9IGxvYWRHZXRJbml0aWFsUHJvcHM7XG5leHBvcnRzLnVybE9iamVjdEtleXMgPSBbXG4gICAgJ2F1dGgnLFxuICAgICdoYXNoJyxcbiAgICAnaG9zdCcsXG4gICAgJ2hvc3RuYW1lJyxcbiAgICAnaHJlZicsXG4gICAgJ3BhdGgnLFxuICAgICdwYXRobmFtZScsXG4gICAgJ3BvcnQnLFxuICAgICdwcm90b2NvbCcsXG4gICAgJ3F1ZXJ5JyxcbiAgICAnc2VhcmNoJyxcbiAgICAnc2xhc2hlcycsXG5dO1xuZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsLCBvcHRpb25zKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChleHBvcnRzLnVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHVybF8xLmZvcm1hdCh1cmwsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5mb3JtYXRXaXRoVmFsaWRhdGlvbiA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uO1xuZXhwb3J0cy5TUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCc7XG5leHBvcnRzLlNUID0gZXhwb3J0cy5TUCAmJlxuICAgIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gICAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbic7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE2LjEzLjFcbiAqIHJlYWN0LWlzLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudC1saWtlIHR5cGVzLiBJZiB0aGVyZSBpcyBubyBuYXRpdmUgU3ltYm9sXG4vLyBub3IgcG9seWZpbGwsIHRoZW4gYSBwbGFpbiBudW1iZXIgaXMgdXNlZCBmb3IgcGVyZm9ybWFuY2UuXG52YXIgaGFzU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yO1xudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSA6IDB4ZWFjNztcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnBvcnRhbCcpIDogMHhlYWNhO1xudmFyIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mcmFnbWVudCcpIDogMHhlYWNiO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpIDogMHhlYWNjO1xudmFyIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wcm9maWxlcicpIDogMHhlYWQyO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wcm92aWRlcicpIDogMHhlYWNkO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbnRleHQnKSA6IDB4ZWFjZTsgLy8gVE9ETzogV2UgZG9uJ3QgdXNlIEFzeW5jTW9kZSBvciBDb25jdXJyZW50TW9kZSBhbnltb3JlLiBUaGV5IHdlcmUgdGVtcG9yYXJ5XG4vLyAodW5zdGFibGUpIEFQSXMgdGhhdCBoYXZlIGJlZW4gcmVtb3ZlZC4gQ2FuIHdlIHJlbW92ZSB0aGUgc3ltYm9scz9cblxudmFyIFJFQUNUX0FTWU5DX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmFzeW5jX21vZGUnKSA6IDB4ZWFjZjtcbnZhciBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbmN1cnJlbnRfbW9kZScpIDogMHhlYWNmO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpIDogMHhlYWQwO1xudmFyIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZScpIDogMHhlYWQxO1xudmFyIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlX2xpc3QnKSA6IDB4ZWFkODtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5tZW1vJykgOiAweGVhZDM7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QubGF6eScpIDogMHhlYWQ0O1xudmFyIFJFQUNUX0JMT0NLX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5ibG9jaycpIDogMHhlYWQ5O1xudmFyIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mdW5kYW1lbnRhbCcpIDogMHhlYWQ1O1xudmFyIFJFQUNUX1JFU1BPTkRFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucmVzcG9uZGVyJykgOiAweGVhZDY7XG52YXIgUkVBQ1RfU0NPUEVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnNjb3BlJykgOiAweGVhZDc7XG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIHJldHVybiB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgfHwgLy8gTm90ZTogaXRzIHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIGlmIGl0J3MgYSBwb2x5ZmlsbC5cbiAgdHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgfHwgdHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1JFU1BPTkRFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1NDT1BFX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQkxPQ0tfVFlQRSk7XG59XG5cbmZ1bmN0aW9uIHR5cGVPZihvYmplY3QpIHtcbiAgaWYgKHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCkge1xuICAgIHZhciAkJHR5cGVvZiA9IG9iamVjdC4kJHR5cGVvZjtcblxuICAgIHN3aXRjaCAoJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfRUxFTUVOVF9UWVBFOlxuICAgICAgICB2YXIgdHlwZSA9IG9iamVjdC50eXBlO1xuXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgIGNhc2UgUkVBQ1RfQVNZTkNfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9GUkFHTUVOVF9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPRklMRVJfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgICAgICAgcmV0dXJuIHR5cGU7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdmFyICQkdHlwZW9mVHlwZSA9IHR5cGUgJiYgdHlwZS4kJHR5cGVvZjtcblxuICAgICAgICAgICAgc3dpdGNoICgkJHR5cGVvZlR5cGUpIHtcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mVHlwZTtcblxuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufSAvLyBBc3luY01vZGUgaXMgZGVwcmVjYXRlZCBhbG9uZyB3aXRoIGlzQXN5bmNNb2RlXG5cbnZhciBBc3luY01vZGUgPSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU7XG52YXIgQ29uY3VycmVudE1vZGUgPSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTtcbnZhciBDb250ZXh0Q29uc3VtZXIgPSBSRUFDVF9DT05URVhUX1RZUEU7XG52YXIgQ29udGV4dFByb3ZpZGVyID0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbnZhciBFbGVtZW50ID0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xudmFyIEZvcndhcmRSZWYgPSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xudmFyIEZyYWdtZW50ID0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbnZhciBMYXp5ID0gUkVBQ1RfTEFaWV9UWVBFO1xudmFyIE1lbW8gPSBSRUFDVF9NRU1PX1RZUEU7XG52YXIgUG9ydGFsID0gUkVBQ1RfUE9SVEFMX1RZUEU7XG52YXIgUHJvZmlsZXIgPSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xudmFyIFN0cmljdE1vZGUgPSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xudmFyIFN1c3BlbnNlID0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbnZhciBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IGZhbHNlOyAvLyBBc3luY01vZGUgc2hvdWxkIGJlIGRlcHJlY2F0ZWRcblxuZnVuY3Rpb24gaXNBc3luY01vZGUob2JqZWN0KSB7XG4gIHtcbiAgICBpZiAoIWhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlKSB7XG4gICAgICBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IHRydWU7IC8vIFVzaW5nIGNvbnNvbGVbJ3dhcm4nXSB0byBldmFkZSBCYWJlbCBhbmQgRVNMaW50XG5cbiAgICAgIGNvbnNvbGVbJ3dhcm4nXSgnVGhlIFJlYWN0SXMuaXNBc3luY01vZGUoKSBhbGlhcyBoYXMgYmVlbiBkZXByZWNhdGVkLCAnICsgJ2FuZCB3aWxsIGJlIHJlbW92ZWQgaW4gUmVhY3QgMTcrLiBVcGRhdGUgeW91ciBjb2RlIHRvIHVzZSAnICsgJ1JlYWN0SXMuaXNDb25jdXJyZW50TW9kZSgpIGluc3RlYWQuIEl0IGhhcyB0aGUgZXhhY3Qgc2FtZSBBUEkuJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGlzQ29uY3VycmVudE1vZGUob2JqZWN0KSB8fCB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQVNZTkNfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dENvbnN1bWVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTlRFWFRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dFByb3ZpZGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST1ZJREVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc0VsZW1lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZvcndhcmRSZWYob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRnJhZ21lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTGF6eShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9MQVpZX1RZUEU7XG59XG5mdW5jdGlvbiBpc01lbW8ob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTUVNT19UWVBFO1xufVxuZnVuY3Rpb24gaXNQb3J0YWwob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUE9SVEFMX1RZUEU7XG59XG5mdW5jdGlvbiBpc1Byb2ZpbGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N0cmljdE1vZGUob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3VzcGVuc2Uob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbn1cblxuZXhwb3J0cy5Bc3luY01vZGUgPSBBc3luY01vZGU7XG5leHBvcnRzLkNvbmN1cnJlbnRNb2RlID0gQ29uY3VycmVudE1vZGU7XG5leHBvcnRzLkNvbnRleHRDb25zdW1lciA9IENvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuQ29udGV4dFByb3ZpZGVyID0gQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5FbGVtZW50ID0gRWxlbWVudDtcbmV4cG9ydHMuRm9yd2FyZFJlZiA9IEZvcndhcmRSZWY7XG5leHBvcnRzLkZyYWdtZW50ID0gRnJhZ21lbnQ7XG5leHBvcnRzLkxhenkgPSBMYXp5O1xuZXhwb3J0cy5NZW1vID0gTWVtbztcbmV4cG9ydHMuUG9ydGFsID0gUG9ydGFsO1xuZXhwb3J0cy5Qcm9maWxlciA9IFByb2ZpbGVyO1xuZXhwb3J0cy5TdHJpY3RNb2RlID0gU3RyaWN0TW9kZTtcbmV4cG9ydHMuU3VzcGVuc2UgPSBTdXNwZW5zZTtcbmV4cG9ydHMuaXNBc3luY01vZGUgPSBpc0FzeW5jTW9kZTtcbmV4cG9ydHMuaXNDb25jdXJyZW50TW9kZSA9IGlzQ29uY3VycmVudE1vZGU7XG5leHBvcnRzLmlzQ29udGV4dENvbnN1bWVyID0gaXNDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLmlzQ29udGV4dFByb3ZpZGVyID0gaXNDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLmlzRWxlbWVudCA9IGlzRWxlbWVudDtcbmV4cG9ydHMuaXNGb3J3YXJkUmVmID0gaXNGb3J3YXJkUmVmO1xuZXhwb3J0cy5pc0ZyYWdtZW50ID0gaXNGcmFnbWVudDtcbmV4cG9ydHMuaXNMYXp5ID0gaXNMYXp5O1xuZXhwb3J0cy5pc01lbW8gPSBpc01lbW87XG5leHBvcnRzLmlzUG9ydGFsID0gaXNQb3J0YWw7XG5leHBvcnRzLmlzUHJvZmlsZXIgPSBpc1Byb2ZpbGVyO1xuZXhwb3J0cy5pc1N0cmljdE1vZGUgPSBpc1N0cmljdE1vZGU7XG5leHBvcnRzLmlzU3VzcGVuc2UgPSBpc1N1c3BlbnNlO1xuZXhwb3J0cy5pc1ZhbGlkRWxlbWVudFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGU7XG5leHBvcnRzLnR5cGVPZiA9IHR5cGVPZjtcbiAgfSkoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBEYXNoSW5pdGlhbFRlcm1zIGZyb20gXCIuLi9jb21wb25lbnRzL0Rhc2hib2FyZC9GZXRjaFF1ZXJ5Q29udGFpbmVyXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuLi9jb21wb25lbnRzL0FwcFwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXIvRGFzaGJvYXJkSGVhZGVyXCI7XG5pbXBvcnQgc3R5bGVkLCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB0aGVtZSBmcm9tIFwiLi4vY29tcG9uZW50cy90aGVtZVwiO1xuaW1wb3J0IFwiLi4vc3R5bGVzLmNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkYXNoYm9hcmQoeyBpbml0aWFsU3RhdGUgfSkge1xuICAvLyBjb25zdCBbd2lkdGgsIHNldFdpZHRoXSA9IHVzZVN0YXRlKCk7XG5cbiAgLy8gZnVuY3Rpb24gdXBkYXRlV2luZG93RGltZW5zaW9ucygpIHtcbiAgLy8gICBsZXQgbmV3V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgLy8gICBzZXRXaWR0aChuZXdXaWR0aCk7XG4gIC8vICAgY29uc29sZS5sb2cod2luZG93LmlubmVyV2lkdGgpO1xuICAvLyAgIGNvbnNvbGUubG9nKHdpZHRoKTtcbiAgLy8gICBjb25zb2xlLmxvZyhuZXdXaWR0aCk7XG4gIC8vIH1cblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHVwZGF0ZVdpbmRvd0RpbWVuc2lvbnMpO1xuXG4gIC8vICAgcmV0dXJuICgpID0+IHtcbiAgLy8gICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHVwZGF0ZVdpbmRvd0RpbWVuc2lvbnMpO1xuICAvLyAgIH07XG4gIC8vIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxBcHA+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8UGFnZVdyYXA+XG4gICAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgICAgPFdyYXBwZXI+XG4gICAgICAgICAgICA8RGFzaEluaXRpYWxUZXJtcyAvPlxuICAgICAgICAgIDwvV3JhcHBlcj5cbiAgICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgICAgPC9QYWdlV3JhcD5cbiAgICA8L0FwcD5cbiAgKTtcbn1cblxuY29uc3QgUGFnZVdyYXAgPSBzdHlsZWQuZGl2YFxuICBoZWlnaHQ6IDEwMHZoO1xuICBtYXJnaW46IDAgMTB2dztcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2YyZjJmMjtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZjJmMmYyO1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG1hcmdpbjogMDtcbiAgfVxuYDtcblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBtYXJnaW46IDA7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAwO1xuICB9XG5gO1xuIiwiaW1wb3J0IHsgYWN0aW9uLCBvYnNlcnZhYmxlIH0gZnJvbSBcIm1vYnhcIjtcbmltcG9ydCB7IHVzZVN0YXRpY1JlbmRlcmluZywgb2JzZXJ2ZXIgfSBmcm9tIFwibW9ieC1yZWFjdFwiO1xuaW1wb3J0IHsgY3JlYXRlLCBwZXJzaXN0IH0gZnJvbSBcIm1vYngtcGVyc2lzdFwiO1xuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgZ2V0U3RhdGVEYXRlLFxuICBtYWtlRGF0ZUhycyxcbiAgbWFrZURhdGVEYXlzLFxufSBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWxwZXJzL0Z1bmN0aW9uc1wiO1xuXG5jb25zdCBpc1NlcnZlciA9ICFwcm9jZXNzLmJyb3dzZXI7XG51c2VTdGF0aWNSZW5kZXJpbmcoaXNTZXJ2ZXIpO1xuXG5leHBvcnQgY2xhc3MgU3RvcmUge1xuICBAb2JzZXJ2YWJsZSBsYXN0VXBkYXRlID0gMDtcbiAgQHBlcnNpc3QgQG9ic2VydmFibGUgbGlnaHQgPSB0cnVlO1xuICBAcGVyc2lzdCBAb2JzZXJ2YWJsZSBpc0F1dGggPSBmYWxzZTtcbiAgQHBlcnNpc3QgQG9ic2VydmFibGUgc3RhcnREYXRlID0gbnVsbDtcbiAgQHBlcnNpc3QgQG9ic2VydmFibGUgZW5kRGF0ZSA9IG51bGw7XG4gIEBwZXJzaXN0IEBvYnNlcnZhYmxlIHN5bWJvbCA9IFwiWEJUVVNEXCI7XG5cbiAgQHBlcnNpc3QgQG9ic2VydmFibGUgZGF0ZSA9IFwiVG9kYXlcIjtcbiAgQG9ic2VydmFibGUgcG5sID0gMDtcbiAgQG9ic2VydmFibGUgZ2xvYmFsSGFzaCA9IFtdO1xuICBAcGVyc2lzdCBAb2JzZXJ2YWJsZSB0ZW1wTm90ZXMgPSBbXTtcbiAgQHBlcnNpc3QgQG9ic2VydmFibGUgdGVtcFRhZ3MgPSBbXTtcbiAgQHBlcnNpc3QgQG9ic2VydmFibGUgaGFzVGVtcFRhZ3MgPSBmYWxzZTtcblxuICBAcGVyc2lzdCBAb2JzZXJ2YWJsZSBzaW5nbGVUcmFkZSA9IHt9O1xuICBAcGVyc2lzdCBAb2JzZXJ2YWJsZSBoYXNTaW5nbGVUcmFkZSA9IGZhbHNlO1xuICBAcGVyc2lzdCBAb2JzZXJ2YWJsZSBpc1NpbmdsZU5vdGVzID0gZmFsc2U7XG5cbiAgQGFjdGlvbiBjaGFuZ2VEYXRlID0gKG5ld0RhdGUpID0+IHtcbiAgICBsZXQgZGF0ZXMgPSBnZXRTdGF0ZURhdGUobmV3RGF0ZSk7XG4gICAgdGhpcy5kYXRlID0gbmV3RGF0ZTtcbiAgICB0aGlzLnN0YXJ0RGF0ZSA9IGRhdGVzLnN0YXJ0O1xuICAgIHRoaXMuZW5kRGF0ZSA9IGRhdGVzLmVuZDtcbiAgfTtcblxuICBAYWN0aW9uIGFkZFBubCA9IChwbmwpID0+IHtcbiAgICB0aGlzLnBubCArPSBwbmw7XG4gIH07XG5cbiAgQGFjdGlvbiByZXNldFBubCA9ICgpID0+IHtcbiAgICB0aGlzLnBubCA9IDA7XG4gIH07XG5cbiAgQGFjdGlvbiBwdXNoR2xvYmFsSGFzaCA9IChoYXNoKSA9PiB7XG4gICAgdGhpcy5nbG9iYWxIYXNoLnB1c2goaGFzaCk7XG4gIH07XG5cbiAgQGFjdGlvbiBhZGRUZW1wTm90ZSA9ICh0aW1lLCBub3RlKSA9PiB7XG4gICAgaWYgKHRoaXMudGVtcE5vdGVzWzBdID09IHVuZGVmaW5lZCkge1xuICAgICAgbGV0IG5ld05vdGUgPSB7fTtcbiAgICAgIG5ld05vdGVbXCJub3RlXCJdID0gbm90ZTtcbiAgICAgIG5ld05vdGVbXCJ0aW1lXCJdID0gdGltZTtcbiAgICAgIHRoaXMudGVtcE5vdGVzLnB1c2gobmV3Tm90ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBhbHJlYWR5UHJlc2VudE5vdGUgPSBmYWxzZTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50ZW1wTm90ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHRoaXMudGVtcE5vdGVzW2ldLnRpbWUgPT0gdGltZSkge1xuICAgICAgICAgIHRoaXMudGVtcE5vdGVzW2ldLm5vdGUgPSBub3RlO1xuICAgICAgICAgIGFscmVhZHlQcmVzZW50Tm90ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGkgPT0gdGhpcy50ZW1wTm90ZXMubGVuZ3RoIC0gMSAmJiBhbHJlYWR5UHJlc2VudE5vdGUgPT0gZmFsc2UpIHtcbiAgICAgICAgICBsZXQgbmV3Tm90ZSA9IHt9O1xuICAgICAgICAgIG5ld05vdGVbXCJub3RlXCJdID0gbm90ZTtcbiAgICAgICAgICBuZXdOb3RlW1widGltZVwiXSA9IHRpbWU7XG4gICAgICAgICAgdGhpcy50ZW1wTm90ZXMucHVzaChuZXdOb3RlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBAYWN0aW9uIGNsZWFyVGVtcE5vdGVzID0gKCkgPT4ge1xuICAgIHRoaXMudGVtcE5vdGVzID0gW107XG4gIH07XG5cbiAgQGFjdGlvbiBhZGRUZW1wVGFnID0gKHRpbWUsIHRhZykgPT4ge1xuICAgIGxldCBuZXdUYWcgPSB7fTtcbiAgICBuZXdUYWdbXCJ0YWdcIl0gPSB0YWc7XG4gICAgbmV3VGFnW1widGltZVwiXSA9IHRpbWU7XG4gICAgdGhpcy50ZW1wVGFncy5wdXNoKG5ld1RhZyk7XG4gICAgdGhpcy5jaGFuZ2VIYXNUZW1wVGFncygpO1xuICB9O1xuXG4gIEBhY3Rpb24gY2xlYXJUZW1wVGFncyA9ICgpID0+IHtcbiAgICB0aGlzLnRlbXBUYWdzID0gW107XG4gIH07XG5cbiAgQGFjdGlvbiBjaGFuZ2VIYXNUZW1wVGFncyA9ICgpID0+IHtcbiAgICB0aGlzLmhhc1RlbXBUYWdzID0gdHJ1ZTtcbiAgfTtcbiAgQGFjdGlvbiByZXNldEhhc1RlbXBUYWdzID0gKCkgPT4ge1xuICAgIHRoaXMuaGFzVGVtcFRhZ3MgPSBmYWxzZTtcbiAgfTtcbiAgQGFjdGlvbiBzZXRTeW1ib2wgPSAobmV3U3ltYm9sKSA9PiB7XG4gICAgdGhpcy5zeW1ib2wgPSBuZXdTeW1ib2w7XG4gIH07XG5cbiAgQGFjdGlvbiByZXNldFBubCA9ICgpID0+IHtcbiAgICB0aGlzLnBubCA9IDA7XG4gIH07XG5cbiAgQGFjdGlvbiBzZXRTaW5nbGVUcmFkZSA9IChkYXQpID0+IHtcbiAgICB0aGlzLnNpbmdsZVRyYWRlID0gZGF0O1xuICB9O1xufVxuXG5sZXQgc3RvcmUgPSBudWxsO1xuZXhwb3J0IGNvbnN0IGh5ZHJhdGUgPSBjcmVhdGUoKTtcbmV4cG9ydCBjb25zdCBTdG9yZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KG5ldyBTdG9yZSgpKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVTdG9yZShpbml0aWFsRGF0YSkge1xuICAvLyBBbHdheXMgbWFrZSBhIG5ldyBzdG9yZSBpZiBzZXJ2ZXIsIG90aGVyd2lzZSBzdGF0ZSBpcyBzaGFyZWQgYmV0d2VlbiByZXF1ZXN0c1xuICBpZiAoaXNTZXJ2ZXIpIHtcbiAgICByZXR1cm4gbmV3IFN0b3JlKGlzU2VydmVyLCBpbml0aWFsRGF0YSk7XG4gIH1cbiAgaWYgKHN0b3JlID09PSBudWxsKSB7XG4gICAgc3RvcmUgPSBuZXcgU3RvcmUoaXNTZXJ2ZXIsIGluaXRpYWxEYXRhKTtcbiAgfVxuXG4gIGh5ZHJhdGUoXCJzdG9yZVwiLCBzdG9yZSkudGhlbigoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJzb21lU3RvcmUgaGFzIGJlZW4gaHlkcmF0ZWRcIik7XG4gIH0pO1xuXG4gIHJldHVybiBzdG9yZTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZDMtZm9ybWF0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImQzLXRpbWUtZm9ybWF0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZhc3QtZGVlcC1lcXVhbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLXRhZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcy1jb29raWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9ieFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb2J4LXBlcnNpc3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9ieC1yZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb2J4LXJlYWN0LWxpdGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzLWV4YWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWFwb2xsb1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1hdXRvc2l6ZS10ZXh0YXJlYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kYXRlcGlja2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zdG9ja2NoYXJ0c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zdG9ja2NoYXJ0cy9saWIvYW5ub3RhdGlvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zdG9ja2NoYXJ0cy9saWIvYXhlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zdG9ja2NoYXJ0cy9saWIvY29vcmRpbmF0ZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc3RvY2tjaGFydHMvbGliL2hlbHBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zdG9ja2NoYXJ0cy9saWIvaW5kaWNhdG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXN0b2NrY2hhcnRzL2xpYi9zY2FsZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zdG9ja2NoYXJ0cy9saWIvc2VyaWVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXN0b2NrY2hhcnRzL2xpYi90b29sdGlwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXN0b2NrY2hhcnRzL2xpYi91dGlsc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdHN0cmFwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlY2hhcnRzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVybFwiKTsiXSwic291cmNlUm9vdCI6IiJ9