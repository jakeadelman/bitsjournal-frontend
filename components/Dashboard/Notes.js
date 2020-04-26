import { Component } from "react";
import styled from "styled-components";
import { ApolloConsumer } from "react-apollo";
import { getNotes, getHashtags } from "./notesHelpers";
import gql from "graphql-tag";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes, faEquals } from "@fortawesome/free-solid-svg-icons";
import { inject, observer } from "mobx-react";
import { when } from "mobx";
import equal from "fast-deep-equal";
import TextareaAutosize from "react-autosize-textarea";
import { wideFont } from "../shared/helpers";

@inject(["store"])
@observer
export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      hashtags: [],
      initHashtags: [],
      showNotes: false,
    };

    this.setShowNotes = this.setShowNotes.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.store.tempNotes[0] != undefined) {
      let isTemp = false;
      for (let i = 0; i < this.props.store.tempNotes.length; i++) {
        if (
          this.props.store.tempNotes[i].time == this.props.firstTrade.timestamp
        ) {
          this.setState({ value: this.props.store.tempNotes[i].note });
          isTemp = true;
        }
        if (i == this.props.store.tempNotes.length - 1 && isTemp == false) {
          this.setState({
            value: this.props.firstTrade.notes,
          });
        }
      }
    } else {
      if (this.props.firstTrade.notes != "undefined") {
        this.setState({
          value: this.props.firstTrade.notes,
        });
      }
    }
    let splitTags = this.props.firstTrade.hashtags.split(",");
    splitTags.map((tag) => {
      this.state.initHashtags.push(tag);
    });
  }

  handleChange(client) {
    return (event) => {
      // event.preventDefault();
      this.setState({ value: event.target.value }, this.handleSubmit(client));
      this.props.store.addTempNote(
        this.props.firstTrade.timestamp,
        event.target.value
      );
    };
  }

  removeHashtag(client, hashtag) {
    return async (event) => {
      if (event != undefined && event.preventDefault != undefined) {
        event.preventDefault();
      }
      let time = this.props.firstTrade.timestamp;
      client
        .mutate({
          mutation: gql`
            mutation removeHashtag($time: String!, $hashtag: String!) {
              removeHashtag(time: $time, hashtag: $hashtag)
            }
          `,
          variables: { time, hashtag },
          refetchQueries: [`fetchTradeHistory`],
        })
        .then(() => {
          this.props.store.changeHasTempTags();
        });
    };
  }

  handleSubmit(client) {
    return (event) => {
      if (event != undefined && event.preventDefault != undefined) {
        event.preventDefault();
      }
      console.log("HASHTAGS", this.state.hashtags);
      getNotes(this.state.value).then(async (res) => {
        let notes = res[0];
        // let hashtags = res[1];
        let time = this.props.firstTrade.timestamp;
        let reso = client.mutate({
          mutation: gql`
            mutation addNotes($time: String!, $notes: String!) {
              addNotes(time: $time, notes: $notes)
            }
          `,
          variables: { time, notes },
        });

        return await reso;
      });
    };
  }

  setShowNotes() {
    if (this.state.showNotes == false) {
      this.setState({ showNotes: true });
    } else {
      this.setState({ showNotes: false });
    }
  }
  render() {
    return (
      <ApolloConsumer>
        {(client) => (
          <div>
            {/* <FullRow> */}
            <FullRow onSubmit={this.handleSubmit(client)}>
              <HashtagDiv>
                <AddHashtag
                  firstTrade={this.props.firstTrade}
                  client={client}
                />
              </HashtagDiv>
              {this.state.initHashtags.map((tag) => {
                if (tag != "undefined") {
                  return (
                    <SingleHashtagDiv>
                      <SingleHashtagText>#{tag}</SingleHashtagText>
                      <SingleHashtagDelete
                        onClick={this.removeHashtag(client, tag)}
                      >
                        <FontAwesomeIcon
                          icon={faTimes}
                          size="xs"
                          style={{
                            transition: "none",
                          }}
                        />
                      </SingleHashtagDelete>
                    </SingleHashtagDiv>
                  );
                }
              })}
              {this.state.showNotes == true ? (
                <ShowNotesDiv onClick={() => this.setShowNotes()}>
                  <ShowNotesInner>Hide Notes</ShowNotesInner>
                </ShowNotesDiv>
              ) : (
                <ShowNotesDiv onClick={() => this.setShowNotes()}>
                  <ShowNotesInner>Show Notes</ShowNotesInner>
                </ShowNotesDiv>
              )}
            </FullRow>
            {this.state.showNotes == true ? (
              <TextareaAutosize
                style={{
                  width: "100%",
                  padding: "12px 20px",
                  margin: "8px 0",
                  boxSizing: "border-box",
                  background: "#f8f8ff",
                  border: "none",
                  outline: "none",
                  fontSize: "16px",
                }}
                rows={5}
                maxRows={25}
                value={this.state.value}
                onChange={this.handleChange(client)}
              />
            ) : null}
          </div>
        )}
      </ApolloConsumer>
    );
  }
}
// const NotesInput = styled.textarea`
//   width: 100%;
//   padding: 12px 20px;
//   margin: 8px 0;
//   box-sizing: border-box;
//   background: #f8f8ff;
//   border: none;
// `;

@inject(["store"])
@observer
class AddHashtag extends Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clicked = this.clicked.bind(this);
  }

  componentDidMount() {
    this.setState({ client: this.props.client });
  }

  handleChange(event) {
    // event.preventDefault();
    console.log(event.target.value);
    this.setState({ value: event.target.value });
  }

  async handleSubmit(event) {
    // return event => {
    event.preventDefault();
    console.log(this.state.value);
    getHashtags(this.state.value)
      .then(async (res) => {
        console.log("CLICKED");
        let client = this.state.client;
        // if(typeof)
        let hashtag = res;
        console.log(hashtag, "HASHTAG");
        let time = this.props.firstTrade.timestamp;
        let reso = client.mutate({
          mutation: gql`
            mutation addHashtag($time: String!, $hashtag: String!) {
              addHashtag(time: $time, hashtag: $hashtag)
            }
          `,
          variables: { time, hashtag },
          refetchQueries: [`fetchTradeHistory`],
        });

        return await reso;
      })
      .then((reso) => {
        this.setState({ value: "" });
        this.props.store.changeHasTempTags();
      });
    // };
  }

  clicked() {
    this.state.clicked
      ? this.setState({ clicked: false })
      : this.setState({ clicked: true });
  }

  render() {
    return (
      <div>
        <Popup onClick={this.clicked}>
          <FontAwesomeIcon icon={faPlus} style={{ transition: "none" }} />
        </Popup>
        {this.state.clicked ? (
          <PopupTop>
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
              />
              <AddHashSubmit type="submit" value="Add Hashtag" />
            </form>
          </PopupTop>
        ) : null}
      </div>
    );
  }
}
const AddHashSubmit = styled.input`
  background: none;
  border: none;
  color: white;
  font-weight: 500;
  padding: 2px;
`;
const Popup = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
  background: #000;
  padding: 8px;
  border-radius: 2px;
`;

const PopupTop = styled.div`
  position: absolute;
  background: #000;
  z-index: 1;
  margin: 5px;
  padding: 2px;
  border-radius: 2px;
`;
// background: #6c757d;
// background: #b9bdc1;
const SingleHashtagDiv = styled.div`
  background: #f8f8ff;
  margin: 20px 8px;
  color: black;
  padding: 10px;

  white-space: nowrap;
  display: flex;
  flex-direction: row;
  margin-left: 0px;
`;

const ShowNotesDiv = styled.div`
  background: #fff;
  margin: 20px 8px;

  color: #000;
  padding: 10px;
  padding-top: 8px;
  white-space: nowrap;
  display: flex;
  flex-direction: row;
  margin-left: 0px;
  border-radius: 2px;

  :hover {
    transition: none;
    cursor: pointer;
  }
`;

const ShowNotesInner = styled.div`
  ${wideFont}
  font-size:13px;
  transition: none;
  margin: auto;
`;

const SingleHashtagText = styled.div`
  text-align: center;
  vertical-align: middle;
`;
const SingleHashtagDelete = styled.div`
  margin-left: 6px;
  :hover {
    cursor: pointer;
  }
`;

const HashtagDiv = styled.div`
  margin: auto 0;
  text-align: center;
  vertical-align: middle;
  color: white;
  padding: 10px;
  padding-top: 8px;
`;

const FullRow = styled.form`
  display: flex;
  flex-direction: row;
`;

const NotesSubmit = styled.input`
  margin: 9px;
  padding: 15px;
  background: #212528;
  border: none;
  color: white;
`;

const NotesInput = styled.textarea`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  background: #f8f8ff;
  border: none;
`;
