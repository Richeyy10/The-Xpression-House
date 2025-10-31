import Youtube from "./youtube";


export default function Live() {
    return (
        <div className="flex">
            <div className="container w-[50%] ml-[150px] p-8 h-[500px]">
                <div className="flex h-full justify-center">
                    <Youtube videoId="cdK6N1bNySA" title="ABLAZE 2025 || DAY 4 || GRAND FINALE || WORD SESSION II" />
                </div>
            </div>
            <div className="block w-[50%] text-center mr-[150px]">
                <h1 className="text-black text-center text-3xl pt-[100px] font-bold">Watch Our Services Live</h1>
                <p className="text-xl text-black text-justify w-[70%] pt-[40px] mx-auto font-happy-times leading-8">Join Us every Sunday and Thursday as we worship, learn, and grow together.</p>
                <p className="text-xl text-black text-justify w-[70%] mx-auto font-happy-times leading-8">Can&apos;t make it in person? Stream online from anywhere.</p>
                <button className="font-happy-times my-[20px] text-1xl rounded-3xl bg-[#37C500] text-white w-[150px] h-[50px] hover:bg-white hover:text-[#37C500]">Watch More</button>
            </div>
        </div>
    )
}
