import React, { useEffect, useState } from "react";
import styles from "/Users/tulja/react-website/src/App.css";
import { NavLink } from "react-router-dom";

const Courses = () => {
  const [coursesData, setCoursesData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/courses/")
      .then((res) => res.json())
      .then((json) => {
        setCoursesData(json);
      });
  });

  return (
    <div className="container p-5 text-center">
      <h1>
        Our <span className="text-danger">Courses</span>
      </h1>
      <div className="row">
        {coursesData.map((cDat) => {
          return (
            <div className="col-12 col-md-6 col-lg-4 col-xl-3">
              <div className="card" key={cDat.id}>
                <div className="imgCourse">
                  <img src={cDat.courseImg} alt="" className="w-100" />
                </div>
                <div className="card-body">
                  <h5>{cDat.course}</h5>
                  <NavLink to={`/courseDetails/${cDat.id}`}>
                    <button className="btn btn-danger">Know more</button>
                  </NavLink>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Courses;
