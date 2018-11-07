import React from 'react'
import WaitingNumber from './WaitingNumber'
import { NumberListContainer } from './numberListStyle'

class NumberContainer extends React.Component {
  render () {
    return (
      <NumberListContainer isMobile={true}>
        {this.props.numbers.map(num => (
          <WaitingNumber key={num} isAdmin={this.props.isAdmin} number={num}/>
        ))}
      </NumberListContainer>
    )
  }
}

export default NumberContainer
