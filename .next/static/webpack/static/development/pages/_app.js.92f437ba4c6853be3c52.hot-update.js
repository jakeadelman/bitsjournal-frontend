webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Helpers/Functions.js":
/*!*****************************************!*\
  !*** ./components/Helpers/Functions.js ***!
  \*****************************************/
/*! exports provided: formatDateMonthOnly, getStateDate, calcCommission */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDateMonthOnly", function() { return formatDateMonthOnly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStateDate", function() { return getStateDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcCommission", function() { return calcCommission; });
function formatDateMonthOnly(date) {
  var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
  var utcDate = date;
  var theDate = new Date(utcDate);
  var day = theDate.getDate();
  var hours = addZeroBefore(theDate.getHours());
  var mins = addZeroBefore(theDate.getMinutes());
  var monthIndex = theDate.getMonth();
  var year = theDate.getFullYear();
  return day + " " + monthNames[monthIndex] + ", " + hours + ":" + mins;
}

function addZeroBefore(n) {
  return (n < 10 ? "0" : "") + n;
}

function getStateDate(input) {
  if (input == 1) {
    var dates = {};
    dates.end = makeDateHrs(0);
    dates.start = makeDateHrs(24);
    console.log("is today");
    return dates;
  }

  if (input == 2) {
    var _dates = {};
    _dates.end = makeDateHrs(1);
    _dates.start = makeDateDays(2);
    console.log("is yesterday");
    return _dates;
  }

  if (input == 3) {
    var _dates2 = {};
    _dates2.end = makeDateHrs(0);
    _dates2.start = makeDateDays(7);
    console.log("is this week");
    return _dates2;
  }

  if (input == 4) {
    var _dates3 = {};
    _dates3.end = makeDateHrs(0);
    _dates3.start = makeDateDays(30);
    console.log("is this month");
    return _dates3;
  }
}

function makeDateHrs(hrsBack) {
  if (hrsBack == 0) {
    var dt = new Date(new Date().toUTCString());
    dt = dt.toISOString();
    return dt;
  } else {
    var _dt = new Date(new Date().toUTCString());

    _dt.setHours(_dt.getHours() - hrsBack);

    _dt = _dt.toISOString();
    return _dt;
  }
}

function makeDateDays(num) {
  var dt = new Date(new Date().toUTCString());
  dt.setDate(dt.getDate() - num);
  dt = dt.toISOString();
  console.log("getting days back");
  return dt;
}

function calcCommission(price, side, qty, leavesQty, orderType) {
  var realQty = qty - leavesQty;
  var commission;

  if (orderType == "Market") {
    commission = realQty * 0.0075 / price;
  }

  if (orderType.includes("Stop")) {
    commission = realQty * 0.0075 / price;
  }

  if (orderType == "Limit") {
    commission = realQty * 0.0025 / price;
  }

  return commission;
}

/***/ })

})
//# sourceMappingURL=_app.js.92f437ba4c6853be3c52.hot-update.js.map