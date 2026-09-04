import { formatPrice } from '../data/catalog.js'
import { company } from '../data/company.js'
import { WEB3FORMS_ACCESS_KEY } from '../data/enquiry.js'
import { isEmail } from './contact.js'

function productLine(product, index) {
  const price = product.price != null ? `  |  from ${formatPrice(product.price)}` : ''
  return `${index + 1}. ${product.name}  |  ${product.id}${price}`
}

export function productListText(products) {
  return products.map(productLine).join('\n')
}

export function makeEnquiryRef() {
  const stamp = new Date().toISOString().replace(/[-:TZ.]/g, '').slice(0, 14)
  const rand = Math.random().toString(36).slice(2, 6).toUpperCase()
  return `${stamp}-${rand}`
}

export function formatEnquiryMessage({ name, contact, address, products, ref }) {
  const when = new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'medium',
    timeStyle: 'short',
  })

  return [
    `Brandit website enquiry  ${ref}`,
    '',
    `Name: ${name}`,
    `Contact: ${contact}`,
    `Address: ${address.trim() || 'Not given'}`,
    '',
    'Products they want:',
    ...products.map(productLine),
    '',
    `Submitted: ${when} IST`,
    '',
    'Next step: contact this client to confirm quantity, branding, and delivery date.',
  ].join('\n')
}

export async function sendEnquiry({ name, contact, address, products, honey, ref }) {
  if (honey) return

  const accessKey = String(WEB3FORMS_ACCESS_KEY || '').trim()
  if (!accessKey) {
    throw new Error('missing-key')
  }

  const payload = {
    access_key: accessKey,
    subject: `Enquiry ${ref} — ${name} — ${contact}`,
    from_name: `${name} (${ref})`,
    botcheck: false,
    name,
    address: address.trim() || 'Not given',
    products: productListText(products),
    enquiry_id: ref,
    message: formatEnquiryMessage({ name, contact, address, products, ref }),
  }

  if (isEmail(contact)) {
    payload.email = contact
    payload.replyto = contact
  } else {
    payload.phone = contact
  }

  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(payload),
  })

  const data = await response.json().catch(() => ({}))
  if (!response.ok || data.success === false) {
    throw new Error(data.message || 'send-failed')
  }
}

export { company }
