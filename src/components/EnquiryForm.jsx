import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductPicker, { productsFromParam } from './ProductPicker.jsx'
import { makeEnquiryRef, sendEnquiry } from '../lib/sendEnquiry.js'
import { contactError } from '../lib/contact.js'
import { company } from '../data/company.js'
import { getCategory } from '../data/catalog.js'
import {
  MAX_CUSTOM_IMAGES,
  previewUrlFor,
  revokePreviewUrl,
  validateCustomImages,
} from '../lib/customImage.js'

const empty = {
  name: '',
  contact: '',
  address: '',
  honey: '',
  notes: '',
  comments: '',
}

export default function EnquiryForm() {
  const [params] = useSearchParams()
  const preset = params.get('product') ?? ''
  const custom = params.get('custom') === '1'
  const categorySlug = params.get('category') ?? ''
  const category = getCategory(categorySlug)

  const [form, setForm] = useState(empty)
  const [selected, setSelected] = useState(() => productsFromParam(preset))
  const [files, setFiles] = useState([])
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')
  const [fileError, setFileError] = useState('')
  const [contactHint, setContactHint] = useState('')

  const previews = useMemo(
    () =>
      files.map((file) => ({
        name: file.name,
        url: previewUrlFor(file),
      })),
    [files],
  )

  useEffect(() => {
    return () => {
      previews.forEach((item) => revokePreviewUrl(item.url))
    }
  }, [previews])

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

  function onFiles(event) {
    const result = validateCustomImages(event.target.files, files.length)
    event.target.value = ''
    if (result.error && !result.files.length) {
      setFileError(result.error)
      return
    }
    setFileError(result.error)
    if (result.files.length) {
      setError('')
      setFiles((prev) => [...prev, ...result.files].slice(0, MAX_CUSTOM_IMAGES))
    }
  }

  function removeFile(index) {
    setFileError('')
    setFiles((prev) => prev.filter((_, i) => i !== index))
  }

  async function onSubmit(event) {
    event.preventDefault()
    if (!checkContact()) return

    const notes = form.notes.trim()
    const comments = form.comments.trim()
    const hasCustomDetail = Boolean(notes || files.length)
    if (custom && !hasCustomDetail && !selected.length) {
      setError('Describe your custom product or attach a photo, or pick a catalogue item.')
      return
    }
    if (!custom && !selected.length) {
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
        notes,
        comments,
        category: category?.name || categorySlug,
        custom: custom || hasCustomDetail,
        files,
      })
      setSent(true)
      setForm(empty)
      setSelected([])
      setFiles([])
      setContactHint('')
      setFileError('')
    } catch (err) {
      const detail = err?.message && !['missing-key', 'network', 'send-failed', 'missing-inbox'].includes(err.message)
        ? ` (${err.message})`
        : ''
      if (err.message === 'missing-key' || err.message === 'missing-inbox') {
        setError('Enquiry delivery is not configured yet. Please email us directly or try again later.')
      } else if (err.message === 'network') {
        setError(`Could not reach the enquiry service. Email us at ${company.email} or try again.`)
      } else {
        setError(`Could not send just now${detail}. Email us at ${company.email} or try again.`)
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
      {custom ? (
        <p className="enquiry-sku">
          Custom product enquiry{category ? ` — ${category.name}` : ''}
        </p>
      ) : null}
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
      {custom ? (
        <>
          <label>
            Custom product details
            <textarea
              name="notes"
              value={form.notes}
              onChange={update('notes')}
              placeholder="Tell us the product, quantity, branding, and any size or colour notes"
            />
          </label>
          <label>
            Your product image
            <input
              type="file"
              accept="image/jpeg,image/png,image/webp,image/gif"
              multiple
              onChange={onFiles}
            />
            <span className="picker-hint">Up to {MAX_CUSTOM_IMAGES} images, 1 MB each (JPG, PNG, WEBP or GIF).</span>
          </label>
          {previews.length ? (
            <ul className="file-previews">
              {previews.map((item, index) => (
                <li key={`${item.name}-${index}`}>
                  {item.url ? <img src={item.url} alt="" /> : <span>{item.name}</span>}
                  <button type="button" onClick={() => removeFile(index)} aria-label={`Remove ${item.name}`}>
                    ×
                  </button>
                </li>
              ))}
            </ul>
          ) : null}
          {fileError ? (
            <p className="field-error" role="alert">
              {fileError}
            </p>
          ) : null}
        </>
      ) : null}
      <label>
        {custom ? 'Catalogue products (optional)' : 'Products'}
        <ProductPicker selected={selected} onChange={setSelected} />
      </label>
      {!custom ? (
        <label>
          Comments
          <textarea
            name="comments"
            value={form.comments}
            onChange={update('comments')}
            placeholder="Quantity, branding, delivery date, or anything else we should know"
          />
        </label>
      ) : null}
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
