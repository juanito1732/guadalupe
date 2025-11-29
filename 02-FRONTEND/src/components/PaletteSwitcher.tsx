'use client'

import { useState } from 'react'
import { getAllPalettes } from '@/data/palettes'
import { usePalette } from '@/hooks/usePalette'

export default function PaletteSwitcher() {
  const { paletteName, switchPalette } = usePalette()
  const [isOpen, setIsOpen] = useState(false)
  const palettes = getAllPalettes()

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white shadow-lg hover:shadow-xl transition-all hover:scale-110 font-bold text-sm"
        title="Color Palettes"
      >
        🎨
      </button>

      {/* Menu */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-2xl border border-gray-200 p-2 min-w-64 max-w-sm">
          <p className="text-xs font-semibold text-gray-700 mb-3 px-2">Seleccionar Paleta de Colores</p>
          <div className="space-y-2 max-h-96 overflow-y-auto">
            {palettes.map((palette) => (
              <button
                key={palette.name}
                onClick={() => {
                  switchPalette(palette.name.toLowerCase())
                  setIsOpen(false)
                }}
                className={`w-full text-left px-3 py-3 rounded-lg transition-all border-2 ${
                  paletteName === palette.name.toLowerCase()
                    ? 'border-gray-400 bg-gray-50'
                    : 'border-transparent hover:bg-gray-50'
                }`}
              >
                {/* Nombre y descripción */}
                <div className="mb-2">
                  <h3 className="font-bold text-gray-900">{palette.name}</h3>
                  <p className="text-xs text-gray-600">{palette.description}</p>
                </div>

                {/* Strip de 5 colores */}
                <div className="w-full h-8 rounded-md overflow-hidden flex mb-2 shadow-sm border border-gray-200">
                  <div
                    className="flex-1"
                    style={{ backgroundColor: palette.color1 }}
                    title="Muy Claro"
                  />
                  <div
                    className="flex-1"
                    style={{ backgroundColor: palette.color2 }}
                    title="Claro"
                  />
                  <div
                    className="flex-1"
                    style={{ backgroundColor: palette.color3 }}
                    title="Medio"
                  />
                  <div
                    className="flex-1"
                    style={{ backgroundColor: palette.color4 }}
                    title="Oscuro"
                  />
                  <div
                    className="flex-1"
                    style={{ backgroundColor: palette.color5 }}
                    title="Muy Oscuro"
                  />
                </div>

                {/* Preview en mini elementos */}
                <div className="flex gap-2 items-center text-xs">
                  <button
                    className="px-2 py-1 rounded text-white text-xs font-medium transition-all hover:shadow-md"
                    style={{ backgroundColor: palette.color4 }}
                  >
                    Botón
                  </button>
                  <div
                    className="px-2 py-1 rounded text-white text-xs"
                    style={{ backgroundColor: palette.color5 }}
                  >
                    Texto
                  </div>
                  <div
                    className="w-5 h-5 rounded"
                    style={{ backgroundColor: palette.color1 }}
                    title="Fondo claro"
                  />
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
