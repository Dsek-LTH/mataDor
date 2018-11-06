import React from 'react';
import styled from 'styled-components';
import {addOrRemove} from './api.js';

const NumberDiv = styled.div`
  background-color: #f280a1;
  font-size: 4em;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const WaitingNumber = ({number, isAdmin}) => (
  <NumberDiv onClick={() => isAdmin && addOrRemove(number)}>{number}</NumberDiv>
);

export default WaitingNumber;
