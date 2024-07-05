import React, { Component } from "react";
import Welcome from "./Welcome";

export default class UnMounting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: true,
    };
  }
  logOut = () => {
    this.setState({
      login: false,
    });
  };
  render() {
    let msg = "";
    if (this.state.login) {
      msg = <Welcome />;
    } else {
      msg = "Please login again";
    }
    return (
      <div className="container">
        <h1>{msg}</h1>
        <button onClick={this.logOut}> Logout</button>
      </div>
    );
  }
}
