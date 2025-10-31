import React from "react";
import ablaze from "../assets/images/ablaze.webp";
import Image from "next/image";

export default function Ablaze() {
    return(
        <div id="event" className="w-full flex h-[80vh]">
            <div className="ablaze-left w-1/2 mx-40 py-[15vh]">
                <h3 className="rounded-xl bg-[#F5F5F5] text-black w-[180px] text-center text-xs h-6 py-1 px-1 font-bold">🔥 ABLAZE CONFERENCE</h3>
                <h1 className="text-black w-full text-left h-10 my-10 px-1 text-5xl uppercase font-semibold">Something something about ABLAZE</h1>
                <p className="text-black w-1/2 text-left h-10 py-10 px-1 text-1xl">Something much much much much much much much much more more more more more more more more more more more more more more longer about Ablaze.</p>
                <button className="font-happy-times text-1xl my-20 rounded-3xl bg-[#37C500] text-white w-[150px] h-[50px]">Read More</button>
            </div>
            <div className="ablaze-right">
                <Image src={ablaze} alt="ablaze" width={350} className="mr-[300px]" />
            </div>
        </div>
    )
}