import React from 'react'
import { motion } from 'framer-motion'
import { Flag, Building2, Users, CalendarDays, Stadium, Globe2 } from 'lucide-react'

const stats = [
  { label: 'Host Countries', value: 3, icon: Globe2 },
  { label: 'Host Cities', value: 16, icon: Building2 },
  { label: 'Stadiums', value: 16, icon: Stadium },
  { label: 'Total Matches', value: 104, icon: CalendarDays },
  { label: 'Teams', value: 48, icon: Users },
  { label: 'Dates', value: 'Jun 11 – Jul 19, 2026', icon: Flag },
]

const stages = ['Group Stage','Round of 32','Round of 16','Quarter-finals','Semi-finals','Final at MetLife Stadium']

export default function Glance() {
  return (
    <motion.section
      id="glance"
      className="relative py-20 bg-gradient-to-b from-slate-950 to-slate-900"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(1000px_400px_at_10%_0%,rgba(16,185,129,0.08),transparent),radial-gradient(800px_400px_at_100%_20%,rgba(56,189,248,0.07),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Tournament at a Glance</h2>
        <p className="mt-2 text-slate-300">Big numbers, bigger stage.</p>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {stats.map(({ label, value, icon: Icon }) => (
            <motion.div key={label} whileHover={{ y: -4 }} className="bg-white/5 border border-white/10 rounded-2xl p-4">
              <div className="flex items-center gap-2 text-slate-300 text-sm">
                <Icon className="w-4 h-4" />
                {label}
              </div>
              <div className="mt-2 text-2xl font-extrabold text-white">{value}</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12">
          <div className="flex items-center gap-2 text-slate-300 text-sm mb-3">Tournament Flow</div>
          <div className="relative overflow-x-auto">
            <div className="min-w-max flex items-center gap-2">
              {stages.map((s, i) => (
                <div key={s} className="group flex items-center">
                  <div className="px-4 py-3 rounded-full bg-white/5 border border-white/10 text-slate-200 group-hover:bg-white/10 transition">
                    {s}
                  </div>
                  {i < stages.length - 1 && (
                    <div className="w-8 h-[2px] bg-gradient-to-r from-emerald-500/50 via-sky-500/50 to-rose-500/50 mx-2 group-hover:from-emerald-400/80 group-hover:to-rose-400/80 transition" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
