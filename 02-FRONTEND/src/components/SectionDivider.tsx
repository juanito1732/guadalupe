'use client'

import { motion } from 'framer-motion'

export default function SectionDivider() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="w-full h-16 bg-gradient-to-b from-transparent via-c1 to-transparent"
      style={{
        WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 50%, transparent)',
        maskImage: 'linear-gradient(to bottom, transparent, black 50%, transparent)',
      }}
    />
  )
}
