import { useState } from "react"
const Usestate = () => {
    const [count,setCount] =useState(0)
    const [show,isShow] =useState(false)
    const handleshow =()=>{
      isShow(show=>!show)
    }
  return (
    <div className="min-h-screen bg-indigo-800 text-white flex flex-col justify-center items-center ">
      {show && (
      <section className="flex items-center justify-center border border-white rounded p-4 flex-col">
        <h1>Use state hook</h1>
        <p style={{ fontSize:"2em",color:count>0?"red" : count<0 ? "teal" : "gold"}}>{count}</p>
        <button className="bg-teal-700 text-white px-4 py-2 rounded font-bold text-2xl m-2" onClick={()=>setCount(prev=>prev-1)}>Decrement</button>
        <button className="bg-teal-700 text-white px-4 py-2 rounded font-bold text-2xl m-2" onClick={()=>setCount(0)}>Reset</button>
        <button className="bg-teal-700 text-white px-4 py-2 rounded font-bold text-2xl m-2" onClick={()=>setCount(prev=>prev+1)}>Increment</button>
     </section>
     )}
       <button onClick={handleshow} className="bg-pink-800 text-white px-4 py-2 rounded m-2 ">{show ? "Hide" : "Show"}</button>
    </div>
  )
}

export default Usestate
