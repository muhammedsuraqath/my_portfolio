import { useEffect, useRef, useState } from 'react'

/**
 * 360° turnaround portrait built from real photo frames.
 * - Rests on the front view, then turns a full circle every few seconds.
 * - Drag (mouse or touch) left/right to spin it manually.
 */
export default function SpinPortrait({ frames, alt }) {
  const [i, setI] = useState(0)
  const drag = useRef(null)
  const paused = useRef(false)
  const n = frames.length

  // Auto "showcase turn": hold on the front, then step through every angle.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let step = 0
    let timer
    const tick = () => {
      if (paused.current) { timer = setTimeout(tick, 400); return }
      step = (step + 1) % n
      setI(step)
      timer = setTimeout(tick, step === 0 ? 3200 : 170)
    }
    timer = setTimeout(tick, 2600)
    return () => clearTimeout(timer)
  }, [n])

  const onDown = (e) => {
    paused.current = true
    drag.current = { x: e.clientX, start: i }
    e.currentTarget.setPointerCapture(e.pointerId)
  }
  const onMove = (e) => {
    if (!drag.current) return
    const steps = Math.round((e.clientX - drag.current.x) / 28)
    setI((((drag.current.start - steps) % n) + n) % n)
  }
  const onUp = () => {
    drag.current = null
    setTimeout(() => (paused.current = false), 2500)
  }

  return (
    <div
      className="spin"
      onPointerDown={onDown}
      onPointerMove={onMove}
      onPointerUp={onUp}
      onPointerCancel={onUp}
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => !drag.current && (paused.current = false)}
      role="img"
      aria-label={alt}
    >
      {frames.map((src, k) => (
        <img
          key={src}
          src={src}
          alt=""
          draggable="false"
          className={k === i ? 'on' : ''}
          loading="eager"
        />
      ))}
      <span className="spin-hint">⟲ Drag to rotate 360°</span>
    </div>
  )
}
