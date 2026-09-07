import { NextRequest, NextResponse } from 'next/server'
import { getLikeCount, incrementLike } from '@/app/lib/engagement-store'

interface RouteParams {
  params: Promise<{ slug: string }>
}

export async function GET(_req: NextRequest, { params }: RouteParams) {
  const { slug } = await params
  return NextResponse.json({ count: getLikeCount(slug) })
}

export async function POST(_req: NextRequest, { params }: RouteParams) {
  const { slug } = await params
  const count = incrementLike(slug)
  return NextResponse.json({ count })
}