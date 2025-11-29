import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import { siteConfig, generateJsonLd } from '@/data/config'
import ThemeProvider from '@/components/ThemeProvider'
import PaletteSwitcher from '@/components/PaletteSwitcher'
import PaletteInitializer from '@/components/PaletteInitializer'

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-serif',
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Asesoría Legal Profesional`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  keywords: [
    'abogada',
    'estudio jurídico',
    'derecho de familia',
    'divorcios',
    'sucesiones',
    'amparos de salud',
    'Buenos Aires',
    'Argentina',
  ],
  authors: [
    {
      name: 'Dra. Guadalupe Juárez',
      url: siteConfig.url,
    },
  ],
  creator: 'Dra. Guadalupe Juárez',
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#1e3a5f" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateJsonLd()),
          }}
          suppressHydrationWarning
        />
      </head>
      <body className={`${playfair.variable} ${inter.variable} min-h-screen bg-white dark:bg-dark`}>
        <PaletteInitializer />
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <PaletteSwitcher />
      </body>
    </html>
  )
}
