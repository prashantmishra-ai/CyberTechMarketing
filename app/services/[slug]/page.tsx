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
      <section className="relative overflow-hidden pt-20 pb-20">
        {service.image && (
          <div className="absolute inset-0 -z-10">
            <Image
              src={urlFor(service.image).url()}
              alt={service.title}
              fill
              className="object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white"></div>
          </div>
        )}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <span className="inline-block px-3 py-1 bg-red-100 text-red-700 text-xs font-bold rounded-full mb-6">
            {service.category}
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">{service.title}</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{service.description}</p>
        </div>
      </section>

      {/* Features Section */}
      {service.features && service.features.length > 0 && (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {service.features.map((feature, idx) => (
                <div key={idx} className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Full Description */}
      {service.fullDescription && (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <PortableText value={service.fullDescription} />
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="page-top-red-gradient py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-red-100 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your goals with {service.title}
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-white text-red-600 rounded-lg font-bold hover:bg-gray-100 transition-colors"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
