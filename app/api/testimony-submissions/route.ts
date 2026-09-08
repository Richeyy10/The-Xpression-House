import { NextRequest, NextResponse } from 'next/server'
import { addTestimonySubmission } from '@/app/lib/testimony-submission-store'

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null)

  const name = typeof body?.name === 'string' ? body.name.trim() : ''
  const contact = typeof body?.contact === 'string' ? body.contact.trim() : ''
  const category = typeof body?.category === 'string' ? body.category.trim() : ''
  const message = typeof body?.message === 'string' ? body.message.trim() : ''

  if (!name || !contact || !message) {
    return NextResponse.json(
      { error: 'Name, a way to reach you, and your story are all required.' },
      { status: 400 },
    )
  }

  addTestimonySubmission({
    name: name.slice(0, 80),
    contact: contact.slice(0, 120),
    category: category.slice(0, 60) || 'General',
    message: message.slice(0, 3000),
  })

  return NextResponse.json({ success: true }, { status: 201 })
}