import { useEffect, useRef, useState } from 'react'

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

/** Adds `in-view` once the element enters the viewport. */
export function useInView({ threshold = 0.2, rootMargin = '0px 0px -10% 0px' } = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          io.disconnect()
        }
      },
      { threshold, rootMargin },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [threshold, rootMargin])
  return [ref, inView]
}

/**
 * 0 → 1 progress of an element travelling through the viewport.
 * `mode: 'pin'` measures progress across a tall sticky container
 * (0 when its top hits the viewport top, 1 when its bottom hits the viewport bottom).
 */
export function useScrollProgress(mode = 'through') {
  const ref = useRef(null)
  const [p, setP] = useState(0)
  useEffect(() => {
    let raf = 0
    const measure = () => {
      raf = 0
      const el = ref.current
      if (!el) return
      const r = el.getBoundingClientRect()
      const vh = window.innerHeight
      let v
      if (mode === 'pin') v = -r.top / Math.max(1, r.height - vh)
      else v = (vh - r.top) / (vh + r.height)
      setP(Math.min(1, Math.max(0, v)))
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(measure)
    }
    measure()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [mode])
  return [ref, p]
}

/** Measures every path/circle inside an svg and stores its length in --len for draw animations. */
export function useMeasurePaths() {
  const ref = useRef(null)
  useEffect(() => {
    const svg = ref.current
    if (!svg) return
    svg.querySelectorAll('path, circle, line').forEach((el) => {
      const len = Math.ceil(el.getTotalLength?.() ?? 1000) + 2
      el.style.setProperty('--len', len)
    })
  }, [])
  return ref
}
