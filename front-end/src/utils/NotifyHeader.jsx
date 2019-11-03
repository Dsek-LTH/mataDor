import React, { useState } from "react";
import styled from "styled-components";
import { StyledHeader } from "./styles";
import { ColoredButton } from "../AdminBar/adminStyles";
import { NotifyContainer, FormContainer, WaitInput } from "./styles";
import bell from "./bell.svg";
import { Switch, Route, useRouteMatch, useParams, useHistory } from "react-router-dom";
const MAX_NUMBER_LENGTH = 8;

const Bell = function () {
  const history = useHistory()

  const askForNotifictions = async () => {
    if (!("Notification" in window)) {
      alert("Din webläsare stödjer inte notiser :(");
    }
    const permission = await Notification.requestPermission()
    if (permission === "granted") {

      // todo how should we handle the hard coded paths?
      history.push("/wait/input")
    }
  };

  return (<BellButton onClick={askForNotifictions}>
    <BellIcon src={bell} />
  </BellButton>)
}

const NotificationForm = function () {
  const history = useHistory()
  const [input, setInput] = useState("")

  const handleChange = e => setInput(e.target.value);

  const onSubmit = e => {
    e.preventDefault();
    history.push(`/wait/input/${input}`)
  };

  return (
    <form onSubmit={onSubmit}>
      <FormContainer>
        <WaitInput
          type="tel"
          pattern="[0-9]*"
          inputMode="numeric"
          maxLength={MAX_NUMBER_LENGTH}
          value={input}
          onChange={handleChange}
          placeholder="ditt nummer"
          autoFocus
        />
        <ColoredButton type="submit" color="#b4d2ba">
          notifiera mig!
          </ColoredButton>
      </FormContainer>
    </form>
  );
}

const Waiting = function ({ numberList }) {
  const { number } = useParams();
  const history = useHistory()

  if (numberList.includes(number)) {
    try {
      new Notification("Din mat är klar!");
    } catch (e) {
      // Some browsers require the service worker to do the notications,
      // this is a hack i took from stack overflow to make mobile-chrome
      // work by using the service worker we get from react-scripts build command
      navigator.serviceWorker.register("service-worker.js");
      Notification.requestPermission(function (result) {
        if (result === "granted") {
          navigator.serviceWorker.ready.then(function (registration) {
            registration.showNotification("Din mat är klar!");
          });
        }
      });
    }
    history.push(`/wait/done/${number}`)
  }

  return <NotifyContainer>väntar på {number}</NotifyContainer>
}

const Done = function () {
  const { number } = useParams();
  return <NotifyContainer> {number} är redo att hämtas </NotifyContainer>
}


export default function ({ numberList }) {
  let match = useRouteMatch();
  return (<div>
    <StyledHeader>
      Mat redo för upphämtning
      <Route exact path={`${match.path}`}>
        <Bell />
      </Route>
    </StyledHeader >

    <Switch>
      <Route exact path={`${match.path}/input`}>
        <NotificationForm />
      </Route>

      <Route exact path={`${match.path}/input/:number`}>
        <Waiting numberList={numberList} />
      </Route>

      <Route exact path={`${match.path}/done/:number`} >
        <Done />
      </Route>
    </Switch>
  </div >)
}

const BellIcon = styled.img`
  max-height: 60px;
`;

const BellButton = styled.button`
  border: none;
  background-color: inherit;
  cursor: pointer;
`;
