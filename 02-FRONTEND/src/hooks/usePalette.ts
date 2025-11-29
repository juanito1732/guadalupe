'use client'

import { useEffect, useState } from 'react'
import { applyPalette, getPalette, type Palette } from '@/data/palettes'

/**
 * Hook para manejar paletas de colores
 * Lee de URL param "palette" o localStorage "guadis-palette"
 * Por defecto usa 'azules'
 */
export const usePalette = () => {
  const [currentPalette, setCurrentPalette] = useState<Palette | null>(null)
  const [paletteName, setPaletteName] = useState<string>('azules')

  useEffect(() => {
    // Obtener paleta del URL param o localStorage
    const urlParams = new URLSearchParams(window.location.search)
    const paletteFromUrl = urlParams.get('palette')
    const paletteFromStorage = localStorage.getItem('guadis-palette')

    const selectedPalette = paletteFromUrl || paletteFromStorage || 'azules'
    setPaletteName(selectedPalette)

    // Obtener la paleta y aplicarla
    const palette = getPalette(selectedPalette)
    setCurrentPalette(palette)
    applyPalette(palette)

    // Guardar en localStorage
    localStorage.setItem('guadis-palette', selectedPalette)
  }, [])

  const switchPalette = (newPaletteName: string) => {
    const palette = getPalette(newPaletteName)
    setCurrentPalette(palette)
    setPaletteName(newPaletteName)
    applyPalette(palette)
    localStorage.setItem('guadis-palette', newPaletteName)
  }

  return {
    currentPalette,
    paletteName,
    switchPalette,
  }
}
