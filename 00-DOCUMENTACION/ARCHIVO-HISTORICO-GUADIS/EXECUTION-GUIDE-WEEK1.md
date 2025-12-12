# GUADIS v2.0 - EXECUTION GUIDE (WEEK 1)
**Semana 1: Setup Técnico + Arquitectura**

---

## 📅 TIMELINE ESTA SEMANA

| Día | Tarea | Duración | Estado |
|-----|-------|----------|--------|
| Hoy (Nov 13) | ✅ Documentación completada | ~2h | ✅ DONE |
| Nov 14 | Next.js setup + Estructura | ~4h | ⏳ PENDING |
| Nov 15 | Components base + Routing | ~3h | ⏳ PENDING |
| Nov 16 | JSON-LD Schemas implementation | ~2h | ⏳ PENDING |
| Nov 17 | Tailwind setup + Color system | ~3h | ⏳ PENDING |
| Nov 18 | Home page structure + Navbar | ~3h | ⏳ PENDING |
| Nov 19 | Testing + Performance check | ~2h | ⏳ PENDING |

---

## 🚀 PASO 1: SETUP INICIAL DE NEXT.JS (Nov 14 - Mañana)

### Paso 1.1: Crear proyecto Next.js

```bash
# Ubicación: /home/juani/Desktop/OSIRIS/proyectos/guadis/

# Eliminar estructura vieja (conservar documentación)
cd /home/juani/Desktop/OSIRIS/proyectos/guadis
rm -rf 02-FRONTEND  # ⚠️ CUIDADO: Backup primero si hay contenido importante

# Crear nuevo proyecto Next.js 14 con TypeScript
npx create-next-app@latest 02-FRONTEND \
  --typescript \
  --tailwind \
  --eslint \
  --src-dir \
  --app \
  --no-git \
  --import-alias '@/*'

# Entrar en directorio
cd 02-FRONTEND
```

**Respuestas a las preguntas:**
```
✓ TypeScript: Yes
✓ ESLint: Yes
✓ Tailwind CSS: Yes
✓ src/ directory: Yes
✓ App Router: Yes (no pages/)
✓ Import alias: Yes (@/*)
✓ Reset defaults: No
```

### Paso 1.2: Estructura de carpetas

```bash
# Crear estructura de carpetas
mkdir -p src/components
mkdir -p src/data
mkdir -p src/lib
mkdir -p src/styles
mkdir -p public/images
mkdir -p public/fonts

# Eliminar archivos innecesarios
rm -f src/app/page.tsx
rm -f src/app/globals.css
rm -rf src/app/api

# Crear .gitignore apropiado
cat > .gitignore << 'EOF'
# Dependencies
node_modules/
.pnp
.pnp.js

# Testing
coverage/

# Next.js
.next/
out/

# Production
build/
dist/

# Misc
.env.local
.env.*.local
*.pem

# Debug
npm-debug.log*
yarn-debug.log*

# IDE
.vscode/
.idea/
*.swp
*.swo
*~

# OS
.DS_Store
Thumbs.db
EOF
```

### Paso 1.3: Instalar dependencias adicionales

```bash
npm install \
  framer-motion \
  react-icons \
  clsx

npm install --save-dev \
  @types/node \
  typescript
```

**Qué instala:**
- `framer-motion`: Animaciones sofisticadas
- `react-icons`: Icons profesionales
- `clsx`: Conditional classnames
- Types para TypeScript

---

## 🎨 PASO 2: SETUP DE TAILWIND & COLOR SYSTEM (Nov 15)

### Paso 2.1: Configurar Tailwind

```bash
# Editar tailwind.config.ts
```

**Contenido de `tailwind.config.ts`:**

```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Azules profesionales
        'primary-dark': '#0f172a',
        'primary': '#1e3a5f',
        'primary-light': '#3b5998',
        'primary-lighter': '#5a8fa3',

        // Acentos
        'accent': '#d4a574',
        'accent-light': '#e8c4a0',

        // Neutros
        'dark': '#0f172a',
        'dark-light': '#1e293b',
        'text-primary': '#0f172a',
        'text-secondary': '#475569',
      },
      fontFamily: {
        'serif': ['"Playfair Display"', 'Georgia', 'serif'],
        'sans': ['"Inter"', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      fontSize: {
        'h1': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h2': ['2.25rem', { lineHeight: '1.2' }],
        'h3': ['1.5rem', { lineHeight: '1.3' }],
      },
      animation: {
        'scroll-down': 'scroll-down 2s infinite',
      },
      keyframes: {
        'scroll-down': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(10px)' },
        },
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #3b5998 100%)',
        'gradient-accent': 'linear-gradient(135deg, #d4a574 0%, #e8c4a0 100%)',
      },
    },
  },
  plugins: [],
}
export default config
```

### Paso 2.2: Crear archivo global styles

**Archivo: `src/app/globals.css`**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Typography */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

/* Root styles */
:root {
  --primary-dark: #0f172a;
  --primary: #1e3a5f;
  --primary-light: #3b5998;
  --accent: #d4a574;
}

html {
  scroll-behavior: smooth;
}

body {
  @apply font-sans text-text-primary bg-white dark:bg-dark transition-colors duration-300;
}

/* Dark mode */
html.dark {
  @apply bg-dark-light;
}

/* Utilities */
.container-custom {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}

.heading-serif {
  @apply font-serif font-bold tracking-tight;
}

.section-padding {
  @apply py-20 px-4;
}

/* Smooth scroll behavior */
@supports (scroll-behavior: smooth) {
  html {
    scroll-behavior: smooth;
  }
}

/* Focus visible for accessibility */
:focus-visible {
  @apply outline-none ring-2 ring-primary ring-offset-2 dark:ring-offset-dark-light;
}

/* Selection color */
::selection {
  @apply bg-primary text-white;
}
```

---

## 📋 PASO 3: ESTRUCTURA DE DATOS (Nov 16)

### Paso 3.1: Crear config y datos

**Archivo: `src/data/config.ts`**

```typescript
export const siteConfig = {
  name: 'Estudio Jurídico Dra. Guadalupe Juárez',
  shortName: 'Guadis',
  description: '20+ años de experiencia en asesoría legal profesional',
  url: 'https://guadis.com.ar',
  ogImage: 'https://guadis.com.ar/og-image.jpg',
  locale: 'es-AR',

  // Contact info
  contact: {
    email: 'contacto@guadis.com.ar',
    phone: '+54 (11) XXXX-XXXX', // Update with real number
    address: 'Balcarce 50, Buenos Aires, Argentina',
    hours: 'Lun-Vie 9:00 a 18:00 hs',
  },

  // Social links
  social: {
    facebook: 'https://facebook.com/guadis',
    linkedin: 'https://linkedin.com/company/guadis',
  },

  // Navigation
  nav: [
    { name: 'Inicio', href: '#hero' },
    { name: 'Sobre Nosotros', href: '#about' },
    { name: 'Servicios', href: '#services' },
    { name: 'Testimonios', href: '#testimonials' },
    { name: 'Contacto', href: '#contact' },
  ],
}

export const generateJsonLd = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.svg`,
    description: siteConfig.description,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      telephone: siteConfig.contact.phone,
      email: siteConfig.contact.email,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Balcarce 50',
      addressLocality: 'Buenos Aires',
      postalCode: '1425',
      addressCountry: 'AR',
    },
    areaServed: 'AR',
    sameAs: [
      siteConfig.social.facebook,
      siteConfig.social.linkedin,
    ],
  }
}
```

**Archivo: `src/data/services.ts`**

```typescript
export interface Service {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
}

export const services: Service[] = [
  {
    id: 'derecho-familia',
    title: 'Derecho de Familia',
    description: 'Asesoramiento integral en divorcios, alimentos, tenencia y custodias con soluciones personalizadas.',
    icon: 'family',
    features: [
      'Divorcios contenciosos y consensuales',
      'Acuerdos familiares',
      'Tenencia y custodia',
      'Cuota de alimentos',
    ],
  },
  {
    id: 'sucesiones',
    title: 'Sucesiones y Herencias',
    description: 'Gestión completa de procesos sucesorios y distribución equitativa de bienes.',
    icon: 'scales',
    features: [
      'Tramitación sucesoria',
      'Redacción de testamentos',
      'Distribución de bienes',
      'Impugnaciones testamentarias',
    ],
  },
  {
    id: 'amparos-salud',
    title: 'Amparos de Salud',
    description: 'Defensa de derechos de salud mediante acciones constitucionales efectivas.',
    icon: 'shield',
    features: [
      'Amparos de salud',
      'Acceso a medicamentos',
      'Tratamientos especializados',
      'Derechos constitucionales',
    ],
  },
  {
    id: 'derecho-civil',
    title: 'Derecho Civil General',
    description: 'Asesoría en materia civil, contratos, obligaciones y negociaciones comerciales.',
    icon: 'document',
    features: [
      'Redacción de contratos',
      'Responsabilidad civil',
      'Obligaciones comerciales',
      'Negociaciones y mediación',
    ],
  },
  {
    id: 'litigio',
    title: 'Litigio y Patrocinio',
    description: 'Patrocinio integral en procesos judicales con estrategia legal efectiva.',
    icon: 'gavel',
    features: [
      'Defensa en juicio',
      'Recursos y apelaciones',
      'Representación judicial',
      'Estrategia litigiosa',
    ],
  },
  {
    id: 'asesoramiento',
    title: 'Asesoramiento Legal',
    description: 'Consultoría preventiva y orientación legal estratégica para tu tranquilidad.',
    icon: 'lightbulb',
    features: [
      'Consultoría preventiva',
      'Análisis legal profundo',
      'Estrategia jurídica',
      'Asesoramiento empresarial',
    ],
  },
]
```

**Archivo: `src/data/testimonials.ts`**

```typescript
export interface Testimonial {
  id: string
  name: string
  profession: string
  quote: string
  rating: number
  initials: string
}

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'Juan Martínez',
    profession: 'Contador',
    quote: 'Excelente atención profesional. Me ayudó a resolver mi caso de familia en forma rápida y eficiente. Muy recomendable.',
    rating: 5,
    initials: 'JM',
  },
  {
    id: 'testimonial-2',
    name: 'María González',
    profession: 'Docente',
    quote: 'Muy profesional y dedicada. Explicó cada paso del proceso con claridad. Quedé muy satisfecha con los resultados.',
    rating: 5,
    initials: 'MG',
  },
  {
    id: 'testimonial-3',
    name: 'Carlos Rodríguez',
    profession: 'Empresario',
    quote: 'Soluciones legales rápidas y confiables. Trabajar con ella ha sido un alivio en tiempos difíciles.',
    rating: 5,
    initials: 'CR',
  },
]
```

---

## 🏗️ PASO 4: LAYOUT Y METADATA (Nov 17)

### Paso 4.1: Root Layout

**Archivo: `src/app/layout.tsx`**

```typescript
import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import { siteConfig, generateJsonLd } from '@/data/config'
import ThemeProvider from '@/components/ThemeProvider'

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-serif',
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Asesoría Legal Profesional`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  keywords: [
    'abogada',
    'estudio jurídico',
    'derecho de familia',
    'divorcios',
    'sucesiones',
    'amparos de salud',
    'Buenos Aires',
    'Argentina',
  ],
  authors: [
    {
      name: 'Dra. Guadalupe Juárez',
      url: siteConfig.url,
    },
  ],
  creator: 'Dra. Guadalupe Juárez',
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#1e3a5f" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateJsonLd()),
          }}
          suppressHydrationWarning
        />
      </head>
      <body className={`${playfair.variable} ${inter.variable}`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
```

---

## ✅ CHECKLIST SEMANA 1

```
☐ Nov 14: Next.js setup completado
  ☐ Proyecto creado con estructura correcta
  ☐ Dependencias instaladas
  ☐ Folder structure creada

☐ Nov 15: Tailwind y color system
  ☐ tailwind.config.ts actualizado
  ☐ globals.css creado
  ☐ Color palette definida
  ☐ Tipografía configurada

☐ Nov 16: Datos y configuración
  ☐ config.ts con metadata
  ☐ services.ts con 6 servicios
  ☐ testimonials.ts con testimon

ios
  ☐ JSON-LD schemas funcionando

☐ Nov 17: Layout y metadata
  ☐ layout.tsx completado
  ☐ Metadata SEO perfecta
  ☐ Dark mode provider creado
  ☐ Fonts configurados

☐ Nov 18-19: Testing y QA
  ☐ npm run build exitoso
  ☐ npm run dev funciona
  ☐ Lighthouse > 90 en local
  ☐ TypeScript sin errores
```

---

## 🔗 PRÓXIMAS FASES

**SEMANA 2 (Nov 20-26):**
- Build Navbar component (sticky + dark toggle)
- Build Hero component (SIN fotos)
- Build About, Services, Testimonials components
- Implement Framer Motion animations

**SEMANA 3 (Nov 27-Dec 3):**
- Build Contact form
- WCAG 2.1 AA compliance
- Performance optimization
- Lighthouse audit

**DEPLOYMENT:**
- Push a GitHub
- Deploy a Vercel (automático)
- Custom domain
- SSL certificate

---

## 📝 NOTAS IMPORTANTES

1. **NO FOTOS**: Eliminar completamente cualquier foto de Guadalupe
2. **Iconografía**: Usar react-icons para todos los icons
3. **Dark Mode**: Implementado desde el principio con `darkMode: 'class'`
4. **Performance**: Optimize images, lazy load, code splitting
5. **Accesibilidad**: WCAG 2.1 AA compliance desde el inicio
6. **Testing**: `npm run build` debe pasar sin warnings

---

## 🎯 OBJETIVO FIN DE SEMANA

**El sábado (Nov 19), tener:**
- ✅ Proyecto Next.js funcionando
- ✅ Estructura de carpetas correcta
- ✅ Datos organizados en JSON
- ✅ Metadata SEO perfecta
- ✅ Color system listo
- ✅ Layout base preparado
- ✅ Listo para empezar a construir componentes
