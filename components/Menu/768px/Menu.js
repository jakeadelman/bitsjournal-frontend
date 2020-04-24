import React from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "../../theme";
import CategoryList from "./CategoryList";
import Header from "./Header";
import { inject } from "mobx-react";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { ContainDivClicked } from "../../Dashboard/ReChart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";

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
      <LapContain>
        <LapInner>
          <LapFurtherIn>
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
          </LapFurtherIn>
        </LapInner>
        <LapInner>
          <LapFurtherIn>
            <CategoryList />
          </LapFurtherIn>
        </LapInner>
        {store.pnl >= 0 ? (
          <LapInner>
            <InnerLapper>+{store.pnl.toFixed(4) + "xbt"}</InnerLapper>
          </LapInner>
        ) : (
          <LapInner>
            <InnerLapper>-{store.pnl.toFixed(4) + "xbt"}</InnerLapper>
          </LapInner>
        )}
      </LapContain>
    );
  })
);

const LapContain = styled.div`
  display: flex;
  flex-direction: column;
`;
const LapInner = styled.div`
  background-color: #212529;
  margin: 4px 15px;
  border-radius: 2px;
`;
const LapFurtherIn = styled.div`
  margin: 0 auto;
  width: 100px;
`;

export default Sidebar;

const LapperMegaContainer = styled.div`
  display: absolute;
`;
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
  font-size: 15px;
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
  font-size: 15px;
  color: #fff;
  :hover {
    cursor: pointer;
    color: #000;
    background-color: #fff;
  }
`;
