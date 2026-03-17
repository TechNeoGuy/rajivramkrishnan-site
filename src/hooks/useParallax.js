import { useEffect, useRef } from 'react'

export function useParallax(speed = 0.15) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(pointer: coarse)').matches) return

    const onScroll = () => {
      const rect = el.getBoundingClientRect()
      const viewH = window.innerHeight
      const scrolled = viewH - rect.top
      el.style.transform = `translateY(${scrolled * speed}px)`
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [speed])

  return ref
}
