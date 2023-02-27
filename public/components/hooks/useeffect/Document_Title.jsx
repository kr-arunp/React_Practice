import React,{useState,useEffect} from 'react'

const Document_Title = () => {
  const [Title, setTitle] = useState("Hello");
  const [Value, setValue] = useState("Hello");
  useEffect(() => {
    console.log("Component is re-rendered");
    document.title=Title;
        return () => {
          document.title = "Default Title";
        };

  },[Title])
  
  return (
    <>
       <input type="text" value={Title} 
       onChange={(e) =>setTitle(e.target.value)}
       />
      <h1>{Title}</h1>
    
    
    </>
  )
}

export default Document_Title
