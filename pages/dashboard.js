import React, { useContext, useState, useEffect } from "react";
import DashInitialTerms from "../components/Dashboard/FetchQueryContainer";
import App from "../components/App";
import Header from "../components/Header/DashboardHeader";
import styled, { ThemeProvider } from "styled-components";
import theme from "../components/theme";
import "../styles.css";

export default function dashboard({ initialState }) {
  return (
    <App>
      <Header />
      <PageWrap>
        <ThemeProvider theme={theme}>
          <Wrapper>
            <DashInitialTerms />
          </Wrapper>
        </ThemeProvider>
      </PageWrap>
    </App>
  );
}

const PageWrap = styled.div`
  height: 100vh;
  margin: 0 10vw;
  border-right: 1px solid #f2f2f2;
  border-left: 1px solid #f2f2f2;
  @media only screen and (max-width: 768px) {
    border: none;
    margin: 0;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 0;
  @media (max-width: 1024px) {
    margin: 0;
  }
  @media (max-width: 768px) {
    display: block;
    margin: 0;
  }
`;
