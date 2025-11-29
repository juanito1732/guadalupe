# GUÍA PARA JUANITO - Project Manager de Guadis

**Este archivo es SOLO para ti (Juanito).**
**Te explica qué necesitas saber y qué necesitas hacer para gestionar Guadis profesionalmente.**

---

## 🎯 TU ROL COMO PROJECT MANAGER

Como PM de Guadis, tú eres responsable de:

1. **Coordinación con Cliente** - Gerenciar comunicación y expectativas
2. **Gestión Financiera** - Registrar pagos y controlar presupuesto
3. **Validación de Proyecto** - Asegurar que todo está en orden
4. **Escalation** - Resolver problemas cuando James Web los identifica

**La memoria del proyecto es compartida entre tú y James Web.**

---

## 📌 LO QUE NECESITAS SABER SOBRE EL SISTEMA

### Archivos Críticos

**CONTEXTO-PERSISTENTE.md**
- Este es el "snapshot" del proyecto en cualquier momento
- Lee este SOLO cuando necesites validar estado general
- Actualizado por James Web cuando hay cambios mayores
- Confiable y trazable

**BITACORA.md**
- Log técnico detallado de cambios
- Útil para entender CÓMO se llegó a un estado
- Actualizado por James Web después de CADA sesión
- Revisa cuando necesites historial detallado

**REGISTRO-SESIONES.md**
- Auditoría completa de todas las sesiones
- Ver cuándo trabajó James Web y en qué
- Útil para validar que se está progresando
- Revisa semanal para validar avance

**PROTOCOLO-ACTUALIZACION.md**
- Define triggers automáticos
- SI hay cambio de pagos: TRIGGER 2 se activa
- James Web debe actualizar memoria cuando se activa
- Valida que el protocolo se está respetando

**INSTRUCCIONES-JAMES-WEB.md**
- Instrucciones que James Web debe seguir
- Te muestra cómo se supone que debe mantener memoria
- Úsalo para validar que lo está haciendo

---

## 📅 TUS TAREAS SEMANALES

### Cada Lunes (15 minutos)

```
LUNES - VALIDACIÓN SEMANAL

1. Abre: CONTEXTO-PERSISTENTE.md
   └─ Confirma: ¿Estado del proyecto es el esperado?

2. Abre: BITACORA.md
   └─ Lee: Últimas 5 entradas
   └─ Confirma: ¿Se está avanzando?

3. Abre: REGISTRO-SESIONES.md
   └─ Cuenta: ¿Cuántas sesiones en última semana?
   └─ Valida: ¿Tiempo trabajado es razonable?

4. Abre: PROTOCOLO-ACTUALIZACION.md
   └─ Confirma: ¿Se está respetando?
   └─ Valida: ¿James Web actúa según el protocolo?

RESULTADO: Sabes exactamente el estado del proyecto
```

---

## 💰 GESTIÓN FINANCIERA

### Cuándo Recibes Pago

**Haz esto INMEDIATAMENTE:**

1. Abre: `/home/juani/Desktop/claude/proyectos/guadis/00-DOCUMENTACION/PROYECTO-INFO.md`

2. Actualiza la sección de "Presupuesto y Plan de Pagos":
   ```markdown
   - ✅ Cuota 1: $200 USD - [Fecha de pago]
   ```

3. Abre: `/home/juani/Desktop/claude/proyectos/guadis/00-DOCUMENTACION/FASES.md`

4. Actualiza la sección "Control de Pagos":
   ```markdown
   - [x] Cuota 1 ($200) - Recibido [Fecha]
   ```

5. Crea entrada en BITACORA.md:
   ```markdown
   ## [FECHA] - [HORA]
   ### [PAGO RECIBIDO] Cuota [N] de Fase [X]

   ### Cambios Realizados:
   - ✅ Registrado pago: $[Cantidad] USD
   - ✅ Fecha de recepción: [Fecha]
   - ✅ Actualizado PROYECTO-INFO.md
   - ✅ Actualizado FASES.md

   ### Estado Financiero:
   - Total Fase 1 Recibido: $[X] / $600
   - Total Proyecto Recibido: $[X] / $1,000
   - Porcentaje Completado: [X]%
   ```

6. Notifica a James Web:
   - "Cuota [N] recibida - actualizar CONTEXTO-PERSISTENTE.md si es necesario"

**Tiempo:** 5 minutos máximo

---

### Control de Presupuesto

**Cada vez que recibas pago, actualiza esta tabla:**

| Cuota | Monto | Fase | Recibido | Fecha | Próxima |
|-------|-------|------|----------|-------|---------|
| 1 | $200 | 1 | ✅ Sí | 2025-11-04 | A mitad desarrollo |
| 2 | $200 | 1 | ⏳ No | - | A mitad desarrollo |
| 3 | $200 | 1 | ⏳ No | - | Al finalizar |

---

## 🔄 CUÁNDO JAMES WEB ACTIVA TRIGGERS

**Como PM, debes VALIDAR que James Web respete los triggers:**

### TRIGGER 2: Cambios en Estado de Pagos
**Cuándo ocurre:** Tú recibes pago
**Qué debe hacer James Web:**
1. Actualizar PROYECTO-INFO.md
2. Actualizar FASES.md - Control de Pagos
3. Actualizar CONTEXTO-PERSISTENTE.md
4. Crear entrada en BITACORA.md

**Cómo validas:** Abre BITACORA.md y busca [PAGO RECIBIDO]

---

## 🚨 ESCALATION: QUÉ HACER SI ALGO NO ESTÁ BIEN

### Caso 1: James Web no actualizó memoria
**Síntoma:** Lees BITACORA.md y la última entrada es de hace 1+ semana

**Acción:**
1. Abre REGISTRO-SESIONES.md
2. Confirma que James Web SÍ trabajó (debería haber entrada)
3. Si trabajó pero no documentó: ESCALATE
4. Mensaje: "James Web, completaste trabajo pero no actualizaste BITACORA.md. Por favor, documentar ahora."

---

### Caso 2: Cliente solicita cambio importante
**Síntoma:** Cliente te contacta con nueva solicitud

**Acción:**
1. NO actualices nada directamente
2. Contacta a James Web: "Cliente solicita [cambio]. ¿Impacto en timeline/presupuesto?"
3. James Web registra en BITACORA.md como [SOLICITUD CLIENTE]
4. Espera evaluación
5. Después de aprobación: James Web actualiza CONTEXTO-PERSISTENTE.md

---

### Caso 3: Problema técnico serio
**Síntoma:** BITACORA.md muestra entrada con [PROBLEMA]

**Acción:**
1. Lee la entrada de [PROBLEMA] completa
2. Valida que haya propuesta de solución
3. Si no hay propuesta clara: ESCALATE
4. Mensaje: "James Web, [PROBLEMA] identificado. ¿Cuál es la solución propuesta y el impact?"

---

## 📊 VALIDACIÓN MENSUAL (1 vez al mes)

**Primer lunes de cada mes, dedica 30 minutos a validar:**

```
VALIDACIÓN MENSUAL CHECKLIST

□ CONTEXTO-PERSISTENTE.md
  ├─ ¿Refleja estado actual del proyecto?
  ├─ ¿Estado de entregables es preciso?
  ├─ ¿Estado de pagos es correcto?
  └─ ¿Está actualizado con fecha reciente?

□ PROTOCOLO-ACTUALIZACION.md
  ├─ ¿Se están respetando los triggers?
  ├─ ¿James Web actualiza cuando se activan?
  └─ ¿El protocolo sigue siendo útil o necesita ajuste?

□ BITACORA.md
  ├─ ¿Hay entrada cada vez que James Web trabaja?
  ├─ ¿Las entradas son detalladas y útiles?
  ├─ ¿Se documentan decisiones arquitectónicas?
  └─ ¿Próximos pasos están claros?

□ REGISTRO-SESIONES.md
  ├─ ¿Cada sesión está registrada?
  ├─ ¿Hay suficiente detalle?
  ├─ ¿Permite rastrear qué se hizo cuándo?
  └─ ¿Hay consistencia en el formato?

□ Avance General
  ├─ ¿Estamos en timeline planeado?
  ├─ ¿Avance es consistente?
  ├─ ¿Cliente está satisfecho?
  └─ ¿Hay blockers documentados?

RESULTADO: Informe a James Web con feedback/ajustes
```

---

## 📧 COMUNICACIÓN CON JAMES WEB

**Usa estos formatos para comunicación clara:**

### Formato 1: Actualizaciones de Estado
```
ASUNTO: Estado Proyecto Guadis - [Semana/Mes]

El proyecto está:
- Fase: 1 - Landing Page ✓
- Pagos: [Estado actual]
- Avance: [%]
- Timeline: [En curso / Atrasado / Adelantado]
- Próximas: [Tareas]

¿Necesitas algo de mi parte?
```

### Formato 2: Validación de Protocolo
```
ASUNTO: Validación Protocolo - [Fecha]

Revisé memoria del proyecto:
- ✓ CONTEXTO-PERSISTENTE.md actualizado
- ✓ BITACORA.md actualizada
- ✓ REGISTRO-SESIONES.md actualizado
- ✓ Triggers siendo respetados

Continúa así. Sistema funcionando perfectamente.
```

### Formato 3: Cuando hay problema
```
ASUNTO: [ESCALATION] [Tipo de Problema] - [Fecha]

Problema identificado:
[Descripción]

Qué necesito de ti:
[Acción requerida]

Timeline: [Urgencia]
```

---

## 🎓 RESUMEN RÁPIDO DE ROLES

| Responsabilidad | Juanito | James Web |
|-----------------|---------|-----------|
| Contacto cliente | ✅ Sí | - |
| Recibir pagos | ✅ Sí | - |
| Actualizar pagos en docs | ✅ Sí | Notificar |
| Mantener CONTEXTO-PERSISTENTE.md | - | ✅ Sí |
| Actualizar BITACORA.md | - | ✅ Sí |
| Registrar sesiones | - | ✅ Sí |
| Validar estado semanal | ✅ Sí | - |
| Resolver escalations | ✅ Sí | Reportar |
| Desarrollo técnico | - | ✅ Sí |
| Decisiones de arquitectura | - | ✅ Sí |

---

## 📱 CHECKLIST SEMANAL (Cópialo a tu calendario)

**CADA LUNES - 15 MINUTOS:**

```
□ Abrir CONTEXTO-PERSISTENTE.md
  └─ Confirmar estado general

□ Abrir BITACORA.md
  └─ Leer últimas 5 entradas

□ Abrir REGISTRO-SESIONES.md
  └─ Contar sesiones de semana
  └─ Validar duración

□ Validar:
  ├─ ¿James Web está documentando?
  ├─ ¿Se está avanzando?
  ├─ ¿Hay problemas?
  └─ ¿Próximos pasos son claros?

□ Si hay problema: ESCALATE
□ Si todo bien: Continúa monitoreando
```

---

## 🔗 ARCHIVOS PARA TI

| Archivo | Qué Es | Cuándo Leer | Frecuencia |
|---------|--------|-----------|-----------|
| CONTEXTO-PERSISTENTE.md | Estado general | Cuando necesites snapshot | Semanal |
| BITACORA.md | Historial técnico | Cuando necesites historial | Semanal |
| REGISTRO-SESIONES.md | Auditoría de sesiones | Para validar avance | Semanal |
| PROTOCOLO-ACTUALIZACION.md | Definición de protocolo | Para validar se respeta | Semanal |
| PROYECTO-INFO.md | Info cliente + pagos | Para actualizar pagos | Cuando recibas pago |
| FASES.md | Detalle de fases | Para control de pagos | Cuando recibas pago |

---

## ✅ CHECKLIST: "¿ESTOY LISTO COMO PM?"

- [ ] ¿Entiendo el rol de James Web?
- [ ] ¿Entiendo cómo funciona el sistema de memoria?
- [ ] ¿Sé dónde están los archivos clave?
- [ ] ¿Sé qué actualizar cuando recibo pago?
- [ ] ¿Sé cómo validar que James Web está documentando?
- [ ] ¿Sé qué hacer en caso de problema?
- [ ] ¿Tengo checklist semanal en mi calendario?

**Si dijiste NO a cualquiera: Relée este archivo.**

---

## 🚀 PRÓXIMAS ACCIONES

1. **Esta Semana:**
   - Lee este archivo completamente
   - Abre los archivos clave (CONTEXTO-PERSISTENTE, BITACORA, etc.)
   - Confirma que entiendes el sistema
   - Agrega checklist semanal a tu calendario

2. **Próxima Semana:**
   - Haz tu primera validación semanal (15 min)
   - Confirma que James Web está documentando
   - Envía feedback si es necesario

3. **Cada Semana:**
   - Lunes: Validación semanal (15 min)
   - Cuando recibas pago: Actualizar documentación (5 min)
   - Si hay problema: Escalate inmediatamente

---

## 📞 CONTACTO RÁPIDO

**Si necesitas contactar a James Web:**

Formato estándar:
```
Asunto: [TIPO] [Descripción breve]

Tipos: [PAGO], [ESCALATION], [VALIDACION], [FEEDBACK], [URGENTE]

Ejemplo:
Asunto: [PAGO] Cuota 2 recibida - Actualizar docs
```

---

## 🎯 TU OBJETIVO FINAL

**Como PM, tu objetivo es:**

1. ✅ Mantener cliente satisfecho
2. ✅ Mantener proyecto en timeline
3. ✅ Mantener presupuesto controlado
4. ✅ Validar que James Web está documentando
5. ✅ Resolver problemas cuando surjan

**El sistema de memoria que James Web mantiene te AYUDA a lograr esto.**

**NO es burocracia, es PROFESIONALISMO.**

---

**Última Actualización:** 2025-11-04
**Próxima Revisión:** 2025-11-11
**Autor:** James Web (para Juanito)
