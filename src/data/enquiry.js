/**
 * Enquiry delivery.
 *
 * Preferred: Web3Forms (https://web3forms.com)
 * 1. Create an Access Key for signinwithbrandit@gmail.com
 * 2. Put it in `.env` as VITE_WEB3FORMS_ACCESS_KEY=...
 *    or paste it as the fallback string below.
 *
 * Access keys are safe to expose in frontend code (they only alias your inbox).
 *
 * If no key is set, enquiries fall back to FormSubmit for company.email.
 * FormSubmit may ask you to activate the inbox once via a confirmation email.
 */
export const WEB3FORMS_ACCESS_KEY =
  String(import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '').trim() ||
  ''
