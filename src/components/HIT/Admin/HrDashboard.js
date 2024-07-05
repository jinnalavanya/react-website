import React, { useState } from "react";
import AddBatches from "../CRUD/AddBatches";
import Welcome from "../Admin/Welcome";
import ViewBatches from "../ViewBatches";
import LatestNews from "../LatestNews";
import ViewEnquiries from "../ViewEnquiries";
import AddCourse from "./AddCourse";
import ViewCourses from "./ViewCourses";

const HrDashboard = () => {
  const [view, setView] = useState("");
  const DashboardView = () => {
    let output = "";
    if (view === "") {
      output = <Welcome />;
    } else if (view === "addBatches") {
      output = <AddBatches />;
    } else if (view === "addCourses") {
      output = <AddCourse />;
    } else if (view === "viewCourses") {
      output = <ViewCourses />;
    } else if (view === "viewBatches") {
      output = <ViewBatches />;
    } else if (view === "latestnews") {
      output = <LatestNews />;
    } else if (view === "viewenquiries") {
      output = <ViewEnquiries />;
    }
    return output;
  };

  return (
    <div className="container p-5">
      <div className="row">
        <aside className="col-12 col-lg-3 text-center py-5">
          <h4>Hr Dashboard</h4>
          <button onClick={() => setView("addCourses")}>Add Courses</button>
          <button onClick={() => setView("viewCourses")}>View Courses</button>
          <button onClick={() => setView("addBatches")}>Add Batches</button>
          <button onClick={() => setView("viewBatches")}>View Batches</button>
          <button onClick={() => setView("latestnews")}>Latest News</button>
          <button onClick={() => setView("viewenquiries")}>
            View Enquiries
          </button>
        </aside>
        <div className="col-12 col-lg-9">{DashboardView()}</div>
      </div>
    </div>
  );
};

export default HrDashboard;
