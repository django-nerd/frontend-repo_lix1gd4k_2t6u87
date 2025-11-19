import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Glance from './components/Glance'
import Hosts from './components/Hosts'
import MatchHub from './components/MatchHub'
import TripPlanner from './components/TripPlanner'
import Stories from './components/Stories'
import Vibes from './components/Vibes'
import Tools from './components/Tools'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <Glance />
        <Hosts />
        <MatchHub />
        <TripPlanner />
        <Stories />
        <Vibes />
        <Tools />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}

export default App
