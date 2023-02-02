import React from 'react'
import { useRef,useState } from 'react'
import { useEffect } from "react";
const UncontrolledInput = () => {
	const InputRef=useRef(null);
	const [Input, setInput]=useState('');
	console.log(Input)

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
    <form >
      <input type="text" ref={InputRef}  onInput={InputHandler}/>
      <button type="submit">click</button>
    </form>
	<p>
	  the Entered text is <span style={{color: 'red'}}>  
	  {Input}
	  
	  </span>
	</p>
    </div>
    
  );
}

export default UncontrolledInput
