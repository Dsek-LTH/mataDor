import React from 'react'
import WaitingNumber from './WaitingNumber'
import styled from 'styled-components'

const StyledContainer = styled.div`
 grid-area: numbers;
 width: 100%;
 display: grid;
 grid-rows: auto;
 grid-row-gap: 20px;
`

const NumberContainer = ({numberList}) => (
  <StyledContainer>
    {numberList.map(num => <WaitingNumber key={num} number={num}/>)}
  </StyledContainer>
)

export default NumberContainer
