import React from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "../theme";
import FetchQuery from "./FetchQuery";
import Router from "next/router";
import { inject, observer } from "mobx-react";
import { Store, hydrate } from "../../stores/store";
import { getStateDate } from "../Helpers/Functions";

const Cookie = require("js-cookie");

@inject("store")
@observer
export default class DashInitialTerms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: null,
    };
  }

  componentDidMount() {
    let cook = Cookie.get("isAuth") == "true";
    if (!cook) {
      Router.push("/");
    } else if (!!cook) {
      this.setState({ isAuth: cook });
    }
    if (this.props.store.startDate == null) {
      let dates = getStateDate("This Week");
      this.props.store.startDate = dates.start;
      this.props.store.endDate = dates.end;
      this.setState({ start: true });
    }
  }

  render() {
    if (this.state.start !== null) {
      return (
        <ThemeProvider theme={theme(false)}>
          <div style={{ width: "100%" }}>
            <FetchQuery />
          </div>
        </ThemeProvider>
      );
    } else {
      return <div>loading</div>;
    }
  }
}
