import React from 'react'
import { useState } from "react";

function Intro() {
	const [Sum, setSum]=useState(0);
	const [FirstInput, setFirstInput] = useState();
     const [SecondInput, setSecondInput] = useState();
	
	let ClickHandler=(e)=>{
	setSum(HigherOrderFunction(FirstInput,getAddition));
	 setFirstInput('')
	setSecondInput('');

	}
let HigherOrderFunction=(a,GetAddition)=>{
	return GetAddition(a,SecondInput);
}

let getAddition=(a,b)=>{
	let x=parseInt(a);
	let y = parseInt(b);
    return x+y;
}
	return (
    <>
      <h1>Higher Order Functions</h1>
      <input
        type="number"
        placeholder="Enter First Number"
        onChange={(e) => setFirstInput(e.target.value)}
        value={FirstInput}
      />
      <input
        type="number"
        placeholder="Enter second Number"
        value={SecondInput}
        onChange={(e) => setSecondInput(e.target.value)}
      />
      <p></p> <button id="btn"  onClick={ClickHandler}>Add</button>
      <h1>Final Result is {Sum}</h1>
    </>
  );
}

export default Intro
