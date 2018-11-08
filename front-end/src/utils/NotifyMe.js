import React from 'react'
import { ColoredButton } from '../AdminBar/adminStyles'
import { NotifyContainer } from './styles'

class NotifyMe extends React.Component {
  constructor (props) {
    super(props)
    this.state = {input: '', acceptsNotis: false, sentNotis: false, waitingFor: null, hide: false}
  }

  handleChange = (e) => {
    this.setState({input: e.target.value})
  }

  notifyMe = () => {
    const {input, acceptsNotis, sentNotis} = this.state
    const {numbers} = this.props

    if (numbers.includes(input) && acceptsNotis && !sentNotis) {
      new Notification('Din mat är klar!')
      this.setState({sentNotis: true})
    }
  }

  registerForNotifications = () => {
    if (!('Notification' in window)) {
      alert('Din webläsare stödjer inte notiser :(')
    }
    Notification.requestPermission().then((permission) => {
      this.setState({acceptsNotis: (permission === 'granted'), waitingFor: this.state.input})
    })
  }

  hide = () => {
    this.setState({hide: true})
  }

  shouldShowInput = () => {
    return !this.state.hide && !this.state.sentNotis
  }

  render () {
    this.notifyMe()
    const {input, waitingFor} = this.state
    return this.shouldShowInput() && (
      waitingFor ? <NotifyContainer>väntar på {waitingFor}</NotifyContainer> : (<NotifyContainer>
        <input value={input} onChange={this.handleChange} type="number" placeholder="ditt nummer"/>
        <ColoredButton color="#b4d2ba" onClick={this.registerForNotifications}>notifiera mig!</ColoredButton>
        <ColoredButton color="#8ed081" onClick={this.hide}>inga notiser för mig, tack</ColoredButton>
      </NotifyContainer>)
    )
  }
}

export default NotifyMe