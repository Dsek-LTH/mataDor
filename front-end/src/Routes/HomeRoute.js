import React from 'react'
import Header from '../utils/Header'
import NumberContainer from '../Numbers/NumberContainer'
import NumberListFetcher from '../Numbers/NumberListFetcher'
import NotifyMe from '../utils/NotifyMe'
import { AppContainer } from '../utils/styles'

export default () => (
  <AppContainer>
    <NumberListFetcher render={({numbers}) => [
      <Header key="header"/>,
      <NotifyMe numbers={numbers}/>,
      <NumberContainer numbers={numbers} isAdmin={false} key="numbers"/>,
    ]}/>
  </AppContainer>
);
