import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductPicker, { productsFromParam } from './ProductPicker.jsx'
import { makeEnquiryRef, sendEnquiry } from '../lib/sendEnquiry.js'
import { contactError } from '../lib/contact.js'
import { company } from '../data/company.js'

const empty = {
  name: '',
  contact: '',
  address: '',
  honey: '',
}

export default function EnquiryForm() {
  const [params] = useSearchParams()
  const preset = params.get('product') ?? ''
  const [form, setForm] = useState(empty)
  const [selected, setSelected] = useState(() => productsFromParam(preset))
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')
  const [contactHint, setContactHint] = useState('')

  useEffect(() => {
    const fromUrl = productsFromParam(preset)
    if (fromUrl.length) setSelected(fromUrl)
  }, [preset])

  function update(field) {
    return (event) => {
      setError('')
      if (field === 'contact') setContactHint('')
      setForm((prev) => ({ ...prev, [field]: event.target.value }))
    }
  }

  function checkContact() {
    const message = contactError(form.contact)
    setContactHint(message)
    return !message
  }

  async function onSubmit(event) {
    event.preventDefault()
    if (!checkContact()) return
    if (!selected.length) {
      setError('Add at least one product by name or ID.')
      return
    }

    setSending(true)
    setError('')
    try {
      await sendEnquiry({
        name: form.name.trim(),
        contact: form.contact.trim(),
        address: form.address,
        products: selected,
        honey: form.honey,
        ref: makeEnquiryRef(),
      })
      setSent(true)
      setForm(empty)
      setSelected([])
      setContactHint('')
    } catch (err) {
      if (err.message === 'missing-key') {
        setError('Enquiry delivery is not set up yet. Add a Web3Forms access key (see src/data/enquiry.js).')
      } else {
        setError(`Could not send just now. Email us at ${company.email} or try again.`)
      }
    } finally {
      setSending(false)
    }
  }

  if (sent) {
    return (
      <div className="success" role="status">
        Thank you. Your enquiry has been sent. We will reply with options and a quote.
      </div>
    )
  }

  return (
    <form className="form compact-form" onSubmit={onSubmit} noValidate>
      <label className="sr-only" aria-hidden="true">
        Leave blank
        <input
          tabIndex={-1}
          autoComplete="off"
          name="botcheck"
          value={form.honey}
          onChange={update('honey')}
        />
      </label>
      <div className="form-row">
        <label>
          Name
          <input required name="name" value={form.name} onChange={update('name')} />
        </label>
        <label>
          Phone / email
          <input
            required
            type="text"
            name="contact"
            value={form.contact}
            onChange={update('contact')}
            onBlur={checkContact}
            placeholder="10-digit mobile or email"
            autoComplete="off"
            inputMode="email"
            aria-invalid={contactHint ? 'true' : 'false'}
            className={contactHint ? 'is-invalid' : ''}
          />
          {contactHint ? (
            <span className="field-error" role="alert">
              {contactHint}
            </span>
          ) : null}
        </label>
      </div>
      <label>
        Address
        <input name="address" value={form.address} onChange={update('address')} />
      </label>
      <label>
        Products
        <ProductPicker selected={selected} onChange={setSelected} />
      </label>
      {error ? (
        <p className="form-error" role="alert">
          {error}
        </p>
      ) : null}
      <button className="btn btn-gold" type="submit" disabled={sending}>
        {sending ? 'Sending…' : 'Send'}
      </button>
    </form>
  )
}
