import ImageGallery from "./imagegallery"
import moment1 from "@/assets/images/Moment1.jpg"
import moment2 from "@/assets/images/Moment2.jpg"
import moment3 from "@/assets/images/Moment3.jpg"
import moment4 from "@/assets/images/Moment4.jpg"
import moment5 from "@/assets/images/Moment5.jpg"
import moment6 from "@/assets/images/Moment6.jpg"

export default function Moments() {
    const galleryImages = [
        {id:1, src: moment1, alt: "Xpression House"},
        {id:2, src: moment2, alt: "Xpression House"},
        {id:3, src: moment3, alt: "Xpression House"},
        {id:4, src: moment4, alt: "Xpression House"},
        {id:5, src: moment5, alt: "Xpression House"},
        {id:6, src: moment6, alt: "Xpression House"}
    ]
    return(
        <>
            <div id="moment" className="h-[120vh] text-center">
                <h1 className="text-black text-center text-3xl pt-[60px] font-bold">Moments at The Xpression House</h1>
                <h5 className="text-xl text-black text-center font-happy-times">See how God is moving in our midst</h5>
                <ImageGallery images={galleryImages} />
                <button className="font-happy-times mt-[10px] text-1xl rounded-3xl bg-transparent border-2 text-[#37C500] w-[170px] h-[50px] hover:bg-[#37C500] hover:text-white">Explore Our Gallery</button>
            </div>
        </>
    )
}