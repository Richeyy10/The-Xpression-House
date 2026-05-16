import { IconBuildingChurch, IconUsers, IconWorld } from '@tabler/icons-react'
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
            The Xpression House is proudly part of The Stone Church family — a growing network of
            churches committed to raising a generation of Kingdom-minded believers. Rooted in
            sound doctrine and driven by a mandate to reach the lost, The Stone Church provides
            the spiritual covering, accountability, and structure that undergirds everything we do
            at The Xpression House.
          </p>
          <div className="headchurch__details">
            <div className="headchurch__detail">
              <IconBuildingChurch size={18} aria-hidden />
              Established community of faith across multiple locations
            </div>
            <div className="headchurch__detail">
              <IconUsers size={18} aria-hidden />
              A network committed to discipleship and spiritual growth
            </div>
            <div className="headchurch__detail">
              <IconWorld size={18} aria-hidden />
              Impacting communities beyond Ibadan
            </div>
          </div>
          <ArrowLink>Visit The Stone Church</ArrowLink>
        </div>
        <div className="headchurch__photo" role="img" aria-label="The Stone Church">
          <IconBuildingChurch size={64} aria-hidden />
        </div>
      </div>
    </section>
  )
}
