import styled from "styled-components";
import {
  ContainDiv,
  NextToDiv,
  NextToDivHeader,
  RowContainer,
  ContainDivHeader
} from "../Charts/ReChart";
import ReChart from "../Charts/ReChart";
import Sidebar from "../Categories/Menu";
import { getNewDat } from "./helpers";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      globalHash: [],
      globalHashActive: ["all"],
      data: null
    };
    this.getGlobalHashtags = this.getGlobalHashtags.bind(this);
    this.hashtagClicked = this.hashtagClicked.bind(this);
  }

  componentWillMount() {
    this.setState({ data: this.props.data });
    this.getGlobalHashtags(this.props.data);
  }
  componentDidMount() {
    console.log(this.state.data, "THIS DAT");
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
            // let newDat = await getNewDat(data, this.state.globalHashActive);
            // this.setState({ globalHash: newGlobalHash, data: newDat });
          }
        }
      }
    }
  }

  async hashtagClicked(value) {
    console.log("CLICKED");
    console.log(this.state.data, "THIS DAT");
    if (this.state.globalHashActive[0] == undefined) {
      console.log("WAS UNDEFINED");
      let newArray = [];
      newArray.push(value);
      this.setState({ globalHashActive: newArray });
      const index = this.state.globalHash.indexOf(value);
      if (index > -1) {
        let newGlobalHash = this.state.globalHash;
        newGlobalHash.splice(index, 1);
        this.setState({ globalHash: newGlobalHash });
      }
      console.log(this.state.globalHashActive);
      console.log(this.state.globalHash);
      return;
    }
    for (let i = 0; i < this.state.globalHashActive.length; i++) {
      if (this.state.globalHashActive[i] == "all") {
        this.state.globalHashActive = [];
        const index = this.state.globalHash.indexOf(value);
        if (index > -1) {
          let newGlobalHash = this.state.globalHash;
          newGlobalHash.splice(index, 1);
          newGlobalHash.push("all");
          let newGlobalHashActive = this.state.globalHashActive;
          newGlobalHashActive.push(value);
          getNewDat(this.state.data, newGlobalHashActive).then(newDat => {
            console.log("GOT NEW DAT", newDat);
            this.setState({
              globalHashActive: newGlobalHashActive,
              globalHash: newGlobalHash,
              data: newDat
            });
            console.log(this.state);
            return;
          });
        }
      }
      if (value == this.state.globalHashActive[i]) {
        return;
      }
      if (i == this.state.globalHashActive.length - 1) {
        console.log("ENDING");
        const index = this.state.globalHash.indexOf(value);
        if (index > -1) {
          let newGlobalHash = this.state.globalHash;
          newGlobalHash.splice(index, 1);
          newGlobalHash.push("all");
          let newGlobalHashActive = this.state.globalHashActive;
          newGlobalHashActive.push(value);
          getNewDat(this.state.data, newGlobalHashActive).then(newDat => {
            console.log("GOT NEW DAT", newDat);
            this.setState({
              globalHashActive: newGlobalHashActive,
              globalHash: newGlobalHash,
              data: newDat
            });
            console.log(this.state.globalHashActive);
            console.log(this.state.globalHash);
            console.log(this.state);
            return;
          });
        }
      }
    }
  }
  render() {
    // this.getGlobalHashtags(this.props.data);
    console.log("RERENDERED");
    if (this.state.data != null) {
      console.log("RETURNING");
      console.log(this.state.data);
      return (
        <Wrapper>
          <ChartWrapper>
            <TopHashtagDiv>
              {this.state.globalHashActive.map(hash => {
                console.log("ADDING NEW HAS");
                return (
                  <TopHashtagIndividualActive>
                    #{hash}
                  </TopHashtagIndividualActive>
                );
              })}
              {this.state.globalHash.map(hash => {
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
              <NextToDivHeader>Direction</NextToDivHeader>
              <NextToDivHeader>Avg Entry</NextToDivHeader>
              <NextToDivHeader>Avg Exit</NextToDivHeader>
              <NextToDivHeader>Qty</NextToDivHeader>
              <NextToDivHeader>Realized Pnl</NextToDivHeader>
            </ContainDivHeader>
            <ReChart data={this.state.data} />
          </ChartWrapper>
          <Sidebar />
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
    margin: 0 5vw;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: flex-align;
`;
