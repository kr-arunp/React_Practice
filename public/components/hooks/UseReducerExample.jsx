import React from "react";
import { useReducer } from "react";

let InitialValue = 0;

const reducer = (state, action) => {
  switch (action) {
    case "Increment":
      return (state = state + 1);
    case "Decrement":
      return (state = state - 1);
    case "Reset":
      return (state = InitialValue);
    default:
      return state;
  }
};
const UseReducerExample = () => {
  const [count, dispatch] = useReducer(reducer, InitialValue);
  return (
    <>
      <div>
        <h1>{count}</h1>
        <button
          onClick={() => {
            dispatch("Increment");
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            dispatch("Decrement");
          }}
        >
          Decrement
        </button>
        <button
          onClick={() => {
            dispatch("Reset");
          }}
        >
          Reset
        </button>
      </div>
    </>
  );
};

export default UseReducerExample;
