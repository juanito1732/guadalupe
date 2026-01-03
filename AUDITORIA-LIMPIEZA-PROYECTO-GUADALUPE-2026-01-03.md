# AUDITORÍA DE LIMPIEZA - PROYECTO GUADALUPE
**Fecha:** 3 Enero 2026
**Auditor:** Claude Code
**Estado:** REPORTE FINAL (Sin cambios realizados)

---

## RESUMEN EJECUTIVO

El proyecto Guadalupe tiene una **estructura bien organizada** pero presenta **redundancias documentales significativas** en la raíz del proyecto. Se identificaron:

- **20 archivos .md en la raíz** (deberían estar en 00-DOCUMENTACION/)
- **2 archivos vercel.json duplicados** con diferentes configuraciones
- **Archivos de auditoría obsoletos** (error reports de sesiones anteriores)
- **Reportes históricos de testing** que no son actuales
- **Documentación duplicada** sobre el mismo tema (OG-IMAGE y PERSONALIZAR-OG-IMAGE)

**IMPACTO:** ⚠️ MODERADO
- La raíz está desordenada y dificulta la navegación
- Riesgo de confusión entre archivos similares
- Falta claridad sobre qué documentación está vigente

---

## 1. ARCHIVOS .MD OBSOLETOS O DUPLICADOS EN LA RAÍZ

### 1.1 Archivos de Error/Auditoría Específica de Sesiones Pasadas (OBSOLETOS)

| Archivo | Fecha | Propósito | Estado | Acción |
|---------|-------|----------|--------|--------|
| `AUDITORIA-ERROR-CLAUDE-31DIC2025.md` | 31 Dic 2025 | Análisis de error de sesión anterior | OBSOLETO | Mover a 00-DOCUMENTACION/ARCHIVO-HISTORICO-GUADIS/ |
| `RESUMEN-AUDITORIA-31DIC.md` | 31 Dic 2025 | Resumen de auditoría de error | OBSOLETO | Mover a 00-DOCUMENTACION/ARCHIVO-HISTORICO-GUADIS/ |
| `AUDITORIA-DNS-SSL-13DIC2025.md` | 13 Dic 2025 | Auditoría de DNS/SSL completada | OBSOLETO | Mover a 00-DOCUMENTACION/ARCHIVO-HISTORICO-GUADIS/ |

**Razón:** Estos documentos registran investigaciones de problemas ya resueltos. Su propósito era temporal para debugging. Pertenecen al archivo histórico.

---

### 1.2 Archivos de Deployment y Workflow (PARCIALMENTE OBSOLETOS)

| Archivo | Duración/Versión | Propósito | Estado | Acción |
|---------|------------------|----------|--------|--------|
| `DEPLOY-WORKFLOW.md` | Nov 2025 | Guía de workflow de deploy | VIGENTE | Mover a 00-DOCUMENTACION/ |
| `DEPLOYMENT_RULES.md` | Dic 2025 | Reglas de deployment (más completo) | VIGENTE | Mantener en raíz O mover a 00-DOCUMENTACION/ |
| `PROXIMOS-PASOS-DEPLOYMENT.md` | 13 Dic 2025 | Pasos de deployment (COMPLETADOS) | OBSOLETO | Mover a 00-DOCUMENTACION/ARCHIVO-HISTORICO-GUADIS/ |

**Razón:** DEPLOY-WORKFLOW.md parece ser un draft/revisión de DEPLOYMENT_RULES.md. Ambos cubren similar contenido.

---

### 1.3 Archivos Guía y Setup (DEBERÍAN ESTAR EN DOCUMENTACION)

| Archivo | Propósito | Debe Estar En | Estado |
|---------|----------|---------------|---------|
| `README.md` | Punto de entrada principal | Raíz ✓ | CORRECTO |
| `GOOGLE-SEARCH-CONSOLE-SETUP.md` | Setup de Google Search Console | 00-DOCUMENTACION/ | MOVER |
| `VERCEL-ANALYTICS-SETUP.md` | Setup de Vercel Analytics | 00-DOCUMENTACION/ | MOVER |
| `GUIA-CONFIGURACION-DNS-NIC-ARGENTINA.md` | Guía DNS | 00-DOCUMENTACION/ | MOVER |
| `GUIA-ACTUALIZACION-DATOS-CLIENTE.md` | Guía para actualizar datos | 00-DOCUMENTACION/ | MOVER |
| `OPTIMIZACIONES-MOBILE.md` | Optimizaciones móvil | 02-FRONTEND/ o 00-DOCUMENTACION/ | MOVER |

---

### 1.4 Archivos de Configuración y Setup (DUPLICADOS)

| Archivo | Propósito | Problema | Acción |
|---------|----------|----------|--------|
| `CONFIG-QUICK-REPLACE.md` | Guía para config.ts | Está bien ubicado | CONSIDERAR MOVER |
| `DATOS-CLIENTE-TEMPLATE.md` | Template de datos cliente | Está bien ubicado | CONSIDERAR MOVER |
| `OG-IMAGE-SETUP.md` | Setup de og-image | Duplicado con siguiente | VER DUPLICACIÓN |
| `PERSONALIZAR-OG-IMAGE.md` | Personalizar og-image | Duplicado con anterior | EVALUAR FUSIÓN |

**Análisis de duplicación OG-IMAGE:**
- `OG-IMAGE-SETUP.md`: Explicación general de qué es OG-IMAGE
- `PERSONALIZAR-OG-IMAGE.md`: Guía específica de personalización
- **Recomendación:** Mantener uno consolidado o establecer clara diferencia de propósito

---

### 1.5 Archivos de Testing y Pruebas (PUEDE ESTAR OBSOLETO)

| Archivo | Fecha | Propósito | Estado |
|---------|-------|----------|--------|
| `GUIA-TESTING-PALETAS-MANUAL.md` | Nov 2025 | Testing manual de paletas | POSIBLEMENTE OBSOLETO |
| `PROBAR-PALETAS-EN-VIVO.md` | Nov 2025 | Prueba de paletas en vivo | POSIBLEMENTE OBSOLETO |
| `REPORTE-TESTING-FINAL.txt` | Nov 2025 | Reporte final de testing | OBSOLETO |
| `REPORTE-ESCANEO-EXHAUSTIVO-2025-12-07.txt` | 7 Dic 2025 | Reporte de escaneo | OBSOLETO |

**Razón:** Son reportes de sesiones/testing pasadas. Útiles para historial pero no para operación actual.

---

### 1.6 Archivos de Estado/Resumen (POTENCIAL DUPLICACIÓN)

| Archivo | Fecha | Propósito | Duplicación |
|---------|-------|----------|-------------|
| `ESTADO-PROYECTO-ACTUALIZADO.md` | 31 Dic 2025 | Estado actual del proyecto | VER CON 00-DOCUMENTACION/RESUMEN-EJECUTIVO.md |
| `RESUMEN-FINAL-CAMBIOS.md` | 13 Dic 2025 | Resumen de cambios | OBSOLETO (Cambios completados) |

---

## 2. ARCHIVOS QUE DEBERÍAN MOVERSE A 00-DOCUMENTACION/

### PRIORITY 1: Mover Inmediatamente (Operativos pero mal ubicados)
```
00-DOCUMENTACION/
├── GOOGLE-SEARCH-CONSOLE-SETUP.md (from root)
├── VERCEL-ANALYTICS-SETUP.md (from root)
├── GUIA-CONFIGURACION-DNS-NIC-ARGENTINA.md (from root)
├── DEPLOY-WORKFLOW.md (from root)
└── OPTIMIZACIONES-MOBILE.md (from root)
```

### PRIORITY 2: Mover a 00-DOCUMENTACION/OPERATIVA o similar (Guías de uso)
```
00-DOCUMENTACION/OPERATIVA/
├── CONFIG-QUICK-REPLACE.md (from root)
├── DATOS-CLIENTE-TEMPLATE.md (from root)
├── GUIA-ACTUALIZACION-DATOS-CLIENTE.md (from root)
└── OG-IMAGE-SETUP.md + PERSONALIZAR-OG-IMAGE.md (fusionar)
```

### PRIORITY 3: Mover a 00-DOCUMENTACION/ARCHIVO-HISTORICO-GUADIS/ (Reportes/Auditorías completadas)
```
00-DOCUMENTACION/ARCHIVO-HISTORICO-GUADIS/
├── AUDITORIA-ERROR-CLAUDE-31DIC2025.md (from root)
├── RESUMEN-AUDITORIA-31DIC.md (from root)
├── AUDITORIA-DNS-SSL-13DIC2025.md (from root)
├── PROXIMOS-PASOS-DEPLOYMENT.md (from root)
├── RESUMEN-FINAL-CAMBIOS.md (from root)
├── REPORTE-TESTING-FINAL.txt (from root)
├── REPORTE-ESCANEO-EXHAUSTIVO-2025-12-07.txt (from root)
├── GUIA-TESTING-PALETAS-MANUAL.md (from root) - si está obsoleta
└── PROBAR-PALETAS-EN-VIVO.md (from root) - si está obsoleta
```

---

## 3. ARCHIVOS DE CONFIGURACIÓN DUPLICADOS

### vercel.json - DUPLICADO DETECTADO

**Ubicación 1:** `/home/juanito/Escritorio/OSIRIS/proyectos/guadalupe/vercel.json`
```json
{
  "name": "guadalupe",
  "buildCommand": "npm run build -w 02-FRONTEND",
  "devCommand": "npm run dev -w 02-FRONTEND",
  "installCommand": "npm install",
  "framework": "nextjs",
  "rootDirectory": "02-FRONTEND"
}
```

**Ubicación 2:** `/home/juanito/Escritorio/OSIRIS/proyectos/guadalupe/02-FRONTEND/vercel.json`
```json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm ci"
}
```

**Análisis:**
- ✓ Correcto tener en ambos lugares: monorepo + frontend
- ⚠️ El de raíz sobrescribe el de frontend (configuración de raíz toma precedencia)
- ⚠️ Inconsistencia: `npm install` vs `npm ci` en installCommand

**Recomendación:**
1. Mantener `vercel.json` en raíz (es la config activa)
2. Considerar eliminar `/02-FRONTEND/vercel.json` o mantenerlo solo si 02-FRONTEND es proyecto independiente
3. Si es para independencia, documentar explícitamente en README

---

### Otros archivos de configuración (NO duplicados pero revisar):
- ✓ `package.json` (raíz) - workspace monorepo
- ✓ `package.json` (02-FRONTEND) - proyecto específico
- ✓ `tsconfig.json` (02-FRONTEND) - correcto
- ✓ `tailwind.config.ts` (02-FRONTEND) - correcto
- ✓ `.eslintrc.json` (02-FRONTEND) - correcto
- ✓ `postcss.config.js` (02-FRONTEND) - correcto
- ✓ `next.config.js` (02-FRONTEND) - correcto

---

## 4. ARCHIVOS INNECESARIOS O REDUNDANTES

### 4.1 Archivos .py (Generar OG Image)
- **Archivo:** `generate-og-image.py`
- **Propósito:** Generar og-image.jpg
- **Uso:** ¿Actual o histórico?
- **Recomendación:** Revisar si sigue siendo necesario. Si es histórico, mover a ARCHIVO-HISTORICO-GUADIS

### 4.2 Scripts shell
- **Archivo:** `verificar-nameservers.sh`
- **Propósito:** Verificar nameservers DNS
- **Uso:** ¿Está en uso? ¿Es parte del deployment workflow?
- **Recomendación:** Si está en uso, documentarlo. Si es histórico, archivar.

### 4.3 Archivos .txt (Reportes)
- **REPORTE-ESCANEO-EXHAUSTIVO-2025-12-07.txt** - Reporte histórico, archivar
- **REPORTE-TESTING-FINAL.txt** - Reporte histórico, archivar

---

## 5. ESTRUCTURA DE DOCUMENTACIÓN ACTUAL

### En 00-DOCUMENTACION/ (CORRECTO)
```
00-DOCUMENTACION/
├── 📌 INDICE-MAESTRO.md ..................... Índice completo
├── 📌 CONTEXTO-PERSISTENTE.md .............. Punto de entrada
├── 📋 TEMPLATE-ENTRADA-SESION.md ........... Checklist
├── 🔔 PROTOCOLO-ACTUALIZACION.md ........... Automatización
├── 📝 BITACORA.md .......................... Log técnico
├── 📊 REGISTRO-SESIONES.md ................. Auditoría sesiones
├── 📖 INSTRUCCIONES-JAMES-WEB.md .......... Guía James Web
├── 🗺️  MAPA-RAPIDO-MEMORIA.md .............. Navegación visual
├── 👨‍💼 GUIA-JUANITO-PM.md ................... Guía PM
├── 📄 PROYECTO-INFO.md ..................... Info cliente
├── 📋 FASES.md ............................. Fases proyecto
├── 📍 ESTRUCTURA-EXPLICADA.md .............. Estructura carpetas
├── 📊 RESUMEN-EJECUTIVO.md ................. Estado actual
├── 📋 RESUMEN-SISTEMA-MEMORIA.md .......... Sistema de memoria
├── 📋 ESPECIFICACIONES-FASE-1.md .......... Especificaciones
├── 📋 REDESIGN-ELITE-STARGATE-STANDARDS.md  Estándares
└── 📂 ARCHIVO-HISTORICO-GUADIS/ ........... Documentación vieja
    └── [23 archivos históricos]
```

### En raíz (PROBLEMÁTICO)
```
guadalupe/
├── README.md ✓ Correcto
├── DEPLOYMENT_RULES.md ⚠️ Debería estar en 00-DOCUMENTACION/
├── DEPLOY-WORKFLOW.md ⚠️ Debería estar en 00-DOCUMENTACION/
├── GOOGLE-SEARCH-CONSOLE-SETUP.md ⚠️ Debería estar en 00-DOCUMENTACION/
├── VERCEL-ANALYTICS-SETUP.md ⚠️ Debería estar en 00-DOCUMENTACION/
├── GUIA-CONFIGURACION-DNS-NIC-ARGENTINA.md ⚠️ Debería estar en 00-DOCUMENTACION/
├── GUIA-ACTUALIZACION-DATOS-CLIENTE.md ⚠️ Debería estar en 00-DOCUMENTACION/
├── GUIA-TESTING-PALETAS-MANUAL.md ⚠️ Obsoleto o debería estar en 00-DOCUMENTACION/
├── CONFIG-QUICK-REPLACE.md ⚠️ Debería estar en 00-DOCUMENTACION/
├── DATOS-CLIENTE-TEMPLATE.md ⚠️ Debería estar en 00-DOCUMENTACION/
├── OG-IMAGE-SETUP.md ⚠️ Debería estar en 00-DOCUMENTACION/ (revisar duplicación)
├── PERSONALIZAR-OG-IMAGE.md ⚠️ Debería estar en 00-DOCUMENTACION/ (revisar duplicación)
├── PROBAR-PALETAS-EN-VIVO.md ⚠️ Obsoleto
├── RESUMEN-FINAL-CAMBIOS.md ⚠️ Obsoleto
├── OPTIMIZACIONES-MOBILE.md ⚠️ Debería estar en 00-DOCUMENTACION/
├── ESTADO-PROYECTO-ACTUALIZADO.md ⚠️ Revisar duplicación con RESUMEN-EJECUTIVO.md
├── AUDITORIA-ERROR-CLAUDE-31DIC2025.md ⚠️ Obsoleto
├── RESUMEN-AUDITORIA-31DIC.md ⚠️ Obsoleto
├── AUDITORIA-DNS-SSL-13DIC2025.md ⚠️ Obsoleto
├── PROXIMOS-PASOS-DEPLOYMENT.md ⚠️ Obsoleto
├── REPORTE-TESTING-FINAL.txt ⚠️ Obsoleto
├── REPORTE-ESCANEO-EXHAUSTIVO-2025-12-07.txt ⚠️ Obsoleto
├── vercel.json ✓ Correcto (raíz monorepo)
├── package.json ✓ Correcto (workspace)
├── .gitignore ✓ Correcto
├── .vercelignore ✓ Correcto
├── generate-og-image.py ⚠️ Revisar uso
└── verificar-nameservers.sh ⚠️ Revisar uso
```

---

## 6. RECOMENDACIONES DE LIMPIEZA

### FASE 1: Limpieza Inmediata (Impacto Bajo, Beneficio Alto)

**Mover a 00-DOCUMENTACION/ARCHIVO-HISTORICO-GUADIS/**
```
AUDITORIA-ERROR-CLAUDE-31DIC2025.md
RESUMEN-AUDITORIA-31DIC.md
AUDITORIA-DNS-SSL-13DIC2025.md
PROXIMOS-PASOS-DEPLOYMENT.md
RESUMEN-FINAL-CAMBIOS.md
REPORTE-TESTING-FINAL.txt
REPORTE-ESCANEO-EXHAUSTIVO-2025-12-07.txt
GUIA-TESTING-PALETAS-MANUAL.md (si está obsoleta - verificar con equipo)
PROBAR-PALETAS-EN-VIVO.md (si está obsoleta - verificar con equipo)
```

**Beneficio:** Reduce clutter en raíz, archiva documentación histórica apropiadamente

---

### FASE 2: Reorganización de Guías (Impacto Bajo-Medio)

**Mover a 00-DOCUMENTACION/**
```
GOOGLE-SEARCH-CONSOLE-SETUP.md
VERCEL-ANALYTICS-SETUP.md
GUIA-CONFIGURACION-DNS-NIC-ARGENTINA.md
DEPLOY-WORKFLOW.md
OPTIMIZACIONES-MOBILE.md
```

**Crear subcarpeta 00-DOCUMENTACION/GUIAS-OPERATIVAS/**
```
CONFIG-QUICK-REPLACE.md
DATOS-CLIENTE-TEMPLATE.md
GUIA-ACTUALIZACION-DATOS-CLIENTE.md
OG-IMAGE-SETUP.md (posiblemente fusionado)
PERSONALIZAR-OG-IMAGE.md (posiblemente fusionado)
```

**Beneficio:** Documentación operativa agrupada, mejor navegabilidad

---

### FASE 3: Resolución de Duplicaciones (Impacto Medio)

**Acción 1: OG-IMAGE Consolidación**
- Revisar si `OG-IMAGE-SETUP.md` y `PERSONALIZAR-OG-IMAGE.md` pueden fusionarse
- Si son claramente diferentes: documentar diferencia explícitamente en nombres
- Considerar: `OG-IMAGE-GUIA-COMPLETA.md` que incluya setup + personalización

**Acción 2: vercel.json Frontend**
- Determinar si `/02-FRONTEND/vercel.json` es necesario
- Opciones:
  - **A) Eliminar:** Si 02-FRONTEND siempre se despliega a través de raíz
  - **B) Mantener:** Si 02-FRONTEND puede desplegarse independientemente
  - **Documentar:** La decisión en README o DEPLOYMENT_RULES.md

**Acción 3: DEPLOYMENT_RULES vs DEPLOY-WORKFLOW**
- Revisar contenido de ambos
- Decidir cuál es el documento "fuente" de verdad
- Eliminar duplicado o establecer claramente sus diferencias

**Acción 4: ESTADO-PROYECTO-ACTUALIZADO.md**
- Comparar con `00-DOCUMENTACION/RESUMEN-EJECUTIVO.md`
- Determinar si es duplicación o información diferente
- Consolidar o eliminar según corresponda

---

### FASE 4: Validación de Archivos Auxiliares (Impacto Bajo)

**Revisar:**
1. `generate-og-image.py`
   - ¿Se ejecuta regularmente?
   - ¿Está documentado su uso?
   - ¿Debería estar en 02-FRONTEND/scripts/?

2. `verificar-nameservers.sh`
   - ¿Se ejecuta regularmente?
   - ¿Es parte del workflow?
   - ¿Debería estar en un directorio /scripts/?

**Recomendación:** Si no se usan frecuentemente, documentar su propósito y ubicación esperada en DEPLOYMENT_RULES.md

---

## 7. ESTRUCTURA RECOMENDADA POST-LIMPIEZA

```
guadalupe/
├── 📄 README.md ......................... Punto de entrada principal
├── 📦 package.json ..................... Workspace monorepo
├── 🔧 .gitignore ....................... Configuración git
├── 🔧 .vercelignore .................... Configuración Vercel
├── 📋 vercel.json ...................... Configuración Vercel raíz
├── DEPLOYMENT_RULES.md ................. ÚNICA guía de deployment
│
├── 📂 00-DOCUMENTACION/
│   ├── INDICE-MAESTRO.md .............. Índice completo
│   ├── CONTEXTO-PERSISTENTE.md ........ Punto de entrada sistema de memoria
│   ├── RESUMEN-EJECUTIVO.md ........... Estado actual del proyecto
│   ├── README.md ...................... Descripción de carpeta
│   │
│   ├── 📂 OPERATIVA/ (Nuevas guías)
│   │   ├── GOOGLE-SEARCH-CONSOLE-SETUP.md
│   │   ├── VERCEL-ANALYTICS-SETUP.md
│   │   ├── GUIA-CONFIGURACION-DNS-NIC-ARGENTINA.md
│   │   ├── GUIA-ACTUALIZACION-DATOS-CLIENTE.md
│   │   ├── CONFIG-QUICK-REPLACE.md
│   │   ├── DATOS-CLIENTE-TEMPLATE.md
│   │   ├── OG-IMAGE-GUIA-COMPLETA.md (fusionado)
│   │   └── OPTIMIZACIONES-MOBILE.md
│   │
│   ├── 📂 ARCHIVO-HISTORICO-GUADIS/
│   │   ├── README.md .................. Descripción de archivo
│   │   ├── AUDITORIA-ERROR-CLAUDE-31DIC2025.md
│   │   ├── RESUMEN-AUDITORIA-31DIC.md
│   │   ├── AUDITORIA-DNS-SSL-13DIC2025.md
│   │   ├── PROXIMOS-PASOS-DEPLOYMENT.md
│   │   ├── RESUMEN-FINAL-CAMBIOS.md
│   │   ├── REPORTE-TESTING-FINAL.txt
│   │   ├── REPORTE-ESCANEO-EXHAUSTIVO-2025-12-07.txt
│   │   ├── GUIA-TESTING-PALETAS-MANUAL.md
│   │   ├── PROBAR-PALETAS-EN-VIVO.md
│   │   └── [20+ archivos históricos existentes]
│   │
│   ├── [Resto de documentación base...]
│
├── 📂 02-FRONTEND/
│   ├── 📄 DEPLOYMENT-README.md ........ Guía específica frontend (REVISAR NECESIDAD)
│   ├── 📄 GITHUB-SECRETS-CONFIG.md ... Configuración GitHub secrets
│   ├── 📄 GITHUB-SECRETS-TUTORIAL.md . Tutorial secretos GitHub
│   ├── 📄 SETUP-COMPLETE.md .......... Setup completado
│   ├── [Resto de estructura actual...]
│
├── 📂 04-INTEGRACIONES/
├── 📂 01-DISENO/
├── 📂 public/
└── 📂 .github/
```

---

## 8. IMPACTO Y RIESGOS

### Beneficios de la Limpieza
✓ **Navegabilidad:** Raíz más limpia, búsqueda más rápida
✓ **Claridad:** Documentación operativa vs histórica separada
✓ **Mantenimiento:** Más fácil actualizar documentación actual sin confundir con vieja
✓ **Onboarding:** Nuevos miembros tienen documentación clara y bien organizada
✓ **Profesionalismo:** Proyecto más pulido y organizado

### Riesgos Identificados
⚠️ **Bajo:** Pérdida de referencias. (Mitigación: Git preserva historial)
⚠️ **Bajo:** Enlaces internos rotos. (Mitigación: Actualizar referencias en INDICE-MAESTRO)
⚠️ **Muy Bajo:** Cambios de configuración. (No se modifica ningún código, solo documentación)

---

## 9. PROCESO RECOMENDADO

### Paso 1: Validación (Con equipo)
- [ ] Confirmar que archivos marcados como "OBSOLETO" no están siendo usados
- [ ] Confirmar que `vercel.json` en 02-FRONTEND no es necesario
- [ ] Verificar si `generate-og-image.py` y `.sh` se usan actualmente
- [ ] Confirmar que `ESTADO-PROYECTO-ACTUALIZADO.md` y `RESUMEN-EJECUTIVO.md` no son ambos vigentes

### Paso 2: Preparación
- [ ] Crear branch `cleanup/documentacion-2026-01-03`
- [ ] Preparar lista exacta de movimientos
- [ ] Crear nuevas carpetas si es necesario

### Paso 3: Ejecución
- [ ] Mover archivos en orden de fases
- [ ] Actualizar referencias en INDICE-MAESTRO.md
- [ ] Actualizar .gitignore si es necesario
- [ ] Crear commit por fase

### Paso 4: Validación Post-Limpieza
- [ ] Verificar que no hay enlaces rotos
- [ ] Confirmar que búsquedas siguen funcionando
- [ ] Validar que raíz está limpia
- [ ] Revisar visualmente la nueva estructura

### Paso 5: Publicación
- [ ] Crear PR con cambios
- [ ] Merge a main cuando sea apropiado
- [ ] Notificar equipo de nueva estructura

---

## 10. CHECKLIST DE ACCIONES ESPECÍFICAS

### Mover estos archivos a 00-DOCUMENTACION/ARCHIVO-HISTORICO-GUADIS/
```
[RAÍZ]
├─ AUDITORIA-ERROR-CLAUDE-31DIC2025.md → 00-DOCUMENTACION/ARCHIVO-HISTORICO-GUADIS/
├─ RESUMEN-AUDITORIA-31DIC.md → 00-DOCUMENTACION/ARCHIVO-HISTORICO-GUADIS/
├─ AUDITORIA-DNS-SSL-13DIC2025.md → 00-DOCUMENTACION/ARCHIVO-HISTORICO-GUADIS/
├─ PROXIMOS-PASOS-DEPLOYMENT.md → 00-DOCUMENTACION/ARCHIVO-HISTORICO-GUADIS/
├─ RESUMEN-FINAL-CAMBIOS.md → 00-DOCUMENTACION/ARCHIVO-HISTORICO-GUADIS/
├─ REPORTE-TESTING-FINAL.txt → 00-DOCUMENTACION/ARCHIVO-HISTORICO-GUADIS/
├─ REPORTE-ESCANEO-EXHAUSTIVO-2025-12-07.txt → 00-DOCUMENTACION/ARCHIVO-HISTORICO-GUADIS/
├─ PROBAR-PALETAS-EN-VIVO.md → 00-DOCUMENTACION/ARCHIVO-HISTORICO-GUADIS/
└─ GUIA-TESTING-PALETAS-MANUAL.md → 00-DOCUMENTACION/ARCHIVO-HISTORICO-GUADIS/ (después de validar obsolescencia)
```

### Mover estos archivos a 00-DOCUMENTACION/
```
[RAÍZ]
├─ GOOGLE-SEARCH-CONSOLE-SETUP.md → 00-DOCUMENTACION/
├─ VERCEL-ANALYTICS-SETUP.md → 00-DOCUMENTACION/
├─ GUIA-CONFIGURACION-DNS-NIC-ARGENTINA.md → 00-DOCUMENTACION/
├─ DEPLOY-WORKFLOW.md → 00-DOCUMENTACION/ (después de resolver duplicación con DEPLOYMENT_RULES.md)
└─ OPTIMIZACIONES-MOBILE.md → 00-DOCUMENTACION/
```

### Crear 00-DOCUMENTACION/OPERATIVA/ y mover:
```
[RAÍZ]
├─ CONFIG-QUICK-REPLACE.md → 00-DOCUMENTACION/OPERATIVA/
├─ DATOS-CLIENTE-TEMPLATE.md → 00-DOCUMENTACION/OPERATIVA/
├─ GUIA-ACTUALIZACION-DATOS-CLIENTE.md → 00-DOCUMENTACION/OPERATIVA/
├─ OG-IMAGE-SETUP.md → 00-DOCUMENTACION/OPERATIVA/ (después de revisar duplicación)
└─ PERSONALIZAR-OG-IMAGE.md → 00-DOCUMENTACION/OPERATIVA/ (después de revisar duplicación)
```

### Resolver Duplicaciones (Requiere Decisión Manual)
```
DECISION 1: DEPLOYMENT_RULES.md vs DEPLOY-WORKFLOW.md
├─ Revisar contenido de ambos
├─ Decidir cuál es la fuente de verdad
└─ Eliminar el que sea redundante o fusionar

DECISION 2: OG-IMAGE-SETUP.md vs PERSONALIZAR-OG-IMAGE.md
├─ Revisar contenido de ambos
├─ Decidir si fusionar en uno solo
└─ Si mantener ambos, documentar diferencia clara

DECISION 3: ESTADO-PROYECTO-ACTUALIZADO.md vs RESUMEN-EJECUTIVO.md
├─ Comparar contenido
├─ Determinar si son duplicados o complementarios
└─ Consolidar o eliminar según corresponda

DECISION 4: vercel.json en 02-FRONTEND/
├─ Determinar si es necesario para builds independientes
├─ Si no → Eliminar
└─ Si sí → Documentar razón explícitamente
```

### Revisar/Decidir sobre archivos auxiliares
```
[RAÍZ]
├─ generate-og-image.py
│  ├─ ¿Se usa? Verificar commits recientes
│  ├─ Si no → Archivar a ARCHIVO-HISTORICO-GUADIS/ o eliminar
│  └─ Si sí → Documentar uso en DEPLOYMENT_RULES.md
│
└─ verificar-nameservers.sh
   ├─ ¿Se usa? Verificar commits recientes
   ├─ Si no → Archivar a ARCHIVO-HISTORICO-GUADIS/ o eliminar
   └─ Si sí → Documentar uso en DEPLOYMENT_RULES.md
```

---

## 11. RESUMEN FINAL

### Archivos en Raíz Después de Limpieza (Esperado)
```
Total ANTES: 20 archivos .md + 2 .txt + 1 .py + 1 .sh = 24 archivos documentales en raíz
Total DESPUÉS: 3 archivos (.md + configs) en raíz = Reducción del 75%

Razón: Documentación operativa/histórica movida a 00-DOCUMENTACION/
```

### Estado del Proyecto Post-Limpieza
✓ **Raíz clara:** Solo README.md + configuración necesaria
✓ **Documentación centralizada:** Todo en 00-DOCUMENTACION/
✓ **Historial preservado:** En ARCHIVO-HISTORICO-GUADIS/
✓ **Operativa actual:** En OPERATIVA/
✓ **Navegabilidad mejorada:** Estructura lógica y clara

---

## NOTAS FINALES

**⚠️ IMPORTANTE:**
- Este es un REPORTE ÚNICAMENTE - NO se han realizado cambios
- Las recomendaciones requieren validación con el equipo
- Algunas decisiones (fusiones, eliminaciones) requieren confirmación
- El historial git permite revertir cualquier cambio si es necesario

**Próximos Pasos:**
1. Revisar este reporte con el equipo
2. Tomar decisiones sobre duplicaciones
3. Validar archivos marcados como obsoletos
4. Ejecutar limpieza en fases
5. Actualizar documentación referencial después de cambios

**Documento Generado:**
- Fecha: 3 Enero 2026
- Auditor: Claude Code
- Estado: COMPLETO - Lista para revisión

---

*Fin del reporte de auditoría*
