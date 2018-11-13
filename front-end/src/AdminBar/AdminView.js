import React from "react";
import { addOrRemove, clear } from "../utils/api";
import { AdminForm, FocusInput, ColoredButton } from "./adminStyles";

const MAX_NUMBER_LENGTH = 8;
const filterNumeric = str => str.replace(/\D/g, "");

class AdminView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { typed: "" };
    this.inputRef = React.createRef();
  }

  sendNumber = () => {
    this.sendNumberWithParam(this.state.typed);
  };

  sendNumberWithParam = num => {
    if (num.length > 0) {
      addOrRemove(num);
      this.setState({ typed: "" });
    }
  };

  clearOnEscape = event => {
    if (event.key === "Escape") {
      this.setState({ typed: "" });
    }
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.sendNumber();
  };

  focusInput = () => {
    // setTimeout hack necessary to prevent browsers blocking this behaviour
    setTimeout(() => this.inputRef.current.focus(), 1);
  };

  updateTyped = event => {
    const typed = filterNumeric(event.target.value).substring(
      0,
      MAX_NUMBER_LENGTH
    );
    this.setState({ typed });
  };

  isNewNumber = number => !this.props.numberList.includes(number);

  componentDidMount() {
    this.focusInput();
    window.addEventListener("focus", this.focusInput);
  }

  componentWillUnmount() {
    window.addEventListener("focus", this.focusInput);
  }

  render() {
    const { typed } = this.state;
    const newNumber = this.isNewNumber(typed);
    return (
      <AdminForm onSubmit={this.onFormSubmit}>
        <ColoredButton
          color="#dbafc1"
          area="clear"
          onClick={clear}
          type="button"
        >
          rensa
        </ColoredButton>
        <FocusInput
          type="tel"
          pattern="[0-9]*"
          inputMode="numeric"
          value={typed}
          onChange={this.updateTyped}
          onBlur={this.focusInput}
          onKeyDown={this.clearOnEscape}
          ref={this.inputRef}
          maxLength={MAX_NUMBER_LENGTH}
          autoFocus
        />
        <ColoredButton
          color={newNumber ? "#8ed081" : "#dbafc1"}
          area="send"
          onClick={this.sendNumber}
          type="submit"
        >
          {newNumber ? "add" : "remove"}
        </ColoredButton>
      </AdminForm>
    );
  }
}

export default AdminView;
