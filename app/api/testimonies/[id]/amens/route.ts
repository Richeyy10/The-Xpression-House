import { NextRequest, NextResponse } from 'next/server'
import { getAmenCount, incrementAmen } from '@/app/lib/testimony-store'

interface RouteParams {
  params: { id: string }
}

export async function GET(_req: NextRequest, { params }: RouteParams) {
  return NextResponse.json({ count: getAmenCount(params.id) })
}

export async function POST(_req: NextRequest, { params }: RouteParams) {
  const count = incrementAmen(params.id)
  return NextResponse.json({ count })
}