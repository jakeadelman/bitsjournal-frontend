import styled from "styled-components";
import {
  ContainDiv,
  NextToDiv,
  NextToDivHeader,
  RowContainer,
  ContainDivHeader,
} from "../Tades/Trades";
import ReChart from "../Tades/Trades";
import Sidebar768 from "../../Menu/768px/Menu";
import { getNewDat } from "../shared/helpers";

import { inject, observer } from "mobx-react";
import { when } from "mobx";

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
    };
    this.getGlobalHashtags = this.getGlobalHashtags.bind(this);
    this.hashtagClicked = this.hashtagClicked.bind(this);
    this.hashtagClickedBack = this.hashtagClickedBack.bind(this);
  }

  componentWillMount() {
    this.setState({ data: this.props.data });
    this.getGlobalHashtags(this.props.data);
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
    console.log("THIS IS GLOBAL HAS", this.state.globalHash);
    console.log("IN 786");
    if (this.state.data != null) {
      return (
        <Wrapper>
          <Sidebar768 />
          <ChartWrapper>
            <TopHashtagDiv>
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
            </TopHashtagDiv>
            <ContainDivHeader>
              <NextToDivHeader>Start</NextToDivHeader>
              <NextToDivHeader>End</NextToDivHeader>
              <NextToDivHeader>L/S</NextToDivHeader>
              <NextToDivHeader>Entry</NextToDivHeader>
              <NextToDivHeader>Exit</NextToDivHeader>
              <NextToDivHeader>Qty</NextToDivHeader>
              <NextToDivHeader>RPNL</NextToDivHeader>
            </ContainDivHeader>
            <ReChart
              data={this.state.data}
              filteredData={this.state.filteredData}
              initData={this.props.data}
            />
          </ChartWrapper>
        </Wrapper>
      );
    }
  }
}

const TopHashtagDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 8px;
`;
const TopHashtagIndividual = styled.div`
  background: #f8f8ff;
  color: #000;
  padding: 8px;
  margin: 0 10px;
  border-radius: 2px;
  :hover {
    cursor: pointer;
  }
`;
const TopHashtagIndividualActive = styled.div`
  background: #212528;
  color: #fff;
  padding: 8px;
  margin: 0 10px;
  border-radius: 2px;
  :hover {
    cursor: pointer;
  }
`;

const ChartWrapper = styled.div`
  background: white;
  padding: 5px;
  width: 100%;
  @media (max-width: 768px) {
    margin: 0;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
