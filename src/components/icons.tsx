// Sphaerus — Three vertical monolith bars (The Column)
export function SphaerusIcon({ className = '', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill={color} className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x="16" y="10" width="16" height="80" />
      <rect x="42" y="10" width="16" height="80" />
      <rect x="68" y="10" width="16" height="80" />
    </svg>
  )
}

// Atlas — Heavy semi-circle / cradle (The Cradle)
export function AtlasIcon({ className = '', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" stroke={color} className={className} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15 25 Q15 85 50 85 Q85 85 85 25"
        strokeWidth="10"
        strokeLinecap="square"
        style={{ strokeWidth: '10' }}
      />
    </svg>
  )
}

// Legion — Two nested chevrons (The Chevrons)
export function LegionIcon({ className = '', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" stroke={color} className={className} xmlns="http://www.w3.org/2000/svg">
      <polyline points="20,25 50,55 80,25" strokeWidth="10" strokeLinecap="square" strokeLinejoin="miter" />
      <polyline points="20,50 50,80 80,50" strokeWidth="10" strokeLinecap="square" strokeLinejoin="miter" />
    </svg>
  )
}

// Astra — Four-pointed star / starburst (The Star)
export function AstraIcon({ className = '', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill={color} className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Vertical needle */}
      <polygon points="50,5 54,45 50,48 46,45" />
      <polygon points="50,95 54,55 50,52 46,55" />
      {/* Horizontal needle */}
      <polygon points="5,50 45,46 48,50 45,54" />
      <polygon points="95,50 55,46 52,50 55,54" />
    </svg>
  )
}
