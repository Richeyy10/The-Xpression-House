import Youtube from "./youtube";
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


export default function Live() {
    return (
        <div className="flex mb-[60px]">
            <div className="container w-[50%] ml-[0px] md:ml-[150px] p-8 mb-[40px]">
                <div className="flex h-[130%] justify-center">
                    <Youtube videoId="cdK6N1bNySA" title="ABLAZE 2025 || DAY 4 || GRAND FINALE || WORD SESSION II" />
                </div>
            </div>
            <div className="block w-[50%] text-center mr-[30px] md:mr-[150px]">
                <h1 className={`text-black text-center text-xl md:text-2xl pt-[30px] pb-[40px] md:pt-[10%] font-bold ${geoslab.className}`}>Watch Our Services Live</h1>
                <p className={`text-md md:text-xl text-black text-justify w-[80%] pt-[20px] md:pt-2 mx-auto leading-8 ${poppins.className}`}>Join Us every Sunday and Thursday as we worship, learn, and grow together.</p>
                <p className={`text-md md:text-xl text-black text-justify w-[80%] pt-[20px] md:pt-2 mx-auto leading-8 ${poppins.className}`}>Can&apos;t make it in person? Stream online from anywhere.</p>
                <button className={`mt-[10px] md:mt-[40px] text-lg md:text-1xl rounded-3xl bg-[#37C500] text-white w-[120px] h-[40px] md:w-[150px] md:h-[50px] hover:bg-white hover:text-[#37C500] ${poppins.className}`}>Watch More</button>
            </div>
        </div>
    )
}
