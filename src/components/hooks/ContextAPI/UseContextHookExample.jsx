import React from "react";
import ChildA from "./ChildA"
import { createContext } from "react";

//useContext Hook makes the contexts consumption easy and
//clean and simpler
//1 step   is same
//create thr Context
   /* step-2 is also same as before we need to Provide a context */
   
let Fname = createContext();
let Lname = createContext();
const UseContextHookExample = () => {
  return (
    <div>
      <Fname.Provider value={"Arun Kumar"}>
        <Lname.Provider value={"Prajapati"}>
          <ChildA />
        </Lname.Provider>
      </Fname.Provider>
    </div>
  );
};

export default UseContextHookExample;
export { Fname, Lname };
