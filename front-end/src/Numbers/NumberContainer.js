import React from 'react'
import WaitingNumber from './WaitingNumber'
import { NumberListContainer } from './numberListStyle'

class NumberContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {numberList: []}
  }

  componentDidMount () {
    const eventSource = new EventSource('http://localhost:3000/subscribe')

    eventSource.onmessage = e => {
      const data = JSON.parse(e.data)
      data && this.setState({numberList: data})
    }

    //TODO kolla detta
    eventSource.addEventListener('eventType', e => {})
  }

  render () {
    return (
      <NumberListContainer>
        {this.state.numberList.map(num => (
          <WaitingNumber key={num} isAdmin={this.props.isAdmin} number={num}/>
        ))}
      </NumberListContainer>
    )
  }
}

export default NumberContainer
