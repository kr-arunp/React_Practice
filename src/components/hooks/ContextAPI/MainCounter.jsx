import React, { useState } from "react";
import { Button, Stack } from "@mui/material";
import { createContext } from "react";
import FunCounter from "./FunCounter";
import ClassCounter from "./ClassCounter";

let Count = createContext(null);
//it returns two things  Provider and Consumer
const MainCounter = () => {
  const [Counter, setCounter] = useState(0);
  return (
    <div className="container" style={{ height: "90vh" }}>
      <h1>Main Component</h1>
      <h2>Current Counter Value is {Counter}</h2>
      <Stack spacing={3} direction="row">
        <Button
          variant="contained"
          size="medium"
          onClick={() => setCounter(Counter + 1)}
        >
          Increment
        </Button>
        <Button
          variant="contained"
          size="medium"
          onClick={() => setCounter(Counter - 1)}
        >
          Decrement
        </Button>
      </Stack>
      <hr width="90%"></hr>
      <Count.Provider value={{ Counter, setCounter }}>
        <FunCounter />
      </Count.Provider>
      <hr width="90%"></hr>
    </div>
  );
};

export default MainCounter;
export { Count };
