import React from "react";

export default function Testimonies() {
    return(
        <div id="testimonies">
            <div className="testimonies-container block text-center w-full h-[75vh]">
                <h1 className="text-center text-3xl uppercase font-bold py-5">Testimonies</h1>
                <div className="testimonies-grid flex flex-row space-x-4 overflow-x-auto scrollbar-hide no-scrollbar py-[10vh] px-[2vh]">
                    <div className="testimonies-card flex-none w-[300px] h-[300px] bg-green-300 rounded-3xl text-center py-10 shadow-xl shadow-inner shadow-indigo-500/50">Testimony 1</div>
                    <div className="testimonies-card flex-none w-[300px] h-[300px] bg-green-300 rounded-3xl text-center py-10 shadow-xl shadow-inner shadow-indigo-500/50">Testimony 1</div>
                    <div className="testimonies-card flex-none w-[300px] h-[300px] bg-green-300 rounded-3xl text-center py-10 shadow-xl shadow-inner shadow-indigo-500/50">Testimony 1</div>
                    <div className="testimonies-card flex-none w-[300px] h-[300px] bg-green-300 rounded-3xl text-center py-10 shadow-xl shadow-inner shadow-indigo-500/50">Testimony 1</div>
                    <div className="testimonies-card flex-none w-[300px] h-[300px] bg-green-300 rounded-3xl text-center py-10 shadow-xl shadow-inner shadow-indigo-500/50">Testimony 1</div>
                </div>
                <button className="font-happy-times text-1xl rounded-3xl bg-[#37C500] text-white w-[150px] h-[50px]">Share Yours</button>
            </div>
        </div>
    )
}