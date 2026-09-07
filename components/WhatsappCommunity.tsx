'use client'

import { IconBrandWhatsapp, IconArrowUpRight } from '@tabler/icons-react'

interface WhatsAppCommunityProps {
  groupUrl?: string
}

export default function WhatsAppCommunity({
  groupUrl = 'https://chat.whatsapp.com/REPLACE_WITH_YOUR_INVITE_LINK',
}: WhatsAppCommunityProps) {
  return (
    <section className="max-w-[1200px] mx-auto px-12 py-16 lt-lg:px-8 lt-sm:px-3">
      <div className="glass-card flex items-center justify-between gap-10 p-12 lt-lg:flex-col lt-lg:items-start lt-lg:p-8 lt-sm:p-6">
        <div className="relative z-[1] max-w-[560px]">
          <p className="flex items-center gap-[10px] font-headline text-[11px] font-bold uppercase tracking-[.15em] text-bright-green mb-5">
            <IconBrandWhatsapp size={16} aria-hidden={true} />
            Stay in the loop
          </p>
          <h2 className="font-quote text-[clamp(28px,3vw,40px)] font-light leading-[1.15] tracking-[-0.01em] text-cream mb-4">
            Join the XPH community on <em className="italic text-bright-green font-normal">WhatsApp</em>
          </h2>
          <p className="text-[15px] text-[rgba(240,237,230,0.5)] leading-[1.8]">
            Event reminders, prayer chains, and the everyday conversation that happens
            between Sundays &#8212; all in one group.
          </p>
        </div>
        <a
          href={groupUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn--primary relative z-[1] flex-shrink-0 whitespace-nowrap lt-lg:w-full lt-lg:justify-center"
        >
          Join the group
          <IconArrowUpRight size={16} aria-hidden={true} />
        </a>
      </div>
    </section>
  )
}