export function formatDateMonthOnly(date) {
  var monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  let utcDate = date;
  let theDate = new Date(utcDate);

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

export function getStateDate(input) {
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

export function calcCommission(price, side, qty, leavesQty, orderType) {
  let realQty = qty - leavesQty;
  let commission;
  if (orderType == "Market") {
    commission = (realQty * 0.0075) / price;
    commission = commission * -1;
  }
  if (orderType.includes("Stop")) {
    commission = (realQty * 0.0075) / price;
    commission = commission * -1;
  }
  if (orderType == "Limit") {
    commission = (realQty * 0.0025) / price;
  }
  return commission.toFixed(5);
}
