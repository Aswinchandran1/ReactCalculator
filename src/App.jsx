
import './App.css'
import './bootstrap.min.css'
import { useState } from 'react'

function App() {

  const [value, setValue] = useState("")

  const handleClick = (btnval) => {
    setValue(value + btnval)
  }

  const handleCalculate = () => {
    const res = eval(value)
    // const result=Math.floor(res)
    const result=res.toFixed(2)
    setValue(result)
  }

  const handleAC = () => {
    setValue("")
  }

  const handleDel = () => {
    const res = value.substring(0, value.length - 1)
    setValue(res)
  }

  return (
    <>
      <div style={{ minHeight: "100vh" }} className='d-flex justify-content-center align-items-center'>
        <div className='container w-25 p-5 shadow d-flex flex-column' >
          <input value={value} style={{ height: "50px", textAlign: "right", fontSize: "30px" }} type="text" className='w-100 fw-bold p-2' placeholder='0' />
          <div className='mt-4 d-flex justify-content-between gap-2'>
            <button onClick={handleAC} className='btn btn-warning w-50 '>AC</button>
            <button onClick={handleDel} className='btn btn-warning w-25'>DEL</button>
            <button onClick={() => { handleClick("/") }} className='btn btn-light w-25 numBtn' >/</button>
          </div>
          <div className='mt-4 d-flex justify-content-between gap-2'>
            <button onClick={() => { handleClick("7") }} className='btn btn-light w-25 numBtn'>7</button>
            <button onClick={() => { handleClick(8) }} className='btn btn-light  w-25 numBtn'>8</button>
            <button onClick={() => { handleClick(9) }} className='btn btn-light w-25 numBtn'>9</button>
            <button onClick={() => { handleClick("*") }} className='btn btn-light w-25 numBtn'>*</button>
          </div>
          <div className='mt-4 d-flex justify-content-between gap-2'>
            <button onClick={() => { handleClick(4) }} className='btn btn-light  w-25 numBtn'>4</button>
            <button onClick={() => { handleClick(5) }} className='btn btn-light  w-25 numBtn'>5</button>
            <button onClick={() => { handleClick(6) }} className='btn btn-light  w-25 numBtn'>6</button>
            <button onClick={() => { handleClick("+") }} className='btn btn-light  w-25 numBtn'>+</button>
          </div>
          <div className='mt-4 d-flex justify-content-between gap-2'>
            <button onClick={() => { handleClick(1) }} className='btn btn-light w-25 numBtn'>1</button>
            <button onClick={() => { handleClick(2) }} className='btn btn-light w-25 numBtn'>2</button>
            <button onClick={() => { handleClick(3) }} className='btn btn-light  w-25 numBtn'>3</button>
            <button onClick={() => { handleClick("-") }} className='btn btn-light w-25 numBtn'>-</button>
          </div>
          <div className='mt-4 d-flex justify-content-between gap-2'>
            <button onClick={() => { handleClick(0) }} className='btn btn-light w-25 numBtn'>0</button>
            <button onClick={() => { handleClick(".") }} className='btn btn-light w-25 numBtn'>.</button>
            <button onClick={handleCalculate} className='btn btn-warning w-50'>=</button>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
