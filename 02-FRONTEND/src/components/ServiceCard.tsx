'use client'

import { motion } from 'framer-motion'
import { Service } from '@/data/services'
import ServiceIcon from './ServiceIcon'

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <motion.div
      whileHover={{ translateY: -10 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className="p-6 sm:p-8 bg-c1 rounded-xl border-2 border-c3 shadow-md hover:shadow-xl transition-all duration-300 hover:border-c4"
    >
      <div className="mb-4 sm:mb-6">
        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-c4 rounded-xl flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-shadow hover:bg-c5">
          <ServiceIcon type={service.iconType} size={28} />
        </div>
      </div>

      <h3 className="text-lg sm:text-xl font-serif font-bold mb-2 sm:mb-3 text-c5">
        {service.title}
      </h3>

      <p className="text-sm sm:text-base text-c3 mb-5 sm:mb-6 leading-relaxed">
        {service.description}
      </p>

      <ul className="space-y-2 sm:space-y-3">
        {service.features.map((feature, idx) => (
          <li key={idx} className="flex items-start">
            <span className="text-c4 mr-2 sm:mr-3 font-bold text-base sm:text-lg flex-shrink-0">✓</span>
            <span className="text-xs sm:text-sm text-c5 leading-relaxed">
              {feature}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}
