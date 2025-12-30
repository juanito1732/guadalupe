# 📊 VERCEL ANALYTICS - GUÍA DE ACTIVACIÓN

**Fecha:** 30 Dic 2025
**Proyecto:** Estudio Jurídico Dra. Guadalupe Juárez
**URL:** https://estudiomgj.com.ar
**Estado:** ✅ Listo para activar

---

## 📌 ¿QUÉ ES VERCEL ANALYTICS?

Vercel Analytics te proporciona **datos en tiempo real** sobre tu sitio sin necesidad de Google Analytics:

✅ **Visitas en tiempo real**
✅ **Páginas más visitadas**
✅ **Rendimiento del sitio (Core Web Vitals)**
✅ **Dispositivos y ubicaciones**
✅ **Sin cookies** (cumple GDPR automáticamente)
✅ **Totalmente gratis** en el plan Free

---

## 🚀 PASO 1: Acceder al Dashboard de Vercel

### 1.1 Ir a Vercel Dashboard

```
https://vercel.com/dashboard
```

**O busca:** "Vercel Dashboard" en Google

### 1.2 Seleccionar el proyecto

En el dashboard verás una lista de proyectos.

Busca y haz click en:
```
guadalupe
```

(El proyecto del Estudio Jurídico)

---

## ⚡ PASO 2: Activar Analytics

### 2.1 Ir a la pestaña "Analytics"

En la barra superior del proyecto, verás:

```
┌──────────────────────────────────────────┐
│ Overview │ Deployments │ Analytics │ ... │
│            └──────────────┘               │
└──────────────────────────────────────────┘
                   ↑ Click aquí
```

### 2.2 Habilitar Analytics

Verás un botón grande que dice:

```
┌───────────────────────────────────────┐
│                                       │
│   📊 Enable Vercel Analytics          │
│                                       │
│   Track your site performance and     │
│   user behavior with real-time data   │
│                                       │
│        [Enable Analytics]             │
│                                       │
└───────────────────────────────────────┘
```

**Haz click en "Enable Analytics"**

### 2.3 Confirmar activación

Vercel te pedirá confirmar:

```
┌───────────────────────────────────────┐
│ Enable Analytics for guadalupe?       │
├───────────────────────────────────────┤
│                                       │
│ • Real-time visitors tracking         │
│ • Core Web Vitals monitoring          │
│ • Page views analytics                │
│ • Device and location insights        │
│                                       │
│        [Cancel]    [Enable]           │
│                                       │
└───────────────────────────────────────┘
```

**Haz click en "Enable"**

---

## 📦 PASO 3: Instalar el Package (Opcional pero Recomendado)

Para obtener métricas más precisas, instala el package de Vercel Analytics.

### 3.1 Abrir terminal en el proyecto

```bash
cd /home/juanito/Escritorio/OSIRIS/proyectos/guadalupe/02-FRONTEND
```

### 3.2 Instalar @vercel/analytics

```bash
npm install @vercel/analytics
```

### 3.3 Agregar al código

Editar `src/app/layout.tsx`:

```typescript
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es-AR">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

### 3.4 Hacer deploy

```bash
git add .
git commit -m "feat: Agregar Vercel Analytics"
git push origin dev
```

Vercel hará el deploy automáticamente.

---

## 📊 PASO 4: Ver las Métricas

### 4.1 Ir a Analytics Dashboard

Una vez activado, ve a:

```
Vercel Dashboard → guadalupe → Analytics
```

### 4.2 Métricas disponibles

Verás gráficos con:

#### 📈 Visitors (Visitantes)
```
┌───────────────────────────────────────┐
│ VISITORS                              │
├───────────────────────────────────────┤
│                                       │
│   ╱╲    ╱╲                            │
│  ╱  ╲  ╱  ╲   ╱╲                      │
│ ╱    ╲╱    ╲╱  ╲                      │
│                                       │
│ Today: 24 visitors                    │
│ This week: 156 visitors               │
│                                       │
└───────────────────────────────────────┘
```

#### 🌎 Top Locations (Ubicaciones)
```
┌───────────────────────────────────────┐
│ TOP LOCATIONS                         │
├───────────────────────────────────────┤
│                                       │
│ 🇦🇷 Argentina      85%  (132 visits)  │
│ 🇺🇸 United States  10%  (15 visits)   │
│ 🇪🇸 Spain           5%  (9 visits)    │
│                                       │
└───────────────────────────────────────┘
```

#### 📱 Top Devices (Dispositivos)
```
┌───────────────────────────────────────┐
│ TOP DEVICES                           │
├───────────────────────────────────────┤
│                                       │
│ 📱 Mobile      65%  (101 visits)      │
│ 💻 Desktop     30%  (47 visits)       │
│ 📲 Tablet       5%  (8 visits)        │
│                                       │
└───────────────────────────────────────┘
```

#### 📄 Top Pages (Páginas más visitadas)
```
┌───────────────────────────────────────┐
│ TOP PAGES                             │
├───────────────────────────────────────┤
│                                       │
│ /              95%  (148 visits)      │
│ /sitemap.xml    3%  (5 visits)        │
│ (otros)         2%  (3 visits)        │
│                                       │
└───────────────────────────────────────┘
```

---

## ⚡ PASO 5: Ver Core Web Vitals (Rendimiento)

### 5.1 Ir a la pestaña "Speed Insights"

En Vercel Dashboard → guadalupe → **Speed Insights**

### 5.2 Métricas de rendimiento

Verás:

```
┌───────────────────────────────────────┐
│ CORE WEB VITALS                       │
├───────────────────────────────────────┤
│                                       │
│ LCP (Largest Contentful Paint)       │
│ ✅ 1.2s - Good                        │
│                                       │
│ FID (First Input Delay)               │
│ ✅ 45ms - Good                        │
│                                       │
│ CLS (Cumulative Layout Shift)         │
│ ✅ 0.05 - Good                        │
│                                       │
│ Overall Score: 95/100 ⭐              │
│                                       │
└───────────────────────────────────────┘
```

### 5.3 Interpretación

| Métrica | Bueno | Mejorar | Malo |
|---------|-------|---------|------|
| **LCP** | < 2.5s | 2.5-4s | > 4s |
| **FID** | < 100ms | 100-300ms | > 300ms |
| **CLS** | < 0.1 | 0.1-0.25 | > 0.25 |

✅ **Objetivo:** Todas las métricas en "Bueno" (verde)

---

## 📊 PASO 6: Configurar Filtros

### 6.1 Filtrar por período

En el dashboard de Analytics, puedes filtrar por:

```
┌───────────────────────────────────────┐
│ Time Range:                           │
│                                       │
│ ○ Last 24 hours                       │
│ ○ Last 7 days                         │
│ ⦿ Last 30 days       ← Recomendado   │
│ ○ Last 90 days                        │
│ ○ Custom range                        │
│                                       │
└───────────────────────────────────────┘
```

### 6.2 Filtrar por dispositivo

Puedes filtrar por:
- 📱 Mobile
- 💻 Desktop
- 📲 Tablet

### 6.3 Filtrar por ubicación

Puedes filtrar por país:
- 🇦🇷 Argentina
- 🇺🇸 USA
- etc.

---

## 🔔 PASO 7: Configurar Alertas (Opcional)

### 7.1 Ir a Settings

Vercel Dashboard → guadalupe → Settings → Analytics

### 7.2 Configurar alertas

Puedes configurar para recibir notificaciones cuando:

```
┌───────────────────────────────────────┐
│ ALERTS                                │
├───────────────────────────────────────┤
│                                       │
│ ☑ Alert when Core Web Vitals drop    │
│   below "Good" threshold              │
│                                       │
│ ☑ Alert when traffic drops by > 50%  │
│                                       │
│ ☑ Weekly performance summary          │
│                                       │
└───────────────────────────────────────┘
```

---

## 💰 COMPARACIÓN: VERCEL ANALYTICS VS GOOGLE ANALYTICS

| Característica | Vercel Analytics | Google Analytics |
|----------------|------------------|------------------|
| **Instalación** | 1 click | Código + configuración |
| **Privacidad** | Sin cookies | Requiere cookies |
| **GDPR** | Cumple automáticamente | Requiere banner |
| **Velocidad** | No afecta | Puede ralentizar |
| **Core Web Vitals** | ✅ Incluido | ❌ No incluido |
| **Costo** | Gratis | Gratis |
| **Datos en tiempo real** | ✅ Sí | ⚠️ 24-48h delay |

**Recomendación:** Usa **ambos**:
- **Vercel Analytics:** Para métricas técnicas y Core Web Vitals
- **Google Analytics:** Para marketing y análisis de conversiones

---

## 📋 CHECKLIST DE ACTIVACIÓN

- [ ] Accediste a Vercel Dashboard
- [ ] Seleccionaste el proyecto "guadalupe"
- [ ] Activaste Vercel Analytics
- [ ] Instalaste `@vercel/analytics` (opcional pero recomendado)
- [ ] Agregaste `<Analytics />` al layout
- [ ] Hiciste deploy
- [ ] Verificaste que aparecen datos en el dashboard
- [ ] Revisaste Core Web Vitals en Speed Insights

---

## 🎯 PRÓXIMOS PASOS

### Después de activar Analytics:

1. **Monitorear semanalmente**
   - Revisar visitas y tendencias
   - Identificar páginas más populares
   - Verificar que Core Web Vitals sigan en "Good"

2. **Optimizar basado en datos**
   - Si Mobile > Desktop: Optimizar para móvil
   - Si ubicaciones inesperadas: Revisar SEO
   - Si Core Web Vitals bajan: Optimizar rendimiento

3. **Comparar con Google Search Console**
   - Cruzar datos de impresiones vs. visitas
   - Identificar keywords que generan tráfico
   - Optimizar contenido para mejorar conversión

---

## 🚨 PROBLEMAS COMUNES

### Problema: "No aparecen datos en Analytics"

**Causa:** El sitio no tiene tráfico aún o Analytics recién se activó.

**Solución:**
1. Espera 24 horas
2. Visita el sitio desde diferentes dispositivos
3. Comparte el link en redes sociales

### Problema: "Core Web Vitals en rojo"

**Causa:** El sitio tiene problemas de rendimiento.

**Solución:**
1. Optimiza imágenes (usa next/image)
2. Reduce JavaScript innecesario
3. Habilita compresión
4. Contacta al desarrollador

---

## ⏱️ TIEMPOS ESPERADOS

```
Activación:           5 minutos
Instalación package:  10 minutos
Primeros datos:       1-24 horas
Datos completos:      3-7 días
Tendencias visibles:  2-4 semanas
```

---

## 💡 TIPS PARA APROVECHAR ANALYTICS

1. **Revisa semanalmente:** No diariamente (muy poco tráfico)
2. **Compara períodos:** Semana actual vs. semana anterior
3. **Identifica patrones:** ¿Qué días hay más visitas?
4. **Optimiza mobile:** Si > 60% es móvil, prioriza UX mobile
5. **Monitorea Core Web Vitals:** Mantén todo en verde

---

## 📞 SOPORTE

Si tienes problemas con Vercel Analytics:

1. **Documentación oficial:**
   - https://vercel.com/docs/analytics

2. **Vercel Support:**
   - Dashboard → Help → Contact Support

3. **Desarrollador:**
   - Contactar al equipo de desarrollo

---

**Guía creada:** 30 Dic 2025
**Por:** Claude Code + OSIRIS
**Status:** ✅ Lista para usar
**Proyecto:** Estudio Jurídico Dra. Guadalupe Juárez
