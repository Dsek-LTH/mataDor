import React from "react";
import { ColoredButton } from "../AdminBar/adminStyles";
import { NotifyContainer } from "./styles";

class NotifyMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      acceptsNotification: false,
      sentNotification: false,
      waitingForFood: null,
      hide: false
    };
  }

  handleChange = e => this.setState({ input: e.target.value });

  notifyMe = () => {
    const { input, acceptsNotification, sentNotification } = this.state;
    const { numberList } = this.props;

    if (
      numberList.includes(input) &&
      acceptsNotification &&
      !sentNotification
    ) {
      new Notification("Din mat är klar!");
      this.setState({ sentNotification: true });
    }
  };

  registerForNotifications = () => {
    if (!("Notification" in window)) {
      alert("Din webläsare stödjer inte notiser :(");
    }
    Notification.requestPermission().then(permission => {
      this.setState({
        acceptsNotification: permission === "granted",
        waitingForFood: this.state.input
      });
    });
  };

  hide = () => {
    this.setState({ hide: true });
  };

  shouldShowInput = () => !this.state.hide && !this.state.sentNotification;

  render() {
    this.notifyMe();
    const { input, waitingForFood } = this.state;
    return (
      this.shouldShowInput() &&
      (waitingForFood ? (
        <NotifyContainer>
          väntar på
          {waitingForFood}
        </NotifyContainer>
      ) : (
        <NotifyContainer>
          <input
            value={input}
            onChange={this.handleChange}
            type="number"
            placeholder="ditt nummer"
          />
          <ColoredButton
            color="#b4d2ba"
            onClick={this.registerForNotifications}
          >
            notifiera mig!
          </ColoredButton>
          <ColoredButton color="#8ed081" onClick={this.hide}>
            inga notiser, tack
          </ColoredButton>
        </NotifyContainer>
      ))
    );
  }
}

export default NotifyMe;
