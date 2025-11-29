# 🔐 GitHub Secrets - Tutorial Completo

## En 2 Palabras

Tienes que agregar 3 "contraseñas secretas" en GitHub para que el workflow automático pueda acceder a Vercel.

---

## 🎯 Resumen Rápido

| Secret | Valor |
|--------|-------|
| **VERCEL_TOKEN** | `TldAXkIZvawEQNKFWjeC01DZ` |
| **VERCEL_ORG_ID** | `team_8G43oEp2euczFyMvHlYZdFIG` |
| **VERCEL_PROJECT_ID** | `prj_4Sjf90YF0rMqf4kZ2ew4hW5T6Gep` |

---

## ✅ Paso 1: Ir a GitHub Secrets

Abre esta URL directamente:
```
https://github.com/juanito1732/guadis-landing/settings/secrets/actions
```

O navega:
1. Repositorio: https://github.com/juanito1732/guadis-landing
2. Settings (pestaña superior)
3. Secrets and variables (izquierda)
4. Actions

---

## ✅ Paso 2: Crear Secret 1 - VERCEL_TOKEN

1. Click en **"New repository secret"**

2. Completa el formulario:
   - **Name**: `VERCEL_TOKEN`
   - **Value**: `TldAXkIZvawEQNKFWjeC01DZ`

3. Click en **"Add secret"**

---

## ✅ Paso 3: Crear Secret 2 - VERCEL_ORG_ID

1. Click en **"New repository secret"**

2. Completa el formulario:
   - **Name**: `VERCEL_ORG_ID`
   - **Value**: `team_8G43oEp2euczFyMvHlYZdFIG`

3. Click en **"Add secret"**

---

## ✅ Paso 4: Crear Secret 3 - VERCEL_PROJECT_ID

1. Click en **"New repository secret"**

2. Completa el formulario:
   - **Name**: `VERCEL_PROJECT_ID`
   - **Value**: `prj_4Sjf90YF0rMqf4kZ2ew4hW5T6Gep`

3. Click en **"Add secret"**

---

## ✅ Resultado Final

Después de crear los 3 secrets, deberías ver una tabla como esta:

```
Actions secrets

Name                    Updated      Updated by
─────────────────────────────────────────────────
VERCEL_TOKEN            just now     tu-usuario
VERCEL_ORG_ID           just now     tu-usuario
VERCEL_PROJECT_ID       just now     tu-usuario
```

Si ves esto: ✅ **¡COMPLETADO!**

---

## 🧪 Cómo Verificar que Funciona

Después de agregar los secrets:

1. Haz un pequeño cambio en tu código
2. Haz commit y push:
   ```bash
   git add .
   git commit -m "test: verify github actions"
   git push origin main
   ```

3. Ve a la pestaña **"Actions"**:
   ```
   https://github.com/juanito1732/guadis-landing/actions
   ```

4. Deberías ver tu workflow ejecutándose (naranja 🟡)

5. Espera 2-3 minutos

6. Cuando termine debería mostrar ✅ (verde)

**Si ves verde: ¡PERFECTO! Todo funciona correctamente.**

---

## 🐛 Solución de Problemas

### Error: "No credentials found"
→ Significa que los secrets NO están configurados
→ Revisa que completaste correctamente los 3 secrets

### Error: "Invalid token"
→ El valor del token está mal
→ Copia exactamente: `TldAXkIZvawEQNKFWjeC01DZ`

### Error: "npm not found"
→ Hay un problema con el código
→ Ejecuta localmente: `npm install --legacy-peer-deps`
→ Luego: `npm run build`

### Workflow termina en ❌ (rojo)
→ Click en el workflow para ver los logs
→ El error específico está en los logs

---

## 📋 Checklist

- [ ] Abrí https://github.com/juanito1732/guadis-landing/settings/secrets/actions
- [ ] Creé secret: VERCEL_TOKEN
- [ ] Creé secret: VERCEL_ORG_ID
- [ ] Creé secret: VERCEL_PROJECT_ID
- [ ] Hice un commit de prueba
- [ ] El workflow mostró ✅ (verde)
- [ ] El sitio se actualizó en https://guadis-landing.vercel.app

---

## ¿Qué Pasa Después?

Una vez que los secrets están configurados:

```bash
# Para CUALQUIER cambio futuro:
git add .
git commit -m "Tu mensaje"
git push origin main

# ✨ Automáticamente:
# 1. GitHub Actions detecta el push
# 2. Ejecuta npm build
# 3. Deploya a Vercel
# 4. El sitio se actualiza en 2-3 minutos
```

**No necesitas hacer nada más. Es completamente automático.**

---

## 🎓 ¿Qué Son los Secrets?

Los GitHub Secrets son como "contraseñas" que guardas de forma segura en GitHub.

El workflow (`.github/workflows/deploy.yml`) usa estos secrets para:
- Conectarse a Vercel
- Identificarse como tuyo
- Desplegar el sitio automáticamente

Los secrets NO se guardan en el código (son privados).

---

**¿Preguntas?** Ver `DEPLOYMENT-README.md`
