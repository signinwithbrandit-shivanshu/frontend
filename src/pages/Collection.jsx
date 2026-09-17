import { listCategories, listFamilies } from '../data/catalog.js'
import CustomProductCta from '../components/CustomProductCta.jsx'
import FamilyCard from '../components/FamilyCard.jsx'

export default function Collection() {
  const groups = listCategories()
    .map((category) => ({
      category,
      families: listFamilies({ slug: category.slug }),
    }))
    .filter((group) => group.families.length)

  return (
    <section className="section collection-page" style={{ paddingTop: 28 }}>
      <div className="wrap">
        <div className="page-hero">
          <h1>Collection</h1>
        </div>
        <CustomProductCta />
        {groups.length ? (
          groups.map(({ category, families }) => (
            <div className="family-section" key={category.id}>
              <h2 className="family-section-title">{category.name}</h2>
              <div className="product-grid">
                {families.map((family) => (
                  <FamilyCard key={`${category.id}-${family.id}`} family={family} />
                ))}
              </div>
            </div>
          ))
        ) : (
          <p className="empty">No products in the collection yet.</p>
        )}
      </div>
    </section>
  )
}
