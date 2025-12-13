'use client'

import { motion } from 'framer-motion'
import { FaChevronDown } from 'react-icons/fa'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen pt-28 sm:pt-36 md:pt-44 overflow-hidden flex items-center">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />

      {/* Decorative Blurs - Responsive */}
      <div className="absolute top-10 sm:top-20 right-5 sm:right-10 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-c4 rounded-full opacity-10 blur-[80px] sm:blur-[120px]" />
      <div className="absolute bottom-0 left-5 sm:left-20 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-c2 rounded-full opacity-5 blur-[80px] sm:blur-[120px]" />

      <div className="relative z-10 container-custom w-full px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          {/* Subtítulo - Responsive */}
          <p className="text-c2 text-sm sm:text-base md:text-lg font-semibold tracking-wide sm:tracking-widest uppercase mb-4 sm:mb-6">
            Asesoría Jurídica Profesional
          </p>

          {/* Título Principal - Muy responsive */}
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-4 sm:mb-6 leading-tight">
            Tu Abogada de Confianza
          </h1>

          {/* Descripción - Responsive */}
          <p className="text-base sm:text-lg md:text-xl text-c2 mb-6 sm:mb-8 leading-relaxed max-w-xl">
            Con 20+ años de experiencia resolviendo casos de familia, sucesiones y amparos de salud.
            Profesionalismo, integridad y resultados.
          </p>

          {/* CTA Button - Touch optimizado */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-c4 to-c5 text-white font-bold rounded-lg hover:shadow-2xl transition-all text-sm sm:text-base touch-manipulation"
          >
            Solicita Consulta Gratuita
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll Indicator - Oculto en mobile muy pequeño */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="hidden sm:block absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-center"
      >
        <FaChevronDown size={24} className="animate-bounce" />
      </motion.div>
    </section>
  )
}
