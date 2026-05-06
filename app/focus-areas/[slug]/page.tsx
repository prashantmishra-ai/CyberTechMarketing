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
      <section className="relative overflow-hidden pt-20 pb-20 page-top-red-gradient">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20 relative z-10">
          <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-xs font-bold rounded-full mb-6 border border-white/30 uppercase tracking-wider">
            Industry Focus
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">{focusArea.title}</h1>
          <p className="text-xl md:text-2xl text-red-50 max-w-3xl mx-auto leading-relaxed">{focusArea.description}</p>
        </div>
      </section>

      {/* Full Description */}
      {focusArea.fullDescription && (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Industry Expertise</h2>
            <div className="prose prose-lg prose-red max-w-none text-gray-700 leading-relaxed text-lg">
              <PortableText value={focusArea.fullDescription} />
            </div>
          </div>
        </section>
      )}

      {/* Challenges & Solutions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">Challenges We Solve</h2>
          <p className="text-center text-gray-600 text-lg mb-16 max-w-3xl mx-auto">
            We understand the unique challenges facing {focusArea.title.toLowerCase()} businesses and have developed proven solutions to overcome them.
          </p>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Challenges */}
            {focusArea.challenges && focusArea.challenges.length > 0 && (
              <div className="bg-white rounded-3xl p-10 shadow-lg border border-gray-100">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Common Challenges</h3>
                </div>
                <ul className="space-y-4">
                  {focusArea.challenges.map((challenge, idx) => (
                    <li key={idx} className="flex gap-4 items-start">
                      <div className="w-6 h-6 bg-red-50 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-red-600 font-bold text-sm">{idx + 1}</span>
                      </div>
                      <span className="text-gray-700 leading-relaxed">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Solutions */}
            {focusArea.solutions && focusArea.solutions.length > 0 && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Our Solutions</h3>
                </div>
                {focusArea.solutions.map((solution, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 shadow-md border border-green-100 hover:shadow-lg transition-shadow">
                    <h4 className="font-bold text-lg mb-2 text-gray-900">{solution.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{solution.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">Why Partner With Us?</h2>
          <p className="text-center text-gray-600 text-lg mb-16 max-w-3xl mx-auto">
            We bring deep industry knowledge and proven marketing strategies specifically tailored for {focusArea.title.toLowerCase()} businesses.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Industry Expertise</h3>
              <p className="text-gray-600 leading-relaxed">
                Years of experience working specifically with {focusArea.title.toLowerCase()} businesses means we understand your unique needs.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Proven Results</h3>
              <p className="text-gray-600 leading-relaxed">
                Our strategies are backed by data and proven to deliver measurable growth for businesses in your industry.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Dedicated Support</h3>
              <p className="text-gray-600 leading-relaxed">
                Work with a dedicated team that understands your business goals and is committed to your success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      {focusArea.caseStudies && focusArea.caseStudies.length > 0 && (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-center">Success Stories</h2>
            <p className="text-center text-gray-600 text-lg mb-16 max-w-3xl mx-auto">
              See how we've helped businesses like yours achieve remarkable results.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {focusArea.caseStudies.map((caseStudy) => (
                <Link
                  key={caseStudy._id}
                  href={`/blog/case-studies/${caseStudy.slug.current}`}
                  className="group"
                >
                  <div className="bg-white border-l-4 border-red-600 rounded-2xl p-8 hover:shadow-xl transition-all cursor-pointer h-full">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-red-600 transition-colors">{caseStudy.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{caseStudy.challenge}</p>
                    <div className="flex items-center text-red-600 font-semibold group-hover:gap-3 gap-2 transition-all">
                      <span>Read Full Case Study</span>
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                      </svg>
                    </div>
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Transform Your {focusArea.title}?
          </h2>
          <p className="text-red-100 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Let's create a tailored marketing strategy that addresses your unique challenges and drives real results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-white text-red-600 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-xl text-lg"
            >
              Schedule Free Consultation
            </Link>
            <Link
              href="/services"
              className="inline-block px-10 py-4 bg-red-700 text-white rounded-xl font-bold hover:bg-red-800 transition-colors border-2 border-white/20 text-lg"
            >
              Explore Our Services
            </Link>
          </div>
          <div className="mt-8 flex items-center justify-center gap-3 text-red-100">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span>No commitment required • Free strategy session • Industry experts</span>
          </div>
        </div>
      </section>
    </main>
  );
}
