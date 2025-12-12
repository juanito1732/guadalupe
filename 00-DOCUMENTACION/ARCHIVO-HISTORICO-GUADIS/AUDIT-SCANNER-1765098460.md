# 🔍 REPORTE DE ESCANEO EXHAUSTIVO - GUADALUPE
**Fecha**: Sun Dec  7 06:07:40 AM -03 2025
**Repositorio**: /home/juani/Desktop/OSIRIS/proyectos/guadalupe

## 📊 ESTADÍSTICAS GENERALES

### Estructura de Directorios
Archivos de código encontrados: 37

### Líneas de Código por Tipo
**TypeScript/TSX:**
 1347 total
**JSON:**
  6723 total
**YAML/YML:**
  361 total

## 🔴 ERRORES CRÍTICOS
### TypeScript Errors
npm warn exec The following package was not found and will be installed: tsc@2.0.4

[41m                                                                               [0m
[41m[37m                This is not the tsc command you are looking for                [0m
[41m                                                                               [0m

To get access to the TypeScript compiler, [34mtsc[0m, from the command line either:

- Use [1mnpm install typescript[0m to first add TypeScript to your project [1mbefore[0m using npx
- Use [1myarn[0m to avoid accidentally running code from un-installed packages

### Importaciones Faltantes
/home/juani/Desktop/OSIRIS/proyectos/guadalupe/02-FRONTEND/src/app/layout.tsx:import PaletteInitializer from '@/components/PaletteInitializer'
/home/juani/Desktop/OSIRIS/proyectos/guadalupe/02-FRONTEND/src/app/layout.tsx:import { siteConfig, generateJsonLd } from '@/data/config'
/home/juani/Desktop/OSIRIS/proyectos/guadalupe/02-FRONTEND/src/app/layout.tsx:import ThemeProvider from '@/components/ThemeProvider'
/home/juani/Desktop/OSIRIS/proyectos/guadalupe/02-FRONTEND/src/app/page.tsx:import About from '@/components/About'
/home/juani/Desktop/OSIRIS/proyectos/guadalupe/02-FRONTEND/src/app/page.tsx:import Contact from '@/components/Contact'
/home/juani/Desktop/OSIRIS/proyectos/guadalupe/02-FRONTEND/src/app/page.tsx:import Footer from '@/components/Footer'
/home/juani/Desktop/OSIRIS/proyectos/guadalupe/02-FRONTEND/src/app/page.tsx:import Hero from '@/components/Hero'
/home/juani/Desktop/OSIRIS/proyectos/guadalupe/02-FRONTEND/src/app/page.tsx:import Navbar from '@/components/Navbar'
/home/juani/Desktop/OSIRIS/proyectos/guadalupe/02-FRONTEND/src/app/page.tsx:import Services from '@/components/Services'
/home/juani/Desktop/OSIRIS/proyectos/guadalupe/02-FRONTEND/src/app/page.tsx:import Testimonials from '@/components/Testimonials'
/home/juani/Desktop/OSIRIS/proyectos/guadalupe/02-FRONTEND/src/components/Contact.tsx:import { siteConfig } from '@/data/config'
/home/juani/Desktop/OSIRIS/proyectos/guadalupe/02-FRONTEND/src/components/Footer.tsx:import { siteConfig } from '@/data/config'
/home/juani/Desktop/OSIRIS/proyectos/guadalupe/02-FRONTEND/src/components/Navbar.tsx:import { siteConfig } from '@/data/config'
/home/juani/Desktop/OSIRIS/proyectos/guadalupe/02-FRONTEND/src/components/PaletteInitializer.tsx:import { usePalette } from '@/hooks/usePalette'
/home/juani/Desktop/OSIRIS/proyectos/guadalupe/02-FRONTEND/src/components/PaletteSwitcher.tsx:import { getAllPalettes } from '@/data/palettes'
/home/juani/Desktop/OSIRIS/proyectos/guadalupe/02-FRONTEND/src/components/PaletteSwitcher.tsx:import { usePalette } from '@/hooks/usePalette'
/home/juani/Desktop/OSIRIS/proyectos/guadalupe/02-FRONTEND/src/components/ServiceCard.tsx:import { Service } from '@/data/services'
/home/juani/Desktop/OSIRIS/proyectos/guadalupe/02-FRONTEND/src/components/Services.tsx:import { services } from '@/data/services'
/home/juani/Desktop/OSIRIS/proyectos/guadalupe/02-FRONTEND/src/components/TestimonialCard.tsx:import { Testimonial } from '@/data/testimonials'
/home/juani/Desktop/OSIRIS/proyectos/guadalupe/02-FRONTEND/src/components/Testimonials.tsx:import { testimonials } from '@/data/testimonials'

## ⚠️ ADVERTENCIAS Y PROBLEMAS
### Archivos Sospechosos

### URLs Hardcodeadas
/home/juani/Desktop/OSIRIS/proyectos/guadalupe/02-FRONTEND/src/data/config.ts:5:  url: 'https://guadis-landing.vercel.app',
/home/juani/Desktop/OSIRIS/proyectos/guadalupe/02-FRONTEND/src/data/config.ts:6:  ogImage: 'https://guadis-landing.vercel.app/og-image.jpg',
/home/juani/Desktop/OSIRIS/proyectos/guadalupe/02-FRONTEND/src/data/config.ts:17:    facebook: 'https://facebook.com/estudiolegal.guadalupe',
/home/juani/Desktop/OSIRIS/proyectos/guadalupe/02-FRONTEND/src/data/config.ts:18:    linkedin: 'https://linkedin.com/company/estudio-juridico-guadalupe',
/home/juani/Desktop/OSIRIS/proyectos/guadalupe/02-FRONTEND/src/data/config.ts:32:    '@context': 'https://schema.org',
/home/juani/Desktop/OSIRIS/proyectos/guadalupe/02-FRONTEND/src/components/Footer.tsx:47:                  href="https://instagram.com"
/home/juani/Desktop/OSIRIS/proyectos/guadalupe/02-FRONTEND/src/components/Footer.tsx:56:                  href="https://wa.me"
/home/juani/Desktop/OSIRIS/proyectos/guadalupe/02-FRONTEND/src/components/Footer.tsx:65:                  href="https://tiktok.com"
/home/juani/Desktop/OSIRIS/proyectos/guadalupe/02-FRONTEND/src/app/globals.css:5:@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&display=swap');
/home/juani/Desktop/OSIRIS/proyectos/guadalupe/02-FRONTEND/src/app/globals.css:6:@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
/home/juani/Desktop/OSIRIS/proyectos/guadalupe/02-FRONTEND/src/app/sitemap.ts:6:      url: 'https://guadis.com.ar',
/home/juani/Desktop/OSIRIS/proyectos/guadalupe/02-FRONTEND/src/app/sitemap.ts:12:      url: 'https://guadis.com.ar#hero',
/home/juani/Desktop/OSIRIS/proyectos/guadalupe/02-FRONTEND/src/app/sitemap.ts:18:      url: 'https://guadis.com.ar#about',
/home/juani/Desktop/OSIRIS/proyectos/guadalupe/02-FRONTEND/src/app/sitemap.ts:24:      url: 'https://guadis.com.ar#services',
/home/juani/Desktop/OSIRIS/proyectos/guadalupe/02-FRONTEND/src/app/sitemap.ts:30:      url: 'https://guadis.com.ar#testimonials',
/home/juani/Desktop/OSIRIS/proyectos/guadalupe/02-FRONTEND/src/app/sitemap.ts:36:      url: 'https://guadis.com.ar#contact',

### Dependencias Potencialmente Innecesarias
  "name": "guadis-landing",
  "version": "2.1.0",
  "description": "Estudio Jurídico Dra. Guadalupe Juárez - Landing Page v2.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "next": "^14.0.0",
    "framer-motion": "^10.16.0",
    "react-icons": "^4.12.0",
    "clsx": "^2.0.0"
    "typescript": "^5.3.0",
    "autoprefixer": "^10.4.16",
    "postcss": "^8.4.31",
    "tailwindcss": "^3.3.6",

## ✅ ANÁLISIS COMPLETADO
**Hora de finalización**: Sun Dec  7 06:07:43 AM -03 2025
