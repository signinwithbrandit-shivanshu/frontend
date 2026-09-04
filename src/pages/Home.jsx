import { HomeCategoryGrid } from '../components/CategoryCard.jsx'
import BrandMarquee from '../components/BrandMarquee.jsx'
import Hero from '../components/Hero.jsx'

export default function Home() {
  return (
    <>
      <Hero />

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div className="gold-rule" />
            <h2>Gifts that wear your logo.</h2>
          </div>
          <HomeCategoryGrid />
        </div>
      </section>

      <section className="section brands" id="brands">
        <div className="wrap">
          <div className="section-head">
            <div className="gold-rule" />
            <h2>Brands we&apos;re serving</h2>
          </div>
        </div>
        <BrandMarquee />
      </section>
    </>
  )
}
