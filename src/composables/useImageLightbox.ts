import { ref } from 'vue'

const isLightboxOpen = ref(false)
const currentImageSrc = ref('')
const currentImageAlt = ref('')

export function useImageLightbox() {
  const openLightbox = (src: string, alt: string) => {
    currentImageSrc.value = src
    currentImageAlt.value = alt
    isLightboxOpen.value = true
  }

  const closeLightbox = () => {
    isLightboxOpen.value = false
    // Clear the image data after a brief delay to allow for transition
    setTimeout(() => {
      currentImageSrc.value = ''
      currentImageAlt.value = ''
    }, 300)
  }

  return {
    isLightboxOpen,
    currentImageSrc,
    currentImageAlt,
    openLightbox,
    closeLightbox
  }
}
