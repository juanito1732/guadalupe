# 🎨 PERSONALIZAR og-image.jpg

**Archivo generado:** `/02-FRONTEND/public/og-image.jpg`
**Tamaño:** 80.3 KB (óptimo para web)
**Dimensiones:** 1200x630 px (perfecto para redes sociales)

---

## 📋 ESTADO ACTUAL

✅ Se generó una og-image.jpg **profesional** con:
- Estudio Jurídico
- Dra. Guadalupe Juárez
- 20+ años de experiencia
- Paleta AZULES (predeterminada)

Esta imagen **YA ESTÁ LISTA** para usar en producción.

---

## 🎨 PERSONALIZAR LA IMAGEN

### OPCIÓN A: Cambiar solo la paleta de colores

Si la imagen actual te gusta pero quieres otro color:

```bash
# 1. Edita el script
nano generate-og-image.py

# 2. Busca la línea que dice:
# palette = 'azules'

# 3. Reemplázala con:
palette = 'earth'      # Para tonos cálidos
palette = 'rosa'       # Para tonos modernos
palette = 'gris'       # Para tonos elegantes

# 4. Genera la imagen
python3 generate-og-image.py

# 5. Verifica que se vea bien en 02-FRONTEND/public/og-image.jpg
```

**Paletas disponibles:**
```
1. azules  → Azul claro a azul oscuro (profesional)
2. earth   → Beige a marrón (cálido)
3. rosa    → Azul lavanda a rosa (moderno)
4. gris    → Marrón a gris (elegante)
```

---

### OPCIÓN B: Cambiar nombre del estudio

```bash
# 1. Edita el script
nano generate-og-image.py

# 2. Busca la línea:
# company = 'Estudio Jurídico Dra. Guadalupe Juárez'

# 3. Reemplázala:
company = 'Tu nombre aquí'

# Ejemplo:
company = 'Estudio Legal García & Asociados'
company = 'Asesoramiento Jurídico Integral'

# 4. Genera la imagen
python3 generate-og-image.py
```

---

### OPCIÓN C: Cambiar tagline/descripción

```bash
# 1. Edita el script
nano generate-og-image.py

# 2. Busca la línea:
# tagline = '20+ años de experiencia en asesoría legal'

# 3. Reemplázala:
tagline = 'Tu mensaje aquí'

# Ejemplos:
tagline = 'Derecho con Confianza'
tagline = 'Tu mejor opción legal'
tagline = 'Especialistas en familia y sucesiones'

# 4. Genera la imagen
python3 generate-og-image.py
```

---

### OPCIÓN D: Cambiar TODO (nombre + tagline + paleta)

```bash
# Edita el script con:
palette = 'earth'
company = 'Tu nombre jurídico'
tagline = 'Tu mensaje'

# Luego:
python3 generate-og-image.py
```

---

## 🚀 PROCESO COMPLETO DE PERSONALIZACIÓN

### Paso 1: Editar el script

```bash
cd /home/juani/Desktop/OSIRIS/proyectos/guadis
nano generate-og-image.py
```

### Paso 2: Localizar líneas clave

**Línea ~100:** `palette = 'azules'`
**Línea ~101:** `company_name = '...'`
**Línea ~102:** `tagline = '...'`

### Paso 3: Editar valores

Reemplaza los valores con los datos reales.

### Paso 4: Guardar

```
Ctrl+X → Y → Enter
```

### Paso 5: Ejecutar

```bash
python3 generate-og-image.py
```

### Paso 6: Verificar

```bash
ls -lh 02-FRONTEND/public/og-image.jpg
# Debería mostrar el archivo de ~80 KB
```

### Paso 7: Commit y push

```bash
cd /home/juani/Desktop/OSIRIS/proyectos/guadis
git add 02-FRONTEND/public/og-image.jpg generate-og-image.py
git commit -m "update: Personalizar og-image.jpg"
git push origin main
```

**Vercel desplegará automáticamente en 2-5 minutos.**

---

## ✅ VERIFICAR QUE FUNCIONA

### En el sitio

1. Abre https://guadis-landing.vercel.app
2. Copia la URL completa
3. Comparte en WhatsApp, Facebook o LinkedIn
4. Verifica que aparece la imagen

### Herramientas online

- **Facebook Sharing Debugger:** https://developers.facebook.com/tools/debug/sharing/
- **Twitter Card Validator:** https://cards-dev.twitter.com/validator
- **LinkedIn Post Inspector:** https://www.linkedin.com/post-inspector/

**Pasos:**
1. Ingresa URL: https://guadis-landing.vercel.app
2. Verifica que aparece og-image.jpg
3. Verifica que aparece el título y descripción

---

## 🎯 RECOMENDACIONES FINALES

1. **Mantén los datos consistentes:** El nombre y tagline en og-image deben coincidir con config.ts

2. **Prueba en redes:** Comparte el link en WhatsApp, Facebook y LinkedIn para ver cómo se ve

3. **Si no te gusta:** Puedes regenerar ejecutando:
   ```bash
   python3 generate-og-image.py
   ```
   Tantas veces como necesites.

4. **Opción avanzada:** Si quieres una imagen más personalizada:
   - Usa Canva.com (explicado en OG-IMAGE-SETUP.md)
   - Descarga como JPG (1200x630 px)
   - Reemplaza og-image.jpg manualmente
   - Push a GitHub

---

## 📊 ESTRUCTURA FINAL

```
02-FRONTEND/public/
├── og-image.jpg          ← Imagen para Open Graph (1200x630 px)
├── logo-estudio...       ← Logos del estudio
├── favicon.png           ← Ícono del navegador
└── images/               ← Otras imágenes
```

---

## 💡 TIPS

1. **Tamaño:** Mantén < 200 KB para carga rápida
2. **Texto:** Asegúrate que es legible en la imagen
3. **Colores:** Usa la paleta que elegiste en config.ts
4. **Nombre:** Debe coincidir en og-image.jpg y config.ts

---

## 🔄 FLUJO COMPLETO

```
1. Personalizar generate-og-image.py
   ↓
2. Ejecutar: python3 generate-og-image.py
   ↓
3. Verificar: ls -lh 02-FRONTEND/public/og-image.jpg
   ↓
4. Commit: git add ... && git commit -m "..."
   ↓
5. Push: git push origin main
   ↓
6. Vercel auto-despliega (2-5 min)
   ↓
7. Verifica en redes (comparte el link)
   ↓
✅ HECHO!
```

---

## 📞 AYUDA

Si necesitas:
- **Cambiar solo paleta:** Línea 100
- **Cambiar nombre:** Línea 101
- **Cambiar tagline:** Línea 102
- **Cambiar TODO:** Líneas 100-102

**Tiempo estimado:** 5 minutos

---

**Estado:** ✅ og-image.jpg lista para usar
**Próximo paso:** Actualizar config.ts con datos reales
