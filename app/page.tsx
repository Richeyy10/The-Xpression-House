import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Quote from '@/components/Quote'
import Events from '@/components/Events'
import MarqueeSection from '@/components/MarqueeSection'
import Setlist from '@/components/Setlist'
import Sermon from '@/components/Sermon'
import Pastor from '@/components/Pastor'
// import HeadChurch from '@/components/HeadChurch'
import GivingCTA from '@/components/GivingCTA'
import Visit from '@/components/Visit'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <main id="main">
        <About />
        <Quote />
        <Events />
        <MarqueeSection />
        <Setlist />
        <Sermon />
        <Pastor />
        {/* <HeadChurch /> */}
        <GivingCTA />
        <Visit />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
