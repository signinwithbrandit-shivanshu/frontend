import { formatPrice } from '../data/catalog.js'
import { company } from '../data/company.js'
import { WEB3FORMS_ACCESS_KEY } from '../data/enquiry.js'
import { isEmail } from './contact.js'

function productLine(product, index) {
  const price = product.price != null && product.price !== '' ? `  |  from ${formatPrice(product.price)}` : ''
  const id = product.id ? `  |  ${product.id}` : ''
  return `${index + 1}. ${product.name}${id}${price}`
}

export function productListText(products) {
  return products.map(productLine).join('\n')
}

export function makeEnquiryRef() {
  const stamp = new Date().toISOString().replace(/[-:TZ.]/g, '').slice(0, 14)
  const rand = Math.random().toString(36).slice(2, 6).toUpperCase()
  return `${stamp}-${rand}`
}

export function formatEnquiryMessage({
  name,
  contact,
  address,
  products,
  ref,
  notes = '',
  comments = '',
  category = '',
  custom = false,
  fileNames = [],
}) {
  const when = new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'medium',
    timeStyle: 'short',
  })

  const lines = [
    `Brandit website enquiry  ${ref}`,
    '',
    `Name: ${name}`,
    `Contact: ${contact}`,
    `Address: ${address.trim() || 'Not given'}`,
  ]

  if (custom) {
    lines.push('', 'Type: Custom product enquiry')
  }
  if (category) {
    lines.push(`Category: ${category}`)
  }
  if (notes.trim()) {
    lines.push('', 'Custom product notes:', notes.trim())
  }
  if (comments.trim()) {
    lines.push('', 'Comments:', comments.trim())
  }
  if (fileNames.length) {
    lines.push('', 'Attached images:', ...fileNames.map((fileName, index) => `${index + 1}. ${fileName}`))
  }

  lines.push('', 'Products they want:')
  if (products.length) {
    lines.push(...products.map(productLine))
  } else {
    lines.push('Custom product (see notes and attachments)')
  }

  lines.push(
    '',
    `Submitted: ${when} IST`,
    '',
    'Next step: contact this client to confirm quantity, branding, and delivery date.',
  )

  return lines.join('\n')
}

export async function sendEnquiry({
  name,
  contact,
  address,
  products,
  honey,
  ref,
  notes = '',
  comments = '',
  category = '',
  custom = false,
  files = [],
}) {
  if (honey) return

  const accessKey = String(WEB3FORMS_ACCESS_KEY || '').trim()
  if (!accessKey) {
    throw new Error('missing-key')
  }

  const fileNames = (files || []).map((file) => file.name).filter(Boolean)
  const payload = {
    access_key: accessKey,
    subject: `${custom ? 'Custom enquiry' : 'Enquiry'} ${ref} — ${name} — ${contact}`,
    from_name: `${name} (${ref})`,
    botcheck: 'false',
    name,
    address: address.trim() || 'Not given',
    products: products.length ? productListText(products) : 'Custom product',
    enquiry_id: ref,
    custom: custom ? 'yes' : 'no',
    category: category || 'Not specified',
    notes: notes.trim() || 'None',
    comments: comments.trim() || 'None',
    message: formatEnquiryMessage({
      name,
      contact,
      address,
      products,
      ref,
      notes,
      comments,
      category,
      custom,
      fileNames,
    }),
  }

  if (isEmail(contact)) {
    payload.email = contact
    payload.replyto = contact
  } else {
    payload.phone = contact
  }

  const formData = new FormData()
  Object.entries(payload).forEach(([key, value]) => {
    formData.append(key, value)
  })

  files.forEach((file, index) => {
    if (file) formData.append(`attachment_${index + 1}`, file, file.name)
  })

  let response
  try {
    response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    })
  } catch {
    throw new Error('network')
  }

  const data = await response.json().catch(() => ({}))
  if (!response.ok || data.success === false) {
    throw new Error(data.message || 'send-failed')
  }
}

export { company }
