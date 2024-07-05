import axios from "axios";
import React, { useEffect, useState } from "react";

const ViewBatches = () => {
  const [batchesData, setBatchesData] = useState([]);
  const [id, setId] = useState("");
  const [course, setCourse] = useState("");
  const [date, setDate] = useState("");
  const [duration, setDuration] = useState("");
  const [timings, setTimings] = useState("");
  const [trainer, setTrainer] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:4000/batches/")
      //update state
      .then((res) => {
        setBatchesData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  const deleteBatch = (batchid) => {
    axios
      .delete(`http://localhost:4000/batches/${batchid}`)
      .then(() => alert("deleted..."))
      .catch((err) => console.log(err));
  };
  const editBatch = (batid) => {
    axios
      .get("http://localhost:4000/batches/" + batid)
      .then((res) => {
        setId(res.data.id);
        setCourse(res.data.course);
        setDate(res.data.date);
        setDuration(res.data.duration);
        setTimings(res.data.timings);
        setTrainer(res.data.trainer);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const addBatchHandler = (e) => {
    e.preventDefault();
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
        alert("Batch updated successfully...");
        // setCourse("");
        // setDate("");
        // setDuration("");
        // setTimings("");
        // setTrainer("");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="container p-5">
      <h3 className="text-center">View Batches</h3>
      <table className="table table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th>Course Name</th>
            <th>Start Date</th>
            <th>Duration</th>
            <th>Timings</th>
            <th>Trainer</th>
            <th>Register Demo</th>
          </tr>
        </thead>
        <tbody>
          {batchesData.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.course}</td>
                <td>{item.date}</td>
                <td>{item.duration}</td>
                <td>{item.timings}</td>
                <td>{item.trainer}</td>
                <td>
                  <button
                    className="btn btn-danger me-3"
                    data-bs-target="#editbatch"
                    data-bs-toggle="modal"
                    onClick={() => editBatch(item.id)}
                  >
                    <i className="bi bi-pencil">Edit</i>
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteBatch(item.id)}
                  >
                    <i className="bi bi-trash">Delete</i>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="modal fade container p-5 " id="editbatch">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">Edit Batch</h3>
              <button className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={addBatchHandler}>
                <input
                  type="text"
                  placeholder="Enter Batch Name"
                  name="course"
                  className="form-control mb-3"
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                />
                <input
                  type="date"
                  placeholder="Enter date"
                  name="date"
                  className="form-control mb-3"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Enter Duration"
                  name="duration"
                  className="form-control mb-3"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="batch timings"
                  name="timings"
                  className="form-control mb-3"
                  value={timings}
                  onChange={(e) => setTimings(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Enter trainer Name"
                  name="trainer"
                  className="form-control mb-3"
                  value={trainer}
                  onChange={(e) => setTrainer(e.target.value)}
                />
                <input
                  type="submit"
                  value="Add Batch"
                  className="btn btn-danger"
                  data-bs-dismiss="modal"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewBatches;
