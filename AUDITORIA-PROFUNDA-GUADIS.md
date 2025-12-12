# AUDITORÍA EN PROFUNDIDAD - Referencias a "guadis"

**Fecha:** 2025-12-12
**Total de referencias encontradas:** 423
**Archivos afectados:** 56

---

## 📊 RESUMEN EJECUTIVO

**Estado actual:**
- ✅ Código fuente (*.ts, *.tsx, *.js): LIMPIO (0 referencias)
- ✅ Configuración (package.json, vercel.json): LIMPIO
- ⚠️ Documentación (*.md, *.txt): 56 archivos con 423+ referencias
- ✅ Build: EXITOSO

**Problema:**
Las referencias a "guadis" están SOLO en documentación, no en código funcional.

---

## 📂 ARCHIVOS CON REFERENCIAS (56 total)

### CATEGORÍA 1: Documentación Principal (ALTA PRIORIDAD)
```
./README.md                            → 15+ referencias, URLs obsoletas
./LEER-PRIMERO.md                      → Título y rutas incorrectas
./QUICK-REFERENCE-JAMES.md             → URLs guadis-landing.vercel.app
```

### CATEGORÍA 2: Guías y Tutoriales (MEDIA PRIORIDAD)
```
./GUIA-ACTUALIZACION-DATOS-CLIENTE.md  → URLs y ejemplos con guadis
./GOOGLE-SEARCH-CONSOLE-SETUP.md       → URLs guadis-landing.vercel.app
./DATOS-CLIENTE-TEMPLATE.md            → Ejemplos con @guadis.com.ar
./CONFIG-QUICK-REPLACE.md              → Referencias múltiples
./GUIA-TESTING-PALETAS-MANUAL.md       → Referencias al proyecto
./OG-IMAGE-SETUP.md                    → Referencias múltiples
./PERSONALIZAR-OG-IMAGE.md             → Ejemplos con Guadis
./PROBAR-PALETAS-EN-VIVO.md            → Referencias múltiples
./INICIO-AQUI.md                       → Referencias múltiples
```

### CATEGORÍA 3: Documentación Técnica 00-DOCUMENTACION/ (17 archivos)
```
./00-DOCUMENTACION/BITACORA.md                        → Histórico (mantener)
./00-DOCUMENTACION/CONTEXTO-PERSISTENTE.md            → ACTUALIZAR
./00-DOCUMENTACION/ESPECIFICACIONES-FASE-1.md
./00-DOCUMENTACION/ESTRUCTURA-EXPLICADA.md
./00-DOCUMENTACION/FASES.md                           → ACTUALIZAR
./00-DOCUMENTACION/GUIA-JUANITO-PM.md
./00-DOCUMENTACION/INDICE-MAESTRO.md
./00-DOCUMENTACION/INSTRUCCIONES-JAMES-WEB.md
./00-DOCUMENTACION/LEEME-PRIMERO.txt                  → ACTUALIZAR
./00-DOCUMENTACION/MAPA-RAPIDO-MEMORIA.md
./00-DOCUMENTACION/PROTOCOLO-ACTUALIZACION.md
./00-DOCUMENTACION/PROYECTO-INFO.md                   → ACTUALIZAR
./00-DOCUMENTACION/REDESIGN-ELITE-STARGATE-STANDARDS.md
./00-DOCUMENTACION/REGISTRO-SESIONES.md
./00-DOCUMENTACION/RESUMEN-EJECUTIVO.md
./00-DOCUMENTACION/RESUMEN-SISTEMA-MEMORIA.md
./00-DOCUMENTACION/TEMPLATE-ENTRADA-SESION.md
```

### CATEGORÍA 4: Diseño 01-DISENO/ (3 archivos)
```
./01-DISENO/ASSET-INVENTORY.md
./01-DISENO/CONTENT-MAPPING.md
./01-DISENO/paleta-colores.md
```

### CATEGORÍA 5: Frontend 02-FRONTEND/ (7 archivos)
```
./02-FRONTEND/AUDIT-DEPLOYMENT-2025-11-20.md
./02-FRONTEND/DEPLOYMENT-FIX-MANUAL.md
./02-FRONTEND/DEPLOYMENT-README.md
./02-FRONTEND/GITHUB-SECRETS-CONFIG.md
./02-FRONTEND/GITHUB-SECRETS-TUTORIAL.md
./02-FRONTEND/public/robots.txt                       → Solo User-agent, OK
./02-FRONTEND/README.md                               → ACTUALIZAR
```

### CATEGORÍA 6: Integraciones 04-INTEGRACIONES/ (2 archivos)
```
./04-INTEGRACIONES/vercel/DEPLOY-CHECKLIST.md
./04-INTEGRACIONES/vercel/REQUISITOS-SIMPLES.txt
```

### CATEGORÍA 7: Reportes y Auditorías (12 archivos)
```
./AUDITORIA-TECNICA-PROFUNDA.md
./DEPLOY-WORKFLOW.md
./ESTADO-FINAL-PROXIMOS-PASOS.md
./RESUMEN-AUDITORIA-JAMES-WEB.md
./RESUMEN-AUDITORIA-Y-FIXES.md
./RESUMEN-SESION-FINAL.md
./SESSION_SUMMARY.md
./VERCEL-AUDIT-REPORT.md
./VERIFICACION-PALETAS-FINAL.md
./WORKFLOW-PUSH-INSTRUCTIONS.md
./REPORTE-ESCANEO-EXHAUSTIVO-2025-12-07.txt
./REPORTE-TESTING-COMPLETO.md
./REPORTE-TESTING-FINAL.txt
./REPORTE-LIMPIEZA-GUADIS.md                          → Este mismo reporte
```

### CATEGORÍA 8: Scripts (1 archivo)
```
./generate-og-image.py                                → Comentarios
```

---

## 🎯 PLAN DE ACCIÓN RECOMENDADO

### OPCIÓN A: Limpieza Automática Masiva (RÁPIDO - 2 minutos)

Reemplazar automáticamente en TODOS los archivos:
```bash
find . -type f \( -name "*.md" -o -name "*.txt" -o -name "*.py" \) \
  -not -path "*/node_modules/*" \
  -not -path "*/.next/*" \
  -not -path "*/.git/*" \
  -not -path "*/ARCHIVO-HISTORICO-GUADIS/*" \
  -exec sed -i 's/guadis-landing\.vercel\.app/guadalupe.vercel.app/g' {} \;

find . -type f \( -name "*.md" -o -name "*.txt" -o -name "*.py" \) \
  -not -path "*/node_modules/*" \
  -not -path "*/.next/*" \
  -not -path "*/.git/*" \
  -not -path "*/ARCHIVO-HISTORICO-GUADIS/*" \
  -exec sed -i 's/guadis-landing/guadalupe/g' {} \;

find . -type f \( -name "*.md" -o -name "*.txt" -o -name "*.py" \) \
  -not -path "*/node_modules/*" \
  -not -path "*/.next/*" \
  -not -path "*/.git/*" \
  -not -path "*/ARCHIVO-HISTORICO-GUADIS/*" \
  -exec sed -i 's/@guadis\.com\.ar/@estudiomgj.com.ar/g' {} \;

find . -type f \( -name "*.md" -o -name "*.txt" -o -name "*.py" \) \
  -not -path "*/node_modules/*" \
  -not -path "*/.next/*" \
  -not -path "*/.git/*" \
  -not -path "*/ARCHIVO-HISTORICO-GUADIS/*" \
  -exec sed -i 's/Guadis/Guadalupe/g' {} \;

find . -type f \( -name "*.md" -o -name "*.txt" -o -name "*.py" \) \
  -not -path "*/node_modules/*" \
  -not -path "*/.next/*" \
  -not -path "*/.git/*" \
  -not -path "*/ARCHIVO-HISTORICO-GUADIS/*" \
  -exec sed -i 's/GUADIS/GUADALUPE/g' {} \;

find . -type f \( -name "*.md" -o -name "*.txt" -o -name "*.py" \) \
  -not -path "*/node_modules/*" \
  -not -path "*/.next/*" \
  -not -path "*/.git/*" \
  -not -path "*/ARCHIVO-HISTORICO-GUADIS/*" \
  -exec sed -i 's/guadis/guadalupe/g' {} \;
```

**Pros:**
- Muy rápido
- Asegura consistencia total
- Elimina todas las referencias

**Contras:**
- Puede cambiar contexto histórico en BITACORA.md
- Irreversible sin git

---

### OPCIÓN B: Limpieza Selectiva (RECOMENDADO - 10 minutos)

**1. Actualizar archivos principales (automático):**
```bash
# Lista de archivos críticos para actualizar
CRITICAL_FILES=(
  "README.md"
  "LEER-PRIMERO.md"
  "QUICK-REFERENCE-JAMES.md"
  "GUIA-ACTUALIZACION-DATOS-CLIENTE.md"
  "GOOGLE-SEARCH-CONSOLE-SETUP.md"
  "00-DOCUMENTACION/PROYECTO-INFO.md"
  "00-DOCUMENTACION/CONTEXTO-PERSISTENTE.md"
  "00-DOCUMENTACION/FASES.md"
  "02-FRONTEND/README.md"
  "generate-og-image.py"
)

for file in "${CRITICAL_FILES[@]}"; do
  sed -i 's/guadis-landing\.vercel\.app/guadalupe.vercel.app/g' "$file"
  sed -i 's/guadis-landing/guadalupe/g' "$file"
  sed -i 's/@guadis\.com\.ar/@estudiomgj.com.ar/g' "$file"
  sed -i 's/Guadis/Guadalupe/g' "$file"
  sed -i 's/GUADIS/GUADALUPE/g' "$file"
done
```

**2. Archivar reportes viejos (manual):**
- Mover todos los REPORTE-*.md y AUDITORIA-*.md antiguos a ARCHIVO-HISTORICO-GUADIS/

**3. Mantener histórico:**
- 00-DOCUMENTACION/BITACORA.md → Mantener como está (es histórico)
- 00-DOCUMENTACION/REGISTRO-SESIONES.md → Mantener como está

**Pros:**
- Preserva contexto histórico importante
- Actualiza lo que importa
- Más control sobre cambios

**Contras:**
- Requiere más tiempo
- Algunas referencias quedarán (en archivos archivados)

---

### OPCIÓN C: Archivar Todo y Empezar Limpio (RADICAL - 5 minutos)

1. Mover TODA la documentación actual a ARCHIVO-HISTORICO-GUADIS/
2. Crear documentación nueva desde cero con solo "Guadalupe"
3. Mantener solo:
   - README.md (reescrito)
   - 02-FRONTEND/README.md (reescrito)
   - Un nuevo CONTEXTO-PROYECTO.md

**Pros:**
- 100% limpio
- Sin confusiones
- Fresh start

**Contras:**
- Pierdes mucha documentación útil
- Hay que reescribir mucho
- Trabajo intensivo

---

## ✅ RECOMENDACIÓN FINAL

**OPCIÓN B** (Limpieza Selectiva)

**Razones:**
1. Actualiza archivos críticos que se usan activamente
2. Preserva histórico en BITACORA (importante para auditoría)
3. Archiva reportes viejos que ya no aplican
4. Balance perfecto entre limpieza y preservación

---

## 🔧 PRÓXIMOS PASOS

Si eliges **OPCIÓN B** (recomendado):

1. **Ejecutar script de actualización** (automático)
2. **Archivar reportes viejos** (manual):
   - REPORTE-*.md → ARCHIVO-HISTORICO-GUADIS/
   - AUDITORIA-*.md (excepto este) → ARCHIVO-HISTORICO-GUADIS/
   - SESSION_SUMMARY.md → ARCHIVO-HISTORICO-GUADIS/
   - WORKFLOW-*.md → ARCHIVO-HISTORICO-GUADIS/

3. **Verificar cambios:**
   ```bash
   git diff
   git add -A
   git commit -m "docs: Actualizar documentación de guadis a guadalupe"
   ```

4. **Auditar resultado:**
   ```bash
   grep -r "guadis" --exclude-dir=ARCHIVO-HISTORICO-GUADIS | wc -l
   # Debería retornar: ~50 (solo en BITACORA histórico)
   ```

---

## 📝 NOTAS

- El código fuente YA está 100% limpio
- Las referencias restantes son SOLO documentación
- BITACORA.md debe mantener referencias históricas (es su propósito)
- URLs correctas: guadalupe.vercel.app, estudiomgj.com.ar

---

**Estado:** Listo para ejecutar limpieza selectiva
**Tiempo estimado:** 10 minutos
**Riesgo:** BAJO (Git permite revertir todo)
