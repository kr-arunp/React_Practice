import React from "react";
import ChildD from "./ChildD";
import { Fname, Lname } from "./UseContextHookExample";
const ChildC = () => {
  let fname = React.useContext(Fname);
  console.log(fname);
  return (
    <div>
      {fname}
      <ChildD />
    </div>
  );
};

export default ChildC;
