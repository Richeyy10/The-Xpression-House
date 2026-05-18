import Image from 'next/image'
import Link from 'next/link'
import {
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandX,
  IconBrandYoutube,
  IconBrandTiktok,
} from '@tabler/icons-react'

export default function Footer() {
  return (
    <footer role="contentinfo">
      <div className="footer__grid">
        <div className="footer__brand">
          <div className="footer__brand-logo">
            <span className="footer__brand-mark">
              <Image
                src="/xph_logo_png2.png"
                alt="XPH Logo"
                fill
                style={{ objectFit: 'contain', padding: '6px' }}
              />
            </span>
            The Xpression House
          </div>
          <p>A vibrant, Spirit-led community for young adults in Ibadan and beyond.</p>
          <div className="footer__socials">
            <a href="https://www.instagram.com/thexphng" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><IconBrandInstagram size={16} aria-hidden /></a>
            <a href="https://www.facebook.com/thexphng" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><IconBrandFacebook size={16} aria-hidden /></a>
            <a href="#" aria-label="X"><IconBrandX size={16} aria-hidden /></a>
            <a href="https://www.youtube.com/@thexphng" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><IconBrandYoutube size={16} aria-hidden /></a>
            <a href="#" aria-label="TikTok"><IconBrandTiktok size={16} aria-hidden /></a>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <a href="https://thexphng.mixlr.com/" target="_blank" rel="noopener noreferrer" aria-label="Mixlr"><img src="/mixlr.logo.svg" alt="" width={16} height={16} aria-hidden /></a>
          </div>
        </div>

        <nav className="footer__col" aria-label="Explore">
          <h4>Explore</h4>
          <Link href="/about">About us</Link>
          <Link href="/#pastor">Our leadership</Link>
          <Link href="/about#belief-heading">Beliefs</Link>
          <Link href="/#sermon">Sermons</Link>
        </nav>

        <nav className="footer__col" aria-label="Connect">
          <h4>Connect</h4>
          <Link href="/events">Events</Link>
          <Link href="/connect">Small groups</Link>
          <Link href="/connect">Volunteer</Link>
          <Link href="/connect">Prayer requests</Link>
        </nav>

        <nav className="footer__col" aria-label="Resources">
          <h4>Resources</h4>
          <Link href="/give">Give online</Link>
          <Link href="/#setlist">Sunday setlist</Link>
          <Link href="/new-member">I&apos;m new here</Link>
          <Link href="/connect">Contact us</Link>
        </nav>
      </div>

      <div className="footer__bottom">
        <span>&copy; 2026 The Xpression House. All rights reserved.</span>
      </div>
    </footer>
  )
}
