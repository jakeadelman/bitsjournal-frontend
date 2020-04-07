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
    if (tradeHashtags != "undefined") {
      for (let j = 0; j < tradeHashtags.length; j++) {
        for (let m = 0; m < hashtags.length; m++) {
          if (hashtags[m] == tradeHashtags[j]) {
            // console.log("EQUALS");
            newTrades.push(oldTrade);
          }
        }
      }
    }
    if (i == oldTrades.length - 1) {
      oldDat.fetchTradeHistory = newTrades;
      //   console.log(oldDat, "NEW Dat");
      return oldDat;
    }
  }
};
