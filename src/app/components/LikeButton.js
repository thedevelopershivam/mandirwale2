"use client"
import { useState } from "react";
import { PiHeartStraightThin } from "react-icons/pi";
import { PiHeartStraightFill } from "react-icons/pi";


function LikeButton() {
    const [like, setLike] = useState(false);
    console.log(like)
    return (
        <section
            className="w-[35px] h-[35px] rounded-full p-1 shadow bg-white flex justify-center items-center border-[1px] border-transparent hover:scale-[1.05] duration-200 cursor-pointer"
            onClick={() => setLike(like === true ? false : true)}
        >
            {
                like ? <PiHeartStraightFill className={`text-red-500 ${like && 'animate-ping animate-1'}`} size={23} /> : <PiHeartStraightThin size={23} />
            }

        </section>
    );
}

export default LikeButton;
