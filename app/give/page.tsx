'use client'

import { useState } from 'react'
import {
  IconCheck,
  IconCopy,
  IconCurrencyNaira,
  IconCurrencyDollar,
  IconCurrencyEuro,
  IconCurrencyBitcoin,
  IconCurrencyEthereum,
  IconBrandTether,
} from '@tabler/icons-react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import FAQ from '@/components/FAQ'
import { useRevealOnScroll, useRevealManyOnScroll } from '@/hooks/useRevealOnScroll'

interface BankAccount {
  id: string
  currency: string
  currencySymbol: string
  bank: string
  accountName: string
  accountNumber: string
  BgIcon: typeof IconCurrencyNaira
}

interface CryptoAccount {
  id: string
  currency: string
  network: string
  address: string
  BgIcon: typeof IconCurrencyBitcoin | typeof IconCurrencyEthereum | typeof IconBrandTether
}

const bankAccounts: BankAccount[] = [
  {
    id: 'ngn',
    currency: 'NGN &#8212; Nigerian Naira',
    currencySymbol: '&#8358;',
    bank: 'Guaranty Trust Bank (GTBank)',
    accountName: 'The Xpression House',
    accountNumber: '0123456789',
    BgIcon: IconCurrencyNaira,
  },
  {
    id: 'usd',
    currency: 'USD &#8212; US Dollar',
    currencySymbol: '$',
    bank: 'Zenith Bank (Domiciliary)',
    accountName: 'The Xpression House',
    accountNumber: '1122334455',
    BgIcon: IconCurrencyDollar,
  },
  {
    id: 'eur',
    currency: 'EUR &#8212; Euro',
    currencySymbol: '&#8364;',
    bank: 'First Bank of Nigeria (Domiciliary)',
    accountName: 'The Xpression House',
    accountNumber: '9988776655',
    BgIcon: IconCurrencyEuro,
  },
]

const cryptoAccounts: CryptoAccount[] = [
  {
    id: 'btc',
    currency: 'Bitcoin',
    network: 'BTC &#8212; Bitcoin Network',
    address: 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh',
    BgIcon: IconCurrencyBitcoin,
  },
  {
    id: 'eth',
    currency: 'Ethereum',
    network: 'ETH &#8212; ERC-20 / Ethereum Mainnet',
    address: '0x71C7656EC7ab88b098defB751B7401B5f6d8976F',
    BgIcon: IconCurrencyEthereum,
  },
  {
    id: 'usdt',
    currency: 'Tether',
    network: 'USDT &#8212; TRC-20 / TRON Network',
    address: 'TGBgsdYiKzReMijMnkRdAmVLgWEjT3NJHQ',
    BgIcon: IconBrandTether,
  },
]

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)
  const handle = async () => {
    try { await navigator.clipboard.writeText(text) } catch { return }
    setCopied(true)
    setTimeout(() => setCopied(false), 2200)
  }
  return (
    <button
      className={`copy-btn${copied ? ' copy-btn--copied' : ''}`}
      onClick={handle}
      aria-label={copied ? 'Copied!' : `Copy ${text}`}
    >
      {copied
        ? <><IconCheck size={12} aria-hidden={true} /> Copied</>
        : <><IconCopy size={12} aria-hidden={true} /> Copy</>
      }
    </button>
  )
}

function GiveHero() {
  const ref = useRevealOnScroll()
  return (
    <section
      className="pt-[calc(var(--nav-height)+var(--space-3xl))] px-12 pb-16 max-w-[1200px] mx-auto lt-lg:px-8 lt-sm:px-3"
      aria-labelledby="give-heading"
    >
      <div ref={ref} className="void-card">
        <p className="flex items-center gap-[10px] font-headline text-[11px] font-bold uppercase tracking-[.15em] text-bright-green mb-6">
          <span className="w-8 h-[1.5px] bg-bright-green inline-block" aria-hidden={true} />
          Generosity
        </p>
        <h1
          id="give-heading"
          className="font-quote text-[clamp(52px,8vw,96px)] font-light leading-[1.05] tracking-[-0.02em] text-cream mb-6 lt-sm:text-[36px]"
        >
          Give and it shall be <em className="italic text-bright-green font-normal">given</em>
        </h1>
        <p className="text-[17px] text-[rgba(240,237,230,0.5)] max-w-[560px] leading-[1.8]">
          Every gift sown into XPH funds worship nights, outreach, discipleship, and keeps
          our doors open for anyone who walks in. Thank you for partnering with us.
        </p>
      </div>
    </section>
  )
}

function BankSection() {
  const ref = useRevealManyOnScroll('.give-tile--bank')
  return (
    <section className="max-w-[1200px] mx-auto px-12 pb-20 lt-lg:px-8 lt-sm:px-3" aria-labelledby="bank-heading">
      <p className="flex items-center gap-[10px] font-headline text-[11px] font-bold uppercase tracking-[.15em] text-[rgba(240,237,230,0.35)] mb-6 pt-16 border-t border-[rgba(240,237,230,0.07)]">
        <span className="w-8 h-px bg-[rgba(240,237,230,0.2)] inline-block" aria-hidden={true} />
        Bank Transfer
      </p>
      <h2 id="bank-heading" className="font-quote text-[32px] font-light text-cream mb-12 tracking-[-0.01em] lt-lg:text-[26px] lt-sm:text-[22px]">
        Nigerian &amp; foreign accounts
      </h2>
      <div ref={ref} className="grid grid-cols-3 gap-6 -mx-20 lt-lg:grid-cols-3 lt-lg:-mx-10 lt-md:grid-cols-2 lt-md:mx-0 lt-sm:grid-cols-1">
        {bankAccounts.map(({ id, currency, bank, accountName, accountNumber, BgIcon }) => (
          <div key={id} className="give-tile give-tile--bank void-card">
            <BgIcon size={150} className="give-tile__bg-icon" aria-hidden={true} />
            <span
              className="font-headline text-[10px] font-bold tracking-[.16em] uppercase text-bright-green"
              dangerouslySetInnerHTML={{ __html: currency }}
            />
            <span className="text-[13px] text-[rgba(240,237,230,0.4)] mt-0.5">{bank}</span>
            <span className="font-quote text-[22px] font-normal text-cream leading-[1.2]">{accountName}</span>
            <span className="give-tile__number">{accountNumber}</span>
            <hr className="border-none border-t border-[rgba(240,237,230,0.07)] my-1" />
            <div className="flex items-center justify-between">
              <span className="font-headline text-[10px] tracking-[.06em] text-[rgba(240,237,230,0.35)]">Account No.</span>
              <CopyButton text={accountNumber} />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function CryptoSection() {
  const ref = useRevealManyOnScroll('.give-tile--crypto')
  return (
    <section className="max-w-[1200px] mx-auto px-12 pb-20 lt-lg:px-8 lt-sm:px-3" aria-labelledby="crypto-heading">
      <p className="flex items-center gap-[10px] font-headline text-[11px] font-bold uppercase tracking-[.15em] text-[rgba(240,237,230,0.35)] mb-6 pt-16 border-t border-[rgba(240,237,230,0.07)]">
        <span className="w-8 h-px bg-[rgba(240,237,230,0.2)] inline-block" aria-hidden={true} />
        Digital Currency
      </p>
      <h2 id="crypto-heading" className="font-quote text-[32px] font-light text-cream mb-12 tracking-[-0.01em] lt-lg:text-[26px] lt-sm:text-[22px]">
        Cryptocurrency wallets
      </h2>
      <div ref={ref} className="grid grid-cols-3 gap-6 -mx-20 lt-lg:grid-cols-3 lt-lg:-mx-10 lt-md:grid-cols-2 lt-md:mx-0 lt-sm:grid-cols-1">
        {cryptoAccounts.map(({ id, currency, network, address, BgIcon }) => (
          <div key={id} className="give-tile give-tile--crypto void-card">
            <BgIcon size={150} className="give-tile__bg-icon" aria-hidden={true} />
            <span className="font-headline text-[10px] font-bold tracking-[.16em] uppercase text-bright-green">{currency}</span>
            <span
              className="text-[13px] text-[rgba(240,237,230,0.4)] mt-0.5"
              dangerouslySetInnerHTML={{ __html: network }}
            />
            <p className="text-[15px] text-[rgba(240,237,230,0.8)] leading-[1.5] font-mono font-bold whitespace-nowrap overflow-hidden text-ellipsis">
              {address.length > 30 ? `${address.slice(0, 30)}…` : address}
            </p>
            <hr className="border-none border-t border-[rgba(240,237,230,0.07)] my-1" />
            <div className="flex items-center justify-between">
              <span className="font-headline text-[10px] tracking-[.06em] text-[rgba(240,237,230,0.35)]">Wallet Address</span>
              <CopyButton text={address} />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function GiveConfession() {
  const ref = useRevealOnScroll()
  return (
    <section className="max-w-[1200px] mx-auto px-12 pb-40 lt-sm:px-3" aria-label="Giving confession">
      <div ref={ref} className="py-16 px-12 text-center void-card lt-sm:py-8 lt-sm:px-6">
        <p className="font-quote text-[clamp(20px,3vw,30px)] font-light italic leading-[1.5] text-cream mb-6 relative lt-sm:text-[clamp(16px,5vw,22px)]">
          I am a cheerful, generous giver. I release my resources freely into the Kingdom,
          knowing that God is my source and His supply has no limit. Every seed I sow returns
          to me multiplied &#8212; pressed down, shaken together, running over. I give not
          from obligation, but from a heart overflowing with faith and gratitude.
        </p>
        <p className="font-headline text-[11px] font-bold tracking-[.15em] uppercase text-bright-green">
          My giving confession
        </p>
      </div>
    </section>
  )
}

export default function GivePage() {
  return (
    <>
      <Nav />
      <main id="main">
        <GiveHero />
        <BankSection />
        <CryptoSection />
        <GiveConfession />
        <FAQ />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
