import App, { Container } from "next/app";
import React from "react";
import withApolloClient from "../lib/with-apollo-client";
import { ApolloProvider } from "react-apollo";
import { Provider } from "mobx-react";
import { initializeStore, hydrate } from "../stores/store";
import "../components/Header/header.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles.css";
import "react-datepicker/dist/react-datepicker.css";
import "../components/Menu/datepicker-additional.css";

class MyApp extends App {
  static async getInitialProps(appContext) {
    // Get or Create the store with `undefined` as initialState
    // This allows you to set a custom default initialState
    const mobxStore = initializeStore();

    // Provide the store to getInitialProps of pages
    appContext.ctx.mobxStore = mobxStore;
    let appProps = await App.getInitialProps(appContext);

    return {
      ...appProps,
      initialMobxState: mobxStore,
    };
  }

  constructor(props) {
    super(props);
    const isServer = !process.browser;
    this.mobxStore = isServer
      ? props.initialMobxState
      : initializeStore(props.initialMobxState);
  }

  render() {
    const { Component, pageProps, apolloClient } = this.props;
    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <Provider store={this.mobxStore}>
            <Component {...pageProps} />
          </Provider>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApolloClient(MyApp);
