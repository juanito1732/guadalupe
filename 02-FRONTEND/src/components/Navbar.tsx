'use client'

import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { siteConfig } from '@/data/config'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed w-full z-50 bg-white border-b border-gray-50 shadow-sm">
      <div className="container-custom h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="/logo-estudio-juridico.svg"
            alt="Estudio Jurídico Logo"
            className="h-28 w-auto"
            style={{ filter: 'invert(14%) sepia(98%) saturate(1200%) hue-rotate(202deg) brightness(90%) contrast(110%)' }}
          />
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {siteConfig.nav.map(item => (
            <a
              key={item.href}
              href={item.href}
              className="text-text-primary hover:text-primary transition-colors duration-200"
            >
              {item.name}
            </a>
          ))}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <FaTimes className="text-text-primary" size={24} />
          ) : (
            <FaBars className="text-text-primary" size={24} />
          )}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container-custom py-4 space-y-3">
            {siteConfig.nav.map(item => (
              <a
                key={item.href}
                href={item.href}
                className="block text-text-primary hover:text-primary py-2 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
