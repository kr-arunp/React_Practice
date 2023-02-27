import React, { Component } from 'react'
import {Button,Stack} from "@mui/material"
import { createContext } from 'react'
import {Count} from './MainCounter'
export default class ClassCounter extends Component {
  render() {
	return (  
	<>
	  <h1>Class Child Component</h1>
	  <Count.Consumer> 
	  { ({Counter,setCounter})=>{
	       return (
           <div>
             <h2>Current Counter Value is {Counter}</h2>
             <Stack spacing={3} direction="row">
               <Button
                 variant="contained"
                 color="success"
                 size="medium"
                 onClick={() => setCounter(Counter + 1)}
               >
                 Increment
               </Button>
               <Button
                 variant="contained"
                 color="success"
                 size="medium"
                 onClick={() => setCounter(Counter - 1)}
               >
                 Decrement
               </Button>
             </Stack>
           </div>
         );
	   
	   }}
	  
	  </Count.Consumer>
	
	</>
	)
  }
}

