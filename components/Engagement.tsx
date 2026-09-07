'use client'

import { useEffect, useState } from 'react'
import { IconHeart, IconMessageCircle } from '@tabler/icons-react'
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll'

interface CommentItem {
  id: string
  name: string
  message: string
  date: string
}

interface EngagementProps {
  slug: string
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

export default function Engagement({ slug }: EngagementProps) {
  const ref = useRevealOnScroll()

  const [likeCount, setLikeCount] = useState<number | null>(null)
  const [hasLiked, setHasLiked] = useState(false)
  const [likeLoading, setLikeLoading] = useState(false)

  const [comments, setComments] = useState<CommentItem[]>([])
  const [commentsLoading, setCommentsLoading] = useState(true)
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [formError, setFormError] = useState<string | null>(null)
  const [justSubmitted, setJustSubmitted] = useState(false)

  useEffect(() => {
    setHasLiked(localStorage.getItem(`xph-liked-${slug}`) === 'true')

    fetch(`/api/posts/${slug}/likes`)
      .then((res) => res.json())
      .then((data) => setLikeCount(data.count))
      .catch(() => setLikeCount(0))

    fetch(`/api/posts/${slug}/comments`)
      .then((res) => res.json())
      .then((data) => setComments(data.comments ?? []))
      .catch(() => setComments([]))
      .finally(() => setCommentsLoading(false))
  }, [slug])

  async function handleLike() {
    if (hasLiked || likeLoading) return
    setLikeLoading(true)
    try {
      const res = await fetch(`/api/posts/${slug}/likes`, { method: 'POST' })
      const data = await res.json()
      setLikeCount(data.count)
      setHasLiked(true)
      localStorage.setItem(`xph-liked-${slug}`, 'true')
    } finally {
      setLikeLoading(false)
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setFormError(null)

    if (!name.trim() || !message.trim()) {
      setFormError('Please fill in your name and a message.')
      return
    }

    setSubmitting(true)
    try {
      const res = await fetch(`/api/posts/${slug}/comments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, message }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => null)
        setFormError(data?.error ?? 'Something went wrong. Please try again.')
        return
      }
      setName('')
      setMessage('')
      setJustSubmitted(true)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section
      className="max-w-[1200px] mx-auto px-12 pb-20 lt-lg:px-8 lt-sm:px-3"
      aria-labelledby="engagement-heading"
    >
      <div ref={ref} className="void-card max-w-[680px]">
        <div className="flex items-center gap-4 pt-8 pb-10 border-t border-[rgba(240,237,230,0.07)]">
          <button
            type="button"
            onClick={handleLike}
            disabled={hasLiked || likeLoading}
            aria-pressed={hasLiked}
            className={`flex items-center gap-[8px] py-[10px] px-5 rounded-full border transition-colors ${
              hasLiked
                ? 'border-bright-green bg-[rgba(31,208,0,0.1)] text-bright-green'
                : 'border-[rgba(240,237,230,0.15)] text-[rgba(240,237,230,0.6)] hover:border-bright-green hover:text-bright-green'
            } disabled:cursor-default`}
          >
            <IconHeart
              size={16}
              aria-hidden={true}
              fill={hasLiked ? 'currentColor' : 'none'}
            />
            <span className="text-[13px] font-semibold">
              {hasLiked ? 'Liked' : 'Like this post'}
            </span>
          </button>
          <span className="text-[13px] text-[rgba(240,237,230,0.4)]">
            {likeCount === null ? '\u2014' : likeCount} {likeCount === 1 ? 'like' : 'likes'}
          </span>
        </div>

        <h2
          id="engagement-heading"
          className="font-quote text-[28px] font-normal text-cream leading-[1.25] mb-8 flex items-center gap-3"
        >
          <IconMessageCircle size={22} aria-hidden={true} className="text-bright-green" />
          {comments.length > 0 ? `${comments.length} Comment${comments.length === 1 ? '' : 's'}` : 'Leave a comment'}
        </h2>

        <form onSubmit={handleSubmit} className="mb-10">
          <div className="form-field--row">
            <div className="form-field">
              <label htmlFor="comment-name">Name</label>
              <input
                id="comment-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                maxLength={80}
              />
            </div>
          </div>
          <div className="form-field">
            <label htmlFor="comment-message">Comment</label>
            <textarea
              id="comment-message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Share your thoughts..."
              maxLength={1000}
            />
          </div>
          {formError && (
            <p className="text-[13px] text-accent-red mb-4">{formError}</p>
          )}
          {justSubmitted && !formError && (
            <p className="text-[13px] text-bright-green mb-4">
              Thanks! Your comment is awaiting approval and will appear once reviewed.
            </p>
          )}
          <div className="form-actions">
            <button type="submit" className="btn--primary" disabled={submitting}>
              {submitting ? 'Posting...' : 'Post comment'}
            </button>
            <span className="form-actions__note">
              Comments are reviewed before they appear publicly.
            </span>
          </div>
        </form>

        {!commentsLoading && comments.length > 0 && (
          <ul className="flex flex-col divide-y divide-[rgba(240,237,230,0.06)]">
            {comments.map((c) => (
              <li key={c.id} className="py-5 first:pt-0">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[14px] font-semibold text-cream">{c.name}</span>
                  <span className="text-[12px] text-[rgba(240,237,230,0.35)]">
                    {formatDate(c.date)}
                  </span>
                </div>
                <p className="text-[14px] leading-[1.7] text-[rgba(240,237,230,0.55)]">
                  {c.message}
                </p>
              </li>
            ))}
          </ul>
        )}

        {!commentsLoading && comments.length === 0 && (
          <p className="text-[14px] text-[rgba(240,237,230,0.4)]">
            No comments yet &#8212; be the first to share your thoughts.
          </p>
        )}
      </div>
    </section>
  )
}