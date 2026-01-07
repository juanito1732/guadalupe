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
    <section id="about" className="scroll-mt-24 sm:scroll-mt-28 md:scroll-mt-32 py-12 sm:py-16 md:py-20 px-4 bg-c1">
      <div className="container-custom">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-serif font-bold mb-3 sm:mb-4">{content.about.title}</h2>
          <div className="max-w-4xl mx-auto px-2">
            <p className={`text-justify text-base sm:text-lg md:text-xl text-c4 ${!isExpanded ? 'line-clamp-3' : ''}`}>
              {content.about.description}
            </p>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-4 px-4 py-2 text-sm sm:text-base font-semibold text-c5 hover:text-c6 transition-colors duration-200"
            >
              {isExpanded ? 'Leer menos' : 'Leer más'}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-start">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 sm:p-8 bg-white rounded-lg border border-c2 shadow-sm hover:shadow-xl transition-shadow flex flex-col"
            >
              <div className="flex justify-center mb-4 sm:mb-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-c4 to-c5 rounded-lg flex items-center justify-center text-white">
                  <feature.icon size={28} />
                </div>
              </div>

              <h3 className="text-center text-lg sm:text-xl font-serif font-bold mb-2 sm:mb-3">
                {feature.title}
              </h3>

              <p className={`text-justify text-sm sm:text-base text-c4 leading-relaxed flex-grow ${idx === 1 && !expandedFeatures[idx] && feature.description.length > 150 ? 'line-clamp-3' : ''}`}>
                {feature.description}
              </p>

              {idx === 1 && feature.description.length > 150 && (
                <button
                  onClick={() => toggleFeature(idx)}
                  className="mt-4 text-sm font-semibold text-c5 hover:text-c6 transition-colors duration-200 self-center"
                >
                  {expandedFeatures[idx] ? 'Leer menos ←' : 'Leer más →'}
                </button>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
