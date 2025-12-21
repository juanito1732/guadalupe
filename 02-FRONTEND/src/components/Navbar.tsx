'use client'

import { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { siteConfig } from '@/data/config'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Cerrar menú al hacer scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleNavClick = () => {
    setIsOpen(false)
  }

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-c1 shadow-lg' : 'bg-c1 shadow-sm'
      } border-b border-c2`}
    >
      <div className="container-custom h-24 sm:h-28 md:h-32 flex items-center justify-between">
        {/* Logo - Responsive */}
        <a href="#hero" className="flex items-center gap-2 sm:gap-3">
          <Image
            src="/logo-estudio-juridico-blue.svg"
            alt="Estudio Jurídico Logo"
            width={120}
            height={120}
            className="h-24 sm:h-28 md:h-32 w-auto"
            priority
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {siteConfig.nav.map(item => (
            <a
              key={item.href}
              href={item.href}
              className="text-c5 hover:text-c4 transition-colors duration-200 font-medium text-sm lg:text-base"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button - Touch optimizado (44x44px) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-3 -mr-2 touch-manipulation active:scale-95 transition-transform"
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isOpen}
        >
          <motion.div
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {isOpen ? (
              <FaTimes className="text-c5" size={24} />
            ) : (
              <FaBars className="text-c5" size={24} />
            )}
          </motion.div>
        </button>
      </div>

      {/* Mobile Menu - Animado y mejorado */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/20 md:hidden top-24 sm:top-28 md:top-32 z-40"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="md:hidden bg-white border-t-2 border-c3 shadow-2xl relative z-50"
            >
              <div className="container-custom py-6 space-y-1">
                {siteConfig.nav.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="block text-c5 hover:text-white hover:bg-c4 active:bg-c5 px-4 py-4 rounded-lg transition-all duration-200 font-medium text-lg touch-manipulation"
                    onClick={handleNavClick}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  )
}
