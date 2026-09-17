import { useState } from 'react'
import { Link } from 'react-router-dom'
import { formatPrice } from '../data/catalog.js'
import ImageLightbox from './ImageLightbox.jsx'

function ProductImage({ src, alt, onOpen }) {
  const [failed, setFailed] = useState(false)

  if (failed || !src) {
    return (
      <div className="product-media is-fallback" role="img" aria-label={alt}>
        <span>Image unavailable</span>
      </div>
    )
  }

  return (
    <button type="button" className="product-media" onClick={onOpen} aria-label={`View ${alt} larger`}>
      <img src={src} alt={alt} onError={() => setFailed(true)} />
    </button>
  )
}

export default function ProductCard({ product }) {
  const [open, setOpen] = useState(false)

  if (!product) return null

  return (
    <article className="product-card" id={product.id}>
      <ProductImage src={product.image} alt={product.name} onOpen={() => setOpen(true)} />
      <div className="body">
        <div className="sku num">{product.id}</div>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div>
          <p>Starting from: </p>
          <div className="price num">{formatPrice(product.price)}</div>
        </div>
        <Link className="btn btn-ghost" to={`/contact?product=${encodeURIComponent(product.id)}`}>
          Enquire
        </Link>
      </div>
      {open ? <ImageLightbox src={product.image} alt={product.name} onClose={() => setOpen(false)} /> : null}
    </article>
  )
}
