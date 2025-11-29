# Guía de Estructura del Proyecto - guadis

Esta guía explica en lenguaje simple la organización del proyecto.

## 📁 Estructura General

### 00-DOCUMENTACION/
**¿Qué es?** Toda la documentación del proyecto vive aquí.

- **BITACORA.md**: Como un diario de trabajo. Cada vez que James hace cambios, lo anota aquí con fecha y hora. Puedes ver todo el historial de qué se hizo y cuándo.

- **PROYECTO-INFO.md**: La ficha del proyecto. Tiene datos del cliente, contactos, presupuesto, y objetivos. Es como la portada del proyecto.

- **FASES.md**: El plan de trabajo dividido en etapas. Muestra qué se entrega en cada fase, cuánto cuesta, y cuánto tiempo toma.

- **ESTRUCTURA-EXPLICADA.md**: Este archivo. Una guía para humanos que explica dónde está cada cosa.

### 01-DISENO/
**¿Qué es?** Todo lo relacionado con el diseño visual antes de programar.

- **wireframes/**: Bocetos simples de cómo se verá la página (como dibujos en blanco y negro)
- **mockups/**: Diseños finales con colores y todo detallado
- **assets/**: Recursos originales de diseño (logos, iconos, etc.)
- **paleta-colores.md**: Los colores oficiales del proyecto y cómo usarlos

### 02-FRONTEND/
**¿Qué es?** Todo el código de lo que el usuario VE en el navegador.

- **src/components/**: Piezas reutilizables (botones, menús, tarjetas)
- **src/pages/**: Las páginas completas del sitio
- **src/styles/**: Los estilos (colores, tamaños, animaciones)
- **src/utils/**: Funciones auxiliares que ayudan en varias partes
- **src/assets/**: Imágenes, fuentes, videos que usa la página
- **public/**: Archivos públicos (favicon, robots.txt, etc.)

### 03-BACKEND/
**¿Qué es?** El código que corre en el servidor (lo que el usuario NO ve).

- **api/**: Conexiones con bases de datos y lógica del servidor
- **config/**: Configuraciones de Firebase y otras herramientas
- **middleware/**: Código que se ejecuta antes de procesar solicitudes (seguridad, autenticación)

### 04-INTEGRACIONES/
**¿Qué es?** Conexiones con servicios externos.

- **mercadopago/**: Todo lo relacionado con procesar pagos
- **firebase/**: Configuración de la base de datos
- **vercel/**: Configuración para publicar la página en internet

### 05-TESTING/
**¿Qué es?** Pruebas para asegurar que todo funciona correctamente.

- **unit/**: Pruebas de piezas individuales
- **integration/**: Pruebas de cómo funciona todo junto
- **manual-testing-checklist.md**: Lista de cosas para probar manualmente

### 06-DEPLOYMENT/
**¿Qué es?** Todo lo necesario para publicar la página en producción.

- **scripts/**: Comandos automatizados para publicar
- **config/**: Configuraciones especiales para producción
- **deployment-log.md**: Registro de cada vez que se publicó la página

## 🔍 ¿Cómo Encontrar Algo?

**¿Quieres ver qué se hizo ayer?**
→ Abre `00-DOCUMENTACION/BITACORA.md`

**¿Necesitas los datos del cliente?**
→ Abre `00-DOCUMENTACION/PROYECTO-INFO.md`

**¿Quieres ver el código de la página principal?**
→ Busca en `02-FRONTEND/src/pages/`

**¿Necesitas cambiar un color o estilo?**
→ Ve a `02-FRONTEND/src/styles/`

**¿Quieres revisar la integración de pagos?**
→ Mira `04-INTEGRACIONES/mercadopago/`

## 📝 Notas Importantes

1. **Todo está numerado** (00, 01, 02...) para mantener el orden visual
2. **Los nombres son descriptivos** - no hay códigos confusos
3. **La BITACORA se actualiza automáticamente** - James lo hace cada vez que trabaja
4. **Cada carpeta tiene su propósito claro** - nada está "tirado" al azar

## 🎯 Filosofía

Esta estructura está diseñada para que **cualquier persona** (técnica o no) pueda:
- Entender qué hace el proyecto
- Encontrar rápidamente lo que busca
- Ver el progreso y cambios
- Comprender cómo está organizado todo

¡No hay misterios ni complejidades innecesarias!
