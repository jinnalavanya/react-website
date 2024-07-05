import React, { useState } from "react";
import logo from "/Users/tulja/react-website/src/components/images/logo.jpg";
import { useNavigate } from "react-router-dom";
import "/Users/tulja/react-website/src/App.css";

const HrLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const loginCheck = (e) => {
    e.preventDefault();
    if (username === "jinna" && password === "123456") {
      navigate("/hrdashboardvjfudkkk");
    } else {
      alert("invalid username");
    }
  };
  return (
    <div className="container p-5 text-center">
      <div className="col-12 col-md-8 col-lg-4 mx-auto ">
        <img src={logo} alt="" />

        <form onSubmit={loginCheck}>
          <input
            type="text"
            name="username"
            placeholder="Hr username"
            className="form-control my-3"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder="enter password"
            className="form-control my-3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default HrLogin;
