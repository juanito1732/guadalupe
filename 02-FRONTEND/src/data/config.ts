export const siteConfig = {
  name: 'Estudio Jurídico Dra. María Guadalupe Juárez',
  shortName: 'Guadalupe',
  description: 'Más de 20 años de experiencia en asesoría legal integral especializada en derecho de familia, sucesiones, amparos de salud y derecho de daños. Brindamos soluciones legales con enfoque personalizado y perspectiva de género para cada cliente.',
  url: 'https://guadalupe.vercel.app',
  ogImage: 'https://guadalupe.vercel.app/og-image.jpg',
  locale: 'es-AR',

  contact: {
    email: 'guadalupejuarez@estudiomgj.com.ar',
    phone: '+54 (2266) 481512',
    address: 'Balcarce, Buenos Aires, Argentina (La Plata, Mar del Plata y Balcarce)',
    hours: 'Lun-Vie 9:00 a 18:00 hs | Consultas previas por correo',
  },

  social: {
    facebook: 'https://facebook.com/estudiolegal.guadalupe',
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
      streetAddress: 'Balcarce 50, Piso 3',
      addressLocality: 'Buenos Aires',
      postalCode: '1425',
      addressCountry: 'AR',
    },
    areaServed: 'AR',
    sameAs: [
      siteConfig.social.facebook,
      siteConfig.social.linkedin,
    ],
  }
}
