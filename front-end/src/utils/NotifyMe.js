import React from 'react'

class NotifyMe extends React.Component {
  constructor (props) {
    super(props)
    this.state = {input: '', acceptsNotis: false}
  }

  componentDidMount () {
    if (!('Notification' in window)) {
      alert('This browser does not support desktop notification')
    }
    Notification.requestPermission().then((permission) => {
      this.setState({acceptsNotis: (permission === 'granted')})
    })
  }

  handleChange = (e) => {
    this.setState({input: e.target.value})
  }

  notifyMe = () => {
    if (this.state.acceptsNotis) {
      new Notification('Hi there!')
    }
  }

  render () {
    if(this.props.numbers.includes(this.state.input)){
      this.notifyMe()
    }
    return (<div>
      <input value={this.state.input} onChange={this.handleChange} type="number" placeholder="ditt nummer"/>
    </div>)
  }
}

export default NotifyMe