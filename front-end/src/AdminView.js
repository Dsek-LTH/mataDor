import React from 'react';
import {addOrRemove, clear} from './api';
const ESCAPE_KEY = 27; // TODO import keys?
const ENTER_KEY = 13;
const NUMPAD_ENTER_KEY = 176; //TODO Kolla så numpad funkar
const BACKSPACE = 8;
const DELETE = 46;

class AdminView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {typed: ''};
  }

  handleKeyDown = event => {
    const keyCode = event.keyCode;
    switch (keyCode) {
      case ESCAPE_KEY:
        this.setState({typed: ''});
        break;
      case ENTER_KEY:
      case NUMPAD_ENTER_KEY:
        if (this.state.typed.length > 0) {
          addOrRemove(this.state.typed);
          this.setState({
            typed: '',
          });
        }
        break;
      case DELETE:
      case BACKSPACE:
        this.setState({
          typed: this.state.typed.substring(0, this.state.typed.length - 1),
        });
        break;
      default:
        this.handleIfNumber(keyCode);
    }
  };

  handleIfNumber(keyCode) {
    if (this.state.typed.length < 8) {
      //max len accpt by backend
      const inputSymbol = String.fromCharCode(keyCode);
      if (inputSymbol && !isNaN(inputSymbol)) {
        this.setState({typed: this.state.typed.concat(inputSymbol)});
      }
    }
  }

  componentWillMount() {
    document.addEventListener('keydown', this.handleKeyDown.bind(this));
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown.bind(this));
  }

  render() {
    return (
      <div>
        <div>Nuvarande input: {this.state.typed}</div>
        <input type="number"/>
        <ClearButton />
      </div>
    );
  }
}
function ClearButton() {
  return <div onClick={clear}>rensa alla</div>;
}
export default AdminView;
