'use client'

import Script from 'next/script'

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-12 sm:py-16 md:py-20 px-4 bg-c1">
      <div className="container-custom">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-serif font-bold mb-3 sm:mb-4">¿Qué Dicen Nuestros Clientes?</h2>
          <p className="text-base sm:text-lg md:text-xl text-c4 px-2">
            Confían en nuestro profesionalismo y dedicación
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Elfsight Google Reviews Widget */}
          <Script
            src="https://elfsightcdn.com/platform.js"
            strategy="lazyOnload"
          />
          <div
            className="elfsight-app-4131096e-6ac0-4360-9fc7-56d0c16d1a6e"
            data-elfsight-app-lazy
          />
        </div>
      </div>
    </section>
  )
}
