'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  IconMusic,
  IconBook,
  IconUsers,
  IconWorld,
  type Icon as TablerIcon,
} from '@tabler/icons-react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Pastor from '@/components/Pastor'
import HeadChurch from '@/components/HeadChurch'
import Newsletter from '@/components/Newsletter'
import FAQ from '@/components/FAQ'
import ArrowLink from '@/components/ui/ArrowLink'
import { useRevealOnScroll, useRevealManyOnScroll } from '@/hooks/useRevealOnScroll'

/* Page Hero */
function PageHero() {
  const textRef = useRevealOnScroll()
  const imageInnerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      if (!imageInnerRef.current) return
      const scale = Math.max(1.0, 1.1 - window.scrollY * 0.00018)
      imageInnerRef.current.style.transform = `scale(${scale})`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className="page-hero" aria-labelledby="page-hero-heading">
      <div className="page-hero__content">
        <div ref={textRef} className="void-card">
          <p className="page-hero__label">
            <span className="page-hero__label-line" aria-hidden={true} />
            Our Story
          </p>
          <h1 id="page-hero-heading" className="page-hero__heading">
            A Spirit-led house built for every <em>expression</em> of faith
          </h1>
          <p className="page-hero__sub">
            The Xpression House is a vibrant community of young believers in Ibadan, Nigeria.
            We exist to cultivate passionate worshippers, nurture authentic fellowship, and
            raise a generation fully surrendered to God.
          </p>
        </div>
      </div>
      <div className="page-hero__image-wrap">
        <div className="page-hero__image-inner" ref={imageInnerRef}>
          <Image
            src="/welcome-team.jpg"
            alt="The XPH community gathered together"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority
          />
          <div className="page-hero__image-overlay" aria-hidden={true} />
        </div>
      </div>
    </section>
  )
}

/* Belief / Story Section */
function BeliefSection() {
  const ref = useRevealOnScroll()
  return (
    <section className="about-belief" aria-labelledby="belief-heading">
      <div className="about-belief__inner">
        <div>
          <h2 id="belief-heading" className="about-belief__heading">
            Presence over performance &#8212; built for the kind of <em>worship</em> that changes you
          </h2>
        </div>
        <div ref={ref} className="about-belief__right void-card">
          <div className="about-belief__image">
            <Image
              src="/welcome-team.jpg"
              alt="XPH community in worship"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center top' }}
            />
            <div className="about-belief__image-overlay" aria-hidden={true} />
          </div>
          <p className="about-belief__body">
            Through intentional worship, genuine community, and the living Word, we create
            spaces where God shows up and lives are changed from the inside out. We draw from
            the richness of Scripture and the energy of authentic fellowship to build a house
            where <strong>every expression of faith finds its home.</strong>
          </p>
          <p className="about-belief__body">
            Founded on the conviction that young people are not the church of tomorrow but
            the church of today, XPH is a place of encounter, growth, and belonging &#8212;
            no matter where you are on your journey.
          </p>
          <ArrowLink href="/connect">Become part of the community</ArrowLink>
        </div>
      </div>
    </section>
  )
}

/* Vision and Mission */

function VisionMission() {
  const ref = useRevealManyOnScroll('.vm-card')
  return (
    <section className="vision-mission" aria-labelledby="vm-heading">
      <div className="vision-mission__inner">
        <div className="vision-mission__header">
          <p className="vision-mission__label">
            <span className="vision-mission__label-line" aria-hidden={true} />
            Our Purpose
          </p>
          <h2 id="vm-heading" className="vision-mission__title">
            Everything we do is <em>intentional</em>
          </h2>
        </div>
        <div ref={ref} className="vision-mission__grid">
          <div className="vm-card vm-card--vision void-card">
            <p className="vm-card__label">
              <span className="vm-card__label-dot" aria-hidden={true} />
              Our Vision
            </p>
            <h3 className="vm-card__heading">
              To be a generation that experiences and reflects the fullness of God
            </h3>
            <p className="vm-card__body">
              We envision a church where worship is a lifestyle, where the Word is central,
              and where every young person walks confidently in their God-given identity and
              calling &#8212; a generation that doesn&apos;t just attend church, but{' '}
              <em>is</em> the church.
            </p>
          </div>
          <div className="vm-card vm-card--mission void-card">
            <p className="vm-card__label">
              <span className="vm-card__label-dot" aria-hidden={true} />
              Our Mission
            </p>
            <h3 className="vm-card__heading">The Five M&apos;s</h3>
            <p className="vm-card__body">
              We bring people into{' '}
              <em className="vm-m-word">Membership</em> in God&apos;s Family, and help them
              to <em className="vm-m-word">Maturity</em> in Christlikeness. We equip them
              for <em className="vm-m-word">Ministry</em>, send them out on{' '}
              <em className="vm-m-word">Missions</em> to the world, in order to{' '}
              <em className="vm-m-word">Magnify</em> God&apos;s name.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* Core Pillars */
interface Pillar { num: string; Icon: TablerIcon; title: string; body: string }

const pillars: Pillar[] = [
  {
    num: '01',
    Icon: IconMusic,
    title: 'Worship',
    body: "Worship is more than music — it's a lifestyle of surrender that positions us for transformation and encounter with God.",
  },
  {
    num: '02',
    Icon: IconBook,
    title: 'Word',
    body: 'Scripture is the foundation of all we build. Every message, every gathering, every decision is rooted in the living Word of God.',
  },
  {
    num: '03',
    Icon: IconUsers,
    title: 'Community',
    body: 'We were never meant to do this alone. Authentic relationships are the soil in which faith grows, thrives, and multiplies.',
  },
  {
    num: '04',
    Icon: IconWorld,
    title: 'Mission',
    body: 'Every believer carries a mandate to reflect the Kingdom in their sphere of influence. We are raised to make an impact beyond these walls.',
  },
]

function CorePillars() {
  const ref = useRevealManyOnScroll('.pillar-card')
  return (
    <section className="about-pillars" aria-labelledby="pillars-heading">
      <div className="about-pillars__inner">
        <div className="about-pillars__header">
          <div>
            <p className="about-pillars__label">
              <span className="about-pillars__label-line" aria-hidden={true} />
              Our Foundations
            </p>
            <h2 id="pillars-heading" className="about-pillars__title">
              Four pillars that <em>define</em> everything we do
            </h2>
          </div>
          <p className="about-pillars__desc">
            These aren&apos;t just values on a wall &#8212; they are the heartbeat behind
            every decision, every service, every relationship at XPH.
          </p>
        </div>
        <div ref={ref} className="about-pillars__grid">
          {pillars.map(({ num, Icon: PillarIcon, title, body }) => (
            <article key={num} className="pillar-card void-card">
              <div className="pillar-card__icon">
                <PillarIcon size={20} aria-hidden={true} />
              </div>
              <h3 className="pillar-card__title">{title}</h3>
              <p className="pillar-card__body">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* Community CTA */
function CommunityCTA() {
  const ref = useRevealOnScroll()
  return (
    <section className="about-join-cta" aria-labelledby="cta-heading">
      <div className="about-join-cta__inner">
        <div ref={ref} className="about-join-cta__content void-card">
          <p className="about-join-cta__label">You belong here</p>
          <h2 id="cta-heading" className="about-join-cta__heading">
            Come as you are &#8212; <em>grow</em> into who you were made to be
          </h2>
          <p className="about-join-cta__body">
            Whether you&apos;re just exploring faith or looking for a community to grow in,
            there&apos;s a place for you at The Xpression House. We meet every Sunday at
            8:00 AM in Ibadan, and we&apos;d love to meet you.
          </p>
          <div className="about-join-cta__actions">
            <Link href="/new-member" className="btn--primary">Plan Your Visit</Link>
            <Link href="/connect" className="btn--secondary">Connect With Us</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

/* Page */
export default function AboutPage() {
  return (
    <>
      <Nav />
      <main id="main">
        <PageHero />
        <BeliefSection />
        <VisionMission />
        <CorePillars />
        <Pastor />
        <HeadChurch />
        <CommunityCTA />
        <FAQ />
        
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
