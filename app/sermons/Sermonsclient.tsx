'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import { IconCalendar, IconClock, IconPlayerPlay, IconBrandSpotify, IconSearch } from '@tabler/icons-react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import ArrowLink from '@/components/ui/ArrowLink'
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll'
import type { Sermon } from '@/lib/sermons'

// Kept here (not imported from lib/sermons) so this client file never pulls in server-only code
const SPOTIFY_SHOW_ID = '2LjVOPtqe3B97qyQARMK8g'
const SPOTIFY_SHOW_URL = `https://open.spotify.com/show/${SPOTIFY_SHOW_ID}`
const PAGE_SIZE = 12

interface SermonsClientProps {
  sermons: Sermon[] | null
}

function formatDate(iso: string) {
  if (!iso) return ''
  return new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
}

function SermonsHero() {
  const ref = useRevealOnScroll()
  return (
    <section
      className="pt-[calc(var(--nav-height)+var(--space-3xl))] px-12 pb-16 max-w-[1200px] mx-auto lt-lg:px-8 lt-sm:px-3"
      aria-labelledby="sermons-hero-heading"
    >
      <div ref={ref} className="void-card">
        <p className="flex items-center gap-[10px] font-headline text-[11px] font-bold uppercase tracking-[.15em] text-bright-green mb-6">
          <span className="w-8 h-[1.5px] bg-bright-green inline-block" aria-hidden={true} />
          The Word
        </p>
        <h1
          id="sermons-hero-heading"
          className="font-quote text-[clamp(52px,8vw,96px)] font-light leading-[1.05] tracking-[-0.02em] text-cream mb-6 lt-sm:text-[36px]"
        >
          Hear the <em className="italic text-bright-green font-normal">Word</em>
        </h1>
        <p className="text-[17px] text-[rgba(240,237,230,0.5)] max-w-[560px] leading-[1.8] mb-8">
          Messages from Pst Fred A. Elegbe and the XPH family &#8212; listen here, or
          follow the podcast wherever you listen.
        </p>
        <a
          href={SPOTIFY_SHOW_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn--secondary"
        >
          <IconBrandSpotify size={16} aria-hidden={true} />
          Follow on Spotify
        </a>
      </div>
    </section>
  )
}

function FeaturedSermon({ sermon }: { sermon: Sermon }) {
  const ref = useRevealOnScroll()
  return (
    <section
      className="max-w-[1200px] mx-auto px-12 pb-20 lt-lg:px-8 lt-sm:px-3"
      aria-labelledby="latest-sermon-heading"
    >
      <div
        ref={ref}
        className="void-card grid grid-cols-[1fr_1.3fr] border border-[rgba(240,237,230,0.07)] rounded-[8px] overflow-hidden bg-forest-green lt-lg:grid-cols-1"
      >
        <div className="relative min-h-[320px] bg-deep-green lt-lg:aspect-[16/9] lt-lg:min-h-0">
          {sermon.image && (
            <Image
              src={sermon.image}
              alt={sermon.title}
              fill
              priority
              unoptimized
              sizes="(max-width: 1023px) 100vw, 40vw"
              className="object-cover object-center"
            />
          )}
          <span className="absolute top-6 left-6 bg-bright-green text-deep-green font-headline text-[10px] font-bold tracking-[.14em] uppercase py-[5px] px-3 rounded-full">
            Latest Message
          </span>
        </div>
        <div className="py-12 px-12 flex flex-col justify-center lt-lg:px-8 lt-lg:py-10">
          {sermon.season && (
            <p className="font-headline text-[11px] font-bold tracking-[.14em] uppercase text-teal mb-4">
              Series {sermon.season}
              {sermon.episode ? ` \u00b7 Part ${sermon.episode}` : ''}
            </p>
          )}
          <h2
            id="latest-sermon-heading"
            className="font-quote text-[clamp(28px,3.5vw,44px)] font-normal leading-[1.15] tracking-[-0.01em] text-cream mb-4"
          >
            {sermon.title}
          </h2>
          <div className="flex items-center gap-5 text-[13px] text-[rgba(240,237,230,0.45)] mb-5">
            <span className="flex items-center gap-[6px]">
              <IconCalendar size={13} aria-hidden={true} />
              {formatDate(sermon.date)}
            </span>
            {sermon.duration && (
              <span className="flex items-center gap-[6px]">
                <IconClock size={13} aria-hidden={true} />
                {sermon.duration}
              </span>
            )}
          </div>
          <p className="text-[15px] text-[rgba(240,237,230,0.5)] leading-[1.8] mb-6 line-clamp-3">
            {sermon.description}
          </p>
          <audio controls preload="none" src={sermon.audioUrl} className="w-full" />
        </div>
      </div>
    </section>
  )
}

function SermonList({ sermons }: { sermons: Sermon[] }) {
  const [query, setQuery] = useState('')
  const [visible, setVisible] = useState(PAGE_SIZE)
  const [activeId, setActiveId] = useState<string | null>(null)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return sermons
    return sermons.filter(
      (s) => s.title.toLowerCase().includes(q) || s.description.toLowerCase().includes(q),
    )
  }, [sermons, query])

  const shown = filtered.slice(0, visible)

  return (
    <section
      className="max-w-[1200px] mx-auto px-12 pb-40 lt-lg:px-8 lt-sm:px-3"
      aria-labelledby="archive-heading"
    >
      <div className="flex items-end justify-between gap-6 pt-8 border-t border-[rgba(240,237,230,0.07)] mb-12 flex-wrap">
        <h2
          id="archive-heading"
          className="font-quote text-[36px] font-light text-cream tracking-[-0.01em]"
        >
          Sermon Archive
          <span className="ml-3 text-[14px] font-body text-[rgba(240,237,230,0.35)]">
            {filtered.length} message{filtered.length === 1 ? '' : 's'}
          </span>
        </h2>
        <div className="relative w-full max-w-[320px]">
          <IconSearch
            size={15}
            aria-hidden={true}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[rgba(240,237,230,0.3)]"
          />
          <label htmlFor="sermon-search" className="sr-only">
            Search sermons
          </label>
          <input
            id="sermon-search"
            type="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
              setVisible(PAGE_SIZE)
            }}
            placeholder="Search by title or topic"
            className="w-full bg-[rgba(10,31,20,0.45)] border border-[rgba(240,237,230,0.08)] rounded-[4px] text-cream text-[14px] py-[11px] pl-10 pr-4 outline-none focus:border-[rgba(31,208,0,0.5)]"
          />
        </div>
      </div>

      {shown.length === 0 ? (
        <p className="text-[15px] text-[rgba(240,237,230,0.4)]">
          No messages match &#8220;{query}&#8221;. Try a different word.
        </p>
      ) : (
        <div className="grid grid-cols-3 gap-6 lt-lg:grid-cols-2 lt-sm:grid-cols-1">
          {/* ev-card only (no void-card) so cards added by "Load more" are never stuck invisible */}
          {shown.map((s) => (
            <article key={s.id} className="ev-card">
              <div className="px-6 pt-6 flex items-center justify-between">
                <span className="font-headline text-[11px] font-bold tracking-[.12em] uppercase text-bright-green">
                  {formatDate(s.date)}
                </span>
                {s.season && (
                  <span className="font-headline text-[10px] font-semibold tracking-[.1em] uppercase text-[rgba(240,237,230,0.35)] py-[3px] px-2 border border-[rgba(240,237,230,0.08)] rounded-full">
                    S{s.season}
                    {s.episode ? ` \u00b7 E${s.episode}` : ''}
                  </span>
                )}
              </div>
              <div className="pt-4 px-6 pb-6 flex-1">
                <h3 className="font-quote text-[22px] font-normal text-cream leading-[1.25] mb-2">
                  {s.title}
                </h3>
                <p className="text-[14px] text-[rgba(240,237,230,0.45)] leading-[1.7] line-clamp-3">
                  {s.description}
                </p>
              </div>
              <div className="py-4 px-6 border-t border-[rgba(240,237,230,0.06)]">
                {activeId === s.id ? (
                  <audio controls autoPlay src={s.audioUrl} className="w-full" />
                ) : (
                  <button
                    type="button"
                    onClick={() => setActiveId(s.id)}
                    className="flex items-center justify-between w-full text-[13px] font-semibold text-bright-green bg-transparent border-none cursor-pointer p-0"
                  >
                    <span className="flex items-center gap-[8px]">
                      <IconPlayerPlay size={14} aria-hidden={true} />
                      Play message
                    </span>
                    {s.duration && (
                      <span className="text-[12px] font-normal text-[rgba(240,237,230,0.4)]">
                        {s.duration}
                      </span>
                    )}
                  </button>
                )}
              </div>
            </article>
          ))}
        </div>
      )}

      {visible < filtered.length && (
        <div className="flex justify-center mt-12">
          <button
            type="button"
            className="btn--secondary"
            onClick={() => setVisible((v) => v + PAGE_SIZE)}
          >
            Load more messages
          </button>
        </div>
      )}
    </section>
  )
}

// Shown only if the RSS feed can't be loaded, so the page is never empty
function SpotifyFallback() {
  return (
    <section className="max-w-[1200px] mx-auto px-12 pb-40 lt-lg:px-8 lt-sm:px-3">
      <p className="text-[15px] text-[rgba(240,237,230,0.5)] leading-[1.8] mb-6">
        We couldn&#8217;t load the sermon list right now. You can still listen on Spotify:
      </p>
      <iframe
        title="The XpressionHouse on Spotify"
        src={`https://open.spotify.com/embed/show/${SPOTIFY_SHOW_ID}`}
        width="100%"
        height="480"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        className="border-0 rounded-[12px]"
      />
      <div className="mt-6">
        <ArrowLink href={SPOTIFY_SHOW_URL}>Open in Spotify</ArrowLink>
      </div>
    </section>
  )
}

export default function SermonsClient({ sermons }: SermonsClientProps) {
  const hasSermons = sermons && sermons.length > 0
  return (
    <>
      <Nav />
      <main id="main">
        <SermonsHero />
        {hasSermons ? (
          <>
            <FeaturedSermon sermon={sermons[0]} />
            <SermonList sermons={sermons.slice(1)} />
          </>
        ) : (
          <SpotifyFallback />
        )}
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}