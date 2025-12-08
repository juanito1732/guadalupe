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

**Documento creado**: 2025-12-08
**Última actualización**: 2025-12-08
**Versión**: 1.0
**Aplicable a**: Guadalupe y proyectos OSIRIS futuros
