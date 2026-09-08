'use client'

import { useState } from 'react'
import { IconCheck } from '@tabler/icons-react'

const categories = ['Healing', 'Purpose', 'Provision', 'Restoration', 'Salvation', 'Community', 'Other']

export default function TestimonySubmissionForm() {
  const [name, setName] = useState('')
  const [contact, setContact] = useState('')
  const [category, setCategory] = useState(categories[0])
  const [message, setMessage] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)

    if (!name.trim() || !contact.trim() || !message.trim()) {
      setError('Please fill in your name, a way to reach you, and your story.')
      return
    }

    setSubmitting(true)
    try {
      const res = await fetch('/api/testimony-submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, contact, category, message }),
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
          <h2 className="form-success__title">Thank you for sharing</h2>
          <p className="form-success__body">
            Your story means a lot to us. Our team will review it, and if we feature it
            on the wall, we&#8217;ll reach out to you first.
          </p>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="connect-form-card">
      <div className="form-field--row">
        <div className="form-field">
          <label htmlFor="ts-name">Name</label>
          <input
            id="ts-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            maxLength={80}
          />
        </div>
        <div className="form-field">
          <label htmlFor="ts-contact">Email or phone</label>
          <input
            id="ts-contact"
            type="text"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="How can we reach you?"
            maxLength={120}
          />
        </div>
      </div>

      <div className="form-field">
        <label htmlFor="ts-category">What&#8217;s this story about?</label>
        <select
          id="ts-category"
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
        <label htmlFor="ts-message">Your testimony</label>
        <textarea
          id="ts-message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Share what God has done — as much detail as you'd like."
          maxLength={3000}
        />
      </div>

      {error && <p className="text-[13px] text-accent-red mb-2">{error}</p>}

      <div className="form-actions">
        <button type="submit" className="btn--primary" disabled={submitting}>
          {submitting ? 'Submitting...' : 'Submit your story'}
        </button>
        <span className="form-actions__note">
          We&#8217;ll reach out before publishing anything with your name on it.
        </span>
      </div>
    </form>
  )
}