'use client'

import { motion } from 'framer-motion'
import { FaChevronDown } from 'react-icons/fa'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen pt-40 overflow-hidden flex items-center">
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />

      <div className="absolute top-20 right-10 w-96 h-96 bg-c4 rounded-full opacity-10 blur-[120px]" />
      <div className="absolute bottom-0 left-20 w-96 h-96 bg-c2 rounded-full opacity-5 blur-[120px]" />

      <div className="relative z-10 container-custom w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <p className="text-c2 text-lg font-semibold tracking-widest uppercase mb-6">
            Asesoría Jurídica Profesional
          </p>

          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
            Tu Abogada de Confianza
          </h1>

          <p className="text-xl text-c2 mb-8 leading-relaxed max-w-xl">
            Con 20+ años de experiencia resolviendo casos de familia, sucesiones y amparos de salud.
            Profesionalismo, integridad y resultados.
          </p>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-c4 to-c5 text-white font-bold rounded-lg hover:shadow-2xl transition-all"
          >
            Solicita Consulta Gratuita
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-center"
      >
        <FaChevronDown size={24} className="animate-bounce" />
      </motion.div>
    </section>
  )
}
