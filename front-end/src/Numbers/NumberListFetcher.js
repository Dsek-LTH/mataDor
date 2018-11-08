import React from 'react'

class NumberListFetcher extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      numbers: [],
    }
  }

  componentDidMount () {
    const eventSource = new EventSource('http://localhost:3000/subscribe')

    eventSource.onmessage = e => {
      const numbers = JSON.parse(e.data)
      if (numbers) this.setState({numbers})
    }
  }

  render () {
    return this.props.render(this.state)
  }
}

export default NumberListFetcher
