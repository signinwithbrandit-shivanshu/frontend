import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { searchProducts } from '../data/catalog.js'
import ProductCard from '../components/ProductCard.jsx'

export default function Search() {
  const [params] = useSearchParams()
  const q = params.get('q') ?? ''
  const results = useMemo(() => searchProducts(q), [q])

  return (
    <section className="section" style={{ paddingTop: 28 }}>
      <div className="wrap">
        <div className="page-hero">
          <h1>{q ? `Results for “${q}”` : 'Search'}</h1>
          <p className="lead" style={{ marginLeft: 0 }}>
            <span className="num">{results.length}</span> match{results.length === 1 ? '' : 'es'}.
          </p>
        </div>
        {results.length ? (
          <div className="product-grid">
            {results.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="empty">No products matched. Try a name or a product ID such as BRD-BAG-001.</p>
        )}
      </div>
    </section>
  )
}
