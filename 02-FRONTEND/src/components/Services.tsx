'use client'

import { content } from '@/data/content'
import ServiceCard from './ServiceCard'

export default function Services() {
  return (
    <section id="services" className="scroll-mt-24 sm:scroll-mt-28 md:scroll-mt-32 py-14 sm:py-18 md:py-24 px-4 bg-white">
      <div className="container-custom">
        <div className="mb-11 sm:mb-14 md:mb-18">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-serif font-bold mb-4 sm:mb-5 text-center">{content.services.title}</h2>
          <p className="text-base sm:text-lg md:text-xl text-c4 max-w-2xl mx-auto px-2 text-justify whitespace-pre-line mb-5">
            {content.services.description}
          </p>
          <h3 className="text-2xl xs:text-3xl sm:text-4xl font-serif font-bold text-center text-c5 mt-7">
            {content.services.subtitle}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 sm:gap-11 md:gap-14">
          {content.services.list.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}
