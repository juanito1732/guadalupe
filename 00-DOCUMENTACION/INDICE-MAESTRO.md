# ÍNDICE MAESTRO - Documentación Proyecto Guadis

**Guía completa de TODOS los archivos de documentación y para qué sirve cada uno**

---

## 🗂️ ESTRUCTURA DE ARCHIVOS

```
00-DOCUMENTACION/
├── 📌 INDICE-MAESTRO.md ..................... Este archivo
├── 📌 CONTEXTO-PERSISTENTE.md .............. PUNTO DE ENTRADA PRINCIPAL
├── 📋 TEMPLATE-ENTRADA-SESION.md ........... Checklist de 2 minutos
├── 🔔 PROTOCOLO-ACTUALIZACION.md ........... Triggers y automatización
├── 📝 BITACORA.md .......................... Log técnico detallado
├── 📊 REGISTRO-SESIONES.md ................. Auditoría de sesiones
├── 📖 INSTRUCCIONES-JAMES-WEB.md .......... Guía para James Web
├── 🗺️  MAPA-RAPIDO-MEMORIA.md .............. Navegación visual
├── 👨‍💼 GUIA-JUANITO-PM.md ................... Guía para Project Manager
│
├── 📄 PROYECTO-INFO.md ..................... Info cliente + presupuesto
├── 📋 FASES.md ............................. Detalle de fases
├── 📍 ESTRUCTURA-EXPLICADA.md .............. Explicación de carpetas
│
├── 📊 RESUMEN-EJECUTIVO.md ................. Resumen de estado (archivo de referencia)
├── 📋 REVISION-COMPLETA-20251104.md ....... Revisión del proyecto (archivo de referencia)
└── 📋 PLAN-ACCION-INMEDIATO.md ............ Plan de acción (archivo de referencia)
```

---

## 🎯 ARCHIVOS POR PROPÓSITO

### 🔴 MEMORIA PERSISTENTE (CRÍTICOS - Leer/Actualizar Regularmente)

#### 1. CONTEXTO-PERSISTENTE.md
**¿Qué es?** El "snapshot" del proyecto en cualquier momento
**¿Cuándo leer?** SIEMPRE al iniciar sesión
**¿Quién actualiza?** James Web (cuando hay cambios mayores)
**¿Cuándo actualizar?** Cuando se completa entregable, cambia pago, o hay problema importante
**Tiempo de lectura:** 2-3 minutos
**Tamaño:** ~9 KB

**Contiene:**
- Resumen ejecutivo (30 segundos)
- Información del cliente
- Estado actual del proyecto
- Stack tecnológico
- Estructura de carpetas
- Decisiones técnicas
- Última actualización
- Próximas revisiones
- Instrucciones para James Web

**¿Por qué es importante?**
→ Es la VERDAD ÚNICA del estado del proyecto

---

#### 2. TEMPLATE-ENTRADA-SESION.md
**¿Qué es?** Checklist de validación rápida (2 minutos)
**¿Cuándo usar?** OBLIGATORIAMENTE al inicio de cada sesión
**¿Quién lo usa?** James Web
**¿Cuándo actualizar?** No se actualiza, se COMPLETA
**Tiempo de uso:** 2 minutos máximo
**Tamaño:** ~6.6 KB

**Contiene:**
- Checklist de 2 minutos
- 6 preguntas clave de contexto
- Instrucciones de validación
- Plantilla de documentación post-sesión
- Flujo completo de sesión
- Preguntas frecuentes

**¿Por qué es importante?**
→ Garantiza que James Web SIEMPRE comience con contexto completo

---

#### 3. BITACORA.md
**¿Qué es?** Log técnico detallado de cambios
**¿Cuándo leer?** Cuando necesites historial técnico
**¿Quién actualiza?** James Web (al terminar cada sesión)
**¿Cuándo actualizar?** OBLIGATORIAMENTE al fin de cada sesión
**Tiempo de actualización:** 2-3 minutos
**Tamaño:** ~25 KB (crece con el proyecto)

**Contiene:**
- Entrada por cada sesión importante
- Cambios técnicos realizados
- Funcionalidades agregadas
- Problemas identificados y soluciones
- Decisiones de arquitectura
- Próximos pasos
- Notas técnicas

**¿Por qué es importante?**
→ Permite entender CÓMO se llegó al estado actual

---

#### 4. PROTOCOLO-ACTUALIZACION.md
**¿Qué es?** Define cuándo, qué y quién actualiza
**¿Cuándo leer?** Cuando tengas duda de qué actualizar
**¿Quién lo respeta?** James Web
**¿Cuándo revisar?** Semanal (por Juanito)
**Tiempo de lectura:** 5-10 minutos (cuando lo necesites)
**Tamaño:** ~12 KB

**Contiene:**
- 5 triggers automáticos de actualización
- Cuándo se activa cada trigger
- Qué actualizar para cada trigger
- Checklist de actualización por sesión
- Roles y responsabilidades
- Flujo estándar
- Casos especiales
- Escalabilidad del protocolo

**¿Por qué es importante?**
→ Automatiza qué actualizar, nadie olvida nada importante

---

#### 5. REGISTRO-SESIONES.md
**¿Qué es?** Auditoría completa de todas las sesiones
**¿Cuándo leer?** Cuando necesites saber qué se hizo cuándo
**¿Quién actualiza?** James Web (al terminar cada sesión)
**¿Cuándo actualizar?** OBLIGATORIAMENTE al fin de cada sesión
**Tiempo de actualización:** 2-3 minutos
**Tamaño:** ~7.6 KB (crece con el proyecto)

**Contiene:**
- Tabla resumen de sesiones
- Entrada detallada por cada sesión
- Duración de sesión
- Qué se hizo (agrupado)
- Archivos modificados
- Próximos pasos
- Triggers activados
- Estadísticas del proyecto

**¿Por qué es importante?**
→ Permite validar que se está avanzando y rastrear cuándo se hizo cada cosa

---

### 🟠 GUÍAS Y REFERENCIAS (Leer Según Necesidad)

#### 6. INSTRUCCIONES-JAMES-WEB.md
**¿Qué es?** Guía explícita de mantenimiento de memoria
**¿Cuándo leer?**
- Primera vez con Guadis: lectura completa
- Cuando tengas duda: busca la sección relevante
**¿Quién la usa?** James Web
**¿Cuándo actualizar?** Solo si cambia el protocolo
**Tiempo de lectura inicial:** 10-15 minutos
**Tamaño:** ~14 KB

**Contiene:**
- Tu misión crítica (resumen)
- Qué leer OBLIGATORIAMENTE en cada sesión
- Qué actualizar OBLIGATORIAMENTE al terminar
- Protocolo A/B/C/D (diferentes tipos de trabajo)
- Reglas de oro para mantener memoria
- Mecanismo de seguridad (validación cruzada)
- Checklist rápido
- Flujo ideal de sesión

**¿Por qué es importante?**
→ Instruye explícitamente a James Web cómo mantener memoria

---

#### 7. MAPA-RAPIDO-MEMORIA.md
**¿Qué es?** Navegación visual del sistema de memoria
**¿Cuándo leer?** Cuando necesites orientarte rápidamente
**¿Quién la usa?** Cualquiera que necesite entender el sistema
**¿Cuándo actualizar?** Solo si cambia la estructura
**Tiempo de lectura:** 5 minutos
**Tamaño:** ~14 KB

**Contiene:**
- Mapa visual en diagrama
- Matriz de decisión (qué leer según situación)
- Ruta completa de una sesión típica
- Archivos de soporte
- Acceso rápido según necesidad
- Estadísticas del sistema
- Checklist: "¿tengo todo?"
- Primeras acciones

**¿Por qué es importante?**
→ Ayuda a navegar el sistema complejo de memoria

---

#### 8. GUIA-JUANITO-PM.md
**¿Qué es?** Guía específica para Juanito como Project Manager
**¿Cuándo leer?** Juanito debe leer completo una vez
**¿Quién la usa?** Juanito (Project Manager)
**¿Cuándo actualizar?** Cuando cambie el rol de Juanito
**Tiempo de lectura:** 20-30 minutos
**Tamaño:** ~11 KB

**Contiene:**
- Tu rol como PM
- Archivos críticos (para ti)
- Tareas semanales (15 minutos)
- Gestión financiera (qué hacer cuando recibas pago)
- Cuándo James Web activa triggers
- Escalation: qué hacer si algo no está bien
- Validación mensual (checklist)
- Comunicación con James Web (formatos)
- Resumen rápido de roles
- Checklist semanal

**¿Por qué es importante?**
→ Te explica exactamente qué debes hacer como PM

---

### 🟡 REFERENCIA (Leer Ocasionalmente)

#### 9. PROYECTO-INFO.md
**¿Qué es?** Información del cliente y presupuesto
**¿Cuándo leer?** Cuando necesites datos del cliente
**¿Quién actualiza?** Juanito (cuando hay cambios en cliente/presupuesto)
**Tiempo de lectura:** 2-3 minutos
**Tamaño:** ~1.9 KB

**Contiene:**
- Datos del cliente (nombre, contacto, email, teléfono)
- Información del proyecto (nombre, fecha inicio, fase)
- Presupuesto total
- Presupuesto por fase
- Plan de pagos detallado
- Descripción del proyecto
- Objetivos Fase 1 y Fase 2
- Requerimientos especiales

**¿Por qué es importante?**
→ Referencia de datos de cliente e información financiera

---

#### 10. FASES.md
**¿Qué es?** Detalle completo de fases, entregables y timeline
**¿Cuándo leer?** Cuando necesites detalles de una fase
**¿Quién actualiza?** Juanito (cuando cambia scope)
**Tiempo de lectura:** 5-10 minutos
**Tamaño:** ~3.7 KB

**Contiene:**
- Resumen de cada fase
- Estado de cada fase
- Presupuesto por fase
- Timeline estimado
- Entregables específicos
- Plan de pagos
- Timeline proyectado
- Control de pagos
- Notas importantes

**¿Por qué es importante?**
→ Define exactamente qué incluye cada fase

---

#### 11. ESTRUCTURA-EXPLICADA.md
**¿Qué es?** Explicación en lenguaje humano de las carpetas
**¿Cuándo leer?** Cuando necesites entender estructura de proyecto
**¿Quién la usa?** Principalmente James Web
**Tiempo de lectura:** 5 minutos
**Tamaño:** ~3.8 KB

**Contiene:**
- Explicación visual de carpetas
- Propósito de cada carpeta
- Qué va en cada lugar
- Convenciones de nombres
- Estructura esperada

**¿Por qué es importante?**
→ Ayuda a mantener consistencia en estructura

---

### 🟢 ARCHIVOS DE REFERENCIA (No necesitas leer regularmente)

#### 12. RESUMEN-EJECUTIVO.md
**Propósito:** Resumen de alto nivel del proyecto
**Cuándo actualizar:** Cuando hay cambios mayores
**Tamaño:** ~7.4 KB

#### 13. REVISION-COMPLETA-20251104.md
**Propósito:** Revisión del proyecto (archivo histórico)
**Tipo:** Histórico/Archivo
**Tamaño:** ~17K

#### 14. PLAN-ACCION-INMEDIATO.md
**Propósito:** Plan de acciones a corto plazo
**Tipo:** Referencia/Archivo
**Tamaño:** ~16K

---

## 📊 MATRIZ DE LECTURA RÁPIDA

| Necesito... | Leer | Tiempo | Frecuencia |
|---|---|---|---|
| Saber estado general | CONTEXTO-PERSISTENTE.md | 2 min | Cada sesión |
| Validar contexto | TEMPLATE-ENTRADA-SESION.md | 2 min | Cada sesión |
| Historial técnico | BITACORA.md (últimas 5) | 2 min | Cada sesión |
| Auditoría de sesiones | REGISTRO-SESIONES.md | 2 min | Semanal |
| Entender protocolo | PROTOCOLO-ACTUALIZACION.md | 5 min | Al dudar |
| Instrucciones James | INSTRUCCIONES-JAMES-WEB.md | 10 min | Primera vez |
| Navegar sistema | MAPA-RAPIDO-MEMORIA.md | 5 min | Al confundirse |
| Datos cliente | PROYECTO-INFO.md | 2 min | Ocasional |
| Detalles fase | FASES.md | 5 min | Ocasional |
| Estructura carpetas | ESTRUCTURA-EXPLICADA.md | 5 min | Ocasional |

---

## 🔄 FLUJO DE LECTURA POR ROL

### James Web (Desarrollador)
**Lectura Inicial (primera vez con Guadis):**
1. CONTEXTO-PERSISTENTE.md (5 min)
2. INSTRUCCIONES-JAMES-WEB.md (10 min)
3. PROTOCOLO-ACTUALIZACION.md (5 min)
4. MAPA-RAPIDO-MEMORIA.md (5 min)
**Total: 25 minutos**

**Cada Sesión:**
1. CONTEXTO-PERSISTENTE.md (2 min)
2. TEMPLATE-ENTRADA-SESION.md (2 min)
3. BITACORA.md últimas 3 (2 min)
4. REGISTRO-SESIONES.md últimas 2 (2 min)
**Total: 8 minutos**

**Al Terminar Sesión:**
- Actualizar BITACORA.md (2 min)
- Actualizar REGISTRO-SESIONES.md (2 min)
- [Si cambio mayor] Actualizar CONTEXTO-PERSISTENTE.md (1 min)

---

### Juanito (Project Manager)
**Lectura Inicial (una sola vez):**
1. GUIA-JUANITO-PM.md (30 min) ← CRÍTICO
2. CONTEXTO-PERSISTENTE.md (5 min)
3. PROTOCOLO-ACTUALIZACION.md (5 min)
**Total: 40 minutos**

**Cada Lunes (Validación Semanal):**
1. CONTEXTO-PERSISTENTE.md (2 min)
2. BITACORA.md últimas 5 (3 min)
3. REGISTRO-SESIONES.md semana actual (3 min)
4. Validar protocolo (2 min)
**Total: 10 minutos**

**Cuando recibas pago:**
- Actualizar PROYECTO-INFO.md (2 min)
- Actualizar FASES.md (1 min)
- Crear entrada en BITACORA.md (2 min)
**Total: 5 minutos**

---

## ✅ ESTADO DEL SISTEMA

| Componente | Estado | Última Actualización |
|---|---|---|
| CONTEXTO-PERSISTENTE.md | ✅ ACTIVO | 2025-11-04 21:00 |
| TEMPLATE-ENTRADA-SESION.md | ✅ ACTIVO | 2025-11-04 20:18 |
| BITACORA.md | ✅ ACTIVO | 2025-11-04 21:00 |
| PROTOCOLO-ACTUALIZACION.md | ✅ ACTIVO | 2025-11-04 20:18 |
| REGISTRO-SESIONES.md | ✅ ACTIVO | 2025-11-04 20:18 |
| INSTRUCCIONES-JAMES-WEB.md | ✅ ACTIVO | 2025-11-04 20:18 |
| MAPA-RAPIDO-MEMORIA.md | ✅ ACTIVO | 2025-11-04 20:19 |
| GUIA-JUANITO-PM.md | ✅ ACTIVO | 2025-11-04 20:19 |

**Sistema de Memoria Persistente: ✅ COMPLETAMENTE OPERATIVO**

---

## 📞 CÓMO USAR ESTE ÍNDICE

**Si necesitas saber:**
- **"¿Dónde está X?"** → Busca en "ARCHIVOS POR PROPÓSITO"
- **"¿Cuándo leer X?"** → Busca en "MATRIZ DE LECTURA RÁPIDA"
- **"¿Quién actualiza X?"** → Busca en el archivo específico
- **"¿Cuánto tarda X?"** → Busca en la tabla de tiempos
- **"¿Qué leo como James?"** → Ve a "FLUJO DE LECTURA POR ROL - James Web"
- **"¿Qué leo como Juanito?"** → Ve a "FLUJO DE LECTURA POR ROL - Juanito"

---

## 🎯 PRÓXIMAS REVISIONES

**La estructura será revisada:**
- Próxima semana (2025-11-11): Ajustes menores según uso
- Próximo mes (2025-12-04): Revisión completa y mejoras

---

**Archivo Creado:** 2025-11-04
**Próxima Revisión:** 2025-11-11
**Mantenedor:** James Web
