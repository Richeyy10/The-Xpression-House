import { NextRequest, NextResponse } from 'next/server'
import { getComments, addComment } from '@/app/lib/engagement-store'

interface RouteParams {
  params: { slug: string }
}

export async function GET(_req: NextRequest, { params }: RouteParams) {
  return NextResponse.json({ comments: getComments(params.slug) })
}

export async function POST(req: NextRequest, { params }: RouteParams) {
  const body = await req.json().catch(() => null)
  const name = typeof body?.name === 'string' ? body.name.trim() : ''
  const message = typeof body?.message === 'string' ? body.message.trim() : ''

  if (!name || !message) {
    return NextResponse.json(
      { error: 'Name and message are both required.' },
      { status: 400 },
    )
  }

  const comment = addComment(params.slug, name, message)
  return NextResponse.json({ comment }, { status: 201 })
}