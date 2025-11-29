export interface Testimonial {
  id: string
  name: string
  profession: string
  quote: string
  rating: number
  initials: string
}

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'Juan Martínez',
    profession: 'Contador',
    quote: 'Excelente atención profesional. Me ayudó a resolver mi caso de familia en forma rápida y eficiente. Muy recomendable.',
    rating: 5,
    initials: 'JM',
  },
  {
    id: 'testimonial-2',
    name: 'María González',
    profession: 'Docente',
    quote: 'Muy profesional y dedicada. Explicó cada paso del proceso con claridad. Quedé muy satisfecha con los resultados.',
    rating: 5,
    initials: 'MG',
  },
  {
    id: 'testimonial-3',
    name: 'Carlos Rodríguez',
    profession: 'Empresario',
    quote: 'Soluciones legales rápidas y confiables. Trabajar con ella ha sido un alivio en tiempos difíciles.',
    rating: 5,
    initials: 'CR',
  },
  {
    id: 'testimonial-4',
    name: 'Ana Fernández',
    profession: 'Abogada Colega',
    quote: 'Profesionalismo de primer nivel. Una abogada que realmente se dedica a sus clientes. Impecable.',
    rating: 5,
    initials: 'AF',
  },
]
