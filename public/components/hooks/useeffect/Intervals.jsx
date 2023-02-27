import React, { useState, useEffect } from "react";

const Intervals = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <p>Counter: {counter}</p>
    </div>
  );
};

export default Intervals;
