import Link from 'next/link';
import { getAllServices, type ServiceDocument } from '@/lib/queries';
import { defaultHomePageContent } from '@/lib/homePage';

const fallbackServices = [
    {
      title: "Digital Marketing",
      desc: "Comprehensive digital marketing strategies that drive measurable growth across all channels",
      tag: "FULL SERVICE",
      metric: "300% AVG GROWTH",
      href: "/services/digital-marketing",
      icon: "📊",
      gradient: "from-red-600 to-orange-600"
    },
    {
      title: "Graphic Design",
      desc: "Creative design solutions that capture attention and communicate your brand message effectively",
      tag: "CREATIVE",
      metric: "500+ DESIGNS",
      href: "/services/graphic-design",
      icon: "🎨",
      gradient: "from-purple-600 to-pink-600"
    },
    {
      title: "E-commerce Marketing",
      desc: "Specialized marketing strategies to increase online sales and grow your e-commerce business",
      tag: "E-COMMERCE",
      metric: "2.5X ROI",
      href: "/services/ecommerce-marketing",
      icon: "🛒",
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      title: "Pay Per Click",
      desc: "Data-driven PPC campaigns that maximize ROI and drive qualified traffic to your website",
      tag: "PAID ADS",
      metric: "45% LOWER CPA",
      href: "/services/pay-per-click",
      icon: "💰",
      gradient: "from-green-600 to-emerald-600"
    },
    {
      title: "Web Design",
      desc: "Modern, responsive websites that deliver exceptional user experiences and drive conversions",
      tag: "WEB DEVELOPMENT",
      metric: "95+ PAGESPEED",
      href: "/services/web-design",
      icon: "💻",
      gradient: "from-indigo-600 to-blue-600"
    },
    {
      title: "Content Writing",
      desc: "Engaging, SEO-optimized content that resonates with your audience and drives action",
      tag: "CONTENT",
      metric: "10K+ WORDS/MO",
      href: "/services/content-writing",
      icon: "✍️",
      gradient: "from-amber-600 to-orange-600"
    }
  ];

type ServiceCard = {
  title: string;
  desc: string;
  tag: string;
  metric: string;
  href: string;
  icon: string;
  gradient: string;
};

type ServicesProps = {
  title?: string;
  description?: string;
  services?: ServiceCard[];
};

const iconMap: Record<string, string> = {
  'digital-marketing': '📊',
  'graphic-design': '🎨',
  'ecommerce-marketing': '🛒',
  'pay-per-click': '💰',
  'web-design': '💻',
  'content-writing': '✍️',
};

const gradientMap: Record<number, string> = {
  0: 'from-red-600 to-orange-600',
  1: 'from-purple-600 to-pink-600',
  2: 'from-blue-600 to-cyan-600',
  3: 'from-green-600 to-emerald-600',
  4: 'from-indigo-600 to-blue-600',
  5: 'from-amber-600 to-orange-600',
};

function mapServiceToCard(service: ServiceDocument, index: number): ServiceCard | null {
  const slug = service.slug?.current;

  if (!slug || !service.title || !service.description) {
    return null;
  }

  return {
    title: service.title,
    desc: service.description,
    tag: service.cardTag || service.category || 'SERVICE',
    metric: service.cardMetric || 'EXPERT SOLUTIONS',
    href: `/services/${slug}`,
    icon: iconMap[slug] || '⚡',
    gradient: gradientMap[index % 6] || 'from-red-600 to-orange-600',
  };
}

export default async function Services({
  title = defaultHomePageContent.servicesTitle,
  description = defaultHomePageContent.servicesDescription,
  services,
}: ServicesProps) {
  const resolvedServices = services
    ? services
    : ((await getAllServices()).map((s, i) => mapServiceToCard(s, i)).filter(Boolean) as ServiceCard[]);

  const cards = resolvedServices.length > 0 ? resolvedServices : fallbackServices;

  return (
    <section id="services" className="py-32 bg-gradient-to-b from-white to-gray-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-red-100 rounded-full mb-6">
            <span className="text-red-700 font-bold text-sm uppercase tracking-wider">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            {title}
          </h2>
          <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((service, idx) => (
            <Link
              key={idx}
              href={service.href}
              className="group relative overflow-hidden rounded-3xl bg-white border-2 border-gray-200 hover:border-transparent shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              {/* Content */}
              <div className="relative z-10 p-8">
                {/* Icon */}
                <div className="mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                </div>

                {/* Tag */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-gray-100 group-hover:bg-white/20 text-gray-700 group-hover:text-white text-xs font-bold rounded-full uppercase tracking-wider transition-colors duration-300">
                    {service.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-white mb-3 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Metric */}
                <p className="text-sm font-bold text-gray-500 group-hover:text-white/80 mb-4 uppercase tracking-wider transition-colors duration-300">
                  {service.metric}
                </p>

                {/* Description */}
                <p className="text-gray-600 group-hover:text-white/90 mb-6 leading-relaxed transition-colors duration-300">
                  {service.desc}
                </p>

                {/* CTA */}
                <div className="flex items-center gap-2 text-red-600 group-hover:text-white font-bold transition-colors duration-300">
                  <span>Explore Service</span>
                  <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-colors duration-300"></div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 text-lg mb-6">Need a custom solution? We're here to help.</p>
          <Link 
            href="/contact" 
            className="inline-block px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white font-bold rounded-xl hover:shadow-xl hover:shadow-red-600/30 transition-all duration-300 hover:-translate-y-0.5"
          >
            Get Started Today
          </Link>
        </div>
      </div>
    </section>
  );
}
