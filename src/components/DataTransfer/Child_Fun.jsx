import React from "react";
import { useState } from "react";
import { Parent_Fun } from "./Parent_Fun";
export const Child_Fun = ({ color, ChildColor }) => {
  const [Input, setInput] = useState("");

  let ChangeHandler = (e) => {
    setInput(e.target.value);
  };

  let KeyEnterHandler = (e) => {
    if (e.keyCode === 13) {
      ClickHandler();
    }
  };
  let ClickHandler = () => {
    ChildColor(Input);
    setInput("");
  };
  return (
    <>
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
            backgroundColor: color,
            width: "50%",
            height: "50vh",
            border: "1px solid black",
            padding: "12px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>{color}</h1>
        </div>
      </div>

      <div style={{ marginTop: "5rem", textAlign: "center" }}>
        <h1>Child</h1>
        <input
          placeholder="Color Name"
          type="text"
          value={Input}
          onChange={ChangeHandler}
          onKeyDown={KeyEnterHandler}
          className="Input-Element"
        />
        <button
          onClick={async () => {
            ClickHandler();
          }}
        >
          Change Color
        </button>

        {/* <button onClick={ClickHandler}>Change Color</button> */}
      </div>
    </>
  );
};
