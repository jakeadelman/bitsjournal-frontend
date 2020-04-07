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
import TotalDat from "./Hashtags";
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

  componentDidMount() {}

  clicked = () => {
    store.isAuth = !store.isAuth;
    console.log(store.isAuth);
  };

  render() {
    let fetchTradeHistoryVariables = {
      start: this.props.store.startDate,
      end: this.props.store.endDate
    };
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
    // this.state = { globalHash: [], globalHashActive: ["all"] };
    // this.getGlobalHashtags = this.getGlobalHashtags.bind(this);
    // this.hashtagClicked = this.hashtagClicked.bind(this);
  }

  render() {
    return (
      <Query query={this.props.query} variables={this.props.vars}>
        {({ loading, error, data }) => {
          if (error) return <div>no data loaded</div>;
          if (loading) return <div>Loading</div>;
          if (data.checkApiKey == false) {
            return <ApiKeyForm />;
          } else {
            return <TotalDat data={data} />;
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
