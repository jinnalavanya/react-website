import React, { Component } from "react";

export default class BasicState extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Kamala",
    };
  }
  changeName = () => {
    this.setState({
      name: "Nagaraj",
    });
  };

  render() {
    return (
      <div>
        <h1>State Handling {this.state.name}</h1>
        <button onClick={this.changeName}>State Handling</button>
      </div>
    );
  }
}
