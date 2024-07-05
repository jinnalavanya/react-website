import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SendEnquiry from "../Hooks/sendEnquiry";

const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState("");
  useEffect(() => {
    axios
      .get(`http://localhost:4000/courses/${id}`)
      .then((res) => setCourse(res.data));
  });
  return (
    <div className="container p-5 ">
      <div className="row">
        <div className="col-12 col-md-6 col-lg-8 ">
          <h1>{course.course}</h1>
          <p className="text-bg-primary p-2">
            <strong>
              Skills: {course.skills} -<strong>{course.duration} days</strong>
            </strong>
          </p>
          <p>
            <strong>description: {course.description}</strong>
            <img src={course.courseImg} alt="" className="w-100" />
          </p>
        </div>
        <div className="col-12 col-md-6 col-lg-4 text-center">
          <h4 className="mb-5">Register here for demo</h4>
          <SendEnquiry />
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
