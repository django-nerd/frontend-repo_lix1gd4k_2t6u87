import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { VolumeX, Volume2, Football } from 'lucide-react'

function useCountdown(targetDate) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  useEffect(() => {
    const target = new Date(targetDate).getTime()
    const interval = setInterval(() => {
      const now = Date.now()
      const diff = Math.max(0, target - now)
      const days = Math.floor(diff / (1000 * 60 * 60 * 24))
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((diff % (1000 * 60)) / 1000)
      setTimeLeft({ days, hours, minutes, seconds })
    }, 1000)
    return () => clearInterval(interval)
  }, [targetDate])
  return timeLeft
}

export default function Hero() {
  const countdown = useCountdown('June 11, 2026 12:00:00')
  const [soundOn, setSoundOn] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [SplineComponent, setSplineComponent] = useState(null)
  const audioRef = useRef(null)

  // Mark mounted to avoid SSR/window access issues
  useEffect(() => {
    setMounted(true)
  }, [])

  // Dynamically import Spline only in the browser; if it fails, we gracefully fall back to a gradient
  useEffect(() => {
    let cancelled = false
    async function loadSpline() {
      try {
        if (typeof window === 'undefined') return
        const mod = await import('@splinetool/react-spline')
        if (!cancelled) setSplineComponent(() => mod.default)
      } catch (e) {
        // ignore and keep fallback background
      }
    }
    loadSpline()
    return () => { cancelled = true }
  }, [])

  useEffect(() => {
    if (!audioRef.current) return
    if (soundOn) {
      audioRef.current.volume = 0.06
      const playPromise = audioRef.current.play()
      if (playPromise?.catch) {
        playPromise.catch(() => {})
      }
    } else {
      audioRef.current.pause()
    }
  }, [soundOn])

  const pills = [
    { label: 'Follow My Team' },
    { label: 'Choose My City' },
    { label: 'Plan My Trip' },
  ]

  const stats = ['Days','Hours','Minutes','Seconds']
  const values = [countdown.days, countdown.hours, countdown.minutes, countdown.seconds]

  const [confettiBurst, setConfettiBurst] = useState(0)

  return (
    <section id="hero" className="relative min-h-[100svh] w-full overflow-hidden">
      {/* Background layer: try to render Spline when mounted; otherwise show a soft gradient */}
      <div className="absolute inset-0">
        {mounted && SplineComponent ? (
          <SplineComponent scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        ) : (
          <div className="w-full h-full bg-[radial-gradient(1000px_600px_at_50%_10%,rgba(16,185,129,0.15),transparent),radial-gradient(800px_500px_at_80%_20%,rgba(56,189,248,0.12),transparent)]" />
        )}
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/50 to-slate-950/80" />

      <div className="relative z-10 pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
            <p className="inline-flex items-center gap-2 text-emerald-300 text-sm font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Your futuristic guide to the 2026 World Cup in USA, Mexico & Canada
            </p>
            <h1 className="mt-4 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight text-white leading-[0.95]">
              We Are 26 — The Future of World Football
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-slate-200 max-w-2xl">
              48 teams • 3 host nations • 16 cities • 104 matches
            </p>
          </motion.div>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 max-w-5xl">
            {stats.map((unit, idx) => (
              <motion.div key={unit} whileHover={{ scale: 1.03 }} className="col-span-2 bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-4 text-center">
                <div className="text-4xl sm:text-5xl font-extrabold text-white tabular-nums">{String(values[idx]).padStart(2,'0')}</div>
                <div className="text-xs tracking-widest uppercase text-slate-300 mt-1">{unit}</div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            {pills.map((p) => (
              <a key={p.label} href="#trip" className="px-5 py-3 rounded-full bg-gradient-to-r from-emerald-500/80 via-sky-500/80 to-rose-500/80 text-white font-semibold shadow-lg shadow-emerald-500/10 hover:shadow-rose-500/20 transition transform hover:-translate-y-0.5">
                {p.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={() => setSoundOn((s) => !s)}
        className="absolute top-24 right-4 sm:right-8 z-20 inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 text-white border border-white/10 backdrop-blur"
        aria-label={soundOn ? 'Mute crowd ambience' : 'Play crowd ambience'}
      >
        {soundOn ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
        <span className="text-xs">Crowd</span>
      </button>
      <audio ref={audioRef} src="https://cdn.pixabay.com/download/audio/2022/03/15/audio_9e8d1e0bd7.mp3?filename=crowd-ambience-21468.mp3" loop />

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
        <button
          onClick={() => setConfettiBurst((b) => b + 1)}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 text-white border border-white/10 hover:bg-white/15 backdrop-blur"
          aria-label="Celebrate"
        >
          <Football className="w-5 h-5" /> Celebrate
        </button>
      </div>

      {/* simple sparkles */}
      <motion.div
        key={confettiBurst}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1.2 }}
        className="pointer-events-none absolute inset-0 z-10"
      >
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.span
              key={i}
              initial={{ x: '50%', y: '50%', opacity: 0, scale: 0.6 }}
              animate={{
                x: `${50 + (Math.random() * 80 - 40)}%`,
                y: `${50 + (Math.random() * 60 - 30)}%`,
                opacity: [0, 1, 0],
                rotate: Math.random() * 180,
                scale: [0.6, 1, 0.6],
              }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="block w-1 h-1 bg-gradient-to-br from-emerald-400 via-sky-400 to-rose-400 rounded-full shadow"
            />
          ))}
        </div>
      </motion.div>

      <a
        href="#trip"
        className="md:hidden fixed bottom-4 right-4 z-50 inline-flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-emerald-500 via-sky-500 to-rose-500 text-white font-semibold shadow-lg"
      >
        Plan My Trip
      </a>
    </section>
  )
}
