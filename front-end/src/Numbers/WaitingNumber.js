import React from 'react';
import { addOrRemove } from '../utils/api.js';
import { NumberDiv } from './numberListStyle';

const WaitingNumber = ({ number, isAdmin }) => (
  <NumberDiv onClick={() => isAdmin && addOrRemove(number)}>{number}</NumberDiv>
);

export default WaitingNumber;
