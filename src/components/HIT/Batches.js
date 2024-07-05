import axios from "axios";
import React, { useEffect, useState } from "react";
import SendEnquiry from "../Hooks/sendEnquiry";
const Batches = () => {
  const [batchesData, setBatchesData] = useState([]);
  // const [id, setId] = useState("");
  // const [course, setCourse] = useState("");
  // const [date, setDate] = useState("");
  // const [duration, setDuration] = useState("");
  // const [timings, setTimings] = useState("");
  // const [trainer, setTrainer] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:4000/batches/")
      //update state
      .then((res) => setBatchesData(res.data))

      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-12 col-lg-8">
          <h3>Batches</h3>
          <table className="table table-bordered table-hover">
            <thead className="table-dark">
              <tr>
                <th>id</th>
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
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.course}</td>
                    <td>{item.date}</td>
                    <td>{item.duration}</td>
                    <td>{item.timings}</td>
                    <td>{item.trainer}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        data-bs-target="#demoModal"
                        data-bs-toggle="modal"
                      >
                        Enroll for Demo
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="modal fade container p-5 " id="demoModal">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h3 className="modal-title">Register for Demo</h3>
                  <button
                    className="btn-close"
                    data-bs-dismiss="modal"
                  ></button>
                </div>
                <div className="modal-body">
                  <SendEnquiry />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4">
          <SendEnquiry />
        </div>
      </div>
    </div>
  );
};

export default Batches;
