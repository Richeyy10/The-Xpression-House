'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import {
  IconHeart,
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandX,
  IconBrandYoutube,
  IconBrandTiktok,
} from '@tabler/icons-react'

type MenuState = 'closed' | 'open' | 'closing'

export default function Nav() {
  const [solid, setSolid] = useState(false)
  const [menuState, setMenuState] = useState<MenuState>('closed')
  const [activeSection, setActiveSection] = useState('')
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const savedScrollY = useRef(0)

  const isMenuOpen = menuState !== 'closed'

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = ['about', 'events', 'new', 'contact', 'give']
    const ios = sections.flatMap(id => {
      const el = document.getElementById(id)
      if (!el) return []
      const io = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { threshold: 0.4 }
      )
      io.observe(el)
      return [io]
    })
    return () => ios.forEach(io => io.disconnect())
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      savedScrollY.current = window.scrollY
      document.body.style.position = 'fixed'
      document.body.style.top = `-${savedScrollY.current}px`
      document.body.style.width = '100%'
    } else {
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      window.scrollTo(0, savedScrollY.current)
    }
  }, [isMenuOpen])

  useEffect(() => () => { if (closeTimer.current) clearTimeout(closeTimer.current) }, [])

  const closeMenu = () => {
    if (menuState === 'closed') return
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setMenuState('closing')
    closeTimer.current = setTimeout(() => setMenuState('closed'), 460)
  }

  const handleToggle = () => {
    if (menuState === 'closed') setMenuState('open')
    else closeMenu()
  }

  const navClass = [
    'nav__links',
    menuState !== 'closed' ? 'open' : '',
    menuState === 'closing' ? 'closing' : '',
  ].filter(Boolean).join(' ')

  return (
    <header
      className={`nav${solid ? ' solid' : ''}${isMenuOpen ? ' menu-open' : ''}`}
      id="nav"
      role="banner"
    >
      <a href="#" className="nav__logo" aria-label="The Xpression House home">
        <span className="nav__logo-mark">
          <Image src="/xph_logo_png1.png" alt="XPH Logo" fill style={{ objectFit: 'contain' }} />
        </span>
      </a>

      <nav
        className={navClass}
        aria-label="Primary navigation"
        onClick={(e) => { if (e.target === e.currentTarget) closeMenu() }}
      >
        <a href="#about" onClick={closeMenu} className={activeSection === 'about' ? 'active' : undefined}>About</a>
        <a href="#events" onClick={closeMenu} className={activeSection === 'events' ? 'active' : undefined}>Events</a>
        <a href="#new" onClick={closeMenu} className={activeSection === 'new' ? 'active' : undefined}>I&apos;m New</a>
        <a href="#contact" onClick={closeMenu} className={activeSection === 'contact' ? 'active' : undefined}>Connect</a>
        <a href="#give" onClick={closeMenu} className={activeSection === 'give' ? 'active' : undefined}>Give</a>

        <div className="nav__social">
          <a href="https://www.instagram.com/thexphng" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <IconBrandInstagram size={20} aria-hidden />
          </a>
          <a href="https://www.facebook.com/thexphng" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <IconBrandFacebook size={20} aria-hidden />
          </a>
          <a href="#" aria-label="X / Twitter">
            <IconBrandX size={20} aria-hidden />
          </a>
          <a href="https://www.youtube.com/@thexphng" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <IconBrandYoutube size={20} aria-hidden />
          </a>
          <a href="#" aria-label="TikTok">
            <IconBrandTiktok size={20} aria-hidden />
          </a>
          <a href="https://thexphng.mixlr.com/" target="_blank" rel="noopener noreferrer" aria-label="Mixlr">
            <img src="/mixlr.logo.svg" alt="" width={20} height={20} aria-hidden />
          </a>
        </div>
      </nav>

      <div className="nav__give">
        <a href="#" className="btn--nav">
          <IconHeart size={14} aria-hidden /> Give
        </a>
        <button
          className={`nav__hamburger${isMenuOpen ? ' open' : ''}`}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          onClick={handleToggle}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
