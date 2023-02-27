import React from 'react'
import { Button } from "@mui/material";
import { Stack } from '@mui/system';
import { useReducer } from "react";

let InitialValue=0;
let ReducerFunction=(state,action)=>{
  switch(action){
	  case 'Increment':
		  return state+1;
	  case 'Decrement':
	      return state-1;
	  case 'Reset':
		  return InitialValue;
	  default:
		  return state;

  }

}
const UseReducerExample = () => {
let [count, dispatch] = useReducer(ReducerFunction, InitialValue);
	console.log(count);
	
  return (
    <>
      <div>
			  <h1>Current Counter Value {count}</h1>
        <Stack direction='row' spacing={3} >
          <Button 
            color='primary'
          variant="contained" onClick={() => dispatch("Increment")}>
            Increment
          </Button>
          <Button  
           color='secondary'
          variant="contained"
          onClick={() => dispatch("Decrement")}>
            Decrement
          </Button>
          <Button variant="contained" color='success' onClick={() => dispatch("Reset")}>
            Reset
          </Button>
        </Stack>
      </div>
    </>
  );
}

export default UseReducerExample
