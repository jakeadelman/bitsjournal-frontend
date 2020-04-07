webpackHotUpdate("static/development/pages/dashboard.js",{

/***/ "./components/Dashboard/helpers.js":
/*!*****************************************!*\
  !*** ./components/Dashboard/helpers.js ***!
  \*****************************************/
/*! exports provided: getNewDat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNewDat", function() { return getNewDat; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getNewDat =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(oldDat, hashtags) {
    var newTrades, oldTrades, i, tradeHashtags, oldTrade, j, m;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log("IN GET NEW DAT");
            console.log(oldDat);
            newTrades = [];
            oldTrades = oldDat.fetchTradeHistory;
            i = 0;

          case 5:
            if (!(i < oldTrades.length)) {
              _context.next = 16;
              break;
            }

            console.log("trade " + i.toString());
            tradeHashtags = oldTrades[i].hashtags.slice(",");
            oldTrade = oldTrades[i]; // console.log(tradeHashtags, "THIS TRADE HASHTAGS");

            if (tradeHashtags != "undefined") {
              for (j = 0; j < tradeHashtags.length; j++) {
                for (m = 0; m < hashtags.length; m++) {
                  if (hashtags[m] == tradeHashtags[j]) {
                    console.log("EQUALS");
                    newTrades.push(oldTrade);
                  }
                }
              }
            }

            if (!(i == oldTrades.length - 1)) {
              _context.next = 13;
              break;
            }

            console.log(newTrades, "NEW TRADES");
            return _context.abrupt("return", newTrades);

          case 13:
            i++;
            _context.next = 5;
            break;

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getNewDat(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/***/ })

})
//# sourceMappingURL=dashboard.js.38b36217044a39b17b24.hot-update.js.map