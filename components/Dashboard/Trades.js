import React, { PureComponent, Component } from "react";
import {
  LineChart,
  AreaChart,
  Area,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import styled, { ThemeProvider } from "styled-components";
import { wideFont, smallFont } from "../shared/helpers";
import theme from "../theme";
import {
  formatDateMonthOnly,
  calcCommission,
  formatDateShort,
  formatDateShortWithHour,
} from "../Helpers/Functions.js";
import { inject, observer } from "mobx-react";
import MainChart from "./Chart/index";
import Notes from "./Notes/Notes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import equal from "fast-deep-equal";
import TextareaAutosize from "react-autosize-textarea";
import MyTextArea from "./Notes/TextArea";
import { when, reaction } from "mobx";

@inject(["store"])
@observer
export default class Example extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
      data: [],
      fullTrades: [],
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.createFullTrades = this.createFullTrades.bind(this);
  }

  createFullTrades(data) {
    let fullRay = [];
    let fullTrades = [];
    for (let i = 0; i < data.fetchTradeHistory.length; i++) {
      fullRay.unshift(data.fetchTradeHistory[i]);
      if (i == data.fetchTradeHistory.length - 1) {
        for (let j = 0; j < fullRay.length; j++) {
          let dat = fullRay[j];
          // dat.timestamp = formatDateForRow(dat.timestamp);
          // fullRay[j] = dat;
          if (dat.trdStart == true) {
            let sliced = fullRay.slice(j, fullRay.length);
            for (let k = 0; k < sliced.length; k++) {
              if (sliced[k].trdEnd == true && k > 0) {
                let newsliced = sliced.slice(0, k + 1);
                fullTrades.unshift(newsliced);
                break;
              }
            }
          }
          if (j == fullRay.length - 1) {
            let returnVal = {};
            returnVal["initData"] = this.props.initData;
            returnVal["data"] = fullRay;
            returnVal["fullTrades"] = fullTrades;
            return returnVal;
          }
        }
      }
    }
  }

  filter() {}

  componentDidUpdate(prevProps) {
    if (!equal(this.props.filteredData, prevProps.filteredData)) {
      console.log("WAS NOT EQUAL");
      // this.updateTrades(this.props.data);
      let newFullTrades = [];
      let firstFullTrades = this.createFullTrades(this.props.data);
      firstFullTrades = firstFullTrades.fullTrades;
      console.log(this.props.data);
      if (this.props.filteredData == null) {
        console.log("was null", firstFullTrades);
        this.setState({ fullTrades: firstFullTrades });
      } else {
        for (let i = 0; i < firstFullTrades.length; i++) {
          for (let j = 0; j < this.props.filteredData.length; j++) {
            if (firstFullTrades[i][0].id == this.props.filteredData[j].id) {
              console.log("ADDING", firstFullTrades[i]);
              newFullTrades.unshift(firstFullTrades[i]);
            }
          }
          if (i == firstFullTrades.length - 1) {
            console.log(newFullTrades, "NEW FULL");
            this.setState({ fullTrades: newFullTrades });
          }
        }
      }
    }
  }

  componentDidMount() {
    console.log("MOUNTING");
    let returned = this.createFullTrades(this.props.data);
    if (returned != undefined) {
      this.setState({
        data: returned.fullRay,
        fullTrades: returned.fullTrades,
        initData: returned.initData,
      });
    } else {
      this.setState({
        data: this.props.initData,
        initData: this.props.initData,
      });
    }
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);

    this.singleNotesReaction = reaction(
      () => this.props.store.isSingleNotes,
      (notifications, reaction) => {
        console.log(this.props.store.isSingleNotes);
        if (this.props.store.isSingleNotes == false) {
          this.setState({ isSingleNotes: false });
        } else {
          this.setState({ isSingleNotes: true });
        }
      }
    );
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    if (window.innerWidth < 768) {
      this.setState({
        width: window.innerWidth,
        height: window.innerHeight,
        chartWidth: window.innerWidth * 0.9,
      });
    } else if (window.innerWidth < 1024) {
      this.setState({
        width: window.innerWidth,
        height: window.innerHeight,
        chartWidth: window.innerWidth * 0.9 - 179,
      });
    } else if (window.innerWidth >= 1024) {
      this.setState({
        width: window.innerWidth,
        height: window.innerHeight,
        chartWidth: window.innerWidth * 0.8 - 179,
      });
    }
  }

  render() {
    return (
      <ThemeProvider theme={theme(false)}>
        <div style={{ minWidth: this.state.chartWidth }}>
          {this.state.fullTrades.map((slic, i) => {
            console.log(slic);
            return (
              <MakeCol
                slic={slic}
                onemin={this.props.data.fetchOneMinuteCandleHistory}
                fivemin={this.props.data.fetchFiveMinuteCandleHistory}
                onehour={this.props.data.fetchOneHourCandleHistory}
                oneday={this.props.data.fetchOneDayCandleHistory}
                key={i}
              />
            );
          })}
        </div>
      </ThemeProvider>
    );
  }
}

@inject("store")
@observer
class MakeCol extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      pnl: 0,
      avgEntryPrice: 0,
      avgExitPrice: 0,
      clicked: false,
      cumQty: 0,
      readMoreClicked: false,
    };
    this.readMoreClicked = this.readMoreClicked.bind(this);
    this.clicked = this.clicked.bind(this);
    this.getSlicData = this.getSlicData.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  updateWindowDimensions() {
    console.log(this.state.width);
    this.setState({
      width: window.innerWidth,
    });
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }
  componentDidMount() {
    console.log("MOUNTED", this.props.slic);
    window.addEventListener("resize", this.updateWindowDimensions);
  }
  componentDidUpdate(prevProps) {
    if (!equal(this.props.slic, prevProps.slic)) {
      console.log("UPDATED");
      this.getSlicData();
    }
  }

  componentWillMount() {
    this.getSlicData();
    this.updateWindowDimensions();
  }

  getSlicData() {
    this.state.data = this.props.slic;
    if (
      this.state.data[0].side == "Buy" &&
      this.state.data[0].execType == "Trade"
    ) {
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
      for (let i = 0; i < this.state.data.length; i++) {
        realQty = this.state.data[i].orderQty - this.state.data[i].leavesQty;
        if (this.state.data[i].side == "Buy") {
          buyNum += 1;
          totBuyContracts += realQty;
          totBuyContractsMult += realQty * parseFloat(this.state.data[i].price);
        }
        if (this.state.data[i].side == "Sell") {
          sellNum += 1;
          totSellContracts += realQty;
          totSellContractsMult +=
            realQty * parseFloat(this.state.data[i].price);
        }
        // console.log("REAL QTY", realQty);
        if (
          this.state.data[i].orderType == "Limit" &&
          this.state.data[i].execType !== "Funding"
        ) {
          totCommission += (realQty * 0.0025) / this.state.data[i].price;
        }
        if (this.state.data[i].orderType == "Market") {
          totCommission -= (realQty * 0.0075) / this.state.data[i].price;
        }
        if (this.state.data[i].orderType.includes("Stop")) {
          totCommission -= (realQty * 0.0075) / this.state.data[i].price;
        }
        if (i == this.state.data.length - 1) {
          avgBuyPrice = totBuyContractsMult / totBuyContracts;
          avgSellPrice = totSellContractsMult / totSellContracts;
          let avgExit;
          let avgEntry;
          if (avgBuyPrice != null) {
            // this.state.avgEntryPrice = avgBuyPrice;
            avgEntry = avgBuyPrice;
          } else {
            avgEntry = 0;
            // this.state.avgEntryPrice = 0;
          }
          if (avgSellPrice != null) {
            // this.state.avgExitPrice = avgSellPrice;
            avgExit = avgSellPrice;
          } else {
            // this.state.avgExitPrice = 0;
            avgExit = 0;
          }
          this.state.cumQty = totBuyContracts;
          let thePnl = (1 / avgBuyPrice - 1 / avgSellPrice) * totSellContracts;
          if (thePnl != null) {
            let myPnl = thePnl + totCommission;
            this.setState(
              {
                pnl: myPnl,
                avgEntryPrice: avgEntry,
                avgExitPrice: avgExit,
              },
              () => console.log("STATE IS SET")
            );
            this.props.store.addPnl(myPnl);
          } else {
            // this.state.pnl = 0;
            this.setState(
              {
                pnl: 0,
                avgEntryPrice: avgEntry,
                avgExitPrice: avgExit,
              },
              () => console.log("STATE IS SET")
            );
          }
        }
      }
    }
    if (
      this.state.data[0].side == "Sell" &&
      this.state.data[0].execType == "Trade"
    ) {
      let totBuyContracts = 0;
      let totSellContracts = 0;
      let buyNum = 0;
      let sellNum = 0;
      let totBuyContractsMult = 0;
      let totSellContractsMult = 0;
      let realQty = 0;
      let totCommission = 0;
      for (let i = 0; i < this.state.data.length; i++) {
        realQty = this.state.data[i].orderQty - this.state.data[i].leavesQty;
        if (this.state.data[i].side == "Buy") {
          // totBuyPrice += parseFloat(this.state.data[i].price);
          buyNum += 1;
          totBuyContracts += realQty;
          totBuyContractsMult += realQty * parseFloat(this.state.data[i].price);
        }
        if (this.state.data[i].side == "Sell") {
          sellNum += 1;
          totSellContracts += realQty;
          totSellContractsMult +=
            realQty * parseFloat(this.state.data[i].price);
        }
        // console.log("REAL QTY", realQty);
        if (
          this.state.data[i].orderType == "Limit" &&
          this.state.data[i].execType !== "Funding"
        ) {
          totCommission += (realQty * 0.0025) / this.state.data[i].price;
        }
        if (this.state.data[i].orderType == "Market") {
          totCommission -= (realQty * 0.0075) / this.state.data[i].price;
        }
        if (this.state.data[i].orderType.includes("Stop")) {
          totCommission -= (realQty * 0.0075) / this.state.data[i].price;
        }
        if (i == this.state.data.length - 1) {
          let avgBuyPrice = totBuyContractsMult / totBuyContracts;
          let avgSellPrice = totSellContractsMult / totSellContracts;
          let pnl = (1 / avgBuyPrice - 1 / avgSellPrice) * totBuyContracts;
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
          this.state.cumQty = totSellContracts;
          if (pnl != null) {
            let myPnl = pnl + totCommission;
            this.setState(
              {
                pnl: myPnl,
                avgEntryPrice: avgEntry,
                avgExitPrice: avgExit,
              },
              () => console.log("STATE IS SET")
            );
            this.props.store.addPnl(myPnl);
          } else {
            // this.state.pnl = 0;
            this.setState(
              {
                pnl: 0,
                avgEntryPrice: avgEntry,
                avgExitPrice: avgExit,
              },
              () => console.log("STATE IS SET")
            );
          }
        }
      }
    }
  }

  clicked(dat) {
    console.log("CLICKEEEE", dat);
    if (this.state.clicked == false) {
      this.props.store.setSingleTrade(dat);
      this.props.store.hasSingleTrade = true;
      console.log(this.props.store.singleTrade, "SINGLEEE");
      this.setState({ clicked: true });
    } else {
      this.props.store.hasSingleTrade = false;
      this.setState({ clicked: false });
      console.log(this.props.store.singleTrade, "SINGLEEE");
    }
  }

  readMoreClicked() {
    console.log("READ MORE CLICKED");
    if (this.state.readMoreClicked == false) {
      this.setState({ readMoreClicked: true });
    } else {
      this.setState({ readMoreClicked: false });
    }
  }

  render() {
    if (this.state.clicked == false) {
      return (
        <ContainDiv onClick={() => this.clicked(this.state.data)}>
          <NextToDiv>
            {formatDateMonthOnly(this.state.data[0].timestamp)}
          </NextToDiv>
          <NextToDiv>
            {formatDateMonthOnly(
              this.state.data[this.state.data.length - 1].timestamp
            )}
          </NextToDiv>
          <IsShort side={this.state.data[0].side} />
          <NextToDiv>${this.state.avgEntryPrice.toFixed(1)}</NextToDiv>
          <NextToDiv>${this.state.avgExitPrice.toFixed(1)}</NextToDiv>
          <NextToDiv>{this.state.cumQty}</NextToDiv>
          <NextToDiv>{this.state.pnl.toFixed(4) + "xbt"}</NextToDiv>
        </ContainDiv>
      );
    } else {
      if (this.props.store.isSingleNotes == false) {
        return (
          <TotalDetails>
            <MoreBoxTall>
              <ContainDivClicked onClick={() => this.clicked(this.state.data)}>
                <NextToDiv>
                  {formatDateMonthOnly(this.state.data[0].timestamp)}
                </NextToDiv>
                <NextToDiv>
                  {formatDateMonthOnly(
                    this.state.data[this.state.data.length - 1].timestamp
                  )}
                </NextToDiv>
                <IsShort side={this.state.data[0].side} />
                <NextToDiv>${this.state.avgEntryPrice.toFixed(1)}</NextToDiv>
                <NextToDiv>${this.state.avgExitPrice.toFixed(1)}</NextToDiv>
                <NextToDiv>{this.state.cumQty}</NextToDiv>
                <NextToDiv>{this.state.pnl.toFixed(4) + "xbt"}</NextToDiv>
              </ContainDivClicked>
            </MoreBoxTall>

            <MainChart
              onemin={this.props.onemin}
              fivemin={this.props.fivemin}
              onehour={this.props.onehour}
              oneday={this.props.oneday}
              trades={this.state.data}
            />
            <MyTextArea firstTrade={this.state.data[0]} />
          </TotalDetails>
        );
      } else {
        return (
          <TotalDetails>
            <MoreBoxTall>
              <OrderExecution data={this.state.data} />
            </MoreBoxTall>
          </TotalDetails>
        );
      }
    }
  }
}

class IsShort extends Component {
  render() {
    if (this.props.side == "Sell") {
      return <NextToDiv>Short</NextToDiv>;
    } else {
      return <NextToDiv>Long</NextToDiv>;
    }
  }
}

const OrderExecution = ({ data }) => {
  return (
    <MoreBoxTall>
      <ContainDivBlack>
        <NextToDivBlackTitle>
          <TitleSpan>Timestamp</TitleSpan>
        </NextToDivBlackTitle>
        <NextToDivBlackTitle>
          <TitleSpan>Side</TitleSpan>
        </NextToDivBlackTitle>
        <NextToDivBlackTitle>
          <TitleSpan>Order Type</TitleSpan>
        </NextToDivBlackTitle>
        <NextToDivBlackTitle>
          <TitleSpan>Price</TitleSpan>
        </NextToDivBlackTitle>
        <NextToDivBlackTitle>
          <TitleSpan>Order Qty</TitleSpan>
        </NextToDivBlackTitle>
        <NextToDivBlackTitle>
          <TitleSpan>Leaves Qty</TitleSpan>
        </NextToDivBlackTitle>
        <NextToDivBlackTitle>
          <TitleSpan>Commission</TitleSpan>
        </NextToDivBlackTitle>
      </ContainDivBlack>

      {data.map((dat) => {
        return (
          <ContainDivBlack>
            <NextToDivBlack>
              {formatDateMonthOnly(dat.timestamp)}
            </NextToDivBlack>
            {dat.execType == "Trade" ? (
              <NextToDivBlack>{dat.side}</NextToDivBlack>
            ) : (
              <NextToDivBlack>{dat.execType}</NextToDivBlack>
            )}
            <NextToDivBlack>{dat.orderType}</NextToDivBlack>
            <NextToDivBlack>${dat.price.toString()}</NextToDivBlack>
            <NextToDivBlack>{dat.orderQty}</NextToDivBlack>
            <NextToDivBlack>
              {dat.leavesQty == "0" ? "" : dat.leavesQty}
            </NextToDivBlack>
            <NextToDivBlack>
              {dat.execType == "Funding"
                ? ""
                : calcCommission(
                    dat.price,
                    dat.side,
                    dat.orderQty,
                    dat.leavesQty,
                    dat.orderType
                  )}
            </NextToDivBlack>
          </ContainDivBlack>
        );
      })}
    </MoreBoxTall>
  );
};

export const ContainDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 52px;

  font-weight: 400;

  &:hover {
    border-bottom: none;
    transition: none;
    background: #f8f8ff;
    cursor: pointer;
  }
`;
export const ContainDivClicked = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 52px;

  transition: none;

  font-weight: 400;
  border-bottom: 1px solid #f2f2f2;
  border-radius: none;
  cursor: pointer;
  background: #f8f8ff;
  background: #ffffff;
`;
export const ContainDivBlack = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 42px;
  background: #f8f8ff;

  border-bottom: 1px solid #f2f2f2;
`;
export const ContainDivHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 42px;
  border-bottom: 1px solid #d3d3d3;
`;
// f2f2f2

export const NextToDiv = styled.div`
  display: inline-block;
  width: 30%;
  padding: 8px;
  padding-top: 14px;
  padding-left: 12px;
  font-size: 15px;
  color: #000;
  border-right: 1px solid #f2f2f2;

  font-weight: 300;
  font-size: 15px;

  @media (max-width: 550px) {
    font-size: 13px;
  }
`;

export const NextToDivBlack = styled.div`
  display: inline-block;
  width: 30%;
  padding: 4px;
  padding-left: 12px;
  font-size: 14px;
  padding-top: 9px;
  border-right: 1px solid #f2f2f2;
`;
export const NextToDivBlackTitle = styled.div`
  display: inline-block;
  width: 30%;
  padding: 4px;
  padding-left: 14px;
  padding-top: 9px;
  font-size: 14px;
`;

const TitleSpan = styled.span`
  display: inline-block;
  border-bottom: 1px dotted black;
  padding-bottom: 0px;
  font-size: 13px;
  font-weight: 300;
  color: black;
`;
export const NextToDivBlackTime = styled.div`
  display: inline-block;
  width: 30%;
  padding: 4px;
  padding-left: 12px;
  font-size: 14px;
  padding-top: 10px;
  @media (max-width: 1200px) {
    font-size: 13px;
  }
  @media (max-width: 663px) {
    padding-top: 0px !important;
  }
`;
export const NextToDivHeader = styled.div`
  display: inline-block;
  width: 30%;
  color: #78838e;
  font-weight: 600;
  display: inline-block;
  text-transform: uppercase;
  padding: 10px;
  padding-left: 12px;
  ${smallFont}
  font-size:13px;
`;

const ReadMore = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  margin: 0;
  padding: 10px 0;

  /* "transparent" only works here because == rgba(0,0,0,0) */

  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0, rgba(255, 0, 0, 0)),
    color-stop(1, rgba(248, 248, 255, 1))
  );
`;
const ReadMoreTall = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  margin: 0;
  padding: 10px 0;
`;
// background-image: linear-gradient(to bottom, transparent, black);
const MoreBoxShort = styled.div`
  max-height: 300px;
  position: relative;
  overflow: hidden;
`;
const MoreBoxTall = styled.div`
  max-height: none;
  position: relative;
  overflow: hidden;
`;

const TotalDetails = styled.div``;
// border: 1px solid rgba(33, 37, 40, 0.7);
const ReadMoreInner = styled.div`
  color: rgba(33, 37, 40, 1);

  padding: 0;
  margin: auto;
  width: 30px;
  border-radius: 2px;
  -webkit-transition-property: none;
  -moz-transition-property: none;
  -o-transition-property: none;
  transition-property: none;

  :hover {
    cursor: pointer;
    background-color: rgba(33, 37, 40, 1);
    color: #fff;
    -webkit-transition-property: none;
    -moz-transition-property: none;
    -o-transition-property: none;
    transition-property: none;
  }
  font-size: 20px;
`;