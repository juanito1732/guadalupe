# 🎻 Reglas de Despliegue - Guadalupe & Proyectos OSIRIS

## Resumen Ejecutivo

Sistema de CI/CD automatizado para Vercel + GitHub Actions con arquitectura monorepo escalable. Documentado para reutilización en futuras optimizaciones y nuevas páginas web.

---

## 1. ARQUITECTURA DE DESPLIEGUE

### Estructura del Proyecto
```
guadalupe/
├── 02-FRONTEND/              # Aplicación Next.js
│   ├── src/
│   ├── package.json
│   ├── next.config.js
│   └── tsconfig.json
├── vercel.json              # ⭐ CONFIG CRÍTICA (en raíz del repo)
├── .github/workflows/
│   ├── deploy-audit.yml     # Pipeline principal de deploy
│   ├── code-quality.yml     # Validación de código
│   └── deployment-monitor.yml # Monitoreo de salud
└── [otros archivos]
```

### Configuración de Vercel Project
- **Root Directory**: `02-FRONTEND`
- **Framework**: Next.js 14
- **Node.js Version**: 18.x
- **Build Command**: `npm run build`
- **Install Command**: `npm install`

---

## 2. ARCHIVO CRÍTICO: vercel.json

**UBICACIÓN**: Raíz del repositorio (NO en 02-FRONTEND)

**CONTENIDO OBLIGATORIO**:
```json
{
  "name": "guadalupe",
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs",
  "rootDirectory": "02-FRONTEND"
}
```

**POR QUÉ ES CRÍTICO**:
- Define explícitamente dónde está la aplicación (`rootDirectory`)
- Previene conflicto entre configuración de GitHub Actions y Vercel
- Debe estar en la RAÍZ, no en el subdirectorio
- Sin esto: "Error! Unexpected error" en Vercel

---

## 3. WORKFLOW DE GITHUB ACTIONS

### Deploy Audit & Verification (`.github/workflows/deploy-audit.yml`)

**Flujo**:
```
1. Checkout código
   ↓
2. Setup Node.js 18
   ↓
3. npm ci --prefix 02-FRONTEND
   ↓
4. npm run build (en 02-FRONTEND)
   ↓
5. npm run lint
   ↓
6. Deploy a Vercel (DESDE LA RAÍZ DEL PROYECTO)
   ↓
7. Post-deployment verification
   ↓
8. Resumen del workflow
```

**Parámetros críticos del paso de Deploy**:
```yaml
- name: 🚀 Deploy to Vercel
  id: vercel
  uses: amondnet/vercel-action@v25
  with:
    vercel-token: ${{ secrets.VERCEL_TOKEN }}
    github-token: ${{ secrets.GITHUB_TOKEN }}
    vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
    vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
    # ⭐ NO incluir "working-directory: 02-FRONTEND"
    # Debe ejecutarse desde la raíz para que vercel.json sea encontrado
    alias-domains: ''
```

**Secrets necesarios en GitHub**:
- `VERCEL_TOKEN`: Token personal de Vercel
- `VERCEL_ORG_ID`: ID del team/organización en Vercel
- `VERCEL_PROJECT_ID`: ID del proyecto en Vercel
- `GITHUB_TOKEN`: Token de GitHub (automático)

---

## 4. ERRORES COMUNES Y SOLUCIONES

### ❌ Error: "The vercel.json file should be inside of the provided root directory"

**Causa**: vercel.json está en 02-FRONTEND en lugar de la raíz

**Solución**:
```bash
# Mover vercel.json a la raíz
git mv 02-FRONTEND/vercel.json ./vercel.json
git commit -m "fix: Mover vercel.json a raíz del proyecto"
```

### ❌ Error: "Unexpected error. Please try again later. ()"

**Causas posibles**:
1. Parámetro `working-directory` en el paso de Deploy
2. vercel.json en ubicación incorrecta
3. Conflicto entre configuración de Vercel UI y vercel.json

**Solución**:
1. Remover `working-directory` del paso de Deploy
2. Verificar que vercel.json esté en la raíz
3. Verificar que `rootDirectory` en vercel.json coincida con Vercel Project Settings

### ❌ Error: "npm ci cannot find package-lock.json"

**Causa**: package-lock.json está en .gitignore

**Solución**:
```bash
# Force-add el archivo
git add -f 02-FRONTEND/package-lock.json
git commit -m "fix: Agregar package-lock.json al repositorio"
```

### ❌ Error: "Property 'X' does not exist on type..."

**Causa**: Archivos huérfanos después de refactorización

**Solución**:
```bash
# Buscar y eliminar archivos no utilizados
git rm 02-FRONTEND/src/components/UnusedComponent.tsx
git commit -m "refactor: Remover componente no utilizado"
```

---

## 5. FLUJO DE DESARROLLO

### Hacer cambios locales
```bash
cd 02-FRONTEND
npm run dev
# Editar y testear localmente
```

### Commit y push
```bash
git add .
git commit -m "feat: Descripción clara del cambio

Detalles adicionales si es necesario.

🤖 Generated with Claude Code

Co-Authored-By: Claude <noreply@anthropic.com>"

git push origin main
```

### El workflow se ejecuta automáticamente
- Code Quality Check inicia
- Deploy Audit & Verification inicia
- Vercel recibe el deploy
- Post-deployment verification
- Resumen de resultados

### Verificar resultados
```bash
# Ver status del último workflow
gh run list --limit 1 --json status,conclusion,name

# Ver logs detallados
gh run view <RUN_ID> --log
```

---

## 5.1 FLUJO DE TRABAJO: DEV → MAIN (CRÍTICO)

### Ambiente de Desarrollo vs Producción

| Rama | Entorno | URL | Propósito |
|------|---------|-----|----------|
| **dev** | Staging/Preview | Vercel Preview (auto) | Desarrollo y testing |
| **main** | Producción | estudiomsk.com.ar | Cliente final |

### PASO A PASO: Cómo Hacer Cambios

#### 1️⃣ SIEMPRE TRABAJAR EN `dev`
```bash
git checkout dev
git pull origin dev
# Hacer cambios...
git add .
git commit -m "feat: descripción del cambio"
git push origin dev  # ⭐ PUSH A DEV, NO A MAIN
```

#### 2️⃣ TESTEAR EN PREVIEW
- Vercel automáticamente deploya `dev` en una preview URL
- Verifica que los cambios funcionen correctamente
- Revisa en la URL de preview de Vercel

#### 3️⃣ CUANDO ESTÁ LISTO PARA PRODUCCIÓN
```bash
# Cambiar a main
git checkout main
git pull origin main

# Traer cambios de dev a main
git merge dev

# Pushear a producción
git push origin main  # ⭐ Esto dispara el deploy a estudiomsk.com.ar
```

#### 4️⃣ VERIFICAR EL DEPLOYMENT
```bash
# Ver el workflow ejecutándose
gh run list --limit 1 --json status,conclusion,name

# Ir a https://estudiomsk.com.ar y verificar cambios
```

### RESUMEN RÁPIDO
- **Cambios nuevos** → `git checkout dev` → hacer cambios → `git push origin dev`
- **Testear** → Ver en preview de Vercel
- **Listo** → `git checkout main` → `git merge dev` → `git push origin main`
- **Producción actualizada** → Vercel deploya automáticamente a estudiomsk.com.ar

### NUNCA HACER ❌
```bash
git push origin main  # MIENTRAS TRABAJAS EN DEV
# Esto se debe hacer SOLO cuando pasas a producción
```

---

## 6. CONFIGURACIÓN DE SECRETS EN GITHUB

### Cómo obtener los valores

**VERCEL_TOKEN**:
```
1. Ir a: https://vercel.com/account/tokens
2. Crear nuevo token con scope: "Full access"
3. Copiar el valor
```

**VERCEL_ORG_ID** y **VERCEL_PROJECT_ID**:
```
1. Ir a: https://vercel.com/account/settings
2. Team Settings → General
3. Team ID = VERCEL_ORG_ID
4. Ir al dashboard del proyecto
5. Settings → General
6. Project ID = VERCEL_PROJECT_ID
```

### Guardar en GitHub
```bash
gh secret set VERCEL_TOKEN --body "tu_token"
gh secret set VERCEL_ORG_ID --body "tu_org_id"
gh secret set VERCEL_PROJECT_ID --body "tu_project_id"

# Verificar
gh secret list
```

---

## 7. MEJORES PRÁCTICAS OSIRIS

### Para nuevos proyectos web:
1. **Crear vercel.json PRIMERO** en la raíz
2. **Copiar workflows** de este proyecto
3. **Actualizar rutas** según la estructura
4. **Probar localmente** antes de hacer push
5. **Documentar cambios** en este archivo

### Patrones recomendados:
```bash
# Commits atómicos
git commit -m "feat: descripción

Explica el por qué del cambio.

🤖 Generated with Claude Code"

# Siempre incluir información de deployment
# en PRs y commits importantes
```

### Monitoreo:
```bash
# Ver último despliegue
gh run list --limit 1

# Ver logs del deployment
gh run view <ID> --log | grep "🚀 Deploy"

# Verificar en Vercel
open https://vercel.com/juanis-projects-4b76a42a/guadalupe
```

---

## 8. REUTILIZACIÓN EN OTROS PROYECTOS

### Plantilla para nuevo proyecto:

1. **Crear la estructura**:
```bash
mkdir nuevo-proyecto
cd nuevo-proyecto
git init
```

2. **Crear vercel.json** (adaptar rutas):
```json
{
  "name": "nuevo-proyecto",
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs",
  "rootDirectory": "apps/web"  // Adaptar según tu estructura
}
```

3. **Copiar workflows** de `.github/workflows/`:
```bash
cp -r guadalupe/.github/workflows ./
# Editar nombres de proyecto en los workflows
```

4. **Configurar Vercel**:
- Crear proyecto en Vercel
- Notar los valores: ORG_ID y PROJECT_ID
- NO tocar "Root Directory" si vercel.json lo define

5. **Agregar secrets en GitHub**:
```bash
gh secret set VERCEL_TOKEN
gh secret set VERCEL_ORG_ID
gh secret set VERCEL_PROJECT_ID
```

6. **Primer commit**:
```bash
git add .
git commit -m "chore: Inicializar proyecto con setup de deployment"
git push origin main
```

---

## 9. DIAGRAMA DE FLUJO COMPLETO

```
Push a main
    ↓
GitHub detects change
    ↓
├─ Code Quality Check workflow
│  ├─ Install dependencies
│  ├─ Run linter
│  ├─ Run tests (si existen)
│  └─ Upload artifacts
│
└─ Deploy Audit & Verification workflow
   ├─ Checkout code
   ├─ Setup Node.js
   ├─ Install (npm ci --prefix 02-FRONTEND)
   ├─ Build (npm run build)
   ├─ Lint check
   ├─ Build verification
   ├─ DEPLOY TO VERCEL (desde la raíz)
   │  ├─ Lee vercel.json
   │  ├─ Navega a rootDirectory
   │  ├─ Ejecuta build
   │  └─ Despliega
   ├─ Post-deployment verification
   └─ Summary report

    ↓
Vercel Dashboard actualizado
    ↓
URL de preview disponible
    ↓
Verificación de salud
```

---

## 10. CHECKLIST PARA DEPLOYMENTS FUTUROS

- [ ] Código funciona localmente: `npm run dev`
- [ ] Tests pasan: `npm run test` (si existen)
- [ ] Linter pasa: `npm run lint`
- [ ] Commit message es claro y descriptivo
- [ ] Se incluyó explicación del cambio
- [ ] vercel.json existe en la raíz
- [ ] Secrets están configurados en GitHub
- [ ] Push a main dispara automáticamente
- [ ] Workflow completa sin errores
- [ ] Preview URL es accesible
- [ ] Vercel Dashboard muestra deployment exitoso

---

## 11. RECURSOS Y REFERENCIAS

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [amondnet/vercel-action](https://github.com/amondnet/vercel-action)

---

## 12. TAILWIND CSS: SAFELIST Y PURGE ⚠️ CRÍTICO

### ❌ Problema: Clases CSS no aparecen en producción

**Síntoma**: Estilos funcionan en desarrollo pero no en producción/preview de Vercel.

**Causa**: Tailwind CSS elimina clases que no detecta en el código durante el proceso de "purge" (optimización).

**Ejemplo del problema**:
```tsx
// Footer.tsx - clases dinámicas aplicadas
<p className="max-w-xl md:max-w-2xl lg:max-w-3xl">
```

Si estas clases se agregan después del build inicial, Tailwind puede no detectarlas y eliminarlas del CSS final.

### ✅ Solución: Usar safelist en tailwind.config.ts

**Archivo**: `02-FRONTEND/tailwind.config.ts`

```typescript
const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // ⭐ AGREGAR SAFELIST PARA CLASES DINÁMICAS
  safelist: [
    'max-w-3xl',
    'md:max-w-2xl',
    'lg:max-w-3xl',
    // Agregar aquí cualquier clase que se use dinámicamente
  ],
  theme: {
    // ... resto de la config
  }
}
```

### Cuándo usar safelist:

1. **Clases agregadas después del build inicial**
2. **Clases aplicadas dinámicamente** (via props, state, etc.)
3. **Clases con variantes responsivas complejas** (sm:, md:, lg:, xl:)
4. **Clases de componentes reutilizables** que pueden no estar en uso inicialmente

### Verificar que las clases se generaron:

```bash
# Después del build
grep "lg:max-w-3xl" 02-FRONTEND/.next/static/css/*.css

# Debe retornar algo como:
# .lg\:max-w-3xl{max-width:48rem}
```

### ⚠️ IMPORTANTE:
- **SIEMPRE** limpiar el cache después de cambiar `tailwind.config.ts`:
  ```bash
  rm -rf 02-FRONTEND/.next
  npm run build
  ```
- **NO abusar** de safelist (aumenta el tamaño del CSS)
- **PREFERIR** detectar clases automáticamente cuando sea posible

### Debugging:

Si los estilos no aparecen en producción:

1. Verificar que la clase está en `tailwind.config.ts` safelist
2. Limpiar `.next/` localmente
3. Hacer rebuild: `npm run build`
4. Verificar CSS generado: `grep "tu-clase" .next/static/css/*.css`
5. Commit y push
6. Forzar redeploy en Vercel (sin cache)

---

**Documento creado**: 2025-12-08
**Última actualización**: 2025-12-19
**Versión**: 1.1
**Aplicable a**: Guadalupe y proyectos OSIRIS futuros
