'use client';
import localFont from "next/font/local";
import Image from "next/image";
import img1 from "../assets/images/img_1.jpg";
import img2 from "../assets/images/img_2.jpg";
import img3 from "../assets/images/img_3.jpg";
import img4 from "../assets/images/img_4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

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

export default function About() {
    return (
        <>
            <div id="about" className="w-full md:w-[90%] mx-auto md:flex">
                <div className="flex flex-col items-center justify-center md:w-[50%] text-center">
                    <h1 className={`text-white text-center text-xl sm:text-3xl font-bold ${geoslab.className}`}>About Xpression House</h1>
                    <p className={`text-white text-sm sm:text-lg text-justify w-[70%] pt-[30px] mx-auto sm:leading-10 ${poppins.className}`} >Xpression House is the youth church of The Stone Church (Word Alive Ministries Int&apos;l). Since 2009, we&apos;ve been a body of young and vibrant believers, students and professionals passionate about the Gospel of the Kingdom and living out the culture  of heaven on earth. Guided by the Bible as our foundation, our mandate goes beyond the four walls of the church to impact lives and shape destinies.</p>
                    <button className={`font-happy-times my-[20px] text-1xl rounded-3xl bg-[#37C500] text-white w-[100px] sm:w-[150px] h-[40px] sm:h-[50px] hover:bg-white hover:text-[#37C500] ${poppins.className}`}>Read More</button>
                </div>
                {/* <div className="relative h-[300px] mt-[150px] sm:h-[600px] mr-[30px] sm:mt-[50px] sm:mr-[150px] bg-cover bg-center block w-[50%]" style={{ backgroundImage: `url(${about.src})` }}>
                </div> */}
                <div className="w-[70%] mx-auto md:w-[50%] flex items-center justify-center md:pt-[60px] pb-[60px]">
                    <div className="w-full h-full">
                        <Swiper
                            modules={[Pagination, Autoplay]}
                            spaceBetween={16}
                            slidesPerView={1}
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 3500, disableOnInteraction: false }}
                            loop
                            className="h-[560px] w-[550px] rounded-3xl"
                            aria-live="polite"
                        >
                            {[img1, img2, img3, img4].map((img, idx) => (
                                <SwiperSlide key={idx} className="h-90">
                                    <div className="h-90 w-full">
                                        <Image src={img} alt={`Impact ${idx + 1}`} className="object-cover h-[580px] w-[550px]" />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}