
import React, { useState } from "react";

export default function Counterprop(Props){
    const [count, setCount] = useState(0);
    
    return (
        <div className="min-h-screen bg-gray-100">
            <p>{Props.count}</p>
            {/* props with counter with these is the child components  */}
                <h1 className="text-2xl font-bold text-center p-4">Props in React</h1>
                    <p className="text-center text-gray-700">Props, short for "properties," are a fundamental concept in React that allow you to pass data from a parent component to a child component. They are read-only and help make components reusable and dynamic.</p>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Decrement</button>
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Increment</button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Reset</button>                   
            </div>
    )
}