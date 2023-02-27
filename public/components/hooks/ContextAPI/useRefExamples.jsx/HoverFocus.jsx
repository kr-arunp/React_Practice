import React, { useEffect, useRef, useState } from 'react'
const HoverFocus = () => {

const [Input, setInput] = useState("");
const [Counter, setCounter] = useState(0);
let InputRef=useRef('');
var PrevCounterRef=useRef(0);

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(InputRef.current);
let clickHandler=()=>{
	InputRef.current.focus();
	InputRef.current.value+='arun Kumar'
	setInput(InputRef.current.value)
	InputRef.current.style.color='red';
}

let RandomNumberGenerator=()=>{
  let n= getRandomNumber(1,100);
  setCounter(n);
}

useEffect(()=>{
PrevCounterRef.current=Counter

},[Counter])
return (
  <>
    <div>
      <h1>UseRef focus example</h1>
      <input type="text" ref={InputRef} />
      <button onClick={clickHandler}>Click</button>
    </div>
    <h1>{InputRef.current.value}</h1>
    <div className="d-flex justify-content-center flex-column text-center">
      <h1 className="text-center">Current Counter Value{Counter}</h1>
      <h1 className="text-center">Previous Counter Value{PrevCounterRef.current}</h1>
      <button className="btn btn-success col-3 rounded-3 text-center" onClick={RandomNumberGenerator}>
        Generate Number
      </button>
    </div>
  </>
);
}

export default HoverFocus
