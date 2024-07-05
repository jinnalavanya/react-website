import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const AddCourse = () => {
  const [course, setCourse] = useState("");
  const [courseImg, setCourseImg] = useState("");
  const [skills, setSkills] = useState("");

  const [description, setDescription] = useState("");

  const [duration, setDuration] = useState("");
  const addCourseHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/courses/", {
        course,
        courseImg,
        skills,
        description,
        duration,
      })
      .then((res) => {
        toast("course added");
      })
      .catch((err) => {
        toast("Error Dude!!");
        console.log(err);
      });
  };
  return (
    <div className="container p-5">
      <ToastContainer />
      <div className="col-8 col-lg-6 mx-auto">
        <h3 className="text-center">AddCourse</h3>
        <form onSubmit={addCourseHandler}>
          <input
            type="text"
            name="course"
            placeholder="course name"
            className="form-control my-3"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          />
          <input
            type="text"
            name="courseImg"
            placeholder="course Img Ref"
            className="form-control my-3"
            value={courseImg}
            onChange={(e) => setCourseImg(e.target.value)}
          />
          <input
            type="text"
            name="skills"
            placeholder="skills"
            className="form-control my-3"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
          />
          <input
            type="text"
            name="description"
            placeholder="enter description"
            className="form-control my-3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="text"
            name="duration"
            placeholder="Course duration"
            className="form-control my-3"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddCourse;
