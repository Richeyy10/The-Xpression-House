import involved from "@/assets/images/Involved.jpg"
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

export default function Involved() {
    return(
        <>
            <div id="hero" style={{ backgroundImage: `url(${involved.src})` }} className="bg-cover bg-center h-screen opacity-100">
            <div className="block text-black text-center py-[45vh]">
                <h1 className={`text-3xl md:text-5xl text-white ${geoslab.className}`}>Get Involved at The Xpression House</h1>
                <div className="block text-center my-8">
                    <h3 className={`text-lg md:text-xl w-[70%] mx-auto text-white ${poppins.className}`}>There is a place for you at the Xpression House where you can grow in faith, serve with purpose, and be a part of something greater for yourself</h3>
                    <button className={`text-md md:text-1xl rounded-3xl mt-[40px] bg-[#37C500] text-white w-[120px] h-[40px] md:w-[150px] md:h-[50px] hover:bg-white hover:text-[#37C500] ${poppins.className}`}>Join Us Today</button>
                </div>
            </div>
            </div>
        </>
    )
}