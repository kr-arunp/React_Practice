import React, { useState, useEffect } from "react";

const WindowSizeCalculator = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
  console.log("callback run");
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
    console.log("cleanup run");
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <p>Window width: {width}</p>
    </div>
  );
};

export default WindowSizeCalculator;
