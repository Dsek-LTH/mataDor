import React from 'react'
import styled from 'styled-components'

const NumberDiv = styled.div`
 background-color: #F280A1;
 font-size: 4em;
 font-weight: bold;
 display: flex;
 align-items: center;
 justify-content: center;
`
const WaitingNumber = ({number}) => <NumberDiv>{number}</NumberDiv>

export default WaitingNumber
