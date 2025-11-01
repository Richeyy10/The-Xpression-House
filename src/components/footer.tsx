import React from "react";
import Link from "next/link";
import Image from "next/image";
import Instagram from "../assets/images/instagram.svg";
import Twitter from "../assets/images/twitter.svg";
import Youtube from "../assets/images/youtube.svg";

export default function Footer() {

    const date = new Date();
    const Year = date.getFullYear();

    return(
        <div id="footer" className="pt-20 bg-[#37C500]">
            <div className="flex mr-[30px] md:mr-[150px] ml-[30px] md:ml-[150px] gap-8 mb-[40px]">
                <div className="block w-full">
                    <h1 className="text-white text-md md:text-xl font-bold">Quick Links</h1>
                    <ul className="mt-6 space-y-2 md:space-y-4 text-sm md:text-md text-white">
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
                    <h1 className="text-white text-md md:text-xl font-bold">Next Steps</h1>
                    <ul className="mt-6 space-y-2 md:space-y-4 text-sm md:text-md text-white">
                        <li>Sermons</li>
                        <li>Join a Ministry</li>
                        <li>Request Prayer</li>
                        <li>Give</li>
                    </ul>
                </div>
                <div className="block w-full">
                    <h1 className="text-white text-md md:text-xl font-bold">Service Time</h1>
                    <ul className="mt-6 space-y-2 md:space-y-4 text-sm md:text-md text-white">
                        <li>Sundays - 9 AM</li>
                        <li>Thursdays - 5:30 PM</li>
                    </ul>
                </div>
                <div className="block w-full">
                    <h1 className="text-white text-md md:text-xl font-bold">Join Our Mailing List</h1>
                    <form className="mt-6 space-y-2 md:space-y-4 text-sm md:text-md text-white">
                        <input type="email" name="email" placeholder="Enter your email" className="border-2 my-[10px] w-[100px] md:w-[200px] text-black rounded-2xl pl-[5px] placeholder-sm placeholder-black focus:placeholder-black" required></input>
                        <button type="submit" className="border-2 w-[100px] md:w-[150px] bg-white text-[#37C500] rounded-2xl my-[10px] hover:bg-[#37C500] hover:text-white">Subscribe</button>
                    </form>
                </div>
            </div>
            <div className="footer-container w-[80%] mx-auto items-start">
                <hr className="h-2 w-full"></hr>
                <div className="footer-dates w-[100%] text-white flex">
                    <h3 className="text-sm md:text-1xl w-[100%] py-5">&copy; {Year} The Xpression House. All Rights Reserved.</h3>
                    <div className="md:w-[20%] w-[30%] flex items-center justify-between">
                        <Link
                            href="http://instagram.com/thexphng"
                            className="social-contact-link"
                            target="_blank"
                        >
                            <Image
                                src={Instagram}
                                alt="Instagram contact"
                                title="Check our feed and send us a DM"
                            />
                        </Link>
                        <Link
                            href="http://x.com/thexphng"
                            className="social-contact-link"
                            target="_blank"
                        >
                            <Image
                                src={Twitter}
                                alt="Twitter contact"
                                title="Check our feed and send us a DM"
                            />
                        </Link>
                        <Link
                            href="http://youtube.com/thexphng"
                            className="social-contact-link"
                            target="_blank"
                        >
                            <Image
                                src={Youtube}
                                alt="Instagram contact"
                                title="Check our feed and send us a DM"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}