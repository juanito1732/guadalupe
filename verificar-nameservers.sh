#!/bin/bash

echo "═══════════════════════════════════════════════════════"
echo "  Verificación de Nameservers - estudiomgj.com.ar"
echo "═══════════════════════════════════════════════════════"
echo ""

echo "1️⃣  Verificando nameservers actuales..."
echo "----------------------------------------"
dig estudiomgj.com.ar NS +short
echo ""

echo "2️⃣  Verificando desde DNS de Google (8.8.8.8)..."
echo "----------------------------------------"
dig @8.8.8.8 estudiomgj.com.ar NS +short
echo ""

echo "3️⃣  Verificando desde DNS de Cloudflare (1.1.1.1)..."
echo "----------------------------------------"
dig @1.1.1.1 estudiomgj.com.ar NS +short
echo ""

echo "✅ RESULTADO ESPERADO:"
echo "   ns1.vercel-dns.com."
echo "   ns2.vercel-dns.com."
echo ""

echo "⚠️  Si no ves los nameservers de Vercel, espera 1-6 horas"
echo "   y vuelve a ejecutar este script."
echo ""
echo "═══════════════════════════════════════════════════════"
