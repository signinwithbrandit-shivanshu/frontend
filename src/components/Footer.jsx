import { company } from '../data/company.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <p className="footer-mark">{company.name}</p>
        </div>
        <div className="footer-people">
          {company.people.map((person) => (
            <a key={person.tel} href={`tel:${person.tel}`}>
              <strong>{person.name}</strong>
              <span className="num">{person.phone}</span>
            </a>
          ))}
        </div>
        <div className="footer-meta">
          <a href={`mailto:${company.email}`}>{company.email}</a>
          <a href={company.website} target="_blank" rel="noreferrer">
            {company.websiteLabel}
          </a>
          <a href={company.instagram} target="_blank" rel="noreferrer">
            {company.instagramLabel}
          </a>
          <p>{company.address}</p>
        </div>
      </div>
    </footer>
  )
}
