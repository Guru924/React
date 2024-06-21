import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card1'
import Card2 from './components/Card2'

function App() {
  const [count, setCount] = useState(0)
  let obj = {
    Name: "Guru",
    p: "hey, this is a para"
  }

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl m-6'>tailwind test</h1>
    
    <Card2 someObj = {obj}/>

    <Card Name = "Guru" btnText = "click me"/>
    <Card Name = "Guru"/>
    </>
  )
}
// we can't pass array / object directly in the props
// pass through variable
export default App
