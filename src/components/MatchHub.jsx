import React, { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Search, CalendarDays, MapPin, Trophy } from 'lucide-react'

const sampleMatches = [
  { date: '2026-06-11', city: 'Mexico City', stage: 'Group', teams: ['Mexico', 'TBD'], time: '19:00', flags: ['🇲🇽', '🏳️']},
  { date: '2026-06-12', city: 'New York / New Jersey', stage: 'Group', teams: ['USA', 'TBD'], time: '18:00', flags: ['🇺🇸', '🏳️']},
  { date: '2026-06-13', city: 'Toronto', stage: 'Group', teams: ['Canada', 'TBD'], time: '17:00', flags: ['🇨🇦', '🏳️']},
  { date: '2026-06-20', city: 'Los Angeles', stage: 'Group', teams: ['Brazil', 'TBD'], time: '20:00', flags: ['🇧🇷', '🏳️']},
  { date: '2026-07-10', city: 'Dallas', stage: 'Quarter-final', teams: ['TBD', 'TBD'], time: '20:00', flags: ['🏳️', '🏳️']},
  { date: '2026-07-19', city: 'New York / New Jersey', stage: 'Final', teams: ['TBD', 'TBD'], time: '20:00', flags: ['🏳️', '🏳️']},
]

export default function MatchHub() {
  const [mode, setMode] = useState('date')
  const [query, setQuery] = useState('')
  const [filters, setFilters] = useState({ stage: 'All', city: 'All' })

  const filtered = useMemo(() => {
    return sampleMatches.filter(m => {
      const q = query.toLowerCase()
      const matchesQuery = !q || m.teams.join(' ').toLowerCase().includes(q) || m.city.toLowerCase().includes(q)
      const matchesStage = filters.stage === 'All' || m.stage === filters.stage
      const matchesCity = filters.city === 'All' || m.city === filters.city
      return matchesQuery && matchesStage && matchesCity
    })
  }, [query, filters])

  const cities = Array.from(new Set(sampleMatches.map(m => m.city)))
  const stages = Array.from(new Set(sampleMatches.map(m => m.stage)))

  return (
    <section id="matches" className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Matches & Schedule Explorer</h2>
            <p className="mt-2 text-slate-300">Filter by team, city, date and stage.</p>
          </div>
          <div className="inline-flex bg-white/5 border border-white/10 rounded-full p-1">
            <button onClick={() => setMode('date')} className={`px-4 py-2 rounded-full text-sm ${mode==='date'?'bg-white/10 text-white':'text-slate-300'}`}>By Date</button>
            <button onClick={() => setMode('city')} className={`px-4 py-2 rounded-full text-sm ${mode==='city'?'bg-white/10 text-white':'text-slate-300'}`}>By City</button>
          </div>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-[1fr_auto_auto]">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search for your country, city or star player…" className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-400 outline-none" />
          </div>
          <select value={filters.stage} onChange={e=>setFilters(f=>({...f, stage: e.target.value}))} className="px-3 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-200">
            <option>All</option>
            {stages.map(s=> <option key={s}>{s}</option>)}
          </select>
          <select value={filters.city} onChange={e=>setFilters(f=>({...f, city: e.target.value}))} className="px-3 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-200">
            <option>All</option>
            {cities.map(c=> <option key={c}>{c}</option>)}
          </select>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((m, idx) => (
            <motion.div key={idx} whileHover={{ y: -6 }} className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <div className="flex items-center justify-between text-slate-300 text-sm">
                <div className="inline-flex items-center gap-2"><CalendarDays className="w-4 h-4" />{m.date}</div>
                <div className="inline-flex items-center gap-2"><MapPin className="w-4 h-4" />{m.city}</div>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <div className="flex items-center gap-2 text-2xl font-extrabold text-white">
                  <span>{m.flags[0]}</span><span>{m.teams[0]}</span>
                  <span className="text-slate-400 text-base mx-2">vs</span>
                  <span>{m.flags[1]}</span><span>{m.teams[1]}</span>
                </div>
                <div className="text-right">
                  <div className="text-white font-semibold">{m.time}</div>
                  <div className="text-emerald-300 text-xs inline-flex items-center gap-1"><Trophy className="w-3 h-3"/>{m.stage}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
