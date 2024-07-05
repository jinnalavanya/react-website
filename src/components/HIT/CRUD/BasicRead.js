import axios from "axios";
import React, { Component } from "react";

export default class BasicRead extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log("Data loaded");
        this.setState({
          posts: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <div className="container p-5">
        <h1>All posts</h1>
        <table className="table table-bordered table-hover">
          <thead className="table-dark">
            <tr>
              <th>post id</th>
              <th>post Title</th>
              <th>post Body</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((pos) => {
              return (
                <tr>
                  <td>{pos.id}</td>
                  <td>{pos.title}</td>
                  <td>{pos.body}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
