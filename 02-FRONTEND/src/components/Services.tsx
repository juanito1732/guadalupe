'use client'

import { services } from '@/data/services'
import { content } from '@/data/content'
import ServiceCard from './ServiceCard'

export default function Services() {
  return (
    <section id="services" className="scroll-mt-24 sm:scroll-mt-28 md:scroll-mt-32 py-12 sm:py-16 md:py-20 px-4 bg-c1">
      <div className="container-custom">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-serif font-bold mb-3 sm:mb-4">{content.services.title}</h2>
          <p className="text-base sm:text-lg md:text-xl text-c4 max-w-2xl mx-auto px-2">
            {content.services.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}
