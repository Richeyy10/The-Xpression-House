import { NextRequest, NextResponse } from 'next/server'
import { getAmenCount, incrementAmen } from '@/lib/testimony-store'

interface RouteParams {
  params: Promise<{ id: string }>
}

export async function GET(_req: NextRequest, { params }: RouteParams) {
  const { id } = await params
  return NextResponse.json({ count: getAmenCount(id) })
}

export async function POST(_req: NextRequest, { params }: RouteParams) {
  const { id } = await params
  const count = incrementAmen(id)
  return NextResponse.json({ count })
}