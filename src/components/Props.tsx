
import { useState } from "react";
type Props = {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
}
export default function Counterprop(Props: Props){
    const [loading, setLoading] = useState(false);
     setTimeout(() => {
        setLoading(true);
    }, 2000);
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col w-[70%]  items-center justify-center">
            {!loading && <p className="text-center text-gray-500">Loading...</p>}
            <>
                <p style={{ color: Props.count > 0 ? "blue" : Props.count < 0 ? "red" : "gold" }}>{Props.count}</p>
                {/* props with counter with these is the child components  */}
                <h1 className="text-2xl font-bold text-center p-4">Props in React</h1>
                <p className="text-center text-gray-700">Props, short for "properties," are a fundamental concept in React that allow you to pass data from a parent component to a child component. They are read-only and help make components reusable and dynamic.</p>
                <button onClick={() => Props.setCount(Props.count - 1)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Decrement</button>
                <button onClick={() => Props.setCount(Props.count + 1)} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Increment</button>
                <button onClick={() => Props.setCount(0)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Reset</button>
            </>
            {/* click the button change the parent bg-color */}
             <button style={{ backgroundColor: Props.count >= 10 ? "yellow" : "gray" }} onClick={() => Props.setCount(Props.count + 10)}  className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">Change bg</button>
            </div>
    )
}