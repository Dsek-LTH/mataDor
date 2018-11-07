import React from 'react'

class NotifyMe extends React.Component {
  constructor (props) {
    super(props)
    this.state({input: '', acceptsNotis: false})
  }

  componentDidMount(){
    Notification.requestPermission().then(function (permission) {
        this.setState({acceptNotis: permission === "granted"})
    })
  }

  handleChange = (e) => {
    this.setState({input: e.target.value})
  }

  notifyMe() {
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
    }

    else if (Notification.permission === "granted") {
      const notification = new Notification("Hi there!");
    }

    else if (Notification.permission !== "denied") {
      Notification.requestPermission().then(function (permission) {
        // If the user accepts, let's create a notification
        if (permission === "granted") {
          const notification = new Notification("Hi there!");
        }
      });
    }
  }

  render () {
    return (<div>
      <input value={this.state.input} onChange={this.handleChange} type="number" placeholder="ditt nummer"/>
      <input type="submit" value="berätta när min mat är klar"/>
    </div>)
  }
}


export default NotifyMe