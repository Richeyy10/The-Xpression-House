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
    <section
      className="pt-[calc(var(--nav-height)+var(--space-3xl))] px-12 pb-16 max-w-[1200px] mx-auto lt-lg:px-8 lt-sm:px-3"
      aria-labelledby="nm-heading"
    >
      <div ref={ref} className="void-card">
        <p className="flex items-center gap-[10px] font-headline text-[11px] font-bold uppercase tracking-[.15em] text-bright-green mb-6">
          <span className="w-8 h-[1.5px] bg-bright-green inline-block" aria-hidden={true} />
          Welcome
        </p>
        <h1
          id="nm-heading"
          className="font-quote text-[clamp(52px,8vw,96px)] font-light leading-[1.05] tracking-[-0.02em] text-cream mb-6 lt-sm:text-[36px]"
        >
          You&#8217;re in the <em className="italic text-bright-green font-normal">right place</em>
        </h1>
        <p className="text-[17px] text-[rgba(240,237,230,0.5)] max-w-[560px] leading-[1.8] mb-12">
          Whether you have been searching for a church home or just wandered in out of
          curiosity &#8212; we are glad you are here. Here is everything you need to take
          your next step.
        </p>
        <div className="flex gap-4 flex-wrap">
          <Link href="#first-timer" className="btn--primary">Plan Your Visit</Link>
          <Link href="#steps" className="btn--secondary">How It Works</Link>
        </div>
      </div>
    </section>
  )
}

function NmInfo() {
  const ref = useRevealOnScroll()
  return (
    <section
      className="border-y border-[rgba(240,237,230,0.07)]"
      aria-label="Service information"
    >
      <div
        ref={ref}
        className="max-w-[1200px] mx-auto py-16 px-12 grid grid-cols-3 gap-12 items-start void-card lt-lg:grid-cols-2 lt-lg:px-8 lt-sm:grid-cols-1 lt-sm:px-3"
      >
        <div className="flex flex-col gap-[6px]">
          <span className="font-headline text-[10px] font-bold tracking-[.14em] uppercase text-bright-green">Service Time</span>
          <span className="font-quote text-[26px] font-normal text-cream leading-[1.15]">Sundays at 8 AM</span>
          <span className="text-[13px] text-[rgba(240,237,230,0.4)] leading-[1.6]">Doors open at 7:30 AM</span>
        </div>
        <div className="flex flex-col gap-[6px]">
          <span className="font-headline text-[10px] font-bold tracking-[.14em] uppercase text-bright-green">Location</span>
          <span className="font-quote text-[26px] font-normal text-cream leading-[1.15]">Ibadan, Oyo State</span>
          <span className="text-[13px] text-[rgba(240,237,230,0.4)] leading-[1.6]">Contact us for the exact address and directions</span>
        </div>
        <div className="flex flex-col gap-[6px]">
          <span className="font-headline text-[10px] font-bold tracking-[.14em] uppercase text-bright-green">Children</span>
          <span className="font-quote text-[26px] font-normal text-cream leading-[1.15]">XPH Kids</span>
          <span className="text-[13px] text-[rgba(240,237,230,0.4)] leading-[1.6]">Running concurrently with the main service</span>
        </div>
      </div>
    </section>
  )
}

function NmSteps() {
  const ref = useRevealManyOnScroll('.nm-step')
  return (
    <section
      className="max-w-[1200px] mx-auto py-40 px-12 lt-lg:px-8 lt-sm:px-3"
      id="steps"
      aria-labelledby="steps-heading"
    >
      <div className="grid grid-cols-2 gap-20 items-start mb-16 lt-lg:grid-cols-1 lt-lg:gap-6">
        <div>
          <p className="flex items-center gap-[10px] font-headline text-[11px] font-bold uppercase tracking-[.15em] text-bright-green mb-4">
            <span className="w-8 h-[1.5px] bg-bright-green inline-block" aria-hidden={true} />
            Your Journey
          </p>
          <h2
            id="steps-heading"
            className="font-quote text-[clamp(36px,4.5vw,56px)] font-light leading-[1.1] tracking-[-0.02em] text-cream m-0"
          >
            Four simple steps to <em className="italic text-bright-green font-normal">finding your home</em>
          </h2>
        </div>
        <p className="text-[16px] text-[rgba(240,237,230,0.45)] leading-[1.8] pt-[52px] lt-lg:pt-0">
          We know walking into a new church can feel daunting. These steps are designed to
          make the journey as natural and welcoming as possible &#8212; at your own pace.
        </p>
      </div>
      <div ref={ref} className="grid grid-cols-2 gap-6 lt-sm:grid-cols-1">
        {steps.map(({ num, Icon: StepIcon, title, body }) => (
          <article key={num} className="nm-step void-card">
            <StepIcon size={140} className="nm-step__bg-icon" aria-hidden={true} />
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
    <section className="max-w-[1200px] mx-auto px-12 pb-40 lt-lg:px-8 lt-sm:px-3" id="first-timer" aria-labelledby="first-timer-heading">
      <div ref={ref} className="nm-first-timer__inner void-card">

        {formState === 'success' ? (
          <div className="form-success" role="status">
            <div className="form-success__check">
              <IconCheck size={32} aria-hidden={true} />
            </div>
            <p className="form-success__title">We&#8217;re so glad you reached out</p>
            <p className="form-success__body">
              Someone from our team will be in touch soon. Whether you&#8217;re planning
              your first visit or just exploring &#8212; we&#8217;re already looking forward
              to meeting you. Check out the Connect page if you have any questions in the
              meantime.
            </p>
          </div>
        ) : (
          <>
            <div className="mb-16">
              <p className="flex items-center gap-[10px] font-headline text-[11px] font-bold uppercase tracking-[.15em] text-bright-green mb-4">
                <span className="w-8 h-[1.5px] bg-bright-green inline-block" aria-hidden={true} />
                Say Hello
              </p>
              <h2
                id="first-timer-heading"
                className="font-quote text-[clamp(28px,3.5vw,44px)] font-light tracking-[-0.02em] text-cream mb-6 leading-[1.1]"
              >
                Let&#8217;s get you <em className="italic font-normal text-bright-green">connected</em>
              </h2>
              <p className="text-[16px] text-[rgba(240,237,230,0.45)] leading-[1.7] max-w-[540px]">
                Whether you&#8217;re curious about XPH, planning your first visit, or
                just walked in for the first time &#8212; share a few details and our
                team will personally reach out to welcome you.
              </p>
            </div>

            <form onSubmit={onSubmit} noValidate className="relative">
              <div className="form-field--row">
                <div className="form-field">
                  <label htmlFor="ft-fullName">Full Name</label>
                  <input id="ft-fullName" name="fullName" type="text"
                    placeholder="Emeka Adeyemi" value={data.fullName} onChange={onChange} required />
                </div>
                <div className="form-field">
                  <label htmlFor="ft-phone">Phone <span className="text-[10px] font-semibold uppercase tracking-[.08em] text-[rgba(240,237,230,0.25)] ml-1">(optional)</span></label>
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
                  What&#8217;s on your mind? <span className="text-[10px] font-semibold uppercase tracking-[.08em] text-[rgba(240,237,230,0.25)] ml-1">(optional)</span>
                </label>
                <textarea id="ft-note" name="note" rows={4}
                  placeholder="Questions about XPH, prayer requests, what you&#8217;re looking for in a church, accessibility needs &#8212; anything at all."
                  value={data.note} onChange={onChange} />
              </div>

              <div className="form-actions">
                <button type="submit" className="btn--primary" disabled={formState === 'submitting'}>
                  {formState === 'submitting' ? 'Sending&#8230;' : 'Send My Details'}
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
