import React from 'react';
import Header from '../utils/Header';
import NumberListFetcher from '../Numbers/NumberListFetcher';
import NotifyMe from '../utils/NotifyMe';
import { AppContainer } from '../utils/styles';

export default () => (
  <AppContainer>
    <NumberListFetcher render={({ numberList }) => [
      <Header />,
      <NotifyMe numberList={numberList} />,
    ]}
    />
  </AppContainer>
);
