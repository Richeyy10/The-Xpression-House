'use client';
import Image from "next/image";
import React from "react";
import communionsunday from "../assets/images/Communion Sunday.jpg";
import encounternight from "../assets/images/Encounter Night.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
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
            <div className="flex flex-col items-center justify-center md:w-[50%] text-center">
                <h1 className={`text-white text-center text-xl sm:text-3xl font-bold ${geoslab.className}`}>Upcoming Events</h1>
                <h1 className={`text-white text-center text-xl sm:text-3xl font-bold ${poppins.className}`}>Join Our Services and Programs</h1>
                <p className={`text-white text-sm sm:text-lg text-center w-[70%] pt-[20px] md:pt-[30px] mx-auto sm:leading-10 ${poppins.className}`}>Find out God&apos;s plans for your life.</p>
                <div className="flex justify-center my-8 gap-4">
                    <button className={`font-happy-times my-[20px] text-1xl rounded-3xl bg-[#37C500] text-white w-[100px] sm:w-[150px] h-[40px] sm:h-[50px] hover:bg-white hover:text-[#37C500] ${poppins.className}`}>Livestream</button>
                    <button className={`my-[20px] text-1xl rounded-3xl bg-transparent border-2 text-white w-[120px] sm:w-[150px] h-[35px] sm:h-[50px] hover:bg-white hover:text-[#37C500] ${poppins.className}`}>View Events</button>
                </div>
            </div>
            {/* <div className="relative h-[200px] mt-[70px] sm:mt-[10%] mr-[30px] sm:mr-[150px] bg-cover bg-center block w-[50%]" style={{ backgroundImage: `url(${ablaze.src})` }}>
            </div> */}
            <div className="md:w-[50%] flex items-center justify-center md:pt-[60px]">
                <div className="w-full h-full">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={16}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 3500, disableOnInteraction: false }}
                        loop
                        className="h-90 w-full rounded-3xl"
                        aria-live="polite"
                    >
                        {[communionsunday, encounternight].map((img, idx) => (
                            <SwiperSlide key={idx} className="h-90">
                                <div className="h-90 w-full">
                                    <Image src={img} alt={`Impact ${idx + 1}`} className="object-cover h-90 w-full" />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}