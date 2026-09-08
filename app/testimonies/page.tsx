'use client'

import Image from 'next/image'
import { IconQuote, IconArrowRight } from '@tabler/icons-react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import TestimonyAmen from '@/components/TestimonyAmen'
import TestimonySubmissionForm from '@/components/TestimonySubmissionForm'
import { useRevealOnScroll, useRevealManyOnScroll } from '@/hooks/useRevealOnScroll'
import { testimonies } from '@/app/lib/testimonies'

function truncate(text: string, max = 180) {
  if (text.length <= max) return text
  return text.slice(0, max).trim() + '\u2026'
}

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
          <article key={t.id} className="ev-card void-card">
            <div className="relative w-full aspect-[4/3] overflow-hidden">
              <Image
                src={t.image}
                alt={t.imageAlt}
                fill
                sizes="(max-width: 1023px) 100vw, 33vw"
                className="object-cover object-center"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <IconQuote size={20} aria-hidden={true} className="text-bright-green mb-4" />
              <p className="text-[15px] text-[rgba(240,237,230,0.6)] leading-[1.8] mb-4 flex-1">
                &#8220;{truncate(t.quote)}&#8221;
              </p>
              <a
                href={`/testimonies/${t.id}`}
                className="inline-flex items-center gap-[6px] text-[13px] font-semibold text-bright-green mb-5 no-underline"
              >
                Read full story
                <IconArrowRight size={13} aria-hidden={true} />
              </a>
              <div className="flex items-center justify-between pt-4 border-t border-[rgba(240,237,230,0.06)] mb-4">
                <span className="text-[14px] font-semibold text-cream">{t.name}</span>
                <span className="font-headline text-[10px] font-semibold tracking-[.1em] uppercase text-[rgba(240,237,230,0.35)] py-[3px] px-2 border border-[rgba(240,237,230,0.08)] rounded-full">
                  {t.category}
                </span>
              </div>
              <TestimonyAmen testimonyId={t.id} />
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function ShareTestimonySection() {
  const ref = useRevealOnScroll()
  return (
    <section
      className="max-w-[720px] mx-auto px-12 pb-40 lt-lg:px-8 lt-sm:px-3"
      aria-labelledby="share-testimony-heading"
    >
      <div ref={ref} className="void-card text-center mb-10">
        <h2
          id="share-testimony-heading"
          className="font-quote text-[clamp(28px,3.5vw,40px)] font-light leading-[1.2] text-cream mb-4"
        >
          Has God done something in <em className="italic text-bright-green font-normal">your</em> life?
        </h2>
        <p className="text-[15px] text-[rgba(240,237,230,0.5)] leading-[1.8] max-w-[520px] mx-auto">
          Your story might be exactly what someone else needs to hear. Share it below
          and we may feature it here.
        </p>
      </div>
      <TestimonySubmissionForm />
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
        <ShareTestimonySection />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}