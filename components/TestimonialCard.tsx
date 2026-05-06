import React from 'react';

interface Testimonial {
  _id: string;
  content: string;
  authorName: string;
  authorRole: string;
  authorCompany: string;
  authorImage?: any;
  rating: number;
}

const colorSchemes = [
  { bg: 'from-red-50 to-orange-50', border: 'border-red-200', accent: 'bg-red-600', quote: 'text-red-500' },
  { bg: 'from-blue-50 to-cyan-50', border: 'border-blue-200', accent: 'bg-blue-600', quote: 'text-blue-500' },
  { bg: 'from-purple-50 to-pink-50', border: 'border-purple-200', accent: 'bg-purple-600', quote: 'text-purple-500' },
  { bg: 'from-green-50 to-emerald-50', border: 'border-green-200', accent: 'bg-green-600', quote: 'text-green-500' },
  { bg: 'from-amber-50 to-yellow-50', border: 'border-amber-200', accent: 'bg-amber-600', quote: 'text-amber-500' },
];

export default function TestimonialCard({ testimonial, index = 0 }: { testimonial: Testimonial; index?: number }) {
  const colors = colorSchemes[index % colorSchemes.length];
  
  return (
    <div className={`relative p-8 rounded-3xl bg-gradient-to-br ${colors.bg} border-2 ${colors.border} shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group`}>
      {/* Quote Icon */}
      <div className={`mb-6 ${colors.quote}`}>
        <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor" className="opacity-80">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
        </svg>
      </div>
      
      {/* Star Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(testimonial.rating || 5)].map((_, i) => (
          <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
          </svg>
        ))}
      </div>
      
      {/* Testimonial Text */}
      <p className="text-gray-800 mb-8 text-lg leading-relaxed font-medium">
        {testimonial.content}
      </p>
      
      {/* Author Info */}
      <div className="flex items-center gap-4 pt-6 border-t-2 border-white/50">
        <div className={`w-14 h-14 rounded-full ${colors.accent} flex items-center justify-center text-white font-bold text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
          {testimonial.authorName.charAt(0)}
        </div>
        <div>
          <h4 className="text-gray-900 font-bold text-lg">{testimonial.authorName}</h4>
          <p className="text-gray-600 text-sm font-medium">
            {testimonial.authorRole}
            {testimonial.authorCompany && ` • ${testimonial.authorCompany}`}
          </p>
        </div>
      </div>
    </div>
  );
}
