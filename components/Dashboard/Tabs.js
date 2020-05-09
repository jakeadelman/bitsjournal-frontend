import { useState } from "react";
import { inject } from "mobx-react";
import { observer } from "mobx-react-lite";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

import { wideFont } from "../shared/helpers";

const Tabs = inject("store")(
  observer(({ store }) => {
    const [activeTab, setActiveTab] = useState("notes");

    function setActive(tab) {
      console.log("CLICKED");
      if (tab !== activeTab) {
        setActiveTab(tab);
        console.log("setting tab", tab);
        if (tab == "notes") {
          store.isSingleNotes = false;
        } else {
          store.isSingleNotes = true;
        }
      }
    }

    if (activeTab == "notes") {
      return (
        <WrapTabs>
          <SingleTab isActive={false}>
            <SingleTabInner>
              <FontAwesomeIcon
                icon={faCaretLeft}
                style={{
                  transition: "none",
                  marginRight: "7px",
                  fontSize: "12px",
                  marginBottom: "2px",
                  marginTop: "auto",
                }}
              />
              All Trades
            </SingleTabInner>
          </SingleTab>
          <SingleTab isActive={true} onClick={() => setActive("notes")}>
            <SingleTabInner>Notes</SingleTabInner>
          </SingleTab>
          <SingleTab isActive={false} onClick={() => setActive("exec_hist")}>
            <SingleTabInner>Execution History</SingleTabInner>
          </SingleTab>
        </WrapTabs>
      );
    } else {
      return (
        <WrapTabs>
          <SingleTab isActive={false}>
            <SingleTabInner>
              <FontAwesomeIcon
                icon={faCaretLeft}
                style={{
                  transition: "none",
                  marginRight: "7px",
                  fontSize: "12px",
                  marginBottom: "2px",
                  marginTop: "auto",
                }}
              />
              All Trades
            </SingleTabInner>
          </SingleTab>
          <SingleTab isActive={false} onClick={() => setActive("notes")}>
            <SingleTabInner>Notes</SingleTabInner>
          </SingleTab>
          <SingleTab isActive={true} onClick={() => setActive("exec_hist")}>
            <SingleTabInner>Execution History</SingleTabInner>
          </SingleTab>
        </WrapTabs>
      );
    }
  })
);

export default Tabs;

const SingleTabInner = styled.div`
  margin: auto;
`;

const SingleTab = styled.div`
  color: ${(props) => (props.isActive ? "#fff" : "#000")};
  background-color: ${(props) => (props.isActive ? "#000" : "#fff")};

  margin: auto 10px;
  border-radius: 2px;
  padding: 5px;
  :hover {
    cursor: pointer;
  }
`;

const WrapTabs = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 15px;
`;
const WholeGrid = styled.div`
  border: 1px solid #f2f2f2;
`;

const TopBarParent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 14px;
`;

const TopBarChildBig = styled.div`
  flex: 1 1 45%; /*grow | shrink | basis */
  display: flex;
  flex-direction: row;
`;
const TopBarChildSmall = styled.div`
  flex: 1 1 10%; /*grow | shrink | basis */
  display: flex;
  flex-direction: row;
`;

const TopHashtagIndividual = styled.div`
  background: #f8f8ff;
  color: #000;
  padding: 8px;
  margin: 0 10px;
  border-radius: 2px;
  ${wideFont}

  :hover {
    cursor: pointer;
  }
  margin-left: 0;
`;

const TopHashtagIndividualActive = styled.div`
  background: #212528;
  color: #fff;
  padding: 8px;
  margin: 0 10px;
  border-radius: 2px;
  ${wideFont}
  margin:0 auto;
  :hover {
    cursor: pointer;
  }
  margin-left: 0;
`;
const TopHashtagIndividualActiveRight = styled.div`
  background: #212528;
  color: #fff;
  padding: 8px;
  margin: 0 10px;
  border-radius: 2px;
  ${wideFont}
  margin:0 auto;
  :hover {
    cursor: pointer;
  }
  margin-right: 0;
`;

const TopHashtagIndividualActivePnl = styled.div`
  color: #fff;
  padding: 0px;
  margin: 0 10px;
  border-radius: 2px;
  ${wideFont}
  :hover {
    cursor: pointer;
  }
  margin: auto;
`;

const ChartWrapper = styled.div`
  background: white;
  padding: 5px;
  width: 100%;
  padding: 10px;
  @media (max-width: 768px) {
    margin: 0 5vw;
  }
`;

const Wrapper = styled.div`
  display: flex;
  margin-top: 5px;
`;
