import React from 'react'
import { useState } from "react";
import { Child_Fun } from './Child_Fun';
export const Parent_Fun = () => {
	const [Color, setColor] = useState("blue");
  const [ChildColor, setChildColor] = useState("black");
	const [Input, setInput]=useState('');
	
let getDataFromChild = (Color) => {
   setChildColor(Color);
};	
let ChangeHandler =(e) => {
   setInput(e.target.value);
}

let KeyEnterHandler=(e)=>{
  if(e.keyCode === 13){
	  ClickHandler();
  }

}
let ClickHandler=()=>{
	setColor(Input);
	setInput("");

}
  return (
    <>
      <h1>from Parent to Child</h1>
      <div
        style={{
          textAlign: "center",
          width: "100%",
          height: "16vh",
          display: "flex",
          margin: "12px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "wrap",
          gap: "2rem",
        }}
      >
        <input
          placeholder="Color Name"
          type="text"
          value={Input}
          onChange={ChangeHandler}
          onKeyDown={KeyEnterHandler}
          className="Input-Element"
        />
        <button onClick={ClickHandler}>Change Color</button>
      </div>
      <Child_Fun color={Color} ChildColor={getDataFromChild} />

      {/* Code for sending data from Child to Parent */}
      <div
        style={{
          width: "100%",
          height: "50vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <div
          style={{
            backgroundColor: ChildColor,
            width: "50%",
            height: "50vh",
            border: "1px solid black",
            padding: "12px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>{ChildColor}</h1>
        </div>
      </div>
    </>
  );
}

