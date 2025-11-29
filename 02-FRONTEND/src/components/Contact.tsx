'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaPhone, FaEnvelope, FaMapPin, FaClock } from 'react-icons/fa'
import { siteConfig } from '@/data/config'

interface ContactFormData {
  email: string
  message: string
}

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({ email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [emailError, setEmailError] = useState(false)

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateEmail(formData.email)) {
      setEmailError(true)
      setTimeout(() => setEmailError(false), 3000)
      return
    }

    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ email: '', message: '' })
  }

  return (
    <section id="contact" className="py-20 px-4 bg-c1">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-4 text-c5">Contactanos</h2>
          <p className="text-xl text-c3">
            Estamos aquí para ayudarte. Dejanos tus consultas
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-c5 mb-2">
                  Tu Email *
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="ejemplo@correo.com"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full px-6 py-3 border-2 rounded-lg bg-white text-c5 placeholder-c2 focus:outline-none transition-all ${
                    emailError ? 'border-red-500 focus:ring-2 focus:ring-red-500' : 'border-c3 focus:border-c4 focus:ring-2 focus:ring-c4 focus:ring-opacity-20'
                  }`}
                  aria-describedby={emailError ? "email-error" : undefined}
                />
                {emailError && (
                  <p id="email-error" className="text-red-600 text-sm mt-1 font-semibold">
                    Por favor ingresa un email válido
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-c5 mb-2">
                  Tu Mensaje *
                </label>
                <textarea
                  id="message"
                  placeholder="Cuéntanos cómo podemos ayudarte..."
                  rows={6}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-6 py-3 border-2 border-c3 rounded-lg bg-white text-c5 placeholder-c2 focus:outline-none focus:border-c4 focus:ring-2 focus:ring-c4 focus:ring-opacity-20 transition-all"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full py-3 bg-c4 hover:bg-c5 text-white font-bold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg focus:ring-2 focus:ring-offset-2 focus:ring-c4"
                aria-label="Enviar consulta"
              >
                Enviar Consulta
              </motion.button>

              {submitted && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-600 font-semibold text-center"
                  role="status"
                  aria-live="polite"
                >
                  ✓ Consulta enviada correctamente
                </motion.p>
              )}
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="flex gap-4 p-6 bg-white rounded-lg border-2 border-c3 hover:border-c4 transition-all">
              <FaPhone size={24} className="text-c4 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-lg text-c5 mb-1">Teléfono</h4>
                <p className="text-c3">{siteConfig.contact.phone}</p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-white rounded-lg border-2 border-c3 hover:border-c4 transition-all">
              <FaEnvelope size={24} className="text-c4 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-lg text-c5 mb-1">Email</h4>
                <p className="text-c3">{siteConfig.contact.email}</p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-white rounded-lg border-2 border-c3 hover:border-c4 transition-all">
              <FaMapPin size={24} className="text-c4 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-lg text-c5 mb-1">Dirección</h4>
                <p className="text-c3">{siteConfig.contact.address}</p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-white rounded-lg border-2 border-c3 hover:border-c4 transition-all">
              <FaClock size={24} className="text-c4 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-lg text-c5 mb-1">Horario</h4>
                <p className="text-c3">{siteConfig.contact.hours}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
