'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { IconHeart, IconMenu2, IconX } from '@tabler/icons-react'

export default function Nav() {
  const [solid, setSolid] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`nav${solid ? ' solid' : ''}`} id="nav" role="banner">
      <a href="#" className="nav__logo" aria-label="The Xpression House home">
        <span className="nav__logo-mark">
          <Image
            src="/xph_logo_png1.png"
            alt="XPH Logo"
            fill
            style={{ objectFit: 'contain' }}
          />
        </span>
      </a>

      <nav
        className={`nav__links${menuOpen ? ' open' : ''}`}
        aria-label="Primary navigation"
      >
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#events" onClick={closeMenu}>Events</a>
        <a href="#new" onClick={closeMenu}>I&apos;m New</a>
        <a href="#contact" onClick={closeMenu}>Connect</a>
      </nav>

      <div className="nav__give">
        <a href="#" className="btn--nav">
          <IconHeart size={14} aria-hidden /> Give
        </a>
        <button
          className="nav__hamburger"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen(v => !v)}
        >
          {menuOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
        </button>
      </div>
    </header>
  )
}
