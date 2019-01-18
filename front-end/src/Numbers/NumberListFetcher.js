import React from "react";

class NumberListFetcher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberList: []
    };
  }

  componentDidMount() {
    const eventSource = new EventSource("/subscribe");

    eventSource.onmessage = e => {
      const numberList = JSON.parse(e.data);
      if (numberList) this.setState({ numberList });
    };
  }

  render() {
    return this.props.render(this.state);
  }
}

export default NumberListFetcher;
