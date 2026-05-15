'use client'

import { useEffect, useRef } from 'react'
import {
  IconPlayerPlay,
  IconFlame,
  IconCalendar,
  IconBook,
  IconDownload,
  IconArchive,
} from '@tabler/icons-react'

export default function Sermon() {
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

  const handleVideoKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') e.preventDefault()
  }

  return (
    <section className="sermon" aria-labelledby="sermon-heading">
      <div className="sermon__card void-card" ref={cardRef}>
        <div
          className="sermon__video"
          role="button"
          tabIndex={0}
          aria-label="Play latest sermon video"
          onKeyDown={handleVideoKeyDown}
        >
          <div className="sermon__video-overlay" />
          <div className="sermon__badge">
            <IconFlame size={12} aria-hidden /> Latest sermon
          </div>
          <div className="sermon__play">
            <IconPlayerPlay size={28} aria-hidden />
          </div>
        </div>

        <div className="sermon__info">
          <div>
            <h2 id="sermon-heading" className="sermon__title">
              Walking by faith, not by sight
            </h2>
            <div className="sermon__meta">
              <span className="sermon__meta-item">
                <IconCalendar size={16} aria-hidden /> 11 May 2026
              </span>
              <span className="sermon__meta-item">
                <IconBook size={16} aria-hidden /> 2 Corinthians 5:7
              </span>
            </div>
            <div className="sermon__speaker">
              <div className="sermon__speaker-avatar">FE</div>
              <div>
                <div className="sermon__speaker-name">Pastor Fred A. Elegbe</div>
                <div className="sermon__speaker-role">Senior Pastor</div>
              </div>
            </div>
            <p className="sermon__desc">
              In this powerful message, Pastor Fred explores what it truly means to navigate
              life&apos;s uncertainties with unwavering trust in God. He unpacks practical steps
              for building a faith that stands firm when circumstances challenge everything you
              believe.
            </p>
            <div className="sermon__actions">
              <a href="#" className="btn--primary">
                <IconPlayerPlay size={16} aria-hidden /> Watch now
              </a>
              <a href="#" className="btn--secondary">
                <IconDownload size={16} aria-hidden /> Download audio
              </a>
            </div>
          </div>

          <div className="sermon__sidebar">
            <div className="sermon__series-card">
              <div className="sermon__series-label">Part of a series</div>
              <div className="sermon__series-title">Faith Series</div>
              <div className="sermon__series-count">7 of 12 messages</div>
            </div>
            <a href="#" className="sermon__archive-link">
              <IconArchive size={16} aria-hidden /> View sermon archives
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
