'use client'

import { content } from '@/data/content'
import ServiceCard from './ServiceCard'

export default function Services() {
  return (
    <section id="services" className="scroll-mt-24 sm:scroll-mt-28 md:scroll-mt-32 py-16 sm:py-20 md:py-28 px-4 bg-white">
      <div className="container-custom">
        <div className="mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-serif font-bold mb-5 sm:mb-6 text-center">{content.services.title}</h2>
          <p className="text-base sm:text-lg md:text-xl text-c4 max-w-2xl mx-auto px-2 text-left whitespace-pre-line mb-6">
            {content.services.description}
          </p>
          <h3 className="text-2xl xs:text-3xl sm:text-4xl font-serif font-bold text-center text-c5 mt-8">
            {content.services.subtitle}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 md:gap-16 items-start">
          {content.services.list.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}
