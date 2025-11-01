import involved from "@/assets/images/Involved.jpg"

export default function Involved() {
    return(
        <>
            <div id="hero" style={{ backgroundImage: `url(${involved.src})` }} className="bg-cover bg-center h-screen opacity-100">
            <div className="block text-black text-center py-[45vh]">
                <h1 className="text-3xl md:text-5xl font-poppins-black text-white">Get Involved at The Xpression House</h1>
                <div className="block text-center my-8">
                    <h3 className="text-lg md:text-2xl font-poppins-black w-[70%] mx-auto text-white">There is a place for you at the Xpression House where you can grow in faith, serve with purpose, and be a part of something greater for yourself</h3>
                    <button className="font-happy-times text-md md:text-1xl rounded-3xl mt-[40px] bg-[#37C500] text-white w-[120px] h-[40px] md:w-[150px] md:h-[50px] hover:bg-white hover:text-[#37C500]">Join Us Today</button>
                </div>
            </div>
            </div>
        </>
    )
}