webpackHotUpdate("static/development/pages/dashboard.js",{

/***/ "./components/Charts2/helpers.js":
/*!***************************************!*\
  !*** ./components/Charts2/helpers.js ***!
  \***************************************/
/*! exports provided: timeCompare, getYRangeNums, findYValSell, findYValBuy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeCompare", function() { return timeCompare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getYRangeNums", function() { return getYRangeNums; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findYValSell", function() { return findYValSell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findYValBuy", function() { return findYValBuy; });
var timeCompare = function timeCompare(d, datu, timeframe) {
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
    // console.log(
    //   d,
    //   d.date.getHours() === datu.getHours() &&
    //     d.date.getDate() === datu.getDate()
    // );
    return d.date.getHours() === datu.getHours() && d.date.getDate() === datu.getDate();
  }

  if (timeframe == "1d") {
    return d.date.getDate() === datu.getDate();
  }
};
var getYRangeNums = function getYRangeNums(data) {
  var lowNum;
  var highNum;

  for (var i = 0; i < data.length; i++) {
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
      var arr = [];
      arr.push(lowNum);
      arr.push(highNum);
      console.log(arr);
      return arr;
    }
  }
};
var findYValSell = function findYValSell(yLow, yHigh, price) {
  // console.log(yLow, yHigh, price);
  var fullRange = yHigh - yLow;
  var myRange = yHigh - price;
  console.log(yHigh - myRange), "VALLL";
  return yHigh - myRange; // return myRange / (fullRange * 1.5);
  // return yHigh;
};
var findYValBuy = function findYValBuy(yLow, yHigh, price) {
  // console.log(yLow, yHigh, price);
  var fullRange = yHigh - yLow;
  var myRange = yHigh - price; // return myRange / (fullRange / 1.5);

  return yLow;
};

/***/ })

})
//# sourceMappingURL=dashboard.js.5b1216b217dda7d5109f.hot-update.js.map