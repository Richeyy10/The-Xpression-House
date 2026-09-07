'use client'

import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import PrayerRequestForm from '@/components/PrayerRequestForm'
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll'

function PrayerHero() {
  const ref = useRevealOnScroll()
  return (
    <section
      className="pt-[calc(var(--nav-height)+var(--space-3xl))] px-12 pb-16 max-w-[1200px] mx-auto lt-lg:px-8 lt-sm:px-3"
      aria-labelledby="prayer-hero-heading"
    >
      <div ref={ref} className="void-card">
        <p className="flex items-center gap-[10px] font-headline text-[11px] font-bold uppercase tracking-[.15em] text-bright-green mb-6">
          <span className="w-8 h-[1.5px] bg-bright-green inline-block" aria-hidden={true} />
          We&#8217;d Love To Pray With You
        </p>
        <h1
          id="prayer-hero-heading"
          className="font-quote text-[clamp(44px,7vw,80px)] font-light leading-[1.1] tracking-[-0.02em] text-cream mb-6 lt-sm:text-[32px]"
        >
          Bring it <em className="italic text-bright-green font-normal">here</em>
        </h1>
        <p className="text-[17px] text-[rgba(240,237,230,0.5)] max-w-[560px] leading-[1.8]">
          Whatever you&#8217;re carrying, you don&#8217;t have to carry it alone. Share your
          request and our prayer team will stand with you in faith.
        </p>
      </div>
    </section>
  )
}

export default function PrayerRequestPage() {
  return (
    <>
      <Nav />
      <main id="main">
        <PrayerHero />
        <section className="max-w-[720px] mx-auto px-12 pb-40 lt-lg:px-8 lt-sm:px-3">
          <PrayerRequestForm />
        </section>
      </main>
      <Footer />
    </>
  )
}