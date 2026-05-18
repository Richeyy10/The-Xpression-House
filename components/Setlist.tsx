'use client'

import { useEffect, useRef, useState } from 'react'
import { IconMusic, IconPlayerPlayFilled } from '@tabler/icons-react'
import { ScrollText } from './ScrollText'

interface Song {
  num: string
  cat: string
  title: string
  artist: string
}

const SONGS: Song[] = [
  { num: '01', cat: 'Medley',  title: 'Atmosphere Shift',     artist: 'Phil Thompson' },
  { num: '02', cat: 'Medley',  title: 'Spirit Break Out',      artist: 'William McDowell' },
  { num: '03', cat: 'Medley',  title: 'Holy Spirit',           artist: 'Greatman Takit' },
  { num: '04', cat: 'Worship', title: 'Mighty Name of Jesus',  artist: 'The Belonging Co.' },
  { num: '05', cat: 'Worship', title: 'What a Beautiful Name', artist: 'Hillsong Worship' },
  { num: '06', cat: 'Worship', title: 'I Speak Jesus',         artist: 'Charity Gayle' },
  { num: '07', cat: 'Worship', title: 'Victory Is Yours',      artist: 'Bethel Music' },
]

function SongCard({ num, cat, title, artist }: Song) {
  const [cardHovered, setCardHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // On touch/mobile devices (no hover support), auto-trigger when card is in view
    if (!window.matchMedia('(hover: none)').matches) return
    const card = cardRef.current
    if (!card) return
    const observer = new IntersectionObserver(
      ([entry]) => setCardHovered(entry.isIntersecting),
      { threshold: 0.5 }
    )
    observer.observe(card)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={cardRef}
      className="song-card void-card"
      role="listitem"
      onMouseEnter={() => setCardHovered(true)}
      onMouseLeave={() => setCardHovered(false)}
    >
      <div className="song-card__top">
        <div className="song-card__cat">{cat}</div>
      </div>
      <div className="song-card__bottom">
        <ScrollText text={title} className="song-card__title" cardHovered={cardHovered} />
        <ScrollText text={artist} className="song-card__artist" cardHovered={cardHovered} />
        <div className="song-card__footer">
          <span className="song-card__link">Listen</span>
          <div className="song-card__play" aria-label={`Play ${title}`}>
            <IconPlayerPlayFilled size={13} aria-hidden />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Setlist() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scroll = scrollRef.current
    if (!scroll) return
    const cards = scroll.querySelectorAll('.void-card')
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const card = entry.target as HTMLElement
            const siblings = Array.from(scroll.querySelectorAll('.void-card'))
            card.style.animationDelay = `${siblings.indexOf(card) * 80}ms`
            card.classList.add('emerged')
            observer.unobserve(card)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )
    cards.forEach(c => observer.observe(c))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="setlist" id="setlist" aria-labelledby="setlist-heading">
      <div className="setlist__inner">
        <div className="setlist__header">
          <h2 id="setlist-heading" className="setlist__title">
            Sunday <em>setlist</em>
          </h2>
          <div className="setlist__pill">
            <IconMusic size={14} aria-hidden /> 18 May 2026
          </div>
        </div>
      </div>
      <div className="setlist__track">
        <div
          className="setlist__scroll"
          role="list"
          aria-label="Worship songs for this Sunday"
          ref={scrollRef}
        >
          {SONGS.map(song => <SongCard key={song.num} {...song} />)}
          <div className="setlist__spacer" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
