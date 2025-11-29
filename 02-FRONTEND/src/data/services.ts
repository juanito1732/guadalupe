export interface Service {
  id: string
  title: string
  description: string
  iconType: string
  features: string[]
}

export const services: Service[] = [
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
    description: 'Patrocinio integral en procesos judicales con estrategia legal efectiva.',
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
]
