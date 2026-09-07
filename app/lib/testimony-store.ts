// TEMPORARY IN-MEMORY STORE — same caveat as lib/engagement-store.ts:
// resets on restart, unreliable on serverless. Migrate to the real
// database alongside everything else once the admin dashboard is in.
//
// Deliberately no comments here — see the conversation notes on why
// testimonies get a reaction only, not an open comment box.

const amenCounts = new Map<string, number>()

export function getAmenCount(testimonyId: string): number {
  return amenCounts.get(testimonyId) ?? 0
}

export function incrementAmen(testimonyId: string): number {
  const next = getAmenCount(testimonyId) + 1
  amenCounts.set(testimonyId, next)
  return next
}