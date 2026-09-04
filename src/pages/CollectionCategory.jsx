import { useParams } from 'react-router-dom'
import { getCategory, productsBySlug } from '../data/catalog.js'
import ProductCard from '../components/ProductCard.jsx'

export default function CollectionCategory() {
  const { slug } = useParams()
  const category = getCategory(slug)
  const items = productsBySlug(slug)
  const title = category?.name ?? 'Collection'

  return (
    <section className="section" style={{ paddingTop: 28 }}>
      <div className="wrap">
        <div className="page-hero">
          <h1>{title}</h1>
        </div>
        {items.length ? (
          <div className="product-grid">
            {items.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="empty">No products in this category yet.</p>
        )}
      </div>
    </section>
  )
}
