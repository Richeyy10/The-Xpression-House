'use client'

import Image from 'next/image'
import { IconCalendar, IconArrowRight } from '@tabler/icons-react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import ArrowLink from '@/components/ui/ArrowLink'
import { useRevealOnScroll, useRevealManyOnScroll } from '@/hooks/useRevealOnScroll'
import { blogPosts } from '@/app/lib/blog-posts'

const [featuredPost, ...posts] = blogPosts

function BlogHero() {
  const ref = useRevealOnScroll()
  return (
    <section
      className="pt-[calc(var(--nav-height)+var(--space-3xl))] px-12 pb-16 max-w-[1200px] mx-auto lt-lg:px-8 lt-sm:px-3"
      aria-labelledby="blog-hero-heading"
    >
      <div ref={ref} className="void-card">
        <p className="flex items-center gap-[10px] font-headline text-[11px] font-bold uppercase tracking-[.15em] text-bright-green mb-6">
          <span className="w-8 h-[1.5px] bg-bright-green inline-block" aria-hidden={true} />
          The Journal
        </p>
        <h1
          id="blog-hero-heading"
          className="font-quote text-[clamp(52px,8vw,96px)] font-light leading-[1.05] tracking-[-0.02em] text-cream mb-6 lt-sm:text-[36px]"
        >
          Stories, and <em className="italic text-bright-green font-normal">sermons</em>
        </h1>
        <p className="text-[17px] text-[rgba(240,237,230,0.5)] max-w-[560px] leading-[1.8]">
          Devotionals, testimonies, and recaps from the XPH community &#8212;
          written to encourage you wherever you are in your walk.
        </p>
      </div>
    </section>
  )
}

function FeaturedPost() {
  const ref = useRevealOnScroll()
  return (
    <section
      className="max-w-[1200px] mx-auto px-12 pb-20 lt-lg:px-8 lt-sm:px-3"
      aria-labelledby="featured-post-heading"
    >
      <a
        href={`/blog/${featuredPost.slug}`}
        ref={ref as unknown as React.RefObject<HTMLAnchorElement>}
        className="void-card grid grid-cols-[1.1fr_1fr] border border-[rgba(240,237,230,0.07)] rounded-[8px] overflow-hidden bg-forest-green min-h-[420px] lt-lg:grid-cols-1 lt-lg:min-h-0"
      >
        <div className="relative min-h-[280px] lt-lg:aspect-[16/9] lt-lg:order-first">
          <Image
            src={featuredPost.image}
            alt={featuredPost.imageAlt}
            fill
            priority
            sizes="(max-width: 1023px) 100vw, 50vw"
            className="object-cover object-center"
          />
        </div>
        <div className="py-16 px-12 flex flex-col justify-center lt-lg:px-8 lt-lg:py-10">
          <p className="font-headline text-[11px] font-bold tracking-[.14em] uppercase text-teal mb-4">
            Latest Post
          </p>
          <h2
            id="featured-post-heading"
            className="font-quote text-[clamp(28px,3.5vw,44px)] font-normal leading-[1.15] tracking-[-0.01em] text-cream mb-6"
          >
            {featuredPost.title}
          </h2>
          <p className="text-[15px] text-[rgba(240,237,230,0.5)] leading-[1.8] mb-8">
            {featuredPost.excerpt}
          </p>
          <div className="flex items-center gap-4 text-[13px] text-[rgba(240,237,230,0.4)]">
            <span className="flex items-center gap-[6px]">
              <IconCalendar size={13} aria-hidden={true} />
              {featuredPost.date}
            </span>
            <span className="py-[3px] px-2 border border-[rgba(240,237,230,0.08)] rounded-full font-headline text-[10px] font-semibold tracking-[.1em] uppercase">
              {featuredPost.tag}
            </span>
          </div>
        </div>
      </a>
    </section>
  )
}

function PostGrid() {
  const ref = useRevealManyOnScroll('.ev-card')
  return (
    <section
      className="max-w-[1200px] mx-auto px-12 pb-40 lt-lg:px-8 lt-sm:px-3"
      aria-labelledby="posts-heading"
    >
      <div className="flex items-end justify-between pt-8 border-t border-[rgba(240,237,230,0.07)] mb-12">
        <h2
          className="font-quote text-[36px] font-light text-cream tracking-[-0.01em]"
          id="posts-heading"
        >
          More Posts
        </h2>
        <ArrowLink href="/connect">Suggest a topic</ArrowLink>
      </div>
      <div ref={ref} className="grid grid-cols-3 gap-6 lt-lg:grid-cols-2 lt-sm:grid-cols-1">
        {posts.map((p) => (
          <a key={p.id} href={`/blog/${p.slug}`} className="ev-card void-card block">
            <div className="relative w-full aspect-[16/10] overflow-hidden">
              <Image
                src={p.image}
                alt={p.imageAlt}
                fill
                sizes="(max-width: 1023px) 100vw, 33vw"
                className="object-cover object-center"
              />
            </div>
            <div className="px-6 pt-6 flex items-center justify-between">
              <span className="font-headline text-[11px] font-bold tracking-[.12em] uppercase text-bright-green">
                {p.date}
              </span>
              <span className="font-headline text-[10px] font-semibold tracking-[.1em] uppercase text-[rgba(240,237,230,0.35)] py-[3px] px-2 border border-[rgba(240,237,230,0.08)] rounded-full">
                {p.tag}
              </span>
            </div>
            <div className="pt-4 px-6 pb-6 flex-1">
              <h3 className="font-quote text-[22px] font-normal text-cream leading-[1.25] mb-2">
                {p.title}
              </h3>
              <p className="text-[14px] text-[rgba(240,237,230,0.45)] leading-[1.7]">
                {p.excerpt}
              </p>
            </div>
            <div className="py-4 px-6 border-t border-[rgba(240,237,230,0.06)] flex items-center gap-[6px] text-[13px] text-bright-green">
              Read post
              <IconArrowRight size={13} aria-hidden={true} />
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

export default function BlogPage() {
  return (
    <>
      <Nav />
      <main id="main">
        <BlogHero />
        <FeaturedPost />
        <PostGrid />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}