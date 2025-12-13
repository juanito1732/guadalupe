import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        // 5-color palette system - Full implementation
        'palette-1': 'var(--color-1)',    // Lightest - backgrounds
        'palette-2': 'var(--color-2)',    // Light - secondary backgrounds
        'palette-3': 'var(--color-3)',    // Medium - cards, borders, subtle
        'palette-4': 'var(--color-4)',    // Dark - buttons, links, prominent
        'palette-5': 'var(--color-5)',    // Darkest - text, headers, strong
        // Short aliases for convenience
        'c1': 'var(--color-1)',
        'c2': 'var(--color-2)',
        'c3': 'var(--color-3)',
        'c4': 'var(--color-4)',
        'c5': 'var(--color-5)',
        // Legacy color mapping for backward compatibility
        'primary-dark': 'var(--primary-dark)',
        'primary': 'var(--primary)',
        'primary-light': 'var(--primary-light)',
        'primary-lighter': 'var(--primary-light)',
        'accent': 'var(--accent)',
        'accent-light': 'var(--accent)',
        'accent-lighter': 'var(--accent)',
        'dark': 'var(--primary-dark)',
        'dark-light': 'var(--primary)',
        'text-primary': 'var(--primary-dark)',
        'text-secondary': 'var(--primary)',
      },
      fontFamily: {
        'serif': ['"Playfair Display"', 'Georgia', 'serif'],
        'sans': ['"Inter"', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      fontSize: {
        'h1': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h2': ['2.25rem', { lineHeight: '1.2' }],
        'h3': ['1.5rem', { lineHeight: '1.3' }],
      },
      animation: {
        'scroll-down': 'scroll-down 2s infinite',
      },
      keyframes: {
        'scroll-down': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(10px)' },
        },
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 50%, var(--accent) 100%)',
        'gradient-accent': 'linear-gradient(135deg, var(--accent) 0%, var(--primary-light) 100%)',
      },
    },
  },
  plugins: [],
}
export default config
