import React from "react";
import { FName, LName } from "./Parent.jsx";
const ChildD = () => {
  return (
    <div>
      <h1>Hello I Am Child-D</h1>
      <FName.Consumer>
        {(FName) => {
          return (
            <LName.Consumer>
              {(LName) => {
                return (
                  <h1>
                    My Full Name is {FName} {LName} in Child-D
                  </h1>
                );
              }}
            </LName.Consumer>
          );
        }}
      </FName.Consumer>
    </div>
  );
};

export default ChildD;
