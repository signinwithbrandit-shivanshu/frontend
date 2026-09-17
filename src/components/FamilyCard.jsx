import { useState } from 'react'
import { Link } from 'react-router-dom'
import { formatPrice } from '../data/catalog.js'
import ImageLightbox from './ImageLightbox.jsx'

export default function FamilyCard({ family }) {
  const [open, setOpen] = useState(false)
  const [failed, setFailed] = useState(false)

  if (!family) return null

  const href = `/collection/${family.categorySlug}/${family.id}`
  const countLabel = family.count === 1 ? '1 option' : `${family.count} options`
  const canPreview = Boolean(family.image) && !failed

  return (
    <article className="product-card family-card">
      {canPreview ? (
        <button
          type="button"
          className="product-media"
          onClick={() => setOpen(true)}
          aria-label={`View ${family.name} larger`}
        >
          <img src={family.image} alt={family.name} onError={() => setFailed(true)} />
        </button>
      ) : (
        <div className="product-media is-fallback" role="img" aria-label={family.name}>
          <span>Image unavailable</span>
        </div>
      )}
      <div className="body">
        <div className="sku num">{countLabel}</div>
        <h3>{family.name}</h3>
        <p>{family.description}</p>
        <div>
          <p>Starting from: </p>
          <div className="price num">{formatPrice(family.price)}</div>
        </div>
        <Link className="btn btn-ghost" to={href}>
          View all
        </Link>
      </div>
      {open && canPreview ? (
        <ImageLightbox src={family.image} alt={family.name} onClose={() => setOpen(false)} />
      ) : null}
    </article>
  )
}
