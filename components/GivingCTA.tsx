'use client'

import { useEffect, useRef } from 'react'
import { IconHeart, IconRepeat } from '@tabler/icons-react'

export default function GivingCTA() {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const card = cardRef.current
    if (!card) return
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            card.classList.add('emerged')
            observer.unobserve(card)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )
    observer.observe(card)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="giving-cta" aria-labelledby="giving-heading">
      <div className="giving-cta__card void-card" ref={cardRef}>
        <h2 id="giving-heading" className="giving-cta__heading">
          Support the <em>mission.</em><br />Give generously.
        </h2>
        <p className="giving-cta__body">
          Your giving fuels worship, outreach, and the growth of this community. Every gift
          makes a difference, no matter the size.
        </p>
        <div className="giving-cta__actions">
          <a href="#" className="btn--primary">
            <IconHeart size={16} aria-hidden /> Give online
          </a>
          <a href="#" className="btn--secondary">
            <IconRepeat size={16} aria-hidden /> Set up recurring giving
          </a>
        </div>
      </div>
    </section>
  )
}
