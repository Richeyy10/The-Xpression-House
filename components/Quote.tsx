'use client'

import { useEffect, useState } from 'react'
import { IconChevronLeft, IconChevronRight, IconBookmark } from '@tabler/icons-react'

const SCRIPTURES = [
  {
    display: 'Whoever watches the wind will not plant; whoever looks at the clouds will not reap.',
    ref: 'Ecclesiastes 11:4',
    version: 'NIV',
  },
  {
    display: '...Trust in the Lord with all your heart... he will make your paths straight...',
    ref: 'Proverbs 3:5–6',
    version: 'NIV',
  },
  {
    display: 'I can do all this through him who gives me strength.',
    ref: 'Philippians 4:13',
    version: 'NKJV',
  },
  {
    display: '...whoever believes in him shall not perish but have eternal life...',
    ref: 'John 3:16',
    version: 'NIV',
  },
  {
    display: '...the Lord your God will be with you wherever you go...',
    ref: 'Joshua 1:9',
    version: 'ESV',
  },
]

export default function Quote() {
  const [idx, setIdx] = useState(0)
  const [paused, setPaused] = useState(false)

  const prev = () => setIdx(i => (i - 1 + SCRIPTURES.length) % SCRIPTURES.length)
  const next = () => setIdx(i => (i + 1) % SCRIPTURES.length)

  useEffect(() => {
    if (paused) return
    const timer = setInterval(() => {
      setIdx(i => (i + 1) % SCRIPTURES.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [idx, paused])

  const { display, ref, version } = SCRIPTURES[idx]

  return (
    <section
      className="quote"
      aria-label="Scriptures of the Week"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="quote__inner">
        <p className="quote__label">Scriptures of the Week</p>
        <div className="quote__slide-row">
          <button className="quote__nav" onClick={prev} aria-label="Previous scripture">
            <IconChevronLeft size={20} />
          </button>
          <div className="quote__slide" key={idx}>
            <blockquote className="quote__text">
              <IconBookmark className="quote__red-mark" size={14} aria-hidden="true" />
              {display}
            </blockquote>
            <div className="quote__attr">
              <span className="quote__line" aria-hidden="true" />
              <cite className="quote__cite">
                {ref} <span className="quote__version">· {version}</span>
              </cite>
              <span className="quote__line" aria-hidden="true" />
            </div>
          </div>
          <button className="quote__nav" onClick={next} aria-label="Next scripture">
            <IconChevronRight size={20} />
          </button>
        </div>
        <div className="quote__dots" aria-hidden="true">
          {SCRIPTURES.map((_, i) => (
            <span key={i} className={`quote__dot${i === idx ? ' active' : ''}`} />
          ))}
        </div>
      </div>
    </section>
  )
}
