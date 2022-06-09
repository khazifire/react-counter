import { useState } from "react";
import {CircleProgress} from 'react-gradient-progress'

const Counter = ({type,initial}) => {
    const [counter, setCounter] = useState(initial);

    const increment = () =>{
        if (counter < 100) {
            setCounter((count)=> count+1)
        }
    }
    const decrement = () =>{
        if (counter > 0) {
            setCounter((count)=> count-1)
        }
    }
    return (

        <div className="flex bg-gray-700 w-72 justify-center py-2 rounded-xl shadow-lg hover:bg-gray-50 text-white hover:text-black">
            <div className="flex flex-col">
                <div>
                    <CircleProgress percentage={counter} strokeWidth={8} primaryColor={["#2193b0", "#6dd5ed"]} secondaryColor="#f0f0f0" />
                </div>

                <h2 className="text-center text-xl">{type}</h2>
 
                <div className="flex justify-around text-3xl my-4">
                    <button className="bg-blue-400 p-2 rounded-full hover:bg-blue-300" onClick={decrement} > 
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path fill="none" d="M0 0h24v24H0z"/><path d="M5 11h14v2H5z"/></svg>
                    </button>
                        <button className="bg-yellow-400 p-2 rounded-full hover:text-xl hover:bg-yellow-500" onClick={increment}> 
                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="16" height="16"><path fill="none" d="M0 0h24v24H0z"/><path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"/></svg></button>
                </div>
            </div>
        </div>
    )

  };
  
  export default Counter;