import React,{useContext} from 'react'
import {Count} from "./MainCounter";
import { Button, Stack } from "@mui/material";
import ClassCounter from './ClassCounter';

const FunCounter = () => {
	let {Counter,setCounter}=useContext(Count);
  return (
    <>
      <h1>Functional Child Component</h1>
      <h2>Current Counter Value is{Counter}</h2>
      <Stack spacing={3} direction="row">
        <Button
          variant="contained"
          color="secondary"
          size="medium"
          onClick={() => setCounter(Counter + 1)}
        >
          Increment
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="medium"
          onClick={() => setCounter(Counter - 1)}
        >
          Decrement
        </Button>
      </Stack>
      <hr width="90%"></hr>
      <ClassCounter />
    </>
  );
}

export default FunCounter
