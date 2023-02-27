import React,{useEffect,useState} from 'react'
import axios from 'axios'
function JsonApi() {
	const [data, setData]=useState([]);
	
useEffect( ()=>{
  axios.get("https://jsonplaceholder.typicode.com/posts")
  .then((res)=>{
      console.log(res)
	  setData(res.data);
  })
  .catch((err)=>{console.log("error")});
})
  return (
	<div>
	<h4>Hello JSON Placeholder API</h4>
	{
	data.map((item)=>{
	 return (
     <div key={item.id}>
            <p>Item ID ={item.id}</p>
			 <span>title :{item.title}</span>
			 <p>Body :{item.body}</p>
			 
     </div>
   ); 
	})
	
	
	}
	</div>
  )
}

export default JsonApi
