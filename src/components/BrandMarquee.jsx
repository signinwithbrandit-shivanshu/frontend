import { brands } from '../data/catalog.js'

export default function BrandMarquee() {
  const loop = [...brands, ...brands]
  return (
    <div className="brand-ticker" aria-label="Brands we work with">
      <div className="brand-marquee">
        <div className="brand-track">
          {loop.map((brand, index) => (
            <div className="brand-logo" key={`${brand.name}-${index}`}>
              <img src={brand.logo} alt={brand.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
