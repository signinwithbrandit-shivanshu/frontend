import { Link } from 'react-router-dom'
import { getSiteStats } from '../data/catalog.js'

export default function Hero() {
  const stats = getSiteStats()

  return (
    <section className="hero">
      <div className="hero-pattern" aria-hidden="true" />
      <div className="hero-copy wrap">
        <h1>
          Make your <em>brand</em>
          <span>unmissable.</span>
        </h1>
        <p className="hero-lead">Corporate gifts with your logo. PAN-India delivery.</p>
        <div className="cta-row">
          <Link className="btn btn-gold" to="/collection">
            Collection
          </Link>
          <Link className="btn btn-ghost" to="/contact">
            Enquire
          </Link>
        </div>
      </div>

      <div className="hero-rail">
        <div className="wrap hero-rail-inner">
          {stats.map((stat) => (
            <div key={stat.label}>
              <b className={stat.numeric ? 'num' : undefined}>{stat.value}</b>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
