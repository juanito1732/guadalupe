# ⚡ CONFIG.TS - GUÍA RÁPIDA DE REEMPLAZO

**Archivo a editar:** `/02-FRONTEND/src/data/config.ts`

Este documento muestra EXACTAMENTE qué campos reemplazar con los datos reales.

---

## 🎯 CAMPOS A ACTUALIZAR

### CAMPO 1: Nombre del Estudio
```typescript
// ❌ ANTES (línea 2)
name: 'Estudio Jurídico Dra. Guadalupe Juárez',

// ✅ DESPUÉS (reemplaza con el nombre real)
name: 'Tu nombre exacto aquí',

Ejemplo:
name: 'Estudio Jurídico Dra. Guadalupe Juárez',
name: 'Estudio Legal Dr. Juan Pérez',
name: 'Bufete de Abogados García & Asociados',
```

### CAMPO 2: Descripción Corta
```typescript
// ❌ ANTES (línea 4)
description: '20+ años de experiencia en asesoría legal...',

// ✅ DESPUÉS (50-100 palabras)
description: 'Tu descripción aquí',

Ejemplo:
description: 'Con más de 20 años de experiencia, ofrecemos asesoría
integral en derecho de familia, sucesiones, amparos de salud y
litigio civil. Nuestro equipo se dedica a resolver tus asuntos
legales con profesionalismo y dedicación.',
```

### CAMPO 3: URL del Sitio
```typescript
// ❌ ANTES (línea 5)
url: 'https://guadis.com.ar',

// ✅ DESPUÉS (reemplaza con tu dominio)
url: 'https://guadis-landing.vercel.app',

O si tienes dominio personalizado:
url: 'https://tunombre.com.ar',
url: 'https://estudioabogados.com',
```

### CAMPO 4: Email de Contacto
```typescript
// ❌ ANTES (línea 10)
email: 'contacto@guadis.com.ar',

// ✅ DESPUÉS (tu email real)
email: 'tu-email@dominio.com.ar',

Ejemplo:
email: 'contacto@guadis.com.ar',
email: 'info@estudiolegalgarcía.com',
email: 'guadalupe@abogados.com.ar',
```

### CAMPO 5: Teléfono de Contacto
```typescript
// ❌ ANTES (línea 11)
phone: '+54 (11) XXXX-XXXX',

// ✅ DESPUÉS (tu teléfono real)
phone: '+54 (11) 2345-6789',

Formato aceptado:
phone: '+54 (11) 2345-6789',    ← RECOMENDADO
phone: '+54-11-2345-6789',
phone: '+5411-23456789',
phone: '011 2345-6789',
```

### CAMPO 6: Dirección Física
```typescript
// ❌ ANTES (línea 12)
address: 'Balcarce 50, Buenos Aires, Argentina',

// ✅ DESPUÉS (tu dirección real)
address: 'Tu calle y número, Ciudad, Provincia, País',

Ejemplo:
address: 'Balcarce 50, Buenos Aires, Argentina',
address: 'Av. Corrientes 1234, Buenos Aires, Argentina',
address: 'Paseo Colón 500, Ciudad Autónoma, Argentina',
```

### CAMPO 7: Horarios de Atención
```typescript
// ❌ ANTES (línea 13)
hours: 'Lun-Vie 9:00 a 18:00 hs',

// ✅ DESPUÉS (tus horarios reales)
hours: 'Lun-Vie HH:MM a HH:MM hs',

Ejemplos:
hours: 'Lun-Vie 9:00 a 18:00 hs',
hours: 'Lun-Vie 10:00 a 17:00 hs | Sab 10:00 a 13:00 hs',
hours: 'Lun-Vie 8:30 a 18:30 hs',
```

### CAMPO 8: Facebook
```typescript
// ❌ ANTES (línea 17)
facebook: 'https://facebook.com/guadis',

// ✅ DESPUÉS (tu URL de Facebook)
facebook: 'https://facebook.com/TU_PAGINA',

Ejemplo:
facebook: 'https://facebook.com/guadalupejuarez.abogada',
facebook: 'https://facebook.com/estudiolegalgarcía',

Si no tienes Facebook:
facebook: '',  // Dejar vacío
```

### CAMPO 9: LinkedIn
```typescript
// ❌ ANTES (línea 18)
linkedin: 'https://linkedin.com/company/guadis',

// ✅ DESPUÉS (tu URL de LinkedIn)
linkedin: 'https://linkedin.com/company/TU_EMPRESA',

O si es perfil personal:
linkedin: 'https://linkedin.com/in/TU_PERFIL',

Ejemplo:
linkedin: 'https://linkedin.com/in/guadalupejuarez',
linkedin: 'https://linkedin.com/company/estudio-legal-garcia',

Si no tienes LinkedIn:
linkedin: '',  // Dejar vacío
```

### CAMPOS OPCIONALES (en generateJsonLd)

#### Dirección - Calle (línea 46)
```typescript
streetAddress: 'Balcarce 50',
// Reemplaza con: 'Tu calle y número'
```

#### Dirección - Ciudad (línea 47)
```typescript
addressLocality: 'Buenos Aires',
// Reemplaza con: 'Tu ciudad'
```

#### Dirección - Código Postal (línea 48)
```typescript
postalCode: '1425',
// Reemplaza con: 'Tu código postal'
```

---

## 📋 RESUMEN: CAMPOS A REEMPLAZAR

| Línea | Campo | Ejemplo | Tipo |
|-------|-------|---------|------|
| 2 | name | "Estudio Jurídico Dra. Guadalupe Juárez" | String |
| 4 | description | "20+ años de experiencia..." | String (50-100 palabras) |
| 5 | url | "https://guadis-landing.vercel.app" | URL |
| 10 | email | "contacto@guadis.com.ar" | Email |
| 11 | phone | "+54 (11) 2345-6789" | Teléfono |
| 12 | address | "Balcarce 50, Buenos Aires, Argentina" | Dirección |
| 13 | hours | "Lun-Vie 9:00 a 18:00 hs" | Horario |
| 17 | facebook | "https://facebook.com/pagina" | URL o vacío |
| 18 | linkedin | "https://linkedin.com/pagina" | URL o vacío |

---

## 🚀 PROCESO RÁPIDO

### Opción A: Hazlo tú
1. Abre `/02-FRONTEND/src/data/config.ts`
2. Reemplaza los 9 campos
3. Guarda
4. Envía archivo o cambios

### Opción B: Proporciona datos
1. Completa DATOS-CLIENTE-TEMPLATE.md
2. Envíamelo
3. Yo actualizo config.ts
4. Hago commit y push
5. Vercel auto-despliega

---

## ✅ VALIDACIÓN

Después de reemplazar, verifica:

- [ ] Los datos son exactos
- [ ] No hay errores de ortografía
- [ ] Los emails tienen @ y dominio
- [ ] Los teléfonos tienen formato +54
- [ ] Las URLs comienzan con https://
- [ ] Horarios están en formato correcto

---

## 💾 CÓMO ENVIAR

### Si haces los cambios:
```bash
# En /02-FRONTEND/src/data/
git add config.ts
git commit -m "update: Actualizar datos del cliente"
git push origin main
```

### Si me los envías:
```
Responde en el chat con los 9 campos completados
y yo actualizo + hago push
```

---

## 📊 ARCHIVO ACTUAL

Tu archivo config.ts actual está en:
```
/home/juani/Desktop/OSIRIS/proyectos/guadis/02-FRONTEND/src/data/config.ts
```

Contiene placeholders que necesitan reemplazo.

---

**Tiempo estimado:** 5-10 minutos
**Complejidad:** ⭐ Muy fácil
**Después de esto:** Vercel despliega automáticamente en 2-5 minutos

