import React from 'react'
import Header from '../utils/Header'
import NotifyMe from '../utils/NotifyMe'
import NumberContainer from '../Numbers/NumberContainer'
import { AppContainer } from '../utils/styles'

export default ({numbers}) => (
  <AppContainer>
    <Header/>
    <NotifyMe numbers={numbers}/>
    <NumberContainer numbers={numbers} isAdmin={false}/>
  </AppContainer>
);
