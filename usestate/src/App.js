import React, {useState} from 'react';
import './App.css';
import './index.css';
//we can only use hooks inside a function component
//also we can't put hooks inside a function,if statements,loops etc.


function App() {

  const [count,setCount] =useState(()=>{
    console.log('run ');
    return 0;
  });

  function decrementCount(){
    setCount(prevCount=>prevCount-1);
  }

  function incrementCount(){
    setCount(prevCount=>prevCount +1);
  }

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
    </>
  )
}

export default App;
