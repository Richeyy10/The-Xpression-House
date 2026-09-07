import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { blogPosts, getPostBySlug, getRelatedPosts } from '@/app/lib/blog-posts'
import ArticleClient from './ArticleClient'

interface PageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return {
    title: `${post.title} — The Xpression House`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const related = getRelatedPosts(post.slug)

  return <ArticleClient post={post} related={related} />
}