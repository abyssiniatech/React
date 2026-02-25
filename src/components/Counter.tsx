import { useState } from 'react';
export function Counter(){
    const [counter,setCounter]=useState(0);
    const [loading,setLoading]=useState(true);
    setTimeout(()=>{
        setLoading(false);
    },1000);
    return (
        <>
            {loading && (
                <div className='bg-indigo-800 text-white  min-h-screen flex justify-center items-center '>
                    <p className='text-2xl font-bold mb-4'>
                        {counter > 0 ? "Positive" : counter < 0 ? "Negative" : "Zero"}
                    </p>
                    <button className='px-4 py-2 m-2 rounded bg-teal-700 text-2xl text-white' onClick={() => setCounter(counter + 1)}>+</button>
                    <button className='px-4 py-2 m-2 rounded bg-teal-700 text-2xl text-white' onClick={() => setCounter(counter - 1)}>-</button>
                </div>
            )}: "Loading..."
        </>
    );
}