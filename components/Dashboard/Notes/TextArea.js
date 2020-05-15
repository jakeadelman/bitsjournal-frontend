import { getNotes, getHashtags } from "./notesHelpers";
import React, { useState, useEffect } from "react";
import { ApolloConsumer } from "react-apollo";
import { observer } from "mobx-react-lite";
import { inject } from "mobx-react";
import TextareaAutosize from "react-autosize-textarea";
import gql from "graphql-tag";

const MyTextArea = inject("store")(
  observer(({ firstTrade, store, client }) => {
    const [value, setValue] = useState();
    const [light, setLight] = useState(false);
    const [myClient, setClient] = useState(client);
    useEffect(() => {
      let val;
      if (firstTrade.notes == "undefined") {
        setValue("Add notes here...");
        setLight(true);
      } else {
        setValue(firstTrade.notes);
      }
      let notTemp = true;
      if (store.tempNotes[0] !== undefined) {
        for (let i = 0; i < store.tempNotes.length; i++) {
          if (store.tempNotes[i].time == firstTrade.timestamp.toString()) {
            setValue(store.tempNotes[i].note);
          }
        }
      }
    });

    useEffect(() => {
      if (value != "Add notes here...") {
        setLight(false);
        getNotes(value).then(async (res) => {
          let notes = res[0];
          let time = firstTrade.timestamp;
          let reso = myClient.mutate({
            mutation: gql`
              mutation addNotes($time: String!, $notes: String!) {
                addNotes(time: $time, notes: $notes)
              }
            `,
            variables: { time, notes },
          });
          return await reso;
        });
      }
    }, [value]);

    function handleChange() {
      return (event) => {
        setLight(false);
        store.addTempNote(firstTrade.timestamp, event.target.value);
        setValue(event.target.value);
      };
    }

    if (light == false) {
      return (
        <TextareaAutosize
          style={{
            width: "100%",
            padding: "12px 20px",
            marginTop: "8px",
            boxSizing: "border-box",
            background: "#f8f8ff",
            border: "none",
            outline: "none",
            fontSize: "15px",
          }}
          rows={5}
          maxRows={25}
          value={value}
          onChange={handleChange()}
        />
      );
    } else {
      return (
        <TextareaAutosize
          style={{
            width: "100%",
            padding: "12px 20px",
            marginTop: "8px",
            boxSizing: "border-box",
            background: "#f8f8ff",
            border: "none",
            outline: "none",
            fontSize: "15px",
            color: "#c6c6c6",
          }}
          rows={5}
          maxRows={25}
          value={value}
          onChange={handleChange()}
        />
      );
    }
  })
);

export default MyTextArea;
