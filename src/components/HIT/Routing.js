import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Courses from "./Courses";
import Batches from "./Batches";
import Placements from "./Placements";
import Register from "./Register";
import Contact from "./Contact";
import Slider from "./Slider";
import Student from "./Student";
import NoPage from "./NoPage";
import HrLogin from "./Admin/HrLogin";
import HrDashboard from "./Admin/HrDashboard";
import CourseDetails from "./CourseDetails";
import AddNews from "./CRUD/AddNews";
export const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Slider />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/batches" element={<Batches />} />
        <Route path="/placements" element={<Placements />} />
        <Route path="/register" element={<Register />} />
        <Route path="/students" element={<Student />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
        <Route path="/addNews" element={<AddNews />} />
        <Route path="/courseDetails/:id" element={<CourseDetails />} />
        <Route path="/hrlogin" element={<HrLogin />} />
        <Route path="/hrdashboardvjfudkkk" element={<HrDashboard />} />
      </Routes>
    </div>
  );
};
