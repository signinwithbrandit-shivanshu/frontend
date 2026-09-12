import { CiInstagram, CiLocationArrow1, CiLocationOn, CiMail } from 'react-icons/ci'
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
          <span style={{display: "flex", alignItems: "center", gap: "4px", color: "var(--muted)" }}>
            <CiMail />
            <a href={`mailto:${company.email}`}>{company.email}</a>
          </span>
          <span style={{display: "flex", alignItems: "center", gap: "4px", color: "var(--muted)" }}>
            <span style={{fontSize: "12px"}}>GST: </span>
            <a href="#" target="_blank" rel="noreferrer">
              {company.gst}
            </a>
          </span>
          <span style={{display: "flex", alignItems: "center", gap: "4px", color: "var(--muted)" }}>
            <CiInstagram />
            <a href={company.instagram} rel="noreferrer">
              {company.instagramLabel}
            </a>
          </span>
          <span style={{display: "flex", alignItems: "center", gap: "4px", color: "var(--muted)" }}>
            <CiLocationOn />
            <p>{company.address}</p>
          </span>
        </div>
      </div>
    </footer>
  )
}
