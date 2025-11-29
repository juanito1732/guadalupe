/**
 * COLOR PALETTES FOR GUADIS LANDING PAGE
 * Each palette has 5 colors for comprehensive theming
 */

export interface Palette {
  name: string
  description: string
  color1: string
  color2: string
  color3: string
  color4: string
  color5: string
}

export const PALETTES: Record<string, Palette> = {
  // AZULES - Professional Blue Tones (5 shades, lightest to darkest)
  azules: {
    name: 'Azules',
    description: 'Tonos Azules Profesionales',
    color1: '#E8F5FD',  // Lightest - Very light blue background
    color2: '#CCE1EF',  // Light blue - Secondary backgrounds, light accents
    color3: '#9BC0DA',  // Medium blue - Cards, borders, subtle elements
    color4: '#689EC2',  // Dark blue - Buttons, links, prominent elements
    color5: '#1B5B7E',  // Darkest - Text, headers, strong emphasis
  },

  // EARTH - Warm Brown Tones (5 shades, lightest to darkest)
  earth: {
    name: 'Earth',
    description: 'Tonos Tierra Cálidos',
    color1: '#E9D2C0',  // Lightest - Light beige background
    color2: '#C7A48F',  // Light brown - Secondary backgrounds
    color3: '#C99772',  // Medium brown - Cards, borders
    color4: '#B57549',  // Dark brown - Buttons, links
    color5: '#8D4424',  // Darkest - Text, headers
  },

  // ROSA - Rose & Purple Tones (5 shades, lightest to darkest)
  rosa: {
    name: 'Rosa',
    description: 'Tonos Rosa y Púrpura',
    color1: '#9DB8D6',  // Lightest - Light lavender background
    color2: '#D1DCE0',  // Light blue-gray - Secondary backgrounds
    color3: '#EACDDB',  // Light pink - Cards, soft accents
    color4: '#F0A6C5',  // Medium pink - Buttons, links
    color5: '#E963A7',  // Darkest - Text, headers, strong elements
  },

  // GRIS - Gray & Beige Tones (5 shades, lightest to darkest)
  gris: {
    name: 'Gris',
    description: 'Tonos Grises y Beige',
    color1: '#DABEB6',  // Lightest - Light beige-gray background
    color2: '#EED0C6',  // Very light brown - Secondary backgrounds
    color3: '#E3D4D0',  // Light taupe - Cards, borders
    color4: '#B2B9BF',  // Medium gray - Buttons, links
    color5: '#7A8D9B',  // Darkest - Text, headers
  },
}

/**
 * Get a specific palette by name
 */
export const getPalette = (name: string): Palette => {
  const palette = PALETTES[name.toLowerCase()]
  return palette || PALETTES['azules'] // Default to azules if not found
}

/**
 * Get all available palette names
 */
export const getAllPaletteNames = (): string[] => {
  return Object.keys(PALETTES)
}

/**
 * Get all palettes
 */
export const getAllPalettes = (): Palette[] => {
  return Object.values(PALETTES)
}

/**
 * Apply a palette to the document
 * Sets CSS variables that components use
 */
export const applyPalette = (palette: Palette): void => {
  if (typeof document === 'undefined') return // SSR safety

  const root = document.documentElement
  root.style.setProperty('--color-1', palette.color1)
  root.style.setProperty('--color-2', palette.color2)
  root.style.setProperty('--color-3', palette.color3)
  root.style.setProperty('--color-4', palette.color4)
  root.style.setProperty('--color-5', palette.color5)

  // Also set legacy variables for backward compatibility
  root.style.setProperty('--primary-dark', palette.color5)
  root.style.setProperty('--primary', palette.color4)
  root.style.setProperty('--primary-light', palette.color3)
  root.style.setProperty('--accent', palette.color2)
}
