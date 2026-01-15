import React from "react";
import Link from "next/link";
import Image from "next/image";
import Instagram from "../assets/images/instagram.svg";
import Twitter from "../assets/images/twitter.png";
import Youtube from "../assets/images/youtube.png";
import localFont from "next/font/local";
import { Send } from "lucide-react";

//Local hosted Fonts
const happyTimes = localFont({
    src: "../assets/fonts/Happy-Times/happy-times-at-the-ikob.regular.ttf",
})

const poppins = localFont({
    src: "../assets/fonts/poppins/poppins-regular.ttf",
})

const geoslab = localFont({
    src: "../assets/fonts/Geoslab/Typo-GeoSlab-Regular.woff2",
})

const geoslabBold = localFont({
    src: "../assets/fonts/Geoslab/Typo-GeoSlab-Thin.woff2",
})

export default function Footer() {

    const date = new Date();
    const Year = date.getFullYear();

    return (
        <div id="footer" className="pt-5 md:pt-20 bg-[#051300]">
            <div className="block w-full md:mr-[150px] mr-[10px] md:ml-[150px] ml-[10px] mb-[40px]">
                <h1 className={`text-white text-[9px] md:text-xl ${geoslab.className}`}>
                    Join Our Mailing List
                </h1>

                <form
                    className={`block md:flex md:flex-col md:mt-6 mt-3 space-y-2 md:space-y-4 text-[9px] md:text-lg text-white ${poppins.className}`}
                >
                    {/* input + icon row */}
                    <div className="flex items-center w-[80%] bg-[#051300] rounded-2xl px-2">
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            className="flex-1 bg-transparent border-b border-white text-white pl-[5px] placeholder-white focus:outline-none"
                            required
                        />

                        {/* icon submit button */}
                        <button type="submit" className="text-white hover:text-green-500">
                            <Send size={18} />
                        </button>
                    </div>
                </form>
            </div>
            <div className="flex md:mr-[150px] mr-[10px] md:ml-[150px] ml-[10px] gap-1 md:gap-8 mb-[40px]">
                <div className="block w-full">
                    <h1 className={`text-white text-[9px] md:text-xl ${geoslab.className}`}>Quick Links</h1>
                    <ul className={`md:mt-6 mt-3 space-y-2 md:space-y-4 text-[8px] md:text-lg text-white ${poppins.className}`}>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Ministries</li>
                        <li>Blog</li>
                        <li>Ablaze</li>
                        <li>Gallery</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className="block w-full">
                    <h1 className={`text-white text-[9px] md:text-xl ${geoslab.className}`}>Next Steps</h1>
                    <ul className={`md:mt-6 mt-3 space-y-2 md:space-y-4 text-[8px] md:text-lg text-white ${poppins.className}`}>
                        <li>Sermons</li>
                        <li>Join a Ministry</li>
                        <li>Request Prayer</li>
                        <li>Give</li>
                    </ul>
                </div>
                <div className="block w-full">
                    <h1 className={`text-white text-[9px] md:text-xl ${geoslab.className}`}>Service Time</h1>
                    <ul className={`md:mt-6 mt-3 space-y-2 md:space-y-4 text-[8px] md:text-lg text-white ${poppins.className}`}>
                        <li>Sundays - 9 AM</li>
                        <li>Thursdays - 5:30 PM</li>
                    </ul>
                </div>
            </div>
            <div className="footer-container w-[80%] mx-auto items-start">
                <hr className="h-2 w-full"></hr>
                <div className="footer-dates w-[100%] text-white block md:flex">
                    <h3 className={`text-sm md:text-1xl w-[100%] text-center md:text-start mx-auto py-5 ${poppins.className}`}>&copy; {Year} The Xpression House. All Rights Reserved.</h3>
                    <div className="w-[40%] md:w-[20%] mx-auto pb-5 flex items-center justify-between">
                        <Link
                            href="http://instagram.com/thexphng"
                            className="social-contact-link"
                            target="_blank"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="24" height="24">
                                <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm5.5-.9a1.1 1.1 0 11-2.2 0 1.1 1.1 0 012.2 0z" />
                            </svg>

                        </Link>
                        <Link
                            href="http://x.com/thexphng"
                            className="social-contact-link"
                            target="_blank"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="24" height="24">
                                <path d="M18.244 2H21l-6.5 7.43L22 22h-6.406l-4.512-5.61L6.2 22H3.44l6.96-7.96L2 2h6.56l4.1 5.1L18.244 2zm-1.12 18h1.78L7.68 4H5.84l11.284 16z" />
                            </svg>

                        </Link>
                        <Link
                            href="http://youtube.com/thexphng"
                            className="social-contact-link"
                            target="_blank"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="24" height="24">
                                <path d="M23.498 6.186a2.99 2.99 0 00-2.104-2.118C19.557 3.5 12 3.5 12 3.5s-7.557 0-9.394.568A2.99 2.99 0 00.502 6.186C0 8.04 0 12 0 12s0 3.96.502 5.814a2.99 2.99 0 002.104 2.118C4.443 20.5 12 20.5 12 20.5s7.557 0 9.394-.568a2.99 2.99 0 002.104-2.118C24 15.96 24 12 24 12s0-3.96-.502-5.814zM9.75 15.568V8.432L15.818 12 9.75 15.568z" />
                            </svg>

                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}