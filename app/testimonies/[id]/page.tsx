import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { testimonies, getTestimonyById, getOtherTestimonies } from '@/app/lib/testimonies'
import TestimonyDetailClient from './TestimonyDetailClient'

interface PageProps {
  params: Promise<{ id: string }>
}

export function generateStaticParams() {
  return testimonies.map((t) => ({ id: t.id }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params
  const testimony = getTestimonyById(id)
  if (!testimony) return {}
  return {
    title: `${testimony.name}'s Story — The Xpression House`,
    description: testimony.quote,
  }
}

export default async function TestimonyPage({ params }: PageProps) {
  const { id } = await params
  const testimony = getTestimonyById(id)
  if (!testimony) notFound()

  const others = getOtherTestimonies(testimony.id)

  return <TestimonyDetailClient testimony={testimony} others={others} />
}