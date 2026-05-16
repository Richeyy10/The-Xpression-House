'use client'

import { useEffect, useRef, useState } from 'react'

export function ScrollText({
  text,
  className,
  cardHovered,
}: {
  text: string
  className: string
  cardHovered: boolean
}) {
  const wrapRef = useRef<HTMLDivElement>(null)
  const spanRef = useRef<HTMLSpanElement>(null)
  const [offset, setOffset] = useState<number | null>(null)

  useEffect(() => {
    document.fonts.ready.then(() =>
      requestAnimationFrame(() => {
        const wrap = wrapRef.current
        const span = spanRef.current
        if (!wrap || !span) return
        if (wrap.scrollWidth > wrap.clientWidth) {
          setOffset(span.offsetWidth + 32)
        }
      })
    )
  }, [])

  const animating = offset !== null && cardHovered

  const animStyle: React.CSSProperties = animating
    ? ({
        display: 'inline-block',
        '--tm-off': `-${offset}px`,
        animation: `text-march ${Math.max(2, offset! / 40)}s linear 0.3s infinite`,
      } as React.CSSProperties)
    : {}

  return (
    <div ref={wrapRef} className={`song-card__text-track ${className}`}>
      <span ref={spanRef} style={animStyle}>
        {text}
        {animating && (
          <span aria-hidden style={{ paddingLeft: '32px' }}>{text}</span>
        )}
      </span>
    </div>
  )
}
