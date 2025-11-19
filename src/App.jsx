import React from 'react'

// Minimal, fail-safe root component for smoke test.
// This guarantees that the root route ("/") always renders a visible line,
// regardless of any other component or client-only API issues.
export default function App() {
  return (
    <div>
      {/* The required always-visible line at the very top */}
      <div>Hello World Cup 2026</div>
    </div>
  )
}
