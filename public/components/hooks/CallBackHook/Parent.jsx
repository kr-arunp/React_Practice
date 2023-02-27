import React, { useState } from 'react'
import Child from './Child';
import { useEffect } from "react";

const Parent_callBack = () => {

  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Parent: component re-render");
  });
  return (
    <>
      <h1>Parent Component</h1>
		  <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <Child  />
    </>
  );
};

export default Parent_callBack

