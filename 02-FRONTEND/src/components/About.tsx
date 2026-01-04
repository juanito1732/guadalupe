'use client'

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
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 px-4 bg-c1">
      <div className="container-custom">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-serif font-bold mb-3 sm:mb-4">{content.about.title}</h2>
          <p className="text-base sm:text-lg md:text-xl text-c4 max-w-2xl mx-auto px-2">
            {content.about.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 sm:p-8 bg-white rounded-lg border border-c2 shadow-sm hover:shadow-xl transition-shadow"
            >
              <div className="mb-4 sm:mb-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-c4 to-c5 rounded-lg flex items-center justify-center text-white">
                  <feature.icon size={28} />
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-serif font-bold mb-2 sm:mb-3">
                {feature.title}
              </h3>

              <p className="text-sm sm:text-base text-c4 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
