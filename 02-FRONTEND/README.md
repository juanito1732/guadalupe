# Guadis v2.0 - Landing Page

Estudio Jurídico Dra. Guadalupe Juárez - Sitio web profesional construido con Next.js 14, React 18 y Tailwind CSS.

## Características

- Next.js 14 con App Router
- TypeScript para type safety
- Tailwind CSS para estilos modernos
- Framer Motion para animaciones suaves
- React Icons para iconografía profesional
- Dark mode con persistencia
- Responsive design (mobile-first)
- SEO optimizado con JSON-LD schemas
- WCAG 2.1 AA accesibilidad

## Requisitos

- Node.js 18+
- npm 9+

## Instalación

```bash
cd 02-FRONTEND
npm install
```

## Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) para ver el resultado.

## Build para Producción

```bash
npm run build
npm start
```

## Estructura de Carpetas

```
src/
├── app/                 # Rutas y layout
├── components/          # Componentes React
├── data/               # Datos y configuración
├── styles/             # Estilos globales
└── lib/                # Funciones auxiliares

public/
├── images/             # Imágenes optimizadas
└── fonts/              # Fuentes personalizadas
```

## Componentes

- **Navbar**: Navegación con dark mode toggle
- **Hero**: Sección principal con CTA
- **About**: Información del estudio
- **Services**: 6 servicios principales con tarjetas
- **Testimonials**: Carrusel de testimonios
- **Contact**: Formulario de contacto + información
- **Footer**: Pie de página con enlaces

## Deployment

### Vercel

```bash
npm install -g vercel
vercel
```

La aplicación se desplegará automáticamente en Vercel con preview deployments en cada push a GitHub.

## SEO

- Open Graph tags configurados
- Twitter Card integrado
- JSON-LD schemas para Organization, LocalBusiness, Service
- Sitemap automático
- robots.txt configurado

## Licencia

Todos los derechos reservados - Estudio Jurídico Dra. Guadalupe Juárez
