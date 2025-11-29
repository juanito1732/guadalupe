# ESPECIFICACIONES - FASE 1 LANDING PAGE
## Guadis - Estudio Jurídico
### Enfoque: Diseño Profesional + Contenido Flexible

---

## 🎯 OBJETIVO PRINCIPAL

**Tomar el HTML existente y transformarlo en un sitio MUCHO más profesional**
- ✅ Contenido ya existe (valioso, bien escrito)
- ✅ Paleta de colores definida (mantener)
- ✅ Logos y assets disponibles
- ❌ Diseño muy básico (necesita mejora)
- ❌ Contenido hardcodeado (necesita separación)

**Resultado:** Landing page profesional + contenido flexible y fácil de cambiar

---

## 🏗️ ARQUITECTURA - CONTENIDO SEPARADO DEL CÓDIGO

### Estructura de Carpetas Next.js

```
guadis/
├── src/
│   ├── app/
│   │   ├── page.tsx          (Home - componente principal)
│   │   ├── layout.tsx        (Layout global)
│   │   └── globals.css       (Estilos globales)
│   │
│   ├── components/
│   │   ├── Header.tsx        (Navbar)
│   │   ├── Hero.tsx          (Hero section)
│   │   ├── About.tsx         (Sobre Guadalupe)
│   │   ├── Services.tsx      (Servicios)
│   │   ├── Testimonials.tsx  (Testimonios)
│   │   ├── Contact.tsx       (Formulario)
│   │   └── Footer.tsx        (Footer)
│   │
│   └── data/                 ⭐ IMPORTANTE: AQUÍ VA TODO EL CONTENIDO
│       ├── site-config.ts    (Config general: nombre, logo, dominio)
│       ├── hero.json         (Contenido hero)
│       ├── about.json        (Contenido about)
│       ├── services.json     (Servicios)
│       ├── testimonials.json (Testimonios)
│       └── contact.json      (Email, teléfono, ubicación)
│
├── public/
│   ├── images/
│   │   ├── logo.svg
│   │   ├── guadalupe.jpg
│   │   └── [todas las imágenes]
│   └── fonts/
│
├── next.config.js
├── tailwind.config.ts
└── package.json
```

### EJEMPLO: Contenido en JSON (data/services.json)

```json
{
  "title": "Nuestros Servicios",
  "description": "Especializados en derecho laboral y comercial",
  "services": [
    {
      "id": "asesorria",
      "icon": "briefcase",
      "title": "Asesoría Jurídica",
      "description": "Consultoría profesional en temas legales...",
      "features": ["Análisis detallado", "Soluciones prácticas"]
    },
    {
      "id": "cursos",
      "icon": "book",
      "title": "Cursos Jurídicos",
      "description": "Formación profesional continua...",
      "features": ["Material exclusivo", "Certificado"]
    }
  ]
}
```

### EJEMPLO: Componente que Lee el JSON

```typescript
// components/Services.tsx
import servicesData from '@/data/services.json';

export default function Services() {
  return (
    <section>
      <h2>{servicesData.title}</h2>
      <p>{servicesData.description}</p>

      {servicesData.services.map(service => (
        <div key={service.id}>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </section>
  );
}
```

**Ventaja:** Si quieres cambiar "Asesoría Jurídica" a "Consultoría Legal", SOLO EDITAS `services.json` - no tocas código.

---

## 🎨 DISEÑO PROFESIONAL - MEJORAS CLAVE

### De Básico a Profesional

#### Antes (Básico)
```
- Colores planos
- Layout rígido
- Tipografía simple
- Sin animaciones
- Espaciado irregular
- Botones genéricos
```

#### Después (Profesional) ✅
```
- Gradientes sutiles
- Layout fluido y moderno
- Tipografía premium (Google Fonts)
- Animaciones suaves
- Espaciado consistente (spacing scale)
- Botones con hover/interacción
- Cards con shadow y profundidad
- Transiciones elegantes
- Iconografía profesional
- Responsive perfecto
```

### Paleta de Colores (MANTENER)
```
Primario:    [Tu color actual]
Secundario:  [Tu color actual]
Neutro:      #F8F9FA, #495057, #1A1A1A
Acentos:     Gradientes sutiles

Aplica a:
- Botones con gradiente
- Cards con shadow
- Hover effects
- Transiciones suaves
```

### Elementos de Diseño Profesional

#### 1. **Tipografía**
```
Headings: Poppins Bold (profesional, moderno)
Body:     Inter Regular (legible, limpio)
Accents:  Poppins Semibold (énfasis)
```

#### 2. **Espaciado (Tailwind Scale)**
```
Base: 4px
xs:   8px
sm:   16px
md:   24px
lg:   32px
xl:   40px
2xl:  48px
```

#### 3. **Animaciones Sutiles**
```
- Fade in on scroll
- Hover scale (1.05)
- Smooth transitions (0.3s)
- Gradient shifts
- Icon animations
```

#### 4. **Cards y Containers**
```
- Rounded corners: 12px
- Shadow: subtle (0 4px 6px rgba)
- Hover: lift effect + shadow increase
- Padding: consistente con spacing scale
```

#### 5. **Buttons**
```
Primary Button:
  - Gradiente + sombra
  - Hover: brillo + scale
  - Active: darker

Secondary Button:
  - Outline
  - Hover: fill
```

#### 6. **Responsive Classes**
```
Mobile:   < 640px
Tablet:   640px - 1024px
Desktop:  > 1024px

Todos los elementos adaptan tamaño, espaciado, tipografía
```

---

## 📋 SECCIONES DE LA LANDING

### 1. **Header/Navbar**
```
Layout: Sticky top, fondo claro con shadow
Elementos:
  - Logo (izquierda)
  - Menu links (centro)
  - CTA Button (derecha)

Responsive:
  - Desktop: menú horizontal
  - Mobile: hamburger menu
```

### 2. **Hero Section**
```
Layout: Full height, gradiente de fondo
Contenido (desde hero.json):
  - Título principal
  - Subtítulo
  - CTA Buttons
  - Imagen o video de fondo

Animación: Fade in + slight slide up
```

### 3. **About Section**
```
Layout: 2 columnas (foto + texto)
Contenido (desde about.json):
  - Foto de Guadalupe (profesional)
  - Bio/experiencia
  - Especialidades (lista)
  - Stats (años experiencia, casos ganados, etc)
```

### 4. **Services Section**
```
Layout: Grid (3 cards responsive)
Contenido (desde services.json):
  - Cada servicio es una card
  - Ícono + título + descripción
  - Hover effect (lift + color change)
```

### 5. **Testimonials Section**
```
Layout: Carrusel o grid
Contenido (desde testimonials.json):
  - Cliente nombre
  - Foto cliente
  - Testimonio
  - Rating (estrellas)
```

### 6. **Contact Section**
```
Layout: 2 columnas
Izquierda:
  - Formulario (nombre, email, teléfono, mensaje)
  - Validación en tiempo real
  - Envío con Formspree o EmailJS

Derecha:
  - Información de contacto (desde contact.json)
  - Teléfono, email, ubicación
  - Mapa (opcional)
  - Horarios
```

### 7. **Footer**
```
Layout: 4 columnas
  - Logo + descripción
  - Links útiles
  - Servicios
  - Redes sociales + contacto
```

---

## 📝 ARCHIVOS DE DATOS (JSON)

### `data/site-config.ts`
```typescript
export const siteConfig = {
  name: "Guadis - Estudio Jurídico",
  description: "Asesoría jurídica profesional",
  logo: "/images/logo.svg",
  color: {
    primary: "#yourcolor",
    secondary: "#yourcolor",
  },
  contact: {
    email: "contacto@guadis.com",
    phone: "+54 11 XXXX-XXXX",
    address: "Ubicación",
  },
  social: {
    linkedin: "url",
    instagram: "url",
    whatsapp: "url",
  },
  seo: {
    title: "Guadis - Estudio Jurídico Profesional",
    description: "...",
    keywords: ["abogada", "asesoría", "derecho"],
  }
}
```

### `data/hero.json`
```json
{
  "title": "Asesoría Jurídica Profesional",
  "subtitle": "Soluciones legales para tu negocio",
  "primaryCta": {
    "text": "Consultar Ahora",
    "link": "#contact"
  },
  "secondaryCta": {
    "text": "Conocer Servicios",
    "link": "#services"
  },
  "backgroundImage": "/images/hero-bg.jpg"
}
```

### `data/services.json`
```json
{
  "title": "Nuestros Servicios",
  "services": [
    {
      "id": "asesorria",
      "title": "Asesoría Jurídica",
      "description": "...",
      "icon": "briefcase"
    }
  ]
}
```

### `data/testimonials.json`
```json
{
  "title": "Qué Dicen Nuestros Clientes",
  "testimonials": [
    {
      "id": 1,
      "name": "Cliente 1",
      "company": "Empresa",
      "text": "Excelente servicio...",
      "image": "/images/client-1.jpg",
      "rating": 5
    }
  ]
}
```

---

## ⚡ TECNOLOGÍA - STACK FINALIZADO

### Frontend
```
Framework:     Next.js 14+
UI Library:    React 18+
Styling:       Tailwind CSS
Language:      TypeScript
Icons:         React Icons
Animations:    Framer Motion (opcional)
Forms:         React Hook Form + Zod
Email:         Formspree o EmailJS
```

### Hosting & Deploy
```
Repository:    GitHub
Hosting:       Vercel
Domain:        Vercel (apuntar dominio)
CI/CD:         Automático (push = deploy)
Analytics:     Google Analytics 4
```

### Archivos Dinámicos
```
- Datos en JSON (data/)
- Imágenes en public/
- Componentes en components/
- Config centralizada (site-config.ts)

RESULTADO: ¡Cambiar contenido es tan fácil como editar un JSON!
```

---

## 🔄 WORKFLOW PARA CAMBIOS

### El Cliente Necesita Cambiar Algo

**ANTES (Hardcodeado):**
1. Abrir archivo .tsx
2. Buscar el texto
3. Cambiar
4. Esperar deploy
5. Riesgo de romper código

**DESPUÉS (Con JSON):**
1. Abrir archivo data/services.json
2. Cambiar el JSON
3. Deploy automático
4. Sin tocar código
5. Cero riesgo

---

## 📊 CHECKLIST FASE 1

### Setup
- [ ] Crear repo en GitHub
- [ ] Inicializar Next.js 14
- [ ] Configurar Tailwind CSS
- [ ] Estructura de carpetas creada
- [ ] TypeScript configurado

### Contenido
- [ ] Copiar contenido HTML anterior
- [ ] Extractar contenido a JSONs
- [ ] Imágenes/logos en public/
- [ ] Paleta de colores en Tailwind config

### Componentes
- [ ] Header/Navbar
- [ ] Hero Section
- [ ] About Section
- [ ] Services Section
- [ ] Testimonials Section
- [ ] Contact Form
- [ ] Footer

### Diseño Profesional
- [ ] Tipografía premium
- [ ] Animaciones suaves
- [ ] Responsive perfecto
- [ ] Shadow y gradientes
- [ ] Hover effects
- [ ] Dark mode (opcional)

### SEO & Performance
- [ ] Meta tags
- [ ] Sitemap
- [ ] Open Graph
- [ ] Lighthouse 95+
- [ ] Imágenes optimizadas (WebP)

### Deploy
- [ ] GitHub workflow
- [ ] Vercel conectado
- [ ] Preview deployments
- [ ] Dominio apuntando
- [ ] SSL automático

---

## 📌 PRÓXIMOS PASOS INMEDIATOS

1. **TÚ COMPARTÍS:** Archivo HTML anterior + contenido + logos + imágenes
2. **YO ANALIZO:** Estructura, contenido, paleta de colores
3. **JUNTOS:** Debatimos mejoras de diseño + layout
4. **YO CREO:** Componentes profesionales + estructura JSON
5. **SETUP:** GitHub + Vercel
6. **DESARROLLO:** Implementación rápida
7. **DEPLOY:** Live en Vercel con dominio

---

**Estado:** ⏳ ESPERANDO HTML Y CONTENIDO
**Enfoque:** Máxima profesionalidad + máxima flexibilidad
**Resultado:** Landing page que se puede cambiar sin tocar código

