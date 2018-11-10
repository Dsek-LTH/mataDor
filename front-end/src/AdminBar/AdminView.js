import React from "react";
import { addOrRemove, clear } from "../utils/api";
import { AdminPanel, FocusInput, ColoredButton } from "./adminStyles";

const filterNumeric = str => str.replace(/\D/g,'');

class AdminView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { typed: "" };
    this.inputRef = React.createRef();
    this.updateTyped = this.updateTyped.bind(this);
  }

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

  focusInput = () => {
    // setTimeout hack necessary to prevent browsers blocking this behaviour
    setTimeout(() => this.inputRef.current.focus(), 1);
  }

  updateTyped = (event) => {
    this.setState({ typed: filterNumeric(event.target.value) });
  }

  componentDidMount() {
    this.focusInput();
  }

  render() {
    return (
      <AdminPanel>
        <ColoredButton color="#dbafc1" area="clear" onClick={clear}>
          rensa
        </ColoredButton>
        <FocusInput
          type="tel"
          pattern="[0-9]*"
          inputMode="numeric"
          value={this.state.typed}
          onChange={this.updateTyped}
          onBlur={this.focusInput}
          ref={this.inputRef}
        />
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
