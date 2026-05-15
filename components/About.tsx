import { IconPlayerPlay, IconArrowRight } from '@tabler/icons-react'

export default function About() {
  return (
    <section className="about" id="about" aria-labelledby="about-heading">
      <div className="about__inner">
        <div className="about__grid">
          <div>
            <h2 id="about-heading" className="about__heading">
              The space – where we <em>passionately</em> connect faith and community
            </h2>
          </div>
          <div className="about__body">
            <p>
              The Xpression House is a devoted community that reveres the power of worship and
              authentic fellowship. Our passion lies in uniting young believers, cultivating
              spiritual growth, and creating a home for every expression of faith.
            </p>
            <p>
              Through our services, Bible studies, and community events, we provide a space where
              you encounter God&apos;s presence and build lasting relationships.
            </p>
            <a href="#" className="link--arrow">
              Discover our community <IconArrowRight size={14} aria-hidden />
            </a>
          </div>
        </div>
        <div
          className="about__video"
          role="img"
          aria-label="Video preview of Sunday worship service"
        >
          <button className="play-btn" aria-label="Play worship service video">
            <IconPlayerPlay size={24} aria-hidden />
          </button>
        </div>
      </div>
    </section>
  )
}
