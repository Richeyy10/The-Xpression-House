import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { blogPosts, getPostBySlug, getRelatedPosts } from '@/app/lib/blog-posts'
import ArticleClient from './ArticleClient'

interface PageProps {
  params: { slug: string }
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export function generateMetadata({ params }: PageProps): Metadata {
  const post = getPostBySlug(params.slug)
  if (!post) return {}
  return {
    title: `${post.title} — The Xpression House`,
    description: post.excerpt,
  }
}

export default function BlogPostPage({ params }: PageProps) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  const related = getRelatedPosts(post.slug)

  return <ArticleClient post={post} related={related} />
}