import React, { useState,useEffect, useMemo,memo } from 'react'
import DisplayMsg from "./DisplayMsg";


let MostExpensiveFunction =(n)=>{
	return (n<=1)? n:MostExpensiveFunction(n-1)+MostExpensiveFunction(n-2);
}
const Example2 = () => {

	const [Number, setNumber]=useState('');
	const [num,setNum]=useState(0);
  const [Name, setName]=useState("");
  const [Value, setValue] = useState("");
	const [Res, setRes]=useState(0);
	let ButtonHandler = () => {
    console.log("btn clicked");
    setValue(Name);
  };

	let fibNumber=MostExpensiveFunction(Number);
	
	
	// let MemoFibofun = 0;
	// let MemoFiboFun=useMemo(() => MostExpensiveFunction(Number), [Number]);
	
	
	
	useEffect(() => {
    console.log(" parent Component is re-rendered");
  }, [Number]);
     
  return (
    <div>
      <input
        type="text"
        value={Number}
        placeholder="Number value"
        onChange={(e) => setNumber(e.target.value)}
      />
      <button className="btn btn-primary" onClick={() => setNum(Number)}>
        Set Number 
      </button>
      <input
        type="text"
        value={Name}
        placeholder="string value"
        onChange={(e) => setName(e.target.value)}
      />
      <button className="btn btn-primary" onClick={ButtonHandler}>
        Set String Value
      </button>

      {/* <h1>{MemoFiboFun}</h1> */}
      <h1>{fibNumber}</h1>

      <DisplayMsg name={Value} />
    </div>
  );
}

export default Example2
const MemoExample2 =memo(Example2);
export {MemoExample2}
