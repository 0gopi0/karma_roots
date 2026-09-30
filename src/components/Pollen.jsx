import { useEffect, useRef } from 'react'
import { prefersReducedMotion } from '../hooks'

// Drifting champagne pollen that shies away from the pointer.
export default function Pollen({ className = '', density = 0.00009 }) {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    const reduce = prefersReducedMotion()
    let w, h, dpr, parts, raf
    const mouse = { x: -9999, y: -9999 }

    const init = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = canvas.clientWidth
      h = canvas.clientHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const n = Math.round(Math.max(28, Math.min(140, w * h * density)))
      parts = Array.from({ length: n }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.6 + 0.4,
        vy: -(Math.random() * 0.25 + 0.06),
        drift: Math.random() * Math.PI * 2,
        tw: Math.random() * Math.PI * 2,
        dx: 0,
        dy: 0,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      for (const p of parts) {
        p.drift += 0.006
        p.tw += 0.03
        p.y += p.vy
        p.x += Math.sin(p.drift) * 0.18
        const mx = p.x - mouse.x
        const my = p.y - mouse.y
        const dist = Math.hypot(mx, my)
        if (dist < 110) {
          const f = (110 - dist) / 110
          p.dx += (mx / (dist || 1)) * f * 0.8
          p.dy += (my / (dist || 1)) * f * 0.8
        }
        p.dx *= 0.92
        p.dy *= 0.92
        p.x += p.dx
        p.y += p.dy
        if (p.y < -10) {
          p.y = h + 10
          p.x = Math.random() * w
        }
        const a = 0.35 + Math.sin(p.tw) * 0.3
        ctx.beginPath()
        ctx.fillStyle = `rgba(232, 210, 189, ${Math.max(0.05, a)})`
        ctx.shadowColor = 'rgba(216, 186, 162, .9)'
        ctx.shadowBlur = p.r * 6
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
      }
      raf = requestAnimationFrame(draw)
    }

    const onMove = (e) => {
      const r = canvas.getBoundingClientRect()
      mouse.x = e.clientX - r.left
      mouse.y = e.clientY - r.top
    }
    const onLeave = () => {
      mouse.x = mouse.y = -9999
    }

    init()
    if (reduce) {
      draw()
      cancelAnimationFrame(raf)
    } else draw()

    // pause when off-screen
    const io = new IntersectionObserver(([e]) => {
      cancelAnimationFrame(raf)
      if (e.isIntersecting && !reduce) raf = requestAnimationFrame(draw)
    })
    io.observe(canvas)

    window.addEventListener('resize', init)
    window.addEventListener('pointermove', onMove, { passive: true })
    document.addEventListener('pointerleave', onLeave)
    return () => {
      cancelAnimationFrame(raf)
      io.disconnect()
      window.removeEventListener('resize', init)
      window.removeEventListener('pointermove', onMove)
      document.removeEventListener('pointerleave', onLeave)
    }
  }, [density])

  return <canvas ref={ref} className={`pointer-events-none absolute inset-0 h-full w-full ${className}`} aria-hidden="true" />
}
