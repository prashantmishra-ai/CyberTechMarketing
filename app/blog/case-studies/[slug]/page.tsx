import { getCaseStudyBySlug, getAllCaseStudies, CaseStudyDocument } from '@/lib/queries';
import { urlFor } from '@/lib/sanity';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import Link from 'next/link';

export async function generateStaticParams() {
  const caseStudies = await getAllCaseStudies();
  return caseStudies.map((study: CaseStudyDocument) => ({
    slug: study.slug.current,
  }));
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const caseStudy = await getCaseStudyBySlug(slug);

  if (!caseStudy) {
    return <div>Case study not found</div>;
  }

  return (
    <main className="bg-white">
      {/* Hero Section */}
      {caseStudy.image && (
        <section className="relative h-96 overflow-hidden">
          <Image
            src={urlFor(caseStudy.image).url()}
            alt={caseStudy.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl mx-auto px-4">
              <p className="text-red-400 font-bold mb-2">{caseStudy.industry}</p>
              <h1 className="text-5xl font-bold mb-4">{caseStudy.title}</h1>
              <p className="text-xl">Client: {caseStudy.clientName}</p>
            </div>
          </div>
        </section>
      )}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Challenge Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
          <p className="text-lg text-gray-700 mb-4">{caseStudy.challenge}</p>
        </section>

        {/* Solution Section */}
        {caseStudy.solution && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Solution</h2>
            <div className="prose prose-lg max-w-none">
              <PortableText value={caseStudy.solution} />
            </div>
          </section>
        )}

        {/* Results Section */}
        {caseStudy.results && caseStudy.results.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Results Achieved</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {caseStudy.results.map((result, idx) => (
                <div key={idx} className="bg-gradient-to-br from-red-50 to-red-100 rounded-lg p-6 border border-red-200">
                  <p className="text-4xl font-bold text-red-600 mb-2">{result.value}</p>
                  <p className="font-bold text-gray-900 mb-2">{result.metric}</p>
                  <p className="text-gray-700 text-sm">{result.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Services Used */}
        {caseStudy.services && caseStudy.services.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Services Used</h2>
            <div className="flex flex-wrap gap-3">
              {caseStudy.services.map((service) => (
                <span key={service._id} className="px-4 py-2 bg-red-100 text-red-700 rounded-full font-semibold">
                  {service.title}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Testimonial */}
        {caseStudy.testimonialsLink && (
          <section className="bg-gray-50 rounded-lg p-8 mb-16 border-l-4 border-red-600">
            <blockquote>
              <p className="text-lg text-gray-700 italic mb-4">"{caseStudy.testimonialsLink.content}"</p>
              <footer className="text-gray-600">
                <p className="font-bold">{caseStudy.testimonialsLink.authorName}</p>
                <p className="text-sm">
                  {caseStudy.testimonialsLink.authorRole}
                  {caseStudy.testimonialsLink.authorCompany && ` at ${caseStudy.testimonialsLink.authorCompany}`}
                </p>
              </footer>
            </blockquote>
          </section>
        )}

        {/* CTA */}
        <section className="text-center">
          <h2 className="text-2xl font-bold mb-4">Ready for Similar Results?</h2>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-red-600 text-white rounded-lg font-bold hover:bg-red-700 transition-colors"
          >
            Let's Talk
          </Link>
        </section>
      </div>
    </main>
  );
}
