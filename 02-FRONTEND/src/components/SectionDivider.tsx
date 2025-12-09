'use client'

import { motion } from 'framer-motion'

export default function SectionDivider() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="w-full"
      style={{
        height: '64px',
        background: 'linear-gradient(to bottom, rgba(232,245,253,0), rgba(232,245,253,0.3), rgba(232,245,253,0))',
        filter: 'blur(0.5px)',
        pointerEvents: 'none',
      }}
    />
  )
}
