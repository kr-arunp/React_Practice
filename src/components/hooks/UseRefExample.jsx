import React from "react";
import { useRef } from "react";
import { useState } from "react";
const UseRefExample = () => {
  const [count, setCount] = useState(0);

  const btnClick = useRef();
  // btnClick.current.c
  // console.log(btnClick.current);
  //  if(btnClick.current.click()==true){
      // setCount(count+1)
  //  }
  
  let FocusHandler=()=>{
  
    btnClick.current.style.backgroundColor = "red";
    btnClick.current.style.fontSize = "2rem";
  }
  return (
    <>
      <div>
        <h1>hello world</h1>
        <p>{count}</p>
        <button onClick={FocusHandler} ref={btnClick}>Increment</button>
      </div>
    </>
  );
};

export default UseRefExample;
