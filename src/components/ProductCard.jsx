import { formatPrice } from '../data/catalog.js'
import { Link } from 'react-router-dom'

export default function ProductCard({ product }) {
  return (
    <article className="product-card" id={product.id}>
      <img src={product.image} alt={product.name} />
      <div className="body">
        <div className="sku num">{product.id}</div>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="price num">{formatPrice(product.price)}</div>
        <Link className="btn btn-ghost" to={`/contact?product=${encodeURIComponent(product.id)}`}>
          Enquire
        </Link>
      </div>
    </article>
  )
}
