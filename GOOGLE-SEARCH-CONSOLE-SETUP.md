# 🔍 GOOGLE SEARCH CONSOLE - GUÍA DE SETUP

**Última actualización:** 30 Dic 2025
**Estado:** ✅ CONFIGURADO - Dominio actualizado
**URL del sitio:** https://estudiomgj.com.ar

---

## 📌 ¿POR QUÉ GOOGLE SEARCH CONSOLE?

Google Search Console es **ESENCIAL** para:
- ✅ Verificar que Google encuentra tu sitio
- ✅ Enviar el sitemap
- ✅ Monitorear errores de crawling
- ✅ Ver en qué búsquedas apareces
- ✅ Mejorar posicionamiento en Google

---

## 🚀 PASO 1: Acceder a Google Search Console

### Opción A: Link directo
```
https://search.google.com/search-console
```

### Opción B: Desde Google
1. Ve a Google.com
2. Busca "Google Search Console"
3. Primer resultado

**Requisito:** Necesitas una cuenta de Google

---

## ✅ PASO 2: Agregar Propiedad

### 2.1 Click en "Agregar propiedad"

En la pantalla principal, verás un botón **"Agregar propiedad"** (arriba a la izquierda).

### 2.2 Elige "URL Prefix"

Se abrirá un modal con 2 opciones:

```
┌──────────────────────────────────────┐
│  ¿Qué tipo de propiedad?            │
├──────────────────────────────────────┤
│                                      │
│  Dominio                             │
│  □ ejemplo.com                       │  ← Selecciona SOLO con dominio
│                                      │    personalizado
│  URL Prefix                          │
│  ⦿ https://estudiomgj.com.ar         │  ← Selecciona ESTO
│                                      │    (dominio final)
│                                      │
│          [Continuar]                 │
└──────────────────────────────────────┘
```

**Selecciona: URL Prefix**

---

## 🔐 PASO 3: Verificar Propiedad

Google te pedirá verificar que eres propietario del sitio.

### Métodos de verificación (orden recomendado):

#### Opción A: Etiqueta HTML (más fácil)

1. Google te proporciona un código como:
```html
<meta name="google-site-verification" content="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" />
```

2. **Te lo enviamos a ti** (no necesitas hacer nada ahora)
3. Nosotros lo agregamos al `<head>` del sitio
4. Haces click en "Verificar"
5. ✅ Verificado

#### Opción B: Archivo HTML

1. Google te proporciona un archivo `.html`
2. Lo subes a `/public/` del sitio
3. Haces click en "Verificar"
4. ✅ Verificado

#### Opción C: Registro DNS

1. Necesitas acceso a tu proveedor de dominio
2. Agregas un registro TXT
3. ✅ Verificado

---

## 📋 PASO 4: Agregar Sitemap

Después de verificar, Google te mostrará un dashboard.

### 4.1 Localiza "Sitemaps"

En el menú izquierdo, busca **"Sitemaps"**.

```
Menú izquierdo:
├─ Resumen
├─ Inspección de URL
├─ Cobertura
├─ Rendimiento
├─ Mejoras
├─ Enlace
├─ Sitemaps          ← Click aquí
└─ ...
```

### 4.2 Agregar nuevo Sitemap

Click en **"Agregar Sitemap"** (arriba a la derecha).

Se abrirá un campo de texto.

### 4.3 Ingresar URL del Sitemap

```
https://estudiomgj.com.ar/sitemap.xml
```

Haz click en "Enviar".

**Resultado esperado:**
```
✅ Sitemap enviado correctamente
📊 Página indexada: X URLs
```

---

## 🔍 PASO 5: Verificar Cobertura

Una vez enviado el sitemap, verás:

### 5.1 Ir a "Cobertura"

En el menú izquierdo, busca **"Cobertura"**.

### 5.2 Verificar estado

Deberías ver:

```
┌─────────────────────────────────────┐
│ COBERTURA                           │
├─────────────────────────────────────┤
│                                     │
│ ✅ Válido (sin problemas)           │
│    Páginas indexadas: 5             │
│    - /                              │
│    - /_not-found (no indexada)      │
│                                     │
│ ⚠️ Excluyente (no indexadas)        │
│    Páginas no indexadas: X          │
│                                     │
│ ❌ Error (si los hay)               │
│    Problemas: 0                     │
│                                     │
└─────────────────────────────────────┘
```

**Esperado:**
- 1 página válida indexada (la principal `/`)
- El resto son normales (el sitio es simple)

---

## 📊 PASO 6: Inspeccionar URL Principal

### 6.1 Ir a "Inspección de URL"

En el menú superior, busca el campo de texto.

### 6.2 Ingresar URL principal

```
https://estudiomgj.com.ar
```

Presiona Enter.

### 6.3 Verificar información

Deberías ver algo como:

```
┌─────────────────────────────────────┐
│ INSPECCIÓN DE URL                   │
├─────────────────────────────────────┤
│                                     │
│ URL: https://guadis-...vercel.app   │
│                                     │
│ ✅ URL indexable                    │
│ ✅ Última rastreo: hace X horas     │
│ ✅ Versión enviada compatible       │
│                                     │
│ 📊 Información de rastreo:          │
│    - Protocolo: HTTPS               │
│    - UserAgent: Mobile              │
│    - Tiempo de conexión: OK         │
│                                     │
│ 📋 Información indexada:            │
│    - Título: "Estudio Jurídico..." │
│    - Meta description: "20+ años..." │
│                                     │
│ 🎨 Mejoras detectadas:              │
│    - ✅ Tiene favicon               │
│    - ✅ Open Graph tags             │
│    - ✅ JSON-LD schema              │
│                                     │
└─────────────────────────────────────┘
```

---

## 📈 PASO 7: Monitorear Rendimiento

### 7.1 Ir a "Rendimiento"

En el menú izquierdo, busca **"Rendimiento"**.

```
Menú izquierdo:
├─ Resumen
├─ Rendimiento      ← Click aquí
├─ Mejoras
└─ ...
```

### 7.2 Verificar métricas

Verás gráficos de:
- **Clics:** Veces que usuarios hacen click en tu sitio en Google
- **Impresiones:** Veces que aparece tu sitio en resultados
- **CTR:** Porcentaje de clics vs. impresiones
- **Posición promedio:** En qué número apareces en promedio

**Esperado inicialmente:** Datos bajos (sitio nuevo)

A medida que pasa el tiempo y Google indexa:
- ↗️ Las impresiones aumentan
- ↗️ Los clics aumentan
- ↗️ La posición mejora

---

## ✨ CARACTERÍSTICAS EXTRAS

### 7.3 Filtrar por país

Haz click en **"Países"** para ver:
- De dónde vienen las búsquedas (Argentina, México, etc.)

### 7.4 Filtrar por dispositivo

Haz click en **"Dispositivos"** para ver:
- Móvil, Desktop, Tablet

### 7.5 Ver consultas principales

Haz click en **"Consultas"** para ver:
- "abogada buenos aires"
- "derecho de familia"
- "asesoramiento legal"
- etc.

---

## 🎯 PASO 8: Configuración Adicional (Opcional)

### 8.1 Mobile Friendly Test

Google automáticamente verifica si tu sitio es mobile-friendly.

Deberías ver:
```
✅ Compatible con dispositivos móviles
```

---

## 🚨 PROBLEMAS COMUNES

### Problema: "Sitemap no encontrado"

**Causa:** La URL del sitemap es incorrecta.

**Solución:**
1. Verifica que el sitio está live: https://estudiomgj.com.ar/sitemap.xml
2. Si funciona, intenta nuevamente en GSC
3. Espera 24 horas

### Problema: "URL no indexable"

**Causa:** Google detectó un problema.

**Solución:**
1. Haz click en la URL
2. Lee el error específico
3. Contacta al desarrollador con el error

### Problema: "No se puede verificar la propiedad"

**Causa:** El código de verificación no está en el sitio.

**Solución:**
1. Envía un mensaje con el código
2. Agregamos el código
3. Espera 24 horas e intenta nuevamente

---

## 📋 CHECKLIST DE SETUP

- [ ] Accediste a Google Search Console
- [ ] Agregaste propiedad (URL Prefix)
- [ ] Verificaste la propiedad (usando etiqueta HTML)
- [ ] Agregaste el sitemap
- [ ] Verificaste cobertura (página indexada)
- [ ] Inspeccionaste URL principal
- [ ] Revisaste que sea mobile-friendly
- [ ] Monitoreaste rendimiento inicial

---

## 📞 PASOS A REALIZAR

### Para completar la verificación:

1. **Accede a GSC:** https://search.google.com/search-console
2. **Agregue propiedad** con tu URL: https://estudiomgj.com.ar
3. **En la pantalla de verificación:**
   - Copia el código HTML de verificación (meta tag)
   - Envíamelo a través del chat
4. **Yo lo agrego** al sitio y hacemos push
5. **Vuelve a GSC** y haz click en "Verificar"
6. **Completa los pasos 4-8** de esta guía

---

## ⏱️ TIEMPOS

```
Verificación:        5 minutos
Agregar sitemap:     5 minutos
Google indexa:       24-48 horas
Datos en GSC:        3-7 días
Posicionamiento:     2-4 semanas
```

---

## 💡 TIPS PARA MEJOR POSICIONAMIENTO

1. **Contenido:** Agregar blog con artículos sobre derecho
2. **Backlinks:** Crear links desde sitios relacionados
3. **Velocidad:** Mantener performance > 90 en Lighthouse
4. **Mobile:** Asegurar que funciona perfecto en mobile
5. **Actualizaciones:** Actualizar contenido regularmente
6. **Redes:** Compartir en redes sociales (ayuda indirectamente)

---

## 🔗 PRÓXIMOS PASOS

Después de completar Google Search Console:

1. Obtener datos reales del cliente
2. Actualizar `/02-FRONTEND/src/data/config.ts`
3. Crear `og-image.jpg`
4. Hacer deploy final
5. Verificar Google Search Console nuevamente

---

**Última actualización:** 30 Dic 2025
**Responsable:** Claude Code + OSIRIS
**Status:** ✅ Configurado con dominio final estudiomgj.com.ar

