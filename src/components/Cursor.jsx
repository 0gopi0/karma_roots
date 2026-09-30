import { useEffect, useRef, useState } from 'react'
import { prefersReducedMotion } from '../hooks'

// Champagne ring cursor for fine pointers; swells over links and buttons.
export default function Cursor() {
  const dot = useRef(null)
  const ring = useRef(null)
  const [enabled] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches && !prefersReducedMotion(),
  )

  useEffect(() => {
    if (!enabled) return
    const pos = { x: -100, y: -100 }
    const ringPos = { x: -100, y: -100 }
    let hover = false
    let down = false
    let raf
    const move = (e) => {
      pos.x = e.clientX
      pos.y = e.clientY
      hover = !!e.target.closest?.('a, button, [role="tab"]')
    }
    const tick = () => {
      ringPos.x += (pos.x - ringPos.x) * 0.18
      ringPos.y += (pos.y - ringPos.y) * 0.18
      dot.current.style.transform = `translate(${pos.x}px, ${pos.y}px)`
      const s = (hover ? 1.9 : 1) * (down ? 0.8 : 1)
      ring.current.style.transform = `translate(${ringPos.x}px, ${ringPos.y}px) scale(${s})`
      ring.current.style.backgroundColor = hover ? 'rgba(216,186,162,.14)' : 'transparent'
      raf = requestAnimationFrame(tick)
    }
    const d = () => (down = true)
    const u = () => (down = false)
    window.addEventListener('pointermove', move, { passive: true })
    window.addEventListener('pointerdown', d)
    window.addEventListener('pointerup', u)
    raf = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerdown', d)
      window.removeEventListener('pointerup', u)
    }
  }, [enabled])

  if (!enabled) return null
  return (
    <div className="pointer-events-none fixed inset-0 z-[70] mix-blend-difference" aria-hidden="true">
      <div ref={ring} className="absolute -left-5 -top-5 h-10 w-10 rounded-full border border-champagne transition-[background-color] duration-300" />
      <div ref={dot} className="absolute -left-[3px] -top-[3px] h-1.5 w-1.5 rounded-full bg-champagne" />
    </div>
  )
}
