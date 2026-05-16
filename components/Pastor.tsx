import Image from 'next/image'
import ArrowLink from './ui/ArrowLink'

export default function Pastor() {
  return (
    <section className="pastor" id="pastor" aria-labelledby="pastor-heading">
      <div className="pastor__inner">
        <div className="pastor__photo">
          <Image
            src="/PFE.jpg"
            alt="Pastor Fred A. Elegbe"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center top' }}
            priority
          />
        </div>
        <div>
          <div className="pastor__overline">
            <span className="pastor__overline-line" aria-hidden="true" />
            Meet our pastor
          </div>
          <h2 id="pastor-heading" className="pastor__name">
            Pastor Fred <em>A. Elegbe</em>
          </h2>
          <div className="pastor__role">Lead Pastor, The Xpression House</div>
          <p className="pastor__bio">
            Pastor Fred A. Elegbe is the visionary leader behind The Xpression House. With a
            heart for young adults and a passion for authentic, Spirit-led worship, he has built
            a community where faith is lived out boldly and without pretence.
          </p>
          <p className="pastor__bio">
            His teaching style blends deep scriptural insight with practical, relatable
            application — meeting people exactly where they are. Under his leadership, The
            Xpression House has grown from a small gathering into a vibrant community of
            believers impacting Ibadan and beyond.
          </p>
          <ArrowLink>Learn more about our leadership</ArrowLink>
        </div>
      </div>
    </section>
  )
}
