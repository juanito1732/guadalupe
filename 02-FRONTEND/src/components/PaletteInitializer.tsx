'use client'

import { usePalette } from '@/hooks/usePalette'

/**
 * Component that initializes the palette on client-side
 * Must be placed early in the app to set colors before rendering
 */
export default function PaletteInitializer() {
  usePalette()
  return null
}
