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
    <section id="testimonials" className="py-20 px-4 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-4">¿Qué Dicen Nuestros Clientes?</h2>
          <p className="text-xl text-gray-600">
            Confían en nuestro profesionalismo y dedicación
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
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
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 md:-translate-x-20 p-2 hover:bg-white rounded-full transition-colors"
              aria-label="Previous testimonial"
            >
              <FaChevronLeft size={24} className="text-primary" />
            </button>

            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 md:translate-x-20 p-2 hover:bg-white rounded-full transition-colors"
              aria-label="Next testimonial"
            >
              <FaChevronRight size={24} className="text-primary" />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`h-2 rounded-full transition-all ${
                  idx === current
                    ? 'w-8 bg-primary'
                    : 'w-2 bg-gray-300'
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
