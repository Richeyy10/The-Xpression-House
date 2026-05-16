'use client'

import { IconHeart, IconGift, IconSeedling } from '@tabler/icons-react'
import Button from './ui/Button'
import { useRevealManyOnScroll } from '../hooks/useRevealOnScroll'

export default function GivingCTA() {
  const gridRef = useRevealManyOnScroll<HTMLDivElement>('.void-card')

  return (
    <section className="giving-cta" id="give" aria-label="Support the mission">
      <div className="giving-cta__grid" ref={gridRef}>

        {/* Card 1 — photo background */}
        <div className="giving-cta__card giving-cta__card--photo void-card">
          <div className="giving-cta__photo-overlay" />
          <div className="giving-cta__content">
            <h2 className="giving-cta__heading">
              Tithes, seeds &<br /><em>offerings.</em>
            </h2>
            <p className="giving-cta__body">
              Every seed planted in faith returns as a harvest. Honour God with
              your tithes, seeds, gifts, and donations.
            </p>
            <div className="giving-cta__actions">
              <Button href="#" icon={<IconHeart size={16} aria-hidden />}>Give online</Button>
            </div>
          </div>
        </div>

        {/* Card 2 — coming soon */}
        <div className="giving-cta__card giving-cta__card--pattern giving-cta__card--soon void-card" aria-disabled="true">
          <div className="giving-cta__watermark" aria-hidden>
            <IconSeedling size={260} />
          </div>
          <div className="giving-cta__soon-overlay" aria-hidden>
            <span className="giving-cta__soon-badge">Coming soon</span>
          </div>
          <div className="giving-cta__content">
            <h2 className="giving-cta__heading">
              Support the <em>mission.</em><br />Give generously.
            </h2>
            <div className="giving-cta__actions">
              <Button
                href="#"
                variant="secondary"
                icon={<IconGift size={16} aria-hidden />}
                tabIndex={-1}
                aria-disabled="true"
                onClick={e => e.preventDefault()}
              >
                Donate items
              </Button>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
