import React from 'react'
import Header from '../utils/Header'
import NumberContainer from '../Numbers/NumberContainer'
import NumberListFetcher from '../Numbers/NumberListFetcher'
import NotifyMe from '../utils/NotifyMe'
import { AppContainer } from '../utils/styles'

export default ({numberList}) => (
  <AppContainer>
    <NumberListFetcher render={({numberList}) => [
      <Header key="header"/>,
      <NotifyMe numbers={numberList}/>,
      <NumberContainer numberList={numberList} isAdmin={false} key="numbers"/>,
    ]}/>
  </AppContainer>
);
