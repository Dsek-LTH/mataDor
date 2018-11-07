import React from 'react';
import Header from '../utils/Header';
import NotifyMe from '../utils/NotifyMe';
import NumberContainer from '../Numbers/NumberContainer';
import {AppContainer} from '../utils/styles';

export default () => (
  <AppContainer>
    <Header />
    <NotifyMe />
    <NumberContainer isAdmin={false} />
  </AppContainer>
);
