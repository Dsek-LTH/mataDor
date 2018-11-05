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
    this.state = {numbers: [102, 210, 123, 342]};
  }

  componentDidMount() {
    const eventSource = new EventSource('http://localhost:5000/');

    eventSource.onmessage = e => {
        console.log(e)
        this.setState({numbers: this.state.numbers.concat([e])})
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
