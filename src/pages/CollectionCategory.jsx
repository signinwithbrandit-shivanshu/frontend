import { Link, useParams } from 'react-router-dom'
import { getCategory, getFamily, listFamilies } from '../data/catalog.js'
import CustomProductCta from '../components/CustomProductCta.jsx'
import FamilyCard from '../components/FamilyCard.jsx'
import ProductCard from '../components/ProductCard.jsx'

export default function CollectionCategory() {
  const { slug, group } = useParams()
  const category = getCategory(slug)

  if (!category) {
    return (
      <section className="section collection-page" style={{ paddingTop: 28 }}>
        <div className="wrap">
          <div className="page-hero">
            <h1>Collection</h1>
          </div>
          <p className="empty">
            This category could not be found.{' '}
            <Link to="/collection">Back to collection</Link>
          </p>
        </div>
      </section>
    )
  }

  const family = group ? getFamily(slug, group) : null

  if (group && !family) {
    return (
      <section className="section collection-page" style={{ paddingTop: 28 }}>
        <div className="wrap">
          <div className="page-hero">
            <h1>{category.name}</h1>
          </div>
          <CustomProductCta categorySlug={category.slug} categoryName={category.name} />
          <p className="empty">
            This product group could not be found.{' '}
            <Link to={`/collection/${category.slug}`}>View {category.name}</Link>
          </p>
        </div>
      </section>
    )
  }

  const families = family ? [] : listFamilies({ slug })
  const items = family?.products ?? []
  const title = family?.name ?? category.name

  return (
    <section className="section collection-page" style={{ paddingTop: 28 }}>
      <div className="wrap">
        <div className="page-hero">
          {family ? (
            <p className="crumb">
              <Link to="/collection">Collection</Link>
              <span>/</span>
              <Link to={`/collection/${category.slug}`}>{category.name}</Link>
            </p>
          ) : (
            <p className="crumb">
              <Link to="/collection">Collection</Link>
            </p>
          )}
          <h1>{title}</h1>
        </div>
        <CustomProductCta categorySlug={category.slug} categoryName={category.name} />
        {family ? (
          items.length ? (
            <div className="product-grid">
              {items.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <p className="empty">No products in this group yet.</p>
          )
        ) : families.length ? (
          <div className="product-grid">
            {families.map((item) => (
              <FamilyCard key={item.id} family={item} />
            ))}
          </div>
        ) : (
          <p className="empty">No products in this category yet.</p>
        )}
      </div>
    </section>
  )
}
