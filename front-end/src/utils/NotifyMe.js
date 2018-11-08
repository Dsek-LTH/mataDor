import React from 'react'

class NotifyMe extends React.Component {
  constructor (props) {
    super(props)
    this.state = {input: '', acceptsNotis: false, sentNotis: false}
  }

  handleChange = (e) => {
    this.setState({input: e.target.value})
  }

  notifyMe = () => {
    const {input, acceptsNotis, sentNotis} = this.state
    const {numbers} = this.props

    if (numbers.includes(input) && acceptsNotis && !sentNotis) {
      new Notification('Din mat är klar!')
    }
  }

  registerForNotifications = () => {
    if (!('Notification' in window)) {
      alert('Din webläsare stödjer inte notiser :(')
    }
    Notification.requestPermission().then((permission) => {
      this.setState({acceptsNotis: (permission === 'granted')})
    })
  }

  render () {
    this.notifyMe()
    return (<div>
      <input value={this.state.input} onChange={this.handleChange} type="number" placeholder="ditt nummer"/>
      <button onClick={this.registerForNotifications}>notifiera mig!</button>
    </div>)
  }
}

export default NotifyMe