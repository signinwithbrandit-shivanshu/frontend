import { Link } from 'react-router-dom'
import { homeCategories } from '../data/catalog.js'

export default function CategoryCard({ category }) {
  return (
    <Link
      to={`/collection/${category.slug}`}
      className={`cat-card ${category.featured ? 'featured' : ''}`}
    >
      <img className="main" src={category.image} alt="" />
      <div className="overlay" />
      <div className="hover-strip">
        {category.hoverImages.map((src) => (
          <img key={src} src={src} alt="" />
        ))}
      </div>
      <div className="copy">
        <h3>{category.title}</h3>
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
