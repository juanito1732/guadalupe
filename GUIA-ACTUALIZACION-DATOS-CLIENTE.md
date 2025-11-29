# Guía de Actualización de Datos del Cliente - GUADIS
## Para Juanito - Instrucciones paso a paso

Hola Juanito, aquí está la guía completa para actualizar los datos específicos de la Dra. Guadalupe Juárez en el sitio. Esta información debe obtenerse directamente del cliente.

---

## 📋 DATOS A OBTENER DEL CLIENTE

Antes de hacer cualquier cambio, necesitas que la Dra. proporcione:

### 1. Información de Contacto
- [ ] Teléfono móvil (para WhatsApp)
- [ ] Teléfono de oficina
- [ ] Email de contacto
- [ ] Dirección exacta de la oficina
- [ ] Horarios de atención reales
- [ ] Zona postal/código

### 2. Redes Sociales
- [ ] Usuario/URL de Instagram (ej: @guadis_legal)
- [ ] Usuario/URL de WhatsApp (link directo)
- [ ] Usuario/URL de TikTok (si tiene)
- [ ] Usuario/URL de LinkedIn (perfil profesional)
- [ ] Usuario/URL de Facebook (página de estudio)

### 3. Branding & Visual
- [ ] Logo de buena calidad (SVG o PNG 300dpi)
- [ ] Foto profesional de la abogada (para testimonios o about)
- [ ] Colores preferidos de marca (si quiere cambiar azul)
- [ ] Foto para Open Graph (1200x630px recomendado)

### 4. Contenido Textual
- [ ] Descripción personal/profesional actualizada
- [ ] Nombres reales de clientes que den testimonios (con consentimiento)
- [ ] Testimonios reales de clientes
- [ ] Datos de experiencia (años, casos relevantes)
- [ ] Cambios en servicios ofrecidos

---

## 🔧 PASO 1: Actualizar Configuración Base

Archivo: `/home/juani/Desktop/OSIRIS/proyectos/guadis/02-FRONTEND/src/data/config.ts`

```ts
export const siteConfig = {
  name: 'Estudio Jurídico Dra. Guadalupe Juárez',
  shortName: 'Guadis',
  description: '20+ años de experiencia en asesoría legal profesional. Especialistas en derecho de familia, sucesiones y amparos de salud.',
  url: 'https://guadis.com.ar',  // ← CAMBIAR SI USAS DOMINIO DIFERENTE
  ogImage: 'https://guadis.com.ar/og-image.jpg',

  contact: {
    email: 'contacto@guadis.com.ar',  // ← CAMBIAR AL EMAIL REAL
    phone: '+54 (11) 1234-5678',  // ← CAMBIAR AL TELÉFONO REAL
    address: 'Balcarce 50, Buenos Aires, Argentina',  // ← CAMBIAR A DIRECCIÓN REAL
    hours: 'Lun-Vie 9:00 a 18:00 hs',  // ← CAMBIAR A HORARIOS REALES
  },

  social: {
    instagram: 'https://instagram.com/guadis',  // ← ACTUALIZAR
    whatsapp: 'https://wa.me/5411XXXXXXXX',  // ← ACTUALIZAR
    tiktok: 'https://tiktok.com/@guadis',  // ← ACTUALIZAR
    facebook: 'https://facebook.com/guadis',  // ← ACTUALIZAR
    linkedin: 'https://linkedin.com/in/guadalupejuarez',  // ← ACTUALIZAR
  },

  nav: [
    { name: 'Inicio', href: '#hero' },
    { name: 'Sobre Nosotros', href: '#about' },
    { name: 'Servicios', href: '#services' },
    { name: 'Testimonios', href: '#testimonials' },
    { name: 'Contacto', href: '#contact' },
  ],
}
```

**Cómo actualizar:**
1. Abre el archivo en tu editor
2. Reemplaza los valores entre comillas con los datos reales
3. Guarda (Ctrl+S o Cmd+S)

---

## 🔧 PASO 2: Actualizar URLs de Redes Sociales

Archivo: `/home/juani/Desktop/OSIRIS/proyectos/guadis/02-FRONTEND/src/components/Footer.tsx`

Lineas 37-63 actualmente apuntan a URLs genéricas. Necesita ser:

**Antes:**
```tsx
<a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
<a href="https://wa.me" target="_blank" rel="noopener noreferrer">
<a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
```

**Después (ejemplo):**
```tsx
<a href="https://instagram.com/dra.guadalupe.juarez" target="_blank" rel="noopener noreferrer">
<a href="https://wa.me/5491123456789" target="_blank" rel="noopener noreferrer">
<a href="https://tiktok.com/@drajuarez" target="_blank" rel="noopener noreferrer">
```

**Para obtener el enlace de WhatsApp correcto:**
- Teléfono: +54 9 11 2345-6789
- Enlace: https://wa.me/5491123456789 (sin espacios, sin guiones)

---

## 🔧 PASO 3: Crear Open Graph Image

Archivo a crear: `/home/juani/Desktop/OSIRIS/proyectos/guadis/02-FRONTEND/public/og-image.jpg`

**Especificaciones:**
- Tamaño: 1200 x 630 píxeles
- Formato: JPG optimizado (~50-100 KB)
- Contenido: Logo + texto "Estudio Jurídico Dra. Guadalupe Juárez"

**Herramientas recomendadas:**
1. Canva (https://canva.com) - Fácil y rápido
2. Figma (https://figma.com) - Más control profesional
3. GIMP (https://gimp.org) - Gratuito, más complejo

**Pasos en Canva:**
1. Crear diseño nuevo: 1200x630 píxeles
2. Agregar fondo azul (#1e3a5f recomendado)
3. Agregar logo de GUADIS
4. Agregar texto: "Estudio Jurídico Dra. Guadalupe Juárez"
5. Agregar dirección o teléfono pequeño
6. Descargar como JPG
7. Guardar como `og-image.jpg` en public/

---

## 🔧 PASO 4: Actualizar Testimonios

Archivo: `/home/juani/Desktop/OSIRIS/proyectos/guadis/02-FRONTEND/src/data/testimonials.ts`

**Actual (ejemplo):**
```ts
export const testimonials = [
  {
    id: '1',
    name: 'Cliente 1',
    role: 'Rol del cliente',
    text: 'Testimonio de ejemplo...',
  },
]
```

**Debe ser actualizado con:**
- Nombres REALES de clientes (con consentimiento)
- Iniciales o nombres completos (según privacidad)
- Textos DE VERDAD que escribieron
- Ocupación o breve descripción

**Ejemplo real:**
```ts
export const testimonials = [
  {
    id: '1',
    name: 'M.G. - Buenos Aires',
    role: 'Caso de divorcio',
    text: 'La Dra. Juárez fue excepcional en mi caso. Me acompañó en todo el proceso con profesionalismo y empatía. Recomendación total.',
  },
]
```

---

## 🔧 PASO 5: Actualizar About Section

Archivo: `/home/juani/Desktop/OSIRIS/proyectos/guadis/02-FRONTEND/src/components/About.tsx`

Línea 10: Actualizar descripción
```tsx
'Durante más de 20 años hemos ayudado a personas en todo el país...'
```

Cambiar a descripción personal de la Dra. si lo desea.

---

## 🔧 PASO 6: Actualizar Servicios

Archivo: `/home/juani/Desktop/OSIRIS/proyectos/guadis/02-FRONTEND/src/data/services.ts`

Si la Dra. quiere CAMBIAR servicios o AGREGAR nuevos:

**Ejemplo de agregar nuevo servicio:**
```ts
{
  id: 'derecho-laboral',
  title: 'Derecho Laboral',
  description: 'Asesoramiento en conflictos laborales y derechos del trabajador.',
  iconType: 'labor',
  features: [
    'Despidos injustificados',
    'Acoso laboral',
    'Negociación de salarios',
    'Convenios colectivos',
  ],
}
```

---

## 🔧 PASO 7: Actualizar Footer

Archivo: `/home/juani/Desktop/OSIRIS/proyectos/guadis/02-FRONTEND/src/components/Footer.tsx`

Línea 69:
```tsx
<p>&copy; 2025 Estudio Jurídico Dra. Guadalupe Juárez. Todos los derechos reservados.</p>
```

Si quiere agregar más información (ej: matrícula profesional, CUIT):
```tsx
<p>&copy; 2025 Estudio Jurídico Dra. Guadalupe Juárez. Matrícula XXXX. Todos los derechos reservados.</p>
```

---

## 📝 PASO 8: Agregar Política de Privacidad (IMPORTANTE)

Crear nuevo archivo: `/home/juani/Desktop/OSIRIS/proyectos/guadis/02-FRONTEND/src/app/privacidad/page.tsx`

```tsx
'use client'

export default function Privacidad() {
  return (
    <main className="min-h-screen bg-white pt-32">
      <div className="container-custom py-20">
        <h1 className="text-4xl font-serif font-bold mb-8">Política de Privacidad</h1>

        <div className="max-w-3xl space-y-6 text-gray-700">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Recolección de Datos</h2>
            <p>
              En Estudio Jurídico Dra. Guadalupe Juárez recolectamos información que proporcionas voluntariamente...
            </p>
          </section>

          {/* Agregar más secciones según legislación argentina */}
        </div>
      </div>
    </main>
  )
}
```

**IMPORTANTE:** Esto debe ser redactado por un abogado especialista en privacidad. No es opcional en Argentina.

---

## 🚀 PASO 9: Hacer Build y Verificar

```bash
cd /home/juani/Desktop/OSIRIS/proyectos/guadis/02-FRONTEND
npm run build
npm run dev
```

Luego visita http://localhost:3000 y verifica que:
- ✓ Todos los datos están correctos
- ✓ Las redes sociales apuntan a URLs reales
- ✓ El formulario está accesible
- ✓ No hay errores en consola

---

## 📤 PASO 10: Deploy a Producción

Una vez verificado localmente:

```bash
git add .
git commit -m "fix: Actualizar datos reales del cliente Dra. Guadalupe Juárez"
git push origin main
```

Vercel desplegará automáticamente. Verificar en:
- https://guadis-landing.vercel.app (preview)
- https://guadis.com.ar (producción, una vez configurado dominio)

---

## 🔑 INFORMACIÓN SENSIBLE - VARIABLES DE ENTORNO

Si necesitas agregar variables sensibles (API keys, etc.):

Crear: `.env.local`
```
NEXT_PUBLIC_ANALYTICS_ID=G-XXXXXXXX
NEXT_PUBLIC_CONTACT_API=https://...
```

**NUNCA commitear .env files con secretos.**

---

## ✅ CHECKLIST FINAL DE ACTUALIZACIÓN

- [ ] Email del cliente actualizado
- [ ] Teléfono del cliente actualizado
- [ ] Dirección actualizada
- [ ] Horarios actualizados
- [ ] URLs de redes sociales actualizadas
- [ ] Logo actualizado (si es necesario)
- [ ] og-image.jpg creado y subido
- [ ] Testimonios actualizados con datos reales
- [ ] Servicios revisados y actualizados
- [ ] Footer información actualizada
- [ ] Política de privacidad agregada
- [ ] Build local sin errores (npm run build)
- [ ] Probado en localhost (npm run dev)
- [ ] Git commit con mensaje claro
- [ ] Push a GitHub (git push)
- [ ] Vercel deployment completado
- [ ] QA final en producción

---

## 🆘 PREGUNTAS FRECUENTES

### P: ¿Cómo agregó un nuevo servicio?
**R:** Edita `/src/data/services.ts` y agrega un nuevo objeto al array `services`. Automáticamente aparecerá en la sección Servicios.

### P: ¿Cómo cambio los colores de marca?
**R:** Edita `/src/app/globals.css` líneas 8-13:
```css
:root {
  --primary-dark: #0f172a;      /* Azul oscuro */
  --primary: #1e3a5f;           /* Azul principal */
  --primary-light: #3b5998;     /* Azul claro */
  --accent: #d4a574;            /* Oro/Acento */
}
```

### P: ¿Cómo agrego más secciones?
**R:** Crea un nuevo componente en `/src/components/MiSeccion.tsx`, impleméntalo en `/src/app/page.tsx` y actualiza navegación en `config.ts`.

### P: ¿Cómo conectó el formulario de contacto a emails?
**R:** Necesita backend. Usa Nodemailer, SendGrid o Resend. Juanito te dirá cuál usar.

### P: ¿Qué pasa si me equivoco?
**R:** Git guarda el historial. Puedes revertir con `git revert [commit-hash]` o `git reset --soft HEAD~1`.

---

## 📞 CONTACTO DE SOPORTE

Si tienes dudas durante la actualización:
- Consulta esta guía primero
- Revisa los archivos comentados
- Prueba localmente antes de hacer push
- No hagas cambios directamente en producción

---

**¡Éxito Juanito! El sitio está listo para reflejar la excelencia de la Dra. Guadalupe Juárez.** 🚀
