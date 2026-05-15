import { IconMapPin, IconClock, IconDeviceMobile, IconNavigation } from '@tabler/icons-react'

export default function Visit() {
  return (
    <section className="visit" id="visit" aria-labelledby="visit-heading">
      <div className="visit__inner">
        <div>
          <h2 id="visit-heading" className="visit__heading">
            Come worship<br />with <em>us</em>
          </h2>
          <p className="visit__body">
            Whether it&apos;s your first time or you&apos;re coming back, you&apos;ll find
            warmth, worship, and a community that genuinely cares.
          </p>

          <div className="visit__row">
            <div className="visit__icon"><IconMapPin size={20} aria-hidden /></div>
            <div>
              <div className="visit__label">Location</div>
              <div className="visit__value">
                The Ark, The Stone Church<br />
                Opp. Mokola Market, Behind NEPA Office, Mokola, Ibadan
              </div>
            </div>
          </div>

          <div className="visit__row">
            <div className="visit__icon"><IconClock size={20} aria-hidden /></div>
            <div>
              <div className="visit__label">Service time</div>
              <div className="visit__value">Every Sunday at 8:00 AM</div>
            </div>
          </div>

          <div className="visit__row">
            <div className="visit__icon"><IconDeviceMobile size={20} aria-hidden /></div>
            <div>
              <div className="visit__label">Connect online</div>
              <div className="visit__value">Mixlr · YouTube @thexphng · Facebook</div>
            </div>
          </div>

          <button className="btn--primary" style={{ marginTop: 'var(--space-sm)' }}>
            <IconNavigation size={16} aria-hidden /> Get directions
          </button>
        </div>

        <div className="visit__map" aria-label="Map showing The Ark, Mokola, Ibadan">
          <IconMapPin size={64} aria-hidden />
        </div>
      </div>
    </section>
  )
}
