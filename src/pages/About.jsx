import { Link } from 'react-router-dom'

const bagRange = [
  'Felt Bags',
  'Jute Bags',
  'Laptop Bags',
  'Laptop Sleeves',
  'Sling Bags',
  'Travel Bags & Kits',
  'Duffle Bags',
  'And more',
]

export default function About() {
  return (
    <section className="section" style={{ paddingTop: 28 }}>
      <div className="wrap">
        <div className="page-hero">
          <h1>About Brandit</h1>
          <p className="about-kicker">We Make Your Brand Impossible to Miss.</p>
        </div>

        <div className="about-grid">
          <div className="about-copy">
            <p>
              At <strong>Brandit</strong>, we believe your brand should be seen, remembered, and
              experienced.
            </p>
            <p>
              We are a passionate team helping businesses increase their brand visibility through
              thoughtfully designed <strong>corporate gifting and promotional products</strong>.
              From everyday essentials to premium corporate gifts, we help you turn ordinary
              products into meaningful brand touchpoints.
            </p>
            <p>
              Whether you&apos;re welcoming a new employee, appreciating a client, promoting your
              business, or creating a stronger brand presence, we make it easier to put your brand
              in the hands of the people who matter.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1200&q=80"
            alt="Branded corporate gifts packed for delivery"
          />
        </div>

        <div className="about-offer">
          <div className="section-head">
            <div className="gold-rule" />
            <h2>What We Do</h2>
            <p>
              We specialize in <strong>customizable corporate gifts and promotional merchandise</strong>
              , giving businesses the flexibility to showcase their identity across a wide range of
              products.
            </p>
          </div>

          <article className="about-line">
            <h3>
              <Link to="/collection/bags">Customizable Bags</Link>
            </h3>
            <p className="about-line-lead">Give your brand a presence that travels.</p>
            <p>We offer a wide range of customizable bags, including:</p>
            <ul className="about-range">
              {bagRange.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}
