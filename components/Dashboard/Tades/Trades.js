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
import { wideFont, smallFont } from "../../shared/helpers";
import theme from "../../theme";
import {
  formatDateMonthOnly,
  calcCommission,
  formatDateShort,
  formatDateShortWithHour,
} from "../../Helpers/Functions.js";
import { inject, observer } from "mobx-react";
import MainChart from "../Chart/index";
import Notes from "../Notes/Notes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import equal from "fast-deep-equal";
import TextareaAutosize from "react-autosize-textarea";
import MyTextArea from "../Notes/TextArea";
import { when, reaction } from "mobx";
import { calcTrades } from "./calcTrades";
import { ApolloConsumer } from "react-apollo";

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
      hasSingleTrade: false,
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
      // this.updateTrades(this.props.data);
      let newFullTrades = [];
      let firstFullTrades = this.createFullTrades(this.props.data);
      firstFullTrades = firstFullTrades.fullTrades;
      if (this.props.filteredData == null) {
        this.setState({ fullTrades: firstFullTrades });
      } else {
        for (let i = 0; i < firstFullTrades.length; i++) {
          for (let j = 0; j < this.props.filteredData.length; j++) {
            if (firstFullTrades[i][0].id == this.props.filteredData[j].id) {
              newFullTrades.unshift(firstFullTrades[i]);
            }
          }
          if (i == firstFullTrades.length - 1) {
            this.setState({ fullTrades: newFullTrades });
          }
        }
      }
    }
  }

  componentDidMount() {
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
        if (this.props.store.isSingleNotes == false) {
          this.setState({ isSingleNotes: false });
        } else {
          this.setState({ isSingleNotes: true });
        }
      }
    );

    this.singleTradeReaction = reaction(
      () => this.props.store.hasSingleTrade,
      (notifications, reaction) => {
        this.props.store.pnl = 0;
        if (this.props.store.hasSingleTrade == false) {
          this.setState({ hasSingleTrade: false });
        } else {
          this.setState({ hasSingleTrade: true });
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
    if (this.state.hasSingleTrade == false) {
      return (
        <ThemeProvider theme={theme(false)}>
          <div style={{ minWidth: this.state.chartWidth }}>
            {this.state.fullTrades.map((slic, i) => {
              return (
                <MakeCol
                  clicked={false}
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
    } else {
      return (
        <ThemeProvider theme={theme(false)}>
          <div style={{ minWidth: this.state.chartWidth }}>
            <MakeCol
              clicked={true}
              slic={this.props.store.singleTrade}
              onemin={this.props.data.fetchOneMinuteCandleHistory}
              fivemin={this.props.data.fetchFiveMinuteCandleHistory}
              onehour={this.props.data.fetchOneHourCandleHistory}
              oneday={this.props.data.fetchOneDayCandleHistory}
            />
          </div>
        </ThemeProvider>
      );
    }
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
    this.setState({
      width: window.innerWidth,
    });
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }
  componentDidMount() {
    window.addEventListener("resize", this.updateWindowDimensions);
    this.setState({ clicked: this.props.clicked });
  }
  componentDidUpdate(prevProps) {
    if (!equal(this.props.slic, prevProps.slic)) {
      this.getSlicData();
    }
  }

  componentWillMount() {
    this.getSlicData();
    this.updateWindowDimensions();
  }

  async getSlicData() {
    this.state.data = this.props.slic;
    let calced = await calcTrades(this.props.slic);

    if (calced !== undefined) {
      this.setState({
        pnl: calced["pnl"],
        avgEntryPrice: calced["avgEntryPrice"],
        avgExitPrice: calced["avgExitPrice"],
        cumQty: calced["cumQty"],
      });
      if (this.props.clicked == true) {
        this.props.store.pnl = calced["pnl"];
      } else {
        this.props.store.addPnl(calced["pnl"]);
      }
    }
  }

  clicked(dat) {
    if (this.state.clicked == false) {
      this.props.store.setSingleTrade(dat);
      this.props.store.hasSingleTrade = true;
      this.setState({ clicked: true });
    } else {
      this.props.store.hasSingleTrade = false;
      this.setState({ clicked: false });
    }
  }

  readMoreClicked() {
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
          <IsShort
            side={this.state.data[0].side}
            last={this.state.data[this.state.data.length - 1].orderType}
          />
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
                <IsShort
                  side={this.state.data[0].side}
                  last={this.state.data[this.state.data.length - 1].orderType}
                />
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
            <ApolloConsumer>
              {(client) => (
                <MyTextArea firstTrade={this.state.data[0]} client={client} />
              )}
            </ApolloConsumer>
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
  componentDidMount() {
    console.log(this.props.last);
  }
  render() {
    if (this.props.side == "Sell") {
      if (this.props.last.includes("Stop")) {
        return <NextToDiv>Short</NextToDiv>;
      } else {
        return <NextToDiv>Short</NextToDiv>;
      }
    } else {
      if (this.props.last.includes("Stop")) {
        return <NextToDiv>Long</NextToDiv>;
      } else {
        return <NextToDiv>Long</NextToDiv>;
      }
    }
  }
}

const OrderExecution = ({ data }) => {
  return (
    <ExecContainer>
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
    </ExecContainer>
  );
};

export const ContainDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 47px;
  border-bottom: 1px solid #f2f2f2;
  font-weight: 400;

  &:hover {
    transition: none;
    background: #f8f8ff;
    cursor: pointer;
  }
`;
export const ContainDivClicked = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 47px;

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
  height: 40px;
  background: #f8f8ff;

  border-bottom: 1px solid #f2f2f2;
`;
export const ContainDivHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 38px;
  border-bottom: 1px solid #d3d3d3;
`;
// f2f2f2
// border-right: 1px solid #f2f2f2;
export const NextToDiv = styled.div`
  display: inline-block;
  width: 30%;
  padding: 8px;
  padding-top: 12px;
  padding-left: 12px;

  color: #000;

  font-weight: 300;
  font-size: 14px;

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
`;
// border-right: 1px solid #f2f2f2;
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

const InnerPnlWin = styled.div`
  background: black;
  margin-right: auto;
  padding: 0 3px;
  max-width: 80px;
  color: white;
  font-weight: 600;
`;
const InnerPnlLoss = styled.div`
  background: red;
  margin-right: auto;
  padding: 0 3px;
  border-radius: 2px;
  max-width: 80px;
  color: white;
  font-weight: 600;
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
const ExecContainer = styled.div`
  max-height: none;
  position: relative;
  overflow: hidden;
  border: 1px solid #f2f2f2;
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
