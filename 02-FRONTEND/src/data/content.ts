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
    subtitle: 'Resolver, Reparar, Reconstruir y Prosperar',
    title: 'Tu Abogada de Confianza',
    description: 'En la vida cotidiana, estamos inmersos en todo tipo de situaciones regidas por el derecho. Cada acto que ejercemos por pequeño que parezca se encuentra regulado en nuestro ordenamiento legal, por eso es importante conocer tus derechos y obligaciones en detalle. Durante Más de 20 años, nuestro estudio de servicios jurídicos integrales ha estado ayudando a personas en todo el país, a resolver diferentes problemas relacionados con alimentos, cuidado personal, comunicación con los hijos, divorcios, liquidación de sociedad conyugal, compensaciones económicas, sucesiones, disposiciones de última voluntad, medidas clínicas anticipadas, pactos de convivencia, acuerdos prenupciales, daños ocasionados en las relaciones de familia, amparos de salud, entre otros.',
    ctaButton: 'Solicita tu consulta',
    ctaUrl: 'https://wa.me/542266481512?text=Hola,%20quisiera%20solicitar%20una%20consulta',
  },

  // ============================================
  // SECCIÓN ABOUT (Sobre Nosotros)
  // ============================================
  about: {
    title: 'Estamos Aquí Para Ayudarte',
    subtitle: 'RECORDÁ… NO PODÉS DEFENDER NI EXIGIR DERECHOS QUE NO CONOCÉS, POR ESO SIEMPRE CONSULTÁ A TU ABOGADA DE CONFIANZA',
    description: 'El estudio brinda asesoramiento y patrocinio jurídico integral desde el año 2004, habiendo comenzado en la ciudad de La Plata, para luego expandirnos hacia Mar del Plata y Balcarce, donde actualmente reside nuestra sede y desde donde trabajamos en toda la provincia de Buenos Aires y resto del país.\n\nProveemos servicios de consultoría, asesoramiento legal y defensa en juicio en casos de familia, sucesiones, daños y amparos de salud, contando con especialistas en cada área, cubriendo desde la investigación preliminar del caso, hasta la etapa final del mismo sea prejudicial, o judicial, siguiendo cada etapa con gran profesionalismo.\n\nNuestro objetivo es brindarte soluciones eficaces e innovadoras, tratando de otorgarte siempre los mayores beneficios y sobre todo tranquilidad y seguridad durante todo el proceso.\n\nPor una abogacía diferente.\n\nAbogamos por el respeto y cumplimiento de todos tus derechos sin vulnerar el derecho del otro, procuramos un acompañamiento permanente en la resolución de los conflictos legales, en un marco de contención, empatía y confianza que permite al cliente sentirse cómodo/a y seguro/a a la hora de buscar asesoramiento jurídico y confiar sus asuntos.\n\nCreemos que una abogacía diferente es posible, generando un ambiente de calidez y amabilidad que busca conectar con el otro sin rivalidades, evitando caer en los estereotipos de siempre que lo único que hacen es generar más conflicto y alejarnos de las soluciones.\n\nEntendemos que enfrentar una situación jurídica muchas veces es estresante y a veces angustiante, por eso trabajamos de manera interdisciplinaria para brindarte tranquilidad al mismo tiempo que encontramos la solución.\n\nTrabajamos en el respeto absoluto de los principios generales del derecho y su ferviente aplicación.\n\nContamos con un 92% de efectividad en la firma de convenios, donde se acuerdan y respetan los derechos de ambas partes, protegiendo además un fin social, que colabora en la construcción de una sociedad mejor y menos conflictiva.',

    features: [
      {
        title: '20+ Años de Experiencia',
        description: 'Desde 2004 brindamos asesoramiento y patrocinio jurídico integral en todas nuestras áreas de especialización.',
      },
      {
        title: 'Especialización Integral',
        description: 'Aspiramos a mantener con nuestros clientes una relación duradera y satisfactoria brindando un servicio de primer nivel, en el marco de la más absoluta discreción y dedicación. Contamos con especialistas altamente calificados en el manejo de negociaciones que nos permite obtener un altísimo grado de efectividad en etapa prejudicial, simplificando de esa manera los procesos y acelerando los resultados para que nuestros clientes, encuentren efectiva y satisfactoria solución en el menor tiempo posible.',
      },
      {
        title: 'Confidencialidad Garantizada',
        description: 'Uno de los principios rectores de nuestro estudio, es el secreto profesional, es por ello que ninguna información confidencial relacionada con los negocios de nuestros clientes y con los asuntos que se nos han confiado será develada por el Estudio.',
      },
    ],
  },

  // ============================================
  // SECCIÓN SERVICES (Servicios)
  // ============================================
  services: {
    title: 'Nuestros Servicios',
    description: 'Los abogados tenemos una única misión: Ayudar a las personas a defender sus derechos y hacerlos valer ante terceros, procurando la máxima justicia en cada caso. El abogado utiliza el conocimiento de la ley para obtener el cumplimiento de sus derechos, haciendo respetar a cada individuo.',

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
      description: 'Más de 20 años de experiencia en asesoría legal integral especializada en derecho de familia, sucesiones, amparos de salud y derecho de daños. Brindamos soluciones legales con enfoque personalizado y perspectiva de género para cada cliente.',
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
