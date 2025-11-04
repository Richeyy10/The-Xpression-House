'use client';
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import localFont from "next/font/local";
import xpressionHouseLogo from "../assets/images/xph logo png2.png";

//Local hosted Fonts
const poppins = localFont({
    src: "../assets/fonts/poppins/poppins-regular.ttf",
})

export default function Nav() {
    const [navbar, setNavbar] = useState(false);

    // const scrollNavbar = () => {
    //     if(window.scrollY >= 20) {
    //         setNavbar(true);
    //     } else {
    //         setNavbar(false);
    //     }
    // }

    // useEffect(()=>{
    //     window.addEventListener('scroll', scrollNavbar)
    //     return ()=> {
    //         window.addEventListener('scroll', scrollNavbar)
    //     }
    // },[])

    return(
        <div id="nav-container" className={navbar? "relative top-0 left-0 right-0 flex justify-evenly w-[80%] mx-auto my-5 h-[130px] border-2 rounded-lg bg-black" : "relative top-0 left-0 right-0 flex justify-evenly w-[80%] mx-auto my-5 h-[130px] rounded-lg"}>
            <div id="logo-container" className="pt-[20px]">
                <Link href = "/">
                    <Image src={xpressionHouseLogo} alt="Xpression House Logo" width={100} />
                </Link>
            </div>
            <nav className="flex items-center flex-start">
                <ul className={navbar? "hidden sm:flex items-center gap-4 text-white rounded-full border-1": "hidden sm:flex items-center gap-4 text-black rounded-full border-1"}>
                    <li>
                        <Link href="/" className={`h-full block text-1xl decoration-2 ${poppins.className}`}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/" className={`h-full block text-1xl ${poppins.className}`}>
                            About US
                        </Link>
                    </li>
                    <li>
                        <Link href="/" className={`h-full block text-1xl ${poppins.className}`}>
                            Ablaze
                        </Link>
                    </li>
                    <li>
                        <Link href="/" className={`h-full block text-1xl ${poppins.className}`}>
                            Ministries
                        </Link>
                    </li>
                    <li>
                        <Link href="/" className={`h-full block text-1xl ${poppins.className}`}>
                            Gallery
                        </Link>
                    </li>
                    <li>
                        <Link href="/" className={`h-full block text-1xl ${poppins.className}`}>
                            Blog
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="flex items-end py-[3%]">
                <button className={`hidden sm:block text-1xl rounded-3xl bg-[#37C500] text-white w-[150px] h-[50px] hover:bg-white hover:text-[#37C500] ${poppins.className}`}>Contact US</button>
            </div>
        </div>
    )
}