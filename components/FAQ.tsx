'use client'

import { useState } from 'react'
import { IconPlus } from '@tabler/icons-react'
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll'

interface FAQItem { q: string; a: string }

const faqs: FAQItem[] = [
  {
    q: 'What should I expect at my first service?',
    a: 'A warm welcome, passionate worship, a relevant message from Scripture, and a community that genuinely cares. Services typically run about 90 minutes.',
  },
  {
    q: 'What time does service start?',
    a: 'Sunday services begin at 8:00 AM. Doors open at 7:30 AM, so feel free to arrive early and settle in.',
  },
  {
    q: 'Is there a dress code?',
    a: 'Not at all. Come as you are &#8212; we mean that. Some people dress up, some keep it casual. What matters is that you are here.',
  },
  {
    q: 'Are children welcome?',
    a: 'Absolutely. XPH Kids runs concurrently with the main service, so parents can worship fully while children learn in a safe, fun environment.',
  },
  {
    q: 'I am not a Christian. Can I still come?',
    a: 'Yes, and we would love to have you. XPH is a place for people at every stage of their journey. Just come with an open heart.',
  },
  {
    q: 'How do I get involved beyond Sunday?',
    a: 'We have connect groups, prayer meetings, ministry teams, and community events throughout the month. Reach out via our Connect page and the team will guide you.',
  },
]

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)
  const ref = useRevealOnScroll()

  return (
    <section className="faq-section" aria-labelledby="faq-section-heading">
      <div ref={ref} className="faq-section__inner void-card">
        <p className="faq-section__overline">
          <span className="faq-section__overline-line" aria-hidden={true} />
          Questions
        </p>
        <h2 id="faq-section-heading" className="faq-section__title">
          Things people usually <em>ask</em>
        </h2>
        <div className="faq-list" role="list">
          {faqs.map((item, i) => (
            <div
              key={i}
              role="listitem"
              className={`faq-item${openIdx === i ? ' faq-item--open' : ''}`}
            >
              <button
                className="faq-item__trigger"
                aria-expanded={openIdx === i}
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
              >
                <span
                  className="faq-item__question"
                  dangerouslySetInnerHTML={{ __html: item.q }}
                />
                <span className="faq-item__icon" aria-hidden={true}>
                  <IconPlus size={14} />
                </span>
              </button>
              <div className="faq-item__body" aria-hidden={openIdx !== i}>
                <p
                  className="faq-item__answer"
                  dangerouslySetInnerHTML={{ __html: item.a }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
