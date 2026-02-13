"use client"

import { useEffect, useRef } from "react"

export default function PhysicsBackground() {
  const ref = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let w = (canvas.width = canvas.clientWidth)
    let h = (canvas.height = canvas.clientHeight)

    const resize = () => {
      w = canvas.width = canvas.clientWidth
      h = canvas.height = canvas.clientHeight
    }

    window.addEventListener("resize", resize)

    type Particle = { x: number; y: number; r: number; vx: number; vy: number }

    const particleCount = 80
    const particles: Particle[] = []
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: 1 + Math.random() * 3,
        vx: (Math.random() - 0.5) * 1.2,
        vy: (Math.random() - 0.5) * 1.2,
      })
    }

    let rafId = 0

    function step() {
      ctx.clearRect(0, 0, w, h)

      // update & draw
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        // simple gravity-ish pull
        p.vy += 0.01

        if (p.x < 0) {
          p.x = 0
          p.vx *= -1
        }
        if (p.x > w) {
          p.x = w
          p.vx *= -1
        }
        if (p.y < 0) {
          p.y = 0
          p.vy *= -0.9
        }
        if (p.y > h) {
          p.y = h
          p.vy *= -0.9
        }

        ctx.beginPath()
        ctx.fillStyle = "rgba(255,255,255,0.08)"
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
      }

      // connect close particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i]
          const b = particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(255,255,255,${0.06 * (1 - dist / 120)})`
            ctx.lineWidth = 1
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      rafId = requestAnimationFrame(step)
    }

    step()

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return <canvas ref={ref} className="absolute inset-0 w-full h-full -z-10" />
}
