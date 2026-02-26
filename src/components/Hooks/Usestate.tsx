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
        <h1 className="border border-white p-4 rounded text-center text-3xl">Counter App</h1>
        <p className="w-16 h-16 rounded-full flex justify-center items-center bg-gray-100 m-2 p-4" style={{ fontSize:"2em",color:count>0?"red" : count<0 ? "teal" : "gold"}}>{count}</p>
        <section className="border border-white p-4 rounded">
        <button className="bg-teal-700 text-white px-4 py-2 rounded font-bold text-2xl m-2" onClick={()=>setCount(prev=>prev-1)}>Decrement</button>
        <button className="bg-teal-700 text-white px-4 py-2 rounded font-bold text-2xl m-2" onClick={()=>setCount(0)}>Reset</button>
        <button className="bg-teal-700 text-white px-4 py-2 rounded font-bold text-2xl m-2" onClick={()=>setCount(prev=>prev+1)}>Increment</button>
        </section>
     </section>
     )}
       <button onClick={handleshow} className="bg-pink-800 text-white px-4 py-2 rounded m-2 ">{show ? "Hide" : "Show"}</button>
    </div>
  )
}

export default Usestate
