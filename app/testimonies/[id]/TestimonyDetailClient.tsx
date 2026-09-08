'use client'

import Image from 'next/image'
import { IconCalendar, IconArrowLeft, IconArrowRight } from '@tabler/icons-react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import ArrowLink from '@/components/ui/ArrowLink'
import TestimonyAmen from '@/components/TestimonyAmen'
import { useRevealOnScroll, useRevealManyOnScroll } from '@/hooks/useRevealOnScroll'
import type { Testimony } from '@/app/lib/testimonies'

interface TestimonyDetailClientProps {
  testimony: Testimony
  others: Testimony[]
}

function TestimonyHero({ t }: { t: Testimony }) {
  const ref = useRevealOnScroll()
  return (
    <section
      className="pt-[calc(var(--nav-height)+var(--space-3xl))] px-12 pb-12 max-w-[1200px] mx-auto lt-lg:px-8 lt-sm:px-3"
      aria-labelledby="testimony-heading"
    >
      <div ref={ref} className="void-card max-w-[760px]">
        <a
          href="/testimonies"
          className="inline-flex items-center gap-[6px] text-[13px] font-semibold uppercase tracking-[.06em] text-bright-green mb-8 no-underline"
        >
          <IconArrowLeft size={14} aria-hidden={true} />
          Back to the wall
        </a>
        <p className="flex items-center gap-[10px] font-headline text-[11px] font-bold uppercase tracking-[.15em] text-bright-green mb-6">
          <span className="w-8 h-[1.5px] bg-bright-green inline-block" aria-hidden={true} />
          {t.category}
        </p>
        <h1
          id="testimony-heading"
          className="font-quote text-[clamp(32px,5vw,56px)] font-light leading-[1.15] tracking-[-0.01em] text-cream mb-6"
        >
          {t.name}&#8217;s Story
        </h1>
        <div className="flex items-center gap-[6px] text-[14px] text-[rgba(240,237,230,0.45)]">
          <IconCalendar size={14} aria-hidden={true} />
          {t.date}
        </div>
      </div>
    </section>
  )
}

function TestimonyImage({ t }: { t: Testimony }) {
  const ref = useRevealOnScroll()
  return (
    <section className="max-w-[1200px] mx-auto px-12 pb-16 lt-lg:px-8 lt-sm:px-3">
      <div
        ref={ref}
        className="void-card relative w-full aspect-[16/9] rounded-[8px] overflow-hidden bg-forest-green"
      >
        <Image
          src={t.image}
          alt={t.imageAlt}
          fill
          priority
          sizes="(max-width: 1023px) 100vw, 1200px"
          className="object-cover object-center"
        />
      </div>
    </section>
  )
}

function TestimonyStory({ t }: { t: Testimony }) {
  const ref = useRevealOnScroll()
  return (
    <section className="max-w-[1200px] mx-auto px-12 pb-10 lt-lg:px-8 lt-sm:px-3">
      <div ref={ref} className="void-card max-w-[680px] flex flex-col gap-5">
        {t.story.map((paragraph, i) => (
          <p key={i} className="text-[16px] leading-[1.9] text-[rgba(240,237,230,0.55)]">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  )
}

function TestimonyActions({ t }: { t: Testimony }) {
  return (
    <section className="max-w-[1200px] mx-auto px-12 pb-24 lt-lg:px-8 lt-sm:px-3">
      <div className="max-w-[680px] pt-8 border-t border-[rgba(240,237,230,0.07)] flex items-center justify-between flex-wrap gap-4">
        <TestimonyAmen testimonyId={t.id} />
        <ArrowLink href="/testimonies">Share your own story</ArrowLink>
      </div>
    </section>
  )
}

function OtherTestimonies({ others }: { others: Testimony[] }) {
  const ref = useRevealManyOnScroll('.ev-card')
  if (others.length === 0) return null
  return (
    <section
      className="max-w-[1200px] mx-auto px-12 pb-40 lt-lg:px-8 lt-sm:px-3"
      aria-labelledby="other-testimonies-heading"
    >
      <div className="flex items-end justify-between pt-8 border-t border-[rgba(240,237,230,0.07)] mb-12">
        <h2
          className="font-quote text-[36px] font-light text-cream tracking-[-0.01em]"
          id="other-testimonies-heading"
        >
          More Stories
        </h2>
        <ArrowLink href="/testimonies">All testimonies</ArrowLink>
      </div>
      <div ref={ref} className="grid grid-cols-3 gap-6 lt-lg:grid-cols-2 lt-sm:grid-cols-1">
        {others.map((t) => (
          <a key={t.id} href={`/testimonies/${t.id}`} className="ev-card void-card block">
            <div className="relative w-full aspect-[4/3] overflow-hidden">
              <Image
                src={t.image}
                alt={t.imageAlt}
                fill
                sizes="(max-width: 1023px) 100vw, 33vw"
                className="object-cover object-center"
              />
            </div>
            <div className="p-6">
              <p className="text-[14px] text-[rgba(240,237,230,0.45)] leading-[1.7] mb-4">
                &#8220;{t.quote.slice(0, 120)}&#8230;&#8221;
              </p>
              <div className="flex items-center justify-between">
                <span className="text-[14px] font-semibold text-cream">{t.name}</span>
                <IconArrowRight size={14} aria-hidden={true} className="text-bright-green" />
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

export default function TestimonyDetailClient({ testimony, others }: TestimonyDetailClientProps) {
  return (
    <>
      <Nav />
      <main id="main">
        <TestimonyHero t={testimony} />
        <TestimonyImage t={testimony} />
        <TestimonyStory t={testimony} />
        <TestimonyActions t={testimony} />
        <OtherTestimonies others={others} />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}