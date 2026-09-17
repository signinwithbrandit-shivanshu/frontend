import { categories } from './categories.js'
import { products as productRecords } from './products.js'

/**
 * One menu/card option per product family (e.g. all Felt Bags),
 * not one option per SKU.
 */
const FAMILY_RULES = [
  { id: 'felt-bags', name: 'Felt Bags', match: (p) => /felt/i.test(p.name) && /bag/i.test(p.name) && !/sleeve/i.test(p.name) },
  { id: 'felt-laptop-sleeve', name: 'Felt Laptop Sleeve', match: (p) => /felt/i.test(p.name) && /sleeve/i.test(p.name) },
  { id: 'office-laptop-bag', name: 'Office Laptop Bag', match: (p) => /office laptop bag/i.test(p.name) },
  { id: 'laptop-jute-pu-bags', name: 'Laptop Jute and PU Bags', match: (p) => /jute and pu/i.test(p.name) },
  { id: 'backpack', name: 'Backpack', match: (p) => /backpack/i.test(p.name) },
  { id: 'pu-leather-sling-bag', name: 'PU Leather Sling Bag', match: (p) => /leather sling/i.test(p.name) },
  { id: 'sling-bag', name: 'Sling Bag', match: (p) => /sling bag/i.test(p.name) && !/leather/i.test(p.name) },
  { id: 'pu-leather-duffle-bag', name: 'PU Leather Duffle Bag', match: (p) => /leather duffle/i.test(p.name) },
  { id: 'duffle-bag', name: 'Duffle Bag', match: (p) => /duffle bag/i.test(p.name) && !/leather/i.test(p.name) },
  { id: 'travel-trolley-bag', name: 'Travel Trolley Bag', match: (p) => /travel trolley/i.test(p.name) },
  { id: 'small-trolley-bag', name: 'Small Trolley Bag', match: (p) => /small trolley/i.test(p.name) },
  { id: 'laptop-stand', name: 'Laptop Stand', match: (p) => /laptop stand/i.test(p.name) },
  { id: 'calendar', name: 'Calendar', match: (p) => /calend[ae]r/i.test(p.name) },
  { id: 'pen-pencil-stand', name: 'Pen and Pencil Stand', match: (p) => /pen and pencil/i.test(p.name) },
  { id: 'metal-phone-stand', name: 'Metal Phone Stand', match: (p) => /phone stand/i.test(p.name) },
  { id: 'mugs', name: 'Mugs', match: (p) => /mug/i.test(p.name) },
  { id: 'pens', name: 'Pens', match: (p) => /^\s*pens\s*$/i.test(p.name) || /pen set/i.test(p.name) },
  { id: 'leather-diary-flask-set', name: 'Leather Diary and Flask Set', match: (p) => /leather diary/i.test(p.name) || (/diary/i.test(p.name) && /flask/i.test(p.name)) },
  { id: 'diaries', name: 'Diaries', match: (p) => /diary/i.test(p.name) && !/flask/i.test(p.name) && !/gift/i.test(p.name) },
  { id: 'notepad', name: 'Notepad', match: (p) => /notepad/i.test(p.name) },
  { id: 'cotton-shirts', name: 'Cotton Shirts', match: (p) => /cotton shirts/i.test(p.name) && !/poly/i.test(p.name) },
  { id: 'filafil-shirts', name: 'Filafil Shirts', match: (p) => /filafil/i.test(p.name) },
  { id: 'poly-cotton-shirts', name: 'Poly-cotton Mix Shirts', match: (p) => /poly-cotton/i.test(p.name) },
  { id: 'sapp-matty-tshirts', name: 'Sapp Matty T-shirts', match: (p) => /sapp matty/i.test(p.name) },
  { id: 'cotton-tshirts', name: 'Cotton T-shirts', match: (p) => /cotton t-shirts/i.test(p.name) },
  { id: 'caps', name: 'Caps', match: (p) => /^\s*caps\s*$/i.test(p.name) },
  { id: 'jackets', name: 'Jackets', match: (p) => /jackets/i.test(p.name) },
  { id: 'ss-tumbler', name: 'SS Tumbler', match: (p) => /ss tumbler/i.test(p.name) },
  { id: 'premium-tumbler', name: 'Premium Tumbler', match: (p) => /premium tumbler/i.test(p.name) },
  { id: 'tumbler', name: 'Tumbler', match: (p) => /tumbler/i.test(p.name) && !/ss /i.test(p.name) && !/premium/i.test(p.name) },
  { id: 'premium-ss-water-bottle', name: 'Premium SS Water Bottle', match: (p) => /premium ss water/i.test(p.name) },
  { id: 'ss-water-bottle', name: 'SS Water Bottle', match: (p) => /ss water bottle/i.test(p.name) },
  { id: 'ss-bottle', name: 'SS Bottle', match: (p) => /ss bottle/i.test(p.name) },
  { id: 'water-bottle', name: 'Water Bottle', match: (p) => /water bottle/i.test(p.name) && !/ss /i.test(p.name) },
  { id: 'premium-flask-set', name: 'Premium Flask Set', match: (p) => /flask set/i.test(p.name) },
  { id: 'gift-set-5-in-1', name: '5 in 1 Gift Set', match: (p) => /5 in 1/i.test(p.name) },
  { id: 'gift-set-6-in-1', name: 'Executive 6 in 1 Gift Set', match: (p) => /6 in 1/i.test(p.name) },
  { id: 'gift-set-4-in-1', name: 'Executive 4 in 1 Gift Set', match: (p) => /4 in 1/i.test(p.name) },
  { id: 'gift-set-2-in-1', name: 'Executive 2 in 1 Gift Set', match: (p) => /2 in 1/i.test(p.name) },
]

function slugify(value) {
  return String(value || '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60)
}

function activeProducts() {
  return productRecords.filter((item) => item.active !== false)
}

export function familyForProduct(product) {
  if (!product) return null
  const rule = FAMILY_RULES.find((item) => {
    try {
      return item.match(product)
    } catch {
      return false
    }
  })
  if (rule) return { id: rule.id, name: rule.name }

  const name = String(product.name || '')
    .trim()
    .replace(/\s+/g, ' ')
    .replace(/\s+\d+\s*GSM/i, '')
  const id = slugify(name) || slugify(product.id) || 'product'
  return { id, name: name || 'Product' }
}

function categoryById(categoryId) {
  return categories.find((item) => item.id === categoryId)
}

export function listFamilies({ categoryId, slug } = {}) {
  const category = slug
    ? categories.find((item) => item.slug === slug || item.id === slug)
    : categoryId
      ? categoryById(categoryId)
      : null

  const items = activeProducts().filter((product) => {
    if (!category) return true
    return product.categoryId === category.id
  })

  const map = new Map()
  for (const product of items) {
    const family = familyForProduct(product)
    if (!family) continue
    const existing = map.get(family.id)
    if (!existing) {
      map.set(family.id, {
        id: family.id,
        name: family.name,
        categoryId: product.categoryId,
        categorySlug: categoryById(product.categoryId)?.slug ?? slug ?? '',
        image: product.image,
        description: product.description,
        price: Number(product.price) || 0,
        count: 1,
        products: [product],
      })
    } else {
      existing.count += 1
      existing.products.push(product)
      const nextPrice = Number(product.price)
      if (!Number.isNaN(nextPrice) && nextPrice < existing.price) {
        existing.price = nextPrice
      }
    }
  }
  return [...map.values()]
}

export function getFamily(slug, familyId) {
  if (!slug || !familyId) return null
  return listFamilies({ slug }).find((item) => item.id === familyId) ?? null
}

export function productsInFamily(slug, familyId) {
  return getFamily(slug, familyId)?.products ?? []
}
