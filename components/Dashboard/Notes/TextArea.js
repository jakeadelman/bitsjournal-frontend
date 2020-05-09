import { getNotes, getHashtags } from "./notesHelpers";
import React, { useState, useEffect } from "react";
import { ApolloConsumer } from "react-apollo";
import { observer } from "mobx-react-lite";
import { inject } from "mobx-react";
import TextareaAutosize from "react-autosize-textarea";

const MyTextArea = inject("store")(
  observer(({ firstTrade, store }) => {
    const [value, setValue] = useState(firstTrade.notes);

    function handleChange(client) {
      return (event) => {
        // event.preventDefault();
        setValue(event.target.value, handleSubmit(client));
        store.addTempNote(firstTrade.timestamp, event.target.value);
      };
    }

    function handleSubmit(client) {
      return (event) => {
        if (event != undefined && event.preventDefault != undefined) {
          event.preventDefault();
        }

        getNotes(value).then(async (res) => {
          let notes = res[0];
          let time = firstTrade.timestamp;
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

    return (
      <ApolloConsumer>
        {(client) => (
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
            value={value}
            onChange={handleChange(client)}
          />
        )}
      </ApolloConsumer>
    );
  })
);

export default MyTextArea;
