import pastor from "@/assets/images/pastor.jpg"
import Image from "next/image"
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


export default function Pastor() {
    return(
        <>
            <div id="pastor" className="w-[85%] mx-auto flex mb-[40px]">
                <div className="relative h-[750px] bg-cover bg-center block w-[50%]" style={{ backgroundImage: `url(${pastor.src})` }}>
                </div>
                {/* <div className="w-[50%]">
                    <Image src={pastor} alt="Pastor Fred Akinola Elegbe" height={800} className="float-right" />
                </div> */}
                <div className="block bg-[#624639] h-[750px] text-center w-[50%] ml-0">
                    <h1 className={`text-white text-center text-xl sm:text-2xl pt-[60px] font-bold ${geoslab.className}`}>MEET OUR LEAD PASTOR</h1>
                    <p className={`text-sm sm:text-xl text-white text-justify w-[80%] pt-[40px] mx-auto leading-6 sm:leading-8 ${poppins.className}`}>Pastor Akinola Fred Elegbe leads the Xpression House, Mokola, Ibadan. He is a passionate speaker and mentor dedicated to helping young people grow in purpose and impact the world.</p>
                    <p className={`text-sm sm:text-xl text-white text-justify w-[80%] mx-auto leading-6 sm:leading-8 ${poppins.className}`}>A graduate of NCC Education, Manchester with a background in Computer Studies, He has spent years mentoring people as an English and TOEFL instructor.</p>
                    <p className={`text-sm sm:text-xl text-white text-justify w-[80%] mx-auto leading-6 sm:leading-8 ${poppins.className}`}>He is also the founder of Kingdom Speakers, an initiative dedicated to equipping the next generation with communication skills and confidence for global impact.</p>
                    <button className={`my-[10px] text-md sm:text-1xl rounded-3xl bg-transparent border-2 text-white w-[120px] sm:w-[150px] h-[35px] sm:h-[50px] hover:bg-white hover:text-[#37C500] ${poppins.className}`}>Read More</button>
                </div>
            </div>
        </>
    )
}