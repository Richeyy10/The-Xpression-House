'use client'

import { useEffect, useRef } from 'react'

// White logo on transparent bg — correct for screen-blend-mode on dark canvas
const LOGO_SRC = '/xph%20logo%20png1.png'

interface Logo {
  x: number; y: number; z: number; rot: number; rotSpeed: number
  floatSpeed: number; floatAmp: number; phase: number
  opacity: number; scale: number; driftX: number
}
interface Particle {
  x: number; y: number; z: number; size: number; opacity: number
  floatSpeed: number; floatAmp: number; phase: number
}

export default function HeroCanvas() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const canvas = document.createElement('canvas')
    canvas.style.cssText = 'display:block;width:100%;height:100%;'
    container.appendChild(canvas)
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let W = 0, H = 0, dpr = 1

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      W = container!.clientWidth
      H = container!.clientHeight
      canvas.width = W * dpr
      canvas.height = H * dpr
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    window.addEventListener('resize', resize, { passive: true })

    let mx = 0, my = 0, tmx = 0, tmy = 0
    const onMouseMove = (e: MouseEvent) => {
      tmx = (e.clientX / W - 0.5) * 2
      tmy = (e.clientY / H - 0.5) * 2
    }
    window.addEventListener('mousemove', onMouseMove, { passive: true })

    const logoImg = new Image()
    let logoReady = false
    logoImg.onload = () => { logoReady = true }
    logoImg.src = LOGO_SRC

    const logos: Logo[] = Array.from({ length: 16 }, () => ({
      x: (Math.random() - 0.5) * 1.6,
      y: (Math.random() - 0.5) * 1.4,
      z: 0.3 + Math.random() * 0.7,
      rot: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.008,
      floatSpeed: 0.4 + Math.random() * 0.8,
      floatAmp: 0.02 + Math.random() * 0.04,
      phase: Math.random() * Math.PI * 2,
      opacity: 0.03 + Math.random() * 0.06,
      scale: 0.6 + Math.random() * 1.4,
      driftX: (Math.random() - 0.5) * 0.0001,
    }))

    const particles: Particle[] = Array.from({ length: 60 }, () => ({
      x: (Math.random() - 0.5) * 1.8,
      y: (Math.random() - 0.5) * 1.4,
      z: 0.2 + Math.random() * 0.8,
      size: 1 + Math.random() * 2,
      opacity: 0.1 + Math.random() * 0.25,
      floatSpeed: 0.3 + Math.random() * 0.6,
      floatAmp: 0.01 + Math.random() * 0.03,
      phase: Math.random() * Math.PI * 2,
    }))

    let time = 0
    let animId = 0

    function draw() {
      animId = requestAnimationFrame(draw)
      time += 0.01
      mx += (tmx - mx) * 0.03
      my += (tmy - my) * 0.03
      ctx!.clearRect(0, 0, W, H)
      if (!logoReady) return

      const sorted = [...logos].sort((a, b) => a.z - b.z)
      sorted.forEach(l => {
        l.rot += l.rotSpeed
        l.x += l.driftX
        if (l.x > 0.9) l.x = -0.9
        if (l.x < -0.9) l.x = 0.9

        const floatY = Math.sin(time * l.floatSpeed + l.phase) * l.floatAmp
        const parallax = l.z * 0.08
        const px = (l.x + mx * parallax) * W * 0.5 + W * 0.5
        const py = (l.y + floatY - my * parallax * 0.5) * H * 0.5 + H * 0.5
        const baseSize = 80 * l.scale * l.z

        ctx!.save()
        ctx!.translate(px, py)
        ctx!.rotate(l.rot)
        ctx!.globalAlpha = l.opacity * l.z
        ctx!.globalCompositeOperation = 'screen'
        const skewX = Math.sin(l.rot * 0.5) * 0.15
        ctx!.transform(1, skewX, -skewX * 0.3, 1, 0, 0)
        ctx!.drawImage(logoImg, -baseSize / 2, -(baseSize * 0.83) / 2, baseSize, baseSize * 0.83)
        ctx!.restore()
      })

      particles.forEach(p => {
        const floatY = Math.sin(time * p.floatSpeed + p.phase) * p.floatAmp
        const parallax = p.z * 0.05
        const px = (p.x + mx * parallax) * W * 0.5 + W * 0.5
        const py = (p.y + floatY - my * parallax * 0.3) * H * 0.5 + H * 0.5
        const size = p.size * p.z

        ctx!.save()
        ctx!.globalAlpha = p.opacity * p.z * (0.7 + Math.sin(time * 2 + p.phase) * 0.3)
        ctx!.globalCompositeOperation = 'screen'
        ctx!.fillStyle = '#1FD000'
        ctx!.beginPath()
        ctx!.arc(px, py, size, 0, Math.PI * 2)
        ctx!.fill()
        ctx!.restore()
      })
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouseMove)
      canvas.remove()
    }
  }, [])

  return <div ref={containerRef} className="hero__3d-canvas" />
}
