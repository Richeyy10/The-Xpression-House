import localFont from "next/font/local";
import Image from "next/image";
import about from "@/assets/images/about.jpg"

//Local hosted Fonts
const happyTimes = localFont({
    src: "../assets/fonts/Happy-Times/happy-times-at-the-ikob.regular.ttf",
})

const poppins = localFont({
    src: "../assets/fonts/poppins/poppins-light-italic.ttf",
})

const geoslab = localFont({
    src: "../assets/fonts/Geoslab/Typo-GeoSlab-Regular.woff2",
})

const geoslabBold = localFont({
    src: "../assets/fonts/Geoslab/Typo-GeoSlab-Thin.woff2",
})

export default function About() {
    return(
        <>
            <div id="about" className="h-[80vh] ml-[2px] sm:ml-[60px] mb-[60px] flex">
                <div className="block w-[50%] text-center py-[100px]">
                    <h1 className={`text-black text-center text-xl sm:text-3xl font-bold ${geoslab.className}`}>About Xpression House</h1>
                    <p className={`text-black text-sm sm:text-xl text-justify w-[70%] pt-[30px] mx-auto font-happy-times sm:leading-10 ${geoslabBold.className}`}>Xpression House is the youth church of The Stone Church (Word Alive Ministries Int&apos;l). Since 2009, we&apos;ve been a body of young and vibrant believers, students and professionals passionate about the Gospel of the Kingdom and living out the culture  of heaven on earth. Guided by the Bible as our foundation, our mandate goes beyond the four walls of the church to impact lives and shape destinies.</p>
                    <button className="font-happy-times my-[20px] text-1xl rounded-3xl bg-[#37C500] text-white w-[100px] sm:w-[150px] h-[40px] sm:h-[50px] hover:bg-white hover:text-[#37C500]">Read More</button>
                </div>
                <div className="relative h-[300px] mt-[150px] sm:h-[600px] mr-[30px] sm:mt-[50px] sm:mr-[150px] bg-cover bg-center block w-[50%]" style={{ backgroundImage: `url(${about.src})` }}>
                </div>
            </div>
        </>
    )
}