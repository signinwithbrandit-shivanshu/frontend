import EnquiryForm from '../components/EnquiryForm.jsx'

export default function Contact() {
  return (
    <section className="section" style={{ paddingTop: 28 }}>
      <div className="wrap enquiry-wrap">
        <div className="page-hero">
          <h1>Enquiry</h1>
        </div>
        <div className="enquiry-panel compact">
          <EnquiryForm />
        </div>
      </div>
    </section>
  )
}
