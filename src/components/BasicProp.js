import React, { Component } from "react";

export default class BasicProp extends Component {
  render() {
    return <div>Focus on {this.props.name}</div>;
  }
}
