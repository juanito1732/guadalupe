'use client'

import { services } from '@/data/services'
import ServiceCard from './ServiceCard'

export default function Services() {
  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 px-4 bg-c1">
      <div className="container-custom">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-serif font-bold mb-3 sm:mb-4">Nuestros Servicios</h2>
          <p className="text-base sm:text-lg md:text-xl text-c3 max-w-2xl mx-auto px-2">
            Soluciones legales integrales para todos tus necesidades jurídicas
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
