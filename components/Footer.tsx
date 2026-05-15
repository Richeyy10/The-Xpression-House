import Image from 'next/image'
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
                src="/xph logo png1.png"
                alt="XPH Logo"
                fill
                style={{ objectFit: 'contain', padding: '6px' }}
              />
            </span>
            The Xpression House
          </div>
          <p>A vibrant, Spirit-led community for young adults in Ibadan and beyond.</p>
          <div className="footer__socials">
            <a href="#" aria-label="Instagram"><IconBrandInstagram size={16} aria-hidden /></a>
            <a href="#" aria-label="Facebook"><IconBrandFacebook size={16} aria-hidden /></a>
            <a href="#" aria-label="X"><IconBrandX size={16} aria-hidden /></a>
            <a href="#" aria-label="YouTube"><IconBrandYoutube size={16} aria-hidden /></a>
            <a href="#" aria-label="TikTok"><IconBrandTiktok size={16} aria-hidden /></a>
          </div>
        </div>

        <nav className="footer__col" aria-label="Explore">
          <h4>Explore</h4>
          <a href="#">About us</a>
          <a href="#">Our leadership</a>
          <a href="#">Beliefs</a>
          <a href="#">Sermons</a>
        </nav>

        <nav className="footer__col" aria-label="Connect">
          <h4>Connect</h4>
          <a href="#">Events</a>
          <a href="#">Small groups</a>
          <a href="#">Volunteer</a>
          <a href="#">Prayer requests</a>
        </nav>

        <nav className="footer__col" aria-label="Resources">
          <h4>Resources</h4>
          <a href="#">Give online</a>
          <a href="#">Sunday setlist</a>
          <a href="#">Zoomers Bible</a>
          <a href="#">Contact us</a>
        </nav>
      </div>

      <div className="footer__bottom">
        <span>&copy; 2026 The Xpression House. All rights reserved.</span>
        <div style={{ display: 'flex', gap: 'var(--space-md)' }}>
          <a href="#">Privacy policy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  )
}
