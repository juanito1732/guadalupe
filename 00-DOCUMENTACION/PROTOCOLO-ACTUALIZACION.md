# PROTOCOLO DE ACTUALIZACIÓN - Sistema de Memoria Persistente

**Versión:** 1.0
**Efectiva desde:** 2025-11-04
**Responsable:** James Web + Juanito (Coordinación)

---

## 📋 RESUMEN EJECUTIVO

Este protocolo define **CUÁNDO**, **QUÉ** y **QUIÉN** actualiza los archivos de memoria persistente del proyecto Guadis. Garantiza que James Web nunca pierda contexto y que cada cambio sea auditable.

---

## 🔔 TRIGGERS AUTOMÁTICOS DE ACTUALIZACIÓN

Estos eventos REQUIEREN actualizar la memoria persistente inmediatamente:

### TRIGGER 1: Cambios en Fase/Entregables
**Cuándo se activa:**
- Se completa un entregable
- Se descubre un obstáculo importante
- Cambia la prioridad de tareas

**Qué actualizar:**
1. BITACORA.md - Registrar cambio técnico
2. CONTEXTO-PERSISTENTE.md - Actualizar "Estado Actual del Proyecto"
3. REGISTRO-SESIONES.md - Registrar en log de sesiones

**Ejemplo:**
```markdown
TRIGGER: Se descubre que Lighthouse Score requiere optimización de imágenes WebP
ACCIÓN: Actualizar BITACORA.md + CONTEXTO-PERSISTENTE.md + REGISTRO-SESIONES.md
TIEMPO: Inmediato (máximo 2 minutos)
```

---

### TRIGGER 2: Cambios en Estado de Pagos
**Cuándo se activa:**
- Se recibe una cuota
- Cambia la fecha de pago
- Cliente confirma cambios en plan de pago

**Qué actualizar:**
1. PROYECTO-INFO.md - Actualizar sección "Presupuesto y Plan de Pagos"
2. CONTEXTO-PERSISTENTE.md - Actualizar "Estado de Pago Fase 1/2"
3. BITACORA.md - Registrar evento de pago
4. REGISTRO-SESIONES.md - Registrar cambio

**Responsable:** Juanito (recibe pagos) + James Web (documenta)

**Ejemplo:**
```markdown
TRIGGER: Cliente paga Cuota 2 ($200)
ACCIÓN: Juanito informa → James Web actualiza PROYECTO-INFO.md + CONTEXTO-PERSISTENTE.md
TIEMPO: Máximo 1 hora después de recibir pago
```

---

### TRIGGER 3: Cambios Arquitectónicos Importantes
**Cuándo se activa:**
- Se decide cambiar tecnologías
- Se modifica la estructura de carpetas
- Se añaden nuevas dependencias críticas

**Qué actualizar:**
1. CONTEXTO-PERSISTENTE.md - Actualizar "Stack Tecnológico"
2. BITACORA.md - Registrar decisión y justificación
3. ESTRUCTURA-EXPLICADA.md - Actualizar si aplica
4. REGISTRO-SESIONES.md - Registrar cambio

**Ejemplo:**
```markdown
TRIGGER: Se decide agregar React en lugar de vanilla JS
ACCIÓN: Actualizar stack tecnológico, justificar decisión
TIEMPO: Antes de empezar implementación
```

---

### TRIGGER 4: Descubrimiento de Requerimientos Nuevos
**Cuándo se activa:**
- Cliente solicita nueva funcionalidad
- Se identifica problema técnico significativo
- Cambia la dirección del proyecto

**Qué actualizar:**
1. FASES.md - Agregar a entregables si aplica
2. PROYECTO-INFO.md - Actualizar "Requerimientos Especiales"
3. CONTEXTO-PERSISTENTE.md - Actualizar "Próximas Revisiones"
4. BITACORA.md + REGISTRO-SESIONES.md - Registrar

**Ejemplo:**
```markdown
TRIGGER: Cliente solicita carrito persistente en Fase 1 (originally Fase 2)
ACCIÓN: Reevaluar scope, actualizar FASES.md, registrar decision
TIEMPO: Máximo 1 sesión de trabajo
```

---

### TRIGGER 5: Fin de Sesión de Trabajo
**Cuándo se activa:**
- James Web termina sesión de trabajo
- Se completó un hito importante
- Al cierre de jornada laboral

**Qué actualizar:**
1. BITACORA.md - Registrar resumen de lo hecho
2. REGISTRO-SESIONES.md - Registrar entrada de sesión
3. CONTEXTO-PERSISTENTE.md - Actualizar si hay cambios mayores

**Tiempo asignado:** 3-5 minutos

---

## 📊 CHECKLIST DE ACTUALIZACIÓN POR SESIÓN

**Copiar y pegar en BITACORA.md al terminar:**

```markdown
## [FECHA] - [HORA]
### Sesión de Trabajo #[N]

#### ✅ Actualizaciones Completadas:
- [ ] BITACORA.md actualizada con cambios técnicos
- [ ] REGISTRO-SESIONES.md actualizada con entrada de sesión
- [ ] CONTEXTO-PERSISTENTE.md revisado (actualizar si hay cambios)
- [ ] Próximos pasos documentados

#### 📝 Cambios Técnicos Realizados:
- [Describir cambios]

#### 🎯 Próximas Acciones:
- [ ] [Tarea 1]
- [ ] [Tarea 2]

#### 🔔 Triggers Activados:
- [Sí/No] TRIGGER 1: Cambios en Fase/Entregables
- [Sí/No] TRIGGER 2: Cambios en Estado de Pagos
- [Sí/No] TRIGGER 3: Cambios Arquitectónicos
- [Sí/No] TRIGGER 4: Nuevos Requerimientos
- [Sí/No] TRIGGER 5: Fin de Sesión (siempre SÍ)
```

---

## 🎭 ROLES Y RESPONSABILIDADES

### JAMES WEB
**Responsable de MANTENER memoria persistente**

| Tarea | Frecuencia | Archivo |
|-------|-----------|---------|
| Registrar cambios técnicos | Diario (fin de sesión) | BITACORA.md |
| Registrar sesiones de trabajo | Diario (fin de sesión) | REGISTRO-SESIONES.md |
| Actualizar contexto general | Cuando hay cambios mayores | CONTEXTO-PERSISTENTE.md |
| Validar memoria al iniciar | Cada sesión (2 min) | TEMPLATE-ENTRADA-SESION.md |
| Documentar decisiones técnicas | Inmediatamente | BITACORA.md |

**Tiempo dedicado:** ~5-10 minutos por sesión

**NUNCA:**
- Olvides actualizar BITACORA.md al terminar
- Hagas cambios sin registrar en memoria
- Inicies sesión sin leer CONTEXTO-PERSISTENTE.md
- Ignores triggers de actualización

---

### JUANITO (Proyecto Manager + Propietario)
**Responsable de VALIDAR y COORDINAR memoria persistente**

| Tarea | Frecuencia | Archivo |
|-------|-----------|---------|
| Informar de pagos recibidos | Cuando ocurra | PROYECTO-INFO.md |
| Validar información del cliente | Semanal | PROYECTO-INFO.md |
| Confirmar cambios de scope | Cuando cambie | FASES.md |
| Revisar BITACORA.md | Semanal | BITACORA.md |
| Validar estado general | Semanal | CONTEXTO-PERSISTENTE.md |

**Tiempo dedicado:** ~10-15 minutos por semana

**PODER HACER:**
- Actualizar PROYECTO-INFO.md directamente (datos de cliente, pagos)
- Agregar notas a FASES.md (cambios de scope)
- Crear entradas especiales en BITACORA.md (cambios de dirección)
- Pedir a James Web que actualice memoria

---

## 🔄 FLUJO DE ACTUALIZACIÓN ESTÁNDAR

```
┌─────────────────────────────────────────┐
│ JAMES WEB INICIA SESIÓN                 │
├─────────────────────────────────────────┤
│ 1. LEE: CONTEXTO-PERSISTENTE.md         │
│ 2. LEE: TEMPLATE-ENTRADA-SESION.md      │
│ 3. LEE: Últimas 3 líneas de BITACORA.md │
├─────────────────────────────────────────┤
│ ✅ CONTEXTO VALIDADO                    │
└─────────────────────────────────────────┘
         ↓
┌─────────────────────────────────────────┐
│ JAMES WEB TRABAJA EN TAREAS              │
├─────────────────────────────────────────┤
│ - Desarrolla features                   │
│ - Resuelve problemas técnicos            │
│ - Implementa cambios                     │
└─────────────────────────────────────────┘
         ↓
┌─────────────────────────────────────────┐
│ TRIGGERS SE ACTIVAN (durante trabajo)   │
├─────────────────────────────────────────┤
│ ¿Hay cambios importantes?                │
│ → SÍ: Actualizar inmediatamente          │
│ → NO: Continuar trabajando               │
└─────────────────────────────────────────┘
         ↓
┌─────────────────────────────────────────┐
│ JAMES WEB TERMINA SESIÓN                 │
├─────────────────────────────────────────┤
│ 1. ACTUALIZA: BITACORA.md                │
│ 2. ACTUALIZA: REGISTRO-SESIONES.md       │
│ 3. REVISA: CONTEXTO-PERSISTENTE.md       │
│    (Actualizar si hay cambios mayores)   │
│ 4. COMPLETA: Checklist de actualización  │
└─────────────────────────────────────────┘
         ↓
┌─────────────────────────────────────────┐
│ ✅ SESIÓN DOCUMENTADA Y AUDITABLE        │
└─────────────────────────────────────────┘
```

---

## 📈 ESCALABILIDAD DEL PROTOCOLO

**A medida que Guadis crece:**

- **Fase 1 → Fase 2:** Agregar triggers para Firebase, Mercado Pago
- **Equipo crece:** Definir permisos de edición (quién puede editar qué)
- **Complejidad aumenta:** Crear secciones adicionales en CONTEXTO-PERSISTENTE.md
- **Historial crece:** Archivar REGISTRO-SESIONES.md mensualmente (guardar original)

---

## 🚨 CASOS ESPECIALES

### Caso 1: Cliente solicita cambio urgente
**Protocolo:**
1. Registrar cambio inmediatamente en BITACORA.md
2. Marcar como [URGENTE]
3. Notificar a Juanito
4. Actualizar CONTEXTO-PERSISTENTE.md después de evaluación

**Ejemplo:**
```markdown
## [2025-11-05] - [14:30]
### [URGENTE] Cliente solicita agregar sección de testimonios
### Cambios Realizados:
- Cliente solicita agregar testimonios antes de entregar Fase 1
- Evaluando impacto en timeline y presupuesto
- Requiere aprobación de Juanito
```

---

### Caso 2: Descubrimiento de problema técnico serio
**Protocolo:**
1. Registrar en BITACORA.md como [PROBLEMA]
2. Documentar análisis del problema
3. Proponer soluciones alternativas
4. Escalate a Juanito para decisión
5. Actualizar CONTEXTO-PERSISTENTE.md cuando se resuelva

**Ejemplo:**
```markdown
## [2025-11-05] - [16:00]
### [PROBLEMA] Lighthouse Score no alcanza 95%
### Análisis:
- Performance: 88% (imágenes sin optimizar)
- Accessibility: 92% (contraste insuficiente)
- SEO: 94% (meta tags incompletos)

### Soluciones Propuestas:
1. Convertir imágenes a WebP (+5% performance)
2. Ajustar contraste de colores (+3% accessibility)
3. Completar meta tags (+1% SEO)
```

---

### Caso 3: Sesión de trabajo interrumpida
**Protocolo:**
1. Registrar qué se completó y qué quedó pendiente
2. Marcar como [INCOMPLETA]
3. Crear lista clara de "Retomar desde aquí"
4. IMPORTANTE: Esto se registra en REGISTRO-SESIONES.md

**Ejemplo:**
```markdown
### Sesión #15 [INCOMPLETA]
**Fecha:** 2025-11-05 | **Hora Inicio:** 10:00 | **Hora Fin:** 10:45
**Status:** Interrumpida

**Completado:**
- Optimización de imágenes hero (60% done)

**Retomar Desde Aquí:**
- Convertir imágenes restantes a WebP
- Actualizar srcset en HTML
- Testear en navegadores reales
```

---

## ✅ VALIDACIÓN MENSUAL

**Cada primer lunes del mes, Juanito revisa:**

- [ ] CONTEXTO-PERSISTENTE.md está actualizado
- [ ] PROTOCOLO-ACTUALIZACION.md se está cumpliendo
- [ ] REGISTRO-SESIONES.md tiene entradas consistentes
- [ ] BITACORA.md refleja el progreso real
- [ ] No hay conflictos entre documentos
- [ ] Memoria persistente sigue siendo útil
- [ ] Se necesita mejorar el protocolo

**Resultado:** Email a James Web con feedback/ajustes

---

## 🎯 OBJETIVOS DEL PROTOCOLO

✅ James Web NUNCA olvida contexto del proyecto
✅ Cada cambio es auditable y trazable
✅ Juanito siempre sabe el estado real del proyecto
✅ Escalable a múltiples proyectos
✅ Eficiente (máximo 10 minutos por sesión)
✅ Automatizado (triggers eliminar intervención manual)
✅ Profesional (documenta decisiones y razones)

---

**Versión:** 1.0 | **Efectiva:** 2025-11-04 | **Próxima Revisión:** 2025-12-04
