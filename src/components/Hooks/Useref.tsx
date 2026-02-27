import { useRef } from "react"
const Useref = () => {
    const inputRef:React.Ref<HTMLInputElement> | undefined=useRef(null)
    const handleref=()=>{
        inputRef.current?.focus()
    }
     return(
        <div className="min-h-screen flex justify-center items-center  bg-indigo-800 text-white flex-col">   
        <h1>Use ref hook</h1>
        <input type="text" ref={inputRef}  className="bg-white text-gray-900 rounded m-2 p-4  w-100" placeholder="add list.."/>
        <button onClick={handleref}
         className="bg-pink-700 px-4 py-2 text-white rounded "
        >
            Focus
        </button>
        </div>
        )
    }

export default Useref
