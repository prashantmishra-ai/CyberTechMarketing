import React from 'react';
import Link from 'next/link';

interface Service {
  _id: string;
  title: string;
  slug: { current: string };
  description: string;
  image?: any;
  icon?: string;
  category: string;
  cardTag?: string;
  cardMetric?: string;
}

const iconMap: Record<string, string> = {
  'Marketing': '📊',
  'Design': '🎨',
  'Advertising': '💰',
  'Content': '✍️',
  'Development': '💻',
};

const gradientMap: Record<string, string> = {
  'Marketing': 'from-red-600 to-orange-600',
  'Design': 'from-purple-600 to-pink-600',
  'Advertising': 'from-green-600 to-emerald-600',
  'Content': 'from-amber-600 to-orange-600',
  'Development': 'from-indigo-600 to-blue-600',
};

export default function ServiceCard({ service, index = 0 }: { service: Service; index?: number }) {
  const icon = iconMap[service.category] || '⚡';
  const gradient = gradientMap[service.category] || 'from-blue-600 to-cyan-600';

  return (
    <Link href={`/services/${service.slug.current}`}>
      <div className="group relative overflow-hidden rounded-3xl bg-white border-2 border-gray-200 hover:border-transparent shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full">
        {/* Gradient Background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
        
        {/* Content */}
        <div className="relative z-10 p-8">
          {/* Icon */}
          <div className="mb-6">
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
              {icon}
            </div>
          </div>

          {/* Tag */}
          <div className="mb-4">
            <span className="inline-block px-3 py-1 bg-gray-100 group-hover:bg-white/20 text-gray-700 group-hover:text-white text-xs font-bold rounded-full uppercase tracking-wider transition-colors duration-300">
              {service.cardTag || service.category}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-gray-900 group-hover:text-white mb-3 transition-colors duration-300">
            {service.title}
          </h3>

          {/* Metric */}
          {service.cardMetric && (
            <p className="text-sm font-bold text-gray-500 group-hover:text-white/80 mb-4 uppercase tracking-wider transition-colors duration-300">
              {service.cardMetric}
            </p>
          )}

          {/* Description */}
          <p className="text-gray-600 group-hover:text-white/90 mb-6 leading-relaxed transition-colors duration-300 line-clamp-3">
            {service.description}
          </p>

          {/* CTA */}
          <div className="flex items-center gap-2 text-red-600 group-hover:text-white font-bold transition-colors duration-300">
            <span>Learn More</span>
            <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </div>
        </div>

        {/* Decorative Element */}
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-colors duration-300"></div>
      </div>
    </Link>
  );
}
