import { NextResponse } from 'next/server'
import { getLatestSermon } from '@/lib/sermons'

// The podcast feed is re-read at most every 30 minutes, so a new episode
// shows up on the homepage automatically without any redeploy.
export const revalidate = 1800

export async function GET() {
  const latest = await getLatestSermon()
  if (!latest) {
    return NextResponse.json({ error: 'Sermons unavailable' }, { status: 503 })
  }
  return NextResponse.json(latest)
}