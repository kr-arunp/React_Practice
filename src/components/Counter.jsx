import React, { useState } from "react";

let Counter = () => {
  const [count, setCount] = useState(0);
  let IncrementCounter = () => {
    setCount(count + 1);
  };

  let DecrementCounter = (DecrementCounter) => {
    setCount(count - 1);
  };
  return (
    <div className="container">
    <div className="inner-div">
      <h2 style={{color:"blue"}}>Counter Example</h2>
      <div className="main">
        <button onClick={IncrementCounter}>Count ➕ </button>
        <h2 style={{color:'red'}}>{count}</h2>
        <button onClick={DecrementCounter}>Count ➖ </button>
      </div>
    </div>
    </div>
  );
};

export default Counter;
