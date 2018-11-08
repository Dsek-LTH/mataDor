import React from "react";
import { addOrRemove, clear } from "../utils/api";
import { AdminPanel, FocusInput, ColoredButton } from "./adminStyles";
import {
  ESCAPE_KEY,
  ENTER_KEY,
  NUMPAD_ENTER_KEY,
  BACKSPACE,
  DELETE
} from "../utils/keypadNumbers";

class AdminView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { typed: "" };
  }

  // Implemented this way to always accept input!
  handleKeyDown = event => {
    const keyCode = event.keyCode;
    switch (keyCode) {
      case ESCAPE_KEY:
        this.setState({ typed: "" });
        break;
      case ENTER_KEY:
      case NUMPAD_ENTER_KEY:
        this.sendNumber();
        break;
      case DELETE:
      case BACKSPACE:
        this.setState({
          typed: this.state.typed.substring(0, this.state.typed.length - 1)
        });
        break;
      default:
        this.handleIfNumber(keyCode);
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
        <FocusInput value={this.state.typed} type="number" />
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
