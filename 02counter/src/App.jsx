import { useState } from 'react'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  let [counter, setCounter] = useState(0)
  const addValue = ()=>{
    if(counter < 20)
      counter += 1;
    setCounter(counter)
  }
  const removeValue = ()=>{
    if(counter > 0)
      counter -= 1
    setCounter(counter)
  }
  return (
    <>
      <h1>How React control UI updation</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={addValue}>Add {counter}</button>
      <br />
      <button onClick={removeValue}>Remove {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
