# 🎯 GUÍA DE TESTING MANUAL - PALETAS DE COLORES

**Para:** Testing exhaustivo de las 4 paletas en el sitio en vivo
**Duración:** ~15 minutos
**Objetivo:** Verificar que TODAS las paletas funcionan correctamente

---

## ✅ CHECKLIST PRE-TESTING

Antes de comenzar, asegúrate de:

```
□ Tener navegador actualizado (Chrome, Firefox, Safari, Edge)
□ Caché limpia (Ctrl+Shift+Del si es necesario)
□ Conexión a internet estable
□ DevTools abierto (F12) para revisar errores
□ Libreta para anotar cualquier problema
```

---

## 🚀 PASO 1: ACCEDER AL SITIO

1. Abre en navegador:
   ```
   https://guadis-landing.vercel.app
   ```

2. Espera que cargue completamente (< 3 segundos)

3. Verifica que:
   - [ ] Título dice "Estudio Jurídico..."
   - [ ] Contenido visible correctamente
   - [ ] No hay errores rojos en DevTools (F12 → Console)

**Status esperado:**
```
✅ Sitio carga correctamente
✅ No hay errores de JavaScript
✅ Colores visibles (azul por defecto)
```

---

## 🎨 PASO 2: UBICAR SELECTOR DE PALETAS

1. Mira la **esquina superior DERECHA** de la página

2. Deberías ver un selector de colores (normalmente arriba)

3. Alternativamente:
   - Scroll hasta encontrarlo
   - Abre DevTools y busca elemento con clase "palette-switcher"

**Nota:** Si no lo ves, intenta:
```
1. Recarga la página (F5)
2. Limpia caché (Ctrl+Shift+Delete)
3. Abre en ventana incógnita
```

**Status esperado:**
```
✅ Selector visible
✅ 4 opciones de color disponibles
✅ Paleta actual resaltada
```

---

## 🎨 PASO 3: PROBAR PALETA AZULES

### Estado Actual (ya debería estar en AZULES)

```
Características visuales de AZULES:
├─ Fondo claro: #E8F5FD (azul muy claro)
├─ Botones: Azul mediano #689EC2
├─ Títulos: Azul oscuro #1B5B7E
└─ Sensación: Profesional, confiable, limpio
```

### Verificación:

1. **Haz clic en botón "AZULES"**

2. Observa el sitio y verifica:
   - [ ] Página cambió a tonos azules
   - [ ] Encabezado es azul claro
   - [ ] Botones son azul mediano
   - [ ] Textos son azules oscuros
   - [ ] Cambio fue suave (sin parpadeo)
   - [ ] No hay errores en DevTools

3. **Abre DevTools (F12) → Console**
   - [ ] No hay mensajes de error
   - [ ] Puedes ver solo logs normales

4. **Abre DevTools → Application → Storage → Cookies/localStorage**
   - [ ] Busca: `guadis-palette`
   - [ ] Valor debe ser: `azules`

### ✅ Resultado esperado:
```
✅ Colores azules aplicados
✅ localStorage = 'azules'
✅ Sin errores en consola
✅ Cambio suave
```

---

## 🌍 PASO 4: PROBAR PALETA EARTH

### Estado de EARTH

```
Características visuales de EARTH:
├─ Fondo claro: #E9D2C0 (beige tierra)
├─ Botones: Marrón mediano #B57549
├─ Títulos: Marrón oscuro #8D4424
└─ Sensación: Cálido, natural, acogedor
```

### Verificación:

1. **Haz clic en botón "EARTH"**

2. Observa el cambio y verifica:
   - [ ] Página cambió a tonos tierra/beige
   - [ ] Fondo es beige cálido
   - [ ] Botones son marrón mediano
   - [ ] Textos son marrón oscuro
   - [ ] Cambio fue suave
   - [ ] Sin errores en DevTools

3. **Verifica localStorage:**
   - [ ] `guadis-palette` = `earth`

4. **Recarga la página (F5):**
   - [ ] Mantiene colores EARTH después de recarga
   - [ ] localStorage sigue siendo `earth`

### ✅ Resultado esperado:
```
✅ Colores tierra aplicados
✅ localStorage = 'earth'
✅ Persiste después de recarga
✅ Sin errores
```

---

## 💗 PASO 5: PROBAR PALETA ROSA

### Estado de ROSA

```
Características visuales de ROSA:
├─ Fondo claro: #9DB8D6 (lavanda claro)
├─ Botones: Rosa mediano #F0A6C5
├─ Títulos: Rosa oscuro #E963A7
└─ Sensación: Moderno, dinámico, energético
```

### Verificación:

1. **Haz clic en botón "ROSA"**

2. Observa el cambio y verifica:
   - [ ] Página cambió a tonos rosa/lavanda
   - [ ] Fondo es lavanda claro
   - [ ] Botones son rosa mediano
   - [ ] Textos son rosa oscuro
   - [ ] Cambio fue suave
   - [ ] Sin errores en DevTools

3. **Verifica localStorage:**
   - [ ] `guadis-palette` = `pink`

   *Nota: En código se llama "pink" pero se muestra como "ROSA"*

4. **Recarga la página (F5):**
   - [ ] Mantiene colores ROSA después de recarga

### ✅ Resultado esperado:
```
✅ Colores rosa aplicados
✅ localStorage = 'pink'
✅ Persiste después de recarga
✅ Sin errores
```

---

## ⚫ PASO 6: PROBAR PALETA GRIS

### Estado de GRIS

```
Características visuales de GRIS:
├─ Fondo claro: #DABEB6 (beige gris)
├─ Botones: Gris mediano #B2B9BF
├─ Títulos: Gris oscuro #7A8D9B
└─ Sensación: Elegante, sobrio, clásico
```

### Verificación:

1. **Haz clic en botón "GRIS"**

2. Observa el cambio y verifica:
   - [ ] Página cambió a tonos gris
   - [ ] Fondo es beige gris
   - [ ] Botones son gris mediano
   - [ ] Textos son gris oscuro
   - [ ] Cambio fue suave
   - [ ] Sin errores en DevTools

3. **Verifica localStorage:**
   - [ ] `guadis-palette` = `grey`

4. **Recarga la página (F5):**
   - [ ] Mantiene colores GRIS después de recarga

### ✅ Resultado esperado:
```
✅ Colores gris aplicados
✅ localStorage = 'grey'
✅ Persiste después de recarga
✅ Sin errores
```

---

## 🔄 PASO 7: PROBAR CAMBIOS RÁPIDOS

### Procedimiento

1. **Cambia entre paletas rápidamente:**
   ```
   AZULES → EARTH → ROSA → GRIS → AZULES
   (haz clic 4-5 veces sin pausar)
   ```

2. **Observa:**
   - [ ] Cambios son suaves
   - [ ] No hay parpadeos
   - [ ] No hay demoras (lag)
   - [ ] Sin errores en DevTools
   - [ ] Sitio sigue siendo responsivo

### ✅ Resultado esperado:
```
✅ Transiciones suaves
✅ Sin lag o demoras
✅ Sin errores
✅ Sitio responsivo
```

---

## 📱 PASO 8: PROBAR EN MÓVIL/TABLET

### Para Desktop (simular móvil):

1. **Abre DevTools (F12)**

2. **Haz clic en icono "Responsive Design"** (Ctrl+Shift+M)

3. **Selecciona tamaños:**
   - [ ] iPhone 12 (390x844)
   - [ ] iPad (768x1024)
   - [ ] Desktop (1920x1080)

4. **En cada tamaño:**
   - [ ] Selector de paletas visible
   - [ ] Cambia a cada paleta
   - [ ] Colores se aplican correctamente
   - [ ] Cambios son suaves

### Para Móvil Real (si tienes):

1. Abre en tu teléfono:
   ```
   https://guadis-landing.vercel.app
   ```

2. Prueba cambiar paletas
3. Verifica que funcione correctamente

### ✅ Resultado esperado:
```
✅ Selector visible en móvil
✅ Paletas funcionan en todas las resoluciones
✅ Cambios suaves en móvil
✅ Sin problemas de layout
```

---

## 🧪 PASO 9: VERIFICACIÓN EN DevTools

### Consola (Console)

1. **Abre DevTools (F12) → Console**
2. **Cambia de paleta**
3. Verifica:
   - [ ] No hay errores rojos
   - [ ] No hay warnings críticos

### Almacenamiento (Application)

1. **DevTools → Application → Storage**
2. **Haz clic en "Local Storage"**
3. **Selecciona dominio:** `guadis-landing.vercel.app`
4. **Busca:** `guadis-palette`

Deberías ver:
```
Key: guadis-palette
Value: azules / earth / pink / grey (según paleta actual)
```

5. Verifica que:
   - [ ] Clave existe
   - [ ] Valor cambia al cambiar paleta
   - [ ] Persiste después de recarga

### Red (Network)

1. **DevTools → Network**
2. **Cambia de paleta**
3. Verifica:
   - [ ] No hay requests fallidas
   - [ ] Cambios son locales (no requieren servidor)
   - [ ] Sin delays

### ✅ Resultado esperado:
```
✅ localStorage actualiza correctamente
✅ Sin errores en consola
✅ Sin requests fallidas
✅ Cambios son instantáneos
```

---

## 🎯 PASO 10: VERIFICACIÓN VISUAL COMPLETA

### Elementos que deben cambiar de color:

1. **Header/Navbar:**
   - [ ] Fondo: Cambia según paleta
   - [ ] Texto: Cambia según paleta
   - [ ] Botones: Cambian según paleta

2. **Hero Section:**
   - [ ] Título principal: Cambia color
   - [ ] Descripción: Cambia color
   - [ ] Botón CTA: Cambia color y fondo

3. **About Section:**
   - [ ] Fondo: Cambia según paleta
   - [ ] Texto: Cambia según paleta
   - [ ] Elementos destacados: Cambian

4. **Services Section:**
   - [ ] Cards: Cambian de color
   - [ ] Iconos: Cambian de color
   - [ ] Texto: Cambia de color

5. **Contact Section:**
   - [ ] Formulario: Cambia de color
   - [ ] Botones: Cambian de color
   - [ ] Información: Cambia de color

6. **Footer:**
   - [ ] Fondo: Cambia según paleta
   - [ ] Texto: Cambia de color
   - [ ] Enlaces: Cambian de color

### ✅ Resultado esperado:
```
✅ Todos los elementos cambian de color
✅ Cambios son consistentes
✅ Colores son visibles y legibles
✅ Contraste adecuado
```

---

## 📊 RESUMEN DE RESULTADOS

Una vez completes todos los pasos, marca:

```
PRUEBA 1: Cambio Manual de Paletas
  □ AZULES:  ✅ Funcionando
  □ EARTH:   ✅ Funcionando
  □ ROSA:    ✅ Funcionando
  □ GRIS:    ✅ Funcionando

PRUEBA 2: Persistencia localStorage
  □ AZULES persiste:  ✅ SÍ
  □ EARTH persiste:   ✅ SÍ
  □ ROSA persiste:    ✅ SÍ
  □ GRIS persiste:    ✅ SÍ

PRUEBA 3: Cambios Rápidos
  □ Transiciones suaves:  ✅ SÍ
  □ Sin lag:              ✅ SÍ
  □ Sin errores:          ✅ SÍ

PRUEBA 4: Responsive
  □ Móvil (390px):   ✅ Funciona
  □ Tablet (768px):  ✅ Funciona
  □ Desktop (1920px): ✅ Funciona

PRUEBA 5: DevTools
  □ Sin errores en consola:  ✅ SÍ
  □ localStorage correcto:    ✅ SÍ
  □ Red normal:               ✅ SÍ

PRUEBA 6: Visual Completa
  □ Header:    ✅ Cambia color
  □ Hero:      ✅ Cambia color
  □ About:     ✅ Cambia color
  □ Services:  ✅ Cambia color
  □ Contact:   ✅ Cambia color
  □ Footer:    ✅ Cambia color
```

---

## 🎉 RESULTADO FINAL

Si TODAS las pruebas están marcadas con ✅:

```
✅ PALETAS FUNCIONAN CORRECTAMENTE
✅ SITIO ESTÁ LISTO PARA PRODUCCIÓN
✅ PUEDES ACTUALIZAR CON DATOS REALES
```

---

## 🚨 SI ENCUENTRAS PROBLEMAS

### Problema: Paleta no cambia
**Solución:**
1. Limpia caché: Ctrl+Shift+Delete → Limpiar todo
2. Cierra navegador completamente
3. Reabre en ventana incógnita

### Problema: localStorage no persiste
**Solución:**
1. Verifica que localStorage está habilitado
2. DevTools → Application → Storage → Local Storage
3. Si no aparece, recarga la página

### Problema: Colores incorrectos
**Solución:**
1. Recarga la página (F5)
2. Intenta en navegador diferente
3. Intenta en ventana incógnita

### Problema: Errores en consola
**Solución:**
1. Toma screenshot del error
2. Reporta en GitHub issues
3. Intenta en navegador diferente

---

## ✅ CHECKLIST FINAL

Antes de decir "listo":

```
□ Todas las 4 paletas probadas
□ Todos los cambios suaves
□ localStorage persiste en todas
□ Funciona en móvil/tablet/desktop
□ Sin errores en DevTools
□ Todos los elementos cambian de color
□ Colores son visibles y legibles
□ Sitio es responsivo
□ Botones funcionan
□ Sin parpadeos o lag
```

---

**Una vez completado este testing, el sitio estará 100% listo para actualizarse con datos reales.**

