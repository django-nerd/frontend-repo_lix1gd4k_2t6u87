import React, { useMemo, useState } from 'react'
import { motion } from 'framer-motion'

const vibeOptions = ['Big City Energy','Beach & Fiesta','Nature & Skyline Mix']
const allCities = ['New York / New Jersey','Los Angeles','Toronto','Vancouver','Mexico City','Guadalajara','Monterrey','Miami','Seattle','Dallas']

export default function TripPlanner() {
  const [vibe, setVibe] = useState(vibeOptions[0])
  const [selected, setSelected] = useState([])
  const [dates, setDates] = useState('Full Tournament')
  const [route, setRoute] = useState(null)

  const toggleCity = (c) => {
    setSelected(prev => prev.includes(c) ? prev.filter(x=>x!==c) : (prev.length<3 ? [...prev, c] : prev))
  }

  const generate = () => {
    const picks = selected.length ? selected : allCities.slice(0,3)
    const days = Math.max(3, Math.floor(30 / picks.length))
    const tips = {
      'New York / New Jersey': ['Walk the High Line', 'Hudson Yards fan zone'],
      'Los Angeles': ['Santa Monica sunrise', 'DTLA stadium district'],
      'Toronto': ['Waterfront fan fest', 'Kensington snack tour'],
      'Vancouver': ['Seawall bike loop', 'Gastown pre-match pubs'],
      'Mexico City': ['Street tacos near Condesa', 'Azteca history walk'],
      'Guadalajara': ['Birria breakfast', 'Historic center stroll'],
      'Monterrey': ['Macroplaza evenings', 'Mountain viewpoint'],
      'Miami': ['Little Havana vibes', 'Beach sunrise kickabout'],
      'Seattle': ['Pike Place bites', 'Waterfront supporters march'],
      'Dallas': ['BBQ crawl', 'Arts District detour']
    }
    const plan = picks.map((c, i) => ({ city: c, days: days + (i===0?1:0), tips: tips[c] || ['Local eats', 'Iconic landmark'] }))
    setRoute({ vibe, dates, plan })
  }

  return (
    <section id="trip" className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Build Your Dream Route</h2>
        <p className="mt-2 text-slate-300">Design a playful mini itinerary for your World Cup adventure.</p>

        <div className="mt-8 grid gap-6">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
            <h3 className="text-white font-semibold">Step 1: Preferred vibe</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {vibeOptions.map(v => (
                <button key={v} onClick={()=>setVibe(v)} className={`px-4 py-2 rounded-full text-sm ${vibe===v? 'bg-gradient-to-r from-emerald-500/60 via-sky-500/60 to-rose-500/60 text-white':'bg-white/5 text-slate-200'}`}>{v}</button>
              ))}
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
            <h3 className="text-white font-semibold">Step 2: Choose up to 3 cities</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {allCities.map(c => (
                <button key={c} onClick={()=>toggleCity(c)} className={`px-3 py-2 rounded-full text-sm ${selected.includes(c)?'bg-emerald-500/60 text-white':'bg-white/5 text-slate-200'}`}>{c}</button>
              ))}
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
            <h3 className="text-white font-semibold">Step 3: Dates</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {['Full Tournament','Group Stage','Knockouts'].map(d => (
                <button key={d} onClick={()=>setDates(d)} className={`px-3 py-2 rounded-full text-sm ${dates===d?'bg-sky-500/60 text-white':'bg-white/5 text-slate-200'}`}>{d}</button>
              ))}
            </div>
          </div>

          <div className="flex justify-start">
            <button onClick={generate} className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 via-sky-500 to-rose-500 text-white font-semibold shadow-lg hover:opacity-90">Generate My Route</button>
          </div>

          {route && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h4 className="text-white font-semibold">Recommended Route • {route.vibe} • {route.dates}</h4>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {route.plan.map((p, idx) => (
                  <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <div className="text-white font-bold text-lg">{idx+1}. {p.city}</div>
                    <div className="text-emerald-300 text-sm">{p.days} days</div>
                    <ul className="mt-2 list-disc list-inside text-slate-200 text-sm">
                      {p.tips.map((t,i)=>(<li key={i}>{t}</li>))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
