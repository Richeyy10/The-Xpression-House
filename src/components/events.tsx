import Image from "next/image";
import React from "react";
import ablaze from "@/assets/images/ablaze.jpg"

export default function Event() {
    return (
        <div id="about" className="sm:ml-[60px] mb-[60px] flex">
            <div className="block w-[50%] text-center sm:pt-[5%]">
                <h1 className="text-black text-center text-xl sm:text-3xl font-bold">Upcoming Events</h1>
                <p className="text-black text-sm sm:text-xl text-justify w-[80%] pt-[30px] mx-auto font-happy-times">Ablaze Conference is the annual convention of the Xpression House, a powerful retreat where believers gather to be rekindled in the Word and refreshed in God&apos;s presence.</p>
                <p className="text-black text-sm sm:text-xl text-justify w-[80%] mx-auto font-happy-times">From October 8th to 12th 2025, hearts will be set ablaze under the theme DOMINION ACTIVATED.</p>
                <p className="text-black text-sm sm:text-xl text-justify w-[80%] mx-auto font-happy-times">An encounter that ignites purpose, Ablaze is for you!</p>
                <button className="font-happy-times my-[20px] text-1xl rounded-3xl bg-[#37C500] text-white w-[150px] h-[50px] hover:bg-white hover:text-[#37C500]">Read More</button>
            </div>
            <div className="relative h-[200px] mt-[70px] sm:mt-[10%] mr-[30px] sm:mr-[150px] bg-cover bg-center block w-[50%]" style={{ backgroundImage: `url(${ablaze.src})` }}>
            </div>
        </div>
    )
}