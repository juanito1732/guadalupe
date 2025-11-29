# 🏛️ Guadis - Estudio Jurídico Dra. Guadalupe Juárez

**Landing Page Profesional | Next.js 14 + React 18 + TypeScript + Tailwind CSS**

**Versión:** 2.0.0
**Status:** ✅ Production Ready
**Live:** https://guadis-landing.vercel.app
**Repository:** https://github.com/juanito1732/guadis-landing

---

## 📋 Índice

- [Descripción](#descripción)
- [Características](#características)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Instalación y Setup](#instalación-y-setup)
- [Desarrollo Local](#desarrollo-local)
- [Deployment en Vercel](#deployment-en-vercel)
- [Actualización de Datos del Cliente](#actualización-de-datos-del-cliente)
- [Sistema de Paletas de Colores](#sistema-de-paletas-de-colores)
- [Documentación](#documentación)

---

## 📖 Descripción

**Guadis** es una landing page profesional para el Estudio Jurídico Dra. Guadalupe Juárez.

**Características clave:**
- ✅ Diseño moderno y responsivo
- ✅ 4 paletas de colores intercambiables
- ✅ SEO optimizado (JSON-LD, Open Graph, sitemap)
- ✅ Accesibilidad WCAG 2.1 AA
- ✅ Performance optimizado (Core Web Vitals verde)
- ✅ Formulario de contacto con validación
- ✅ Testimonios carousel
- ✅ Dark mode support

---

## ✨ Características

### Secciones
1. **Navbar** - Navegación responsive con logo
2. **Hero** - Sección principal con animaciones
3. **About** - Información sobre Dra. Guadalupe Juárez
4. **Services** - 6 servicios legales (Familia, Sucesiones, Amparos, Civil, Litigio, Asesoramiento)
5. **Testimonials** - Carousel con 4 testimonios
6. **Contact** - Formulario de contacto con validación email
7. **Footer** - Links, horarios, redes sociales

### Funcionalidades
- 🎨 **Selector de Paletas**: 4 temas de color (Azules, Earth, Rosa, Gris)
- 💾 **Persistencia**: localStorage guarda preferencias del usuario
- 📱 **Mobile-First**: Responsive en todos los dispositivos
- 🔒 **Seguridad**: Headers HTTPS, no datos sensibles expuestos
- 🌙 **Dark Mode**: Soporte completo para modo oscuro

---

## 📁 Estructura del Proyecto

```
/guadis/
├── 02-FRONTEND/                    [CÓDIGO PRINCIPAL]
│   ├── src/
│   │   ├── app/
│   │   │   ├── layout.tsx          [Root layout con SEO]
│   │   │   ├── page.tsx            [Página principal]
│   │   │   ├── sitemap.ts          [Sitemap XML]
│   │   │   └── globals.css         [Estilos globales]
│   │   ├── components/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── ServiceCard.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── Contact.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── ThemeProvider.tsx
│   │   │   └── PaletteSwitcher.tsx
│   │   ├── data/
│   │   │   ├── config.ts           [Configuración sitio]
│   │   │   ├── services.ts         [Servicios legales]
│   │   │   ├── testimonials.ts     [Testimonios]
│   │   │   └── palettes.ts         [Paletas de colores]
│   │   ├── hooks/
│   │   │   └── usePalette.ts       [Hook para paletas]
│   │   └── lib/
│   ├── public/
│   │   ├── logo-estudio-juridico.svg
│   │   ├── favicon.png
│   │   └── images/
│   ├── package.json
│   ├── tsconfig.json
│   ├── next.config.js
│   ├── tailwind.config.ts
│   ├── postcss.config.js
│   ├── .env.local                  [Dev environment]
│   └── .env.production.local       [Production environment]
│
├── 01-DISENO/                      [Assets y mockups]
│   ├── assets/
│   ├── mockups/
│   └── wireframes/
│
├── 00-DOCUMENTACION/               [Documentación]
│
├── vercel.json                     [Configuración Vercel]
├── package.json                    [Raíz - no usado]
└── README.md                       [Este archivo]
```

---

## 🚀 Instalación y Setup

### Requisitos previos
- Node.js 18+
- npm o yarn
- Git

### 1. Clonar el repositorio
```bash
git clone https://github.com/juanito1732/guadis-landing.git
cd guadis-landing/02-FRONTEND
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Verificar variables de entorno
```bash
cat .env.local
# Output:
# NEXT_PUBLIC_SITE_URL=http://localhost:3000
# NEXT_PUBLIC_SITE_NAME=Guadis (Dev)
```

### 4. Iniciar servidor de desarrollo
```bash
npm run dev
# Abre http://localhost:3000
```

---

## 💻 Desarrollo Local

### Comandos principales
```bash
# Desarrollo
npm run dev          # Servidor en modo hot-reload

# Build
npm run build        # Compilar para producción
npm start            # Iniciar servidor producción

# Linting
npm run lint         # Verificar ESLint
```

### Estructura de componentes
Cada componente sigue este patrón:
```typescript
'use client'  // Client component para interactividad

interface ComponentProps {
  // Props tipadas
}

export default function Component({ ...props }: ComponentProps) {
  // Lógica del componente
  return (
    <motion.div>  {/* Framer Motion para animaciones */}
      {/* JSX limpio y semántico */}
    </motion.div>
  )
}
```

### Agregar nuevas secciones
1. Crear componente en `src/components/`
2. Importar en `src/app/page.tsx`
3. Agregar estilos Tailwind
4. Usar paletas de colores: `bg-c1`, `text-c5`, etc.

---

## 🌍 Deployment en Vercel

### Configuración actual
- **Build Command:** `cd 02-FRONTEND && npm run build`
- **Output Directory:** `02-FRONTEND/.next`
- **Environment:** Variables configuradas en dashboard de Vercel

### Variables de entorno en producción
```bash
NEXT_PUBLIC_SITE_URL=https://guadis-landing.vercel.app
NEXT_PUBLIC_SITE_NAME=Guadis
```

### Deploy automático
1. Hacer cambios en rama `main`
2. Hacer `git push`
3. Vercel detecta cambios automáticamente
4. Build inicia en 30 segundos
5. Deploy en vivo en 2-5 minutos

### Verificar deploy
```bash
# Ver estado en dashboard
https://vercel.com/juanito1732/guadis-landing

# Logs de build
https://vercel.com/juanito1732/guadis-landing/deployments
```

---

## 📝 Actualización de Datos del Cliente

### Información del cliente
Ubicación: `02-FRONTEND/src/data/config.ts`

```typescript
export const siteConfig = {
  name: 'Estudio Jurídico Dra. Guadalupe Juárez',
  description: '20+ años de experiencia...',
  contact: {
    email: 'contacto@guadis.com.ar',
    phone: '+54 (11) XXXX-XXXX',  // Actualizar
    address: 'Balcarce 50, Buenos Aires'
  },
  nav: [...],
  social: {
    facebook: 'URL',
    linkedin: 'URL'
  }
}
```

### Campos editable
- **name**: Nombre del estudio
- **description**: Descripción corta
- **contact.email**: Email de contacto
- **contact.phone**: Teléfono
- **contact.address**: Dirección
- **social.facebook**: URL Facebook
- **social.linkedin**: URL LinkedIn

**Actualizar después de cambios:**
```bash
npm run build  # Compilar localmente
git add -A
git commit -m "update: Datos del cliente"
git push origin main  # Vercel despliega automáticamente
```

---

## 🎨 Sistema de Paletas de Colores

### 4 Paletas disponibles

**1. Azules** (Predeterminada)
- Colors: #E8F5FD → #1B5B7E
- Profesional, confía, limpio

**2. Earth**
- Colors: #E9D2C0 → #8D4424
- Cálido, natural, acogedor

**3. Rosa**
- Colors: #9DB8D6 → #E963A7
- Moderno, dinámico, energético

**4. Gris**
- Colors: #DABEB6 → #7A8D9B
- Elegante, sobrio, clásico

### Cómo funciona
1. Usuario hace click en botón 🎨 (abajo derecha)
2. Selector muestra 4 paletas con preview
3. Al seleccionar, se aplican CSS variables
4. Se guarda en localStorage
5. Al recargar, mantiene la selección

### Usar colores en componentes
```typescript
// En Tailwind
<div className="bg-c1 text-c5">  {/* Paleta dinámica */}
  <button className="bg-c4 hover:bg-c5">Botón</button>
</div>

// Acceso directo a paletas
import { PALETTES } from '@/data/palettes'
const azulespalette = PALETTES.azules
```

---

## 📚 Documentación

### Archivos importantes
- **LEER-PRIMERO.md** - Guía para principiantes
- **QUICK-REFERENCE-JAMES.md** - Referencia rápida para desarrolladores
- **GUIA-ACTUALIZACION-DATOS-CLIENTE.md** - Cómo actualizar datos
- **RESUMEN-AUDITORIA-JAMES-WEB.md** - Auditoría técnica completa
- **AUDITORIA-TECNICA-PROFUNDA.md** - Análisis técnico detallado

### Links externos
- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Framer Motion](https://www.framer.com/motion/)

---

## ✅ Checklist para deployment

- [ ] Actualizar datos del cliente en `config.ts`
- [ ] Verificar teléfono y email
- [ ] Probar formulario de contacto
- [ ] Cambiar paleta en sitio local
- [ ] `npm run build` sin errores
- [ ] `npm run lint` sin warnings
- [ ] Hacer `git push`
- [ ] Verificar deploy en Vercel (2-5 min)
- [ ] Probar sitio en vivo
- [ ] Verificar SEO en Google Search Console

---

## 🐛 Troubleshooting

### Build falla localmente
```bash
# Limpiar cache
npm run clean
rm -rf .next node_modules
npm install
npm run build
```

### Cambios no aparecen en Vercel
```bash
# Asegurar que estás en rama main
git branch

# Hacer push explícitamente
git add -A
git commit -m "fix: descripción"
git push origin main

# Verificar en dashboard de Vercel
https://vercel.com/juanito1732/guadis-landing
```

### Paletas no se aplican
- Limpiar localStorage: `localStorage.clear()`
- Refrescar navegador: Ctrl+Shift+R (hard refresh)
- Verificar que `usePalette` hook esté importado en `page.tsx`

---

## 📊 Performance

### Metrics (Lighthouse)
- Performance: 95+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

### Optimizaciones
- ✅ Next.js Image component para imágenes
- ✅ Static generation (SSG) para páginas
- ✅ SWC minification habilitado
- ✅ CSS-in-JS con Tailwind (no CSS adicional)
- ✅ Code splitting automático

---

## 🔐 Seguridad

### Headers de seguridad
```javascript
// next.config.js
headers: [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-XSS-Protection', value: '1; mode=block' }
]
```

### Validación
- ✅ Email validation en formulario
- ✅ No datos sensibles en código
- ✅ HTTPS en producción
- ✅ CSP headers configurados

---

## 📞 Contacto y Soporte

**Para actualizaciones de contenido:** Ver `GUIA-ACTUALIZACION-DATOS-CLIENTE.md`
**Para problemas técnicos:** Ver `AUDITORIA-TECNICA-PROFUNDA.md`
**Para guía rápida:** Ver `QUICK-REFERENCE-JAMES.md`

---

**Versión:** 2.0.0
**Última actualización:** 19 Nov 2025
**Status:** ✅ Production Ready

