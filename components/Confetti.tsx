'use client'

import { useEffect, useRef, useCallback } from 'react'

interface ConfettiProps {
  /** Whether to trigger confetti */
  active: boolean
  /** Duration in ms (default 3000) */
  duration?: number
  /** Number of particles (default 80) */
  particleCount?: number
  /** Intensity: 'subtle' for a small burst, 'full' for a big celebration */
  intensity?: 'subtle' | 'full'
}

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  color: string
  size: number
  rotation: number
  rotationSpeed: number
  opacity: number
  shape: 'rect' | 'circle' | 'strip'
}

const COLORS = [
  '#FFD700', '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4',
  '#FFEAA7', '#DDA0DD', '#FF8C42', '#98D8C8', '#F7DC6F',
  '#BB8FCE', '#85C1E9', '#F1948A', '#82E0AA', '#F8C471',
  '#3d2e1e', '#25D366', '#FF4757', '#2ED573', '#FFA502',
]

export default function Confetti({
  active,
  duration = 3000,
  particleCount = 80,
  intensity = 'full',
}: ConfettiProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const animFrameRef = useRef<number>(0)
  const startTimeRef = useRef<number>(0)

  const createParticles = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const count = intensity === 'subtle' ? Math.floor(particleCount * 0.4) : particleCount
    const particles: Particle[] = []

    for (let i = 0; i < count; i++) {
      const isSubtle = intensity === 'subtle'
      // Origin at bottom center with minor random offset
      const startX = canvas.width / 2 + (Math.random() - 0.5) * 30
      const startY = canvas.height + 10

      // Velocity: negative vy is upwards, vx spreads left/right
      const vx = (Math.random() - 0.5) * (isSubtle ? 6 : 14)
      const vy = isSubtle
        ? -8 - Math.random() * 5
        : -15 - Math.random() * 9

      particles.push({
        x: startX,
        y: startY,
        vx,
        vy,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        size: isSubtle ? 4 + Math.random() * 3 : 5 + Math.random() * 6,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 12,
        opacity: 1,
        shape: ['rect', 'circle', 'strip'][Math.floor(Math.random() * 3)] as Particle['shape'],
      })
    }

    particlesRef.current = particles
  }, [particleCount, intensity])

  const animate = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const elapsed = Date.now() - startTimeRef.current
    const progress = Math.min(elapsed / duration, 1)

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    particlesRef.current.forEach((p) => {
      // Physics
      p.x += p.vx
      p.vy += 0.12 // gravity
      p.y += p.vy
      p.vx *= 0.99 // air resistance
      p.rotation += p.rotationSpeed

      // Fade out in last 30%
      if (progress > 0.7) {
        p.opacity = Math.max(0, 1 - (progress - 0.7) / 0.3)
      }

      ctx.save()
      ctx.translate(p.x, p.y)
      ctx.rotate((p.rotation * Math.PI) / 180)
      ctx.globalAlpha = p.opacity

      ctx.fillStyle = p.color

      if (p.shape === 'rect') {
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6)
      } else if (p.shape === 'circle') {
        ctx.beginPath()
        ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2)
        ctx.fill()
      } else {
        // strip / ribbon
        ctx.fillRect(-p.size / 2, -p.size * 1.2, p.size * 0.4, p.size * 2.4)
      }

      ctx.restore()
    })

    if (progress < 1) {
      animFrameRef.current = requestAnimationFrame(animate)
    }
  }, [duration])

  useEffect(() => {
    if (!active) return

    const canvas = canvasRef.current
    if (!canvas) return

    // Size the canvas to the viewport
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    startTimeRef.current = Date.now()
    createParticles()
    animate()

    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current)
      }
    }
  }, [active, createParticles, animate])

  if (!active) return null

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 99999 }}
    />
  )
}
