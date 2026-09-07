// TEMPORARY IN-MEMORY STORE
// -----------------------------------------------------------------------
// This exists so the like/comment UI has something to talk to before the
// admin dashboard's database is in place. Data here is NOT persistent:
// it resets on every server restart, and will behave inconsistently on
// serverless platforms (e.g. Vercel) where each request may hit a
// different instance with its own memory.
//
// Replace this file's internals with real database calls (e.g. Prisma +
// Postgres) once that's wired up — the function signatures below
// (getLikeCount, incrementLike, getComments, addComment) are the contract
// the rest of the app relies on, so keep those the same when you swap
// the implementation.
// -----------------------------------------------------------------------

export interface Comment {
  id: string
  name: string
  message: string
  date: string
  approved: boolean
}

const likeCounts = new Map<string, number>()
const comments = new Map<string, Comment[]>()

export function getLikeCount(slug: string): number {
  return likeCounts.get(slug) ?? 0
}

export function incrementLike(slug: string): number {
  const next = getLikeCount(slug) + 1
  likeCounts.set(slug, next)
  return next
}

export function getComments(slug: string): Comment[] {
  // Only approved comments are shown publicly. Swap this for a real
  // moderation flag once comments are stored in the admin dashboard's
  // database — for now everything is auto-approved so the flow is
  // visible end-to-end.
  return (comments.get(slug) ?? []).filter((c) => c.approved)
}

export function addComment(slug: string, name: string, message: string): Comment {
  const comment: Comment = {
    id: crypto.randomUUID(),
    name: name.trim().slice(0, 80),
    message: message.trim().slice(0, 1000),
    date: new Date().toISOString(),
    // Pending until approved. There's no moderation UI yet — that
    // belongs in the admin dashboard (a "Comments" queue alongside
    // Events/Blog/Ablaze) — so for now these will only start
    // appearing once that queue exists and something approves them.
    approved: false,
  }
  const existing = comments.get(slug) ?? []
  comments.set(slug, [...existing, comment])
  return comment
}

export function approveComment(slug: string, commentId: string): boolean {
  const existing = comments.get(slug)
  if (!existing) return false
  const comment = existing.find((c) => c.id === commentId)
  if (!comment) return false
  comment.approved = true
  return true
}