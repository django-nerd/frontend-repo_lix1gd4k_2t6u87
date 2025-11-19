import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'

const cities = {
  USA: [
    { city: 'New York / New Jersey', stadium: 'MetLife Stadium', capacity: 82500, flag: '🇺🇸', desc: 'Iconic skyline energy meets global football theatre.' },
    { city: 'Los Angeles', stadium: 'SoFi Stadium', capacity: 70000, flag: '🇺🇸', desc: 'Futuristic arena vibes and West Coast sun.' },
    { city: 'Dallas', stadium: 'AT&T Stadium', capacity: 80000, flag: '🇺🇸', desc: 'Big stage, big crowds, big atmosphere.' },
    { city: 'San Francisco Bay Area', stadium: 'Levi’s Stadium', capacity: 68500, flag: '🇺🇸', desc: 'Tech coast energy and global fan mix.' },
    { city: 'Miami', stadium: 'Hard Rock Stadium', capacity: 65326, flag: '🇺🇸', desc: 'Beach, beats and football fever.' },
    { city: 'Atlanta', stadium: 'Mercedes-Benz Stadium', capacity: 71000, flag: '🇺🇸', desc: 'A modern cathedral for the game.' },
    { city: 'Seattle', stadium: 'Lumen Field', capacity: 68000, flag: '🇺🇸', desc: 'Emerald City roar with rain or shine.' },
    { city: 'Boston', stadium: 'Gillette Stadium', capacity: 65878, flag: '🇺🇸', desc: 'Historic sports region, electric crowds.' },
    { city: 'Philadelphia', stadium: 'Lincoln Financial Field', capacity: 69596, flag: '🇺🇸', desc: 'Passionate fanbase with grit and pride.' },
    { city: 'Kansas City', stadium: 'GEHA Field at Arrowhead', capacity: 76416, flag: '🇺🇸', desc: 'Heartland hospitality meets loud support.' },
    { city: 'Houston', stadium: 'NRG Stadium', capacity: 72220, flag: '🇺🇸', desc: 'Global city flavor and Texas scale.' },
  ],
  Mexico: [
    { city: 'Mexico City', stadium: 'Estadio Azteca', capacity: 87000, flag: '🇲🇽', desc: 'Legendary stadium, unmatched history.' },
    { city: 'Guadalajara', stadium: 'Estadio Akron', capacity: 48000, flag: '🇲🇽', desc: 'Modern design, vibrant fan culture.' },
    { city: 'Monterrey', stadium: 'Estadio BBVA', capacity: 53500, flag: '🇲🇽', desc: 'Mountain backdrop, elite matchday vibes.' },
  ],
  Canada: [
    { city: 'Toronto', stadium: 'BMO Field', capacity: 30000, flag: '🇨🇦', desc: 'Waterfront energy, diverse crowds.' },
    { city: 'Vancouver', stadium: 'BC Place', capacity: 54000, flag: '🇨🇦', desc: 'Scenic views and festival atmosphere.' },
  ],
}

const tabs = ['USA', 'Mexico', 'Canada']

export default function Hosts() {
  const [tab, setTab] = useState('USA')

  return (
    <section id="hosts" className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Interactive Host Nations & Cities</h2>
            <p className="mt-2 text-slate-300">Explore the stages where history will be written.</p>
          </div>
          <div className="flex bg-white/5 border border-white/10 rounded-full p-1">
            {tabs.map(t => (
              <button key={t} onClick={() => setTab(t)} className={`px-3 sm:px-4 py-2 rounded-full text-sm font-medium transition ${tab===t? 'bg-gradient-to-r from-emerald-500/60 via-sky-500/60 to-rose-500/60 text-white':'text-slate-300 hover:text-white'}`}>
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cities[tab].map((c) => (
            <motion.div key={c.city} whileHover={{ y: -6, rotateX: 2 }} className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
              <div className="h-32 bg-gradient-to-tr from-emerald-600/30 via-sky-600/30 to-rose-600/30"></div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-semibold text-lg">{c.city} <span className="ml-1">{c.flag}</span></h3>
                  <span className="inline-flex items-center gap-1 text-emerald-300 text-xs"><MapPin className="w-4 h-4"/>Map</span>
                </div>
                <p className="text-slate-300 text-sm mt-2">{c.stadium} • Capacity {c.capacity.toLocaleString()}</p>
                <p className="text-slate-200/90 mt-3 text-sm leading-relaxed">{c.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
