'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaFileAlt, FaClock, FaShieldAlt } from 'react-icons/fa'
import { content } from '@/data/content'

const iconMap = {
  0: FaClock,
  1: FaFileAlt,
  2: FaShieldAlt,
}

const features = content.about.features.map((feature, idx) => ({
  ...feature,
  icon: iconMap[idx as keyof typeof iconMap],
}))

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [expandedFeatures, setExpandedFeatures] = useState<boolean[]>([false, false, false])

  const toggleFeature = (index: number) => {
    setExpandedFeatures(prev => {
      const newState = [...prev]
      newState[index] = !newState[index]
      return newState
    })
  }

  return (
    <section id="about" className="scroll-mt-24 sm:scroll-mt-28 md:scroll-mt-32 py-16 sm:py-20 md:py-28 px-4 bg-c1">
      <div className="container-custom">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-serif font-bold mb-5 sm:mb-6 whitespace-pre-line">{content.about.title}</h2>
          <h3 className="text-2xl xs:text-3xl sm:text-4xl font-serif font-bold mb-8 sm:mb-10 text-c5">{content.about.subtitle}</h3>

          <div className="max-w-4xl mx-auto px-2">
            {/* Primer bloque de texto */}
            <p className={`text-left text-base sm:text-lg md:text-xl text-c4 whitespace-pre-line mb-8 ${!isExpanded ? 'line-clamp-3' : ''}`}>
              {content.about.description1}
            </p>

            {isExpanded && (
              <>
                {/* Subtítulo intermedio */}
                <h4 className="text-2xl xs:text-3xl sm:text-4xl font-serif font-bold mb-6 text-c5">
                  {content.about.subtitle2}
                </h4>

                {/* Segundo bloque de texto */}
                <p className="text-left text-base sm:text-lg md:text-xl text-c4 whitespace-pre-line">
                  {content.about.description2}
                </p>
              </>
            )}

            <div className="flex justify-center">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-6 px-4 py-2 text-sm font-bold text-c5 hover:text-c4 transition-colors duration-200"
              >
                {isExpanded ? 'Leer menos' : 'Leer más'}
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 md:gap-16 items-stretch">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 sm:p-10 bg-white rounded-lg border border-c2 shadow-sm hover:shadow-xl transition-shadow flex flex-col h-full"
            >
              <div className="flex justify-center mb-6 sm:mb-8">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-c4 to-c5 rounded-lg flex items-center justify-center text-white">
                  <feature.icon size={28} />
                </div>
              </div>

              <h3 className="text-center text-lg sm:text-xl font-serif font-bold mb-4 sm:mb-5">
                {feature.title}
              </h3>

              <p className={`text-left text-sm sm:text-base text-c4 leading-relaxed flex-grow ${(idx === 1 || idx === 2) && !expandedFeatures[idx] && feature.description.length > 150 ? 'line-clamp-3' : ''}`}>
                {feature.description}
              </p>

              {(idx === 1 || idx === 2) && feature.description.length > 150 && (
                <div className="flex justify-center">
                  <button
                    onClick={() => toggleFeature(idx)}
                    className="mt-6 px-4 py-2 text-sm font-bold text-c5 hover:text-c4 transition-colors duration-200"
                  >
                    {expandedFeatures[idx] ? 'Leer menos' : 'Leer más'}
                  </button>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
