'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { testimonials } from '@/data/testimonials'
import TestimonialCard from './TestimonialCard'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((current + 1) % testimonials.length)
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length)

  return (
    <section id="testimonials" className="py-12 sm:py-16 md:py-20 px-4 bg-c1">
      <div className="container-custom">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-serif font-bold mb-3 sm:mb-4">¿Qué Dicen Nuestros Clientes?</h2>
          <p className="text-base sm:text-lg md:text-xl text-c4 px-2">
            Confían en nuestro profesionalismo y dedicación
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative px-8 xs:px-10 sm:px-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
              >
                <TestimonialCard testimonial={testimonials[current]} />
              </motion.div>
            </AnimatePresence>

            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 p-2 hover:bg-c2 rounded-full transition-colors touch-manipulation"
              aria-label="Previous testimonial"
            >
              <FaChevronLeft size={20} className="text-c4 sm:w-6 sm:h-6" />
            </button>

            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 p-2 hover:bg-c2 rounded-full transition-colors touch-manipulation"
              aria-label="Next testimonial"
            >
              <FaChevronRight size={20} className="text-c4 sm:w-6 sm:h-6" />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-6 sm:mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`h-2 rounded-full transition-all touch-manipulation ${
                  idx === current
                    ? 'w-8 bg-c4'
                    : 'w-2 bg-c2'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
