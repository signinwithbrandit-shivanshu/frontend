/** Shared contact checks for the enquiry form and the mail payload. */

const EMAIL =
  /^[a-zA-Z0-9](?:[a-zA-Z0-9._%+-]{0,62}[a-zA-Z0-9])?@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z]{2,})+$/

export function isEmail(value) {
  const email = value.trim()
  if (!email || email.length > 254 || email.includes('..')) return false
  return EMAIL.test(email)
}

export function isPhone(value) {
  const digits = value.replace(/\D/g, '')
  let mobile = digits
  if (mobile.startsWith('91') && mobile.length === 12) mobile = mobile.slice(2)
  else if (mobile.startsWith('0') && mobile.length === 11) mobile = mobile.slice(1)
  return /^[6-9]\d{9}$/.test(mobile)
}

export function contactError(value) {
  const raw = value.trim()
  if (!raw) return 'Enter a mobile number or an email.'

  if (raw.includes('@') || /[a-zA-Z]/.test(raw)) {
    if (isEmail(raw)) return ''
    return 'Enter a valid email, like name@company.com.'
  }

  if (isPhone(raw)) return ''
  return 'Enter a valid 10-digit Indian mobile number.'
}

export function isValidContact(value) {
  return contactError(value) === ''
}
