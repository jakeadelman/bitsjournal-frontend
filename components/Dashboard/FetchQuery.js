import { Query } from "react-apollo";
import ReChart from "../Charts/ReChart";
import Sidebar from "../Categories/Menu";
import gql from "graphql-tag";
import styled from "styled-components";
import { inject, observer } from "mobx-react";
import {
  ContainDiv,
  NextToDiv,
  NextToDivHeader,
  RowContainer,
  ContainDivHeader
} from "../Charts/ReChart";
import { getStateDate } from "../Helpers/Functions";
import { equal } from "fast-deep-equal";
import ApiKeyForm from "./AddApiForm";
// import { pushGlobalHash } from "../../stores/store";
// import { useState, useEffect } from "react";

// import { storesContext } from "../../stores/UserStore";

@inject(["store"])
@observer
class FetchQuery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { startDate: "", endDate: "", date: "" };
  }

  componentDidMount() {
    // console.log(this.props.store);
    // try {
    //   let myStorage = window.localStorage;
    //   let theDate = myStorage.getItem("store");
    //   let obj = JSON.parse(theDate);
    //   console.log(obj);
    //   this.setState({
    //     startDate: obj.startDate,
    //     endDate: obj.endDate
    //   });
    //   console.log("SUCCESS");
    //   console.log(obj.startDate);
    //   console.log(obj.endDate);
    // } catch (err) {
    //   let theDates = getStateDate(2);
    //   this.setState({
    //     startDate: theDates.startDate,
    //     endDate: theDates.endDate
    //   });
    //   console.log("FAILED");
    // }
  }

  clicked = () => {
    store.isAuth = !store.isAuth;
    console.log(store.isAuth);
  };

  render() {
    let fetchTradeHistoryVariables = {
      start: this.props.store.startDate,
      end: this.props.store.endDate
    };
    console.log(fetchTradeHistoryQuery);
    // let fetchTradeHistoryVariables = {
    //   start: "2020-02-24T12:43:56.702Z",
    //   end: "2020-02-26T15:01:59.727Z"
    // };
    return (
      <div>
        <Comp
          query={fetchTradeHistoryQuery}
          vars={fetchTradeHistoryVariables}
        />
      </div>
    );
  }
}

@inject(["store"])
@observer
class Comp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { globalHash: [], globalHashActive: ["all"] };
    this.getGlobalHashtags = this.getGlobalHashtags.bind(this);
    this.hashtagClicked = this.hashtagClicked.bind(this);
  }

  getGlobalHashtags(data) {
    for (let i = 0; i < data.fetchTradeHistory.length; i++) {
      let thisTradeHash = data.fetchTradeHistory[i].hashtags.split(",");
      if (thisTradeHash != "undefined") {
        for (let j = 0; j < thisTradeHash.length; j++) {
          if (thisTradeHash[j] != "undefined") {
            this.state.globalHash.push(thisTradeHash[j]);
          }
        }
      }
    }
  }

  hashtagClicked(value) {
    console.log(this.state.globalHashActive);
    console.log(this.state.globalHash);
    if (this.state.globalHashActive[0] == undefined) {
      this.state.globalHashActive.push(value);
      const index = this.state.globalHash.indexOf(value);
      if (index > -1) {
        this.state.globalHash.splice(index, 1);
        // this.state.globalHash.push(value)
      }
      return;
    }
    for (let i = 0; i < this.state.globalHashActive.length; i++) {
      if (this.state.globalHashActive[i] == "all") {
        this.state.globalHashActive = [];
      }
      if (value == this.state.globalHashActive[i]) {
        return;
      }
      if (i == this.state.globalHashActive.length - 1) {
        console.log("ENDING");
        const index = this.state.globalHash.indexOf(value);
        if (index > -1) {
          this.state.globalHash.splice(index, 1);
        }
        console.log(index, "INDEX");
        this.state.globalHashActive.push(value);
        return;
      }
    }
  }

  render() {
    return (
      <Query query={this.props.query} variables={this.props.vars}>
        {({ loading, error, data }) => {
          if (error) return <div>no data loaded</div>;
          if (loading) return <div>Loading</div>;
          console.log(data);
          console.log("<<DATA ABOVE>>");
          if (data.checkApiKey == false) {
            console.log("is false");
            return <ApiKeyForm />;
          } else {
            // console.log("is true");
            this.getGlobalHashtags(data);
            return (
              <Wrapper>
                <ChartWrapper>
                  <TopHashtagDiv>
                    {this.state.globalHashActive.map(hash => {
                      return (
                        <TopHashtagIndividualActive>
                          #{hash}
                        </TopHashtagIndividualActive>
                      );
                    })}
                    {this.state.globalHash.map(hash => {
                      return (
                        <TopHashtagIndividual
                          onClick={() => this.hashtagClicked(hash)}
                        >
                          #{hash}
                        </TopHashtagIndividual>
                      );
                    })}
                  </TopHashtagDiv>
                  <ContainDivHeader>
                    <NextToDivHeader>Start</NextToDivHeader>
                    <NextToDivHeader>End</NextToDivHeader>
                    <NextToDivHeader>Direction</NextToDivHeader>
                    <NextToDivHeader>Avg Entry</NextToDivHeader>
                    <NextToDivHeader>Avg Exit</NextToDivHeader>
                    <NextToDivHeader>Qty</NextToDivHeader>
                    <NextToDivHeader>Realized Pnl</NextToDivHeader>
                  </ContainDivHeader>
                  <ReChart data={data} />
                </ChartWrapper>
                <Sidebar />
              </Wrapper>
            );
          }
        }}
      </Query>
    );
  }
}

export default FetchQuery;

const fetchTradeHistoryQuery = gql`
  query fetchTradeHistory($start: String!, $end: String!) {
    checkApiKey

    fetchTradeHistory(start: $start, end: $end) {
      id
      timestamp
      side
      price
      orderQty
      leavesQty
      currentQty
      avgEntryPrice
      execGrossPnl
      realizedPnl
      commission
      execType
      orderType
      trdStart
      trdEnd
      notes
      hashtags
    }

    fetchOneMinuteCandleHistory(start: $start, end: $end) {
      id
      timestamp
      symbol
      timeframe
      open
      high
      low
      close
      trades
      volume
      vwap
      lastSize
      homeNotional
      foreignNotional
    }

    fetchOneHourCandleHistory(start: $start, end: $end) {
      id
      timestamp
      symbol
      timeframe
      open
      high
      low
      close
      trades
      volume
      vwap
      lastSize
      homeNotional
      foreignNotional
    }

    fetchOneDayCandleHistory(start: $start, end: $end) {
      id
      timestamp
      symbol
      timeframe
      open
      high
      low
      close
      trades
      volume
      vwap
      lastSize
      homeNotional
      foreignNotional
    }

    fetchFiveMinuteCandleHistory(start: $start, end: $end) {
      id
      timestamp
      symbol
      timeframe
      open
      high
      low
      close
      trades
      volume
      vwap
      lastSize
      homeNotional
      foreignNotional
    }
  }
`;

const TopHashtagDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 8px;
`;
const TopHashtagIndividual = styled.div`
  background: #f8f8ff;
  color: #000;
  padding: 8px;
  margin: 0 10px;
  border-radius: 2px;
  :hover {
    cursor: pointer;
  }
`;
const TopHashtagIndividualActive = styled.div`
  background: #212528;
  color: #fff;
  padding: 8px;
  margin: 0 10px;
  border-radius: 2px;
  :hover {
    cursor: pointer;
  }
`;

const ChartWrapper = styled.div`
  background: white;
  padding: 5px;
  width: 100%;
  @media (max-width: 768px) {
    margin: 0 5vw;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: flex-align;
`;
