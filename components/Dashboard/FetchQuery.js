import { Query } from "react-apollo";
import ReChart from "./ReChart";
import Sidebar from "../Menu/Menu";
import gql from "graphql-tag";
import styled from "styled-components";
import { inject, observer } from "mobx-react";
import {
  ContainDiv,
  NextToDiv,
  NextToDivHeader,
  RowContainer,
  ContainDivHeader,
} from "./ReChart";
import { getStateDate } from "../Helpers/Functions";
import { equal } from "fast-deep-equal";
import ApiKeyForm from "./AddApiForm";
import TotalDat from "./Dashboard";
import TotalDat768 from "./768px/Dashboard";
import { when, reaction } from "mobx";

@inject(["store"])
@observer
class FetchQuery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { startDate: "", endDate: "", date: "" };
  }

  componentDidMount() {
    console.log("loaded fetch query component");
  }

  clicked = () => {
    store.isAuth = !store.isAuth;
    console.log(store.isAuth);
  };

  render() {
    let fetchTradeHistoryVariables = {
      start: this.props.store.startDate,
      end: this.props.store.endDate,
      symbol: this.props.store.symbol,
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
    this.state = { width: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.tempTagsReaction = reaction(
      () => this.props.store.hasTempTags,
      (notifications, reaction) => {
        this.forceUpdate(console.log("FORCE UPDATE WAS CALLED"));
      }
    );
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    this.tempTagsReaction();
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    console.log(window.innerWidth);
    this.setState({
      width: window.innerWidth,
    });
  }

  render() {
    console.log("rerendered");
    return (
      <Query query={this.props.query} variables={this.props.vars}>
        {({ loading, error, data }) => {
          if (error) return <div>no data loaded</div>;
          if (loading) return <div>Loading</div>;
          if (data.checkApiKey == false) {
            return <ApiKeyForm />;
          } else if (data.checkApiKey == true) {
            this.props.store.resetHasTempTags();
            this.props.store.clearTempNotes();
            this.props.store.clearTempTags();
            if (this.state.width > 768) {
              return <TotalDat data={data} />;
            } else {
              return <TotalDat768 data={data} />;
            }
          }
        }}
      </Query>
    );
  }
}

export default FetchQuery;

const fetchTradeHistoryQuery = gql`
  query fetchTradeHistory($start: String!, $end: String!, $symbol: String!) {
    checkApiKey

    fetchTradeHistory(start: $start, end: $end, symbol: $symbol) {
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
