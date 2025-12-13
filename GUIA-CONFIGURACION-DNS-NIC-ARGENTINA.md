# 🌐 Guía: Configurar DNS de estudiomgj.com.ar (NIC Argentina → Vercel)

**Fecha:** 13 Diciembre 2025
**Dominio:** estudiomgj.com.ar
**Objetivo:** Conectar dominio NIC Argentina con Vercel y generar certificado SSL

---

## 📋 Índice

1. [Opción Recomendada: Nameservers de Vercel](#opción-1-nameservers-de-vercel-recomendado)
2. [Opción Alternativa: Registros A/CNAME](#opción-2-registros-acname-manual)
3. [Verificación y Troubleshooting](#verificación)

---

## ✅ Opción 1: Nameservers de Vercel (⭐ Recomendado)

### Ventajas
- ✅ Configuración automática de SSL
- ✅ Gestión DNS simplificada
- ✅ Propagación más rápida
- ✅ No requiere renovación manual de certificados

### Paso 1: Obtener Nameservers de Vercel

1. Ingresa a [Vercel Dashboard](https://vercel.com/dashboard)
2. Selecciona el proyecto **"guadalupe"**
3. Ve a **Settings** → **Domains**
4. Click en **"Add Domain"** (si aún no está agregado)
5. Ingresa: `estudiomgj.com.ar`
6. Vercel detectará que no está configurado y te ofrecerá opciones
7. Selecciona **"Use Vercel Nameservers"**
8. Vercel te mostrará 2 nameservers:
   ```
   ns1.vercel-dns.com
   ns2.vercel-dns.com
   ```
   ⚠️ **IMPORTANTE:** Copia estos valores exactos

---

### Paso 2: Configurar Nameservers en NIC Argentina

#### 2.1 Ingresar al Panel de NIC Argentina

1. Ve a: [https://nic.ar](https://nic.ar)
2. Click en **"Ingreso a la plataforma de gestión"**
3. Ingresa con tu usuario y contraseña
4. Una vez dentro, busca el dominio **estudiomgj.com.ar**

#### 2.2 Cambiar Nameservers

1. Click en el dominio **estudiomgj.com.ar**
2. Busca la sección **"Delegación"** o **"Name Servers"**
3. Click en **"Modificar delegación"** o **"Editar nameservers"**
4. **Elimina los nameservers actuales** (si hay)
5. **Agrega los nuevos nameservers de Vercel:**
   ```
   Nameserver 1: ns1.vercel-dns.com
   Nameserver 2: ns2.vercel-dns.com
   ```
6. **Guarda los cambios**
7. NIC Argentina puede pedir confirmación por email

#### 2.3 Formato esperado por NIC Argentina

NIC Argentina suele pedir los nameservers en este formato:

```
Host: ns1.vercel-dns.com
IP: (dejar vacío o usar la IP que resuelva)

Host: ns2.vercel-dns.com
IP: (dejar vacío o usar la IP que resuelva)
```

Si NIC pide IPs, puedes obtenerlas así:
```bash
dig ns1.vercel-dns.com +short
dig ns2.vercel-dns.com +short
```

---

### Paso 3: Esperar Propagación

1. **Tiempo de propagación:** 1-48 horas (usualmente 2-6 horas)
2. **Verificar estado:**
   ```bash
   dig estudiomgj.com.ar NS +short
   ```
   Deberías ver:
   ```
   ns1.vercel-dns.com.
   ns2.vercel-dns.com.
   ```

3. **Monitorear en Vercel:**
   - Ve a Settings → Domains
   - El estado cambiará de "Invalid Configuration" a "Valid Configuration"
   - Vercel generará automáticamente el certificado SSL

---

### Paso 4: Configuración Adicional en Vercel (Opcional)

Una vez que los nameservers estén activos:

1. En Vercel → Settings → Domains
2. Agrega también: `www.estudiomgj.com.ar`
3. Vercel creará automáticamente los registros DNS necesarios
4. Configura redirect de www → dominio principal (o viceversa)

---

## 🔧 Opción 2: Registros A/CNAME Manual

### Si prefieres mantener tus nameservers actuales

#### Paso 1: Obtener IP de Vercel

1. En Vercel → Settings → Domains
2. Agrega `estudiomgj.com.ar`
3. Vercel te mostrará la configuración requerida:
   ```
   Tipo: A
   Nombre: @
   Valor: 76.76.21.21
   ```

#### Paso 2: Configurar en NIC Argentina

1. Ingresa al panel de NIC Argentina
2. Ve a **"Zona DNS"** o **"Administrar DNS"**
3. **Agregar registro A:**
   ```
   Tipo: A
   Host: @ (o dejar vacío para raíz)
   Valor: 76.76.21.21
   TTL: 3600
   ```

4. **Agregar registro CNAME para www:**
   ```
   Tipo: CNAME
   Host: www
   Valor: cname.vercel-dns.com
   TTL: 3600
   ```

#### Paso 3: Validación SSL (ACME Challenge)

⚠️ **Este es el paso crítico para resolver tu error actual**

1. En Vercel, cuando intente generar el certificado, te mostrará un registro TXT
2. Agrega en NIC Argentina:
   ```
   Tipo: TXT
   Host: _acme-challenge
   Valor: [el valor que Vercel proporcione]
   TTL: 3600
   ```

3. Espera 5-10 minutos
4. En Vercel, click en **"Verify"** o **"Retry"**

---

## ✅ Verificación

### Comandos para verificar propagación DNS

```bash
# Verificar nameservers
dig estudiomgj.com.ar NS +short

# Verificar registro A
dig estudiomgj.com.ar A +short

# Verificar registro CNAME de www
dig www.estudiomgj.com.ar CNAME +short

# Verificar desde diferentes DNS servers
dig @8.8.8.8 estudiomgj.com.ar A +short  # Google DNS
dig @1.1.1.1 estudiomgj.com.ar A +short  # Cloudflare DNS
```

### Verificar en navegador

Una vez propagado:
```
https://estudiomgj.com.ar
https://www.estudiomgj.com.ar
```

Deberías ver:
- ✅ Certificado SSL válido (candado verde)
- ✅ Sitio cargando correctamente
- ✅ Sin warnings de seguridad

---

## 🐛 Troubleshooting

### Error: "DNS zone not enabled for estudiomgj.com.ar"

**Causa:** Vercel no puede resolver el ACME challenge porque no controla el DNS

**Solución:**
1. Si usas **Nameservers de Vercel** → Esperar propagación (hasta 48h)
2. Si usas **Registros A/CNAME** → Agregar registro TXT `_acme-challenge`

---

### Error: "Invalid Configuration"

**Verificar:**
```bash
# Los nameservers apuntan a Vercel?
dig estudiomgj.com.ar NS +short

# Debe mostrar:
# ns1.vercel-dns.com.
# ns2.vercel-dns.com.
```

Si no aparecen, el cambio aún no propagó. Esperar más tiempo.

---

### Error: Certificado SSL no se genera

**Pasos:**
1. Verifica que los nameservers estén correctos
2. Elimina el dominio de Vercel
3. Espera 5 minutos
4. Vuelve a agregarlo
5. Vercel intentará generar el certificado automáticamente

---

## 📊 Timeline Estimado

| Acción | Tiempo |
|--------|--------|
| Cambiar nameservers en NIC Argentina | 5 minutos |
| Propagación inicial | 1-6 horas |
| Propagación completa | 24-48 horas |
| Generación SSL en Vercel | Automático (post-propagación) |
| **Total estimado** | **6-48 horas** |

---

## 📞 Contactos de Soporte

### NIC Argentina
- **Web:** https://nic.ar
- **Soporte:** soporte@nic.ar
- **Tel:** +54 (11) 5254-3810

### Vercel
- **Soporte:** https://vercel.com/support
- **Docs DNS:** https://vercel.com/docs/projects/domains

---

## ✅ Checklist de Configuración

- [ ] Ingresé a NIC Argentina
- [ ] Localicé el dominio estudiomgj.com.ar
- [ ] Copié los nameservers de Vercel (ns1 y ns2)
- [ ] Cambié los nameservers en NIC Argentina
- [ ] Guardé los cambios
- [ ] Esperé al menos 2 horas
- [ ] Verifiqué propagación con `dig estudiomgj.com.ar NS +short`
- [ ] Vercel muestra "Valid Configuration"
- [ ] Certificado SSL generado automáticamente
- [ ] Sitio accesible vía HTTPS

---

## 🎯 Próximos Pasos

Una vez configurado el DNS:

1. **Actualizar enlaces internos** (si hay hardcoded URLs)
2. **Configurar redirects** (www → no-www o viceversa)
3. **Actualizar Google Search Console** con nuevo dominio
4. **Verificar analytics** (Google Analytics, etc.)
5. **Notificar a la cliente** sobre el nuevo dominio activo

---

**Última actualización:** 13 Dic 2025
**Status:** 📝 Guía lista para implementación
