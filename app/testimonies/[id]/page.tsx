import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { testimonies, getTestimonyById, getOtherTestimonies } from '@/app/lib/testimonies'
import TestimonyDetailClient from './TestimonyDetailClient'

interface PageProps {
  params: { id: string }
}

export function generateStaticParams() {
  return testimonies.map((t) => ({ id: t.id }))
}

export function generateMetadata({ params }: PageProps): Metadata {
  const testimony = getTestimonyById(params.id)
  if (!testimony) return {}
  return {
    title: `${testimony.name}'s Story — The Xpression House`,
    description: testimony.quote,
  }
}

export default function TestimonyPage({ params }: PageProps) {
  const testimony = getTestimonyById(params.id)
  if (!testimony) notFound()

  const others = getOtherTestimonies(testimony.id)

  return <TestimonyDetailClient testimony={testimony} others={others} />
}