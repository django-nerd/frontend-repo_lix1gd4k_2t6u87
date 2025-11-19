import React, { useEffect, useState } from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

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

  const pills = [
    { label: 'Follow My Team' },
    { label: 'Choose My City' },
    { label: 'Plan My Trip' },
  ]

  return (
    <section id="hero" className="relative min-h-[100svh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/50 to-slate-950/80 pointer-events-none"></div>

      <div className="relative z-10 pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
            <p className="inline-flex items-center gap-2 text-emerald-300 text-sm font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Your futuristic guide to the 2026 World Cup in USA, Mexico & Canada
            </p>
            <h1 className="mt-4 text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white">
              We Are 26 – The Future of World Football
            </h1>
            <p className="mt-4 text-lg text-slate-200 max-w-xl">
              48 teams • 3 host nations • 16 cities • 104 matches
            </p>
          </motion.div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 max-w-5xl">
            {['Days','Hours','Minutes','Seconds'].map((unit, idx) => {
              const value = [countdown.days, countdown.hours, countdown.minutes, countdown.seconds][idx]
              return (
                <motion.div key={unit} whileHover={{ scale: 1.03 }} className="col-span-2 bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-4 text-center">
                  <div className="text-4xl sm:text-5xl font-extrabold text-white tabular-nums">{String(value).padStart(2,'0')}</div>
                  <div className="text-xs tracking-widest uppercase text-slate-300 mt-1">{unit}</div>
                </motion.div>
              )
            })}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            {pills.map((p) => (
              <a key={p.label} href="#trip" className="px-5 py-3 rounded-full bg-gradient-to-r from-emerald-500/80 via-sky-500/80 to-rose-500/80 text-white font-semibold shadow-lg shadow-emerald-500/10 hover:shadow-rose-500/20 transition transform hover:-translate-y-0.5">
                {p.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
