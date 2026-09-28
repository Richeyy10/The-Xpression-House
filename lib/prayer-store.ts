// TEMPORARY IN-MEMORY STORE — same caveat as lib/engagement-store.ts.
// Not persistent across restarts, unreliable on serverless. Prayer
// requests are sensitive, so this should be one of the first things
// migrated to a real database + the admin dashboard (as a private
// "Prayer Requests" queue only the prayer team can view — never a
// publicly readable endpoint, unlike comments).

export interface PrayerRequest {
  id: string
  name: string
  contact: string
  category: string
  message: string
  confidential: boolean
  date: string
}

const requests: PrayerRequest[] = []

export function addPrayerRequest(
  input: Omit<PrayerRequest, 'id' | 'date'>,
): PrayerRequest {
  const request: PrayerRequest = {
    ...input,
    id: crypto.randomUUID(),
    date: new Date().toISOString(),
  }
  requests.push(request)
  return request
}

// Intentionally no exported "getPrayerRequests" wired to a public API
// route — this data should only ever be readable from an authenticated
// admin context once that exists.
export function getAllPrayerRequests(): PrayerRequest[] {
  return requests
}