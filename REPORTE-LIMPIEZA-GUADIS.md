# REPORTE DE LIMPIEZA - Referencias a "guadis"

**Fecha:** 2025-12-12
**Proyecto:** Guadalupe (anteriormente confundido con "guadis")
**Objetivo:** ELIMINAR todas las referencias al proyecto anterior "guadis"

---

## 🎯 RESUMEN EJECUTIVO

**Situación:**
- Proyecto actual: **guadalupe**
- Proyecto anterior (BORRADO): **guadis-landing**
- Encontradas: **100+ referencias** a "guadis" en el proyecto guadalupe
- Estado: Mezcla de nombres causando confusión

**Acción requerida:**
- ELIMINAR todas las referencias a "guadis"
- MANTENER solo "guadalupe" o "Estudio MGJ"

---

## ✅ ARCHIVOS YA CORRECTOS

Estos archivos ya tienen configuración correcta:

```
✅ /02-FRONTEND/package.json          → name: "guadalupe"
✅ /vercel.json                        → name: "guadalupe"
✅ /.vercel/project.json               → projectName: "guadalupe"
✅ /02-FRONTEND/src/app/sitemap.ts     → usa siteConfig.url (dinámico)
✅ Git remote                          → guadalupe.git
```

---

## ⚠️ ARCHIVOS DE CÓDIGO CON REFERENCIAS A "GUADIS"

### 🔴 CRÍTICO - Afecta funcionalidad

#### 1. `/02-FRONTEND/src/data/config.ts`
**Línea 3:**
```typescript
shortName: 'Guadis',  // ❌ CAMBIAR
```
**Acción:** Cambiar a `'Guadalupe'` o `'Estudio MGJ'`

---

## 📄 ARCHIVOS DE DOCUMENTACIÓN CON "GUADIS"

Estos archivos tienen referencias a "guadis" y deben ser **ARCHIVADOS** o **ELIMINADOS**:

### CATEGORÍA: Documentación obsoleta del proyecto anterior

```
❌ /00-DOCUMENTACION/VISUAL-GUIDE-REDESIGN.md
   → Título: "GUADIS v2.0 REDESIGN"
   → Referencias: 4+ menciones
   → Acción: ELIMINAR (obsoleto)

❌ /00-DOCUMENTACION/RESUMEN-SISTEMA-MEMORIA.md
   → Título: "Sistema de Memoria Persistente Guadis"
   → Referencias: 10+ menciones
   → Acción: ELIMINAR o actualizar completamente

❌ /00-DOCUMENTACION/INDICE-MAESTRO.md
   → Título: "ÍNDICE MAESTRO - Documentación Proyecto Guadis"
   → Referencias: 5+ menciones
   → Acción: ACTUALIZAR o ELIMINAR

❌ /00-DOCUMENTACION/EXECUTION-GUIDE-WEEK1.md
   → Título: "GUADIS v2.0 - EXECUTION GUIDE"
   → Referencias: 10+ menciones + URLs con guadis.com.ar
   → Acción: ELIMINAR (obsoleto)

❌ /00-DOCUMENTACION/ESTRUCTURA-EXPLICADA.md
   → Título: "Guía de Estructura del Proyecto - guadis"
   → Acción: ACTUALIZAR título

❌ /00-DOCUMENTACION/LEEME-PRIMERO.txt
   → Referencias: "Proyecto Guadis"
   → Acción: ACTUALIZAR

❌ /00-DOCUMENTACION/BITACORA.md
   → Título: "Bitácora de Desarrollo - guadis"
   → Referencias: 20+ menciones (histórico)
   → Acción: MANTENER (es histórico válido) pero actualizar título

❌ /00-DOCUMENTACION/PLAN-ACCION-INMEDIATO.md
   → Título: "Plan de Acción Inmediato - Guadis"
   → Referencias: múltiples
   → Acción: ELIMINAR (ya no aplica)

❌ /00-DOCUMENTACION/CONTEXTO-PERSISTENTE.md
   → Título: "CONTEXTO PERSISTENTE - Proyecto Guadis"
   → Referencias: múltiples
   → Acción: ACTUALIZAR completamente

❌ /00-DOCUMENTACION/PROTOCOLO-ACTUALIZACION.md
   → Referencias: "proyecto Guadis"
   → Acción: ACTUALIZAR

❌ /00-DOCUMENTACION/REGISTRO-SESIONES.md
   → Título: "REGISTRO DE SESIONES - Proyecto Guadis"
   → Referencias: múltiples
   → Acción: ACTUALIZAR

❌ /00-DOCUMENTACION/GUIA-JUANITO-PM.md
   → Título: "GUÍA PARA JUANITO - Project Manager de Guadis"
   → Referencias: múltiples
   → Acción: ACTUALIZAR

❌ /00-DOCUMENTACION/DEBATE-CONCEPTUAL-SESION-CLAUDE.md
   → Referencias: "PROYECTO GUADIS"
   → Acción: ELIMINAR (obsoleto)

❌ /00-DOCUMENTACION/REVISION-COMPLETA-20251104.md
   → Título: "Revisión Completa del Proyecto Guadis"
   → Referencias: múltiples
   → Acción: ARCHIVAR (es histórico)

❌ /00-DOCUMENTACION/PROYECTO-INFO.md
   → Título: "Información del Proyecto: guadis"
   → Nombre del proyecto: "guadis"
   → Acción: ACTUALIZAR completamente

❌ /00-DOCUMENTACION/TEMPLATE-ENTRADA-SESION.md
   → Referencias: "GUADIS"
   → Acción: ACTUALIZAR

❌ /00-DOCUMENTACION/FASES.md
   → Título: "Plan de Fases - guadis"
   → Acción: ACTUALIZAR

❌ /00-DOCUMENTACION/RESUMEN-EJECUTIVO.md
   → Título: "Resumen Ejecutivo - Proyecto Guadis"
   → Acción: ACTUALIZAR
```

### CATEGORÍA: Guías y manuales

```
❌ /GUIA-ACTUALIZACION-DATOS-CLIENTE.md
   → Título: "GUADIS"
   → URLs: guadis.com.ar, contacto@guadis.com.ar
   → Referencias: 20+ menciones
   → Acción: ACTUALIZAR completamente

❌ /QUICK-REFERENCE-JAMES.md
   → Título: "GUADIS - QUICK REFERENCE"
   → URLs: guadis-landing.vercel.app (obsoleto)
   → Referencias: múltiples
   → Acción: ACTUALIZAR completamente

❌ /generate-og-image.py
   → Título: "OG Image Generator - Guadis"
   → Acción: ACTUALIZAR comentarios

❌ /LEER-PRIMERO.md
   → URLs: guadis-landing.vercel.app (obsoleto)
   → Acción: ACTUALIZAR

❌ /README.md
   → Título: "Guadis - Estudio Jurídico"
   → URLs: guadis-landing.vercel.app (obsoleto)
   → Referencias: múltiples
   → Acción: ACTUALIZAR completamente
```

### CATEGORÍA: Reportes y workflows

```
❌ /WORKFLOW-COMPLETADO.md
   → URLs: guadis.com.ar, guadis-landing.vercel.app
   → Referencias: múltiples
   → Acción: ELIMINAR (obsoleto)

❌ /AUDIT-SCANNER-1765098460.md
   → URLs: guadis-landing.vercel.app
   → Acción: ARCHIVAR (es reporte histórico)

❌ /WORKFLOW-AUDIT-REPORT.md
❌ /SESSION_SUMMARY.md
❌ /DEPLOY-WORKFLOW.md
❌ /RESUMEN-AUDITORIA-JAMES-WEB.md
❌ /ESTADO-FINAL-PROXIMOS-PASOS.md
   → Todos con referencias a "guadis" o "guadis-landing"
   → Acción: REVISAR y ACTUALIZAR o ELIMINAR
```

### CATEGORÍA: Integraciones

```
❌ /04-INTEGRACIONES/vercel/DEPLOY-CHECKLIST.md
   → URLs: guadis.com.ar, @guadis.com.ar
   → Acción: ACTUALIZAR

❌ /04-INTEGRACIONES/vercel/REQUISITOS-SIMPLES.txt
   → Título: "GUADIS - REQUISITOS PARA DEPLOY"
   → URLs: guadis.com.ar, guadis.vercel.app
   → Acción: ACTUALIZAR
```

---

## 📊 ESTADÍSTICAS

```
Total archivos escaneados:     ~150
Archivos con "guadis":         ~50
Referencias totales:           100+

Categorías:
├── Código fuente:             1 archivo   (CRÍTICO)
├── Documentación:             25 archivos (IMPORTANTE)
├── Reportes históricos:       10 archivos (ARCHIVAR)
└── Archivos correctos:        ~100 archivos ✅
```

---

## 🎯 PLAN DE ACCIÓN

### FASE 1: CÓDIGO CRÍTICO (AHORA - 5 minutos)

```bash
# 1. Actualizar config.ts
sed -i "s/shortName: 'Guadis'/shortName: 'Guadalupe'/" \
  02-FRONTEND/src/data/config.ts
```

### FASE 2: DOCUMENTACIÓN PRINCIPAL (10 minutos)

Archivos a actualizar con prioridad:
1. README.md
2. LEER-PRIMERO.md
3. QUICK-REFERENCE-JAMES.md
4. GUIA-ACTUALIZACION-DATOS-CLIENTE.md
5. 00-DOCUMENTACION/PROYECTO-INFO.md
6. 00-DOCUMENTACION/CONTEXTO-PERSISTENTE.md

**Cambios:**
- Reemplazar "guadis" → "guadalupe"
- Reemplazar "Guadis" → "Guadalupe"
- Reemplazar "GUADIS" → "GUADALUPE"
- Reemplazar URLs: guadis-landing.vercel.app → guadalupe.vercel.app
- Reemplazar URLs: guadis.com.ar → estudiomgj.com.ar (o el dominio correcto)

### FASE 3: ARCHIVAR OBSOLETOS (5 minutos)

Crear carpeta de archivo:
```bash
mkdir -p 00-DOCUMENTACION/ARCHIVO-HISTORICO-GUADIS
```

Mover archivos obsoletos:
- VISUAL-GUIDE-REDESIGN.md
- EXECUTION-GUIDE-WEEK1.md
- DEBATE-CONCEPTUAL-SESION-CLAUDE.md
- PLAN-ACCION-INMEDIATO.md
- WORKFLOW-COMPLETADO.md
- Otros reportes antiguos

### FASE 4: VERIFICACIÓN (2 minutos)

```bash
# Buscar referencias restantes
grep -r "guadis" --exclude-dir=node_modules \
  --exclude-dir=.git \
  --exclude-dir=.next \
  --exclude-dir=ARCHIVO-HISTORICO-GUADIS

# Debe retornar: solo referencias en archivos archivados
```

---

## ✅ CHECKLIST DE LIMPIEZA

### Código
- [ ] Actualizar `02-FRONTEND/src/data/config.ts` (shortName)

### Documentación Principal
- [ ] Actualizar README.md
- [ ] Actualizar LEER-PRIMERO.md
- [ ] Actualizar QUICK-REFERENCE-JAMES.md
- [ ] Actualizar GUIA-ACTUALIZACION-DATOS-CLIENTE.md
- [ ] Actualizar 00-DOCUMENTACION/PROYECTO-INFO.md
- [ ] Actualizar 00-DOCUMENTACION/CONTEXTO-PERSISTENTE.md
- [ ] Actualizar 00-DOCUMENTACION/FASES.md
- [ ] Actualizar generate-og-image.py (comentarios)

### Archivar
- [ ] Mover docs obsoletos a ARCHIVO-HISTORICO-GUADIS/
- [ ] Crear README en carpeta de archivo explicando contenido

### Verificar
- [ ] Build exitoso: `npm run build`
- [ ] No hay referencias a "guadis" fuera de archivos archivados
- [ ] URLs correctas en config.ts
- [ ] Commit de limpieza

---

## 🔗 URLS CORRECTAS DEL PROYECTO GUADALUPE

```
Proyecto:        guadalupe
Repositorio:     https://github.com/juanito1732/guadalupe.git
Vercel:          https://guadalupe.vercel.app
Dominio final:   estudiomgj.com.ar (pendiente DNS)
Email:           guadalupejuarez@estudiomgj.com.ar
```

---

## 📝 NOTAS

- El proyecto "guadis-landing" fue BORRADO y reemplazado por "guadalupe"
- Toda referencia a "guadis" es del proyecto anterior y debe eliminarse
- Los archivos históricos se mantienen en carpeta de archivo por trazabilidad
- No se mezclan nombres: es "guadalupe" o "Estudio MGJ", NUNCA "guadis"

---

**Próximo paso:** Ejecutar FASE 1 para corregir código crítico
