import React from 'react'

export default function App() {
  const stats = [
    { label: 'Teams', value: 48 },
    { label: 'Matches', value: 104 },
    { label: 'Host Countries', value: 3 },
    { label: 'Host Cities', value: 16 },
    { label: 'Venues', value: 16 },
    { label: 'Start Date', value: 'Jun 11, 2026' },
  ]

  const cities = [
    { city: 'New York / New Jersey', stadium: 'MetLife Stadium', capacity: 82500 },
    { city: 'Los Angeles', stadium: 'SoFi Stadium', capacity: 70000 },
    { city: 'Dallas', stadium: 'AT&T Stadium', capacity: 80000 },
    { city: 'Miami', stadium: 'Hard Rock Stadium', capacity: 65300 },
    { city: 'Atlanta', stadium: 'Mercedes-Benz Stadium', capacity: 71000 },
    { city: 'Seattle', stadium: 'Lumen Field', capacity: 68000 },
    { city: 'Toronto', stadium: 'BMO Field (expanded)', capacity: 45000 },
    { city: 'Vancouver', stadium: 'BC Place', capacity: 54000 },
    { city: 'Mexico City', stadium: 'Estadio Azteca', capacity: 87000 },
    { city: 'Guadalajara', stadium: 'Estadio Akron', capacity: 48000 },
    { city: 'Monterrey', stadium: 'Estadio BBVA', capacity: 53000 },
    { city: 'Boston', stadium: 'Gillette Stadium', capacity: 65000 },
  ]

  const schedule = [
    { date: 'Thu, Jun 11', time: '19:00', city: 'Mexico City', match: 'Mexico vs. TBD', stadium: 'Estadio Azteca' },
    { date: 'Fri, Jun 12', time: '18:00', city: 'Los Angeles', match: 'USA vs. TBD', stadium: 'SoFi Stadium' },
    { date: 'Sat, Jun 13', time: '16:00', city: 'Toronto', match: 'Canada vs. TBD', stadium: 'BMO Field' },
    { date: 'Sun, Jun 14', time: '20:00', city: 'New York / New Jersey', match: 'Group A Match', stadium: 'MetLife Stadium' },
    { date: 'Mon, Jun 15', time: '17:00', city: 'Dallas', match: 'Group B Match', stadium: 'AT&T Stadium' },
    { date: 'Tue, Jun 16', time: '15:00', city: 'Vancouver', match: 'Group C Match', stadium: 'BC Place' },
  ]

  return (
    <div className="AppRoot">
      <header className="Hero">
        <div className="Container">
          <p className="Kicker">FIFA World Cup · USA · Mexico · Canada · 2026</p>
          <h1 className="Title">We Are 26</h1>
          <p className="Subtitle">A simple, stable guide to the 2026 World Cup. No frills — just the essentials.</p>
          <div className="CTARow">
            <a className="CTA Primary" href="#glance">Tournament at a glance</a>
            <a className="CTA" href="#cities">Host cities</a>
            <a className="CTA" href="#schedule">Schedule</a>
          </div>
        </div>
      </header>

      <section id="glance" className="Section SectionMuted">
        <div className="Container">
          <h2 className="SectionTitle">Tournament at a glance</h2>
          <div className="StatsGrid">
            {stats.map((s) => (
              <div key={s.label} className="StatCard">
                <div className="StatValue">{s.value}</div>
                <div className="StatLabel">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cities" className="Section">
        <div className="Container">
          <h2 className="SectionTitle">Host cities</h2>
          <div className="CityGrid">
            {cities.map((c) => (
              <div key={c.city} className="CityCard">
                <div className="CityName">{c.city}</div>
                <div className="CityMeta">
                  <span>{c.stadium}</span>
                  <span>·</span>
                  <span>Capacity {c.capacity.toLocaleString()}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="schedule" className="Section SectionMuted">
        <div className="Container">
          <h2 className="SectionTitle">Sample schedule</h2>
          <ul className="ScheduleList">
            {schedule.map((m, i) => (
              <li key={i} className="MatchItem">
                <div className="MatchWhen">
                  <div className="MatchDate">{m.date}</div>
                  <div className="MatchTime">{m.time}</div>
                </div>
                <div className="MatchDetail">
                  <div className="MatchTeams">{m.match}</div>
                  <div className="MatchMeta">{m.city} · {m.stadium}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <footer className="Footer">
        <div className="Container">
          <p>2026 World Cup — Simple landing page</p>
        </div>
      </footer>

      <style>{`
        :root{
          --bg:#0b1220;
          --surface:#121a2a;
          --muted:#0f1626;
          --text:#e6eefc;
          --sub:#b6c2d6;
          --brand:#22c55e;
          --border:rgba(255,255,255,0.08);
        }
        *{box-sizing:border-box}
        html,body,#root{height:100%}
        body{margin:0;background:var(--bg);color:var(--text);font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji","Segoe UI Emoji";}
        a{color:inherit;text-decoration:none}
        .Container{max-width:1100px;margin:0 auto;padding:0 16px}

        .Hero{padding:64px 0 72px;background:linear-gradient(180deg, rgba(34,197,94,0.10), rgba(56,189,248,0.08) 35%, transparent 100%);border-bottom:1px solid var(--border)}
        .Kicker{color:var(--sub);letter-spacing:.08em;text-transform:uppercase;font-size:12px}
        .Title{margin:8px 0 8px;font-size:48px;line-height:1.05;font-weight:800}
        .Subtitle{color:var(--sub);font-size:18px;max-width:720px}
        .CTARow{margin-top:20px;display:flex;flex-wrap:wrap;gap:12px}
        .CTA{display:inline-block;padding:10px 14px;border:1px solid var(--border);border-radius:999px;background:rgba(255,255,255,0.04)}
        .CTA:hover{background:rgba(255,255,255,0.06)}
        .CTA.Primary{border-color:transparent;background:linear-gradient(90deg,#22c55e,#38bdf8);color:#0b1220;font-weight:600}

        .Section{padding:48px 0}
        .SectionMuted{background:var(--muted)}
        .SectionTitle{margin:0 0 20px;font-size:24px}

        .StatsGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
        @media(min-width:640px){.StatsGrid{grid-template-columns:repeat(3,1fr)}}
        @media(min-width:960px){.StatsGrid{grid-template-columns:repeat(6,1fr)}}
        .StatCard{background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:16px;text-align:center}
        .StatValue{font-size:28px;font-weight:800}
        .StatLabel{color:var(--sub);font-size:12px;margin-top:4px;letter-spacing:.06em;text-transform:uppercase}

        .CityGrid{display:grid;grid-template-columns:1fr;gap:12px}
        @media(min-width:720px){.CityGrid{grid-template-columns:repeat(2,1fr)}}
        @media(min-width:1040px){.CityGrid{grid-template-columns:repeat(3,1fr)}}
        .CityCard{background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:14px}
        .CityName{font-weight:700;margin-bottom:6px}
        .CityMeta{color:var(--sub);font-size:14px;display:flex;gap:8px;flex-wrap:wrap}

        .ScheduleList{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:10px}
        .MatchItem{display:flex;gap:16px;align-items:center;background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:12px}
        .MatchWhen{min-width:120px}
        .MatchDate{font-weight:700}
        .MatchTime{color:var(--sub);font-size:14px}
        .MatchTeams{font-weight:600}
        .MatchMeta{color:var(--sub);font-size:14px}

        .Footer{padding:28px 0;border-top:1px solid var(--border);color:var(--sub);text-align:center}
      `}</style>
    </div>
  )
}
