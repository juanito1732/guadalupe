'use client'

import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { siteConfig } from '@/data/config'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed w-full z-50 bg-c1 border-b border-c2 shadow-sm">
      <div className="container-custom h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="/logo-estudio-juridico-blue.svg"
            alt="Estudio Jurídico Logo"
            className="h-28 w-auto"
          />
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {siteConfig.nav.map(item => (
            <a
              key={item.href}
              href={item.href}
              className="text-c5 hover:text-c4 transition-colors duration-200"
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
            <FaTimes className="text-c5" size={24} />
          ) : (
            <FaBars className="text-c5" size={24} />
          )}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-c3">
          <div className="container-custom py-4 space-y-3">
            {siteConfig.nav.map(item => (
              <a
                key={item.href}
                href={item.href}
                className="block text-c5 hover:text-c4 py-2 transition-colors duration-200"
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
