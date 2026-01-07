'use client'

import Script from 'next/script'
import { content } from '@/data/content'

export default function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-24 sm:scroll-mt-28 md:scroll-mt-32 py-12 sm:py-16 md:py-20 px-4 bg-white">
      <div className="container-custom">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-serif font-bold mb-3 sm:mb-4">{content.testimonials.title}</h2>
          <p className="text-base sm:text-lg md:text-xl text-c4 px-2">
            {content.testimonials.description}
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
