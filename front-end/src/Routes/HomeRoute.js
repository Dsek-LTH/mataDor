import React from 'react'
import Header from '../utils/Header'
import NumberContainer from '../Numbers/NumberContainer'
import NumberListFetcher from '../Numbers/NumberListFetcher'
import { AppContainer } from '../utils/styles'

export default () => (
  <AppContainer>
    <NumberListFetcher render={({numberList}) => [
      <Header key="header"/>,
      <NumberContainer numberList={numberList} isAdmin={false} key="numbers"/>,
    ]}/>
  </AppContainer>
);
