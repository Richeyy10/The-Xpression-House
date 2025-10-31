import Image from "next/image";
import React from "react";
import choir from "@/assets/images/choir.jpg"
import protocol from "@/assets/images/protocol.jpg"
import media from "@/assets/images/media.jpg"
import MinistryCard from "./ministrycard";

export default function Ministry() {
    return(
        <div id="ministry" className="h-[90vh] text-center mt-[0px]">
            <h1 className="text-black text-center text-3xl pt-[60px] font-bold">Our Ministries</h1>
            <h5 className="text-xl text-black text-center font-happy-times">Get connected, grow in faith and serve with us</h5>
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
            <button className="font-happy-times mt-[30px] text-1xl rounded-3xl bg-transparent border-2 text-[#37C500] w-[170px] h-[50px] hover:bg-[#37C500] hover:text-white">Explore All Ministries</button>
        </div>
    )
}