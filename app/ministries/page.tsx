'use client'

import Image from 'next/image'
import {
  IconMusic,
  IconVideo,
  IconUsers,
  IconMask,
  IconShieldCheck,
  IconArrowRight,
} from '@tabler/icons-react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import FAQ from '@/components/FAQ'
import ArrowLink from '@/components/ui/ArrowLink'
import { useRevealOnScroll, useRevealManyOnScroll } from '@/hooks/useRevealOnScroll'

interface Ministry {
  id: string
  icon: React.ElementType
  name: string
  tag: string
  description: string
  lead: string
  image: string
  imageAlt: string
}

const ministries: Ministry[] = [
  {
    id: 'choir',
    icon: IconMusic,
    name: 'Choir',
    tag: 'Worship',
    description:
      'Leads the church in sung worship every Sunday and at special services, blending live instrumentation with contemporary and gospel sound.',
    lead: 'Rehearsals: Saturdays, 4:00 PM',
    image: '/ministries/choir.jpg',
    imageAlt: 'The XPH choir leading worship',
  },
  {
    id: 'media',
    icon: IconVideo,
    name: 'Media',
    tag: 'Production',
    description:
      'Runs livestream, sound, photography, and video for every gathering — the team behind the scenes making sure the message reaches beyond the room.',
    lead: 'Open to first-timers with an interest in tech',
    image: '/ministries/media.jpg',
    imageAlt: 'The media team running sound and camera',
  },
  {
    id: 'gospel-project',
    icon: IconUsers,
    name: 'Gospel Project',
    tag: 'Dance',
    description:
      'Our dance ministry — expressing worship and telling scripture through movement at services, events, and outreach programs.',
    lead: 'Rehearsals: Fridays, 5:00 PM',
    image: '/ministries/gospel-project.jpg',
    imageAlt: 'The Gospel Project dance team performing',
  },
  {
    id: 'drama',
    icon: IconMask,
    name: 'Drama',
    tag: 'Storytelling',
    description:
      'Brings scripture and everyday testimony to life on stage — sketches, skits, and short performances woven into services and special events.',
    lead: 'No experience required, just a willing heart',
    image: '/ministries/drama.jpg',
    imageAlt: 'The drama team performing a sketch on stage',
  },
  {
    id: 'protocol',
    icon: IconShieldCheck,
    name: 'Protocol',
    tag: 'Hospitality',
    description:
      'The first faces you meet — ushering, welcome, and making sure every person who walks through our doors feels seen and taken care of.',
    lead: 'Serves every Sunday, on a rotation',
    image: '/ministries/protocol.jpg',
    imageAlt: 'The protocol team welcoming guests at the door',
  },
]

function MinistriesHero() {
  const ref = useRevealOnScroll()
  return (
    <section
      className="pt-[calc(var(--nav-height)+var(--space-3xl))] px-12 pb-16 max-w-[1200px] mx-auto lt-lg:px-8 lt-sm:px-3"
      aria-labelledby="ministries-hero-heading"
    >
      <div ref={ref} className="void-card">
        <p className="flex items-center gap-[10px] font-headline text-[11px] font-bold uppercase tracking-[.15em] text-bright-green mb-6">
          <span className="w-8 h-[1.5px] bg-bright-green inline-block" aria-hidden={true} />
          Get Connected
        </p>
        <h1
          id="ministries-hero-heading"
          className="font-quote text-[clamp(52px,8vw,96px)] font-light leading-[1.05] tracking-[-0.02em] text-cream mb-6 lt-sm:text-[36px]"
        >
          Find your place, and <em className="italic text-bright-green font-normal">serve</em>
        </h1>
        <p className="text-[17px] text-[rgba(240,237,230,0.5)] max-w-[560px] leading-[1.8]">
          Every gift has a home at XPH. Explore our ministries, discover where you fit,
          and start serving alongside people who&#8217;ll become family.
        </p>
      </div>
    </section>
  )
}

function MinistriesGrid() {
  const ref = useRevealManyOnScroll('.ev-card')
  return (
    <section
      className="max-w-[1200px] mx-auto px-12 pb-40 lt-lg:px-8 lt-sm:px-3"
      aria-labelledby="ministries-heading"
    >
      <div className="flex items-end justify-between pt-8 border-t border-[rgba(240,237,230,0.07)] mb-12">
        <h2
          className="font-quote text-[36px] font-light text-cream tracking-[-0.01em]"
          id="ministries-heading"
        >
          Our Ministries
        </h2>
        <ArrowLink href="/connect">Not sure where to start?</ArrowLink>
      </div>
      <div ref={ref} className="grid grid-cols-3 gap-6 lt-lg:grid-cols-2 lt-sm:grid-cols-1">
        {ministries.map((m) => {
          const Icon = m.icon
          return (
            <article key={m.id} className="ev-card void-card">
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <Image
                  src={m.image}
                  alt={m.imageAlt}
                  fill
                  sizes="(max-width: 1023px) 100vw, 33vw"
                  className="object-cover object-center"
                />
                <span className="absolute top-4 left-4 w-10 h-10 rounded-full bg-[rgba(10,10,10,0.55)] backdrop-blur-sm flex items-center justify-center">
                  <Icon size={18} aria-hidden={true} className="text-bright-green" />
                </span>
                <span className="absolute top-4 right-4 font-headline text-[10px] font-semibold tracking-[.1em] uppercase text-cream py-[3px] px-2 bg-[rgba(10,10,10,0.55)] backdrop-blur-sm border border-[rgba(240,237,230,0.15)] rounded-full">
                  {m.tag}
                </span>
              </div>
              <div className="pt-4 px-6 pb-6 flex-1">
                <h3 className="font-quote text-[22px] font-normal text-cream leading-[1.25] mb-2">
                  {m.name}
                </h3>
                <p className="text-[14px] text-[rgba(240,237,230,0.45)] leading-[1.7]">
                  {m.description}
                </p>
              </div>
              <div className="py-4 px-6 border-t border-[rgba(240,237,230,0.06)] flex items-center justify-between">
                <span className="text-[13px] text-[rgba(240,237,230,0.4)]">{m.lead}</span>
                <ArrowLink href="/connect">
                  <IconArrowRight size={14} aria-hidden={true} />
                </ArrowLink>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default function MinistriesPage() {
  return (
    <>
      <Nav />
      <main id="main">
        <MinistriesHero />
        <MinistriesGrid />
        <FAQ />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}