import { useReducer } from "react";

const intial =0

function reducer(state:number,action:{type:string}){
      switch(action.type){
         case "DECREMENT":
            return state-1
            break;
        case "RESET":
            return intial;
            break;
        case "INCREMENT":
            return state+1
            break;
        default:
            return state;
      }
}


const Usereducer = () => {
    const [state,dispatch] = useReducer(reducer,intial);
  return (
    <div>
      <p>{state}</p>
     <button onClick={()=>dispatch({type:"DECREMENT"})} className="bg-teal-700 text-white rounded px-4 py-2 m-2">Decrement</button>
     <button onClick={()=>dispatch({type:"RESET"})} className="bg-teal-700 text-white rounded px-4 py-2 m-2">Reset</button>
     <button onClick={()=>dispatch({type:"INCREMENT"})} className="bg-teal-700 text-white rounded px-4 py-2 m-2">Increment</button>
    </div>
  )
}

export default Usereducer
