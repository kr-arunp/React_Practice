import React, { useState, useEffect,useMemo, useCallback } from "react";

const SimpleExample = () => {
  const [count, setCount] = useState(0);
  
  /*
  
	useEffect()
	useMemo()
	useRef()
	HOC
	HOOKS
	useCallback()
	Socket.io
	
	
	*/
	
	let Increment = () => {
    setCount(count + 1);
  };

  let Increment0=() => {
	  for (let i=0;i<100000;i++) {
	  console.log(i);
	}
};
let memoCount = useMemo(() => Increment0(),[count]);
useEffect(() => {
    console.log("useEffect :component is re-render");
  });
  return (
    <>
      <h1>{count}</h1>
      <button onClick={Increment}>Increment</button>
      <button onClick={Increment0}>Increment0</button>
    </>
  );
};
export default SimpleExample;
const MemoCounter = React.memo(SimpleExample);
export { MemoCounter };
