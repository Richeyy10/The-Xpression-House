import Image from 'next/image'
import Link from 'next/link'
import {
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandX,
  IconBrandYoutube,
  IconBrandTiktok,
} from '@tabler/icons-react'

const socialLinkClass =
  'w-[38px] h-[38px] rounded-full border border-[rgba(240,237,230,0.08)] flex items-center justify-center text-[rgba(240,237,230,0.3)] no-underline transition-all duration-[250ms] ease-out hover:bg-bright-green hover:text-deep-green hover:border-bright-green'

const navLinkClass =
  'block text-[15px] text-[rgba(240,237,230,0.35)] no-underline mb-[14px] transition-colors duration-200 ease-out hover:text-bright-green'

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      className="bg-deep-charcoal pt-40 px-12 pb-12 border-t border-[rgba(31,208,0,0.2)] lt-sm:pt-12 lt-sm:px-4 lt-sm:pb-6"
    >
      {/* Main grid */}
      <div className="max-w-[1200px] mx-auto grid grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-12 lt-lg:grid-cols-2 lt-sm:grid-cols-1 lt-sm:gap-8">

        {/* Brand column */}
        <div className="flex flex-col">
          <div className="font-headline font-extrabold text-[18px] text-cream mb-4 tracking-[-0.02em] flex items-center gap-[10px]">
            <span className="w-9 h-9 rounded-full bg-white flex items-center justify-center flex-shrink-0 relative overflow-hidden">
              <Image
                src="/xph_logo_png2.png"
                alt="XPH Logo"
                fill
                style={{ objectFit: 'contain', padding: '6px' }}
              />
            </span>
            The Xpression House
          </div>
          <p className="text-[15px] leading-[1.7] text-[rgba(240,237,230,0.4)] max-w-[300px]">
            A vibrant, Spirit-led community for young adults in Ibadan and beyond.
          </p>
          <div className="flex gap-[10px] mt-6">
            <a href="https://www.instagram.com/thexphng" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={socialLinkClass}>
              <IconBrandInstagram size={16} aria-hidden />
            </a>
            <a href="https://www.facebook.com/thexphng" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className={socialLinkClass}>
              <IconBrandFacebook size={16} aria-hidden />
            </a>
            <a href="#" aria-label="X" className={socialLinkClass}>
              <IconBrandX size={16} aria-hidden />
            </a>
            <a href="https://www.youtube.com/@thexphng" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className={socialLinkClass}>
              <IconBrandYoutube size={16} aria-hidden />
            </a>
            <a href="#" aria-label="TikTok" className={socialLinkClass}>
              <IconBrandTiktok size={16} aria-hidden />
            </a>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <a href="https://thexphng.mixlr.com/" target="_blank" rel="noopener noreferrer" aria-label="Mixlr" className={socialLinkClass}>
              <img src="/mixlr.logo.svg" alt="" width={16} height={16} aria-hidden className="block" />
            </a>
          </div>
        </div>

        {/* Explore */}
        <nav aria-label="Explore">
          <h4 className="font-headline font-bold text-[12px] uppercase tracking-[.12em] text-bright-green mb-6">
            Explore
          </h4>
          <Link href="/about" className={navLinkClass}>About us</Link>
          <Link href="/#pastor" className={navLinkClass}>Our leadership</Link>
          <Link href="/about#belief-heading" className={navLinkClass}>Beliefs</Link>
          <Link href="/#sermon" className={navLinkClass}>Sermons</Link>
        </nav>

        {/* Connect */}
        <nav aria-label="Connect">
          <h4 className="font-headline font-bold text-[12px] uppercase tracking-[.12em] text-bright-green mb-6">
            Connect
          </h4>
          <Link href="/events" className={navLinkClass}>Events</Link>
          <Link href="/connect" className={navLinkClass}>Small groups</Link>
          <Link href="/connect" className={navLinkClass}>Volunteer</Link>
          <Link href="/connect" className={navLinkClass}>Prayer requests</Link>
        </nav>

        {/* Resources */}
        <nav aria-label="Resources">
          <h4 className="font-headline font-bold text-[12px] uppercase tracking-[.12em] text-bright-green mb-6">
            Resources
          </h4>
          <Link href="/give" className={navLinkClass}>Give online</Link>
          <Link href="/#setlist" className={navLinkClass}>Sunday setlist</Link>
          <Link href="/new-member" className={navLinkClass}>I&apos;m new here</Link>
          <Link href="/connect" className={navLinkClass}>Contact us</Link>
        </nav>
      </div>

      {/* Bottom bar */}
      <div className="max-w-[1200px] mx-auto pt-6 flex justify-center items-center text-[13px] text-[rgba(240,237,230,0.2)] lt-sm:flex-col lt-sm:gap-3 lt-sm:text-center">
        <span>&copy; 2026 The Xpression House. All rights reserved.</span>
      </div>
    </footer>
  )
}
