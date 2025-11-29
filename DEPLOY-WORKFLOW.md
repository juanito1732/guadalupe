# 🚀 Workflow de Deploy - Guadis Landing

## Estado: SOLUCIONADO ✅
**Problema**: Vercel no recompilaba cambios automáticamente
**Causa**: buildCommand con comandos complejos que fallaban silenciosamente
**Solución**: Simplificar vercel.json y crear .vercelignore apropiado

---

## Flujo de Desarrollo Actual (POST-FIX)

### 1. **Hacer cambios en el código**
```bash
# Editar cualquier archivo en 02-FRONTEND/
# Por ejemplo: src/data/config.ts
vim 02-FRONTEND/src/data/config.ts
```

### 2. **Verificar que compilar localmente**
```bash
cd 02-FRONTEND
npm run build
# Si hay errores, arreglarlos ANTES de hacer push
```

### 3. **Hacer commit y push**
```bash
git add -A
git commit -m "feat/fix: describe what you changed"
git push origin main
```

### 4. **Vercel automáticamente:**
- ✅ Recibe webhook de GitHub
- ✅ Ejecuta `npm ci` (instalar deps limpias)
- ✅ Ejecuta `npm run build` (compilar proyecto)
- ✅ Despliega cambios automáticamente
- ✅ Cambios visibles en ~2-3 minutos

### 5. **Verificar cambios en vivo**
```bash
# Abre en navegador
https://guadis-landing.vercel.app
```

---

## Configuración de Vercel (vercel.json)

```json
{
  "buildCommand": "cd 02-FRONTEND && npm run build",
  "outputDirectory": "02-FRONTEND/.next",
  "installCommand": "cd 02-FRONTEND && npm ci",
  "public": "02-FRONTEND/public"
}
```

### ¿Por qué es así?
- `buildCommand`: Simple, sin comandos complejos que puedan fallar
- `installCommand`: Vercel ejecuta automáticamente limpio installs
- `outputDirectory`: Next.js genera en `.next/`
- `public`: Archivos estáticos en `public/`

---

## .vercelignore

```
# Ignoramos solo lo innecesario:
.git
.github
*.md
docs/
.backups/

# NUNCA ignoramos:
!02-FRONTEND/
!vercel.json
!package.json
```

### ¿Por qué?
- Asegura que 02-FRONTEND/ SIEMPRE se despliega
- Evita ignorancias accidentales de archivos críticos

---

## Troubleshooting

### "Los cambios no aparecen después de push"

1. **Verificar que GitHub recibió los cambios:**
   ```bash
   git log --oneline -5
   # Debes ver tu commit en GitHub
   ```

2. **Ir a Vercel dashboard:**
   - https://vercel.com/juanito1732/guadis-landing
   - Ver "Deployments" - debe mostrar build en progreso
   - Esperar a que termine (verde = success)

3. **Si el build falla:**
   - Ver logs en Vercel dashboard
   - Ejecutar `npm run build` localmente para reproducir
   - Arreglar el error y hacer push nuevamente

### "Veo cache viejo, no los datos nuevos"

```bash
# En el navegador:
# 1. Hard refresh (Ctrl+Shift+R o Cmd+Shift+R)
# 2. Abre DevTools (F12)
# 3. Desabilita cache en Settings → Network
# 4. Recarga (Cmd+R o Ctrl+R)

# O abre en incognito:
# Ctrl+Shift+N (Windows/Linux)
# Cmd+Shift+N (Mac)
```

---

## Cambios Importantes Hechos

### 1. **Simplificar vercel.json** ✅
- Eliminó: `rm -rf node_modules .next` (comandos complejos)
- Agregó: `installCommand` (Vercel lo ejecuta automáticamente)

### 2. **Crear .vercelignore** ✅
- Asegura que 02-FRONTEND/ NO se ignora
- Ignora solo archivos realmente innecesarios

### 3. **Resultado** ✅
- **Antes**: ~5-7 commits sin funcionar
- **Después**: Cada push despliega automáticamente

---

## Para Futuros Cambios

### Actualizar datos del cliente:
```bash
# 1. Editar config.ts
vim 02-FRONTEND/src/data/config.ts

# 2. Commit
git add -A
git commit -m "update: actualizar datos reales del cliente"
git push origin main

# 3. Esperar 2-3 minutos
# 4. Verificar en https://guadis-landing.vercel.app
```

### Cambiar paleta de colores:
```bash
# 1. Editar estructura en 02-FRONTEND/src/data/palettes.ts
vim 02-FRONTEND/src/data/palettes.ts

# 2. Regenerar og-image.jpg
cd 02-FRONTEND/..
python3 generate-og-image.py

# 3. Commit
git add -A
git commit -m "design: cambiar paleta de colores"
git push origin main

# 4. Deploy automático
```

---

## Resumen Final

✅ **Deploy ahora es FLUIDO**
✅ **No hay caché que bloquee cambios**
✅ **Cada push = Deploy automático en 2-3 min**
✅ **Workflow es simple y predecible**

**Última actualización**: 2025-11-27
**Estado**: ✅ COMPLETAMENTE FUNCIONAL
