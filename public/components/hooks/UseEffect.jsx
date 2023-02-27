import React,{useState,useEffect} from 'react'

const UseEffect = () => {
	const [count, setCount]=useState(0);
	
	let counter=()=>{
	  setCount((prevCount)=>prevCount+1)
	}
	useEffect(()=>{
		const main = async () => {
      let IntervalId = setInterval(counter, 1000);
      return () => clearInterval(IntervalId);
    };
    main();
	},[])
  return (
  <>
	<div>
	<h1>{count}</h1>
	</div>
  </>
  )
}

export default UseEffect
