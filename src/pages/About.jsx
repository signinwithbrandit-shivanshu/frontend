import { Link } from 'react-router-dom'

const offerLines = [
  {
    to: '/collection/bags',
    title: 'Bags',
    lead: 'Felt, jute, laptop, sling, travel and duffle bags — all with your logo.',
  },
  {
    to: '/collection/stationery',
    title: 'Stationery',
    lead: 'Pens, diaries, file covers and notepads for everyday brand visibility.',
  },
  {
    to: '/collection/desktop-accessories',
    title: 'Desktop & Office',
    lead: 'Mugs, stands, calendars and desk essentials that stay in sight at work.',
  },
  {
    to: '/collection/clothing',
    title: 'Clothing',
    lead: 'Shirts, tees, jackets and caps ready for your brand.',
  },
  {
    to: '/collection/other',
    title: 'Promotional gifts',
    lead: 'Gift sets, bottles, tumblers and more for lasting impressions.',
  },
]

export default function About() {
  return (
    <section className="section about-page" style={{ paddingTop: 28 }}>
      <div className="wrap">
        <div className="page-hero">
          <h1>About Brandit</h1>
          <p className="about-kicker">We make your brand impossible to miss.</p>
        </div>

        <div className="about-copy about-copy-solo">
          <p>
            <strong>Brandit</strong> helps businesses grow visibility through{' '}
            <strong>corporate gifting and promotional products</strong> — from welcome kits to
            client gifts, with PAN-India delivery.
          </p>
        </div>

        <div className="about-offer">
          <div className="section-head">
            <div className="gold-rule" />
            <h2>What we offer</h2>
            <p>Custom products across these ranges. Tap a category to browse.</p>
          </div>

          <div className="about-lines">
            {offerLines.map((line) => (
              <article className="about-line about-line-compact" key={line.title}>
                <h3>
                  <Link to={line.to}>{line.title}</Link>
                </h3>
                <p className="about-line-lead">{line.lead}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
