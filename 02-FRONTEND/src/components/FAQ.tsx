'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: '¿Qué se incluye en el derecho de familia?',
    answer: 'El derecho de familia regula aspectos como el matrimonio, el divorcio, la guarda y custodia de los hijos, los regímenes de comunicación, la adopción, las obligaciones alimentarias y las sucesiones. También aborda uniones convivenciales y pactos de convivencia.',
  },
  {
    question: '¿Qué diferencia hay entre guarda y patria potestad?',
    answer: 'La guarda se refiere al cuidado diario y la convivencia con los hijos menores, mientras que la patria potestad es el conjunto de derechos y deberes que los padres tienen sobre la persona y los bienes de sus hijos, como tomar decisiones importantes sobre su educación o salud.',
  },
  {
    question: '¿Cómo se determinan los alimentos en favor de los hijos?',
    answer: 'El monto de los alimentos depende de las necesidades del menor y de la capacidad económica de quien debe proveerlos. Se evalúan aspectos como educación, vivienda, salud, vestimenta y recreación. En caso de desacuerdo, un juez puede establecer el monto.',
  },
  {
    question: '¿Es obligatorio realizar un acuerdo prenupcial o pacto de convivencia?',
    answer: 'No es obligatorio, pero es recomendable para parejas que deseen regular aspectos económicos y patrimoniales antes o durante la convivencia. Estos acuerdos pueden evitar conflictos futuros y brindar claridad en caso de separación.',
  },
  {
    question: '¿Qué se puede hacer si una de las partes incumple con las obligaciones alimentarias?',
    answer: 'Si alguien incumple con el pago de la cuota alimentaria, se puede solicitar la ejecución judicial de la obligación. El juez puede ordenar embargos, retenciones salariales o incluso sanciones más severas en casos extremos de incumplimiento.',
  },
]

function FAQCard({ faq, index }: { faq: FAQItem; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="p-8 sm:p-10 bg-c1 rounded-xl border-2 border-c3 shadow-md hover:shadow-xl transition-all duration-300 hover:border-c4 flex flex-col"
    >
      <h3 className="text-center text-lg sm:text-xl font-serif font-bold mb-4 sm:mb-5 text-c5 min-h-[72px] sm:min-h-[78px] flex items-center justify-center">
        {faq.question}
      </h3>

      <div className={`mb-6 sm:mb-7 ${!isExpanded ? 'h-[69px] sm:h-[78px]' : ''}`}>
        <p className={`text-left text-sm sm:text-base text-c4 leading-relaxed ${!isExpanded ? 'line-clamp-3' : ''}`}>
          {faq.answer}
        </p>
      </div>

      <div className="flex justify-center">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="px-4 py-2 text-sm font-bold text-c5 hover:text-c4 transition-colors duration-200"
        >
          {isExpanded ? 'Leer menos' : 'Leer más'}
        </button>
      </div>
    </motion.div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="scroll-mt-24 sm:scroll-mt-28 md:scroll-mt-32 py-16 sm:py-20 md:py-28 px-4 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-serif font-bold mb-5 sm:mb-6 text-c5">
            Preguntas Frecuentes
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 md:gap-16 items-start">
          {faqs.map((faq, index) => (
            <FAQCard key={index} faq={faq} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
