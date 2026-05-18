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
    <section className="inner-hero" aria-labelledby="events-hero-heading">
      <div ref={ref} className="void-card">
        <p className="inner-hero__overline">
          <span className="inner-hero__overline-line" aria-hidden={true} />
          What&#8217;s On
        </p>
        <h1 id="events-hero-heading" className="inner-hero__heading">
          Every gathering is an <em>encounter</em>
        </h1>
        <p className="inner-hero__sub">
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
    <section className="ev-featured" aria-labelledby="featured-heading">
      <div ref={ref} className="ev-featured__card void-card">
        <div className="ev-featured__image" aria-hidden={true}>
          <div className="ev-featured__image-glow" />
          <div className="ev-featured__image-overlay" />
          <span className="ev-featured__badge">Featured</span>
        </div>
        <div className="ev-featured__body">
          <p className="ev-featured__tag">Annual Event &#8212; Ibadan</p>
          <h2 id="featured-heading" className="ev-featured__title">
            XPH Annual Conference <em>2025</em>
          </h2>
          <div className="ev-featured__meta">
            <div className="ev-featured__meta-item">
              <IconCalendar size={15} aria-hidden={true} />
              Friday &#8212; Sunday, July 18&#8211;20, 2025
            </div>
            <div className="ev-featured__meta-item">
              <IconClock size={15} aria-hidden={true} />
              Sessions from 9:00 AM daily
            </div>
            <div className="ev-featured__meta-item">
              <IconMapPin size={15} aria-hidden={true} />
              XPH Main Auditorium, Ibadan
            </div>
          </div>
          <p className="ev-featured__desc">
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
    <section className="ev-grid-section" aria-labelledby="upcoming-heading">
      <div className="ev-grid-section__header">
        <h2 id="upcoming-heading" className="ev-grid-section__title">Upcoming Events</h2>
        <ArrowLink href="/connect">Stay in the loop</ArrowLink>
      </div>
      <div ref={ref} className="ev-grid">
        {upcomingEvents.map((ev) => (
          <article key={ev.id} className="ev-card void-card">
            <div className="ev-card__header">
              <span className="ev-card__date">{ev.date}</span>
              <span className="ev-card__tag">{ev.tag}</span>
            </div>
            <div className="ev-card__body">
              <h3 className="ev-card__title">{ev.title}</h3>
              <p className="ev-card__desc">{ev.description}</p>
            </div>
            <div className="ev-card__footer">
              <IconClock size={13} aria-hidden={true} />
              {ev.time}
              <IconMapPin size={13} aria-hidden={true} style={{ marginLeft: 4 }} />
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
