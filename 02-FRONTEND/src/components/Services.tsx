'use client'

import { services } from '@/data/services'
import ServiceCard from './ServiceCard'

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-4">Nuestros Servicios</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Soluciones legales integrales para todos tus necesidades jurídicas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}
