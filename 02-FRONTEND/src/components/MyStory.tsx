'use client'

import { useState } from 'react'
import { content } from '@/data/content'

export default function MyStory() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <section id="my-story" className="scroll-mt-24 sm:scroll-mt-28 md:scroll-mt-32 py-16 sm:py-20 md:py-28 px-4 bg-c1">
      <div className="container-custom">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-serif font-bold mb-5 sm:mb-6">
            {content.myStory.title}
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className={`text-left text-base sm:text-lg md:text-xl text-c4 leading-relaxed whitespace-pre-line ${!isExpanded ? 'line-clamp-6' : ''}`}>
              {content.myStory.content}
            </p>

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
      </div>
    </section>
  )
}
