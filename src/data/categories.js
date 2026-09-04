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
    // subtitle: 'Felt, jute, travel and everyday carry',
    image:
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1200&q=80',
    hoverImages: [
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1590874103328-eac38a941954?auto=format&fit=crop&w=800&q=80',
    ],
  },
  {
    id: CATEGORY_IDS.STATIONERY,
    slug: 'stationery',
    name: 'Stationery',
    code: 'STN',
    // subtitle: 'Pens, diaries, files and pads',
    image:
      'https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?auto=format&fit=crop&w=1200&q=80',
    hoverImages: [
      'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=800&q=80',
    ],
  },
  {
    id: CATEGORY_IDS.DESKTOP,
    slug: 'desktop-accessories',
    name: 'Desktop Accessories',
    code: 'DSK',
    // subtitle: 'Mugs, stands, pads and desk tools',
    image:
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80',
    hoverImages: [
      'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80',
    ],
  },
  {
    id: CATEGORY_IDS.CLOTHING,
    slug: 'clothing',
    name: 'Clothing',
    code: 'CLT',
    // subtitle: 'Shirts, tees, jackets, caps and rainwear',
    image:
      'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=1200&q=80',
    hoverImages: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=80',
    ],
  },
  {
    id: CATEGORY_IDS.OTHER,
    slug: 'other',
    name: 'Other',
    code: 'OTH',
    // subtitle: 'Wallets, keychains and umbrellas',
    image:
      'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=1400&q=80',
    hoverImages: [
      'https://images.unsplash.com/photo-1533419734162-0ab68a2d3278?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1607083206968-13611e3d76db?auto=format&fit=crop&w=800&q=80',
    ],
    featured: true,
  },
]
