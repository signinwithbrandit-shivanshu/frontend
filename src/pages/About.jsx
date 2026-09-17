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

const offerLines = [
  {
    to: '/collection/bags',
    title: 'Customizable Bags',
    lead: 'Give your brand a presence that travels.',
    intro: 'We offer a wide range of customizable bags, including:',
    items: bagRange,
  },
  {
    to: '/collection/stationery',
    title: 'Customizable Stationery',
    lead: 'Make your brand part of your customers’ and employees’ everyday routines.',
    intro: 'Our stationery range includes:',
    items: ['Customized Pens', 'Diaries', 'File Covers', 'Notepads', 'And more'],
  },
  {
    to: '/collection/desktop-accessories',
    title: 'Desktop & Office Essentials',
    lead: 'Products that keep your brand visible right where work happens.',
    intro: 'Our range includes:',
    items: [
      'Mugs',
      'Card Holders',
      'Mobile Stands',
      'Pen Stands',
      'Laptop Stands',
      'Table Calendars',
      'Table Lamps',
      'And more',
    ],
  },
  {
    to: '/collection/other',
    title: 'Promotional & Lifestyle Products',
    lead: 'Small products can create lasting brand impressions.',
    intro: 'We also offer customizable:',
    items: ['Umbrellas', 'Keychains', 'Wallets', 'And a variety of other promotional products'],
  },
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
            src="/OTH/BRD-OTH-012.jpg"
            alt="Brandit corporate gift set with notebook, bottle and branded essentials"
            onError={(event) => {
              event.currentTarget.src = '/bags/BRD-BAG-001.jfif'
            }}
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

          <div className="about-lines">
            {offerLines.map((line) => (
              <article className="about-line" key={line.title}>
                <h3>
                  <Link to={line.to}>{line.title}</Link>
                </h3>
                <p className="about-line-lead">{line.lead}</p>
                <p>{line.intro}</p>
                <ul className="about-range">
                  {line.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
