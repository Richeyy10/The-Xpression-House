'use client'

import { useEffect, useState } from 'react'
import { IconHandFinger } from '@tabler/icons-react'

interface TestimonyAmenProps {
  testimonyId: string
}

export default function TestimonyAmen({ testimonyId }: TestimonyAmenProps) {
  const [count, setCount] = useState<number | null>(null)
  const [hasAmened, setHasAmened] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setHasAmened(localStorage.getItem(`xph-amen-${testimonyId}`) === 'true')
    fetch(`/api/testimonies/${testimonyId}/amens`)
      .then((res) => res.json())
      .then((data) => setCount(data.count))
      .catch(() => setCount(0))
  }, [testimonyId])

  async function handleAmen() {
    if (hasAmened || loading) return
    setLoading(true)
    try {
      const res = await fetch(`/api/testimonies/${testimonyId}/amens`, { method: 'POST' })
      const data = await res.json()
      setCount(data.count)
      setHasAmened(true)
      localStorage.setItem(`xph-amen-${testimonyId}`, 'true')
    } finally {
      setLoading(false)
    }
  }

  return (
    <button
      type="button"
      onClick={handleAmen}
      disabled={hasAmened || loading}
      aria-pressed={hasAmened}
      className={`flex items-center gap-[6px] py-[6px] px-3 rounded-full border text-[12px] font-semibold transition-colors ${
        hasAmened
          ? 'border-bright-green bg-[rgba(31,208,0,0.1)] text-bright-green'
          : 'border-[rgba(240,237,230,0.12)] text-[rgba(240,237,230,0.45)] hover:border-bright-green hover:text-bright-green'
      } disabled:cursor-default`}
    >
      <IconHandFinger size={13} aria-hidden={true} />
      Halleluyah{count !== null && count > 0 ? ` (${count})` : ''}
    </button>
  )
}