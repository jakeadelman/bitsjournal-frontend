webpackHotUpdate("static/development/pages/dashboard.js",{

/***/ "./components/Helpers/Functions.js":
/*!*****************************************!*\
  !*** ./components/Helpers/Functions.js ***!
  \*****************************************/
/*! exports provided: formatDateMonthOnly, getStateDate, formateDateForRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDateMonthOnly", function() { return formatDateMonthOnly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStateDate", function() { return getStateDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formateDateForRow", function() { return formateDateForRow; });
function formatDateMonthOnly(date) {
  var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
  var utcDate = date;
  var theDate = new Date(utcDate);
  var day = theDate.getDate();
  var hours = theDate.getHours();
  var mins = theDate.getMinutes();
  var monthIndex = theDate.getMonth();
  var year = theDate.getFullYear();
  return day + " " + monthNames[monthIndex] + ", " + hours + ":" + mins;
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

function formateDateForRow(date) {
  Date.prototype.yyyymmdd = function () {
    var mm = this.getMonth() + 1; // getMonth() is zero-based

    var dd = this.getDate();
    return [this.getFullYear(), (mm > 9 ? "" : "0") + mm, (dd > 9 ? "" : "0") + dd].join("");
  };

  var datu = new Date(date); // let newDate = datu.yyyymmdd();

  return datu.toString();
}

/***/ })

})
//# sourceMappingURL=dashboard.js.2399c1108096d16158fd.hot-update.js.map