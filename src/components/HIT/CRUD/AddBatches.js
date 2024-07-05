import React, { Component } from "react";
import axios from "axios";

export default class AddBatches extends Component {
  constructor(props) {
    super(props);

    this.state = {
      course: "",
      date: "",
      duration: "",
      timings: "",
      trainer: "",
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

    const { course, date, duration, timings, trainer } = this.state;

    axios
      .post("http://localhost:4000/batches/", {
        course,
        date,
        duration,
        timings,
        trainer,
      })
      .then((res) => {
        alert("Batch added successfully...");
        this.setState({
          course: "",
          date: "",
          duration: "",
          timings: "",
          trainer: "",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    const { course, date, duration, timings, trainer } = this.state;
    return (
      <div className="container p-5">
        <div className="col-8 col-lg-4 mx-auto">
          <h3 className="text-center">Add Batches</h3>

          <form onSubmit={this.submitHandler}>
            <input
              type="text"
              placeholder="Enter Batch Name"
              name="course"
              className="form-control mb-3"
              value={course}
              onChange={this.changedData}
            />
            <input
              type="date"
              placeholder="Enter date"
              name="date"
              className="form-control mb-3"
              value={date}
              onChange={this.changedData}
            />
            <input
              type="text"
              placeholder="Enter Duration"
              name="duration"
              className="form-control mb-3"
              value={duration}
              onChange={this.changedData}
            />
            <input
              type="text"
              placeholder="batch timings"
              name="timings"
              className="form-control mb-3"
              value={timings}
              onChange={this.changedData}
            />
            <input
              type="text"
              placeholder="Enter trainer Name"
              name="trainer"
              className="form-control mb-3"
              value={trainer}
              onChange={this.changedData}
            />
            <input type="submit" value="Add Batch" className="btn btn-danger" />
          </form>
        </div>
      </div>
    );
  }
}
