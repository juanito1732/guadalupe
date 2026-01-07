'use client'

import Image from 'next/image'
import { siteConfig } from '@/data/config'
import { content } from '@/data/content'
import { FaWhatsapp, FaTiktok, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-c5 text-white py-6 sm:py-8 md:py-4">
      <div className="container-custom px-4 sm:px-6">
        {/* Layout responsive: 3 columnas en desktop */}
        <div className="flex flex-col md:grid md:grid-cols-3 items-center gap-6 md:gap-8 mb-4 md:mb-2">
          {/* Logo - Izquierda */}
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <Image
              src="/logo-estudio-juridico-white.svg"
              alt={content.footer.about.title}
              width={120}
              height={120}
              className="h-24 sm:h-28 md:h-32 w-auto flex-shrink-0"
            />
            {/* Logo Data Fiscal AFIP */}
            <a
              href="http://qr.afip.gob.ar/?qr=dSEHzgWf6BvhK-zuZdBtrw,,"
              target="_F960AFIPInfo"
              className="opacity-80 hover:opacity-100 transition-opacity"
            >
              <img
                src="http://www.afip.gob.ar/images/f960/DATAWEB.jpg"
                alt="Data Fiscal AFIP"
                className="w-12 sm:w-16 h-auto"
              />
            </a>
          </div>

          {/* Descripción - Centro */}
          <div className="flex items-center justify-center">
            <p className="text-c1 text-xs sm:text-sm leading-relaxed text-center max-w-xl md:max-w-2xl lg:max-w-3xl">
              {siteConfig.description}
            </p>
          </div>

          {/* Redes Sociales - Derecha */}
          <div className="flex items-center justify-center md:justify-end gap-3 sm:gap-4 flex-shrink-0">
            <a
              href={siteConfig.social.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="text-c1 hover:text-white transition-all duration-300 p-3 rounded-lg hover:bg-c4 active:bg-c4 hover:shadow-lg active:scale-95 touch-manipulation"
              aria-label="TikTok"
            >
              <FaTiktok size={24} />
            </a>
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-c1 hover:text-white transition-all duration-300 p-3 rounded-lg hover:bg-c4 active:bg-c4 hover:shadow-lg active:scale-95 touch-manipulation"
              aria-label="Facebook"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-c1 hover:text-white transition-all duration-300 p-3 rounded-lg hover:bg-c4 active:bg-c4 hover:shadow-lg active:scale-95 touch-manipulation"
              aria-label="Instagram"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-c1 hover:text-white transition-all duration-300 p-3 rounded-lg hover:bg-c4 active:bg-c4 hover:shadow-lg active:scale-95 touch-manipulation"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://wa.me/542266481512?text=Hola,%20quisiera%20consultar%20sobre%20asesoría%20legal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-c1 hover:text-white transition-all duration-300 p-3 rounded-lg hover:bg-c4 active:bg-c4 hover:shadow-lg active:scale-95 touch-manipulation"
              aria-label="WhatsApp - Contactar al Estudio"
            >
              <FaWhatsapp size={24} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-c3 pt-3 sm:pt-2 text-center text-c1 text-xs sm:text-sm">
          <p>&copy; 2025 Estudio Jurídico Dra. Guadalupe Juárez. {content.footer.copyright.text}</p>
        </div>
      </div>
    </footer>
  )
}
