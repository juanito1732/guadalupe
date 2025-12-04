'use client'

import { useEffect, useState } from 'react'
import { applyPalette, getPalette, type Palette } from '@/data/palettes'

/**
 * Hook para manejar paletas de colores
 * Utiliza la paleta AZUL (diseño profesional para estudio jurídico)
 */
export const usePalette = () => {
  const [currentPalette, setCurrentPalette] = useState<Palette | null>(null)
  const paletteName = 'azules'

  useEffect(() => {
    // Aplicar la paleta AZUL por defecto
    const palette = getPalette('azules')
    setCurrentPalette(palette)
    applyPalette(palette)
  }, [])

  return {
    currentPalette,
    paletteName,
  }
}
