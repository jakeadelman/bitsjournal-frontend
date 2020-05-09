export const getNewDat = async (oldDat, hashtags) => {
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
