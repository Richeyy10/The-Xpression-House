import Image, { StaticImageData } from "next/image"
import Link from "next/link";

interface ImageData {
    id: number | string;
    src: StaticImageData;
    alt: string;
}

interface ImageGalleryProps {
    images: ImageData[];
}

export default function ImageGallery( {images} : ImageGalleryProps ) {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
                {images.map((image) => (
                        <div key={image.id} className="relative w-42 h-60 md:w-full md:h-80 overflow-hidden rounded-lg shadow-lg group">
                            <Image
                                src={image.src}
                                alt={image.alt}
                                layout="fill"
                                objectFit="cover"
                                className="transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-25 transition-opacity duration-300"></div>
                        </div>
                ))}
            </div>
        </div>
    )
}