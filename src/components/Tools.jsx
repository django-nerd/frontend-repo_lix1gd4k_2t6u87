import React from 'react'
import { Cpu, Trophy, Plane } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Tools() {
  return (
    <motion.section
      id="tools"
      className="py-20 bg-gradient-to-b from-slate-950 to-slate-900"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Futuristic Fan Tools</h2>
        <p className="mt-2 text-slate-300">Feature previews for what’s coming.</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div whileHover={{ y: -4 }} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-2 text-emerald-300"><Cpu className="w-5 h-5"/>AI Match Companion</div>
            <div className="mt-2 text-white font-semibold">Ask about teams, cities and matches</div>
            <div className="mt-4 bg-slate-900/60 border border-white/10 rounded-xl p-4">
              <div className="text-slate-300 text-sm">You: Best food near MetLife on matchday?</div>
              <div className="mt-2 inline-block bg-emerald-600/30 border border-emerald-400/20 text-emerald-100 text-sm px-3 py-2 rounded-lg">AI: Try the fan plaza in Hudson Yards — quick bites and big screens.</div>
            </div>
          </motion.div>

          <motion.div whileHover={{ y: -4 }} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-2 text-sky-300"><Trophy className="w-5 h-5"/>Smart Bracket</div>
            <div className="mt-2 text-white font-semibold">Auto-fill based on form & rankings</div>
            <div className="mt-4 grid grid-cols-4 gap-2 text-center text-xs text-slate-300">
              {Array.from({length:8}).map((_,i)=>(<div key={i} className="px-2 py-3 rounded bg-white/5">Match {i+1}</div>))}
            </div>
          </motion.div>

          <motion.div whileHover={{ y: -4 }} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-2 text-rose-300"><Plane className="w-5 h-5"/>Travel Sync</div>
            <div className="mt-2 text-white font-semibold">Sync flights and hotels (soon)</div>
            <ul className="mt-3 text-slate-300 text-sm list-disc list-inside">
              <li>Calendar integration</li>
              <li>Smart transfer times</li>
              <li>Budget-friendly suggestions</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
