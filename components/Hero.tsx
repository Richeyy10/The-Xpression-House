'use client'

import { useEffect } from 'react'
import dynamic from 'next/dynamic'
import { IconMapPin, IconPlayerPlay } from '@tabler/icons-react'
import Button from './ui/Button'

const HeroCanvas = dynamic(() => import('./HeroCanvas'), { ssr: false })

export default function Hero() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            ;(e.target as HTMLElement).style.animationPlayState = 'running'
            observer.unobserve(e.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    document.querySelectorAll('.anim').forEach(el => {
      ;(el as HTMLElement).style.animationPlayState = 'paused'
      observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <section className="hero" aria-label="Welcome">
      <div className="hero__pattern" />
      <HeroCanvas />
      <div className="hero__lines">
        <span /><span /><span /><span /><span />
      </div>
      <div className="hero__overlay" />
      <div className="hero__content">
        <a
          href="https://www.youtube.com/@thexphng/live"
          target="_blank"
          rel="noopener noreferrer"
          className="hero__label anim a1"
        >
          <span className="hero__label-dot" />
          Live Sunday Service – Join In
        </a>
        <h1 className="hero__title anim a2">
          Plunge into a<br /><em>captivating</em> worship<br />experience
        </h1>
        <div className="hero__ctas anim a3">
          <Button href="#visit" icon={<IconMapPin size={16} aria-hidden />}>Visit us</Button>
          <Button href="#sermon" variant="secondary" icon={<IconPlayerPlay size={16} aria-hidden />}>Last Sermon</Button>
        </div>
      </div>
    </section>
  )
}
