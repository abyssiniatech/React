import { useState } from "react"
const Usestate = () => {
    const [count,setCount] =useState(0)
  return (
    <div className="min-h-screen bg-indigo-800 text-white ">
      <h1>Use state hook</h1>
      <p>{count}</p>
      <button className="bg-teal-700 text-white px-4 py-2 rounded font-bold text-2xl m-2" onClick={()=>setCount(prev=>prev+1)}>Decrement</button>
      <button className="bg-teal-700 text-white px-4 py-2 rounded font-bold text-2xl m-2" onClick={()=>setCount(prev=>prev+1)}>Reset</button>
      <button className="bg-teal-700 text-white px-4 py-2 rounded font-bold text-2xl m-2" onClick={()=>setCount(prev=>prev+1)}>Increment</button>

    </div>
  )
}

export default Usestate
