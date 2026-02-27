import {useState,useEffect} from "react"
const Useeffect = () => {
    const [count,setCount] =useState(0)
    useEffect(() => {
        setTimeout(()=>{
            document.title=`welcome to ${count}`
            console.log(count)
        },3000)
      return () => {
        console.log(count)
      };
    }, [count])
    const handleincrement =()=>{
         setCount(prev=>prev+1)
    }

  return (
    <div className="bg-indigo-800 text-white min-h-screen flex justify-center items-center flex-col  ">
      <p>{count}</p>
      <button onClick={handleincrement} className="bg-pink-700 text-white px-4 py-2 rounded">Increment</button>
    </div>
  )
}

export default Useeffect
