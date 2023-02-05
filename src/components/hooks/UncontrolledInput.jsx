import React from 'react'
import ReactDOM  from "react-dom/client";
import { useRef,useState } from 'react'
import { useEffect,useContext,createContext } from "react";
import { CounterContext } from './useContextExample';
const UncontrolledInput = ({name}) => {
	const InputRef=useRef(null);
	const [Input, setInput]=useState('');
	console.log(Input)
const CounterContext = createContext();
  const Count=useContext();
// let SubmitHandler=(e)=>{
// e.preventDefault();
//    console.log(InputRef.current.value);
//    setInput(InputRef.current.value);
// }

let InputHandler=(e)=>{
  setInput(InputRef.current.value)
}

useEffect(() => {
  console.log(InputRef.current.value);
}, [Input]);
  return (
    <div>
      <p>{Input}</p>
      <form>
        <input type="text" ref={InputRef} onInput={InputHandler} />
        <button type="submit">click</button>
      </form>
      <p>
        the Entered text is <span style={{ color: "red" }}>{Input}</span>
      </p>

      <h1>{name}</h1>
      <h1>{Count}</h1>
      
    </div>
  );
}

export default UncontrolledInput
