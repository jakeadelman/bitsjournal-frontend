export async function calcTrades(inputData) {
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
        totBuyContractsMult +=
          inputData[i].orderQty * parseFloat(inputData[i].price);
      }
      if (inputData[i].side == "Sell" && inputData[i].leavesQty == 0) {
        sellNum += 1;
        totSellContracts += inputData[i].orderQty;
        totSellContractsMult +=
          inputData[i].orderQty * parseFloat(inputData[i].price);
      }
      if (
        inputData[i].orderType == "Limit" &&
        inputData[i].execType !== "Funding"
      ) {
        totCommission += (realQty * 0.0025) / inputData[i].price;
      }
      if (inputData[i].orderType == "Market") {
        totCommission -= (realQty * 0.0075) / inputData[i].price;
      }
      if (inputData[i].orderType.includes("Stop")) {
        totCommission -= (realQty * 0.0075) / inputData[i].price;
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
        }
        // this.state.cumQty = totBuyContracts;
        let thePnl = (1 / avgBuyPrice - 1 / avgSellPrice) * totSellContracts;
        if (thePnl != null) {
          let myPnl = thePnl + totCommission;
          return new Promise((resolve) => {
            let end = {};
            end["pnl"] = myPnl;
            end["avgEntryPrice"] = avgEntry;
            end["avgExitPrice"] = avgExit;
            end["cumQty"] = totBuyContracts;
            resolve(end);
          });
          //   store.addPnl(myPnl);
        } else {
          return new Promise((resolve) => {
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
        totBuyContractsMult +=
          inputData[i].orderQty * parseFloat(inputData[i].price);
        if (inputData[0].orderQty == 40000) {
          console.log(
            "BUY SIDE",
            inputData[i],
            realQty,
            totSellContracts,
            totBuyContracts,
            totSellContractsMult
          );
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
          totSellContractsMult +=
            inputData[i].orderQty * parseFloat(inputData[i].price);
        }
        if (inputData[0].orderQty == 40000) {
          console.log(
            "SELL SIDE",
            inputData[i],
            realQty,
            totSellContracts,
            totBuyContracts,
            totSellContractsMult
          );
        }
      }
      if (
        inputData[i].orderType == "Limit" &&
        inputData[i].execType !== "Funding"
      ) {
        totCommission += (realQty * 0.0025) / inputData[i].price;
      }
      if (inputData[i].orderType == "Market") {
        totCommission -= (realQty * 0.0075) / inputData[i].price;
      }
      if (inputData[i].orderType.includes("Stop")) {
        totCommission -= (realQty * 0.0075) / inputData[i].price;
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
          return new Promise((resolve) => {
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
          return new Promise((resolve) => {
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
