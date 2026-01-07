'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Service } from '@/data/services'
import ServiceIcon from './ServiceIcon'

export default function ServiceCard({ service }: { service: Service }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const MAX_CHARS = 200
  const shouldTruncate = service.description.length > MAX_CHARS
  const displayText = !isExpanded && shouldTruncate
    ? service.description.substring(0, MAX_CHARS) + '...'
    : service.description

  return (
    <motion.div
      whileHover={{ translateY: -10 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className="p-8 sm:p-10 bg-c1 rounded-xl border-2 border-c3 shadow-md hover:shadow-xl transition-all duration-300 hover:border-c4 flex flex-col h-full"
    >
      <div className="mb-6 sm:mb-8 flex justify-center">
        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-c4 rounded-xl flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-shadow hover:bg-c5">
          <ServiceIcon type={service.iconType} size={28} />
        </div>
      </div>

      <h3 className="text-center text-lg sm:text-xl font-serif font-bold mb-4 sm:mb-5 text-c5">
        {service.title}
      </h3>

      <div className="mb-7 sm:mb-8">
        <p className={`text-justify text-sm sm:text-base text-c4 leading-relaxed ${!isExpanded ? 'line-clamp-4' : ''}`}>
          {service.description}
        </p>
      </div>

      {shouldTruncate && (
        <div className="flex justify-center mb-7 sm:mb-8">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="px-4 py-2 text-sm font-bold text-c5 hover:text-c4 transition-colors duration-200"
          >
            {isExpanded ? 'Leer menos' : 'Leer más'}
          </button>
        </div>
      )}

      <ul className="space-y-4 sm:space-y-5 flex flex-col items-center mt-auto">
        {service.features.map((feature, idx) => (
          <li key={idx} className="flex items-start text-justify">
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
