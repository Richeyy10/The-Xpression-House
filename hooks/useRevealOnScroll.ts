'use client'
import { useEffect, useRef } from 'react'

const IO_OPTIONS = { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }

/** Observes the returned ref element and adds .emerged when it enters the viewport. */
export function useRevealOnScroll<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          ;(e.target as HTMLElement).classList.add('emerged')
          io.unobserve(e.target)
        }
      })
    }, IO_OPTIONS)
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return ref
}

/** Observes all `selector` children inside the returned container ref and adds .emerged to each. */
export function useRevealManyOnScroll<T extends HTMLElement = HTMLDivElement>(selector: string) {
  const ref = useRef<T>(null)
  useEffect(() => {
    const container = ref.current
    if (!container) return
    const targets = Array.from(container.querySelectorAll<HTMLElement>(selector))
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          ;(e.target as HTMLElement).classList.add('emerged')
          io.unobserve(e.target)
        }
      })
    }, IO_OPTIONS)
    targets.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [selector])
  return ref
}
