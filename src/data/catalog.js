import { categories } from './categories.js'
import { products as productRecords } from './products.js'
import { brands } from './brands.js'
import { company } from './company.js'

export { CATEGORY_IDS, categories } from './categories.js'
export { products } from './products.js'
export { brands } from './brands.js'
export { company } from './company.js'

export const collectionNav = categories.map((category) => ({
  slug: category.slug,
  label: category.name,
}))

export const homeCategories = categories.map((category) => ({
  slug: category.slug,
  title: category.name,
  subtitle: category.subtitle,
  image: category.image,
  hoverImages: category.hoverImages,
  featured: Boolean(category.featured),
}))

export function formatPrice(value) {
  if (typeof value === 'string') return value
  return `₹${Number(value).toLocaleString('en-IN')}`
}

export function listCategories() {
  return categories
}

export function getCategory(idOrSlug) {
  return categories.find((item) => item.id === idOrSlug || item.slug === idOrSlug)
}

export function listProducts({ categoryId, includeInactive = false } = {}) {
  return productRecords.filter((item) => {
    if (!includeInactive && item.active === false) return false
    if (categoryId && item.categoryId !== categoryId) return false
    return true
  })
}

export function getProduct(id) {
  return productRecords.find((item) => item.id === id)
}

export const productById = getProduct

export function productsBySlug(slug) {
  const category = getCategory(slug)
  if (!category) return []
  return listProducts({ categoryId: category.id })
}

export function categoryLabel(slug) {
  return getCategory(slug)?.name ?? slug
}

export function searchProducts(query) {
  const q = query.trim().toLowerCase()
  if (!q) return []
  return listProducts().filter((item) => {
    const category = getCategory(item.categoryId)
    const hay = `${item.id} ${item.name} ${item.description} ${category?.name ?? ''}`.toLowerCase()
    return hay.includes(q)
  })
}

/** Suggest the next unused SKU for a category when creating a product. */
export function nextSku(categoryId) {
  const category = getCategory(categoryId)
  if (!category) {
    throw new Error(`Unknown category: ${categoryId}`)
  }
  const used = productRecords
    .filter((item) => item.categoryId === category.id)
    .map((item) => Number(item.id.split('-').pop()))
    .filter((n) => !Number.isNaN(n))
  const next = (used.length ? Math.max(...used) : 0) + 1
  return `BRD-${category.code}-${String(next).padStart(3, '0')}`
}

/** Live counts for the home rail. Updates when brands, products, or categories change. */
export function getSiteStats() {
  return [
    {
      value: `${brands.length}+`,
      label: 'houses we gift for',
      numeric: true,
    },
    {
      value: listProducts().length,
      label: 'products in catalogue',
      numeric: true,
    },
    {
      value: categories.length,
      label: 'categories',
      numeric: true,
    },
    {
      value: company.dispatchValue,
      label: company.dispatchNote,
      numeric: false,
    },
  ]
}
