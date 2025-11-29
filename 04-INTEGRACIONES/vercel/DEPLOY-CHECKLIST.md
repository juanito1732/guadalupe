# Deploy a Vercel - Checklist de Requisitos

**Estado:** 🔴 BLOQUEADO (Esperando información del cliente)

---

## 📋 LO QUE YA TENEMOS (✅)

- ✅ Código HTML, CSS, JS optimizado y listo
- ✅ Responsive design y accesibilidad WCAG 2.1 AA
- ✅ SEO base (robots.txt, sitemap.xml, meta tags)
- ✅ GitHub repository con historial de commits
- ✅ FormSubmit.co integration para formulario de contacto

---

## ⚠️ LO QUE NECESITAMOS DEL CLIENTE (CRÍTICO)

### 1️⃣ **DOMINIO**
- [ ] ¿Tienes un dominio registrado?
  - **Opciones:**
    - Si SÍ → Nombre del dominio (ej: guadis.com.ar)
    - Si NO → Podemos usar `guadis.vercel.app` temporalmente o registrar uno nuevo

- [ ] Registrador del dominio (si lo tienes)
  - Ejemplos: GoDaddy, Namecheap, NIC.ar, etc.

---

### 2️⃣ **CONTENIDO & ACTIVOS**
- [ ] Logo (PNG, SVG o AI)
- [ ] Foto de Guadalupe (profile picture)
- [ ] 2-3 imágenes profesionales (servicios, office, etc)
- [ ] Texto/contenido para cada sección:
  - Hero (título, subtítulo, tagline)
  - About (biografía, experiencia)
  - Services (actualizar los 3 servicios)
  - Testimonios (reemplazar con clientes reales o nuevos)
  - Contact info (email, teléfono, WhatsApp actualizado)

- [ ] Redes sociales actualizadas:
  - Instagram: `https://instagram.com/[tu_usuario]`
  - TikTok: `https://tiktok.com/@[tu_usuario]`
  - Email: `[email_verdadero]@guadis.com.ar`

---

### 3️⃣ **INFORMACIÓN CONTACTO**
- [ ] Email principal: `contacto@...`
- [ ] Teléfono/WhatsApp: `+54 9 ...`
- [ ] Ubicación: Ciudad/Provincia
- [ ] Horarios de atención (si aplica)

---

## 🔧 PARA NOSOTROS (LO HAGO YO)

### Antes de Deploy:

1. **Crear cuenta Vercel** (gratis)
   - Conectar con GitHub
   - Autorizar acceso al repositorio

2. **Configurar Vercel.json**
   ```json
   {
     "buildCommand": "npm run build",
     "outputDirectory": ".",
     "env": {
       "NEXT_PUBLIC_FORM_EMAIL": "@guadis.com.ar"
     }
   }
   ```

3. **Integrar imágenes y contenido**
   - Reemplazar placeholders en HTML
   - Optimizar imágenes (WebP, compression)
   - Actualizar URLs de redes sociales

4. **Testing local**
   - Lighthouse audit (objetivo: 95+)
   - Responsive testing (320px a 4K)
   - Cross-browser testing
   - Form submission testing

5. **Configurar dominio en Vercel**
   - Conexión DNS si es dominio externo
   - O usar `guadis.vercel.app` inicialmente

6. **Deploy automático**
   - Cada push a GitHub → Deploy automático en Vercel
   - Preview URLs para cambios
   - Production URL con dominio

---

## 📋 PASO A PASO PARA HACER EL DEPLOY

### **Paso 1: Que Me Proporciones**
```
Envíame por mensaje o email:
- Logo de Guadis (imagen)
- Foto de Guadalupe (imagen)
- 2-3 imágenes profesionales
- Textos actualizados para cada sección
- Email de contacto
- Teléfono/WhatsApp
- Usuario de Instagram
- Usuario de TikTok
- Nombre de dominio (si lo tienes) O confirmar usar guadis.vercel.app
```

### **Paso 2: Yo Integro el Contenido**
- Actualizar `/public/images/` con tus imágenes
- Reemplazar textos en HTML
- Actualizar URLs de redes sociales
- Testing local

### **Paso 3: Setup Vercel**
```bash
# 1. Creo repo en GitHub (si aún no existe)
git remote add origin https://github.com/[tu_usuario]/guadis.git
git push -u origin main

# 2. Conecto Vercel a GitHub
# (Tu haces esto en https://vercel.com)

# 3. Configuro dominio
# (Si tienes dominio propio, actualizo DNS)

# 4. Deploy automático
# (Vercel despliega automáticamente con cada push)
```

### **Paso 4: Testing en Producción**
- Verificar que todo funcione en el dominio
- Testing Lighthouse
- Testing responsivo en dispositivos reales
- Test del formulario de contacto

### **Paso 5: Entrega Final**
- Sitio en vivo con tu dominio
- Certificado SSL (Vercel incluye)
- Email automático en FormSubmit.co
- Documentación para cambios futuros

---

## 📦 CHECKLIST PARA ENTREGAR

Cuando me proporciones todo, mi checklist será:

- [ ] Crear carpeta `/public/images/` con tus activos
- [ ] Actualizar `index.html` con tus textos
- [ ] Actualizar redes sociales en footer
- [ ] Actualizar email y teléfono en contacto
- [ ] Optimizar imágenes (WebP, compression)
- [ ] Testing local - Lighthouse 95+
- [ ] Push a GitHub
- [ ] Conectar Vercel a GitHub
- [ ] Configurar dominio (si tienes)
- [ ] Deploy automático activo
- [ ] Testing en producción
- [ ] Documentar para futuros cambios

---

## 💰 COSTOS

| Servicio | Costo | Detalles |
|----------|-------|----------|
| **Vercel** | **Gratis** | Hosting + SSL + CDN |
| **Dominio** | **$8-15 USD/año** | Opcional (si no tienes) |
| **Email** | **Gratis** | FormSubmit.co |
| **Analytics** | **Gratis** | Google Analytics (opcional) |

---

## ⏱️ TIMELINE ESTIMADO

```
Una vez me proporciones todo:

DÍA 1: Integración de contenido + Testing = 2-3 horas
DÍA 2: Setup Vercel + Deploy = 1-2 horas
DÍA 3: Testing en producción + Ajustes = 1 hora

TOTAL: 4-6 horas de trabajo
```

---

## 📞 PRÓXIMAS ACCIONES

1. **TÚ**: Reúne toda la información anterior
2. **TÚ**: Envíame por mensaje o email
3. **YO**: Integro en el sitio
4. **TÚ**: Creas cuenta Vercel (gratis)
5. **YO**: Configuramos y desplegamos
6. **LISTO**: Sitio en vivo

---

## 🔗 RECURSOS ÚTILES

- [Vercel Docs](https://vercel.com/docs)
- [Vercel GitHub Integration](https://vercel.com/docs/git/vercel-for-github)
- [FormSubmit.co](https://formsubmit.co) (para emails)
- [Google Analytics Setup](https://analytics.google.com)
- [Web.dev Lighthouse](https://web.dev/measure/)

---

**Estado:** Esperando información del cliente
**Próximo Paso:** Proporciona el contenido y dominio
**Fecha Estimada Deploy:** 2-3 días después de recibir contenido
