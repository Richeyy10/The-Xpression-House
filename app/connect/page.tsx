'use client'

import { useState, FormEvent } from 'react'
import {
  IconMapPin,
  IconBrandYoutube,
  IconAt,
  IconCheck,
} from '@tabler/icons-react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import FAQ from '@/components/FAQ'
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll'

type FormState = 'idle' | 'submitting' | 'success'

const subjects = [
  'General Enquiry',
  'First-Time Visit',
  'New Members Orientation',
  'Prayer Request',
  'Volunteering / Ministry',
  'Partnership / Giving',
  'Media & Press',
  'Other',
]

function ConnectHero() {
  const ref = useRevealOnScroll()
  return (
    <section
      className="pt-[calc(var(--nav-height)+var(--space-3xl))] px-12 pb-16 max-w-[1200px] mx-auto lt-lg:px-8 lt-sm:px-3"
      aria-labelledby="connect-heading"
    >
      <div ref={ref} className="void-card">
        <p className="flex items-center gap-[10px] font-headline text-[11px] font-bold uppercase tracking-[.15em] text-bright-green mb-6">
          <span className="w-8 h-[1.5px] bg-bright-green inline-block" aria-hidden={true} />
          Get In Touch
        </p>
        <h1
          id="connect-heading"
          className="font-quote text-[clamp(52px,8vw,96px)] font-light leading-[1.05] tracking-[-0.02em] text-cream mb-6 lt-sm:text-[36px]"
        >
          We&#8217;d love to <em className="italic text-bright-green font-normal">hear from you</em>
        </h1>
        <p className="text-[17px] text-[rgba(240,237,230,0.5)] max-w-[560px] leading-[1.8]">
          Whether you have a question, want to get involved, or simply need someone to
          talk to &#8212; our team is here and ready to connect with you.
        </p>
      </div>
    </section>
  )
}

function ContactSection() {
  const ref = useRevealOnScroll()
  const [formState, setFormState] = useState<FormState>('idle')
  const [data, setData] = useState({
    fullName: '', email: '', subject: '', message: '',
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
    <section
      className="max-w-[1200px] mx-auto px-12 pb-40 lt-lg:px-8 lt-sm:px-3"
      aria-label="Contact"
    >
      <div ref={ref} className="grid grid-cols-[1fr_1.5fr] gap-12 items-start void-card lt-lg:grid-cols-1">
        {/* Left: info cards */}
        <div className="flex flex-col gap-6">

          {/* Find Us */}
          <div className="connect-info-card">
            <IconMapPin size={130} className="connect-info-card__bg-icon" aria-hidden={true} />
            <p className="font-headline text-[10px] font-bold tracking-[.14em] uppercase text-bright-green mb-[6px] relative">Find Us</p>
            <h3 className="font-quote text-[20px] font-normal text-cream mb-2 leading-[1.2] relative">We meet every Sunday</h3>
            <p className="text-[14px] text-[rgba(240,237,230,0.5)] leading-[1.7] relative">
              8:00 AM in Ibadan, Oyo State, Nigeria. Contact us and we&#8217;ll send you
              the exact address and directions.
            </p>
          </div>

          {/* Social Media */}
          <div className="connect-info-card">
            <IconAt size={130} className="connect-info-card__bg-icon" aria-hidden={true} />
            <p className="font-headline text-[10px] font-bold tracking-[.14em] uppercase text-bright-green mb-[6px] relative">Social Media</p>
            <h3 className="font-quote text-[20px] font-normal text-cream mb-2 leading-[1.2] relative">Follow the journey</h3>
            <p className="text-[14px] text-[rgba(240,237,230,0.5)] leading-[1.7] relative [&_a]:text-bright-green [&_a]:no-underline [&_a:hover]:underline">
              Follow{' '}
              <a href="https://www.instagram.com/thexphng" target="_blank" rel="noopener noreferrer">@thexphng</a>{' '}
              on Instagram and{' '}
              <a href="https://www.facebook.com/thexphng" target="_blank" rel="noopener noreferrer">Facebook</a>{' '}
              for updates. Watch messages on{' '}
              <a href="https://www.youtube.com/@thexphng" target="_blank" rel="noopener noreferrer">YouTube</a>.
            </p>
          </div>

          {/* Live Online */}
          <div className="connect-info-card">
            <IconBrandYoutube size={130} className="connect-info-card__bg-icon" aria-hidden={true} />
            <p className="font-headline text-[10px] font-bold tracking-[.14em] uppercase text-bright-green mb-[6px] relative">Live Online</p>
            <h3 className="font-quote text-[20px] font-normal text-cream mb-2 leading-[1.2] relative">Can&#8217;t make it in person?</h3>
            <p className="text-[14px] text-[rgba(240,237,230,0.5)] leading-[1.7] relative [&_a]:text-bright-green [&_a]:no-underline [&_a:hover]:underline">
              Stream our Sunday service live on{' '}
              <a href="https://thexphng.mixlr.com/" target="_blank" rel="noopener noreferrer">Mixlr</a>{' '}
              and YouTube every week at 8:00 AM (WAT).
            </p>
          </div>

        </div>

        {/* Right: form */}
        <div className="connect-form-card">
          {formState === 'success' ? (
            <div className="form-success" role="status">
              <div className="form-success__check">
                <IconCheck size={32} aria-hidden={true} />
              </div>
              <p className="form-success__title">Message received</p>
              <p className="form-success__body">
                Thanks for reaching out. Someone from our team will get back to you
                within 1&#8211;2 business days.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate>
              <h2 className="font-quote text-[32px] font-normal text-cream mb-12 tracking-[-0.01em] relative lt-sm:text-[24px] lt-sm:mb-8">Send us a message</h2>

              <div className="form-field">
                <label htmlFor="fullName">Full Name</label>
                <input id="fullName" name="fullName" type="text"
                  placeholder="Emeka Adeyemi" value={data.fullName} onChange={onChange} required />
              </div>

              <div className="form-field">
                <label htmlFor="email">Email Address</label>
                <input id="email" name="email" type="email"
                  placeholder="you@example.com" value={data.email} onChange={onChange} required />
              </div>

              <div className="form-field">
                <label htmlFor="subject">Subject</label>
                <select id="subject" name="subject" value={data.subject} onChange={onChange} required>
                  <option value="" disabled>Select a subject&#8230;</option>
                  {subjects.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              <div className="form-field">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={5}
                  placeholder="Write your message here&#8230;" value={data.message} onChange={onChange} required />
              </div>

              <div className="form-actions">
                <button type="submit" className="btn--primary"
                  disabled={formState === 'submitting'}>
                  {formState === 'submitting' ? 'Sending&#8230;' : 'Send Message'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default function ConnectPage() {
  return (
    <>
      <Nav />
      <main id="main">
        <ConnectHero />
        <ContactSection />
        <FAQ />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
