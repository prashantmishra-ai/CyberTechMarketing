import { getFocusAreaBySlug, getAllFocusAreas } from '@/lib/queries';
import { urlFor } from '@/lib/sanity';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import Link from 'next/link';

export async function generateStaticParams() {
  const focusAreas = await getAllFocusAreas();
  return focusAreas.map((area) => ({
    slug: area.slug.current,
  }));
}

export default async function FocusAreaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const focusArea = await getFocusAreaBySlug(slug);

  if (!focusArea) {
    return <div>Focus area not found</div>;
  }

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-20">
        {focusArea.image && (
          <div className="absolute inset-0 -z-10">
            <Image
              src={urlFor(focusArea.image).url()}
              alt={focusArea.title}
              fill
              className="object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white"></div>
          </div>
        )}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">{focusArea.title}</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{focusArea.description}</p>
        </div>
      </section>

      {/* Full Description */}
      {focusArea.fullDescription && (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <PortableText value={focusArea.fullDescription} />
            </div>
          </div>
        </section>
      )}

      {/* Challenges & Solutions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Challenges */}
            {focusArea.challenges && focusArea.challenges.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold mb-8">Industry Challenges</h2>
                <ul className="space-y-4">
                  {focusArea.challenges.map((challenge, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="text-red-600 font-bold">✓</span>
                      <span className="text-gray-700">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Solutions */}
            {focusArea.solutions && focusArea.solutions.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold mb-8">Our Solutions</h2>
                <div className="space-y-4">
                  {focusArea.solutions.map((solution, idx) => (
                    <div key={idx} className="bg-white rounded-lg p-4 shadow-md">
                      <h3 className="font-bold text-lg mb-2">{solution.title}</h3>
                      <p className="text-gray-600 text-sm">{solution.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      {focusArea.caseStudies && focusArea.caseStudies.length > 0 && (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Case Studies</h2>
            <div className="space-y-8">
              {focusArea.caseStudies.map((caseStudy) => (
                <Link
                  key={caseStudy._id}
                  href={`/focus-areas/${slug}/case-studies/${caseStudy.slug.current}`}
                >
                  <div className="border-l-4 border-red-600 pl-6 py-4 hover:bg-gray-50 cursor-pointer rounded transition-colors">
                    <h3 className="text-xl font-bold mb-2">{caseStudy.title}</h3>
                    <p className="text-gray-600 mb-2">{caseStudy.challenge}</p>
                    <p className="text-sm text-red-600 font-semibold">Read Case Study →</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="page-top-red-gradient py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your {focusArea.title}?</h2>
          <p className="text-red-100 text-lg mb-8 max-w-2xl mx-auto">
            Let's create a tailored marketing strategy for your industry.
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
