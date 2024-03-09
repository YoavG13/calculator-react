import React from "react";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { number: 0 };
    this.increaseHandler = this.increaseHandler.bind(this);
  }
  increaseHandler() {
    this.setState({ number: this.state.number + 1 });
  }
  render() {
    return (
      <React.Fragment>
        <button onClick={this.increaseHandler}>Press me!!!</button>
        <p>{this.state.number}</p>
      </React.Fragment>
    );
  }
}
