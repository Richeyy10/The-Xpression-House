'use client'

import { useEffect, useRef, useState } from 'react'
import { IconMusic, IconPlayerPlayFilled, IconBrandSpotify } from '@tabler/icons-react'
import { ScrollText } from './ScrollText'
import { currentSetlist, getEmbedUrl, getSpotifyUrl, type SetlistSong } from '@/lib/setlist'

interface SongCardProps {
  song: SetlistSong
  active: boolean
  onSelect: (id: string) => void
}

function SongCard({ song, active, onSelect }: SongCardProps) {
  const { cat, title, artist } = song
  const [cardHovered, setCardHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const canEmbed = getEmbedUrl(song) !== null

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

  const footerContent = (
    <>
      <span className="song-card__link">{active ? 'Playing' : 'Listen'}</span>
      <div className="song-card__play">
        <IconPlayerPlayFilled size={13} aria-hidden />
      </div>
    </>
  )

  return (
    <div
      ref={cardRef}
      className="song-card void-card"
      role="listitem"
      style={active ? { borderColor: 'rgba(31,208,0,.4)' } : undefined}
      onMouseEnter={() => setCardHovered(true)}
      onMouseLeave={() => setCardHovered(false)}
    >
      <div className="song-card__top">
        <div className="song-card__cat">{cat}</div>
      </div>
      <div className="song-card__bottom">
        <ScrollText text={title} className="song-card__title" cardHovered={cardHovered} />
        <ScrollText text={artist} className="song-card__artist" cardHovered={cardHovered} />
        {canEmbed ? (
          // Has a real Spotify track link: play it in the player on this page
          <button
            type="button"
            className="song-card__footer w-full bg-transparent border-0 p-0 cursor-pointer text-left"
            onClick={() => onSelect(song.id)}
            aria-pressed={active}
            aria-label={`Play ${title} on this page`}
          >
            {footerContent}
          </button>
        ) : (
          // No track link yet: fall back to opening Spotify in a new tab
          <a
            className="song-card__footer no-underline"
            href={getSpotifyUrl(song)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Listen to ${title} on Spotify (opens in a new tab)`}
          >
            {footerContent}
          </a>
        )}
      </div>
    </div>
  )
}

export default function Setlist() {
  const { date, songs } = currentSetlist
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeId, setActiveId] = useState<string | null>(null)

  const activeSong = songs.find(s => s.id === activeId)
  const activeEmbed = activeSong ? getEmbedUrl(activeSong) : null

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
  }, [songs])

  return (
    <section className="setlist" id="setlist" aria-labelledby="setlist-heading">
      <div className="setlist__inner">
        <div className="setlist__header">
          <h2 id="setlist-heading" className="setlist__title">
            Sunday <em>setlist</em>
          </h2>
          <div className="setlist__pill">
            <IconMusic size={14} aria-hidden /> {date}
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
          {songs.map(song => (
            <SongCard
              key={song.id}
              song={song}
              active={song.id === activeId}
              onSelect={setActiveId}
            />
          ))}
          <div className="setlist__spacer" aria-hidden="true" />
        </div>
      </div>

      {activeSong && activeEmbed && (
        <div className="setlist__inner mt-6">
          <iframe
            key={activeSong.id}
            title={`${activeSong.title} by ${activeSong.artist} on Spotify`}
            src={activeEmbed}
            width="100%"
            height="152"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="border-0 rounded-[12px]"
          />
          <a
            href={getSpotifyUrl(activeSong)}
            target="_blank"
            rel="noopener noreferrer"
            className="link--arrow mt-3"
          >
            <IconBrandSpotify size={14} aria-hidden /> Open in Spotify
          </a>
        </div>
      )}
    </section>
  )
}