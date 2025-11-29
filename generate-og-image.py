#!/usr/bin/env python3
"""
OG Image Generator - Crea og-image.jpg profesional para Guadis
Uso: python3 generate-og-image.py

Genera una imagen 1200x630 px lista para Open Graph
"""

from PIL import Image, ImageDraw, ImageFont
import os
from pathlib import Path

# Configuración
OUTPUT_PATH = Path(__file__).parent / "02-FRONTEND" / "public" / "og-image.jpg"
WIDTH = 1200
HEIGHT = 630
QUALITY = 95

# Paleta de colores
PALETTES = {
    'azules': {
        'bg_light': '#E8F5FD',
        'bg_dark': '#1B5B7E',
        'color_medium': '#689EC2',
        'text': '#1B5B7E'
    },
    'earth': {
        'bg_light': '#E9D2C0',
        'bg_dark': '#8D4424',
        'color_medium': '#B57549',
        'text': '#8D4424'
    },
    'rosa': {
        'bg_light': '#9DB8D6',
        'bg_dark': '#E963A7',
        'color_medium': '#F0A6C5',
        'text': '#E963A7'
    },
    'gris': {
        'bg_light': '#DABEB6',
        'bg_dark': '#7A8D9B',
        'color_medium': '#B2B9BF',
        'text': '#7A8D9B'
    }
}

def hex_to_rgb(hex_color):
    """Convierte hex a RGB"""
    hex_color = hex_color.lstrip('#')
    return tuple(int(hex_color[i:i+2], 16) for i in (0, 2, 4))

def create_og_image(palette_name='azules', company_name='Estudio Jurídico Dra. Guadalupe Juárez',
                    tagline='20+ años de experiencia en asesoría legal'):
    """
    Crea una og-image profesional

    Args:
        palette_name: 'azules', 'earth', 'rosa', o 'gris'
        company_name: Nombre del estudio
        tagline: Tagline o descripción corta
    """

    # Validar paleta
    if palette_name not in PALETTES:
        print(f"❌ Paleta '{palette_name}' no existe.")
        print(f"Usa: {', '.join(PALETTES.keys())}")
        return False

    palette = PALETTES[palette_name]

    # Crear imagen
    img = Image.new('RGB', (WIDTH, HEIGHT), hex_to_rgb(palette['bg_light']))
    draw = ImageDraw.Draw(img)

    # Dibujar gradiente simulado (rectángulo oscuro en lado derecho)
    for x in range(WIDTH // 2, WIDTH):
        ratio = (x - WIDTH // 2) / (WIDTH // 2)
        light_rgb = hex_to_rgb(palette['bg_light'])
        dark_rgb = hex_to_rgb(palette['bg_dark'])

        r = int(light_rgb[0] + (dark_rgb[0] - light_rgb[0]) * ratio)
        g = int(light_rgb[1] + (dark_rgb[1] - light_rgb[1]) * ratio)
        b = int(light_rgb[2] + (dark_rgb[2] - light_rgb[2]) * ratio)

        draw.line([(x, 0), (x, HEIGHT)], fill=(r, g, b))

    # Dibujar línea divisoria
    mid_x = WIDTH // 2
    draw.rectangle([(mid_x - 5, 0), (mid_x + 5, HEIGHT)],
                   fill=hex_to_rgb(palette['color_medium']))

    # Configurar fuentes (usar fuentes del sistema)
    try:
        # Intentar usar fuentes del sistema
        title_font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 72)
        tagline_font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 36)
        small_font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 24)
    except:
        # Fallback a fuente default
        print("⚠️ Usando fuente default (no se encontraron fuentes del sistema)")
        title_font = ImageFont.load_default()
        tagline_font = ImageFont.load_default()
        small_font = ImageFont.load_default()

    # Texto
    text_color = hex_to_rgb(palette['text'])

    # Título (Estudio Jurídico)
    title_y = 100
    title_bbox = draw.textbbox((0, 0), "Estudio Jurídico", font=title_font)
    title_width = title_bbox[2] - title_bbox[0]
    title_x = (WIDTH - title_width) // 2

    draw.text((title_x, title_y), "Estudio Jurídico", fill=text_color, font=title_font)

    # Nombre del estudio (más pequeño)
    name_y = title_y + 90
    name_font = ImageFont.load_default()
    try:
        name_font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 48)
    except:
        pass

    # Limitar nombre a 50 caracteres para que quepa
    display_name = company_name[:50] if len(company_name) > 50 else company_name
    name_bbox = draw.textbbox((0, 0), display_name, font=name_font)
    name_width = name_bbox[2] - name_bbox[0]
    name_x = (WIDTH - name_width) // 2

    draw.text((name_x, name_y), display_name, fill=text_color, font=name_font)

    # Tagline
    tagline_y = name_y + 70
    tagline_bbox = draw.textbbox((0, 0), tagline[:60], font=tagline_font)
    tagline_width = tagline_bbox[2] - tagline_bbox[0]
    tagline_x = (WIDTH - tagline_width) // 2

    display_tagline = tagline[:60]
    draw.text((tagline_x, tagline_y), display_tagline,
              fill=hex_to_rgb(palette['color_medium']), font=tagline_font)

    # Logo pequeño en esquina (texto)
    logo_text = "⚖️"
    draw.text((50, 50), logo_text, fill=hex_to_rgb(palette['color_medium']), font=small_font)

    # Crear directorio si no existe
    OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)

    # Guardar imagen
    img.save(str(OUTPUT_PATH), 'JPEG', quality=QUALITY)

    print(f"✅ og-image.jpg creado exitosamente!")
    print(f"   Ubicación: {OUTPUT_PATH}")
    print(f"   Dimensiones: {WIDTH}x{HEIGHT} px")
    print(f"   Paleta: {palette_name}")
    print(f"   Tamaño: {os.path.getsize(OUTPUT_PATH) / 1024:.1f} KB")

    return True

def main():
    """Función principal"""
    print("=" * 70)
    print("🎨 OG IMAGE GENERATOR - Estudio Jurídico Guadis")
    print("=" * 70)
    print()

    # Opciones de paleta
    print("Paletas disponibles:")
    for i, palette in enumerate(PALETTES.keys(), 1):
        print(f"  {i}. {palette.upper()}")
    print()

    # Valores por defecto
    palette = 'azules'
    company = 'Estudio Jurídico Dra. Guadalupe Juárez'
    tagline = '20+ años de experiencia en asesoría legal'

    # Crear imagen
    success = create_og_image(palette, company, tagline)

    if success:
        print()
        print("=" * 70)
        print("📝 Próximos pasos:")
        print("=" * 70)
        print()
        print("1. La imagen está lista en: 02-FRONTEND/public/og-image.jpg")
        print("2. Commit: git add -A && git commit -m 'add: og-image.jpg'")
        print("3. Push: git push origin main")
        print("4. Vercel desplegará automáticamente")
        print()

    return success

if __name__ == '__main__':
    main()
