'use client'

import { useState } from 'react'
import { content } from '@/data/content'

export default function MyStory() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <section id="my-story" className="scroll-mt-24 sm:scroll-mt-28 md:scroll-mt-32 py-12 sm:py-16 md:py-20 px-4 bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-serif font-bold mb-6 sm:mb-8 text-center">
            {content.myStory.title}
          </h2>

          <div className="prose prose-lg max-w-none">
            <p className={`text-justify text-base sm:text-lg text-c4 leading-relaxed whitespace-pre-line ${!isExpanded ? 'line-clamp-6' : ''}`}>
              {content.myStory.content}
            </p>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-6 px-6 py-3 text-sm sm:text-base font-semibold text-c5 hover:text-white hover:bg-c5 border-2 border-c5 rounded-lg transition-all duration-300"
            >
              {isExpanded ? 'Leer menos' : 'Leer más'}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
