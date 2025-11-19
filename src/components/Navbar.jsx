import React, { useEffect, useState } from 'react'
import { Menu, Globe2, Compass, CalendarDays, Map, Newspaper, Sparkles, Mail } from 'lucide-react'

const sections = [
  { id: 'hero', label: 'Home', icon: Globe2 },
  { id: 'glance', label: 'At a Glance', icon: Sparkles },
  { id: 'hosts', label: 'Hosts & Cities', icon: Map },
  { id: 'matches', label: 'Match Hub', icon: CalendarDays },
  { id: 'trip', label: 'Trip Planner', icon: Compass },
  { id: 'stories', label: 'Storylines', icon: Newspaper },
  { id: 'vibes', label: 'City Vibes', icon: Sparkles },
  { id: 'tools', label: 'Fan Tools', icon: Sparkles },
  { id: 'community', label: 'Community', icon: Mail },
]

export default function Navbar() {
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    )

    sections.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border-b border-white/10">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2 text-white">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-gradient-to-br from-emerald-400 via-sky-400 to-rose-400 animate-pulse"></span>
          <span className="font-semibold tracking-tight">We Are 26</span>
        </a>
        <div className="hidden md:flex items-center gap-1">
          {sections.map(({ id, label, icon: Icon }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`inline-flex items-center gap-2 px-3 py-2 rounded-full text-sm transition border border-transparent ${
                active === id
                  ? 'text-white bg-white/10 border-white/10'
                  : 'text-slate-200 hover:text-white hover:bg-white/10'
              }`}
              aria-current={active === id ? 'page' : undefined}
            >
              <Icon className="w-4 h-4" />
              {label}
            </a>
          ))}
        </div>
        <button className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/5 text-white" aria-label="Open menu">
          <Menu className="w-5 h-5" />
        </button>
      </nav>
    </header>
  )
}
