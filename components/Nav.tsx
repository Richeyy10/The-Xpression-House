'use client'

import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  IconHeart,
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandX,
  IconBrandYoutube,
  IconBrandTiktok,
} from '@tabler/icons-react'

type MenuState = 'closed' | 'open' | 'closing'

function lockScroll(savedY: { current: number }) {
  savedY.current = window.scrollY
  document.body.style.cssText += ';position:fixed;top:-' + savedY.current + 'px;left:0;right:0;'
}

function unlockScroll(savedY: { current: number }) {
  document.body.style.position = ''
  document.body.style.top = ''
  document.body.style.left = ''
  document.body.style.right = ''
  // Restore position without triggering smooth-scroll
  document.documentElement.style.scrollBehavior = 'auto'
  window.scrollTo(0, savedY.current)
  // Use two rAFs so the browser has fully committed the position before re-enabling smooth-scroll
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      document.documentElement.style.scrollBehavior = ''
    })
  })
}

export default function Nav() {
  const [solid, setSolid] = useState(false)
  const [menuState, setMenuState] = useState<MenuState>('closed')
  const pathname = usePathname()
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const savedScrollY = useRef(0)

  const isMenuOpen = menuState !== 'closed'

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Only handles locking on open. Unlock is handled imperatively in closeMenu
  // so it completes before React re-renders (avoiding the viewport-to-0 flash).
  useLayoutEffect(() => {
    if (isMenuOpen) lockScroll(savedScrollY)
    return () => {
      // Safety net: always clean up body styles on unmount
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.left = ''
      document.body.style.right = ''
    }
  }, [isMenuOpen])

  useEffect(() => () => { if (closeTimer.current) clearTimeout(closeTimer.current) }, [])

  const closeMenu = () => {
    if (menuState === 'closed') return
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setMenuState('closing')
    closeTimer.current = setTimeout(() => {
      // Unlock scroll BEFORE setting state so the position restores
      // in the same task as the body un-fix, before any React paint.
      unlockScroll(savedScrollY)
      setMenuState('closed')
    }, 460)
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

  const isActive = (path: string) =>
    path === '/' ? pathname === '/' : pathname.startsWith(path)

  return (
    <header
      className={`nav${solid ? ' solid' : ''}${isMenuOpen ? ' menu-open' : ''}`}
      id="nav"
      role="banner"
    >
      <Link href="/" className="nav__logo" aria-label="The Xpression House home">
        <span className="nav__logo-mark">
          <Image src="/xph_logo_png1.png" alt="XPH Logo" fill style={{ objectFit: 'contain' }} />
        </span>
      </Link>

      <nav
        className={navClass}
        aria-label="Primary navigation"
        onClick={(e) => { if (e.target === e.currentTarget) closeMenu() }}
      >
        <Link href="/about" onClick={closeMenu} className={isActive('/about') ? 'active' : undefined}>About</Link>
        <Link href="/events" onClick={closeMenu} className={isActive('/events') ? 'active' : undefined}>Events</Link>
        <Link href="/ablaze" onClick={closeMenu} className={isActive('/ablaze') ? 'active' : undefined}>Ablaze</Link>
        <Link href="/ministries" onClick={closeMenu} className={isActive('/ministries') ? 'active' : undefined}>Ministries</Link>
        <Link href="/new-member" onClick={closeMenu} className={isActive('/new-member') ? 'active' : undefined}>I&apos;m New</Link>
        <Link href="/blog" onClick={closeMenu} className={isActive('/blog') ? 'active' : undefined}>Blog</Link>
        <Link href="/connect" onClick={closeMenu} className={isActive('/connect') ? 'active' : undefined}>Connect</Link>
        <Link href="/give" onClick={closeMenu} className={`nav__give-link${isActive('/give') ? ' active' : ''}`}>Give</Link>

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
        <Link href="/give" className="btn--nav">
          <IconHeart size={14} aria-hidden /> Give
        </Link>
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
