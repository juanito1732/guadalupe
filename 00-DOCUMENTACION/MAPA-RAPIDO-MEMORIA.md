# MAPA RÁPIDO - Sistema de Memoria Persistente Guadis

**Lee esto para entender DÓNDE está cada cosa y POR QUÉ existe**

---

## 🗺️ MAPA VISUAL DEL SISTEMA

```
┌─────────────────────────────────────────────────────────────────────┐
│                   MEMORIA PERSISTENTE DE GUADIS                      │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  ENTRADA PRINCIPAL (LEE PRIMERO)                                     │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │ 📌 CONTEXTO-PERSISTENTE.md                                  │   │
│  │ - Resumen ejecutivo en 2 minutos                            │   │
│  │ - Estado actual del proyecto                                │   │
│  │ - Stack tecnológico                                         │   │
│  │ - Lo CRÍTICO AHORA                                          │   │
│  │ → Leer SIEMPRE al iniciar sesión                            │   │
│  └──────────────────────────────────────────────────────────────┘   │
│                              ↓                                       │
│  VALIDACIÓN RÁPIDA (2 minutos)                                       │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │ 📋 TEMPLATE-ENTRADA-SESION.md                               │   │
│  │ - Checklist de 2 minutos                                    │   │
│  │ - 6 preguntas de contexto                                   │   │
│  │ - Confirmar que tienes memoria completa                     │   │
│  │ → Usar OBLIGATORIAMENTE cada sesión                         │   │
│  └──────────────────────────────────────────────────────────────┘   │
│                              ↓                                       │
│  INFORMACIÓN TÉCNICA (referencia)                                    │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │ 📝 BITACORA.md                                              │   │
│  │ - Cambios técnicos detallados                               │   │
│  │ - Decisiones de arquitectura                                │   │
│  │ - Problemas encontrados y soluciones                        │   │
│  │ - Actualizar al final de CADA sesión                        │   │
│  └──────────────────────────────────────────────────────────────┘   │
│                              ↓                                       │
│  AUDITORÍA DE SESIONES (trazabilidad)                                │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │ 📊 REGISTRO-SESIONES.md                                     │   │
│  │ - Log de TODAS las sesiones de James Web                    │   │
│  │ - Qué se hizo, cuándo, por cuánto tiempo                    │   │
│  │ - Archivos modificados en cada sesión                       │   │
│  │ - Actualizar al final de CADA sesión                        │   │
│  │ → Juanito revisa semanal                                    │   │
│  └──────────────────────────────────────────────────────────────┘   │
│                              ↓                                       │
│  PROTOCOLOS Y AUTOMATIZACIÓN                                         │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │ 🔔 PROTOCOLO-ACTUALIZACION.md                               │   │
│  │ - 5 triggers automáticos de actualización                   │   │
│  │ - Cuándo/qué/quién actualiza                                │   │
│  │ - Flujo estándar de sesión                                  │   │
│  │ - Casos especiales                                          │   │
│  │ → Leer cuando haya duda sobre qué actualizar                │   │
│  └──────────────────────────────────────────────────────────────┘   │
│                              ↓                                       │
│  INSTRUCCIONES EXPLÍCITAS                                            │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │ 📖 INSTRUCCIONES-JAMES-WEB.md                               │   │
│  │ - Qué leer OBLIGATORIAMENTE al iniciar                      │   │
│  │ - Qué actualizar OBLIGATORIAMENTE al terminar               │   │
│  │ - Protocolos para diferentes tipos de trabajo               │   │
│  │ - Reglas de oro para mantener memoria                       │   │
│  │ → Consultar cuando tengas duda de cómo proceder             │   │
│  └──────────────────────────────────────────────────────────────┘   │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 🎯 MATRIZ DE DECISIÓN: ¿QUÉ LEER?

| Situación | Leer Primero | Luego Leer | Acción |
|-----------|--------------|-----------|--------|
| **Inicio de sesión** | CONTEXTO-PERSISTENTE.md | TEMPLATE-ENTRADA-SESION.md | Completar checklist (2 min) |
| **Tengo duda de contexto** | CONTEXTO-PERSISTENTE.md | BITACORA.md últimas 3 entradas | Validar estado actual |
| **Tengo duda qué hacer** | INSTRUCCIONES-JAMES-WEB.md | PROTOCOLO-ACTUALIZACION.md | Seguir protocolo específico |
| **Se activó un trigger** | PROTOCOLO-ACTUALIZACION.md | Corresponda según trigger | Actualizar inmediatamente |
| **Fin de sesión** | PROTOCOLO-ACTUALIZACION.md checklist | BITACORA.md + REGISTRO-SESIONES.md | Documentar sesión (5-10 min) |
| **Revisar sesiones pasadas** | REGISTRO-SESIONES.md | BITACORA.md referencias | Entender qué se hizo |
| **Problema técnico serio** | BITACORA.md (buscar similar) | PROTOCOLO-ACTUALIZACION.md caso 2 | Documentar [PROBLEMA] |
| **Cliente solicita cambio** | CONTEXTO-PERSISTENTE.md | PROTOCOLO-ACTUALIZACION.md trigger 4 | Registrar [SOLICITUD] |

---

## 📍 RUTA COMPLETA DE UNA SESIÓN TÍPICA

```
MINUTO 0-2: INICIO
├─ Abrir CONTEXTO-PERSISTENTE.md
├─ Leer resumen ejecutivo (30 seg)
├─ Confirmar fase actual, presupuesto, estado pagos
└─ ✅ Contexto base confirmado

MINUTO 2-4: VALIDACIÓN
├─ Abrir TEMPLATE-ENTRADA-SESION.md
├─ Completar checklist de 6 preguntas
├─ Responder: fase, presupuesto, pagos, entregables, docs, arquitectura
└─ ✅ Contexto completo confirmado

MINUTO 4-8: REFERENCIA TÉCNICA
├─ Abrir BITACORA.md
├─ Leer últimas 3 entradas
├─ Entender cambios técnicos recientes
└─ ✅ Contexto técnico validado

MINUTO 8-10: SESIONES ANTERIORES
├─ Abrir REGISTRO-SESIONES.md
├─ Leer últimas 2 sesiones
├─ Entender qué quedó pendiente
└─ ✅ LISTO PARA TRABAJAR

═══════════════════════════════════════════════════════════════════

TRABAJAR EN TAREAS (variable)
├─ Desarrollo de features
├─ Resolución de bugs
├─ Implementación de cambios
│
├─ [SI TRIGGER OCURRE]
│  ├─ Consultar PROTOCOLO-ACTUALIZACION.md
│  ├─ Actualizar BITACORA.md INMEDIATAMENTE
│  └─ Continuar trabajo
│
└─ Completar objetivos de sesión

═══════════════════════════════════════════════════════════════════

MINUTO X: FIN DE SESIÓN (últimos 10 minutos)

MINUTO -10: DOCUMENTACIÓN
├─ Abrir BITACORA.md
├─ Crear nueva entrada con:
│  ├─ Fecha/hora
│  ├─ Cambios realizados
│  ├─ Funcionalidades agregadas
│  └─ Próximos pasos
└─ Guardar ✅

MINUTO -8: AUDITORÍA DE SESIÓN
├─ Abrir REGISTRO-SESIONES.md
├─ Crear nueva entrada con:
│  ├─ Número sesión, fecha/hora, duración
│  ├─ Lo que se hizo
│  ├─ Archivos modificados
│  ├─ Próximos pasos
│  └─ Triggers activados
└─ Guardar ✅

MINUTO -2: CONTEXTO (si hay cambios mayores)
├─ Abrir CONTEXTO-PERSISTENTE.md
├─ Actualizar SOLO si hay cambios:
│  ├─ Estado de entregables
│  ├─ Estado de pagos
│  └─ Próximas revisiones
└─ Guardar ✅

MINUTO 0: ✅ SESIÓN COMPLETA Y DOCUMENTADA
└─ Memoria persistente ACTUALIZADA

═══════════════════════════════════════════════════════════════════
```

---

## 🔧 ARCHIVOS DE SOPORTE (referencia)

Estos archivos NO necesitas leer cada sesión, pero existen para referencia:

| Archivo | Cuándo leer | Propósito |
|---------|-----------|----------|
| PROYECTO-INFO.md | Si necesitas info del cliente | Datos de cliente, presupuesto, contacto |
| FASES.md | Si necesitas detalles de fase | Entregables detallados, timeline |
| ESTRUCTURA-EXPLICADA.md | Si necesitas entender estructura | Explicación visual de carpetas |
| MAPA-RAPIDO-MEMORIA.md | Este archivo | Navegar el sistema de memoria |

---

## ⚡ ACCESO RÁPIDO SEGÚN NECESIDAD

**"Necesito validar contexto general"**
→ Leer: CONTEXTO-PERSISTENTE.md (2-3 min)

**"Necesito confirmar contexto rápidamente"**
→ Usar: TEMPLATE-ENTRADA-SESION.md (2 min)

**"¿Qué se hizo en última sesión?"**
→ Ver: REGISTRO-SESIONES.md última entrada (2 min)

**"¿Qué cambios técnicos recientes?"**
→ Ver: BITACORA.md últimas 3 entradas (2 min)

**"¿Tengo dudas de cómo mantener memoria?"**
→ Leer: INSTRUCCIONES-JAMES-WEB.md (sección relevante)

**"¿Se activó un trigger, qué hago?"**
→ Ir a: PROTOCOLO-ACTUALIZACION.md (buscar trigger)

**"¿Cuándo debo actualizar qué?"**
→ Consultar: PROTOCOLO-ACTUALIZACION.md triggers

**"¿Cómo documento mi sesión?"**
→ Usar: PROTOCOLO-ACTUALIZACION.md checklist

---

## 📊 ESTADÍSTICAS DEL SISTEMA

| Métrica | Valor |
|---------|-------|
| **Archivos de Memoria** | 6 |
| **Tiempo de Validación** | 8 minutos |
| **Tiempo de Documentación** | 5-10 minutos |
| **Total por Sesión** | 13-18 minutos |
| **Triggers de Actualización** | 5 automáticos |
| **Responsables** | James Web + Juanito |
| **Frecuencia Revisión** | Semanal (Juanito) |

---

## ✅ CHECKLIST: "TENGO TODO?"

Antes de trabajar en Guadis, confirma que tienes:

- [ ] ¿Leí CONTEXTO-PERSISTENTE.md?
- [ ] ¿Completé TEMPLATE-ENTRADA-SESION.md?
- [ ] ¿Sé cuál es la fase actual? (Fase 1)
- [ ] ¿Sé cuál es el presupuesto? ($1,000 total)
- [ ] ¿Sé cuál es estado de pagos? (1/3 cuotas)
- [ ] ¿Sé dónde están docs críticas? (00-DOCUMENTACION/)
- [ ] ¿Entiendo cómo mantener memoria? (INSTRUCCIONES-JAMES-WEB.md)

**Si dijiste NO a cualquiera: NO ESTÁS LISTO. LEE PRIMERO.**

---

## 🎓 PRIMERAS ACCIONES

Si NUNCA has trabajado en Guadis:

1. **Lectura Inicial (15 minutos):**
   - CONTEXTO-PERSISTENTE.md (5 min)
   - PROTOCOLO-ACTUALIZACION.md (5 min)
   - INSTRUCCIONES-JAMES-WEB.md (5 min)

2. **Primera Sesión (8 minutos):**
   - TEMPLATE-ENTRADA-SESION.md (2 min)
   - BITACORA.md últimas entradas (2 min)
   - REGISTRO-SESIONES.md últimas sesiones (2 min)
   - Listo para trabajar ✅

3. **Sesiones Posteriores (8 minutos):**
   - Repetir pasos de Primera Sesión
   - Nunca más necesitarás lectura inicial

---

## 🔗 NAVEGACIÓN RÁPIDA

**Archivos Principales:**
- CONTEXTO-PERSISTENTE.md - Entra aquí SIEMPRE
- INSTRUCCIONES-JAMES-WEB.md - Cuando tengas dudas
- PROTOCOLO-ACTUALIZACION.md - Para workflow
- BITACORA.md - Para historial técnico
- REGISTRO-SESIONES.md - Para auditoría

**Este Archivo:**
- MAPA-RAPIDO-MEMORIA.md - Orientación visual

---

**Última Actualización:** 2025-11-04
**Sistema:** ACTIVO Y LISTO PARA USO
**Próxima Revisión:** 2025-11-11
