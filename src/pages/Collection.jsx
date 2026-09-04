import { listProducts } from '../data/catalog.js'
import ProductCard from '../components/ProductCard.jsx'

export default function Collection() {
  const items = listProducts()
  return (
    <section className="section" style={{ paddingTop: 28 }}>
      <div className="wrap">
        <div className="page-hero">
          <h1>Collection</h1>
        </div>
        <div className="product-grid">
          {items.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
