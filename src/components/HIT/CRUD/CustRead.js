import axios from "axios";
import React, { Component } from "react";

export default class CustRead extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      course: "",
      date: "",
      duration: "",
      timings: "",
      trainer: "",
      batches: [],
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:4000/batches")
      .then((res) => {
        this.setState({
          batches: res.data,
        });
        console.log(res.data);
      })

      .catch((err) => {
        console.log(err);
      });
  }
  deleteBatch = (batchid) => {
    alert("deleted" + batchid);
    axios
      .delete("http://localhost:4000/batches/" + batchid)
      .then((res) => {
        this.setState({
          course: res.data.course,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  editBatch = (batchid) => {
    axios
      .get("http://localhost:4000/batches/" + batchid)
      .then((res) => {
        this.setState({
          id: res.data.id,
          course: res.data.course,
          date: res.data.date,
          duration: res.data.duration,
          timings: res.data.timings,
          trainer: res.data.trainer,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  changeData = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  putBatch = (e) => {
    e.preventDefault();
    const { id, course, date, duration, timings, trainer } = this.state;
    axios
      .put("http://localhost:4000/batches/" + id, {
        id,
        course,
        date,
        duration,
        timings,
        trainer,
      })
      .then(() => {
        alert("Batch updated");
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
    return (
      <div className="container p-5">
        <h2>Upcoming Batches</h2>
        <table className="table table-bordered table-hover">
          <thead className="table-dark">
            <tr>
              <th>Course Name</th>
              <th>Start Date</th>
              <th>Duration</th>
              <th>Timings</th>
              <th>Trainer</th>
              <th>Other</th>
            </tr>
          </thead>
          <tbody>
            {this.state.batches.map((bat) => {
              return (
                <tr key={bat.id}>
                  <td>{bat.course}</td>
                  <td>{bat.date}</td>
                  <td>{bat.duration}</td>
                  <td>{bat.timings}</td>
                  <td>Ms {bat.trainer}</td>
                  <td>
                    <button
                      className="btn btn-outline-danger me-2"
                      onClick={() => {
                        this.deleteBatch(bat.id);
                      }}
                    >
                      <i className="bi bi-trash-fill"></i>
                    </button>
                    <button
                      className="btn btn-outline-primary"
                      data-bs-target="#updateBatch"
                      data-bs-toggle="modal"
                      onClick={() => {
                        this.editBatch(bat.id);
                      }}
                    >
                      <i className="bi bi-pencil"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {/*Modal to update data */}
        <div className="modal fade" id="updateBatch">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Update Batch data</h4>
                <button className="btn-close" data-bs-dismiss="modal"></button>
              </div>
              <div className="modal-body">
                <form onSubmit={this.putBatch}>
                  <input
                    type="text"
                    placeholder="Enter Batch Name"
                    name="course"
                    className="form-control mb-3"
                    value={this.state.course}
                    onChange={this.changeData}
                  />
                  <input
                    type="date"
                    placeholder="Enter date"
                    name="date"
                    className="form-control mb-3"
                    value={this.state.date}
                    onChange={this.changeData}
                  />
                  <input
                    type="text"
                    placeholder="Enter Duration"
                    name="duration"
                    className="form-control mb-3"
                    value={this.state.duration}
                    onChange={this.changeData}
                  />
                  <input
                    type="text"
                    placeholder="batch timings"
                    name="timings"
                    className="form-control mb-3"
                    value={this.state.timings}
                    onChange={this.changeData}
                  />
                  <input
                    type="text"
                    placeholder="Enter trainer Name"
                    name="trainer"
                    className="form-control mb-3"
                    value={this.state.trainer}
                    onChange={this.changeData}
                  />
                  <input type="submit" value="Update Batch" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
