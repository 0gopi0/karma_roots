import { useEffect, useRef } from 'react'

// A slim root that grows down the left edge as the page is read.
export default function RootLine() {
  const line = useRef(null)
  const bud = useRef(null)
  useEffect(() => {
    let raf = 0
    const update = () => {
      raf = 0
      const max = document.documentElement.scrollHeight - window.innerHeight
      const p = max > 0 ? window.scrollY / max : 0
      line.current.style.transform = `scaleY(${p})`
      bud.current.style.top = `${p * 100}%`
      bud.current.style.opacity = p > 0.01 ? 1 : 0
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])
  return (
    <div className="pointer-events-none fixed bottom-6 left-4 top-24 z-40 hidden w-px bg-gold/15 mix-blend-difference lg:block" aria-hidden="true">
      <div ref={line} className="absolute inset-0 origin-top bg-gold" style={{ transform: 'scaleY(0)' }} />
      <div ref={bud} className="absolute left-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-gold bg-plum-900 transition-opacity" />
    </div>
  )
}
