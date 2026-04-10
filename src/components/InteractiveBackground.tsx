import { useEffect, useRef } from 'react'

interface Point {
  x: number
  y: number
  age: number
}

export default function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: -1, y: -1, inside: false })
  const clientMouseRef = useRef({ clientX: -1, clientY: -1 })
  const pointsRef = useRef<Point[]>([])
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const updateMouseFromClient = () => {
      const { clientX, clientY } = clientMouseRef.current
      if (clientX < 0) return
      const rect = canvas.getBoundingClientRect()
      const x = clientX - rect.left
      const y = clientY - rect.top
      const inside =
        clientX >= rect.left &&
        clientX <= rect.right &&
        clientY >= rect.top &&
        clientY <= rect.bottom

      mouseRef.current = { x, y, inside }
    }

    const handleMouseMove = (e: MouseEvent) => {
      clientMouseRef.current = { clientX: e.clientX, clientY: e.clientY }
      updateMouseFromClient()

      const { x, y, inside } = mouseRef.current
      if (inside) {
        pointsRef.current.push({ x, y, age: 0 })
        if (pointsRef.current.length > 80) {
          pointsRef.current.shift()
        }
      }
    }

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1, y: -1, inside: false }
    }

    const handleScroll = () => {
      updateMouseFromClient()
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('scroll', handleScroll, { passive: true })
    canvas.addEventListener('mouseleave', handleMouseLeave)

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Recalculate each frame to handle scroll
      updateMouseFromClient()
      const { x, y, inside } = mouseRef.current

      // Draw subtle grid
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.015)'
      ctx.lineWidth = 1
      const gridSize = 60
      for (let gx = 0; gx < canvas.width; gx += gridSize) {
        ctx.beginPath()
        ctx.moveTo(gx, 0)
        ctx.lineTo(gx, canvas.height)
        ctx.stroke()
      }
      for (let gy = 0; gy < canvas.height; gy += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, gy)
        ctx.lineTo(canvas.width, gy)
        ctx.stroke()
      }

      // Only draw mouse effects when cursor is inside the canvas
      if (inside) {
        // Illuminate grid cells near mouse
        for (let gx = 0; gx < canvas.width; gx += gridSize) {
          for (let gy = 0; gy < canvas.height; gy += gridSize) {
            const cx = gx + gridSize / 2
            const cy = gy + gridSize / 2
            const dist = Math.sqrt((cx - x) ** 2 + (cy - y) ** 2)
            const maxDist = 250

            if (dist < maxDist) {
              const intensity = 1 - dist / maxDist
              const alpha = intensity * 0.08

              const hue = 220 + (cx / canvas.width) * 40
              ctx.fillStyle = `hsla(${hue}, 70%, 55%, ${alpha})`
              ctx.fillRect(gx, gy, gridSize, gridSize)

              if (dist < 120) {
                const borderAlpha = (1 - dist / 120) * 0.15
                ctx.strokeStyle = `hsla(${hue}, 70%, 60%, ${borderAlpha})`
                ctx.lineWidth = 1
                ctx.strokeRect(gx + 0.5, gy + 0.5, gridSize - 1, gridSize - 1)
              }
            }
          }
        }

        // Draw mouse glow — primary radial
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, 300)
        gradient.addColorStop(0, 'rgba(99, 102, 241, 0.12)')
        gradient.addColorStop(0.3, 'rgba(59, 130, 246, 0.06)')
        gradient.addColorStop(0.6, 'rgba(139, 92, 246, 0.03)')
        gradient.addColorStop(1, 'transparent')
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        // Inner bright core
        const coreGradient = ctx.createRadialGradient(x, y, 0, x, y, 80)
        coreGradient.addColorStop(0, 'rgba(165, 180, 252, 0.1)')
        coreGradient.addColorStop(1, 'transparent')
        ctx.fillStyle = coreGradient
        ctx.fillRect(x - 80, y - 80, 160, 160)
      }

      // Draw trail points (fade out even after mouse leaves)
      pointsRef.current.forEach((point) => {
        point.age += 1
        const maxAge = 60
        if (point.age > maxAge) return

        const life = 1 - point.age / maxAge
        const size = life * 3
        const alpha = life * 0.15

        ctx.beginPath()
        ctx.arc(point.x, point.y, size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(99, 102, 241, ${alpha})`
        ctx.fill()
      })

      // Clean up dead points
      pointsRef.current = pointsRef.current.filter((p) => p.age < 60)

      // Ambient floating particles (always visible, react to mouse only when inside)
      const time = Date.now() * 0.001
      for (let i = 0; i < 30; i++) {
        const px = ((Math.sin(time * 0.3 + i * 2.1) + 1) / 2) * canvas.width
        const py = ((Math.cos(time * 0.2 + i * 1.7) + 1) / 2) * canvas.height
        let baseAlpha = 0.02
        let particleSize = 1

        if (inside) {
          const dist = Math.sqrt((px - x) ** 2 + (py - y) ** 2)
          const proximity = Math.max(0, 1 - dist / 400)
          baseAlpha = 0.02 + proximity * 0.08
          particleSize = 1 + proximity * 2
        }

        ctx.beginPath()
        ctx.arc(px, py, particleSize, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(139, 92, 246, ${baseAlpha})`
        ctx.fill()
      }

      rafRef.current = requestAnimationFrame(animate)
    }

    rafRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
      canvas.removeEventListener('mouseleave', handleMouseLeave)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ background: '#101010' }}
    />
  )
}
