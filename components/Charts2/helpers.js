export const timeCompare = (d, datu, timeframe) => {
  var MS_PER_MINUTE = 60000;
  var coeffFive = 1000 * 60 * 5;
  // var coeffOne = 1000 * 60 * 5;
  var coeffOne = 1000 * 60;
  if (timeframe == "1m") {
    return (
      Math.round(d.date.getTime() / coeffOne) * coeffOne ===
      Math.round(datu.getTime() / coeffOne) * coeffOne
    );
  }
  if (timeframe == "5m") {
    return (
      Math.round(d.date.getTime() / coeffFive) * coeffFive ===
      Math.round(datu.getTime() / coeffFive) * coeffFive
    );
  }
  if (timeframe == "1h") {
    // if (
    //   (d,
    //   d.date.getHours() === datu.getHours() + 1 &&
    //     d.date.getDate() === datu.getDate())
    // ) {
    //   console.log(
    //     d,
    //     d.date.getHours(),
    //     datu.getHours(),
    //     d.date.getDate(),
    //     datu.getDate(),
    //     d,
    //     datu
    //   );
    // }
    return (
      d.date.getHours() === datu.getHours() + 1 &&
      d.date.getDate() === datu.getDate()
    );
  }
  if (timeframe == "1d") {
    return d.date.getDate() === datu.getDate();
  }
};

export const getYRangeNums = (data) => {
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

export const findYValSell = (yLow, yHigh, price) => {
  // let fullRange = yHigh - yLow;
  // let myRange = yHigh - parseInt(price);
  // let outOf = myRange / fullRange;
  // let multiplied = outOf * 180 + 70;
  // console.log(outOf, multiplied);
  return 80;
};
export const findYValBuy = (yLow, yHigh, price) => {
  let fullRange = yHigh - yLow;
  let myRange = yHigh - parseInt(price);
  let outOf = myRange / fullRange;
  let multiplied = outOf * 180 + 100;
  console.log(outOf, multiplied);
  return multiplied;
};
