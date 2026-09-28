'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import {
  IconPlayerPlay,
  IconPlayerPause,
  IconFlame,
  IconCalendar,
  IconBook,
  IconArrowRight,
} from '@tabler/icons-react'
import { ScrollText } from './ScrollText'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'
import type { LatestSermonPayload } from '@/lib/sermons'

const REFRESH_MS = 30 * 60 * 1000 // re-check for a new episode every 30 minutes

function formatDate(iso: string) {
  if (!iso) return ''
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

function formatTime(totalSeconds: number) {
  const s = Math.floor(totalSeconds)
  const h = Math.floor(s / 3600)
  const m = Math.floor((s % 3600) / 60)
  const sec = s % 60
  return h > 0
    ? `${h}:${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}`
    : `${m}:${String(sec).padStart(2, '0')}`
}

export default function Sermon() {
  const cardRef = useRevealOnScroll<HTMLDivElement>()
  const [seriesHovered, setSeriesHovered] = useState(false)

  const [data, setData] = useState<LatestSermonPayload | null>(null)
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading')

  const audioRef = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const playingRef = useRef(false)

  const load = useCallback(async () => {
    try {
      const res = await fetch('/api/sermons/latest')
      if (!res.ok) throw new Error('Request failed')
      const next: LatestSermonPayload = await res.json()
      // Never swap the episode out from under someone who is listening
      setData((prev) => (playingRef.current && prev ? prev : next))
      setStatus('ready')
    } catch {
      setStatus((prev) => (prev === 'ready' ? 'ready' : 'error'))
    }
  }, [])

  // Load on mount, then refresh every 30 min and whenever the tab becomes visible again
  useEffect(() => {
    load()
    const interval = setInterval(load, REFRESH_MS)
    const onVisible = () => {
      if (document.visibilityState === 'visible') load()
    }
    document.addEventListener('visibilitychange', onVisible)
    return () => {
      clearInterval(interval)
      document.removeEventListener('visibilitychange', onVisible)
    }
  }, [load])

  function togglePlay() {
    const audio = audioRef.current
    if (!audio) return
    if (audio.paused) {
      audio.play().catch(() => setPlaying(false))
    } else {
      audio.pause()
    }
  }

  const sermon = data?.sermon
  const series = data?.series

  const title =
    sermon?.title ??
    (status === 'error' ? 'Listen to our latest messages' : 'Loading the latest message\u2026')

  return (
    <section className="sermon" id="sermon" aria-labelledby="sermon-heading">
      <div className="sermon__card void-card" ref={cardRef}>
        <div className="sermon__video !aspect-[21/9] lt-sm:!aspect-[16/9]">
          {sermon?.image && (
            <Image
              src={sermon.image}
              alt=""
              fill
              unoptimized
              priority
              sizes="(max-width: 1300px) 100vw, 1300px"
              className="object-cover object-center"
            />
          )}
          <div className="sermon__video-overlay" />
          <div className="sermon__badge">
            <IconFlame size={12} aria-hidden /> Latest sermon
          </div>

          {sermon && (
            <audio
              key={sermon.id}
              ref={audioRef}
              src={sermon.audioUrl}
              preload="none"
              onPlay={() => {
                playingRef.current = true
                setPlaying(true)
              }}
              onPause={() => {
                playingRef.current = false
                setPlaying(false)
              }}
              onEnded={() => {
                playingRef.current = false
                setPlaying(false)
                setCurrentTime(0)
              }}
              onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
            />
          )}

          {sermon && (
            <button
              className="sermon__play"
              onClick={togglePlay}
              aria-label={playing ? 'Pause latest sermon' : 'Play latest sermon'}
            >
              {playing ? (
                <IconPlayerPause size={28} aria-hidden />
              ) : (
                <IconPlayerPlay size={28} aria-hidden />
              )}
            </button>
          )}

          {sermon?.duration && (
            <div className="sermon__duration">
              {currentTime > 0 ? `${formatTime(currentTime)} / ${sermon.duration}` : sermon.duration}
            </div>
          )}
        </div>

        <div className="sermon__info !static !bg-none">
          <div>
            <h2 id="sermon-heading" className="sermon__title">
              {title}
            </h2>
            <div className="sermon__meta">
              {sermon?.date && (
                <span className="sermon__meta-item">
                  <IconCalendar size={16} aria-hidden /> {formatDate(sermon.date)}
                </span>
              )}
              {data?.scripture && (
                <span className="sermon__meta-item">
                  <IconBook size={16} aria-hidden /> {data.scripture}
                </span>
              )}
            </div>
            <div className="sermon__speaker">
              <div className="sermon__speaker-avatar">FE</div>
              <div>
                <div className="sermon__speaker-name">Pastor Fred A. Elegbe</div>
                <div className="sermon__speaker-role">Lead Pastor</div>
              </div>
            </div>
            {sermon?.description && <p className="sermon__desc">{sermon.description}</p>}
            <a href="/sermons" className="sermon__top-link link--arrow">
              View sermon archives <IconArrowRight size={14} aria-hidden />
            </a>
          </div>

          {series && (
            <div className="sermon__sidebar">
              <div
                className="sermon__series-card"
                onMouseEnter={() => setSeriesHovered(true)}
                onMouseLeave={() => setSeriesHovered(false)}
              >
                <div className="sermon__series-label">Part of a series</div>
                <ScrollText
                  text={series.name}
                  className="sermon__series-title"
                  cardHovered={seriesHovered}
                />
                <div className="sermon__series-count">
                  Part {series.part} &middot; {series.count} message{series.count === 1 ? '' : 's'} so far
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}