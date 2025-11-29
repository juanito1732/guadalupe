# GUADIS REDESIGN v2.0 - ELITE STANDARDS FROM STARGATE
**Fecha**: 2025-11-13
**Proyecto**: Guadis Landing Page
**Referencia**: https://www.ai-star-gate.com/
**Objetivo**: Elevar calidad a nivel "elite" manteniendo identidad jurídica

---

## 📊 ANÁLISIS COMPARATIVO: GUADIS ACTUAL vs STARGATE ELITE

### GUADIS v1.1.0 (ACTUAL)
```
✅ Fortalezas:
  • Estructura HTML semántica correcta
  • Color palette sereno y profesional
  • SEO básico (meta tags, og:)
  • Responsive design
  • Grid layout para servicios

❌ Limitaciones:
  • SEO limitado (sin JSON-LD schemas)
  • Sin dark mode
  • Sin accesibilidad WCAG formal
  • Fotos de Guadalupe ocupan espacio visual
  • Sin animaciones sofisticadas
  • Tipografía estándar (sin variación estratégica)
  • Sin multi-idioma
  • Arquitectura HTML pura (no SSR/NextJS)
```

### STARGATE (ELITE REFERENCE)
```
✅ Características Premium:
  • Next.js + React + TypeScript (SSR/SSG)
  • 5 JSON-LD schemas (Organization, LocalBusiness, Service, Review, BreadcrumbList)
  • Dark mode con CSS variables
  • WCAG 2.1 AA accessibility compliance
  • Service cards grid (6 items con hover effects)
  • Tech stack carousel (con scroll infinito)
  • "Coming Soon" anticipation pattern
  • Multi-idioma (EN/ES con hreflang)
  • Gradientes sofisticados (azules, purpuras)
  • Trust signals (ratings, founder, global reach)
  • Performance optimized (imágenes lazy load, code splitting)
  • Micro-interactions (button hover, smooth scrolls)
```

---

## 🎯 PLAN DE REDISEÑO GUADIS v2.0

### FASE 1: ARQUITECTURA & SEO (SEMANA 1)
**Objetivo**: Pasar de HTML puro a Next.js con SSR y SEO élite

#### 1.1 Arquitectura Técnica
```
ANTES (v1.1):  HTML + CSS + JS vanilla
DESPUÉS (v2.0): Next.js 14 + React + TypeScript + Tailwind

Beneficios:
✓ SSR (Server-Side Rendering) para SEO perfecto
✓ Componentes reutilizables
✓ Mejor rendimiento (code splitting automático)
✓ Image optimization built-in
✓ Vercel deployment automático con CI/CD
✓ Mejor mantenibilidad
```

**Estructura de carpetas:**
```
/proyectos/guadis/02-FRONTEND/
├── src/
│   ├── app/
│   │   ├── layout.tsx          (Root layout + metadata)
│   │   ├── page.tsx            (Home page)
│   │   ├── globals.css         (Global styles)
│   │   └── opengraph-image.tsx (Dynamic OG images)
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx        (6 service cards)
│   │   ├── Testimonials.tsx
│   │   ├── CTA.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── data/
│   │   ├── config.ts           (Global config + JSON-LD)
│   │   ├── services.ts         (6 servicios legales)
│   │   ├── testimonials.ts
│   │   └── content.es.ts       (Spanish content)
│   ├── lib/
│   │   └── utils.ts
│   └── styles/
│       └── globals.css
├── public/
│   ├── images/
│   │   ├── logo.svg
│   │   ├── favicon.ico
│   │   └── og-image.jpg
│   └── fonts/
├── next.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

#### 1.2 JSON-LD Schemas (5 tipos)
**Implementación SEO élite con structured data**

```typescript
// Esquema 1: Organization
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Estudio Jurídico Dra. Guadalupe Juárez",
  "url": "https://guadis.com.ar",
  "logo": "https://guadis.com.ar/logo.svg",
  "description": "Estudio jurídico especializado en derecho de familia...",
  "sameAs": ["https://facebook.com/guadis", "https://linkedin.com/company/guadis"],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Service",
    "telephone": "+54-11-XXXX-XXXX",
    "email": "contacto@guadis.com.ar"
  }
}

// Esquema 2: LocalBusiness
{
  "@type": "LocalBusiness",
  "name": "Estudio Jurídico Dra. Guadalupe Juárez",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Balcarce 50",
    "addressLocality": "Buenos Aires",
    "addressCountry": "AR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "-34.6037",
    "longitude": "-58.3816"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "09:00",
    "closes": "18:00"
  }
}

// Esquema 3: Service (x6 servicios)
{
  "@type": "Service",
  "name": "Derecho de Familia",
  "description": "Asesoramiento integral...",
  "provider": {
    "@type": "Organization",
    "name": "Estudio Jurídico Dra. Guadalupe Juárez"
  }
}

// Esquema 4: Review (Testimonios)
{
  "@type": "Review",
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "5",
    "bestRating": "5"
  },
  "author": {
    "@type": "Person",
    "name": "Cliente satisfecho"
  },
  "reviewBody": "Excelente atención..."
}

// Esquema 5: BreadcrumbList (Para navegación)
{
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Inicio",
      "item": "https://guadis.com.ar"
    }
  ]
}
```

#### 1.3 Next.js App Router Setup
```typescript
// app/layout.tsx - Root layout con metadata SEO

import { Metadata } from 'next'
import { generateJsonLd } from '@/lib/schema-generator'

export const metadata: Metadata = {
  title: 'Estudio Jurídico Dra. Guadalupe Juárez | Asesoría Legal Elite',
  description: '20+ años de experiencia en derecho de familia, civil y amparos. Asesoría profesional integral.',
  keywords: ['abogada', 'estudio jurídico', 'derecho familia', 'divorcios', 'Buenos Aires'],
  alternates: {
    canonical: 'https://guadis.com.ar',
    languages: {
      es: 'https://guadis.com.ar',
      en: 'https://guadis.com.ar/en'
    }
  },
  openGraph: {
    type: 'website',
    url: 'https://guadis.com.ar',
    title: 'Estudio Jurídico Dra. Guadalupe Juárez',
    description: '20+ años de asesoría legal profesional',
    images: [
      {
        url: 'https://guadis.com.ar/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Estudio Jurídico'
      }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateJsonLd())
          }}
        />
        {/* Dark mode script (no flash) */}
        <script dangerouslySetInnerHTML={{__html: `
          if (localStorage.getItem('theme') === 'dark' ||
              (!localStorage.getItem('theme') &&
               window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
          }
        `}} />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
```

---

### FASE 2: DISEÑO VISUAL & COMPONENTS (SEMANA 2)

#### 2.1 Color Palette v2.0
**Inspirado en StarGate pero adaptado a identidad jurídica**

```css
:root {
  /* Colores primarios - Azules profesionales elegantes */
  --primary-dark: #0f172a;      /* Azul muy oscuro (fondo hero dark mode) */
  --primary: #1e3a5f;           /* Azul profesional oscuro */
  --primary-light: #3b5998;     /* Azul medio */
  --primary-lighter: #5a8fa3;   /* Azul claro (actual) */

  /* Acentos - Toques de contraste sutil */
  --accent: #d4a574;            /* Gold/bronce (trust, professional) */
  --accent-light: #e8c4a0;      /* Gold más claro */

  /* Neutros */
  --dark: #0f172a;
  --dark-light: #1e293b;
  --text-primary: #0f172a;
  --text-secondary: #475569;
  --bg-light: #ffffff;
  --bg-gray: #f8fafc;
  --bg-dark: #0f172a;
  --border: #e2e8f0;

  /* Status + Success */
  --success: #10b981;
  --warning: #f59e0b;
  --error: #ef4444;

  /* Gradientes sofisticados */
  --gradient-hero: linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #3b5998 100%);
  --gradient-accent: linear-gradient(135deg, #d4a574 0%, #e8c4a0 100%);
  --gradient-text: linear-gradient(135deg, #1e3a5f 0%, #5a8fa3 100%);
}

/* Dark mode */
html.dark {
  --text-primary: #f8fafc;
  --text-secondary: #cbd5e1;
  --bg-light: #0f172a;
  --bg-gray: #1e293b;
  --border: #334155;
}
```

#### 2.2 Typography Strategy
**Jerarquía profesional con Google Fonts**

```typescript
// next.config.ts
import { withNextVideo } from "next-video/process"

export default withNextVideo(
  {
    experimental: {
      optimizePackageImports: ["@/components"]
    }
  },
  {
    font: [
      {
        src: "./fonts/inter-var.woff2",
        variable: "--font-sans",
        weight: "100 900"
      },
      {
        src: "./fonts/playfair-display.woff2",
        variable: "--font-serif",
        weight: "400 700"
      }
    ]
  }
)

// CSS
:root {
  --font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", "Inter", sans-serif;
  --font-serif: "Playfair Display", Georgia, serif;
}

/* Tipografía jerarquía */
h1 {
  font-family: var(--font-serif);
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

h2 {
  font-family: var(--font-serif);
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 700;
}

body {
  font-family: var(--font-sans);
  font-size: 1rem;
  line-height: 1.6;
}
```

#### 2.3 Service Cards (6 Servicios Legales)
**SIN fotos de personas - Solo iconografía y contenido**

```typescript
// data/services.ts
export const services = [
  {
    id: 'derecho-familia',
    title: 'Derecho de Familia',
    description: 'Asesoramiento integral en divorcios, alimentos, tenencia y custodias.',
    icon: 'family',
    features: ['Divorcios contenciosos', 'Acuerdos familiares', 'Tenencia y custodia', 'Alimentos']
  },
  {
    id: 'sucesiones',
    title: 'Sucesiones y Herencias',
    description: 'Gestión completa de procesos sucesorios y distribución de bienes.',
    icon: 'scales',
    features: ['Tramitación sucesoria', 'Testamentos', 'Distribución de bienes', 'Impugnaciones']
  },
  {
    id: 'amparos-salud',
    title: 'Amparos de Salud',
    description: 'Defensa de derechos de salud mediante acciones constitucionales.',
    icon: 'shield-health',
    features: ['Amparos de salud', 'Acceso a medicamentos', 'Tratamientos', 'Derechos constitucionales']
  },
  {
    id: 'derecho-civil',
    title: 'Derecho Civil General',
    description: 'Asesoría en materia civil, contratos y obligaciones.',
    icon: 'document',
    features: ['Contratos', 'Responsabilidad civil', 'Obligaciones', 'Negociaciones']
  },
  {
    id: 'litigio',
    title: 'Litigio y Patrocinio',
    description: 'Patrocinio integral en procesos judiciales.',
    icon: 'gavel',
    features: ['Defensa en juicio', 'Recursos', 'Apelaciones', 'Representación judicial']
  },
  {
    id: 'asesoramiento',
    title: 'Asesoramiento Legal',
    description: 'Consultoría preventiva y orientación legal estratégica.',
    icon: 'lightbulb',
    features: ['Consultoría', 'Análisis legal', 'Estrategia jurídica', 'Preventiva']
  }
];

// components/Services.tsx
'use client'

import { services } from '@/data/services'
import ServiceCard from '@/components/ServiceCard'

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 bg-gray-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-4">Nuestros Servicios</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Soluciones legales integrales para todos tus necesidades jurídicas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}

// components/ServiceCard.tsx
'use client'

import { motion } from 'framer-motion'
import { getServiceIcon } from '@/lib/icons'

export default function ServiceCard({ service }) {
  return (
    <motion.div
      whileHover={{ translateY: -8 }}
      className="p-8 bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-slate-700 hover:shadow-xl transition-shadow"
    >
      <div className="mb-6">
        <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center text-white">
          {getServiceIcon(service.icon)}
        </div>
      </div>

      <h3 className="text-xl font-serif font-bold mb-3 dark:text-white">
        {service.title}
      </h3>

      <p className="text-gray-600 dark:text-gray-300 mb-6">
        {service.description}
      </p>

      <ul className="space-y-3">
        {service.features.map((feature, idx) => (
          <li key={idx} className="flex items-start">
            <span className="text-blue-600 mr-3 font-bold">•</span>
            <span className="text-sm text-gray-700 dark:text-gray-400">
              {feature}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}
```

#### 2.4 Hero Section (Sin Fotos)
**Diseño similar a StarGate - impacto visual con gradientes**

```typescript
// components/Hero.tsx
'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 opacity-90" />

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full opacity-10 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500 rounded-full opacity-5 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 h-screen flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <p className="text-blue-200 text-lg font-semibold tracking-widest uppercase mb-6">
            Asesoría Jurídica Profesional
          </p>

          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
            Tu Abogada de Confianza
          </h1>

          <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
            Con 20+ años de experiencia resolviendo casos de familia, sucesiones y amparos de salud.
            Profesionalismo, integridad y resultados.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold rounded-lg hover:shadow-xl transition-all"
          >
            Solicita Consulta Gratuita
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-center"
      >
        <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  )
}
```

---

### FASE 3: DARK MODE & ACCESSIBILITY (SEMANA 2-3)

#### 3.1 Dark Mode Implementation
```typescript
// lib/theme-provider.tsx
'use client'

import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext<any>(null)

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem('theme')
    const preferred = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    const theme = saved || preferred
    setTheme(theme)
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [])

  const toggle = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
  }

  if (!mounted) return children

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
```

#### 3.2 WCAG 2.1 AA Compliance
```typescript
// Estructura accesible

<button
  aria-label="Solicitar consulta"
  className="focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
  onClick={handleClick}
>
  Solicita Consulta
</button>

// Link con aria-current
<nav aria-label="Navegación principal">
  <a href="/" aria-current="page">Inicio</a>
  <a href="/#about">Sobre</a>
</nav>

// Contraste WCAG
// Texto: #0f172a sobre #ffffff = 13.8:1 ✅
// Texto: #ffffff sobre #0f172a = 13.8:1 ✅

// Skip link
<a href="#main-content" className="sr-only focus:not-sr-only">
  Skip to main content
</a>
```

---

### FASE 4: OPTIMIZACIONES & PERFORMANCE (SEMANA 3)

#### 4.1 Image Optimization
```typescript
// next.config.ts
{
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.example.com'
      }
    ]
  }
}

// Uso en componentes
import Image from 'next/image'

<Image
  src="/logo.svg"
  alt="Estudio Jurídico Logo"
  width={200}
  height={60}
  priority
/>

// Lazy loading
<Image
  src="/service-icon.svg"
  alt="Servicio"
  loading="lazy"
/>
```

#### 4.2 Performance Metrics Goal
```
Lighthouse Targets (v2.0):
✓ Performance:     95+ (up from 85)
✓ Accessibility:   95+ (new)
✓ Best Practices:  95+ (up from 90)
✓ SEO:            100 (up from 95)

Core Web Vitals:
✓ LCP: < 2.5s
✓ FID: < 100ms
✓ CLS: < 0.1
```

---

## 📋 COMPARATIVA VISUAL: ESTRUCTURA COMPONENTES

### Antes (v1.1.0):
```
Header
├─ Logo
└─ Nav (5 links)

Hero
├─ Texto
├─ Foto Guadalupe (ELIMINAR)
└─ CTA Button

About
├─ Intro
├─ 3-Column Features
│  ├─ Icon + Text
│  ├─ Icon + Text
│  └─ Icon + Text
└─ Foto Guadalupe (ELIMINAR)

Services
├─ 6 Cards
│  └─ Icon + Title + Description

Testimonials
├─ 3 Testimonios con fotos

Contact
├─ Formulario

Footer
```

### Después (v2.0):
```
Header (Sticky)
├─ Logo
├─ Nav (5 links)
├─ Dark mode toggle
└─ Responsive hamburger

Hero (FULL-HEIGHT, SIN FOTOS)
├─ Animated gradient background
├─ Large headline (serif)
├─ Subheadline
├─ CTA button (con hover effect)
└─ Scroll indicator (animated)

About
├─ Headline
├─ Description
├─ 3-Column Grid (SIN FOTOS)
│  ├─ Icon (color gradient)
│  ├─ Title
│  ├─ Description
│  └─ Hover effect

Services (CARD GRID)
├─ Grid 3 columns (responsive)
├─ 6 Service Cards (HOVER ELEVATION)
│  ├─ Icon (gradient background)
│  ├─ Title
│  ├─ Description
│  ├─ Feature bullets
│  └─ Smooth hover animation

Testimonials (SLIDER)
├─ Title + Description
├─ Carousel (swipeable)
│  ├─ Avatar (initials, no photos)
│  ├─ Nombre
│  ├─ Profesión
│  ├─ Rating (5 stars)
│  └─ Quote

CTA Section
├─ Big headline
├─ Primary button
└─ Secondary link

Contact
├─ Form (email, message)
├─ Contact info (phone, address)
└─ Social links

Footer
├─ Logo
├─ Links (3 columns)
├─ Social
└─ Copyright + Legal
```

---

## 🔧 IMPLEMENTACIÓN TIMELINE

```
SEMANA 1 (Nov 13-19):
✅ Setup Next.js 14 project structure
✅ Implement layout.tsx con metadata
✅ Create 5 JSON-LD schemas
✅ Setup TypeScript + Tailwind
✅ Create data/ folder with content

SEMANA 2 (Nov 20-26):
✅ Build Navbar component (sticky + dark toggle)
✅ Build Hero component (SIN fotos)
✅ Build About component (SIN fotos)
✅ Build Services component (6 cards)
✅ Create ServiceCard with animations
✅ Implement dark mode provider

SEMANA 3 (Nov 27-Dec 3):
✅ Build Testimonials carousel
✅ Build Contact form
✅ Build CTA section
✅ Build Footer
✅ WCAG 2.1 AA compliance check
✅ Performance optimization
✅ Lighthouse audit

DEPLOYMENT:
✅ Push to GitHub
✅ Deploy to Vercel (automatic)
✅ Setup custom domain
✅ SSL certificate
✅ Monitor performance
```

---

## ✨ DIFERENCIALES ELITE vs ESTÁNDAR

| Aspecto | v1.1.0 (Estándar) | v2.0 (Elite) |
|---------|-------------------|-------------|
| **Framework** | HTML puro | Next.js SSR |
| **SEO** | Meta tags básicos | 5 JSON-LD schemas + SSR |
| **Dark Mode** | No | Sí (con toggle) |
| **Accessibility** | No formal | WCAG 2.1 AA |
| **Animations** | CSS básicas | Framer Motion |
| **Responsivo** | Sí | Sí + Mobile-first |
| **Fotos** | 2 de Guadalupe | 0 (iconografía) |
| **Performance** | 85 Lighthouse | 95+ Lighthouse |
| **Tipografía** | Sistema | Serif + Sans estratégico |
| **Gradientes** | Sutiles | Sofisticados (multi-color) |
| **Icons** | SVG simples | Iconografía profesional |
| **Micro-interactions** | Mínimas | Botones, cards, hover |
| **Arquitectura** | Monolítica | Componentes reutilizables |
| **Mantenibilidad** | Difícil (contenido en HTML) | Fácil (contenido en JSON) |

---

## 🎯 OBJETIVO FINAL

**Guadis v2.0** será una landing page de **nivel elite** que:

✅ Cumple todos los estándares de StarGate
✅ Posiciona a Dra. Guadalupe como abogada premium
✅ Implementa SEO perfecto para posicionamiento
✅ Accesible para todos los usuarios
✅ Rendimiento optimizado (95+ Lighthouse)
✅ Completamente mantenible por contenido en JSON
✅ Sin dependencia de fotos (iconografía profesional)
✅ Dark mode para preferencia de usuarios
✅ Deployment automático con Vercel + GitHub

---

## 📞 PRÓXIMOS PASOS

1. ✅ Usuario revisa este documento
2. ⏳ Confirmar estructura y cambios
3. ⏳ Iniciar setup de Next.js (SEMANA 1)
4. ⏳ Build componentes (SEMANA 2)
5. ⏳ QA + deployment (SEMANA 3)
