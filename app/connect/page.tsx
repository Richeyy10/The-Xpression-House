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
    <section className="inner-hero" aria-labelledby="connect-heading">
      <div ref={ref} className="void-card">
        <p className="inner-hero__overline">
          <span className="inner-hero__overline-line" aria-hidden={true} />
          Get In Touch
        </p>
        <h1 id="connect-heading" className="inner-hero__heading">
          We&#8217;d love to <em>hear from you</em>
        </h1>
        <p className="inner-hero__sub">
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
    <section className="connect-section" aria-label="Contact">
      <div ref={ref} className="connect-grid void-card">
        {/* Left: info cards */}
        <div className="connect-info">

          {/* Find Us */}
          <div className="connect-info-card">
            <IconMapPin
              size={130}
              className="connect-info-card__bg-icon"
              aria-hidden={true}
            />
            <p className="connect-info-card__overline">Find Us</p>
            <h3 className="connect-info-card__title">We meet every Sunday</h3>
            <p className="connect-info-card__body">
              8:00 AM in Ibadan, Oyo State, Nigeria. Contact us and we&#8217;ll send you
              the exact address and directions.
            </p>
          </div>

          {/* Social Media */}
          <div className="connect-info-card">
            <IconAt
              size={130}
              className="connect-info-card__bg-icon"
              aria-hidden={true}
            />
            <p className="connect-info-card__overline">Social Media</p>
            <h3 className="connect-info-card__title">Follow the journey</h3>
            <p className="connect-info-card__body">
              Follow{' '}
              <a href="https://www.instagram.com/thexphng" target="_blank" rel="noopener noreferrer">
                @thexphng
              </a>{' '}
              on Instagram and{' '}
              <a href="https://www.facebook.com/thexphng" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>{' '}
              for updates. Watch messages on{' '}
              <a href="https://www.youtube.com/@thexphng" target="_blank" rel="noopener noreferrer">
                YouTube
              </a>.
            </p>
          </div>

          {/* Live Online */}
          <div className="connect-info-card">
            <IconBrandYoutube
              size={130}
              className="connect-info-card__bg-icon"
              aria-hidden={true}
            />
            <p className="connect-info-card__overline">Live Online</p>
            <h3 className="connect-info-card__title">Can&#8217;t make it in person?</h3>
            <p className="connect-info-card__body">
              Stream our Sunday service live on{' '}
              <a href="https://thexphng.mixlr.com/" target="_blank" rel="noopener noreferrer">
                Mixlr
              </a>{' '}
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
              <h2 className="connect-form-card__title">Send us a message</h2>

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
