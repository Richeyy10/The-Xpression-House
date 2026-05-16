import type { Metadata } from 'next'
import { Cormorant_Garamond, Syne, DM_Sans } from 'next/font/google'
import './globals.css'

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-quote',
  display: 'swap',
})

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-headline',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'The Xpression House – Where Faith Meets Expression',
  description:
    'The Xpression House is a vibrant, Spirit-led community for young adults in Ibadan. Join us for worship, fellowship, and growth every Sunday at 8:00 AM.',
  icons: {
    icon: '/xph_logo_png1.png',
    apple: '/xph_logo_png1.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${syne.variable} ${dmSans.variable}`}
    >
      <body>
        <a href="#main" className="skip-link">Skip to main content</a>
        {children}
      </body>
    </html>
  )
}
