import { Link } from 'react-router-dom'

export default function CustomProductCta({ categorySlug, categoryName }) {
  const params = new URLSearchParams({ custom: '1' })
  if (categorySlug) params.set('category', categorySlug)

  return (
    <Link className="custom-drop" to={`/contact?${params.toString()}`}>
      <strong>Click here to drop your customized product</strong>
      <span>
        {categoryName
          ? `Send a custom ${categoryName.toLowerCase()} enquiry with your own product photo.`
          : 'Send a custom enquiry with your own product photo.'}
      </span>
    </Link>
  )
}
