import { NextRequest, NextResponse } from 'next/server'
import { getLikeCount, incrementLike } from '@/app/lib/engagement-store'

interface RouteParams {
  params: { slug: string }
}

export async function GET(_req: NextRequest, { params }: RouteParams) {
  return NextResponse.json({ count: getLikeCount(params.slug) })
}

export async function POST(_req: NextRequest, { params }: RouteParams) {
  const count = incrementLike(params.slug)
  return NextResponse.json({ count })
}