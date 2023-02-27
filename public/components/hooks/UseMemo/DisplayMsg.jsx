import React, { useEffect } from 'react'
import { useMemo } from "react";

const DisplayMsg =React.memo(({name}) => {
// const DisplayMsg =(({name}) => {

useEffect(()=>{
      console.log("DisplayMsg Component is rendered");
},[name])
  return (
	<div>
		  <h1>your name{name}</h1>
	</div>
  )
})

export default DisplayMsg
