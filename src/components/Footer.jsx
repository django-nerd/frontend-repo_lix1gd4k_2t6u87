import React from 'react'

const links = [
  { id: 'hero', label: 'Home' },
  { id: 'glance', label: 'At a Glance' },
  { id: 'hosts', label: 'Hosts & Cities' },
  { id: 'matches', label: 'Match Hub' },
  { id: 'trip', label: 'Trip Planner' },
  { id: 'stories', label: 'Storylines' },
  { id: 'vibes', label: 'City Vibes' },
  { id: 'tools', label: 'Fan Tools' },
  { id: 'community', label: 'Community' },
]

export default function Footer() {
  return (
    <footer className="py-12 bg-slate-950 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <nav className="flex flex-wrap gap-3 text-slate-300 text-sm">
            {links.map(l => (
              <a key={l.id} href={`#${l.id}`} className="hover:text-white">{l.label}</a>
            ))}
          </nav>
          <div className="text-slate-400 text-xs">
            Independent fan site — not affiliated with FIFA. © {new Date().getFullYear()}
          </div>
        </div>
        <div className="mt-4 text-slate-500 text-xs">Legal • Privacy • Terms</div>
      </div>
    </footer>
  )
}
