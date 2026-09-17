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
  attachmentNote = '',
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
  if (attachmentNote) {
    lines.push('', attachmentNote)
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

function buildFields({
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
  attachmentNote = '',
}) {
  const message = formatEnquiryMessage({
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
    attachmentNote,
  })

  const fields = {
    subject: `${custom ? 'Custom enquiry' : 'Enquiry'} ${ref} — ${name} — ${contact}`,
    from_name: `${name} (${ref})`,
    name,
    address: address.trim() || 'Not given',
    products: products.length ? productListText(products) : 'Custom product',
    enquiry_id: ref,
    custom: custom ? 'yes' : 'no',
    category: category || 'Not specified',
    notes: notes.trim() || 'None',
    comments: comments.trim() || 'None',
    message,
  }

  if (isEmail(contact)) {
    fields.email = contact
    fields.replyto = contact
  } else {
    fields.phone = contact
  }

  return fields
}

async function readJson(response) {
  try {
    return await response.json()
  } catch {
    return {}
  }
}

async function postWeb3FormsJson(accessKey, fields) {
  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      access_key: accessKey,
      ...fields,
    }),
  })
  const data = await readJson(response)
  if (!response.ok || data.success === false) {
    throw new Error(data.message || 'send-failed')
  }
}

async function postWeb3FormsWithFile(accessKey, fields, file) {
  const formData = new FormData()
  formData.append('access_key', accessKey)
  Object.entries(fields).forEach(([key, value]) => {
    formData.append(key, value)
  })
  formData.append('attachment', file, file.name)

  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    body: formData,
  })
  const data = await readJson(response)
  if (!response.ok || data.success === false) {
    throw new Error(data.message || 'send-failed')
  }
}

async function sendViaFormSubmit(fields) {
  const to = String(company.email || '').trim()
  if (!to) throw new Error('missing-inbox')

  const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(to)}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      name: fields.name,
      email: fields.email || company.email,
      phone: fields.phone || '',
      address: fields.address,
      products: fields.products,
      enquiry_id: fields.enquiry_id,
      custom: fields.custom,
      category: fields.category,
      notes: fields.notes,
      comments: fields.comments,
      message: fields.message,
      _subject: fields.subject,
      _template: 'table',
      _captcha: 'false',
    }),
  })

  const data = await readJson(response)
  // FormSubmit returns { success: "true" } as a string on success
  const ok = response.ok && (data.success === true || data.success === 'true')
  if (!ok) {
    throw new Error(data.message || 'send-failed')
  }
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

  const safeFiles = (files || []).filter(Boolean)
  const fileNames = safeFiles.map((file) => file.name).filter(Boolean)
  const accessKey = String(WEB3FORMS_ACCESS_KEY || '').trim()

  const baseFields = buildFields({
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
  })

  async function deliver(fields, withFile = null) {
    if (accessKey) {
      if (withFile) {
        try {
          await postWeb3FormsWithFile(accessKey, fields, withFile)
          return
        } catch (err) {
          // File uploads require Web3Forms PRO — fall back to text-only delivery.
          const noteFields = buildFields({
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
            attachmentNote:
              'Note: customer selected image file(s), but file delivery needs a paid email plan. Please follow up to collect the image.',
          })
          try {
            await postWeb3FormsJson(accessKey, noteFields)
            return
          } catch {
            await sendViaFormSubmit(noteFields)
            return
          }
        }
      }

      try {
        await postWeb3FormsJson(accessKey, fields)
        return
      } catch (err) {
        try {
          await sendViaFormSubmit(fields)
          return
        } catch {
          throw err
        }
      }
    }

    await sendViaFormSubmit(fields)
  }

  try {
    await deliver(baseFields, safeFiles[0] || null)
  } catch (err) {
    if (err.message === 'missing-inbox') throw err
    if (err.message === 'Failed to fetch' || err.name === 'TypeError') {
      throw new Error('network')
    }
    throw err
  }
}

export { company }
