import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FaArrowRight } from 'react-icons/fa';

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
            <div className="block">
                <div className="h-64 overflow-hidden rounded-3xl">
                    <Image src={imageSrc} alt={altText} width={500} height={400} className="w-full h-full object-cover" />
                </div>
                <Link href={linkHref} className="group flex items-center text-black pt-5 text-2xl font-happy-times ">
                    <h3 className="pr-2">
                        {title}
                    </h3>
                    <FaArrowRight className="text-xl transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <p className="text-xl text-black text-justify pt-2.5 w-[90%] font-happy-times leading-8">{description}</p>
            </div>
        </>
    )
}