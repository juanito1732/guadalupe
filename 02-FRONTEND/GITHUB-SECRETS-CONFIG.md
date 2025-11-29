# 🔧 Configuración Final - GitHub Secrets (UNA SOLA VEZ)

## ✅ Estado Actual

- **Deployment en vivo**: ✅ COMPLETADO
- **Sitio**: https://guadis-landing.vercel.app
- **Nuevo JS hash**: `page-5d1cb3ba70c702f1` ✅
- **Paletas actualizadas**: ✅ (GRIS, ROSA, AZULES, EARTH con 5 colores cada una)
- **GitHub Actions Workflow**: ✅ Listo para usar

---

## 📋 Lo que necesitas hacer (5 minutos)

### PASO 1: Ir a GitHub Secrets
```
https://github.com/juanito1732/guadis-landing/settings/secrets/actions
```

### PASO 2: Crear 3 Secretos

Haz click en **"New repository secret"** y crea estos 3:

#### Secret 1: VERCEL_TOKEN
- **Name**: `VERCEL_TOKEN`
- **Value**: `TldAXkIZvawEQNKFWjeC01DZ`
- Click: **Add secret**

#### Secret 2: VERCEL_ORG_ID
- **Name**: `VERCEL_ORG_ID`
- **Value**: `team_8G43oEp2euczFyMvHlYZdFIG`
- Click: **Add secret**

#### Secret 3: VERCEL_PROJECT_ID
- **Name**: `VERCEL_PROJECT_ID`
- **Value**: `prj_4Sjf90YF0rMqf4kZ2ew4hW5T6Gep`
- Click: **Add secret**

---

## ✅ Después de configurar los Secretos

De ahora en adelante:

**Cada vez que hagas un commit a `main`**:
1. GitHub Actions detecta el commit
2. Ejecuta el build automáticamente
3. Verifica que todo compile bien
4. Deploya a Vercel automáticamente
5. El sitio se actualiza en 2-3 minutos

**NO necesitas hacer nada más. Es completamente automático.**

---

## 📊 Flujo Automático

```
Tu commit → GitHub → GitHub Actions Workflow
                         ↓
                    Build (npm run build)
                         ↓
                    Verificación (paletas OK?)
                         ↓
                    Deploy a Vercel
                         ↓
                    Sitio actualizado ✅
```

---

## 🔍 Verificar que funciona

1. **Ve a Actions tab**: https://github.com/juanito1732/guadis-landing/actions
2. **Deberías ver el último workflow en la lista**
3. **Si es verde (✅)**: Todo funcionó perfecto
4. **Si es rojo (❌)**: Haz click para ver qué falló

---

## 📝 Próximas veces que quieras hacer cambios

Simplemente:

```bash
# Haz tus cambios localmente
# ...

# Commit y push
git add .
git commit -m "tu mensaje"
git push origin main

# ¡Listo! GitHub Actions se encarga del resto automáticamente
```

---

## 🆘 Si algo no funciona

**En el workflow fallando**:
1. Ve a https://github.com/juanito1732/guadis-landing/actions
2. Click en el workflow que falló (se ve en rojo)
3. Busca el error en los logs
4. Los errores más comunes son:
   - Falta configurar los GitHub Secrets (este paso)
   - Errores de build (revisa el código TypeScript)
   - Problemas con dependencias (ejecuta `npm install`)

---

## 📚 Archivos de configuración

- **`.github/workflows/deploy.yml`**: Define el workflow de CI/CD
- **`vercel.json`**: Configuración de Vercel
- **`SETUP-AUTOMATION.sh`**: Script para automatizar (si lo necesitas en el futuro)

---

## 🎯 Resumen

**De ahora en adelante, CADA commit → AUTO-DEPLOY ✅**

No necesitas:
- ❌ Hacer redeploy manual en Vercel
- ❌ Ejecutar comandos de deploy
- ❌ Esperar a que alguien lo depliegue
- ❌ Recordar nada

Solo:
- ✅ Haz tus cambios
- ✅ Commit y push a `main`
- ✅ ¡Listo! Se deploya automáticamente en 2-3 minutos

---

**Generado**: 2025-11-20
**Estado**: ✅ LISTO PARA USAR
