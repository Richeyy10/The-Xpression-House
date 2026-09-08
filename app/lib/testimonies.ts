export interface Testimony {
  id: string
  name: string
  category: string
  date: string
  image: string
  imageAlt: string
  quote: string
  story: string[]
}

export const testimonies: Testimony[] = [
  {
    id: 'bukola-healing',
    name: 'Bukola A.',
    category: 'Healing',
    date: '3 May 2026',
    image: '/testimonies/anjola.jpg',
    imageAlt: 'Bukola smiling, standing outside the church building',
    quote:
      'I came to XPH during the hardest medical season of my life. Through the prayer team and the community that surrounded me, I watched God turn things around when I had nearly given up hope.',
    story: [
      'I came to XPH during the hardest medical season of my life. I had just received a diagnosis that scared me more than I let anyone see at first, and for a while I kept it to myself.',
      'It was a random Wednesday Bible study that finally cracked that open. Someone asked how I was really doing, and I could not lie anymore. That night, a small group of people I barely knew stayed back and prayed over me like they had known me for years.',
      'What followed was not instant — there were still hard appointments and harder waiting periods. But I was never carrying it alone again. The prayer team checked on me weekly. People fasted with me. And slowly, the reports started changing.',
      'Today I am well. I do not take that lightly, and I do not take this community lightly either. They carried me when I could not carry myself.',
    ],
  },
  {
    id: 'tobi-purpose',
    name: 'Tobi O.',
    category: 'Purpose',
    date: '20 April 2026',
    image: '/testimonies/ewa.jpg',
    imageAlt: 'Tobi behind a camera on the media team during a service',
    quote:
      'I walked into XPH not knowing what I was looking for. A year later, I am serving on the media team, I have real friendships, and I finally understand what it means to belong somewhere.',
    story: [
      'I moved to Ibadan for work and knew almost no one. I walked into XPH not knowing what I was looking for — honestly, I think I was just looking for something to do on a Sunday.',
      'What kept me coming back was how normal it felt to be new. Nobody made a big show of it, but people kept showing up — inviting me to lunch after service, adding me to group chats, remembering small details from the last conversation.',
      'A few months in, someone on the media team noticed I had a background in photography and asked if I wanted to help out. That small invitation changed everything. I found a place to actually contribute, not just attend.',
      'A year later, I run part of the livestream most Sundays, and the people on that team are some of my closest friends in this city. I finally understand what it means to belong somewhere.',
    ],
  },
  {
    id: 'chiamaka-provision',
    name: 'Chiamaka E.',
    category: 'Provision',
    date: '11 April 2026',
    image: '/testimonies/gethsy.jpg',
    imageAlt: 'Chiamaka at her desk, working',
    quote:
      'After months of job searching, I brought it to an Ablaze night and just prayed. Two weeks later, I had an offer. I do not take that timing lightly.',
    story: [
      'I had been job hunting for almost eight months. Every interview seemed to end the same way — a polite rejection email, sometimes not even that.',
      'I remember bringing it to an Ablaze night out of sheer exhaustion more than faith. I did not have eloquent words left, just a tired, honest prayer that God would show up because I genuinely did not know what else to do.',
      'Two weeks later, I had an offer — from a company I had actually forgotten I applied to months earlier. The timing was too specific to explain away, and I do not try to.',
    ],
  },
  {
    id: 'david-restoration',
    name: 'David K.',
    category: 'Restoration',
    date: '29 March 2026',
    image: '/testimonies/ewa.jpg',
    imageAlt: 'David sitting with an older relative, laughing',
    quote:
      'My relationship with my family was broken for years. Through the counsel and prayer of people at XPH, I made the first call in a long time. We are rebuilding, one conversation at a time.',
    story: [
      'My relationship with my family had been strained for years, long before I ever set foot in XPH. It was the kind of quiet estrangement where nobody officially decided anything, we just stopped talking.',
      'It came up almost by accident in a connect group conversation, and instead of moving past it, a few people actually asked follow-up questions. Over the following weeks, they walked with me through what forgiveness would actually require of me, not just as a feeling but as an action.',
      'Eventually, I made the first call in a long time. It was awkward and short, but it was a start. We are rebuilding, one conversation at a time, and I am no longer doing it without support.',
    ],
  },
  {
    id: 'feyisayo-salvation',
    name: 'Feyisayo T.',
    category: 'Salvation',
    date: '15 March 2026',
    image: '/testimonies/shade.jpg',
    imageAlt: 'Feyisayo at a Sunday service, worshipping',
    quote:
      'I visited XPH once, planning never to come back to church again. That one Sunday changed the direction of my life completely.',
    story: [
      'I had decided church was not for me. I agreed to visit XPH only because a friend would not stop asking, and I told myself it would be the last time either way.',
      'I cannot point to a single dramatic moment. It was more that nothing about that Sunday matched what I expected — no performance, no pressure, just people being honest about their own struggles from the stage and in conversations afterward.',
      'That one Sunday changed the direction of my life completely. I am still unpacking what that means practically, but I know I am not the same person who walked in that day.',
    ],
  },
  {
    id: 'emeka-community',
    name: 'Emeka N.',
    category: 'Community',
    date: '2 March 2026',
    image: '/testimonies/gethsy.jpg',
    imageAlt: 'Emeka with his connect group at a Saturday gathering',
    quote:
      'Moving to Ibadan alone was terrifying. My connect group became family faster than I expected — people who actually check on you, not just on Sundays.',
    story: [
      'Moving to Ibadan alone for work was terrifying. I did not know a single person in the city, and my new job kept me too busy to build much of a social life on my own.',
      'A colleague invited me to XPH, and within a few weeks I had joined a connect group. What surprised me was how quickly it stopped feeling like a scheduled meeting and started feeling like a group of friends who happened to also study the Bible together.',
      'They became family faster than I expected — people who actually check on you outside of Sundays, who notice when you go quiet, who show up.',
    ],
  },
]

export function getTestimonyById(id: string): Testimony | undefined {
  return testimonies.find((t) => t.id === id)
}

export function getOtherTestimonies(id: string, count = 3): Testimony[] {
  return testimonies.filter((t) => t.id !== id).slice(0, count)
}