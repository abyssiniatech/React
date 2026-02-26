import { useState } from "react"
const Counterprops = () => {
    const [loading,setLoading] = useState(false);
  return (
    <div>
        <h1>Counter with props</h1>
        <button onClick={()=>setLoading(!loading)} className="bg-indigo-900 text-white px-4 py-2 rounded-md">Toggle Loading</button>
        {loading && <p>Loading...</p>}
        
    </div>
  )
}

export default Counterprops
