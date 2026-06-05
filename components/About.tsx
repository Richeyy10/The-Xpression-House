"use client";
import { useRef, useState } from 'react'
import { IconPlayerPlay, IconPlayerPause } from '@tabler/icons-react'
import ArrowLink from './ui/ArrowLink'

export default function About() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const togglePlay = () => {
    const video = videoRef.current
    if (!video) return

    if (isPlaying) {
      video.pause()
      setIsPlaying(false)
    } else {
      video.play()
      setIsPlaying(true)
    }
  }

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
            <ArrowLink>Discover our community</ArrowLink>
          </div>
        </div>

        <div className="about__video">
          <video
            ref={videoRef}
            src="/videos/worship-service.mp4"   
            poster="/background.jpg" 
            preload="none"
            playsInline
            onEnded={() => setIsPlaying(false)}
          />
          <button
            className={`play-btn ${isPlaying ? 'play-btn--playing' : ''}`}
            onClick={togglePlay}
            aria-label={isPlaying ? 'Pause worship service video' : 'Play worship service video'}
          >
            {isPlaying
              ? <IconPlayerPause size={24} aria-hidden />
              : <IconPlayerPlay size={24} aria-hidden />
            }
          </button>
        </div>
      </div>
    </section>
  )
}