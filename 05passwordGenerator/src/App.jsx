import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(6)
  const [isNumber, setIsNumber] = useState(false)
  const [isChar, setIsChar] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    isNumber ? str += "0123456789" : ""
    isChar ? str += "~!@#$%^&*()_+={}[]" : ""
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, isNumber, isChar, setPassword])

  const copyToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,100)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(()=>{
    passwordGenerator()
  },[length, isChar, isNumber, passwordGenerator])

  // useRef hook
  const passwordRef = useRef(null)

  return (
    <>
      <div className='w-full max-w-2xl mx-auto rounded-lg px-4 my-8 text-orange-500 bg-gray-500'>
        <h1 className='text-4xl text-center my-1.5 text-white'>passwordGenerator</h1>
        <div className='flex rounded-lg overflow-hidden '>
          <input type="text"
            value={password}
            className='outline-none w-full py-1 px-3 mb-4 rounded-md'
            placeholder='Password'
            readOnly
            ref={passwordRef}
          />
          <button
            className='outline-none bg-blue-700 text-white px-5  shrink-0 mb-4 text-center rounded-md'
            onClick={copyToClipboard}
          >copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
          <input 
          type="range"
          min={6}
          max = {100}
          value = {length}
          className='cursor-pointer'
          onChange={(e)=>{setLength(e.target.value)}}
          />
          <label>Length : {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox" 
          defaultChecked = {isNumber}
          onChange={()=>{
            setIsNumber((prev)=> !prev)
          }}
          />
          <label >Number</label>
          </div>
          <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked = {isChar}
          onChange={()=>{
            setIsChar((prev)=> !prev)
          }}
          />
          <label>Charater</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
