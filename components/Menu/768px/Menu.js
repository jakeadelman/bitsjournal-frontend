import React from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "../../theme";
import CategoryList from "../CategoryList";
import Header from "../Header";
import { inject } from "mobx-react";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { ContainDivClicked } from "../../Dashboard/Tades/Trades";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { wideFont } from "../../shared/helpers";

export const SymbolChooser768 = inject("store")(
  observer(({ store }) => {
    const [dropdown, setDropdown] = useState(false);

    const showDropdown = () => {
      if (dropdown == false) {
        setDropdown(true);
      } else {
        setDropdown(false);
      }
    };

    const clicked = (value) => {
      store.setSymbol(value);
      store.changeHasTempTags();
      setDropdown(false);
    };

    return (
      <LapperChooser
        onClick={() => {
          showDropdown();
        }}
      >
        <SetSymbol style={{ marginLeft: "2px" }}>
          <InnerSymbolChooser>
            <div>{store.symbol}</div>
            {dropdown == true ? (
              <FontAwesomeIcon
                icon={faCaretUp}
                style={{
                  transition: "none",
                  marginRight: "3px",
                  marginLeft: "3px",
                  marginTop: "2px",
                }}
              />
            ) : (
              <FontAwesomeIcon
                icon={faCaretDown}
                style={{
                  transition: "none",
                  marginRight: "3px",
                  marginLeft: "3px",
                  marginTop: "2px",
                }}
              />
            )}
          </InnerSymbolChooser>
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
      </LapperChooser>
    );
  })
);

export const Pnl768 = inject("store")(
  observer(({ store }) => {
    if (store.pnl >= 0) {
      return (
        <Lapper2 style={{ marginRight: "2px" }}>
          <InnerLapper style={{ padding: "4px" }}>
            {store.pnl.toFixed(4) + "xbt"}
          </InnerLapper>
        </Lapper2>
      );
    } else {
      return (
        <Lapper3 style={{ marginRight: "2px" }}>
          <InnerLapper style={{ padding: "4px" }}>
            {store.pnl.toFixed(4) + "xbt"}
          </InnerLapper>
        </Lapper3>
      );
    }
  })
);

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
          <Lapper4
            onClick={() => {
              showDropdown();
            }}
          >
            <SetSymbol>
              {store.symbol}
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

const InnerSymbolChooser = styled.div`
  margin: auto;
  width: 65px;
  display: flex;
  flex-direction: row;
  padding-top: 4px;
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
  margin-left: 0;
  margin-right: auto;
  margin-top: 0;
  margin-bottom: 0;
  width: 100%;
`;
const LapperChooser = styled.aside`
  border-radius: 2px;
  background-color: ${(props) => props.theme.foreground};
  margin-left: 0;
  margin-right: auto;
  margin-top: 0;
  margin-bottom: 0;
  width: 100%;
`;

const Lapper3 = styled.aside`
  border-radius: 2px;
  background-color: ${(props) => props.theme.foreground};
  background-color: red;
  margin-left: 0;
  margin-right: auto;
  width: 100%;
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
export const SetSymbol = styled.div`
  font-weight: 500;
  font-size: 14px;
  ${wideFont}
  color: #fff;
  background-color: #212527;
  height: 100%;
  :hover {
    cursor: pointer;
  }
`;

const DropdownContainer = styled.div`
  height: 100px;
`;
const DropdownListContainer = styled.ul`
  list-style-type: none;
  position: absolute;
  margin-left: -8px;
  border-radius: 2px;
  background-color: #212527;
`;
const DropdownListItem = styled.li`
  text-align: center;
  font-weight: 500;
  font-size: 14px;
  color: #fff;
  background-color: #212529;
  padding: 2px 15px;
  margin: 4px 0;
  ${wideFont}
  :hover {
    cursor: pointer;
    color: #000;
    background-color: #fff;
  }
`;
