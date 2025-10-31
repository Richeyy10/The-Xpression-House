'use client';
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import localFont from "next/font/local";
import xpressionHouseLogo from "../assets/images/xph logo png2.png";

//Local hosted Fonts
const happyTimes = localFont({
    src: "../assets/fonts/Happy-Times/happy-times-at-the-ikob.regular.ttf",
})

export default function Nav() {
    const [navbar, setNavbar] = useState(false);

    const scrollNavbar = () => {
        if(window.scrollY >= 20) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll', scrollNavbar)
        return ()=> {
            window.addEventListener('scroll', scrollNavbar)
        }
    },[])

    return(
        <div id="nav-container" className={navbar? "fixed top-0 left-0 right-0 z-50 flex justify-evenly w-[80%] mx-auto my-5 h-[130px] border-2 rounded-lg bg-black" : "relative top-0 left-0 right-0 z-50 flex justify-evenly w-[80%] mx-auto my-5 h-[130px] rounded-lg"}>
            <div id="logo-container" className="pt-[20px]">
                <Link href = "/">
                    <Image src={xpressionHouseLogo} alt="Xpression House Logo" width={100} />
                </Link>
            </div>
            <nav className="flex items-center flex-start">
                <ul className={navbar? "hidden sm:flex items-center gap-4 text-white rounded-full border-1": "hidden sm:flex items-center gap-4 text-black rounded-full border-1"}>
                    <li>
                        <Link href="/" className="h-full block text-1xl font-happy-times decoration-2">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/" className="h-full block text-1xl font-happy-times">
                            About US
                        </Link>
                    </li>
                    <li>
                        <Link href="/" className="h-full block text-1xl font-happy-times">
                            Ablaze
                        </Link>
                    </li>
                    <li>
                        <Link href="/" className="h-full block text-1xl font-happy-times">
                            Ministries
                        </Link>
                    </li>
                    <li>
                        <Link href="/" className="h-full block text-1xl font-happy-times">
                            Gallery
                        </Link>
                    </li>
                    <li>
                        <Link href="/" className="h-full block text-1xl font-happy-times">
                            Blog
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="flex items-end py-[3%]">
                <button className="hidden sm:block font-happy-times text-1xl rounded-3xl bg-[#37C500] text-white w-[150px] h-[50px] hover:bg-white hover:text-[#37C500]">Contact US</button>
            </div>
        </div>
    )
}