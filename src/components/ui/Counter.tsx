"use client";
import { useState } from "react";
import { Minus, Plus } from "lucide-react";

const Counter : React.FC = () => {
    
    const [count, setCount] = useState(0);
    
    const increment = () => {
        if (count < 20) {
        setCount(count + 1);
        }
    };

    const decrement = () => {
        if (count > 0) {
        setCount(count - 1);
        }
    };
    return(
        <div className="rounded-full p-2 shadow-xl gap-3 flex items-center">
            <button
                onClick={decrement}
                disabled={count==0} 
                className="cursor-pointer bg-(--secondary-color) rounded-full p-1 md:p-2"
            >
                <Minus/>
            </button>
            <div className="font-bold text-xl">{count}</div>
            <button
                onClick={increment} 
                className="cursor-pointer bg-(--primary-color) rounded-full p-1 md:p-2"
            >
                <Plus className="text-white"/>
            </button>
        </div>
    );
}

export default Counter;