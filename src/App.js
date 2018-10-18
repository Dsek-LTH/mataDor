import React, { Component } from 'react'
import styled from 'styled-components'
import NumberContainer from './NumberContainer'
import Header from './Header'

const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-areas: ". . . " ". header ." " . numbers . ";
  grid-template-rows: 50px 1fr 6fr;
  grid-columns-rows: 200px 1fr 200px;
`

class App extends Component {
  numbers = [102, 210, 123, 342]

  render () {
    return (
      <AppContainer>
        <Header/>
        <NumberContainer numberList={this.numbers}/>
      </AppContainer>
    )
  }
}

export default App
