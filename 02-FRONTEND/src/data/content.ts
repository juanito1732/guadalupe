/**
 * CONTENIDO CENTRALIZADO - ESTUDIO JURÍDICO GUADALUPE
 *
 * Este archivo contiene TODOS los textos de la página web.
 * Para cambiar cualquier texto, editá este archivo.
 *
 * INSTRUCCIONES:
 * 1. Buscá la sección que querés modificar (hero, about, services, etc.)
 * 2. Editá el texto directamente
 * 3. Guardá el archivo
 * 4. Los cambios se reflejarán automáticamente en la web
 */

export const content = {
  // ============================================
  // SECCIÓN HERO (Portada principal)
  // ============================================
  hero: {
    subtitle: 'Asesoría Jurídica Profesional',
    title: 'Tu Abogada de Confianza',
    description: 'Con 20+ años de experiencia resolviendo casos de familia, sucesiones y amparos de salud. Profesionalismo, integridad y resultados.',
    ctaButton: 'Solicita tu consulta',
    ctaUrl: 'https://wa.me/542266481512?text=Hola,%20quisiera%20solicitar%20una%20consulta',
  },

  // ============================================
  // SECCIÓN ABOUT (Sobre Nosotros)
  // ============================================
  about: {
    title: 'Sobre Nuestro Estudio',
    description: 'Durante más de 20 años hemos ayudado a personas en todo el país a resolver sus problemas de familia, sucesiones y amparos de salud.',

    features: [
      {
        title: '20+ Años de Experiencia',
        description: 'Desde 2004 brindamos asesoramiento y patrocinio jurídico integral en todas nuestras áreas de especialización.',
      },
      {
        title: 'Especialización Integral',
        description: 'Especialistas en familia, civil y amparos de salud. Desde investigación hasta sentencia, cubrimos todo el proceso.',
      },
      {
        title: 'Confidencialidad Garantizada',
        description: 'Protegemos tus datos personales con total discreción. Tu privacidad es nuestra prioridad.',
      },
    ],
  },

  // ============================================
  // SECCIÓN SERVICES (Servicios)
  // ============================================
  services: {
    title: 'Nuestros Servicios',
    description: 'Ofrecemos un amplio espectro de servicios jurídicos diseñados para cubrir todas tus necesidades legales.',

    list: [
      {
        id: 'derecho-familia',
        title: 'Derecho de Familia',
        description: 'Asesoramiento integral en divorcios, alimentos, tenencia y custodias con soluciones personalizadas.',
        iconType: 'family',
        features: [
          'Divorcios contenciosos y consensuales',
          'Acuerdos familiares',
          'Tenencia y custodia',
          'Cuota de alimentos',
        ],
      },
      {
        id: 'sucesiones',
        title: 'Sucesiones y Herencias',
        description: 'Gestión completa de procesos sucesorios y distribución equitativa de bienes.',
        iconType: 'inheritance',
        features: [
          'Tramitación sucesoria',
          'Redacción de testamentos',
          'Distribución de bienes',
          'Impugnaciones testamentarias',
        ],
      },
      {
        id: 'amparos-salud',
        title: 'Amparos de Salud',
        description: 'Defensa de derechos de salud mediante acciones constitucionales efectivas.',
        iconType: 'health',
        features: [
          'Amparos de salud',
          'Acceso a medicamentos',
          'Tratamientos especializados',
          'Derechos constitucionales',
        ],
      },
      {
        id: 'derecho-civil',
        title: 'Derecho Civil General',
        description: 'Asesoría en materia civil, contratos, obligaciones y negociaciones comerciales.',
        iconType: 'contract',
        features: [
          'Redacción de contratos',
          'Responsabilidad civil',
          'Obligaciones comerciales',
          'Negociaciones y mediación',
        ],
      },
      {
        id: 'litigio',
        title: 'Litigio y Patrocinio',
        description: 'Patrocinio integral en procesos judiciales con estrategia legal efectiva.',
        iconType: 'litigation',
        features: [
          'Defensa en juicio',
          'Recursos y apelaciones',
          'Representación judicial',
          'Estrategia litigiosa',
        ],
      },
      {
        id: 'asesoramiento',
        title: 'Asesoramiento Legal',
        description: 'Consultoría preventiva y orientación legal estratégica para tu tranquilidad.',
        iconType: 'consulting',
        features: [
          'Consultoría preventiva',
          'Análisis legal profundo',
          'Estrategia jurídica',
          'Asesoramiento empresarial',
        ],
      },
    ],
  },

  // ============================================
  // SECCIÓN TESTIMONIALS (Testimonios)
  // ============================================
  testimonials: {
    title: '¿Qué Dicen Nuestros Clientes?',
    description: 'Confían en nuestro profesionalismo y dedicación',

    // Widget de Google Reviews (Elfsight)
    widgetId: 'f38a15d2-c6b2-425c-9e61-d33f4eed8705',
  },

  // ============================================
  // SECCIÓN CONTACT (Contacto)
  // ============================================
  contact: {
    title: 'Contactanos',
    description: 'Estamos aquí para ayudarte. Completá el formulario y te responderemos a la brevedad.',

    form: {
      namePlaceholder: 'Tu nombre',
      emailPlaceholder: 'Tu email',
      phonePlaceholder: 'Tu teléfono (opcional)',
      messagePlaceholder: 'Contanos brevemente tu consulta...',
      submitButton: 'Enviar Consulta',
      sendingButton: 'Enviando...',
      successMessage: '¡Gracias por tu mensaje! Te contactaremos pronto.',
      errorMessage: 'Hubo un error al enviar. Por favor, intenta nuevamente.',
    },

    errors: {
      nameRequired: 'Por favor ingresa tu nombre',
      emailRequired: 'Por favor ingresa tu email',
      emailInvalid: 'Por favor ingresa un email válido',
      messageRequired: 'Por favor ingresa tu mensaje',
      messageTooShort: 'El mensaje debe tener al menos 10 caracteres',
    },

    info: {
      title: 'Información de Contacto',
      addressLabel: 'Dirección',
      phoneLabel: 'Teléfono',
      emailLabel: 'Email',
      messageLabel: 'Mensaje',
      hoursLabel: 'Horario de Atención',
      whatsappButton: 'WhatsApp',
    },
  },

  // ============================================
  // FOOTER (Pie de página)
  // ============================================
  footer: {
    about: {
      title: 'Estudio Jurídico',
      description: 'Más de 20 años brindando asesoramiento legal integral con profesionalismo y dedicación.',
    },

    links: {
      title: 'Enlaces Rápidos',
      items: [
        { name: 'Inicio', href: '#hero' },
        { name: 'Sobre Nosotros', href: '#about' },
        { name: 'Servicios', href: '#services' },
        { name: 'Testimonios', href: '#testimonials' },
        { name: 'Contacto', href: '#contact' },
      ],
    },

    legal: {
      title: 'Legal',
      items: [
        { name: 'Política de Privacidad', href: '/privacidad' },
        { name: 'Términos y Condiciones', href: '/terminos' },
      ],
    },

    social: {
      title: 'Redes Sociales',
      followUs: 'Seguinos en',
    },

    copyright: {
      text: 'Todos los derechos reservados.',
      madeWith: 'Hecho con',
      by: 'por',
    },
  },

  // ============================================
  // NAVBAR (Barra de navegación)
  // ============================================
  navbar: {
    // La navegación ya está en config.ts
    // Se mantiene separada porque incluye lógica de rutas
    mobileMenuButton: 'Menú',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
  },

  // ============================================
  // SEO Y METADATA
  // ============================================
  seo: {
    defaultTitle: 'Estudio Jurídico Dra. María Guadalupe Juárez',
    titleTemplate: '%s | Estudio Jurídico Guadalupe',
    defaultDescription: 'Más de 20 años de experiencia en asesoría legal integral especializada en derecho de familia, sucesiones, amparos de salud y derecho de daños.',
    keywords: [
      'abogado familia',
      'abogado sucesiones',
      'amparos salud',
      'estudio jurídico',
      'abogado Balcarce',
      'divorcio',
      'tenencia',
      'alimentos',
      'herencias',
    ],
  },
}

// ============================================
// TIPOS TYPESCRIPT (para autocompletado)
// ============================================
export type Content = typeof content
