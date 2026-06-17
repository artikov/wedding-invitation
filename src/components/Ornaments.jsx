// Reusable inline SVG ornaments. currentColor is used so callers can tint
// them with Tailwind text-* utilities.

export function Divider({ className = '' }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <span className="h-px w-16 bg-gradient-to-r from-transparent to-current opacity-40" />
      <svg
        width="46"
        height="20"
        viewBox="0 0 46 20"
        fill="none"
        className="text-current"
        aria-hidden="true"
      >
        <path
          d="M23 2c2 4 6 6 10 6-4 0-8 2-10 6-2-4-6-6-10-6 4 0 8-2 10-6Z"
          fill="currentColor"
          opacity="0.55"
        />
        <circle cx="6" cy="10" r="2" fill="currentColor" opacity="0.5" />
        <circle cx="40" cy="10" r="2" fill="currentColor" opacity="0.5" />
      </svg>
      <span className="h-px w-16 bg-gradient-to-l from-transparent to-current opacity-40" />
    </div>
  )
}

export function FloralCorner({ className = '', flip = false }) {
  return (
    <svg
      viewBox="0 0 160 160"
      className={className}
      style={flip ? { transform: 'scaleX(-1)' } : undefined}
      fill="none"
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" fill="none" opacity="0.75">
        <path d="M10 150C40 120 60 90 60 55" />
        <path d="M60 55c-14-4-26 4-30 18 16 2 27-4 30-18Z" fill="currentColor" fillOpacity="0.18" />
        <path d="M48 92c-14-2-26 6-29 20 16 0 26-7 29-20Z" fill="currentColor" fillOpacity="0.18" />
        <path d="M34 120c-13 0-23 9-25 22 15-1 23-9 25-22Z" fill="currentColor" fillOpacity="0.18" />
        <path d="M62 50c4-12 14-19 28-18-3 14-13 21-28 18Z" fill="currentColor" fillOpacity="0.18" />
        <circle cx="63" cy="48" r="6" fill="currentColor" fillOpacity="0.3" />
      </g>
    </svg>
  )
}

export function Rings({ className = '' }) {
  return (
    <svg viewBox="0 0 80 60" className={className} fill="none" aria-hidden="true">
      <circle cx="30" cy="35" r="18" stroke="currentColor" strokeWidth="2.5" opacity="0.8" />
      <circle cx="50" cy="35" r="18" stroke="currentColor" strokeWidth="2.5" opacity="0.8" />
      <path d="M37 12l3-6 3 6-3 3-3-3Z" fill="currentColor" opacity="0.85" />
    </svg>
  )
}

export function Sprig({ className = '' }) {
  return (
    <svg viewBox="0 0 120 40" className={className} fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" opacity="0.7">
        <path d="M10 20h100" />
        {[24, 40, 56, 72, 88].map((x, i) => (
          <g key={x}>
            <path d={`M${x} 20c-4-6-10-9-16-9`} />
            <path d={`M${x} 20c4-6 10-9 16-9`} />
          </g>
        ))}
        <circle cx="10" cy="20" r="2.5" fill="currentColor" />
        <circle cx="110" cy="20" r="2.5" fill="currentColor" />
      </g>
    </svg>
  )
}
