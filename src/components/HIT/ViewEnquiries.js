import axios from "axios";
import React, { useEffect, useState } from "react";

const ViewEnquiries = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [course, setCourse] = useState("");
  const [message, setMessage] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:4000/enquiries")
      .then((res) => setEnquiries(res.data))
      .catch((err) => console.log(err));
  });
  const editEnquiry = (enqId) => {
    axios.get(`http://localhost:4000/enquiries/${enqId}`).then((res) => {
      setId(res.data.id);
      setName(res.data.name);
      setEmail(res.data.email);
      setMobile(res.data.mobile);
      setCourse(res.data.course);
      setMessage(res.data.message);
    });
  };

  const updateCourse = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:4000/enquiries/" + id, {
        id,
        name,
        email,
        mobile,
        course,
        message,
      })
      .then(() => alert("Course Updated Successfully"))
      .catch((err) => console.log(err));
  };
  const deleteEnquiry = (enqId) => {
    axios
      .delete(`http://localhost:4000/enquiries/${enqId}`)
      .then(() => alert("Deleted Successfully"))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <section className="container-fluid Courses py-5">
        <h3 className="text-center">View Enquiries</h3>
        <div className="mt-5">
          <table className="table table-bordered table-hover">
            <thead className="table-dark">
              <tr>
                <th>id</th>
                <th>Name</th>
                <th>Email</th>
                <th>mobile</th>
                <th>course</th>
                <th>message</th>
                <th>Edit/Delete</th>
              </tr>
            </thead>
            <tbody>
              {enquiries.map((enq) => {
                return (
                  <tr>
                    <td>{enq.id}</td>
                    <td>{enq.name}</td>
                    <td>{enq.email}</td>
                    <td>{enq.mobile}</td>
                    <td>{enq.course} Days</td>
                    <td>{enq.message}</td>
                    <td className="text-center">
                      <button
                        className="btn btn-primary m-2"
                        onClick={() => editEnquiry(enq.id)}
                        data-bs-target="#editcourse"
                        data-bs-toggle="modal"
                      >
                        <i class="bi bi-pencil-square"></i>
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteEnquiry(enq.id)}
                      >
                        <i class="bi bi-trash3-fill"></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="modal fade" id="editcourse">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title text-center">Update Course</h4>
                  <button
                    className="btn-close"
                    data-bs-dismiss="modal"
                  ></button>
                </div>
                <div className="modal-body">
                  <form onSubmit={updateCourse}>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter Name"
                      className="form-control mb-3"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <input
                      type="text"
                      name="email"
                      placeholder="enter email"
                      className="form-control mb-3"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                      type="number"
                      name="mobile"
                      placeholder="enter mobile number"
                      className="form-control mb-3"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                    />
                    <input
                      type="text"
                      name="course"
                      placeholder="select course"
                      className="form-control mb-3"
                      value={course}
                      onChange={(e) => setCourse(e.target.value)}
                    />
                    <input
                      type="text"
                      name="message"
                      placeholder="enter message"
                      className="form-control mb-3"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                    <input
                      type="submit"
                      value="Update enquiry"
                      className="btn btn-danger"
                      data-bs-dismiss="modal"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ViewEnquiries;
