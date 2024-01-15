import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  //You can only use hook inside function component
  //You cannot put hook in if else statement, functions, loops it cannot be nested in anything
  const [count, setCount] = useState(0);
  // If i need to have a really complex slow computation then use the function

  function decrementCount (){
    setCount(prevCount =>  prevCount - 1);

    // Incorrect Version : setCount(count - 1), when the buttons click it will re-render the component
    // If i set to call set count two times in a row, and call it again it will decrease two times
  }
  function increment(){
    setCount(inc => inc + 1);
  }
  return (
    <>
     <button onClick={decrementCount}>-</button>
     <span>{count}</span>
     <button onClick={increment}>+</button>
    </>
  )
}

export default App
