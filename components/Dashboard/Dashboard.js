import styled from "styled-components";
import {
  ContainDiv,
  NextToDiv,
  NextToDivHeader,
  RowContainer,
  ContainDivHeader,
} from "./Tades/Trades";
import ReChart from "./Tades/Trades";
import Sidebar, { SymbolChooser, Pnl } from "../Menu/Menu";
import { getNewDat } from "./shared/helpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import Notes from "./Notes/NotesTest";
import Tabs from "./Tabs";
import {
  Nav,
  NavItem,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  NavLink,
} from "reactstrap";

import { inject, observer } from "mobx-react";
import { when, reaction } from "mobx";
import { wideFont } from "../shared/helpers";

@inject("store")
@observer
export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      globalHash: [],
      globalHashActive: ["all"],
      data: null,
      filteredData: null,
      isSingle: false,
      isSingleNotes: false,
    };
    this.getGlobalHashtags = this.getGlobalHashtags.bind(this);
    this.hashtagClicked = this.hashtagClicked.bind(this);
    this.hashtagClickedBack = this.hashtagClickedBack.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentWillMount() {
    this.setState({ data: this.props.data });
    this.getGlobalHashtags(this.props.data);
  }
  componentDidMount() {
    this.singleTradeReaction = reaction(
      () => this.props.store.hasSingleTrade,
      (notifications, reaction) => {
        console.log("HAS SINGLE", this.props.store.hasSingleTrade);
        if (this.props.store.hasSingleTrade == false) {
          this.setState({ isSingle: false });
          console.log("setting back");
        } else {
          this.setState({
            isSingle: true,
            singleTrade: this.props.store.singleTrade[0],
          });
          console.log(this.state, "STATEE");
          console.log("setting back");
        }
      }
    );
    this.singleNotesReaction = reaction(
      () => this.props.store.isSingleNotes,
      (notifications, reaction) => {
        if (this.props.store.isSingleNotes == false) {
          this.setState({ isSingleNotes: false });
        } else {
          this.setState({
            isSingleNotes: true,
          });
        }
      }
    );

    window.addEventListener("resize", this.updateWindowDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }
  updateWindowDimensions() {
    this.setState({
      width: window.innerWidth,
    });
  }

  async getGlobalHashtags(data) {
    for (let i = 0; i < data.fetchTradeHistory.length; i++) {
      let thisTradeHash = data.fetchTradeHistory[i].hashtags.split(",");
      if (thisTradeHash != "undefined") {
        for (let j = 0; j < thisTradeHash.length; j++) {
          if (thisTradeHash[j] != "undefined") {
            let newGlobalHash = this.state.globalHash;
            newGlobalHash.push(thisTradeHash[j]);
            this.setState({ globalHash: newGlobalHash });
          }
        }
      }
    }
  }

  async hashtagClickedBack(value) {
    if (value == "all") {
      console.log("DO NOTHING");
    } else {
      let newHashActive = [];
      let newHash = this.state.globalHash;
      for (let i = 0; i < this.state.globalHashActive.length; i++) {
        if (value !== this.state.globalHashActive[i]) {
          newHashActive.push(this.state.globalHashActive[i]);
        } else {
          newHash.push(this.state.globalHashActive[i]);
        }
        if (i == this.state.globalHashActive.length - 1) {
          if (newHashActive[0] == undefined) {
            let newHash2 = [];
            for (let j = 0; j < newHash.length; j++) {
              if (newHash[j] != "all") {
                newHash2.push(newHash[j]);
              }
              if (j == newHash.length - 1) {
                this.setState({
                  globalHash: newHash2,
                  globalHashActive: ["all"],
                  filteredData: null,
                });
              }
            }
          } else {
            let newHash2 = [];
            for (let j = 0; j < newHash.length; j++) {
              if (newHash[j] != "all") {
                newHash2.push(newHash[j]);
              }
              if (j == newHash.length - 1) {
                getNewDat(this.state.data, newHashActive).then((res) => {
                  this.setState({
                    globalHash: newHash2,
                    globalHashActive: newHashActive,
                    filteredData: res,
                  });
                });
              }
            }
          }
        }
      }
    }
  }

  async hashtagClicked(value) {
    if (value == "all") {
      let newGlobalHash = this.state.globalHash;
      let newGlobalHash2 = [];
      for (let i = 0; i < this.state.globalHashActive.length; i++) {
        newGlobalHash.push(this.state.globalHashActive[i]);
        if (i == this.state.globalHashActive.length - 1) {
          for (let j = 0; j < newGlobalHash.length; j++) {
            if (newGlobalHash[j] != "all") {
              newGlobalHash2.push(newGlobalHash[j]);
            }
            if (j == newGlobalHash.length - 1) {
              this.setState({
                globalHash: newGlobalHash2,
                globalHashActive: ["all"],
                filteredData: null,
              });
              return;
            }
          }
        }
      }
    }
    if (this.state.globalHashActive[0] == undefined) {
      let newArray = [];
      newArray.push(value);
      this.setState({ globalHashActive: newArray });
      const index = this.state.globalHash.indexOf(value);
      if (index > -1) {
        let newGlobalHash = this.state.globalHash;
        newGlobalHash.splice(index, 1);
        this.setState({ globalHash: newGlobalHash });
      }
      return;
    }
    for (let i = 0; i < this.state.globalHashActive.length; i++) {
      if (this.state.globalHashActive[i] == "all") {
        this.state.globalHashActive = [];
        const index = this.state.globalHash.indexOf(value);
        if (index > -1) {
          let newGlobalHash = this.state.globalHash;
          newGlobalHash.splice(index, 1);
          let torf = false;
          for (let j = 0; j < newGlobalHash.length; j++) {
            if ("all" == newGlobalHash[j]) {
              torf = true;
            }
            if (j == newGlobalHash.length - 1 && torf == false) {
              newGlobalHash.push("all");
            }
          }
          let newGlobalHashActive = this.state.globalHashActive;
          newGlobalHashActive.push(value);
          getNewDat(this.state.data, newGlobalHashActive).then((newDat) => {
            this.setState({
              globalHashActive: newGlobalHashActive,
              globalHash: newGlobalHash,
              filteredData: newDat,
            });
            return;
          });
        }
      }
      if (value == this.state.globalHashActive[i]) {
        return;
      }
      if (i == this.state.globalHashActive.length - 1) {
        const index = this.state.globalHash.indexOf(value);
        if (index > -1) {
          let newGlobalHash = this.state.globalHash;
          newGlobalHash.splice(index, 1);
          // newGlobalHash.push("all");
          let torf = false;
          for (let j = 0; j < newGlobalHash.length; j++) {
            if ("all" == newGlobalHash[j]) {
              torf = true;
            }
            if (j == newGlobalHash.length - 1 && torf == false) {
              newGlobalHash.push("all");
            }
          }
          let newGlobalHashActive = this.state.globalHashActive;
          newGlobalHashActive.push(value);
          getNewDat(this.state.data, newGlobalHashActive).then((newDat) => {
            this.setState({
              globalHashActive: newGlobalHashActive,
              globalHash: newGlobalHash,
              filteredData: newDat,
            });
            return;
          });
        }
      }
    }
  }
  render() {
    if (this.state.data != null) {
      if (this.state.isSingle == false) {
        console.log("IS SINGLE IS FALSE");
        return (
          <Wrapper>
            <ChartWrapper>
              <TopBarParent>
                <TopBarChildBigLeft>
                  {this.state.globalHashActive.map((hash) => {
                    return (
                      <TopHashtagIndividualActive
                        onClick={() => this.hashtagClickedBack(hash)}
                      >
                        #{hash}
                      </TopHashtagIndividualActive>
                    );
                  })}
                  {this.state.globalHash.map((hash) => {
                    return (
                      <TopHashtagIndividual
                        onClick={() => this.hashtagClicked(hash)}
                      >
                        #{hash}
                      </TopHashtagIndividual>
                    );
                  })}
                </TopBarChildBigLeft>
                <TopBarChildSmall>
                  <TopHashtagIndividualActivePnl>
                    <Pnl />
                  </TopHashtagIndividualActivePnl>
                </TopBarChildSmall>
                <TopBarChildBigRight>
                  <TopHashtagIndividualActiveRight>
                    <SymbolChooser />
                  </TopHashtagIndividualActiveRight>
                </TopBarChildBigRight>
              </TopBarParent>
              <WholeGrid>
                {this.state.isSingleNotes == false ? (
                  <ContainDivHeader>
                    <NextToDivHeader>Start</NextToDivHeader>
                    <NextToDivHeader>End</NextToDivHeader>
                    <NextToDivHeader>L/S</NextToDivHeader>
                    <NextToDivHeader>Entry</NextToDivHeader>
                    <NextToDivHeader>Exit</NextToDivHeader>
                    <NextToDivHeader>Qty</NextToDivHeader>
                    <NextToDivHeader>RPNL</NextToDivHeader>
                  </ContainDivHeader>
                ) : null}
                <ReChart
                  data={this.state.data}
                  filteredData={this.state.filteredData}
                  initData={this.props.data}
                />
              </WholeGrid>
            </ChartWrapper>
          </Wrapper>
        );
      } else {
        console.log("IS SINGLE IS TRUE");
        return (
          <Wrapper>
            <ChartWrapper>
              <TopBarParent>
                <TopBarChildBigLeft>
                  <Tabs />
                </TopBarChildBigLeft>
                <TopBarChildSmall>
                  <TopHashtagIndividualActivePnl>
                    <Pnl />
                  </TopHashtagIndividualActivePnl>
                </TopBarChildSmall>
                <TopBarChildBigRight>
                  <RightTabs>
                    <Notes firstTrade={this.state.singleTrade} />
                  </RightTabs>
                </TopBarChildBigRight>
              </TopBarParent>
              <WholeGrid>
                {this.state.isSingleNotes == false ? (
                  <ContainDivHeader>
                    <NextToDivHeader>Start</NextToDivHeader>
                    <NextToDivHeader>End</NextToDivHeader>
                    <NextToDivHeader>L/S</NextToDivHeader>
                    <NextToDivHeader>Entry</NextToDivHeader>
                    <NextToDivHeader>Exit</NextToDivHeader>
                    <NextToDivHeader>Qty</NextToDivHeader>
                    <NextToDivHeader>RPNL</NextToDivHeader>
                  </ContainDivHeader>
                ) : null}
                <ReChart
                  data={this.state.data}
                  filteredData={this.state.filteredData}
                  initData={this.props.data}
                />
              </WholeGrid>
            </ChartWrapper>
          </Wrapper>
        );
      }
    }
  }
}

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
const WholeGrid = styled.div``;
// border: 1px solid #f2f2f2;

const TopBarParent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 14px;
`;

// flex: 1 1 45%; /*grow | shrink | basis */
const TopBarChildBigLeft = styled.div`
  width: 45%;
  display: flex;
  flex-direction: row;
  overflow: auto;
`;
const TopBarChildBigRight = styled.div`
  width: 45%;
  display: flex;
  flex-direction: row;
  overflow: auto;
`;

const TopBarChildSmall = styled.div`
  display: flex;
  flex-direction: row;
  width: 10%;
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
  white-space: nowrap;
`;

const TopHashtagIndividualActive = styled.div`
  background: #212528;
  color: #fff;
  padding: 8px;
  margin: 0 10px;
  border-radius: 2px;
  ${wideFont}
  :hover {
    cursor: pointer;
  }
  margin-left: 0;
  white-space: nowrap;
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
const RightTabs = styled.div`
  color: #fff;
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
