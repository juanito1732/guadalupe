'use client'

import { motion } from 'framer-motion'
import { FaFileAlt, FaClock, FaShieldAlt } from 'react-icons/fa'

const features = [
  {
    icon: FaClock,
    title: '20+ Años de Experiencia',
    description: 'Desde 2004 brindamos asesoramiento y patrocinio jurídico integral en todas nuestras áreas de especialización.'
  },
  {
    icon: FaFileAlt,
    title: 'Especialización Integral',
    description: 'Especialistas en familia, civil y amparos de salud. Desde investigación hasta sentencia, cubrimos todo el proceso.'
  },
  {
    icon: FaShieldAlt,
    title: 'Confidencialidad Garantizada',
    description: 'Protegemos tus datos personales con total discreción. Tu privacidad es nuestra prioridad.'
  },
]

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-c1">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-4">Sobre Nuestro Estudio</h2>
          <p className="text-xl text-c3 max-w-2xl mx-auto">
            Durante más de 20 años hemos ayudado a personas en todo el país a resolver sus problemas de familia, sucesiones y amparos de salud.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 bg-white rounded-lg border border-c2 shadow-sm hover:shadow-xl transition-shadow"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-c4 to-c5 rounded-lg flex items-center justify-center text-white">
                  <feature.icon size={32} />
                </div>
              </div>

              <h3 className="text-xl font-serif font-bold mb-3">
                {feature.title}
              </h3>

              <p className="text-c3">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
