'use client'

import {
  IconCalendar,
  IconMapPin,
  IconClock,
} from '@tabler/icons-react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import FAQ from '@/components/FAQ'
import ArrowLink from '@/components/ui/ArrowLink'
import { useRevealOnScroll, useRevealManyOnScroll } from '@/hooks/useRevealOnScroll'

interface UpcomingEvent {
  id: string
  date: string
  time: string
  title: string
  location: string
  description: string
  tag: string
}

const upcomingEvents: UpcomingEvent[] = [
  {
    id: 'ev1',
    date: 'Sun, Jun 1',
    time: '8:00 AM',
    title: 'Sunday Celebration Service',
    location: 'XPH Auditorium, Ibadan',
    description: 'Our weekly gathering to worship, receive the Word, and grow together in genuine community.',
    tag: 'Weekly',
  },
  {
    id: 'ev2',
    date: 'Fri, Jun 6',
    time: '6:00 PM',
    title: 'Friday Night Prayer',
    location: 'XPH Auditorium, Ibadan',
    description: 'An evening of corporate intercession, live worship, and seeking the face of God together.',
    tag: 'Prayer',
  },
  {
    id: 'ev3',
    date: 'Sat, Jun 14',
    time: '10:00 AM',
    title: 'New Members Orientation',
    location: 'XPH Fellowship Hall',
    description: 'A relaxed welcome session for first-timers to learn our vision, values, and how to plug in.',
    tag: 'Welcome',
  },
  {
    id: 'ev4',
    date: 'Sun, Jun 22',
    time: '8:00 AM',
    title: 'Communion Sunday',
    location: 'XPH Auditorium, Ibadan',
    description: 'We gather around the Lord\'s Table in remembrance, gratitude, and renewed covenant.',
    tag: 'Special',
  },
  {
    id: 'ev5',
    date: 'Fri, Jun 27',
    time: '5:00 PM',
    title: 'Youth Community Night',
    location: 'XPH Fellowship Hall',
    description: 'A laid-back evening for young people to connect, have fun, and build real friendships.',
    tag: 'Community',
  },
]

function EventsHero() {
  const ref = useRevealOnScroll()
  return (
    <section
      className="pt-[calc(var(--nav-height)+var(--space-3xl))] px-12 pb-16 max-w-[1200px] mx-auto lt-lg:px-8 lt-sm:px-3"
      aria-labelledby="events-hero-heading"
    >
      <div ref={ref} className="void-card">
        <p className="flex items-center gap-[10px] font-headline text-[11px] font-bold uppercase tracking-[.15em] text-bright-green mb-6">
          <span className="w-8 h-[1.5px] bg-bright-green inline-block" aria-hidden={true} />
          What&#8217;s On
        </p>
        <h1
          id="events-hero-heading"
          className="font-quote text-[clamp(52px,8vw,96px)] font-light leading-[1.05] tracking-[-0.02em] text-cream mb-6 lt-sm:text-[36px]"
        >
          Every gathering is an <em className="italic text-bright-green font-normal">encounter</em>
        </h1>
        <p className="text-[17px] text-[rgba(240,237,230,0.5)] max-w-[560px] leading-[1.8]">
          From Sunday services to special events, something is always happening at XPH.
          Come as you are and experience God with us.
        </p>
      </div>
    </section>
  )
}

function FeaturedEvent() {
  const ref = useRevealOnScroll()
  return (
    <section
      className="max-w-[1200px] mx-auto px-12 pb-20 lt-lg:px-8 lt-sm:px-3"
      aria-labelledby="featured-heading"
    >
      <div
        ref={ref}
        className="grid grid-cols-[1fr_1.1fr] border border-[rgba(240,237,230,0.07)] rounded-[8px] overflow-hidden bg-forest-green min-h-[440px] relative void-card lt-lg:grid-cols-1 lt-lg:min-h-0"
      >
        <div className="ev-featured__image relative" aria-hidden={true}>
          <video
            src="/videos/ablaze.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="ev-featured__image-glow" />
          <div className="" />
          <span className="absolute top-6 left-6 bg-bright-green text-deep-green font-headline text-[10px] font-bold tracking-[.14em] uppercase py-[5px] px-3 rounded-full">
            Featured
          </span>
        </div>
        <div className="py-16 px-12 flex flex-col justify-center">
          <p className="font-headline text-[11px] font-bold tracking-[.14em] uppercase text-teal mb-4">
            Annual Event &#8212; Ibadan
          </p>
          <h2
            id="featured-heading"
            className="font-quote text-[clamp(28px,3.5vw,44px)] font-normal leading-[1.15] tracking-[-0.01em] text-cream mb-8"
          >
            XPH Annual Conference <em className="italic text-bright-green">2026</em>
          </h2>
          <div className="flex flex-col gap-[10px] mb-8">
            <div className="flex items-center gap-[10px] text-[14px] text-[rgba(240,237,230,0.5)]">
              <IconCalendar size={15} aria-hidden={true} className="text-bright-green flex-shrink-0" />
              Friday &#8212; Sunday, October 18&#8211;20, 2026
            </div>
            <div className="flex items-center gap-[10px] text-[14px] text-[rgba(240,237,230,0.5)]">
              <IconClock size={15} aria-hidden={true} className="text-bright-green flex-shrink-0" />
              Sessions from 9:00 AM daily
            </div>
            <div className="flex items-center gap-[10px] text-[14px] text-[rgba(240,237,230,0.5)]">
              <IconMapPin size={15} aria-hidden={true} className="text-bright-green flex-shrink-0" />
              XPH Main Auditorium, Ibadan
            </div>
          </div>
          <p className="text-[15px] text-[rgba(240,237,230,0.5)] leading-[1.8] mb-8">
            Three days of powerful worship, deep teaching, and kingdom fellowship with the
            entire XPH family. Expect breakthrough, genuine community, and encounters with
            God that will mark the rest of your year.
          </p>
          <ArrowLink href="/connect">Register your interest</ArrowLink>
        </div>
      </div>
    </section>
  )
}

function UpcomingEvents() {
  const ref = useRevealManyOnScroll('.ev-card')
  return (
    <section
      className="max-w-[1200px] mx-auto px-12 pb-40 lt-lg:px-8 lt-sm:px-3"
      aria-labelledby="upcoming-heading"
    >
      <div className="flex items-end justify-between pt-8 border-t border-[rgba(240,237,230,0.07)] mb-12">
        <h2 className="font-quote text-[36px] font-light text-cream tracking-[-0.01em]" id="upcoming-heading">
          Upcoming Events
        </h2>
        <ArrowLink href="/connect">Stay in the loop</ArrowLink>
      </div>
      <div ref={ref} className="grid grid-cols-3 gap-6 lt-lg:grid-cols-2 lt-sm:grid-cols-1">
        {upcomingEvents.map((ev) => (
          <article key={ev.id} className="ev-card void-card">
            <div className="px-6 pt-6 flex items-center justify-between">
              <span className="font-headline text-[11px] font-bold tracking-[.12em] uppercase text-bright-green">
                {ev.date}
              </span>
              <span className="font-headline text-[10px] font-semibold tracking-[.1em] uppercase text-[rgba(240,237,230,0.35)] py-[3px] px-2 border border-[rgba(240,237,230,0.08)] rounded-full">
                {ev.tag}
              </span>
            </div>
            <div className="pt-4 px-6 pb-6 flex-1">
              <h3 className="font-quote text-[22px] font-normal text-cream leading-[1.25] mb-2">
                {ev.title}
              </h3>
              <p className="text-[14px] text-[rgba(240,237,230,0.45)] leading-[1.7]">
                {ev.description}
              </p>
            </div>
            <div className="py-4 px-6 border-t border-[rgba(240,237,230,0.06)] flex items-center gap-[6px] text-[13px] text-[rgba(240,237,230,0.4)]">
              <IconClock size={13} aria-hidden={true} className="text-[rgba(240,237,230,0.3)] flex-shrink-0" />
              {ev.time}
              <IconMapPin size={13} aria-hidden={true} className="text-[rgba(240,237,230,0.3)] flex-shrink-0 ml-1" />
              {ev.location}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default function EventsPage() {
  return (
    <>
      <Nav />
      <main id="main">
        <EventsHero />
        <FeaturedEvent />
        <UpcomingEvents />
        <FAQ />
        
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
