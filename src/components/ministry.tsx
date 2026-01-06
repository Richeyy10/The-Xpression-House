'use client';
import Image from "next/image";
import React from "react";
import useEmblaCarousel from 'embla-carousel-react';
import choir from "@/assets/images/choir.jpg"
import protocol from "@/assets/images/protocol.jpg"
import media from "@/assets/images/media.jpg"
import MinistryCard from "./ministrycard";
import localFont from "next/font/local";

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

export default function Ministry() {
    const [emblaRef] = useEmblaCarousel({ 
        loop: true, 
        dragFree: true,
        breakpoints: {
            '(min-width: 768px)': {
                active: false 
            }
        }
    });
    return(
        <div id="ministry" className="text-center md:mt-[40px] mb-[0px]">
            <h1 className={`text-white text-center text-xl sm:text-3xl pt-[60px] pb-[10px] font-bold ${geoslab.className}`}>Our Ministries</h1>
            <h5 className={`text-md w-[80%] mx-auto sm:text-xl text-white text-center ${poppins.className}`}>Get connected, grow in faith and serve with us</h5>
            <div className="flex flex-row md:flex-row no-scrollbar overflow-y-scroll  overflow-x-scroll justify-between md:justify-evenly md:w-[80%] mx-auto mt-16 pl-[40px] md:pl-[0px] gap-x-10 md:gap-x-8"ref={emblaRef}>
                    <MinistryCard
                        imageSrc={choir}
                        altText="Choir ministry"
                        title="Choir Ministry"
                        description="Our Choir ushers God&apos;s presence through spirit-filled worship that lifts the hearts and draws people to Him."
                        linkHref="/ministries/choir"
                    />
                    <MinistryCard
                        imageSrc={protocol}
                        altText="Protocol ministry"
                        title="Protocol Ministry"
                        description="Protocol ensures order and excellence, creating a warm and welcoming environment for everyone who walks through our doors."
                        linkHref="/ministries/protocol" 
                    />
                    <MinistryCard
                    imageSrc={media}
                    altText="Media ministry"
                    title="Media Ministry"
                    description="The media uses creativity and technology to capture, share and amplify the message of Christ beyond the walls of the church."
                    linkHref="/ministries/media"
                    />
            </div>
            <button className={`md:mt-[10px] text-1xl rounded-3xl bg-[#37C500] border-2 text-white w-[180px] h-[50px] hover:bg-white hover:text-[#37C500] ${poppins.className}`}>Explore All Ministries</button>
        </div>
    )
}