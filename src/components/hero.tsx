import React from "react";
import localFont from "next/font/local";
import HeroBackground from "@/assets/images/hero-background.jpg"

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

export default function Hero() {
    return(
        <div id="hero" style={{ backgroundImage: `url(${HeroBackground.src})` }} className="bg-cover bg-center h-screen">
            <div className="block text-black text-center pt-[22%]">
                <h1 className={`text-3xl sm:text-5xl font-happy-times text-white ${geoslab.className}`}>Welcome to The Xpression House</h1>
                <div className="block text-center my-8">
                    <h3 className= {`text-md sm:text-2xl font-poppins-black w-[70%] mx-auto text-white ${poppins.className}`}>The Xpression House is a family of believers passionate about expressing Christ in every sphere of life. It is a home where worship comes alive, the Word brings transformation, and people are empowered to walk in their true identity and purpose</h3>
                    <div className="flex justify-center my-8 gap-4">
                    <button className={`font-happy-times my-[20px] text-1xl rounded-3xl bg-[#37C500] text-white w-[100px] sm:w-[150px] h-[40px] sm:h-[50px] hover:bg-white hover:text-[#37C500] ${poppins.className}`}>Join Us Live</button>
                    <button className={`font-happy-times my-[20px] text-1xl rounded-3xl bg-[#37C500] text-white w-[100px] sm:w-[150px] h-[40px] sm:h-[50px] hover:bg-white hover:text-[#37C500] ${poppins.className}`}>Plan A Visit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}