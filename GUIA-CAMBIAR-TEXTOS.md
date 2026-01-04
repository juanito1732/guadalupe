# 📝 GUÍA: Cómo Cambiar Textos de la Página

**Última actualización:** 2026-01-03

---

## 🎯 ARCHIVO PRINCIPAL

**Todos los textos de la página están centralizados en:**

```
/02-FRONTEND/src/data/content.ts
```

---

## 📋 ¿QUÉ PUEDO CAMBIAR?

### ✅ Textos que SÍ podés cambiar fácilmente:

1. **Hero (Portada principal)**
   - Título principal
   - Subtítulo
   - Descripción
   - Texto del botón

2. **Sobre Nosotros**
   - Título de sección
   - Descripción
   - Títulos de características
   - Descripciones de características

3. **Servicios**
   - Títulos de servicios
   - Descripciones de servicios
   - Lista de características de cada servicio

4. **Contacto**
   - Títulos y descripciones
   - Placeholders del formulario
   - Mensajes de éxito/error
   - Textos de botones

5. **Footer**
   - Descripción del estudio
   - Textos de copyright
   - Títulos de secciones

6. **SEO**
   - Título de la página
   - Descripción meta
   - Keywords

### ⚠️ Textos que NO están en content.ts (requieren editar otros archivos):

- Datos de contacto (email, teléfono, dirección) → `/src/data/config.ts`
- Redes sociales (URLs) → `/src/data/config.ts`
- Testimonios completos → `/src/data/testimonials.ts`

---

## 🔧 CÓMO CAMBIAR UN TEXTO

### Ejemplo 1: Cambiar el título principal

**Ubicación en content.ts:**
```typescript
hero: {
  title: 'Tu Abogada de Confianza',  // ← Cambiá esto
}
```

**Pasos:**
1. Abrí el archivo `/02-FRONTEND/src/data/content.ts`
2. Buscá la sección `hero:`
3. Cambiá el valor de `title:`
4. Guardá el archivo

**Ejemplo de cambio:**
```typescript
// Antes
title: 'Tu Abogada de Confianza',

// Después
title: 'Estudio Jurídico de Confianza',
```

---

### Ejemplo 2: Cambiar descripción de un servicio

**Ubicación en content.ts:**
```typescript
services: {
  list: [
    {
      id: 'derecho-familia',
      title: 'Derecho de Familia',
      description: 'Asesoramiento integral...',  // ← Cambiá esto
    }
  ]
}
```

**Pasos:**
1. Abrí `/02-FRONTEND/src/data/content.ts`
2. Buscá `services.list`
3. Encontrá el servicio que querés modificar por su `id`
4. Cambiá `description` o `title`
5. Guardá

---

### Ejemplo 3: Cambiar texto del botón de contacto

**Ubicación en content.ts:**
```typescript
contact: {
  form: {
    submitButton: 'Enviar Consulta',  // ← Cambiá esto
  }
}
```

---

## 📂 ESTRUCTURA DEL ARCHIVO content.ts

El archivo está organizado en secciones:

```
content.ts
├── hero             (Portada)
├── about            (Sobre Nosotros)
├── services         (Servicios)
│   └── list         (Lista de servicios)
├── testimonials     (Testimonios)
├── contact          (Contacto)
│   ├── form         (Formulario)
│   ├── errors       (Mensajes de error)
│   └── info         (Información)
├── footer           (Pie de página)
├── navbar           (Navegación)
└── seo              (Metadatos)
```

---

## 🚫 REGLAS IMPORTANTES

### ❌ NO HAGAS ESTO:

1. **NO borres las comillas**
   ```typescript
   // ❌ MAL
   title: Tu Abogada de Confianza,

   // ✅ BIEN
   title: 'Tu Abogada de Confianza',
   ```

2. **NO borres las comas al final**
   ```typescript
   // ❌ MAL
   title: 'Mi Título'

   // ✅ BIEN
   title: 'Mi Título',
   ```

3. **NO cambies los nombres de las propiedades**
   ```typescript
   // ❌ MAL
   titulo: 'Mi Título',

   // ✅ BIEN
   title: 'Mi Título',
   ```

4. **NO uses comillas simples dentro del texto (escapalas)**
   ```typescript
   // ❌ MAL
   title: 'L'estudio',

   // ✅ BIEN (usa comillas dobles)
   title: "L'estudio",

   // ✅ BIEN (escapa la comilla)
   title: 'L\\'estudio',
   ```

---

## ✅ CHECKLIST DESPUÉS DE CAMBIAR TEXTOS

Después de modificar `content.ts`, verificá:

- [ ] El archivo se guardó correctamente
- [ ] No hay errores de sintaxis (el editor te los muestra con subrayado rojo)
- [ ] Las comillas están balanceadas (cada `'` abierto tiene su `'` cerrado)
- [ ] Las comas al final de cada línea están presentes
- [ ] Si ejecutás `npm run dev`, no aparecen errores en consola

---

## 🆘 SI ALGO SE ROMPE

### Error: "SyntaxError: Unexpected token"

**Causa:** Falta una coma, comilla o llave

**Solución:**
1. Revisá la línea que modificaste
2. Asegurate de que tenga:
   - Comillas al inicio y fin del texto
   - Coma al final de la línea
3. Compará con otras líneas similares

### Error: "Cannot find module"

**Causa:** El archivo no se guardó o tiene error de sintaxis grave

**Solución:**
1. Cerrá y volvé a abrir el archivo
2. Verificá que esté en `/02-FRONTEND/src/data/content.ts`
3. Si el problema persiste, restaurá la versión anterior con git:
   ```bash
   git checkout 02-FRONTEND/src/data/content.ts
   ```

---

## 🔗 OTROS ARCHIVOS DE CONTENIDO

### config.ts - Datos de contacto y configuración

**Ubicación:** `/02-FRONTEND/src/data/config.ts`

**Qué contiene:**
- Nombre del sitio
- Email, teléfono, dirección
- Horarios de atención
- URLs de redes sociales
- Menú de navegación

**Ejemplo de cambio:**
```typescript
contact: {
  email: 'nuevo@email.com',     // ← Cambiá email
  phone: '+54 (xxx) xxxxxx',    // ← Cambiá teléfono
  address: 'Nueva dirección',   // ← Cambiá dirección
  hours: 'Lun-Vie 9:00-18:00',  // ← Cambiá horarios
}
```

---

### services.ts - Servicios (DEPRECADO)

**⚠️ IMPORTANTE:** Los servicios ahora están en `content.ts`

El archivo `services.ts` todavía existe pero eventualmente se eliminará.

**Usá:** `content.ts` → `services.list`

---

### testimonials.ts - Testimonios

**Ubicación:** `/02-FRONTEND/src/data/testimonials.ts`

**Qué contiene:**
- Testimonios de clientes
- Nombre, cargo, texto, calificación

**Estructura:**
```typescript
{
  id: '1',
  name: 'Juan Pérez',
  role: 'Cliente',
  content: 'Excelente servicio...',
  rating: 5,
  image: '/images/testimonial-1.jpg'
}
```

**Nota:** Actualmente la página usa el widget de Google Reviews (Elfsight), pero estos testimonios están disponibles como respaldo.

---

## 📝 EJEMPLOS PRÁCTICOS

### Cambiar el título y descripción del Hero

**Antes:**
```typescript
hero: {
  subtitle: 'Asesoría Jurídica Profesional',
  title: 'Tu Abogada de Confianza',
  description: 'Con 20+ años de experiencia...',
}
```

**Después:**
```typescript
hero: {
  subtitle: 'Expertos en Derecho',
  title: 'Soluciones Legales Integrales',
  description: 'Más de dos décadas resolviendo tus problemas legales con profesionalismo.',
}
```

---

### Agregar un nuevo servicio

**En content.ts, sección services.list:**

```typescript
{
  id: 'nuevo-servicio',
  title: 'Título del Nuevo Servicio',
  description: 'Descripción del servicio...',
  iconType: 'consulting',  // Opciones: family, inheritance, health, contract, litigation, consulting
  features: [
    'Característica 1',
    'Característica 2',
    'Característica 3',
    'Característica 4',
  ],
},
```

**Agregalo al final de la lista, dentro de `list: [...]`**

---

### Cambiar mensaje de éxito del formulario

**En content.ts:**
```typescript
contact: {
  form: {
    successMessage: '¡Gracias! Te responderemos en 24-48 hs.',
  }
}
```

---

## 🎨 CONSEJOS DE REDACCIÓN

### Para títulos:
- **Cortos y directos** (máx 50 caracteres)
- **Con mayúsculas iniciales**
- Ejemplo: ✅ "Tu Abogada de Confianza"
- Ejemplo: ❌ "TU ABOGADA DE CONFIANZA EN TODAS LAS ÁREAS DEL DERECHO"

### Para descripciones:
- **Claras y concisas**
- **Evitá jerga legal innecesaria**
- **Destacá beneficios, no características**
- Ejemplo: ✅ "Resolvemos tu divorcio de forma rápida y sin conflictos"
- Ejemplo: ❌ "Tramitamos procedimientos de disolución matrimonial conforme al CCyC"

### Para CTAs (botones):
- **Verbos de acción**
- **Máximo 3-4 palabras**
- Ejemplo: ✅ "Solicita tu Consulta", "Contactanos Ahora"
- Ejemplo: ❌ "Hacer click aquí para solicitar"

---

## 🚀 FLUJO DE TRABAJO RECOMENDADO

1. **Abrí** `/02-FRONTEND/src/data/content.ts`
2. **Buscá** la sección que querés modificar
3. **Editá** el texto
4. **Guardá** el archivo
5. **Verificá** en el navegador (si tenés el dev server corriendo)
6. **Commitea** los cambios:
   ```bash
   git add 02-FRONTEND/src/data/content.ts
   git commit -m "update: Cambiar textos de [sección]"
   ```

---

## 📞 SOPORTE

**¿Necesitás ayuda?**
- Revisá esta guía primero
- Verificá que el archivo tenga sintaxis correcta
- Si el problema persiste, contactá al desarrollador

**Archivo de respaldo:**
Si algo sale mal, siempre podés restaurar con:
```bash
git checkout HEAD -- 02-FRONTEND/src/data/content.ts
```

---

**Guía creada:** 2026-01-03
**Proyecto:** Guadalupe - Estudio Jurídico
**Archivo:** content.ts v1.0
