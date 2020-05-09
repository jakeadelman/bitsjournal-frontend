import React from "react";
import { render } from "react-dom";
import Chart from "./ChartDemo";
import { Alert } from "reactstrap";

import { TypeChooser } from "react-stockcharts/lib/helper";

export default class ChartComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    let startTime = new Date(this.props.trades[0].timestamp);
    let endTime = new Date(
      this.props.trades[this.props.trades.length - 1].timestamp
    );
    let diffMs = Math.abs(startTime - endTime);
    var diffSecs = diffMs / 1000;
    var diffMins = Math.round(diffSecs / 60); // minutes

    try {
      if (diffMins < 60) {
        //   this.setState({ candleData: this.props.onemin });
        let allExec = [];
        for (let i = 0; i < this.props.onemin.length; i++) {
          let trade = this.props.onemin[i];
          let newTrade = {};
          newTrade.date = new Date(trade.timestamp);
          newTrade.open = parseFloat(trade.open);
          newTrade.close = parseFloat(trade.close);
          newTrade.high = parseFloat(trade.high);
          newTrade.low = parseFloat(trade.low);
          let strt = new Date(this.props.trades[0].timestamp);
          let end = new Date(
            this.props.trades[this.props.trades.length - 1].timestamp
          );
          let compare1 = newTrade.date - strt;
          let compare2 = newTrade.date - end;
          // console.log(compare1, compare2);
          let additionalTime = 1000 * 60 * 30;
          if (compare1 > additionalTime * -1 && compare2 < additionalTime) {
            allExec.unshift(newTrade);
          }
          if (i == this.props.onemin.length - 1) {
            let timeframe = "1m";
            this.setState({
              trades: this.props.trades,
              newDat: allExec,
              timeframe: timeframe,
            });
            // console.log(this.state, "THIS STATE " + timeframe);
          }
        }
      }
      if (diffMins >= 60 && diffMins < 60 * 10) {
        //   this.setState({ candleData: this.props.fivemin });
        let allExec = [];
        for (let i = 0; i < this.props.fivemin.length; i++) {
          let trade = this.props.fivemin[i];
          let newTrade = {};
          newTrade.date = new Date(trade.timestamp);
          newTrade.open = parseFloat(trade.open);
          newTrade.close = parseFloat(trade.close);
          newTrade.high = parseFloat(trade.high);
          newTrade.low = parseFloat(trade.low);
          let strt = new Date(this.props.trades[0].timestamp);
          let end = new Date(
            this.props.trades[this.props.trades.length - 1].timestamp
          );
          let compare1 = newTrade.date - strt;
          let compare2 = newTrade.date - end;
          // console.log(compare1, compare2);
          let additionalTime = 1000 * 60 * 60 * 2;
          if (compare1 > additionalTime * -1 && compare2 < additionalTime) {
            allExec.unshift(newTrade);
          }
          if (i == this.props.fivemin.length - 1) {
            let timeframe = "5m";
            this.setState({
              trades: this.props.trades,
              newDat: allExec,
              timeframe: timeframe,
            });
            console.log(this.state, "THIS STATE " + timeframe);
          }
        }
      }
      let day = 60 * 24;
      if (diffMins >= 60 * 10 && diffMins < day * 4) {
        //   this.setState({ candleData: this.props.onehour });
        let allExec = [];
        for (let i = 0; i < this.props.onehour.length; i++) {
          let trade = this.props.onehour[i];
          let newTrade = {};
          newTrade.date = new Date(trade.timestamp);
          newTrade.open = parseFloat(trade.open);
          newTrade.close = parseFloat(trade.close);
          newTrade.high = parseFloat(trade.high);
          newTrade.low = parseFloat(trade.low);
          let strt = new Date(this.props.trades[0].timestamp);
          let end = new Date(
            this.props.trades[this.props.trades.length - 1].timestamp
          );
          let compare1 = newTrade.date - strt;
          let compare2 = newTrade.date - end;
          let additionalTime = 1000 * 60 * 60 * 20;
          if (compare1 > additionalTime * -1 && compare2 < additionalTime) {
            // console.log(compare1, compare2);
            allExec.unshift(newTrade);
          }
          if (i == this.props.onehour.length - 1) {
            let timeframe = "1h";
            this.setState({
              trades: this.props.trades,
              newDat: allExec,
              timeframe: timeframe,
            });
            console.log(this.state, "THIS STATE " + timeframe);
          }
        }
      }
      if (diffMins >= day * 4) {
        //   this.setState({ candleData: this.props.oneday });
        let allExec = [];
        for (let i = 0; i < this.props.oneday.length; i++) {
          let trade = this.props.oneday[i];
          let newTrade = {};
          newTrade.date = new Date(trade.timestamp);
          newTrade.open = parseFloat(trade.open);
          newTrade.close = parseFloat(trade.close);
          newTrade.high = parseFloat(trade.high);
          newTrade.low = parseFloat(trade.low);
          let strt = new Date(this.props.trades[0].timestamp);
          let end = new Date(
            this.props.trades[this.props.trades.length - 1].timestamp
          );
          let compare1 = newTrade.date - strt;
          let compare2 = newTrade.date - end;
          let additionalTime = 1000 * 60 * 60 * 24 * 10;
          if (compare1 > additionalTime * -1 && compare2 < additionalTime) {
            // console.log(compare1, compare2);
            allExec.unshift(newTrade);
          }
          if (i == this.props.oneday.length - 1) {
            let timeframe = "1d";
            this.setState({
              trades: this.props.trades,
              newDat: allExec,
              timeframe: timeframe,
            });
            console.log(this.state, "THIS STATE " + timeframe);
          }
        }
      }
    } catch (err) {
      console.log(err);
    }
  }
  render() {
    if (this.state == null || !this.state.newDat[0]) {
      return (
        <Alert color="light">
          Can't render chart. We don't have small enough candlestick data going
          back to that date.
        </Alert>
      );
    }
    console.log(this.state.newDat);
    return (
      // <TypeChooser>
      //   {type => (
      <Chart
        type={"hybrid"}
        data={this.state.newDat}
        trades={this.state.trades}
        timeframe={this.state.timeframe}
      />
      //   )}
      // </TypeChooser>
    );
  }
}
