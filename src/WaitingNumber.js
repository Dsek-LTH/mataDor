import React from 'react'
import styled from 'styled-components'

const NumberDiv = styled.div`
 background-color: #F280A1;
 text-align: center;
`
const WaitingNumber = ({number}) => <NumberDiv>{number}</NumberDiv>

export default WaitingNumber
