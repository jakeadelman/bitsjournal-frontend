export const getNewDat = async (oldDat, hashtags) => {
  //   console.log("IN GET NEW DAT");
  //   console.log(oldDat);
  let newTrades = [];
  let oldTrades = oldDat.fetchTradeHistory;
  for (let i = 0; i < oldTrades.length; i++) {
    let tradeHashtags = oldTrades[i].hashtags.split(",");
    // console.log("trade " + i.toString() + " hashtags ", tradeHashtags);
    let oldTrade = oldTrades[i];
    // console.log(tradeHashtags, "THIS TRADE HASHTAGS");
    console.log(tradeHashtags);
    if (tradeHashtags[0] != "undefined") {
      for (let j = 0; j < tradeHashtags.length; j++) {
        for (let m = 0; m < hashtags.length; m++) {
          if (hashtags[m] == tradeHashtags[j]) {
            // console.log("EQUALS");
            if (newTrades[0] == undefined) {
              newTrades.push(oldTrade);
            } else {
              newTrades.push(oldTrade);
              // let isIn = false;
              // for (let k = 0; k < newTrades.length; k++) {
              //   if (newTrades[k].id == oldTrade.id) {
              //     let isIn = true;
              //   }
              //   if (k == newTrades.length - 1) {
              //     if (isIn == false) {
              //       newTrades.push(oldTrade);
              //     } else {
              //       console.log(newTrades);
              //     }
              //   }
              // }
            }
          }
        }
      }
    }
    if (i == oldTrades.length - 1) {
      console.log(newTrades, "FILTERED TRADES");
      return newTrades;
      // let newDat = oldDat;
      // newDat.fetchTradeHistory = newTrades;
      // //   console.log(oldDat, "NEW Dat");
      // return newDat;
    }
  }
};
