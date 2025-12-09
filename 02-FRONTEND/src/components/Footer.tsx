'use client'

import { siteConfig } from '@/data/config'
import { FaInstagram, FaWhatsapp, FaTiktok, FaFacebook } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-c5 text-white py-2">
      <div className="container-custom">
        <div className="flex items-center justify-between gap-8 mb-2">
          {/* Logo & Descripción - IZQUIERDA */}
          <div className="flex items-center gap-4">
            <img
              src="/logo-estudio-juridico-white.svg"
              alt="Estudio Jurídico Logo"
              className="h-32 w-auto flex-shrink-0"
            />
            <p className="text-c2 text-sm leading-snug max-w-xs">
              {siteConfig.description}
            </p>
          </div>

          {/* Redes Sociales - DERECHA */}
          <div className="flex items-center gap-4 flex-shrink-0">
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-c2 hover:text-white transition-all duration-300 p-2 rounded-lg hover:bg-c4 hover:shadow-lg hover:scale-110"
              aria-label="TikTok"
            >
              <FaTiktok size={22} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-c2 hover:text-white transition-all duration-300 p-2 rounded-lg hover:bg-c4 hover:shadow-lg hover:scale-110"
              aria-label="Facebook"
            >
              <FaFacebook size={22} />
            </a>
            <a
              href="https://wa.me"
              target="_blank"
              rel="noopener noreferrer"
              className="text-c2 hover:text-white transition-all duration-300 p-2 rounded-lg hover:bg-c4 hover:shadow-lg hover:scale-110"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={22} />
            </a>
          </div>
        </div>

        <div className="border-t border-c3 pt-1 text-center text-c2 text-xs">
          <p>&copy; 2025 Estudio Jurídico Dra. Guadalupe Juárez. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
