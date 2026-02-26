
import { useContext } from "react"
import { userContext } from "./Parentcontext"

const Chilcontext = () => {
    const name =useContext(userContext)
  return (
    <div>
      <p>my name is <span className="text-pink-700  font-bold">{name}</span></p>
    </div>
  )
}

export default Chilcontext
