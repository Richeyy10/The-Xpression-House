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
    <section className="inner-hero" aria-labelledby="give-heading">
      <div ref={ref} className="void-card">
        <p className="inner-hero__overline">
          <span className="inner-hero__overline-line" aria-hidden={true} />
          Generosity
        </p>
        <h1 id="give-heading" className="inner-hero__heading">
          Give and it shall be <em>given</em>
        </h1>
        <p className="inner-hero__sub">
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
    <section className="give-section" aria-labelledby="bank-heading">
      <p className="give-section__overline">
        <span className="give-section__overline-line" aria-hidden={true} />
        Bank Transfer
      </p>
      <h2 id="bank-heading" className="give-section__title">Nigerian &amp; foreign accounts</h2>
      <div ref={ref} className="give-tiles">
        {bankAccounts.map(({ id, currency, bank, accountName, accountNumber, BgIcon }) => (
          <div key={id} className="give-tile give-tile--bank void-card">
            <BgIcon
              size={150}
              className="give-tile__bg-icon"
              aria-hidden={true}
            />
            <span
              className="give-tile__currency"
              dangerouslySetInnerHTML={{ __html: currency }}
            />
            <span className="give-tile__bank">{bank}</span>
            <span className="give-tile__name">{accountName}</span>
            <span className="give-tile__number">{accountNumber}</span>
            <hr className="give-tile__divider" />
            <div className="give-tile__footer">
              <span className="give-tile__label">Account No.</span>
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
    <section className="give-section" aria-labelledby="crypto-heading">
      <p className="give-section__overline">
        <span className="give-section__overline-line" aria-hidden={true} />
        Digital Currency
      </p>
      <h2 id="crypto-heading" className="give-section__title">Cryptocurrency wallets</h2>
      <div ref={ref} className="give-tiles">
        {cryptoAccounts.map(({ id, currency, network, address, BgIcon }) => (
          <div key={id} className="give-tile give-tile--crypto void-card">
            <BgIcon
              size={150}
              className="give-tile__bg-icon"
              aria-hidden={true}
            />
            <span className="give-tile__currency">{currency}</span>
            <span
              className="give-tile__bank"
              dangerouslySetInnerHTML={{ __html: network }}
            />
            <p className="give-tile__addr">
              {address.length > 30 ? `${address.slice(0, 30)}…` : address}
            </p>
            <hr className="give-tile__divider" />
            <div className="give-tile__footer">
              <span className="give-tile__label">Wallet Address</span>
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
    <section className="give-scripture" aria-label="Giving confession">
      <div ref={ref} className="give-scripture__inner void-card">
        <p className="give-scripture__text">
          I am a cheerful, generous giver. I release my resources freely into the Kingdom,
          knowing that God is my source and His supply has no limit. Every seed I sow returns
          to me multiplied &#8212; pressed down, shaken together, running over. I give not
          from obligation, but from a heart overflowing with faith and gratitude.
        </p>
        <p className="give-scripture__ref">My giving confession</p>
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
