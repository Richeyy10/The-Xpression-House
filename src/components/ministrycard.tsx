import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FaArrowRight } from 'react-icons/fa';
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

interface MinistryCardProps {
    imageSrc: StaticImageData;
    altText: string;
    title: string;
    description: string;
    linkHref: string;
}


export default function MinistryCard({ imageSrc, altText, title, description, linkHref }: MinistryCardProps) {
    return (
        <>
            <div className="block text-center">
                <div className="h-64 w-64 mx-auto md:w-full md:h-64 overflow-hidden rounded-2xl md:rounded-3xl">
                    <Image src={imageSrc} alt={altText} width={500} height={400} className="w-full h-full object-cover" />
                </div>
                <Link href={linkHref} className={`group flex items-center text-white pt-3 text-lg mx-auto md:text-2xl md:ml-[10px] justify-center md:justify-start ${poppins.className}`}>
                    <h3 className="pr-2">
                        {title}
                    </h3>
                    <FaArrowRight className="text-sm md:text-xl transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <p className={`text-md md:text-md text-white text-justify pt-2.5 mx-auto w-[80%] md:mx-0 mb-[30px] md:ml-[10px] md:w-[80%] leading-6 ${poppins.className}`}>{description}</p>
            </div>
        </>
    )
}