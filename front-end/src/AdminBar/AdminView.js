import React from "react";
import { addOrRemove, clear } from "../utils/api";
import { AdminPanel, FocusInput, ColoredButton } from "./adminStyles";

class AdminView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { typed: "" };
  }

  // Implemented this way to always accept input!
  handleKeyDown = ({ key }) => {
    switch (key) {
      case "Escape":
        this.setState({ typed: "" });
        break;
      case "Enter":
        this.sendNumber();
        break;
      case "Del":
      case "Backspace":
        this.setState({
          typed: this.state.typed.substring(0, this.state.typed.length - 1)
        });
        break;
      default:
        this.handleIfNumber(key);
    }
  };

  sendNumber = () => {
    this.sendNumberWithParam(this.state.typed);
  };

  sendNumberWithParam = num => {
    if (num.length > 0) {
      addOrRemove(num);
      this.setState({
        typed: ""
      });
    }
  };

  undo = () => {
    // Not yet implemented use redux
  };

  handleIfNumber(keyCode) {
    if (this.state.typed.length < 8) {
      // max len accpt by backend
      const inputSymbol = String.fromCharCode(keyCode);
      if (inputSymbol && !isNaN(inputSymbol)) {
        this.setState({ typed: this.state.typed.concat(inputSymbol) });
      }
    }
  }

  componentWillMount() {
    document.addEventListener("keydown", this.handleKeyDown.bind(this));
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown.bind(this));
  }

  render() {
    return (
      <AdminPanel>
        <ColoredButton color="#dbafc1" area="clear" onClick={clear}>
          rensa
        </ColoredButton>
        <FocusInput value={this.state.typed} type="number"/>
        <ColoredButton color="#b4d2ba" area="undo" onClick={this.undo}>
          :)
        </ColoredButton>
        <ColoredButton color="#8ed081" area="send" onClick={this.sendNumber}>
          send
        </ColoredButton>
      </AdminPanel>
    );
  }
}

export default AdminView;
