import React from "react";
import welcomeImg from "/Users/tulja/react-website/src/components/images/welcome.avif";

const Welcome = () => {
  return (
    <div className="container p-5 text-center">
      <h1>Welcome to Admin Dashboard page</h1>
      <img src={welcomeImg} alt="" />
    </div>
  );
};

export default Welcome;
