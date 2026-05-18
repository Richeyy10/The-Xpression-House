'use client'

import { useState, FormEvent } from 'react'
import Link from 'next/link'
import {
  IconUsers,
  IconHeart,
  IconBook,
  IconStar,
  IconCheck,
} from '@tabler/icons-react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import FAQ from '@/components/FAQ'
import { useRevealOnScroll, useRevealManyOnScroll } from '@/hooks/useRevealOnScroll'

interface Step {
  num: string
  Icon: typeof IconHeart
  title: string
  body: string
}

const steps: Step[] = [
  {
    num: '01',
    Icon: IconHeart,
    title: 'Come to a Sunday Service',
    body: 'Our doors open at 7:30 AM and service begins at 8:00 AM every Sunday. No pressure, no expectations &#8212; just come as you are and soak it all in.',
  },
  {
    num: '02',
    Icon: IconUsers,
    title: 'Connect With Our Welcome Team',
    body: 'After service, look for anyone in a Welcome Team lanyard. They are there to greet you, answer questions, and help you feel at home from day one.',
  },
  {
    num: '03',
    Icon: IconBook,
    title: 'Attend New Members Orientation',
    body: 'Our orientation sessions run quarterly &#8212; a relaxed way to learn who we are, what we believe, and how to find your place within the XPH community.',
  },
  {
    num: '04',
    Icon: IconStar,
    title: 'Find Your Community',
    body: 'Plug into a connect group, volunteer on a ministry team, or simply keep showing up. Real community grows in the in-between moments.',
  },
]

const hearAboutOptions = [
  'A friend or family member',
  'Social media (Instagram, Facebook, TikTok)',
  'YouTube',
  'Google / online search',
  'I walked past the church',
  'A church event or outreach',
  'Other',
]

type FormState = 'idle' | 'submitting' | 'success'

function NmHero() {
  const ref = useRevealOnScroll()
  return (
    <section className="inner-hero" aria-labelledby="nm-heading">
      <div ref={ref} className="void-card">
        <p className="inner-hero__overline">
          <span className="inner-hero__overline-line" aria-hidden={true} />
          Welcome
        </p>
        <h1 id="nm-heading" className="inner-hero__heading">
          You&#8217;re in the <em>right place</em>
        </h1>
        <p className="inner-hero__sub">
          Whether you have been searching for a church home or just wandered in out of
          curiosity &#8212; we are glad you are here. Here is everything you need to take
          your next step.
        </p>
        <div style={{ display: 'flex', gap: 'var(--space-sm)', marginTop: 'var(--space-xl)', flexWrap: 'wrap' }}>
          <Link href="#first-timer" className="btn--primary">Plan Your Visit</Link>
          <Link href="#steps" className="btn--secondary">How It Works</Link>
        </div>
      </div>
    </section>
  )
}

function NmInfo() {
  return (
    <section className="nm-info" aria-label="Service information">
      <div className="nm-info__inner">
        <div className="nm-info__item">
          <span className="nm-info__overline">Service Time</span>
          <span className="nm-info__value">Sundays at 8 AM</span>
          <span className="nm-info__note">Doors open at 7:30 AM</span>
        </div>
        <div className="nm-info__item">
          <span className="nm-info__overline">Location</span>
          <span className="nm-info__value">Ibadan, Oyo State</span>
          <span className="nm-info__note">Contact us for the exact address and directions</span>
        </div>
        <div className="nm-info__item">
          <span className="nm-info__overline">Children</span>
          <span className="nm-info__value">XPH Kids</span>
          <span className="nm-info__note">Running concurrently with the main service</span>
        </div>
      </div>
    </section>
  )
}

function NmSteps() {
  const ref = useRevealManyOnScroll('.nm-step')
  return (
    <section className="nm-steps" id="steps" aria-labelledby="steps-heading">
      <div className="nm-steps__header">
        <div>
          <p className="nm-steps__overline">
            <span className="nm-steps__overline-line" aria-hidden={true} />
            Your Journey
          </p>
          <h2 id="steps-heading" className="nm-steps__title">
            Four simple steps to <em>finding your home</em>
          </h2>
        </div>
        <p className="nm-steps__desc">
          We know walking into a new church can feel daunting. These steps are designed to
          make the journey as natural and welcoming as possible &#8212; at your own pace.
        </p>
      </div>
      <div ref={ref} className="nm-steps__grid">
        {steps.map(({ num, Icon: StepIcon, title, body }) => (
          <article key={num} className="nm-step void-card">
            <StepIcon size={110} className="nm-step__bg-icon" aria-hidden={true} />
            <div className="nm-step__icon">
              <StepIcon size={20} aria-hidden={true} />
            </div>
            <h3 className="nm-step__title">{title}</h3>
            <p className="nm-step__body" dangerouslySetInnerHTML={{ __html: body }} />
          </article>
        ))}
      </div>
    </section>
  )
}

function FirstTimerForm() {
  const ref = useRevealOnScroll()
  const [formState, setFormState] = useState<FormState>('idle')
  const [data, setData] = useState({
    fullName: '', email: '', phone: '', heardAbout: '', note: '',
  })

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setData((p) => ({ ...p, [e.target.name]: e.target.value }))

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    setFormState('submitting')
    setTimeout(() => setFormState('success'), 1400)
  }

  return (
    <section className="nm-first-timer" id="first-timer" aria-labelledby="first-timer-heading">
      <div ref={ref} className="nm-first-timer__inner void-card">

        {formState === 'success' ? (
          <div className="form-success" role="status">
            <div className="form-success__check">
              <IconCheck size={32} aria-hidden={true} />
            </div>
            <p className="form-success__title">We&#8217;ll see you Sunday</p>
            <p className="form-success__body">
              Thanks for letting us know you&#8217;re coming. Our welcome team will be
              looking out for you. Feel free to reach out on the Connect page if you have
              any questions before then.
            </p>
          </div>
        ) : (
          <>
            <div className="nm-first-timer__header">
              <p className="nm-first-timer__overline">
                <span className="nm-first-timer__overline-line" aria-hidden={true} />
                First-Timer
              </p>
              <h2 id="first-timer-heading" className="nm-first-timer__title">
                Let us know you&#8217;re <em>coming</em>
              </h2>
              <p className="nm-first-timer__desc">
                Fill this in before your first visit and our welcome team will make sure
                you feel right at home from the moment you walk in.
              </p>
            </div>

            <form onSubmit={onSubmit} noValidate className="nm-first-timer__form">
              <div className="form-field--row">
                <div className="form-field">
                  <label htmlFor="ft-fullName">Full Name</label>
                  <input id="ft-fullName" name="fullName" type="text"
                    placeholder="Emeka Adeyemi" value={data.fullName} onChange={onChange} required />
                </div>
                <div className="form-field">
                  <label htmlFor="ft-phone">Phone <span className="form-field__optional">(optional)</span></label>
                  <input id="ft-phone" name="phone" type="tel"
                    placeholder="+234 800 000 0000" value={data.phone} onChange={onChange} />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="ft-email">Email Address</label>
                <input id="ft-email" name="email" type="email"
                  placeholder="you@example.com" value={data.email} onChange={onChange} required />
              </div>

              <div className="form-field">
                <label htmlFor="ft-heardAbout">How did you hear about us?</label>
                <select id="ft-heardAbout" name="heardAbout" value={data.heardAbout} onChange={onChange} required>
                  <option value="" disabled>Select an option&#8230;</option>
                  {hearAboutOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>

              <div className="form-field">
                <label htmlFor="ft-note">
                  Anything you&#8217;d like us to know? <span className="form-field__optional">(optional)</span>
                </label>
                <textarea id="ft-note" name="note" rows={4}
                  placeholder="Prayer requests, questions, accessibility needs&#8230;"
                  value={data.note} onChange={onChange} />
              </div>

              <div className="form-actions">
                <button type="submit" className="btn--primary" disabled={formState === 'submitting'}>
                  {formState === 'submitting' ? 'Sending&#8230;' : 'Plan My Visit'}
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </section>
  )
}

export default function NewMemberPage() {
  return (
    <>
      <Nav />
      <main id="main">
        <NmHero />
        <NmInfo />
        <NmSteps />
        <FirstTimerForm />
        <FAQ />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
