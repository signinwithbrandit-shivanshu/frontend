export const MAX_CUSTOM_IMAGES = 3
export const MAX_CUSTOM_IMAGE_BYTES = 1024 * 1024
export const ALLOWED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif']

const TYPE_LABEL = 'JPG, PNG, WEBP or GIF'

export function validateCustomImages(fileList, currentCount = 0) {
  const incoming = Array.from(fileList || []).filter(Boolean)
  if (!incoming.length) {
    return { files: [], error: '' }
  }

  const remaining = MAX_CUSTOM_IMAGES - currentCount
  if (remaining <= 0) {
    return { files: [], error: `You can attach up to ${MAX_CUSTOM_IMAGES} images.` }
  }

  const accepted = []
  for (const file of incoming) {
    if (accepted.length >= remaining) {
      return {
        files: accepted,
        error: `Only ${MAX_CUSTOM_IMAGES} images can be attached.`,
      }
    }
    if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
      return {
        files: [],
        error: `“${file.name}” is not a supported image. Use ${TYPE_LABEL}.`,
      }
    }
    if (file.size <= 0) {
      return { files: [], error: `“${file.name}” looks empty. Please choose another file.` }
    }
    if (file.size > MAX_CUSTOM_IMAGE_BYTES) {
      return {
        files: [],
        error: `“${file.name}” is over 1 MB. Please attach a smaller image.`,
      }
    }
    accepted.push(file)
  }

  return { files: accepted, error: '' }
}

export function previewUrlFor(file) {
  try {
    return URL.createObjectURL(file)
  } catch {
    return ''
  }
}

export function revokePreviewUrl(url) {
  if (!url || !url.startsWith('blob:')) return
  try {
    URL.revokeObjectURL(url)
  } catch {
    /* ignore */
  }
}
