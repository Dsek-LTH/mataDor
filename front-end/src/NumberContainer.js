import React from 'react';
import WaitingNumber from './WaitingNumber';
import styled from 'styled-components';

const StyledContainer = styled.div`
  grid-area: numbers;
  width: 100%;
  display: grid;
  grid-rows: auto;
  grid-row-gap: 20px;
`;

class NumberContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {numberList: []};
  }

  componentDidMount() {
    const eventSource = new EventSource('http://localhost:3000/subscribe');

    eventSource.onmessage = e => {
      const data = JSON.parse(e.data);
      data && this.setState({numberList: data});
    };

    eventSource.addEventListener('eventType', e => {});
  }

  render() {
    return (
      <StyledContainer>
        {this.state.numberList.map(num => (
          <WaitingNumber key={num} number={num} />
        ))}
      </StyledContainer>
    );
  }
}

export default NumberContainer;
