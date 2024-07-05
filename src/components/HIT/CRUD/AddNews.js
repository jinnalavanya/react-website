import axios from "axios";
import React, { Component } from "react";

export default class AddNews extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
    };
  }
  changedData = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value);
  };
  submitHandler = (e) => {
    e.preventDefault();
    const { title, body } = this.state;
    axios
      .post("http://localhost:4000/LatestNews/", { title, body })
      .then(() => {
        alert("news added successfully...");
        this.setState({
          title: "",
          body: "",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    const { title, body } = this.state;
    return (
      <div className="container p-5">
        <div className="col-12 col-lg-8 mx-auto">
          <input
            type="submit"
            value="You can update news by clicking here"
            className="btn btn-warning"
            data-bs-target="#newsModal"
            data-bs-toggle="modal"
          />

          <div className="modal fade container p-5 " id="newsModal">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h3 className="modal-title">Update News</h3>
                  <button
                    className="btn-close"
                    data-bs-dismiss="modal"
                  ></button>
                </div>
                <div className="modal-body">
                  <form onSubmit={this.submitHandler}>
                    <input
                      type="text"
                      placeholder="Enter title"
                      name="title"
                      className="form-control mb-3"
                      value={title}
                      onChange={this.changedData}
                    />
                    <input
                      type="text"
                      placeholder="Enter body"
                      name="body"
                      className="form-control mb-3"
                      value={body}
                      onChange={this.changedData}
                    />

                    <input
                      type="submit"
                      value="Addnews"
                      className="btn btn-warning"
                      data-bs-target="#newsModal"
                      data-bs-toggle="modal"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
