'use client'

import { useState } from 'react'
import {
  IconPlayerPlay,
  IconFlame,
  IconCalendar,
  IconBook,
  IconArrowRight,
} from '@tabler/icons-react'
import { ScrollText } from './ScrollText'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'

export default function Sermon() {
  const cardRef = useRevealOnScroll<HTMLDivElement>()
  const [seriesHovered, setSeriesHovered] = useState(false)

  return (
    <section className="sermon" id="sermon" aria-labelledby="sermon-heading">
      <div className="sermon__card void-card" ref={cardRef}>
        <div className="sermon__video">
          <div className="sermon__video-overlay" />
          <div className="sermon__badge">
            <IconFlame size={12} aria-hidden /> Latest sermon
          </div>
          <button className="sermon__play" aria-label="Play latest sermon video">
            <IconPlayerPlay size={28} aria-hidden />
          </button>
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
                <div className="sermon__speaker-role">Lead Pastor</div>
              </div>
            </div>
            <p className="sermon__desc">
              In this powerful message, Pastor Fred explores what it truly means to navigate
              life&apos;s uncertainties with unwavering trust in God. He unpacks practical steps
              for building a faith that stands firm when circumstances challenge everything you
              believe.
            </p>
            <a href="#" className="sermon__top-link link--arrow">
              View sermon archives <IconArrowRight size={14} aria-hidden />
            </a>
          </div>

          <div className="sermon__sidebar">
            <div
              className="sermon__series-card"
              onMouseEnter={() => setSeriesHovered(true)}
              onMouseLeave={() => setSeriesHovered(false)}
            >
              <div className="sermon__series-label">Part of a series</div>
              <ScrollText
                text="Faith Series"
                className="sermon__series-title"
                cardHovered={seriesHovered}
              />
              <div className="sermon__series-count">7 of 12 messages</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
