"use client";

import { ArrowLeft, Heart } from "lucide-react";
import { useState } from "react";

const NavBar : React.FC = () => {

    const [isLiked, setLiked] = useState(false);

    const onPressed = () => {
        setLiked(!isLiked);
    };

    return(
        <div className="w-full">
            <div className="flex justify-between w-full p-4 md:p-5">
                <div className="bg-white rounded-full">
                    <ArrowLeft/>
                </div>
                <button onClick={onPressed}>
                    <Heart fill={isLiked ? "red" : "#FFFFFF"} className={`text-red-700`}/>
                </button>
            </div>
        </div>
    );
}

export default NavBar;