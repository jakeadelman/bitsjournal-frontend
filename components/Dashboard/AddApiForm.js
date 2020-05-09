import React, { useContext, useState, useEffect } from "react";
import { ApolloConsumer } from "react-apollo";
import gql from "graphql-tag";
import Router from "next/router";
import { Alert } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import FormWrapper from "../form/FormWrapper";
import Input from "../form/Input";
import Label from "../form/Label";
import Button from "../shared/Button";
const Cookie = require("js-cookie");

const ApiKeyForm = () => {
  const [res, setRes] = useState(false);
  const [loading, setLoading] = useState(true);
  const [notSubmitted, setNotSubmitted] = useState(true);

  async function handleSubmit(event, client) {
    event.preventDefault();
    setNotSubmitted(false);
    const form = event.target;
    const formData = new window.FormData(form);
    const key = formData.get("key");
    const secret = formData.get("secret");
    // console.log(email, password);
    form.reset();

    //check if api key is valid

    let apiRes = client.mutate({
      mutation: gql`
        mutation addApiKey($key: String!, $secret: String!) {
          addApiKey(key: $key, secret: $secret)
        }
      `,
      variables: { key, secret },
    });
    apiRes
      .then((apiRes) => {
        console.log("<<RES>>");
        console.log(apiRes.data.addApiKey);
        console.log(typeof apiRes.data.addApiKey);
        let isTrue = apiRes.data.addApiKey == true;
        console.log(isTrue);
        setRes(isTrue);
        setLoading(false);
      })
      .catch((apiRes) => {
        let isTrue = apiRes.data.addApiKey == true;
        console.log(isTrue);
        setRes(isTrue);
        setLoading(false);
      });
  }
  if (notSubmitted == true) {
    return (
      <ApolloConsumer>
        {(client) => (
          <div>
            <div>
              <Alert color="info">
                Add a Bitmex api key to import your recent trades and to
                automatically populate your future trades into the platform.
              </Alert>
              <Alert color="info">
                Note: We keep the keys encrypted in out database, however, make
                sure to leave "withdrawals allowed" UNCHECKED anyways when
                choosing key settings.
              </Alert>
            </div>
            <FormWrapper>
              <StyledForm onSubmit={(event) => handleSubmit(event, client)}>
                <InputWrapper>
                  <Label>key</Label>
                  <Input placeholder="" name="key" type="text" required />
                </InputWrapper>
                <InputWrapper>
                  <Label>secret</Label>
                  <Input placeholder="" name="secret" type="text" required />
                </InputWrapper>
                <div style={{ display: "flex", width: "100%" }}>
                  <SubmitButton type="submit">Submit</SubmitButton>
                </div>
              </StyledForm>
            </FormWrapper>
          </div>
        )}
      </ApolloConsumer>
    );
  }

  if (loading == true) {
    return <div>loading</div>;
  } else {
    if (res == false) {
      return <div>error submitting, please reload page and try again</div>;
    }
    if (res == true) {
      return (
        <ApolloConsumer>
          {(client) => <Populate client={client} />}
        </ApolloConsumer>
      );
    }
  }
};

const Populate = ({ client }) => {
  const [res, setRes] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (loading == true) {
      console.log("IN POPULATE");
      let myClient = client;
      let apiRes = myClient.mutate({
        mutation: gql`
          mutation {
            populate
          }
        `,
      });
      apiRes.then((reso) => {
        console.log("<<API RES>>");
        console.log(reso);
        console.log(reso.data.populate);
        setRes(reso.data.populate);
        setLoading(false);
      });
    }
  }, []);

  const resetApi = async (client) => {
    console.log("RESETTING");
    return new Promise(async (resolve) => {
      let key = "none";
      let secret = "none";

      let myRes = client.mutate({
        mutation: gql`
          mutation addApiKey($key: String!, $secret: String!) {
            addApiKey(key: $key, secret: $secret)
          }
        `,
        variables: { key, secret },
      });
      return await myRes;
    });
  };

  if (loading == true) {
    return <div>loading</div>;
  } else {
    if (res == false) {
      resetApi(client);
      return <div>api key not valid - reload and try again</div>;
    } else {
      location.reload();
    }
  }
};

export default ApiKeyForm;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${(props) =>
    props.loading &&
    "filter: grayscale(0.5) blur(5px) opacity(0.6); pointer-events: none"};
`;

const SubmitButton = styled(Button)`
  align-self: flex-end;
  margin-right: 0px;
  margin-left: auto;
`;

const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 24px;
  width: 100%;
`;
