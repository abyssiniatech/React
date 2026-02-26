import { createContext } from "react"
import Chilcontext from "./Chilcontext"
// eslint-disable-next-line react-refresh/only-export-components
export const userContext = createContext("")
const Parentcontext = () => {
   const name="surafel"
    
  return (
    <div>
      <userContext.Provider value={name}>
        <Chilcontext />
      </userContext.Provider>

    </div>
  )
}

export default Parentcontext
