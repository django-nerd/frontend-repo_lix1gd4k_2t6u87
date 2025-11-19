import React from 'react'
import { Mail, Twitter, Instagram, Youtube } from 'lucide-react'

export default function Newsletter() {
  return (
    <section id="community" className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Stay Ahead of 2026</h2>
            <p className="mt-2 text-slate-300">Fixture updates, city guides and fan-only surprises. No spam.</p>

            <form className="mt-6 flex flex-col sm:flex-row gap-3">
              <input type="email" required placeholder="Enter your email" className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-400 outline-none"/>
              <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 via-sky-500 to-rose-500 text-white font-semibold">Join</button>
            </form>

            <ul className="mt-4 text-slate-300 text-sm list-disc list-inside">
              <li>Fixture updates</li>
              <li>City guides</li>
              <li>Fan-only surprises</li>
            </ul>

            <div className="mt-6 flex items-center gap-4 text-slate-300">
              <a href="#" aria-label="Twitter" className="hover:text-white"><Twitter className="w-5 h-5"/></a>
              <a href="#" aria-label="Instagram" className="hover:text-white"><Instagram className="w-5 h-5"/></a>
              <a href="#" aria-label="YouTube" className="hover:text-white"><Youtube className="w-5 h-5"/></a>
              <a href="#" aria-label="Email" className="hover:text-white"><Mail className="w-5 h-5"/></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
