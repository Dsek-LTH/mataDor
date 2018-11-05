import React, {Component} from 'react';
import styled from 'styled-components';
import NumberContainer from './NumberContainer';
import Header from './Header';

const AppContainer = styled.div`
  width: 100vw;
  display: grid;
  grid-template-areas:
    '. . . '
    '. header .'
    '. . .'
    ' . numbers . ';
  grid-template-rows: 50px 20px 1fr 6fr;
  grid-template-columns: 1fr 2fr 1fr;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {numbers: []};
  }

  componentDidMount() {
    const eventSource = new EventSource('http://localhost:3000/subscribe');

    eventSource.onmessage = e => {
        console.log(e)
        this.setState({numbers: this.state.numbers.concat([e.data])})
    };

    eventSource.addEventListener('eventType', e => {});
  }

  render() {
    return (
      <AppContainer>
        <Header />
        <NumberContainer numberList={this.state.numbers} />
      </AppContainer>
    );
  }
}

export default App;
