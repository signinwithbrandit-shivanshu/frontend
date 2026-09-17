/**
 * Categories Brandit sells.
 *
 * CRUD
 * - Create: append an object. `id` must be unique. `code` is the 3-letter SKU prefix.
 * - Update: edit the object in place. Keep `id` and `slug` stable if URLs are already shared.
 * - Delete: remove the object, then remove or recategorise products that used that `id`.
 */
export const CATEGORY_IDS = {
  BAGS: 'bags',
  DESKTOP: 'desktop-accessories',
  STATIONERY: 'stationery',
  CLOTHING: 'clothing',
  OTHER: 'other',
}

export const categories = [
  {
    id: CATEGORY_IDS.BAGS,
    slug: 'bags',
    name: 'Bags',
    code: 'BAG',
    image: '/bags/BRD-BAG-001.jfif',
    hoverImages: ['/bags/BRD-BAG-007.jfif', '/bags/BRD-BAG-026.jfif'],
  },
  {
    id: CATEGORY_IDS.STATIONERY,
    slug: 'stationery',
    name: 'Stationery',
    code: 'STN',
    image: '/STN/BRD-STN-004.jfif',
    hoverImages: ['/STN/BRD-STN-001.jfif', '/STN/BRD-STN-005.jpeg'],
  },
  {
    id: CATEGORY_IDS.DESKTOP,
    slug: 'desktop-accessories',
    name: 'Desktop Accessories',
    code: 'DSK',
    image: '/DSK/BRD-DSK-010.jfif',
    hoverImages: ['/DSK/BRD-DSK-001.jfif', '/DSK/BRD-DSK-008.jfif'],
  },
  {
    id: CATEGORY_IDS.CLOTHING,
    slug: 'clothing',
    name: 'Clothing',
    code: 'CLT',
    image: '/CLT/BRD-CLT-001.jfif',
    hoverImages: ['/CLT/BRD-CLT-005.jfif', '/CLT/BRD-CLT-007.jpg'],
  },
  {
    id: CATEGORY_IDS.OTHER,
    slug: 'other',
    name: 'Other',
    code: 'OTH',
    image: '/OTH/BRD-OTH-012.jpg',
    hoverImages: ['/OTH/BRD-OTH-001.jfif', '/OTH/BRD-OTH-014.jpg'],
    featured: true,
  },
]
