import React, { useState,useEffect, useMemo,memo } from 'react'




const UseCallbackExample = () => {
  const [Number, setNumber] = useState("");
  const [Name, setName] = useState("");
  const [Res, setRes] = useState(0);
  // let fibNumber=MostExpensiveFunction(Number);

  
  let MostExpensiveFunction = (n) => {
    return n <= 1
    ? n
    : MostExpensiveFunction(n - 1) + MostExpensiveFunction(n - 2);
  };
  // let MemoFibofun = 0;
  let MemoFiboFun = useMemo(() => MostExpensiveFunction(Number), [Number]);

  useEffect(() => {
    console.log("New Number");
    console.log(MemoFiboFun);
  }, [MemoFiboFun]);

  return (
    <div>
      <input
        type="text"
        value={Number}
        placeholder="Number for Fibo"
        onChange={(e) => setNumber(e.target.value)}
      />
      <input
        type="text"
        value={Name}
        placeholder="String "
        onChange={(e) => setName(e.target.value)}
      />
      <h1>{MemoFiboFun}</h1>
    </div>
  );
};


export default UseCallbackExample
