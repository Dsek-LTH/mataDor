import React from "react";
import styled from "styled-components";
import { StyledHeader } from "./styles";
import { ColoredButton } from "../AdminBar/adminStyles";
import { NotifyContainer, FormContainer, WaitInput } from "./styles";
import bell from "./bell.png";

const BELL = 0;
const INPUT = 1;
const WAITING = 2;
const DONE = 3;
const MAX_NUMBER_LENGTH = 8;

class NotifyHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stage: BELL,
      foodNumber: ""
    };
  }

  bellToInput = () => {
    if (!("Notification" in window)) {
      alert("Din webläsare stödjer inte notiser :(");
    }
    Notification.requestPermission().then(permission => {
      if (permission === "granted") {
        this.setState({ stage: INPUT });
      }
    });
  };

  inputToWaiting = foodNumber => {
    if (foodNumber.length > 1 && !foodNumber.startsWith("-")) {
      this.setState({ stage: WAITING, foodNumber });
    }
  };

  notifyMeIfTimeIsRight = () => {
    const { numberList } = this.props;
    const { stage, foodNumber } = this.state;
    if (stage === WAITING && numberList.includes(foodNumber)) {
      new Notification("Din mat är klar!");
      this.setState({ stage: DONE });
    }
  };

  render() {
    this.notifyMeIfTimeIsRight();
    return (
      <div>
        <StyledHeader>
          Mat redo för upphämtning
          {this.state.stage === BELL && (
            <EnableNotif enable={this.bellToInput} />
          )}
        </StyledHeader>
        {this.state.stage === INPUT && (
          <NotificationForm foodSetter={this.inputToWaiting} />
        )}
        {this.state.stage === WAITING && (
          <NotifyContainer>väntar på {this.state.foodNumber}</NotifyContainer>
        )}
        {this.state.stage === DONE && (
          <NotifyContainer>
            {this.state.foodNumber} är redo att hämtas
          </NotifyContainer>
        )}
      </div>
    );
  }
}

const BellIcon = styled.img`
  max-height: 40px;
`;

const BellButton = styled.button`
  border: none;
  background-color: inherit;
  cursor: pointer;
`;

const EnableNotif = ({ enable }) => (
  <BellButton onClick={enable}>
    <BellIcon src={bell} />
  </BellButton>
);

class NotificationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
  }

  handleChange = e => this.setState({ input: e.target.value });

  onFormSubmit = event => {
    event.preventDefault();
    this.sendNumber(this.state.input);
  };

  render() {
    const { foodSetter } = this.props;
    const { input } = this.state;
    return (
      <form onSubmit={this.onFormSubmit}>
        <FormContainer>
          <WaitInput
            type="tel"
            pattern="[0-9]*"
            inputMode="numeric"
            maxLength={MAX_NUMBER_LENGTH}
            value={input}
            onChange={this.handleChange}
            placeholder="ditt nummer"
            autofocus
          />
          <ColoredButton
            type="submit"
            color="#b4d2ba"
            onClick={() => foodSetter(input)}
          >
            notifiera mig!
          </ColoredButton>
        </FormContainer>
      </form>
    );
  }
}

export default NotifyHeader;
