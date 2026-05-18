import { IconBuildingChurch, IconMapPin, IconCalendar, IconWorld } from '@tabler/icons-react'
import ArrowLink from './ui/ArrowLink'

export default function HeadChurch() {
  return (
    <section className="headchurch" aria-labelledby="headchurch-heading">
      <div className="headchurch__inner">
        <div>
          <div className="headchurch__overline">
            <span className="headchurch__overline-line" aria-hidden="true" />
            Our head church
          </div>
          <h2 id="headchurch-heading" className="headchurch__name">
            The Stone <em>Church</em>
          </h2>
          <p className="headchurch__body">
            It all started on <strong>April 23rd, 1993</strong> at the Omega Conference
            Centre, Favos Building, New Bodija, Ibadan, Oyo State. The inaugural Sunday
            service followed the very next morning at 8 a.m. at the same venue. What began
            as a single gathering has since grown into a movement{' '}
            &#8212; The Stone Church has expanded to more than{' '}
            <strong>fifty-three (53) locations across four continents</strong>, with its
            headquarters now permanently established at Mokola, Ibadan.
          </p>
          <p className="headchurch__body" style={{ marginBottom: 'var(--space-lg)' }}>
            Registered as an arm of the{' '}
            <strong>Word Alive Ministries International</strong>, The Stone Church continues
            to establish branches all over the country and overseas, providing the spiritual
            covering and apostolic structure that undergirds everything we do at XPH.
          </p>
          <div className="headchurch__details">
            <div className="headchurch__detail">
              <IconCalendar size={18} aria-hidden={true} />
              Founded April 23rd, 1993 &#8212; Ibadan, Oyo State
            </div>
            <div className="headchurch__detail">
              <IconBuildingChurch size={18} aria-hidden={true} />
              53+ locations across 4 continents
            </div>
            <div className="headchurch__detail">
              <IconMapPin size={18} aria-hidden={true} />
              Headquarters: Mokola, Ibadan
            </div>
            <div className="headchurch__detail">
              <IconWorld size={18} aria-hidden={true} />
              An arm of Word Alive Ministries International
            </div>
          </div>
          <ArrowLink>Visit The Stone Church</ArrowLink>
        </div>
        <div className="headchurch__photo" role="img" aria-label="The Stone Church">
          <IconBuildingChurch size={64} aria-hidden={true} />
        </div>
      </div>
    </section>
  )
}
