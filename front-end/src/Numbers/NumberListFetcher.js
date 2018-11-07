import React from 'react'

class NumberListFetcher extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      numberList: [],
    };
  }

  componentDidMount () {
    const eventSource = new EventSource('http://localhost:3000/subscribe')

    eventSource.onmessage = e => {
      const numberList = JSON.parse(e.data)
      if (numberList) this.setState({ numberList })
    }

    //TODO kolla detta
    eventSource.addEventListener('eventType', e => {})
  }

  render () {
    return this.props.render(this.state);
  }
}

export default NumberListFetcher
