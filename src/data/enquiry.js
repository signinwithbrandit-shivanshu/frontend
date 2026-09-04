/**
 * Enquiry delivery (Web3Forms, free).
 *
 * Setup (once)
 * 1. Open https://web3forms.com
 * 2. Create an Access Key for signinwithbrandit@gmail.com
 * 3. Paste the key below (or set VITE_WEB3FORMS_ACCESS_KEY in `.env`)
 *
 * Phone-only enquiries are allowed. Each send uses a unique subject so Gmail
 * does not stack them as one conversation.
 */
export const WEB3FORMS_ACCESS_KEY =
  import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || ''
