import React,{useState} from 'react'

const useStateExample = () => {

	const [count, setCount]=useState(5);
  return (
<>
<button>Increment by 10</button>
</>
  )
}

export default useStateExample
