'use client'

import {
  IconFlame,
  IconCalendar,
  IconMapPin,
  IconClock,
  IconQuote,
  IconMusic,
  IconBook2,
  IconUsers,
  IconBell,
} from '@tabler/icons-react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import FAQ from '@/components/FAQ'
import ArrowLink from '@/components/ui/ArrowLink'
import { useRevealOnScroll, useRevealManyOnScroll } from '@/hooks/useRevealOnScroll'

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

interface AblazeGathering {
  id: string
  date: string
  time: string
  title: string
  location: string
  description: string
}

const ablazeGatherings: AblazeGathering[] = [
  {
    id: 'ab1',
    date: 'Last Friday of the month',
    time: '10:00 PM &#8211; 12:00 AM',
    title: 'Ablaze Night of Prayer',
    location: 'XPH Auditorium, Ibadan',
    description:
      'A late-night gathering of worship and intercession for young people hungry to encounter God without distraction.',
  },
  {
    id: 'ab2',
    date: 'Quarterly',
    time: '5:00 PM',
    title: 'Ablaze Youth Summit',
    location: 'XPH Fellowship Hall',
    description:
      'Teaching, testimonies, and ministration built around a single theme every quarter — for students and young professionals alike.',
  },
]

interface ExpectItem {
  id: string
  icon: React.ElementType
  title: string
  description: string
}

// TODO: adjust copy once this year's theme / schedule is confirmed
const expectItems: ExpectItem[] = [
  {
    id: 'ex1',
    icon: IconMusic,
    title: 'Uninterrupted Worship',
    description:
      'Extended, unhurried worship sets built to make room for God&#8217;s presence — no clock-watching, no rush.',
  },
  {
    id: 'ex2',
    icon: IconBook2,
    title: 'The Word, Unfiltered',
    description:
      'Direct, practical teaching that speaks to the real pressure and real questions young people are carrying.',
  },
  {
    id: 'ex3',
    icon: IconFlame,
    title: 'Altar Encounters',
    description:
      'Dedicated time at the altar to respond, pray, and let God meet you exactly where you are.',
  },
  {
    id: 'ex4',
    icon: IconUsers,
    title: 'Community &amp; Connection',
    description:
      'A room full of young people running after God too — new friendships and a community to stay accountable with.',
  },
]

interface GalleryImage {
  id: string
  src: string
  alt: string
}

// TODO: replace with real photos from the last edition, dropped into /public/images/ablaze/
const galleryImages: GalleryImage[] = [
  { id: 'g1', src: '/ablaze/anjola.jpg', alt: 'Worship session at the last Ablaze edition' },
  { id: 'g2', src: '/ablaze/people.jpg', alt: 'Crowd gathered during Ablaze Night of Prayer' },
  { id: 'g3', src: '/ablaze/shade.jpg', alt: 'Altar call moment at Ablaze' },
  { id: 'g4', src: '/ablaze/gethsy.jpg', alt: 'Ministration time on the Ablaze stage' },
  { id: 'g5', src: '/ablaze/ewa.jpg', alt: 'Young people in prayer at Ablaze' },
  { id: 'g6', src: '/ablaze/anjola.jpg', alt: 'Closing moments of the last Ablaze edition' },
]

interface Testimony {
  id: string
  quote: string
  name: string
  role: string
}

// TODO: swap in real testimonies (with permission) from people who attended last edition
const testimonies: Testimony[] = [
  {
    id: 't1',
    quote:
      'I walked in exhausted and walked out changed. The altar time alone was worth staying up for &#8212; I heard from God in a way I hadn&#8217;t in months.',
    name: 'Bukola Oladipo',
    role: 'Attended last edition',
  },
  {
    id: 't2',
    quote:
      'It wasn&#8217;t a performance, it was genuine. The worship felt like it went on forever in the best way, and I left with actual clarity, not just a good feeling.',
    name: 'Busola Animashaun',
    role: 'Attended last edition',
  },
  {
    id: 't3',
    quote:
      'I came with a friend not really expecting much. The teaching was so direct and practical that I&#8217;m still applying it months later.',
    name: 'Segun Tunde',
    role: 'Attended last edition',
  },
  {
    id: 't4',
    quote:
      'Ablaze is where I found my community at XPH. I met people that night I&#8217;m still doing life with.',
    name: 'Ojie Osehojie',
    role: 'Attended last edition',
  },
]

/* ------------------------------------------------------------------ */
/* Sections                                                            */
/* ------------------------------------------------------------------ */

function AblazeHero() {
  const ref = useRevealOnScroll()
  return (
    <section className="relative pt-[var(--nav-height)] min-h-[640px] flex items-end overflow-hidden lt-sm:min-h-[520px]">
      <video
        src="/videos/ablaze.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        className="absolute inset-0 w-full h-full object-cover object-center"
        aria-hidden={true}
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-deep-green via-[rgba(9,26,20,0.55)] to-[rgba(9,26,20,0.15)]"
        aria-hidden={true}
      />
      <div
        ref={ref}
        className="relative z-10 max-w-[1200px] mx-auto w-full px-12 pb-20 lt-lg:px-8 lt-sm:px-3"
      >
        <p className="flex items-center gap-[10px] font-headline text-[11px] font-bold uppercase tracking-[.15em] text-bright-green mb-6">
          <IconFlame size={16} aria-hidden={true} />
          An Annual Movement Within XPH
        </p>
        <h1 className="font-quote text-[clamp(52px,8vw,96px)] font-light leading-[1.05] tracking-[-0.02em] text-cream mb-6 lt-sm:text-[36px]">
          Stay <em className="italic text-bright-green font-normal">Ablaze</em>
        </h1>
        <p className="text-[17px] text-[rgba(240,237,230,0.6)] max-w-[560px] leading-[1.8]">
          Ablaze is our youth prayer and fire movement &#8212; late nights of worship,
          honest intercession, and a community determined to burn bright for God.
          Every year, it all builds to one weekend.
        </p>
      </div>
    </section>
  )
}

function AblazeAbout() {
  const ref = useRevealOnScroll()
  return (
    <section
      className="max-w-[1200px] mx-auto px-12 py-24 lt-lg:px-8 lt-sm:px-3"
      aria-labelledby="ablaze-about-heading"
    >
      <div ref={ref} className="void-card max-w-[680px]">
        <h2
          id="ablaze-about-heading"
          className="font-quote text-[36px] font-light text-cream tracking-[-0.01em] mb-6"
        >
          More than an event &#8212; a <em className="italic text-bright-green font-normal">posture</em>
        </h2>
        <p className="text-[15px] text-[rgba(240,237,230,0.5)] leading-[1.8] mb-4">
          Ablaze started as a small group of young people staying back after service to
          pray. It&#8217;s grown into one of the most anticipated rhythms at XPH &#8212; a
          space where students and young professionals bring their real questions,
          real pressure, and real need for God, and leave changed.
        </p>
        <p className="text-[15px] text-[rgba(240,237,230,0.5)] leading-[1.8]">
          No script, no performance. Just worship, the Word, and time given fully to
          God&#8217;s presence &#8212; and once a year, that same spirit fills a whole
          weekend.
        </p>
      </div>
    </section>
  )
}

function AblazeExpect() {
  const ref = useRevealManyOnScroll('.expect-card')
  return (
    <section
      className="max-w-[1200px] mx-auto px-12 pb-24 lt-lg:px-8 lt-sm:px-3"
      aria-labelledby="ablaze-expect-heading"
    >
      <div className="flex items-end justify-between pt-8 border-t border-[rgba(240,237,230,0.07)] mb-12">
        <div>
          <p className="font-headline text-[11px] font-bold uppercase tracking-[.15em] text-bright-green mb-3">
            This Year&#8217;s Edition
          </p>
          <h2
            className="font-quote text-[36px] font-light text-cream tracking-[-0.01em]"
            id="ablaze-expect-heading"
          >
            What to expect
          </h2>
        </div>
      </div>
      <div ref={ref} className="grid grid-cols-4 gap-6 lt-lg:grid-cols-2 lt-sm:grid-cols-1">
        {expectItems.map((item) => {
          const Icon = item.icon
          return (
            <div key={item.id} className="expect-card void-card">
              <Icon size={22} aria-hidden={true} className="text-bright-green mb-5" />
              <h3 className="font-quote text-[19px] font-normal text-cream leading-[1.3] mb-2">
                {item.title}
              </h3>
              <p className="text-[14px] text-[rgba(240,237,230,0.45)] leading-[1.7]">
                {item.description}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

function AblazeGallery() {
  const ref = useRevealManyOnScroll('.gallery-item')
  return (
    <section
      className="max-w-[1200px] mx-auto px-12 pb-24 lt-lg:px-8 lt-sm:px-3"
      aria-labelledby="ablaze-gallery-heading"
    >
      <div className="flex items-end justify-between pt-8 border-t border-[rgba(240,237,230,0.07)] mb-12">
        <h2
          className="font-quote text-[36px] font-light text-cream tracking-[-0.01em]"
          id="ablaze-gallery-heading"
        >
          Moments from the last edition
        </h2>
      </div>
      <div ref={ref} className="grid grid-cols-3 gap-4 lt-lg:grid-cols-2 lt-sm:grid-cols-1">
        {galleryImages.map((img) => (
          <div
            key={img.id}
            className="gallery-item void-card p-0 overflow-hidden aspect-[4/5]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  )
}

function AblazeTestimonials() {
  const ref = useRevealManyOnScroll('.testimony-card')
  return (
    <section
      className="max-w-[1200px] mx-auto px-12 pb-24 lt-lg:px-8 lt-sm:px-3"
      aria-labelledby="ablaze-testimonials-heading"
    >
      <div className="flex items-end justify-between pt-8 border-t border-[rgba(240,237,230,0.07)] mb-12">
        <h2
          className="font-quote text-[36px] font-light text-cream tracking-[-0.01em]"
          id="ablaze-testimonials-heading"
        >
          What people are saying
        </h2>
      </div>
      <div ref={ref} className="grid grid-cols-2 gap-6 lt-sm:grid-cols-1">
        {testimonies.map((t) => (
          <article key={t.id} className="testimony-card void-card">
            <IconQuote size={20} aria-hidden={true} className="text-bright-green mb-4" />
            <p className="font-quote text-[17px] font-light italic text-cream leading-[1.6] mb-5">
              &#8220;{t.quote}&#8221;
            </p>
            <p className="font-headline text-[11px] font-bold uppercase tracking-[.12em] text-[rgba(240,237,230,0.5)]">
              {t.name} <span className="text-[rgba(240,237,230,0.3)]">&#8212; {t.role}</span>
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}

function AblazeNextEdition() {
  const ref = useRevealOnScroll()
  return (
    <section className="max-w-[1200px] mx-auto px-12 pb-24 lt-lg:px-8 lt-sm:px-3">
      <div
        ref={ref}
        className="void-card flex items-center justify-between gap-8 py-12 lt-sm:flex-col lt-sm:items-start lt-sm:gap-6"
      >
        <div className="max-w-[520px]">
          <p className="flex items-center gap-[10px] font-headline text-[11px] font-bold uppercase tracking-[.15em] text-bright-green mb-4">
            <IconBell size={16} aria-hidden={true} />
            The Next Edition
          </p>
          <h2 className="font-quote text-[28px] font-light text-cream tracking-[-0.01em] mb-3 lt-sm:text-[24px]">
            Dates &amp; theme dropping soon
          </h2>
          <p className="text-[14px] text-[rgba(240,237,230,0.5)] leading-[1.8]">
            Be the first to know when registration opens, the theme is revealed, and
            the schedule goes live.
          </p>
        </div>
        <ArrowLink href="/connect">Get Ablaze reminders</ArrowLink>
      </div>
    </section>
  )
}

function AblazeGatherings() {
  const ref = useRevealManyOnScroll('.ev-card')
  return (
    <section
      className="max-w-[1200px] mx-auto px-12 pb-40 lt-lg:px-8 lt-sm:px-3"
      aria-labelledby="ablaze-gatherings-heading"
    >
      <div className="flex items-end justify-between pt-8 border-t border-[rgba(240,237,230,0.07)] mb-12">
        <h2
          className="font-quote text-[36px] font-light text-cream tracking-[-0.01em]"
          id="ablaze-gatherings-heading"
        >
          Regular Ablaze Gatherings
        </h2>
        <ArrowLink href="/connect">Get Ablaze reminders</ArrowLink>
      </div>
      <div ref={ref} className="grid grid-cols-2 gap-6 lt-sm:grid-cols-1">
        {ablazeGatherings.map((g) => (
          <article key={g.id} className="ev-card void-card">
            <div className="px-6 pt-6">
              <span className="font-headline text-[11px] font-bold tracking-[.12em] uppercase text-bright-green">
                {g.date}
              </span>
            </div>
            <div className="pt-4 px-6 pb-6 flex-1">
              <h3 className="font-quote text-[22px] font-normal text-cream leading-[1.25] mb-2">
                {g.title}
              </h3>
              <p className="text-[14px] text-[rgba(240,237,230,0.45)] leading-[1.7]">
                {g.description}
              </p>
            </div>
            <div className="py-4 px-6 border-t border-[rgba(240,237,230,0.06)] flex items-center gap-[6px] text-[13px] text-[rgba(240,237,230,0.4)]">
              <IconClock size={13} aria-hidden={true} className="text-[rgba(240,237,230,0.3)] flex-shrink-0" />
              {g.time}
              <IconMapPin size={13} aria-hidden={true} className="text-[rgba(240,237,230,0.3)] flex-shrink-0 ml-1" />
              {g.location}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function AblazePage() {
  return (
    <>
      <Nav />
      <main id="main">
        <AblazeHero />
        <AblazeAbout />
        <AblazeExpect />
        <AblazeGallery />
        <AblazeTestimonials />
        <AblazeNextEdition />
        <AblazeGatherings />
        <FAQ />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}