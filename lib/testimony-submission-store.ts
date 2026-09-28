// TEMPORARY IN-MEMORY STORE — same caveat as the other store files in
// this project. Submissions land here as "pending" and are NOT shown
// on the public wall. There's no admin UI yet to review/approve them —
// that belongs in the admin dashboard (a "Testimonies" queue, same
// shape as the Comments and Prayer Requests queues already noted).
//
// When a submission is approved, whoever approves it should also be
// able to attach a photo at that point (via the dashboard's own image
// upload, once that's wired to real storage) before it becomes a
// published Testimony in lib/testimonies.ts / the real database.

export interface TestimonySubmission {
  id: string
  name: string
  contact: string
  category: string
  message: string
  date: string
  status: 'pending' | 'approved' | 'rejected'
}

const submissions: TestimonySubmission[] = []

export function addTestimonySubmission(
  input: Omit<TestimonySubmission, 'id' | 'date' | 'status'>,
): TestimonySubmission {
  const submission: TestimonySubmission = {
    ...input,
    id: crypto.randomUUID(),
    date: new Date().toISOString(),
    status: 'pending',
  }
  submissions.push(submission)
  return submission
}

// No public GET route wired to this on purpose — same reasoning as
// prayer requests. Only an authenticated admin context should read
// these once that exists.
export function getAllTestimonySubmissions(): TestimonySubmission[] {
  return submissions
}