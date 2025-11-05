import Image from "next/image";
import React from "react";
import ablaze from "@/assets/images/ablaze.jpg"
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


export default function Event() {
    return (
        <div id="about" className="w-[90%] mx-auto mb-[60px] block md:flex">
            <div className="block md:w-[50%] text-center sm:pt-[5%]">
                <h1 className={`text-black text-center text-xl sm:text-3xl font-bold ${geoslab.className}`}>Upcoming Events</h1>
                <p className={`text-black text-sm sm:text-lg text-justify w-[70%] pt-[20px] md:pt-[30px] mx-auto sm:leading-6 ${poppins.className}`}>Ablaze Conference is the annual convention of the Xpression House, a powerful retreat where believers gather to be rekindled in the Word and refreshed in God&apos;s presence.</p>
                <p className={`text-black text-sm sm:text-lg text-justify w-[70%] md:pt-[30px] mx-auto sm:leading-6 ${poppins.className}`}>From October 8th to 12th 2025, hearts will be set ablaze under the theme DOMINION ACTIVATED.</p>
                <p className={`text-black text-sm sm:text-lg text-justify w-[70%] md:pt-[30px] mx-auto sm:leading-6 ${poppins.className}`}>An encounter that ignites purpose, Ablaze is for you!</p>
                <button className={`font-happy-times my-[20px] text-1xl rounded-3xl bg-[#37C500] text-white w-[100px] sm:w-[150px] h-[40px] sm:h-[50px] hover:bg-white hover:text-[#37C500] ${poppins.className}`}>Read More</button>
            </div>
            {/* <div className="relative h-[200px] mt-[70px] sm:mt-[10%] mr-[30px] sm:mr-[150px] bg-cover bg-center block w-[50%]" style={{ backgroundImage: `url(${ablaze.src})` }}>
            </div> */}
            <div className="md:w-[50%] flex items-center justify-center md:pt-[60px]">
                <Image src={ablaze} alt="Ablaze" width={500} />
            </div>
        </div>
    )
}