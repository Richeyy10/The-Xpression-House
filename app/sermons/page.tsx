import type { Metadata } from 'next'
import { getSermons } from '@/lib/sermons'
import SermonsClient from './Sermonsclient'

export const metadata: Metadata = {
  title: 'Sermons — The Xpression House',
  description: 'Listen to the latest messages from Pst Fred A. Elegbe and The Xpression House.',
}

// Re-generate this page at most once an hour so new episodes show up automatically
export const revalidate = 3600

export default async function SermonsPage() {
  const sermons = await getSermons()
  return <SermonsClient sermons={sermons} />
}