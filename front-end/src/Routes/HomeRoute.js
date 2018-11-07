import React from 'react';
import Header from '../utils/Header';
import NumberContainer from '../Numbers/NumberContainer';
import {AppContainer} from '../utils/styles';

export default () => (
  <AppContainer>
    <Header />
    <NumberContainer isAdmin={false} />
  </AppContainer>
);
