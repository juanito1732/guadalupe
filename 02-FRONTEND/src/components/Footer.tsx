'use client'

import Image from 'next/image'
import { siteConfig } from '@/data/config'
import { FaWhatsapp, FaTiktok, FaFacebook } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-c5 text-white py-6 sm:py-8 md:py-4">
      <div className="container-custom px-4 sm:px-6">
        {/* Layout responsive: columna en móvil, fila en desktop */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 mb-4 md:mb-2">
          {/* Logo & Descripción */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left w-full md:w-auto">
            <Image
              src="/logo-estudio-juridico-white.svg"
              alt="Estudio Jurídico Logo"
              width={120}
              height={120}
              className="h-24 sm:h-28 md:h-32 w-auto flex-shrink-0"
            />
            <p className="text-c2 text-xs sm:text-sm leading-tight max-w-sm md:max-w-md lg:max-w-lg">
              {siteConfig.description}
            </p>
          </div>

          {/* Redes Sociales - Touch optimizado */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 flex-shrink-0">
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-c2 hover:text-white transition-all duration-300 p-3 rounded-lg hover:bg-c4 active:bg-c4 hover:shadow-lg active:scale-95 touch-manipulation"
              aria-label="TikTok"
            >
              <FaTiktok size={24} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-c2 hover:text-white transition-all duration-300 p-3 rounded-lg hover:bg-c4 active:bg-c4 hover:shadow-lg active:scale-95 touch-manipulation"
              aria-label="Facebook"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://wa.me/542266481512?text=Hola,%20quisiera%20consultar%20sobre%20asesoría%20legal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-c2 hover:text-white transition-all duration-300 p-3 rounded-lg hover:bg-c4 active:bg-c4 hover:shadow-lg active:scale-95 touch-manipulation"
              aria-label="WhatsApp - Contactar al Estudio"
            >
              <FaWhatsapp size={24} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-c3 pt-3 sm:pt-2 text-center text-c2 text-xs sm:text-sm">
          <p>&copy; 2025 Estudio Jurídico Dra. Guadalupe Juárez. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
