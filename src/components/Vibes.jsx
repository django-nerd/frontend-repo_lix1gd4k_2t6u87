import React from 'react'

const panels = [
  { country: 'USA', intro: 'High-octane arenas, diverse mega-cities, and summer nights that buzz with sport and music.', items: ['NYC slice + skyline views','LA beaches + street art','Seattle coffee + supporters march','Miami nightlife + fan zones'] },
  { country: 'Mexico', intro: 'Color-soaked streets, legendary stadium lore and fiestas that flow from plazas to stands.', items: ['CDMX street tacos','Guadalajara mariachi squares','Monterrey mountain sunsets'] },
  { country: 'Canada', intro: 'Polished skylines meet wild horizons — friendly, festive and full of open-air summer energy.', items: ['Toronto waterfront patios','Vancouver seawall ride','Local craft scenes'] },
]

export default function Vibes() {
  return (
    <section id="vibes" className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">City Vibes & Fan Experience</h2>
        <p className="mt-2 text-slate-300">A lifestyle lens on the tournament.</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {panels.map((p) => (
            <div key={p.country} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-emerald-300 text-sm">{p.country}</div>
              <div className="text-white font-bold text-xl mt-1">What to expect</div>
              <p className="text-slate-200 mt-2 text-sm leading-relaxed">{p.intro}</p>
              <div className="mt-4 overflow-x-auto">
                <div className="flex gap-3 min-w-max">
                  {p.items.map((it, i)=>(
                    <div key={i} className="shrink-0 px-4 py-3 rounded-xl bg-gradient-to-tr from-emerald-600/30 via-sky-600/30 to-rose-600/30 text-white/90 border border-white/10">{it}</div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
