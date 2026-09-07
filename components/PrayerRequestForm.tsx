'use client'

import { useState } from 'react'
import { IconCheck } from '@tabler/icons-react'

const categories = ['Healing', 'Family', 'Finances', 'Guidance', 'Salvation', 'Other']

export default function PrayerRequestForm() {
  const [name, setName] = useState('')
  const [contact, setContact] = useState('')
  const [category, setCategory] = useState(categories[0])
  const [message, setMessage] = useState('')
  const [confidential, setConfidential] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)

    if (!name.trim() || !contact.trim() || !message.trim()) {
      setError('Please fill in your name, a way to reach you, and your request.')
      return
    }

    setSubmitting(true)
    try {
      const res = await fetch('/api/prayer-requests', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, contact, category, message, confidential }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => null)
        setError(data?.error ?? 'Something went wrong. Please try again.')
        return
      }
      setSubmitted(true)
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="connect-form-card">
        <div className="form-success">
          <span className="form-success__check">
            <IconCheck size={28} aria-hidden={true} />
          </span>
          <h2 className="form-success__title">Your request has been received</h2>
          <p className="form-success__body">
            Our prayer team will be praying over this
            {confidential ? ', and it will stay confidential.' : '.'} Thank you for
            trusting us with it.
          </p>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="connect-form-card">
      <div className="form-field--row">
        <div className="form-field">
          <label htmlFor="pr-name">Name</label>
          <input
            id="pr-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            maxLength={80}
          />
        </div>
        <div className="form-field">
          <label htmlFor="pr-contact">Email or phone</label>
          <input
            id="pr-contact"
            type="text"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="How can we reach you?"
            maxLength={120}
          />
        </div>
      </div>

      <div className="form-field">
        <label htmlFor="pr-category">What&#8217;s this about?</label>
        <select
          id="pr-category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <div className="form-field">
        <label htmlFor="pr-message">Your prayer request</label>
        <textarea
          id="pr-message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Share as much or as little as you're comfortable with..."
          maxLength={1500}
        />
      </div>

      <label className="flex items-start gap-3 text-[13px] text-[rgba(240,237,230,0.5)] leading-[1.6] mb-2 cursor-pointer">
        <input
          type="checkbox"
          checked={confidential}
          onChange={(e) => setConfidential(e.target.checked)}
          className="mt-[3px]"
        />
        Keep this confidential &#8212; visible only to the prayer team, not shared publicly.
      </label>

      {error && <p className="text-[13px] text-accent-red mb-2">{error}</p>}

      <div className="form-actions">
        <button type="submit" className="btn--primary" disabled={submitting}>
          {submitting ? 'Submitting...' : 'Submit request'}
        </button>
        <span className="form-actions__note">
          Every request is prayed over by our team.
        </span>
      </div>
    </form>
  )
}