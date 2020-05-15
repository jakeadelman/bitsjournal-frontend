import Link from "next/link";
import { withRouter } from "next/router";
import styled, { ThemeProvider } from "styled-components";
import theme from "../theme";
import { useContext, useState } from "react";
import HeaderLogo from "./Logo";
import "./header.scss";
import DatePicker from "../Menu/Datepicker";
import { ApolloConsumer } from "react-apollo";
import gql from "graphql-tag";
import Router from "next/router";

import { headerItem, wideFont, link, transition } from "../shared/helpers";
const Cookie = require("js-cookie");

const Header = ({ router }) => {
  async function logout(client) {
    Cookie.remove("isAuth");
    Cookie.remove("qid");
    window.localStorage.removeItem("store");
    await client.mutate({
      mutation: gql`
        mutation logout {
          logout
        }
      `,
    });
    Router.push("/");
  }

  return (
    <ThemeProvider theme={theme(false)}>
      <Wrapper>
        <HeaderLogo />
        <DatePickersWrap>
          <DatePickerWrap>
            <DatePicker set={true} start={true} />
          </DatePickerWrap>
          <div style={{ color: "white", margin: "auto 0px" }}>-</div>
          <DatePickerWrap>
            <DatePicker set={true} start={false} />
          </DatePickerWrap>
        </DatePickersWrap>
        <LinksWrap>
          <Link prefetch href="/settings">
            <StyledLink
              className={router.pathname === "/settings" ? "is-active" : ""}
            >
              settings
            </StyledLink>
          </Link>
          <ApolloConsumer>
            {(client) => (
              <StyledLink onClick={() => logout(client)}>logout</StyledLink>
            )}
          </ApolloConsumer>
        </LinksWrap>
      </Wrapper>
    </ThemeProvider>
  );
};

export default withRouter(Header);

const LogoWrap = styled.div``;

const TempDiv = styled.div`
  margin: auto;
`;

const LinksWrap = styled.div`
  margin-right: 0;
  margin-left: auto;
  display: flex;
  flex-direction: row;
`;

const DatePickersWrap = styled.div`
  margin-left: 20px;
  margin-right: auto;
  display: flex;
  flex-direction: row;
`;
const DatePickerWrap = styled.div`
  margin: auto 10px;
`;

const StyledLink = styled.div`
  ${headerItem};
  ${link};
  margin: 0;
  color: ${(props) => props.theme.mutedText};
  color: #fff;
  text-transform: capitalize;

  position: relative;
  cursor: pointer;
  ::after {
    ${transition("opacity", "border-bottom-width")};

    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    border-bottom: 1px solid ${(props) => props.theme.accent};
  }

  :hover {
    opacity: 1;
    color: ${(props) => props.theme.accent};
  }
  :hover::after {
    opacity: 1;
    border-bottom: 1px solid ${(props) => props.theme.accent};
  }

  &.active::after {
    left: 0;
    right: 0;
    bottom: 0;
    border-bottom: 3px solid ${(props) => props.theme.accent};
  }
  font-weight: 700;
  letter-spacing: 0.05em;
  font-size: 14px;
  margin-left: auto;
`;

const Wrapper = styled.header`
  position: sticky;
  z-index: 10;
  top: 0;
  display: flex;
  align-items: stretch;

  border-bottom: 2px solid #eee;
  height: 55px;
  padding: 0 0vw;
  font-weight: 700;
  background-color: ${(props) => props.theme.foreground};
  user-select: none;
  background-color: #212527;

  @media (max-width: 425px) {
    margin-bottom: 16px;
    height: 40px;
  }
  @media (max-width: 768px) {
    padding: 0;
  }
`;
