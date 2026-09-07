'use client'

import Image from 'next/image'
import Link from 'next/link'
import { IconCalendar, IconClock, IconArrowLeft, IconArrowRight } from '@tabler/icons-react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import ArrowLink from '@/components/ui/ArrowLink'
import Engagement from '@/components/Engagement'
import { useRevealOnScroll, useRevealManyOnScroll } from '@/hooks/useRevealOnScroll'
import type { BlogPost } from '@/app/lib/blog-posts'

interface ArticleClientProps {
  post: BlogPost
  related: BlogPost[]
}

function ArticleHero({ post }: { post: BlogPost }) {
  const ref = useRevealOnScroll()
  return (
    <section
      className="pt-[calc(var(--nav-height)+var(--space-3xl))] px-12 pb-16 max-w-[1200px] mx-auto lt-lg:px-8 lt-sm:px-3"
      aria-labelledby="article-heading"
    >
      <div ref={ref} className="void-card max-w-[760px]">
        <Link
          href="/blog"
          className="inline-flex items-center gap-[6px] text-[13px] font-semibold uppercase tracking-[.06em] text-bright-green mb-8 no-underline"
        >
          <IconArrowLeft size={14} aria-hidden={true} />
          Back to the journal
        </Link>
        <p className="flex items-center gap-[10px] font-headline text-[11px] font-bold uppercase tracking-[.15em] text-bright-green mb-6">
          <span className="w-8 h-[1.5px] bg-bright-green inline-block" aria-hidden={true} />
          {post.tag}
        </p>
        <h1
          id="article-heading"
          className="font-quote text-[clamp(36px,5.5vw,64px)] font-light leading-[1.1] tracking-[-0.01em] text-cream mb-8"
        >
          {post.title}
        </h1>
        <div className="flex items-center gap-5 text-[14px] text-[rgba(240,237,230,0.45)]">
          <span>{post.author}</span>
          <span className="flex items-center gap-[6px]">
            <IconCalendar size={14} aria-hidden={true} />
            {post.date}
          </span>
          <span className="flex items-center gap-[6px]">
            <IconClock size={14} aria-hidden={true} />
            {post.readTime}
          </span>
        </div>
      </div>
    </section>
  )
}

function ArticleImage({ post }: { post: BlogPost }) {
  const ref = useRevealOnScroll()
  return (
    <section className="max-w-[1200px] mx-auto px-12 pb-16 lt-lg:px-8 lt-sm:px-3">
      <div
        ref={ref}
        className="void-card relative w-full aspect-[16/9] rounded-[8px] overflow-hidden bg-forest-green"
      >
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          priority
          sizes="(max-width: 1023px) 100vw, 1200px"
          className="object-cover object-center"
        />
      </div>
    </section>
  )
}

function ArticleBody({ post }: { post: BlogPost }) {
  const ref = useRevealOnScroll()
  return (
    <section className="max-w-[1200px] mx-auto px-12 pb-20 lt-lg:px-8 lt-sm:px-3">
      <div ref={ref} className="void-card max-w-[680px] flex flex-col gap-5">
        {post.body.map((paragraph, i) => (
          <p key={i} className="text-[16px] leading-[1.9] text-[rgba(240,237,230,0.55)]">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  )
}

function RelatedPosts({ related }: { related: BlogPost[] }) {
  const ref = useRevealManyOnScroll('.ev-card')
  if (related.length === 0) return null
  return (
    <section
      className="max-w-[1200px] mx-auto px-12 pb-40 lt-lg:px-8 lt-sm:px-3"
      aria-labelledby="related-heading"
    >
      <div className="flex items-end justify-between pt-8 border-t border-[rgba(240,237,230,0.07)] mb-12">
        <h2
          className="font-quote text-[36px] font-light text-cream tracking-[-0.01em]"
          id="related-heading"
        >
          Keep Reading
        </h2>
        <ArrowLink href="/blog">All posts</ArrowLink>
      </div>
      <div ref={ref} className="grid grid-cols-3 gap-6 lt-lg:grid-cols-2 lt-sm:grid-cols-1">
        {related.map((p) => (
          <Link key={p.id} href={`/blog/${p.slug}`} className="ev-card void-card block">
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
          </Link>
        ))}
      </div>
    </section>
  )
}

export default function ArticleClient({ post, related }: ArticleClientProps) {
  return (
    <>
      <Nav />
      <main id="main">
        <ArticleHero post={post} />
        <ArticleImage post={post} />
        <ArticleBody post={post} />
        <Engagement slug={post.slug} />
        <RelatedPosts related={related} />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}