import React from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "../theme";
import CategoryList from "./CategoryList";
import Header from "./Header";
import { inject } from "mobx-react";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { ContainDivClicked } from "../Dashboard/ReChart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { wideFont } from "../shared/helpers";

// border: 1px solid ${props => props.theme.border};

const Sidebar = inject("store")(
  observer(({ store }) => {
    const [dropdown, setDropdown] = useState(false);

    const clicked = (value) => {
      store.setSymbol(value);
      store.changeHasTempTags();
      setDropdown(false);
    };

    const showDropdown = () => {
      if (dropdown == false) {
        setDropdown(true);
      } else {
        setDropdown(false);
      }
    };

    return (
      <ThemeProvider theme={theme(false)}>
        <LapperContainer>
          <Lapper4>
            <SetSymbol
              onClick={() => {
                showDropdown();
              }}
            >
              {dropdown == true ? (
                <FontAwesomeIcon
                  icon={faCaretUp}
                  style={{
                    transition: "none",
                    marginRight: "4px",
                    marginLeft: "3px",
                  }}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faCaretDown}
                  style={{
                    transition: "none",
                    marginRight: "4px",
                    marginLeft: "3px",
                  }}
                />
              )}
              {store.symbol}
            </SetSymbol>
            {dropdown == true ? (
              <DropdownListContainer>
                <DropdownListItem onClick={() => clicked("XBTUSD")}>
                  XBTUSD
                </DropdownListItem>
                <DropdownListItem onClick={() => clicked("XBTU20")}>
                  XBTU20
                </DropdownListItem>
                <DropdownListItem onClick={() => clicked("XBTM20")}>
                  XBTM20
                </DropdownListItem>
              </DropdownListContainer>
            ) : null}
          </Lapper4>
          <Lapper>
            <CategoryList />
          </Lapper>
          {store.pnl >= 0 ? (
            <Lapper2>
              <InnerLapper>{store.pnl.toFixed(4) + "xbt"}</InnerLapper>
            </Lapper2>
          ) : (
            <Lapper3>
              <InnerLapper>{store.pnl.toFixed(4) + "xbt"}</InnerLapper>
            </Lapper3>
          )}
        </LapperContainer>
      </ThemeProvider>
    );
  })
);

export default Sidebar;
const LapperContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 24px;
`;

const Lapper = styled.aside`
  display: flex;
  flex-direction: column;
  flex-basis: 240px;

  border-radius: 2px;
  background-color: ${(props) => props.theme.foreground};
  background-color: #212529;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    display: none;
  }
`;
const InnerLapper = styled.div`
  color: white;
  text-align: center;
  margin: auto;
`;

const Lapper2 = styled.aside`
  border-radius: 2px;
  background-color: ${(props) => props.theme.foreground};
  background-color: green;
  max-height: 30px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Lapper3 = styled.aside`
  border-radius: 2px;
  background-color: ${(props) => props.theme.foreground};
  background-color: red;
  max-height: 30px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Lapper4 = styled.aside`
  display: flex;
  flex-direction: column;

  border-radius: 2px;
  background-color: ${(props) => props.theme.foreground};
  background-color: #212529;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    display: none;
  }
`;
const SetSymbol = styled.div`
  ${wideFont}
  font-weight:500;
  font-size: 14px;
  padding: 5px;
  color: #fff;
  :hover {
    cursor: pointer;
  }
`;

const DropdownContainer = styled.div`
  height: 100px;
`;
const DropdownListContainer = styled.ul`
  list-style-type: none;
`;
const DropdownListItem = styled.li`
  text-align: center;
  ${wideFont}
  font-weight:500;
  font-size: 14px;
  color: #fff;
  :hover {
    cursor: pointer;
    color: #000;
    background-color: #fff;
  }
`;