'use client'

import { FormEvent } from 'react'

export default function Newsletter() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <section className="newsletter" aria-labelledby="nl-heading">
      <div className="newsletter__inner">
        <h3 id="nl-heading" className="newsletter__heading">
          Stay in the <em>know</em>
        </h3>
        <p className="newsletter__body">
          Get weekly updates on services, events, and spiritual resources delivered to your inbox.
        </p>
        <form className="newsletter__form" aria-label="Newsletter signup" onSubmit={handleSubmit}>
          <label htmlFor="nl-email">Email address</label>
          <input
            type="email"
            id="nl-email"
            placeholder="Your email address"
            required
            aria-required="true"
          />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </section>
  )
}
