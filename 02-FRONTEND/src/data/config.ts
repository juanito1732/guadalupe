export const siteConfig = {
  name: 'Estudio Jurídico Dra. María Guadalupe Juárez',
  shortName: 'Guadalupe',
  description: 'Más de 20 años de experiencia en asesoría legal integral especializada en derecho de familia, sucesiones, amparos de salud y derecho de daños. Brindamos soluciones legales con enfoque personalizado y perspectiva de género para cada cliente.',
  url: 'https://estudiomgj.com.ar',
  ogImage: 'https://estudiomgj.com.ar/og-image.jpg',
  locale: 'es-AR',

  contact: {
    email: 'guadalupejuarez@estudiomgj.com.ar',
    phone: '+54 (2266) 481512',
    address: '13 N° 515, B7620 Balcarce',
    hours: 'Lun-Vie 9:00 a 18:00 hs | Consultas previas por correo',
  },

  social: {
    facebook: 'https://www.facebook.com/p/Estudio-Juridico-Mar%C3%ADa-Guadalupe-Ju%C3%A1rez-100069142612034/',
    instagram: 'https://www.instagram.com/estudiojuridicojuarez?igsh=MjQzZHNhYm43aXdq',
    tiktok: 'https://www.tiktok.com/@estudio.jurdico.juarez',
    linkedin: 'https://linkedin.com/company/estudio-juridico-guadalupe',
  },

  nav: [
    { name: 'Inicio', href: '#hero' },
    { name: 'Sobre Nosotros', href: '#about' },
    { name: 'Servicios', href: '#services' },
    { name: 'Testimonios', href: '#testimonials' },
    { name: 'Contacto', href: '#contact' },
  ],
}

export const generateJsonLd = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.svg`,
    description: siteConfig.description,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      telephone: siteConfig.contact.phone,
      email: siteConfig.contact.email,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '13 N° 515',
      addressLocality: 'Balcarce',
      addressRegion: 'Buenos Aires',
      postalCode: 'B7620',
      addressCountry: 'AR',
    },
    areaServed: 'AR',
    sameAs: [
      siteConfig.social.facebook,
      siteConfig.social.instagram,
      siteConfig.social.tiktok,
      siteConfig.social.linkedin,
    ],
  }
}
