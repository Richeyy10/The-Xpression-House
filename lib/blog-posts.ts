export interface BlogPost {
  id: string
  slug: string
  date: string
  tag: string
  title: string
  excerpt: string
  author: string
  readTime: string
  image: string
  imageAlt: string
  body: string[]
}

export const blogPosts: BlogPost[] = [
  {
    id: 'bp-featured',
    slug: 'walking-by-faith-not-by-sight',
    date: '12 May 2026',
    tag: 'Devotional',
    title: 'What it actually means to walk by faith',
    excerpt:
      'A closer look at 2 Corinthians 5:7 and what it costs — and gives back — to trust God with the parts of life you cannot yet see.',
    author: 'Pastor Fred A. Elegbe',
    readTime: '4 min read',
    image: '/blog/faith.jpg',
    imageAlt: 'Pastor Fred preaching on stage during a Sunday service',
    body: [
      '"For we walk by faith, not by sight." It is one of those verses we quote quickly, often before we have sat with what it actually asks of us. Walking by faith is not a feeling. It is a decision, repeated daily, to keep moving in the direction God has spoken even when the evidence in front of you says otherwise.',
      'Sight wants proof before it commits. Faith commits before the proof arrives. That order matters. Most of us want God to show us the whole staircase before we take the first step, but Scripture consistently shows people being asked to move with only the light for the next step in view.',
      'This does not mean faith is reckless or blind. It means faith is anchored somewhere sight cannot reach — in the character and track record of God rather than in present circumstances. The uncertainty does not go away. What changes is what you let interpret it.',
      'If you are in a season where the way forward is unclear, you are in good company. Keep obeying what you last heard clearly. Keep worshipping through the fog. Sight will eventually catch up to faith — it usually does — but faith has to go first.',
    ],
  },
  {
    id: 'bp1',
    slug: 'why-community-matters',
    date: '28 April 2026',
    tag: 'Community',
    title: 'Why you were never meant to do this alone',
    excerpt:
      'Faith was always meant to be lived in community. Here\u2019s what that looks like practically at XPH.',
    author: 'XPH Team',
    readTime: '3 min read',
    image: '/blog/community.jpg',
    imageAlt: 'A small group of young adults sitting together in fellowship',
    body: [
      'Somewhere along the way, faith got reframed as a private, personal thing — just you and God, no one else required. Scripture tells a different story. From the beginning, God has always been building a people, not just collecting individuals.',
      'Community is not a bonus feature of Christianity; it is one of the primary places spiritual growth happens. It is in relationship that our blind spots get named, our gifts get called out, and our hard days get carried by people who show up.',
      'At XPH, that looks like connect groups, ministry teams, and the informal, unglamorous stuff — group chats, check-in calls, showing up at each other\u2019s milestones. None of it works if you stay on the sidelines. Community only holds you as much as you let it.',
    ],
  },
  {
    id: 'bp2',
    slug: 'behind-the-scenes-ablaze',
    date: '19 April 2026',
    tag: 'Testimony',
    title: 'Behind the scenes of an Ablaze night',
    excerpt:
      'What actually happens when a room full of young people give an entire night to prayer.',
    author: 'XPH Team',
    readTime: '3 min read',
    image: '/blog/community.jpg',
    imageAlt: 'Young people worshipping during an Ablaze prayer night',
    body: [
      'There is no production trick that explains an Ablaze night. No lighting rig or setlist can manufacture what happens when a room full of young people decide, together, to stop performing and actually pray.',
      'It usually starts quiet — a worship set, a short word, and then space. That space is where things shift. People wrestle out loud with what they have been carrying quietly all month. Some nights end in tears, some in laughter, most in a kind of exhausted peace that only comes from actually being honest with God.',
      'If you have never stayed for a full Ablaze night, the invitation stands. Bring whatever you are carrying. Leave the performance at the door.',
    ],
  },
  {
    id: 'bp3',
    slug: 'first-time-at-xph',
    date: '5 April 2026',
    tag: "I'm New",
    title: 'So you\u2019re visiting XPH for the first time',
    excerpt:
      'Everything you need to know before your first Sunday with us — what to expect, what to wear, and where to park.',
    author: 'XPH Team',
    readTime: '2 min read',
    image: '/blog/first-timer.jpg',
    imageAlt: 'A greeter welcoming a first-time visitor at the entrance',
    body: [
      'First times are nerve-wracking, even for something as simple as walking into a new church. Here is exactly what to expect so you can spend less energy guessing and more energy actually being present.',
      'Service starts at 8:00 AM and doors open at 7:30 AM — come a little early if you want to find a seat without rushing. Dress code is genuinely relaxed; come as you are. XPH Kids runs alongside the main service if you are bringing children.',
      'You will not be singled out or asked to stand up as a visitor. You are free to simply be present, worship, and listen. Afterward, our Protocol team will usually be around at the entrance if you have questions — feel free to say hello.',
    ],
  },
  {
    id: 'bp4',
    slug: 'building-unshakeable-faith',
    date: '22 March 2026',
    tag: 'Sermon Recap',
    title: 'Building an unshakeable faith — series recap',
    excerpt:
      'Catching up on the Faith Series? Here\u2019s a recap of where we\u2019ve been and where we\u2019re headed.',
    author: 'Pastor Fred A. Elegbe',
    readTime: '3 min read',
    image: '/blog/faith.jpg',
    imageAlt: 'Congregation with hands raised in worship during the Faith Series',
    body: [
      'We are several weeks into the Faith Series now, and the through-line has stayed consistent: faith is not the absence of doubt, it is obedience in spite of it.',
      'We have looked at faith that asks (the persistent widow), faith that waits (Abraham), and faith that acts before it sees the outcome (the woman with the issue of blood). Each week has pushed against a different excuse we make for staying comfortable.',
      'If you have missed any weeks, the sermon archive has you covered. We are heading into the final stretch of the series next month, building toward a single question: what would change in your life this year if you actually believed God was who He says He is?',
    ],
  },
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug)
}

export function getRelatedPosts(slug: string, count = 3): BlogPost[] {
  return blogPosts.filter((p) => p.slug !== slug).slice(0, count)
}