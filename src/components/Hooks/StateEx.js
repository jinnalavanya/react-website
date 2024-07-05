import React, { useState } from "react";

const StateEx = () => {
  const [count, setCount] = useState(0);
  const [dev, setDev] = useState("Jinna");
  return (
    <div className="containr p-5">
      <h1>Name: {dev}</h1>
      <button onClick={() => setDev("Uma")}>Update</button>
      <h1>Counter - {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <br />
      <br />

      <button
        onClick={() => {
          setCount(0);
          setDev("Jinna");
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default StateEx;
