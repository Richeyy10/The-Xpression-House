import pastor from "@/assets/images/pastor.jpg"
import Image from "next/image"

export default function Pastor() {
    return(
        <>
            <div id="pastor" className="h-[80vh] flex mb-[40px]">
                <div className="relative h-[650px] ml-[30px] sm:ml-[150px] bg-cover bg-center block w-[50%]" style={{ backgroundImage: `url(${pastor.src})` }}>
                </div>
                <div className="block bg-[#624639] h-[650px] text-center w-[50%] mr-[30px] sm:mr-[150px]">
                    <h1 className="text-white text-center text-xl sm:text-3xl pt-[60px] font-bold">MEET OUR LEAD PASTOR</h1>
                    <p className="text-sm sm:text-xl text-white text-justify w-[80%] pt-[40px] mx-auto font-happy-times leading-6 sm:leading-8">Pastor Akinola Fred Elegbe leads the Xpression House, Mokola, Ibadan. He is a passionate speaker and mentor dedicated to helping young people grow in purpose and impact the world.</p>
                    <p className="text-sm sm:text-xl text-white text-justify w-[80%] mx-auto font-happy-times leading-6 sm:leading-8">A graduate of NCC Education, Manchester with a background in Computer Studies, He has spent years mentoring people as an English and TOEFL instructor.</p>
                    <p className="text-sm sm:text-xl text-white text-justify w-[80%] mx-auto font-happy-times leading-6 sm:leading-8">He is also the founder of Kingdom Speakers, an initiative dedicated to equipping the next generation with communication skills and confidence for global impact.</p>
                    <button className="font-happy-times my-[10px] text-md sm:text-1xl rounded-3xl bg-transparent border-2 text-white w-[120px] sm:w-[150px] h-[35px] sm:h-[50px] hover:bg-white hover:text-[#37C500]">Read More</button>
                </div>
            </div>
        </>
    )
}