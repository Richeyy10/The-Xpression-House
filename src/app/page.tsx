import Image from "next/image";
import localFont from "next/font/local";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Ablaze from "@/components/ablaze";
import Ministry from "@/components/ministry";
import Event from "@/components/events";
import Newsletter from "@/components/newsletter";
import Testimonies from "@/components/testimonies";
import Donation from "@/components/donation";
import About from "@/components/about";
import Pastor from "@/components/pastor";
import Moments from "@/components/moments";
import Live from "@/components/live";
import Involved from "@/components/involved";

//Locally hosted fonts
const happyTimes = localFont({
  src: "../assets/fonts/Happy-Times/happy-times-at-the-ikob.regular.ttf",
})

const geoslab = localFont({
  src: "../assets/fonts/Geoslab/Typo-Geoslab-Regular.woff2",
})

export default function Home() {
  return (
    <>
      <div className="homepage">
        <Nav />
        <Hero />
        <About />
        <Event />
        <Pastor />
        <Ministry />
        <Moments />
        <Live />
        <Involved />
        {/* <Ablaze />
        <Testimonies />
        <Donation />
        <Newsletter /> */}
        <Footer />
      </div>
    </>
  );
}
