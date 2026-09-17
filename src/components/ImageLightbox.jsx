import { useCallback, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

export default function ImageLightbox({ src, alt, onClose }) {
  const [failed, setFailed] = useState(false)

  const close = useCallback(() => {
    onClose?.()
  }, [onClose])

  useEffect(() => {
    setFailed(false)
  }, [src])

  useEffect(() => {
    if (!src) return undefined

    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    function onKey(event) {
      if (event.key === 'Escape') close()
    }

    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previous
      document.removeEventListener('keydown', onKey)
    }
  }, [src, close])

  if (!src) return null

  const node = (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={alt || 'Product image'}>
      <button type="button" className="lightbox-backdrop" onClick={close} aria-label="Close picture" />
      <button type="button" className="lightbox-close" onClick={close} aria-label="Close picture">
        ×
      </button>
      {failed ? (
        <p className="lightbox-error" role="alert">
          This picture could not be loaded.
        </p>
      ) : (
        <img src={src} alt={alt || ''} onError={() => setFailed(true)} />
      )}
    </div>
  )

  return createPortal(node, document.body)
}
