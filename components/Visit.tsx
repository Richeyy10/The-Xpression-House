import { IconMapPin, IconClock, IconDeviceMobile, IconBrandYoutube, IconBrandFacebook } from '@tabler/icons-react'
// import Button from './ui/Button'

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
              <div className="visit__value">Every Sunday at 8:00 AM, and Wednesday at 5:30 PM (WAT)</div>
            </div>
          </div>

          <div className="visit__row">
            <div className="visit__icon"><IconDeviceMobile size={20} aria-hidden /></div>
            <div>
              <div className="visit__label">Stream online</div>
              <div className="visit__social-links">
                <a href="https://thexphng.mixlr.com/" target="_blank" rel="noopener noreferrer" className="visit__social-link" aria-label="Mixlr">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/mixlr.logo.svg" alt="" width={22} height={22} aria-hidden />
                  <span>Mixlr</span>
                </a>
                <a href="https://www.youtube.com/@thexphng/live" target="_blank" rel="noopener noreferrer" className="visit__social-link" aria-label="YouTube">
                  <IconBrandYoutube size={22} aria-hidden />
                  <span>YouTube</span>
                </a>
                <a href="https://www.facebook.com/thexphng" target="_blank" rel="noopener noreferrer" className="visit__social-link" aria-label="Facebook">
                  <IconBrandFacebook size={22} aria-hidden />
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>

          {/* <Button
            icon={<IconNavigation size={16} aria-hidden />}
            style={{ marginTop: 'var(--space-sm)' }}
          >
            Get directions
          </Button> */}
        </div>

        <div className="visit__map">
          <iframe
            src="https://maps.google.com/maps?q=The+Xpression+House,+CV4Q%2B8FV,+Mokola+Rd,+Ibadan,+Nigeria&output=embed&z=17&hl=en"
            title="The Xpression House"
            width="100%"
            height="100%"
            style={{ border: 0, display: 'block' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}
