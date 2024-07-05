import React, { Component } from "react";

export default class BasicClass extends Component {
  render() {
    return <div>Welcome {this.props.name}</div>;
  }
}
