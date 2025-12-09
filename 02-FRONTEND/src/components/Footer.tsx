'use client'

import { siteConfig } from '@/data/config'

export default function Footer() {
  return (
    <footer className="bg-c5 text-white py-2">
      <div className="container-custom">
        <div className="flex items-center gap-4 mb-2">
          {/* Logo & Descripción */}
          <img
            src="/logo-estudio-juridico-white.svg"
            alt="Estudio Jurídico Logo"
            className="h-32 w-auto flex-shrink-0"
          />
          <p className="text-c2 text-sm leading-snug">
            {siteConfig.description}
          </p>
        </div>

        <div className="border-t border-c3 pt-1 text-center text-c2 text-xs">
          <p>&copy; 2025 Estudio Jurídico Dra. Guadalupe Juárez. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
