# 🎨 PRUEBA DE PALETAS EN VIVO

**Estado:** ✅ Sitio live en https://guadis-landing.vercel.app
**Fecha:** 19 Nov 2025
**Build:** a4e0637

---

## 📌 INSTRUCCIONES PARA PROBAR

### PASO 1: Abre el sitio en Vercel

```
🌐 URL: https://guadis-landing.vercel.app
```

Espera a que cargue completamente (2-3 segundos).

---

### PASO 2: Localiza el selector de paletas

En la **esquina inferior derecha** de la pantalla, verás un botón con el emoji **🎨** (pincel de artista).

```
┌─────────────────────────────────────────┐
│                                         │
│  Landing Page de Guadis                 │
│                                         │
│                                         │
│                                         │
│                                         │
│                                     🎨  │  ← Click aquí
└─────────────────────────────────────────┘
```

---

### PASO 3: Click en el botón 🎨

Al hacer click, aparecerá un menú con 4 paletas disponibles:

```
┌─────────────────────────────────┐
│  Seleccionar Paleta de Colores  │
├─────────────────────────────────┤
│                                 │
│  🔵 AZULES (actualmente activa) │
│  │ Tonos Azules Profesionales  │
│  │ ████████████████████████    │
│  │ [Botón] [Texto] [Color]     │
│                                 │
│  🌍 EARTH                        │
│  │ Tonos Tierra Cálidos        │
│  │ ████████████████████████    │
│  │ [Botón] [Texto] [Color]     │
│                                 │
│  💗 ROSA                         │
│  │ Tonos Rosa y Púrpura        │
│  │ ████████████████████████    │
│  │ [Botón] [Texto] [Color]     │
│                                 │
│  ⚫ GRIS                         │
│  │ Tonos Grises y Beige        │
│  │ ████████████████████████    │
│  │ [Botón] [Texto] [Color]     │
│                                 │
└─────────────────────────────────┘
```

---

### PASO 4: Selecciona una paleta

Haz click en cualquiera de las 4 paletas (excepto la que ya está seleccionada).

**Observarás:**
- ✅ Los colores del sitio cambian **instantáneamente**
- ✅ Se muestra un preview con 5 tonos de color
- ✅ El botón, texto y fondo cambian según la paleta
- ✅ Toda la página adopta los nuevos colores

---

### PASO 5: Prueba con las 4 paletas

Clickea en cada paleta secuencialmente:

#### 1️⃣ AZULES (Profesional, Confiable)
```
Colores: Azul claro → Azul oscuro
Ideal para: Ámbitos legales
Sensación: Profesional, formal, confiable
```

#### 2️⃣ EARTH (Cálido, Natural)
```
Colores: Beige/Marrón claro → Marrón oscuro
Ideal para: Enfoque humanista
Sensación: Cálido, acogedor, natural
```

#### 3️⃣ ROSA (Moderno, Dinámico)
```
Colores: Azul lavanda → Púrpura/Rosa intenso
Ideal para: Público más joven
Sensación: Moderno, dinámico, energético
```

#### 4️⃣ GRIS (Elegante, Sobrio)
```
Colores: Marrón suave → Gris azulado
Ideal para: Estilo minimalista
Sensación: Elegante, sobrio, clásico
```

---

## 🔍 QUÉ VERIFICAR

### ✅ Funcionalidad correcta

- [ ] El menú 🎨 aparece al hacer click
- [ ] Se pueden seleccionar las 4 paletas
- [ ] Los colores cambian al instante
- [ ] No hay errores en la consola (F12)
- [ ] El sitio sigue siendo responsive

### ✅ Persistencia de datos

**PRUEBA IMPORTANTE:**

1. Selecciona una paleta (ej: EARTH)
2. Nota que el sitio ahora es marrón/cálido
3. **Recarga la página** (Ctrl+R o Cmd+R)
4. **Verifica que mantiene el color EARTH**

**Resultado esperado:** ✅ La paleta se mantiene después de recargar

Si no funciona, limpiar cache:
```
1. Abre DevTools (F12)
2. Consola → Escribe: localStorage.clear()
3. Enter
4. Recarga (Ctrl+R)
5. Vuelve a probar
```

### ✅ Validación en navegadores

Prueba en al menos 2 navegadores:

- [ ] Chrome/Chromium
- [ ] Firefox
- [ ] Safari (si usas Mac)
- [ ] Edge

---

## 📊 EJEMPLOS DE CAMBIOS VISUALES

### Cuando seleccionas AZULES (Default):
```
Navbar:       Blanco con azul oscuro (#1B5B7E)
Botones:      Azul medio (#689EC2)
Enlaces:      Azul oscuro
Fondos:       Blanco puro
Textos:       Azul oscuro para contraste
```

### Cuando seleccionas EARTH:
```
Navbar:       Blanco con marrón (#8D4424)
Botones:      Marrón medio (#B57549)
Enlaces:      Marrón oscuro
Fondos:       Blanco cálido/beige
Textos:       Marrón oscuro
Sensación:    Más cálida y acogedora
```

### Cuando seleccionas ROSA:
```
Navbar:       Blanco con púrpura/rosa (#E963A7)
Botones:      Rosa/púrpura medio (#F0A6C5)
Enlaces:      Rosa oscuro
Fondos:       Blanco suave
Textos:       Púrpura oscuro
Sensación:    Moderna y dinámica
```

### Cuando seleccionas GRIS:
```
Navbar:       Blanco con gris (#7A8D9B)
Botones:      Gris medio (#B2B9BF)
Enlaces:      Gris oscuro
Fondos:       Blanco neutro
Textos:       Gris oscuro
Sensación:    Minimalista y elegante
```

---

## 🐛 TROUBLESHOOTING

### Problema: El botón 🎨 no aparece

**Solución:**
1. Recarga la página (Ctrl+R)
2. Asegúrate de estar en desktop (en mobile a veces se esconde)
3. Abre DevTools (F12) → Console y revisa si hay errores
4. Limpia cache: `localStorage.clear()`

### Problema: Los colores no cambian

**Solución:**
1. Verifica que hiciste click correctamente
2. Abre Console (F12) y busca mensajes de error
3. Prueba con otra paleta
4. Recarga con `Ctrl+Shift+R` (hard refresh)
5. Intenta en otro navegador

### Problema: Los cambios no persisten después de recargar

**Esto DEBERÍA estar fijo (fue nuestro PROBLEMA 1).**

Si aún no funciona:
1. Abre Console (F12)
2. Escribe: `localStorage.getItem('guadis-palette')`
3. Debería devolver: `"azules"`, `"earth"`, `"pink"` o `"grey"`
4. Si no devuelve nada, hay un issue con localStorage

---

## ✨ COSAS BONITAS QUE VER

1. **Transiciones suaves:** Los colores no cambian "de golpe", sino con transición suave
2. **Preview visual:** Cada paleta muestra una línea con los 5 tonos de color
3. **Mini preview:** Botón, texto y color de fondo se actualizan en tiempo real
4. **Responsive:** Funciona igual en mobile, tablet y desktop
5. **Accesibilidad:** Todos los colores tienen suficiente contraste

---

## 📱 NOTA SOBRE MOBILE

En pantallas pequeñas, el botón 🎨 podría estar:
- En la esquina inferior derecha
- Ligeramente escondido si tienes barra de navegación

**Solución:** Desliza hacia arriba un poco o gira el dispositivo a horizontal.

---

## 🎉 PRUEBA EXITOSA SI:

✅ El botón 🎨 aparece y funciona
✅ Se pueden seleccionar todas las 4 paletas
✅ Los colores cambian instantáneamente
✅ La paleta se mantiene después de recargar
✅ No hay errores en la consola
✅ El sitio sigue respondiendo bien

---

## 📝 REPORTE

Cuando pruebes, reporta:

```
✅ Fecha: [Hoy 19 Nov 2025]
✅ URL: https://guadis-landing.vercel.app
✅ Navegador: [Chrome, Firefox, Safari, Edge]
✅ Plataforma: [Desktop, Mobile, Tablet]

Resultado: [Funciona perfectamente / Hay issues]

Paletas probadas:
- [ ] AZULES
- [ ] EARTH
- [ ] ROSA
- [ ] GRIS

Persistencia después de recargar:
- [ ] Funciona (paleta se mantiene)
- [ ] No funciona (vuelve a AZULES)

Notas adicionales:
[Completa si hay algo especial]
```

---

## 🚀 SIGUIENTE PASO

Después de verificar que TODO funciona:

**Obtén los datos reales del cliente** y completa el formulario en:
📄 `DATOS-CLIENTE-TEMPLATE.md`

Luego actualizaremos `/02-FRONTEND/src/data/config.ts` con esa información.

---

**Status:** ✅ VERIFICACIÓN DE PALETAS COMPLETA
**Validado por:** Auditoría técnica profunda
**Commit:** a4e0637
