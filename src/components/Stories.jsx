import React from 'react'
import { motion } from 'framer-motion'

const stories = [
  { category: "Defending Champions", title: "Can the kings repeat?", img: "/images/defending.jpg", teaser: "A dynasty in the making or a new crown?" },
  { category: "Host Nations", title: "North America on home soil", img: "/images/hosts.jpg", teaser: "Three nations, one celebration." },
  { category: "Newcomers", title: "Debut dreams", img: "/images/newcomers.jpg", teaser: "Fresh faces aiming to shock the world." },
  { category: "Dark Horses", title: "Upset architects", img: "/images/darkhorses.jpg", teaser: "Who will crash the party?" },
  { category: "Legends’ Last Dance", title: "One final act", img: "/images/legends.jpg", teaser: "Golden boots chasing time." },
]

export default function Stories() {
  return (
    <motion.section
      id="stories"
      className="py-20 bg-gradient-to-b from-slate-950 to-slate-900"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Team & Player Storylines</h2>
        <p className="mt-2 text-slate-300">Stories to watch as the world converges.</p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stories.map((s, idx) => (
            <motion.a key={idx} href="#" whileHover={{ y: -6 }} className="group overflow-hidden rounded-2xl bg-white/5 border border-white/10">
              <div className="h-40 bg-gradient-to-tr from-rose-600/30 via-sky-600/30 to-emerald-600/30"></div>
              <div className="p-5">
                <div className="text-emerald-300 text-xs uppercase tracking-widest">{s.category}</div>
                <div className="text-white font-bold text-lg mt-1">{s.title}</div>
                <p className="text-slate-300 text-sm mt-2">{s.teaser}</p>
                <span className="inline-block mt-3 text-sky-300 group-hover:text-sky-200">Read more →</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
