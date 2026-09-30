import { useMeasurePaths } from '../hooks'

// Line lotus redrawn from the Karma Roots logo. viewBox 0 0 200 175, centre x = 100.
export const PETALS = [
  // outer low petals
  'M100 144 C74 147 49 129 41 99 C66 105 88 121 100 144',
  'M100 144 C126 147 151 129 159 99 C134 105 112 121 100 144',
  // side petals
  'M100 142 C69 133 51 104 51 64 C75 84 93 108 100 142',
  'M100 142 C131 133 149 104 149 64 C125 84 107 108 100 142',
  // central petal
  'M100 25 C123 51 139 94 100 141 C61 94 77 51 100 25',
  // inner crossing lines
  'M100 30 C85 61 83 101 113 141',
  'M100 30 C115 61 117 101 87 141',
  // stem
  'M94 143 L100 165 L106 143',
]

// The five dots of the logo, one for each root (top, then clockwise isn't used: order follows ROOTS)
export const DOTS = [
  [40, 87],
  [54, 55],
  [100, 12],
  [146, 55],
  [160, 87],
]

export default function Lotus({ className = '', drawn = true, strokeWidth = 1.4, dots = true, stagger = 0.12 }) {
  const ref = useMeasurePaths()
  return (
    <svg
      ref={ref}
      viewBox="0 0 200 175"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`draw ${drawn ? 'is-drawn' : ''} ${className}`}
      aria-hidden="true"
    >
      {PETALS.map((d, i) => (
        <path key={i} d={d} style={{ '--d': `${i * stagger}s` }} />
      ))}
      {dots &&
        DOTS.map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="3.6" style={{ '--d': `${1.2 + i * 0.12}s` }} />
        ))}
    </svg>
  )
}
