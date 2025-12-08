'use client'

import { motion } from 'framer-motion'

export default function SectionDivider() {
  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="h-1 w-full bg-gradient-to-r from-transparent via-c3 to-transparent"
    />
  )
}
