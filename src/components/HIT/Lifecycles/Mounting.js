import React, { Component } from "react";

export default class Mounting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Jinna",
    };
    console.log("constructor");
  }
  static getDerivedStateFromProps() {
    console.log("getDerivedStateFromProps");
    return null;
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
  stateChange = () => {
    this.setState({
      name: "uma",
    });
    console.log("Updated");
  };
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return true;
  }
  getSnapshotBeforeUpdate(preProps, preState) {
    console.log("old state" + preState.name);
    return null;
  }
  componentDidUpdate() {
    console.log("componentDidUpdate" + this.state.name);
  }
  render() {
    console.log("render");
    return (
      <div>
        <h1>Mounting-{this.state.name}</h1>
        <button onClick={this.stateChange}>Update</button>
      </div>
    );
  }
}
