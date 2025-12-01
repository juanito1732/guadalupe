'use client'

import { siteConfig } from '@/data/config'
import { FaInstagram, FaWhatsapp, FaTiktok } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-2">
      <div className="container-custom">
        <div className="flex justify-between items-start gap-8 mb-2">
          {/* Logo & Descripción - IZQUIERDA */}
          <div className="flex-1">
            <img
              src="/logo-estudio-juridico.svg"
              alt="Estudio Jurídico Logo"
              className="h-24 w-auto mb-4"
            />
            <p className="text-gray-300 text-sm leading-snug max-w-sm">
              {siteConfig.description}
            </p>
          </div>

          {/* Navegación + Redes - DERECHA */}
          <div className="flex-1 flex justify-end gap-12">
            {/* Navegación */}
            <div>
              <h4 className="font-bold text-sm mb-2 text-white">Navegación</h4>
              <ul className="space-y-1">
                {siteConfig.nav.map(item => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Redes Sociales */}
            <div>
              <h4 className="font-bold text-sm mb-2 text-white">Redes</h4>
              <div className="flex gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-all duration-300 p-2 rounded-lg hover:bg-blue-600 hover:shadow-lg hover:scale-110"
                  aria-label="Instagram"
                >
                  <FaInstagram size={22} />
                </a>
                <a
                  href="https://wa.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-all duration-300 p-2 rounded-lg hover:bg-blue-600 hover:shadow-lg hover:scale-110"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp size={22} />
                </a>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-all duration-300 p-2 rounded-lg hover:bg-blue-600 hover:shadow-lg hover:scale-110"
                  aria-label="TikTok"
                >
                  <FaTiktok size={22} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-1 text-center text-gray-500 text-xs">
          <p>&copy; 2025 Estudio Jurídico Dra. Guadalupe Juárez. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
