import axios from "axios";
import React, { useState } from "react";

const SendEnquiry = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [course, setCourse] = useState("");
  const [message, setMessage] = useState("");
  const postEnquiryInApi = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/enquiries/", {
        name,
        email,
        mobile,
        course,
        message,
      })
      .then(() => {
        alert("will get back to you soon...");
        setName("");
        setEmail("");
        setMobile("");
        setCourse("");
        setMessage("");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="enquiryForm">
      <h3>Send Enquiry</h3>
      <form onSubmit={postEnquiryInApi}>
        <input
          type="text"
          name="studentName"
          placeholder="Enter name"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p id="status"></p>
        <input
          type="text"
          name="email"
          placeholder="Enter email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p id="emailStatus"></p>

        <input
          type="text"
          name="mobile"
          placeholder="Enter mobile"
          className="form-control"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <p id="mobileStatus"></p>
        <select
          className="form-select"
          name="course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        >
          <option value="">Select any Course</option>
          <option value="uiux">UI/UX Designing</option>
          <option value="java">Java Developer</option>
          <option value="mern">MERN development</option>
          <option value="online">Online Development</option>
          <option value="php">PHP with SQL</option>
          <option value="python">Python Development</option>
        </select>
        <textarea
          className="form-control"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <input
          type="submit"
          placeholder="Enter Name"
          className="form-control"
        />
      </form>
    </div>
  );
};

export default SendEnquiry;
