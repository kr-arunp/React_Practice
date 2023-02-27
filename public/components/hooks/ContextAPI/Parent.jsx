import React from 'react'
import ChildA from './ChildA'
import { createContext } from "react";


let FName=createContext();
let LName=createContext();
const Parent = () => {
  return (
	<div>
	<FName.Provider value={"Arun Kumar"}>
	<LName.Provider value={"Prajapati"}>
	    {/* <ChildA/> */}
	</LName.Provider>
	  </FName.Provider>
	</div>
  )
}

export default Parent;
export {FName,LName}
