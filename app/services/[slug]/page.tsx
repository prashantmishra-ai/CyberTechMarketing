import { getServiceBySlug, getAllServices } from '@/lib/queries';
import { urlFor } from '@/lib/sanity';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import Link from 'next/link';

export async function generateStaticParams() {
  const services = await getAllServices();
  return services.map((service) => ({
    slug: service.slug.current,
  }));
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-20 page-top-red-gradient">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20 relative z-10">
          <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-sm font-bold rounded-full mb-6 border border-white/30">
            {service.category}
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">{service.title}</h1>
          <p className="text-xl md:text-2xl text-red-50 max-w-3xl mx-auto leading-relaxed">{service.description}</p>
          
          {service.cardTag && service.cardMetric && (
            <div className="flex flex-wrap justify-center gap-6 mt-12">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-4">
                <div className="text-white/80 text-sm font-semibold mb-1">Service Type</div>
                <div className="text-white text-xl font-bold">{service.cardTag}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-4">
                <div className="text-white/80 text-sm font-semibold mb-1">Average Results</div>
                <div className="text-white text-xl font-bold">{service.cardMetric}</div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Full Description */}
      {service.fullDescription && (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">What We Offer</h2>
            <div className="prose prose-lg prose-red max-w-none text-gray-700 leading-relaxed text-lg">
              <PortableText value={service.fullDescription} />
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      {service.features && service.features.length > 0 && (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-center">Key Features & Capabilities</h2>
            <p className="text-center text-gray-600 text-lg mb-16 max-w-3xl mx-auto">
              Our comprehensive {service.title.toLowerCase()} services include everything you need to succeed in today's digital landscape.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.features.map((feature, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Why Choose Our {service.title} Services?</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                We combine industry expertise, cutting-edge tools, and proven strategies to deliver measurable results for your business. Our team is dedicated to your success.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <svg className="w-4 h-4 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 mb-1">Data-Driven Approach</div>
                    <div className="text-gray-600">Every decision backed by analytics and performance metrics</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <svg className="w-4 h-4 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 mb-1">Transparent Reporting</div>
                    <div className="text-gray-600">Clear, detailed reports showing exactly what we're doing and the results</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <svg className="w-4 h-4 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 mb-1">Dedicated Support</div>
                    <div className="text-gray-600">Your success is our priority with responsive, expert support</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <svg className="w-4 h-4 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 mb-1">Proven Track Record</div>
                    <div className="text-gray-600">Years of experience delivering results for businesses like yours</div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-3xl p-12 border border-red-200">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Ready to Get Started?</h3>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Let's discuss how our {service.title.toLowerCase()} services can help you achieve your business goals. Schedule a free consultation today.
              </p>
              <Link
                href="/contact"
                className="inline-block w-full text-center px-8 py-4 bg-red-600 text-white rounded-xl font-bold hover:bg-red-700 transition-colors shadow-lg"
              >
                Schedule Free Consultation
              </Link>
              <div className="mt-6 pt-6 border-t border-red-200">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <svg className="w-5 h-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span>No commitment required • Free strategy session</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="page-top-red-gradient py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Transform Your Business Today</h2>
          <p className="text-red-100 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Join hundreds of successful businesses that have accelerated their growth with our {service.title.toLowerCase()} services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-white text-red-600 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-xl text-lg"
            >
              Get Started Now
            </Link>
            <Link
              href="/pricing"
              className="inline-block px-10 py-4 bg-red-700 text-white rounded-xl font-bold hover:bg-red-800 transition-colors border-2 border-white/20 text-lg"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
