import { CATEGORY_IDS } from './categories.js'

/**
 * Product catalogue.
 *
 * Each object is one sellable line. Keep this file as the single source of truth.
 *
 * CRUD
 * - Create: copy any object below, give it a new unique `id` (use nextSku() from catalog.js
 *   in the console, or follow BRD-{CAT}-{NNN} e.g. BRD-BAG-010). Set categoryId from CATEGORY_IDS.
 * - Read: UI uses listProducts / getProduct / searchProducts in catalog.js.
 * - Update: change name, price, description, image, or active. Do not change `id` once used
 *   in enquiries or shared links.
 * - Delete: set `active: false` to hide it, or remove the object entirely.
 *
 * Fields
 * - id           Unique SKU, never reused
 * - categoryId   One of CATEGORY_IDS
 * - name         Display name
 * - price        Starting price in INR (number)
 * - description  Short line for cards and search
 * - image        Photo URL
 * - active       false hides the product from the site
 */
export const products = [
  {
    id: 'BRD-BAG-001',
    categoryId: CATEGORY_IDS.BAGS,
    name: 'Felt Bags',
    price: 420,
    maxPrice: 600,
    description: 'Felt tote and giveaway bags with a large print or embroidery panel.',
    image:
      '/bottles/bottle1.png',
    active: true,
  },
  {
    id: 'BRD-BAG-002',
    categoryId: CATEGORY_IDS.BAGS,
    name: 'Jute Bags',
    price: 349,
    description: 'Natural jute shoppers with foil or screen print on the front.',
    image:
      'https://images.unsplash.com/photo-1597484661643-2f5fef640dd1?auto=format&fit=crop&w=900&q=80',
    active: true,
  },
  {
    id: 'BRD-BAG-003',
    categoryId: CATEGORY_IDS.BAGS,
    name: 'Laptop Bags',
    price: 1290,
    description: 'Padded laptop bags and sleeves with a quiet branded zone.',
    image:
      'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=900&q=80',
    active: true,
  },
  {
    id: 'BRD-BAG-004',
    categoryId: CATEGORY_IDS.BAGS,
    name: 'Sling Bags',
    price: 690,
    description: 'Compact slings for conference kits and on-ground teams.',
    image:
      'https://images.unsplash.com/photo-1590874103328-eac38a941954?auto=format&fit=crop&w=900&q=80',
    active: true,
  },
  {
    id: 'BRD-BAG-005',
    categoryId: CATEGORY_IDS.BAGS,
    name: 'Backpack',
    price: 1490,
    description: 'Everyday branded backpacks with embroidered front pocket.',
    image:
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80',
    active: true,
  },
  {
    id: 'BRD-BAG-006',
    categoryId: CATEGORY_IDS.BAGS,
    name: 'Duffel Bags',
    price: 1290,
    description: 'Weekender duffels with padded handles and logo space.',
    image:
      'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=900&q=80',
    active: true,
  },
  {
    id: 'BRD-BAG-007',
    categoryId: CATEGORY_IDS.BAGS,
    name: 'Travel Bags',
    price: 1690,
    description: 'Travel bags sized for dealer meets and staff movement.',
    image:
      'https://images.unsplash.com/photo-1581605405669-fcdf81165afa?auto=format&fit=crop&w=900&q=80',
    active: true,
  },
  {
    id: 'BRD-BAG-008',
    categoryId: CATEGORY_IDS.BAGS,
    name: 'Travel Kits',
    price: 590,
    description: 'Toiletry and kit pouches for onboarding and travel hampers.',
    image:
      'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=900&q=80',
    active: true,
  },
  {
    id: 'BRD-BAG-009',
    categoryId: CATEGORY_IDS.BAGS,
    name: 'Bottle Bags',
    price: 249,
    description: 'Bottle carriers with a print panel for events and hydration kits.',
    image:
      'https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&w=900&q=80',
    active: true,
  },
  {
    id: 'BRD-DSK-001',
    categoryId: CATEGORY_IDS.DESKTOP,
    name: 'Mugs',
    price: 199,
    description: 'Ceramic and travel mugs with wrap print or inner colour.',
    image:
      'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=900&q=80',
    active: true,
  },
  {
    id: 'BRD-DSK-002',
    categoryId: CATEGORY_IDS.DESKTOP,
    name: 'Card Holder',
    price: 249,
    description: 'Metal and leather card holders with laser or foil mark.',
    image:
      'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=900&q=80',
    active: true,
  },
  {
    id: 'BRD-DSK-003',
    categoryId: CATEGORY_IDS.DESKTOP,
    name: 'Mobile Stand',
    price: 349,
    description: 'Desk phone stands in wood or aluminium, engraved to order.',
    image:
      'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=900&q=80',
    active: true,
  },
  {
    id: 'BRD-DSK-004',
    categoryId: CATEGORY_IDS.DESKTOP,
    name: 'Pen Stand',
    price: 390,
    description: 'Desk pen cups and organisers with wrap engraving.',
    image:
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=80',
    active: true,
  },
  {
    id: 'BRD-DSK-005',
    categoryId: CATEGORY_IDS.DESKTOP,
    name: 'Mouse Pad',
    price: 349,
    description: 'Stitched leather or fabric mouse pads with corner branding.',
    image:
      'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=900&q=80',
    active: true,
  },
  {
    id: 'BRD-DSK-006',
    categoryId: CATEGORY_IDS.DESKTOP,
    name: 'Laptop Stand',
    price: 1290,
    description: 'Raised laptop stands for offices, with a logo plate.',
    image:
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=900&q=80',
    active: true,
  },
  {
    id: 'BRD-DSK-007',
    categoryId: CATEGORY_IDS.DESKTOP,
    name: 'Table Calendar',
    price: 249,
    description: 'Spiral and tent table calendars with custom monthly art.',
    image:
      'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=900&q=80',
    active: true,
  },
  {
    id: 'BRD-DSK-008',
    categoryId: CATEGORY_IDS.DESKTOP,
    name: 'Table Lamp',
    price: 1490,
    description: 'Compact desk lamps with a discreet brand mark.',
    image:
      'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=900&q=80',
    active: true,
  },
  {
    id: 'BRD-STN-001',
    categoryId: CATEGORY_IDS.STATIONERY,
    name: 'Pens',
    price: 99,
    description: 'Metal, gel and eco pens with barrel engraving or clip print.',
    image:
      'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=900&q=80',
    active: true,
  },
  {
    id: 'BRD-STN-002',
    categoryId: CATEGORY_IDS.STATIONERY,
    name: 'Diary',
    price: 290,
    description: 'Hardcover and PU diaries with foil logo and ribbon marker.',
    image:
      'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=900&q=80',
    active: true,
  },
  {
    id: 'BRD-STN-003',
    categoryId: CATEGORY_IDS.STATIONERY,
    name: 'File Cover',
    price: 449,
    description: 'Conference folders and file covers with document pocket.',
    image:
      'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=900&q=80',
    active: true,
  },
  {
    id: 'BRD-STN-004',
    categoryId: CATEGORY_IDS.STATIONERY,
    name: 'Note Pad',
    price: 149,
    description: 'Branded notepads and A5 pads for workshops and desks.',
    image:
      'https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?auto=format&fit=crop&w=900&q=80',
    active: true,
  },
  {
    id: 'BRD-CLT-001',
    categoryId: CATEGORY_IDS.CLOTHING,
    name: 'Shirts',
    price: 890,
    description: 'Oxford and twill shirts with chest embroidery or woven label.',
    image:
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=900&q=80',
    active: true,
  },
  {
    id: 'BRD-CLT-002',
    categoryId: CATEGORY_IDS.CLOTHING,
    name: 'T-Shirts',
    price: 349,
    description: 'Crew and polo tees, print or embroidery ready.',
    image:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80',
    active: true,
  },
  {
    id: 'BRD-CLT-003',
    categoryId: CATEGORY_IDS.CLOTHING,
    name: 'Raincoats',
    price: 790,
    description: 'Staff raincoats and packable shells with reflective tape.',
    image:
      'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&w=900&q=80',
    active: true,
  },
  {
    id: 'BRD-CLT-004',
    categoryId: CATEGORY_IDS.CLOTHING,
    name: 'Caps',
    price: 299,
    description: 'Structured caps with 3D embroidery on the crown.',
    image:
      'https://images.unsplash.com/photo-1588850561407-42e7f73b2d6e?auto=format&fit=crop&w=900&q=80',
    active: true,
  },
  {
    id: 'BRD-CLT-005',
    categoryId: CATEGORY_IDS.CLOTHING,
    name: 'Jacket',
    price: 1690,
    description: 'Softshell and bomber jackets with a large back print area.',
    image:
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=900&q=80',
    active: true,
  },
  {
    id: 'BRD-OTH-001',
    categoryId: CATEGORY_IDS.OTHER,
    name: 'Wallet',
    price: 790,
    description: 'Bifold and slim wallets with foil stamp and gift box.',
    image:
      'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=900&q=80',
    active: true,
  },
  {
    id: 'BRD-OTH-002',
    categoryId: CATEGORY_IDS.OTHER,
    name: 'Keychain',
    price: 149,
    description: 'Metal and leather keychains with engraved or printed mark.',
    image:
      'https://images.unsplash.com/photo-1582139329536-e7284fe66ae0?auto=format&fit=crop&w=900&q=80',
    active: true,
  },
  {
    id: 'BRD-OTH-003',
    categoryId: CATEGORY_IDS.OTHER,
    name: 'Umbrella',
    price: 690,
    description: 'Golf and compact umbrellas with panel print and sleeve.',
    image:
      'https://images.unsplash.com/photo-1533419734162-0ab68a2d3278?auto=format&fit=crop&w=900&q=80',
    active: true,
  },
  {
    id: 'BRD-OTH-004',
    categoryId: CATEGORY_IDS.OTHER,
    name: 'Umbrella 01',
    price: 690,
    description: 'Golf and compact umbrellas with panel print and sleeve.',
    image:
      'https://images.unsplash.com/photo-1533419734162-0ab68a2d3278?auto=format&fit=crop&w=900&q=80',
    active: true,
  },
]
