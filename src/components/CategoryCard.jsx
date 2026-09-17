import { Link } from 'react-router-dom'
import { homeCategories } from '../data/catalog.js'

export default function CategoryCard({ category }) {
  const hoverImages = Array.isArray(category.hoverImages) ? category.hoverImages.filter(Boolean) : []

  return (
    <Link
      to={`/collection/${category.slug}`}
      className={`cat-card cat-card-product ${category.featured ? 'featured' : ''}`}
    >
      <div className="cat-stage" aria-hidden="true" />
      <img
        className="main"
        src={category.image}
        alt=""
        onError={(event) => {
          event.currentTarget.style.visibility = 'hidden'
        }}
      />
      <div className="overlay" />
      {hoverImages.length ? (
        <div className="hover-strip">
          {hoverImages.map((src) => (
            <img
              key={src}
              src={src}
              alt=""
              onError={(event) => {
                event.currentTarget.style.display = 'none'
              }}
            />
          ))}
        </div>
      ) : null}
      <div className="copy">
        <h3>{category.title}</h3>
        <span className="cat-cta">Browse</span>
      </div>
    </Link>
  )
}

export function HomeCategoryGrid() {
  return (
    <div className="cat-grid">
      {homeCategories.map((category) => (
        <CategoryCard key={category.slug} category={category} />
      ))}
    </div>
  )
}
