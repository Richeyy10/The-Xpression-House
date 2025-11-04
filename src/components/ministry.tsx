import Image from "next/image";
import React from "react";
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
    return(
        <div id="ministry" className="text-center mt-[40px] mb-[0px]">
            <h1 className={`text-black text-center text-xl sm:text-3xl pt-[60px] pb-[10px] font-bold ${geoslab.className}`}>Our Ministries</h1>
            <h5 className={`text-md sm:text-xl text-black text-center ${poppins.className}`}>Get connected, grow in faith and serve with us</h5>
            <div className="flex flex-col md:flex-row justify-evenly w-[80%] mx-auto mt-16 gap-x-8">
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
            <button className={`font-happy-times mt-[30px] text-1xl rounded-3xl bg-transparent border-2 text-[#37C500] w-[180px] h-[50px] hover:bg-[#37C500] hover:text-white ${poppins.className}`}>Explore All Ministries</button>
        </div>
    )
}