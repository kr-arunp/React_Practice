import React from 'react'
import UncontrolledInput from "./UncontrolledInput";
import ReactDOM  from 'react-dom/client';
import { createContext, useState } from "react";
import ComponentA from './ComponentA';
export const CounterContext=createContext();
const UseContextExample = ({name}) => {
  const [Count, setCount]=useState(0);
  
  return (
    <>
      <div>
        <h1>Hello</h1>
        <h1>{name}</h1>
        <CounterContext.Provider value={Count}>
          <ComponentA/>
        </CounterContext.Provider>
      </div>
    </>
  );
}

export default UseContextExample


