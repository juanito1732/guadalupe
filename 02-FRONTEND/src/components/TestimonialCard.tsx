import { Testimonial } from '@/data/testimonials'

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="p-8 bg-c1 rounded-2xl shadow-lg border-2 border-c3 hover:shadow-xl transition-all duration-300 hover:border-c4">
      <p className="text-lg font-serif text-center text-c5 mb-8 leading-relaxed italic">
        &quot;{testimonial.quote}&quot;
      </p>

      <div className="flex flex-col items-center">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-c4 to-c5 flex items-center justify-center text-white text-lg font-bold mb-4 shadow-md">
          {testimonial.initials}
        </div>

        <h4 className="font-serif font-bold text-lg text-c5">
          {testimonial.name}
        </h4>
        <p className="text-c3 mb-4 text-sm font-medium">
          {testimonial.profession}
        </p>

        <div className="flex gap-1">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <svg key={i} className="w-5 h-5 text-c4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
            </svg>
          ))}
        </div>
      </div>
    </div>
  )
}
