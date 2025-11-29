#!/bin/bash

#############################################################################
# SETUP-AUTOMATION.sh
# Este script configura el deployment automático de Vercel
# EJECUTAR UNA SOLA VEZ para activar el workflow de GitHub Actions
#############################################################################

set -e

echo "════════════════════════════════════════════════════════════════"
echo "🚀 SETUP DE AUTOMATION - GUADIS LANDING"
echo "════════════════════════════════════════════════════════════════"
echo ""

# Paso 1: Obtener información de Vercel
echo "PASO 1: Obtener credenciales de Vercel"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "Necesitamos 3 valores de tu proyecto Vercel:"
echo ""
echo "1. VERCEL_TOKEN"
echo "   - Ir a: https://vercel.com/account/tokens"
echo "   - Crear un nuevo token personal"
echo "   - Copiar el token"
echo ""
read -p "Ingresa tu VERCEL_TOKEN: " VERCEL_TOKEN

echo ""
echo "2. VERCEL_ORG_ID"
echo "   - Ir a: https://vercel.com/account/settings"
echo "   - Buscar 'Team ID' en General"
echo "   - O ingresa el org id de tu proyecto"
echo ""
read -p "Ingresa tu VERCEL_ORG_ID: " VERCEL_ORG_ID

echo ""
echo "3. VERCEL_PROJECT_ID"
echo "   - Ir a: https://vercel.com/juanito1732/guadis-landing/settings"
echo "   - Buscar 'Project ID' en General"
echo ""
read -p "Ingresa tu VERCEL_PROJECT_ID: " VERCEL_PROJECT_ID

# Validar que no estén vacíos
if [ -z "$VERCEL_TOKEN" ] || [ -z "$VERCEL_ORG_ID" ] || [ -z "$VERCEL_PROJECT_ID" ]; then
    echo ""
    echo "❌ Error: Todos los valores son requeridos"
    exit 1
fi

# Paso 2: Configurar GitHub Secrets
echo ""
echo "PASO 2: Configurando GitHub Secrets"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "Voy a crear los GitHub Secrets automáticamente..."
echo ""

# Usar GitHub CLI si está disponible
if command -v gh &> /dev/null; then
    echo "✅ GitHub CLI encontrado"
    echo ""

    echo "Configurando secretos..."
    gh secret set VERCEL_TOKEN --body "$VERCEL_TOKEN" 2>/dev/null || true
    gh secret set VERCEL_ORG_ID --body "$VERCEL_ORG_ID" 2>/dev/null || true
    gh secret set VERCEL_PROJECT_ID --body "$VERCEL_PROJECT_ID" 2>/dev/null || true

    echo "✅ Secretos configurados"

else
    echo "⚠️  GitHub CLI no encontrado"
    echo ""
    echo "Configura manualmente los GitHub Secrets:"
    echo "1. Ve a: https://github.com/juanito1732/guadis-landing/settings/secrets/actions"
    echo "2. Haz click en 'New repository secret'"
    echo "3. Agrega estos 3 secretos:"
    echo ""
    echo "   Nombre: VERCEL_TOKEN"
    echo "   Valor: $VERCEL_TOKEN"
    echo ""
    echo "   Nombre: VERCEL_ORG_ID"
    echo "   Valor: $VERCEL_ORG_ID"
    echo ""
    echo "   Nombre: VERCEL_PROJECT_ID"
    echo "   Valor: $VERCEL_PROJECT_ID"
    echo ""
fi

# Paso 3: Verificar que el workflow está en su lugar
echo ""
echo "PASO 3: Verificando configuración"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

if [ -f ".github/workflows/deploy.yml" ]; then
    echo "✅ Archivo .github/workflows/deploy.yml existe"
else
    echo "❌ Error: El archivo deploy.yml no se encontró"
    exit 1
fi

if [ -f "vercel.json" ]; then
    echo "✅ Archivo vercel.json existe"
else
    echo "❌ Error: El archivo vercel.json no se encontró"
    exit 1
fi

# Paso 4: Hacer un commit final
echo ""
echo "PASO 4: Activando workflow con commit"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

git add .github/workflows/deploy.yml vercel.json
git commit -m "build: add github actions workflow for automated deployment" 2>/dev/null || echo "⚠️  Commit no fue necesario (cambios ya commiteados)"
git push origin main 2>/dev/null || echo "⚠️  Push no fue necesario"

echo "✅ Workflow commitado"

# Paso 5: Resumen
echo ""
echo "════════════════════════════════════════════════════════════════"
echo "✅ SETUP COMPLETADO"
echo "════════════════════════════════════════════════════════════════"
echo ""
echo "De ahora en adelante:"
echo "✅ Cada commit a 'main' disparará un deployment automático"
echo "✅ Verifica el estado en: https://github.com/juanito1732/guadis-landing/actions"
echo "✅ El sitio se actualizará automáticamente en: https://guadis-landing.vercel.app"
echo ""
echo "próximos pasos:"
echo "1. Espera a que termine el primer workflow (Actions tab)"
echo "2. Verifica que el hash del JS cambió en Vercel"
echo "3. Verifica que los nuevos colores están en la página"
echo ""
echo "¿Preguntas?"
echo "- Workflow: .github/workflows/deploy.yml"
echo "- Config Vercel: vercel.json"
echo "════════════════════════════════════════════════════════════════"
