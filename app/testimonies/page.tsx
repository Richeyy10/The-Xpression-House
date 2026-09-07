'use client'

import { IconQuote } from '@tabler/icons-react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import ArrowLink from '@/components/ui/ArrowLink'
import TestimonyAmen from '@/components/TestimonyAmen'
import { useRevealOnScroll, useRevealManyOnScroll } from '@/hooks/useRevealOnScroll'

interface Testimony {
  id: string
  name: string
  category: string
  quote: string
}

const testimonies: Testimony[] = [
  {
    id: 't1',
    name: 'Bukola A.',
    category: 'Healing',
    quote:
      'I came to XPH during the hardest medical season of my life. Through the prayer team and the community that surrounded me, I watched God turn things around when I had nearly given up hope.',
  },
  {
    id: 't2',
    name: 'Tobi O.',
    category: 'Purpose',
    quote:
      'I walked into XPH not knowing what I was looking for. A year later, I am serving on the media team, I have real friendships, and I finally understand what it means to belong somewhere.',
  },
  {
    id: 't3',
    name: 'Chiamaka E.',
    category: 'Provision',
    quote:
      'After months of job searching, I brought it to an Ablaze night and just prayed. Two weeks later, I had an offer. I do not take that timing lightly.',
  },
  {
    id: 't4',
    name: 'David K.',
    category: 'Restoration',
    quote:
      'My relationship with my family was broken for years. Through the counsel and prayer of people at XPH, I made the first call in a long time. We are rebuilding, one conversation at a time.',
  },
  {
    id: 't5',
    name: 'Feyisayo T.',
    category: 'Salvation',
    quote:
      'I visited XPH once, planning never to come back to church again. That one Sunday changed the direction of my life completely.',
  },
  {
    id: 't6',
    name: 'Emeka N.',
    category: 'Community',
    quote:
      'Moving to Ibadan alone was terrifying. My connect group became family faster than I expected — people who actually check on you, not just on Sundays.',
  },
]

function TestimoniesHero() {
  const ref = useRevealOnScroll()
  return (
    <section
      className="pt-[calc(var(--nav-height)+var(--space-3xl))] px-12 pb-16 max-w-[1200px] mx-auto lt-lg:px-8 lt-sm:px-3"
      aria-labelledby="testimonies-hero-heading"
    >
      <div ref={ref} className="void-card">
        <p className="flex items-center gap-[10px] font-headline text-[11px] font-bold uppercase tracking-[.15em] text-bright-green mb-6">
          <span className="w-8 h-[1.5px] bg-bright-green inline-block" aria-hidden={true} />
          Real Stories
        </p>
        <h1
          id="testimonies-hero-heading"
          className="font-quote text-[clamp(52px,8vw,96px)] font-light leading-[1.05] tracking-[-0.02em] text-cream mb-6 lt-sm:text-[36px]"
        >
          Stories of what God has <em className="italic text-bright-green font-normal">done</em>
        </h1>
        <p className="text-[17px] text-[rgba(240,237,230,0.5)] max-w-[560px] leading-[1.8]">
          From healing to restored relationships, these are the words of people in our
          own community &#8212; unedited, and worth believing for yourself.
        </p>
      </div>
    </section>
  )
}

function TestimoniesGrid() {
  const ref = useRevealManyOnScroll('.ev-card')
  return (
    <section
      className="max-w-[1200px] mx-auto px-12 pb-24 lt-lg:px-8 lt-sm:px-3"
      aria-labelledby="testimonies-heading"
    >
      <h2 id="testimonies-heading" className="sr-only">
        Testimonies
      </h2>
      <div ref={ref} className="grid grid-cols-3 gap-6 lt-lg:grid-cols-2 lt-sm:grid-cols-1">
        {testimonies.map((t) => (
          <article key={t.id} className="ev-card void-card p-6">
            <IconQuote size={22} aria-hidden={true} className="text-bright-green mb-4" />
            <p className="text-[15px] text-[rgba(240,237,230,0.6)] leading-[1.8] mb-6">
              &#8220;{t.quote}&#8221;
            </p>
            <div className="flex items-center justify-between pt-4 border-t border-[rgba(240,237,230,0.06)]">
              <span className="text-[14px] font-semibold text-cream">{t.name}</span>
              <span className="font-headline text-[10px] font-semibold tracking-[.1em] uppercase text-[rgba(240,237,230,0.35)] py-[3px] px-2 border border-[rgba(240,237,230,0.08)] rounded-full">
                {t.category}
              </span>
            </div>
            <div className="pt-4">
              <TestimonyAmen testimonyId={t.id} />
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function ShareTestimonyCTA() {
  const ref = useRevealOnScroll()
  return (
    <section className="max-w-[1200px] mx-auto px-12 pb-40 lt-lg:px-8 lt-sm:px-3">
      <div
        ref={ref}
        className="void-card border border-[rgba(240,237,230,0.07)] rounded-[8px] bg-forest-green py-16 px-12 text-center lt-lg:px-8 lt-lg:py-10"
      >
        <h2 className="font-quote text-[clamp(28px,3.5vw,40px)] font-light leading-[1.2] text-cream mb-4">
          Has God done something in <em className="italic text-bright-green font-normal">your</em> life?
        </h2>
        <p className="text-[15px] text-[rgba(240,237,230,0.5)] leading-[1.8] max-w-[520px] mx-auto mb-8">
          Your story might be exactly what someone else needs to hear. Share it with us
          and we may feature it here.
        </p>
        <ArrowLink href="/connect">Share your testimony</ArrowLink>
      </div>
    </section>
  )
}

export default function TestimoniesPage() {
  return (
    <>
      <Nav />
      <main id="main">
        <TestimoniesHero />
        <TestimoniesGrid />
        <ShareTestimonyCTA />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}