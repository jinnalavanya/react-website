import React, { Component } from "react";

export default class Welcome extends Component {
  componentWillUnmount() {
    alert("Are you sure to Leave?");
  }
  render() {
    return (
      <div>
        <h1>Welcome Admin</h1>
      </div>
    );
  }
}
