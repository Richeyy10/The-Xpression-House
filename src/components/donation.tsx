import React from "react";

export default function Donation() {
    return(
        <div id="donation" className="h-[40vh] mt-10">
            <div className="donation-container text-center h-[30vh] w-[60%] mx-auto border-2 rounded-2xl">
                <h1 className="text-4xl font-happy-times mt-10">Give</h1>
                <h3 className="text-2xl font-happy-times py-1">Your generosity keeps blessing lives, thank you for giving.</h3>
                <button className="font-happy-times text-1xl rounded-3xl bg-[#37C500] text-white w-[150px] h-[50px] mt-8">Give</button>
            </div>
        </div>
    )
}