# MATRIZ DE ACCIONES - AUDITORÍA DE LIMPIEZA
**Proyecto:** Guadalupe
**Fecha:** 3 Enero 2026
**Tipo:** Plan de Acción Detallado

---

## TABLA MAESTRA: Todos los Archivos a Revisar

### GRUPO A: ARCHIVOS CLARAMENTE OBSOLETOS - MOVER A ARCHIVO-HISTORICO

| Archivo | Tamaño | Fecha | Descripción | Acción |
|---------|--------|-------|-------------|--------|
| `AUDITORIA-ERROR-CLAUDE-31DIC2025.md` | 12.5 KB | 31-Dec-25 | Análisis de error de sesión anterior | ➜ ARCHIVAR |
| `RESUMEN-AUDITORIA-31DIC.md` | 5.9 KB | 31-Dec-25 | Resumen de auditoría | ➜ ARCHIVAR |
| `AUDITORIA-DNS-SSL-13DIC2025.md` | 7.9 KB | 13-Dec-25 | DNS/SSL audit completado | ➜ ARCHIVAR |
| `PROXIMOS-PASOS-DEPLOYMENT.md` | 6.8 KB | 13-Dec-25 | Pasos ya completados | ➜ ARCHIVAR |
| `RESUMEN-FINAL-CAMBIOS.md` | 7.4 KB | 13-Dec-25 | Cambios ya implementados | ➜ ARCHIVAR |
| `REPORTE-TESTING-FINAL.txt` | 14.2 KB | 19-Nov-25 | Reporte histórico | ➜ ARCHIVAR |
| `REPORTE-ESCANEO-EXHAUSTIVO-2025-12-07.txt` | 25.4 KB | 07-Dec-25 | Escaneo histórico | ➜ ARCHIVAR |

**SUBTOTAL:** 7 archivos | 79.8 KB | **ACCIÓN: Mover a 00-DOCUMENTACION/ARCHIVO-HISTORICO-GUADIS/**

**COMANDO:** (Después de validación)
```bash
mv AUDITORIA-ERROR-CLAUDE-31DIC2025.md 00-DOCUMENTACION/ARCHIVO-HISTORICO-GUADIS/
mv RESUMEN-AUDITORIA-31DIC.md 00-DOCUMENTACION/ARCHIVO-HISTORICO-GUADIS/
mv AUDITORIA-DNS-SSL-13DIC2025.md 00-DOCUMENTACION/ARCHIVO-HISTORICO-GUADIS/
mv PROXIMOS-PASOS-DEPLOYMENT.md 00-DOCUMENTACION/ARCHIVO-HISTORICO-GUADIS/
mv RESUMEN-FINAL-CAMBIOS.md 00-DOCUMENTACION/ARCHIVO-HISTORICO-GUADIS/
mv REPORTE-TESTING-FINAL.txt 00-DOCUMENTACION/ARCHIVO-HISTORICO-GUADIS/
mv REPORTE-ESCANEO-EXHAUSTIVO-2025-12-07.txt 00-DOCUMENTACION/ARCHIVO-HISTORICO-GUADIS/
```

---

### GRUPO B: ARCHIVOS PROBABLEMENTE OBSOLETOS - REVISAR PRIMERO

| Archivo | Tamaño | Fecha | Descripción | Acción | Pregunta Crítica |
|---------|--------|-------|-------------|--------|-----------------|
| `GUIA-TESTING-PALETAS-MANUAL.md` | 11.0 KB | 19-Nov-25 | Guía testing manual | ? REVISAR | ¿Sigue siendo válida la guía? |
| `PROBAR-PALETAS-EN-VIVO.md` | 8.3 KB | 19-Nov-25 | Prueba paletas en vivo | ? REVISAR | ¿Se realizan estas pruebas aún? |

**SUBTOTAL:** 2 archivos | 19.3 KB | **ACCIÓN: Validar con equipo, luego MOVER o MANTENER**

**VALIDACIÓN REQUERIDA:**
- [ ] ¿Existen cambios recientes en commits de estos archivos?
- [ ] ¿El equipo usa estas guías actualmente?
- [ ] ¿Hay referencias a estas guías en otros documentos?

---

### GRUPO C: ARCHIVOS DE CONFIGURACIÓN Y SETUP - REVISAR DUPLICACIÓN

| Archivo | Tamaño | Ubicación Alternativa | Análisis | Acción |
|---------|--------|----------------------|----------|--------|
| `vercel.json` | 0.2 KB | `/02-FRONTEND/vercel.json` | **DUPLICADO** - Configuraciones diferentes | ⚠️ DECIDIR |
| `package.json` | 0.7 KB | `/02-FRONTEND/package.json` | **CORRECTO** - Workspace vs proyecto específico | ✓ MANTENER |
| `README.md` | 11.1 KB | (Raíz) | **CORRECTO** - Punto de entrada | ✓ MANTENER |

**VERIFICACIÓN DE vercel.json:**

**Raíz (`/vercel.json`):**
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

**Frontend (`/02-FRONTEND/vercel.json`):**
```json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm ci"
}
```

**DIFERENCIAS:**
- Raíz especifica workspace (`-w 02-FRONTEND`)
- Frontend es más simple
- installCommand: `npm install` vs `npm ci` (difference significativa)

**DECISIÓN REQUERIDA:**
- [ ] ¿Es 02-FRONTEND proyecto independiente? → SI: Mantener ambos | NO: Eliminar 02-FRONTEND/vercel.json
- [ ] ¿Está documentada esta distinción? → Si no, agregar nota a DEPLOYMENT_RULES.md

---

### GRUPO D: ARCHIVOS CON POTENCIAL DUPLICACIÓN

| Archivo 1 | Archivo 2 | Análisis | Acción |
|-----------|-----------|----------|--------|
| `DEPLOYMENT_RULES.md` (12.9 KB) | `DEPLOY-WORKFLOW.md` (4.1 KB) | Similar tema, posible duplicación | ⚠️ REVISAR CONTENIDO |
| `OG-IMAGE-SETUP.md` (10.4 KB) | `PERSONALIZAR-OG-IMAGE.md` (5.5 KB) | Similar tema, posible duplicación | ⚠️ REVISAR CONTENIDO |
| `ESTADO-PROYECTO-ACTUALIZADO.md` (8.9 KB) | `00-DOCUMENTACION/RESUMEN-EJECUTIVO.md` | Similar propósito, posible duplicación | ⚠️ REVISAR CONTENIDO |

**INVESTIGACIÓN REQUERIDA:**

#### 1. DEPLOYMENT_RULES vs DEPLOY-WORKFLOW
```
DEPLOYMENT_RULES.md contiene:
  ✓ Arquitectura de despliegue
  ✓ Reglas de CI/CD
  ✓ Sistema automatizado
  ✓ Reutilización para futuros proyectos

DEPLOY-WORKFLOW.md contiene:
  ✓ Workflow de deploy para guadis-landing
  ✓ Problema específico resuelto
  ✓ Estado: SOLUCIONADO
  ✓ Flujo de desarrollo POST-FIX

CONCLUSIÓN: PROBABLEMENTE SON COMPLEMENTARIOS
  - DEPLOYMENT_RULES = General/Arquitectura
  - DEPLOY-WORKFLOW = Específico/Histórico

RECOMENDACIÓN:
  [ ] Mover DEPLOY-WORKFLOW a ARCHIVO-HISTORICO como referencia
  [ ] O documentar claramente la diferencia en ambos archivos
```

#### 2. OG-IMAGE-SETUP vs PERSONALIZAR-OG-IMAGE
```
OG-IMAGE-SETUP.md contiene:
  ✓ ¿Qué es Open Graph Image?
  ✓ Importancia (aparece en redes)
  ✓ Formato y dimensiones técnicas
  ✓ Ubicación del archivo

PERSONALIZAR-OG-IMAGE.md contiene:
  ✓ Ubicación del archivo generado
  ✓ Tamaño optimizado
  ✓ Dimensiones específicas
  ✓ Guía de personalización

CONCLUSIÓN: SON COMPLEMENTARIOS pero REDUNDANTES
  - Primero dice "qué es"
  - Segundo dice "cómo personalizarlo"
  - Pero ambos mencionan ubicación y dimensiones

RECOMENDACIÓN:
  [ ] Opción 1: Fusionar en OG-IMAGE-GUIA-COMPLETA.md
  [ ] Opción 2: Mantener separados pero documentar diferencia clara
  [ ] Si se mantienen: Referenciar uno al otro para evitar lecturas duplicadas
```

#### 3. ESTADO-PROYECTO vs RESUMEN-EJECUTIVO
```
ESTADO-PROYECTO-ACTUALIZADO.md (31-Dec-25):
  ✓ Estado del proyecto
  ✓ Fecha reciente
  ✓ Versión 2.1.0
  ✓ Información fresca

RESUMEN-EJECUTIVO.md (04-Nov-25):
  ✓ Resumen ejecutivo
  ✓ Fecha más antigua
  ✓ Marcado como "archivo de referencia"
  ✓ Estructura similar

CONCLUSIÓN: PROBABLEMENTE DUPLICADOS
  - ESTADO-PROYECTO es más reciente
  - RESUMEN-EJECUTIVO está marcado como referencia

RECOMENDACIÓN:
  [ ] Revisar contenido detallado de ambos
  [ ] Usar el más reciente como fuente de verdad
  [ ] Eliminar o archivar el más antiguo
  [ ] Actualizar CONTEXTO-PERSISTENTE.md con la info más reciente
```

---

### GRUPO E: ARCHIVOS OPERATIVOS A MOVER A 00-DOCUMENTACION/

| Archivo | Tamaño | Propósito | Ubicación Destino | Razón Mover |
|---------|--------|----------|-------------------|-------------|
| `GOOGLE-SEARCH-CONSOLE-SETUP.md` | 10.1 KB | Setup de Google Search Console | 00-DOCUMENTACION/ | Guía operativa permanente |
| `VERCEL-ANALYTICS-SETUP.md` | 13.7 KB | Setup de Vercel Analytics | 00-DOCUMENTACION/ | Guía operativa permanente |
| `GUIA-CONFIGURACION-DNS-NIC-ARGENTINA.md` | 7.2 KB | Guía configuración DNS | 00-DOCUMENTACION/OPERATIVA/ | Guía específica cliente |
| `GUIA-ACTUALIZACION-DATOS-CLIENTE.md` | 10.8 KB | Actualización datos cliente | 00-DOCUMENTACION/OPERATIVA/ | Guía operativa específica |
| `DEPLOY-WORKFLOW.md` | 4.1 KB | Workflow deployment | 00-DOCUMENTACION/ARCHIVO-HISTORICO/ | Documentación histórica |
| `OPTIMIZACIONES-MOBILE.md` | 9.0 KB | Optimizaciones mobile | 00-DOCUMENTACION/ | Documentación técnica |

**SUBTOTAL:** 6 archivos | 54.9 KB | **ACCIÓN: Mover a 00-DOCUMENTACION/** (después de resolver duplicaciones)

**COMANDO:** (Después de resolver duplicaciones)
```bash
# Crear carpeta si no existe
mkdir -p 00-DOCUMENTACION/OPERATIVA/

# Mover a raíz de DOCUMENTACION
mv GOOGLE-SEARCH-CONSOLE-SETUP.md 00-DOCUMENTACION/
mv VERCEL-ANALYTICS-SETUP.md 00-DOCUMENTACION/
mv OPTIMIZACIONES-MOBILE.md 00-DOCUMENTACION/

# Mover a OPERATIVA
mv GUIA-CONFIGURACION-DNS-NIC-ARGENTINA.md 00-DOCUMENTACION/OPERATIVA/
mv GUIA-ACTUALIZACION-DATOS-CLIENTE.md 00-DOCUMENTACION/OPERATIVA/

# Mover a ARCHIVO-HISTORICO después de decisión sobre duplicación
# mv DEPLOY-WORKFLOW.md 00-DOCUMENTACION/ARCHIVO-HISTORICO-GUADIS/
```

---

### GRUPO F: ARCHIVOS DE TEMPLATES Y CONFIGURACIÓN RÁPIDA

| Archivo | Tamaño | Propósito | Ubicación Destino | Razón Mover |
|---------|--------|----------|-------------------|-------------|
| `CONFIG-QUICK-REPLACE.md` | 5.8 KB | Guía reemplazo config.ts | 00-DOCUMENTACION/OPERATIVA/ | Guía operativa |
| `DATOS-CLIENTE-TEMPLATE.md` | 7.8 KB | Template datos cliente | 00-DOCUMENTACION/OPERATIVA/ | Template operativo |

**SUBTOTAL:** 2 archivos | 13.6 KB | **ACCIÓN: Mover a 00-DOCUMENTACION/OPERATIVA/**

**COMANDO:**
```bash
mv CONFIG-QUICK-REPLACE.md 00-DOCUMENTACION/OPERATIVA/
mv DATOS-CLIENTE-TEMPLATE.md 00-DOCUMENTACION/OPERATIVA/
```

---

### GRUPO G: ARCHIVOS DE OG-IMAGE (Resolver Duplicación Primero)

| Archivo | Tamaño | Acción Condicional |
|---------|--------|-------------------|
| `OG-IMAGE-SETUP.md` | 10.4 KB | Si FUSIONAR: → Eliminar. Si SEPARAR: → Mover a 00-DOCUMENTACION/OPERATIVA/ |
| `PERSONALIZAR-OG-IMAGE.md` | 5.5 KB | Si FUSIONAR: → Crear nuevo archivo. Si SEPARAR: → Mover a 00-DOCUMENTACION/OPERATIVA/ |

**DECISIÓN REQUERIDA:**
- [ ] FUSIONAR: Crear `OG-IMAGE-GUIA-COMPLETA.md` con contenido de ambos
- [ ] SEPARAR: Mantener ambos pero documentar diferencia clara

**COMANDO (Opción A - Fusionar):**
```bash
# Se requiere edición manual para fusionar contenidos
# Luego eliminar originales
# mv OG-IMAGE-GUIA-COMPLETA.md 00-DOCUMENTACION/OPERATIVA/
# rm OG-IMAGE-SETUP.md
# rm PERSONALIZAR-OG-IMAGE.md
```

**COMANDO (Opción B - Separar):**
```bash
mv OG-IMAGE-SETUP.md 00-DOCUMENTACION/OPERATIVA/
mv PERSONALIZAR-OG-IMAGE.md 00-DOCUMENTACION/OPERATIVA/
```

---

### GRUPO H: ARCHIVOS AUXILIARES - REVISAR USO

| Archivo | Tamaño | Tipo | Pregunta | Acción Condicional |
|---------|--------|------|----------|-------------------|
| `generate-og-image.py` | 6.3 KB | Script Python | ¿Se ejecuta aún? | Si NO: Archivar. Si SÍ: Mover a `/scripts/` |
| `verificar-nameservers.sh` | 1.3 KB | Script Shell | ¿Se ejecuta aún? | Si NO: Archivar. Si SÍ: Mover a `/scripts/` |

**INVESTIGACIÓN REQUERIDA:**
```bash
# Buscar usos recientes en commits
git log --name-only --oneline | grep -E "generate-og-image.py|verificar-nameservers.sh"

# Buscar referencias en código o documentación
grep -r "generate-og-image" --include="*.md" --include="*.js" --include="*.ts"
grep -r "verificar-nameservers" --include="*.md" --include="*.sh"
```

---

## RESUMEN DE ACCIONES POR GRUPO

### Total de Archivos a Revisar: 24

| Grupo | Cantidad | Acción | Prioridad | Decisión |
|-------|----------|--------|-----------|----------|
| A - Claramente Obsoletos | 7 | Mover a ARCHIVO-HISTORICO | 🔴 ALTA | ✓ Decidida |
| B - Probablemente Obsoletos | 2 | Revisar + Mover | 🟡 MEDIA | ⏳ Requiere equipo |
| C - Configuración/Duplicada | 3 | Revisar duplicación | 🟡 MEDIA | ⏳ Requiere equipo |
| D - Potencial Duplicación | 3 | Revisar contenido | 🟡 MEDIA | ⏳ Requiere equipo |
| E - Operativos a Mover | 6 | Mover a DOCUMENTACION | 🟡 MEDIA | ⏳ Tras resolver duplicaciones |
| F - Templates a Mover | 2 | Mover a OPERATIVA | 🟡 MEDIA | ✓ Decidida |
| G - OG-Image a Resolver | 2 | Fusionar o Separar | 🟡 MEDIA | ⏳ Requiere equipo |
| H - Auxiliares a Revisar | 2 | Revisar uso | 🟢 BAJA | ⏳ Requiere equipo |

---

## PLAN DE EJECUCIÓN PASO A PASO

### PASO 1: Decisiones Previas (0.5 horas)
- [ ] Equipo revisa hallazgos en duplicaciones
- [ ] Decidir qué hacer con:
  - [ ] DEPLOYMENT_RULES.md vs DEPLOY-WORKFLOW.md
  - [ ] OG-IMAGE-SETUP.md vs PERSONALIZAR-OG-IMAGE.md
  - [ ] ESTADO-PROYECTO-ACTUALIZADO.md vs RESUMEN-EJECUTIVO.md
  - [ ] vercel.json en 02-FRONTEND/
- [ ] Validar si archivos "probablemente obsoletos" están en uso
- [ ] Revisar si generate-og-image.py y .sh se usan

### PASO 2: Preparación (0.5 horas)
- [ ] Crear branch: `cleanup/documentacion-2026-01-03`
- [ ] Crear carpeta: `00-DOCUMENTACION/OPERATIVA/`
- [ ] Crear backup/snapshot de estado actual

### PASO 3: Ejecución Grupo A (0.5 horas)
- [ ] Mover 7 archivos claramente obsoletos a ARCHIVO-HISTORICO
- [ ] Commit: "Archive obsolete error audit documents from 31-Dec"

### PASO 4: Ejecución Grupo B (0.5 horas)
- [ ] Mover archivos probablemente obsoletos (si validación = obsoleto)
- [ ] Commit: "Archive testing guides (validated as historical)"

### PASO 5: Ejecución Grupo E+F (1 hora)
- [ ] Mover archivos operativos a 00-DOCUMENTACION/
- [ ] Mover templates a 00-DOCUMENTACION/OPERATIVA/
- [ ] Commit: "Move operational guides to documentation directory"

### PASO 6: Ejecución Grupo D - OG-IMAGE (0.5 horas)
- [ ] Si FUSIONAR: Crear nuevo archivo, eliminar originales
- [ ] Si SEPARAR: Mover ambos, documentar diferencia
- [ ] Commit: "Consolidate OG-Image documentation"

### PASO 7: Ejecución Grupo D - Deployment (0.5 horas)
- [ ] Decidir qué hacer con DEPLOY-WORKFLOW
- [ ] Si mover: Mover a ARCHIVO-HISTORICO
- [ ] Commit: "Consolidate deployment documentation"

### PASO 8: Ejecución Grupo C - vercel.json (0.25 horas)
- [ ] Si eliminar: Eliminar /02-FRONTEND/vercel.json
- [ ] Si mantener: Documentar razón en DEPLOYMENT_RULES.md
- [ ] Commit: "Resolve vercel.json duplication"

### PASO 9: Actualizar Referencias (1 hora)
- [ ] Actualizar INDICE-MAESTRO.md con nueva estructura
- [ ] Actualizar README.md si hay referencias
- [ ] Buscar enlaces rotos en documentación
- [ ] Commit: "Update documentation index and references"

### PASO 10: Validación Final (1 hora)
- [ ] Revisar visualmente la nueva estructura
- [ ] Buscar archivos con nombres similares (duplicaciones)
- [ ] Verificar que raíz está limpia
- [ ] Confirmar que 00-DOCUMENTACION/ está bien organizado
- [ ] Commit: "Final cleanup validation"

### PASO 11: Pull Request y Merge (0.5 horas)
- [ ] Crear PR con descripción del cambio
- [ ] Revisión de cambios
- [ ] Merge a main cuando sea apropiado
- [ ] Notificar equipo

**TIEMPO TOTAL ESTIMADO:** 6-7 horas (en 2-3 sesiones)

---

## DESPUÉS DE LA LIMPIEZA: MANTENIMIENTO

### Actualizar Documentación
- [ ] INDICE-MAESTRO.md con nueva estructura
- [ ] README.md si tiene referencias a archivos movidos
- [ ] CONTEXTO-PERSISTENTE.md con estado actual
- [ ] Agregar nota en DEPLOYMENT_RULES.md sobre estructura

### Comunicar al Equipo
- [ ] Notificar cambios de estructura
- [ ] Compartir nueva navegación de documentos
- [ ] Agregar guía rápida de "dónde encontrar qué"

### Establecer Protocolo
- [ ] Documentación operativa → 00-DOCUMENTACION/OPERATIVA/
- [ ] Documentación histórica/obsoleta → ARCHIVO-HISTORICO/
- [ ] Configuración de proyecto → Raíz (README + DEPLOYMENT_RULES)

---

**Documento Preparado:** 3 Enero 2026
**Auditor:** Claude Code
**Status:** LISTO PARA DECISIONES DEL EQUIPO

---

*Próximo paso: Equipo revisa decisiones requeridas y proporciona confirmaciones*
