import React from "react";

export default function Newsletter() {
    return(
        <div id="newsletter">
            <div className="block text-center">
                <h1 className="text-center text-3xl font-bold uppercase tracking-[0.3em]">Join our mailing list</h1>
                <p className="text-center text-sm w-1/3 mx-auto my-[10px]">We promise not to spam you, but send you edifying and amazing content regularly from The Xpression House.</p>
                <form className="flex flex-col items-center">
                    <input type="text" placeholder="Your Email" className="border-2 my-[10px] w-[300px] text-[#37C500] rounded-2xl pl-[5px] placeholder-black focus:placeholder-green-400" required></input>
                    <button type="submit" className="border-2 w-[300px] text-[#37C500] rounded-2xl my-[10px]">Submit</button>
                </form>
            </div>
        </div>
    )
}